module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Architects daughter"'],
      },
      minWidth: {
        '540px': '540px',
      },
      width: {
        '540px': '540px',
      },
    },
    container: {
      padding: '2rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#6366F1',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#a0aec0;',
      secondary: '#edf2f7',
      'secondary-dark': '#6366F1',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
