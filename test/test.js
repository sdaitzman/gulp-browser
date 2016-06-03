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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELElBQUksT0FBTyxHQUFHO0lBQ1YsU0FBUyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDL0IsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDckIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztJQUN4QyxZQUFZLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztDQUN6QyxDQUFDO0FBQ0YsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRy9CLFFBQVEsQ0FBQyxhQUFhLEVBQUU7SUFDcEIsUUFBUSxDQUFDLGFBQWEsRUFBRTtRQUNwQixFQUFFLENBQUMsNkJBQTZCLEVBQUUsVUFBVSxJQUFJO1lBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUM7aUJBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxtREFBbUQsRUFBRSxVQUFVLElBQUk7WUFDbEUsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ25DLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQTtZQUN0QixDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxVQUFTLEtBQUs7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUMxQixFQUFFLENBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7b0JBQ1osSUFBSSxFQUFFLENBQUM7b0JBQ1AsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdEIsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDRixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQztxQkFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLHVDQUF1QyxFQUFFLFVBQVUsSUFBSTtZQUN0RCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQztpQkFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7aUJBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3RzL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cclxubGV0IHBsdWdpbnMgPSB7XHJcbiAgICBiZWF1dHlsb2c6IHJlcXVpcmUoXCJiZWF1dHlsb2dcIiksXHJcbiAgICBndWxwOiByZXF1aXJlKFwiZ3VscFwiKSxcclxuICAgIGd1bHBCcm93c2VyOiByZXF1aXJlKFwiLi4vZGlzdC9pbmRleC5qc1wiKSxcclxuICAgIGd1bHBGdW5jdGlvbjogcmVxdWlyZShcImd1bHAtZnVuY3Rpb25cIilcclxufTtcclxubGV0IHNob3VsZCA9IHJlcXVpcmUoXCJzaG91bGRcIik7XHJcblxyXG5cclxuZGVzY3JpYmUoXCJndWxwQnJvd3NlclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkZXNjcmliZShcIi5icm93c2VyaWZ5XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpdChcInNob3VsZCBydW4gdGhyb3VnaCBzbW9vdGhseVwiLCBmdW5jdGlvbiAoZG9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQoMzAwMDApO1xyXG4gICAgICAgICAgICBsZXQgc3RyZWFtID0gcGx1Z2lucy5ndWxwLnNyYygnLi90ZXN0L3Rlc3RCcm93c2VyaWZ5Tm9ybWFsLmpzJylcclxuICAgICAgICAgICAgICAgIC5waXBlKHBsdWdpbnMuZ3VscEJyb3dzZXIuYnJvd3NlcmlmeSgpKVxyXG4gICAgICAgICAgICAgICAgLnBpcGUocGx1Z2lucy5ndWxwLmRlc3QoXCIuL3Rlc3QvcmVzdWx0L1wiKSlcclxuICAgICAgICAgICAgICAgIC5waXBlKHBsdWdpbnMuZ3VscEZ1bmN0aW9uKGRvbmUpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBpdChcInNob3VsZCB0aHJvdyBhbiBlcnJvciwgd2hlbiBhIG1vZHVsZSBpcyBub3QgZm91bmRcIiwgZnVuY3Rpb24gKGRvbmUpIHtcclxuICAgICAgICAgICAgbGV0IGQgPSByZXF1aXJlKCdkb21haW4nKS5jcmVhdGUoKTtcclxuICAgICAgICAgICAgbGV0IGRvbmVDYWxsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBkLm9uKFwiZXJyb3JcIixmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgaWYoIWRvbmVDYWxsZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lQ2FsbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICBkLnJ1bihmdW5jdGlvbigpIHsgXHJcbiAgICAgICAgICAgICAgICBsZXQgc3RyZWFtID0gcGx1Z2lucy5ndWxwLnNyYyhcIi4vdGVzdC90ZXN0QnJvd3NlcmlmeUVycm9yLmpzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnBpcGUocGx1Z2lucy5ndWxwQnJvd3Nlci5icm93c2VyaWZ5KCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBpdChcInNob3VsZCBydW4gdGhyb3VnaCB3aXRoIGFuIGVtcHR5IGZpbGVcIiwgZnVuY3Rpb24gKGRvbmUpIHtcclxuICAgICAgICAgICAgbGV0IHN0cmVhbSA9IHBsdWdpbnMuZ3VscC5zcmMoJy4vdGVzdC90ZXN0QnJvd3NlcmlmeUVtcHR5LmpzJylcclxuICAgICAgICAgICAgICAgIC5waXBlKHBsdWdpbnMuZ3VscEJyb3dzZXIuYnJvd3NlcmlmeSgpKVxyXG4gICAgICAgICAgICAgICAgLnBpcGUocGx1Z2lucy5ndWxwLmRlc3QoXCIuL3Rlc3QvcmVzdWx0L1wiKSlcclxuICAgICAgICAgICAgICAgIC5waXBlKHBsdWdpbnMuZ3VscEZ1bmN0aW9uKGRvbmUpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuIl19
