"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Page Error]:", error);
  }, [error]);

  return (
    <section className="grid min-h-[70vh] place-items-center px-5 text-center">
      <div>
        <p className="eyebrow">Something went wrong</p>
        <h1 className="font-display text-4xl font-bold text-ink">We couldn&apos;t load this page.</h1>
        <p className="mt-4 max-w-md leading-7 text-slate-600">
          Please try again. If the issue continues, contact EKOSYS directly.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <button
            onClick={() => reset()}
            className="rounded-full bg-ink px-5 py-3 text-sm font-extrabold text-white transition hover:bg-ocean-700"
          >
            Try again
          </button>
          <Link
            href="/contact"
            className="rounded-full bg-solar-400 px-5 py-3 text-sm font-extrabold text-ink transition hover:bg-solar-100"
          >
            Contact EKOSYS
          </Link>
        </div>
      </div>
    </section>
  );
}

