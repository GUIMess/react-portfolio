module.exports = {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {
      flexbox: 'no-2009',
      overrideBrowserslist: [
        'last 2 versions',
        '> 1%',
        'not dead'
      ]
    },
  }
} 