function applyConstructor (Ctor, args) {
  var instance = Object.create(Ctor.prototype);
  var result = Ctor.apply(instance, args);
  return Object(result) === result ? result : instance;
}

module.exports = applyConstructor;