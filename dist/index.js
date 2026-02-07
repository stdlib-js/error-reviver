"use strict";var c=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var y=c(function(S,f){
var g={Error:Error,TypeError:TypeError,SyntaxError:SyntaxError,ReferenceError:ReferenceError,URIError:URIError,EvalError:EvalError,RangeError:RangeError};f.exports=g
});var v=c(function(q,p){
var k=require('@stdlib/utils-keys/dist'),a=require('@stdlib/assert-is-string/dist').isPrimitive,R=y();function m(n,r){var E,o,s,t,e,i;if(r&&r.type&&a(r.message)&&(o=R[r.type],o)){for(t=new o(r.message),s=k(r),i=0;i<s.length;i++)if(e=s[i],!(e==="type"||e==="message"||e==="name")){if(e==="stack"){if(!a(r[e]))continue;E=!0}t[e]=r[e]}return!E&&a(t.stack)&&(t.stack=""),t}return r}p.exports=m
});var u=v();module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
