/// <reference path="./typings/tsd.d.ts" />
/// <reference path="./modulebrowserify.ts" />

var through = require("through2");
var path = require("path");
var browserify = require("browserify");

//create the return object
var gulpBrowser:any = {};

gulpBrowser.browserify = GulpBrowserBrowserify.init();

module.exports = gulpBrowser;
