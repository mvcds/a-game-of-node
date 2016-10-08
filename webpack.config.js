module.exports = {
  entry: [
    './src/cell',
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  plugins: [
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
          test: /\.scss$/,
          loader: 'style!css!sass',
          exclude: /node_modules/,
          include: __dirname,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

};
