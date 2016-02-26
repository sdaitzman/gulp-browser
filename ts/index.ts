/// <reference path="./typings/main.d.ts" />

import browserify = require("./gulpbrowser.browserify");


//create the return object
var gulpBrowser:any = {
    browserify: browserify
};


export = gulpBrowser;
