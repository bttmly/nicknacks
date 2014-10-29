var assert = require("assert");

var applyConstructor = require("../apply-constructor");

function copy (obj) {
  var ret = {isCopy: true};
  return Object.keys(obj).reduce(function (ret, key) {
    ret[key] = obj[key];
    return ret;
  }, ret)
}

function ImplicitReturn (age, name) {
  this.age = age;
  this.name = name;
}

function ExplicitReturn (age, name) {
  this.age = age;
  this.name = name;
  return copy(this);
}

function PrimitiveReturn (age, name) {
  this.age = age;
  this.name = name;
  return this.age === 30;
}


describe("func.applyConstructor()", function () {
  it("calls a function in 'constructor mode' with an array of arguments", function () {
    var joeRegular = new ImplicitReturn(30, "Joe");
    assert.equal(joeRegular.name, "Joe");
    assert.equal(joeRegular.age, 30);
    assert.equal(Object.getPrototypeOf(joeRegular), ImplicitReturn.prototype);
    assert.equal((joeRegular instanceof ImplicitReturn), true);
    
    var joeApply = applyConstructor(ImplicitReturn, [30, "Joe"]);
    assert.equal(joeApply.name, "Joe");
    assert.equal(joeApply.age, 30);
    assert.equal(Object.getPrototypeOf(joeApply), ImplicitReturn.prototype);
    assert.equal((joeApply instanceof ImplicitReturn), true);
  });

  it("calls a function in 'constructor mode' with an array of arguments, honoring the explicit return value of the constructor", function () {
    var joeRegular = new ExplicitReturn(30, "Joe");
    assert.equal(joeRegular.name, "Joe");
    assert.equal(joeRegular.age, 30);
    assert.equal(joeRegular.isCopy, true);
    assert.notEqual(Object.getPrototypeOf(joeRegular), ExplicitReturn.prototype);
    assert.notEqual((joeRegular instanceof ExplicitReturn), true);

    var joeApply = applyConstructor(ExplicitReturn, [30, "Joe"]);
    assert.equal(joeApply.name, "Joe");
    assert.equal(joeApply.age, 30);
    assert.equal(joeApply.isCopy, true);
    assert.notEqual(Object.getPrototypeOf(joeApply), ExplicitReturn.prototype);
    assert.notEqual((joeApply instanceof ExplicitReturn), true);
  });

  it("calls a function in 'constructor mode' with an array of arguments, returning the constructed object if the constructor explictly returns a primitive value", function () {
    var joeRegular = new PrimitiveReturn(30, "Joe");
    assert.equal(joeRegular.name, "Joe");
    assert.equal(joeRegular.age, 30);
    assert.equal(Object.getPrototypeOf(joeRegular), PrimitiveReturn.prototype);
    assert.equal((joeRegular instanceof PrimitiveReturn), true);

    var joeApply = applyConstructor(PrimitiveReturn, [30, "Joe"]);
    assert.equal(joeApply.name, "Joe");
    assert.equal(joeApply.age, 30);
    assert.equal(Object.getPrototypeOf(joeApply), PrimitiveReturn.prototype);
    assert.equal((joeApply instanceof PrimitiveReturn), true);
  });
});