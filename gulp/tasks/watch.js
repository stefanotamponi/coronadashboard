const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', () => browserSync.reload());

  watch('./app/assets/styles/**/*.css', () => gulp.task('cssInject')());

  watch('./app/assets/scripts/**/*.js', () => gulp.task('scriptsRefresh')());

});

gulp.task('cssInject', gulp.series('styles', () => {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
}));

gulp.task('scriptsRefresh', gulp.series('scripts', () => browserSync.reload()));
