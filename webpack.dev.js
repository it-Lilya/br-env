// eslint-disable-next-line import/no-extraneous-dependencies
import { HotModuleReplacementPlugin } from 'webpack';
// eslint-disable-next-line import/no-extraneous-dependencies
import { merge } from 'webpack-merge';
import common from './webpack.common';

export default merge(common, {
  // Set the mode to development or production
  mode: 'development',
  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
  },

  plugins: [
    // Only update what has changed on hot reload
    new HotModuleReplacementPlugin(),
  ],
});
