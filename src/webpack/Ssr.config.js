const WebpackConfig = require('./WebpackConfig');
const CommonConfig = require('./Common.config');

class SsrConfig extends  CommonConfig{

    constructor() {
        super('development', "http://localhost:5050");
    }

    run() {
      const  SsrConfiguration = new WebpackConfig();

        //Exclude public dir from bop to set public path
        const dirname = '/'; // it might be changed..... //for public path

        //configuration of webpack for client side
        SsrConfiguration.mode(this.mode);
        SsrConfiguration.target("node");
        SsrConfiguration.name("server");
        SsrConfiguration.devTool();
        SsrConfiguration.publicPath(this.host, dirname);
        SsrConfiguration.entry(this.entryPath);
        SsrConfiguration.serverOutput(this.outputPath, true);
        SsrConfiguration.serverModules();
        SsrConfiguration.serverPlugins();
        SsrConfiguration.resolve(['.js', '.jsx', '.ts', '.tsx']);

        return SsrConfiguration.webpackConfig;
    }
}

module.exports = SsrConfig;