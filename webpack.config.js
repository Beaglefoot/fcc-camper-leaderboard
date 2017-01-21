// path.resolve provides absolute path which is required
// in output.path and module.loaders inclusions
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],

  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.s[ac]ss$/,
        loader: 'style!css!sass'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: './',
    historyApiFallback: true,
    inline: true,
    hot: true,
    open: true
  }
};
