module.exports = {
    entry: {
        main: __dirname + "/source/js/main.jsx",
    },
    output: {
        path: __dirname + "/public",
        filename: "index.js"
    },
    devtool: "source-map",
    mode: "development",
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true
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
                    options:{
                        modules: "true",
                        localIdentName: '[name]__[local]--[hash:base64:5]'
                    }
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    },
    
}