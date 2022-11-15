/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#EBF5F5",
        dark: "#233746",
        light: "#ffffff",
        dimBlue: "#3C8080",
        ruby: "#E12454",
        navy: "#223645",
      },
      fontFamily: {
        lato: "'Lato', 'sans-serif'",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}
