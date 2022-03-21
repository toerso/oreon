const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const File = require('../File');
const CommonPlugins = require('./CommonPlugins');

//BrowserPlugins means client side

class BrowserPlugins {
    #CommonPluginsObj;

    constructor() {
        this.plugins = [];
        this.#CommonPluginsObj = new CommonPlugins();
        this.file = new File();
    }

    htmlWebpackPlugin(properties) {
        if(!properties.hasOwnProperty('filename')) throw Error("Filename needed");
        if(!properties.hasOwnProperty('publicPath')) properties.publicPath = 'auto';
        if(!properties.hasOwnProperty('template')) throw Error("Template file needed");

        //resolving template and filename
        properties.template = this.file.resolve_path(properties.template);
        properties.filename = this.file.resolve_path(properties.filename);

        this.plugins.push(new HtmlWebpackPlugin(properties));
    }

    miniCssExtractPlugin(properties) {
        if(!properties.hasOwnProperty('filename')) properties.filename = 'css/oreonnyx.[contenthash:32].bundle.css';

        this.plugins.push(new MiniCssExtractPlugin(properties));
    }
}

module.exports = BrowserPlugins;