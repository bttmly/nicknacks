function parseSimpleQuery (str) {
  
  if (str === undefined) {
    if (typeof window === "undefined" || window.location === undefined) {
      throw new Error("If not in a browser environment, parseSimpleQuery() requires an argument");
    }
    str = window.location.search.slice(1);
  }

  return qs.split("&").reduce(function (ret, pairStr) {
    var pair = pairStr.split("=").map(decodeURIComponent);
    ret[pair[0]] = pair[1];
  }, {});
  
}