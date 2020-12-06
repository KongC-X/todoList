const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const prodConfig = {
  // 模式
  mode: 'production'
}

module.exports = merge(baseConfig, prodConfig)