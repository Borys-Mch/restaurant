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
    animation: {
      "spin-slow": "spin 10s linear infinite",
    },
    boxShadow: {
      "3xl": "0px 0px 20px 0px #959595",
    },
  },
  plugins: [],
};
