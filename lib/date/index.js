module.exports = {
  makeDate: require("./make-date"),
  usDateFormat: require("./us-date-format")
};

/*
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