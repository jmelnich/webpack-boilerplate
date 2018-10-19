const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, "server/"),
    filename: 'bundle.js'
  },
	module: {
		rules: [{
			test:  /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		}]
	}
};
