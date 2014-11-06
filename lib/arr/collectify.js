function collectify (headers, rows) {
  var len = headers.length;
  return rows.map(function (row) {
    if (row.length !== len) {
      throw new Error("Malformed data in collectify(); each row must all have same length as headers");
    }
    return row.reduce(function (model, val, i) {
      model[headers[i]] = val;
      return model; 
    }, {});
  });
}

module.exports = collectify;