module GulpBrowserBrowserify {
    export function init() {
        return function() {
            //this is the trough object that gets returned by gulpBrowser.browserify();
            return through.obj((file, enc, cb) => {
                var content = file.content;
                var basedir = file.base;




                //run callback function to signal end of plugin process.
                return cb(null, file);
            });
        };
    }
}