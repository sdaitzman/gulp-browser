/// <reference path="./index.ts" />
module GulpBrowserBrowserify {
    export function init() {
        return function() {
            return plugins.through.obj((file, enc, cb) => { //this is the through object that gets returned by gulpBrowser.browserify();
                var bundleCallback = function(err, bufferedContent) {
                    if (Buffer.isBuffer(bufferedContent)){
                        file.contents = bufferedContent;
                    } else {
                        plugins.beautylog.error("gulp-browser: .browserify() " + err.message);
                    }
                    cb(null,file);
                };
                plugins.browserify(file)
                    .bundle(bundleCallback)
            });
        };
    }
}