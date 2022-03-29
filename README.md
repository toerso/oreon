# oreonyx
**Ui** module bundler helper.

**oreonyx** is a module bundler helper. It works with react js(vanilla js as well). If you want to use react js in your project then **oreonyx** can help you to bundle your javascript code and assets both client side rendering and server side rendering.

**Installation**: `npm install @oreodusk/oreonyx --save-dev` or `yarn add @oreodusk/oreonyx -D`

**Example** **of** **usages:**
Before the get started with **oreonyx** you have to do some important work to do.

First, you have to create two files in your project root directory.

1A. `nyx.browser.js` and 

1B. `nyx.server.js` (If you are not using ssr then you don't need to create this file);

Second, you have to create a `template.html` file in your project root directory.

**oreonyx** give two api `BrowserApi` and `ServerApi` for client side and server side module bundler.

**BrowserApi:**
`nyx.browser.js`
~~~~
const {BrowserApi} = require('oreonyx');

//more control over markup(html)

/*const props = {
    markUpControl: {
        ext: 'html',
        dir: 'dist' 
    }
}*/

module.exports = BrowserApi.entry('./view/js/browser.js')
    .setHost('http://localhost:5050').setMode('development').run();
~~~~
By default, **oreonyx** generates markup with php extension in `self` or entry directory that you had passed.

To control over html markup you can create above `props` object. `props` object has `markUpControl` property which is also an object
with two properties `ext and dir`.

`ext` means extension. You can use `html or php` as you like.
`dir` means directory where should markup file will go to. It has two options `self  and dist`. If you choose to `dist` then output markup file goes to `public` directory. A last,

pass the `props` object as argument of `run(props)` method like this.

If you want to bundle ssr code then you can use `ServerApi`

**ServerApi:**
`nyx.server.js`
~~~~
const {ServerApi} = require('oreonyx');

//----------------------------look :)------------------------------------//
//      Here you've to give the entry path of server-side-rendering     //
//---------------------------------------------------------------------//

module.exports = ServerApi.entry('./view/js/server.js')
    .setHost("http://localhost:5050").setMode("development").run();
~~~~

This `ServerApi` bundle your code and put it on  the `runtime/ssr/server.js` file.


**Yeah** here all about it is. You don't need to manually setup anything with `webpack`.

**Oh,** by the way **oreonyx** has a nice command line tool called `nyx`.

If you wanna use `nyx` then you have to create some script in your project package.json file.
~~~~
 "scripts": {
    "build:dev": "nyx build dev",
    "build:ssr": "nyx ssr dev",
    "build:csr": "nyx csr dev",
    "build:ssr:watch": "nyx ssr dev --watch",
    "build:csr:watch": "nyx csr dev --watch",
    "nyx:prod": "nyx build prod"
  },
~~~~

Here,

`build:dev` command bundle both the client side and server side code in `development` mode.

`build:ssr` command only bundle your server side code in `development` mode.

`build:csr` command only bundle your client side code in `development` mode.

`build:ssr:watch` command only bundle your server side code in `watch` mode and in `development` mode.

`build:csr:watch` command only bundle your client side code in `watch` mode and in `development` mode.

`nyx:prod` command bundle both csr and ssr code in `production`
mode.

**End**
