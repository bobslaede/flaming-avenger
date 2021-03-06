var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var tsify = require('tsify');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');
var gutil = require('gulp-util');

var polymer = require('./lib/bower-polymer');

gulp.task('polymer', function (done) {
    polymer(done);
});

gulp.task('build:clean', function () {
    return gulp.src('dist')
        .pipe(clean());
})

gulp.task('build:html', function() {
    
    var assets = useref.assets();
    
    return gulp.src('src/index.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(htmlreplace({
            init: {
                src: 'init.js',
                tpl: '<script src="%s"></script>'
            }
        }))
        .pipe(gulp.dest('dist'))

});

gulp.task('build:elements', function () {
    return gulp.src('src/elements/elements.html')
        .pipe(vulcanize({
            inlineScripts: true,
            inlineCss: true,
            stripComments: false
        }))
        .on('error', gutil.log.bind(gutil, 'Error'))
        .pipe(gulp.dest('dist/elements'))
});

gulp.task('build:css', function () {

    return gulp.src('src/styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/styles'))

});

gulp.task('build:js', function () {
    var b = browserify({
        debug: false,
        paths: ['src']
    });

    return b
        .add('src/init.ts')
        .plugin('tsify')
        .bundle()
        .pipe(source('init.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('dist'))

})

gulp.task('build', function (done) {
    runSequence('build:clean', ['build:elements', 'build:js'], 'build:html', 'build:css', done);
})