

const plugin = require('tailwindcss/plugin');


/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {
      screens: {
      sm: '375px',
      xl: '1440px',
    },
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'light-gray': 'hsl(212, 45%, 89%)',
      'grayish-blue': 'hsl(220, 15%, 55%)',
      'dark-blue': 'hsl(218, 44%, 22%)',
    },
    fontWeight: {
      'text-normal': '400',
      'text-font-bold': '700',
    }, 
    fontSize: {
      'normal': '15px',
    },
    fontFamily: {
      'outfit': 'Outfit, sans-serif',
    },
  },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }){
      // Nothing
    }),
  ],
}

