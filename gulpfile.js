var gulp = require('gulp'); //підключення gulp
var server = require('gulp-server-livereload'); //підключення плагіна gulp-livereload для запуску сервера
var sass = require('gulp-sass'); //підключення плагіна sass
var autoprefixer = require('gulp-autoprefixer'); //підключення плагіна autoprefixer для css
var useref = require('gulp-useref'); //підключення плагіна useref для склеювання файлів
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-csso');
 
//server
gulp.task('server', function() {
  gulp.src('./app')
    .pipe(server({
        livereload: true,
        open: true
    }));
});

//styles sass
gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browser: ['last 15 versions']
    }))
    .pipe(gulp.dest('app/css'));
});

//авто-компілювання .sass в .css
gulp.task ('watch', function(){
    gulp.watch('app/sass/**/*.sass', ['sass'])
});

//склеювання файлів +мінімізація файлів
gulp.task('build', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('public'));
});

gulp.task('default', ['server', 'watch']);