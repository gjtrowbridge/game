'use strict';

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // Necessary to let webpack-dev-server connect the dist folder to index.html
    publicPath: '/dist/'
  },
  // Provides source maps.  Other options/docs here: https://webpack.github.io/docs/build-performance.html#sourcemaps
  devtool: 'eval-cheap-module-source-map',
  // Allows importing of .jsx files without specifying the file suffix
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      // Runs eslint before building bundle.js
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      // Converts ES6 + JSX files into vanilla JS
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      // Compiles scss files into CSS, allows in-line importing of CSS files in JS code
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  }
};