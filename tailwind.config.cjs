/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.tsx", "./src/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, auto))',
      }
    },
  },
  plugins: [],
}
