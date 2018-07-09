const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, './src/index.js')
    ],
    output: {
        path: path.join(__dirname, './bundle'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.join(__dirname , 'src'),
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './bundle'),
        host: 'localhost',
        port: 9090,
        // hot: true
    },
    // plugins:[
    //     new webpack.HotModuleReplacementPlugin()
    // ]
    // resolve: {
    //     alias: {
    //         'pages': path.join(__dirname, 'src/pages'),
    //         'component': path.join(__dirname, 'src/component'),
    //         'router': path.join(__dirname, 'src/router')
    //     },
    //     extensions: ['.js', '.jsx']
    // }
};