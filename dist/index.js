"use strict";var c=function(E,r){return function(){try{return r||E((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var y=c(function(S,f){
var g={Error:Error,TypeError:TypeError,SyntaxError:SyntaxError,ReferenceError:ReferenceError,URIError:URIError,EvalError:EvalError,RangeError:RangeError};f.exports=g
});var v=c(function(q,p){
var k=require('@stdlib/utils-keys/dist'),n=require('@stdlib/assert-is-string/dist').isPrimitive,R=y();function m(E,r){var i,s,a,t,e,o;if(r&&r.type&&n(r.message)&&(s=R[r.type],s)){for(t=new s(r.message),a=k(r),o=0;o<a.length;o++)if(e=a[o],!(e==="type"||e==="message"||e==="name")){if(e==="stack"){if(!n(r[e]))continue;i=!0}t[e]=r[e]}return!i&&n(t.stack)&&(t.stack=""),t}return r}p.exports=m
});var u=v();module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
