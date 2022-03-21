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
            use:[MiniCssExtractPlugin.loader,'css-loader'],
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
                outputPath: '../../public/', //This property helps to emit the file to desire output folder relative to the current output path
                filename: 'assets/images/croxo.[name].[contenthash][ext]'
            }
        }
    }
}

module.exports = Rules;