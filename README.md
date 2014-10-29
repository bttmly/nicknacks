# nicknacks

Nicknacks is a collection of JavaScript helper and utility functions that I've found myself using repeatedly. Generally, they're somewhat more specialized than what might be included in [Underscore](http://underscorejs.org/) or [Lodash](https://lodash.com/), although there's bound to be some overlap.

The plan is to put each utility in it's own file so that they can be `require`d individually into any project (specifically minimizing file size for client-side Browserify code). Further, each has or will soon have comprehensive tests.