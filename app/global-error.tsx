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
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#071B2A",
          padding: "1.5rem",
          color: "#ffffff",
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          margin: 0,
        }}
      >
        <div style={{ maxWidth: "28rem", textAlign: "center" }}>
          <span
            style={{
              display: "inline-flex",
              borderRadius: "9999px",
              backgroundColor: "rgba(156,214,45,0.2)",
              padding: "0.25rem 0.875rem",
              fontSize: "0.75rem",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#9CD62D",
            }}
          >
            System Notice
          </span>
          <h1
            style={{
              marginTop: "1rem",
              fontSize: "2rem",
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.875rem",
              lineHeight: 1.6,
              color: "#cbd5e1",
            }}
          >
            An unexpected error occurred while loading this page. Please try
            refreshing.
          </p>
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.75rem",
            }}
          >
            <button
              onClick={() => reset()}
              style={{
                borderRadius: "9999px",
                backgroundColor: "#9CD62D",
                padding: "0.75rem 1.5rem",
                fontSize: "0.875rem",
                fontWeight: 800,
                color: "#071B2A",
                border: "none",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <Link
              href="/"
              style={{
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.2)",
                backgroundColor: "rgba(255,255,255,0.1)",
                padding: "0.75rem 1.5rem",
                fontSize: "0.875rem",
                fontWeight: 800,
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
