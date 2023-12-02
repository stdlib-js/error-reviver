// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.1.0-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";var s={Error:Error,TypeError:TypeError,SyntaxError:SyntaxError,ReferenceError:ReferenceError,URIError:URIError,EvalError:EvalError,RangeError:RangeError};function t(t,n){var o,a,i,E,m,f;if(n&&n.type&&e(n.message)&&(a=s[n.type])){for(E=new a(n.message),i=r(n),f=0;f<i.length;f++)if("type"!==(m=i[f])&&"message"!==m&&"name"!==m){if("stack"===m){if(!e(n[m]))continue;o=!0}E[m]=n[m]}return!o&&e(E.stack)&&(E.stack=""),E}return n}export{t as default};
//# sourceMappingURL=index.mjs.map
