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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELElBQUksT0FBTyxHQUFHO0lBQ1YsU0FBUyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDL0IsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDckIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztJQUN4QyxZQUFZLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztDQUN6QyxDQUFDO0FBQ0YsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRy9CLFFBQVEsQ0FBQyxhQUFhLEVBQUU7SUFDcEIsUUFBUSxDQUFDLGFBQWEsRUFBRTtRQUNwQixFQUFFLENBQUMsNkJBQTZCLEVBQUUsVUFBVSxJQUFJO1lBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUM7aUJBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxtREFBbUQsRUFBRSxVQUFVLElBQUk7WUFDbEUsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ25DLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQTtZQUN0QixDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxVQUFTLEtBQUs7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUMxQixFQUFFLENBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7b0JBQ1osSUFBSSxFQUFFLENBQUM7b0JBQ1AsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdEIsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDRixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQztxQkFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLHVDQUF1QyxFQUFFLFVBQVUsSUFBSTtZQUN0RCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQztpQkFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7aUJBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3RzL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbmxldCBwbHVnaW5zID0ge1xuICAgIGJlYXV0eWxvZzogcmVxdWlyZShcImJlYXV0eWxvZ1wiKSxcbiAgICBndWxwOiByZXF1aXJlKFwiZ3VscFwiKSxcbiAgICBndWxwQnJvd3NlcjogcmVxdWlyZShcIi4uL2Rpc3QvaW5kZXguanNcIiksXG4gICAgZ3VscEZ1bmN0aW9uOiByZXF1aXJlKFwiZ3VscC1mdW5jdGlvblwiKVxufTtcbmxldCBzaG91bGQgPSByZXF1aXJlKFwic2hvdWxkXCIpO1xuXG5cbmRlc2NyaWJlKFwiZ3VscEJyb3dzZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRlc2NyaWJlKFwiLmJyb3dzZXJpZnlcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpdChcInNob3VsZCBydW4gdGhyb3VnaCBzbW9vdGhseVwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0KDMwMDAwKTtcbiAgICAgICAgICAgIGxldCBzdHJlYW0gPSBwbHVnaW5zLmd1bHAuc3JjKCcuL3Rlc3QvdGVzdEJyb3dzZXJpZnlOb3JtYWwuanMnKVxuICAgICAgICAgICAgICAgIC5waXBlKHBsdWdpbnMuZ3VscEJyb3dzZXIuYnJvd3NlcmlmeSgpKVxuICAgICAgICAgICAgICAgIC5waXBlKHBsdWdpbnMuZ3VscC5kZXN0KFwiLi90ZXN0L3Jlc3VsdC9cIikpXG4gICAgICAgICAgICAgICAgLnBpcGUocGx1Z2lucy5ndWxwRnVuY3Rpb24oZG9uZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGl0KFwic2hvdWxkIHRocm93IGFuIGVycm9yLCB3aGVuIGEgbW9kdWxlIGlzIG5vdCBmb3VuZFwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICAgICAgbGV0IGQgPSByZXF1aXJlKCdkb21haW4nKS5jcmVhdGUoKTtcbiAgICAgICAgICAgIGxldCBkb25lQ2FsbGVkID0gZmFsc2VcbiAgICAgICAgICAgIGQub24oXCJlcnJvclwiLGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxuICAgICAgICAgICAgICAgIGlmKCFkb25lQ2FsbGVkKXtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICBkb25lQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICBkLnJ1bihmdW5jdGlvbigpIHsgXG4gICAgICAgICAgICAgICAgbGV0IHN0cmVhbSA9IHBsdWdpbnMuZ3VscC5zcmMoXCIuL3Rlc3QvdGVzdEJyb3dzZXJpZnlFcnJvci5qc1wiKVxuICAgICAgICAgICAgICAgICAgICAucGlwZShwbHVnaW5zLmd1bHBCcm93c2VyLmJyb3dzZXJpZnkoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBpdChcInNob3VsZCBydW4gdGhyb3VnaCB3aXRoIGFuIGVtcHR5IGZpbGVcIiwgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICAgICAgICAgIGxldCBzdHJlYW0gPSBwbHVnaW5zLmd1bHAuc3JjKCcuL3Rlc3QvdGVzdEJyb3dzZXJpZnlFbXB0eS5qcycpXG4gICAgICAgICAgICAgICAgLnBpcGUocGx1Z2lucy5ndWxwQnJvd3Nlci5icm93c2VyaWZ5KCkpXG4gICAgICAgICAgICAgICAgLnBpcGUocGx1Z2lucy5ndWxwLmRlc3QoXCIuL3Rlc3QvcmVzdWx0L1wiKSlcbiAgICAgICAgICAgICAgICAucGlwZShwbHVnaW5zLmd1bHBGdW5jdGlvbihkb25lKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXX0=
