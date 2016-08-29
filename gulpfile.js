var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var useref = require('gulp-useref');
var cssnano = require('gulp-cssnano');

//task for watching changing infiles
gulp.task('watch', ['browserSync'], function (){

    // Reloads the browser whenever HTML or JS files change
    gulp.watch('public/*.html', browserSync.reload);
    gulp.watch('public/js/**/*.js', browserSync.reload);
})





gulp.task('useref', function(){
    return gulp.src('public/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});


var uglifyjs = require('uglify-js'); // can be a git checkout
                                     // or another module (such as `uglify-js-harmony` for ES6 support)
var minifier = require('gulp-uglify/minifier');
var pump = require('pump');

var concat = require('gulp-concat');

gulp.task('scripts', function() {
    gulp.src(['public/js/app.js','public/js/controllers/*.js', 'public/js/services/*.js', 'public/js/directives/*.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'))
});

gulp.task('Main', function() {
    gulp.src(['public/js/app.js'])
        .pipe(concat('Main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'))
});

/*
Minify the controllers
 */
gulp.task('scripts', function() {
    gulp.src(['public/js/app.js','public/js/controllers/*.js',])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'))
});



//Minify services

gulp.task('Services', function() {
    gulp.src(['public/js/services/*.js'])
        .pipe(concat('Services.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'))
});

//Minify directive

gulp.task('Directives', function() {
    gulp.src(['public/js/directives/*.js'])
        .pipe(concat('directives.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'))
});




 gulp.task('useref', function(){
 return gulp.src('public/*.html')
 .pipe(useref())
 .pipe(gulpIf('*.js', uglify()))
     .pipe(gulp.dest('public/index.html'))
 // Minifies only if it's a CSS file
 .pipe(gulpIf('*.css', cssnano()))
 .pipe(gulp.dest('dist'))
 });


/*
Minify the bwoer files
 */
var mainBowerFiles = require('gulp-main-bower-files');
var gulpFilter = require('gulp-filter');

gulp.task('uglify', function(){
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles( ))
        .pipe(uglify())
        .pipe(gulp.dest('wwwroot/libs'));
});



gulp.task('main-bower-files', function() {
    var filterJS = gulpFilter('**/*.js', { restore: true });
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles({
            overrides: {
                bootstrap: {
                    main: [
                        './dist/js/bootstrap.js',
                        './dist/css/*.min.*',
                        './dist/fonts/*.*'
                    ]
                }
            }
        }))
        .pipe(filterJS)
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(filterJS.restore)
        .pipe(gulp.dest('./wwwroot/libs'));
})


gulp.task('test', function(){
    return gulp.src('public/index.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('public/all.js'))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});

var filter = gulpFilter('**/*.js', '!**/*.min.js');
var bowerSrc = require('gulp-bower-src');
gulp.task('default', function () {
    bowerSrc()
        .pipe(filter)
        .pipe(uglify())
        .pipe(filter.restore())
        .pipe(gulp.dest('dist/lib'));
});








rimraf = require('gulp-rimraf'),
    bundle = require('gulp-bundle-assets');

gulp.task('bundle', function () {
    return gulp.src('./bundle.config.js')
        .pipe(bundle())
        .pipe(gulp.dest('public/minify'));
});