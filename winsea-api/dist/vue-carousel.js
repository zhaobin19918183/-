!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueCarousel",[],t):"object"==typeof exports?exports.VueCarousel=t():e.VueCarousel=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n.n(r),u=n(2),f=n.n(u),i={validateLowerCase:o.a,validatenum:f.a};t.default=i},function(e,t){function n(e){var t=/^[a-z]+$/;return console.log(e),t.test(e)}e.exports=n,e.exports.default=n},function(e,t){function n(e,t){var n=/[^\d.]/g;if(1==t){if(!n.test(e))return!1}else if(2==t&&(n=/[^\d]/g,!n.test(e)))return!1;return!0}e.exports=n,e.exports.default=n}])});
//# sourceMappingURL=vue-carousel.js.map