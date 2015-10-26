/// <reference path="./index.ts" />
var GulpBrowserBrowserify;
(function (GulpBrowserBrowserify) {
    function init() {
        return function () {
            return through.obj(function (file, enc, cb) {
                var bundleCallback = function (err, bufferedContent) {
                    file.contents = bufferedContent;
                    cb(null, file);
                };
                browserify(file)
                    .bundle(bundleCallback);
            });
        };
    }
    GulpBrowserBrowserify.init = init;
})(GulpBrowserBrowserify || (GulpBrowserBrowserify = {}));
/// <reference path="./typings/tsd.d.ts" />
/// <reference path="./modulebrowserify.ts" />
var through = require("through2");
var gutil = require("gulp-util");
var path = require("path");
var browserify = require("browserify");
var pr = require("pushrocks");
//create the return object
var gulpBrowser = {};
gulpBrowser.browserify = GulpBrowserBrowserify.init();
module.exports = gulpBrowser;
