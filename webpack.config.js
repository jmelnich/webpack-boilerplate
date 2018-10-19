const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, "server/"),
    filename: 'bundle.js'
  },
	module: {
		rules: [{
			test:  /\.css$/,
			use: ['style-loader', 'css-loader']
		}]
	}
};
