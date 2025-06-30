/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode with class toggle
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Targets pages in your app
    './components/**/*.{js,ts,jsx,tsx}', // Targets components in your app
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Sporting Grotesque"', 'sans-serif'], // Custom font family
      },
    },
  },
  plugins: [],
};
