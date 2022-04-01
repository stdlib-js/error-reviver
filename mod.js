// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var t=function(r){return Object.keys(Object(r))},e=t;var n=function(){return function(){return 2!==(e(arguments)||"").length}(1,2)},o=void 0!==Object.keys;var i=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var u=function(){return i&&"symbol"==typeof Symbol.toStringTag},a=Object.prototype.toString,c=a;var f=function(r){return c.call(r)},l=Object.prototype.hasOwnProperty;var v=function(r,t){return null!=r&&l.call(r,t)},s="function"==typeof Symbol?Symbol.toStringTag:"",p=v,y=s,b=a;var g=f,m=function(r){var t,e,n;if(null==r)return b.call(r);e=r[y],t=p(r,y);try{r[y]=void 0}catch(t){return b.call(r)}return n=b.call(r),t?r[y]=e:delete r[y],n},d=u()?m:g,h=d;var j=function(r){return"[object Arguments]"===h(r)},w=j;var _=function(){return w(arguments)}(),E="function"==typeof Object.defineProperty?Object.defineProperty:null;var O=function(){try{return E({},"x",{}),!0}catch(r){return!1}},S=Object.defineProperty,P=Object.prototype,I=P.toString,T=P.__defineGetter__,k=P.__defineSetter__,A=P.__lookupGetter__,x=P.__lookupSetter__;var N=function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(A.call(r,t)||x.call(r,t)?(n=r.__proto__,r.__proto__=P,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&T&&T.call(r,t,e.get),u&&k&&k.call(r,t,e.set),r},B=S,R=N,V=O()?B:R;var F=function(r,t,e){V(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},G=F;var L=function(r){return"string"==typeof r},M=String.prototype.valueOf;var X=d,Y=function(r){try{return M.call(r),!0}catch(r){return!1}},C=u();var U=function(r){return"object"==typeof r&&(r instanceof String||(C?Y(r):"[object String]"===X(r)))},D=L,H=U;var W=G,z=function(r){return D(r)||H(r)},q=U;W(z,"isPrimitive",L),W(z,"isObject",q);var J=z;var K=function(r){return"number"==typeof r},Q=Number,Z=Q.prototype.toString;var $=d,rr=Q,tr=function(r){try{return Z.call(r),!0}catch(r){return!1}},er=u();var nr=function(r){return"object"==typeof r&&(r instanceof rr||(er?tr(r):"[object Number]"===$(r)))},or=K,ir=nr;var ur=G,ar=function(r){return or(r)||ir(r)},cr=nr;ur(ar,"isPrimitive",K),ur(ar,"isObject",cr);var fr=ar;var lr=function(r){return r!=r},vr=fr.isPrimitive,sr=lr;var pr=function(r){return vr(r)&&sr(r)},yr=fr.isObject,br=lr;var gr=function(r){return yr(r)&&br(r.valueOf())},mr=pr,dr=gr;var hr=G,jr=function(r){return mr(r)||dr(r)},wr=gr;hr(jr,"isPrimitive",pr),hr(jr,"isObject",wr);var _r=jr,Er=Number.POSITIVE_INFINITY,Or=Q.NEGATIVE_INFINITY,Sr=Math.floor;var Pr=function(r){return Sr(r)===r},Ir=Er,Tr=Or,kr=Pr;var Ar=function(r){return r<Ir&&r>Tr&&kr(r)},xr=fr.isPrimitive,Nr=Ar;var Br=function(r){return xr(r)&&Nr(r)},Rr=fr.isObject,Vr=Ar;var Fr=function(r){return Rr(r)&&Vr(r.valueOf())},Gr=Br,Lr=Fr;var Mr=G,Xr=function(r){return Gr(r)||Lr(r)},Yr=Fr;Mr(Xr,"isPrimitive",Br),Mr(Xr,"isObject",Yr);var Cr,Ur=Xr,Dr=Object.prototype.propertyIsEnumerable;Cr=!Dr.call("beep","0");var Hr=J,Wr=_r.isPrimitive,zr=Ur.isPrimitive,qr=Dr,Jr=Cr;var Kr=function(r,t){var e;return null!=r&&(!(e=qr.call(r,t))&&Jr&&Hr(r)?!Wr(t=+t)&&zr(t)&&t>=0&&t<r.length:e)},Qr=Kr,Zr=d;var $r=Array.isArray?Array.isArray:function(r){return"[object Array]"===Zr(r)},rt=v,tt=Qr,et=$r,nt=Pr;var ot=_?j:function(r){return null!==r&&"object"==typeof r&&!et(r)&&"number"==typeof r.length&&nt(r.length)&&r.length>=0&&r.length<=4294967295&&rt(r,"callee")&&!tt(r,"callee")},it=ot,ut=t,at=Array.prototype.slice;var ct=function(r){return it(r)?ut(at.call(r)):ut(r)},ft=$r;var lt=function(r){return null!==r&&"object"==typeof r};G(lt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!ft(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(lt));var vt=lt;var st=Qr((function(){}),"prototype"),pt=!Qr({toString:null},"toString"),yt=Pr;var bt=_r,gt=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&yt(r.length)&&r.length>=0&&r.length<=9007199254740991},mt=J.isPrimitive,dt=Ur.isPrimitive;var ht=function(r,t,e){var n,o;if(!gt(r)&&!mt(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!dt(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(bt(t)){for(;o<n;o++)if(bt(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1},jt=/./;var wt=function(r){return"boolean"==typeof r},_t=Boolean.prototype.toString;var Et=d,Ot=function(r){try{return _t.call(r),!0}catch(r){return!1}},St=u();var Pt=function(r){return"object"==typeof r&&(r instanceof Boolean||(St?Ot(r):"[object Boolean]"===Et(r)))},It=wt,Tt=Pt;var kt=G,At=function(r){return It(r)||Tt(r)},xt=Pt;kt(At,"isPrimitive",wt),kt(At,"isObject",xt);var Nt="object"==typeof self?self:null,Bt="object"==typeof window?window:null,Rt=At.isPrimitive,Vt=function(){return new Function("return this;")()},Ft=Nt,Gt=Bt,Lt=r(Object.freeze({__proto__:null}));var Mt=function(r){if(arguments.length){if(!Rt(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Vt()}if(Ft)return Ft;if(Gt)return Gt;if(Lt)return Lt;throw new Error("unexpected error. Unable to resolve global object.")},Xt=Mt(),Yt=Xt.document&&Xt.document.childNodes,Ct=Int8Array,Ut=jt,Dt=Yt,Ht=Ct;var Wt=function(){return"function"==typeof Ut||"object"==typeof Ht||"function"==typeof Dt};var zt=function(){return/^\s*function\s*([^(]*)/i},qt=zt;G(qt,"REGEXP",zt());var Jt=vt;var Kt=d,Qt=qt.REGEXP,Zt=function(r){return Jt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var $t=function(r){var t,e,n;if(("Object"===(e=Kt(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Qt.exec(n.toString()))return t[1]}return Zt(r)?"Buffer":e},re=$t;var te=$t;var ee=function(r){var t;return null===r?"null":"object"===(t=typeof r)?re(r).toLowerCase():t},ne=function(r){return te(r).toLowerCase()},oe=Wt()?ne:ee;var ie,ue=function(r){return r.constructor&&r.constructor.prototype===r},ae="undefined"==typeof window?void 0:window,ce=v,fe=ht,le=oe,ve=ue,se=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],pe=ae;ie=function(){var r;if("undefined"===le(pe))return!1;for(r in pe)try{-1===fe(se,r)&&ce(pe,r)&&null!==pe[r]&&"object"===le(pe[r])&&ve(pe[r])}catch(r){return!0}return!1}();var ye="undefined"!=typeof window,be=ie,ge=ue,me=ye;var de=vt,he=v,je=ot,we=st,_e=pt,Ee=function(r){if(!1===me&&!be)return ge(r);try{return ge(r)}catch(r){return!1}},Oe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Se,Pe=t,Ie=ct,Te=function(r){var t,e,n,o,i,u,a;if(o=[],je(r)){for(a=0;a<r.length;a++)o.push(a.toString());return o}if("string"==typeof r){if(r.length>0&&!he(r,"0"))for(a=0;a<r.length;a++)o.push(a.toString())}else{if(!1===(n="function"==typeof r)&&!de(r))return o;e=we&&n}for(i in r)e&&"prototype"===i||!he(r,i)||o.push(String(i));if(_e)for(t=Ee(r),a=0;a<Oe.length;a++)u=Oe[a],t&&"constructor"===u||!he(r,u)||o.push(String(u));return o};Se=o?n()?Ie:Pe:Te;var ke={Error:Error,TypeError:TypeError,SyntaxError:SyntaxError,ReferenceError:ReferenceError,URIError:URIError,EvalError:EvalError,RangeError:RangeError},Ae=Se,xe=J.isPrimitive,Ne=ke;var Be=function(r,t){var e,n,o,i,u,a;if(t&&t.type&&xe(t.message)&&(n=Ne[t.type])){for(i=new n(t.message),o=Ae(t),a=0;a<o.length;a++)if("type"!==(u=o[a])&&"message"!==u&&"name"!==u){if("stack"===u){if(!xe(t[u]))continue;e=!0}i[u]=t[u]}return!e&&xe(i.stack)&&(i.stack=""),i}return t},Re=Be;export{Re as default};
//# sourceMappingURL=mod.js.map