module.exports = {
  purge: ['./public/index.html', './src/App.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#ffa500",
          secondary: "#ffae1a",
          third: "#ffc04d",
        },
        backdrop: "rgba(0, 0, 0, 0.5)"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
}
