/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1a1410",
        parchment: "#f5f0e8",
        "warm-white": "#faf8f4",
        sand: "#c8b89a",
        clay: "#8a6e52",
        moss: "#5a6650",
        mist: "#e8e2d8",
        deep: "#2d251e",
        accent: "#b5956e",
        gold: "#b38728",
      },
      fontFamily: {
        serif: ['Noto Serif TC', 'serif'],
        sans: ['Noto Sans TC', 'sans-serif'],
        spiritual: ['LXGW WenKai TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
