
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      locale: {
          default: 'zh-CN', //默认语言 zh-CN
          baseNavigator: true, // 为true时，用navigator.language的值作为默认语言
          antd: true // 是否启用antd的<LocaleProvider />
        },
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'EarlyWarning',
      dll: false,
    }],
  ],
}
