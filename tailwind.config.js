/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mainBackgroundColor": '#00143b',
        "columnBackgroundColor": '#02215d'
      }
    },
  },
  plugins: [],
}

