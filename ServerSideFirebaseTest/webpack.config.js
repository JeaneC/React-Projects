module.exports = {
  //Entry - first file to look at to know how to bundle stuff together
  entry: './src/index.js',
  //Module - what webpack is going to do in the middle of the process
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]

  },
  //Output - where do we want it saved to
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  }
}
