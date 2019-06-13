const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

module.exports = merge(commonConfig, devConfig, {
  mode: 'development',
});
