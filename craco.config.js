module.exports = {
  eslint: {
    enable: false
  },
  style: {
    postcss: {
      mode: 'file',
      loaderOptions: {
        postcssOptions: {
          sourceMap: true,
        },
      },
    },
  },
}