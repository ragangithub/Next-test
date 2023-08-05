/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "360px",
      md: "500px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        lightColor: "#F7F8FA",
        vlightColor: "#919EB6",
        nlightColor: "#313B49",
        hlightColor: " #919EB6",
        mlightColor: "#AFB9CA",
        fColor: "#080A0C",
        bookColor: "#1D232B",
      },
    },
  },
  plugins: [],
};
