import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Breadcrumbs, BlogMeta, CtaBand } from "@/components/page-elements";
import { HoverLift, Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solar Knowledge Center & Guides",
  description: "Explore 15+ comprehensive solar guides by EKOSYS covering rooftop solar installation, PM Surya Ghar subsidy in Bihar, panel selection, inverter guide, maintenance, and costs.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    images: [{ url: "/images/blog/solar-bihar.png", alt: "EKOSYS Solar Knowledge Center" }],
  },
};

export default function BlogPage() {
  const [featured, ...remaining] = blogPosts;

  return (
    <>
      <section className="section-shell pb-8 pt-28 sm:pt-32">
        <Breadcrumbs items={[{ label: "Knowledge Center" }]} />
        <Reveal>
          <p className="eyebrow">EKOSYS Solar Knowledge Center</p>
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-[.98] text-ink sm:text-6xl">
            Smarter solar choices start with <span className="text-ocean-700">better questions.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Actionable technical guides, subsidy checklists, and cost analyses prepared by our engineering team for homeowners and businesses in Hajipur, Vaishali, and across Bihar.
          </p>
        </Reveal>

        {featured && (
          <Reveal delay={0.08}>
            <Link
              href={`/blog/${featured.slug}`}
              className="group mt-10 grid overflow-hidden rounded-[2rem] border border-slate-200 bg-ink text-white shadow-card transition hover:border-solar-400 lg:grid-cols-[1.15fr_.85fr]"
            >
              <div className="relative min-h-[320px]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  priority
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-solar-400/20 px-3 py-1 text-xs font-black uppercase tracking-[.18em] text-solar-400">
                    <Sparkles className="size-3" />
                    Featured Guide
                  </span>
                  <span className="text-xs font-bold text-slate-400">· {featured.category}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 leading-7 text-slate-300 line-clamp-3">{featured.excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 font-extrabold text-sm text-solar-400 group-hover:text-white transition">
                    Read complete guide <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{featured.readingTime}</span>
                </div>
              </div>
            </Link>
          </Reveal>
        )}
      </section>

      <section className="section-shell pt-0">
        <Reveal>
          <SectionHeading
            eyebrow="All Solar Articles"
            title="Comprehensive Technical & Practical Guides"
            text="Explore essential topics including PM Surya Ghar subsidies in Bihar, DISCOM net metering, system sizing, component selection, and maintenance checklists."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {remaining.map((post, index) => (
            <Reveal key={post.slug} delay={(index % 3) * 0.04}>
              <HoverLift>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:border-solar-400 hover:shadow-card">
                  <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
                    <div className="relative h-52 overflow-hidden bg-slate-100">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-extrabold text-solar-400 backdrop-blur">
                        {post.category}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-display text-xl font-bold leading-snug text-ink group-hover:text-ocean-700 transition">
                        {post.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-5 border-t border-slate-100 pt-4">
                        <BlogMeta date={post.datePublished} readingTime={post.readingTime} />
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-ocean-700">
                          Read Guide <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <BookOpen className="size-3" />
                          Verified
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              </HoverLift>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Need project-specific guidance for your property?"
        text="A well-researched article is a great starting point. An on-site shadow assessment and tailored quote is the next step."
      />
    </>
  );
}
