import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-slate-50/80 pb-20 pt-14 text-slate-800 md:pb-10 border-t border-slate-200/90 shadow-inner" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_.75fr_1.65fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center rounded-2xl border border-slate-200 bg-white px-3.5 py-2 shadow-sm transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean-600"
              aria-label="EKOSYS home"
            >
              <Image
                src="/webLogo.png"
                width={220}
                height={75}
                alt="EKOSYS Corporation"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm leading-7 text-slate-700 font-medium text-sm">
              Bihar&apos;s trusted solar engineering partner. High-efficiency solar modules, rooftop installation, commercial solar, maintenance, and PM Surya Ghar subsidy guidance from Hajipur, Bihar.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 font-black text-sm text-ocean-700 hover:text-ocean-800 transition underline underline-offset-4"
              >
                <span>Get free solar consultation</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-ocean-800">Navigation</p>
            <ul className="mt-4 space-y-2.5 text-sm font-bold text-slate-800">
              {[
                ["Home", "/"],
                ["About EKOSYS", "/about"],
                ["All Services", "/services"],
                ["Solar Subsidy Guide", "/subsidy"],
                ["Installation Process", "/installation"],
                ["Solar Knowledge Hub", "/blog"],
                ["Contact & Location", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition hover:text-ocean-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean-600 rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-ocean-800">Hajipur Office & Shop</p>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <ul className="space-y-3.5 text-sm leading-6 font-bold text-slate-800">
                <li className="flex gap-2.5">
                  <MapPin className="mt-1 size-4 shrink-0 text-ocean-700" />
                  <span className="font-semibold text-slate-800">{site.address}</span>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2.5 transition hover:text-ocean-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean-600 rounded text-slate-900 font-bold"
                    href={`tel:${site.phone}`}
                  >
                    <Phone className="size-4 text-ocean-700 shrink-0" />
                    <span>{site.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2.5 break-all transition hover:text-ocean-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean-600 rounded text-slate-900 font-bold"
                    href={`mailto:${site.email}`}
                  >
                    <Mail className="size-4 shrink-0 text-ocean-700" />
                    <span>{site.email}</span>
                  </a>
                </li>
              </ul>

              <div className="flex flex-col gap-3">
                <div className="relative h-36 w-full overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm">
                  <iframe
                    title="EKOSYS shop location in Hajipur, Bihar"
                    src={site.embedMapUrl}
                    className="h-full w-full border-0 transition duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-solar-400 px-3.5 py-2.5 text-xs font-black uppercase tracking-wider text-ink shadow-sm transition hover:bg-solar-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean-600"
                >
                  <Navigation className="size-3.5 shrink-0" />
                  <span>Direct to Shop on Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200/90 pt-6 text-xs text-slate-600 font-medium sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap gap-5 font-bold">
            <Link href="/privacy" className="hover:text-ocean-700 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ocean-700 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
