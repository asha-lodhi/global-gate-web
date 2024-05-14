/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('assets/hero-section-image.jpeg')",
      },
      fontFamily: {
        sansation: ["Sansation", "sans-serif"],
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
};
