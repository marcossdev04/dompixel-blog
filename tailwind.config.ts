import tailwindPresetMantine from "tailwind-preset-mantine";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [tailwindPresetMantine()],
  plugins: [],
  theme: {
    screens: {
      "2xsm": "375px",
      xsm: "425px",
      "3xl": "2000px",
      mobile: { max: "767px" },
      tablet: { min: "768px", max: "1023px" },
      laptop: { min: "1024px", max: "1439px" },
      desktop: { min: "1440px" },
    },
  },
};
export default config;
