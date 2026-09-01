import type { Metadata, Viewport } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LeadPopup } from "@/components/lead-popup";
import { SiteBehavior } from "@/components/site-behavior";
import { absoluteUrl, site } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#071B2A",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "EKOSYS | Solar Installation & Products in Hajipur, Bihar",
    template: "%s | EKOSYS Solar Bihar",
  },
  description:
    "EKOSYS Corporation provides Tier-1 solar panels, inverters, rooftop residential and industrial solar installations, maintenance services, and PM Surya Ghar subsidy guidance across Hajipur, Vaishali, and Bihar.",
  keywords: [
    "solar company Hajipur",
    "solar installation Bihar",
    "rooftop solar Hajipur",
    "solar subsidy Bihar",
    "PM Surya Ghar Muft Bijli Yojana Bihar",
    "solar panel price in Bihar",
    "residential solar installation",
    "industrial solar installation",
    "solar maintenance services Hajipur",
    "solar installer near me",
  ],
  authors: [{ name: "EKOSYS Corporation", url: site.url }],
  creator: "EKOSYS Corporation",
  publisher: "EKOSYS Corporation",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "EKOSYS Solar",
    title: "EKOSYS | Smarter Solar Energy for Bihar",
    description:
      "Reliable solar products, rooftop installation, and PM Surya Ghar subsidy processing from Hajipur, Bihar.",
    images: [
      {
        url: "/images/home/solar-home-hero.png",
        width: 1672,
        height: 942,
        alt: "EKOSYS residential rooftop solar installation in Bihar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EKOSYS | Smarter Solar Energy for Bihar",
    description:
      "Reliable solar products, rooftop installation, and PM Surya Ghar subsidy processing from Hajipur, Bihar.",
    images: ["/images/home/solar-home-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SolarEnergyCompany"],
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    logo: absoluteUrl("/webLogo.png"),
    image: absoluteUrl("/images/home/solar-home-hero.png"),
    telephone: site.phone,
    email: site.email,
    priceRange: "₹₹",
    hasMap: site.mapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.city,
      addressRegion: site.state,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    areaServed: site.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    description:
      "EKOSYS Corporation provides Tier-1 solar panels, inverters, rooftop solar installations, maintenance services, and PM Surya Ghar subsidy guidance from Hajipur, Bihar.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <html lang="en" className={`${manrope.variable} ${outfit.variable}`}>
      <body className="antialiased selection:bg-solar-100 selection:text-ink">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <SiteBehavior />
        <LeadPopup />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
