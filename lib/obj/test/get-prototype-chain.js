var assert = require("assert");

var getPrototypeChain = require("../get-prototype-chain");

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

describe("obj.getPrototypeChain()", function () {
  it("accepts an object, and returns the prototype chain of that object", function () {
    var chain = getPrototypeChain(new SportsCar());

    assert.equal(chain.length, 5);
    assert.equal(chain[0], SportsCar.prototype);
    assert.equal(chain[1], Car.prototype);
    assert.equal(chain[2], MotorVehicle.prototype);
    assert.equal(chain[3], Vehicle.prototype);
    assert.equal(chain[4], Object.prototype);
  });

  it("it accepts a Constructor function, and returns the chain starting with that constructor's prototype", function () {
    var chain = getPrototypeChain(SportsCar);

    assert.equal(chain.length, 5);
    assert.equal(chain[0], SportsCar.prototype);
    assert.equal(chain[1], Car.prototype);
    assert.equal(chain[2], MotorVehicle.prototype);
    assert.equal(chain[3], Vehicle.prototype);
    assert.equal(chain[4], Object.prototype);
  });

});