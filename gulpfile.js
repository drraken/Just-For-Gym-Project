var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var jade        = require('gulp-jade');
var concat      = require('gulp-concat');

// Static Server + watching scss/html files
gulp.task('serve', ['jade','sass'/*, 'scripts'*/], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("src/scss/*.scss", ['sass']);
    //gulp.watch("src/jade/**/*.jade", ['jade']);
   /* gulp.watch("src/js/*.js", ['scripts']);*/
//    gulp.watch("app/*.html").on('change', browserSync.reload);
});

/* Compile sass into CSS & auto-inject into browsers*/
gulp.task('sass', function() {
    return gulp.src("src/scss/main.scss")
        .pipe(sass({
            outputStyle: 'compressed'}))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

// Compile jade into html files
/*gulp.task('jade', function() {
  return gulp.src("src/jade/*.jade")
    .pipe(jade())
    .pipe(gulp.dest("app/"))
    .pipe(browserSync.stream());
});*/

/*gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')     
    .pipe(concat('index.js'))
    .pipe(gulp.dest('app/js/'))
    .pipe(browserSync.stream());
});*/

gulp.task('default', ['serve']);