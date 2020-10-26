const {series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const { isExternalModuleNameRelative } = require('typescript')

function padrao(cb){
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ['env']
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('code.min.js'))
        .pipe(gulp.dest('build'))
    return cb
}

module.exports.default = gulp.series(padrao)