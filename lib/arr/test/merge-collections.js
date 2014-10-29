var assert = require("assert");

var mergeCollections = require("../merge-collections");

var byId = [
  [{id: 1, name: "Alan"}, {id: 2, name: "Bob"}, {id: 3, name: "Charlie"}], 
  [{id: 3, age: 20}, {id: 1, age: 30}, {id: 2, age: 40}], 
  [{id: 2, hair: "brown"}, {id: 3, hair: "black"}, {id: 1, hair: "blond"}],
  [{id: 1, height: 70}, {id: 2, height: 72}, {id: 3, height: 74}]
];

var byFullName = [
  [
    {firstName: "John", lastName: "Smith", age: 20},
    {firstName: "Jane", lastName: "Smith", age: 30},
    {firstName: "John", lastName: "Doe", age: 40}
  ], [
    {firstName: "Jane", lastName: "Smith", hair: "brown"},
    {firstName: "John", lastName: "Doe", hair: "blond"},
    {firstName: "John", lastName: "Smith", hair: "black"}
  ], [
    {firstName: "John", lastName: "Doe", height: 72},
    {firstName: "Jane", lastName: "Smith", height: 70},
    {firstName: "John", lastName: "Smith", height: 74}
  ]
];

describe("arr.mergeCollections()", function () {
  it("merges collections by property name identifier", function () {
    assert.deepEqual(mergeCollections("id", byId), [
      {id: 1, name: "Alan", age: 30, hair: "blond", height: 70},
      {id: 2, name: "Bob", age: 40, hair: "brown", height: 72},
      {id: 3, name: "Charlie", age: 20, hair: "black", height: 74}
    ]);
  });

  it("merges collections by matching function", function () {
    assert.deepEqual(mergeCollections(function (a, b) {
      return a.firstName + " " + a.lastName === b.firstName + " " + b.lastName
    }, byFullName), [
      {firstName: "John", lastName: "Smith", age: 20, hair: "black", height: 74},
      {firstName: "Jane", lastName: "Smith", age: 30, hair: "brown", height: 70},
      {firstName: "John", lastName: "Doe", age: 40, hair: "blond", height: 72}
    ])
  });

});