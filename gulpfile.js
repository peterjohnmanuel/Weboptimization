var gulp = require('gulp'),
uglify = require('gulp-uglify');

gulp.task('minify-js', function(){
   gulp.src('js/*.js')
   .pipe(uglify())
   .pipe(gulp.dest('dist/js/'));
});



gulp.task('default', ['minify-js']);