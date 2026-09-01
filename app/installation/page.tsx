import type { Metadata } from "next";
import Image from "next/image";
import {
  CheckCircle2,
  ClipboardCheck,
  HardHat,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Breadcrumbs, CtaBand, FaqList } from "@/components/page-elements";
import { HoverLift, Reveal } from "@/components/reveal";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { projectShowcases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Precision Solar Installation Process in Bihar · EKOSYS",
  description:
    "Explore EKOSYS Corporation's 10-step solar installation journey: 3D shadow survey, hot-dip GI mounting, chemical earthing, and DISCOM net-meter commissioning in Bihar.",
  alternates: { canonical: "/installation" },
  openGraph: {
    url: "/installation",
    images: [{ url: "/images/installation/solar-installation-team.png", alt: "EKOSYS solar installation work" }],
  },
};

const installationCheckpoints = [
  {
    num: "01",
    title: "On-Site Rooftop & Shadow Feasibility Survey",
    desc: "Our engineers inspect your roof orientation, azimuth angle, parapet wall shadows, structural load capacity, and AC/DC cable pathway options.",
  },
  {
    num: "02",
    title: "3D CAD Modeling & Optimum Tilt Engineering",
    desc: "We generate a customized 3D solar layout with 25° to 27° true South tilt, maximizing annual kilowatt-hour generation under Bihar insolation.",
  },
  {
    num: "03",
    title: "Transparent BOM & DISCOM Feasibility Filing",
    desc: "We provide an itemized Bill of Materials with brand datasheets and file for grid synchronization clearance on the National Portal.",
  },
  {
    num: "04",
    title: "Structural Foundation & Hot-Dip GI Erection",
    desc: "Galvanized steel columns (80+ microns zinc) securely mounted using non-penetrating chemical anchor fasteners and waterproof bitumen seals.",
  },
  {
    num: "05",
    title: "Tier-1 ALMM Module Clamping & Alignment",
    desc: "High-efficiency N-Type TOPCon or Mono PERC modules fastened with anodized aluminum mid/end clamps and EPDM rubber dampening pads.",
  },
  {
    num: "06",
    title: "Smart Inverter & Conduit DC Cabling",
    desc: "Double-insulated UV-resistant XLPO solar DC cables routed through heavy-duty PVC conduits to an IP65 smart grid-tied string inverter.",
  },
  {
    num: "07",
    title: "Dedicated Chemical Earthing & Surge Arrestors",
    desc: "Installation of separate copper-bonded chemical earthing pits for DC, AC, and Lightning Arrestor (LA), tested below 5 Ohms resistance.",
  },
  {
    num: "08",
    title: "Pre-Commissioning Quality & Torque Audit",
    desc: "String open-circuit voltage (Voc), short-circuit current (Isc), insulation resistance, and bolt torque tightness systematically verified.",
  },
  {
    num: "09",
    title: "DISCOM Net Meter Testing & Synchronization",
    desc: "Liaisoning with NBPDCL / SBPDCL electrical inspectors for bi-directional net meter installation and grid synchronization.",
  },
  {
    num: "10",
    title: "Handover Kit, App Setup & Warranty Handover",
    desc: "Client orientation for real-time mobile energy monitoring app, equipment warranty certificates, Single-Line Diagrams (SLD), and AMC setup.",
  },
];

const engineeringStandards = [
  {
    icon: HardHat,
    title: "Wind Load Certified (150 km/h)",
    desc: "Mounting superstructures engineered according to IS 875 Part 3 wind load standards to withstand severe North Bihar storm gusts.",
  },
  {
    icon: Zap,
    title: "Dual Chemical Earthing (<5 Ohms)",
    desc: "Dedicated maintenance-free earth pits bonded with bentonite compound to ensure rapid fault current dissipation and equipment safety.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Roof Leakage Guarantee",
    desc: "Chemical anchoring with 3-layer UV-resistant polyurethane waterproofing prevents any moisture penetration on flat concrete terraces.",
  },
  {
    icon: ClipboardCheck,
    title: "Joint Commissioning Protocol",
    desc: "Formal inspection conducted in the presence of DISCOM officials with signed commissioning certificate uploaded for DBT subsidy clearance.",
  },
];

const installationFaqs = [
  {
    question: "How long does a residential solar installation take in Bihar?",
    answer: "The physical rooftop installation typically takes 2 to 4 days for a standard 3 kW to 10 kW system. The entire process—including DISCOM feasibility approval, structural erection, and bi-directional net meter commissioning—generally takes 3 to 4 weeks depending on utility inspection schedules.",
  },
  {
    question: "Will installing solar panels damage my roof waterproofing?",
    answer: "No. For flat concrete RCC roofs, EKOSYS uses high-strength chemical anchor fasteners with multi-layer bituminous epoxy sealing, or pre-cast concrete ballast foundations that do not penetrate the roof membrane at all. Every installation is thoroughly water-tested.",
  },
  {
    question: "What is an elevated solar structure, and can I still use my roof?",
    answer: "An elevated solar structure elevates the solar array 7 to 9 feet above the roof floor, creating a covered canopy. This allows you to retain 100% of your terrace space for walking, recreational use, or clothes drying while keeping the top floor significantly cooler in summer.",
  },
  {
    question: "What safety equipment is installed with every EKOSYS solar plant?",
    answer: "Every system includes Class-I/II Surge Protection Devices (SPDs) in both DCDB and ACDB boxes, miniature circuit breakers (MCB/MCCB), a dedicated Class-A copper Lightning Arrestor (LA), and dual copper-bonded chemical earthing electrodes tested below 5 Ohms.",
  },
];

export default function InstallationPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="section-shell pb-8 pt-28 sm:pt-32">
        <Breadcrumbs items={[{ label: "Solar Installation" }]} />
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-solar-100 bg-solar-50 px-3.5 py-1 text-xs font-black uppercase tracking-[.18em] text-ocean-700">
              <Sparkles className="size-3.5 text-solar-500" />
              <span>Engineered for 30-Year Structural Longevity*</span>
            </div>

            <h1 className="mt-4 font-display text-4xl font-black leading-[1.02] text-ink sm:text-6xl">
              Installed with Precision. <span className="text-ocean-700">Commissioned with Pride.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              A high-performing solar power plant is built on rigorous structural and electrical engineering. Explore EKOSYS Corporation&apos;s 10-step installation protocol designed for Bihar&apos;s weather and grid conditions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact" variant="primary" arrow>
                Book Rooftop Feasibility Survey
              </ButtonLink>
              <ButtonLink href="#steps" variant="outline">
                View 10-Step Protocol
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] shadow-card bg-ink">
              <Image
                src="/images/installation/solar-installation-team.png"
                alt="EKOSYS solar technicians installing solar PV modules on a rooftop in Bihar"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="rounded-full bg-solar-400 px-3 py-0.5 text-xs font-black text-ink">
                  Certified Team
                </span>
                <p className="mt-2 font-display text-xl font-bold">Trained Electrical & Structural EPC Crew</p>
                <p className="text-xs text-slate-300">Equipped with calibrated torque tools, multimeters & safety harnesses.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. THE 10-STEP INSTALLATION PROTOCOL */}
      <section id="steps" className="bg-ink text-white">
        <div className="section-shell">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xs font-black uppercase tracking-[.2em] text-solar-400">Structured Quality Assurance</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
                Our 10-Checkpoint Installation Journey
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                From initial 3D shadow analysis to DISCOM net-meter synchronization and mobile telemetry handover.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {installationCheckpoints.map((cp) => (
              <Reveal key={cp.num}>
                <div className="flex h-full gap-5 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-solar-400/50 hover:bg-white/10">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-solar-400 font-display text-lg font-black text-ink">
                    {cp.num}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white leading-snug">{cp.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-slate-300">{cp.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STRUCTURAL & ELECTRICAL QUALITY STANDARDS */}
      <section className="section-shell">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Engineering Protocols"
            title="Safety & Structural Rigor Built into Every Joint"
            text="How our mechanical and electrical specifications ensure your system operates safely across 30+ years."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {engineeringStandards.map((std) => {
            const Icon = std.icon;
            return (
              <Reveal key={std.title}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <div>
                    <div className="grid size-12 place-items-center rounded-2xl bg-solar-50 text-ocean-700">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-ink leading-snug">{std.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-slate-600">{std.desc}</p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-3">
                    <span className="text-[11px] font-bold text-ocean-700 flex items-center gap-1">
                      <CheckCircle2 className="size-3.5" /> Tested Standard
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* 4. REAL-WORLD PROJECT GALLERY */}
      <section className="bg-slate-100/80">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Installation Portfolio"
              title="Recent Solar Installations Delivered in Bihar"
              text="From residential homes to commercial and industrial rooftop projects."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projectShowcases.slice(0, 3).map((proj) => (
              <Reveal key={proj.id}>
                <HoverLift>
                  <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                    <div className="relative h-56 overflow-hidden bg-slate-100">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-bold text-solar-400 backdrop-blur">
                        {proj.category}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs font-bold text-ocean-700">{proj.location} · {proj.capacity}</p>
                      <h3 className="mt-2 font-display text-lg font-bold text-ink">{proj.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-slate-600">{proj.description}</p>
                    </div>
                  </div>
                </HoverLift>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INSTALLATION FAQS */}
      <section className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <p className="eyebrow">Installation Queries</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-5xl">
              Frequently Asked Questions About Solar Installation
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Have questions about roof structural suitability, meter testing, or earthing in Hajipur or Vaishali?
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="dark" arrow>
                Schedule Rooftop Survey
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <FaqList faqs={installationFaqs} />
          </Reveal>
        </div>
      </section>

      {/* 6. CTA BAND */}
      <CtaBand
        title="Ready to install a certified rooftop solar system?"
        text="Contact EKOSYS for a site survey, 3D shadow analysis, and turnkey installation in Hajipur, Patna, and across Bihar."
      />
    </>
  );
}

