var assert = require("assert");

var demethodize = require("../demethodize");

var context = {
  returnThis: function () {
    return this;
  }
};

var other = {};

var demethodizedReturnThis = demethodize(context.returnThis);

describe("func.demethodize()", function () {
  it("it separates a method from it's context", function () {
    assert.equal(context.returnThis(), context);
    assert.equal(demethodizedReturnThis(other), other);
  });
});