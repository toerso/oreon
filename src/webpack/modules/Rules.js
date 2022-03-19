const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

class Rules {
    htmlRule() {
        return {
            test: /\.html$/,
            use: ['html-loader']
        }
    }

    cssRuleBrowser() {
        return {
            test:/\.css$/,
            use:[MiniCssExtractPlugin.loader,'css-loader']
        }
    }

    cssRuleServer() {
        return {
            test:/\.css$/,
            use: ["css-loader"],
            type: 'asset/source'
        }
    }

    imageFilesRule() {
        return {
            test: /\.(png|jpe?g|svg|gif)$/,
            type: "asset/resource",
        }
    }

    imageFileRuleSsr() {
        return {
            test: /\.(png|jpe?g|svg|gif)$/i,
            type: "asset/resource",
            generator: {
                //emit: false //for not getting output image in ssr
                filename: '../view/images/croxo.[name].[contenthash][ext]'
            }
        }
    }
}

module.exports = Rules;