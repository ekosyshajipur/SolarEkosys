"use client";

import Image from "next/image";
import { X, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ContactForm } from "./contact-form";
import { site } from "@/lib/site";

const FIVE_MINUTES = 5 * 60 * 1000;
const SESSION_KEY = "ekosys_lead_submitted";

export function LeadPopup() {
  const [mode, setMode] = useState<"hidden" | "offer" | "form">("hidden");
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const isSubmitted = useCallback(() => {
    if (typeof window === "undefined") return false;
    try {
      return sessionStorage.getItem(SESSION_KEY) === "true";
    } catch {
      return false;
    }
  }, []);

  const markSubmitted = useCallback(() => {
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem(SESSION_KEY, "true");
      } catch {
        // ignore storage errors
      }
    }
  }, []);

  const schedulePopup = useCallback(
    (delayMs: number) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      if (isSubmitted()) return;

      timerRef.current = setTimeout(() => {
        if (!isSubmitted()) {
          setMode("offer");
        }
      }, delayMs);
    },
    [isSubmitted]
  );

  // Initial 6-second trigger on mount
  useEffect(() => {
    schedulePopup(6000);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [schedulePopup]);

  const dismiss = useCallback(() => {
    setMode("hidden");
    if (!isSubmitted()) {
      schedulePopup(FIVE_MINUTES);
    }
  }, [isSubmitted, schedulePopup]);

  // Handle ESC key and focus management
  useEffect(() => {
    if (mode === "hidden") return;

    const timer = setTimeout(() => {
      closeRef.current?.focus();
    }, 50);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismiss();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [mode, dismiss]);

  function handleSuccess() {
    markSubmitted();
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setTimeout(() => {
      setMode("hidden");
    }, 2500);
  }

  if (mode === "hidden") return null;

  return (
    <div
      className="fixed inset-0 z-[70] grid place-items-end bg-ink/60 p-3 backdrop-blur-sm sm:place-items-center sm:p-5 animate-in fade-in duration-200"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-popup-title"
        className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl sm:p-7 animate-in zoom-in-95 duration-200"
      >
        <button
          ref={closeRef}
          onClick={dismiss}
          aria-label="Close solar assistance popup"
          className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-slate-200 text-ink transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-solar-400"
        >
          <X className="size-4" />
        </button>

            <div className="pr-8">
              <div className="flex items-center">
                <Image src="/webLogo.png" width={150} height={44} alt="EKOSYS logo" className="h-8 w-auto object-contain" />
              </div>
              <p className="mt-3 text-xs font-black uppercase tracking-[.18em] text-ocean-700">Get Solar Assistance in Bihar</p>

              {mode === "offer" ? (
                <>
                  <h2 id="lead-popup-title" className="mt-1.5 font-display text-xl sm:text-2xl font-black leading-tight text-ink">
                    PM Surya Ghar Subsidy & Limited Offer
                  </h2>
                  <p className="mt-1 text-xs text-slate-600 font-medium">
                    पहले आएं, पहले पाएं के आधार पर सोलर सब्सिडी और विशेष छूट का लाभ उठाएं।
                  </p>

                  {/* HIGHLIGHT SUBSIDY & EXCLUSIVE OFFER CARD */}
                  <div className="mt-3 overflow-hidden rounded-2xl border-2 border-solar-400 bg-gradient-to-br from-solar-50 via-white to-solar-100/50 p-3.5 shadow-sm">
                    <div className="flex items-center justify-between gap-1 border-b border-solar-200/80 pb-2">
                      <div className="flex items-center gap-1.5 text-ocean-800">
                        <Sparkles className="size-3.5 text-solar-600 shrink-0" />
                        <span className="text-[11px] font-black uppercase tracking-wider">PM Surya Ghar + Bihar Scheme</span>
                      </div>
                      <span className="rounded-full bg-ocean-700 px-2 py-0.5 text-[10px] font-bold text-white">
                        3 kW Setup
                      </span>
                    </div>

                    {/* Government Subsidy Equation */}
                    <div className="mt-2.5 rounded-xl bg-white p-2.5 border border-slate-200">
                      <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">Government Direct Subsidy (DBT)</p>
                      <p className="mt-1 text-xs sm:text-sm font-extrabold text-ink leading-snug">
                        PM Surya Ghar Central DBT (<span className="text-ocean-700">₹78,000</span>) + Extra State Subsidy (<span className="text-ocean-700">₹20,000</span>) = <span className="text-ocean-700 font-black">₹98,000</span>
                      </p>
                    </div>

                    {/* Limited Offer (Not from Subsidy) */}
                    <div className="mt-2 rounded-xl bg-gradient-to-r from-amber-500/10 to-solar-100 p-2.5 border border-amber-400/50">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-wider text-amber-900">
                          ⚡ Limited Offer (Not from Subsidy)
                        </span>
                        <span className="text-[9px] font-black uppercase text-amber-800 bg-amber-200/80 px-1.5 py-0.5 rounded">
                          First Come First Serve
                        </span>
                      </div>
                      <p className="mt-1 text-xs font-black text-ink">
                        EKOSYS Assistance: <span className="text-ocean-700 font-extrabold text-sm">₹15,000 Discount</span>
                      </p>
                      <p className="text-[10px] text-slate-600 mt-0.5">
                        Exclusive installer discount for limited period while slots last.
                      </p>
                    </div>

                    {/* Combined Total Benefit */}
                    <div className="mt-2.5 flex items-center justify-between bg-ink text-white rounded-xl px-3 py-2">
                      <span className="text-xs font-bold text-slate-300">Total Financial Benefit:</span>
                      <span className="text-sm sm:text-base font-display font-black text-solar-400">₹1,13,000*</span>
                    </div>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-xs font-bold text-slate-700">
                    {[
                      "Central DBT ₹78,000 + State Subsidy ₹20,000 = ₹98,000",
                      "EKOSYS Limited Offer: Extra ₹15,000 Assistance",
                      "End-to-end NBPDCL / SBPDCL net-metering & portal paperwork",
                      "Tier-1 TOPCon Solar Modules with 30-Year Warranty*",
                    ].map((item) => (
                      <li className="flex items-start gap-2" key={item}>
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-600" />
                        <span className="text-[11px] leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setMode("form")}
                    className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-solar-400 px-5 text-xs font-black uppercase tracking-wider text-ink shadow-glow transition hover:bg-solar-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-solar-500"
                  >
                    Claim Limited Offer & Get Quote
                  </button>

                  <div className="mt-2.5 grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${site.phone}`}
                      className="flex min-h-10 items-center justify-center gap-1.5 rounded-full border border-slate-200 text-xs font-bold text-ink transition hover:bg-slate-50"
                    >
                      <Phone className="size-3.5 text-ocean-700" />
                      Call Us
                    </a>
                    <a
                      href={site.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-10 items-center justify-center gap-1.5 rounded-full bg-emerald-600 text-xs font-bold text-white transition hover:bg-emerald-700 shadow-sm"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <h2 id="lead-popup-title" className="mt-2 font-display text-xl font-bold text-ink">
                    Request Solar Callback
                  </h2>
                  <p className="mt-1 text-xs text-slate-600">Share your details and an EKOSYS engineer will contact you promptly.</p>
                  <div className="mt-4">
                    <ContactForm compact onSuccess={handleSuccess} />
                  </div>
                  <button
                    onClick={() => setMode("offer")}
                    className="mt-3 text-xs font-bold text-slate-500 underline text-center w-full hover:text-ink"
                  >
                    ← Back to Subsidy & Offer Details
                  </button>
                </>
              )}

              
            </div>
          </section>
        </div>
  );
}
