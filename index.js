/// <reference path="./index.ts" />
var GulpBrowserBrowserify;
(function (GulpBrowserBrowserify) {
    function init() {
        return function () {
            //this is the trough object that gets returned by gulpBrowser.browserify();
            return through.obj(function (file, enc, cb) {
                var content = String(file.contents);
                var basedir = file.base;
                var bundleCallback = function (err, bundledBuffer) {
                };
                browserify(content).bundle(bundleCallback);
                //run callback function to signal end of plugin process.
                return cb(null, file);
            });
        };
    }
    GulpBrowserBrowserify.init = init;
})(GulpBrowserBrowserify || (GulpBrowserBrowserify = {}));
/// <reference path="./typings/tsd.d.ts" />
/// <reference path="./modulebrowserify.ts" />
var through = require("through2");
var path = require("path");
var browserify = require("browserify");
var pr = require("pushrocks");
//create the return object
var gulpBrowser = {};
gulpBrowser.browserify = GulpBrowserBrowserify.init();
module.exports = gulpBrowser;
