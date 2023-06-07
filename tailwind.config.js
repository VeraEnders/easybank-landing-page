/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    fontFamily: {
      'sans': ['Public Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
}

