"use client";

import { LoaderCircle, Send, ShieldCheck } from "lucide-react";
import { FormEvent, useRef, useState } from "react";

const enquiryTypes = ["Solar Products", "Rooftop Solar", "Residential Solar", "Industrial Solar", "Solar Installation", "Solar Maintenance", "Solar Subsidy", "General Enquiry", "Other"];
type Status = "idle" | "loading" | "success" | "error";

export function ContactForm({ compact = false, onSuccess }: { compact?: boolean; onSuccess?: () => void }) {
  const startedAt = useRef(Date.now());
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    const nextErrors: Record<string, string> = {};
    if (!String(values.name || "").trim()) nextErrors.name = "Please enter your name.";
    if (!/^\+?[0-9\s-]{10,16}$/.test(String(values.phone || "").trim())) nextErrors.phone = "Enter a valid 10-digit phone number.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(values.email))) nextErrors.email = "Enter a valid email address.";
    if (!String(values.enquiryType || "").trim()) nextErrors.enquiryType = "Choose an enquiry type.";
    if (Object.keys(nextErrors).length) { setErrors(nextErrors); return; }
    setErrors({}); setStatus("loading"); setMessage("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...values, startedAt: startedAt.current }) });
      const body = await response.json() as { message?: string };
      if (!response.ok) throw new Error(body.message || "We could not send your request.");
      setStatus("success"); setMessage(body.message || "Thank you. Our solar team will contact you shortly."); form.reset(); onSuccess?.();
    } catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : "Something went wrong. Please call us instead."); }
  }
  const field = "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-ocean-500 focus:ring-4 focus:ring-ocean-500/10";
  return <form noValidate onSubmit={submit} className={`rounded-3xl border border-slate-200 bg-white p-5 shadow-card sm:p-7 ${compact ? "" : ""}`}>
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="text-sm font-bold text-ink">Name <span className="text-ocean-700">*</span><input name="name" autoComplete="name" className={field} placeholder="Your full name" aria-invalid={!!errors.name} />{errors.name && <span className="mt-1 block text-xs text-red-600">{errors.name}</span>}</label>
      <label className="text-sm font-bold text-ink">Phone <span className="text-ocean-700">*</span><input name="phone" inputMode="tel" autoComplete="tel" className={field} placeholder="Your mobile number" aria-invalid={!!errors.phone} />{errors.phone && <span className="mt-1 block text-xs text-red-600">{errors.phone}</span>}</label>
      <label className="text-sm font-bold text-ink">Email <span className="font-medium text-slate-400">(optional)</span><input name="email" type="email" autoComplete="email" className={field} placeholder="you@example.com" aria-invalid={!!errors.email} />{errors.email && <span className="mt-1 block text-xs text-red-600">{errors.email}</span>}</label>
      <label className="text-sm font-bold text-ink">City <input name="city" autoComplete="address-level2" className={field} placeholder="Hajipur, Patna..." /></label>
      <label className="text-sm font-bold text-ink sm:col-span-2">Enquiry type <span className="text-ocean-700">*</span><select name="enquiryType" defaultValue="" className={field} aria-invalid={!!errors.enquiryType}><option value="" disabled>Select a requirement</option>{enquiryTypes.map((item) => <option key={item} value={item}>{item}</option>)}</select>{errors.enquiryType && <span className="mt-1 block text-xs text-red-600">{errors.enquiryType}</span>}</label>
      <label className="text-sm font-bold text-ink sm:col-span-2">Your requirement <textarea name="requirement" rows={compact ? 3 : 4} className={`${field} resize-y`} placeholder="Tell us a little about your property or solar requirement." /></label>
      <div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    </div>
    {status !== "idle" && <p role={status === "error" ? "alert" : "status"} className={`mt-4 rounded-xl px-4 py-3 text-sm font-semibold ${status === "success" ? "bg-solar-50 text-solar-600" : status === "error" ? "bg-red-50 text-red-700" : "bg-slate-50 text-slate-700"}`}>{message || "Sending your request…"}</p>}
    <button disabled={status === "loading"} className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-solar-400 px-5 py-3 text-sm font-extrabold text-ink transition hover:bg-solar-100 disabled:cursor-wait disabled:opacity-70" type="submit">{status === "loading" ? <LoaderCircle className="size-4 animate-spin" /> : <Send className="size-4" />}{status === "loading" ? "Sending…" : "Request a callback"}</button>
    <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-slate-500"><ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-ocean-700" />We use your details only to respond to this enquiry. No personal details are stored in your browser.</p>
  </form>;
}
