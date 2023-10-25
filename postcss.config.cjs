module.exports = {
  plugins: {
    //向CSS规则添加浏览器前缀
    autoprefixer: {
      overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8', 'last 10 versions'],
      grid: true,
    },
    //将CSS中的像素单位(px)转换为rem单位
    'postcss-pxtorem': {
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75 //这个值会作为rem的根值，用于将所有的px单位转换为rem单位。
      },
      propList: ['*'],
      unitPrecision: 5, //单位转换的精度。例如，如果unitPrecision是5，那么1px会被转换为1.00000rem。
    },
  },
}
