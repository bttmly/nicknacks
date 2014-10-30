var assert = require("assert");

var stringEnum = require("../string-enum");

describe("str.stringEnum()", function () {

  it("accepts an array of strings", function () {
    var wireCharacters = ["McNulty", "Bunk", "Stringer", "Avon"];

    assert.doesNotThrow(function () {
      wireCharEnum = stringEnum(wireCharacters);
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
      wireCharEnum = stringEnum.apply(null, wireCharacters);
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
    var myEnum = stringEnum({}, []);
    ["[object Object]", ""].forEach(function (key) {
      assert.doesNotThrow(function () {
        myEnum(key);
      })
    });
  });

});