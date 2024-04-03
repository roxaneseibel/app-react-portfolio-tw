
module.exports = {
  darkMode: "class",
  content: [
     "./index.html",
     "./src/**/*.{js,jsx,ts,tsx}", 
     "node_modules/flowbite-react/lib/esm/**/*.js"
     ],
     theme: {
       extend: {
        colors: {
          "primary": "#529E57",
          "secondary": "#377A3B",
          "dark-primary": "#92B7EA",
          "dark-secondary":"#5D789D"
        }
       },
     },
  plugins: [
    require("flowbite/plugin")
  ],
}