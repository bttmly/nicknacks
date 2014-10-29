var assert = require("assert");

var getConstructorChain = require("../get-constructor-chain");

function inherit (Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Vehicle () {}

function MotorVehicle () {}
inherit(MotorVehicle, Vehicle);

function Car () {}
inherit(Car, MotorVehicle);

function SportsCar () {}
inherit(SportsCar, Car)

describe("obj.getConstructorChain()", function () {
  it("accepts an object, and returns the constructors of that object's prototype chain", function () {
    var chain = getConstructorChain(new SportsCar());
    assert.equal(chain.length, 5);
    assert.deepEqual(chain, [SportsCar, Car, MotorVehicle, Vehicle, Object]);
  });

  it("accepts a constructor, and returns the constructors of that constructor's prototype's prototype chain", function () {
    var chain = getConstructorChain(new SportsCar());
    assert.equal(chain.length, 5);
    assert.deepEqual(chain, [SportsCar, Car, MotorVehicle, Vehicle, Object]);
  });

  it("throws if a prototype in the chain doesn't have an own `constructor` property", function () {
    delete MotorVehicle.prototype.constructor;
    assert.throws(function () {
      getConstructorChain(new SportsCar());
    }, 
    Error, 
    "getConstructorChain() accepts only prototypes with an own 'constructor' property.");
  });

});