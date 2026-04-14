/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#4CAF50",
          light: "#A5D6A7",
          dark: "#2E7D32",
          50: "#f0fdf4",
          100: "#dcfce7",
          600: "#4CAF50",
          700: "#2E7D32",
        },
      },
    },
  },
  plugins: [],
};
