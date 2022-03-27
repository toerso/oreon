class Helper {
    constructor() {
        this.type = {
            assetResource: "asset/resource",
            assetInline: 'asset/inline',
            assetSource: 'asset/source'
        };

    }

    image() {
        return {
            regex: /\.(png|jpe?g|svg|gif)$/i,
            filename: 'images/croxo.[name].[contenthash][ext]'
        }
    }

    font() {
        return {
            regex: /\.(woff|woff2|eot|ttf|otf)$/i,
            filename: 'fonts/[name].[contenthash][ext]'
        }
    }
}

module.exports = Helper;