var assert = require("assert");

var usDateFormat = require("../us-date-format");

describe("usDateFormat()", function () {
  it("accepts date objects", function () {
    var date = new Date(2014, 9, 30);
    assert.equal(usDateFormat(date), "10/30/2014");
  });

  it("properly pads single-digit months and days", function () {
    var date = new Date(2014, 2, 2);
    assert.equal(usDateFormat(date), "03/02/2014");
  });

  it("accepts numbers and numeric strings", function () {
    assert.equal(usDateFormat(1414652400000), "10/30/2014")
    assert.equal(usDateFormat("1414652400000"), "10/30/2014");
  });
});