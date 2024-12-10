/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding:"50px"
    },
    extend: {
      backgroundImage: {
        "hero":"url('./src/assets/hero.png')",
        "subs":"url('./src/assets/subs.png')",
      },
      backgroundColor: {
        "subscolor":"#FF7D68"
      },
    },
  },
  plugins: [],
}
