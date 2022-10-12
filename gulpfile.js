const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('scss', () => {
    return gulp.src([
        './styles/component.scss', 
        './styles/layout.scss', 
        './styles/mixin.scss', 
        './styles/reset.scss', 
        './styles/shape.scss'
    ])
    .pipe(concat('all.scss'))
    .pipe(gulp.dest('./styles'));
});