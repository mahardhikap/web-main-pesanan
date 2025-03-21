/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        philosopher: ["Philosopher", "sans-serif"],
      },
      colors: {
        premium: "#c5ac83",
        second: "#5a4e3b",
        third: "#312b2b",
        main: "#201d1e",
        dark: "#282727",
        darkpremium: "#282727",
      },
      boxShadow: {
        premium: "0 2px 8px rgba(197, 172, 131, 0.5)",
      },
    },
  },
  plugins: [],
});
