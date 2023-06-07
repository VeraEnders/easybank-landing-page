/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    fontFamily: {
      'sans': ['Public Sans', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      /* Tailwind-CSS default colors */
      white: colors.white,
      gray: colors.gray, // gray-100 (=style-guide Light Grayish Blue: hsl(220, 16%, 96%))
      zinc: colors.zinc, // zinc-50 (=style-guide Very Light Gray: hsl(0, 0%, 98%))

      /* Project colors*/
      primary: {
        'dark': 'hsl(233, 26%, 24%)',
        'accent-1': 'hsl(136, 65%, 51%)',
        'accent-2': 'hsl(192, 70%, 51%)',
      },
      neutral: 'hsl(233, 8%, 62%)',
    },
    extend: {},
  },
  plugins: [],
}

