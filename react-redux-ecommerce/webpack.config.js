const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './client/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].min.js',
    sourceMapFilename: 'sourcemaps/[file].map'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
    descriptionFiles: ['package.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css?$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader/url!file-loader',
          use: ['css-loader'],
          publicPath: path.resolve(__dirname, './dist')
        })
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
        use: 'file-loader?name=[name].[ext]?[hash]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/fontwoff'
      }
    ]
  },
  devtool: 'source-map',
  context: __dirname,
  target: 'web',
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.min.css',
      disable: false,
      allChunks: true
    })
  ],
  cache: false,
  devServer: {
    contentBase: path.join(__dirname, './public'),
    compress: true,
    inline: true,
    port: 8080,
    historyApiFallback: true,
    stats: 'errors-only'
  }
};
