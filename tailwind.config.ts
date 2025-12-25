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
        notebook: {
          paper: "#FFFEF0",
          line: "#D1E5F4",
          margin: "#E74C3C",
          text: "#2C3E50",
        },
      },
      fontFamily: {
        handwriting: ["Caveat", "cursive"],
        body: ["Merriweather", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
