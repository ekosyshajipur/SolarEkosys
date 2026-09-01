"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { CallButton, WhatsAppButton } from "./ui";

const serviceLinks = [
  ["Solar Products", "/services/solar-products"],
  ["Rooftop Solar", "/services/rooftop-solar"],
  ["Residential Solar", "/services/residential-solar"],
  ["Industrial Solar", "/services/industrial-solar"],
  ["Solar Maintenance", "/services/solar-maintenance"],
  ["Installation Services", "/services/installation-services"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isDarkHero = pathname === "/" || pathname?.startsWith("/services") || pathname === "/subsidy";

  useEffect(() => {
    const listener = () => setScrolled(window.scrollY > 16);
    listener();
    window.addEventListener("scroll", listener, { passive: true });
    return () => window.removeEventListener("scroll", listener);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Determine navbar appearance
  const isLightNav = scrolled || !isDarkHero;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 px-3 transition-all duration-300 sm:px-5 ${
          scrolled ? "pt-2.5" : "pt-4"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1480px] items-center justify-between gap-3 rounded-2xl px-3.5 py-2 transition-all duration-300 lg:px-5 ${
            isLightNav
              ? "border border-slate-200/90 bg-white/95 text-slate-800 shadow-card backdrop-blur-xl"
              : "border border-white/20 bg-ink/75 text-white shadow-card backdrop-blur-xl"
          }`}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex min-h-12 items-center rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-solar-400"
            aria-label="EKOSYS home"
          >
            <div className="flex items-center rounded-xl bg-white px-3 py-1.5 shadow-sm transition hover:bg-slate-50">
              <Image
                src="/webLogo.png"
                width={200}
                height={68}
                alt="EKOSYS Corporation"
                className="h-8 sm:h-9 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navLinks.slice(0, 2).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3.5 py-2 text-sm font-bold transition ${
                    isLightNav
                      ? isActive
                        ? "bg-slate-100 text-ocean-700 font-extrabold"
                        : "text-slate-700 hover:bg-slate-100 hover:text-ink"
                      : isActive
                      ? "bg-white/20 text-solar-400 font-extrabold"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Services Dropdown */}
            <div className="group relative">
              <Link
                href="/services"
                className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-bold transition ${
                  isLightNav
                    ? pathname.startsWith("/services")
                      ? "bg-slate-100 text-ocean-700 font-extrabold"
                      : "text-slate-700 hover:bg-slate-100 hover:text-ink"
                    : pathname.startsWith("/services")
                    ? "bg-white/20 text-solar-400 font-extrabold"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                Services <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
              </Link>

              <div className="invisible absolute left-0 top-full w-64 translate-y-2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100">
                {serviceLinks.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="block rounded-xl px-3 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-solar-50 hover:text-ocean-700"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(3).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3.5 py-2 text-sm font-bold transition ${
                    isLightNav
                      ? isActive
                        ? "bg-slate-100 text-ocean-700 font-extrabold"
                        : "text-slate-700 hover:bg-slate-100 hover:text-ink"
                      : isActive
                      ? "bg-white/20 text-solar-400 font-extrabold"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden items-center gap-2.5 xl:flex">
            <CallButton />
            <WhatsAppButton />
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <CallButton compact />
            <button
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
              className={`grid size-11 place-items-center rounded-full transition shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-solar-400 ${
                isLightNav
                  ? "bg-ink text-white hover:bg-ocean-700"
                  : "bg-white text-ink hover:bg-slate-100"
              }`}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-ink/75 backdrop-blur-sm lg:hidden transition-opacity">
          <aside
            className="ml-auto flex h-full w-full max-w-sm flex-col bg-white px-6 py-5 shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center rounded-xl bg-white px-2.5 py-1.5 shadow-sm"
              >
                <Image
                  src="/webLogo.png"
                  width={180}
                  height={60}
                  alt="EKOSYS Corporation"
                  className="h-8 w-auto object-contain"
                  priority
                />
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="grid size-11 place-items-center rounded-full border border-slate-200 text-ink hover:bg-slate-100 transition"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  onClick={() => setOpen(false)}
                  key={link.href}
                  href={link.href}
                  className="border-b border-slate-100 py-3.5 text-base font-extrabold text-ink hover:text-ocean-700 transition"
                >
                  {link.label}
                </Link>
              ))}

              <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                Our Services
              </p>
              <div className="mt-2 space-y-1">
                {serviceLinks.map(([label, href]) => (
                  <Link
                    onClick={() => setOpen(false)}
                    key={href}
                    href={href}
                    className="block py-2 text-sm font-bold text-slate-600 hover:text-ocean-700 transition"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="mt-auto pt-6 grid grid-cols-2 gap-3">
              <CallButton />
              <WhatsAppButton />
            </div>

            <a
              className="mt-4 text-center text-xs font-bold text-ocean-700 underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </aside>
        </div>
      )}
    </>
  );
}

