"use client";

import Link from "next/link";
import { MessageSquare, Phone, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export function MobileFloatingBar() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 block border-t border-slate-200/80 bg-white/95 px-3 py-2 shadow-2xl backdrop-blur-md lg:hidden"
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-2">
        {/* Call Button */}
        <a
          href={`tel:${site.phone}`}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 py-2.5 text-xs font-bold text-ink shadow-sm active:scale-95 transition"
        >
          <Phone className="size-3.5 text-ocean-700" />
          <span>Call Us</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-sm active:scale-95 transition hover:bg-emerald-700"
        >
          <MessageSquare className="size-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Subsidy & Quote Trigger */}
        <Link
          href="/contact"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-solar-400 py-2.5 text-xs font-black uppercase tracking-wider text-ink shadow-sm active:scale-95 transition hover:bg-solar-100"
        >
          <Sparkles className="size-3.5" />
          <span>Get Quote</span>
        </Link>
      </div>
    </aside>
  );
}
