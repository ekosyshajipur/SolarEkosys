import type { Metadata } from "next";
import Image from "next/image";
import {
  AlertTriangle,
  CheckCircle2,
  FileText,
  Sparkles,
} from "lucide-react";
import { Breadcrumbs, CtaBand, FaqList } from "@/components/page-elements";
import { Reveal } from "@/components/reveal";
import { SolarCalculator } from "@/components/solar-calculator";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { subsidySlabsTable } from "@/lib/content";

export const metadata: Metadata = {
  title: "PM Surya Ghar Solar Subsidy in Bihar · Complete 2026 Guide",
  description:
    "Understand PM Surya Ghar Muft Bijli Yojana subsidy slabs (up to ₹78,000 + ₹20,000 Extra Subsidy), eligibility criteria, required documents, and DISCOM net metering with EKOSYS in Hajipur, Bihar.",
  alternates: { canonical: "/subsidy" },
  openGraph: {
    url: "/subsidy",
    images: [{ url: "/images/blog/solar-bihar.png", alt: "Rooftop solar subsidy in Bihar" }],
  },
};

const subsidySteps = [
  {
    stage: "Stage 01",
    title: "National Portal Registration",
    desc: "Register on pmsuryaghar.gov.in using your electricity Consumer Number (CA Number) from NBPDCL or SBPDCL and mobile number.",
  },
  {
    stage: "Stage 02",
    title: "DISCOM Feasibility Approval",
    desc: "Submit technical feasibility request for sanctioned load sanction. EKOSYS assists with engineering single-line diagrams (SLD).",
  },
  {
    stage: "Stage 03",
    title: "Physical EPC Installation",
    desc: "EKOSYS installs Tier-1 DCR/ALMM compliant solar modules, hot-dip GI structure, smart inverter, and dual chemical earthing.",
  },
  {
    stage: "Stage 04",
    title: "DISCOM Net Metering Inspection",
    desc: "Utility electrical inspectors test the bi-directional net meter, verify earthing resistance, and issue a Joint Commissioning Certificate.",
  },
  {
    stage: "Stage 05",
    title: "Direct Benefit Transfer (DBT)",
    desc: "Upload bank passbook details and commissioning certificate. The central subsidy is credited directly to your bank account within 30 days.",
  },
];

const documentChecklist = [
  { name: "Electricity Bill", note: "Latest 1-2 months bill showing Consumer Account (CA) number and sanctioned load." },
  { name: "Aadhaar Card", note: "Government photo ID of the registered electricity connection owner." },
  { name: "Bank Account Details", note: "Cancelled cheque or bank passbook copy for Direct Benefit Transfer (DBT) credit." },
  { name: "Property Ownership Proof", note: "Municipal tax receipt, registry deed, or electricity connection address match." },
  { name: "Site Photographs", note: "Clear daytime photograph of the shadow-free rooftop and electricity meter board." },
];

const commonMistakes = [
  {
    title: "Installing Non-DCR Modules",
    desc: "Subsidies under PM Surya Ghar strictly mandate Domestic Content Requirement (DCR) solar cells. Installing uncertified imported panels forfeits 100% of the subsidy.",
  },
  {
    title: "Mismatch in Electricity Bill & Bank Name",
    desc: "The applicant's name on the electricity connection MUST match the name on the bank account for DBT clearance.",
  },
  {
    title: "Ignoring Sanctioned Load Limits",
    desc: "Your solar plant capacity cannot exceed 100% of your sanctioned electricity load without filing for a load enhancement with NBPDCL/SBPDCL first.",
  },
];

const subsidyFaqs = [
  {
    question: "How much total subsidy is available under PM Surya Ghar in Bihar?",
    answer: "Under the PM Surya Ghar: Muft Bijli Yojana & Bihar State Incentive Scheme, residential consumers receive PM Surya Ghar Central DBT (₹78,000) + Extra State Subsidy (₹20,000) = ₹98,000 official Government Subsidy. In addition, EKOSYS provides an extra Limited Offer (not from Subsidy) of ₹15,000 EKOSYS Assistance on a first come, first get basis, bringing total financial benefits up to ₹1,13,000.",
  },
  {
    question: "Is the solar subsidy deducted upfront from my quotation?",
    answer: "Under Central Government guidelines, the primary ₹78,000 DBT is credited directly to the homeowner's bank account following DISCOM commissioning. Additional state incentives and the exclusive EKOSYS promotional discount are passed on directly during billing and execution.",
  },
  {
    question: "Does EKOSYS assist with the PM Surya Ghar online application?",
    answer: "Yes. EKOSYS manages the complete technical documentation, National Portal registration, DISCOM net-metering liaisoning, and commissioning certificate uploads to ensure your subsidy is processed without delay.",
  },
  {
    question: "Do commercial or industrial solar projects qualify for the PM Surya Ghar subsidy?",
    answer: "No. PM Surya Ghar is specifically for residential domestic connections. However, commercial and industrial establishments in Bihar benefit from 40% Accelerated Depreciation (AD) tax write-offs under Section 32 of the Income Tax Act, resulting in major tax savings in the first financial year.",
  },
  {
    question: "How do I claim the ₹98,000 Subsidy + ₹15,000 EKOSYS Limited Offer?",
    answer: "The ₹98,000 is the official Government Subsidy: PM Surya Ghar Central DBT (₹78,000) + Extra State Subsidy (₹20,000) = ₹98,000. The ₹15,000 is our limited-period EKOSYS engineering assistance discount (first come, first get offer, not from subsidy). EKOSYS handles all paperwork needed to unlock all savings for your home.",
  },
];

export default function SubsidyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: subsidyFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src="/images/blog/solar-bihar.png"
          alt="Rooftop solar installation in Bihar under PM Surya Ghar"
          fill
          priority
          className="-z-10 object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />

        <div className="section-shell pb-8 pt-28 sm:pt-32">
          <Breadcrumbs items={[{ label: "Solar Subsidy" }]} />
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-black uppercase tracking-[.18em] text-solar-400 backdrop-blur">
              <Sparkles className="size-3.5 text-solar-400" />
              <span>PM Surya Ghar: Muft Bijli Yojana Guide</span>
            </div>

            <h1 className="mt-4 max-w-3xl font-display text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">
              Solar Subsidy in Bihar: <span className="text-solar-400">Complete & Honest Guide.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Understand the official PM Surya Ghar subsidy slabs (up to ₹78,000 + ₹20,000 Extra Subsidy), eligibility rules, document checklist, and DISCOM net metering with EKOSYS in Hajipur.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact" variant="primary" arrow>
                Check Your Subsidy Eligibility
              </ButtonLink>
              <ButtonLink href="#slabs" variant="outline">
                View Subsidy Slabs
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HIGHLIGHTED SUBSIDY SCHEME PROMOTION BANNER */}
      <section className="section-shell pb-0">
        <div className="overflow-hidden rounded-3xl border-2 border-solar-400 bg-gradient-to-br from-ink via-[#07243a] to-ink p-6 sm:p-8 text-white shadow-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-solar-400/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-solar-400 border border-solar-400/30">
                  <Sparkles className="size-3.5 text-solar-400" />
                  <span>PM Surya Ghar + Bihar Scheme</span>
                </div>
                <span className="inline-flex items-center rounded-full bg-amber-400/20 px-3 py-1 text-xs font-black uppercase tracking-wider text-amber-300 border border-amber-400/30">
                  Limited Time Offer · First Come First Get
                </span>
              </div>

              {/* 1. Official Government Subsidy Section */}
              <div className="mt-4 rounded-2xl bg-white/10 p-4 border border-white/15 backdrop-blur-sm">
                <p className="text-xs font-black uppercase tracking-wider text-solar-400">
                  Official Government Direct Subsidy (DBT)
                </p>
                <h2 className="mt-1 font-display text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white leading-snug">
                  PM Surya Ghar Central DBT (<span className="text-solar-400">₹78,000</span>) + Extra State Subsidy (<span className="text-solar-400">₹20,000</span>) = <span className="text-solar-400 underline underline-offset-4">₹98,000</span>
                </h2>
                <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                  Official DBT subsidy credited directly to your bank account following DISCOM net-meter inspection and commissioning.
                </p>
              </div>

              {/* 2. Extra Limited Offer - NOT from Subsidy */}
              <div className="mt-3 rounded-2xl bg-gradient-to-r from-amber-500/20 via-solar-500/10 to-transparent p-3.5 border border-amber-400/40">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-300">
                    ⚡ Extra Limited Offer (Not from Subsidy)
                  </span>
                  <span className="rounded bg-solar-400 px-2 py-0.5 text-[10px] font-black uppercase text-ink">
                    First Come First Get
                  </span>
                </div>
                <p className="mt-1 text-sm sm:text-base font-black text-white">
                  EKOSYS Assistance: <span className="text-solar-400 font-extrabold text-base sm:text-lg">₹15,000 Discount</span> for Limited time period
                </p>
                <p className="mt-0.5 text-xs text-slate-300">
                  Exclusive installer discount directly deducted from your project installation bill for early applicants.
                </p>
              </div>

              {/* Total Summary */}
              <div className="mt-3.5 flex flex-wrap items-center gap-2 sm:gap-3 rounded-xl bg-ink/80 px-3.5 py-2 border border-white/10">
                <span className="text-xs font-bold text-slate-300">Total Financial Benefit:</span>
                <span className="font-display text-xl sm:text-2xl font-black text-solar-400">₹1,13,000*</span>
                <span className="text-xs text-slate-400">(₹98,000 Govt Subsidy + ₹15,000 EKOSYS Limited Offer)</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <ButtonLink href="/contact" variant="primary" arrow>
                Claim Limited Offer & Subsidy
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SOLAR SAVINGS & SUBSIDY CALCULATOR */}
      <section className="section-shell pb-0">
        <Reveal>
          <SolarCalculator />
        </Reveal>
      </section>

      {/* 2. SUBSIDY SLABS COMPARISON TABLE */}
      <section id="slabs" className="section-shell">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Official Financial Assistance"
            title="PM Surya Ghar Residential Subsidy Slabs"
            text="Central Government financial subsidy credited directly to your bank account via Direct Benefit Transfer (DBT) plus special facilitated assistance."
          />
        </Reveal>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse rounded-3xl border border-slate-200 bg-white text-left shadow-sm overflow-hidden">
            <thead className="bg-ink text-white text-xs font-black uppercase tracking-wider">
              <tr>
                <th className="p-4 sm:p-5">System Capacity</th>
                <th className="p-4 sm:p-5">Total Subsidy Benefit</th>
                <th className="p-4 sm:p-5">Approx Gross Cost</th>
                <th className="p-4 sm:p-5">Net Cost Post-Subsidy</th>
                <th className="p-4 sm:p-5">Monthly Units</th>
                <th className="p-4 sm:p-5">Yearly Bill Savings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {subsidySlabsTable.map((row) => (
                <tr key={row.capacity} className="hover:bg-solar-50/50 transition">
                  <td className="p-4 font-bold text-ink sm:p-5">{row.capacity}</td>
                  <td className="p-4 font-extrabold text-solar-600 sm:p-5">{row.subsidy}</td>
                  <td className="p-4 text-slate-600 sm:p-5">{row.approxGrossCost}</td>
                  <td className="p-4 font-bold text-ocean-700 sm:p-5">{row.netPostSubsidy}</td>
                  <td className="p-4 text-slate-600 sm:p-5">{row.unitsPerMonth}</td>
                  <td className="p-4 font-bold text-emerald-700 sm:p-5">{row.yearlySavings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-2xl bg-solar-50 p-5 border border-solar-100 text-xs leading-6 text-slate-700">
          <strong>Important Notice:</strong> EKOSYS facilitates complete portal documentation and technical sanctions. Final subsidy approval and bank disbursal are executed by the Ministry of New and Renewable Energy (MNRE) via DBT.
        </div>
      </section>

      {/* 3. 5-STAGE APPLICATION ROADMAP */}
      <section className="bg-slate-100/80">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Step-by-Step Roadmap"
              title="How the Subsidy Process Works from Start to Finish"
              text="We guide you through every administrative and engineering milestone on the National Rooftop Solar Portal."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {subsidySteps.map((step) => (
              <Reveal key={step.stage}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div>
                    <span className="rounded-full bg-solar-100 px-3 py-1 text-xs font-black text-ocean-700">
                      {step.stage}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink">{step.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-600">{step.desc}</p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-3">
                    <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="size-3.5" /> EKOSYS Supported
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DOCUMENT CHECKLIST & COMMON MISTAKES */}
      <section className="section-shell">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Document Checklist */}
          <Reveal>
            <SectionHeading
              eyebrow="Preparation"
              title="Required Document Checklist"
              text="Ensure these documents are clear and readily accessible before initiating your National Portal registration."
            />

            <div className="mt-8 space-y-3">
              {documentChecklist.map((doc) => (
                <div key={doc.name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm flex items-start gap-3">
                  <FileText className="size-5 shrink-0 text-ocean-700 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-ink">{doc.name}</h3>
                    <p className="mt-0.5 text-xs text-slate-600">{doc.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Common Mistakes */}
          <Reveal delay={0.08}>
            <SectionHeading
              eyebrow="Risk Avoidance"
              title="Common Mistakes to Avoid"
              text="Avoid these frequent pitfalls that can delay or invalidate your central subsidy claim."
            />

            <div className="mt-8 space-y-4">
              {commonMistakes.map((m) => (
                <div key={m.title} className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-amber-800">
                    <AlertTriangle className="size-4 shrink-0" />
                    <h3 className="text-sm font-bold">{m.title}</h3>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-700">{m.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="bg-ink text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <p className="eyebrow !text-solar-400">Subsidy Questions</p>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
              Frequently Asked Questions About Solar Subsidies
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Need assistance checking your consumer account eligibility with NBPDCL or SBPDCL? Speak with our Hajipur team.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="primary" arrow>
                Speak With A Subsidy Advisor
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <FaqList faqs={subsidyFaqs} />
          </Reveal>
        </div>
      </section>

      {/* 6. CTA BAND */}
      <CtaBand
        title="Ready to claim up to ₹1,13,000 Total Subsidy Benefit on your rooftop solar?"
        text="Contact EKOSYS today for a complete feasibility check, transparent quotation, and hassle-free subsidy processing in Bihar."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}

