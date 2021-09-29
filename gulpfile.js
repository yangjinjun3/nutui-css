const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('scss', () => {
    return gulp.src(__dirname+'/styles/*.scss')
    .pipe(concat('all.scss'))
    .pipe(gulp.dest('./styles'));
});