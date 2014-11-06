function makeDate (year, month, day, hour, minute, second, millisecond) {
  var date;
  switch (arguments.length) {
  case 0:
    date = new Date();
    break;
  case 1:
    date = new Date(Number(year));
    break;
  case 2:
    date = new Date(year, month);
    break;
  case 3:
    date = new Date(year, month, day);
    break;
  case 4:
    date = new Date(year, month, day, hour);
    break;
  case 5:
    date = new Date(year, month, day, hour, minute);
    break;
  case 6:
    date = new Date(year, month, day, hour, minute, second);
    break;
  default:
    date = new Date(year, month, day, hour, minute, second, millisecond);
  }

  if (isNaN(date)) {
    console.log(typeof year);
    console.log(year);
    throw new Error("Invalid date.")
  }
  return date;
}

module.exports = makeDate;