module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        xl: '1300px',
      },
      colors: {
        's-green': '#054A49',
        's-brightgreen': '#37A41D',
        's-red': '#C43256',
        's-grey': '#6B7177',
        's-offwhite': '#F3F6F6',
      },
      spacing: {
        108: '32rem',
        168: '42rem',
        192: '48rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
