var safeDate = require("./safe-date");

function usDateFormat (input, joinChar) {
  if (joinChar === undefined) {
    joinChar = "/"
  }
  var date = safeDate(input);
  var month = String(date.getMonth() + 1);
  month = date.length === 1 ? "0" + month : month;
  var day = String(date.getDate());
  day = day.length === 1 ? "0" + day : day;
  var year = date.getFullYear();
  return [month, day, year].join(joinChar);
}

module.exports = usDateFormat;