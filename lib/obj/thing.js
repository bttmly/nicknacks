function ensureThing (obj) {}

function assign (a, b) {}

function Thing () {}

[
  "keys",
  "freeze",
  "seal",
  "preventExtensions",
  "isFrozen",
  "isSealed",
  "isExtensible",
  "defineProperty",
  "defineProperties",
  "getOwnPropertyNames",
  "getOwnPropertyDescriptor"
].forEach( function (method) {
  Thing.prototype[method] = function () {
    var args = [this].concat([].slice.call(arguments));
    return Object[method].apply(null, args);
  };
});