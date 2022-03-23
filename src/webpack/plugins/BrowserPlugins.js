const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonPlugins = require('./CommonPlugins');

//BrowserPlugins means client side
class BrowserPlugins extends  CommonPlugins{

    htmlWebpackPlugin(properties) {
        if(!properties.hasOwnProperty('filename')) throw Error("Filename needed");
        if(!properties.hasOwnProperty('publicPath')) properties.publicPath = 'auto';
        if(!properties.hasOwnProperty('template')) throw Error("Template file needed");

        //resolving template and filename
        properties.template = this.file.resolve_path(properties.template);
        properties.filename = this.file.resolve_path(properties.filename);

        this.plugins.push(new HtmlWebpackPlugin(properties));
    }
}

module.exports = BrowserPlugins;