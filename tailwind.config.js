/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fundo': '#18181b',
        'cinzinha': 'rgb(173, 173, 184)',
        'roxinho': 'rgb(191, 148, 255)',
        'hover-cinzinha': '#464649'
      },
    },
  },
  plugins: [],
}
