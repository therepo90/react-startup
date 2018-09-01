const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: "/",
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [{
            test: /\.html$/,
            loader: 'raw-loader'
        },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    ExtractCssChunks.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './public', to: '.'},
        ]),
        new ExtractCssChunks(
            {
                filename: "[name].css",
                chunkFilename: "[id].css",
                hot: true
            }
        ),
    ],
};