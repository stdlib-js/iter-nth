// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function s(s,i){var o,n;if(!e(s))throw new TypeError(t("0Ce48",s));if(!r(i))throw new TypeError(t("0Ce4I",i));for(o=0;;){if(o+=1,(n=s.next()).done)return;if(o===i)return n.value}}export{s as default};
//# sourceMappingURL=index.mjs.map
