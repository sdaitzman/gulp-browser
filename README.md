# gulp-browser
browserify and other goodies for gulp

### Build Status/Dependencies
[![Build Status](https://travis-ci.org/pushrocks/gulp-browser.svg?branch=master)](https://travis-ci.org/pushrocks/gulp-browser)
[![Dependency Status](https://david-dm.org/pushrocks/gulp-browser.svg)](https://david-dm.org/pushrocks/gulp-browser)
[![devDependency Status](https://david-dm.org/pushrocks/gulp-browser/dev-status.svg)](https://david-dm.org/pushrocks/gulp-browser#info=devDependencies)

### Usage
gulp-browser is meant to be easy:

#### Browserify:
```javascript
    var gulp = require("gulp");
    var gulpBrowser = require("gulp-browser");
    
    gulp.task('gulpBrowserTest',function() {
        var stream = gulp.src('./test/*.js')
            .pipe(gulpBrowser.browserify())
            .pipe(gulp.dest("./test/browserifiedJS/"));
        return stream;
    });
```

> **Note:** Be aware of how gulp-src creates values of file.base and file.path since that is important to the require statements.