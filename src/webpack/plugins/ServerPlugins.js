const webpack = require('webpack');
const File = require('../File');
const CommonPlugins = require('./CommonPlugins');

class ServerPlugins {
    #CommonPluginsObj;

    constructor() {
        this.plugins = [];
        this.#CommonPluginsObj = new CommonPlugins();
        this.file = new File();
    }


}

module.exports = ServerPlugins;