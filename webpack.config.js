import path from 'path'
import webpack from 'webpack'

module.exports = {
  entry: ['webpack-hot-middleware/client',
      'react-hot-loader/patch',
      './client/index.js'],
  output: {
    path: '/',
    publicPath: '/',
    filename: 'bundle.js'
  },
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
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
