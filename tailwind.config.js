/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'teal-green': {
          50: '#e6fff9',
          100: '#b3fff2',
          200: '#80ffe6',
          300: '#4dffdb',
          400: '#1affcf',
          500: '#00dfc2',
          600: '#00b399',
          700: '#008670',
          800: '#005947',
          900: '#002b1e',
        },
        'black': '#000000', // Define black if not already default
      },
      backgroundColor: {
        'dark': '#000000', // Default background color to black
      },
      textColor: {
        'light': '#e6fff9', // Light text color for contrast
      },
    },
  },
  plugins: [],
}
