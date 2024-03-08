/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      }
    },
    dropShadow: {
      '2xl': '0 35px 35px rgba(255, 255, 255, 0.25)',
    }
  },
  plugins: [],
}

