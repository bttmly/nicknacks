var assert = require("assert");

var makeDate = require("../make-date");

var TIME = 1e12;

describe("it acts like `new Date()` when passed lots of arguments.", function () {
  var controlDate = new Date(2000, 10, 10, 10, 10, 10, 10);
  var testDate = makeDate(2000, 10, 10, 10, 10, 10, 10);
  assert.equal(Number(controlDate), Number(testDate));
});


describe("it acts like `new Date()` when passed some arguments.", function () {
  var controlDate = new Date(2000, 10, 10);
  var testDate = makeDate(2000, 10, 10);
  assert.equal(Number(controlDate), Number(testDate));
});

describe("it acts like `new Date()` when passed one argument.", function () {
  var controlDate = new Date(100000000);
  var testDate = makeDate(100000000);
  assert.equal(Number(controlDate), Number(testDate));
});

describe("but not always with one argument; it'll take a numeric string", function () {
  var controlDate = new Date("100000000");
  var testDate = makeDate("100000000");
  assert.equal(isNaN(controlDate), true);
  assert.equal(isNaN(testDate), false);
  assert.equal(Number(testDate), 100000000);
});

