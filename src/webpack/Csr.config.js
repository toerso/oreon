const WebpackConfig = require('./WebpackConfig');

class CsrConfig {
    constructor() {
        this.clientSideConfig = new WebpackConfig();
    }

    set(bsp, bop) {
        this.browserFilePath = bsp;
        this.browserOutputPath = bop;

        return this;
    }

    run() {
        this.clientSideConfig.mode("development");
        this.clientSideConfig.target("web");
        this.clientSideConfig.name("browser");
        this.clientSideConfig.entry(this.browserFilePath);
        this.clientSideConfig.browserOutput(this.browserOutputPath, true);
        this.clientSideConfig.browserModules();
        this.clientSideConfig.browserPlugins();
        this.clientSideConfig.optimization();
        this.clientSideConfig.resolve(['.js', '.jsx', '.ts', '.tsx']);

        return this.clientSideConfig.webpackConfig;
    }
}

module.exports = CsrConfig;