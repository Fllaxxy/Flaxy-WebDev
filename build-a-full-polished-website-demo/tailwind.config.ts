import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101114",
        muted: "#656974",
        line: "#e6e8ee",
        paper: "#f7f8fb",
        blue: {
          DEFAULT: "#075cff",
          dark: "#0648c6",
          soft: "#e9f0ff",
        },
      },
      boxShadow: {
        soft: "0 24px 60px rgba(16, 17, 20, 0.08)",
        tight: "0 10px 30px rgba(16, 17, 20, 0.08)",
      },
      letterSpacing: {
        tightish: "-0.01em",
      },
    },
  },
  plugins: [],
};

export default config;
