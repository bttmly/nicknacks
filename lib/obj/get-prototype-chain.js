function getProto (value) {
  return Object.getPrototypeOf(Object(value));
}

function getPrototypeChain (input) {
  var current = typeof input === "function" ? input.prototype : getProto(input);
  var chain = [];
  while (current) {
    chain.push(current);
    current = getProto(current);
  }
  return chain;
}

module.exports = getPrototypeChain;