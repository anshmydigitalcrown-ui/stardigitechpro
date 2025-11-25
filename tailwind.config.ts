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
        primary: {
          DEFAULT: '#1e40af',
          dark: '#1e3a8a',
          light: '#3b82f6',
        },
        secondary: {
          DEFAULT: '#0f172a',
          dark: '#020617',
          light: '#1e293b',
        },
        accent: {
          DEFAULT: '#60a5fa',
          dark: '#3b82f6',
          light: '#93c5fd',
        },
        dark: '#0f172a',
        light: '#f1f5f9',
      },
    },
  },
  plugins: [],
};
export default config;
