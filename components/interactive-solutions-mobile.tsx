"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Layers, Sparkles } from "lucide-react";
import { services } from "@/lib/content";

export function InteractiveSolutionsMobile() {
  // viewMode:
  // "highlight" = initial compact view showing top highlight card + "View All 6 Solutions" CTA
  // "all" = shows all 6 solutions in a clean, visual interactive mobile grid
  const [viewMode, setViewMode] = useState<"highlight" | "all">("highlight");
  const [activeSlug, setActiveSlug] = useState<string>(services[0].slug);
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const activeService = services.find((s) => s.slug === activeSlug) || services[0];
  const ActiveIcon = activeService.icon;

  return (
    <div className="w-full">
      {/* Mobile Mode Switcher Header / Interactive Controls */}
      <div className="mb-4 flex items-center justify-between rounded-2xl bg-white p-2 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 pl-2">
          <Sparkles className="size-4 text-solar-500" />
          <span className="text-xs font-black uppercase tracking-wider text-ink">
            {viewMode === "highlight" ? "Featured Solar Solution" : "All 6 Solar Solutions"}
          </span>
        </div>

        <button
          onClick={() => {
            if (viewMode === "highlight") {
              setViewMode("all");
            } else {
              setViewMode("highlight");
              setExpandedSlug(null);
            }
          }}
          className="inline-flex items-center gap-1.5 rounded-xl bg-ocean-700 px-3 py-1.5 text-xs font-bold text-white shadow transition hover:bg-ocean-800 active:scale-95"
          aria-label={viewMode === "highlight" ? "Click to view all 6 solar solutions" : "Show featured highlight"}
        >
          {viewMode === "highlight" ? (
            <>
              <Layers className="size-3.5" />
              <span>View All 6 Solutions</span>
            </>
          ) : (
            <>
              <ChevronUp className="size-3.5" />
              <span>Back to Highlight</span>
            </>
          )}
        </button>
      </div>

      {/* STATE 1: HIGHLIGHT VIEW */}
      {viewMode === "highlight" && (
        <div className="space-y-3 animate-in fade-in zoom-in-95 duration-200">
          {/* Quick Selection Pills so mobile user can cycle highlights quickly */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {services.map((service, idx) => {
              const isSelected = service.slug === activeSlug;
              return (
                <button
                  key={service.slug}
                  onClick={() => {
                    setActiveSlug(service.slug);
                    setExpandedSlug(null);
                  }}
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold transition ${
                    isSelected
                      ? "bg-solar-400 text-ink shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {idx + 1}. {service.name}
                </button>
              );
            })}
          </div>

          {/* Highlight Summary Card */}
          <div className="overflow-hidden rounded-3xl border-2 border-solar-300 bg-white shadow-card">
            <div className="relative h-48 w-full overflow-hidden bg-slate-900">
              <Image
                src={activeService.image}
                alt={activeService.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              
              <div className="absolute right-3 top-3 grid size-10 place-items-center rounded-2xl bg-white/95 text-ocean-700 shadow backdrop-blur">
                <ActiveIcon className="size-5" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="rounded-full bg-solar-400 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-ink">
                  Highlight #{services.findIndex((s) => s.slug === activeSlug) + 1} of 6
                </span>
                <h3 className="mt-1 font-display text-xl font-bold">{activeService.name}</h3>
              </div>
            </div>

            <div className="p-4">
              <p className="text-xs leading-5 text-slate-600">{activeService.short}</p>

              {/* Click to expand full details */}
              {expandedSlug === activeService.slug ? (
                <div className="mt-4 border-t border-slate-100 pt-3 space-y-3 animate-in fade-in duration-200">
                  <p className="text-xs font-bold text-ink">{activeService.intro}</p>

                  <div className="rounded-2xl bg-slate-50 p-3 border border-slate-100">
                    <p className="text-[11px] font-black uppercase tracking-wider text-ocean-700">Key Engineering Benefits</p>
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-700">
                      {activeService.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Link
                      href={`/services/${activeService.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-xs font-bold text-white shadow transition hover:bg-ocean-800"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                    <button
                      onClick={() => setExpandedSlug(null)}
                      className="rounded-full border border-slate-200 px-3 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50"
                    >
                      Hide
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                  <button
                    onClick={() => setExpandedSlug(activeService.slug)}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-ocean-700 hover:text-ocean-900"
                  >
                    <span>Click for Full Details</span>
                    <ChevronDown className="size-3.5" />
                  </button>

                  <button
                    onClick={() => setViewMode("all")}
                    className="inline-flex items-center gap-1 rounded-xl bg-solar-50 px-2.5 py-1 text-xs font-bold text-ocean-800 border border-solar-200"
                  >
                    <span>Show All 6</span>
                    <ArrowRight className="size-3" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* STATE 2: ALL 6 SOLUTIONS VIEW */}
      {viewMode === "all" && (
        <div className="space-y-3 animate-in fade-in duration-200">
          <p className="text-xs text-slate-500 font-medium px-1">
            Tap any solar solution to expand full engineering details & specifications:
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isExpanded = expandedSlug === service.slug;

              return (
                <div
                  key={service.slug}
                  className={`overflow-hidden rounded-3xl border bg-white transition shadow-sm ${
                    isExpanded ? "border-solar-400 ring-2 ring-solar-300 shadow-md" : "border-slate-200 hover:border-solar-200"
                  }`}
                >
                  {/* Card Header & Preview */}
                  <div
                    onClick={() => setExpandedSlug(isExpanded ? null : service.slug)}
                    className="cursor-pointer"
                  >
                    <div className="relative h-32 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                      <div className="absolute right-2.5 top-2.5 grid size-8 place-items-center rounded-xl bg-white/95 text-ocean-700 shadow">
                        <Icon className="size-4" />
                      </div>
                      <div className="absolute bottom-2 left-3 right-3 text-white">
                        <span className="text-[10px] font-black uppercase tracking-wider text-solar-400">
                          Solution {index + 1} of 6
                        </span>
                        <h4 className="font-display text-base font-bold leading-tight">{service.name}</h4>
                      </div>
                    </div>

                    <div className="p-3">
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{service.short}</p>
                      <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-2">
                        <span className="text-[11px] font-extrabold text-ocean-700 inline-flex items-center gap-1">
                          {isExpanded ? "Hide Full Details" : "View Full Details"}
                          {isExpanded ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Tap to {isExpanded ? "close" : "read"}</span>
                      </div>
                    </div>
                  </div>

                  {/* STATE 3: FULL DETAILS ACCORDION */}
                  {isExpanded && (
                    <div className="border-t border-slate-100 bg-slate-50/70 p-4 space-y-3 animate-in fade-in duration-200">
                      <p className="text-xs leading-5 text-slate-700 font-medium">{service.intro}</p>

                      <div className="rounded-2xl bg-white p-3 border border-slate-200">
                        <p className="text-[11px] font-black uppercase tracking-wider text-ocean-700">What&apos;s Included</p>
                        <ul className="mt-2 space-y-1.5 text-xs text-slate-700">
                          {service.benefits.slice(0, 3).map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2">
                              <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-2 pt-1">
                        <Link
                          href={`/services/${service.slug}`}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-ocean-700 px-4 py-2 text-xs font-bold text-white shadow hover:bg-ocean-800 transition"
                        >
                          <span>Explore {service.name}</span>
                          <ArrowRight className="size-3" />
                        </Link>
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center rounded-full bg-solar-400 px-3.5 py-2 text-xs font-extrabold text-ink shadow hover:bg-solar-100 transition"
                        >
                          Quote
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={() => {
                setViewMode("highlight");
                setExpandedSlug(null);
              }}
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-ocean-700 underline underline-offset-4"
            >
              <ChevronUp className="size-3.5" /> Back to Highlight View
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
