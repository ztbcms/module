const gulp = require('gulp')
const glob = require('glob')
const fs = require('fs')

gulp.task('update-module', function () {
  glob('module/**/*.json', {}, function (er, files) {
    let result = []
    files.forEach(function (file, index) {
      let data = JSON.parse(fs.readFileSync(file, {'encode': 'utf8'}))
      result.push(data)
    })

    fs.writeFileSync('dist/data.json', JSON.stringify(result), null, 4)
  })
})

gulp.task('build', function() {
  return gulp.src('src/**/*')
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['build', 'update-module'])
