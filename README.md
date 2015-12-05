# gulp-browser
browserify and other goodies for gulp

### Build Status/Dependencies
[![Build Status](https://travis-ci.org/pushrocks/gulp-browser.svg?branch=master)](https://travis-ci.org/pushrocks/gulp-browser)
[![Dependency Status](https://david-dm.org/pushrocks/gulp-browser.svg)](https://david-dm.org/pushrocks/gulp-browser)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/gulp-browser/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/gulp-browser/master/dependencies/npm)
[![devDependency Status](https://david-dm.org/pushrocks/gulp-browser/dev-status.svg)](https://david-dm.org/pushrocks/gulp-browser#info=devDependencies)
[![bitHound Dev Dependencies](https://www.bithound.io/github/pushrocks/gulp-browser/badges/devDependencies.svg)](https://www.bithound.io/github/pushrocks/gulp-browser/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/gulp-browser/badges/code.svg)](https://www.bithound.io/github/pushrocks/gulp-browser)


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

> **Note:** Be aware of how gulp.src creates values of file.base and file.path since that is important to the require statements.