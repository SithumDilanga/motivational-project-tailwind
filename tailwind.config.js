module.exports = {
  purge: ['./public/index.html', './src/App.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#e28743",
          light: "#cb7a3c",
          dark: "#b56c36",
        }
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
