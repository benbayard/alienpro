var fs = require('fs');
var path = require('path');
var babel = require('babel-core');
var origJs = require.extensions['.js'];

require.extensions['.js'] = function (module, fileName) {
  var output;
  if (fileName.indexOf('node_modules/react-native/Libraries/react-native/react-native.js') >= 0) {
    fileName = path.resolve('./common/tests/mocha/index.js');
  }
  if (fileName.indexOf('node_modules/') >= 0) {
    return (origJs || require.extensions['.js'])(module, fileName);
  }
  var src = fs.readFileSync(fileName, 'utf8');
  output = babel.transform(src, {
    filename: fileName,
    "presets": ['react', 'es2015']
  }).code;

  return module._compile(output, fileName);
};
