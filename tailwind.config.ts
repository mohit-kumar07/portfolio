import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-raised": "var(--color-bg-raised)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
        "accent-warn": "var(--color-accent-warn)",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      maxWidth: {
        page: "1680px",
      },
    },
  },
  plugins: [],
};
export default config;
