const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        path: path.join(__dirname, './bundle'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.join(__dirname , 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: path.join(__dirname , 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192 // 8k
                    }
                }]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './bundle'),
        host: 'localhost',
        port: 9090,
        // hot: true
    },
    devtool: 'inline-source-map',
    // plugins:[
    //     new webpack.HotModuleReplacementPlugin()
    // ]
    resolve: {
        alias: {
            'pages': path.join(__dirname, 'src/pages'),
            'component': path.join(__dirname, 'src/component'),
            'router': path.join(__dirname, 'src/router')
        },
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
};
