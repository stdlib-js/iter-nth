"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=s(function(l,u){
var v=require('@stdlib/assert-is-iterator-like/dist'),o=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,a=require('@stdlib/error-tools-fmtprodmsg/dist');function m(r,e){var i,t;if(!v(r))throw new TypeError(a('0PT3v',r));if(!o(e))throw new TypeError(a('0PT45',e));for(i=0;;){if(i+=1,t=r.next(),t.done)return;if(i===e)return t.value}}u.exports=m
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
