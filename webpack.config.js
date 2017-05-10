// webpack basic configuration
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const host = (process.env.HOST || 'localhost');
const port = (+process.env.PORT + 1) || 8080;

module.exports = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
    './src/index.tsx',
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'dist'),
    // necessary for HMR to know where to load the hot update chunks
    publicPath: '/',
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.scss'],
  },
   module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: [
          'css-loader?modules&importLoaders=1',
          'postcss-loader'
        ]
      })}
    ]
  },
  devServer: {
    hot: true,
    open: false,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_moudles') !== -1
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'mainfest'
    }),
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      cache: false,
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
