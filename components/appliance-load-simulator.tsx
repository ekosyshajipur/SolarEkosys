"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AirVent,
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  Droplets,
  Flame,
  Home,
  Lightbulb,
  Sparkles,
  Tv,
  Wrench,
  Zap,
} from "lucide-react";
import { residentialSystemOptions } from "@/lib/content";

interface ApplianceItem {
  icon: typeof AirVent;
  name: string;
  detail: string;
}

interface CapacityProfile {
  capacity: string;
  badge?: string;
  peakAc: string;
  appliances: ApplianceItem[];
}

const profiles: Record<string, CapacityProfile> = {
  "2 kW Solar System": {
    capacity: "2 kW Solar System",
    peakAc: "1x 1.5-Ton Inverter AC",
    appliances: [
      { icon: AirVent, name: "1.5-Ton Inverter AC", detail: "Daytime cooling" },
      { icon: Droplets, name: "Double-Door Refrigerator", detail: "24/7 continuous run" },
      { icon: Lightbulb, name: "Lights & Ceiling Fans", detail: "4 fans + 10 LED bulbs" },
      { icon: Tv, name: "Smart TV & Wi-Fi", detail: "55\" TV + setup box" },
      { icon: Wrench, name: "1 HP Water Pump", detail: "Daytime rooftop tank fill" },
      { icon: BatteryCharging, name: "EV 2-Wheeler Charger", detail: "Scheduled top-up" },
    ],
  },
  "3 kW Solar System": {
    capacity: "3 kW Solar System",
    badge: "Most Popular in Bihar",
    peakAc: "2x 1.5-Ton Inverter ACs",
    appliances: [
      { icon: AirVent, name: "2x Inverter ACs (1.5-Ton)", detail: "Simultaneous daytime cooling" },
      { icon: Droplets, name: "Refrigerator & Freezer", detail: "Continuous cooling" },
      { icon: Wrench, name: "1 HP Submersible Pump", detail: "Direct water tank run" },
      { icon: Lightbulb, name: "Full 3 BHK Lights & Fans", detail: "All rooms active" },
      { icon: Tv, name: "TVs & Home Workstations", detail: "2 TVs + computers" },
      { icon: BatteryCharging, name: "EV Scooter Fast Charge", detail: "Daily battery charge" },
    ],
  },
  "5 kW Solar System": {
    capacity: "5 kW Solar System",
    peakAc: "3x 1.5-Ton Inverter ACs",
    appliances: [
      { icon: AirVent, name: "3x Inverter ACs (1.5-Ton)", detail: "Full family cooling" },
      { icon: Wrench, name: "1.5 HP Heavy Bore Pump", detail: "Deep aquifer pumping" },
      { icon: Droplets, name: "Multiple Refrigerators", detail: "Double refrigeration units" },
      { icon: Flame, name: "Microwave & Kitchen Load", detail: "Baking & reheating" },
      { icon: Lightbulb, name: "Duplex Villa Lighting", detail: "Interior + garden lighting" },
      { icon: BatteryCharging, name: "EV Car / Two-Wheeler", detail: "Daytime fast charging" },
    ],
  },
  "10 kW Solar System": {
    capacity: "10 kW Solar System",
    badge: "Bungalow & High Load",
    peakAc: "5+ Inverter ACs + Heavy Load",
    appliances: [
      { icon: AirVent, name: "5+ Inverter ACs / VRF", detail: "Complete mansion cooling" },
      { icon: Wrench, name: "3 HP Heavy Submersible", detail: "High-capacity continuous run" },
      { icon: Droplets, name: "Commercial Cold Storage", detail: "Deep freezers & fridges" },
      { icon: Flame, name: "Full Electric Kitchen Suite", detail: "Induction, oven & dishwasher" },
      { icon: Lightbulb, name: "Multi-Floor Lighting & CCTV", detail: "Security & perimeter lights" },
      { icon: BatteryCharging, name: "EV Car Fast Charger", detail: "Level-2 4-wheeler charge" },
    ],
  },
};

export function ApplianceLoadSimulator() {
  const [selectedCapacity, setSelectedCapacity] = useState<string>("3 kW Solar System");

  const option =
    residentialSystemOptions.find((o) => o.capacity === selectedCapacity) ||
    residentialSystemOptions[1];

  const profile = profiles[selectedCapacity] || profiles["3 kW Solar System"];

  return (
    <div className="w-full rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm">
      {/* Capacity Selection Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {residentialSystemOptions.map((opt) => {
          const isSelected = opt.capacity === selectedCapacity;
          return (
            <button
              key={opt.capacity}
              type="button"
              onClick={() => setSelectedCapacity(opt.capacity)}
              className={`shrink-0 rounded-2xl px-4 py-2.5 text-xs font-black transition-all ${
                isSelected
                  ? "bg-ocean-700 text-white shadow-md scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {opt.capacity}
            </button>
          );
        })}
      </div>

      {/* System Highlights Card */}
      <div className="mt-4 rounded-2xl bg-solar-50/90 p-4 sm:p-5 border border-solar-200">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-xl sm:text-2xl font-black text-ink">
                {option.capacity}
              </h3>
              <span className="inline-flex items-center gap-1 rounded-full bg-solar-400 px-2.5 py-0.5 text-[10px] font-black uppercase text-ink">
                <Home className="size-3" />
                {option.homeType}
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-700 font-medium">
              Daily Generation: <strong className="text-ink">{option.dailyUnits}</strong> · Shadow-Free Roof:{" "}
              <strong className="text-ink">{option.roofArea}</strong>
            </p>
          </div>

          <div className="shrink-0 rounded-xl bg-white px-4 py-2.5 border border-solar-300 shadow-sm text-left sm:text-right">
            <span className="text-[10px] font-black uppercase tracking-wider text-ocean-700">
              Financial Benefit:
            </span>
            <p className="font-display text-sm sm:text-base font-black text-ocean-800">
              {option.subsidy}
            </p>
            <span className="text-[11px] font-extrabold text-emerald-700">
              Saves {option.savingsYearly}
            </span>
          </div>
        </div>
      </div>

      {/* What It Powers - Clean Simple Grid */}
      <div className="mt-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-ocean-800">
            <Sparkles className="size-3.5 text-solar-500" />
            <span>Comfortably Powers In Your Home</span>
          </div>
          <span className="text-xs font-bold text-slate-500">
            Peak AC: <strong className="text-ocean-700">{profile.peakAc}</strong>
          </span>
        </div>

        <div className="grid gap-2.5 grid-cols-2 sm:grid-cols-3">
          {profile.appliances.map((app) => {
            const Icon = app.icon;
            return (
              <div
                key={app.name}
                className="flex items-start gap-2.5 rounded-2xl border border-slate-200 bg-slate-50/70 p-3 transition hover:border-ocean-300 hover:bg-white"
              >
                <div className="grid size-8 place-items-center rounded-xl bg-ocean-700 text-white shrink-0 shadow-sm">
                  <Icon className="size-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-black text-ink leading-tight truncate">
                    {app.name}
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500 truncate">
                    {app.detail}
                  </p>
                  <div className="mt-1 flex items-center gap-1 text-[10px] font-bold text-emerald-700">
                    <CheckCircle2 className="size-3 text-emerald-600 shrink-0" />
                    <span>Runs on Solar</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <p className="text-xs text-slate-500 flex items-center gap-1">
          <Zap className="size-3.5 text-solar-500 shrink-0" />
          <span>Surplus daytime units are exported for bi-directional net-meter bill credits.</span>
        </p>

        <Link
          href={`/contact?kw=${encodeURIComponent(option.capacity)}`}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ocean-700 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow hover:bg-ocean-800 transition active:scale-95"
        >
          <span>Get Free Proposal for {option.capacity.replace(" Solar System", "")}</span>
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}
