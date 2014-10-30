function strEnum (enums) {
  var items = arguments.length === 1 ? enums : [].slice.call(arguments);
  if (!Array.isArray(items) || !items.length) {
    throw new Error("strEnum() needs an iterable or multiple arguments");
  }

  var enumerable = items.map(String).reduce(function (ret, item) {
    ret[item] = true;
    return ret;
  }, {});

  return function (val) {
    if (enumerable[val] === undefined) {
      throw new Error( "`" + val + "` not in enum; Valid values: " + Object.keys(enumerable).join(", ") );
    }
    return true;
  }

}

module.exports = strEnum;