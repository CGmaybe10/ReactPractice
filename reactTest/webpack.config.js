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
        }]
    }
}