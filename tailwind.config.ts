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
          DEFAULT: '#2596be',
          dark: '#1d7a9e',
          light: '#4db3d3',
        },
        secondary: {
          DEFAULT: '#2596be',
          dark: '#1d7a9e',
          light: '#4db3d3',
        },
        accent: {
          DEFAULT: '#2596be',
          dark: '#1d7a9e',
          light: '#4db3d3',
        },
        dark: '#2596be',
        light: '#f1f5f9',
      },
    },
  },
  plugins: [],
};
export default config;
