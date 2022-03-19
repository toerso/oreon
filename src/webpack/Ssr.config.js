const WebpackConfig = require('./WebpackConfig');

class SsrConfig {
    constructor() {
        this.serverSideConfig = new WebpackConfig();
    }

    set(ssp, sop) {
        this.serverFilePath = ssp;
        this.serverOutputPath = sop;

        return this;
    }

    run() {
        this.serverSideConfig.mode("development");
        this.serverSideConfig.target("node");
        this.serverSideConfig.name("server");
        this.serverSideConfig.entry(this.serverFilePath);
        this.serverSideConfig.serverOutput(this.serverOutputPath, true);
        this.serverSideConfig.serverModules();
        this.serverSideConfig.resolve(['.js', '.jsx', '.ts', '.tsx']);

        return this.serverSideConfig.webpackConfig;
    }
}

module.exports = SsrConfig;