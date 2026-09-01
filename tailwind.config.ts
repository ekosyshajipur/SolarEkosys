import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#071B2A",
        solar: {
          50: "#f6fbeb",
          100: "#e9f6c6",
          200: "#d2ee8f",
          300: "#b7e558",
          400: "#9CD62D",
          500: "#77BB16",
          600: "#568F09",
          700: "#3d670a",
        },
        ocean: {
          50: "#eaf7fa",
          100: "#ccecf3",
          200: "#9edae7",
          300: "#5ec1d6",
          400: "#21A1B5",
          500: "#087C99",
          600: "#06667d",
          700: "#075069",
          800: "#0b4255",
          900: "#0e3747",
        },
      },
      boxShadow: {
        glow: "0 18px 60px rgba(108, 178, 21, .22)",
        card: "0 18px 55px rgba(7, 27, 42, .10)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
