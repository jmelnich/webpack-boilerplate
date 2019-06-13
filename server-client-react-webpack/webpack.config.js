const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

module.exports = mode => {
    if (mode === 'production') {
        return merge(commonConfig, prodConfig, { mode });
    }
    return merge(commonConfig, devConfig, { mode });
};
