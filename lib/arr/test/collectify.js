var assert = require("assert");

var collectify = require("../collectify");

var headers = ["firstName", "lastName", "age", "hair", "height"];

var rows = [
  ["John", "Smith", 20, "black", 74],
  ["Jane", "Smith", 30, "brown", 70],
  ["John", "Doe", 40, "blond", 72]
];

var collection = [
  {firstName: "John", lastName: "Smith", age: 20, hair: "black", height: 74},
  {firstName: "Jane", lastName: "Smith", age: 30, hair: "brown", height: 70},
  {firstName: "John", lastName: "Doe", age: 40, hair: "blond", height: 72}
];

describe("collectify()", function () {
  it("combines headers and rows into a collection of objects", function () {
    assert.deepEqual(collectify(headers, rows), collection);
  });
  it("throws if headers and row lengths aren't all the same", function () {
    assert.throws(function () {
      var badHeaders = headers.slice(1);
      collectify(badHeaders, rows);
    });
    assert.throws(function () {
      var badRows = rows.slice()
      badRows[0] = badRows[0].slice(1);
      collectify(headers, badRows);
    });
  });
});