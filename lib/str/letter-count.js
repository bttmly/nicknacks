function letterCount (str) {
  return [].reduce.call(str, function (obj, letter) {
    if (obj[letter] === undefined) {
      obj[letter] = 0;
    }
    obj[letter] += 1;
  }, {});
}

module.exports = letterCount;