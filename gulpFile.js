var fs = require("fs");
var browserify = require("browserify");
browserify("./dist/Button.js")
  .transform("babelify", {presets: ["@babel/preset-env", "@babel/preset-react"]})
  .bundle()
  .pipe(fs.createWriteStream("./static/Button.js"));