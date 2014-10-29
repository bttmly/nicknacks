function merge (target) {
  [].slice.call(arguments, 1).forEach(function (source) {
    Object.keys(source).forEach(function (key) {
      target[key] = source[key];
    });
  });
  return target;
}

module.exports = merge;