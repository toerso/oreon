const WebpackConfig = require('./WebpackConfig');
const CommonConfig = require('./Common.config');

class CsrConfig extends  CommonConfig{
    constructor() {
        super('development', "http://localhost:5050")
        this.clientSideConfig = new WebpackConfig();
    }

    run() {
        //Exclude public dir from bop to set public path
        const dirname = this.outputPath.replace("public", '');

        //configuration of webpack for client side
        this.clientSideConfig.mode(this.mode);
        this.clientSideConfig.target("web");
        this.clientSideConfig.name("browser");
        this.clientSideConfig.devTool();
        this.clientSideConfig.publicPath(this.host, dirname);
        this.clientSideConfig.entry(this.entryPath);
        this.clientSideConfig.browserOutput(this.outputPath, true);
        this.clientSideConfig.browserModules();
        this.clientSideConfig.browserPlugins();
        this.clientSideConfig.optimization();
        this.clientSideConfig.resolve(['.js', '.jsx', '.ts', '.tsx']);

        return this.clientSideConfig.webpackConfig;
    }
}

module.exports = CsrConfig;