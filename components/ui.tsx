import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

type Variant = "primary" | "light" | "outline" | "dark";
const classes: Record<Variant, string> = {
  primary: "bg-solar-400 text-ink hover:bg-solar-100 shadow-glow",
  light: "bg-white text-ink hover:bg-solar-50 shadow-card",
  outline: "border border-white/45 bg-white/10 text-white hover:bg-white hover:text-ink",
  dark: "bg-ink text-white hover:bg-ocean-700",
};

export function ButtonLink({ href, children, variant = "primary", className = "", arrow = false }: { href: string; children: ReactNode; variant?: Variant; className?: string; arrow?: boolean }) {
  const content = <>{children}{arrow && <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />}</>;
  const common = `group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solar-400 ${classes[variant]} ${className}`;
  return href.startsWith("/") ? <Link href={href} className={common}>{content}</Link> : <a href={href} className={common}>{content}</a>;
}

export function CallButton({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return <a href={`tel:${site.phone}`} aria-label="Call EKOSYS" className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm font-extrabold text-white transition hover:bg-ocean-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solar-400 ${className}`}><Phone className="size-4" />{!compact && <span>Call now</span>}</a>;
}

export function WhatsAppButton({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return <a href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="Message EKOSYS on WhatsApp" className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#20b957] px-4 text-sm font-extrabold text-white transition hover:bg-[#159746] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solar-400 ${className}`}><MessageCircle className="size-4" />{!compact && <span>WhatsApp</span>}</a>;
}

export function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow?: string; title: string; text?: string; center?: boolean }) {
  return <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
    {eyebrow && <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-ocean-500">{eyebrow}</p>}
    <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">{title}</h2>
    {text && <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">{text}</p>}
  </div>;
}
