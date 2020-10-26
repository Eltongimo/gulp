const {parallel} = require('gulp')
const gulp = require('gulp')
const saas = require('gulp-sass')
const uglfiycss = require('gulp-uglifycss')
const concat = require('gulp-concat')


function copiar(){
    return gulp.src('src/index.html')
            .pipe(gulp.dest('build/css'))
}

function transformacaoCSS(){
    return gulp.src('src/sass/index.scss')
            .pipe(saas())
            .pipe(uglfiycss({"uglyComments": true}))
            .pipe(concat('estilo.min.css'))
            .pipe(gulp.dest('build/css'))

}

module.exports.default = parallel(copiar,transformacaoCSS)

