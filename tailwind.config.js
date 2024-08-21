/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['"Manrope"', "sans-serif"]
      },
      
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgb(255, 255, 255), rgba(255, 255, 255, 0) 100%)',
      },
    },
  },
  plugins: [require('daisyui'),],
}

