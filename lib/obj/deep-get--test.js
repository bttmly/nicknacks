var deepGet = require("./deep-get");
var assert = require("assert");

var testArr1 = [
  {prop: "value", nested: {otherProp: "otherValue"}},
  [1, 2, {nestedAgain: {}}]
];

var testObj1 = {
  arr: [["str"], 1, 2],
  str: "str",
  obj: { obj: {}, num: 1, bool: true }
};

describe("obj.deepGet()", function () {
  it("acting on objects", function () {
    assert.equal(deepGet(testObj1, "str"), testObj1.str);
    assert.equal(deepGet(testObj1, "arr[0][0]"), testObj1.arr[0][0]);
    assert.equal(deepGet(testObj1, "obj.obj"), testObj1.obj.obj);
    assert.equal(deepGet(testObj1, "obj.num"), testObj1.obj.num);
  });

  it("acting on arrays", function () {
    assert.equal(deepGet(testArr1, "[0]"), testArr1[0]);
    assert.equal(deepGet(testArr1, "[1]"), testArr1[1]);
    assert.equal(deepGet(testArr1, "[0].prop"), testArr1[0].prop);
    assert.equal(deepGet(testArr1, "[0].nested.otherProp"), testArr1[0].nested.otherProp);
    assert.equal(deepGet(testArr1, "[1][0]"), testArr1[1][0]);
    assert.equal(deepGet(testArr1, "[1][2].nestedAgain"), testArr1[1][2].nestedAgain);
  });

});