// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var s=r,i=e.isPrimitive,o=t;var n=function(r,e){var t,n;if(!s(r))throw new TypeError(o("0Ce48",r));if(!i(e))throw new TypeError(o("0Ce4I",e));for(t=0;;){if(t+=1,(n=r.next()).done)return;if(t===e)return n.value}};export{n as default};
//# sourceMappingURL=index.mjs.map
