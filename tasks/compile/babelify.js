/**
 * Babelify: first script in the compile group.
 */
'use strict';

var fs = require('fs');
var browserify = require('browserify');

browserify('./src/example.es6')
  .transform('babelify', {presets: ['es2015']})
  .bundle()
  .pipe(fs.createWriteStream('./dist/example.js'));
