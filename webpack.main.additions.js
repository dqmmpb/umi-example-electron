const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const cwd = process.cwd();

module.exports = function(config) {
  config.entry = {
    main: './src/main/index.js',
  };
  config.target = 'electron-main';
  config.output.path = path.join(cwd, './dist/main');
  config = merge.smart(config, {
    plugins: [
      new webpack.DefinePlugin({
        $dirname: '__dirname',
      })
    ]
  });

  return config
};
