module.exports = {

};

/*

function usDateFormat (date) {
  date = dateMaker(date);
  var month = String(date.getMonth());
  month = date.length === 1 ? "0" + month : month;
  var day = String(date.getDate());
  day = day.length === 1 ? "0" + day : day;
  var year = date.getFullYear();
  return [
    month,
    "/",
    day,
    "/",
    year
  ].join("");
}

function datesInRange = (start, end) {
  var DAY = 1000 * 60 * 60 * 24;
  var dates = [];
  var current = Number(start);
  while (current < end) {
    days.push(new Date(current));
    current += DAY;
  }
  return days;
}

function startOfDay = (date) {
  dateMaker(date).setHours(0, 0, 0, 0);
}

*/