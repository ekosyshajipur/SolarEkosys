import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/page-elements";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Website terms of use for EKOSYS Corporation. Advisory notices regarding solar estimates, subsidy eligibility, and technical feasibility.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="section-shell pt-28 pb-12 sm:pt-32 sm:pb-16">
      <Breadcrumbs items={[{ label: "Terms of Use" }]} />
      <article className="prose prose-slate max-w-4xl">
        <p className="eyebrow">Legal & Advisory</p>
        <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">Terms of Use</h1>
        <p className="text-sm text-slate-500">Effective Date: August 30, 2026</p>

        <p className="mt-6 text-base leading-7 text-slate-600">
          Welcome to the official website of <strong>{site.legalName}</strong>. By accessing or using this website, you acknowledge and agree to the following terms and informational advisories.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-ink">1. Informational & Estimation Nature of Content</h2>
        <p className="text-slate-600">
          All solar savings calculations, unit generation figures (e.g. 4.0 to 4.5 kWh/kW/day), payback period models, and component specifications published on this website are provided for educational and estimation purposes based on typical climatic conditions in Bihar.
        </p>
        <p className="text-slate-600">
          Actual solar power plant generation, financial savings, and installation costs are contingent upon individual site conditions, including shadow obstructions, roof structural integrity, seasonal weather patterns, sanctioned electrical load, and specific component choices finalized in a formal engineering contract.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-ink">2. Government Subsidy & DISCOM Disclaimers</h2>
        <p className="text-slate-600">
          Central Government subsidies under the <em>PM Surya Ghar: Muft Bijli Yojana</em> or state renewable programs are subject to official government guidelines, consumer eligibility, transformer capacity limits, and statutory approvals by distribution companies (NBPDCL / SBPDCL).
        </p>
        <p className="text-slate-600">
          While EKOSYS facilitates application processing, portal documentation, and liaisoning, final subsidy approval and Direct Benefit Transfer (DBT) disbursement are executed solely by government authorities. EKOSYS does not guarantee fixed monetary subsidies without official DISCOM and portal verification.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-ink">3. Intellectual Property & Brand Assets</h2>
        <p className="text-slate-600">
          The EKOSYS name, brand logo, website graphics, technical blog articles, and service documentation are the intellectual property of {site.legalName} and may not be reproduced without prior written permission.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-ink">4. Contact & Jurisdiction</h2>
        <p className="text-slate-600">
          For any questions concerning these terms or formal EPC contract provisions, please contact our registered office in Hajipur, Bihar:
        </p>
        <p className="mt-4 rounded-2xl bg-slate-50 p-5 text-sm text-slate-700">
          <strong>{site.legalName}</strong><br />
          {site.address}<br />
          Phone: {site.phoneDisplay}<br />
          Email: {site.email}
        </p>

        <p className="mt-8">
          Have questions about our terms, contracts, or engineering specifications?{" "}
          <Link href="/contact" className="font-bold text-ocean-700 underline">
            Contact our advisory team
          </Link>.
        </p>
      </article>
    </div>
  );
}
