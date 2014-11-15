var assert = require("assert");

var simpleParseQuery = require("../simple-parse-query");

describe("simpleParseQuery()", function () {
  var url = "http://www.example.com/x/y/z?val1=a&val2=b&val3=3"
  var query = simpleParseQuery(url);
  it("works on basic URLs", function () {
    assert.deepEqual(query, {
      val1: "a",
      val2: "b",
      val3: "3"
    })
  });
});