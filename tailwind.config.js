/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding:"50px"
    },
    extend: {
      backgroundImage: {
        "hero":"url('/assets/hero.png')",
        "subs":"url('/assets/subs.png')",
      },
      backgroundColor: {
        "subscolor":"#FF7D68"
      },
    },
  },
  plugins: [],
}
