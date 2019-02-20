const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

var bourbon     = require('bourbon');
var neat        = require('bourbon-neat');

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

function srcFile( _path ) {
    return path.resolve(__dirname, 'src', _path);
}

// Resolving includePaths inside Vue files: https://github.com/vuejs/vue-loader/issues/798#issuecomment-298091828
const styleLoaderChain = [{
    loader: "css-loader"
}, {
    loader: 'sass-loader?sourceMap',
    options: {
        includePaths: [bourbon.includePaths, neat.includePaths, srcFile("stylesheets")]
    }
}];



module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",       
                include: [
                    path.resolve(__dirname, 'src')
                ],
                options: {
                  presets: ["env"]
                },
            },
            {
                test: /\.pug|\.jade$/,
                oneOf: [
                    // this applies to <template lang="pug"> in Vue components
                    {
                      resourceQuery: /^\?vue/,
                      use: ['pug-plain-loader']
                    },
                    // this applies to pug imports inside JavaScript
                    {
                      use: ['raw-loader', 'pug-plain-loader']
                    }
                  ]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                // options: {
                //     // https://github.com/vuejs/vue-loader/blob/master/docs/en/configurations/extract-css.md
                //     extractCSS: true,
                //     loaders: {
                //         scss: extractSass.extract({
                //             use:styleLoaderChain, 
                //             fallback: 'vue-style-loader'
                //         })
                //     }
                // }                
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: styleLoaderChain,
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },     
            {
                test: /\.(jpe?g|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: ['file-loader?name=[name].[ext]']
            }, {
                test: /\.(png|gif|svg)$/i,
                use: ["url-loader?limit=100000"]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: ['url-loader?limit=10000&mimetype=application/font-woff']
            }                                 
        ]
    },
    mode: process.env.ENVIRONMENT || "development",
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ]
    },
    devServer: {
        proxy: {
            "*": "http://[::1]:8081"
            // "secure": false,
            // "changeOrigin": true
        }
    },
    plugins: [

        extractSass,

        new VueLoaderPlugin(),

        new HtmlWebpackPlugin({
            title: 'Custom template using Pug',
            template: 'src/index.pug',
            inject: 'body',
            minify: false
        }),

        new CopyWebpackPlugin([
            { from: 'src/resources/', to: "resources/" }
        ])
    ]
};