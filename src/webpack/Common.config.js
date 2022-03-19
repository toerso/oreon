
const path = require('path');
const fs = require('fs');


class CommonConfig {
    Extensions = ['.js', '.jsx', '.ts', '.tsx'];
    regexHtml = /\.html$/;

    constructor() {
        this.webpackCommon = {}
    }

    resolve() {
        return {extensions: this.Extensions};
    }

    webpackCommonConfig() {
        return {
            module: {
                rules: [
                    {
                        test: this.regexHtml,
                        use: ['html-loader']
                    }
                ]
            },
            resolve: this.resolve()
        }
    }
}

module.exports = CommonConfig;
