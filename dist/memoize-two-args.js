!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.memoizeTwoArgs={})}(this,function(e){"use strict";e.default=function(e){var t=function(e){var t=new e;return{get:function(e,n){var o=t.get(e);return void 0===o?o:o.get(n)},set:function(n,o,r){var i=t.get(n);if(void 0===i){var u=new e;u.set(o,r),t.set(n,u)}else i.set(o,r);return r}}}(arguments.length>1&&void 0!==arguments[1]?arguments[1]:WeakMap);return function(n,o){var r=t.get(n,o);return void 0===r?t.set(n,o,e(n,o)):r}},Object.defineProperty(e,"__esModule",{value:!0})});
