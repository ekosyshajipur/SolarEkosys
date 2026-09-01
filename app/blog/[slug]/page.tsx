import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Phone, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { BlogMeta, Breadcrumbs, CtaBand, FaqList } from "@/components/page-elements";
import { Reveal } from "@/components/reveal";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { blogPosts, getBlogPost } from "@/lib/content";
import { absoluteUrl, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: `${post.datePublished}T00:00:00+05:30`,
      modifiedTime: `${post.dateModified}T00:00:00+05:30`,
      authors: [post.author],
      images: [{ url: post.image, alt: post.imageAlt }],
      title: post.title,
      description: post.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: absoluteUrl(post.image),
    datePublished: `${post.datePublished}T00:00:00+05:30`,
    dateModified: `${post.dateModified}T00:00:00+05:30`,
    author: {
      "@type": "Organization",
      name: post.author,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/webLogo.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  const faqSchema = post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <article>
        <section className="section-shell pb-6 pt-28 sm:pt-32">
          <Breadcrumbs
            items={[
              { label: "Knowledge Center", href: "/blog" },
              { label: post.title },
            ]}
          />
          <Reveal>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-solar-50 px-3 py-1 text-xs font-black uppercase tracking-[.18em] text-ocean-700 border border-solar-100">
                {post.category}
              </span>
              <span className="text-xs font-bold text-slate-400">· EKOSYS Technical Advisory</span>
            </div>
            <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {post.intro}
            </p>
            <div className="mt-6 border-b border-slate-200 pb-6">
              <BlogMeta date={post.datePublished} readingTime={post.readingTime} />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative mt-8 aspect-[16/9] max-h-[500px] overflow-hidden rounded-[2rem] shadow-card bg-ink">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>
          </Reveal>
        </section>

        <section className="section-shell grid gap-10 pt-0 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            {/* Key Takeaways Card */}
            {post.keyPoints && post.keyPoints.length > 0 && (
              <div className="mb-10 rounded-3xl border border-solar-100 bg-solar-50/70 p-6 sm:p-8 shadow-sm">
                <p className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                  <ShieldCheck className="size-5 text-solar-600" />
                  Key Engineering Takeaways
                </p>
                <ul className="mt-4 space-y-3">
                  {post.keyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-700">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-ocean-700" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Body Sections */}
            <div className="prose max-w-3xl">
              {post.sections.map((section) => (
                <section key={section.heading} className="mt-10">
                  <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="mt-4 text-base leading-8 text-slate-700">
                      {paragraph}
                    </p>
                  ))}
                  {section.subPoints && section.subPoints.length > 0 && (
                    <ul className="mt-4 space-y-2.5 rounded-2xl bg-slate-50 p-5 not-prose border border-slate-200">
                      {section.subPoints.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm font-bold text-slate-700">
                          <span className="mt-1.5 size-2 shrink-0 rounded-full bg-ocean-700" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* Contextual Action Callout */}
              <div className="not-prose mt-12 rounded-3xl bg-ink p-7 text-white sm:p-9 shadow-card">
                <p className="text-xs font-black uppercase tracking-[.18em] text-solar-400">
                  Get Local Solar Engineering Support
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl">
                  Ready to calculate solar feasibility for your property in Bihar?
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Speak with our Hajipur engineering team for honest advice, shadow analysis, and PM Surya Ghar subsidy application processing.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href="/contact" variant="primary" arrow>
                    Request Free Solar Quote
                  </ButtonLink>
                  <ButtonLink href={`tel:${site.phone}`} variant="outline">
                    <Phone className="size-4" /> Call {site.phoneDisplay}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="h-fit space-y-6 lg:sticky lg:top-28">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[.18em] text-ocean-700">
                In this guide
              </p>
              <ul className="mt-4 space-y-3">
                {post.sections.map((section) => (
                  <li key={section.heading} className="text-xs font-bold leading-5 text-slate-600 hover:text-ocean-700 transition">
                    {section.heading}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-solar-100 bg-solar-50 p-6">
              <p className="text-xs font-black uppercase tracking-[.18em] text-ocean-700">
                Quick Solar Links
              </p>
              <ul className="mt-4 space-y-2 text-sm font-bold text-slate-700">
                <li>
                  <Link href="/subsidy" className="hover:text-ocean-700 flex items-center gap-1.5">
                    <FileText className="size-4 text-solar-600" /> Bihar Subsidy Details
                  </Link>
                </li>
                <li>
                  <Link href="/installation" className="hover:text-ocean-700 flex items-center gap-1.5">
                    <FileText className="size-4 text-solar-600" /> 10-Step Installation Process
                  </Link>
                </li>
                <li>
                  <Link href="/services/rooftop-solar" className="hover:text-ocean-700 flex items-center gap-1.5">
                    <FileText className="size-4 text-solar-600" /> Rooftop Solar Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/residential-solar" className="hover:text-ocean-700 flex items-center gap-1.5">
                    <FileText className="size-4 text-solar-600" /> Residential Solar Planning
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </section>
      </article>

      {/* Article FAQs */}
      {post.faqs.length > 0 && (
        <section className="bg-slate-100">
          <div className="section-shell grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Frequently Asked Questions"
                title="Common Questions on this Topic"
                text="Have a specific question about your own property or electricity connection in Bihar? Reach out to our technical team."
              />
              <div className="mt-6">
                <ButtonLink href="/contact" variant="dark">
                  Ask an Engineer
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <FaqList faqs={post.faqs} />
            </Reveal>
          </div>
        </section>
      )}

      {/* Related Articles */}
      <section className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Keep Exploring"
            title="More Solar Guides & Insights"
          />
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-solar-400 hover:shadow-card"
            >
              <span className="text-xs font-black uppercase tracking-[.16em] text-ocean-700">
                {item.category}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink group-hover:text-ocean-700 transition">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 line-clamp-2">
                {item.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-ocean-700">
                Read guide <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
