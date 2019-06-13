const path = require ('path');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const CopyWebpackPlugin = require ('copy-webpack-plugin');
const ImageMinPlugin = require ('imagemin-webpack-plugin').default;

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[name].[hash].css'
        }),
        new CopyWebpackPlugin([
            { from: 'src/img', to: 'img/' },
        ]),
        new ImageMinPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    ],
};
