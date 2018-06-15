const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        main: __dirname + "/source/js/main.jsx",
    },
    output: {
        path: __dirname + "/public/js",
        filename: "index.js",
        // publicPath: '/js/',
    },
    devtool: "source-map",
    mode: "development",
    devServer: {
        contentBase: "./public/html",
        historyApiFallback: true,
        inline: true,
        publicPath: '/js/', //如果devServer没有配publicPath则取output里的publicPath值，如果配了则只取devServer的值
    },
    module: {
        rules: [{
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            {
                test: /(\.less|\.css)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        modules: "true",
                        localIdentName: '[name]__[local]--[hash:base64:5]'
                    }
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
                from: __dirname + '/source/html',
                to: __dirname + "/public/html",
                ignore: ['.*']
            },
            //   {
            //     from: __dirname + '/source/config',
            //     to: __dirname + "/public/config",
            //     ignore: ['.*']
            //   }
        ])
    ]
}