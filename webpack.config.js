module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  }
};