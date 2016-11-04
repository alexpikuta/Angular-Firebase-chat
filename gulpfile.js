var gulp = require('gulp'); //підключення gulp
var server = require('gulp-server-livereload'); //підключення плагіна gulp-livereload для запуску сервера

//server
gulp.task('server', function() {
  gulp.src('./app')
    .pipe(server({
        livereload: true,
        open: true
    }));
});