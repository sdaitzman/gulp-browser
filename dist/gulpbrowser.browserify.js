"use strict";
/// <reference path="./typings/main.d.ts" />
var plugins = require("./gulpbrowser.plugins");
var browserify = function (transforms) {
    if (transforms === void 0) { transforms = []; }
    if (!Array.isArray(transforms)) {
        transforms = [transforms];
    }
    var forEach = function (file, enc, cb) {
        var bundleCallback = function (err, bufferedContent) {
            if (Buffer.isBuffer(bufferedContent)) {
                file.contents = bufferedContent;
            }
            else {
                plugins.beautylog.error("gulp-browser: .browserify() " + err.message);
                cb(new Error(err.message), file);
                return;
            }
            cb(null, file);
        };
        if (file.contents.length > 0) {
            var browserified_1 = plugins.browserify(file, { basedir: file.base });
            transforms.forEach(function (transform) {
                if (typeof transform === 'function') {
                    browserified_1.transform(transform);
                }
                else {
                    browserified_1.transform(transform.transform, transform.options);
                }
            });
            browserified_1.bundle(bundleCallback);
        }
        else {
            plugins.beautylog.warn("gulp-browser: .browserify() file.contents appears to be empty");
            cb(null, file);
        }
        ;
    };
    var atEnd = function (cb) {
        cb();
    }; // no need to clean up after ourselves
    return plugins.through.obj(forEach, atEnd); // this is the through object that gets returned by gulpBrowser.browserify();
};
module.exports = browserify;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1bHBicm93c2VyLmJyb3dzZXJpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRDQUE0QztBQUM1QyxJQUFPLE9BQU8sV0FBVyx1QkFBdUIsQ0FBQyxDQUFDO0FBR2xELElBQUksVUFBVSxHQUFJLFVBQVMsVUFBZTtJQUFmLDBCQUFlLEdBQWYsZUFBZTtJQUV0QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLFVBQVUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLE9BQU8sR0FBRyxVQUFTLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUVoQyxJQUFJLGNBQWMsR0FBRyxVQUFTLEdBQUcsRUFBRSxlQUFlO1lBQzlDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQztZQUNwQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsOEJBQThCLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN0RSxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQyxNQUFNLENBQUM7WUFDWCxDQUFDO1lBQ0QsRUFBRSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUM7UUFFRixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3pCLElBQUksY0FBWSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRXBFLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTO2dCQUNsQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFNBQVMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxjQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLGNBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25FLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVILGNBQVksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsK0RBQStELENBQUMsQ0FBQztZQUN4RixFQUFFLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLENBQUM7UUFBQSxDQUFDO0lBQ04sQ0FBQyxDQUFBO0lBRUQsSUFBSSxLQUFLLEdBQUcsVUFBUyxFQUFFO1FBQ25CLEVBQUUsRUFBRSxDQUFDO0lBQ1QsQ0FBQyxDQUFBLENBQUMsc0NBQXNDO0lBRXhDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyw2RUFBNkU7QUFDM0gsQ0FBQyxDQUFDO0FBRUgsaUJBQVMsVUFBVSxDQUFDIiwiZmlsZSI6Imd1bHBicm93c2VyLmJyb3dzZXJpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL21haW4uZC50c1wiIC8+XHJcbmltcG9ydCBwbHVnaW5zID0gcmVxdWlyZShcIi4vZ3VscGJyb3dzZXIucGx1Z2luc1wiKTtcclxuXHJcblxyXG5sZXQgYnJvd3NlcmlmeSA9ICBmdW5jdGlvbih0cmFuc2Zvcm1zID0gW10pIHtcclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodHJhbnNmb3JtcykpIHtcclxuICAgICAgICB0cmFuc2Zvcm1zID0gW3RyYW5zZm9ybXNdO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmb3JFYWNoID0gZnVuY3Rpb24oZmlsZSwgZW5jLCBjYil7IC8vIGRvIHRoaXMgd2l0aCBldmVyeSBjaHVuayAoZmlsZSBpbiBndWxwIHRlcm1zKVxyXG5cclxuICAgICAgICBsZXQgYnVuZGxlQ2FsbGJhY2sgPSBmdW5jdGlvbihlcnIsIGJ1ZmZlcmVkQ29udGVudCkgeyAvLyBvdXIgYnVuZGxlIGNhbGxiYWNrIGZvciB3aGVuIGJyb3dzZXJpZnkgaXMgZmluaXNoZWRcclxuICAgICAgICAgICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihidWZmZXJlZENvbnRlbnQpKXtcclxuICAgICAgICAgICAgICAgIGZpbGUuY29udGVudHMgPSBidWZmZXJlZENvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5zLmJlYXV0eWxvZy5lcnJvcihcImd1bHAtYnJvd3NlcjogLmJyb3dzZXJpZnkoKSBcIiArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGNiKG5ldyBFcnJvcihlcnIubWVzc2FnZSksZmlsZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2IobnVsbCxmaWxlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZihmaWxlLmNvbnRlbnRzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBsZXQgYnJvd3NlcmlmaWVkID0gcGx1Z2lucy5icm93c2VyaWZ5KGZpbGUsIHsgYmFzZWRpcjogZmlsZS5iYXNlIH0pO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNmb3Jtcy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdHJhbnNmb3JtID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJvd3NlcmlmaWVkLnRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBicm93c2VyaWZpZWQudHJhbnNmb3JtKHRyYW5zZm9ybS50cmFuc2Zvcm0sIHRyYW5zZm9ybS5vcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBicm93c2VyaWZpZWQuYnVuZGxlKGJ1bmRsZUNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwbHVnaW5zLmJlYXV0eWxvZy53YXJuKFwiZ3VscC1icm93c2VyOiAuYnJvd3NlcmlmeSgpIGZpbGUuY29udGVudHMgYXBwZWFycyB0byBiZSBlbXB0eVwiKTtcclxuICAgICAgICAgICAgY2IobnVsbCxmaWxlKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBhdEVuZCA9IGZ1bmN0aW9uKGNiKXtcclxuICAgICAgICBjYigpO1xyXG4gICAgfSAvLyBubyBuZWVkIHRvIGNsZWFuIHVwIGFmdGVyIG91cnNlbHZlc1xyXG5cclxuICAgIHJldHVybiBwbHVnaW5zLnRocm91Z2gub2JqKGZvckVhY2gsYXRFbmQpOyAvLyB0aGlzIGlzIHRoZSB0aHJvdWdoIG9iamVjdCB0aGF0IGdldHMgcmV0dXJuZWQgYnkgZ3VscEJyb3dzZXIuYnJvd3NlcmlmeSgpO1xyXG4gfTtcclxuXHJcbmV4cG9ydCA9IGJyb3dzZXJpZnk7XHJcbiJdfQ==
