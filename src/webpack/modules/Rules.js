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

    cssRuleCsr() {
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

    cssRuleSsr() {
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

    sassRuleCsr() {
        return  {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        }
    }

    sassRuleSsr() {
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

    imageFilesRuleCsr() {
        const {regex, type, filename} = this.#HelperObj.image();

        return {
            test: regex,
            type: type
        }
    }

    imageFileRuleSsr() {
        const {regex, type, filename} = this.#HelperObj.image();

        return {
            test: regex,
            type: type,
            generator: {
                outputPath: '../../public/', //This property helps to emit the file to desire output folder relative to the current output path
                filename: `assets/${filename}`
            }
        }
    }

    fontRuleCsr() {
        const {regex, type, filename} = this.#HelperObj.font();

        return {
            test: regex,
            type: type,
            generator: {
                filename: filename
            }
        }
    }

    fontRuleSsr() {
        const {regex, type, filename} = this.#HelperObj.font();

        return {
            test: regex,
            type: type,
            generator: {
                outputPath: '../../public/',
                filename: `assets/${filename}`
            }
        }
    }

    audioRuleCsr() {
        const {regex, type, filename} = this.#HelperObj.audio();

        return {
            test: regex,
            type: type,
            generator: {
               filename: filename
            }
        }
    }

    audioRuleSsr() {
        const {regex, type, filename} = this.#HelperObj.audio();

        return {
            test: regex,
            type: type,
            generator: {
                emit: false
            }
        }
    }

    videoRuleCsr() {
        const {regex, type, filename} = this.#HelperObj.video();

        return {
            test: regex,
            type: type,
            generator: {
                filename: filename
            }
        }
    }

    videoRuleSsr() {
        const {regex, type} = this.#HelperObj.video();

        return {
            test: regex,
            type: type,
            generator: {
                emit: false
            }
        }
    }

}

module.exports = Rules;