var assert = require("assert");

var USDateFormat = require("../us-date-format");

describe("USDateFormat()", function () {
  it("accepts date objects", function () {
    var date = new Date(2014, 9, 30);
    assert.equal(USDateFormat(date), "10/30/2014");
  });

  it("properly pads single-digit months and days", function () {
    var date = new Date(2014, 2, 2);
    assert.equal(USDateFormat(date), "03/02/2014");
  });

  it("accepts numbers and numeric strings", function () {
    assert.equal(USDateFormat(1414652400000), "10/30/2014")
    assert.equal(USDateFormat("1414652400000"), "10/30/2014");
  });

  it("accepts a join character as an optional second argument", function () {
    assert.equal(USDateFormat(1414652400000, "-"), "10-30-2014");
  });
});