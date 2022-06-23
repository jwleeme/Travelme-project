const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  devServer: {
    proxy: {
      '/': {
        target: 'https://apis.data.go.kr/1360000/TourStnInfoService',
        changeOrigin: true
      }
    }
  }
  
})
