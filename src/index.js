const Oreon = require('./Oreon');

module.exports = {
    ServerApi: Oreon.getSsrApi(),
    BrowserApi: Oreon.getCsrApi()
}