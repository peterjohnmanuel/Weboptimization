var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-html-minifier'),
    minifyCSS = require('gulp-clean-css'),
    del = require('del'),
    livereload = require('gulp-livereload'),
    imageResizer = require('gulp-image-resize'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    useref = require('gulp-useref');

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
    .pipe(livereload())
});

// Minify CSS
gulp.task('minify-css', function() {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css/'))
        .pipe(livereload());
});

// Resize Images
gulp.task('resize-image', function () {
   gulp.src('views/images/pizzeria.jpg')
   .pipe(imageResizer({
       width : 360,
       height : 270,
       quality : 50,
       crop : true,
       upscale : false,
       progressive : true
   }))
   .pipe(imagemin())
   .pipe(gulp.dest('dist/views/images/')),
   gulp.src('views/images/pizzeria.jpg')
   .pipe(imageResizer({
       width : 115,
       height : 65,
       quality : 20,
       crop : true,
       upscale : false,
       progressive : true
   }))
   .pipe(rename('M-pizzeria.jpg'))
   .pipe(imagemin())
   .pipe(gulp.dest('dist/views/images/')),
      gulp.src('img/mobilewebdev.jpg')
   .pipe(imageResizer({
       width : 602,
       height : 306,
       quality : 80,
       crop : true,
       upscale : false,
       progressive : true
   }))   
   .pipe(imagemin())
   .pipe(gulp.dest('dist/img/'))

});

// Compress Images
gulp.task('minify-image', function () {
  gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img/')), 
    gulp.src('views/images/pizza.png')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/views/images/'))
});

// Concatenate and minify css files and minify pizza html
gulp.task('useref', function() {
    gulp.src('views/*.html')
        .pipe(useref())
        .pipe(minifyCSS())        
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/views'))
        .pipe(livereload());
});


// Watch
gulp.task('watch',function() {

    livereload.listen();

    gulp.watch(['js/*.js', 'views/js/*.js'], ['minify-js']);
    gulp.watch(['css/*.css', 'views/css/*.css'], ['minify-css']);
    //gulp.watch(['./*.html'], ['minify-html']);
    gulp.watch(['views/*.html'], ['useref']);
    
})

gulp.task('default', ['delete-dist','minify-js', 'minify-html', 'minify-css', 'minify-image' , 'resize-image' , 'useref','watch']);