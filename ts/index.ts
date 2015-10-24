/// <reference path="./typings/tsd.d.ts" />
/// <reference path="./modulebrowserify.ts" />

var through = require("through2");
var gutil = require("gulp-util");
var path = require("path");
var browserify = require("browserify");
var pr = require("pushrocks");

//create the return object
var gulpBrowser:any = {};

gulpBrowser.browserify = GulpBrowserBrowserify.init();

module.exports = gulpBrowser;
