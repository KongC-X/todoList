// 使用node的path模块
const path = require("path");
// 引入vue-loader插件
const VueLoaderPlugin = require("vue-loader/lib/plugin");

// 导入html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 导入clean-webpack-plugin
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 打包的入口
  entry: "./src/main.js",

  // 插件
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],

  // 打包的出口
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "..", "/dist"),
  },
  // 打包规则
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]",
          limit: 2048,
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.styl(us)?$/,
        use: ["style-loader", "css-loader", "postcss-loader", "stylus-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    alias: {
      'vue': "vue/dist/vue.js",
      '@': path.resolve(__dirname, "../src"),
      'styles': path.resolve(__dirname, "../src/assets/styles"),
      'images': path.resolve(__dirname, "../src/assets/images"),
    },
  },
};
