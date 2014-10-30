var assert = require("assert");

var interpolate = require("../interpolate");

var model = {
  name: {
    first: "John",
    last: "Doe"
  },
  age: 30,
  location: {
    city: "New York",
    state: "NY"
  }
};

var pets = ["dog", "cat", "bird"]

describe("str.interpolate()", function () {
  it("interpolates an object's properties and nested properties into a string", function () {
    var toInterpolate = "{name.first} {name.last} is {age} years old and lives in {location.city}, {location.state}";
    assert.equal(interpolate(toInterpolate, model), 
      "John Doe is 30 years old and lives in New York, NY"
    );
  })
  it("interpolates array items into a string", function () {
    var toInterpolate = "I have three pets: a {0}, a {1}, and a {2}";
    assert.equal(interpolate(toInterpolate, pets) ,
      "I have three pets: a dog, a cat, and a bird"
    )
  });
});