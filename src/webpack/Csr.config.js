const WebpackConfig = require('./WebpackConfig');

class CsrConfig {
    #Mode;
    #EntryPath;
    #OutputPath;
    #Host;

    constructor() {
        this.clientSideConfig = new WebpackConfig();
        this.#Mode = 'development';
        this.#Host = "http://localhost:5050"
    }

    set(bsp, bop) {
        this.#EntryPath = bsp;
        this.#OutputPath = bop;

        return this;
    }

    setMode(mode) {
        this.#Mode = mode;

        return this;
    }

    setHost(host) {
        this.#Host = host;

        return this;
    }

    run() {
        //Exclude public dir from bop to set public path
        const dirname = this.#OutputPath.replace("public", '');

        //configuration of webpack for client side
        this.clientSideConfig.mode(this.#Mode);
        this.clientSideConfig.target("web");
        this.clientSideConfig.name("browser");
        this.clientSideConfig.devTool();
        this.clientSideConfig.publicPath(this.#Host, dirname);
        this.clientSideConfig.entry(this.#EntryPath);
        this.clientSideConfig.browserOutput(this.#OutputPath, true);
        this.clientSideConfig.browserModules();
        this.clientSideConfig.browserPlugins();
        this.clientSideConfig.optimization();
        this.clientSideConfig.resolve(['.js', '.jsx', '.ts', '.tsx']);

        return this.clientSideConfig.webpackConfig;
    }
}

module.exports = CsrConfig;