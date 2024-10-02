const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: isDevelopment
    ? {
        index: './src/client-dev.js',
        'single-work': './src/pages/single-work/render.js',
        'work': './src/pages/work/render.js',
        'contact': './src/pages/contact/render.js',
      }
    : {
        index: './src/client.js',
        'single-work': './src/pages/single-work/hydrate.js',
        'work': './src/pages/work/hydrate.js',
        'contact': './src/pages/contact/hydrate.js',
      },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    hot: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/work$/, to: '/work.html' },
        { from: /^\/work\/.*$/, to: '/single-work.html' }, // Serve single-work.html for dynamic URLs
        { from: /^\/contact$/, to: '/contact.html' },
      ],
    },
    port: 3500,
    client: {
      logging: 'verbose', // Enable verbose logging
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, 'babel.client.js'),
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'globals.css',
    }),
  ].filter(Boolean),

  devtool: isDevelopment ? 'inline-source-map' : 'source-map',
};
