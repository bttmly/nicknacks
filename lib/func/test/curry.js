var assert = require("assert");

var curry = require("../curry");

function adder (a, b, c, d) {
  return [].reduce.call(arguments, function (sum, num) {
    return sum + num;
  });
}

describe("func.curry()", function () {
  it("should curry a function", function () {
    assert.equal((typeof curry(adder)), "function");
    assert.equal((typeof curry(adder)(1)), "function");
    assert.equal((typeof curry(adder)(1)(2)), "function");
    assert.equal((typeof curry(adder)(1)(2)(3)), "function");
    assert.equal((curry(adder)(1)(2)(3)(4)), 10);
    assert.equal((curry(adder, 1, 2)(3, 4)), 10);
    assert.equal((curry(adder, 1, 2, 3, 4)(5)), 15);
    assert.equal((curry(adder)(1, 2, 3, 4, 5)), 15);
  });
});
