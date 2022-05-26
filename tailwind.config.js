module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxl: "1920px", // => @media (min-width: 1920px) { ... },
      },
    },
  },
  plugins: [],
};
