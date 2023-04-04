const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  devServer: {
    proxy: {
      '/': {
        target: 'http://apis.data.go.kr/1360000/TourStnInfoService1',
        changeOrigin: true
      }
    }
  }
  
})
