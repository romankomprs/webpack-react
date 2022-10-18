const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "index_bundle.js"
    },
    resolve:{
        extensions:['.js','.jsx']
     },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader" // jsx, js files
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html" // npm start -> adds to -> dist/index.html
        })
    ],
    devServer: {
        host: "localhost",
        port: process.env.PORT || 3000,
        open: true,
    },
}