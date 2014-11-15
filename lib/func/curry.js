// keeps track of arity internally but the returned function has arity 0

function curry (fn) {
  var outerArguments = [].slice.call(arguments, 1);
  return function curried () {
    var args = outerArguments.concat([].slice.call(arguments));
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return curry.apply(null, [fn].concat(args));
  }
}

module.exports = curry;