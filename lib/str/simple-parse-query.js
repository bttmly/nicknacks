function simpleParseQuery (str) {
  
  if (str === undefined) {
    try {
      str = window.location.search.slice(1);
    } catch (err) {
      throw new Error("If not in a browser environment, simpleParseQuery() requires an argument");
    }
  }

  return str.split("?")[1].split("&").reduce(function (ret, pairStr) {
    var pair = pairStr.split("=").map(decodeURIComponent);
    ret[pair[0]] = pair[1];
    return ret;
  }, {});
  
}

module.exports = simpleParseQuery