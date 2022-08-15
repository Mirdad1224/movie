/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily:{
        sans: ["IRANSans"]
      },
      backgroundImage: {
        custom: 'linear-gradient(to right, #70e1f5, #ffd194);',
        secondary: 'linear-gradient(to right, #5c258d, #4389a2)'
      }
    },
  },
  plugins: [],
};
