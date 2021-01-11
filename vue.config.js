module.exports = {
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false, //注释css热更新生效
    // 开启 CSS source maps?
    sourceMap: false,
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/style/variable.scss";` //引入全局变量   
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: false,  //module 提示在新版本中已弃用
  }
}