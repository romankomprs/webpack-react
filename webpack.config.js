const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "index_bundle.js"
    },
    resolve:{
        extensions:['.js','.jsx'],
        alias: {
            src: path.resolve(__dirname, 'src'),
            app: path.resolve(__dirname, 'src/app/'),            
            common: path.resolve(__dirname, 'src/app/elements/common'),
            specific: path.resolve(__dirname, 'src/app/elements/specific'),
            constants: path.resolve(__dirname, 'src/constants'),
            helpers: path.resolve(__dirname, 'src/helpers'),
            http: path.resolve(__dirname, 'src/http'),
            i18n: path.resolve(__dirname, 'src/i18n'),
            img: path.resolve(__dirname, 'src/img'),
            libs: path.resolve(__dirname, 'src/libs'),
            selectors: path.resolve(__dirname, 'src/selectors'),
            styles: path.resolve(__dirname, 'src/styles'),
            images: path.resolve(__dirname, 'static/images'),
          },
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