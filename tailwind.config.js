module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-cube': '#441A47',
      },
      rotate: {
        '360': '360deg',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}