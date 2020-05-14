var path = require('path');

module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js"
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['env']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
