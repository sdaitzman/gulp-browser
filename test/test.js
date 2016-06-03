"use strict";
require("typings-test");
var plugins = {
    beautylog: require("beautylog"),
    gulp: require("gulp"),
    gulpBrowser: require("../dist/index.js"),
    gulpFunction: require("gulp-function")
};
require("should");
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
        it("should run through work with transforms", function (done) {
            this.timeout(30000);
            var transforms = [
                {
                    transform: "babelify",
                    options: { presets: ["es2015"] }
                }
            ];
            var stream = plugins.gulp.src('./test/testBrowserifyNormal.js')
                .pipe(plugins.gulpBrowser.browserify(transforms))
                .pipe(plugins.gulp.dest("./test/result/"))
                .pipe(plugins.gulpFunction(done));
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidHlwaW5ncy10ZXN0XCJcclxubGV0IHBsdWdpbnMgPSB7XHJcbiAgICBiZWF1dHlsb2c6IHJlcXVpcmUoXCJiZWF1dHlsb2dcIiksXHJcbiAgICBndWxwOiByZXF1aXJlKFwiZ3VscFwiKSxcclxuICAgIGd1bHBCcm93c2VyOiByZXF1aXJlKFwiLi4vZGlzdC9pbmRleC5qc1wiKSxcclxuICAgIGd1bHBGdW5jdGlvbjogcmVxdWlyZShcImd1bHAtZnVuY3Rpb25cIilcclxufTtcclxuaW1wb3J0IFwic2hvdWxkXCI7XHJcblxyXG5cclxuZGVzY3JpYmUoXCJndWxwQnJvd3NlclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkZXNjcmliZShcIi5icm93c2VyaWZ5XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpdChcInNob3VsZCBydW4gdGhyb3VnaCBzbW9vdGhseVwiLCBmdW5jdGlvbiAoZG9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQoMzAwMDApO1xyXG4gICAgICAgICAgICBsZXQgc3RyZWFtID0gcGx1Z2lucy5ndWxwLnNyYygnLi90ZXN0L3Rlc3RCcm93c2VyaWZ5Tm9ybWFsLmpzJylcclxuICAgICAgICAgICAgICAgIC5waXBlKHBsdWdpbnMuZ3VscEJyb3dzZXIuYnJvd3NlcmlmeSgpKVxyXG4gICAgICAgICAgICAgICAgLnBpcGUocGx1Z2lucy5ndWxwLmRlc3QoXCIuL3Rlc3QvcmVzdWx0L1wiKSlcclxuICAgICAgICAgICAgICAgIC5waXBlKHBsdWdpbnMuZ3VscEZ1bmN0aW9uKGRvbmUpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBpdChcInNob3VsZCB0aHJvdyBhbiBlcnJvciwgd2hlbiBhIG1vZHVsZSBpcyBub3QgZm91bmRcIiwgZnVuY3Rpb24gKGRvbmUpIHtcclxuICAgICAgICAgICAgbGV0IGQgPSByZXF1aXJlKCdkb21haW4nKS5jcmVhdGUoKTtcclxuICAgICAgICAgICAgbGV0IGRvbmVDYWxsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBkLm9uKFwiZXJyb3JcIixmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgaWYoIWRvbmVDYWxsZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lQ2FsbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICBkLnJ1bihmdW5jdGlvbigpIHsgXHJcbiAgICAgICAgICAgICAgICBsZXQgc3RyZWFtID0gcGx1Z2lucy5ndWxwLnNyYyhcIi4vdGVzdC90ZXN0QnJvd3NlcmlmeUVycm9yLmpzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnBpcGUocGx1Z2lucy5ndWxwQnJvd3Nlci5icm93c2VyaWZ5KCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBpdChcInNob3VsZCBydW4gdGhyb3VnaCB3aXRoIGFuIGVtcHR5IGZpbGVcIiwgZnVuY3Rpb24gKGRvbmUpIHtcclxuICAgICAgICAgICAgbGV0IHN0cmVhbSA9IHBsdWdpbnMuZ3VscC5zcmMoJy4vdGVzdC90ZXN0QnJvd3NlcmlmeUVtcHR5LmpzJylcclxuICAgICAgICAgICAgICAgIC5waXBlKHBsdWdpbnMuZ3VscEJyb3dzZXIuYnJvd3NlcmlmeSgpKVxyXG4gICAgICAgICAgICAgICAgLnBpcGUocGx1Z2lucy5ndWxwLmRlc3QoXCIuL3Rlc3QvcmVzdWx0L1wiKSlcclxuICAgICAgICAgICAgICAgIC5waXBlKHBsdWdpbnMuZ3VscEZ1bmN0aW9uKGRvbmUpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpdChcInNob3VsZCBydW4gdGhyb3VnaCB3b3JrIHdpdGggdHJhbnNmb3Jtc1wiLCBmdW5jdGlvbiAoZG9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQoMzAwMDApO1xyXG4gICAgICAgICAgICBsZXQgdHJhbnNmb3JtcyA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwiYmFiZWxpZnlcIixcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7cHJlc2V0czogW1wiZXMyMDE1XCJdfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBsZXQgc3RyZWFtID0gcGx1Z2lucy5ndWxwLnNyYygnLi90ZXN0L3Rlc3RCcm93c2VyaWZ5Tm9ybWFsLmpzJylcclxuICAgICAgICAgICAgICAgIC5waXBlKHBsdWdpbnMuZ3VscEJyb3dzZXIuYnJvd3NlcmlmeSh0cmFuc2Zvcm1zKSlcclxuICAgICAgICAgICAgICAgIC5waXBlKHBsdWdpbnMuZ3VscC5kZXN0KFwiLi90ZXN0L3Jlc3VsdC9cIikpXHJcbiAgICAgICAgICAgICAgICAucGlwZShwbHVnaW5zLmd1bHBGdW5jdGlvbihkb25lKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdfQ==
