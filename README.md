# nicknacks [![Build Status](https://travis-ci.org/nickb1080/nicknacks.svg?branch=master)](https://travis-ci.org/nickb1080/nicknacks)

Nicknacks is a collection of JavaScript helper and utility functions that I've found myself using repeatedly. Generally, they're somewhat more specialized than what might be included in [Underscore](http://underscorejs.org/) or [Lodash](https://lodash.com/), although there's bound to be some overlap.

The plan is to put each utility in it's own file so that they can be `require`d individually into any project (specifically minimizing file size for client-side Browserify code). Further, each has or will soon have comprehensive tests.

## Organization

Helpers are organized into directories by domain. Generally, this means the type of object on which the function primarily acts (functions, strings, etc.). The `dom` folder is an exception in that it holds any code that needs a browser environment. This includes actual DOM selection or manipulation functions, as well as things that use [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API), like, say [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob).

### arr
- `mergeCollections()`

### func
- `curry()`
- `demethodize()`
- `applyConstructor()`

### obj
- `deepGet()`
- `getPrototypeChain()`
- `getConstructorChain()`
- `merge()`

### str
- `stringEnum()`
- `simpleParseQuery()`
- `letterCount()`

### date
- `makeDate()`
- `DateFormat()`

### dom
- `select()`
- `children()`
- `IE10orLess()`
- `downloadObj()`