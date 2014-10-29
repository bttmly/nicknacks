function reduce (iterable, callback, acc, context) {
  var i = 0;
  var len = iterable.length;
  if (acc === undefined) {
    i = 1;
    acc = iterable[0];
  }
  if (context !== undefined) {
    callback = callback.bind(context);
  }
  for (i; i < len; i++) {
    acc = callback(acc, iterable[i], i, iterable);
  }
  return acc;
}

module.exports = reduce;