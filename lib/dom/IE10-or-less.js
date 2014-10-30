// http://stackoverflow.com/questions/16135814/check-for-ie-10

"use strict";

var isTheBrowser = false;
var actualVersion = null;

var jscriptMap = {
  "5.5": "5.5",
  "5.6": "6",
  "5.7": "7",
  "5.8": "8",
  "9": "9",
  "10": "10"
};

var jscriptVersion = new Function("/*@cc_on return @_jscript_version; @*/")();

if (jscriptVersion !== undefined) {
  isTheBrowser = true;
  actualVersion = jscriptMap[jscriptVersion];
}

module.exports = {
  isTheBrowser: isTheBrowser,
  actualVersion: actualVersion
};