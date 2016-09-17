const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () =>
    gulp.src('./src/sass/**/*.{scss,sass}')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'))
);

gulp.task('watch', ['sass'], function () {
    gulp.watch(['./src/sass/**/*.{scss,sass}'], ['sass']);
});

gulp.task('default', ['sass', 'watch'], function () {

});