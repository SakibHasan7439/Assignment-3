/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['"Manrope"', "sans-serif"],
      },
      
      backgroundImage: {
        'page-bg': "url('/src/assets/bg.jpg')"
      },
    },
  },
  plugins: [require('daisyui'),],
}

