const Babel = require('../babel/Babel');
const Rules = require('./Rules');

class BrowserModules {
    constructor() {
        this.module = {};
        this.rules = [];
        this.babel = new Babel();
        this.rulesObj = new Rules();
    }

    setupHtml() {
        this.rules.push(this.rulesObj.htmlRule());
        this.module.rules = this.rules;
    }

    setupBabel() {
        this.rules.push(this.babel.react(), this.babel.typescript());
        this.module.rules = this.rules;
    }

    setupCss() {
        this.rules.push(this.rulesObj.cssRuleCsr());
        this.module.rules = this.rules;
    }

    setupSass() {
        this.rules.push(this.rulesObj.sassRuleCsr());
        this.module.rules = this.rules;
    }

    setupImageFile() {
        this.rules.push(this.rulesObj.imageFilesRuleCsr());
        this.module.rules = this.rules;
    }

    setupFont() {
        this.rules.push(this.rulesObj.fontRuleCsr());
        this.module.rules = this.rules;
    }

    setupAudio() {
        this.rules.push(this.rulesObj.audioRuleCsr());
        this.module.rules = this.rules;
    }

    setupVideo() {
        this.rules.push(this.rulesObj.videoRuleCsr());
        this.module.rules = this.rules;
    }
}

module.exports = BrowserModules;