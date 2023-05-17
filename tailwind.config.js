/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'lg': {'min': '900px', 'max': '2000px'},
      'md': {'min': '500px', 'max': '899px'},
      'sm': {'min': '220px', 'max': '499px'},
    }
  },
  plugins: [require("daisyui")],
}