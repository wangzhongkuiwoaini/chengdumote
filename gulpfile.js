var gulp = require('gulp');
var minifyHtml = require("gulp-minify-html");
var minifycss = require("gulp-clean-css");
var minifyjs = require("gulp-uglify");
var concat = require("gulp-concat");
gulp.task('htmltask',function(){
	gulp.src('*.html')
	.pipe(minifyHtml())
	.pipe(gulp.dest('dist'))
})


gulp.task('csstask',function(){
	gulp.src('./css/*.css')
	.pipe(minifycss())
	.pipe(gulp.dest('dist/css'))
})

gulp.task('jstask',function(){
	gulp.src('./js/*.js')
	.pipe(minifyjs())
	.pipe(concat('all.js'))
	.pipe(gulp.dest('dist/js'))
})