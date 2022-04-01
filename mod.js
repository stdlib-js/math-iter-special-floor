// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){if(t.__esModule)return t;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(t){return!1}},n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,a=o.__lookupGetter__,f=o.__lookupSetter__;var l=function(t,r,e){var n,l,v,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(t,r)||f.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),v="get"in e,y="set"in e,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(t,r,e.get),y&&c&&c.call(t,r,e.set),t},v=n,y=l,p=e()?v:y;var b=function(t,r,e){p(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},s=b,m=/./;var d=function(t){return"boolean"==typeof t};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return j&&"symbol"==typeof Symbol.toStringTag},g=Object.prototype.toString,w=g;var O=function(t){return w.call(t)},h=Object.prototype.hasOwnProperty;var S=function(t,r){return null!=t&&h.call(t,r)},P="function"==typeof Symbol?Symbol.toStringTag:"",E=S,A=P,T=g;var x=O,B=function(t){var r,e,n;if(null==t)return T.call(t);e=t[A],r=E(t,A);try{t[A]=void 0}catch(r){return T.call(t)}return n=T.call(t),r?t[A]=e:delete t[A],n},V=_()?B:x,F=Boolean.prototype.toString;var M=V,N=function(t){try{return F.call(t),!0}catch(t){return!1}},k=_();var G=function(t){return"object"==typeof t&&(t instanceof Boolean||(k?N(t):"[object Boolean]"===M(t)))},C=d,L=G;var R=s,X=function(t){return C(t)||L(t)},z=G;R(X,"isPrimitive",d),R(X,"isObject",z);var D="object"==typeof self?self:null,I="object"==typeof window?window:null,U=X.isPrimitive,q=function(){return new Function("return this;")()},H=D,J=I,K=t(Object.freeze({__proto__:null}));var Q=function(t){if(arguments.length){if(!U(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return q()}if(H)return H;if(J)return J;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")},W=Q(),Y=W.document&&W.document.childNodes,Z=Int8Array,$=m,tt=Y,rt=Z;var et=function(){return"function"==typeof $||"object"==typeof rt||"function"==typeof tt};var nt=function(){return/^\s*function\s*([^(]*)/i},ot=nt;s(ot,"REGEXP",nt());var ut=ot,it=V;var ct=Array.isArray?Array.isArray:function(t){return"[object Array]"===it(t)},at=ct;var ft=function(t){return null!==t&&"object"==typeof t};s(ft,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!at(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(ft));var lt=ft;var vt=V,yt=ut.REGEXP,pt=function(t){return lt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var bt=function(t){var r,e,n;if(("Object"===(e=vt(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=yt.exec(n.toString()))return r[1]}return pt(t)?"Buffer":e},st=bt;var mt=bt;var dt=function(t){var r;return null===t?"null":"object"===(r=typeof t)?st(t).toLowerCase():r},jt=function(t){return mt(t).toLowerCase()},_t=et()?jt:dt;var gt=function(t){return"function"===_t(t)},wt=gt;var Ot=function(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&wt(t.next)};var ht=function(t){return"number"==typeof t},St=Number,Pt=St.prototype.toString;var Et=V,At=St,Tt=function(t){try{return Pt.call(t),!0}catch(t){return!1}},xt=_();var Bt=function(t){return"object"==typeof t&&(t instanceof At||(xt?Tt(t):"[object Number]"===Et(t)))},Vt=ht,Ft=Bt;var Mt=s,Nt=function(t){return Vt(t)||Ft(t)},kt=Bt;Mt(Nt,"isPrimitive",ht),Mt(Nt,"isObject",kt);var Gt=Nt,Ct=S;var Lt=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Ct(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Rt=ct;var Xt=function(t){return"object"==typeof t&&null!==t&&!Rt(t)},zt=Object.getPrototypeOf;var Dt=function(t){return t.__proto__},It=V,Ut=Dt;var qt=function(t){var r=Ut(t);return r||null===r?r:"[object Function]"===It(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Ht=zt,Jt=qt,Kt=gt(Object.getPrototypeOf)?Ht:Jt;var Qt=Xt,Wt=gt,Yt=function(t){return null==t?null:(t=Object(t),Kt(t))},Zt=S,$t=V,tr=Object.prototype;var rr=function(t){var r;return!!Qt(t)&&(!(r=Yt(t))||!Zt(t,"constructor")&&Zt(r,"constructor")&&Wt(r.constructor)&&"[object Function]"===$t(r.constructor)&&Zt(r,"isPrototypeOf")&&Wt(r.isPrototypeOf)&&(r===tr||function(t){var r;for(r in t)if(!Zt(t,r))return!1;return!0}(t)))},er=rr,nr=S;var or=s,ur=gt,ir=Ot,cr=Gt.isPrimitive,ar=Lt,fr=function(t,r){return er(r)?(nr(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")};var lr=function t(r,e,n){var o,u,i,c;if(!ir(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!ur(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");if(o={invalid:NaN},arguments.length>2&&(i=fr(o,n)))throw i;return or(u={},"next",a),or(u,"return",f),ar&&ur(r[ar])&&or(u,ar,l),u;function a(){var t;return c?{done:!0}:(t=r.next()).done?(c=!0,t):{value:cr(t.value)?e(t.value):o.invalid,done:!1}}function f(t){return c=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return t(r[ar](),e,o)}},vr=lr,yr=Math.floor,pr=vr,br=yr;var sr=function(t){return pr(t,br)},mr=sr;export{mr as default};
//# sourceMappingURL=mod.js.map
