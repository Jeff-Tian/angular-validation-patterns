var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('uglify-js', function (done) {
    return gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('dist'))
        ;
});

gulp.task('default', ['uglify-js']);