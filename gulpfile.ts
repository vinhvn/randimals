/**
 * gulpfile.ts
 */
import gulp from 'gulp';
import uglify from 'gulp-uglify';
import tsc from 'gulp-typescript';
import sourcemaps from 'gulp-sourcemaps';
import browserify from 'browserify';
import tsify from 'tsify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

// build and minify library
gulp.task('build:lib', () => {
  return browserify({
    basedir: '.',
    debug: true,
    entries: './lib/index.ts',
    cache: {},
    packageCache: {},
    standalone: 'randimals',
  })
    .plugin(tsify)
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
});

// build and minify cli tool
gulp.task('build:cli', () => {
  return gulp.src('./lib/cli.ts').pipe(tsc()).pipe(gulp.dest('./bin'));
});

// build both library and cli tool
gulp.task('build', gulp.parallel(['build:lib', 'build:cli']));

gulp.task('default', gulp.series('build'));
