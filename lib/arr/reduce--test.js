var assert = require("assert");

var reduce = require("./reduce");

describe("arr/reduce()", function () {

  function makeArr () {
    return [5, 10, 15, 20];
  }

  it("reduces an array", function () {
    var result = reduce(makeArr(), function (acc, item) {
      return acc + item;
    }, 0);
    assert.equal(result, 50);
  });

  it("reduces an array with an initial value", function () {
    var result = reduce(makeArr(), function (acc, item) {
      return acc + item;
    }, 50);
    assert.equal(result, 100);
  });

  it("reduces an array with a context-bound callback", function () {
    var arr = makeArr().map(String);
    var result1 = reduce(arr, function (acc, item) {
      return acc + item;
    });
    var result2 = reduce(arr, function (acc, item) {
      return this.toNumber(acc) + this.toNumber(item);
    }, null, {toNumber: Number})
    assert.equal(result1, "5101520");
    assert.equal(result2, 50);
  });

});