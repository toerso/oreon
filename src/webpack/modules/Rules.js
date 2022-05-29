const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Helper = require('./Helper');

class Rules {
    #HelperObj;

    constructor() {
        this.#HelperObj = new Helper();
        this.baseOutputDir = "assets";
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
                        localIdentName: '[name]__[local]--[hash:base64:30]__mechanix',
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
                            localIdentName: '[name]__[local]--[hash:base64:30]__mechanix',
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
            type: type,
            generator: {
                filename: filename
            }
        }
    }

    imageFileRuleSsr() {
        const {regex, type, filename} = this.#HelperObj.image();

        return {
            test: regex,
            type: type,
            generator: {
                outputPath: '../../public/', //This property helps to emit the file to desire output folder relative to the current output path
                filename: `${this.baseOutputDir}/${filename}`
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
                outputPath: '../../public/', //This property helps to emit the file to desire output folder relative to the current output path
                filename: `${this.baseOutputDir}/${filename}`
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
                outputPath: '../../public/', //This property helps to emit the file to desire output folder relative to the current output path
                filename: `${this.baseOutputDir}/${filename}`
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
        const {regex, type, filename} = this.#HelperObj.video();

        return {
            test: regex,
            type: type,
            generator: {
                outputPath: '../../public/', //This property helps to emit the file to desire output folder relative to the current output path
                filename: `${this.baseOutputDir}/${filename}`
            }
        }
    }

    ssrStripBlock() {
        return {
            test: /\.jsx?$/,
            enforce: 'pre',
            exclude: /(node_modules|bower_components|\.spec\.js)/,
            use: [
                {
                    loader: 'webpack-strip-block',
                    options: {
                        start: 'SERVERSIDE-ONLY: START',
                        end: 'SERVERSIDE-ONLY:END'
                    }
                }
            ]
        }
    }

}

module.exports = Rules;