const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Helper = require('./Helper');

class Rules {
    #HelperObj;

    constructor() {
        this.#HelperObj = new Helper();
    }

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

    sassRuleBrowser() {
        return  {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        }
    }

    sassRuleServer() {
        return  {
            test: /\.s[ac]ss$/i,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    emit: false
                }
            }, 'css-loader', 'sass-loader'],
        }
    }

    imageFilesRule() {
        const {regex, filename} = this.#HelperObj.image();

        return {
            test: regex,
            type: this.#HelperObj.type.assetResource
        }
    }

    imageFileRuleSsr() {
        const {regex, filename} = this.#HelperObj.image();

        return {
            test: regex,
            type: this.#HelperObj.type.assetResource,
            generator: {
                outputPath: '../../public/assets', //This property helps to emit the file to desire output folder relative to the current output path
                filename: filename
            }
        }
    }

    fontRule() {
        const {regex, filename} = this.#HelperObj.font();

        return {
            test: regex,
            type: this.#HelperObj.type.assetResource,
            generator: {
                filename: filename
            }
        }
    }

    fontRuleSsr() {
        const {regex, filename} = this.#HelperObj.font();

        return {
            test: regex,
            type: this.#HelperObj.type.assetResource,
            generator: {
                outputPath: '../../public/assets',
                filename: filename
            }
        }
    }
}

module.exports = Rules;