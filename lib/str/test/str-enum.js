var assert = require("assert");

var stringEnum = require("../string-enum");

describe("str.stringEnum()", function () {
  var wireCharacters;

  beforeEach(function () {
    wireCharacters = ["McNulty", "Bunk", "Stringer", "Avon"];
  });


  it("accepts an array of strings", function () {
    assert.doesNotThrow(function () {
      wireCharEnum = stringEnum(wireCharacters);
    });

    wireCharacters.forEach(function (character) {
      assert.doesNotThrow(function () {
        wireCharEnum(character, true);
      });
    });

    wireCharacters.forEach(function (character) {
      assert.throws(function () {
        var letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        wireCharEnum(character + letter, true);
      });
    });
  });

  it("accepts an list of string arguments", function () {
    assert.doesNotThrow(function () {
      wireCharEnum = stringEnum.apply(null, wireCharacters);
    });

    wireCharacters.forEach(function (character) {
      assert.doesNotThrow(function () {
        wireCharEnum(character, true);
      });
    });

    wireCharacters.forEach(function (character) {
      assert.throws(function () {
        var letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        wireCharEnum(character + letter, true);
      });
    });
  });

  it("coerces items to strings with String()", function () {
    var myEnum = stringEnum({}, [], {toString: function () { return "asdf"; }});
    ["[object Object]", "", "asdf"].forEach(function (key) {
      assert.doesNotThrow(function () {
        myEnum(key, true);
      })
    });
  });

});