var propRe = /[[\]\.]/;

function deepGet (obj, prop) {
  var visited = [];
  return prop
    .split(propRe)
    .filter(Boolean)
    .reduce(function (current, prop, idx) {
      if (!(prop in current)) {
        throw new Error("Property " + prop + " not found in " + visited.join("/"));
      }
      visited.push(prop);
      return current[prop];
    }, obj);
}

module.exports = deepGet;