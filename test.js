/// <reference path="./typings/tsd.d.ts" />
var gulp = require("gulp");
var gulpBrowser = require("./index.js");
var pr = require("pushrocks");
var gulpCallFunction = require("gulp-callfunction");
var pipeWorked = function () {
    pr.beautylog.success("Pipe didn't break! Ready for Primetime!");
};
pr.beautylog.log('Now trying to browserify a testfile...');
gulp.task('gulpBrowserTest', function (cb) {
    gulp.src('./test/*.js')
        .pipe(gulpBrowser.browserify())
        .pipe(gulp.dest("./test/result/"))
        .pipe(gulpCallFunction(pipeWorked));
});
gulp.start.apply(gulp, ['gulpBrowserTest']);
