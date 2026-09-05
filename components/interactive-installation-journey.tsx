"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HardHat,
  ShieldCheck,
} from "lucide-react";

interface StepItem {
  num: string;
  stepNumber: number;
  title: string;
  phase: string;
  desc: string;
  activity: string;
  standard: string;
}

const steps: StepItem[] = [
  {
    num: "01",
    stepNumber: 1,
    title: "On-Site Rooftop & Shadow Feasibility Survey",
    phase: "Survey & Permitting",
    desc: "Our engineers inspect roof orientation, parapet wall shadows, structural load-bearing capacity, and cable pathways using precision clinometers.",
    activity: "Shadow mapping & True South roof orientation check",
    standard: "MNRE Technical Guidelines",
  },
  {
    num: "02",
    stepNumber: 2,
    title: "3D CAD Modeling & Optimum Tilt Engineering",
    phase: "Survey & Permitting",
    desc: "We generate a customized 3D solar layout with 25° to 27° true South tilt, maximizing annual kilowatt-hour generation under Bihar insolation rates.",
    activity: "3D solar layout & inter-row shading clearance",
    standard: "IS 875 Wind Speed Standards (150 km/h)",
  },
  {
    num: "03",
    stepNumber: 3,
    title: "Transparent BOM & DISCOM Feasibility Filing",
    phase: "Survey & Permitting",
    desc: "We provide an itemized Bill of Materials with Tier-1 brand datasheets and file grid synchronization applications on the PM Surya Ghar National Portal.",
    activity: "National Portal application & sanctioned load check",
    standard: "NBPDCL / SBPDCL Interconnection Regulations",
  },
  {
    num: "04",
    stepNumber: 4,
    title: "Structural Foundation & Hot-Dip GI Erection",
    phase: "Mechanical Assembly",
    desc: "Heavy-gauge galvanized steel columns (80+ microns zinc coating) anchored with chemical anchor bolts and multi-layer bitumen waterproofing.",
    activity: "Chemical anchor fasteners & rust-proof GI structure",
    standard: "IS 4759 Hot-Dip Galvanization (>80 microns)",
  },
  {
    num: "05",
    stepNumber: 5,
    title: "Tier-1 ALMM Module Clamping & Alignment",
    phase: "Mechanical Assembly",
    desc: "High-efficiency N-Type TOPCon or Mono PERC modules fastened with anodized aluminum mid/end clamps and UV-resistant EPDM dampening pads.",
    activity: "Calibrated torque wrench clamping with EPDM pads",
    standard: "Tier-1 ALMM & DCR MNRE Approved Modules",
  },
  {
    num: "06",
    stepNumber: 6,
    title: "Smart Inverter & Conduit DC Cabling",
    phase: "Electrical & Safety",
    desc: "Double-insulated UV-resistant XLPO solar DC cables routed through rigid PVC conduits into an IP65 smart grid-tied string inverter with dual MPPT.",
    activity: "100% conduit protection with dual-MPPT IP65 inverter",
    standard: "IEC 62109 Electrical Safety Certified",
  },
  {
    num: "07",
    stepNumber: 7,
    title: "Dedicated Chemical Earthing & Surge Arrestors",
    phase: "Electrical & Safety",
    desc: "Installation of separate copper-bonded chemical earthing pits for DC, AC, and Lightning Arrestor (LA), systematically tested below 5 Ohms.",
    activity: "3 dedicated copper earth pits + Class-A lightning arrestor",
    standard: "IS 3043 Earthing Code (Resistance <5 Ohms)",
  },
  {
    num: "08",
    stepNumber: 8,
    title: "Pre-Commissioning Quality & Torque Audit",
    phase: "Electrical & Safety",
    desc: "String open-circuit voltage (Voc), short-circuit current (Isc), insulation resistance, and bolt torque tightness systematically verified before grid connect.",
    activity: "Comprehensive insulation & string voltage verification",
    standard: "CEA Safety & Electricity Supply Regulations",
  },
  {
    num: "09",
    stepNumber: 9,
    title: "DISCOM Net Meter Testing & Synchronization",
    phase: "Grid Sync & Handover",
    desc: "Coordination with NBPDCL / SBPDCL electrical inspectors for bi-directional net-meter installation, seal inspection, and grid synchronization.",
    activity: "Bi-directional net-meter installation & seal check",
    standard: "BERC Net-Metering Regulations",
  },
  {
    num: "10",
    stepNumber: 10,
    title: "Handover Kit, App Setup & Subsidy Disbursal",
    phase: "Grid Sync & Handover",
    desc: "Client orientation for real-time mobile energy monitoring app, equipment warranty certificates, Single-Line Diagrams (SLD), and portal DBT clearance.",
    activity: "Mobile app Wi-Fi setup & Joint Inspection Report (JCR) upload",
    standard: "PM Surya Ghar DBT Subsidy Credit Protocol",
  },
];

export function InteractiveInstallationJourney() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = steps[activeStepIndex];

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* 10-Step Number Tabs Bar */}
      <div className="flex items-center justify-between gap-1 sm:gap-2 rounded-2xl bg-white p-2 sm:p-2.5 border border-slate-200 shadow-sm overflow-x-auto scrollbar-none">
        {steps.map((step, idx) => {
          const isActive = idx === activeStepIndex;
          return (
            <button
              key={step.num}
              type="button"
              onClick={() => setActiveStepIndex(idx)}
              className={`flex-1 min-w-[36px] sm:min-w-[44px] py-2 sm:py-2.5 rounded-xl text-xs font-black transition-all ${
                isActive
                  ? "bg-ocean-700 text-white shadow-md scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-ink font-bold"
              }`}
            >
              {step.num}
            </button>
          );
        })}
      </div>

      {/* Main Step Detail Card */}
      <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-card">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="grid size-12 sm:size-14 place-items-center rounded-2xl bg-solar-400 text-ink font-display font-black text-xl sm:text-2xl shadow-sm shrink-0">
              {currentStep.num}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-solar-100 px-3 py-0.5 text-[11px] font-black uppercase tracking-wider text-ocean-800 border border-solar-200">
                  {currentStep.phase}
                </span>
                <span className="text-xs text-slate-500 font-bold">
                  Step {currentStep.stepNumber} of 10
                </span>
              </div>
              <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-ink leading-snug">
                {currentStep.title}
              </h3>
            </div>
          </div>

          {/* Stepper Navigation Prev / Next */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-start">
            <button
              type="button"
              disabled={activeStepIndex <= 0}
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Previous installation step"
            >
              <ArrowLeft className="size-4" />
              <span>Previous</span>
            </button>
            <button
              type="button"
              disabled={activeStepIndex >= steps.length - 1}
              onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
              className="inline-flex items-center gap-1.5 rounded-xl bg-ocean-700 px-4 py-2 text-xs font-black text-white shadow hover:bg-ocean-800 transition disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Next installation step"
            >
              <span>Next</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Clear Description */}
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
          {currentStep.desc}
        </p>

        {/* 2 Clean Highlights: Activity + Quality Standard */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-2xl bg-slate-50 border border-slate-200/80 p-3.5">
            <div className="grid size-8 place-items-center rounded-xl bg-solar-100 text-solar-700 shrink-0">
              <HardHat className="size-4" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-ocean-700">
                Key Engineering Activity
              </span>
              <p className="mt-0.5 text-xs font-bold text-slate-800 leading-snug">
                {currentStep.activity}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl bg-slate-50 border border-slate-200/80 p-3.5">
            <div className="grid size-8 place-items-center rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
              <ShieldCheck className="size-4" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700">
                Compliance Standard
              </span>
              <p className="mt-0.5 text-xs font-bold text-slate-800 leading-snug">
                {currentStep.standard}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Bottom Bar */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-3.5 sm:p-4 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
          <p className="text-xs text-slate-600">
            Every step is documented in your <strong>Client Engineering Dossier</strong> with photos & test reports.
          </p>
        </div>

        <Link
          href="/installation"
          className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-ocean-700 hover:text-ocean-800 hover:underline underline-offset-4"
        >
          <span>View Technical Standards</span>
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}
