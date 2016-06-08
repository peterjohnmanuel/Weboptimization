var gulp = require('gulp'),
uglify = require('gulp-uglify'),
htmlmin = require('gulp-html-minifier');

// Minify Javascript
gulp.task('minify-js', function(){
   gulp.src('js/*.js')
   .pipe(uglify())
   .pipe(gulp.dest('dist/js/'));
});

// Minify HTML
gulp.task('minify-html', function () {
  gulp.src('./*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist')),
     gulp.src('views/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist/views'))
});


gulp.task('default', ['minify-js','minify-html']);