const gulp = require('gulp')
const svgSymbols = require('gulp-svg-symbols')

gulp.task(`sprites`, function () {
	return gulp
		.src(`assets/svg/*.svg`)
		.pipe(svgSymbols())
		.pipe(gulp.dest(`assets`))
})