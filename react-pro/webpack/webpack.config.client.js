import webpackMerge from 'webpack-merge';

// Common config
import commonConfig from './webpack.config.common';

// configuration
import { context, devtool, entry, name, output, plugins, target } from './config';

// configuration type
const type = 'client';

export default webpackMerge(commonConfig(type), {
  context: context(type),
  devtool: devtool(type),
  entry: entry(type),
  name: name(type),
  output: output(type),
  plugins: plugins(type),
  target: target(type)
});
