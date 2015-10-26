/// <reference path="./index.ts" />
module GulpBrowserBrowserify {
    export function init() {
        return function() {
            return through.obj((file, enc, cb) => { //this is the trough object that gets returned by gulpBrowser.browserify();
                var bundleCallback = function(err, bufferedContent) {
                    file.contents = bufferedContent;
                    cb(null,file);
                };
                browserify(file)
                    .bundle(bundleCallback)
            });
        };
    }
}