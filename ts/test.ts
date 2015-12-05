/// <reference path="./typings/tsd.d.ts" />
var gulp = require("gulp");
var gulpBrowser = require("./index.js");
var pr = require("pushrocks");
var gulpCallFunction = require("gulp-callfunction");

var pipeWorked = function() {
    pr.beautylog.info("Pipe didn't break! Ready for Primetime!");
};

pr.beautylog.log('Now trying to browserify a testfile...');
gulp.task('gulpBrowserTest',function(cb) {
    var stream =gulp.src('./test/browserifyGulpTest.js')
        .pipe(gulpBrowser.browserify())
        .pipe(gulp.dest("./test/result/"))
        .pipe(gulpCallFunction(pipeWorked));
    return stream;
});
gulp.task('gulpBrowserTestError',function(cb) {
    var stream = gulp.src('./test/browserifyGulpTestError.js')
        .pipe(gulpBrowser.browserify())
        .pipe(gulp.dest("./test/result/"))
        .pipe(gulpCallFunction(pipeWorked));
    return stream;
});
gulp.task("default",['gulpBrowserTest','gulpBrowserTestError'],function(){
    pr.beautylog.success("Test passed!");
});
gulp.start.apply(gulp, ['default']);