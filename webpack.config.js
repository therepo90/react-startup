const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: "/build/",
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: '.'
    },
    module: {
        rules: [{
            test: /\.html$/,
            loader: 'raw-loader'
        },
        {
            test: /\.css$/,
            loader: 'raw-loader'
        },
        {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/
          }
    ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};