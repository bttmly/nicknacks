var inBracesRe = /{([^{}]*)}/g

var deepGet = require("../obj/deep-get");

function interpolate (str, obj) {
  return str.replace(inBracesRe, function (match, matchWithoutBraces) {
    var replacement = deepGet(obj, matchWithoutBraces);
    return replacement === null ? match : replacement;
  });
}

module.exports = interpolate;