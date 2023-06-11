const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      scale: {
        '-100': '-1',
      },
      colors: {
        primary: '#F1FAEE',
        secondary: '#1D3557',
        
      }
    },
  },
  plugins: [],
}