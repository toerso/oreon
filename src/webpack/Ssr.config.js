const WebpackConfig = require('./WebpackConfig');
const CommonConfig = require('./Common.config');

class SsrConfig extends  CommonConfig{
    #SsrConfiguration;

    constructor() {
        super('development', "http://localhost:5050")
        this.#SsrConfiguration = new WebpackConfig();
    }

    run() {
        //Exclude public dir from bop to set public path
        const dirname = '/'; // it might be changed..... //for public path

        //configuration of webpack for client side
        this.#SsrConfiguration.mode(this.mode);
        this.#SsrConfiguration.target("node");
        this.#SsrConfiguration.name("server");
        this.#SsrConfiguration.devTool();
        this.#SsrConfiguration.publicPath(this.host, dirname);
        this.#SsrConfiguration.entry(this.entryPath);
        this.#SsrConfiguration.serverOutput(this.outputPath, true);
        this.#SsrConfiguration.serverModules();
        this.#SsrConfiguration.serverPlugins();
        this.#SsrConfiguration.resolve(['.js', '.jsx', '.ts', '.tsx']);

        return this.#SsrConfiguration.webpackConfig;
    }
}

module.exports = SsrConfig;