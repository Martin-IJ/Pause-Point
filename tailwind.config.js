/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-green': 'rgba(4, 151, 60, 0.80)',
        'light-green': 'rgba(54, 172, 99, 0.20)',
      },
    },
  },
  plugins: [],
}

