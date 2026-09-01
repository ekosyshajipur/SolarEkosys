import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendLeadConfirmationEmail } from "@/lib/email";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().regex(/^\+?[0-9\s-]{10,16}$/),
  email: z.union([z.literal(""), z.string().trim().email().max(254)]).optional(),
  city: z.string().trim().max(100).optional(),
  enquiryType: z.enum([
    "Solar Products",
    "Rooftop Solar",
    "Residential Solar",
    "Industrial Solar",
    "Solar Installation",
    "Solar Maintenance",
    "Solar Subsidy",
    "General Enquiry",
    "Other",
  ]),
  requirement: z.string().trim().max(2000).optional(),
  website: z.string().max(0).optional(),
  startedAt: z.number().int().positive(),
  turnstileToken: z.string().max(4096).optional(),
});

const requestLog = new Map<string, { count: number; resetAt: number }>();
function rateLimited(key: string) {
  const now = Date.now();
  const record = requestLog.get(key);
  if (!record || record.resetAt < now) {
    requestLog.set(key, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  record.count += 1;
  return record.count > 5;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { message: "Too many requests. Please wait a minute or call us." },
      { status: 429 }
    );
  }

  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request format." }, { status: 400 });
  }

  const parsed = schema.safeParse(input);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please check the required form fields and try again." },
      { status: 422 }
    );
  }

  const lead = parsed.data;
  if (Date.now() - lead.startedAt < 1500) {
    return NextResponse.json(
      { message: "Please take a moment to complete the form." },
      { status: 400 }
    );
  }

  // Honeypot check
  if (lead.website) {
    return NextResponse.json({ message: "Thank you." });
  }

  // Optional Turnstile Cloudflare captcha check
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret && process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
    if (!lead.turnstileToken) {
      return NextResponse.json(
        { message: "Please complete the spam check and try again." },
        { status: 400 }
      );
    }
    const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: turnstileSecret,
        response: lead.turnstileToken,
        remoteip: ip,
      }),
    });
    const result = (await verification.json()) as { success?: boolean };
    if (!result.success) {
      return NextResponse.json(
        { message: "Spam check failed. Please try again or call us directly." },
        { status: 400 }
      );
    }
  }

  const submittedAt = new Date().toISOString();
  const payload = {
    name: lead.name,
    phone: lead.phone,
    email: lead.email || "",
    city: lead.city || "",
    enquiryType: lead.enquiryType,
    requirement: lead.requirement || "",
    source: "ekosys-website",
    submittedAt,
  };

  // 1. Send Congratulations / Confirmation email to customer if email is provided
  if (lead.email) {
    try {
      await sendLeadConfirmationEmail({
        name: lead.name,
        phone: lead.phone,
        email: lead.email,
        city: lead.city,
        enquiryType: lead.enquiryType,
        requirement: lead.requirement,
        submittedAt,
      });
    } catch (err) {
      console.warn("[Lead Confirmation Email]:", err);
    }
  }

  // 2. Forward lead to Google Sheets webhook if configured
  const endpoint = process.env.GOOGLE_SHEETS_API_URL || process.env.GOOGLE_SHEET_URL;
  if (endpoint) {
    try {
      const upstream = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.GOOGLE_SHEETS_API_TOKEN
            ? { "X-EKOSYS-Webhook-Token": process.env.GOOGLE_SHEETS_API_TOKEN }
            : {}),
        },
        body: JSON.stringify(payload),
        cache: "no-store",
        signal: AbortSignal.timeout(10_000),
      });

      if (!upstream.ok) {
        console.warn(`[Google Sheets Webhook] Upstream returned status: ${upstream.status}`);
      }
    } catch (err) {
      console.warn("[Google Sheets Webhook Error]:", err);
    }
  } else {
    console.log("[Lead Captured]:", payload);
  }

  return NextResponse.json({
    message: "Thank you! Your enquiry has been received. We have sent a confirmation to your email, and our solar team will contact you shortly.",
  });
}

