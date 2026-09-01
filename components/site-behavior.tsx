"use client";

import { MessageCircle, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { site } from "@/lib/site";

export function SiteBehavior() {
  const path = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [path]);

  return (
    <>
      {/* Floating Action Buttons Desktop */}
      <div className="fixed bottom-6 right-4 z-30 hidden flex-col gap-2.5 md:flex">
        <a
          href={`tel:${site.phone}`}
          aria-label="Call EKOSYS"
          className="grid size-12 place-items-center rounded-full bg-ink text-white shadow-card hover:bg-ocean-700 transition"
        >
          <Phone className="size-5" />
        </a>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp EKOSYS"
          className="grid size-12 place-items-center rounded-full bg-[#20b957] text-white shadow-card hover:bg-[#159746] transition"
        >
          <MessageCircle className="size-5" />
        </a>
      </div>

      {/* Floating Mobile Sticky Action Bar */}
      <div className="fixed inset-x-3 bottom-3 z-30 grid grid-cols-3 gap-2 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-card backdrop-blur md:hidden">
        <a
          href={`tel:${site.phone}`}
          className="flex min-h-11 items-center justify-center gap-1.5 rounded-xl bg-ink text-xs font-extrabold text-white"
        >
          <Phone className="size-4" />
          Call
        </a>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-11 items-center justify-center gap-1.5 rounded-xl bg-[#20b957] text-xs font-extrabold text-white"
        >
          <MessageCircle className="size-4" />
          WhatsApp
        </a>
        <a
          href="/contact"
          className="flex min-h-11 items-center justify-center rounded-xl bg-solar-400 text-xs font-extrabold text-ink"
        >
          Get quote
        </a>
      </div>
    </>
  );
}
