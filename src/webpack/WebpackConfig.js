const File = require('./File');
const BrowserPlugins = require('./plugins/BrowserPlugins');
const ServerPlugins = require('./plugins/ServerPlugins');
const BrowserModules = require('./modules/BrowserModules');
const ServerModules = require('./modules/ServerModules');
const Optimization = require('./plugins/Optimization');

class WebpackConfig {
    constructor() {
        this.webpackConfig = {};
        this.contenthash = 'contenthash'
        this.file = new File();
        this.browserPluginsObj = new BrowserPlugins();
        this.browserModulesObj = new BrowserModules();
        this.serverModulesObj = new ServerModules();
        this.optimizationObj = new Optimization();
    }

    mode(mode) {
        if(!this.webpackConfig.hasOwnProperty('mode')) this.webpackConfig.mode = mode;
    }

    target(target) {
        if(!this.webpackConfig.hasOwnProperty('target')) this.webpackConfig.target = target;
    }

    name(name) {
        if(!this.webpackConfig.hasOwnProperty('name')) this.webpackConfig.name = name;
    }

    entry(filepath) {
        if(typeof(filepath) === "string") {
            this.webpackConfig.entry = filepath;//this.file.relative_path(filepath);
        }else {
            this.webpackConfig.entry = {}

            for (const file of filepath) {
                const basename = this.file.file_basename(file);
                this.webpackConfig.entry[basename] = this.file.relative_path(file);
            }
        }
    }

    async browserOutput(path, clean) {
        const outputPath = this.file.resolve_path(path);

        if(this.webpackConfig.target !== "web") throw Error("Target must be web :_(");

        this.webpackConfig.output = {
            publicPath: 'view/',
            path: outputPath,
            filename: `js/oreonnyx.[name].[${this.contenthash}].js`,
            assetModuleFilename: `images/croxo.[name].[${this.contenthash}][ext]`,
            clean: !!clean
        }
    }

    async serverOutput(path, clean) {
        const outputPath = this.file.resolve_path(path);

        if(this.webpackConfig.target !== "node") throw Error("Target must be node :_(");

        this.webpackConfig.output = {
            publicPath: '/',
            path: outputPath,
            filename: `server.js`,
            clean: !!clean
        }
    }

    browserModules() {
        this.browserModulesObj.setupHtml();
        this.browserModulesObj.setupBabel();
        this.browserModulesObj.setupCss();
        this.browserModulesObj.setupImageFile();

        this.webpackConfig.module = this.browserModulesObj.module;
    }

    //server modules goes here---------------
    serverModules() {
        this.serverModulesObj.setupHtml();
        this.serverModulesObj.setupBabel();
        this.serverModulesObj.setupCss();
        this.serverModulesObj.setupImageFile();

        this.webpackConfig.module = this.serverModulesObj.module;
    }

    //For browser content
    browserPlugins() {
        const propertiesOfHtmlWebpackPlugin = {
            template: "./template.html",
            filename: 'view/view.oreon.php',
            inject: 'body',
            scriptLoading: "defer",
        }

        const propertiesOfMiniCssPlugin = {
            filename: 'css/oreonnyx.[name].[contenthash].css'
        }

        //setting plugins properties
        this.browserPluginsObj.htmlWebpackPlugin(propertiesOfHtmlWebpackPlugin);
        this.browserPluginsObj.miniCssExtractPlugin(propertiesOfMiniCssPlugin);

        this.webpackConfig.plugins = this.browserPluginsObj.plugins;
    }

    //code splitting.............................

    optimization() {
        this.optimizationObj.splitChunk();

        //get full optimization property
        this.webpackConfig.optimization = this.optimizationObj.optimaization;
    }

    resolve(extns) {
        if(!this.webpackConfig.hasOwnProperty('resolve')) this.webpackConfig.resolve = {extensions:[...extns]};
    }
}

module.exports = WebpackConfig;