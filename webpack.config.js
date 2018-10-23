const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: 'bundle.js'
  },
	module: {
		rules:
    [
      {
			 test:  /\.scss$/,
			 use: ['style-loader', 'css-loader', 'sass-loader']
		  },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
	}
};
