function stringEnum (enums) {
  var items = arguments.length === 1 ? enums : [].slice.call(arguments);
  if (!Array.isArray(items) || !items.length) {
    throw new Error("stringEnum() needs an iterable or multiple arguments");
  }

  var enumerable = items.map(String).reduce(function (ret, item) {
    ret[item] = true;
    return ret;
  }, Object.create(null));

  return function (val, strict) {
    if (enumerable[val] === undefined) {
      if (strict) {
        throw new Error( "`" + val + "` not in enum; Valid values: " + Object.keys(enumerable).join(", ") );
      }
      return false;
    }
    return true;
  }

}

module.exports = stringEnum;