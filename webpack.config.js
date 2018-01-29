const
path = require('path'),
webpack = require('webpack'),
package = require('./package.json'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
config = {
    entry: './src/app.js',
    output: {
        filename: 'bundle[chunkhash].js',
        sourceMapFilename: 'bundle[chunkhash].js.map',
        path: path.resolve(__dirname, 'dist')
    },
    cache: false,
    watch: (process.env.NODE_ENV === 'development' ? true : false),
    watchOptions: {
        aggregateTimeout: 1000,
        ignored: /node_modules/
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: package.name,
            filename: 'index.html', // Output filename: ./dist/index.html
            template: './src/template.html',
            inject: 'body',

            language: package.config.language,
            charset: package.config.charset,
            author: package.author,
            description: package.description,
            keywords: package.keywords.join(),
            pragma: (process.env.NODE_ENV === 'development' ? 'no-cache': ''),
            expires: (process.env.NODE_ENV === 'development' ? '0': 'Friday, 25-May-18 00:00:00 GMT'), // Standart: RFC 850.
            cache_control: (process.env.NODE_ENV === 'production' ? 'public, max-age: 31536000' : 'no-cache, no-store, must-revalidate')
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'package': JSON.stringify(package)
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Popper: 'popper.js'
        })
    ],
    devServer: {
        compress: true, // gzip compression.
        host: 'localhost',
        https: false,
        port: package.config.port,
        index: 'index.html', // Index filename.
        open: false, // Auto open in the browser.
        allowedHosts: [
            'localhost'
        ]
    }
};
module.exports = config;
