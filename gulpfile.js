var gulp  = require('gulp'),
  argv  = require('yargs').argv,
  $     = require('gulp-load-plugins')(),
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-clean-css');

// compile less to css
gulp.task('styles', function() {
  return gulp.src('app/less/main.less')
          .pipe($.plumber())
          .pipe($.less())
          .pipe(gulp.dest('app/styles'));
});

// watch chang on file .less under less directory
gulp.task('watch', ['styles'], function(){
  gulp.watch('./app/less/*.less', ['styles']);
});

// create a test server to show app/index.html
gulp.task('connect', function() {
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var app = require('connect')()
    .use(serveStatic('app'))
    .use('/bower_components', serveStatic('bower_components'))
    .use(serveIndex('app'));

  require('http').createServer(app)
    .listen(8080)
    .on('listening', function() {
      console.log('Started connect web server on http://localhost:8080');
    });
});

// to run develop's code
gulp.task('serve', ['connect'], function() {
  if (argv.open) {
    require('opn')('http://localhost:8080');
  }
});

/************************************************************************/

/* production */

// to delete dist directory before build
gulp.task('clean-build', require('del').bind(null, ['dist']));

// to copy images files to dist directory, it will be called by build
gulp.task('copy-resource', ['clean-build'], function(src,dest){
	return gulp.src('app/images/*.*')
        .pipe(gulp.dest('dist/images'));
});

// combile and minify and create directory 'dist'
gulp.task('build', ['copy-resource'], function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});

// create a test server to show dist/index.html
gulp.task('connect-test', ['build'], function() {
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var app = require('connect')()
    .use(serveStatic('dist'))
    .use(serveIndex('dist'));

  require('http').createServer(app)
    .listen(8080)
    .on('listening', function() {
      console.log('Started connect web server on http://localhost:8080');
    });
});

// to run test production's code
gulp.task('test', ['connect-test'], function() {
  if (argv.open) {
    require('opn')('http://localhost:8080');
  }
});

/************************************************************************/
