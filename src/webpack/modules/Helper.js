class Helper {
    #type;
    constructor() {
        this.#type = {
            assetResource: "asset/resource",
            assetInline: 'asset/inline',
            assetSource: 'asset/source'
        };

    }

    image() {
        return {
            regex: /\.(png|jpe?g|svg|gif)$/i,
            type: this.#type.assetResource,
            filename: 'media/images/oreonyx.[name].[contenthash][ext]'
        };
    }

    font() {
        return {
            regex: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: this.#type.assetResource,
            filename: 'fonts/oreonyx.[name].[contenthash][ext]'
        };
    }

    audio() {
        return {
            regex: /\.(mp3|wav|aac|ac3|aif|aifc|aiff|au|caf|dts|flac|gsm|m4a|m4b|m4r|mka|mmf|mp2|mpa|oga|ogg|opus|ra|snd|voc|wma)$/i,
            type: this.#type.assetResource,
            filename: 'media/audio/oreonyx.[name].[contenthash][ext]'
        };
    }

    video() {
        return {
            regex: /\.(3g2|3gp|asf|avi|f4v|flv|m2t|m3ts|m2v|m4v|mjpeg|mkv|mov|mp4|mpeg|mts|mxf|ogv|rm|swf|ts|vob|webm|wmv|wtv)/i,
            type: this.#type.assetResource,
            filename: 'media/video/oreonyx.[name].[contenthash][ext]'
        }
    }
}

module.exports = Helper;