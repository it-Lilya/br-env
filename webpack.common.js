import { resolve } from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import HtmlWebPackPlugin from 'html-webpack-plugin';
// eslint-disable-next-line import/no-extraneous-dependencies
import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';

// eslint-disable-next-line no-undef
export const target = 'web';
export const output = {
  // eslint-disable-next-line no-undef
  path: resolve(__dirname, 'dist'),
  publicPath: '',
};
export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
        },
      ],
    },
    {
      test: /\.css$/,
      use: [_loader, 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
  ],
};
export const plugins = [
  new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
];
