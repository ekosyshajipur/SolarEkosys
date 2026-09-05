"use client";

import { useState } from "react";
import {
  BatteryCharging,
  ChevronDown,
  ChevronUp,
  Home,
  RefreshCw,
  Smartphone,
  Sun,
  Zap,
} from "lucide-react";
import { howSolarWorksFlow } from "@/lib/content";

const stepIcons = [Sun, Zap, Home, RefreshCw, BatteryCharging, Smartphone];

export function InteractiveSolarFlowMobile() {
  const [showAllSteps, setShowAllSteps] = useState(false);
  const [expandedStepNum, setExpandedStepNum] = useState<number | null>(null);

  return (
    <div className="w-full space-y-3">
      {howSolarWorksFlow.map((step, index) => {
        const Icon = stepIcons[(step.step - 1) % stepIcons.length];
        const isHiddenOnMobile = index > 0 && !showAllSteps;
        const isDetailExpanded = expandedStepNum === step.step;

        return (
          <div
            key={step.step}
            className={`${
              isHiddenOnMobile ? "hidden" : "block"
            } rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 ${
              index === 0 ? "border-solar-300 ring-1 ring-solar-200" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-2xl bg-solar-100 text-ocean-800 shadow-sm">
                  <Icon className="size-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-ocean-700">
                    Step {step.step} of 6
                  </span>
                  <h3 className="font-display text-base font-bold text-ink leading-tight">
                    {step.title}
                  </h3>
                </div>
              </div>

              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-600">
                {Math.round((step.step / 6) * 100)}%
              </span>
            </div>

            <div className="mt-3.5 rounded-2xl bg-slate-50 p-3 border border-slate-100">
              <p className="text-xs font-black text-ocean-800">{step.subtitle}</p>
              <p className="mt-1.5 text-xs leading-5 text-slate-600">{step.description}</p>
            </div>

            {/* Expandable Engineering Note */}
            <div className="mt-3 border-t border-slate-100 pt-2.5">
              <button
                type="button"
                onClick={() => setExpandedStepNum(isDetailExpanded ? null : step.step)}
                className="inline-flex items-center gap-1 text-xs font-black text-ocean-700 hover:text-ocean-900"
              >
                <span>{isDetailExpanded ? "Hide Technical Details" : "Read Technical Details"}</span>
                {isDetailExpanded ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
              </button>

              {isDetailExpanded && (
                <div className="mt-2 rounded-xl bg-solar-50/80 p-3 border border-solar-200 text-ink text-xs leading-5 animate-in fade-in duration-150">
                  <p className="font-bold text-[11px] uppercase tracking-wider text-ocean-800">
                    Engineering Fact
                  </p>
                  <p className="mt-1 text-slate-700">
                    {step.step === 1 &&
                      "Tier-1 Mono PERC & TOPCon modules generate clean DC current at 40-50V per module with 22%+ cell efficiency."}
                    {step.step === 2 &&
                      "String inverters use dual-MPPT logic to extract peak power continuously even with partial morning or evening shadows."}
                    {step.step === 3 &&
                      "Real-time load priority feeds home circuits first with pure sine wave power, reducing grid imports to zero."}
                    {step.step === 4 &&
                      "Net meters approved by NBPDCL/SBPDCL spin backwards during daytime solar export, storing financial credits."}
                    {step.step === 5 &&
                      "Smart lithium battery management ensures millisecond transfer switchover during power outages."}
                    {step.step === 6 &&
                      "Cloud IoT telemetry logs 15-minute generation metrics, helping diagnose any dust accumulation or soiling."}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Mobile Toggle Button */}
      {howSolarWorksFlow.length > 1 && (
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => {
              setShowAllSteps(!showAllSteps);
              if (showAllSteps) setExpandedStepNum(null);
            }}
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-xs font-black uppercase tracking-wider text-ocean-700 shadow-sm transition hover:bg-slate-50 hover:border-ocean-300 active:scale-95"
          >
            <span>
              {showAllSteps
                ? "Show Less Steps"
                : `View More Steps (${howSolarWorksFlow.length - 1} More)`}
            </span>
            {showAllSteps ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
          </button>
        </div>
      )}
    </div>
  );
}
