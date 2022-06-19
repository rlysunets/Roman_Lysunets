const gulp        = require('gulp');
const browserSync = require('browser-sync').create();


// Static server
// live server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    gulp
        .watch("src/*.html")
        .on('change', browserSync.reload);
});

gulp.task("move-html", function () {
    return gulp
        .src("src/*.html")
        .pipe(gulp.dest("dist/"));
})