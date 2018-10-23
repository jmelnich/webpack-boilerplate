const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: '/',
    publicPath: '/',
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
        include: [path.join(__dirname, 'client/')],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
	},
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
