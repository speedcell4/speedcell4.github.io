const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js', output: {
        filename: 'bundle.js', path: path.resolve(__dirname, 'dist'),
    }, module: {
        rules: [{
            test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader',],
        },],
    }, plugins: [new MiniCssExtractPlugin({
        filename: 'styles.css',
    }),], optimization: {
        minimizer: [`...`,
            new CssMinimizerPlugin(),
        ],
    },
};