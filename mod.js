// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Object.keys(Object(r))}var t=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(r,t){return null!=r&&i.call(r,t)}var f="function"==typeof Symbol?Symbol.toStringTag:"";var c=n()?function(r){var t,e,n;if(null==r)return o.call(r);e=r[f],t=u(r,f);try{r[f]=void 0}catch(t){return o.call(r)}return n=o.call(r),t?r[f]=e:delete r[f],n}:function(r){return o.call(r)};function a(r){return"[object Arguments]"===c(r)}var l=function(){return a(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var s,y=Object.defineProperty,b=Object.prototype,v=b.toString,g=b.__defineGetter__,d=b.__defineSetter__,m=b.__lookupGetter__,h=b.__lookupSetter__;s=function(){try{return p({},"x",{}),!0}catch(r){return!1}}()?y:function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===v.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===v.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(m.call(r,t)||h.call(r,t)?(n=r.__proto__,r.__proto__=b,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&g&&g.call(r,t,e.get),u&&d&&d.call(r,t,e.set),r};var j=s;function w(r,t,e){j(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function E(r){return"string"==typeof r}var _=String.prototype.valueOf;var S=n();function O(r){return"object"==typeof r&&(r instanceof String||(S?function(r){try{return _.call(r),!0}catch(r){return!1}}(r):"[object String]"===c(r)))}function I(r){return E(r)||O(r)}function T(r){return"number"==typeof r}w(I,"isPrimitive",E),w(I,"isObject",O);var P=Number,A=P.prototype.toString;var k=n();function x(r){return"object"==typeof r&&(r instanceof P||(k?function(r){try{return A.call(r),!0}catch(r){return!1}}(r):"[object Number]"===c(r)))}function N(r){return T(r)||x(r)}function B(r){return r!=r}function V(r){return T(r)&&B(r)}function R(r){return x(r)&&B(r.valueOf())}function F(r){return V(r)||R(r)}w(N,"isPrimitive",T),w(N,"isObject",x),w(F,"isPrimitive",V),w(F,"isObject",R);var L=Number.POSITIVE_INFINITY,G=P.NEGATIVE_INFINITY,Y=Math.floor;function C(r){return Y(r)===r}function M(r){return r<L&&r>G&&C(r)}function U(r){return T(r)&&M(r)}function X(r){return x(r)&&M(r.valueOf())}function H(r){return U(r)||X(r)}w(H,"isPrimitive",U),w(H,"isObject",X);var W=Object.prototype.propertyIsEnumerable;var D=!W.call("beep","0");function q(r,t){var e;return null!=r&&(!(e=W.call(r,t))&&D&&I(r)?!V(t=+t)&&U(t)&&t>=0&&t<r.length:e)}var z=Array.isArray?Array.isArray:function(r){return"[object Array]"===c(r)};var J=l?a:function(r){return null!==r&&"object"==typeof r&&!z(r)&&"number"==typeof r.length&&C(r.length)&&r.length>=0&&r.length<=4294967295&&u(r,"callee")&&!q(r,"callee")},K=Array.prototype.slice;function Q(r){return null!==r&&"object"==typeof r}w(Q,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!z(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Q));var Z=q((function(){}),"prototype"),$=!q({toString:null},"toString");function rr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&C(r.length)&&r.length>=0&&r.length<=9007199254740991}function tr(r,t,e){var n,o;if(!rr(r)&&!E(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!U(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(F(t)){for(;o<n;o++)if(F(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1}var er=/./;function nr(r){return"boolean"==typeof r}var or=Boolean.prototype.toString;var ir=n();function ur(r){return"object"==typeof r&&(r instanceof Boolean||(ir?function(r){try{return or.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===c(r)))}function fr(r){return nr(r)||ur(r)}function cr(){return new Function("return this;")()}w(fr,"isPrimitive",nr),w(fr,"isObject",ur);var ar="object"==typeof self?self:null,lr="object"==typeof window?window:null,pr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},sr="object"==typeof pr?pr:null;var yr=function(r){if(arguments.length){if(!nr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return cr()}if(ar)return ar;if(lr)return lr;if(sr)return sr;throw new Error("unexpected error. Unable to resolve global object.")}(),br=yr.document&&yr.document.childNodes,vr=Int8Array;function gr(){return/^\s*function\s*([^(]*)/i}var dr=/^\s*function\s*([^(]*)/i;function mr(r){var t,e,n,o;if(("Object"===(e=c(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=dr.exec(n.toString()))return t[1]}return Q(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}w(gr,"REGEXP",dr);var hr="function"==typeof er||"object"==typeof vr||"function"==typeof br?function(r){return mr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?mr(r).toLowerCase():t};function jr(r){return r.constructor&&r.constructor.prototype===r}var wr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Er="undefined"==typeof window?void 0:window;var _r=function(){var r;if("undefined"===hr(Er))return!1;for(r in Er)try{-1===tr(wr,r)&&u(Er,r)&&null!==Er[r]&&"object"===hr(Er[r])&&jr(Er[r])}catch(r){return!0}return!1}(),Sr="undefined"!=typeof window;var Or=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ir=t?function(){return 2!==(r(arguments)||"").length}(1,2)?function(t){return J(t)?r(K.call(t)):r(t)}:r:function(r){var t,e,n,o,i,f,c;if(o=[],J(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!u(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!Q(r))return o;e=Z&&n}for(i in r)e&&"prototype"===i||!u(r,i)||o.push(String(i));if($)for(t=function(r){if(!1===Sr&&!_r)return jr(r);try{return jr(r)}catch(r){return!1}}(r),c=0;c<Or.length;c++)f=Or[c],t&&"constructor"===f||!u(r,f)||o.push(String(f));return o},Tr={Error:Error,TypeError:TypeError,SyntaxError:SyntaxError,ReferenceError:ReferenceError,URIError:URIError,EvalError:EvalError,RangeError:RangeError};function Pr(r,t){var e,n,o,i,u,f;if(t&&t.type&&E(t.message)&&(n=Tr[t.type])){for(i=new n(t.message),o=Ir(t),f=0;f<o.length;f++)if("type"!==(u=o[f])&&"message"!==u&&"name"!==u){if("stack"===u){if(!E(t[u]))continue;e=!0}i[u]=t[u]}return!e&&E(i.stack)&&(i.stack=""),i}return t}export{Pr as default};
//# sourceMappingURL=mod.js.map
