"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Pillar {
  title: string;
  description: string;
}

interface InteractiveWhyChoosePillarsProps {
  pillars: Pillar[];
}

export function InteractiveWhyChoosePillars({ pillars }: InteractiveWhyChoosePillarsProps) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar, index) => {
          const isHiddenOnMobile = index > 0 && !showAll;
          return (
            <div
              key={pillar.title}
              className={`group ${
                isHiddenOnMobile ? "hidden md:block" : "block"
              } h-full rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-solar-400 hover:shadow-card`}
            >
              <div className="grid size-11 place-items-center rounded-2xl bg-solar-400 text-ink font-display font-black text-base shadow-sm group-hover:bg-ocean-700 group-hover:text-white transition">
                <span>0{index + 1}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ink group-hover:text-ocean-700 transition">
                {pillar.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-600">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>

      {pillars.length > 1 && (
        <div className="mt-6 text-center md:hidden">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-xs font-black uppercase tracking-wider text-ocean-700 shadow-sm transition hover:bg-slate-50 hover:border-ocean-300 active:scale-95"
          >
            <span>
              {showAll ? "Show Less Reasons" : `View More Reasons (${pillars.length - 1} More)`}
            </span>
            {showAll ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
          </button>
        </div>
      )}
    </div>
  );
}
