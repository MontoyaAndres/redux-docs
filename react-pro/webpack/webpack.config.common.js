import { rules, extensions, modules } from './config';

export default type => ({
  module: {
    rules: rules(type)
  },
  resolve: {
    extensions: extensions(),
    modules: modules()
  }
});
