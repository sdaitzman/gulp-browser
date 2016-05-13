/// <reference path="./typings/main.d.ts" />
import plugins = require("./gulpbrowser.plugins");


let browserify =  function(transforms = []) {

    if (!Array.isArray(transforms)) {
        transforms = [transforms];
    }

    let forEach = function(file, enc, cb){ // do this with every chunk (file in gulp terms)

        let bundleCallback = function(err, bufferedContent) { // our bundle callback for when browserify is finished
            if (Buffer.isBuffer(bufferedContent)){
                file.contents = bufferedContent;
            } else {
                plugins.beautylog.error("gulp-browser: .browserify() " + err.message);
                cb(new Error(err.message),file);
                return;
            }
            cb(null,file);
        };

        if(file.contents.length > 0){
            let browserified = plugins.browserify(file, { basedir: file.base });

            transforms.forEach(function (transform) {
                if (typeof transform === 'function') {
                    browserified.transform(transform);
                } else {
                    browserified.transform(transform.transform, transform.options);
                }
            });

            browserified.bundle(bundleCallback);
        } else {
            plugins.beautylog.warn("gulp-browser: .browserify() file.contents appears to be empty");
            cb(null,file);
        };
    }

    let atEnd = function(cb){
        cb();
    } // no need to clean up after ourselves

    return plugins.through.obj(forEach,atEnd); // this is the through object that gets returned by gulpBrowser.browserify();
 };

export = browserify;
