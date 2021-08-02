'use strict';
var gulp = require('gulp');
var gulpsass =  require('gulp-sass')(require('node-sass'));
var sourcemaps = require('gulp-sourcemaps');
var cleancss = require('gulp-clean-css');
var csslint = require('gulp-csslint');
var htmlReporter = require('gulp-csslint-report');
var replace = require('gulp-replace');
var autoprefixer = require('gulp-autoprefixer');
// var cleancss = require('gulp-cleancss');
// lint 참고 https://github.com/CSSLint/csslint/wiki/

gulp.task('css', function(done) {
    gulp.src('./css/**/*.css')
        .pipe(csslint({
            'important' : false,
            'order-alphabetical' : false,
            'adjoining-classes' : false,
            'unique-headings' : false,
            'qualified-headings' : false,
            'duplicate-background-images' : false,
            'box-sizing' : false,
            'box-model' : false,
            'fallback-colors' : false,
            'overqualified-elements' : false,
            'font-sizes' : false,
            'floats' : false,
            'font-faces' : false,
            'universal-selector' : false,
            'unqualified-attributes' : false,
            'vendor-prefix' : false,
            'compatible-vendor-prefixes' : false,
            'known-properties' : false,
            'ids' : false,
            'outline-none' : false,
            'regex-selectors' : false,
            'bulletproof-font-face' : false,
            'star-property-hack' : false,
            'underscore-property-hack' : false,
            'zero-units' : false,
            'text-indent' : false,
            'display-property-grouping' : false,

        }))
        .pipe(htmlReporter({
            'filename': 'index.html',
            'directory': './csslint-reports/'
        }));

    done();
});

gulp.task('sass', function (done) {
    gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(gulpsass({sourcemap: true, outputStyle: 'expanded'}).on('error', gulpsass.logError))
        // .pipe(prefix({browser:["last 2 version", "> 1%", "ie 8", "ie 7"],cascade:false,flexbox:false}))
        .pipe(cleancss({format: 'keep-breaks' }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./portfolio/css'));

    done();
});
gulp.task('sass:watch', function (done) {
    gulp.watch('./portfolio/scss/**/*.scss', gulp.series('sass'));

    done();
});
gulp.task('selene', function (done) {
    gulp.src('./selene/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(gulpsass({sourcemap: true, outputStyle: 'expanded'}).on('error', gulpsass.logError))
        // .pipe(prefix({browser:["last 2 version", "> 1%", "ie 8", "ie 7"],cascade:false,flexbox:false}))
        .pipe(cleancss({format: 'keep-breaks' }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./selene/css'));

    done();
});
gulp.task('selene:watch', function (done) {
    gulp.watch('selene/scss/*.scss', gulp.series('selene'));
    done();
});







// data selector
gulp.task('dst', function (done) {
    gulp.src('html/dst/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(gulpsass({sourcemap: true, outputStyle: 'expanded'}).on('error', gulpsass.logError))
        // .pipe(prefix({browser:["last 2 version", "> 1%", "ie 8", "ie 7"],cascade:false,flexbox:false}))
        .pipe(cleancss({format: 'keep-breaks' }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./css/svc/'));
    done();
});
gulp.task('dst:watch', function (done) {
    gulp.watch('html/dst/scss/**/*.scss', gulp.series('dst'));
    done();
});


// nayana
gulp.task('nyn', function (done) {
    gulp.src('html/nyn/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(gulpsass({sourcemap: true, outputStyle: 'expanded'}).on('error', gulpsass.logError))
        // .pipe(prefix({browser:["last 2 version", "> 1%", "ie 8", "ie 7"],cascade:false,flexbox:false}))
        .pipe(cleancss({format: 'keep-breaks' }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./css/svc/'));
    done();
});
gulp.task('nyn:watch', function (done) {
    gulp.watch('html/nyn/scss/**/*.scss', gulp.series('nyn'));
    done();
});
// nayana sprite
//const gulp = require('gulp');
const merge = require('merge-stream');
const spritesmith = require('gulp.spritesmith');
/*
BASIC
gulp.task('sp_nyn', function() {
    const spriteData = gulp.src('html/nyn/imgs/sprite/!*.png').pipe(spritesmith({
        retinaSrcFilter: 'html/nyn/imgs/sprite/!*@2x.png',
        retinaImgName: 'sp_nyn@2x.png',
        imgName: 'sp_nyn.png',
        cssName: 'sprite_nyn.css',
        padding: 5
    }));

    return spriteData.pipe(gulp.dest('./imgs/nyn'));
});
*/
gulp.task('sp_nyn', function() {
    const spConfig = {
        targetImgPath: 'html/nyn/imgs/sprite/*.png',
        targetRetinaImgPath: 'html/nyn/imgs/sprite/*@2x.png',
        destImgName: 'sp_nyn.png',
        destRetinaImgName: 'sp_nyn_2x.png',
        destCssName: 'sprite.css',
        destImgPath: './imgs/nyn',
        destCssPath: 'html/nyn/scss/common'
        //destCssTemplate: '/handlebarsStr.css.handlebars'
    }

    const spriteData = gulp.src(spConfig.targetImgPath)
        .pipe(spritesmith({
            retinaSrcFilter: spConfig.targetRetinaImgPath,
            imgName: spConfig.destImgName,
            retinaImgName: spConfig.destRetinaImgName,
            cssName: spConfig.destCssName,
            cssOpts: {
                cssSelector: function(sprite){
                    return '.icon-' + sprite.name;
                }
            },
            padding:5
            //cssTemplate: spConfig.destCssTemplate
        }));

    const imgStream = spriteData.img.pipe(gulp.dest(spConfig.destImgPath));
    const cssStream = spriteData.css.pipe(gulp.dest(spConfig.destCssPath));

    return merge(imgStream,cssStream);
});
