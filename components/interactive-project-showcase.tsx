"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  ChevronUp,
  Cpu,
  MapPin,
  Maximize2,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { projectShowcases } from "@/lib/content";

interface ProjectDetails {
  id: string;
  title: string;
  category: string;
  location: string;
  capacity: string;
  features: string;
  image: string;
  description: string;
  // Extended technical specs
  inverterSpec?: string;
  moduleSpec?: string;
  structureSpec?: string;
  earthingSpec?: string;
  annualGeneration?: string;
  clientResult?: string;
}

const detailedProjects: ProjectDetails[] = projectShowcases.map((proj) => {
  if (proj.id === "proj-1") {
    return {
      ...proj,
      inverterSpec: "10 kW Three-Phase Smart Inverter with Dual MPPT & Wi-Fi Telemetry",
      moduleSpec: "18x 580Wp N-Type Bifacial TOPCon Modules (22.5% efficiency)",
      structureSpec: "Elevated 8.5-ft Hot-Dip Galvanized Iron (GI) 80+ micron canopy superstructure",
      earthingSpec: "Dual Chemical Copper-Bonded Earth Pits (<3.2 Ohms resistance)",
      annualGeneration: "~14,500 kWh units per year",
      clientResult: "Saved ₹1,08,000 in Year 1. 100% rooftop terrace preserved for evening family gatherings.",
    };
  }
  if (proj.id === "proj-2") {
    return {
      ...proj,
      inverterSpec: "50 kW IP65 Commercial String Inverter with Cloud SCADA Dashboard",
      moduleSpec: "92x Tier-1 High-Wattage Mono PERC Panels with ALMM Listing",
      structureSpec: "Custom RCC elevated framework with wind dampers rated for 150 km/h gusts",
      earthingSpec: "Triple Dedicated Earth Pits + Class-A Copper Lightning Arrestor",
      annualGeneration: "~72,000 kWh units per year",
      clientResult: "40% Accelerated Depreciation tax write-off under Section 32 + ₹5,20,000 annual tariff reduction.",
    };
  }
  if (proj.id === "proj-3") {
    return {
      ...proj,
      inverterSpec: "5 kW Single-Phase On-Grid Smart Inverter with anti-islanding relay",
      moduleSpec: "9x 580Wp DCR-Certified TOPCon Solar Modules for maximum subsidy",
      structureSpec: "Flush-mount hot-dip galvanized steel with bitumen waterproofing seals",
      earthingSpec: "Dual Chemical Earth Pits with bentonite moisture-retaining backfill",
      annualGeneration: "~7,200 kWh units per year",
      clientResult: "Full ₹98,000 Government Subsidy (Central ₹78k + State ₹20k) + ₹15k EKOSYS offer claimed.",
    };
  }
  if (proj.id === "proj-4") {
    return {
      ...proj,
      inverterSpec: "100 kW Industrial Inverter Cluster with Solar-DG Synchronization Controller",
      moduleSpec: "180x 560Wp High-Yield Industrial Solar PV Arrays",
      structureSpec: "Non-penetrating EPDM standing seam roof clamps preserving metal sheet warranty",
      earthingSpec: "Independent 4-pit chemical earthing ring with zero ground voltage differential",
      annualGeneration: "~1,44,000 kWh units per year",
      clientResult: "Diesel generator fuel consumption reduced by 42% during daytime power grid transitions.",
    };
  }
  if (proj.id === "proj-5") {
    return {
      ...proj,
      inverterSpec: "Comprehensive multi-inverter health diagnosis and firmware updates",
      moduleSpec: "Thermographic FLIR scanning of 400+ installed PV modules across two sites",
      structureSpec: "Torque re-tightening and corrosion audit of all mounting joints",
      earthingSpec: "Annual ground resistance calibration and electrolyte replenishment",
      annualGeneration: "+18% generation boost restored",
      clientResult: "Eliminated 12 hot-spot shaded cells and restored ~1,850 lost monthly generation units.",
    };
  }
  // proj-6
  return {
    ...proj,
    inverterSpec: "3.3 kW Smart On-Grid Inverter with mobile app synchronization",
    moduleSpec: "6x 580Wp Half-Cut Bifacial Panels with low temperature coefficient",
    structureSpec: "Hot-Dip Galvanized Iron elevated flush array with true-South 26° tilt",
    earthingSpec: "Dual Chemical Copper-Bonded Electrodes tested under 4.1 Ohms",
    annualGeneration: "~4,500 kWh units per year",
    clientResult: "Household daytime electricity bill brought to ₹0; PM Surya Ghar subsidy received in 28 days.",
  };
});

const filterCategories = [
  "All Installations",
  "Residential Rooftop",
  "Commercial Facility",
  "Industrial & Manufacturing",
  "Solar Maintenance",
];

export function InteractiveProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Installations");
  const [activeModalProject, setActiveModalProject] = useState<ProjectDetails | null>(null);
  const [showMoreMobile, setShowMoreMobile] = useState<boolean>(false);

  const filteredProjects =
    selectedCategory === "All Installations"
      ? detailedProjects
      : detailedProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {filterCategories.map((cat) => {
          const isSelected = selectedCategory === cat;
          const count =
            cat === "All Installations"
              ? detailedProjects.length
              : detailedProjects.filter((p) => p.category === cat).length;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setShowMoreMobile(false);
              }}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-black transition ${
                isSelected
                  ? "bg-ocean-700 text-white shadow-md scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-ink"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                  isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Projects */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-in fade-in duration-200">
        {filteredProjects.map((proj, index) => {
          const isHiddenOnMobile = index > 0 && !showMoreMobile;
          return (
            <div
              key={proj.id}
              className={`group ${isHiddenOnMobile ? "hidden md:flex" : "flex"} h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-solar-400 hover:shadow-card`}
            >
            {/* Image & Quick Badges */}
            <div className="relative h-52 w-full overflow-hidden bg-slate-900">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

              <div className="absolute left-3.5 top-3.5 rounded-full bg-ink/85 px-3 py-1 text-[11px] font-bold text-solar-400 backdrop-blur">
                {proj.category}
              </div>

              <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
                <span className="flex items-center gap-1 font-bold drop-shadow">
                  <MapPin className="size-3.5 text-solar-400" />
                  {proj.location}
                </span>
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-black uppercase backdrop-blur">
                  {proj.capacity}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="flex flex-1 flex-col p-5">
              <h4 className="font-display text-base sm:text-lg font-bold text-ink leading-snug group-hover:text-ocean-700 transition">
                {proj.title}
              </h4>
              <p className="mt-2 flex-1 text-xs leading-5 text-slate-600">
                {proj.description}
              </p>

              <div className="mt-3 rounded-xl bg-slate-50 p-2.5 border border-slate-100 text-[11px] text-slate-700">
                <strong className="text-ocean-800">Highlights:</strong> {proj.features}
              </div>

              {/* Action Button */}
              <div className="mt-4 border-t border-slate-100 pt-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(proj)}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-ocean-700 hover:text-ocean-900"
                >
                  <Maximize2 className="size-3.5" />
                  <span>Inspect System Architecture</span>
                </button>

                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  Verified Yield
                </span>
              </div>
            </div>
          </div>
        );
      })}
      </div>

      {/* Mobile View More Toggle */}
      {filteredProjects.length > 1 && (
        <div className="mt-6 text-center md:hidden">
          <button
            type="button"
            onClick={() => setShowMoreMobile(!showMoreMobile)}
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-xs font-black uppercase tracking-wider text-ocean-700 shadow-sm transition hover:bg-slate-50 hover:border-ocean-300 active:scale-95"
          >
            <span>{showMoreMobile ? "Show Less Projects" : `View More Projects (${filteredProjects.length - 1} More)`}</span>
            {showMoreMobile ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
          </button>
        </div>
      )}

      {/* INTERACTIVE DETAIL MODAL */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-ink/70 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border-2 border-solar-400 bg-white p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
              aria-label="Close project specifications modal"
            >
              <X className="size-5" />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-solar-100 px-3 py-1 text-xs font-black uppercase text-ocean-800">
                {activeModalProject.category}
              </span>
              <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                <MapPin className="size-3 text-slate-400" />
                {activeModalProject.location}
              </span>
            </div>

            <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-ink">
              {activeModalProject.title}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeModalProject.description}
            </p>

            {/* Visual Specs Matrix */}
            <div className="mt-5 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-ocean-800 flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-solar-500" />
                Engineering Specifications & Bill of Materials
              </h4>

              <div className="grid gap-2.5 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-3 border border-slate-100">
                  <div className="flex items-center gap-1.5 text-ocean-700 text-xs font-black uppercase">
                    <Sun className="size-3.5 text-solar-500" />
                    <span>Solar Modules</span>
                  </div>
                  <p className="mt-1 text-xs font-bold text-ink">{activeModalProject.moduleSpec}</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-3 border border-slate-100">
                  <div className="flex items-center gap-1.5 text-ocean-700 text-xs font-black uppercase">
                    <Cpu className="size-3.5 text-solar-500" />
                    <span>Smart Inverter & BOS</span>
                  </div>
                  <p className="mt-1 text-xs font-bold text-ink">{activeModalProject.inverterSpec}</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-3 border border-slate-100">
                  <div className="flex items-center gap-1.5 text-ocean-700 text-xs font-black uppercase">
                    <Building2 className="size-3.5 text-solar-500" />
                    <span>Mounting Structure</span>
                  </div>
                  <p className="mt-1 text-xs font-bold text-ink">{activeModalProject.structureSpec}</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-3 border border-slate-100">
                  <div className="flex items-center gap-1.5 text-ocean-700 text-xs font-black uppercase">
                    <ShieldCheck className="size-3.5 text-solar-500" />
                    <span>Earthing & Safety</span>
                  </div>
                  <p className="mt-1 text-xs font-bold text-ink">{activeModalProject.earthingSpec}</p>
                </div>
              </div>
            </div>

            {/* Performance & Customer Result */}
            <div className="mt-4 rounded-2xl bg-solar-50 p-4 border border-solar-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-ocean-800">
                  ⚡ Annual Energy Yield:
                </span>
                <span className="font-display text-sm font-black text-ink">
                  {activeModalProject.annualGeneration}
                </span>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-700">
                <strong className="text-ink">Client Outcome:</strong> {activeModalProject.clientResult}
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href={`/contact?project=${encodeURIComponent(activeModalProject.title)}`}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-ocean-700 px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow hover:bg-ocean-800 transition"
              >
                <span>Request Similar System Proposal</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="w-full sm:w-auto rounded-full border border-slate-200 px-5 py-3 text-xs font-bold text-slate-600 hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
