const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function scss() {
  return gulp
    .src("./app/sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./app/css"));
}

exports.scss = scss;

function scsswatch() {
  gulp.watch("./app/sass/**/*.scss", scss);
}

exports.scsswatch = scsswatch;
