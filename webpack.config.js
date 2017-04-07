process.env.NODE_ENV == 'production';
var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSCSS = new ExtractTextPlugin('../css/my.css');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        app: [ './css/my.scss', './js/my/my.js' ],
        vendor: [ 'angular', 'angular-resource', 'angular-sanitize', 'angular-ui-router', 'ng-dialog' ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.s[a|c]ss$/,
                use: extractSCSS.extract({
                    fallback: "style-loader",
                    publicPath: "/",
                    use: ['css-loader', 'sass-loader', 'postcss-loader']
                })
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: "pre",
                include: path.join(__dirname, "src"),
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                include: path.join(__dirname, "src"),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.webpack.js', '.js', '.css', '.scss']
    },
    output: {
        path: __dirname + '/src/js',
        filename: 'main.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        }),
        extractSCSS
    ]
};