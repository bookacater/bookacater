/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          wine: '#A44A3F', // Rich Terracotta
          cream: '#FFF9F2', // Soft Ivory
          gold: '#C89B5B', // Warm Champagne Gold
          charcoal: '#302C28', // Warm Charcoal
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}