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
          DEFAULT: '#020617',
          dark: '#000000',
          light: '#1e293b',
        },
        secondary: {
          DEFAULT: '#020617',
          dark: '#000000',
          light: '#1e293b',
        },
        accent: {
          DEFAULT: '#020617',
          dark: '#000000',
          light: '#1e293b',
        },
        dark: '#020617',
        light: '#f1f5f9',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
