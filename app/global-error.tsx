"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Global Error]:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-[#071B2A] p-6 text-white antialiased font-sans">
        <div className="max-w-md text-center">
          <span className="inline-flex rounded-full bg-[#9CD62D]/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#9CD62D]">
            System Notice
          </span>
          <h1 className="mt-4 text-3xl font-black sm:text-4xl">Something went wrong</h1>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            An unexpected error occurred while loading this page. Please try refreshing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => reset()}
              className="rounded-full bg-[#9CD62D] px-6 py-3 text-sm font-extrabold text-[#071B2A] transition hover:bg-white"
            >
              Try again
            </button>
            <Link
              href="/"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/20"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
