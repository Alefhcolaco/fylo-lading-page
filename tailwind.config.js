/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'curvy': "url('/bg-curvy-desktop.png')",
        'arrow': "url('/icon-arrow.svg')",
        'arrow-white': "url('/icon-arrow-white.svg')",
      }
    },
  },
  plugins: [],
}
