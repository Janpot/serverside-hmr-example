const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = (env, args) => ({
  devtool: 'source-map',

  target: 'node',

  entry: [
    'webpack/hot/poll?1000',
    './src/index.js'
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [ 'env', {
                modules: false, // important for HMR
                targets: {
                  node: 'current'
                }
              } ]
            ]
          }
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([ path.resolve(__dirname, './dist') ]),
    new webpack.HotModuleReplacementPlugin(),
    args.watch && new WebpackShellPlugin({ onBuildEnd: [ 'npm run watch:server' ] })
  ].filter(Boolean),

  externals: [
    nodeExternals({
      whitelist: [
        /^webpack\/hot\//
      ]
    })
  ]
});
