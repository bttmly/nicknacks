// if you want to execute the function with context, use .bind()
module.exports = function clockExecutionTime (fn) {
  var args, start, end, result;
  args = [].slice.call(arguments, 1);
  start = process.hrtime();
  result = fn.apply(this, args);
  end = process.hrtime(start);
  return {
    result: result,
    time: end[0] + end[1] / 1e9
  };
}