/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#000000',
        customBlue: '#00ADEE',
        titleColor: '#8BC53F',
        textColor: '#ffff',
        darkGreen: '#00774D',
      },
      fontFamily: {
        'inter': '"Inter"',
      }
    },
  },
  plugins: [],
}

