var gulp = require('gulp')
var concat = require('gulp-concat')
var connect = require('gulp-connect')
var changed = require('gulp-changed')
var jshint = require('gulp-jshint');
var minifyHTML = require('gulp-minify-html');
var minifyCSS = require('gulp-minify-css');

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./src/js/*/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// minify new or changed HTML pages
gulp.task('htmlpage', function() {
  var htmlSrc = './src/*.html',
      htmlDst = './public';
  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

// copy i18n
gulp.task('i18n', function() {
  var i18nSrc = './src/i18n/*.json',
      i18nDst = './public/i18n';
  gulp.src(i18nSrc)  
    .pipe(gulp.dest(i18nDst));
});

// JS concat
gulp.task('scripts', function() {
  gulp.src(['./src/lib/js/ie-emulation-modes-warning.js',
            './src/lib/js/jquery.min.js',
			'./src/lib/js/bootstrap.min.js',
			'./src/lib/js/ie10-viewport-bug-workaround.js',
            './src/lib/js/angular.min.js',     
			'./src/lib/js/angular-ui-router.min.js',		
			'./src/lib/js/angular-translate.min.js',
			'./src/lib/js/angular-translate-loader-static-files.min.js',			
            './src/js/app.js',			
			'./src/js/controllers/*.js'])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./public/js/'));
});



// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
  gulp.src(['./src/lib/css/*.css','./src/css/notes.css'])
    .pipe(concat('styles.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('connect', function () {
	connect.server({
		root: 'public',
		port: 9000
	})
})


gulp.task('default', ['connect', 'i18n', 'htmlpage', 'scripts', 'styles'])