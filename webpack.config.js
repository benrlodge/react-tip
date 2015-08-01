module.exports.getConfig = function() {

  var config = {
    entry: './src/scripts/main.js',
    output: {
      path: __dirname,
      filename: 'react-tip.js'
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
    }
  };

  return config;
}
