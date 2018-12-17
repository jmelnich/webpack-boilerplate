const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './client/index.js',
  output: {
	path: __dirname + '/public',
	filename: 'bundle.js'
  },
  plugins: [
	new HtmlWebpackPlugin({template: 'public/index.html'}),

  ],
  mode: 'development',
  module: {
	rules:
	  [
		{test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
		{test: /\.css$/, use: ['style-loader', 'css-loader']},
		{
		  test: /\.(jpe?g|png|gif|svg)$/i,
		  use: [{loader: 'url-loader', options: {name: '[path][name].[ext]', limit: 5000}}]
		},
		{
		  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
		  use: [{loader: 'file-loader', options: {name: '[name].[ext]', outputPath: 'fonts/'}}]
		},
		{
		  test: /\.js$/,
		  exclude: /(node_modules)/,
		  include: [path.join(__dirname, 'client/')],
		  use: {loader: 'babel-loader'}
		}
	  ]
  },
  devServer: {
	historyApiFallback: true,
  },
  resolve: {
	extensions: ['.js', '.jsx']
  }
};