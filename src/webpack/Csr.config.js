const WebpackConfig = require('./WebpackConfig');
const CommonConfig = require('./Common.config');

class CsrConfig extends  CommonConfig{
    constructor() {
        super('development', "http://localhost:5050");
    }

    run() {
        const ClientSideConfig = new WebpackConfig();

        //Exclude public dir from bop to set public path
        const dirname = this.outputPath.replace("public", '');

        //configuration of webpack for client side
        ClientSideConfig.mode(this.mode);
        ClientSideConfig.target("web");
        ClientSideConfig.name("browser");
        ClientSideConfig.devTool();
        ClientSideConfig.publicPath(this.host, dirname);
        ClientSideConfig.entry(this.entryPath);
        ClientSideConfig.browserOutput(this.outputPath, true);
        ClientSideConfig.browserModules();
        ClientSideConfig.browserPlugins();
        ClientSideConfig.optimization();
        ClientSideConfig.resolve(['.js', '.jsx', '.ts', '.tsx']);

        return ClientSideConfig.webpackConfig;
    }
}

module.exports = CsrConfig;