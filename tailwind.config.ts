import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        subodhOrange: {
          DEFAULT: "#bf360c",
          dark: "#a32e0a",
        },
        subodhBlue: {
          DEFAULT: "#283472",
          dark: "#1e2756",
        },
        subodhBackground: "#F9F9F9",
        subodhText: "#222222",
        // Keeping aliases for easier transition
        background: "#F9F9F9",
        foreground: "#222222",
        primary: {
          DEFAULT: "#bf360c",
          dark: "#a32e0a",
        },
        secondary: "#283472",
      },
    },
  },
  plugins: [],
};
export default config;
