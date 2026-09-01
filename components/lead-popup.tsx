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
              <p className="mt-4 text-xs font-black uppercase tracking-[.18em] text-ocean-700">Get Solar Assistance in Bihar</p>

              {mode === "offer" ? (
                <>
                  <h2 id="lead-popup-title" className="mt-2 font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
                    Get Free Solar Consultation & Subsidy Guidance
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    पहले आएं, पहले पाओ के आधार पर सोलर सब्सिडी की सही जानकारी पाएं.
                  </p>
                  <p>Speak with our Experts to evaluate your rooftop suitability.</p>
                  
                  <div className="mt-3.5 rounded-2xl border-2 border-solar-400 bg-gradient-to-r from-solar-100/90 to-solar-50 p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-ocean-700">
                      <Sparkles className="size-4 shrink-0 text-solar-600" />
                      <p className="text-xs font-black uppercase tracking-wider">Limited Period Subsidy Scheme</p>
                    </div>
                    <p className="mt-1.5 font-display text-lg font-black text-ink sm:text-xl leading-tight">
                      Get Up to <span className="text-ocean-700 underline underline-offset-2">₹1,13,000 Total Subsidy</span>
                    </p>
                    <p className="mt-1.5 text-[11px] font-bold text-slate-700 leading-snug">
                      PM Surya Ghar Central DBT (₹78,000) + Extra Special State Subsidy (₹20,000) + EKOSYS Assistance (₹15,000) = <span className="text-ocean-700 font-extrabold">₹1,13,000*</span>
                    </p>
                  </div>

                  <ul className="mt-4 space-y-2 text-xs sm:text-sm font-bold text-slate-700">
                    {[
                      "Up to ₹1,13,000* Total Subsidy Benefit assistance",
                      "Custom 3D rooftop shadow analysis",
                      "PM Surya Ghar paperwork & DISCOM net-metering support",
                      "Tier-1 components with 30-Year Warranty*",
                      "Prompt local engineering team in Bihar",
                    ].map((item) => (
                      <li className="flex items-start gap-2.5" key={item}>
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-solar-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setMode("form")}
                    className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-solar-400 px-5 text-sm font-extrabold text-ink shadow-glow transition hover:bg-solar-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-solar-500"
                  >
                    Request Free Solar Quote
                  </button>

                  <a
                    href={`tel:${site.phone}`}
                    className="mt-3 flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-200 text-sm font-bold text-ink transition hover:bg-slate-50"
                  >
                    <Phone className="size-4 text-ocean-700" />
                    Call {site.phoneDisplay}
                  </a>
                </>
              ) : (
                <>
                  <h2 id="lead-popup-title" className="mt-2 font-display text-2xl font-bold text-ink">
                    Request Solar Callback
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">Share your details and an EKOSYS engineer will contact you promptly.</p>
                  <div className="mt-5">
                    <ContactForm compact onSuccess={handleSuccess} />
                  </div>
                </>
              )}

              
            </div>
          </section>
        </div>
  );
}
