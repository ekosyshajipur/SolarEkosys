import type { Metadata } from "next";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { Breadcrumbs, FaqList, LocalMap } from "@/components/page-elements";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";
import { homeFaqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact EKOSYS Corporation · Solar Consultation & Quotes in Bihar",
  description:
    "Contact EKOSYS in Hajipur, Bihar for rooftop solar evaluations, PM Surya Ghar subsidy assistance, Tier-1 solar product procurement, and plant maintenance.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    images: [{ url: "/images/about/ekosys-team.png", alt: "Contact EKOSYS Solar Team" }],
  },
};

const serviceAreasList = [
  "Hajipur Town & Industrial Area",
  "Vaishali District (Lalganj, Mahua, Jandaha, Goraul)",
  "Patna & Danapur Commercial Hubs",
  "Muzaffarpur & Samastipur Districts",
  "Saran & Chhapra Regions",
  "North Bihar Commercial & Residential Sites",
];

const nextStepsTimeline = [
  {
    step: "1",
    title: "Instant Confirmation Email",
    desc: "You will immediately receive an automated confirmation email outlining your enquiry details and our preliminary assessment protocol.",
  },
  {
    step: "2",
    title: "Engineer Callback Within 2 Hours",
    desc: "A solar electrical engineer reviews your electricity tariff slab and contacts you to clarify load requirements and roof dimensions.",
  },
  {
    step: "3",
    title: "On-Site Physical Shadow Survey",
    desc: "We schedule an on-ground site visit to conduct 3D shadow analysis, roof structural evaluation, and cable pathway planning.",
  },
  {
    step: "4",
    title: "Detailed BOM & Payback Proposal",
    desc: "Receive an itemized Bill of Materials with brand datasheets, net subsidy calculation, and guaranteed generation estimates.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="section-shell pb-6 pt-28 sm:pt-32">
        <Breadcrumbs items={[{ label: "Contact EKOSYS" }]} />
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-solar-100 bg-solar-50 px-3.5 py-1 text-xs font-black uppercase tracking-[.18em] text-ocean-700">
            <Sparkles className="size-3.5 text-solar-500" />
            <span>Connect with Hajipur Solar Engineers</span>
          </div>

          <h1 className="mt-4 max-w-3xl font-display text-4xl font-black leading-[1.02] text-ink sm:text-6xl">
            Let&apos;s Start Your <span className="text-ocean-700">Clean Energy Journey.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Whether you need a residential rooftop evaluation, an industrial feasibility study, PM Surya Ghar subsidy assistance, or solar plant maintenance in Bihar, our engineering team is ready to help.
          </p>
        </Reveal>
      </section>

      {/* 2. DUAL COLUMN: CONTACT INFO & INTERACTIVE FORM */}
      <section className="section-shell grid gap-10 pt-0 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal>
          <div className="flex h-full flex-col justify-between rounded-[2.5rem] bg-ink p-8 text-white sm:p-10 shadow-xl">
            <div>
              <span className="rounded-full bg-solar-400/20 px-3 py-1 text-xs font-black uppercase tracking-wider text-solar-400">
                Direct Contact
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight">
                Visit, Call or WhatsApp Our Hajipur Hub
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                EKOSYS Corporation is locally registered and headquartered in Hajipur, Bihar. Reach out directly for time-sensitive enquiries.
              </p>

              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-solar-400" />
                  <div>
                    <strong className="block text-white text-sm">Office Address:</strong>
                    <span className="text-xs leading-5 text-slate-300">{site.address}</span>
                  </div>
                </li>
                <li>
                  <a
                    href={`tel:${site.phone}`}
                    className="flex items-center gap-4 text-sm font-bold text-white transition hover:text-solar-400"
                  >
                    <Phone className="size-5 shrink-0 text-solar-400" />
                    <div>
                      <span className="block text-xs font-normal text-slate-300">Call Engineering Team</span>
                      <span>{site.phoneDisplay}</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 text-sm font-bold text-white transition hover:text-solar-400"
                  >
                    <MessageCircle className="size-5 shrink-0 text-solar-400" />
                    <div>
                      <span className="block text-xs font-normal text-slate-300">Instant WhatsApp Chat</span>
                      <span>Chat with Solar Advisor</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-4 break-all text-sm font-bold text-white transition hover:text-solar-400"
                  >
                    <Mail className="size-5 shrink-0 text-solar-400" />
                    <div>
                      <span className="block text-xs font-normal text-slate-300">Official Inquiries</span>
                      <span>{site.email}</span>
                    </div>
                  </a>
                </li>
                <li className="flex gap-4 border-t border-white/10 pt-6">
                  <Clock className="mt-1 size-5 shrink-0 text-solar-400" />
                  <div>
                    <strong className="block text-white text-sm">Working Hours:</strong>
                    <span className="text-xs text-slate-300">{site.openingHours}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 rounded-2xl bg-white/5 p-4 border border-white/10 text-xs text-slate-300">
              <strong className="text-solar-400 block mb-1">Automated Confirmation:</strong>
              When you submit the form, our system automatically dispatches a Congratulations / Confirmation email with next steps.
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-card">
            <h2 className="font-display text-2xl font-bold text-ink">Request Free Solar Proposal</h2>
            <p className="mt-2 text-xs leading-5 text-slate-600">
              Fill out the form below to receive a personalized rooftop sizing, estimated subsidy calculation, and callback from our engineers.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </section>

      {/* 3. WHAT HAPPENS NEXT TIMELINE */}
      <section className="section-shell">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Transparent Process"
            title="What to Expect After Submitting Your Enquiry"
            text="We respect your time. Here is the exact sequence of steps following your contact submission."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {nextStepsTimeline.map((item) => (
            <Reveal key={item.step}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div>
                  <span className="grid size-10 place-items-center rounded-2xl bg-solar-50 font-display text-base font-black text-ocean-700">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. REGIONAL SERVICE COVERAGE */}
      <section className="bg-slate-100/80">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Service Coverage"
              title="Where EKOSYS Operates Across Bihar"
              text="Our mobile engineering vans and on-ground technicians provide rapid on-site surveys and installation across North & Central Bihar."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreasList.map((area) => (
              <Reveal key={area}>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-xs font-bold text-ink">
                  <MapPin className="size-4 shrink-0 text-ocean-700" />
                  <span>{area}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LOCATION MAP */}
      <section className="section-shell">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Visit Our Center"
            title="Our Hajipur Solar Experience Center"
            text="Located on Marai Road directly in front of Aakash Ganga TVS showroom."
          />
        </Reveal>
        <div className="mt-8">
          <LocalMap />
        </div>
      </section>

      {/* 6. FAQS */}
      <section className="bg-ink text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <p className="eyebrow !text-solar-400">Common Questions</p>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
              Consultation & Visit FAQs
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Find quick answers regarding our survey schedules, visit appointments, and quotation turnaround times.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <FaqList faqs={homeFaqs.slice(0, 4)} />
          </Reveal>
        </div>
      </section>
    </>
  );
}

