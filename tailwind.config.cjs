/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      david: "David Libre, serif",
      inter: "Inter, sans-serif",
    },
    backgroundImage: {
      "footer-form": "url('./src/assets/bg.svg')",
    },
  },
  plugins: [],
};
