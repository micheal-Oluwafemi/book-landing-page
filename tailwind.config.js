/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        dimBlack: "#2e2c2cb4",
        bgColor: "#439a97",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        lightBlue: " rgba(208, 241, 241, 0.199)",
      },
    },
  },
  plugins: [],
};
