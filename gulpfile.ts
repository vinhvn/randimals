/**
 * gulpfile.ts
 */
import gulp from 'gulp';

// minify
import minify from 'gulp-minify';
import compile from 'gulp-typescript';

// build and minify js
gulp.task('build', () => {
  return gulp
    .src('./lib/index.ts')
    .pipe(compile())
    .pipe(minify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.series('build'));
