class CommonConfig {
    mode;
    entryPath;
    outputPath;
    host;

    constructor(mode, host) {
        this.mode = mode;
        this.host = host;
    }

    set(ep, op) {
        this.entryPath = ep;
        this.outputPath = op;

        return this;
    }

    setMode(mode) {
        this.mode = mode;

        return this;
    }

    setHost(host) {
        this.host = host;

        return this;
    }
}

module.exports = CommonConfig;
