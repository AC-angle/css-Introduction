const iCrushLoaderPlugin = require('icrush-loader-plug');

module.exports = {
    entry: ['./src/entry.js'],
    output: {
        path: __dirname,
        filename: 'build/main.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.iCrush$/,
            exclude: /node_modules/,
            loader: ['icrush-loader']
        }, {
            test: /\.css$/,
            loader: ['icrush-style-loader', 'css-loader']
        },{
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [{
                loader: "url-loader",
                options: {
                    publicPath: "../",
                    name: "dist/[path][name].[ext]",
                    context: "src/assets",
                    limit: 5000
                }
            }]
        }]
    },
    plugins: [
        new iCrushLoaderPlugin()
    ]
};