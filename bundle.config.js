module.exports = {
    bundle: {
        vendor: {
            scripts: [
                'public/bower_components/jquery/dist/jquery.min.js',
                'public/bower_components/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
                'bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js',
                'public/bower_components/spin.js/spin.js',
                'public/bower_components/jquery_lazyload/jquery.lazyload.js',
                'public/bower_components/bootstrap/dist/js/bootstrap.min.js',
                'public/bower_components/angular/angular.min.js',
                'public/bower_components/angular-ui-router/release/angular-ui-router.min.js',
                'public/bower_components/angular-animate/angular-animate.min.js',
                'public/bower_components/angularUtils-pagination/dirPagination.js',
                'public/bower_components/angular-paging/dist/paging.min.js',
                'public/bower_components/angular-spinner/angular-spinner.min.js',
                'public/bower_components/angular-loading-spinner/angular-loading-spinner.js',
                'public/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
                'public/bower_components/angular-loading-bar/build/loading-bar.min.js'

            ],
            styles: [
                'public/bower_components/bootstrap/dist/css/bootstrap.min.css',
                'public/bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
                'public/bower_components/html5-boilerplate/dist/css/normalize.css',
                'public/bower_components/html5-boilerplate/dist/css/main.css',
                'public/bower_components/angular-bootstrap/ui-bootstrap-csp.css',
                'public/bower_components/bootstrap-material-design/dist/bootstrap-material-design.css',
                'public/bower_components/angular-loading-bar/build/loading-bar.min.css',
                'public/bower_components/animate.css/animate.css'
            ],
            options: {
                uglify: false, // don't minify js since bower already ships with one
                minCSS: false, // don't minify css since bower already ships with one
                rev: false
            }
        },
        main: {
            scripts: [
                './content/js/one.js',
                './content/js/two.js'
            ],
            styles: './content/**/*.css',
            options: {
                rev: false
            }
        }
    },
    copy: {
        src: './bower_components/bootstrap/dist/fonts/**/*.*',
        base: './bower_components/bootstrap/'
    }
};