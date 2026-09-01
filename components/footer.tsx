import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink pb-20 pt-12 text-white md:pb-10 border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_.75fr_1.65fr]">
          <div>
            <Link href="/" className="inline-flex items-center rounded-2xl bg-white px-4 py-2.5 shadow-md transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-solar-400" aria-label="EKOSYS home">
              <Image src="/webLogo.png" width={220} height={75} alt="EKOSYS Corporation" className="h-11 sm:h-12 w-auto object-contain" />
            </Link>
            <p className="mt-4 max-w-sm leading-7 text-slate-300 text-sm">
              Bihar&apos;s trusted solar engineering partner. High-efficiency solar modules, rooftop installation, commercial solar, maintenance, and PM Surya Ghar subsidy guidance from Hajipur, Bihar.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <Link href="/contact" className="inline-flex items-center gap-2 font-extrabold text-sm text-solar-400 hover:text-white transition">
                Get free solar consultation <ArrowUpRight className="size-4" />
              </Link>
              
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-solar-400">Navigation</p>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold text-slate-300">
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
                  <Link href={href} className="transition hover:text-solar-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-solar-400 rounded">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-solar-400">Hajipur Office & Shop</p>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <ul className="space-y-3.5 text-sm leading-6 text-slate-300">
                <li className="flex gap-2.5">
                  <MapPin className="mt-1 size-4 shrink-0 text-solar-400" />
                  <span>{site.address}</span>
                </li>
                <li>
                  <a className="flex items-center gap-2.5 transition hover:text-solar-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-solar-400 rounded" href={`tel:${site.phone}`}>
                    <Phone className="size-4 text-solar-400 shrink-0" />
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-2.5 break-all transition hover:text-solar-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-solar-400 rounded" href={`mailto:${site.email}`}>
                    <Mail className="size-4 shrink-0 text-solar-400" />
                    {site.email}
                  </a>
                </li>
                
              </ul>

              <div className="flex flex-col gap-3">
                <div className="relative h-36 w-full overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-inner">
                  <iframe
                    title="EKOSYS shop location in Hajipur, Bihar"
                    src={site.embedMapUrl}
                    className="h-full w-full border-0 grayscale hover:grayscale-0 transition duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-solar-400 px-3.5 py-2 text-xs font-black uppercase tracking-wider text-ink transition hover:bg-solar-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-solar-400"
                >
                  <Navigation className="size-3.5 shrink-0" />
                  Direct to Shop on Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="hover:text-slate-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-200">Terms of Service</Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
