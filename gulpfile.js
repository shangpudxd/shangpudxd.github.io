var gulp = require('gulp'),
    uglifycss = require('gulp-uglifycss'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    del = require('del');

gulp.task('uglifycss',['concat'],function(){
    return gulp.src('tmp/index.css')
        .pipe(uglifycss())
        .pipe(rename('index.min.css'))
        .pipe(gulp.dest('dest'));
});
gulp.task('concat',function(){
    return gulp.src('css/*.css')
        .pipe(concat('index.css'))
        .pipe(gulp.dest('tmp'));
});
gulp.task('del',['uglifycss'],function(){
    return del('tmp');
});

gulp.task('default',['concat','uglifycss','del']);