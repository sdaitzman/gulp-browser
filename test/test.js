/// <reference path="../ts/typings/main.d.ts" />
var plugins = {
    beautylog: require("beautylog"),
    gulp: require("gulp"),
    gulpBrowser: require("../dist/index.js"),
    gulpFunction: require("gulp-function")
};
describe("gulpBrowser", function () {
    describe(".browserify", function () {
        it("should run through smoothly", function (done) {
            this.timeout(30000);
            plugins.gulp.task('gulpBrowserNormal', function (cb) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELElBQUksT0FBTyxHQUFHO0lBQ1YsU0FBUyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDL0IsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDckIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztJQUN4QyxZQUFZLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztDQUN6QyxDQUFDO0FBRUYsUUFBUSxDQUFDLGFBQWEsRUFBQztJQUNuQixRQUFRLENBQUMsYUFBYSxFQUFDO1FBQ25CLEVBQUUsQ0FBQyw2QkFBNkIsRUFBQyxVQUFTLElBQUk7WUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBQyxVQUFTLEVBQUU7Z0JBQzdDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDO3FCQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztxQkFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7cUJBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90cy90eXBpbmdzL21haW4uZC50c1wiIC8+XG52YXIgcGx1Z2lucyA9IHtcbiAgICBiZWF1dHlsb2c6IHJlcXVpcmUoXCJiZWF1dHlsb2dcIiksXG4gICAgZ3VscDogcmVxdWlyZShcImd1bHBcIiksXG4gICAgZ3VscEJyb3dzZXI6IHJlcXVpcmUoXCIuLi9kaXN0L2luZGV4LmpzXCIpLFxuICAgIGd1bHBGdW5jdGlvbjogcmVxdWlyZShcImd1bHAtZnVuY3Rpb25cIilcbn07XG5cbmRlc2NyaWJlKFwiZ3VscEJyb3dzZXJcIixmdW5jdGlvbigpe1xuICAgIGRlc2NyaWJlKFwiLmJyb3dzZXJpZnlcIixmdW5jdGlvbigpe1xuICAgICAgICBpdChcInNob3VsZCBydW4gdGhyb3VnaCBzbW9vdGhseVwiLGZ1bmN0aW9uKGRvbmUpe1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0KDMwMDAwKTtcbiAgICAgICAgICAgIHBsdWdpbnMuZ3VscC50YXNrKCdndWxwQnJvd3Nlck5vcm1hbCcsZnVuY3Rpb24oY2IpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RyZWFtID0gcGx1Z2lucy5ndWxwLnNyYygnLi90ZXN0L2Jyb3dzZXJpZnlHdWxwVGVzdC5qcycpXG4gICAgICAgICAgICAgICAgICAgIC5waXBlKHBsdWdpbnMuZ3VscEJyb3dzZXIuYnJvd3NlcmlmeSgpKVxuICAgICAgICAgICAgICAgICAgICAucGlwZShwbHVnaW5zLmd1bHAuZGVzdChcIi4vdGVzdC9yZXN1bHQvXCIpKVxuICAgICAgICAgICAgICAgICAgICAucGlwZShwbHVnaW5zLmd1bHBGdW5jdGlvbihkb25lKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcGx1Z2lucy5ndWxwLnN0YXJ0LmFwcGx5KHBsdWdpbnMuZ3VscCwgWydndWxwQnJvd3Nlck5vcm1hbCddKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
