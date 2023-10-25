module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8', 'last 10 versions'],
      grid: true,
    },
    'postcss-pxtorem': {
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 || file.indexOf('scm-') !== -1 ? 37.5 : 75
      },
      propList: ['*'],
      unitPrecision: 5,
    },
  },
}
