const gulp = require('gulp'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewDist', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });
});

gulp.task('deleteDistFolder', () => del("./docs"));

gulp.task('copyGeneralFiles', gulp.series('deleteDistFolder', () => {
  var pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ]

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./docs"));
}));

gulp.task('usemin', () => {
  return gulp.src("./app/index.html")
    .pipe(usemin({
      css: [() => rev(), () => cssnano()],
      js: [() => rev(), () => uglify()]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task('build', gulp.series('deleteDistFolder', gulp.parallel('styles', 'scripts'), gulp.series('usemin')));
