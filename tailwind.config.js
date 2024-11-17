/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'reveal-bg': "url('https://i.pinimg.com/originals/41/95/30/419530542b95a2cf911c7ad778f078d0.gif')",
      }
    },
  },
  plugins: [],
}

