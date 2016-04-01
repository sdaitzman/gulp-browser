"use strict";
/// <reference path="./typings/main.d.ts" />
var plugins = require("./gulpbrowser.plugins");
var browserify = function () {
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
            plugins.browserify(file, { basedir: file.base })
                .bundle(bundleCallback);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1bHBicm93c2VyLmJyb3dzZXJpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRDQUE0QztBQUM1QyxJQUFPLE9BQU8sV0FBVyx1QkFBdUIsQ0FBQyxDQUFDO0FBR2xELElBQUksVUFBVSxHQUFJO0lBRWQsSUFBSSxPQUFPLEdBQUcsVUFBUyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFFaEMsSUFBSSxjQUFjLEdBQUcsVUFBUyxHQUFHLEVBQUUsZUFBZTtZQUM5QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7WUFDcEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLDhCQUE4QixHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdEUsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELEVBQUUsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDO1FBRUYsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN6QixPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQzNDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQywrREFBK0QsQ0FBQyxDQUFDO1lBQ3hGLEVBQUUsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQztRQUFBLENBQUM7SUFDTixDQUFDLENBQUE7SUFFRCxJQUFJLEtBQUssR0FBRyxVQUFTLEVBQUU7UUFDbkIsRUFBRSxFQUFFLENBQUM7SUFDVCxDQUFDLENBQUEsQ0FBQyxzQ0FBc0M7SUFFeEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDZFQUE2RTtBQUMzSCxDQUFDLENBQUM7QUFFSCxpQkFBUyxVQUFVLENBQUMiLCJmaWxlIjoiZ3VscGJyb3dzZXIuYnJvd3NlcmlmeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbmltcG9ydCBwbHVnaW5zID0gcmVxdWlyZShcIi4vZ3VscGJyb3dzZXIucGx1Z2luc1wiKTtcblxuXG5sZXQgYnJvd3NlcmlmeSA9ICBmdW5jdGlvbigpIHtcbiAgICBcbiAgICBsZXQgZm9yRWFjaCA9IGZ1bmN0aW9uKGZpbGUsIGVuYywgY2IpeyAvLyBkbyB0aGlzIHdpdGggZXZlcnkgY2h1bmsgKGZpbGUgaW4gZ3VscCB0ZXJtcylcbiAgICAgICAgICAgXG4gICAgICAgIGxldCBidW5kbGVDYWxsYmFjayA9IGZ1bmN0aW9uKGVyciwgYnVmZmVyZWRDb250ZW50KSB7IC8vIG91ciBidW5kbGUgY2FsbGJhY2sgZm9yIHdoZW4gYnJvd3NlcmlmeSBpcyBmaW5pc2hlZFxuICAgICAgICAgICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihidWZmZXJlZENvbnRlbnQpKXtcbiAgICAgICAgICAgICAgICBmaWxlLmNvbnRlbnRzID0gYnVmZmVyZWRDb250ZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwbHVnaW5zLmJlYXV0eWxvZy5lcnJvcihcImd1bHAtYnJvd3NlcjogLmJyb3dzZXJpZnkoKSBcIiArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBjYihuZXcgRXJyb3IoZXJyLm1lc3NhZ2UpLGZpbGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNiKG51bGwsZmlsZSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBpZihmaWxlLmNvbnRlbnRzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgcGx1Z2lucy5icm93c2VyaWZ5KGZpbGUsIHsgYmFzZWRpcjogZmlsZS5iYXNlIH0pXG4gICAgICAgICAgICAgICAgLmJ1bmRsZShidW5kbGVDYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwbHVnaW5zLmJlYXV0eWxvZy53YXJuKFwiZ3VscC1icm93c2VyOiAuYnJvd3NlcmlmeSgpIGZpbGUuY29udGVudHMgYXBwZWFycyB0byBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgIGNiKG51bGwsZmlsZSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgICAgICBcbiAgICBsZXQgYXRFbmQgPSBmdW5jdGlvbihjYil7XG4gICAgICAgIGNiKCk7XG4gICAgfSAvLyBubyBuZWVkIHRvIGNsZWFuIHVwIGFmdGVyIG91cnNlbHZlc1xuICAgIFxuICAgIHJldHVybiBwbHVnaW5zLnRocm91Z2gub2JqKGZvckVhY2gsYXRFbmQpOyAvLyB0aGlzIGlzIHRoZSB0aHJvdWdoIG9iamVjdCB0aGF0IGdldHMgcmV0dXJuZWQgYnkgZ3VscEJyb3dzZXIuYnJvd3NlcmlmeSgpO1xuIH07XG5cbmV4cG9ydCA9IGJyb3dzZXJpZnk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
