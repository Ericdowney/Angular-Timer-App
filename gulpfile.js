var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat');

gulp.task('javascript', function () {
	return gulp.src('app/**/*.js')
		.pipe( concat("Main.js") )
		.pipe( gulp.dest("distribution") );
});

gulp.task('styles', function () {
	return gulp.src('sass/**/*.sass')
		.pipe( concat("Styles.sass") )
		.pipe( sass() )
		.pipe( gulp.dest("distribution") );
});

gulp.task("watch", function () {
	gulp.watch('app/**/*.js', ["javascript"]);
	gulp.watch('sass/**/*.sass', ["styles"]);
});

gulp.task("default", ["javascript", "styles"], function () {});