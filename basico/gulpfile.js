const gulp = require('gulp')
const {series, parallel} = gulp.series

const task1 = cb =>{
    console.log('task before 1')
    return cb()
}

const task2 = cb =>{
    console.log('task before 2')
    return cb()
}

function copy(cb){
    gulp.src(['pastaA/arquivo1.txt', '/pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB')) 
    return cb()
}

const task3 = cb =>{
    console.log('task before 3')
    return cb()
}

module.exports.default = gulp.series(
    gulp.parallel(task1,
    task2),
    copy,
    task3)
