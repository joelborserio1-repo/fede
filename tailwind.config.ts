import type { Config } from "tailwindcss";

/**
 * Fede brand system.
 * Warm, classic, editorial. Cormorant Garamond for display, Archivo for UI/body.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F4EFE6",
        sand: "#EBE3D6",
        paper: "#FBF8F2",
        ink: "#2A2521",
        // muted taupe — used for secondary text and quiet detail
        stone: "#8C8173",
        line: "#DED4C4",
        // restrained gold accent — eyebrows, hairline underlines only
        gold: "#AF8A50",
      },
      fontFamily: {
        // wired to next/font CSS variables in app/layout.tsx
        serif: ["var(--font-cormorant)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-archivo)", "system-ui", "-apple-system", "Helvetica Neue", "Arial", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.26em",
        wide: "0.14em",
        wider: "0.16em",
        widest: "0.18em",
      },
      maxWidth: {
        wrap: "1200px",
        prose: "760px",
      },
      boxShadow: {
        card: "0 18px 34px rgba(42, 37, 33, 0.09)",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
