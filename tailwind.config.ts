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
          DEFAULT: '#FF6B35',
          dark: '#E85A2A',
          light: '#FF8559',
        },
        secondary: {
          DEFAULT: '#2A9D8F',
          dark: '#238276',
          light: '#3DB5A6',
        },
        accent: {
          DEFAULT: '#F4A261',
          dark: '#E08E47',
          light: '#F6B57B',
        },
        dark: '#264653',
        light: '#E9F5F3',
      },
    },
  },
  plugins: [],
};
export default config;
