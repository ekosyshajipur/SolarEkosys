"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";
import { SolarProductDetail, detailedProductsList } from "@/lib/content";

const categories = [
  "All Products",
  "Panels",
  "Inverters",
  "Batteries",
  "Structures",
  "Protection",
] as const;

export function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
  const [activeProduct, setActiveProduct] = useState<SolarProductDetail | null>(null);

  const filteredProducts =
    selectedCategory === "All Products"
      ? detailedProductsList
      : detailedProductsList.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-6">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider transition ${
                isActive
                  ? "bg-ink text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-ink"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Product Cards Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => setActiveProduct(product)}
            className="group flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-ocean-600 hover:shadow-card"
          >
            <div>
              {/* Product Image Box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute left-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-[11px] font-bold text-solar-400 backdrop-blur">
                  {product.badge}
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-extrabold text-ink shadow">
                  <Star className="size-3 fill-solar-500 text-solar-500" />
                  <span>{product.rating}</span>
                </div>
              </div>

              {/* Title & Category */}
              <div className="mt-5 flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-ocean-700">
                  {product.category}
                </span>
                <span className="text-[11px] font-bold text-slate-500">{product.warranty}</span>
              </div>

              <h3 className="mt-2 font-display text-lg font-bold text-ink leading-snug group-hover:text-ocean-700 transition">
                {product.name}
              </h3>

              <p className="mt-2.5 text-xs leading-5 text-slate-600 line-clamp-2">
                {product.shortDesc}
              </p>

              {/* Quick Spec Highlights */}
              <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Efficiency / Rating:</span>
                  <strong className="text-ink">{product.efficiency}</strong>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Key Spec:</span>
                  <span className="font-semibold text-slate-700 truncate max-w-[170px]">
                    {product.specs[0]?.value}
                  </span>
                </div>
              </div>
            </div>

            {/* Click to view detail button */}
            <div className="mt-6 border-t border-slate-100 pt-4">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-solar-50 py-2.5 text-xs font-bold text-ocean-700 transition group-hover:bg-ocean-700 group-hover:text-white"
              >
                <span>View Full Specifications</span>
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Detail Modal / Drawer */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            onClick={() => setActiveProduct(null)}
            className="absolute inset-0 bg-ink/75 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2.5rem] bg-white shadow-2xl animate-in zoom-in-95 duration-200"
          >
              {/* Close Button */}
              <button
                onClick={() => setActiveProduct(null)}
                aria-label="Close product details"
                className="absolute right-5 top-5 z-10 grid size-10 place-items-center rounded-full bg-slate-100 text-ink hover:bg-slate-200 transition"
              >
                <X className="size-5" />
              </button>

              <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr]">
                {/* Left Column: Image & Quick Badges */}
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-sm">
                    <Image
                      src={activeProduct.image}
                      alt={activeProduct.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-ink/85 px-3 py-1 text-xs font-bold text-solar-400 backdrop-blur">
                      {activeProduct.badge}
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl bg-solar-50/80 p-5 border border-solar-100">
                    <p className="text-xs font-black uppercase tracking-wider text-ocean-700">
                      Product Highlights
                    </p>
                    <ul className="mt-3 space-y-2 text-xs font-bold text-slate-700">
                      <li className="flex items-center gap-2">
                        <ShieldCheck className="size-4 text-solar-600" />
                        <span>Warranty: {activeProduct.warranty}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="size-4 text-solar-600" />
                        <span>Performance: {activeProduct.efficiency}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="size-4 text-solar-600 fill-solar-600" />
                        <span>Verified Rating: {activeProduct.rating}</span>
                      </li>
                    </ul>
                  </div>

                  {/* Certifications Badges */}
                  <div className="mt-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Standard Certifications
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {activeProduct.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Deep Tech Specs & Description */}
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ocean-50 px-3 py-1 text-xs font-bold text-ocean-700">
                    <Sparkles className="size-3.5" /> {activeProduct.category} Catalog
                  </span>

                  <h2 className="mt-3 font-display text-2xl font-black text-ink sm:text-3xl leading-snug">
                    {activeProduct.name}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {activeProduct.fullDesc}
                  </p>

                  {/* Complete Technical Datasheet Table */}
                  <div className="mt-6">
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink border-b border-slate-200 pb-2">
                      Technical Datasheet & Specifications
                    </h3>
                    <div className="mt-3 divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-slate-50/50 p-2">
                      {activeProduct.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-2.5 text-xs"
                        >
                          <span className="font-semibold text-slate-500">{spec.label}</span>
                          <strong className="text-ink sm:text-right">{spec.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features List */}
                  <div className="mt-6">
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
                      Engineering Advantages
                    </h3>
                    <ul className="mt-3 space-y-2 text-xs leading-5 text-slate-700">
                      {activeProduct.keyFeatures.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-ocean-700" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For Application */}
                  <div className="mt-6 rounded-2xl bg-slate-100 p-4 text-xs text-slate-700">
                    <strong className="text-ink block mb-1">Recommended Application:</strong>
                    {activeProduct.bestFor}
                  </div>

                  {/* Action CTAs */}
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link
                      href="/contact"
                      onClick={() => setActiveProduct(null)}
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-black uppercase tracking-wider text-white shadow-lg transition hover:bg-ocean-700"
                    >
                      <span>Request Quote for this Product</span>
                      <ArrowRight className="size-4" />
                    </Link>

                    <a
                      href={`https://wa.me/917644868086?text=${encodeURIComponent(
                        `Hello EKOSYS, I am interested in technical details and pricing for: ${activeProduct.name}`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-solar-400 px-5 py-3 text-xs font-black uppercase tracking-wider text-ink transition hover:bg-solar-500"
                    >
                      <MessageCircle className="size-4" />
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}
