const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function compilaSass() {
    return gulp.src('./source/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles'));
}

function comprimeJS() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify)
    .pipe(gulp.dest('./build/scripts'));
}