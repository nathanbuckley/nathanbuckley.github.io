/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/js/**/*.{html,js}',
    './templates/**/*.{html,js}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      'term-green': '#A4F644',
      'pastel-green': '#64d86b',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'bluegrey-light': '#6e7598',
      'bluegrey-dark': '#414767',
    },
    extend: {},
  },
  plugins: [],
}
