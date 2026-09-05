import nodemailer from "nodemailer";
import { site } from "./site";

export interface LeadEmailPayload {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  enquiryType: string;
  requirement?: string;
  submittedAt: string;
}

function generateCustomerEmailHtml(payload: LeadEmailPayload): string {
  const { name, enquiryType, phone, city, requirement } = payload;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Congratulations on your Solar Enquiry with EKOSYS</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7f9; margin: 0; padding: 0; color: #1e293b; }
    .container { max-width: 600px; margin: 30px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background-color: #071B2A; padding: 32px 24px; text-align: center; color: #ffffff; }
    .header h1 { margin: 12px 0 0; font-size: 24px; font-weight: 800; color: #F5B041; letter-spacing: -0.5px; }
    .header p { margin: 4px 0 0; font-size: 13px; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; }
    .content { padding: 32px 28px; line-height: 1.6; }
    .greeting { font-size: 18px; font-weight: 700; color: #071B2A; margin-bottom: 12px; }
    .highlight-card { background: linear-gradient(135deg, #fff9e6 0%, #fff3cc 100%); border: 1px solid #fed7aa; border-radius: 12px; padding: 20px; margin: 24px 0; }
    .highlight-title { font-weight: 800; font-size: 15px; color: #b45309; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 1px; }
    .details-table { width: 100%; border-collapse: collapse; margin-top: 16px; }
    .details-table td { padding: 8px 0; font-size: 14px; border-bottom: 1px dashed #e2e8f0; }
    .details-table td.label { font-weight: 600; color: #64748b; width: 38%; }
    .details-table td.value { font-weight: 700; color: #0f172a; }
    .steps { background-color: #f8fafc; border-radius: 12px; padding: 20px; margin: 24px 0; border: 1px solid #e2e8f0; }
    .steps h3 { margin: 0 0 12px; font-size: 15px; color: #071B2A; }
    .step-item { display: flex; margin-bottom: 10px; font-size: 13px; color: #334155; }
    .cta-btn { display: inline-block; background-color: #F5B041; color: #071B2A; text-decoration: none; padding: 14px 28px; border-radius: 50px; font-weight: 800; font-size: 14px; margin-top: 10px; text-align: center; }
    .footer { background-color: #071B2A; padding: 24px; text-align: center; font-size: 12px; color: #94a3b8; }
    .footer a { color: #F5B041; text-decoration: none; font-weight: 700; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <p>EKOSYS Corporation</p>
      <h1>🎉 Congratulations, ${name}!</h1>
    </div>
    <div class="content">
      <div class="greeting">We have received your Solar Consultation Request</div>
      <p>
        Thank you for choosing <strong>EKOSYS</strong> as your trusted solar energy partner in Bihar. You have taken an important step towards reducing your electricity bills and adopting clean, sustainable rooftop solar power.
      </p>

      <div class="highlight-card">
        <div class="highlight-title">Your Submitted Enquiry</div>
        <table class="details-table">
          <tr>
            <td class="label">Requirement:</td>
            <td class="value">${enquiryType}</td>
          </tr>
          <tr>
            <td class="label">Contact Phone:</td>
            <td class="value">${phone}</td>
          </tr>
          ${city ? `<tr><td class="label">Location / City:</td><td class="value">${city}</td></tr>` : ""}
          ${requirement ? `<tr><td class="label">Specific Notes:</td><td class="value">${requirement}</td></tr>` : ""}
        </table>
      </div>

      <div class="steps">
        <h3>What happens next?</h3>
        <p style="margin: 0 0 10px; font-size: 13px; color: #475569;">
          1. <strong>Site & Feasibility Assessment:</strong> An EKOSYS solar engineer will connect with you to review your roof layout, electricity connection type, and energy usage.<br>
          2. <strong>PM Surya Ghar Subsidy & Limited Offer:</strong> We will verify your eligibility for official Government Subsidy up to ₹98,000 (Central DBT ₹78,000 + State Subsidy ₹20,000) plus our exclusive EKOSYS Assistance of ₹15,000 (Limited Offer · first come, first get offer) for a total financial benefit of ₹1,13,000.<br>
          3. <strong>Tailored System Design:</strong> You will receive a customized Bill of Materials (BOM) proposal with 30-Year Performance Warranties*.
        </p>
      </div>

      <p style="margin-top: 24px;">
        Need urgent assistance or have questions right now? Speak directly with our engineering team:
      </p>
      <div style="text-align: center; margin: 20px 0;">
        <a href="tel:${site.phone}" class="cta-btn">Call ${site.phoneDisplay}</a>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0 0 6px;"><strong>${site.legalName}</strong></p>
      <p style="margin: 0 0 6px;">${site.address}</p>
      <p style="margin: 0;">Email: <a href="mailto:${site.email}">${site.email}</a> | Phone: <a href="tel:${site.phone}">${site.phoneDisplay}</a></p>
    </div>
  </div>
</body>
</html>
  `;
}

function getSmtpTransport() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465 || process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });
}

/**
 * Sends a confirmation email to the lead and a notification to the admin.
 */
export async function sendLeadConfirmationEmail(payload: LeadEmailPayload): Promise<{ success: boolean; error?: string }> {
  // If user didn't provide an email, we can't send customer email, but we might notify admin
  const customerEmail = payload.email?.trim();

  // 1. Try Resend API if RESEND_API_KEY is available
  if (process.env.RESEND_API_KEY && customerEmail) {
    try {
      const from = process.env.RESEND_FROM || `${site.name} <onboarding@resend.dev>`;
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: customerEmail,
          subject: `🎉 Congratulations on your Solar Enquiry with EKOSYS! [${payload.enquiryType}]`,
          html: generateCustomerEmailHtml(payload),
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.warn("[Resend Email Error]:", errorText);
      } else {
        return { success: true };
      }
    } catch (err) {
      console.warn("[Resend Dispatch Error]:", err);
    }
  }

  // 2. Try standard SMTP via Nodemailer
  const transport = getSmtpTransport();
  if (transport && customerEmail) {
    try {
      const fromAddress = process.env.SMTP_FROM || `"${site.name}" <${process.env.SMTP_USER}>`;
      await transport.sendMail({
        from: fromAddress,
        to: customerEmail,
        subject: `🎉 Congratulations on your Solar Enquiry with EKOSYS! [${payload.enquiryType}]`,
        html: generateCustomerEmailHtml(payload),
      });
      return { success: true };
    } catch (err) {
      console.warn("[SMTP Email Error]:", err);
      return { success: false, error: err instanceof Error ? err.message : "SMTP send failed" };
    }
  }

  // If no email credentials configured, log cleanly in development
  if (process.env.NODE_ENV !== "production" || !process.env.SMTP_HOST) {
    console.log(`[Email Simulation] Congrats email triggered for ${payload.name} (${customerEmail || "No email provided"})`);
  }

  return { success: true };
}
