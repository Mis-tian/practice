var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    index: ['./src/entry/index', 'webpack-hot-middleware/client?timeout=2000&overlay=false'],
    index1: ['./src/entry/entry_1', 'webpack-hot-middleware/client?timeout=2000&overlay=false']
  },  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("styles.css")
    // new webpack.optimize.UglifyJsPlugin({
    //   compress:{
    //     warnings: false,
    //     drop_debugger: true,
    //     drop_console: true
    //   }
    // }),    
    // new HtmlWebpackPlugin({
    //   title:'首页',
    //   filename: '../src/test.html',
    //   template: './myTemplate.html',
    //   inject: 'body', // Inject all scripts into the body ,
    //   chunks:['index1']
    // }),
    // new HtmlWebpackPlugin({
    //   title:'测试页',
    //   filename: '../src/index.html',
    //   template: './myTemplate.html',
    //   inject: 'body', 
    //   chunks:['index']//内存中的大包生成的js
    // })    
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.scss','.jsx','.less']
  },  
  module: {
    loaders: [
      // { test: /\.css$/, loader:'style-loader!css-loader' },
      {test: /\.css|\.scss$/, loader: 'style!css!sass'},
      {test: /\.less$/, loader: 'style!css!less'},      
      {
        test: /\.js|\.jsx$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
};
