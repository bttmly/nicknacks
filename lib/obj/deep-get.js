var reduce = require("../arr/reduce");

var propRe = /[[\]\.]/;

module.exports = function deepGet (obj, prop) {
  var propArr = prop.split(propRe).filter(Boolean);
  var visited = [];
  return reduce(propArr, function (current, prop, idx) {
    if (!(prop in current)) {
      throw new Error("Property " + prop + "not found in " + visited.join("/"));
    }
    visited.push(prop);
    return current[prop];
  }, obj);
}