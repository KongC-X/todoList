// 导入webpack
const webpack = require('webpack')

const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const devConfig = {
  // 模式
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // 指定服务器根目录
    contentBase: './dist',
    // 自动打开浏览器
    open: true,
    // 启用热模块替换
    hot: true
  },
  // 插件
  plugins: [new webpack.HotModuleReplacementPlugin()]
}

module.exports = merge(baseConfig, devConfig)