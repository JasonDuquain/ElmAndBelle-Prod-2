
var gulp = require('gulp');
var sass = require('gulp-sass'); 
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var minify = require('gulp-clean-css');
var rename = require('gulp-rename');
 

gulp.task('styles', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'

    }).on('error', sass.logError))
        .pipe(autoprefixer({
                browsers: ['last 2 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', ['styles'], function () {
    gulp.watch('scss/**/*.scss', ['styles']);
});


gulp.task('postcss', function() {
    return gulp.src('css/*.css')
    .pipe(minify())
	.pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css'))
});


gulp.task('default', ['watch']);








