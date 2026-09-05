"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  {
    src: "/images/home/solar-home-hero.png",
    alt: "Elevated residential rooftop solar installation in Bihar by EKOSYS",
  },
  {
    src: "/images/services/industrial-solar.png",
    alt: "Industrial and commercial high-capacity solar plant in Bihar",
  },
  {
    src: "/images/installation/solar-installation-team.png",
    alt: "EKOSYS certified solar installation and engineering team",
  },
  {
    src: "/images/home/residential-solar.png",
    alt: "PM Surya Ghar rooftop solar installation on home in Bihar",
  },
  {
    src: "/images/services/solar-maintenance.png",
    alt: "Solar panel soft-water cleaning and thermographic maintenance",
  },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedIndices, setLoadedIndices] = useState<Set<number>>(() => new Set([0]));

  useEffect(() => {
    // Preload next image after initial render
    const nextIdx = (currentIndex + 1) % heroImages.length;
    setLoadedIndices((prev) => {
      if (prev.has(nextIdx)) return prev;
      const next = new Set(prev);
      next.add(nextIdx);
      return next;
    });

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % heroImages.length;
        setLoadedIndices((currentLoaded) => {
          const updated = new Set(currentLoaded);
          updated.add(next);
          updated.add((next + 1) % heroImages.length);
          return updated;
        });
        return next;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none" aria-hidden="true">
      {heroImages.map((img, index) => {
        const isActive = index === currentIndex;
        const shouldRender = loadedIndices.has(index);

        if (!shouldRender) return null;

        return (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={index === 0}
              quality={80}
              className="object-cover object-[60%_center]"
              sizes="100vw"
            />
          </div>
        );
      })}

      {/* Refined gradient overlay: high clarity over imagery on the right, soft contrast scrim on left for text */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,42,0.85)_0%,rgba(7,27,42,0.65)_35%,rgba(7,27,42,0.20)_65%,rgba(7,27,42,0.05)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/20" />
    </div>
  );
}

