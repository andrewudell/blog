import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Courier New", "Courier", "Monaco", "monospace"],
      },
      boxShadow: {
        'hypercard': '3px 4px 0px rgba(0, 0, 0, 0.35)',
        'hypercard-strong': '4px 5px 0px rgba(0, 0, 0, 0.5)',
        'hypercard-inset': 'inset 2px 2px 3px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        'hypercard': '12px',
      },
      borderWidth: {
        'hypercard': '2px',
        'hypercard-thick': '3px',
      },
    },
  },
  plugins: [],
};

export default config;
