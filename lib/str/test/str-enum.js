var assert = require("assert");

var strEnum = require("../str-enum");

describe("str.strEnum()", function () {

  it("accepts an array of strings", function () {
    var wireCharacters = ["McNulty", "Bunk", "Stringer", "Avon"];

    assert.doesNotThrow(function () {
      wireCharEnum = strEnum(wireCharacters);
    });

    wireCharacters.forEach(function (character) {
      assert.doesNotThrow(function () {
        wireCharEnum(character);
      });
    });

    wireCharacters.forEach(function (character) {
      assert.throws(function () {
        var letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        wireCharEnum(character + letter);
      });
    });
  });

  it("accepts an list of string arguments", function () {
    var wireCharacters = ["McNulty", "Bunk", "Stringer", "Avon"];

    assert.doesNotThrow(function () {
      wireCharEnum = strEnum.apply(null, wireCharacters);
    });

    wireCharacters.forEach(function (character) {
      assert.doesNotThrow(function () {
        wireCharEnum(character);
      });
    });

    wireCharacters.forEach(function (character) {
      assert.throws(function () {
        var letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        wireCharEnum(character + letter);
      });
    });
  });

  it("coerces items to strings with String()", function () {
    var myEnum = strEnum({}, []);
    ["[object Object]", ""].forEach(function (key) {
      assert.doesNotThrow(function () {
        myEnum(key);
      })
    });
  });

});