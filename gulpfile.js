var gulp = require('gulp');
var path = require('path');
var $ = require('gulp-load-plugins')();
var del = require('del');
var concatCss = require('gulp-concat-css');
var gulpCopy = require('gulp-copy');

var webpackConfig = require('./webpack.config.js').getConfig();

var port = $.util.env.port || 5000;
var app = 'src/';
var dist = 'dist/';

// https://github.com/ai/autoprefixer
var autoprefixerBrowsers = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 6',
  'opera >= 23',
  'ios >= 6',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('scripts', function() {
  return gulp.src(webpackConfig.entry)
    .pipe($.webpack(webpackConfig))
    .pipe($.uglifyjs())
    .pipe(gulp.dest(dist))
    .pipe($.size({ title : 'js' }))
    .pipe($.connect.reload());
});

gulp.task('lint', function () {
  return gulp.src(['./src/scripts/**/*.jsx'])
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failOnError());
});


// copy html from app to dist
gulp.task('html', function() {
  return gulp.src(app + 'index.html')
    .pipe(gulp.dest(dist))
    .pipe($.size({ title : 'html' }))
    .pipe($.connect.reload());
});


gulp.task('styles',function(cb) {
  return gulp.src(app + 'stylus/react-tip.styl')
    .pipe($.stylus({
      compress: true,
      'include css' : true
    }))
    .pipe($.autoprefixer({browsers: autoprefixerBrowsers}))
    .pipe(gulp.dest(dist))
    .pipe($.size({ title : 'css' }))
    .pipe($.connect.reload());

});

// start server with livereload
gulp.task('serve', function() {
  $.connect.server({
    root: dist,
    port: port,
    livereload: {
      port: 35729
    },
    fallback: dist + 'index.html'
  });
});


// watch styl, html and js file changes
gulp.task('watch', function() {
  gulp.watch(app + 'stylus/**/*.styl', ['styles']);
  gulp.watch(app + 'index.html', ['html']);
  gulp.watch(app + 'scripts/**/*.js', ['scripts', 'lint']);
  gulp.watch(app + 'scripts/**/*.jsx', ['scripts', 'lint']);
});

// remove bundels
gulp.task('clean', function(cb) {
  del([dist], cb);
});

// by default build project and then watch files in order to trigger livereload
gulp.task('default', ['build', 'serve', 'watch']);

// waits until clean is finished then builds the project
gulp.task('build', ['clean'], function(){
  gulp.start(['html', 'lint', 'scripts','styles']);
});
