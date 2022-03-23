const WebpackConfig = require('./WebpackConfig');

class SsrConfig {
    #Mode;
    #EntryPath;
    #OutputPath;
    #Host;
    #SsrConfiguration;

    constructor() {
        this.#SsrConfiguration = new WebpackConfig();
        this.#Mode = 'development';
        this.#Host = "http://localhost:5050"
    }

    set(ssp, sop) {
        this.#EntryPath = ssp;
        this.#OutputPath = sop;

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
        const dirname = '/'; // it might be changed..... //for public path

        //configuration of webpack for client side
        this.#SsrConfiguration.mode(this.#Mode);
        this.#SsrConfiguration.target("node");
        this.#SsrConfiguration.name("server");
        this.#SsrConfiguration.devTool();
        this.#SsrConfiguration.publicPath(this.#Host, dirname);
        this.#SsrConfiguration.entry(this.#EntryPath);
        this.#SsrConfiguration.serverOutput(this.#OutputPath, true);
        this.#SsrConfiguration.serverModules();
        this.#SsrConfiguration.serverPlugins();
        //this.#SsrConfiguration.externals();
        this.#SsrConfiguration.resolve(['.js', '.jsx', '.ts', '.tsx']);

        return this.#SsrConfiguration.webpackConfig;
    }
}

module.exports = SsrConfig;