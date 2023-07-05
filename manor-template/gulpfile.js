'use strict';

// npm install gulp gulp-watch browser-sync gulp-autoprefixer gulp-uglify gulp-sass gulp-sourcemaps gulp-rigger gulp-clean-css gulp-imagemin imagemin-pngquant rimraf gulp-debug gulp-svg-sprite gulp-svgmin gulp-cheerio gulp-replace --save-dev

const sass = require('gulp-sass')(require('sass'));
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    debug = require('gulp-debug'),
    reload = browserSync.reload;

    var wp_path = 'wordpress/wp-content/themes/starter/';

    var path = {
        build: { 
            html: 'build/',
            js: 'build/js/',
            css: 'build/css/',
            img: 'build/img/',
            svg: 'build/img/',
            fonts: 'build/fonts/',
            sass: 'build/scss/',
            lib: 'build/lib/',
            php: 'build/php/'
        },
        wp: { 
            js: wp_path + 'js/',
            css: wp_path + 'css/',
            img: wp_path + 'img/',
            svg: wp_path + 'img/',
            fonts: wp_path + 'fonts/',
            sass: wp_path + 'scss/',
            lib: wp_path + 'lib/',
            php: wp_path + 'php/'
        },
        src: { 
            html: 'src/*.html', // *.html says gulp to take all .html
            js: 'src/js/*.js',
            style: 'src/scss/style.scss',
            img: 'src/img/**/*.*', // img/**/*.* says to take all files from all folders inside img folder
            svg: 'src/img/svg/**/*.svg',
            fonts: 'src/fonts/**/*.*',
            sass: 'src/scss/**/*.*',
            lib: 'src/lib/**/*.*',
            php: 'src/php/**/*.*'
        },
        watch: {
            html: 'src/**/*.html',
            js: 'src/js/**/*.js',
            style: 'src/scss/**/*.scss',
            img: 'src/img/**/*.*',
            svg: 'src/img/svg/**/*.svg',
            fonts: 'src/fonts/**/*.*',
            sass: 'src/scss/**/*.*',
            models: '/models/**/*.*',
            lib: 'src/lib/**/*.*',
            php: 'src/php/**/*.*'
        },
        clean: './build'
    };

    gulp.task('html:build', async function () {
        gulp.src(path.src.html) //get from src
            .pipe(rigger())
            .pipe(gulp.dest(path.build.html)) // put in build
            .pipe(reload({stream: true})); // reload server
    });

    gulp.task('js:build', async function () {
        gulp.src(path.src.js)
            // .pipe(rigger()) 
            // .pipe(sourcemaps.init())
            // .pipe(uglify()) 
            // .pipe(sourcemaps.write()) 
            .pipe(gulp.dest(path.build.js))
            // .pipe(gulp.dest(path.wp.js))
            .pipe(reload({stream: true}));
    });

    gulp.task('style:build', async function () {
        gulp.src(path.src.style)
            .pipe(sourcemaps.init())
            .pipe(sass().on( 'error', function( error ){console.log( error );})) 
            .pipe(prefixer())
            // .pipe(cleanCSS())
            .pipe(sourcemaps.write('')) 
            .pipe(gulp.dest(path.build.css))
            // .pipe(gulp.dest(path.wp.css))
            .pipe(reload({stream: true}));
    });

    gulp.task('image:build', function () {
        return gulp.src(path.src.img) 
            // .pipe(imagemin({ 
            //     progressive: true,
            //     svgoPlugins: [{removeViewBox: false}],
            //     use: [pngquant()],
            //     interlaced: true
            // }))
            .pipe(gulp.dest(path.build.img)) 
            // .pipe(gulp.dest(path.wp.img)) 
            // .pipe(debug({title: 'unicorn:'}))
            .pipe(reload({stream: true}));
    });

    gulp.task('svg:build', async function() {
        gulp.src(path.src.svg)
            .pipe(svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe(cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: {xmlMode: true}
            }))
            .pipe(replace('&gt;', '>'))
            .pipe(svgSprite({
                dest: path.build.svg,
                mode: {
                    symbol: {
                        dest: '.',
                        sprite: 'sprite.svg'
                   },
                },
                svg: {
                    xmlDeclaration: true, 
                    doctypeDeclaration: false,
                    namespaceIDs: true, 
                    namespaceIDPrefix: '', 
                    namespaceClassnames: true,
                    dimensionAttributes: true
                }
            }))
            .pipe(gulp.dest(path.build.svg))
            // .pipe(gulp.dest(path.wp.svg))
            .pipe(reload({stream: true}));
    });

    gulp.task('fonts:build', async function() {
        gulp.src(path.src.fonts)
            .pipe(gulp.dest(path.build.fonts))
            // .pipe(gulp.dest(path.wp.fonts))
            .pipe(reload({stream: true}));
    });
    gulp.task('sass:build', async function() {
        gulp.src(path.src.sass)
            .pipe(gulp.dest(path.build.sass));
            // .pipe(gulp.dest(path.wp.sass));
    });
    gulp.task('lib:build', async function() {
        gulp.src(path.src.lib)
            .pipe(gulp.dest(path.build.lib));
            // .pipe(gulp.dest(path.wp.lib));
    });
    gulp.task('php:build', async function() {
        gulp.src(path.src.php)
            .pipe(gulp.dest(path.build.php));
            // .pipe(gulp.dest(path.wp.php));
    });


    gulp.task('build', gulp.series(
        'html:build',
        'js:build',
        'style:build',
        'fonts:build',
        'image:build',
        'svg:build',
        'sass:build',
        'lib:build',
        'php:build'
    ));

    gulp.task('watch', async function(){
        gulp.watch([path.watch.html], gulp.series('html:build'));
        gulp.watch([path.watch.style], gulp.series('style:build'));
        gulp.watch([path.watch.js], gulp.series('js:build'));
        gulp.watch([path.watch.img], gulp.series('image:build'));
        gulp.watch([path.watch.svg], gulp.series('svg:build'));
        gulp.watch([path.watch.fonts], gulp.series('fonts:build'));
        gulp.watch([path.watch.sass], gulp.series('sass:build'));
        gulp.watch([path.watch.lib], gulp.series('lib:build'));
        gulp.watch([path.watch.php], gulp.series('php:build'));
    });

    gulp.task('webserver', async function () {
        browserSync({
            server: { baseDir: "./build" },
            tunnel: false,
            host: 'localhost',
            port: 8080,
            open: false,
            logLevel: "silent",
            notify: false,
            logLevel: "info"
          });
    });

    gulp.task('clean', async function (cb) {
        rimraf(path.clean, cb);
    });

    gulp.task('default', gulp.series('build', 'webserver', 'watch'));

