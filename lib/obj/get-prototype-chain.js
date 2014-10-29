var getProto = Object.getPrototypeOf;

function getPrototypeChain (input) {
  var current = typeof input === "function" ? input.prototype : getProto(input);
  var chain = [];
  while (current) {
    chain.push(current);
    current = getProtocurrent);
  }
  return chain;
}

module.exports = getPrototypeChain;