module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public/assets/',
    filename: 'bundle.js'
  },
  module: {
    //preLoaders: [
    //  {
    //    test: /\.js$/,
    //    exclude: /node_modules/,
    //    loader: 'jshint'
    //  }
    //],
    loaders: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
      //{
      //  test: /\.scss$/,
      //  loader: 'style!css!sass'
      //},
      //{
      //  test: /\.(png|jpg|gif)$/,
      //  include: /images/,
      //  loader: 'file'
      //}
    ]
  }
  //jshint: {
  //  esversion: 6
  //}
};