/// <reference path="./typings/main.d.ts" />
import plugins = require("./gulpbrowser.plugins");
let browserify =  function() {
        return plugins.through.obj((file, enc, cb) => { //this is the through object that gets returned by gulpBrowser.browserify();
            var bundleCallback = function(err, bufferedContent) {
                if (Buffer.isBuffer(bufferedContent)){
                    file.contents = bufferedContent;
                } else {
                    plugins.beautylog.error("gulp-browser: .browserify() " + err.message);
                }
                cb(null,file);
            };
            plugins.browserify(file, { basedir: file.base })
                .bundle(bundleCallback)
        });
 };

export = browserify;