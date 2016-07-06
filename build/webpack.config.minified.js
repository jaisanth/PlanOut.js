var webpack = require("webpack");

module.exports = {
  entry: './build/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'jest', 'stage-0'],
          plugins: ['add-module-exports']
        }
      },
    ]
  },
  output: {
    filename: './dist/planout.min.js',
    libraryTarget: 'umd',
    library: 'planout'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
}
