/// <reference path="../ts/typings/main.d.ts" />
var plugins = {
    beautylog: require("beautylog"),
    gulp: require("gulp"),
    gulpBrowser: require("../dist/index.js"),
    gulpFunction: require("gulp-function")
};
var should = require("should");
describe("gulpBrowser", function () {
    describe(".browserify", function () {
        it("should run through smoothly", function (done) {
            this.timeout(30000);
            var stream = plugins.gulp.src('./test/testBrowserifyNormal.js')
                .pipe(plugins.gulpBrowser.browserify())
                .pipe(plugins.gulp.dest("./test/result/"))
                .pipe(plugins.gulpFunction(done));
        });
        it("should throw an error, when a module is not found", function (done) {
            var d = require('domain').create();
            var doneCalled = false;
            d.on("error", function (error) {
                console.log(error.message);
                if (!doneCalled) {
                    done();
                    doneCalled = true;
                }
            });
            d.run(function () {
                var stream = plugins.gulp.src("./test/testBrowserifyError.js")
                    .pipe(plugins.gulpBrowser.browserify());
            });
        });
        it("should run through with an empty file", function (done) {
            var stream = plugins.gulp.src('./test/testBrowserifyEmpty.js')
                .pipe(plugins.gulpBrowser.browserify())
                .pipe(plugins.gulp.dest("./test/result/"))
                .pipe(plugins.gulpFunction(done));
        });
    });
});
//# sourceMappingURL=test.js.map