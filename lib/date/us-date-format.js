var safeDate = require("./make-date");

function USDateFormat (input, joinChar) {
  if (joinChar === undefined) {
    joinChar = "/"
  }
  var date = safeDate(input);
  var month = String(date.getMonth() + 1);
  month = month.length === 1 ? "0" + month : month;
  var day = String(date.getDate());
  day = day.length === 1 ? "0" + day : day;
  var year = date.getFullYear();
  return [month, day, year].join(joinChar);
}

module.exports = usDateFormat;