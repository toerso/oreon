const webpack = require('webpack');
const File = require('../File');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

class CommonPlugins {
    constructor() {
        this.plugins = [];
        this.file = new File();
    }

    miniCssExtractPlugin(properties) {
        if(!properties.hasOwnProperty('filename')) properties.filename = 'css/oreonnyx.[contenthash:32].bundle.css';
        if(!properties.hasOwnProperty('chunkFilename')) properties.chunkFilename = '[id].[contenthash].css'

        this.plugins.push(new MiniCssExtractPlugin(properties));

        return this;
    }
}

module.exports = CommonPlugins;