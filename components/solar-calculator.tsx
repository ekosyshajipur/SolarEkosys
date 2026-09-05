"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  Coins,
  Compass,
  Leaf,
  MessageCircle,
  Phone,
  Sparkles,
  Sun,
  Zap,
} from "lucide-react";
import { site } from "@/lib/site";

interface SystemMetrics {
  capacityKw: number;
  panelCount: number;
  roofAreaSqFt: number;
  monthlyUnits: number;
  centralSubsidy: number;
  stateSubsidy: number;
  ekosysDiscount: number;
  totalBenefit: number;
  grossCostMin: number;
  grossCostMax: number;
  netCostMin: number;
  netCostMax: number;
  monthlySavings: number;
  annualSavings: number;
  lifetimeSavings25Yr: number;
  co2OffsetTonnes: number;
  treesEquivalent: number;
  paybackYears: number;
}

function calculateSolarMetrics(capacityKw: number): SystemMetrics {
  const panelWattage = 580; // 580Wp TOPCon Bifacial
  const panelCount = Math.ceil((capacityKw * 1000) / panelWattage);
  const roofAreaSqFt = Math.round(capacityKw * 80); // ~80 sq ft per kW for modern high-efficiency panels
  const monthlyUnits = Math.round(capacityKw * 125); // ~4.17 peak sun hours in Bihar -> ~125 units/kW/month

  // PM Surya Ghar & Bihar subsidy logic
  let centralSubsidy = 0;
  let stateSubsidy = 0;
  let ekosysDiscount = 0;

  if (capacityKw >= 3) {
    centralSubsidy = 78000;
    stateSubsidy = 20000;
    ekosysDiscount = 15000;
  } else if (capacityKw >= 2) {
    centralSubsidy = 60000;
    stateSubsidy = 18000;
    ekosysDiscount = 12000;
  } else {
    centralSubsidy = 30000;
    stateSubsidy = 15000;
    ekosysDiscount = 10000;
  }

  const totalBenefit = centralSubsidy + stateSubsidy + ekosysDiscount;

  // Cost estimates based on Tier-1 TOPCon + Hot-Dip GI + Chemical Earthing
  const grossCostPerKwMin = 65000;
  const grossCostPerKwMax = 72000;
  const grossCostMin = Math.round(capacityKw * grossCostPerKwMin);
  const grossCostMax = Math.round(capacityKw * grossCostPerKwMax);

  const netCostMin = Math.max(15000, grossCostMin - totalBenefit);
  const netCostMax = Math.max(25000, grossCostMax - totalBenefit);

  // Average Bihar domestic grid tariff ~₹7.20 / unit
  const monthlySavings = Math.round(monthlyUnits * 7.2);
  const annualSavings = monthlySavings * 12;
  // Factoring in 3% annual tariff inflation over 25 years
  const lifetimeSavings25Yr = Math.round(annualSavings * 25 * 1.35);

  const avgNetCost = (netCostMin + netCostMax) / 2;
  const paybackYears = Math.min(6, Math.max(2.2, Number((avgNetCost / annualSavings).toFixed(1))));

  const co2OffsetTonnes = Number((capacityKw * 1.22).toFixed(1));
  const treesEquivalent = Math.round(capacityKw * 52);

  return {
    capacityKw,
    panelCount,
    roofAreaSqFt,
    monthlyUnits,
    centralSubsidy,
    stateSubsidy,
    ekosysDiscount,
    totalBenefit,
    grossCostMin,
    grossCostMax,
    netCostMin,
    netCostMax,
    monthlySavings,
    annualSavings,
    lifetimeSavings25Yr,
    co2OffsetTonnes,
    treesEquivalent,
    paybackYears,
  };
}

export function SolarCalculator() {
  const billSliderId = useId();
  const [inputMode, setInputMode] = useState<"bill" | "kw">("bill");
  const [monthlyBill, setMonthlyBill] = useState<number>(3500);
  const [selectedKw, setSelectedKw] = useState<number>(3);

  // Derive system capacity from monthly bill if in bill mode
  const currentKw = useMemo(() => {
    if (inputMode === "kw") return selectedKw;
    // Estimated units = bill / 7.20 Rs/unit. 125 units per kW
    const estimatedUnits = monthlyBill / 7.2;
    const derived = Math.max(1, Math.min(10, Math.round(estimatedUnits / 125)));
    return derived;
  }, [inputMode, monthlyBill, selectedKw]);

  const metrics = useMemo(() => calculateSolarMetrics(currentKw), [currentKw]);

  const billPresets = [1500, 2500, 3500, 5000, 7500, 10000];
  const kwPresets = [1, 2, 3, 4, 5, 8, 10];

  return (
    <div className="w-full overflow-hidden rounded-3xl border-2 border-solar-400/80 bg-gradient-to-br from-slate-900 via-ink to-[#062438] p-5 sm:p-8 lg:p-10 text-white shadow-2xl">
      {/* Header with badge */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-solar-400/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-solar-400 border border-solar-400/30">
            <Sparkles className="size-3.5 text-solar-400" />
            <span>Interactive Solar Sizing & ROI Calculator</span>
          </div>
          <h3 className="mt-2.5 font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white">
            Calculate Your Solar Subsidy & 25-Year Savings
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            Customized for Bihar solar insolation rates, NBPDCL/SBPDCL net metering, and PM Surya Ghar direct subsidies.
          </p>
        </div>

        {/* Input Mode Toggle */}
        <div className="flex items-center gap-1.5 rounded-2xl bg-white/10 p-1 border border-white/15 shrink-0 self-start sm:self-center">
          <button
            type="button"
            onClick={() => setInputMode("bill")}
            className={`rounded-xl px-3.5 py-1.5 text-xs font-black transition ${
              inputMode === "bill"
                ? "bg-solar-400 text-ink shadow-md"
                : "text-slate-300 hover:text-white"
            }`}
          >
            By Electricity Bill
          </button>
          <button
            type="button"
            onClick={() => setInputMode("kw")}
            className={`rounded-xl px-3.5 py-1.5 text-xs font-black transition ${
              inputMode === "kw"
                ? "bg-solar-400 text-ink shadow-md"
                : "text-slate-300 hover:text-white"
            }`}
          >
            By Plant Size (kW)
          </button>
        </div>
      </div>

      <div className="mt-7 grid gap-8 lg:grid-cols-12 items-start">
        {/* Left column: Controls & Sizing */}
        <div className="lg:col-span-6 space-y-6">
          {inputMode === "bill" ? (
            <div className="rounded-2xl bg-white/5 p-4 sm:p-5 border border-white/10">
              <div className="flex items-center justify-between">
                <label htmlFor={billSliderId} className="text-xs font-black uppercase tracking-wider text-slate-300">
                  Your Monthly Electricity Bill
                </label>
                <span className="font-display text-2xl sm:text-3xl font-black text-solar-400">
                  ₹{monthlyBill.toLocaleString("en-IN")}
                  <span className="text-xs font-medium text-slate-400">/month</span>
                </span>
              </div>

              {/* Slider */}
              <input
                id={billSliderId}
                type="range"
                min={1000}
                max={15000}
                step={250}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="mt-4 w-full accent-solar-400 h-2 bg-slate-700 rounded-lg cursor-pointer"
                aria-label="Monthly electricity bill in Rupees"
              />

              {/* Preset buttons */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {billPresets.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setMonthlyBill(amt)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                      monthlyBill === amt
                        ? "bg-solar-400 text-ink"
                        : "bg-white/10 text-slate-300 hover:bg-white/20"
                    }`}
                  >
                    ₹{amt.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-2xl bg-white/5 p-4 sm:p-5 border border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-slate-300">
                  Select Solar Plant Capacity
                </span>
                <span className="font-display text-2xl sm:text-3xl font-black text-solar-400">
                  {selectedKw} kW System
                </span>
              </div>

              <div className="mt-4 grid grid-cols-4 sm:grid-cols-7 gap-2">
                {kwPresets.map((kw) => (
                  <button
                    key={kw}
                    type="button"
                    onClick={() => setSelectedKw(kw)}
                    className={`rounded-xl py-2 text-center text-xs font-black transition ${
                      selectedKw === kw
                        ? "bg-solar-400 text-ink shadow-lg scale-105"
                        : "bg-white/10 text-slate-300 hover:bg-white/20"
                    }`}
                  >
                    {kw} kW
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Plant Sizing Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white/5 p-3.5 border border-white/10">
              <div className="flex items-center gap-1.5 text-solar-400">
                <Sun className="size-4" />
                <span className="text-[10px] font-black uppercase tracking-wider">Recommended Sizing</span>
              </div>
              <p className="mt-1.5 font-display text-2xl font-black text-white">{metrics.capacityKw} kW</p>
              <p className="text-[11px] text-slate-400">Ideal for zero bill</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-3.5 border border-white/10">
              <div className="flex items-center gap-1.5 text-solar-400">
                <Compass className="size-4" />
                <span className="text-[10px] font-black uppercase tracking-wider">Shadow-Free Roof</span>
              </div>
              <p className="mt-1.5 font-display text-2xl font-black text-white">~{metrics.roofAreaSqFt} <span className="text-xs font-bold text-slate-400">sq.ft.</span></p>
              <p className="text-[11px] text-slate-400">{metrics.panelCount}x 580W TOPCon Modules</p>
            </div>

            <div className="col-span-2 sm:col-span-1 rounded-2xl bg-white/5 p-3.5 border border-white/10">
              <div className="flex items-center gap-1.5 text-solar-400">
                <Zap className="size-4" />
                <span className="text-[10px] font-black uppercase tracking-wider">Monthly Units</span>
              </div>
              <p className="mt-1.5 font-display text-2xl font-black text-white">~{metrics.monthlyUnits} <span className="text-xs font-bold text-slate-400">kWh</span></p>
              <p className="text-[11px] text-slate-400">~{Math.round(metrics.monthlyUnits / 30)} units/day</p>
            </div>
          </div>

          {/* Environmental Impact Box */}
          <div className="rounded-2xl bg-emerald-950/40 p-3.5 border border-emerald-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="grid size-9 place-items-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <Leaf className="size-5" />
              </div>
              <div>
                <p className="text-xs font-black text-emerald-300">Clean Climate Impact</p>
                <p className="text-[11px] text-slate-300">
                  Prevents <strong>{metrics.co2OffsetTonnes} tonnes CO2/yr</strong> · Equivalent to <strong>{metrics.treesEquivalent} trees planted</strong>
                </p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] font-black text-emerald-300 uppercase">
              100% Green
            </span>
          </div>
        </div>

        {/* Right column: Dynamic Financial Breakdown & Subsidy Calculator */}
        <div className="lg:col-span-6 space-y-4">
          <div className="rounded-3xl bg-white/10 p-5 sm:p-6 border border-white/15 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <BadgePercent className="size-4 text-solar-400" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-200">
                  Applicable Subsidy & Limited Benefits
                </span>
              </div>
              <span className="rounded-full bg-solar-400 px-2.5 py-0.5 text-[10px] font-black text-ink">
                {metrics.capacityKw >= 3 ? "Max Subsidy Tier" : "Direct DBT"}
              </span>
            </div>

            {/* Subsidy Line Items */}
            <div className="mt-3.5 space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between text-slate-200">
                <span>1. PM Surya Ghar Central Direct Subsidy (DBT):</span>
                <span className="font-extrabold text-white">₹{metrics.centralSubsidy.toLocaleString("en-IN")}</span>
              </div>

              <div className="flex items-center justify-between text-slate-200">
                <span>2. Bihar State Additional Subsidy:</span>
                <span className="font-extrabold text-white">₹{metrics.stateSubsidy.toLocaleString("en-IN")}</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-amber-400/10 p-2 border border-amber-400/30 text-amber-200">
                <span className="font-bold flex items-center gap-1">
                  ⚡ 3. EKOSYS Limited Offer Assistance*:
                </span>
                <span className="font-black text-solar-400">₹{metrics.ekosysDiscount.toLocaleString("en-IN")}</span>
              </div>

              {/* Total Financial Benefit Highlight */}
              <div className="flex items-center justify-between border-t border-white/15 pt-2.5">
                <span className="font-black text-white text-xs uppercase tracking-wider">
                  Total Financial Benefit:
                </span>
                <span className="font-display text-xl sm:text-2xl font-black text-solar-400">
                  ₹{metrics.totalBenefit.toLocaleString("en-IN")}*
                </span>
              </div>
            </div>
          </div>

          {/* Investment & Savings Comparison Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-ink/90 p-4 border border-white/10">
              <p className="text-[11px] font-black uppercase tracking-wider text-slate-400">Net Out-Of-Pocket</p>
              <p className="mt-1 font-display text-xl sm:text-2xl font-black text-white">
                ₹{metrics.netCostMin.toLocaleString("en-IN")}*
              </p>
              <p className="mt-0.5 text-[10px] text-slate-400">
                Post-subsidy & offer deduction (Gross: ₹{metrics.grossCostMin.toLocaleString("en-IN")})
              </p>
            </div>

            <div className="rounded-2xl bg-solar-500/20 p-4 border border-solar-400/40">
              <p className="text-[11px] font-black uppercase tracking-wider text-solar-300">Payback Period</p>
              <p className="mt-1 font-display text-xl sm:text-2xl font-black text-solar-300">
                ~{metrics.paybackYears} Years
              </p>
              <p className="mt-0.5 text-[10px] text-slate-300">
                Free power for remaining 26+ years
              </p>
            </div>
          </div>

          {/* 25-Year Cumulative Savings Banner */}
          <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-emerald-500/20 via-solar-500/20 to-transparent p-4 border border-emerald-400/30">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-solar-400 text-ink shadow">
                <Coins className="size-5" />
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-wider text-solar-300">25-Year Lifetime Savings</p>
                <p className="font-display text-xl sm:text-2xl font-black text-white">
                  ₹{metrics.lifetimeSavings25Yr.toLocaleString("en-IN")}+
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs font-bold text-slate-300">Annual Return:</span>
              <p className="font-black text-solar-400 text-sm sm:text-base">~₹{metrics.annualSavings.toLocaleString("en-IN")}/yr</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-col gap-2.5">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href={`/contact?kw=${metrics.capacityKw}&bill=${monthlyBill}`}
                className="flex-1 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-solar-400 px-6 text-sm font-black uppercase tracking-wider text-ink shadow-glow transition hover:bg-solar-100 active:scale-95"
              >
                <span>Book Survey for {metrics.capacityKw} kW</span>
                <ArrowRight className="size-4" />
              </Link>

              <a
                href={`tel:${site.phone}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 text-xs font-bold text-white transition hover:bg-white/20"
              >
                <Phone className="size-3.5 text-solar-400" />
                <span>Call Engineer</span>
              </a>
            </div>

            <a
              href={`https://wa.me/917644868086?text=${encodeURIComponent(
                `Hi EKOSYS Solar! I calculated a ${metrics.capacityKw} kW system for my rooftop (Monthly Bill: ₹${monthlyBill.toLocaleString("en-IN")}). Sizing: ~${metrics.roofAreaSqFt} sq ft, Expected Subsidy & Benefits: ₹${metrics.totalBenefit.toLocaleString("en-IN")}. Please provide an engineering site feasibility assessment.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-600/25 px-5 text-xs font-black uppercase tracking-wider text-emerald-200 transition hover:bg-emerald-600/40 hover:text-white"
            >
              <MessageCircle className="size-4 text-emerald-400" />
              <span>Share / WhatsApp My Estimate</span>
            </a>
          </div>

          <p className="text-[11px] text-slate-400 text-center">
            *Final cost depends on roof layout (flush RCC vs elevated GI superstructure). Subsidy credited directly via DBT by Ministry of New and Renewable Energy & Bihar DISCOM.
          </p>
        </div>
      </div>
    </div>
  );
}
