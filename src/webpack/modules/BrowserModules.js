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
        this.rules.push(this.rulesObj.cssRuleBrowser());
        this.module.rules = this.rules;
    }

    setupImageFile() {
        this.rules.push(this.rulesObj.imageFilesRule());
        this.module.rules = this.rules;
    }
}

module.exports = BrowserModules;