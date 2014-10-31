var merge = require("../obj/merge");

function mergeCollections (matcher, collections) {
  
  var longest = collections
    .slice()
    .sort(function (a, b) {
      return b.length - a.length;
    })
    .shift();

  matcher = typeof matcher === "function" ?
    matcher :
    (function (prop) {
      return function (a, b) {
        return a[prop] === b[prop]
      }
    })(matcher);

  return longest.map(function (item) {
    var predicate = matcher.bind(null, item);
    var items = [{}, item].concat(
      collections.reduce(function (acc, collection) {
        [].push.apply(acc, collection.filter(predicate));
        return acc;
      }, [])
    );
    return merge.apply(null, items);
  });

}

module.exports = mergeCollections;