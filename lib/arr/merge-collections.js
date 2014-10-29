var merge = require("../obj/merge");

function mergeCollections (matcher, collections) {
  
  var longest = collections
    .sort(function (a, b) {
      return b.length - a.length;
    })
    .shift();

  matcher = typeof matcher !== "function" ?
    (function (prop) {
      return function (a, b) {
        return a[prop] === b[prop]
      }
    })(matcher) :
    matcher;

  return longest.map(function (item) {
    var predicate = matcher.bind(null, item);
    var items = [{}, item].concat(
      collections.reduce(function (acc, collection) {
        return acc.concat(collection.filter(predicate));
      }, [])
    );
    return merge.apply(null, items);
  });

}

module.exports = mergeCollections;