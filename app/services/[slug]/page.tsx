import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { notFound } from "next/navigation";
import { Breadcrumbs, CtaBand, FaqList } from "@/components/page-elements";
import { ProductCatalog } from "@/components/product-catalog";
import { HoverLift, Reveal } from "@/components/reveal";
import { ButtonLink, SectionHeading } from "@/components/ui";
import {
  commercialApplicationsData,
  residentialSystemOptions,
  services,
} from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} in Bihar · EKOSYS Solar`,
    description: `${service.intro} Serving Hajipur, Vaishali, Patna, and Bihar with Tier-1 components and certified EPC installation.`,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      url: `/services/${service.slug}`,
      images: [{ url: service.image, alt: `${service.name} by EKOSYS Solar` }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.intro,
    provider: {
      "@type": "LocalBusiness",
      name: "EKOSYS Corporation",
      url: absoluteUrl(),
    },
    areaServed: "Bihar",
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src={service.image}
          alt={`${service.name} solar engineering`}
          fill
          priority
          className="-z-10 object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />

        <div className="section-shell pb-8 pt-28 sm:pt-32">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.name }]} />
          <Reveal>
            <div className="flex items-center gap-3">
              <div className="grid size-12 place-items-center rounded-2xl bg-white/10 text-solar-400 backdrop-blur">
                <Icon className="size-6" />
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-black uppercase tracking-[.18em] text-solar-400 backdrop-blur">
                <Sparkles className="size-3.5 text-solar-400" />
                <span>EKOSYS Solar Engineering Vertical</span>
              </div>
            </div>

            <h1 className="mt-4 max-w-3xl font-display text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">
              {service.name} with <span className="text-solar-400">Engineering Precision.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{service.intro}</p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <ButtonLink href="/contact" variant="primary" arrow>
                Request Detailed Consultation
              </ButtonLink>
              <ButtonLink href="/services" variant="outline">
                All Solar Services
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. SUITABILITY & VISUAL SHOWCASE */}
      <section className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Target Applications"
              title={`Engineered for the Realities of ${service.name}.`}
              text="We align system sizing, structural orientation, and electrical engineering with your property type and load profile."
            />

            <div className="mt-8 rounded-3xl border border-solar-100 bg-solar-50/70 p-7">
              <p className="text-xs font-black uppercase tracking-[.18em] text-ocean-700">Ideal For:</p>
              <ul className="mt-4 space-y-3">
                {service.suitedFor.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-bold text-slate-800">
                    <CheckCircle2 className="size-5 shrink-0 text-solar-600 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] shadow-card bg-ink">
              <Image
                src={service.image}
                alt={`${service.name} visual showcase`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="rounded-full bg-solar-400 px-3 py-0.5 text-xs font-black text-ink">
                  Technical Standard
                </span>
                <p className="mt-2 font-display text-xl font-bold">100% MNRE & CEA Compliant Execution</p>
                <p className="text-xs text-slate-300">Engineered for Bihar&apos;s climate with 30-year reliability*.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. KEY ENGINEERING BENEFITS */}
      <section className="bg-slate-100/80">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Core Advantages"
              title="A Service Experience Built Around Technical Rigor"
              text="Why our engineering approach delivers higher kilowatt-hour generation and lower lifetime degradation."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div>
                    <span className="font-display font-black text-2xl text-ocean-700">0{index + 1}</span>
                    <p className="mt-4 text-sm font-bold leading-6 text-ink">{item}</p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-3">
                    <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="size-3.5" /> Verified Standard
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DEDICATED SLUG-SPECIFIC DEEP DIVES */}
      {service.slug === "solar-products" && (
        <section className="section-shell">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <p className="text-xs font-black uppercase tracking-[.2em] text-ocean-700">Interactive Equipment Catalog</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
                Explore Tier-1 Solar Hardware
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Click any product below to inspect full technical datasheets, efficiency ratings, warranty coverage, and certified applications.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ProductCatalog />
          </Reveal>
        </section>
      )}

      {service.slug === "rooftop-solar" && (
        <section className="section-shell">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Structural Design Options"
              title="Elevated vs Flush-Mount Rooftop Systems"
              text="Choose between retaining 100% of your terrace recreation space or optimizing for low-profile installation."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col justify-between rounded-3xl border-2 border-ocean-700 bg-white p-8 shadow-card">
                <div>
                  <span className="rounded-full bg-ocean-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-ocean-700">
                    Recommended for Homes
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-ink">Elevated Gazebo Superstructure</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Solar panels mounted 7.5 to 10 feet above the roof floor, creating a covered terrace room.
                  </p>
                  <ul className="mt-6 space-y-3 text-xs font-bold text-slate-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-ocean-700" /> 100% usable rooftop space retained for family events</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-ocean-700" /> Natural shade cools top-floor rooms by 4°C to 6°C in summer</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-ocean-700" /> Hot-dip galvanized columns withstand 150 km/h storm winds</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-ocean-700" /> Chemical anchor fastening with zero roof puncture leakage</li>
                  </ul>
                </div>
                <div className="mt-8 border-t border-slate-100 pt-4">
                  <ButtonLink href="/contact" variant="primary" className="w-full text-center">
                    Plan Elevated Rooftop
                  </ButtonLink>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div>
                  <span className="rounded-full bg-slate-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-slate-700">
                    Standard Low Profile
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-ink">Standard Ballast Flush-Mount</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Panels mounted close to the roof surface with concrete ballast blocks at 25° South tilt.
                  </p>
                  <ul className="mt-6 space-y-3 text-xs font-bold text-slate-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-solar-600" /> Lower structural deadweight for lightweight roof slabs</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-solar-600" /> Economical installation cost for non-walkable roofs</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-solar-600" /> Aerodynamic profile with low wind drag</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-solar-600" /> Easy access for front-side panel cleaning</li>
                  </ul>
                </div>
                <div className="mt-8 border-t border-slate-100 pt-4">
                  <ButtonLink href="/contact" variant="outline" className="w-full text-center">
                    Request Flush Mount Survey
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {service.slug === "residential-solar" && (
        <section className="section-shell">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Home Sizing Matrix"
              title="Recommended Residential Solar Capacities for Bihar"
              text="Find the perfect system capacity based on your family's monthly electricity units and available shadow-free rooftop."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {residentialSystemOptions.map((opt) => (
              <Reveal key={opt.capacity}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div>
                    <span className="rounded-full bg-solar-100 px-3 py-1 text-xs font-black text-ink">
                      {opt.subsidy}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold text-ocean-700">{opt.capacity}</h3>
                    <p className="text-xs font-bold text-slate-600 mt-1">{opt.homeType}</p>
                    <div className="mt-4 space-y-2 text-xs text-slate-600">
                      <p><strong>Daily Generation:</strong> {opt.dailyUnits}</p>
                      <p><strong>Roof Area Req:</strong> {opt.roofArea}</p>
                      <p><strong>Powers:</strong> {opt.appliances}</p>
                    </div>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-3">
                    <p className="text-xs font-bold text-emerald-700">Estimated Savings: {opt.savingsYearly}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {service.slug === "industrial-solar" && (
        <section className="section-shell">
          <Reveal>
            <SectionHeading
              center
              eyebrow="B2B Commercial Applications"
              title="Industrial & Commercial Solar Use Cases in Bihar"
              text="Slash heavy daytime power consumption, demand charges, and diesel fuel burn with high-capacity captive solar."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {commercialApplicationsData.map((app) => (
              <Reveal key={app.sector}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div>
                    <Building2 className="size-7 text-ocean-700" />
                    <h3 className="mt-4 font-display text-lg font-bold text-ink">{app.sector}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-600">{app.description}</p>
                  </div>
                  <div className="mt-5 border-t border-slate-100 pt-3">
                    <p className="text-[11px] font-bold text-ocean-700 bg-slate-50 p-2 rounded-xl border border-slate-100">
                      {app.benefit}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {service.slug === "solar-maintenance" && (
        <section className="section-shell">
          <Reveal>
            <SectionHeading
              center
              eyebrow="O&M Standards"
              title="Systematic 4-Pillar Solar Maintenance Framework"
              text="How our regular preventive maintenance restores 15% to 25% of energy generation lost to soiling and hot spots."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "TDS-Controlled Soft Washing", desc: "De-mineralized soft water cleaning removes agricultural dust without leaving mineral scales or scratching anti-reflective coatings." },
              { title: "Thermographic Infrared Scans", desc: "Thermal cameras detect bypass diode faults, localized hot-spots, and micro-cracks before they cause fire hazards or panel failures." },
              { title: "Electrical String Diagnostics", desc: "Open circuit voltage (Voc), short-circuit current (Isc), and insulation resistance systematically logged against factory flash curves." },
              { title: "Earthing & SPD Safety Audit", desc: "Chemical earth pit resistance measured below 5 Ohms with torque audits on all DC/AC terminal lugs." },
            ].map((p, idx) => (
              <Reveal key={p.title} delay={idx * 0.05}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div>
                    <span className="font-display text-2xl font-black text-ocean-700">0{idx + 1}</span>
                    <h3 className="mt-4 font-display text-base font-bold text-ink">{p.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-600">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {service.slug === "installation-services" && (
        <section className="section-shell">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Precision EPC Standards"
              title="Engineered for 30-Year Reliability in Bihar"
              text="Our civil and electrical specifications ensure that every joint, fastener, and cable pathway meets Indian Electricity Rules."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "IS 875 Wind Load Compliance", desc: "Hot-dip galvanized superstructures (80+ microns zinc) engineered to withstand 150 km/h gale gusts across North Bihar plains." },
              { title: "Dual Chemical Earthing (<5 Ohms)", desc: "Dedicated earth pits with bentonite compound dissipate fault currents instantly to safeguard inverters and home appliances." },
              { title: "Concealed Conduit Routing", desc: "Double-insulated UV-resistant XLPO solar DC cables routed inside heavy-gauge PVC conduits with zero loose roof wiring." },
              { title: "Zero Terrace Roof Punctures", desc: "Chemical anchor fasteners and bituminous elastomeric waterproofing eliminate moisture seepage risks on RCC slabs." },
              { title: "DISCOM Joint Commissioning", desc: "Formal verification with NBPDCL / SBPDCL electrical inspectors for bidirectional net meter synchronization." },
              { title: "Lifetime Telemetry & Orientation", desc: "Wi-Fi monitoring app setup with complete handover kit, single-line diagrams, and warranty documentation." },
            ].map((std) => (
              <Reveal key={std.title}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">{std.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-600">{std.desc}</p>
                  </div>
                  <div className="mt-4 border-t border-slate-100 pt-2">
                    <span className="text-[11px] font-bold text-ocean-700 flex items-center gap-1">
                      <CheckCircle2 className="size-3.5" /> Certified Protocol
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* 5. PROCESS & COMPONENTS */}
      <section className="section-shell grid gap-10 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            eyebrow="Step-by-Step Delivery"
            title="A Structured Execution Journey"
            text="Every project follows a disciplined sequence to ensure safety, structural rigidity, and swift DISCOM net-meter clearance."
          />

          <ol className="mt-8 space-y-3.5">
            {service.steps.map((step, index) => (
              <li key={step} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ink text-xs font-black text-solar-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="pt-1 text-sm font-bold text-slate-800">{step}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.08}>
          <SectionHeading
            eyebrow="Bill of Materials (BOM)"
            title="Components Included in This Solution"
            text="We provide complete transparency with itemized equipment datasheets before project initiation."
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {service.components.map((item) => (
              <div key={item} className="flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-xs font-bold text-ink">
                <CheckCircle2 className="size-4 shrink-0 text-ocean-700" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-solar-50 p-5 border border-solar-100 text-xs leading-6 text-slate-700">
            <strong>Customized BOM:</strong> The exact module wattage, inverter capacity, and structure height are finalized following our physical rooftop shadow survey.
          </div>
        </Reveal>
      </section>

      {/* 6. SERVICE FAQS */}
      <section className="bg-ink text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <p className="eyebrow !text-solar-400">Questions & Answers</p>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Have specific questions about {service.name.toLowerCase()}, government subsidies, or technical warranties?
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="primary" arrow>
                Ask a Technical Question
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <FaqList faqs={service.faqs} />
          </Reveal>
        </div>
      </section>

      {/* 7. RELATED SERVICES */}
      <section className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Explore More Verticals"
            title="Related Solar Engineering Services"
            text="Discover other complementary clean-energy solutions provided by EKOSYS."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <HoverLift key={item.slug}>
              <Link
                href={`/services/${item.slug}`}
                className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-solar-400 hover:shadow-card"
              >
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink group-hover:text-ocean-700 transition">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-slate-600">{item.short}</p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-ocean-700">
                    Explore Details <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </HoverLift>
          ))}
        </div>
      </section>

      {/* 8. CTA BAND */}
      <CtaBand title={`Plan your ${service.name.toLowerCase()} with EKOSYS today.`} />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}

