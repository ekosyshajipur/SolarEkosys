import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  HardHat,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Wrench,
  Zap,
} from "lucide-react";
import { Breadcrumbs, CtaBand } from "@/components/page-elements";
import { HoverLift, Reveal } from "@/components/reveal";
import { ButtonLink, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About EKOSYS Corporation",
  description:
    "Learn about EKOSYS Corporation—Bihar's premier solar engineering EPC partner for Tier-1 solar products, rooftop installation, maintenance, and PM Surya Ghar subsidy advisory in Hajipur, Vaishali, and Patna.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    images: [{ url: "/images/about/ekosys-team.png", alt: "EKOSYS solar engineering team in Hajipur" }],
  },
};

const companyPillars = [
  {
    icon: Target,
    title: "Our Vision",
    subtitle: "Accelerating Clean Energy in Bihar",
    text: "To establish EKOSYS as Bihar's most dependable and technically proficient solar energy EPC—empowering thousands of homeowners, commercial enterprises, and institutions with sustainable, cost-effective power.",
  },
  {
    icon: HeartHandshake,
    title: "Our Customer Mission",
    subtitle: "Transparency in Every Quotation",
    text: "We replace aggressive sales jargon with honest engineering advice. Every recommendation is grounded in 3D shadow analysis, authentic component specifications, and realistic financial payback modeling.",
  },
  {
    icon: Award,
    title: "Engineering Excellence",
    subtitle: "MNRE, CEA & IS 875 Compliance",
    text: "Solar is a 30-year structural commitment. We install only Tier-1 ALMM modules, hot-dip galvanized steel rated for 150 km/h winds, and dual chemical earth pits tested below 5 Ohms.",
  },
  {
    icon: UsersRound,
    title: "Local Bihar Commitment",
    subtitle: "Headquartered in Hajipur",
    text: "Based Opposite to Municipal Office, Hajipur, our dedicated on-ground engineers provide rapid on-site surveys, swift DISCOM liaisoning, and dependable after-sales maintenance across Vaishali, Patna, and North Bihar.",
  },
];

const qualityStandards = [
  {
    icon: ShieldCheck,
    title: "Tier-1 ALMM Hardware Exclusively",
    desc: "We never compromise on uncertified modules. Every panel is MNRE Approved List of Models and Manufacturers (ALMM) certified with 30-year linear performance warranties*.",
  },
  {
    icon: HardHat,
    title: "Hot-Dip Galvanized Superstructures",
    desc: "Engineered to withstand intense monsoon moisture and high-speed wind gusts up to 150 km/h, preventing rust and structural degradation.",
  },
  {
    icon: Zap,
    title: "Dedicated Chemical Earthing & SPDs",
    desc: "Dual copper-bonded chemical earthing electrodes and Class-I/II Surge Protection Devices safeguard your inverter and building from lightning surges.",
  },
  {
    icon: Wrench,
    title: "Proactive O&M and Health Audits",
    desc: "Our local service team provides thermographic hotspot inspections, soft-water module washing, and string electrical testing throughout your system's life.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="section-shell pb-8 pt-28 sm:pt-32">
        <Breadcrumbs items={[{ label: "About EKOSYS" }]} />
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-solar-100 bg-solar-50 px-3.5 py-1 text-xs font-black uppercase tracking-[.18em] text-ocean-700">
              <Sparkles className="size-3.5 text-solar-500" />
              <span>Bihar&apos;s Trusted Solar Engineering EPC</span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-black leading-[1.02] text-ink sm:text-6xl">
              Solar Made Transparent, <span className="text-ocean-700">Engineered to Last.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Headquartered in Hajipur, <strong>EKOSYS Corporation</strong> is a specialized solar EPC company delivering high-efficiency solar products, turnkey rooftop installations, commercial energy solutions, and complete PM Surya Ghar subsidy facilitation across Bihar.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact" variant="primary" arrow>
                Request Consultation
              </ButtonLink>
              <ButtonLink href="/services" variant="outline">
                Explore Solar Services
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative min-h-[400px] overflow-hidden rounded-[2.5rem] shadow-card bg-ink">
              <Image
                src="/images/about/ekosys-team.png"
                alt="EKOSYS solar engineers reviewing rooftop installation plans in Bihar"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-black uppercase tracking-wider text-solar-400">Head Office</p>
                <p className="mt-1 font-display text-xl font-bold">Opposite to Municipal Office, Hajipur</p>
                <p className="text-xs text-slate-300">Serving Vaishali, Patna, Muzaffarpur, Samastipur & North Bihar</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. THE EKOSYS STORY & PHILOSOPHY */}
      <section className="bg-slate-100/70">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Our Story & Philosophy"
              title="Why EKOSYS Was Founded"
              text="Bihar has abundant solar radiation (over 300 sunny days annually), yet many homeowners and businesses were let down by uncertified local vendors using non-galvanized structures, unbranded cables, and making false subsidy promises. EKOSYS was established to bring true engineering integrity to solar EPC in Bihar."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <Reveal delay={0.04}>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="font-display font-black text-2xl text-ocean-700">01</span>
                <h3 className="mt-4 font-display text-xl font-bold text-ink">The Problem We Saw</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Cheap quotes frequently concealed rusted iron mountings, bypass diode failures, and delayed DISCOM net-metering approvals that left systems idle for months.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="font-display font-black text-2xl text-ocean-700">02</span>
                <h3 className="mt-4 font-display text-xl font-bold text-ink">The EKOSYS Standard</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  We standardized our Bill of Materials (BOM) on Tier-1 N-Type TOPCon/Mono PERC modules, smart dual-MPPT inverters, 80-micron hot-dip GI structures, and tested chemical earthing.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="font-display font-black text-2xl text-ocean-700">03</span>
                <h3 className="mt-4 font-display text-xl font-bold text-ink">Lifetime Relationship</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Solar is a 30-year financial asset. We stay by your side with periodic thermographic scans, soft-water module washing, and rapid local technical callouts.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE PILLARS */}
      <section className="section-shell">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Our Core Foundations"
            title="The Values That Guide Every Solar Project"
            text="How our mission, vision, and technical standards shape our daily interactions with customers across Bihar."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {companyPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={idx * 0.05}>
                <HoverLift>
                  <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-solar-400 hover:shadow-card">
                    <div className="flex items-center gap-3">
                      <div className="grid size-12 place-items-center rounded-2xl bg-solar-50 text-ocean-700">
                        <Icon className="size-6" />
                      </div>
                      <div>
                        <h2 className="font-display text-2xl font-bold text-ink">{pillar.title}</h2>
                        <p className="text-xs font-bold uppercase tracking-wider text-ocean-700">{pillar.subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">{pillar.text}</p>
                  </article>
                </HoverLift>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* 4. QUALITY & SAFETY STANDARDS */}
      <section className="bg-ink text-white">
        <div className="section-shell">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xs font-black uppercase tracking-[.2em] text-solar-400">Engineering & Safety Protocols</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
                Uncompromising Quality in Every Component
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                A solar plant must safely handle high DC voltages (up to 1,000V) and severe weather. We follow strict international and Indian standards.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualityStandards.map((std, index) => {
              const Icon = std.icon;
              return (
                <Reveal key={std.title} delay={index * 0.04}>
                  <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-solar-400 hover:bg-white/10">
                    <div className="grid size-12 place-items-center rounded-2xl bg-solar-400 text-ink">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-white leading-snug">{std.title}</h3>
                    <p className="mt-3 text-xs leading-6 text-slate-300">{std.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. HOW WE WORK (4-STAGE PROCESS) */}
      <section className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative min-h-[460px] overflow-hidden rounded-[2.5rem] shadow-card bg-slate-100">
              <Image
                src="/images/installation/solar-installation-team.png"
                alt="Certified solar installation engineers executing a rooftop project in Bihar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading
              eyebrow="Our Execution Methodology"
              title="How EKOSYS Delivers Every Project"
              text="From your initial electricity bill conversation to ongoing maintenance, we adhere to a disciplined 4-stage execution model."
            />

            <div className="mt-8 space-y-4">
              {[
                { step: "1", title: "Site & Shadow Feasibility", desc: "On-ground structural analysis, azimuth checks, and solar insolation mapping." },
                { step: "2", title: "Custom Sizing & Proposal", desc: "Transparent Bill of Materials (BOM) with brand names and estimated payback." },
                { step: "3", title: "Certified Installation", desc: "Safety-tested mounting, conduit cabling, chemical earthing, and torque checks." },
                { step: "4", title: "Net Metering & Handover", desc: "DISCOM synchronization, DBT subsidy processing, and app login handover." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ink text-xs font-black text-solar-400">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-ink">{item.title}</h3>
                    <p className="mt-0.5 text-xs leading-5 text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-solar-50 p-5 border border-solar-100 text-xs leading-6 text-slate-700 flex items-start gap-2.5">
              <MapPin className="size-4 shrink-0 text-ocean-700 mt-0.5" />
              <span>
                <strong>Service Coverage:</strong> Hajipur, Vaishali District, Patna, Muzaffarpur, Samastipur, Saran, Chhapra, and across Bihar.
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. CTA BAND */}
      <CtaBand
        title="Ready to partner with Bihar's dedicated solar team?"
        text="Speak with our engineers in Hajipur for an honest rooftop survey, PM Surya Ghar subsidy assistance, and transparent pricing."
      />
    </>
  );
}

