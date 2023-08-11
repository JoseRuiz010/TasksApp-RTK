/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5fafd",
          100: "#eaf6fc",
          200: "#c8e5f8",
          300: "#a5d4f4",
          400: "#6191e8",
          500: "#2e3ce6",
          600: "#2934c1",
          700: "#1c238c",
          800: "#161b5e",
          900: "#0e103f",
        },
        purple: {
          50: "#f5e8ff",
          100: "#dac2ff",
          200: "#b294ff",
          300: "#8a66ff",
          400: "#6434fc",
          500: "#570df2", // Tu color púrpura personalizado
          600: "#4a00c1",
          700: "#3c0091",
          800: "#2d0060",
          900: "#1e0030",
        },
        // Agrega más colores personalizados aquí
      },
    },
  },
  plugins: [],
};
