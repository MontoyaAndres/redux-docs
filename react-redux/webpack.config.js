const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    app: './src/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'app.min.js',
    sourceMapFilename: 'sourcemaps/[file].map'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css', '.scss'],
    descriptionFiles: ['package.json']
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)?$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader/url!file-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: path.resolve(__dirname, './dist')
        })
      }
    ]
  },
  devtool: DEBUG ? 'source-map': '',
  context: __dirname,
  target: 'web',
  plugins:
    DEBUG ?
      [
        new ExtractTextPlugin({
          filename: 'app.min.css',
          disable: false,
          allChunks: true
        }),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('development')
          }
        })
      ] :
      [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: false,
          mangle: false
        }),
        new ExtractTextPlugin({
          filename: 'app.min.css',
          disable: false,
          allChunks: true
        }),
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: 'app.min.css',
          cssProcessor: require('cssnano'),
          cssProcessorOptions: {
            discardComments: { removeAll: true }
          },
          canPrint: true
        })
      ],
  cache: false,
  watchOptions: {
    aggregateTimeout: 1000,
    poll: true
  },
  devServer: {
    contentBase: './src',
    compress: true,
    inline: true,
    port: 7070
  }
};
