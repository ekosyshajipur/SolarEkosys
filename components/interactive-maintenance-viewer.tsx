"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Gauge,
  Phone,
  Scan,
  TrendingUp,
  Zap,
} from "lucide-react";
import { site } from "@/lib/site";

interface MaintenanceProtocol {
  id: string;
  title: string;
  short: string;
  icon: typeof Droplets;
  tool: string;
  standard: string;
  frequency: string;
  yieldGain: string;
  description: string;
  bulletPoints: string[];
}

const protocols: MaintenanceProtocol[] = [
  {
    id: "wash",
    title: "Soft-Water TDS-Controlled Cleaning",
    short: "Prevents hard-water mineral scaling and calcification on anti-reflective glass coatings.",
    icon: Droplets,
    tool: "De-Mineralized Soft Water (<50 TDS), Telescopic Microfiber Brushes",
    standard: "IEC 61215 PV Surface Integrity Standards",
    frequency: "Fortnightly / Monthly in dry seasons",
    yieldGain: "+12% to +22% Yield Boost",
    description: "North Bihar airborne silt and dust settle quickly on solar panels, creating an optical barrier that slashes output. Standard groundwater contains hard salts (calcium & iron) that bake permanently into the glass under hot sunlight. We use certified TDS-tested soft water that rinses spotlessly clean.",
    bulletPoints: [
      "Zero abrasive chemicals that could scratch anti-reflective glass",
      "Conducted in early mornings to avoid solar glass thermal shock",
      "Restores 99.2% optical transmission across all strings",
    ],
  },
  {
    id: "flir",
    title: "Infrared Thermographic Hotspot Scans",
    short: "Pinpoints micro-cracks, shaded cell hotspots, and bypass diode breakdown with FLIR thermal imaging.",
    icon: Scan,
    tool: "Calibrated FLIR Handheld & Aerial Infrared Cameras",
    standard: "IEC TS 62446-3 Thermographic Inspection",
    frequency: "Bi-annual Comprehensive Audit",
    yieldGain: "Prevents 100% String Failures",
    description: "A single bird dropping, micro-crack, or damaged bypass diode can cause a solar cell to reverse-bias and heat up to 120°C+. Our thermographic scans identify invisible heat signatures before they burn panel backsheets or cause fire risks.",
    bulletPoints: [
      "Pinpoints hotspot delta-T temperature rises above 10°C instantly",
      "Verifies healthy bypass diode operation in junction boxes",
      "Generates thermal photographic report with string location tags",
    ],
  },
  {
    id: "string",
    title: "String Voc, Isc & Inverter Telemetry",
    short: "Comprehensive electrical curve tracing, insulation resistance, and firmware synchronization.",
    icon: Gauge,
    tool: "I-V Curve Tracers, Insulation Meggers, Digital Clamp Meters",
    standard: "IEC 62446-1 Verification & Commissioning",
    frequency: "Quarterly Diagnostic Service",
    yieldGain: "+8% to +14% MPPT Efficiency",
    description: "We test individual DC strings for Open-Circuit Voltage (Voc) and Short-Circuit Current (Isc) under calibrated solar irradiance to confirm all module strings perform evenly without impedance bottlenecks or loose MC4 connectors.",
    bulletPoints: [
      "Tightens all MC4 connectors and AC/DC circuit breakers with torque meters",
      "Calibrates smart inverter firmware and Wi-Fi cloud data sync",
      "Measures insulation resistance (>10 MΩ) against earth faults",
    ],
  },
  {
    id: "earth",
    title: "Chemical Earthing & Surge Audit (<5 Ohms)",
    short: "Digital earth resistance clamp testing of DC, AC, and Lightning Arrestor copper-bonded pits.",
    icon: Zap,
    tool: "Digital 4-Terminal Earth Resistance Tester, Bentonite Refills",
    standard: "IS 3043 Code of Practice for Earthing (<5 Ohms)",
    frequency: "Annual Pre-Monsoon Audit",
    yieldGain: "Lifetime Equipment Safety",
    description: "Bihar experiences frequent lightning storms and grid voltage spikes during monsoon months. We test each chemical earthing pit to guarantee ground resistance remains strictly below 5 Ohms, ensuring surge currents discharge safely into the earth.",
    bulletPoints: [
      "Inspection of Class-I/II Surge Protection Devices (SPDs)",
      "Electrolyte replenishment in dry soil chemical chambers",
      "Lightning Arrestor (LA) copper down-conductor continuity test",
    ],
  },
];

export function InteractiveMaintenanceViewer() {
  const [activeProtocolId, setActiveProtocolId] = useState<string>("wash");

  const current = protocols.find((p) => p.id === activeProtocolId) || protocols[0];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        {/* Left column: Visual + Yield Gain Meter */}
        <div className="space-y-4">
          <div className="relative min-h-[360px] sm:min-h-[420px] overflow-hidden rounded-[2.5rem] shadow-card bg-ink">
            <Image
              src="/images/services/solar-maintenance.png"
              alt="Technician conducting thermographic hotspot inspection and cleaning on solar panels"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white">
              <span className="rounded-full bg-solar-400 px-3 py-1 text-xs font-black uppercase tracking-wider text-ink shadow">
                O&M Diagnostics
              </span>
              <span className="rounded-full bg-ink/80 px-3 py-1 text-xs font-bold text-solar-300 backdrop-blur border border-white/15">
                {current.yieldGain}
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <p className="text-xs font-black uppercase tracking-wider text-solar-400">
                Protocols Engineered for Bihar
              </p>
              <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold">
                {current.title}
              </h3>
              <p className="mt-1 text-xs text-slate-300 line-clamp-2">
                {current.short}
              </p>
            </div>
          </div>

          {/* Efficiency Gain Bar */}
          <div className="flex items-center justify-between rounded-2xl bg-white p-4 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-solar-100 text-ocean-800 shrink-0">
                <TrendingUp className="size-5" />
              </div>
              <div>
                <p className="text-xs font-black text-ink">Restored Solar Yield</p>
                <p className="text-[11px] text-slate-500">Regular servicing maintains 95%+ peak rated output</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800 border border-emerald-200">
              {current.yieldGain}
            </span>
          </div>
        </div>

        {/* Right column: Interactive Mode Selector & Details */}
        <div className="space-y-4">
          <div>
            <p className="eyebrow">Solar Care & Maintenance</p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink leading-tight">
              Protecting Your <span className="text-ocean-700">30-Year Energy Yield</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Dust accumulation, loose connectors, hotspot degradation, and grounding faults can reduce plant output by 15% to 30%. Tap each diagnostic protocol below to see how our Hajipur O&M team protects your investment:
            </p>
          </div>

          {/* Diagnostic Selector Tabs */}
          <div className="grid grid-cols-2 gap-2">
            {protocols.map((p) => {
              const isSelected = p.id === activeProtocolId;
              const Icon = p.icon;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveProtocolId(p.id)}
                  className={`flex items-center gap-2.5 rounded-2xl p-3 text-left transition border ${
                    isSelected
                      ? "bg-ocean-700 text-white border-ocean-700 shadow-md scale-[1.02]"
                      : "bg-white text-slate-700 border-slate-200 hover:border-solar-300 hover:bg-slate-50"
                  }`}
                >
                  <div
                    className={`grid size-8 place-items-center rounded-xl shrink-0 ${
                      isSelected ? "bg-white/20 text-solar-300" : "bg-solar-50 text-ocean-700"
                    }`}
                  >
                    <Icon className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold truncate">{p.title}</p>
                    <p
                      className={`text-[10px] truncate ${
                        isSelected ? "text-slate-200" : "text-slate-400"
                      }`}
                    >
                      {p.frequency}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Protocol Card */}
          <div className="rounded-3xl border border-solar-300 bg-solar-50/50 p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-ocean-800">
                <CurrentIcon className="size-5 text-solar-600" />
                <h4 className="font-display text-base font-bold">{current.title}</h4>
              </div>
              <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-black uppercase text-ocean-700 border border-slate-200">
                {current.frequency}
              </span>
            </div>

            <p className="text-xs leading-5 text-slate-700">
              {current.description}
            </p>

            <div className="rounded-2xl bg-white p-3.5 border border-slate-200 space-y-1.5">
              <p className="text-[10px] font-black uppercase tracking-wider text-ocean-700">Standard Operating Protocol</p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {current.bulletPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1">
              <span><strong>Hardware:</strong> {current.tool}</span>
              <span className="font-bold text-ocean-700">{current.standard}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/services/solar-maintenance"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow hover:bg-ocean-800 transition"
            >
              <span>Explore O&M & AMC Plans</span>
              <ArrowRight className="size-3.5" />
            </Link>

            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
            >
              <Phone className="size-3.5 text-ocean-700" />
              <span>Book Site Cleaning Visit</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
