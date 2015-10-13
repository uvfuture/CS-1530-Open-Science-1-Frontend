'use strict';

var gulp = require('gulp'),
    path = require('path'),
    sass = require('gulp-sass'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    mithrilify = require('mithrilify'),
    babelify = require('babelify'),
    envify = require('envify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    minifyHTML = require('gulp-minify-html'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify');
var paths = {
    pub_source : path.join(__dirname, 'src/'),
    pub_dist : path.join(__dirname, 'src/', 'dist/'),
    prod_dist : path.join(__dirname, 'dist/'),
    views: 'views/',
    style: 'style/',
    js: 'js/',
    content: 'content/'
};
//dev
gulp.task('sass:dev', function () {
    gulp.src(paths.pub_source + paths.style + 'main.scss')
        .pipe(sass().on('error', gutil.log))
        .pipe(gulp.dest(paths.pub_dist + paths.style));
});
gulp.task('html:dev', function() {
    gulp.src(paths.pub_source + paths.views + 'index.html')
        .pipe(gulp.dest(paths.pub_dist + paths.views));
});
gulp.task('js:dev', function () {
    browserify({
        entries: paths.pub_source + paths.js + 'app.js',
        transform: [mithrilify, babelify, [envify, { ENV: 'DEV'}]]
    })
        .bundle().on('error', gutil.log)
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulp.dest(paths.pub_dist + paths.js));
});
gulp.task('content:dev', function(){
    gulp.src(paths.pub_source + paths.content + '**/*')
        .pipe(gulp.dest(paths.pub_dist + paths.content))
});
gulp.task('compile:dev', ['sass:dev', 'html:dev', 'js:dev', 'content:dev']);
//test
gulp.task('test', function() {
    return require('./test/main');
});
//prod
gulp.task('sass:prod', function () {
    gulp.src(paths.pub_dist + paths.style + '*.css')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest(paths.prod_dist + paths.style));
});
gulp.task('html:prod', function() {
    gulp.src(paths.pub_dist + paths.views + '*.html')
        .pipe(minifyHTML({empty: true, spare: true}))
        .pipe(gulp.dest(paths.prod_dist + paths.views));
});
gulp.task('js:prod', function () {
    browserify({
        entries: paths.pub_source + paths.js + 'app.js',
        transform: [mithrilify, babelify, [envify, { ENV: 'PROD'}]]
    })
        .bundle().on('error', gutil.log)
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(paths.prod_dist + paths.js));
});
gulp.task('content:prod', function(){
    gulp.src(paths.pub_dist + paths.content + '**/*')
        .pipe(gulp.dest(paths.prod_dist + paths.content))
});
gulp.task('compile:prod', ['sass:prod', 'html:prod', 'js:prod', 'content:prod']);
//default: dev
gulp.task('default', ['compile:dev']);
