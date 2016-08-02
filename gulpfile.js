/**
 * Created by menangen on 13.03.15.
 *
 * Run Jade and less compilation to
 * src/jade/*.jade -> dist/
 * src/less/main.less -> dist/css
 */

// Gulp, Jade, Less
var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');

gulp.task('jade', function() {
 
 // jade templates from src/jade folder
 gulp.src('src/jade/*.jade')
 .pipe(jade({pretty: true}))
 .pipe(gulp.dest('dist'));
});


gulp.task('less', function() {

 // less styles from src/less/ folder
 // only one main.less file need compile
 gulp.src('src/less/main.less')
 .pipe(less())
 .pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['less', 'jade']);

gulp.task('watch', ['build'], function() {
  gulp.watch('src/less/main.less', ['less']);
  gulp.watch('src/jade/*.jade', ['jade']);
});

gulp.task('default', function() {
  gulp.start('watch');
});