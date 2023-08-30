/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#fff",
      },
    },
    fontFamily: {
      PTSans: ["PT Sans, sans-serif"],
    },
  },
  plugins: [],
};
