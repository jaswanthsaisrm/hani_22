/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      colors: {
        blush: "#fbcfe8",
        lavender: "#c4b5fd",
        cream: "#fff7ed",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(112, 72, 112, 0.18)",
      },
    },
  },
  plugins: [],
};
