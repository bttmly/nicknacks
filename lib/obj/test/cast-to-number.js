var assert = require("assert");

var castToNumber = require("../cast-to-number");

describe("it produces numbers when `Number(input)` isn't NaN", function () {
  assert.equal(castToNumber("123456890"), 123456890);
  assert.equal(castToNumber(Date.UTC(2000, 0)), 946684800000);
  assert.equal(castToNumber([]), 0);
  assert.equal(castToNumber([1]), 1);
  assert.equal(castToNumber({
    valueOf: function () { 
      return 100; 
    }
  }), 100);
});

describe("it returns null when unable to cast to number", function () {
  assert.equal(castToNumber("1234a56890"), null);
  assert.equal(castToNumber[1, 2], null);
  assert.equal(castToNumber({
    valueOf: function () {
      return "abcd";
    }
  }), null);
});

describe("it throws when unable to cast to number and `strict` argument is true", function () {
  assert.throws(function () {
    castToNumber("1234a56890", true);
  });
  assert.throws(function () {
    castToNumber([1, 2], true);
  });
  assert.throws(function () {
    castToNumber({
      valueOf: function () {
        return "abcd";
      }
    }, true)
  });
});