import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock3, MapPin, Quote, Star } from "lucide-react";
import type { Faq } from "@/lib/content";
import { absoluteUrl, site } from "@/lib/site";
import { ButtonLink } from "./ui";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const schemaList = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/"),
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaList,
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-sm font-semibold text-slate-500">
        <Link href="/" className="transition hover:text-ocean-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-solar-400">
          Home
        </Link>
        {items.map((item) => (
          <span className="flex items-center gap-1.5" key={item.label}>
            <ChevronRight className="size-3.5 text-slate-400" aria-hidden />
            {item.href ? (
              <Link href={item.href} className="transition hover:text-ocean-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-solar-400">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-800 font-bold" aria-current="page">
                {item.label}
              </span>
            )}
          </span>
        ))}
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export function FaqList({ faqs, className = "" }: { faqs: Faq[] | readonly Faq[]; className?: string }) {
  return (
    <div className={`divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white px-5 sm:px-7 shadow-sm ${className}`}>
      {faqs.map((faq) => (
        <details key={faq.question} className="group py-4 sm:py-5">
          <summary className="cursor-pointer list-none pr-8 text-base font-extrabold text-ink marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-solar-400">
            <span className="relative block after:absolute after:-right-7 after:top-0 after:text-xl after:font-bold after:text-ocean-700 after:content-['+'] group-open:after:content-['−']">
              {faq.question}
            </span>
          </summary>
          <p className="mt-2.5 max-w-3xl leading-7 text-slate-600 font-normal text-sm">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  title = "Ready to explore solar for your property?",
  text = "Talk to the EKOSYS engineering team in Hajipur for an honest, site-aware assessment and PM Surya Ghar subsidy guidance.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-5 pb-10 sm:px-7 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink px-6 py-8 sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10 shadow-xl">
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[.18em] text-solar-400">EKOSYS Solar Consultation · Bihar</p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">{title}</h2>
          <p className="mt-3 text-sm sm:text-base leading-7 text-slate-300">{text}</p>
        </div>
        <div className="relative z-10 mt-6 shrink-0 lg:mt-0 flex flex-wrap gap-3">
          <ButtonLink href="/contact" variant="primary" arrow>
            Get Free Solar Quote
          </ButtonLink>
          <ButtonLink href={`tel:${site.phone}`} variant="outline">
            Call {site.phoneDisplay}
          </ButtonLink>
        </div>
        <div className="pointer-events-none absolute -right-28 -top-36 size-96 rounded-full bg-solar-400/20 blur-3xl" />
      </div>
    </section>
  );
}

export function LocalMap() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-card">
      <iframe
        title="EKOSYS Corporation office location in Hajipur, Bihar"
        src={site.embedMapUrl}
        className="h-[360px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="flex flex-col gap-4 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-3">
          <MapPin className="mt-0.5 size-5 shrink-0 text-ocean-700" />
          <div>
            <p className="text-sm font-bold text-ink">{site.legalName}</p>
            <p className="text-xs font-semibold leading-5 text-slate-600">{site.address}</p>
          </div>
        </div>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-10 items-center justify-center rounded-full bg-solar-50 px-4 text-xs font-black uppercase tracking-wider text-ocean-700 transition hover:bg-solar-100"
        >
          Get Google Maps Directions →
        </a>
      </div>
    </div>
  );
}

export function BlogMeta({ date, readingTime }: { date: string; readingTime: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-slate-500">
      <span>{date}</span>
      <span className="flex items-center gap-1.5">
        <Clock3 className="size-4 text-ocean-700" aria-hidden />
        {readingTime}
      </span>
    </div>
  );
}

export function TestimonialCard({ quote, person, context }: { quote: string; person: string; context: string }) {
  return (
    <figure className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
      <Quote className="size-8 text-solar-500" aria-hidden />
      <blockquote className="mt-4 text-lg font-bold leading-8 text-ink">“{quote}”</blockquote>
      <figcaption className="mt-6 flex items-center justify-between gap-3">
        <div>
          <p className="font-extrabold text-ink">{person}</p>
          <p className="text-sm text-slate-500">{context}</p>
        </div>
        <div className="flex text-solar-500" aria-label="5 star solar customer satisfaction rating">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="size-4 fill-current" />
          ))}
        </div>
      </figcaption>
    </figure>
  );
}

export function ImageCard({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover transition duration-700 hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
  );
}
