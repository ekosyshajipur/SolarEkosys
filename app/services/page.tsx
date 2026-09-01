import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Breadcrumbs, CtaBand, FaqList } from "@/components/page-elements";
import { HoverLift, Reveal } from "@/components/reveal";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { homeFaqs, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solar Engineering Services & EPC Solutions in Bihar",
  description:
    "Explore EKOSYS solar solutions: Tier-1 Solar Products, Rooftop Systems, Residential Solar, Commercial & Industrial EPC, O&M Maintenance, and Installation Services in Bihar.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    images: [{ url: "/images/services/industrial-solar.png", alt: "EKOSYS solar engineering services" }],
  },
};

const serviceSelectionCriteria = [
  {
    type: "Residential Homeowner",
    recommendation: "Residential Rooftop Solar (2 kW to 10 kW)",
    focus: "80-90% monthly bill reduction, zero terrace damage, and up to ₹1,13,000 Total Subsidy Benefit.",
    link: "/services/residential-solar",
  },
  {
    type: "Commercial Establishment / Hospital / School",
    recommendation: "Rooftop Commercial Solar Plant (10 kW to 100 kW)",
    focus: "High daytime coincidence with expensive commercial tariff slabs, DG synchronization, and clean energy branding.",
    link: "/services/rooftop-solar",
  },
  {
    type: "Industrial Factory / Cold Storage / Mill",
    recommendation: "Industrial High-Tension Solar EPC (50 kW to 500+ kW)",
    focus: "40% Accelerated Depreciation tax shield under Section 32, heavy demand charge reduction, and non-penetrating PEB clamps.",
    link: "/services/industrial-solar",
  },
  {
    type: "Existing Solar Plant Owner",
    recommendation: "Solar Maintenance, Thermography & AMC",
    focus: "Restoring 15-25% lost generation through soft-water washing, string Voc/Isc testing, and inverter optimization.",
    link: "/services/solar-maintenance",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="bg-ink text-white">
        <div className="section-shell pb-8 pt-28 sm:pt-32">
          <Breadcrumbs items={[{ label: "Solar Services" }]} />
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-black uppercase tracking-[.18em] text-solar-400 backdrop-blur">
              <Sparkles className="size-3.5 text-solar-400" />
              <span>Full-Spectrum Solar EPC in Bihar</span>
            </div>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">
              Turnkey Solar Engineering, <span className="text-solar-400">Tailored to Your Property.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              From Tier-1 component distribution and residential rooftop systems to MW industrial captive plants, net-metering liaisoning, and annual O&M maintenance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. ALL 6 DETAILED SERVICE CARDS */}
      <section className="section-shell">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Our Solar Capabilities"
            title="Six Specialized Service Verticals"
            text="Every service vertical is managed by qualified electrical and structural engineers ensuring longevity, safety, and peak kilowatt-hour generation."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={index * 0.04}>
                <HoverLift>
                  <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:border-solar-400 hover:shadow-card">
                    <div className="relative h-56 overflow-hidden bg-slate-100">
                      <Image
                        src={service.image}
                        alt={`${service.name} by EKOSYS`}
                        fill
                        className="object-cover transition duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute right-4 top-4 grid size-11 place-items-center rounded-2xl bg-white/90 text-ocean-700 shadow backdrop-blur">
                        <Icon className="size-6" />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-7">
                      <h2 className="font-display text-2xl font-bold text-ink">{service.name}</h2>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{service.short}</p>

                      <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                        <p className="text-xs font-black uppercase tracking-wider text-ocean-700">Key Benefits:</p>
                        {service.benefits.slice(0, 2).map((b) => (
                          <p key={b} className="text-xs leading-5 text-slate-700 flex items-start gap-1.5">
                            <CheckCircle2 className="size-3.5 shrink-0 text-emerald-600 mt-0.5" />
                            <span>{b}</span>
                          </p>
                        ))}
                      </div>

                      <div className="mt-6 border-t border-slate-100 pt-4">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-ocean-700 hover:text-ink transition"
                        >
                          Explore Detailed Specs & Guide <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </HoverLift>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* 3. HOW TO CHOOSE THE RIGHT SERVICE */}
      <section className="bg-slate-100/80">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Decision Framework"
              title="Which Solar Solution Fits Your Requirement?"
              text="Find the exact system configuration and engineering approach suited for your energy consumption profile."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {serviceSelectionCriteria.map((item) => (
              <Reveal key={item.type}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <div>
                    <span className="rounded-full bg-solar-100 px-3 py-1 text-xs font-black text-ink">
                      {item.type}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold text-ocean-700">{item.recommendation}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.focus}</p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-ocean-700 hover:underline"
                    >
                      Read Full Solution Details <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES FAQ */}
      <section className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <p className="eyebrow">Service Questions</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-5xl">
              Frequently Asked Questions About Our Services
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Not sure which inverter or module technology is right for your roof? Our Hajipur technical team provides free advisory.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="dark" arrow>
                Speak With An Engineer
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <FaqList faqs={homeFaqs} />
          </Reveal>
        </div>
      </section>

      {/* 5. CTA BAND */}
      <CtaBand
        title="Ready to discuss your solar requirement in Bihar?"
        text="Whether you need a residential rooftop, a commercial array, or plant maintenance, EKOSYS is ready to assist."
      />
    </>
  );
}

