//This file contains all extra configuration both browser and server
const NodeExternal = require('webpack-node-externals');

class Extra{

    nodeExternals() {
        return NodeExternal({allowlist: [/^(.(?!.*\.css$))*$/i]});
    }
}

module.exports = Extra;