


module.exports = {
  entry: './src/app.js',
  output: {
    path: `${__dirname}/public/`,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: `${__dirname}/public`
  }
};
