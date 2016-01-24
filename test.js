/// <reference path="./typings/tsd.d.ts" />
var plugins = {
    beautylog: require("beautylog"),
    gulp: require("gulp"),
    gulpBrowser: require("./index.js"),
    gulpCallFunction: require("gulp-callfunction")
};
var pipeWorked = function () {
    plugins.beautylog.info("Pipe didn't break! Ready for Primetime!");
};
plugins.beautylog.log('Now trying to browserify a testfile...');
plugins.gulp.task('gulpBrowserTest', function (cb) {
    var stream = plugins.gulp.src('./test/browserifyGulpTest.js')
        .pipe(plugins.gulpBrowser.browserify())
        .pipe(plugins.gulp.dest("./test/result/"))
        .pipe(plugins.gulpCallFunction(pipeWorked));
    return stream;
});
plugins.gulp.task('gulpBrowserTestError', function (cb) {
    var stream = plugins.gulp.src('./test/browserifyGulpTestError.js')
        .pipe(plugins.gulpBrowser.browserify())
        .pipe(plugins.gulp.dest("./test/result/"))
        .pipe(plugins.gulpCallFunction(pipeWorked));
    return stream;
});
plugins.gulp.task("default", ['gulpBrowserTest', 'gulpBrowserTestError'], function () {
    plugins.beautylog.success("Test passed!");
});
plugins.gulp.start.apply(plugins.gulp, ['default']);
