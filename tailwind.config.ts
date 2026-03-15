import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        stone: {
          950: "#0F0D09",
          900: "#1A1610",
          800: "#2A2318",
          700: "#3D3222",
        },
        sand: {
          100: "#F2EDE4",
          200: "#E8DFD0",
          300: "#D4C8B0",
          400: "#B8A888",
        },
        gold: {
          300: "#E2C98A",
          400: "#CEB070",
          500: "#B8955A",
          600: "#9E7C44",
        },
        sage: {
          400: "#9BAD8A",
          500: "#7D9168",
          600: "#62724F",
        },
      },
    },
  },
  plugins: [],
};

export default config;
