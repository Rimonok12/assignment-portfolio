/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-custom': "url('/assets/gradient.png')",
      // },
      fontFamily: {
        sans: ['"Sporting Grotesque"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
