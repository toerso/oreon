const CsrConfig = require('./webpack/Csr.config');
const SsrConfig = require('./webpack/Ssr.config');

class Oreon {
    static getCsrApi() {
        return new CsrConfig();
    }

    static getSsrApi() {
        return new SsrConfig();
    }
}

module.exports = Oreon;