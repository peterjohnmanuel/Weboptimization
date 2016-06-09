var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-html-minifier'),
    minifyCSS = require('gulp-clean-css'),
    del = require('del'),
    livereload = require('gulp-livereload');

// Delete dist Folder
gulp.task('delete-dist', function(){
    return del(['dist']);
})

// Minify Javascript
gulp.task('minify-js', function () {
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
    .pipe(livereload()),
    gulp.src('views/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/views/js/'))
    .pipe(livereload());
});

// Minify HTML
gulp.task('minify-html', function () {
    gulp.src('./*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'))
    .pipe(livereload()),
    gulp.src('views/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist/views/'))
    .pipe(livereload());
});

// Minify CSS
gulp.task('minify-css', function() {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css/'))
        .pipe(livereload());
});

// Watch
gulp.task('watch',function() {

    var server = livereload;

    gulp.watch(['js/*.js', 'views/js/*.js'], ['minify-js']);
    gulp.watch(['css/*.css', 'views/css/*.css'], ['minify-css']);
    gulp.watch(['./*.html', 'views/*.html'], ['minify-html']);
    
})

gulp.task('default', ['delete-dist','minify-js', 'minify-html', 'minify-css', 'watch']);