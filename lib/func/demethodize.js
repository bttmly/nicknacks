function demethodize (fn) {
  return Function.prototype.call.bind(fn);
}

module.exports = demethodize;