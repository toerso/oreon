class CommonConfig {
    mode;
    entryPath;
    host;

    constructor(mode, host) {
        this.mode = mode;
        this.host = host;
    }

    entry(ep) {
        this.entryPath = ep;
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
