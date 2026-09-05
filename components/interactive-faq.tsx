"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Phone,
  Search,
  X,
} from "lucide-react";
import { site } from "@/lib/site";

interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

interface InteractiveFaqProps {
  faqs: FaqItem[];
  className?: string;
}

// Categorize FAQs based on common keywords if category not explicitly set
function assignCategory(faq: FaqItem): string {
  if (faq.category) return faq.category;
  const text = (faq.question + " " + faq.answer).toLowerCase();
  if (text.includes("subsidy") || text.includes("cost") || text.includes("payback") || text.includes("dbt") || text.includes("price")) {
    return "Subsidy & Cost";
  }
  if (text.includes("net meter") || text.includes("grid") || text.includes("discom") || text.includes("nbpdcl") || text.includes("sbpdcl")) {
    return "Net-Metering";
  }
  if (text.includes("roof") || text.includes("waterproof") || text.includes("installation") || text.includes("structure") || text.includes("wind")) {
    return "Roof & Install";
  }
  return "General & O&M";
}

const categories = ["All", "Subsidy & Cost", "Net-Metering", "Roof & Install", "General & O&M"];

export function InteractiveFaq({ faqs, className = "" }: InteractiveFaqProps) {
  const searchInputId = useId();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const categorizedFaqs = useMemo(() => {
    return faqs.map((faq) => ({
      ...faq,
      assignedCat: assignCategory(faq),
    }));
  }, [faqs]);

  const filteredFaqs = useMemo(() => {
    return categorizedFaqs.filter((faq) => {
      const matchesCat = selectedCat === "All" || faq.assignedCat === selectedCat;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [categorizedFaqs, selectedCat, searchQuery]);

  const isFiltering = searchQuery.trim() !== "" || selectedCat !== "All";
  const displayedFaqs = useMemo(() => {
    if (isFiltering || showAllFaqs) {
      return filteredFaqs;
    }
    return filteredFaqs.slice(0, 4);
  }, [filteredFaqs, isFiltering, showAllFaqs]);

  return (
    <div className={`w-full ${className}`}>
      {/* Search Input & Category Pills */}
      <div className="space-y-3">
        {/* Search bar */}
        <div className="relative">
          <label htmlFor={searchInputId} className="sr-only">
            Search questions about subsidies, net metering, and installation
          </label>
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <input
            id={searchInputId}
            type="text"
            placeholder="Search questions (e.g. subsidy, net meter, roof space, warranty)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-10 text-xs sm:text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 grid size-6 place-items-center rounded-full text-slate-400 hover:text-slate-700"
              aria-label="Clear search query"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCat === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-bold transition ${
                  isSelected
                    ? "bg-ocean-700 text-white shadow-sm scale-105"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-ink shadow-2xs"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Accordion List */}
      <div className="mt-4 space-y-2.5">
        {displayedFaqs.length > 0 ? (
          <>
            {displayedFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition shadow-sm ${
                    isOpen
                      ? "border-ocean-700/80 bg-white ring-1 ring-ocean-700/20"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:shadow"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-4 text-left transition"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-display text-sm sm:text-base font-bold leading-snug ${isOpen ? "text-ocean-700" : "text-ink"}`}>
                      {faq.question}
                    </span>
                    <div
                      className={`grid size-7 place-items-center rounded-xl transition shrink-0 ${
                        isOpen ? "bg-ocean-700 text-white rotate-180" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown className="size-4 transition-transform duration-200" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-4 pb-4 pt-2 text-xs sm:text-sm leading-6 text-slate-600 animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                      <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                        <span className="text-ocean-700 font-extrabold uppercase">{faq.assignedCat}</span>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1 text-ocean-700 hover:text-ocean-800 font-bold underline underline-offset-2"
                        >
                          Ask an engineer about this
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* View More / Show Less Toggle (Shown only when not searching and there are remaining background FAQs) */}
            {!isFiltering && filteredFaqs.length > 4 && (
              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => setShowAllFaqs((prev) => !prev)}
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-black uppercase tracking-wider text-ocean-700 shadow-sm transition hover:bg-slate-50 hover:border-ocean-300 active:scale-95"
                >
                  <span>
                    {showAllFaqs
                      ? "Show Less FAQs"
                      : `View More FAQs (${filteredFaqs.length - 4} in background)`}
                  </span>
                  {showAllFaqs ? (
                    <ChevronUp className="size-4 text-ocean-700" />
                  ) : (
                    <ChevronDown className="size-4 text-ocean-700" />
                  )}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center text-slate-600 shadow-sm">
            <p className="text-xs sm:text-sm">
              No matching questions found for &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCat("All");
              }}
              className="mt-3 inline-flex items-center gap-1 rounded-full bg-ocean-700 px-4 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-ocean-800"
            >
              Reset Search & Filters
            </button>
          </div>
        )}
      </div>

      {/* Direct Help Card */}
      <div className="mt-5 rounded-2xl bg-white p-3.5 border border-slate-200 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-slate-700">
          <HelpCircle className="size-4 text-ocean-700 shrink-0" />
          <span>Need custom advice for your roof?</span>
        </div>
        <a
          href={`tel:${site.phone}`}
          className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-ocean-700 hover:underline"
        >
          <Phone className="size-3" />
          <span>Call {site.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}
