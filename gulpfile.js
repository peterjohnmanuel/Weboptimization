var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-html-minifier'),
    minifyCSS = require('gulp-clean-css');

// Minify Javascript
gulp.task('minify-js', function () {
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/')),
    gulp.src('views/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/views/js/'))
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

// Minify CSS
gulp.task('css-minify', function() {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('default', ['minify-js', 'minify-html', 'css-minify']);