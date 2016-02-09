/// <reference path="./typings/main.d.ts" />
var plugins = {
    beautylog: require("beautylog"),
    gulp: require("gulp"),
    gulpBrowser: require("../index.js"),
    gulpFunction: require("gulp-function")
};

describe("gulpBrowser",function(){
    describe(".browserify",function(){
        it("should run through smoothly",function(done){
            this.timeout(20000);
            plugins.gulp.task('gulpBrowserNormal',function(cb) {
                var stream = plugins.gulp.src('./test/browserifyGulpTest.js')
                    .pipe(plugins.gulpBrowser.browserify())
                    .pipe(plugins.gulp.dest("./test/result/"))
                    .pipe(plugins.gulpFunction(done));
                return stream;
            });
            plugins.gulp.start.apply(plugins.gulp, ['gulpBrowserNormal']);
        });
    });
});
