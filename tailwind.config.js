/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', ...fontFamily.sans],
      serif: ['Cormorant', ...fontFamily.serif]
    },
    colors: {
      beige: '#F8EDE1',
      red: '#E2572C',
    },

    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
