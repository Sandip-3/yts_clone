/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        custom: [
          "Arimo, Arial, Helvetica, lucida grande",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
