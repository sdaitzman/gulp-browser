/// <reference path="./typings/main.d.ts" />
console.log("**** starting test ****");
var plugins = {
    beautylog: require("beautylog"),
    gulp: require("gulp"),
    gulpBrowser: require("../index.js"),
    gulpCallFunction: require("gulp-callfunction")
};


var pipeWorked = function() {
    plugins.beautylog.info("Pipe didn't break! Ready for Primetime!");
};

plugins.beautylog.log('Now trying to browserify a testfile...');
plugins.gulp.task('gulpBrowserTest',function(cb) {
    var stream = plugins.gulp.src('./testassets/browserifyGulpTest.js')
        .pipe(plugins.gulpBrowser.browserify())
        .pipe(plugins.gulp.dest("./testassets/result/"))
        .pipe(plugins.gulpCallFunction(pipeWorked));
    return stream;
});
plugins.gulp.task('gulpBrowserTestError',function(cb) {
    plugins.beautylog.info("Expecting an error:");
    var stream = plugins.gulp.src('./testassets/browserifyGulpTestError.js')
        .pipe(plugins.gulpBrowser.browserify())
        .pipe(plugins.gulp.dest("./testassets/result/"))
        .pipe(plugins.gulpCallFunction(pipeWorked));
    return stream;
});
plugins.gulp.task("default",['gulpBrowserTest','gulpBrowserTestError'],function(){
    plugins.beautylog.success("Test passed!");
});
plugins.gulp.start.apply(plugins.gulp, ['default']);