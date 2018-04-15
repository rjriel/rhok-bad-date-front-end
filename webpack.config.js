const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PwaManifestWebpackPlugin = require('pwa-manifest-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');

const VENDOR_LIBS = [
  'prop-types', 'react', 'react-dom', 'react-router-dom',
  'react-transition-group', 'styled-components',
];

const config = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          },
          'image-webpack-loader',
        ],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'svg-react-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new PwaManifestWebpackPlugin({
      name: 'OBDL',
      description: 'Ottawa Bad Date List',
      short_name: 'OBDL',
      start_url: './index.html',
      background_color: '#000000',
      theme_color: '#000000',
      icon: {
        src: path.resolve('src/images/umbrella.png'),
        sizes: [36, 48, 96, 120],
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new InjectManifest({
      swSrc: './src/sw.js',
    }),
    new CopyWebpackPlugin([
      { from: 'src/images', to: '' },
    ]),
  ],

};

module.exports = config;
