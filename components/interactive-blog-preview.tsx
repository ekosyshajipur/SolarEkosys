"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { BlogPost } from "@/lib/content";

interface InteractiveBlogPreviewProps {
  articles: BlogPost[];
}

export function InteractiveBlogPreview({ articles }: InteractiveBlogPreviewProps) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3">
        {articles.map((post, index) => {
          const isHiddenOnMobile = index > 0 && !showAll;
          return (
            <article
              key={post.slug}
              className={`${
                isHiddenOnMobile ? "hidden md:flex" : "flex"
              } h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:border-solar-400 hover:shadow-card`}
            >
              <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-bold text-solar-400 backdrop-blur">
                    {post.category}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-lg sm:text-xl font-bold leading-snug text-ink group-hover:text-ocean-700 transition">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-xs sm:text-sm leading-6 text-slate-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-3.5 flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="text-xs font-semibold text-slate-400">{post.readingTime}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-ocean-700">
                      Read Guide <ArrowRight className="size-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>

      {articles.length > 1 && (
        <div className="mt-6 text-center md:hidden">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-xs font-black uppercase tracking-wider text-ocean-700 shadow-sm transition hover:bg-slate-50 hover:border-ocean-300 active:scale-95"
          >
            <span>
              {showAll ? "Show Less Guides" : `View More Guides (${articles.length - 1} More)`}
            </span>
            {showAll ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
          </button>
        </div>
      )}
    </div>
  );
}
