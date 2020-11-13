const path = require('path');
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: './src/main.es',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.es$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ['@babel/preset-env', { modules: false }],
          ],
        },
      },
    ],
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['.es'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
};
