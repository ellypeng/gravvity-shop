/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./webgl-components/**/*.{js,ts,jsx,tsx}",
    "./webgl/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'vietnam': ['Be Vietnam Pro']
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}