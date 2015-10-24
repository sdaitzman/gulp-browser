/// <reference path="./index.ts" />
module GulpBrowserBrowserify {
    export function init() {
        return function() {
            return through.obj((file, enc, cb) => { //this is the trough object that gets returned by gulpBrowser.browserify();
                var content = String(file.contents); // get the content of the file
                var bundleCallback = (err,bundledBuffer) => { //gets called by browserify, arrow function (TS) preserves this
                    file.contents = bundledBuffer;
                    this.push(file);
                    cb();
                };
                browserify(content).bundle(bundleCallback);
            });
        };
    }
}