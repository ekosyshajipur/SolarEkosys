import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EKOSYS Corporation Solar Energy",
    short_name: "EKOSYS Solar",
    description: "Bihar's trusted solar partner for rooftop solar, products, installation, and PM Surya Ghar subsidy in Hajipur.",
    start_url: "/",
    display: "standalone",
    background_color: "#071B2A",
    theme_color: "#071B2A",
    icons: [
      {
        src: "/webLogo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/webLogo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
