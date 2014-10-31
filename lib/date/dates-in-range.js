var DAY = 1000 * 60 * 60 * 24;

function datesInRange = (start, end) {
  var current = Number(start.setHours(0, 0, 0, 0));
  var dates = [];
  while (current < end) {
    dates.push(new Date(current));
    current += DAY;
  }
  return dates;
}

module.exports = datesInRange;