import gulp from 'gulp';
import sass from 'gulp-sass';
import connect from 'gulp-connect';

gulp.task('default', ['connect', 'styles', 'watch']);

gulp.task('styles', () => {
  let source = 'css/[^_]*.scss';
  let dest = 'css';
  let cssMinOpts = {
    keepSpecialComments: 0,
    keepBreaks: false
  };

  let stream = gulp.src(source)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(dest))
    .pipe(connect.reload());

  return stream;
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('watch', () => {
  let source = 'css/*.scss';
  gulp.watch(source, ['styles']);
});
