var assert = require("assert");

var applyConstructor = require("../apply-constructor");

function Person (age, name) {
  this.age = age;
  this.name = name;
}

Person.prototype.getName = function () { return this.name; };

describe("func.applyConstructor()", function () {
  it("calls a function in 'constructor mode' with an array of arguments", function () {
    var joe = applyConstructor(Person, [30, "Joe"]);
    assert.equal(joe.name, "Joe");
    assert.equal(joe.age, 30);
    assert.equal(joe.getName(), "Joe");
    assert.equal(Object.getPrototypeOf(joe), Person.prototype);
    assert.equal((joe instanceof Person), true);
  });
});