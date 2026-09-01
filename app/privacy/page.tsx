import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/page-elements";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for EKOSYS Corporation. How we collect, use, and protect your solar enquiry information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="section-shell pt-28 pb-12 sm:pt-32 sm:pb-16">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <article className="prose prose-slate max-w-4xl">
        <p className="eyebrow">Legal & Compliance</p>
        <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">Privacy Policy</h1>
        <p className="text-sm text-slate-500">Effective Date: August 30, 2026</p>

        <p className="mt-6 text-base leading-7 text-slate-600">
          At <strong>{site.legalName}</strong> (&ldquo;EKOSYS&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we respect your privacy and are committed to protecting the personal information you share with us through our website. This Privacy Policy describes our practices regarding information collection, usage, and protection.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-ink">1. Information We Collect</h2>
        <p className="text-slate-600">
          When you submit an enquiry through our contact forms or quote request popups, we may collect:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>Full Name</li>
          <li>Mobile / Phone Number</li>
          <li>Email Address (optional)</li>
          <li>City / District / Location in Bihar</li>
          <li>Enquiry Category (e.g. Rooftop Solar, Residential Solar, Commercial Solar, Subsidy, Maintenance)</li>
          <li>Specific requirement notes or questions you provide</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-ink">2. How We Use Your Information</h2>
        <p className="text-slate-600">
          We use your submitted details solely for direct business communication related to your solar inquiry, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>Contacting you via telephone, WhatsApp, or email to discuss your solar requirement.</li>
          <li>Scheduling on-site rooftop surveys and shadow assessments.</li>
          <li>Preparing customized techno-commercial proposals and Bill of Materials (BOM).</li>
          <li>Assisting with DISCOM net-metering applications and PM Surya Ghar subsidy coordination.</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-ink">3. Data Storage & Privacy Protection</h2>
        <p className="text-slate-600">
          We do not sell, rent, trade, or distribute your personal information to third-party telemarketers or advertisers. Submitted information is transmitted securely over HTTPS encryption to our internal customer relationship database and authorized engineering team. We do not permanently store personal form data in your browser cookies or local storage.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-ink">4. Your Data Rights & Contact</h2>
        <p className="text-slate-600">
          You may request access to, correction of, or deletion of your contact information from our records at any time by contacting our Hajipur office:
        </p>
        <p className="mt-4 rounded-2xl bg-slate-50 p-5 text-sm text-slate-700">
          <strong>{site.legalName}</strong><br />
          {site.address}<br />
          Phone: {site.phoneDisplay}<br />
          Email: {site.email}
        </p>

        <p className="mt-8">
          Have a question about solar or this policy? <Link href="/contact" className="font-bold text-ocean-700 underline">Contact our team</Link>.
        </p>
      </article>
    </div>
  );
}
