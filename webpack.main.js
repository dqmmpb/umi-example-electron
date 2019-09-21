const path = require('path');
const merge = require('webpack-merge')
const webpack = require('webpack')

const cwd = process.cwd();

module.exports = function(config) {
  config.target = 'electron-main';
  // config.externals = (context, request, callback) => {
  //   callback(null, request.charAt(0) === '.' ? false : `require("${request}")`);
  // };
  config = merge.smart(config, {
    plugins: [
      new webpack.DefinePlugin({
        $dirname: '__dirname',
      })
    ]
  });

  return config
};
