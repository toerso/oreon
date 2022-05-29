const Babel = require('../babel/Babel');
const Rules = require('./Rules');

class ServerModules {
    constructor() {
        this.module = {};
        this.rules = [];
        this.babel = new Babel();
        this.rulesObj = new Rules();
    }

    setupBabel() {
        this.rules.push(this.babel.react(), this.babel.typescript());
        this.module.rules = this.rules;
    }

    setupCss() {
        this.rules.push(this.rulesObj.cssRuleSsr());
        this.module.rules = this.rules;
    }

    setupSass() {
        this.rules.push(this.rulesObj.sassRuleSsr());
        this.module.rules = this.rules;
    }

    setupHtml() {
        this.rules.push(this.rulesObj.htmlRule());
        this.module.rules = this.rules;
    }

    setupImageFile() {
        this.rules.push(this.rulesObj.imageFileRuleSsr());
        this.module.rules = this.rules;
    }

    setupFont() {
        this.rules.push(this.rulesObj.fontRuleSsr());
        this.module.rules = this.rules;
    }

    setupAudio() {
        this.rules.push(this.rulesObj.audioRuleSsr());
        this.module.rules = this.rules;
    }

    setupVideo() {
        this.rules.push(this.rulesObj.videoRuleSsr());
        this.module.rules = this.rules;
    }

    setupSsrStripBlock() {
        this.rules.push(this.rulesObj.ssrStripBlock());
        this.module.rules = this.rules;
    }
}

module.exports = ServerModules;