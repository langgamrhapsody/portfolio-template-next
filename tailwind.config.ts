import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "platinum-gradient":
          "linear-gradient(90deg, rgba(154,197,219,1) 0%, rgba(203,227,240,1) 35%, rgba(255,255,255,1) 100%)",
        "platinum-card-gradient":
          "linear-gradient(135deg, rgba(101,182,251,1) 0%, rgba(41,107,181,1) 35%, rgba(3,40,84,1) 100%)",
      },
      colors: {},
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        ovo: ["var(--font-ovo)"],
        montserrat: ["var(--font-montserrat)"],
        worksans: ["var(--font-worksans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
export default config;
