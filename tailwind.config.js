/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors:{
        //primary
        dark_cyan: "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        //neutral
        very_dark_blue: "hsl(212, 21%, 14%)",
        dark_grayish_blue: "hsl(228, 12%, 48%)",
      },
      fontFamily: {
        monteserrat: ["Fraunces", "serif"],
        fraunces: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}

