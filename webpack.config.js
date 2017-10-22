const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname,"src/index.js")
    ],
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, "/"),
        publicPath: "/build/",
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 9000,
        disableHostCheck: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
            },
        })
    ],
    output: {
        publicPath: '/build/',
        path: path.resolve(__dirname,"build"),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    }
};
