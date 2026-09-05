import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  HeartHandshake,
  Leaf,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { HeroSlider } from "@/components/hero-slider";
import { InteractiveSolarFlowMobile } from "@/components/interactive-solar-flow-mobile";
import { InteractiveSolutionsMobile } from "@/components/interactive-solutions-mobile";
import { InteractiveWhyChoosePillars } from "@/components/interactive-why-choose-pillars";
import { ApplianceLoadSimulator } from "@/components/appliance-load-simulator";
import { InteractiveInstallationJourney } from "@/components/interactive-installation-journey";
import { InteractiveProjectShowcase } from "@/components/interactive-project-showcase";
import { InteractiveMaintenanceViewer } from "@/components/interactive-maintenance-viewer";
import { InteractiveBlogPreview } from "@/components/interactive-blog-preview";
import { InteractiveFaq } from "@/components/interactive-faq";
import { HoverLift, Reveal } from "@/components/reveal";
import { ButtonLink, SectionHeading } from "@/components/ui";
import {
  blogPosts,
  commercialApplicationsData,
  homeFaqs,
  howSolarWorksFlow,
  productCategories,
  services,
  subsidySlabsTable,
  whyChooseEkosysPillars,
} from "@/lib/content";
import { site } from "@/lib/site";

const customerJourneySteps = [
  { num: "01", title: "Discover & Consult", desc: "Share your monthly electricity bills and property location for free initial sizing and load feasibility." },
  { num: "02", title: "3D Survey & Design", desc: "Our engineers visit your rooftop to conduct clinometer shadow analysis, structural load checks, and tilt optimization." },
  { num: "03", title: "Feasibility & Approval", desc: "We file feasibility applications with NBPDCL / SBPDCL on the PM Surya Ghar National Portal." },
  { num: "04", title: "Installation & Clamping", desc: "Hot-dip GI structures erected, Tier-1 N-Type TOPCon panels clamped, and conduit cabling laid." },
  { num: "05", title: "Chemical Earthing", desc: "Dual earth pits installed with surge protection devices tested strictly below 5 Ohms resistance." },
  { num: "06", title: "DISCOM Net Metering", desc: "DISCOM tests the bi-directional net meter, seals the apparatus, and synchronizes your plant to the grid." },
  { num: "07", title: "DBT Subsidy Release", desc: "Joint Commissioning Report uploaded to the National Portal for direct bank account credit (₹78k + State Subsidy)." },
  { num: "08", title: "App Handover & Care", desc: "Receive login credentials for daily mobile generation telemetry, warranty certificates, and lifetime O&M support." },
];

export default function HomePage() {
  const latestArticles = blogPosts.slice(0, 3);

  return (
    <>
      {/* 1. HERO SECTION WITH DYNAMIC MULTI-IMAGE SLIDER */}
      <section className="relative isolate min-h-[760px] overflow-hidden bg-slate-900 pb-12 pt-28 text-white sm:min-h-[820px] lg:flex lg:min-h-[860px] lg:items-center lg:pb-16 lg:pt-32">
        <HeroSlider />
        <div className="hero-grid absolute inset-0 -z-10 opacity-10 pointer-events-none" />

        <div className="relative z-20 mx-auto w-full max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-black uppercase tracking-[.16em] text-solar-100 backdrop-blur-md">
                <Sparkles className="size-3.5 text-solar-400" />
                <span>Bihar&apos;s Trusted Solar EPC</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl drop-shadow-md">
                Solar that powers your <span className="text-solar-400">energy independence.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-100 sm:text-lg drop-shadow">
                From Tier-1 solar modules & smart inverters to turnkey residential rooftop installations, high-capacity industrial plants, PM Surya Ghar subsidy processing, and lifetime maintenance across Bihar.
              </p>
            </Reveal>

            {/* Mobile Solar Visual Hero Banner - Instant Solar Identity for Mobile View */}
            <div className="mt-5 overflow-hidden rounded-2xl border border-solar-400/40 bg-ink/70 shadow-2xl lg:hidden">
              <div className="relative h-44 w-full">
                <Image
                  src="/images/home/solar-rooftop-banner.jpg"
                  alt="High-efficiency rooftop solar panel array in Bihar"
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                  <span className="rounded-full bg-solar-400 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-ink shadow">
                    ☀️ Bihar Solar EPC
                  </span>
                  <span className="text-[11px] font-black text-solar-200 drop-shadow">
                    Tier-1 Rooftop Solar
                  </span>
                </div>
              </div>
            </div>

            <Reveal delay={0.18}>
              <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <ButtonLink href="/contact" variant="primary" arrow>
                  Request Free Solar Quote
                </ButtonLink>
                <ButtonLink href="/services" variant="outline">
                  Explore Solar Solutions
                </ButtonLink>
                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 text-sm font-bold text-white transition hover:bg-white/20"
                >
                  <Phone className="size-4 text-solar-400" />
                  {site.phoneDisplay}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 grid max-w-3xl grid-cols-2 gap-2.5 sm:grid-cols-4">
                {[
                  "MNRE / CEA Compliant",
                  "₹98k Govt Subsidy",
                  "₹15k EKOSYS Offer*",
                  "Bihar Service Hub",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-white/15 bg-ink/40 p-2.5 text-xs font-bold text-slate-200 backdrop-blur-md"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-solar-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. TRUST / HIGHLIGHT METRICS */}
      <section className="relative z-10 -mt-8 px-5 sm:px-7 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 shadow-card lg:grid-cols-4">
          {[
            { num: "6", label: "Dedicated Solar Solutions", sub: "Rooftop, Commercial, Products & O&M" },
            { num: "10-Step", label: "Quality Installation Process", sub: "Civil, Electrical & DISCOM Net Meter" },
            { num: "₹98,000", label: "Govt Subsidy (DBT)", sub: "Central ₹78,000 + State ₹20,000" },
            { num: "+₹15,000", label: "EKOSYS Limited Offer*", sub: "First Come First Get Benefit" },
          ].map((item) => (
            <div key={item.label} className="bg-white p-5 sm:p-6">
              <p className="font-display text-3xl font-black text-ocean-700 sm:text-4xl">{item.num}</p>
              <p className="mt-1 text-sm font-bold text-ink">{item.label}</p>
              <p className="mt-0.5 text-xs text-slate-500 font-medium">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HIGHLIGHTED SUBSIDY SCHEME PROMOTION BANNER */}
      <section className="mt-6 px-5 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border-2 border-solar-400 bg-gradient-to-br from-[#0d3452] via-[#08263d] to-[#051a28] p-6 sm:p-8 text-white shadow-2xl">
          {/* Header Badges Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-solar-400/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-solar-400 border border-solar-400/30">
                <Sparkles className="size-3.5 text-solar-400" />
                <span>PM Surya Ghar Muft Bijli Yojana + Bihar Scheme</span>
              </div>
              <span className="inline-flex items-center rounded-full bg-amber-400/20 px-3 py-1 text-xs font-black uppercase tracking-wider text-amber-300 border border-amber-400/30">
                Limited Time Offer · First Come First Get
              </span>
            </div>
            <span className="text-xs text-slate-300 font-semibold">
              Applicable on 3 kW+ Residential Solar Plants
            </span>
          </div>

          {/* Symmetrical 2-Column Balanced Grid */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-stretch">
            {/* Left Column: Subsidy & Assistance Breakdown */}
            <div className="flex flex-col gap-4">
              {/* Official Government Subsidy Section */}
              <div className="flex-1 rounded-2xl bg-white/10 p-5 border border-white/15 backdrop-blur-sm">
                <p className="text-xs font-black uppercase tracking-wider text-solar-400">
                  Official Government Direct Subsidy (DBT)
                </p>
                <h2 className="mt-1.5 font-display text-xl sm:text-2xl font-black tracking-tight text-white leading-snug">
                  PM Surya Ghar Central DBT (<span className="text-solar-400">₹78,000</span>) + Extra State Subsidy (<span className="text-solar-400">₹20,000</span>) = <span className="text-solar-400 underline underline-offset-4">₹98,000</span>
                </h2>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Official DBT subsidy credited directly to your bank account following DISCOM net-meter inspection and commissioning.
                </p>
              </div>

              {/* Extra Limited Offer - NOT from Subsidy */}
              <div className="rounded-2xl bg-gradient-to-r from-amber-500/20 via-solar-500/10 to-transparent p-4 border border-amber-400/40">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-300">
                    ⚡ Extra Limited Offer (Not from Subsidy)
                  </span>
                  <span className="rounded bg-solar-400 px-2 py-0.5 text-[10px] font-black uppercase text-ink">
                    First Come First Get
                  </span>
                </div>
                <p className="mt-1 text-base sm:text-lg font-black text-white">
                  EKOSYS Assistance: <span className="text-solar-400 font-extrabold text-lg sm:text-xl">₹15,000 Discount</span>
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  Exclusive installer discount directly deducted from your project installation invoice for early applicants.
                </p>
              </div>
            </div>

            {/* Right Column: Total Benefit Card & Prominent Actions */}
            <div className="flex flex-col justify-between rounded-2xl border border-solar-400/40 bg-ink/80 p-6 sm:p-7 backdrop-blur-md shadow-xl">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-solar-400">
                    Total Combined Benefit
                  </span>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300">
                    Direct Financial Assistance
                  </span>
                </div>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-4xl sm:text-5xl font-black text-solar-400">
                    ₹1,13,000*
                  </span>
                  <span className="text-xs text-slate-300 font-medium">Combined Benefit</span>
                </div>

                <div className="mt-4 space-y-2.5 rounded-xl bg-white/5 p-3.5 border border-white/10 text-xs text-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Govt DBT Subsidy (Central ₹78k + State ₹20k):</span>
                    <strong className="text-white font-bold text-sm">₹98,000</strong>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/5 pt-2">
                    <span className="text-slate-300">EKOSYS Limited Offer Discount:</span>
                    <strong className="text-solar-400 font-bold text-sm">+₹15,000</strong>
                  </div>
                </div>

                <p className="mt-3 text-[11px] text-slate-400 leading-relaxed">
                  *Subsidies are credited directly into your Aadhaar-linked bank account via DBT. Net out-of-pocket investment is drastically reduced.
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <ButtonLink href="/contact" variant="primary" arrow className="flex-1 justify-center text-center">
                  Claim Limited Offer & Subsidy
                </ButtonLink>
                <ButtonLink href="/subsidy" variant="outline" className="flex-1 justify-center text-center">
                  View Slabs Breakdown
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT EKOSYS SPOTLIGHT */}
      <section className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <p className="eyebrow">About EKOSYS Corporation</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-5xl">
              Engineering Excellence Built on <span className="text-ocean-700">Transparency & Local Trust.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Headquartered Opposite to Municipal Office in Hajipur, <strong>EKOSYS Corporation</strong> is a specialized solar EPC company dedicated to making clean energy accessible, dependable, and financially rewarding for homeowners, commercial establishments, and industrial plants across Bihar.
            </p>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Unlike generic vendors who cut corners with sub-standard non-galvanized structures and uncertified cables, EKOSYS designs every solar plant according to strict MNRE standards. We utilize only Tier-1 ALMM-listed modules, smart inverters, and dedicated chemical earthing systems to ensure your system performs optimally for 30+ years.
            </p>

            <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <ShieldCheck className="size-6 text-ocean-700" />
                <h3 className="mt-2 text-sm font-bold text-ink">Engineering-First Approach</h3>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Precision 3D shadow modeling and wind-load calculations tailored to Bihar&apos;s climate.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <HeartHandshake className="size-6 text-ocean-700" />
                <h3 className="mt-2 text-sm font-bold text-ink">Full Subsidy Facilitation</h3>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  End-to-end guidance from National Portal registration to DISCOM net-meter commissioning.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <ButtonLink href="/about" variant="dark" arrow>
                Learn More About EKOSYS
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Speak With An Engineer
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative min-h-[380px] sm:min-h-[420px] overflow-hidden rounded-[2.5rem] shadow-card">
              <Image
                src="/images/about/ekosys-team.png"
                alt="EKOSYS solar engineers planning a rooftop solar installation in Bihar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-black uppercase tracking-wider text-solar-400">Hajipur Office & Team</p>
                <p className="mt-1 font-display text-xl font-bold">Opposite to Municipal Office, Hajipur</p>
                <p className="text-xs text-slate-300">Prompt on-site surveys across Bihar</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. ALL 6 SOLAR SOLUTIONS */}
      <section className="bg-slate-100/70">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="One Partner · Complete Solar Solutions"
              title="Designed Around How You Use Energy"
              text="From residential homes seeking zero electricity bills to commercial institutions and industrial manufacturing plants, explore our specialized solar engineering solutions."
            />
          </Reveal>

          {/* MOBILE VIEW: Interactive Highlight -> All 6 View -> Full Details */}
          <div className="mt-8 md:hidden">
            <InteractiveSolutionsMobile />
          </div>

          {/* DESKTOP/TABLET VIEW: 3-column Grid */}
          <div className="mt-10 hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={index * 0.04}>
                  <HoverLift>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:border-solar-400 hover:shadow-card"
                    >
                      <div className="relative h-48 overflow-hidden bg-slate-100">
                        <Image
                          src={service.image}
                          alt={`${service.name} by EKOSYS`}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute right-4 top-4 grid size-10 place-items-center rounded-2xl bg-white/90 text-ocean-700 shadow backdrop-blur">
                          <Icon className="size-5" />
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-ink group-hover:text-ocean-700 transition">
                          {service.name}
                        </h3>
                        <p className="mt-2.5 flex-1 text-xs sm:text-sm leading-6 text-slate-600">{service.short}</p>

                        <div className="mt-4 border-t border-slate-100 pt-3.5">
                          <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-ocean-700">
                            Explore Service Details <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </HoverLift>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. SOLAR PRODUCTS SHOWCASE */}
      <section className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="relative min-h-[380px] sm:min-h-[420px] overflow-hidden rounded-[2.5rem] shadow-card bg-ink">
              <Image
                src="/images/products/solar-components.png"
                alt="Solar components including PV panels, smart inverters, and mounting hardware"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="rounded-full bg-solar-400/20 px-3 py-1 text-xs font-black uppercase tracking-wider text-solar-400">
                  Hardware Quality
                </span>
                <p className="mt-2 font-display text-xl sm:text-2xl font-bold">Only Tier-1 ALMM & DCR Compliant Hardware</p>
                <p className="mt-1 text-xs text-slate-300">
                  Engineered to withstand high ambient temperatures and monsoon moisture in Bihar.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading
              eyebrow="Solar Hardware & Products"
              title="Build Your System on Proven Foundations"
              text="A high-performing solar power plant is a carefully matched combination of high-wattage panels, smart inverters, heavy-gauge structures, and safety protection."
            />

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {productCategories.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm">
                    <div className="flex items-center gap-2 text-ocean-700">
                      <Icon className="size-4 shrink-0" />
                      <h3 className="font-bold text-ink text-sm">{item.name}</h3>
                    </div>
                    <p className="mt-1.5 text-xs leading-5 text-slate-600">{item.text}</p>
                    <p className="mt-1.5 text-[11px] font-semibold text-ocean-700 bg-solar-50/80 rounded-lg p-1.5 border border-solar-100">
                      {item.useCase}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <ButtonLink href="/services/solar-products" variant="dark" arrow>
                Explore Complete Solar Product Catalog
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. WHY CHOOSE EKOSYS PILLARS */}
      <section className="bg-slate-50/70 border-y border-slate-200/70">
        <div className="section-shell">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">The EKOSYS Advantage</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
                Why Bihar Homeowners & Businesses Choose EKOSYS
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base leading-7 text-slate-600">
                We combine technical rigor with transparent advice, ensuring every rupee invested in solar yields maximum electricity generation.
              </p>
            </div>
          </Reveal>

          <div className="mt-10">
            <InteractiveWhyChoosePillars pillars={whyChooseEkosysPillars} />
          </div>
        </div>
      </section>

      {/* 9. HOW ROOFTOP SOLAR WORKS (EDUCATIONAL FLOW) */}
      <section className="section-shell">
        <Reveal>
          <SectionHeading
            center
            eyebrow="How Solar Energy Works"
            title="From Sunlight to Free Electricity & Grid Credits"
            text="Understand the step-by-step physics and electrical engineering behind your rooftop solar investment."
          />
        </Reveal>

        {/* MOBILE VIEW: Interactive Step Stepper & Full Details */}
        <div className="mt-8 md:hidden">
          <InteractiveSolarFlowMobile />
        </div>

        {/* DESKTOP/TABLET VIEW: 3-column Grid */}
        <div className="mt-10 hidden md:grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {howSolarWorksFlow.map((step) => (
            <Reveal key={step.step} delay={step.step * 0.04}>
              <div className="relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded-2xl bg-solar-50 text-xs font-black text-ocean-700">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Step {step.step} of 6</span>
                </div>
                <h3 className="mt-3.5 font-display text-base font-bold text-ink">{step.title}</h3>
                <p className="text-xs font-extrabold text-ocean-700">{step.subtitle}</p>
                <p className="mt-2 flex-1 text-xs leading-5 text-slate-600">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 10. RESIDENTIAL SOLAR SPOTLIGHT & APPLIANCE LOAD SIMULATOR */}
      <section className="bg-solar-50/70">
        <div className="section-shell">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <p className="eyebrow">Residential Solar Sizing</p>
              <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-5xl">
                A More Useful Rooftop for Your Family Home
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600">
                A grid-connected home solar plant offsets 80% to 90% of your power bill, running heavy inverter air conditioning, water pumps, and appliances while earning net-metering credits for every surplus unit exported.
              </p>

              <div className="mt-6">
                <ApplianceLoadSimulator />
              </div>

              <div className="mt-6 flex flex-wrap gap-3.5">
                <ButtonLink href="/services/residential-solar" variant="primary" arrow>
                  Explore Complete Home Solar Guide
                </ButtonLink>
                <ButtonLink href="/subsidy" variant="outline">
                  Check PM Surya Ghar Slabs
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative min-h-[440px] sm:min-h-[500px] overflow-hidden rounded-[2.5rem] bg-ink shadow-card">
                <Image
                  src="/images/home/residential-solar.png"
                  alt="Modern independent house in Bihar with rooftop solar panels"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="rounded-full bg-solar-400 px-3 py-1 text-xs font-black text-ink">
                    Homeowner Benefits
                  </span>
                  <h3 className="mt-2.5 font-display text-xl sm:text-2xl font-bold">30-Year Protection Against Electricity Tariff Hikes</h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-6 text-slate-300">
                    With typical payback in ~2.8 to 3.5 years, enjoy decades of near-zero power bills and clean energy for your family.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 11. INDUSTRIAL & COMMERCIAL (C&I B2B) - FULL RESPONSIVE */}
      <section className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <div className="relative min-h-[380px] sm:min-h-[460px] overflow-hidden rounded-[2.5rem] bg-ink shadow-card">
              <Image
                src="/images/services/industrial-solar.png"
                alt="Large industrial facility with rooftop solar array in Bihar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="rounded-full bg-solar-400 px-3 py-1 text-xs font-black text-ink">
                  Commercial & Industrial B2B
                </span>
                <h3 className="mt-2.5 font-display text-xl sm:text-2xl font-bold">Accelerated Depreciation & Demand Peak Reduction</h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-6 text-slate-300">
                  40% Accelerated Depreciation (AD) tax shield under Section 32 with high-capacity captive power generation.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="eyebrow">Commercial & Industrial Solar</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-5xl">
              Turn Commercial Rooftops Into Profit Centers
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600">
              For factories, cold storage units, hospitals, and educational institutions in Bihar paying ₹7.50 to ₹9.50+ per grid unit, solar power generates captive electricity at a levelized cost of under ₹2.50/unit.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {commercialApplicationsData.slice(0, 4).map((app) => (
                <div key={app.sector} className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm">
                  <h3 className="font-bold text-ink text-xs sm:text-sm flex items-center gap-1.5">
                    <Building2 className="size-4 text-ocean-700 shrink-0" />
                    {app.sector}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{app.description}</p>
                  <p className="mt-1.5 text-[11px] font-bold text-ocean-700 bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                    {app.benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3.5">
              <ButtonLink href="/services/industrial-solar" variant="dark" arrow>
                Explore Industrial Solar EPC
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Request Industrial Feasibility Study
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11. 10-STEP SOLAR INSTALLATION JOURNEY */}
      <section className="bg-slate-50/80 border-y border-slate-200/80">
        <div className="section-shell">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-ocean-200 bg-ocean-50 px-3.5 py-1.5 text-xs font-black uppercase tracking-[.18em] text-ocean-800">
                <Sparkles className="size-3.5 text-solar-500" />
                <span>Structured Quality Assurance</span>
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
                Our 10-Step Solar Installation Journey
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-7 text-slate-600">
                Solar should never leave you guessing. We follow a transparent, visible 10-step protocol from initial survey to net-meter commissioning.
              </p>
            </div>
          </Reveal>

          <div className="mt-8">
            <InteractiveInstallationJourney />
          </div>
        </div>
      </section>

      {/* 13. APPLICATION PORTFOLIO / PROJECT SHOWCASE - RESTORED & ELEVATED WITH FILTER & SPECS MODAL */}
      <section className="section-shell">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Application Portfolio"
            title="Real-World Solar Engineering Solutions in Bihar"
            text="Explore sample project architectures across residential villas, commercial showrooms, industrial metal roofs, and elevated superstructures."
          />
        </Reveal>

        <div className="mt-10">
          <InteractiveProjectShowcase />
        </div>
      </section>

      {/* 14. SOLAR OPERATION & MAINTENANCE (O&M) - RESTORED & ELEVATED WITH INTERACTIVE DIAGNOSTIC VIEWER */}
      <section className="bg-slate-100">
        <div className="section-shell">
          <Reveal>
            <InteractiveMaintenanceViewer />
          </Reveal>
        </div>
      </section>

      {/* 15. SUBSIDY MATRIX & GUIDANCE */}
      <section className="section-shell">
        <Reveal>
          <SectionHeading
            center
            eyebrow="PM Surya Ghar Muft Bijli Yojana"
            title="Solar Subsidy Slabs & Savings in Bihar"
            text="Central Government & State financial assistance credited directly to your bank account via Direct Benefit Transfer (DBT)."
          />
        </Reveal>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[650px] border-collapse rounded-3xl border border-slate-200 bg-white text-left shadow-sm overflow-hidden">
            <thead className="bg-ink text-white text-xs font-black uppercase tracking-wider">
              <tr>
                <th className="p-3.5 sm:p-4">System Size</th>
                <th className="p-3.5 sm:p-4">Total Subsidy Benefit</th>
                <th className="p-3.5 sm:p-4">Approx Gross Cost</th>
                <th className="p-3.5 sm:p-4">Net Cost Post-Subsidy</th>
                <th className="p-3.5 sm:p-4">Monthly Units</th>
                <th className="p-3.5 sm:p-4">Yearly Savings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {subsidySlabsTable.map((row) => (
                <tr key={row.capacity} className="hover:bg-solar-50/50 transition">
                  <td className="p-3.5 font-bold text-ink sm:p-4">{row.capacity}</td>
                  <td className="p-3.5 font-extrabold text-solar-600 sm:p-4">{row.subsidy}</td>
                  <td className="p-3.5 text-slate-600 sm:p-4">{row.approxGrossCost}</td>
                  <td className="p-3.5 font-bold text-ocean-700 sm:p-4">{row.netPostSubsidy}</td>
                  <td className="p-3.5 text-slate-600 sm:p-4">{row.unitsPerMonth}</td>
                  <td className="p-3.5 font-bold text-emerald-700 sm:p-4">{row.yearlySavings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs font-medium text-slate-500 text-center">
          *Estimates based on PM Surya Ghar Central DBT + State Subsidy + EKOSYS Assistance. Final costs depend on site structure and component selection.
        </p>

        <div className="mt-6 text-center">
          <ButtonLink href="/subsidy" variant="dark" arrow>
            Read Complete Bihar Solar Subsidy Guide
          </ButtonLink>
        </div>
      </section>

      {/* 16. CUSTOMER JOURNEY TIMELINE - RESTORED WITH RESPONSIVE ROADMAP CARDS */}
      <section className="bg-solar-50/80">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Customer Journey"
              title="How Your Solar Plant Goes from Idea to Free Power"
              text="We guide you smoothly through every milestone with transparent timelines and zero hidden surprises."
            />
          </Reveal>

          <div className="mt-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {customerJourneySteps.map((item) => (
              <div key={item.num} className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm hover:border-solar-300 hover:shadow-md transition">
                <span className="font-display font-black text-xl text-solar-500">{item.num}</span>
                <h3 className="mt-1.5 font-display text-sm sm:text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17. BENEFITS OF SOLAR */}
      <section className="section-shell">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Financial & Environmental Returns"
            title="A 30-Year Clean Energy Investment for Bihar"
            text="Solar energy delivers tangible monthly financial savings while creating a sustainable, resilient future."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: TrendingUp,
              title: "80% - 90% Bill Reduction",
              desc: "Generate your own daytime electricity and offset peak domestic or commercial tariff slabs with net metering.",
            },
            {
              icon: ShieldCheck,
              title: "Hedge Against Inflation",
              desc: "Grid electricity tariffs in Bihar rise ~5-8% over time. A solar plant locks in your cost of electricity for 30+ years.",
            },
            {
              icon: Leaf,
              title: "Substantial Carbon Offset",
              desc: "A typical 3 kW solar array prevents over 3.5 tonnes of CO2 emissions annually—equivalent to planting 150+ trees.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title}>
                <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
                  <Icon className="size-7 text-solar-500" />
                  <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* 18. KNOWLEDGE CENTER / BLOG PREVIEW - RESPONSIVE ON ALL SCREENS */}
      <section className="bg-slate-100/70">
        <div className="section-shell">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Solar Knowledge Center"
                title="Latest Solar Guides & Technical Insights"
                text="Explore actionable engineering guides, subsidy checklists, and cost breakdowns written by our technical team."
              />
              <ButtonLink href="/blog" variant="dark" arrow className="shrink-0">
                View All 15+ Guides
              </ButtonLink>
            </div>
          </Reveal>

          <div className="mt-10">
            <InteractiveBlogPreview articles={latestArticles} />
          </div>
        </div>
      </section>

      {/* 18. CONVERSION CTA & INTERACTIVE SEARCHABLE FAQ */}
      <section className="bg-slate-50/80 border-t border-slate-200/80 text-ink py-16 sm:py-20">
        <div className="section-shell py-0">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.15fr]">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <div className="inline-flex items-center gap-2 rounded-full border border-ocean-200 bg-ocean-50 px-3.5 py-1.5 text-xs font-black uppercase tracking-[.18em] text-ocean-800">
                  <Sparkles className="size-3.5 text-solar-500" />
                  <span>Ready to Switch to Solar?</span>
                </div>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-ink">
                  Plan Your Solar Power Plant with <span className="text-ocean-700">EKOSYS Today.</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600">
                  Speak with our certified solar engineers in Hajipur for an honest rooftop evaluation, transparent BOM quotation, and end-to-end PM Surya Ghar subsidy coordination.
                </p>

                <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {[
                    "Up to ₹1,13,000 Total Subsidy Benefit",
                    "MNRE Standards & Certified EPC",
                    "30-Year Performance Warranty*",
                    "Dedicated Local Hajipur Support",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3.5">
                  <ButtonLink href="/contact" variant="primary" arrow>
                    Request Free Consultation & Quote
                  </ButtonLink>
                  <ButtonLink href={`tel:${site.phone}`} variant="outline">
                    <Phone className="size-4 text-ocean-700" /> Call {site.phoneDisplay}
                  </ButtonLink>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-4 text-xs text-slate-600">
                  <p>
                    <strong className="text-ink">Visit our Hajipur Office:</strong> {site.address}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <p className="eyebrow">Got Questions?</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                  Frequently Asked Questions
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600">
                  Search or filter instant answers regarding rooftop suitability, electricity load sanction, subsidy eligibility, and installation timeline.
                </p>
                <InteractiveFaq faqs={homeFaqs} className="mt-5" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
