/// <reference path="./typings/main.d.ts" />
/// <reference path="./modulebrowserify.ts" />

var plugins = {
    beautylog: require("beautylog"),
    through: require("through2"),
    gutil: require("gulp-util"),
    path: require("path"),
    browserify: require("browserify")
};


//create the return object
var gulpBrowser:any = {};

gulpBrowser.browserify = GulpBrowserBrowserify.init();

module.exports = gulpBrowser;
