var getPrototypeChain = require("./get-prototype-chain");

function getConstructorChain (input) {
  return getPrototypeChain(input).map(function (proto) {
    if (proto.hasOwnProperty("constructor")) {
      return proto.constructor;
    }
    throw new Error("getConstructorChain() accepts only prototypes with an own 'constructor' property.");
  });
}

module.exports = getConstructorChain;