/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E86DE',
          light: '#5D9CE6',
          dark: '#1A6FC9',
        },
        secondary: {
          orange: '#FF9F1C',
          purple: '#6C5CE7',
          green: '#00B894',
        },
        dark: '#2D3436',
        light: '#DFE6E9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}