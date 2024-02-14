// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):s.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,S=isNaN,x=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,o,a,l,s,f,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",s=1,f=0;f<r.length;f++)if(u(n=r[f]))l+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,S(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=O.exec(r);n;)(e=r.slice(i,O.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),i=O.lastIndex,n=O.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function P(r){var e,t;if(!F(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[A(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return T.apply(null,e)}var $,C=Object.prototype,I=C.toString,B=C.__defineGetter__,R=C.__defineSetter__,L=C.__lookupGetter__,G=C.__lookupSetter__;$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var N=$;function Z(r,e,t){N(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W=/./;function M(r){return"boolean"==typeof r}function U(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var X=U();function z(){return X&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,D=Object.prototype.hasOwnProperty;function H(r,e){return null!=r&&D.call(r,e)}var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"",Q=z()?function(r){var e,t,n;if(null==r)return q.call(r);t=r[K],e=H(r,K);try{r[K]=void 0}catch(e){return q.call(r)}return n=q.call(r),e?r[K]=t:delete r[K],n}:function(r){return q.call(r)},Y=Boolean,rr=Boolean.prototype.toString,er=z();function tr(r){return"object"==typeof r&&(r instanceof Y||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Q(r)))}function nr(r){return M(r)||tr(r)}function ir(){return new Function("return this;")()}Z(nr,"isPrimitive",M),Z(nr,"isObject",tr);var or="object"==typeof self?self:null,ar="object"==typeof window?window:null,cr="object"==typeof globalThis?globalThis:null,ur=function(r){if(arguments.length){if(!M(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ir()}if(cr)return cr;if(or)return or;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=ur.document&&ur.document.childNodes,sr=Int8Array;function fr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;Z(fr,"REGEXP",pr);var gr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Q(r)};function dr(r){return null!==r&&"object"==typeof r}function br(r){var e,t,n,i;if(("Object"===(t=Q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pr.exec(n.toString()))return e[1]}return dr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr));var yr="function"==typeof W||"object"==typeof sr||"function"==typeof lr?function(r){return br(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?br(r).toLowerCase():e};function hr(r){return"function"===yr(r)}var vr=/./,wr="function"==typeof Object.defineProperty?Object.defineProperty:null,mr=Object.defineProperty;function jr(r){return"number"==typeof r}function _r(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Er(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+_r(i):_r(i)+r,n&&(r="-"+r)),r}var Sr=String.prototype.toLowerCase,xr=String.prototype.toUpperCase;function kr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!jr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Er(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Er(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===xr.call(r.specifier)?xr.call(t):Sr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Tr(r){return"string"==typeof r}var Or=Math.abs,Vr=String.prototype.toLowerCase,Ar=String.prototype.toUpperCase,Fr=String.prototype.replace,Pr=/e\+(\d)$/,$r=/e-(\d)$/,Cr=/^(\d+)$/,Ir=/^(\d+)e/,Br=/\.0$/,Rr=/\.0*e/,Lr=/(\..*[^0])0*e/;function Gr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!jr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Or(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Fr.call(t,Lr,"$1e"),t=Fr.call(t,Rr,"e"),t=Fr.call(t,Br,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Fr.call(t,Pr,"e+0$1"),t=Fr.call(t,$r,"e-0$1"),r.alternate&&(t=Fr.call(t,Cr,"$1."),t=Fr.call(t,Ir,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Ar.call(r.specifier)?Ar.call(t):Vr.call(t)}function Nr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Zr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Nr(n):Nr(n)+r}var Wr=String.fromCharCode,Mr=isNaN,Ur=Array.isArray;function Xr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function zr(r){var e,t,n,i,o,a,c,u,l;if(!Ur(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(Tr(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=Xr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Mr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Mr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=kr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Mr(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Mr(o)?String(n.arg):Wr(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Gr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Er(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Zr(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var qr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Dr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Hr(r){var e,t,n,i;for(t=[],i=0,n=qr.exec(r);n;)(e=r.slice(i,qr.lastIndex-n[0].length)).length&&t.push(e),t.push(Dr(n)),i=qr.lastIndex,n=qr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Jr(r){return"string"==typeof r}function Kr(r){var e,t;if(!Jr(r))throw new TypeError(Kr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Hr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return zr.apply(null,e)}var Qr,Yr=Object.prototype,re=Yr.toString,ee=Yr.__defineGetter__,te=Yr.__defineSetter__,ne=Yr.__lookupGetter__,ie=Yr.__lookupSetter__;Qr=function(){try{return wr({},"x",{}),!0}catch(r){return!1}}()?mr:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===re.call(r))throw new TypeError(Kr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===re.call(t))throw new TypeError(Kr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(ne.call(r,e)||ie.call(r,e)?(n=r.__proto__,r.__proto__=Yr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&ee&&ee.call(r,e,t.get),a&&te&&te.call(r,e,t.set),r};var oe=Qr;function ae(r,e,t){oe(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ce(r){return"boolean"==typeof r}var ue=U();function le(){return ue&&"symbol"==typeof Symbol.toStringTag}var se=Object.prototype.toString,fe="function"==typeof Symbol?Symbol:void 0,pe="function"==typeof fe?fe.toStringTag:"",ge=le()?function(r){var e,t,n;if(null==r)return se.call(r);t=r[pe],e=H(r,pe);try{r[pe]=void 0}catch(e){return se.call(r)}return n=se.call(r),e?r[pe]=t:delete r[pe],n}:function(r){return se.call(r)},de=Boolean,be=Boolean.prototype.toString,ye=le();function he(r){return"object"==typeof r&&(r instanceof de||(ye?function(r){try{return be.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===ge(r)))}function ve(r){return ce(r)||he(r)}function we(){return new Function("return this;")()}ae(ve,"isPrimitive",ce),ae(ve,"isObject",he);var me="object"==typeof self?self:null,je="object"==typeof window?window:null,_e="object"==typeof globalThis?globalThis:null,Ee=function(r){if(arguments.length){if(!ce(r))throw new TypeError(Kr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return we()}if(_e)return _e;if(me)return me;if(je)return je;throw new Error("unexpected error. Unable to resolve global object.")}(),Se=Ee.document&&Ee.document.childNodes,xe=Int8Array;function ke(){return/^\s*function\s*([^(]*)/i}var Te=/^\s*function\s*([^(]*)/i;ae(ke,"REGEXP",Te);var Oe=Array.isArray?Array.isArray:function(r){return"[object Array]"===ge(r)};function Ve(r){return null!==r&&"object"==typeof r}function Ae(r){var e,t,n,i;if(("Object"===(t=ge(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Te.exec(n.toString()))return e[1]}return Ve(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ae(Ve,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Kr("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Oe(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ve));var Fe="function"==typeof vr||"object"==typeof xe||"function"==typeof Se?function(r){return Ae(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Ae(r).toLowerCase():e};function Pe(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&function(r){return"function"===Fe(r)}(r.next)}function $e(r){return"number"==typeof r}var Ce=Number,Ie=Ce.prototype.toString,Be=z();function Re(r){return"object"==typeof r&&(r instanceof Ce||(Be?function(r){try{return Ie.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Q(r)))}function Le(r){return $e(r)||Re(r)}Z(Le,"isPrimitive",$e),Z(Le,"isObject",Re);var Ge,Ne="function"==typeof J&&"symbol"==typeof J("foo")&&H(J,"iterator")&&"symbol"==typeof J.iterator?Symbol.iterator:null,Ze=Object,We=Object.getPrototypeOf;Ge=hr(Object.getPrototypeOf)?We:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Me=Ge,Ue=Object.prototype;function Xe(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!gr(r)}(r)&&(e=function(r){return null==r?null:(r=Ze(r),Me(r))}(r),!e||!H(r,"constructor")&&H(e,"constructor")&&hr(e.constructor)&&"[object Function]"===Q(e.constructor)&&H(e,"isPrototypeOf")&&hr(e.isPrototypeOf)&&(e===Ue||function(r){var e;for(e in r)if(!H(r,e))return!1;return!0}(r)))}function ze(r,e){return Xe(e)?(H(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(P("invalid argument. Options argument must be an object. Value: `%s`.",e))}function qe(r,e,t){var n,i,o,a;if(!Pe(r))throw new TypeError(P("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!hr(e))throw new TypeError(P("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(o=ze(n,t)))throw o;return Z(i={},"next",c),Z(i,"return",u),Ne&&hr(r[Ne])&&Z(i,Ne,l),i;function c(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:$e(t.value)?e(t.value):n.invalid,done:!1}}function u(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return qe(r[Ne](),e,n)}}var De=Math.floor;return function(r){return qe(r,De)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterFloor=e();
//# sourceMappingURL=browser.js.map
