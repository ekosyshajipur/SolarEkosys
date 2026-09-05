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
      {/* Floating Action Buttons Desktop Only */}
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
    </>
  );
}
