function castToNumber (obj, strict) {
  var result = Number(obj);
  if (isNaN(result)) {
    if (strict) {
      throw new Error("Couldn't cast " + obj + " to number.");
    }
    return null;
  }
  return result;
}

module.exports = castToNumber;