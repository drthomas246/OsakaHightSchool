const path = require("path");
const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, '/dist'),
    open: true,
    port: 3000
  },
 });