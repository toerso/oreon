const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
            use:[MiniCssExtractPlugin.loader, {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: true,
                        mode: 'local',
                        localIdentName: '[name]__[local]--[hash:base64:15]__oreon',
                    }
                }
            }],
        }
    }

    cssRuleServer() {
        return {
            test:/\.css$/,
            use:[{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        emit: false
                    }
                },

                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: true,
                            mode: 'local',
                            localIdentName: '[name]__[local]--[hash:base64:15]__oreon',
                        }
                    }
            }],
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

    fontRule() {
        return {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'fonts/[name].[contenthash][ext]'
            }
        }
    }

    fontRuleSsr() {
        return {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
                outputPath: '../../public/',
                filename: 'assets/fonts/[name].[contenthash][ext]'
            }
        }
    }
}

module.exports = Rules;