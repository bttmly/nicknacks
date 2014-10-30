var propRe = /[[\]\.]/;

function deepGet (obj, prop, strict) {
  var visited = [];
  return prop
    .split(propRe)
    .filter(Boolean)
    .reduce(function (current, prop, idx) {
      if (current === null || current[prop] === undefined) {
        if (strict) {
          throw new Error("Property " + prop + " not found in " + visited.join("/"));
        }
        return null;
      }
      visited.push(prop);
      return current[prop];
    }, obj);
}

module.exports = deepGet;