export const site = {
  name: "EKOSYS",
  legalName: "EKOSYS Corporation",
  tagline: "Smarter Solar Energy for Bihar",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.ekosys.in",
  phone: "+917644868086",
  phoneDisplay: "+91 76 44 86 80 86",
  email: "ekosys.corp@gmail.com",
  whatsapp: "https://wa.me/917644868086?text=Hello%20EKOSYS%2C%20I%20would%20like%20solar%20guidance.",
  address: "Opposite to Municipal Office, Hajipur - 844101, Vaishali, Bihar, India",
  streetAddress: "Opposite to Municipal Office",
  city: "Hajipur",
  district: "Vaishali",
  state: "Bihar",
  postalCode: "844101",
  country: "IN",
  geo: {
    latitude: 25.6858,
    longitude: 85.2154,
  },
  serviceAreas: [
    "Hajipur",
    "Vaishali",
    "Patna",
    "Muzaffarpur",
    "Samastipur",
    "Saran",
    "Chhapra",
    "North Bihar",
    "Bihar",
  ],
  openingHours: "Mo-Sa 09:30-18:30",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Opposite+to+Municipal+Office,+Hajipur+-+844101,+Vaishali,+Bihar,+India",
  embedMapUrl: "https://www.google.com/maps?q=Opposite+to+Municipal+Office,+Hajipur+-+844101,+Vaishali,+Bihar,+India&output=embed",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/subsidy", label: "Subsidy" },
  { href: "/installation", label: "Installation" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, site.url).toString();
}
