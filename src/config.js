require.config({
  baseUrl: './src/app',
  paths: {
    baiduMapInit: 'baiduMap/init'
  }
})

require(['baiduMapInit'], function(baiduMapInit) {
  baiduMapInit.init()
})