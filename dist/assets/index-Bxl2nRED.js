function yA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function d0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var f0={exports:{}},Kc={},p0={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sl=Symbol.for("react.element"),vA=Symbol.for("react.portal"),wA=Symbol.for("react.fragment"),EA=Symbol.for("react.strict_mode"),TA=Symbol.for("react.profiler"),IA=Symbol.for("react.provider"),SA=Symbol.for("react.context"),CA=Symbol.for("react.forward_ref"),RA=Symbol.for("react.suspense"),AA=Symbol.for("react.memo"),kA=Symbol.for("react.lazy"),My=Symbol.iterator;function NA(t){return t===null||typeof t!="object"?null:(t=My&&t[My]||t["@@iterator"],typeof t=="function"?t:null)}var m0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g0=Object.assign,_0={};function Zi(t,e,n){this.props=t,this.context=e,this.refs=_0,this.updater=n||m0}Zi.prototype.isReactComponent={};Zi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function y0(){}y0.prototype=Zi.prototype;function Xp(t,e,n){this.props=t,this.context=e,this.refs=_0,this.updater=n||m0}var Jp=Xp.prototype=new y0;Jp.constructor=Xp;g0(Jp,Zi.prototype);Jp.isPureReactComponent=!0;var Vy=Array.isArray,v0=Object.prototype.hasOwnProperty,Zp={current:null},w0={key:!0,ref:!0,__self:!0,__source:!0};function E0(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)v0.call(e,r)&&!w0.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:sl,type:t,key:i,ref:o,props:s,_owner:Zp.current}}function PA(t,e){return{$$typeof:sl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function em(t){return typeof t=="object"&&t!==null&&t.$$typeof===sl}function xA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jy=/\/+/g;function md(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xA(""+t.key):e.toString(36)}function Eu(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case sl:case vA:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+md(o,0):r,Vy(s)?(n="",t!=null&&(n=t.replace(jy,"$&/")+"/"),Eu(s,e,n,"",function(c){return c})):s!=null&&(em(s)&&(s=PA(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(jy,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Vy(t))for(var a=0;a<t.length;a++){i=t[a];var u=r+md(i,a);o+=Eu(i,e,n,u,s)}else if(u=NA(t),typeof u=="function")for(t=u.call(t),a=0;!(i=t.next()).done;)i=i.value,u=r+md(i,a++),o+=Eu(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Gl(t,e,n){if(t==null)return t;var r=[],s=0;return Eu(t,r,"","",function(i){return e.call(n,i,s++)}),r}function bA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},Tu={transition:null},DA={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:Tu,ReactCurrentOwner:Zp};function T0(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:Gl,forEach:function(t,e,n){Gl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Gl(t,function(){e++}),e},toArray:function(t){return Gl(t,function(e){return e})||[]},only:function(t){if(!em(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=Zi;oe.Fragment=wA;oe.Profiler=TA;oe.PureComponent=Xp;oe.StrictMode=EA;oe.Suspense=RA;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DA;oe.act=T0;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=g0({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Zp.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)v0.call(e,u)&&!w0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:sl,type:t.type,key:s,ref:i,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:SA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:IA,_context:t},t.Consumer=t};oe.createElement=E0;oe.createFactory=function(t){var e=E0.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:CA,render:t}};oe.isValidElement=em;oe.lazy=function(t){return{$$typeof:kA,_payload:{_status:-1,_result:t},_init:bA}};oe.memo=function(t,e){return{$$typeof:AA,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=Tu.transition;Tu.transition={};try{t()}finally{Tu.transition=e}};oe.unstable_act=T0;oe.useCallback=function(t,e){return kt.current.useCallback(t,e)};oe.useContext=function(t){return kt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return kt.current.useEffect(t,e)};oe.useId=function(){return kt.current.useId()};oe.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return kt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};oe.useRef=function(t){return kt.current.useRef(t)};oe.useState=function(t){return kt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return kt.current.useTransition()};oe.version="18.3.1";p0.exports=oe;var O=p0.exports;const tm=d0(O),OA=yA({__proto__:null,default:tm},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LA=O,MA=Symbol.for("react.element"),VA=Symbol.for("react.fragment"),jA=Object.prototype.hasOwnProperty,FA=LA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,UA={key:!0,ref:!0,__self:!0,__source:!0};function I0(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)jA.call(e,r)&&!UA.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:MA,type:t,key:i,ref:o,props:s,_owner:FA.current}}Kc.Fragment=VA;Kc.jsx=I0;Kc.jsxs=I0;f0.exports=Kc;var p=f0.exports,df={},S0={exports:{}},Yt={},C0={exports:{}},R0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,M){var H=j.length;j.push(M);e:for(;0<H;){var ae=H-1>>>1,te=j[ae];if(0<s(te,M))j[ae]=M,j[H]=te,H=ae;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var M=j[0],H=j.pop();if(H!==M){j[0]=H;e:for(var ae=0,te=j.length,_e=te>>>1;ae<_e;){var Bt=2*(ae+1)-1,Mn=j[Bt],Vn=Bt+1,jn=j[Vn];if(0>s(Mn,H))Vn<te&&0>s(jn,Mn)?(j[ae]=jn,j[Vn]=H,ae=Vn):(j[ae]=Mn,j[Bt]=H,ae=Bt);else if(Vn<te&&0>s(jn,H))j[ae]=jn,j[Vn]=H,ae=Vn;else break e}}return M}function s(j,M){var H=j.sortIndex-M.sortIndex;return H!==0?H:j.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,m=3,_=!1,T=!1,I=!1,N=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(j){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=j)r(c),M.sortIndex=M.expirationTime,e(u,M);else break;M=n(c)}}function b(j){if(I=!1,S(j),!T)if(n(u)!==null)T=!0,Ut(F);else{var M=n(c);M!==null&&zt(b,M.startTime-j)}}function F(j,M){T=!1,I&&(I=!1,E(w),w=-1),_=!0;var H=m;try{for(S(M),f=n(u);f!==null&&(!(f.expirationTime>M)||j&&!x());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,m=f.priorityLevel;var te=ae(f.expirationTime<=M);M=t.unstable_now(),typeof te=="function"?f.callback=te:f===n(u)&&r(u),S(M)}else r(u);f=n(u)}if(f!==null)var _e=!0;else{var Bt=n(c);Bt!==null&&zt(b,Bt.startTime-M),_e=!1}return _e}finally{f=null,m=H,_=!1}}var U=!1,R=null,w=-1,C=5,k=-1;function x(){return!(t.unstable_now()-k<C)}function P(){if(R!==null){var j=t.unstable_now();k=j;var M=!0;try{M=R(!0,j)}finally{M?A():(U=!1,R=null)}}else U=!1}var A;if(typeof y=="function")A=function(){y(P)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,tt=Te.port2;Te.port1.onmessage=P,A=function(){tt.postMessage(null)}}else A=function(){N(P,0)};function Ut(j){R=j,U||(U=!0,A())}function zt(j,M){w=N(function(){j(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){T||_||(T=!0,Ut(F))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(m){case 1:case 2:case 3:var M=3;break;default:M=m}var H=m;m=M;try{return j()}finally{m=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,M){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var H=m;m=j;try{return M()}finally{m=H}},t.unstable_scheduleCallback=function(j,M,H){var ae=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ae+H:ae):H=ae,j){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=H+te,j={id:d++,callback:M,priorityLevel:j,startTime:H,expirationTime:te,sortIndex:-1},H>ae?(j.sortIndex=H,e(c,j),n(u)===null&&j===n(c)&&(I?(E(w),w=-1):I=!0,zt(b,H-ae))):(j.sortIndex=te,e(u,j),T||_||(T=!0,Ut(F))),j},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(j){var M=m;return function(){var H=m;m=M;try{return j.apply(this,arguments)}finally{m=H}}}})(R0);C0.exports=R0;var zA=C0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BA=O,Qt=zA;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A0=new Set,Ea={};function Ws(t,e){bi(t,e),bi(t+"Capture",e)}function bi(t,e){for(Ea[t]=e,t=0;t<e.length;t++)A0.add(e[t])}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ff=Object.prototype.hasOwnProperty,$A=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fy={},Uy={};function WA(t){return ff.call(Uy,t)?!0:ff.call(Fy,t)?!1:$A.test(t)?Uy[t]=!0:(Fy[t]=!0,!1)}function HA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qA(t,e,n,r){if(e===null||typeof e>"u"||HA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Nt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new Nt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new Nt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new Nt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new Nt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new Nt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new Nt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new Nt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new Nt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new Nt(t,5,!1,t.toLowerCase(),null,!1,!1)});var nm=/[\-:]([a-z])/g;function rm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nm,rm);lt[e]=new Nt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nm,rm);lt[e]=new Nt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nm,rm);lt[e]=new Nt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new Nt(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new Nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new Nt(t,1,!1,t.toLowerCase(),null,!0,!0)});function sm(t,e,n,r){var s=lt.hasOwnProperty(e)?lt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qA(e,n,s,r)&&(n=null),r||s===null?WA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fr=BA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Kl=Symbol.for("react.element"),ii=Symbol.for("react.portal"),oi=Symbol.for("react.fragment"),im=Symbol.for("react.strict_mode"),pf=Symbol.for("react.profiler"),k0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),om=Symbol.for("react.forward_ref"),mf=Symbol.for("react.suspense"),gf=Symbol.for("react.suspense_list"),am=Symbol.for("react.memo"),Tr=Symbol.for("react.lazy"),P0=Symbol.for("react.offscreen"),zy=Symbol.iterator;function No(t){return t===null||typeof t!="object"?null:(t=zy&&t[zy]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,gd;function Go(t){if(gd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gd=e&&e[1]||""}return`
`+gd+t}var _d=!1;function yd(t,e){if(!t||_d)return"";_d=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{_d=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Go(t):""}function GA(t){switch(t.tag){case 5:return Go(t.type);case 16:return Go("Lazy");case 13:return Go("Suspense");case 19:return Go("SuspenseList");case 0:case 2:case 15:return t=yd(t.type,!1),t;case 11:return t=yd(t.type.render,!1),t;case 1:return t=yd(t.type,!0),t;default:return""}}function _f(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case oi:return"Fragment";case ii:return"Portal";case pf:return"Profiler";case im:return"StrictMode";case mf:return"Suspense";case gf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case N0:return(t.displayName||"Context")+".Consumer";case k0:return(t._context.displayName||"Context")+".Provider";case om:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case am:return e=t.displayName||null,e!==null?e:_f(t.type)||"Memo";case Tr:e=t._payload,t=t._init;try{return _f(t(e))}catch{}}return null}function KA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _f(e);case 8:return e===im?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function x0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function QA(t){var e=x0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ql(t){t._valueTracker||(t._valueTracker=QA(t))}function b0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=x0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $u(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yf(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function By(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function D0(t,e){e=e.checked,e!=null&&sm(t,"checked",e,!1)}function vf(t,e){D0(t,e);var n=Xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wf(t,e.type,n):e.hasOwnProperty("defaultValue")&&wf(t,e.type,Xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $y(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wf(t,e,n){(e!=="number"||$u(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ko=Array.isArray;function vi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ef(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Ko(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xr(n)}}function O0(t,e){var n=Xr(e.value),r=Xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function L0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?L0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Yl,M0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Yl=Yl||document.createElement("div"),Yl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},YA=["Webkit","ms","Moz","O"];Object.keys(ta).forEach(function(t){YA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ta[e]=ta[t]})});function V0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ta.hasOwnProperty(t)&&ta[t]?(""+e).trim():e+"px"}function j0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=V0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var XA=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function If(t,e){if(e){if(XA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Sf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cf=null;function lm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rf=null,wi=null,Ei=null;function qy(t){if(t=al(t)){if(typeof Rf!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Zc(e),Rf(t.stateNode,t.type,e))}}function F0(t){wi?Ei?Ei.push(t):Ei=[t]:wi=t}function U0(){if(wi){var t=wi,e=Ei;if(Ei=wi=null,qy(t),e)for(t=0;t<e.length;t++)qy(e[t])}}function z0(t,e){return t(e)}function B0(){}var vd=!1;function $0(t,e,n){if(vd)return t(e,n);vd=!0;try{return z0(t,e,n)}finally{vd=!1,(wi!==null||Ei!==null)&&(B0(),U0())}}function Ia(t,e){var n=t.stateNode;if(n===null)return null;var r=Zc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Af=!1;if(er)try{var Po={};Object.defineProperty(Po,"passive",{get:function(){Af=!0}}),window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{Af=!1}function JA(t,e,n,r,s,i,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var na=!1,Wu=null,Hu=!1,kf=null,ZA={onError:function(t){na=!0,Wu=t}};function ek(t,e,n,r,s,i,o,a,u){na=!1,Wu=null,JA.apply(ZA,arguments)}function tk(t,e,n,r,s,i,o,a,u){if(ek.apply(this,arguments),na){if(na){var c=Wu;na=!1,Wu=null}else throw Error(B(198));Hu||(Hu=!0,kf=c)}}function Hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function W0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gy(t){if(Hs(t)!==t)throw Error(B(188))}function nk(t){var e=t.alternate;if(!e){if(e=Hs(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Gy(s),t;if(i===r)return Gy(s),e;i=i.sibling}throw Error(B(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function H0(t){return t=nk(t),t!==null?q0(t):null}function q0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=q0(t);if(e!==null)return e;t=t.sibling}return null}var G0=Qt.unstable_scheduleCallback,Ky=Qt.unstable_cancelCallback,rk=Qt.unstable_shouldYield,sk=Qt.unstable_requestPaint,Ue=Qt.unstable_now,ik=Qt.unstable_getCurrentPriorityLevel,um=Qt.unstable_ImmediatePriority,K0=Qt.unstable_UserBlockingPriority,qu=Qt.unstable_NormalPriority,ok=Qt.unstable_LowPriority,Q0=Qt.unstable_IdlePriority,Qc=null,Cn=null;function ak(t){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(Qc,t,void 0,(t.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:ck,lk=Math.log,uk=Math.LN2;function ck(t){return t>>>=0,t===0?32:31-(lk(t)/uk|0)|0}var Xl=64,Jl=4194304;function Qo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Gu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=Qo(a):(i&=o,i!==0&&(r=Qo(i)))}else o=n&~s,o!==0?r=Qo(o):i!==0&&(r=Qo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pn(e),s=1<<n,r|=t[n],e&=~s;return r}function hk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-pn(i),a=1<<o,u=s[o];u===-1?(!(a&n)||a&r)&&(s[o]=hk(a,e)):u<=e&&(t.expiredLanes|=a),i&=~a}}function Nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Y0(){var t=Xl;return Xl<<=1,!(Xl&4194240)&&(Xl=64),t}function wd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function il(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pn(e),t[e]=n}function fk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-pn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function cm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var me=0;function X0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var J0,hm,Z0,eT,tT,Pf=!1,Zl=[],Lr=null,Mr=null,Vr=null,Sa=new Map,Ca=new Map,Sr=[],pk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qy(t,e){switch(t){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":Sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function xo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=al(e),e!==null&&hm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function mk(t,e,n,r,s){switch(e){case"focusin":return Lr=xo(Lr,t,e,n,r,s),!0;case"dragenter":return Mr=xo(Mr,t,e,n,r,s),!0;case"mouseover":return Vr=xo(Vr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Sa.set(i,xo(Sa.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Ca.set(i,xo(Ca.get(i)||null,t,e,n,r,s)),!0}return!1}function nT(t){var e=vs(t.target);if(e!==null){var n=Hs(e);if(n!==null){if(e=n.tag,e===13){if(e=W0(n),e!==null){t.blockedOn=e,tT(t.priority,function(){Z0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Iu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Cf=r,n.target.dispatchEvent(r),Cf=null}else return e=al(n),e!==null&&hm(e),t.blockedOn=n,!1;e.shift()}return!0}function Yy(t,e,n){Iu(t)&&n.delete(e)}function gk(){Pf=!1,Lr!==null&&Iu(Lr)&&(Lr=null),Mr!==null&&Iu(Mr)&&(Mr=null),Vr!==null&&Iu(Vr)&&(Vr=null),Sa.forEach(Yy),Ca.forEach(Yy)}function bo(t,e){t.blockedOn===e&&(t.blockedOn=null,Pf||(Pf=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,gk)))}function Ra(t){function e(s){return bo(s,t)}if(0<Zl.length){bo(Zl[0],t);for(var n=1;n<Zl.length;n++){var r=Zl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Lr!==null&&bo(Lr,t),Mr!==null&&bo(Mr,t),Vr!==null&&bo(Vr,t),Sa.forEach(e),Ca.forEach(e),n=0;n<Sr.length;n++)r=Sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Sr.length&&(n=Sr[0],n.blockedOn===null);)nT(n),n.blockedOn===null&&Sr.shift()}var Ti=fr.ReactCurrentBatchConfig,Ku=!0;function _k(t,e,n,r){var s=me,i=Ti.transition;Ti.transition=null;try{me=1,dm(t,e,n,r)}finally{me=s,Ti.transition=i}}function yk(t,e,n,r){var s=me,i=Ti.transition;Ti.transition=null;try{me=4,dm(t,e,n,r)}finally{me=s,Ti.transition=i}}function dm(t,e,n,r){if(Ku){var s=xf(t,e,n,r);if(s===null)Pd(t,e,r,Qu,n),Qy(t,r);else if(mk(s,t,e,n,r))r.stopPropagation();else if(Qy(t,r),e&4&&-1<pk.indexOf(t)){for(;s!==null;){var i=al(s);if(i!==null&&J0(i),i=xf(t,e,n,r),i===null&&Pd(t,e,r,Qu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Pd(t,e,r,null,n)}}var Qu=null;function xf(t,e,n,r){if(Qu=null,t=lm(r),t=vs(t),t!==null)if(e=Hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=W0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qu=t,null}function rT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ik()){case um:return 1;case K0:return 4;case qu:case ok:return 16;case Q0:return 536870912;default:return 16}default:return 16}}var Pr=null,fm=null,Su=null;function sT(){if(Su)return Su;var t,e=fm,n=e.length,r,s="value"in Pr?Pr.value:Pr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Su=s.slice(t,1<r?1-r:void 0)}function Cu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function eu(){return!0}function Xy(){return!1}function Xt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?eu:Xy,this.isPropagationStopped=Xy,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eu)},persist:function(){},isPersistent:eu}),e}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pm=Xt(eo),ol=De({},eo,{view:0,detail:0}),vk=Xt(ol),Ed,Td,Do,Yc=De({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(Ed=t.screenX-Do.screenX,Td=t.screenY-Do.screenY):Td=Ed=0,Do=t),Ed)},movementY:function(t){return"movementY"in t?t.movementY:Td}}),Jy=Xt(Yc),wk=De({},Yc,{dataTransfer:0}),Ek=Xt(wk),Tk=De({},ol,{relatedTarget:0}),Id=Xt(Tk),Ik=De({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),Sk=Xt(Ik),Ck=De({},eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rk=Xt(Ck),Ak=De({},eo,{data:0}),Zy=Xt(Ak),kk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Pk[t])?!!e[t]:!1}function mm(){return xk}var bk=De({},ol,{key:function(t){if(t.key){var e=kk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Nk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mm,charCode:function(t){return t.type==="keypress"?Cu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dk=Xt(bk),Ok=De({},Yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ev=Xt(Ok),Lk=De({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mm}),Mk=Xt(Lk),Vk=De({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),jk=Xt(Vk),Fk=De({},Yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Uk=Xt(Fk),zk=[9,13,27,32],gm=er&&"CompositionEvent"in window,ra=null;er&&"documentMode"in document&&(ra=document.documentMode);var Bk=er&&"TextEvent"in window&&!ra,iT=er&&(!gm||ra&&8<ra&&11>=ra),tv=" ",nv=!1;function oT(t,e){switch(t){case"keyup":return zk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function aT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ai=!1;function $k(t,e){switch(t){case"compositionend":return aT(e);case"keypress":return e.which!==32?null:(nv=!0,tv);case"textInput":return t=e.data,t===tv&&nv?null:t;default:return null}}function Wk(t,e){if(ai)return t==="compositionend"||!gm&&oT(t,e)?(t=sT(),Su=fm=Pr=null,ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iT&&e.locale!=="ko"?null:e.data;default:return null}}var Hk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Hk[t.type]:e==="textarea"}function lT(t,e,n,r){F0(r),e=Yu(e,"onChange"),0<e.length&&(n=new pm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var sa=null,Aa=null;function qk(t){vT(t,0)}function Xc(t){var e=ci(t);if(b0(e))return t}function Gk(t,e){if(t==="change")return e}var uT=!1;if(er){var Sd;if(er){var Cd="oninput"in document;if(!Cd){var sv=document.createElement("div");sv.setAttribute("oninput","return;"),Cd=typeof sv.oninput=="function"}Sd=Cd}else Sd=!1;uT=Sd&&(!document.documentMode||9<document.documentMode)}function iv(){sa&&(sa.detachEvent("onpropertychange",cT),Aa=sa=null)}function cT(t){if(t.propertyName==="value"&&Xc(Aa)){var e=[];lT(e,Aa,t,lm(t)),$0(qk,e)}}function Kk(t,e,n){t==="focusin"?(iv(),sa=e,Aa=n,sa.attachEvent("onpropertychange",cT)):t==="focusout"&&iv()}function Qk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xc(Aa)}function Yk(t,e){if(t==="click")return Xc(e)}function Xk(t,e){if(t==="input"||t==="change")return Xc(e)}function Jk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _n=typeof Object.is=="function"?Object.is:Jk;function ka(t,e){if(_n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!ff.call(e,s)||!_n(t[s],e[s]))return!1}return!0}function ov(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function av(t,e){var n=ov(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ov(n)}}function hT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dT(){for(var t=window,e=$u();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$u(t.document)}return e}function _m(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Zk(t){var e=dT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&hT(n.ownerDocument.documentElement,n)){if(r!==null&&_m(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=av(n,i);var o=av(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var eN=er&&"documentMode"in document&&11>=document.documentMode,li=null,bf=null,ia=null,Df=!1;function lv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Df||li==null||li!==$u(r)||(r=li,"selectionStart"in r&&_m(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ia&&ka(ia,r)||(ia=r,r=Yu(bf,"onSelect"),0<r.length&&(e=new pm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=li)))}function tu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ui={animationend:tu("Animation","AnimationEnd"),animationiteration:tu("Animation","AnimationIteration"),animationstart:tu("Animation","AnimationStart"),transitionend:tu("Transition","TransitionEnd")},Rd={},fT={};er&&(fT=document.createElement("div").style,"AnimationEvent"in window||(delete ui.animationend.animation,delete ui.animationiteration.animation,delete ui.animationstart.animation),"TransitionEvent"in window||delete ui.transitionend.transition);function Jc(t){if(Rd[t])return Rd[t];if(!ui[t])return t;var e=ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fT)return Rd[t]=e[n];return t}var pT=Jc("animationend"),mT=Jc("animationiteration"),gT=Jc("animationstart"),_T=Jc("transitionend"),yT=new Map,uv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function is(t,e){yT.set(t,e),Ws(e,[t])}for(var Ad=0;Ad<uv.length;Ad++){var kd=uv[Ad],tN=kd.toLowerCase(),nN=kd[0].toUpperCase()+kd.slice(1);is(tN,"on"+nN)}is(pT,"onAnimationEnd");is(mT,"onAnimationIteration");is(gT,"onAnimationStart");is("dblclick","onDoubleClick");is("focusin","onFocus");is("focusout","onBlur");is(_T,"onTransitionEnd");bi("onMouseEnter",["mouseout","mouseover"]);bi("onMouseLeave",["mouseout","mouseover"]);bi("onPointerEnter",["pointerout","pointerover"]);bi("onPointerLeave",["pointerout","pointerover"]);Ws("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ws("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ws("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ws("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ws("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ws("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rN=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function cv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tk(r,e,void 0,t),t.currentTarget=null}function vT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&s.isPropagationStopped())break e;cv(s,a,c),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&s.isPropagationStopped())break e;cv(s,a,c),i=u}}}if(Hu)throw t=kf,Hu=!1,kf=null,t}function Se(t,e){var n=e[jf];n===void 0&&(n=e[jf]=new Set);var r=t+"__bubble";n.has(r)||(wT(e,t,2,!1),n.add(r))}function Nd(t,e,n){var r=0;e&&(r|=4),wT(n,t,r,e)}var nu="_reactListening"+Math.random().toString(36).slice(2);function Na(t){if(!t[nu]){t[nu]=!0,A0.forEach(function(n){n!=="selectionchange"&&(rN.has(n)||Nd(n,!1,t),Nd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nu]||(e[nu]=!0,Nd("selectionchange",!1,e))}}function wT(t,e,n,r){switch(rT(e)){case 1:var s=_k;break;case 4:s=yk;break;default:s=dm}n=s.bind(null,e,n,t),s=void 0,!Af||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Pd(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;a!==null;){if(o=vs(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}$0(function(){var c=i,d=lm(n),f=[];e:{var m=yT.get(t);if(m!==void 0){var _=pm,T=t;switch(t){case"keypress":if(Cu(n)===0)break e;case"keydown":case"keyup":_=Dk;break;case"focusin":T="focus",_=Id;break;case"focusout":T="blur",_=Id;break;case"beforeblur":case"afterblur":_=Id;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Jy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Ek;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Mk;break;case pT:case mT:case gT:_=Sk;break;case _T:_=jk;break;case"scroll":_=vk;break;case"wheel":_=Uk;break;case"copy":case"cut":case"paste":_=Rk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=ev}var I=(e&4)!==0,N=!I&&t==="scroll",E=I?m!==null?m+"Capture":null:m;I=[];for(var y=c,S;y!==null;){S=y;var b=S.stateNode;if(S.tag===5&&b!==null&&(S=b,E!==null&&(b=Ia(y,E),b!=null&&I.push(Pa(y,b,S)))),N)break;y=y.return}0<I.length&&(m=new _(m,T,null,n,d),f.push({event:m,listeners:I}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Cf&&(T=n.relatedTarget||n.fromElement)&&(vs(T)||T[tr]))break e;if((_||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,_?(T=n.relatedTarget||n.toElement,_=c,T=T?vs(T):null,T!==null&&(N=Hs(T),T!==N||T.tag!==5&&T.tag!==6)&&(T=null)):(_=null,T=c),_!==T)){if(I=Jy,b="onMouseLeave",E="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(I=ev,b="onPointerLeave",E="onPointerEnter",y="pointer"),N=_==null?m:ci(_),S=T==null?m:ci(T),m=new I(b,y+"leave",_,n,d),m.target=N,m.relatedTarget=S,b=null,vs(d)===c&&(I=new I(E,y+"enter",T,n,d),I.target=S,I.relatedTarget=N,b=I),N=b,_&&T)t:{for(I=_,E=T,y=0,S=I;S;S=Zs(S))y++;for(S=0,b=E;b;b=Zs(b))S++;for(;0<y-S;)I=Zs(I),y--;for(;0<S-y;)E=Zs(E),S--;for(;y--;){if(I===E||E!==null&&I===E.alternate)break t;I=Zs(I),E=Zs(E)}I=null}else I=null;_!==null&&hv(f,m,_,I,!1),T!==null&&N!==null&&hv(f,N,T,I,!0)}}e:{if(m=c?ci(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var F=Gk;else if(rv(m))if(uT)F=Xk;else{F=Qk;var U=Kk}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=Yk);if(F&&(F=F(t,c))){lT(f,F,n,d);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&wf(m,"number",m.value)}switch(U=c?ci(c):window,t){case"focusin":(rv(U)||U.contentEditable==="true")&&(li=U,bf=c,ia=null);break;case"focusout":ia=bf=li=null;break;case"mousedown":Df=!0;break;case"contextmenu":case"mouseup":case"dragend":Df=!1,lv(f,n,d);break;case"selectionchange":if(eN)break;case"keydown":case"keyup":lv(f,n,d)}var R;if(gm)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else ai?oT(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(iT&&n.locale!=="ko"&&(ai||w!=="onCompositionStart"?w==="onCompositionEnd"&&ai&&(R=sT()):(Pr=d,fm="value"in Pr?Pr.value:Pr.textContent,ai=!0)),U=Yu(c,w),0<U.length&&(w=new Zy(w,t,null,n,d),f.push({event:w,listeners:U}),R?w.data=R:(R=aT(n),R!==null&&(w.data=R)))),(R=Bk?$k(t,n):Wk(t,n))&&(c=Yu(c,"onBeforeInput"),0<c.length&&(d=new Zy("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=R))}vT(f,e)})}function Pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Ia(t,n),i!=null&&r.unshift(Pa(t,i,s)),i=Ia(t,e),i!=null&&r.push(Pa(t,i,s))),t=t.return}return r}function Zs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hv(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,s?(u=Ia(n,i),u!=null&&o.unshift(Pa(n,u,a))):s||(u=Ia(n,i),u!=null&&o.push(Pa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var sN=/\r\n?/g,iN=/\u0000|\uFFFD/g;function dv(t){return(typeof t=="string"?t:""+t).replace(sN,`
`).replace(iN,"")}function ru(t,e,n){if(e=dv(e),dv(t)!==e&&n)throw Error(B(425))}function Xu(){}var Of=null,Lf=null;function Mf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vf=typeof setTimeout=="function"?setTimeout:void 0,oN=typeof clearTimeout=="function"?clearTimeout:void 0,fv=typeof Promise=="function"?Promise:void 0,aN=typeof queueMicrotask=="function"?queueMicrotask:typeof fv<"u"?function(t){return fv.resolve(null).then(t).catch(lN)}:Vf;function lN(t){setTimeout(function(){throw t})}function xd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Ra(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ra(e)}function jr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var to=Math.random().toString(36).slice(2),Tn="__reactFiber$"+to,xa="__reactProps$"+to,tr="__reactContainer$"+to,jf="__reactEvents$"+to,uN="__reactListeners$"+to,cN="__reactHandles$"+to;function vs(t){var e=t[Tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tr]||n[Tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pv(t);t!==null;){if(n=t[Tn])return n;t=pv(t)}return e}t=n,n=t.parentNode}return null}function al(t){return t=t[Tn]||t[tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Zc(t){return t[xa]||null}var Ff=[],hi=-1;function os(t){return{current:t}}function Ae(t){0>hi||(t.current=Ff[hi],Ff[hi]=null,hi--)}function Ee(t,e){hi++,Ff[hi]=t.current,t.current=e}var Jr={},wt=os(Jr),Lt=os(!1),Ps=Jr;function Di(t,e){var n=t.type.contextTypes;if(!n)return Jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Mt(t){return t=t.childContextTypes,t!=null}function Ju(){Ae(Lt),Ae(wt)}function mv(t,e,n){if(wt.current!==Jr)throw Error(B(168));Ee(wt,e),Ee(Lt,n)}function ET(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(B(108,KA(t)||"Unknown",s));return De({},n,r)}function Zu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jr,Ps=wt.current,Ee(wt,t),Ee(Lt,Lt.current),!0}function gv(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=ET(t,e,Ps),r.__reactInternalMemoizedMergedChildContext=t,Ae(Lt),Ae(wt),Ee(wt,t)):Ae(Lt),Ee(Lt,n)}var $n=null,eh=!1,bd=!1;function TT(t){$n===null?$n=[t]:$n.push(t)}function hN(t){eh=!0,TT(t)}function as(){if(!bd&&$n!==null){bd=!0;var t=0,e=me;try{var n=$n;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$n=null,eh=!1}catch(s){throw $n!==null&&($n=$n.slice(t+1)),G0(um,as),s}finally{me=e,bd=!1}}return null}var di=[],fi=0,ec=null,tc=0,Jt=[],Zt=0,xs=null,Hn=1,qn="";function ms(t,e){di[fi++]=tc,di[fi++]=ec,ec=t,tc=e}function IT(t,e,n){Jt[Zt++]=Hn,Jt[Zt++]=qn,Jt[Zt++]=xs,xs=t;var r=Hn;t=qn;var s=32-pn(r)-1;r&=~(1<<s),n+=1;var i=32-pn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Hn=1<<32-pn(e)+s|n<<s|r,qn=i+t}else Hn=1<<i|n<<s|r,qn=t}function ym(t){t.return!==null&&(ms(t,1),IT(t,1,0))}function vm(t){for(;t===ec;)ec=di[--fi],di[fi]=null,tc=di[--fi],di[fi]=null;for(;t===xs;)xs=Jt[--Zt],Jt[Zt]=null,qn=Jt[--Zt],Jt[Zt]=null,Hn=Jt[--Zt],Jt[Zt]=null}var Kt=null,Ht=null,Ne=!1,cn=null;function ST(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _v(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Kt=t,Ht=jr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Kt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xs!==null?{id:Hn,overflow:qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Kt=t,Ht=null,!0):!1;default:return!1}}function Uf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zf(t){if(Ne){var e=Ht;if(e){var n=e;if(!_v(t,e)){if(Uf(t))throw Error(B(418));e=jr(n.nextSibling);var r=Kt;e&&_v(t,e)?ST(r,n):(t.flags=t.flags&-4097|2,Ne=!1,Kt=t)}}else{if(Uf(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ne=!1,Kt=t}}}function yv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kt=t}function su(t){if(t!==Kt)return!1;if(!Ne)return yv(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mf(t.type,t.memoizedProps)),e&&(e=Ht)){if(Uf(t))throw CT(),Error(B(418));for(;e;)ST(t,e),e=jr(e.nextSibling)}if(yv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=jr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Kt?jr(t.stateNode.nextSibling):null;return!0}function CT(){for(var t=Ht;t;)t=jr(t.nextSibling)}function Oi(){Ht=Kt=null,Ne=!1}function wm(t){cn===null?cn=[t]:cn.push(t)}var dN=fr.ReactCurrentBatchConfig;function Oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function iu(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vv(t){var e=t._init;return e(t._payload)}function RT(t){function e(E,y){if(t){var S=E.deletions;S===null?(E.deletions=[y],E.flags|=16):S.push(y)}}function n(E,y){if(!t)return null;for(;y!==null;)e(E,y),y=y.sibling;return null}function r(E,y){for(E=new Map;y!==null;)y.key!==null?E.set(y.key,y):E.set(y.index,y),y=y.sibling;return E}function s(E,y){return E=Br(E,y),E.index=0,E.sibling=null,E}function i(E,y,S){return E.index=S,t?(S=E.alternate,S!==null?(S=S.index,S<y?(E.flags|=2,y):S):(E.flags|=2,y)):(E.flags|=1048576,y)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,y,S,b){return y===null||y.tag!==6?(y=Fd(S,E.mode,b),y.return=E,y):(y=s(y,S),y.return=E,y)}function u(E,y,S,b){var F=S.type;return F===oi?d(E,y,S.props.children,b,S.key):y!==null&&(y.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Tr&&vv(F)===y.type)?(b=s(y,S.props),b.ref=Oo(E,y,S),b.return=E,b):(b=bu(S.type,S.key,S.props,null,E.mode,b),b.ref=Oo(E,y,S),b.return=E,b)}function c(E,y,S,b){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=Ud(S,E.mode,b),y.return=E,y):(y=s(y,S.children||[]),y.return=E,y)}function d(E,y,S,b,F){return y===null||y.tag!==7?(y=Rs(S,E.mode,b,F),y.return=E,y):(y=s(y,S),y.return=E,y)}function f(E,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Fd(""+y,E.mode,S),y.return=E,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Kl:return S=bu(y.type,y.key,y.props,null,E.mode,S),S.ref=Oo(E,null,y),S.return=E,S;case ii:return y=Ud(y,E.mode,S),y.return=E,y;case Tr:var b=y._init;return f(E,b(y._payload),S)}if(Ko(y)||No(y))return y=Rs(y,E.mode,S,null),y.return=E,y;iu(E,y)}return null}function m(E,y,S,b){var F=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return F!==null?null:a(E,y,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Kl:return S.key===F?u(E,y,S,b):null;case ii:return S.key===F?c(E,y,S,b):null;case Tr:return F=S._init,m(E,y,F(S._payload),b)}if(Ko(S)||No(S))return F!==null?null:d(E,y,S,b,null);iu(E,S)}return null}function _(E,y,S,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return E=E.get(S)||null,a(y,E,""+b,F);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Kl:return E=E.get(b.key===null?S:b.key)||null,u(y,E,b,F);case ii:return E=E.get(b.key===null?S:b.key)||null,c(y,E,b,F);case Tr:var U=b._init;return _(E,y,S,U(b._payload),F)}if(Ko(b)||No(b))return E=E.get(S)||null,d(y,E,b,F,null);iu(y,b)}return null}function T(E,y,S,b){for(var F=null,U=null,R=y,w=y=0,C=null;R!==null&&w<S.length;w++){R.index>w?(C=R,R=null):C=R.sibling;var k=m(E,R,S[w],b);if(k===null){R===null&&(R=C);break}t&&R&&k.alternate===null&&e(E,R),y=i(k,y,w),U===null?F=k:U.sibling=k,U=k,R=C}if(w===S.length)return n(E,R),Ne&&ms(E,w),F;if(R===null){for(;w<S.length;w++)R=f(E,S[w],b),R!==null&&(y=i(R,y,w),U===null?F=R:U.sibling=R,U=R);return Ne&&ms(E,w),F}for(R=r(E,R);w<S.length;w++)C=_(R,E,w,S[w],b),C!==null&&(t&&C.alternate!==null&&R.delete(C.key===null?w:C.key),y=i(C,y,w),U===null?F=C:U.sibling=C,U=C);return t&&R.forEach(function(x){return e(E,x)}),Ne&&ms(E,w),F}function I(E,y,S,b){var F=No(S);if(typeof F!="function")throw Error(B(150));if(S=F.call(S),S==null)throw Error(B(151));for(var U=F=null,R=y,w=y=0,C=null,k=S.next();R!==null&&!k.done;w++,k=S.next()){R.index>w?(C=R,R=null):C=R.sibling;var x=m(E,R,k.value,b);if(x===null){R===null&&(R=C);break}t&&R&&x.alternate===null&&e(E,R),y=i(x,y,w),U===null?F=x:U.sibling=x,U=x,R=C}if(k.done)return n(E,R),Ne&&ms(E,w),F;if(R===null){for(;!k.done;w++,k=S.next())k=f(E,k.value,b),k!==null&&(y=i(k,y,w),U===null?F=k:U.sibling=k,U=k);return Ne&&ms(E,w),F}for(R=r(E,R);!k.done;w++,k=S.next())k=_(R,E,w,k.value,b),k!==null&&(t&&k.alternate!==null&&R.delete(k.key===null?w:k.key),y=i(k,y,w),U===null?F=k:U.sibling=k,U=k);return t&&R.forEach(function(P){return e(E,P)}),Ne&&ms(E,w),F}function N(E,y,S,b){if(typeof S=="object"&&S!==null&&S.type===oi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Kl:e:{for(var F=S.key,U=y;U!==null;){if(U.key===F){if(F=S.type,F===oi){if(U.tag===7){n(E,U.sibling),y=s(U,S.props.children),y.return=E,E=y;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Tr&&vv(F)===U.type){n(E,U.sibling),y=s(U,S.props),y.ref=Oo(E,U,S),y.return=E,E=y;break e}n(E,U);break}else e(E,U);U=U.sibling}S.type===oi?(y=Rs(S.props.children,E.mode,b,S.key),y.return=E,E=y):(b=bu(S.type,S.key,S.props,null,E.mode,b),b.ref=Oo(E,y,S),b.return=E,E=b)}return o(E);case ii:e:{for(U=S.key;y!==null;){if(y.key===U)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){n(E,y.sibling),y=s(y,S.children||[]),y.return=E,E=y;break e}else{n(E,y);break}else e(E,y);y=y.sibling}y=Ud(S,E.mode,b),y.return=E,E=y}return o(E);case Tr:return U=S._init,N(E,y,U(S._payload),b)}if(Ko(S))return T(E,y,S,b);if(No(S))return I(E,y,S,b);iu(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(n(E,y.sibling),y=s(y,S),y.return=E,E=y):(n(E,y),y=Fd(S,E.mode,b),y.return=E,E=y),o(E)):n(E,y)}return N}var Li=RT(!0),AT=RT(!1),nc=os(null),rc=null,pi=null,Em=null;function Tm(){Em=pi=rc=null}function Im(t){var e=nc.current;Ae(nc),t._currentValue=e}function Bf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ii(t,e){rc=t,Em=pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(bt=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(Em!==t)if(t={context:t,memoizedValue:e,next:null},pi===null){if(rc===null)throw Error(B(308));pi=t,rc.dependencies={lanes:0,firstContext:t}}else pi=pi.next=t;return e}var ws=null;function Sm(t){ws===null?ws=[t]:ws.push(t)}function kT(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Sm(e)):(n.next=s.next,s.next=n),e.interleaved=n,nr(t,r)}function nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ir=!1;function Cm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function NT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,nr(t,n)}return s=r.interleaved,s===null?(e.next=e,Sm(r)):(e.next=s.next,s.next=e),r.interleaved=e,nr(t,n)}function Ru(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cm(t,n)}}function wv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sc(t,e,n,r){var s=t.updateQueue;Ir=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(i!==null){var f=s.baseState;o=0,d=c=u=null,a=i;do{var m=a.lane,_=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,I=a;switch(m=e,_=n,I.tag){case 1:if(T=I.payload,typeof T=="function"){f=T.call(_,f,m);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=I.payload,m=typeof T=="function"?T.call(_,f,m):T,m==null)break e;f=De({},f,m);break e;case 2:Ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=_,u=f):d=d.next=_,o|=m;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;m=a,a=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(d===null&&(u=f),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Ds|=o,t.lanes=o,t.memoizedState=f}}function Ev(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(B(191,s));s.call(r)}}}var ll={},Rn=os(ll),ba=os(ll),Da=os(ll);function Es(t){if(t===ll)throw Error(B(174));return t}function Rm(t,e){switch(Ee(Da,e),Ee(ba,t),Ee(Rn,ll),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Tf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Tf(e,t)}Ae(Rn),Ee(Rn,e)}function Mi(){Ae(Rn),Ae(ba),Ae(Da)}function PT(t){Es(Da.current);var e=Es(Rn.current),n=Tf(e,t.type);e!==n&&(Ee(ba,t),Ee(Rn,n))}function Am(t){ba.current===t&&(Ae(Rn),Ae(ba))}var Pe=os(0);function ic(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dd=[];function km(){for(var t=0;t<Dd.length;t++)Dd[t]._workInProgressVersionPrimary=null;Dd.length=0}var Au=fr.ReactCurrentDispatcher,Od=fr.ReactCurrentBatchConfig,bs=0,xe=null,He=null,Xe=null,oc=!1,oa=!1,Oa=0,fN=0;function ft(){throw Error(B(321))}function Nm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_n(t[n],e[n]))return!1;return!0}function Pm(t,e,n,r,s,i){if(bs=i,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Au.current=t===null||t.memoizedState===null?_N:yN,t=n(r,s),oa){i=0;do{if(oa=!1,Oa=0,25<=i)throw Error(B(301));i+=1,Xe=He=null,e.updateQueue=null,Au.current=vN,t=n(r,s)}while(oa)}if(Au.current=ac,e=He!==null&&He.next!==null,bs=0,Xe=He=xe=null,oc=!1,e)throw Error(B(300));return t}function xm(){var t=Oa!==0;return Oa=0,t}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?xe.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function sn(){if(He===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Xe===null?xe.memoizedState:Xe.next;if(e!==null)Xe=e,He=t;else{if(t===null)throw Error(B(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Xe===null?xe.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function La(t,e){return typeof e=="function"?e(t):e}function Ld(t){var e=sn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=He,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,u=null,c=i;do{var d=c.lane;if((bs&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,xe.lanes|=d,Ds|=d}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=a,_n(r,e.memoizedState)||(bt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,xe.lanes|=i,Ds|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Md(t){var e=sn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);_n(i,e.memoizedState)||(bt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function xT(){}function bT(t,e){var n=xe,r=sn(),s=e(),i=!_n(r.memoizedState,s);if(i&&(r.memoizedState=s,bt=!0),r=r.queue,bm(LT.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,Ma(9,OT.bind(null,n,r,s,e),void 0,null),et===null)throw Error(B(349));bs&30||DT(n,e,s)}return s}function DT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function OT(t,e,n,r){e.value=n,e.getSnapshot=r,MT(e)&&VT(t)}function LT(t,e,n){return n(function(){MT(e)&&VT(t)})}function MT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_n(t,n)}catch{return!0}}function VT(t){var e=nr(t,1);e!==null&&mn(e,t,1,-1)}function Tv(t){var e=En();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:t},e.queue=t,t=t.dispatch=gN.bind(null,xe,t),[e.memoizedState,t]}function Ma(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function jT(){return sn().memoizedState}function ku(t,e,n,r){var s=En();xe.flags|=t,s.memoizedState=Ma(1|e,n,void 0,r===void 0?null:r)}function th(t,e,n,r){var s=sn();r=r===void 0?null:r;var i=void 0;if(He!==null){var o=He.memoizedState;if(i=o.destroy,r!==null&&Nm(r,o.deps)){s.memoizedState=Ma(e,n,i,r);return}}xe.flags|=t,s.memoizedState=Ma(1|e,n,i,r)}function Iv(t,e){return ku(8390656,8,t,e)}function bm(t,e){return th(2048,8,t,e)}function FT(t,e){return th(4,2,t,e)}function UT(t,e){return th(4,4,t,e)}function zT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function BT(t,e,n){return n=n!=null?n.concat([t]):null,th(4,4,zT.bind(null,e,t),n)}function Dm(){}function $T(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function WT(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function HT(t,e,n){return bs&21?(_n(n,e)||(n=Y0(),xe.lanes|=n,Ds|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,bt=!0),t.memoizedState=n)}function pN(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=Od.transition;Od.transition={};try{t(!1),e()}finally{me=n,Od.transition=r}}function qT(){return sn().memoizedState}function mN(t,e,n){var r=zr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},GT(t))KT(e,n);else if(n=kT(t,e,n,r),n!==null){var s=Rt();mn(n,t,r,s),QT(n,e,r)}}function gN(t,e,n){var r=zr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(GT(t))KT(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,_n(a,o)){var u=e.interleaved;u===null?(s.next=s,Sm(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=kT(t,e,s,r),n!==null&&(s=Rt(),mn(n,t,r,s),QT(n,e,r))}}function GT(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function KT(t,e){oa=oc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function QT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cm(t,n)}}var ac={readContext:rn,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},_N={readContext:rn,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:Iv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ku(4194308,4,zT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ku(4194308,4,t,e)},useInsertionEffect:function(t,e){return ku(4,2,t,e)},useMemo:function(t,e){var n=En();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=En();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mN.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:Tv,useDebugValue:Dm,useDeferredValue:function(t){return En().memoizedState=t},useTransition:function(){var t=Tv(!1),e=t[0];return t=pN.bind(null,t[1]),En().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,s=En();if(Ne){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),et===null)throw Error(B(349));bs&30||DT(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Iv(LT.bind(null,r,i,t),[t]),r.flags|=2048,Ma(9,OT.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=En(),e=et.identifierPrefix;if(Ne){var n=qn,r=Hn;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yN={readContext:rn,useCallback:$T,useContext:rn,useEffect:bm,useImperativeHandle:BT,useInsertionEffect:FT,useLayoutEffect:UT,useMemo:WT,useReducer:Ld,useRef:jT,useState:function(){return Ld(La)},useDebugValue:Dm,useDeferredValue:function(t){var e=sn();return HT(e,He.memoizedState,t)},useTransition:function(){var t=Ld(La)[0],e=sn().memoizedState;return[t,e]},useMutableSource:xT,useSyncExternalStore:bT,useId:qT,unstable_isNewReconciler:!1},vN={readContext:rn,useCallback:$T,useContext:rn,useEffect:bm,useImperativeHandle:BT,useInsertionEffect:FT,useLayoutEffect:UT,useMemo:WT,useReducer:Md,useRef:jT,useState:function(){return Md(La)},useDebugValue:Dm,useDeferredValue:function(t){var e=sn();return He===null?e.memoizedState=t:HT(e,He.memoizedState,t)},useTransition:function(){var t=Md(La)[0],e=sn().memoizedState;return[t,e]},useMutableSource:xT,useSyncExternalStore:bT,useId:qT,unstable_isNewReconciler:!1};function ln(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $f(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nh={isMounted:function(t){return(t=t._reactInternals)?Hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Rt(),s=zr(t),i=Xn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Fr(t,i,s),e!==null&&(mn(e,t,s,r),Ru(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Rt(),s=zr(t),i=Xn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Fr(t,i,s),e!==null&&(mn(e,t,s,r),Ru(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Rt(),r=zr(t),s=Xn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Fr(t,s,r),e!==null&&(mn(e,t,r,n),Ru(e,t,r))}};function Sv(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ka(n,r)||!ka(s,i):!0}function YT(t,e,n){var r=!1,s=Jr,i=e.contextType;return typeof i=="object"&&i!==null?i=rn(i):(s=Mt(e)?Ps:wt.current,r=e.contextTypes,i=(r=r!=null)?Di(t,s):Jr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Cv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&nh.enqueueReplaceState(e,e.state,null)}function Wf(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Cm(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=rn(i):(i=Mt(e)?Ps:wt.current,s.context=Di(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&($f(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&nh.enqueueReplaceState(s,s.state,null),sc(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Vi(t,e){try{var n="",r=e;do n+=GA(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Vd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wN=typeof WeakMap=="function"?WeakMap:Map;function XT(t,e,n){n=Xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){uc||(uc=!0,tp=r),Hf(t,e)},n}function JT(t,e,n){n=Xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Hf(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Hf(t,e),typeof r!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new wN;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=ON.bind(null,t,e,n),e.then(t,t))}function Av(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kv(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xn(-1,1),e.tag=2,Fr(n,e,1))),n.lanes|=1),t)}var EN=fr.ReactCurrentOwner,bt=!1;function Ct(t,e,n,r){e.child=t===null?AT(e,null,n,r):Li(e,t.child,n,r)}function Nv(t,e,n,r,s){n=n.render;var i=e.ref;return Ii(e,s),r=Pm(t,e,n,r,i,s),n=xm(),t!==null&&!bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,rr(t,e,s)):(Ne&&n&&ym(e),e.flags|=1,Ct(t,e,r,s),e.child)}function Pv(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!zm(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,ZT(t,e,i,r,s)):(t=bu(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ka,n(o,r)&&t.ref===e.ref)return rr(t,e,s)}return e.flags|=1,t=Br(i,r),t.ref=e.ref,t.return=e,e.child=t}function ZT(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ka(i,r)&&t.ref===e.ref)if(bt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(bt=!0);else return e.lanes=t.lanes,rr(t,e,s)}return qf(t,e,n,r,s)}function eI(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(gi,Wt),Wt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(gi,Wt),Wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ee(gi,Wt),Wt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ee(gi,Wt),Wt|=r;return Ct(t,e,s,n),e.child}function tI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qf(t,e,n,r,s){var i=Mt(n)?Ps:wt.current;return i=Di(e,i),Ii(e,s),n=Pm(t,e,n,r,i,s),r=xm(),t!==null&&!bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,rr(t,e,s)):(Ne&&r&&ym(e),e.flags|=1,Ct(t,e,n,s),e.child)}function xv(t,e,n,r,s){if(Mt(n)){var i=!0;Zu(e)}else i=!1;if(Ii(e,s),e.stateNode===null)Nu(t,e),YT(e,n,r),Wf(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=rn(c):(c=Mt(n)?Ps:wt.current,c=Di(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Cv(e,o,r,c),Ir=!1;var m=e.memoizedState;o.state=m,sc(e,r,o,s),u=e.memoizedState,a!==r||m!==u||Lt.current||Ir?(typeof d=="function"&&($f(e,n,d,r),u=e.memoizedState),(a=Ir||Sv(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,NT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ln(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=rn(u):(u=Mt(n)?Ps:wt.current,u=Di(e,u));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&Cv(e,o,r,u),Ir=!1,m=e.memoizedState,o.state=m,sc(e,r,o,s);var T=e.memoizedState;a!==f||m!==T||Lt.current||Ir?(typeof _=="function"&&($f(e,n,_,r),T=e.memoizedState),(c=Ir||Sv(e,n,c,r,m,T,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Gf(t,e,n,r,i,s)}function Gf(t,e,n,r,s,i){tI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&gv(e,n,!1),rr(t,e,i);r=e.stateNode,EN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Li(e,t.child,null,i),e.child=Li(e,null,a,i)):Ct(t,e,a,i),e.memoizedState=r.state,s&&gv(e,n,!0),e.child}function nI(t){var e=t.stateNode;e.pendingContext?mv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mv(t,e.context,!1),Rm(t,e.containerInfo)}function bv(t,e,n,r,s){return Oi(),wm(s),e.flags|=256,Ct(t,e,n,r),e.child}var Kf={dehydrated:null,treeContext:null,retryLane:0};function Qf(t){return{baseLanes:t,cachePool:null,transitions:null}}function rI(t,e,n){var r=e.pendingProps,s=Pe.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ee(Pe,s&1),t===null)return zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ih(o,r,0,null),t=Rs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Qf(n),e.memoizedState=Kf,t):Om(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return TN(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Br(s,u),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Br(a,i):(i=Rs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Qf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Kf,r}return i=t.child,t=i.sibling,r=Br(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Om(t,e){return e=ih({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ou(t,e,n,r){return r!==null&&wm(r),Li(e,t.child,null,n),t=Om(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TN(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Vd(Error(B(422))),ou(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=ih({mode:"visible",children:r.children},s,0,null),i=Rs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Li(e,t.child,null,o),e.child.memoizedState=Qf(o),e.memoizedState=Kf,i);if(!(e.mode&1))return ou(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(B(419)),r=Vd(i,r,void 0),ou(t,e,o,r)}if(a=(o&t.childLanes)!==0,bt||a){if(r=et,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,nr(t,s),mn(r,t,s,-1))}return Um(),r=Vd(Error(B(421))),ou(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=LN.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ht=jr(s.nextSibling),Kt=e,Ne=!0,cn=null,t!==null&&(Jt[Zt++]=Hn,Jt[Zt++]=qn,Jt[Zt++]=xs,Hn=t.id,qn=t.overflow,xs=e),e=Om(e,r.children),e.flags|=4096,e)}function Dv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Bf(t.return,e,n)}function jd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function sI(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Ct(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dv(t,n,e);else if(t.tag===19)Dv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&ic(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),jd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ic(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}jd(e,!0,n,null,i);break;case"together":jd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ds|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IN(t,e,n){switch(e.tag){case 3:nI(e),Oi();break;case 5:PT(e);break;case 1:Mt(e.type)&&Zu(e);break;case 4:Rm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ee(nc,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?rI(t,e,n):(Ee(Pe,Pe.current&1),t=rr(t,e,n),t!==null?t.sibling:null);Ee(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return sI(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ee(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,eI(t,e,n)}return rr(t,e,n)}var iI,Yf,oI,aI;iI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yf=function(){};oI=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Es(Rn.current);var i=null;switch(n){case"input":s=yf(t,s),r=yf(t,r),i=[];break;case"select":s=De({},s,{value:void 0}),r=De({},r,{value:void 0}),i=[];break;case"textarea":s=Ef(t,s),r=Ef(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xu)}If(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ea.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Se("scroll",t),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};aI=function(t,e,n,r){n!==r&&(e.flags|=4)};function Lo(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function SN(t,e,n){var r=e.pendingProps;switch(vm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return Mt(e.type)&&Ju(),pt(e),null;case 3:return r=e.stateNode,Mi(),Ae(Lt),Ae(wt),km(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(su(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cn!==null&&(sp(cn),cn=null))),Yf(t,e),pt(e),null;case 5:Am(e);var s=Es(Da.current);if(n=e.type,t!==null&&e.stateNode!=null)oI(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return pt(e),null}if(t=Es(Rn.current),su(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Tn]=e,r[xa]=i,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(s=0;s<Yo.length;s++)Se(Yo[s],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":By(r,i),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Se("invalid",r);break;case"textarea":Wy(r,i),Se("invalid",r)}If(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&ru(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ru(r.textContent,a,t),s=["children",""+a]):Ea.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":Ql(r),$y(r,i,!0);break;case"textarea":Ql(r),Hy(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Xu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=L0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tn]=e,t[xa]=r,iI(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sf(n,r),n){case"dialog":Se("cancel",t),Se("close",t),s=r;break;case"iframe":case"object":case"embed":Se("load",t),s=r;break;case"video":case"audio":for(s=0;s<Yo.length;s++)Se(Yo[s],t);s=r;break;case"source":Se("error",t),s=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),s=r;break;case"details":Se("toggle",t),s=r;break;case"input":By(t,r),s=yf(t,r),Se("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=De({},r,{value:void 0}),Se("invalid",t);break;case"textarea":Wy(t,r),s=Ef(t,r),Se("invalid",t);break;default:s=r}If(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?j0(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&M0(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ta(t,u):typeof u=="number"&&Ta(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ea.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Se("scroll",t):u!=null&&sm(t,i,u,o))}switch(n){case"input":Ql(t),$y(t,r,!1);break;case"textarea":Ql(t),Hy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?vi(t,!!r.multiple,i,!1):r.defaultValue!=null&&vi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Xu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pt(e),null;case 6:if(t&&e.stateNode!=null)aI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Es(Da.current),Es(Rn.current),su(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tn]=e,(i=r.nodeValue!==n)&&(t=Kt,t!==null))switch(t.tag){case 3:ru(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ru(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tn]=e,e.stateNode=r}return pt(e),null;case 13:if(Ae(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&Ht!==null&&e.mode&1&&!(e.flags&128))CT(),Oi(),e.flags|=98560,i=!1;else if(i=su(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(B(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[Tn]=e}else Oi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pt(e),i=!1}else cn!==null&&(sp(cn),cn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Ge===0&&(Ge=3):Um())),e.updateQueue!==null&&(e.flags|=4),pt(e),null);case 4:return Mi(),Yf(t,e),t===null&&Na(e.stateNode.containerInfo),pt(e),null;case 10:return Im(e.type._context),pt(e),null;case 17:return Mt(e.type)&&Ju(),pt(e),null;case 19:if(Ae(Pe),i=e.memoizedState,i===null)return pt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Lo(i,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ic(t),o!==null){for(e.flags|=128,Lo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(Pe,Pe.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ue()>ji&&(e.flags|=128,r=!0,Lo(i,!1),e.lanes=4194304)}else{if(!r)if(t=ic(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Lo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ne)return pt(e),null}else 2*Ue()-i.renderingStartTime>ji&&n!==1073741824&&(e.flags|=128,r=!0,Lo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ue(),e.sibling=null,n=Pe.current,Ee(Pe,r?n&1|2:n&1),e):(pt(e),null);case 22:case 23:return Fm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Wt&1073741824&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function CN(t,e){switch(vm(e),e.tag){case 1:return Mt(e.type)&&Ju(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Mi(),Ae(Lt),Ae(wt),km(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Am(e),null;case 13:if(Ae(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Oi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(Pe),null;case 4:return Mi(),null;case 10:return Im(e.type._context),null;case 22:case 23:return Fm(),null;case 24:return null;default:return null}}var au=!1,_t=!1,RN=typeof WeakSet=="function"?WeakSet:Set,q=null;function mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function Xf(t,e,n){try{n()}catch(r){Le(t,e,r)}}var Ov=!1;function AN(t,e){if(Of=Ku,t=dT(),_m(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var _;f!==n||s!==0&&f.nodeType!==3||(a=o+s),f!==i||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===t)break t;if(m===n&&++c===s&&(a=o),m===i&&++d===r&&(u=o),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lf={focusedElem:t,selectionRange:n},Ku=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var I=T.memoizedProps,N=T.memoizedState,E=e.stateNode,y=E.getSnapshotBeforeUpdate(e.elementType===e.type?I:ln(e.type,I),N);E.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(b){Le(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return T=Ov,Ov=!1,T}function aa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Xf(e,n,i)}s=s.next}while(s!==r)}}function rh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Jf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lI(t){var e=t.alternate;e!==null&&(t.alternate=null,lI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tn],delete e[xa],delete e[jf],delete e[uN],delete e[cN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function uI(t){return t.tag===5||t.tag===3||t.tag===4}function Lv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xu));else if(r!==4&&(t=t.child,t!==null))for(Zf(t,e,n),t=t.sibling;t!==null;)Zf(t,e,n),t=t.sibling}function ep(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ep(t,e,n),t=t.sibling;t!==null;)ep(t,e,n),t=t.sibling}var rt=null,un=!1;function wr(t,e,n){for(n=n.child;n!==null;)cI(t,e,n),n=n.sibling}function cI(t,e,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(Qc,n)}catch{}switch(n.tag){case 5:_t||mi(n,e);case 6:var r=rt,s=un;rt=null,wr(t,e,n),rt=r,un=s,rt!==null&&(un?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(un?(t=rt,n=n.stateNode,t.nodeType===8?xd(t.parentNode,n):t.nodeType===1&&xd(t,n),Ra(t)):xd(rt,n.stateNode));break;case 4:r=rt,s=un,rt=n.stateNode.containerInfo,un=!0,wr(t,e,n),rt=r,un=s;break;case 0:case 11:case 14:case 15:if(!_t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Xf(n,e,o),s=s.next}while(s!==r)}wr(t,e,n);break;case 1:if(!_t&&(mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}wr(t,e,n);break;case 21:wr(t,e,n);break;case 22:n.mode&1?(_t=(r=_t)||n.memoizedState!==null,wr(t,e,n),_t=r):wr(t,e,n);break;default:wr(t,e,n)}}function Mv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RN),e.forEach(function(r){var s=MN.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function an(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rt=a.stateNode,un=!1;break e;case 3:rt=a.stateNode.containerInfo,un=!0;break e;case 4:rt=a.stateNode.containerInfo,un=!0;break e}a=a.return}if(rt===null)throw Error(B(160));cI(i,o,s),rt=null,un=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Le(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hI(e,t),e=e.sibling}function hI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(an(e,t),vn(t),r&4){try{aa(3,t,t.return),rh(3,t)}catch(I){Le(t,t.return,I)}try{aa(5,t,t.return)}catch(I){Le(t,t.return,I)}}break;case 1:an(e,t),vn(t),r&512&&n!==null&&mi(n,n.return);break;case 5:if(an(e,t),vn(t),r&512&&n!==null&&mi(n,n.return),t.flags&32){var s=t.stateNode;try{Ta(s,"")}catch(I){Le(t,t.return,I)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&D0(s,i),Sf(a,o);var c=Sf(a,i);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?j0(s,f):d==="dangerouslySetInnerHTML"?M0(s,f):d==="children"?Ta(s,f):sm(s,d,f,c)}switch(a){case"input":vf(s,i);break;case"textarea":O0(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?vi(s,!!i.multiple,_,!1):m!==!!i.multiple&&(i.defaultValue!=null?vi(s,!!i.multiple,i.defaultValue,!0):vi(s,!!i.multiple,i.multiple?[]:"",!1))}s[xa]=i}catch(I){Le(t,t.return,I)}}break;case 6:if(an(e,t),vn(t),r&4){if(t.stateNode===null)throw Error(B(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(I){Le(t,t.return,I)}}break;case 3:if(an(e,t),vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(I){Le(t,t.return,I)}break;case 4:an(e,t),vn(t);break;case 13:an(e,t),vn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Vm=Ue())),r&4&&Mv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(_t=(c=_t)||d,an(e,t),_t=c):an(e,t),vn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(q=t,d=t.child;d!==null;){for(f=q=d;q!==null;){switch(m=q,_=m.child,m.tag){case 0:case 11:case 14:case 15:aa(4,m,m.return);break;case 1:mi(m,m.return);var T=m.stateNode;if(typeof T.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(I){Le(r,n,I)}}break;case 5:mi(m,m.return);break;case 22:if(m.memoizedState!==null){jv(f);continue}}_!==null?(_.return=m,q=_):jv(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{s=f.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=V0("display",o))}catch(I){Le(t,t.return,I)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(I){Le(t,t.return,I)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:an(e,t),vn(t),r&4&&Mv(t);break;case 21:break;default:an(e,t),vn(t)}}function vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(uI(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ta(s,""),r.flags&=-33);var i=Lv(t);ep(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Lv(t);Zf(t,a,o);break;default:throw Error(B(161))}}catch(u){Le(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kN(t,e,n){q=t,dI(t)}function dI(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||au;if(!o){var a=s.alternate,u=a!==null&&a.memoizedState!==null||_t;a=au;var c=_t;if(au=o,(_t=u)&&!c)for(q=s;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Fv(s):u!==null?(u.return=o,q=u):Fv(s);for(;i!==null;)q=i,dI(i),i=i.sibling;q=s,au=a,_t=c}Vv(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):Vv(t)}}function Vv(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_t||rh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:ln(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Ev(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ev(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ra(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}_t||e.flags&512&&Jf(e)}catch(m){Le(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function jv(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Fv(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rh(4,e)}catch(u){Le(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Le(e,s,u)}}var i=e.return;try{Jf(e)}catch(u){Le(e,i,u)}break;case 5:var o=e.return;try{Jf(e)}catch(u){Le(e,o,u)}}}catch(u){Le(e,e.return,u)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var NN=Math.ceil,lc=fr.ReactCurrentDispatcher,Lm=fr.ReactCurrentOwner,tn=fr.ReactCurrentBatchConfig,he=0,et=null,Be=null,ot=0,Wt=0,gi=os(0),Ge=0,Va=null,Ds=0,sh=0,Mm=0,la=null,Pt=null,Vm=0,ji=1/0,Bn=null,uc=!1,tp=null,Ur=null,lu=!1,xr=null,cc=0,ua=0,np=null,Pu=-1,xu=0;function Rt(){return he&6?Ue():Pu!==-1?Pu:Pu=Ue()}function zr(t){return t.mode&1?he&2&&ot!==0?ot&-ot:dN.transition!==null?(xu===0&&(xu=Y0()),xu):(t=me,t!==0||(t=window.event,t=t===void 0?16:rT(t.type)),t):1}function mn(t,e,n,r){if(50<ua)throw ua=0,np=null,Error(B(185));il(t,n,r),(!(he&2)||t!==et)&&(t===et&&(!(he&2)&&(sh|=n),Ge===4&&Cr(t,ot)),Vt(t,r),n===1&&he===0&&!(e.mode&1)&&(ji=Ue()+500,eh&&as()))}function Vt(t,e){var n=t.callbackNode;dk(t,e);var r=Gu(t,t===et?ot:0);if(r===0)n!==null&&Ky(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ky(n),e===1)t.tag===0?hN(Uv.bind(null,t)):TT(Uv.bind(null,t)),aN(function(){!(he&6)&&as()}),n=null;else{switch(X0(r)){case 1:n=um;break;case 4:n=K0;break;case 16:n=qu;break;case 536870912:n=Q0;break;default:n=qu}n=wI(n,fI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fI(t,e){if(Pu=-1,xu=0,he&6)throw Error(B(327));var n=t.callbackNode;if(Si()&&t.callbackNode!==n)return null;var r=Gu(t,t===et?ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=hc(t,r);else{e=r;var s=he;he|=2;var i=mI();(et!==t||ot!==e)&&(Bn=null,ji=Ue()+500,Cs(t,e));do try{bN();break}catch(a){pI(t,a)}while(!0);Tm(),lc.current=i,he=s,Be!==null?e=0:(et=null,ot=0,e=Ge)}if(e!==0){if(e===2&&(s=Nf(t),s!==0&&(r=s,e=rp(t,s))),e===1)throw n=Va,Cs(t,0),Cr(t,r),Vt(t,Ue()),n;if(e===6)Cr(t,r);else{if(s=t.current.alternate,!(r&30)&&!PN(s)&&(e=hc(t,r),e===2&&(i=Nf(t),i!==0&&(r=i,e=rp(t,i))),e===1))throw n=Va,Cs(t,0),Cr(t,r),Vt(t,Ue()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:gs(t,Pt,Bn);break;case 3:if(Cr(t,r),(r&130023424)===r&&(e=Vm+500-Ue(),10<e)){if(Gu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Rt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Vf(gs.bind(null,t,Pt,Bn),e);break}gs(t,Pt,Bn);break;case 4:if(Cr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-pn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*NN(r/1960))-r,10<r){t.timeoutHandle=Vf(gs.bind(null,t,Pt,Bn),r);break}gs(t,Pt,Bn);break;case 5:gs(t,Pt,Bn);break;default:throw Error(B(329))}}}return Vt(t,Ue()),t.callbackNode===n?fI.bind(null,t):null}function rp(t,e){var n=la;return t.current.memoizedState.isDehydrated&&(Cs(t,e).flags|=256),t=hc(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&sp(e)),t}function sp(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function PN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!_n(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Cr(t,e){for(e&=~Mm,e&=~sh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pn(e),r=1<<n;t[n]=-1,e&=~r}}function Uv(t){if(he&6)throw Error(B(327));Si();var e=Gu(t,0);if(!(e&1))return Vt(t,Ue()),null;var n=hc(t,e);if(t.tag!==0&&n===2){var r=Nf(t);r!==0&&(e=r,n=rp(t,r))}if(n===1)throw n=Va,Cs(t,0),Cr(t,e),Vt(t,Ue()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gs(t,Pt,Bn),Vt(t,Ue()),null}function jm(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(ji=Ue()+500,eh&&as())}}function Os(t){xr!==null&&xr.tag===0&&!(he&6)&&Si();var e=he;he|=1;var n=tn.transition,r=me;try{if(tn.transition=null,me=1,t)return t()}finally{me=r,tn.transition=n,he=e,!(he&6)&&as()}}function Fm(){Wt=gi.current,Ae(gi)}function Cs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oN(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(vm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ju();break;case 3:Mi(),Ae(Lt),Ae(wt),km();break;case 5:Am(r);break;case 4:Mi();break;case 13:Ae(Pe);break;case 19:Ae(Pe);break;case 10:Im(r.type._context);break;case 22:case 23:Fm()}n=n.return}if(et=t,Be=t=Br(t.current,null),ot=Wt=e,Ge=0,Va=null,Mm=sh=Ds=0,Pt=la=null,ws!==null){for(e=0;e<ws.length;e++)if(n=ws[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}ws=null}return t}function pI(t,e){do{var n=Be;try{if(Tm(),Au.current=ac,oc){for(var r=xe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}oc=!1}if(bs=0,Xe=He=xe=null,oa=!1,Oa=0,Lm.current=null,n===null||n.return===null){Ge=1,Va=e,Be=null;break}e:{var i=t,o=n.return,a=n,u=e;if(e=ot,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Av(o);if(_!==null){_.flags&=-257,kv(_,o,a,i,e),_.mode&1&&Rv(i,c,e),e=_,u=c;var T=e.updateQueue;if(T===null){var I=new Set;I.add(u),e.updateQueue=I}else T.add(u);break e}else{if(!(e&1)){Rv(i,c,e),Um();break e}u=Error(B(426))}}else if(Ne&&a.mode&1){var N=Av(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),kv(N,o,a,i,e),wm(Vi(u,a));break e}}i=u=Vi(u,a),Ge!==4&&(Ge=2),la===null?la=[i]:la.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var E=XT(i,u,e);wv(i,E);break e;case 1:a=u;var y=i.type,S=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Ur===null||!Ur.has(S)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=JT(i,a,e);wv(i,b);break e}}i=i.return}while(i!==null)}_I(n)}catch(F){e=F,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function mI(){var t=lc.current;return lc.current=ac,t===null?ac:t}function Um(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),et===null||!(Ds&268435455)&&!(sh&268435455)||Cr(et,ot)}function hc(t,e){var n=he;he|=2;var r=mI();(et!==t||ot!==e)&&(Bn=null,Cs(t,e));do try{xN();break}catch(s){pI(t,s)}while(!0);if(Tm(),he=n,lc.current=r,Be!==null)throw Error(B(261));return et=null,ot=0,Ge}function xN(){for(;Be!==null;)gI(Be)}function bN(){for(;Be!==null&&!rk();)gI(Be)}function gI(t){var e=vI(t.alternate,t,Wt);t.memoizedProps=t.pendingProps,e===null?_I(t):Be=e,Lm.current=null}function _I(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=CN(n,e),n!==null){n.flags&=32767,Be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,Be=null;return}}else if(n=SN(n,e,Wt),n!==null){Be=n;return}if(e=e.sibling,e!==null){Be=e;return}Be=e=t}while(e!==null);Ge===0&&(Ge=5)}function gs(t,e,n){var r=me,s=tn.transition;try{tn.transition=null,me=1,DN(t,e,n,r)}finally{tn.transition=s,me=r}return null}function DN(t,e,n,r){do Si();while(xr!==null);if(he&6)throw Error(B(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(fk(t,i),t===et&&(Be=et=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lu||(lu=!0,wI(qu,function(){return Si(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=tn.transition,tn.transition=null;var o=me;me=1;var a=he;he|=4,Lm.current=null,AN(t,n),hI(n,t),Zk(Lf),Ku=!!Of,Lf=Of=null,t.current=n,kN(n),sk(),he=a,me=o,tn.transition=i}else t.current=n;if(lu&&(lu=!1,xr=t,cc=s),i=t.pendingLanes,i===0&&(Ur=null),ak(n.stateNode),Vt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(uc)throw uc=!1,t=tp,tp=null,t;return cc&1&&t.tag!==0&&Si(),i=t.pendingLanes,i&1?t===np?ua++:(ua=0,np=t):ua=0,as(),null}function Si(){if(xr!==null){var t=X0(cc),e=tn.transition,n=me;try{if(tn.transition=null,me=16>t?16:t,xr===null)var r=!1;else{if(t=xr,xr=null,cc=0,he&6)throw Error(B(331));var s=he;for(he|=4,q=t.current;q!==null;){var i=q,o=i.child;if(q.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:aa(8,d,i)}var f=d.child;if(f!==null)f.return=d,q=f;else for(;q!==null;){d=q;var m=d.sibling,_=d.return;if(lI(d),d===c){q=null;break}if(m!==null){m.return=_,q=m;break}q=_}}}var T=i.alternate;if(T!==null){var I=T.child;if(I!==null){T.child=null;do{var N=I.sibling;I.sibling=null,I=N}while(I!==null)}}q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,q=o;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:aa(9,i,i.return)}var E=i.sibling;if(E!==null){E.return=i.return,q=E;break e}q=i.return}}var y=t.current;for(q=y;q!==null;){o=q;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,q=S;else e:for(o=y;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rh(9,a)}}catch(F){Le(a,a.return,F)}if(a===o){q=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,q=b;break e}q=a.return}}if(he=s,as(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(Qc,t)}catch{}r=!0}return r}finally{me=n,tn.transition=e}}return!1}function zv(t,e,n){e=Vi(n,e),e=XT(t,e,1),t=Fr(t,e,1),e=Rt(),t!==null&&(il(t,1,e),Vt(t,e))}function Le(t,e,n){if(t.tag===3)zv(t,t,n);else for(;e!==null;){if(e.tag===3){zv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ur===null||!Ur.has(r))){t=Vi(n,t),t=JT(e,t,1),e=Fr(e,t,1),t=Rt(),e!==null&&(il(e,1,t),Vt(e,t));break}}e=e.return}}function ON(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Rt(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(ot&n)===n&&(Ge===4||Ge===3&&(ot&130023424)===ot&&500>Ue()-Vm?Cs(t,0):Mm|=n),Vt(t,e)}function yI(t,e){e===0&&(t.mode&1?(e=Jl,Jl<<=1,!(Jl&130023424)&&(Jl=4194304)):e=1);var n=Rt();t=nr(t,e),t!==null&&(il(t,e,n),Vt(t,n))}function LN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yI(t,n)}function MN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),yI(t,n)}var vI;vI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Lt.current)bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return bt=!1,IN(t,e,n);bt=!!(t.flags&131072)}else bt=!1,Ne&&e.flags&1048576&&IT(e,tc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Nu(t,e),t=e.pendingProps;var s=Di(e,wt.current);Ii(e,n),s=Pm(null,e,r,t,s,n);var i=xm();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mt(r)?(i=!0,Zu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Cm(e),s.updater=nh,e.stateNode=s,s._reactInternals=e,Wf(e,r,t,n),e=Gf(null,e,r,!0,i,n)):(e.tag=0,Ne&&i&&ym(e),Ct(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Nu(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=jN(r),t=ln(r,t),s){case 0:e=qf(null,e,r,t,n);break e;case 1:e=xv(null,e,r,t,n);break e;case 11:e=Nv(null,e,r,t,n);break e;case 14:e=Pv(null,e,r,ln(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),qf(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),xv(t,e,r,s,n);case 3:e:{if(nI(e),t===null)throw Error(B(387));r=e.pendingProps,i=e.memoizedState,s=i.element,NT(t,e),sc(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Vi(Error(B(423)),e),e=bv(t,e,r,n,s);break e}else if(r!==s){s=Vi(Error(B(424)),e),e=bv(t,e,r,n,s);break e}else for(Ht=jr(e.stateNode.containerInfo.firstChild),Kt=e,Ne=!0,cn=null,n=AT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Oi(),r===s){e=rr(t,e,n);break e}Ct(t,e,r,n)}e=e.child}return e;case 5:return PT(e),t===null&&zf(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Mf(r,s)?o=null:i!==null&&Mf(r,i)&&(e.flags|=32),tI(t,e),Ct(t,e,o,n),e.child;case 6:return t===null&&zf(e),null;case 13:return rI(t,e,n);case 4:return Rm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Li(e,null,r,n):Ct(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),Nv(t,e,r,s,n);case 7:return Ct(t,e,e.pendingProps,n),e.child;case 8:return Ct(t,e,e.pendingProps.children,n),e.child;case 12:return Ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ee(nc,r._currentValue),r._currentValue=o,i!==null)if(_n(i.value,o)){if(i.children===s.children&&!Lt.current){e=rr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Xn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Bf(i.return,n,e),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bf(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ct(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ii(e,n),s=rn(s),r=r(s),e.flags|=1,Ct(t,e,r,n),e.child;case 14:return r=e.type,s=ln(r,e.pendingProps),s=ln(r.type,s),Pv(t,e,r,s,n);case 15:return ZT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),Nu(t,e),e.tag=1,Mt(r)?(t=!0,Zu(e)):t=!1,Ii(e,n),YT(e,r,s),Wf(e,r,s,n),Gf(null,e,r,!0,t,n);case 19:return sI(t,e,n);case 22:return eI(t,e,n)}throw Error(B(156,e.tag))};function wI(t,e){return G0(t,e)}function VN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new VN(t,e,n,r)}function zm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jN(t){if(typeof t=="function")return zm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===om)return 11;if(t===am)return 14}return 2}function Br(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bu(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")zm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case oi:return Rs(n.children,s,i,e);case im:o=8,s|=8;break;case pf:return t=en(12,n,e,s|2),t.elementType=pf,t.lanes=i,t;case mf:return t=en(13,n,e,s),t.elementType=mf,t.lanes=i,t;case gf:return t=en(19,n,e,s),t.elementType=gf,t.lanes=i,t;case P0:return ih(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k0:o=10;break e;case N0:o=9;break e;case om:o=11;break e;case am:o=14;break e;case Tr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=en(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Rs(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function ih(t,e,n,r){return t=en(22,t,r,e),t.elementType=P0,t.lanes=n,t.stateNode={isHidden:!1},t}function Fd(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Ud(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function FN(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wd(0),this.expirationTimes=wd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Bm(t,e,n,r,s,i,o,a,u){return t=new FN(t,e,n,a,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=en(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cm(i),t}function UN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function EI(t){if(!t)return Jr;t=t._reactInternals;e:{if(Hs(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Mt(n))return ET(t,n,e)}return e}function TI(t,e,n,r,s,i,o,a,u){return t=Bm(n,r,!0,t,s,i,o,a,u),t.context=EI(null),n=t.current,r=Rt(),s=zr(n),i=Xn(r,s),i.callback=e??null,Fr(n,i,s),t.current.lanes=s,il(t,s,r),Vt(t,r),t}function oh(t,e,n,r){var s=e.current,i=Rt(),o=zr(s);return n=EI(n),e.context===null?e.context=n:e.pendingContext=n,e=Xn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Fr(s,e,o),t!==null&&(mn(t,s,o,i),Ru(t,s,o)),o}function dc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $m(t,e){Bv(t,e),(t=t.alternate)&&Bv(t,e)}function zN(){return null}var II=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wm(t){this._internalRoot=t}ah.prototype.render=Wm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));oh(t,e,null,null)};ah.prototype.unmount=Wm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Os(function(){oh(null,t,null,null)}),e[tr]=null}};function ah(t){this._internalRoot=t}ah.prototype.unstable_scheduleHydration=function(t){if(t){var e=eT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Sr.length&&e!==0&&e<Sr[n].priority;n++);Sr.splice(n,0,t),n===0&&nT(t)}};function Hm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $v(){}function BN(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=dc(o);i.call(c)}}var o=TI(e,r,t,0,null,!1,!1,"",$v);return t._reactRootContainer=o,t[tr]=o.current,Na(t.nodeType===8?t.parentNode:t),Os(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var c=dc(u);a.call(c)}}var u=Bm(t,0,!1,null,null,!1,!1,"",$v);return t._reactRootContainer=u,t[tr]=u.current,Na(t.nodeType===8?t.parentNode:t),Os(function(){oh(e,u,n,r)}),u}function uh(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var u=dc(o);a.call(u)}}oh(e,o,t,s)}else o=BN(n,e,t,s,r);return dc(o)}J0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qo(e.pendingLanes);n!==0&&(cm(e,n|1),Vt(e,Ue()),!(he&6)&&(ji=Ue()+500,as()))}break;case 13:Os(function(){var r=nr(t,1);if(r!==null){var s=Rt();mn(r,t,1,s)}}),$m(t,1)}};hm=function(t){if(t.tag===13){var e=nr(t,134217728);if(e!==null){var n=Rt();mn(e,t,134217728,n)}$m(t,134217728)}};Z0=function(t){if(t.tag===13){var e=zr(t),n=nr(t,e);if(n!==null){var r=Rt();mn(n,t,e,r)}$m(t,e)}};eT=function(){return me};tT=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};Rf=function(t,e,n){switch(e){case"input":if(vf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Zc(r);if(!s)throw Error(B(90));b0(r),vf(r,s)}}}break;case"textarea":O0(t,n);break;case"select":e=n.value,e!=null&&vi(t,!!n.multiple,e,!1)}};z0=jm;B0=Os;var $N={usingClientEntryPoint:!1,Events:[al,ci,Zc,F0,U0,jm]},Mo={findFiberByHostInstance:vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},WN={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=H0(t),t===null?null:t.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||zN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{Qc=uu.inject(WN),Cn=uu}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$N;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hm(e))throw Error(B(200));return UN(t,e,null,n)};Yt.createRoot=function(t,e){if(!Hm(t))throw Error(B(299));var n=!1,r="",s=II;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Bm(t,1,!1,null,null,n,!1,r,s),t[tr]=e.current,Na(t.nodeType===8?t.parentNode:t),new Wm(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=H0(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return Os(t)};Yt.hydrate=function(t,e,n){if(!lh(e))throw Error(B(200));return uh(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!Hm(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=II;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=TI(e,null,t,1,n??null,s,!1,i,o),t[tr]=e.current,Na(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new ah(e)};Yt.render=function(t,e,n){if(!lh(e))throw Error(B(200));return uh(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!lh(t))throw Error(B(40));return t._reactRootContainer?(Os(function(){uh(null,null,t,!1,function(){t._reactRootContainer=null,t[tr]=null})}),!0):!1};Yt.unstable_batchedUpdates=jm;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lh(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return uh(t,e,n,!1,r)};Yt.version="18.3.1-next-f1338f8080-20240426";function SI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(SI)}catch(t){console.error(t)}}SI(),S0.exports=Yt;var HN=S0.exports,Wv=HN;df.createRoot=Wv.createRoot,df.hydrateRoot=Wv.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ja.apply(this,arguments)}var br;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(br||(br={}));const Hv="popstate";function qN(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return ip("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:fc(s)}return KN(e,n,null,t)}function be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function qm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function GN(){return Math.random().toString(36).substr(2,8)}function qv(t,e){return{usr:t.state,key:t.key,idx:e}}function ip(t,e,n,r){return n===void 0&&(n=null),ja({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?no(e):e,{state:n,key:e&&e.key||r||GN()})}function fc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function no(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function KN(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=br.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(ja({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=br.Pop;let N=d(),E=N==null?null:N-c;c=N,u&&u({action:a,location:I.location,delta:E})}function m(N,E){a=br.Push;let y=ip(I.location,N,E);c=d()+1;let S=qv(y,c),b=I.createHref(y);try{o.pushState(S,"",b)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;s.location.assign(b)}i&&u&&u({action:a,location:I.location,delta:1})}function _(N,E){a=br.Replace;let y=ip(I.location,N,E);c=d();let S=qv(y,c),b=I.createHref(y);o.replaceState(S,"",b),i&&u&&u({action:a,location:I.location,delta:0})}function T(N){let E=s.location.origin!=="null"?s.location.origin:s.location.href,y=typeof N=="string"?N:fc(N);return y=y.replace(/ $/,"%20"),be(E,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,E)}let I={get action(){return a},get location(){return t(s,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(Hv,f),u=N,()=>{s.removeEventListener(Hv,f),u=null}},createHref(N){return e(s,N)},createURL:T,encodeLocation(N){let E=T(N);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:_,go(N){return o.go(N)}};return I}var Gv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Gv||(Gv={}));function QN(t,e,n){return n===void 0&&(n="/"),YN(t,e,n)}function YN(t,e,n,r){let s=typeof e=="string"?no(e):e,i=Fi(s.pathname||"/",n);if(i==null)return null;let o=CI(t);XN(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=lP(i);a=oP(o[u],c)}return a}function CI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(be(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=$r([r,u.relativePath]),d=n.concat(u);i.children&&i.children.length>0&&(be(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),CI(i.children,e,d,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:sP(c,i.index),routesMeta:d})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let u of RI(i.path))s(i,o,u)}),e}function RI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=RI(r.join("/")),a=[];return a.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function XN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:iP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const JN=/^:[\w-]+$/,ZN=3,eP=2,tP=1,nP=10,rP=-2,Kv=t=>t==="*";function sP(t,e){let n=t.split("/"),r=n.length;return n.some(Kv)&&(r+=rP),e&&(r+=eP),n.filter(s=>!Kv(s)).reduce((s,i)=>s+(JN.test(i)?ZN:i===""?tP:nP),r)}function iP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function oP(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=i==="/"?e:e.slice(i.length)||"/",f=op({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f)return null;Object.assign(s,f.params),o.push({params:s,pathname:$r([i,f.pathname]),pathnameBase:fP($r([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=$r([i,f.pathnameBase]))}return o}function op(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=aP(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:_}=d;if(m==="*"){let I=a[f]||"";o=i.slice(0,i.length-I.length).replace(/(.)\/+$/,"$1")}const T=a[f];return _&&!T?c[m]=void 0:c[m]=(T||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:t}}function aP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),qm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function lP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Fi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const uP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cP=t=>uP.test(t);function hP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?no(t):t,i;if(n)if(cP(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),qm(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=Qv(n.substring(1),"/"):i=Qv(n,e)}else i=e;return{pathname:i,search:pP(r),hash:mP(s)}}function Qv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function zd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Gm(t,e){let n=dP(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Km(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=no(t):(s=ja({},t),be(!s.pathname||!s.pathname.includes("?"),zd("?","pathname","search",s)),be(!s.pathname||!s.pathname.includes("#"),zd("#","pathname","hash",s)),be(!s.search||!s.search.includes("#"),zd("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;s.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=hP(s,a),c=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const $r=t=>t.join("/").replace(/\/\/+/g,"/"),fP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),pP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,mP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function gP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const AI=["post","put","patch","delete"];new Set(AI);const _P=["get",...AI];new Set(_P);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fa(){return Fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fa.apply(this,arguments)}const ch=O.createContext(null),kI=O.createContext(null),pr=O.createContext(null),hh=O.createContext(null),mr=O.createContext({outlet:null,matches:[],isDataRoute:!1}),NI=O.createContext(null);function yP(t,e){let{relative:n}=e===void 0?{}:e;ro()||be(!1);let{basename:r,navigator:s}=O.useContext(pr),{hash:i,pathname:o,search:a}=dh(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:$r([r,o])),s.createHref({pathname:u,search:a,hash:i})}function ro(){return O.useContext(hh)!=null}function so(){return ro()||be(!1),O.useContext(hh).location}function PI(t){O.useContext(pr).static||O.useLayoutEffect(t)}function Dn(){let{isDataRoute:t}=O.useContext(mr);return t?xP():vP()}function vP(){ro()||be(!1);let t=O.useContext(ch),{basename:e,future:n,navigator:r}=O.useContext(pr),{matches:s}=O.useContext(mr),{pathname:i}=so(),o=JSON.stringify(Gm(s,n.v7_relativeSplatPath)),a=O.useRef(!1);return PI(()=>{a.current=!0}),O.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Km(c,JSON.parse(o),i,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:$r([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,i,t])}function Qm(){let{matches:t}=O.useContext(mr),e=t[t.length-1];return e?e.params:{}}function dh(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(pr),{matches:s}=O.useContext(mr),{pathname:i}=so(),o=JSON.stringify(Gm(s,r.v7_relativeSplatPath));return O.useMemo(()=>Km(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function wP(t,e){return EP(t,e)}function EP(t,e,n,r){ro()||be(!1);let{navigator:s}=O.useContext(pr),{matches:i}=O.useContext(mr),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=so(),d;if(e){var f;let N=typeof e=="string"?no(e):e;u==="/"||(f=N.pathname)!=null&&f.startsWith(u)||be(!1),d=N}else d=c;let m=d.pathname||"/",_=m;if(u!=="/"){let N=u.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(N.length).join("/")}let T=QN(t,{pathname:_}),I=RP(T&&T.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:$r([u,s.encodeLocation?s.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:$r([u,s.encodeLocation?s.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),i,n,r);return e&&I?O.createElement(hh.Provider,{value:{location:Fa({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:br.Pop}},I):I}function TP(){let t=PP(),e=gP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:s},n):null,null)}const IP=O.createElement(TP,null);class SP extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(mr.Provider,{value:this.props.routeContext},O.createElement(NI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CP(t){let{routeContext:e,match:n,children:r}=t,s=O.useContext(ch);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(mr.Provider,{value:e},r)}function RP(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(s=n)==null?void 0:s.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||be(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:_}=n,T=f.route.loader&&m[f.route.id]===void 0&&(!_||_[f.route.id]===void 0);if(f.route.lazy||T){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let _,T=!1,I=null,N=null;n&&(_=a&&f.route.id?a[f.route.id]:void 0,I=f.route.errorElement||IP,u&&(c<0&&m===0?(bP("route-fallback"),T=!0,N=null):c===m&&(T=!0,N=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),y=()=>{let S;return _?S=I:T?S=N:f.route.Component?S=O.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=d,O.createElement(CP,{match:f,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?O.createElement(SP,{location:n.location,revalidation:n.revalidation,component:I,error:_,children:y(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):y()},null)}var xI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(xI||{}),bI=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(bI||{});function AP(t){let e=O.useContext(ch);return e||be(!1),e}function kP(t){let e=O.useContext(kI);return e||be(!1),e}function NP(t){let e=O.useContext(mr);return e||be(!1),e}function DI(t){let e=NP(),n=e.matches[e.matches.length-1];return n.route.id||be(!1),n.route.id}function PP(){var t;let e=O.useContext(NI),n=kP(),r=DI();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function xP(){let{router:t}=AP(xI.UseNavigateStable),e=DI(bI.UseNavigateStable),n=O.useRef(!1);return PI(()=>{n.current=!0}),O.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Fa({fromRouteId:e},i)))},[t,e])}const Yv={};function bP(t,e,n){Yv[t]||(Yv[t]=!0)}function DP(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function OI(t){let{to:e,replace:n,state:r,relative:s}=t;ro()||be(!1);let{future:i,static:o}=O.useContext(pr),{matches:a}=O.useContext(mr),{pathname:u}=so(),c=Dn(),d=Km(e,Gm(a,i.v7_relativeSplatPath),u,s==="path"),f=JSON.stringify(d);return O.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:s}),[c,f,s,n,r]),null}function wn(t){be(!1)}function OP(t){let{basename:e="/",children:n=null,location:r,navigationType:s=br.Pop,navigator:i,static:o=!1,future:a}=t;ro()&&be(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:i,static:o,future:Fa({v7_relativeSplatPath:!1},a)}),[u,a,i,o]);typeof r=="string"&&(r=no(r));let{pathname:d="/",search:f="",hash:m="",state:_=null,key:T="default"}=r,I=O.useMemo(()=>{let N=Fi(d,u);return N==null?null:{location:{pathname:N,search:f,hash:m,state:_,key:T},navigationType:s}},[u,d,f,m,_,T,s]);return I==null?null:O.createElement(pr.Provider,{value:c},O.createElement(hh.Provider,{children:n,value:I}))}function LP(t){let{children:e,location:n}=t;return wP(ap(e),n)}new Promise(()=>{});function ap(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,s)=>{if(!O.isValidElement(r))return;let i=[...e,s];if(r.type===O.Fragment){n.push.apply(n,ap(r.props.children,i));return}r.type!==wn&&be(!1),!r.props.index||!r.props.children||be(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ap(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pc(){return pc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pc.apply(this,arguments)}function LI(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function MP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function VP(t,e){return t.button===0&&(!e||e==="_self")&&!MP(t)}const jP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],FP=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],UP="6";try{window.__reactRouterVersion=UP}catch{}const zP=O.createContext({isTransitioning:!1}),BP="startTransition",Xv=OA[BP];function $P(t){let{basename:e,children:n,future:r,window:s}=t,i=O.useRef();i.current==null&&(i.current=qN({window:s,v5Compat:!0}));let o=i.current,[a,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=O.useCallback(f=>{c&&Xv?Xv(()=>u(f)):u(f)},[u,c]);return O.useLayoutEffect(()=>o.listen(d),[o,d]),O.useEffect(()=>DP(r),[r]),O.createElement(OP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const WP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",HP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qP=O.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:a,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,m=LI(e,jP),{basename:_}=O.useContext(pr),T,I=!1;if(typeof c=="string"&&HP.test(c)&&(T=c,WP))try{let S=new URL(window.location.href),b=c.startsWith("//")?new URL(S.protocol+c):new URL(c),F=Fi(b.pathname,_);b.origin===S.origin&&F!=null?c=F+b.search+b.hash:I=!0}catch{}let N=yP(c,{relative:s}),E=QP(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:s,viewTransition:f});function y(S){r&&r(S),S.defaultPrevented||E(S)}return O.createElement("a",pc({},m,{href:T||N,onClick:I||i?r:y,ref:n,target:u}))}),GP=O.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:o=!1,style:a,to:u,viewTransition:c,children:d}=e,f=LI(e,FP),m=dh(u,{relative:f.relative}),_=so(),T=O.useContext(kI),{navigator:I,basename:N}=O.useContext(pr),E=T!=null&&YP(m)&&c===!0,y=I.encodeLocation?I.encodeLocation(m).pathname:m.pathname,S=_.pathname,b=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;s||(S=S.toLowerCase(),b=b?b.toLowerCase():null,y=y.toLowerCase()),b&&N&&(b=Fi(b,N)||b);const F=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let U=S===y||!o&&S.startsWith(y)&&S.charAt(F)==="/",R=b!=null&&(b===y||!o&&b.startsWith(y)&&b.charAt(y.length)==="/"),w={isActive:U,isPending:R,isTransitioning:E},C=U?r:void 0,k;typeof i=="function"?k=i(w):k=[i,U?"active":null,R?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let x=typeof a=="function"?a(w):a;return O.createElement(qP,pc({},f,{"aria-current":C,className:k,ref:n,style:x,to:u,viewTransition:c}),typeof d=="function"?d(w):d)});var lp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(lp||(lp={}));var Jv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Jv||(Jv={}));function KP(t){let e=O.useContext(ch);return e||be(!1),e}function QP(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:a}=e===void 0?{}:e,u=Dn(),c=so(),d=dh(t,{relative:o});return O.useCallback(f=>{if(VP(f,n)){f.preventDefault();let m=r!==void 0?r:fc(c)===fc(d);u(t,{replace:m,state:s,preventScrollReset:i,relative:o,viewTransition:a})}},[c,u,d,r,s,n,t,i,o,a])}function YP(t,e){e===void 0&&(e={});let n=O.useContext(zP);n==null&&be(!1);let{basename:r}=KP(lp.useViewTransitionState),s=dh(t,{relative:e.relative});if(!n.isTransitioning)return!1;let i=Fi(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Fi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return op(s.pathname,o)!=null||op(s.pathname,i)!=null}const XP={},Zv=t=>{let e;const n=new Set,r=(d,f)=>{const m=typeof d=="function"?d(e):d;if(!Object.is(m,e)){const _=e;e=f??(typeof m!="object"||m===null)?m:Object.assign({},e,m),n.forEach(T=>T(e,_))}},s=()=>e,u={setState:r,getState:s,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(XP?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,s,u);return u},JP=t=>t?Zv(t):Zv;var MI={exports:{}},VI={},jI={exports:{}},FI={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ui=O;function ZP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ex=typeof Object.is=="function"?Object.is:ZP,tx=Ui.useState,nx=Ui.useEffect,rx=Ui.useLayoutEffect,sx=Ui.useDebugValue;function ix(t,e){var n=e(),r=tx({inst:{value:n,getSnapshot:e}}),s=r[0].inst,i=r[1];return rx(function(){s.value=n,s.getSnapshot=e,Bd(s)&&i({inst:s})},[t,n,e]),nx(function(){return Bd(s)&&i({inst:s}),t(function(){Bd(s)&&i({inst:s})})},[t]),sx(n),n}function Bd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ex(t,n)}catch{return!0}}function ox(t,e){return e()}var ax=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ox:ix;FI.useSyncExternalStore=Ui.useSyncExternalStore!==void 0?Ui.useSyncExternalStore:ax;jI.exports=FI;var lx=jI.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh=O,ux=lx;function cx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hx=typeof Object.is=="function"?Object.is:cx,dx=ux.useSyncExternalStore,fx=fh.useRef,px=fh.useEffect,mx=fh.useMemo,gx=fh.useDebugValue;VI.useSyncExternalStoreWithSelector=function(t,e,n,r,s){var i=fx(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=mx(function(){function u(_){if(!c){if(c=!0,d=_,_=r(_),s!==void 0&&o.hasValue){var T=o.value;if(s(T,_))return f=T}return f=_}if(T=f,hx(d,_))return T;var I=r(_);return s!==void 0&&s(T,I)?(d=_,T):(d=_,f=I)}var c=!1,d,f,m=n===void 0?null:n;return[function(){return u(e())},m===null?void 0:function(){return u(m())}]},[e,n,r,s]);var a=dx(t,i[0],i[1]);return px(function(){o.hasValue=!0,o.value=a},[a]),gx(a),a};MI.exports=VI;var _x=MI.exports;const yx=d0(_x),UI={},{useDebugValue:vx}=tm,{useSyncExternalStoreWithSelector:wx}=yx;let ew=!1;const Ex=t=>t;function Tx(t,e=Ex,n){(UI?"production":void 0)!=="production"&&n&&!ew&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),ew=!0);const r=wx(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return vx(r),r}const tw=t=>{(UI?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?JP(t):t,n=(r,s)=>Tx(e,r,s);return Object.assign(n,e),n},Ym=t=>t?tw(t):tw,Ix={};function Sx(t,e){let n;try{n=t()}catch{return}return{getItem:s=>{var i;const o=u=>u===null?null:JSON.parse(u,void 0),a=(i=n.getItem(s))!=null?i:null;return a instanceof Promise?a.then(o):o(a)},setItem:(s,i)=>n.setItem(s,JSON.stringify(i,void 0)),removeItem:s=>n.removeItem(s)}}const Ua=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return Ua(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return Ua(r)(n)}}}},Cx=(t,e)=>(n,r,s)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:N=>N,version:0,merge:(N,E)=>({...E,...N}),...e},o=!1;const a=new Set,u=new Set;let c;try{c=i.getStorage()}catch{}if(!c)return t((...N)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...N)},r,s);const d=Ua(i.serialize),f=()=>{const N=i.partialize({...r()});let E;const y=d({state:N,version:i.version}).then(S=>c.setItem(i.name,S)).catch(S=>{E=S});if(E)throw E;return y},m=s.setState;s.setState=(N,E)=>{m(N,E),f()};const _=t((...N)=>{n(...N),f()},r,s);let T;const I=()=>{var N;if(!c)return;o=!1,a.forEach(y=>y(r()));const E=((N=i.onRehydrateStorage)==null?void 0:N.call(i,r()))||void 0;return Ua(c.getItem.bind(c))(i.name).then(y=>{if(y)return i.deserialize(y)}).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==i.version){if(i.migrate)return i.migrate(y.state,y.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return y.state}).then(y=>{var S;return T=i.merge(y,(S=r())!=null?S:_),n(T,!0),f()}).then(()=>{E==null||E(T,void 0),o=!0,u.forEach(y=>y(T))}).catch(y=>{E==null||E(void 0,y)})};return s.persist={setOptions:N=>{i={...i,...N},N.getStorage&&(c=N.getStorage())},clearStorage:()=>{c==null||c.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>I(),hasHydrated:()=>o,onHydrate:N=>(a.add(N),()=>{a.delete(N)}),onFinishHydration:N=>(u.add(N),()=>{u.delete(N)})},I(),T||_},Rx=(t,e)=>(n,r,s)=>{let i={storage:Sx(()=>localStorage),partialize:I=>I,version:0,merge:(I,N)=>({...N,...I}),...e},o=!1;const a=new Set,u=new Set;let c=i.storage;if(!c)return t((...I)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...I)},r,s);const d=()=>{const I=i.partialize({...r()});return c.setItem(i.name,{state:I,version:i.version})},f=s.setState;s.setState=(I,N)=>{f(I,N),d()};const m=t((...I)=>{n(...I),d()},r,s);s.getInitialState=()=>m;let _;const T=()=>{var I,N;if(!c)return;o=!1,a.forEach(y=>{var S;return y((S=r())!=null?S:m)});const E=((N=i.onRehydrateStorage)==null?void 0:N.call(i,(I=r())!=null?I:m))||void 0;return Ua(c.getItem.bind(c))(i.name).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==i.version){if(i.migrate)return[!0,i.migrate(y.state,y.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,y.state];return[!1,void 0]}).then(y=>{var S;const[b,F]=y;if(_=i.merge(F,(S=r())!=null?S:m),n(_,!0),b)return d()}).then(()=>{E==null||E(_,void 0),_=r(),o=!0,u.forEach(y=>y(_))}).catch(y=>{E==null||E(void 0,y)})};return s.persist={setOptions:I=>{i={...i,...I},I.storage&&(c=I.storage)},clearStorage:()=>{c==null||c.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>T(),hasHydrated:()=>o,onHydrate:I=>(a.add(I),()=>{a.delete(I)}),onFinishHydration:I=>(u.add(I),()=>{u.delete(I)})},i.skipHydration||T(),_||m},Ax=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((Ix?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Cx(t,e)):Rx(t,e),kx=Ax,On=Ym(kx((t,e)=>({user:null,userProfile:null,isAuthenticated:!1,isLoading:!0,setUser:n=>t({user:n,isAuthenticated:!!n}),setUserProfile:n=>t({userProfile:n}),setLoading:n=>t({isLoading:n}),logout:()=>t({user:null,userProfile:null,isAuthenticated:!1})}),{name:"dreamledge-auth",partialize:t=>({user:t.user,isAuthenticated:t.isAuthenticated})})),Xm=Ym((t,e)=>({currentBattle:null,participants:[],battlePhase:"idle",round:1,timeRemaining:0,isHost:!1,userRole:null,userSlot:null,setCurrentBattle:n=>t({currentBattle:n}),setParticipants:n=>t({participants:n}),setBattlePhase:n=>t({battlePhase:n}),setRound:n=>t({round:n}),setTimeRemaining:n=>t({timeRemaining:n}),setIsHost:n=>t({isHost:n}),setUserRole:n=>t({userRole:n}),setUserSlot:n=>t({userSlot:n}),resetBattle:()=>t({currentBattle:null,participants:[],battlePhase:"idle",round:1,timeRemaining:0,isHost:!1,userRole:null,userSlot:null})})),ph=Ym(t=>({isSidebarOpen:!1,isGifPickerOpen:!1,activeModal:null,notifications:[],toggleSidebar:()=>t(e=>({isSidebarOpen:!e.isSidebarOpen})),closeSidebar:()=>t({isSidebarOpen:!1}),toggleGifPicker:()=>t(e=>({isGifPickerOpen:!e.isGifPickerOpen})),closeGifPicker:()=>t({isGifPickerOpen:!1}),openModal:e=>t({activeModal:e}),closeModal:()=>t({activeModal:null}),addNotification:e=>t(n=>({notifications:[...n.notifications,{id:Date.now(),...e}]})),removeNotification:e=>t(n=>({notifications:n.notifications.filter(r=>r.id!==e)}))}));/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Nx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ne=(t,e)=>{const n=O.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:a="",children:u,...c},d)=>O.createElement("svg",{ref:d,...Nx,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${Px(t)}`,a].join(" "),...c},[...e.map(([f,m])=>O.createElement(f,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=ne("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=ne("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=ne("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=ne("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=ne("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=ne("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=ne("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=ne("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=ne("Gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=ne("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=ne("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=ne("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=ne("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=ne("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=ne("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zI=ne("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=ne("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BI=ne("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=ne("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=ne("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=ne("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=ne("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=ne("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $I=ne("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=ne("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WI=ne("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=ne("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=ne("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=ne("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=ne("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HI=ne("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=ne("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=ne("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=ne("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=ne("VideoOff",[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8",key:"ubwiq0"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z",key:"1l10zd"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qI=ne("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=ne("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=ne("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=ne("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Qx(){const{isAuthenticated:t,logout:e}=On(),{closeSidebar:n}=ph(),r=Dn(),s=()=>{e(),r("/"),n()},i=[{path:"/lobby",icon:jx,label:"Arena"},{path:"/leaderboard",icon:eg,label:"Rank"},{path:"/messages",icon:BI,label:"Messages"},{path:"/profile",icon:tg,label:"Profile"}];return p.jsx(p.Fragment,{children:t&&p.jsxs("div",{className:"mobile-nav",children:[i.map(o=>p.jsxs(GP,{to:o.path,className:({isActive:a})=>`mobile-nav-item ${a?"active":""}`,children:[p.jsx(o.icon,{size:24}),p.jsx("span",{children:o.label})]},o.path)),p.jsxs("button",{onClick:s,className:"mobile-nav-item mobile-logout",children:[p.jsx(zx,{size:24}),p.jsx("span",{children:"Out"})]})]})})}var ow={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(t,e){if(!t)throw io(e)},io=function(t){return new Error("Firebase Database ("+GI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Yx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ng={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,d=i>>2,f=(i&3)<<4|a>>4;let m=(a&15)<<2|c>>6,_=c&63;u||(_=64,o||(m=64)),r.push(n[d],n[f],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(KI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw new Xx;const m=i<<2|a>>4;if(r.push(m),c!==64){const _=a<<4&240|c>>2;if(r.push(_),f!==64){const T=c<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QI=function(t){const e=KI(t);return ng.encodeByteArray(e,!0)},gc=function(t){return QI(t).replace(/\./g,"")},_c=function(t){try{return ng.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(t){return YI(void 0,t)}function YI(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Zx(n)||(t[n]=YI(t[n],e[n]));return t}function Zx(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2=()=>e2().__FIREBASE_DEFAULTS__,n2=()=>{if(typeof process>"u"||typeof ow>"u")return;const t=ow.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},r2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_c(t[1]);return e&&JSON.parse(e)},mh=()=>{try{return t2()||n2()||r2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},XI=t=>{var e,n;return(n=(e=mh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rg=t=>{const e=XI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},JI=()=>{var t;return(t=mh())===null||t===void 0?void 0:t.config},ZI=t=>{var e;return(e=mh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[gc(JSON.stringify(n)),gc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ig(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function s2(){var t;const e=(t=mh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function i2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function o2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function eS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function a2(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function l2(){return GI.NODE_ADMIN===!0}function u2(){return!s2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function c2(){try{return typeof indexedDB=="object"}catch{return!1}}function h2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=d2,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cl.prototype.create)}}class cl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?f2(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ln(s,a,r)}}function f2(t,e){return t.replace(p2,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const p2=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){return JSON.parse(t)}function Ze(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=za(_c(i[0])||""),n=za(_c(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},m2=function(t){const e=tS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},g2=function(t){const e=tS(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function zi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function hp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yc(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function vc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(aw(i)&&aw(o)){if(!vc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function aw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^i&(o^a),d=1518500249):(c=i^o^a,d=1859775393):f<60?(c=i&o|a&(i|o),d=2400959708):(c=i^o^a,d=3395469782);const m=(s<<5|s>>>27)+c+u+d+r[f]&4294967295;u=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function y2(t,e){const n=new v2(t,e);return n.subscribe.bind(n)}class v2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");w2(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Wd),s.error===void 0&&(s.error=Wd),s.complete===void 0&&(s.complete=Wd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function w2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wd(){}function og(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,$(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},_h=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t){return t&&t._delegate?t._delegate:t}class sr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(S2(e))try{this.getOrInitializeService({instanceIdentifier:_s})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_s){return this.instances.has(e)}getOptions(e=_s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:I2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_s){return this.component?this.component.multipleInstances?e:_s:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function I2(t){return t===_s?void 0:t}function S2(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new T2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const R2={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},A2=le.INFO,k2={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},N2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=k2[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yh{constructor(e){this.name=e,this._logLevel=A2,this._logHandler=N2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?R2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const P2=(t,e)=>e.some(n=>t instanceof n);let lw,uw;function x2(){return lw||(lw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function b2(){return uw||(uw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nS=new WeakMap,dp=new WeakMap,rS=new WeakMap,Hd=new WeakMap,ag=new WeakMap;function D2(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(qr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nS.set(n,t)}).catch(()=>{}),ag.set(e,t),e}function O2(t){if(dp.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});dp.set(t,e)}let fp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function L2(t){fp=t(fp)}function M2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qd(this),e,...n);return rS.set(r,e.sort?e.sort():[e]),qr(r)}:b2().includes(t)?function(...e){return t.apply(qd(this),e),qr(nS.get(this))}:function(...e){return qr(t.apply(qd(this),e))}}function V2(t){return typeof t=="function"?M2(t):(t instanceof IDBTransaction&&O2(t),P2(t,x2())?new Proxy(t,fp):t)}function qr(t){if(t instanceof IDBRequest)return D2(t);if(Hd.has(t))return Hd.get(t);const e=V2(t);return e!==t&&(Hd.set(t,e),ag.set(e,t)),e}const qd=t=>ag.get(t);function j2(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=qr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(qr(o.result),u.oldVersion,u.newVersion,qr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const F2=["get","getKey","getAll","getAllKeys","count"],U2=["put","add","delete","clear"],Gd=new Map;function cw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gd.get(e))return Gd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=U2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||F2.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&u.done]))[0]};return Gd.set(e,i),i}L2(t=>({...t,get:(e,n,r)=>cw(e,n)||t.get(e,n,r),has:(e,n)=>!!cw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(B2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function B2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pp="@firebase/app",hw="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new yh("@firebase/app"),$2="@firebase/app-compat",W2="@firebase/analytics-compat",H2="@firebase/analytics",q2="@firebase/app-check-compat",G2="@firebase/app-check",K2="@firebase/auth",Q2="@firebase/auth-compat",Y2="@firebase/database",X2="@firebase/data-connect",J2="@firebase/database-compat",Z2="@firebase/functions",eb="@firebase/functions-compat",tb="@firebase/installations",nb="@firebase/installations-compat",rb="@firebase/messaging",sb="@firebase/messaging-compat",ib="@firebase/performance",ob="@firebase/performance-compat",ab="@firebase/remote-config",lb="@firebase/remote-config-compat",ub="@firebase/storage",cb="@firebase/storage-compat",hb="@firebase/firestore",db="@firebase/vertexai-preview",fb="@firebase/firestore-compat",pb="firebase",mb="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="[DEFAULT]",gb={[pp]:"fire-core",[$2]:"fire-core-compat",[H2]:"fire-analytics",[W2]:"fire-analytics-compat",[G2]:"fire-app-check",[q2]:"fire-app-check-compat",[K2]:"fire-auth",[Q2]:"fire-auth-compat",[Y2]:"fire-rtdb",[X2]:"fire-data-connect",[J2]:"fire-rtdb-compat",[Z2]:"fire-fn",[eb]:"fire-fn-compat",[tb]:"fire-iid",[nb]:"fire-iid-compat",[rb]:"fire-fcm",[sb]:"fire-fcm-compat",[ib]:"fire-perf",[ob]:"fire-perf-compat",[ab]:"fire-rc",[lb]:"fire-rc-compat",[ub]:"fire-gcs",[cb]:"fire-gcs-compat",[hb]:"fire-fst",[fb]:"fire-fst-compat",[db]:"fire-vertex","fire-js":"fire-js",[pb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new Map,_b=new Map,gp=new Map;function dw(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zr(t){const e=t.name;if(gp.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;gp.set(e,t);for(const n of wc.values())dw(n,t);for(const n of _b.values())dw(n,t);return!0}function hl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dr(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new cl("app","Firebase",yb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=mb;function sS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mp,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Gr.create("bad-app-name",{appName:String(s)});if(n||(n=JI()),!n)throw Gr.create("no-options");const i=wc.get(s);if(i){if(vc(n,i.options)&&vc(r,i.config))return i;throw Gr.create("duplicate-app",{appName:s})}const o=new C2(s);for(const u of gp.values())o.addComponent(u);const a=new vb(n,r,o);return wc.set(s,a),a}function vh(t=mp){const e=wc.get(t);if(!e&&t===mp&&JI())return sS();if(!e)throw Gr.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let s=(r=gb[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(a.join(" "));return}Zr(new sr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb="firebase-heartbeat-database",Eb=1,Ba="firebase-heartbeat-store";let Kd=null;function iS(){return Kd||(Kd=j2(wb,Eb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ba)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gr.create("idb-open",{originalErrorMessage:t.message})})),Kd}async function Tb(t){try{const n=(await iS()).transaction(Ba),r=await n.objectStore(Ba).get(oS(t));return await n.done,r}catch(e){if(e instanceof Ln)ir.warn(e.message);else{const n=Gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(n.message)}}}async function fw(t,e){try{const r=(await iS()).transaction(Ba,"readwrite");await r.objectStore(Ba).put(e,oS(t)),await r.done}catch(n){if(n instanceof Ln)ir.warn(n.message);else{const r=Gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ir.warn(r.message)}}}function oS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=1024,Sb=30*24*60*60*1e3;class Cb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ab(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=pw();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Sb}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=pw(),{heartbeatsToSend:r,unsentEntries:s}=Rb(this._heartbeatsCache.heartbeats),i=gc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ir.warn(n),""}}}function pw(){return new Date().toISOString().substring(0,10)}function Rb(t,e=Ib){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),mw(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),mw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ab{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return c2()?h2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Tb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function mw(t){return gc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t){Zr(new sr("platform-logger",e=>new z2(e),"PRIVATE")),Zr(new sr("heartbeat",e=>new Cb(e),"PRIVATE")),nn(pp,hw,t),nn(pp,hw,"esm2017"),nn("fire-js","")}kb("");var gw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var As,aS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,w){function C(){}C.prototype=w.prototype,R.D=w.prototype,R.prototype=new C,R.prototype.constructor=R,R.C=function(k,x,P){for(var A=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)A[Te-2]=arguments[Te];return w.prototype[x].apply(k,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,w,C){C||(C=0);var k=Array(16);if(typeof w=="string")for(var x=0;16>x;++x)k[x]=w.charCodeAt(C++)|w.charCodeAt(C++)<<8|w.charCodeAt(C++)<<16|w.charCodeAt(C++)<<24;else for(x=0;16>x;++x)k[x]=w[C++]|w[C++]<<8|w[C++]<<16|w[C++]<<24;w=R.g[0],C=R.g[1],x=R.g[2];var P=R.g[3],A=w+(P^C&(x^P))+k[0]+3614090360&4294967295;w=C+(A<<7&4294967295|A>>>25),A=P+(x^w&(C^x))+k[1]+3905402710&4294967295,P=w+(A<<12&4294967295|A>>>20),A=x+(C^P&(w^C))+k[2]+606105819&4294967295,x=P+(A<<17&4294967295|A>>>15),A=C+(w^x&(P^w))+k[3]+3250441966&4294967295,C=x+(A<<22&4294967295|A>>>10),A=w+(P^C&(x^P))+k[4]+4118548399&4294967295,w=C+(A<<7&4294967295|A>>>25),A=P+(x^w&(C^x))+k[5]+1200080426&4294967295,P=w+(A<<12&4294967295|A>>>20),A=x+(C^P&(w^C))+k[6]+2821735955&4294967295,x=P+(A<<17&4294967295|A>>>15),A=C+(w^x&(P^w))+k[7]+4249261313&4294967295,C=x+(A<<22&4294967295|A>>>10),A=w+(P^C&(x^P))+k[8]+1770035416&4294967295,w=C+(A<<7&4294967295|A>>>25),A=P+(x^w&(C^x))+k[9]+2336552879&4294967295,P=w+(A<<12&4294967295|A>>>20),A=x+(C^P&(w^C))+k[10]+4294925233&4294967295,x=P+(A<<17&4294967295|A>>>15),A=C+(w^x&(P^w))+k[11]+2304563134&4294967295,C=x+(A<<22&4294967295|A>>>10),A=w+(P^C&(x^P))+k[12]+1804603682&4294967295,w=C+(A<<7&4294967295|A>>>25),A=P+(x^w&(C^x))+k[13]+4254626195&4294967295,P=w+(A<<12&4294967295|A>>>20),A=x+(C^P&(w^C))+k[14]+2792965006&4294967295,x=P+(A<<17&4294967295|A>>>15),A=C+(w^x&(P^w))+k[15]+1236535329&4294967295,C=x+(A<<22&4294967295|A>>>10),A=w+(x^P&(C^x))+k[1]+4129170786&4294967295,w=C+(A<<5&4294967295|A>>>27),A=P+(C^x&(w^C))+k[6]+3225465664&4294967295,P=w+(A<<9&4294967295|A>>>23),A=x+(w^C&(P^w))+k[11]+643717713&4294967295,x=P+(A<<14&4294967295|A>>>18),A=C+(P^w&(x^P))+k[0]+3921069994&4294967295,C=x+(A<<20&4294967295|A>>>12),A=w+(x^P&(C^x))+k[5]+3593408605&4294967295,w=C+(A<<5&4294967295|A>>>27),A=P+(C^x&(w^C))+k[10]+38016083&4294967295,P=w+(A<<9&4294967295|A>>>23),A=x+(w^C&(P^w))+k[15]+3634488961&4294967295,x=P+(A<<14&4294967295|A>>>18),A=C+(P^w&(x^P))+k[4]+3889429448&4294967295,C=x+(A<<20&4294967295|A>>>12),A=w+(x^P&(C^x))+k[9]+568446438&4294967295,w=C+(A<<5&4294967295|A>>>27),A=P+(C^x&(w^C))+k[14]+3275163606&4294967295,P=w+(A<<9&4294967295|A>>>23),A=x+(w^C&(P^w))+k[3]+4107603335&4294967295,x=P+(A<<14&4294967295|A>>>18),A=C+(P^w&(x^P))+k[8]+1163531501&4294967295,C=x+(A<<20&4294967295|A>>>12),A=w+(x^P&(C^x))+k[13]+2850285829&4294967295,w=C+(A<<5&4294967295|A>>>27),A=P+(C^x&(w^C))+k[2]+4243563512&4294967295,P=w+(A<<9&4294967295|A>>>23),A=x+(w^C&(P^w))+k[7]+1735328473&4294967295,x=P+(A<<14&4294967295|A>>>18),A=C+(P^w&(x^P))+k[12]+2368359562&4294967295,C=x+(A<<20&4294967295|A>>>12),A=w+(C^x^P)+k[5]+4294588738&4294967295,w=C+(A<<4&4294967295|A>>>28),A=P+(w^C^x)+k[8]+2272392833&4294967295,P=w+(A<<11&4294967295|A>>>21),A=x+(P^w^C)+k[11]+1839030562&4294967295,x=P+(A<<16&4294967295|A>>>16),A=C+(x^P^w)+k[14]+4259657740&4294967295,C=x+(A<<23&4294967295|A>>>9),A=w+(C^x^P)+k[1]+2763975236&4294967295,w=C+(A<<4&4294967295|A>>>28),A=P+(w^C^x)+k[4]+1272893353&4294967295,P=w+(A<<11&4294967295|A>>>21),A=x+(P^w^C)+k[7]+4139469664&4294967295,x=P+(A<<16&4294967295|A>>>16),A=C+(x^P^w)+k[10]+3200236656&4294967295,C=x+(A<<23&4294967295|A>>>9),A=w+(C^x^P)+k[13]+681279174&4294967295,w=C+(A<<4&4294967295|A>>>28),A=P+(w^C^x)+k[0]+3936430074&4294967295,P=w+(A<<11&4294967295|A>>>21),A=x+(P^w^C)+k[3]+3572445317&4294967295,x=P+(A<<16&4294967295|A>>>16),A=C+(x^P^w)+k[6]+76029189&4294967295,C=x+(A<<23&4294967295|A>>>9),A=w+(C^x^P)+k[9]+3654602809&4294967295,w=C+(A<<4&4294967295|A>>>28),A=P+(w^C^x)+k[12]+3873151461&4294967295,P=w+(A<<11&4294967295|A>>>21),A=x+(P^w^C)+k[15]+530742520&4294967295,x=P+(A<<16&4294967295|A>>>16),A=C+(x^P^w)+k[2]+3299628645&4294967295,C=x+(A<<23&4294967295|A>>>9),A=w+(x^(C|~P))+k[0]+4096336452&4294967295,w=C+(A<<6&4294967295|A>>>26),A=P+(C^(w|~x))+k[7]+1126891415&4294967295,P=w+(A<<10&4294967295|A>>>22),A=x+(w^(P|~C))+k[14]+2878612391&4294967295,x=P+(A<<15&4294967295|A>>>17),A=C+(P^(x|~w))+k[5]+4237533241&4294967295,C=x+(A<<21&4294967295|A>>>11),A=w+(x^(C|~P))+k[12]+1700485571&4294967295,w=C+(A<<6&4294967295|A>>>26),A=P+(C^(w|~x))+k[3]+2399980690&4294967295,P=w+(A<<10&4294967295|A>>>22),A=x+(w^(P|~C))+k[10]+4293915773&4294967295,x=P+(A<<15&4294967295|A>>>17),A=C+(P^(x|~w))+k[1]+2240044497&4294967295,C=x+(A<<21&4294967295|A>>>11),A=w+(x^(C|~P))+k[8]+1873313359&4294967295,w=C+(A<<6&4294967295|A>>>26),A=P+(C^(w|~x))+k[15]+4264355552&4294967295,P=w+(A<<10&4294967295|A>>>22),A=x+(w^(P|~C))+k[6]+2734768916&4294967295,x=P+(A<<15&4294967295|A>>>17),A=C+(P^(x|~w))+k[13]+1309151649&4294967295,C=x+(A<<21&4294967295|A>>>11),A=w+(x^(C|~P))+k[4]+4149444226&4294967295,w=C+(A<<6&4294967295|A>>>26),A=P+(C^(w|~x))+k[11]+3174756917&4294967295,P=w+(A<<10&4294967295|A>>>22),A=x+(w^(P|~C))+k[2]+718787259&4294967295,x=P+(A<<15&4294967295|A>>>17),A=C+(P^(x|~w))+k[9]+3951481745&4294967295,R.g[0]=R.g[0]+w&4294967295,R.g[1]=R.g[1]+(x+(A<<21&4294967295|A>>>11))&4294967295,R.g[2]=R.g[2]+x&4294967295,R.g[3]=R.g[3]+P&4294967295}r.prototype.u=function(R,w){w===void 0&&(w=R.length);for(var C=w-this.blockSize,k=this.B,x=this.h,P=0;P<w;){if(x==0)for(;P<=C;)s(this,R,P),P+=this.blockSize;if(typeof R=="string"){for(;P<w;)if(k[x++]=R.charCodeAt(P++),x==this.blockSize){s(this,k),x=0;break}}else for(;P<w;)if(k[x++]=R[P++],x==this.blockSize){s(this,k),x=0;break}}this.h=x,this.o+=w},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var w=1;w<R.length-8;++w)R[w]=0;var C=8*this.o;for(w=R.length-8;w<R.length;++w)R[w]=C&255,C/=256;for(this.u(R),R=Array(16),w=C=0;4>w;++w)for(var k=0;32>k;k+=8)R[C++]=this.g[w]>>>k&255;return R};function i(R,w){var C=a;return Object.prototype.hasOwnProperty.call(C,R)?C[R]:C[R]=w(R)}function o(R,w){this.h=w;for(var C=[],k=!0,x=R.length-1;0<=x;x--){var P=R[x]|0;k&&P==w||(C[x]=P,k=!1)}this.g=C}var a={};function u(R){return-128<=R&&128>R?i(R,function(w){return new o([w|0],0>w?-1:0)}):new o([R|0],0>R?-1:0)}function c(R){if(isNaN(R)||!isFinite(R))return f;if(0>R)return N(c(-R));for(var w=[],C=1,k=0;R>=C;k++)w[k]=R/C|0,C*=4294967296;return new o(w,0)}function d(R,w){if(R.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R.charAt(0)=="-")return N(d(R.substring(1),w));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=c(Math.pow(w,8)),k=f,x=0;x<R.length;x+=8){var P=Math.min(8,R.length-x),A=parseInt(R.substring(x,x+P),w);8>P?(P=c(Math.pow(w,P)),k=k.j(P).add(c(A))):(k=k.j(C),k=k.add(c(A)))}return k}var f=u(0),m=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(I(this))return-N(this).m();for(var R=0,w=1,C=0;C<this.g.length;C++){var k=this.i(C);R+=(0<=k?k:4294967296+k)*w,w*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(T(this))return"0";if(I(this))return"-"+N(this).toString(R);for(var w=c(Math.pow(R,6)),C=this,k="";;){var x=b(C,w).g;C=E(C,x.j(w));var P=((0<C.g.length?C.g[0]:C.h)>>>0).toString(R);if(C=x,T(C))return P+k;for(;6>P.length;)P="0"+P;k=P+k}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function T(R){if(R.h!=0)return!1;for(var w=0;w<R.g.length;w++)if(R.g[w]!=0)return!1;return!0}function I(R){return R.h==-1}t.l=function(R){return R=E(this,R),I(R)?-1:T(R)?0:1};function N(R){for(var w=R.g.length,C=[],k=0;k<w;k++)C[k]=~R.g[k];return new o(C,~R.h).add(m)}t.abs=function(){return I(this)?N(this):this},t.add=function(R){for(var w=Math.max(this.g.length,R.g.length),C=[],k=0,x=0;x<=w;x++){var P=k+(this.i(x)&65535)+(R.i(x)&65535),A=(P>>>16)+(this.i(x)>>>16)+(R.i(x)>>>16);k=A>>>16,P&=65535,A&=65535,C[x]=A<<16|P}return new o(C,C[C.length-1]&-2147483648?-1:0)};function E(R,w){return R.add(N(w))}t.j=function(R){if(T(this)||T(R))return f;if(I(this))return I(R)?N(this).j(N(R)):N(N(this).j(R));if(I(R))return N(this.j(N(R)));if(0>this.l(_)&&0>R.l(_))return c(this.m()*R.m());for(var w=this.g.length+R.g.length,C=[],k=0;k<2*w;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(var x=0;x<R.g.length;x++){var P=this.i(k)>>>16,A=this.i(k)&65535,Te=R.i(x)>>>16,tt=R.i(x)&65535;C[2*k+2*x]+=A*tt,y(C,2*k+2*x),C[2*k+2*x+1]+=P*tt,y(C,2*k+2*x+1),C[2*k+2*x+1]+=A*Te,y(C,2*k+2*x+1),C[2*k+2*x+2]+=P*Te,y(C,2*k+2*x+2)}for(k=0;k<w;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=w;k<2*w;k++)C[k]=0;return new o(C,0)};function y(R,w){for(;(R[w]&65535)!=R[w];)R[w+1]+=R[w]>>>16,R[w]&=65535,w++}function S(R,w){this.g=R,this.h=w}function b(R,w){if(T(w))throw Error("division by zero");if(T(R))return new S(f,f);if(I(R))return w=b(N(R),w),new S(N(w.g),N(w.h));if(I(w))return w=b(R,N(w)),new S(N(w.g),w.h);if(30<R.g.length){if(I(R)||I(w))throw Error("slowDivide_ only works with positive integers.");for(var C=m,k=w;0>=k.l(R);)C=F(C),k=F(k);var x=U(C,1),P=U(k,1);for(k=U(k,2),C=U(C,2);!T(k);){var A=P.add(k);0>=A.l(R)&&(x=x.add(C),P=A),k=U(k,1),C=U(C,1)}return w=E(R,x.j(w)),new S(x,w)}for(x=f;0<=R.l(w);){for(C=Math.max(1,Math.floor(R.m()/w.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),P=c(C),A=P.j(w);I(A)||0<A.l(R);)C-=k,P=c(C),A=P.j(w);T(P)&&(P=m),x=x.add(P),R=E(R,A)}return new S(x,R)}t.A=function(R){return b(this,R).h},t.and=function(R){for(var w=Math.max(this.g.length,R.g.length),C=[],k=0;k<w;k++)C[k]=this.i(k)&R.i(k);return new o(C,this.h&R.h)},t.or=function(R){for(var w=Math.max(this.g.length,R.g.length),C=[],k=0;k<w;k++)C[k]=this.i(k)|R.i(k);return new o(C,this.h|R.h)},t.xor=function(R){for(var w=Math.max(this.g.length,R.g.length),C=[],k=0;k<w;k++)C[k]=this.i(k)^R.i(k);return new o(C,this.h^R.h)};function F(R){for(var w=R.g.length+1,C=[],k=0;k<w;k++)C[k]=R.i(k)<<1|R.i(k-1)>>>31;return new o(C,R.h)}function U(R,w){var C=w>>5;w%=32;for(var k=R.g.length-C,x=[],P=0;P<k;P++)x[P]=0<w?R.i(P+C)>>>w|R.i(P+C+1)<<32-w:R.i(P+C);return new o(x,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,aS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,As=o}).apply(typeof gw<"u"?gw:typeof self<"u"?self:typeof window<"u"?window:{});var cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lS,Xo,uS,Du,_p,cS,hS,dS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,g){return l==Array.prototype||l==Object.prototype||(l[h]=g.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof cu=="object"&&cu];for(var h=0;h<l.length;++h){var g=l[h];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(l,h){if(h)e:{var g=r;l=l.split(".");for(var v=0;v<l.length-1;v++){var D=l[v];if(!(D in g))break e;g=g[D]}l=l[l.length-1],v=g[l],h=h(v),h!=v&&h!=null&&e(g,l,{configurable:!0,writable:!0,value:h})}}function i(l,h){l instanceof String&&(l+="");var g=0,v=!1,D={next:function(){if(!v&&g<l.length){var L=g++;return{value:h(L,l[L]),done:!1}}return v=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(l){return l||function(){return i(this,function(h,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,g){return l.call.apply(l.bind,arguments)}function f(l,h,g){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,v),l.apply(h,D)}}return function(){return l.apply(h,arguments)}}function m(l,h,g){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function _(l,h){var g=Array.prototype.slice.call(arguments,1);return function(){var v=g.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function T(l,h){function g(){}g.prototype=h.prototype,l.aa=h.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(v,D,L){for(var W=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)W[ye-2]=arguments[ye];return h.prototype[D].apply(v,W)}}function I(l){const h=l.length;if(0<h){const g=Array(h);for(let v=0;v<h;v++)g[v]=l[v];return g}return[]}function N(l,h){for(let g=1;g<arguments.length;g++){const v=arguments[g];if(u(v)){const D=l.length||0,L=v.length||0;l.length=D+L;for(let W=0;W<L;W++)l[D+W]=v[W]}else l.push(v)}}class E{constructor(h,g){this.i=h,this.j=g,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(l){return/^[\s\xa0]*$/.test(l)}function S(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function b(l){return b[" "](l),l}b[" "]=function(){};var F=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function U(l,h,g){for(const v in l)h.call(g,l[v],v,l)}function R(l,h){for(const g in l)h.call(void 0,l[g],g,l)}function w(l){const h={};for(const g in l)h[g]=l[g];return h}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,h){let g,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(g in v)l[g]=v[g];for(let L=0;L<C.length;L++)g=C[L],Object.prototype.hasOwnProperty.call(v,g)&&(l[g]=v[g])}}function x(l){var h=1;l=l.split(":");const g=[];for(;0<h&&l.length;)g.push(l.shift()),h--;return l.length&&g.push(l.join(":")),g}function P(l){a.setTimeout(()=>{throw l},0)}function A(){var l=M;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Te{constructor(){this.h=this.g=null}add(h,g){const v=tt.get();v.set(h,g),this.h?this.h.next=v:this.g=v,this.h=v}}var tt=new E(()=>new Ut,l=>l.reset());class Ut{constructor(){this.next=this.g=this.h=null}set(h,g){this.h=h,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let zt,j=!1,M=new Te,H=()=>{const l=a.Promise.resolve(void 0);zt=()=>{l.then(ae)}};var ae=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(g){P(g)}var h=tt;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}j=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var Bt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};a.addEventListener("test",g,h),a.removeEventListener("test",g,h)}catch{}return l}();function Mn(l,h){if(_e.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(F){e:{try{b(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else g=="mouseover"?h=l.fromElement:g=="mouseout"&&(h=l.toElement);this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Vn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Mn.aa.h.call(this)}}T(Mn,_e);var Vn={2:"touch",3:"pen",4:"mouse"};Mn.prototype.h=function(){Mn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var jn="closure_listenable_"+(1e6*Math.random()|0),z1=0;function B1(l,h,g,v,D){this.listener=l,this.proxy=null,this.src=h,this.type=g,this.capture=!!v,this.ha=D,this.key=++z1,this.da=this.fa=!1}function Nl(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Pl(l){this.src=l,this.g={},this.h=0}Pl.prototype.add=function(l,h,g,v,D){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var W=Gh(l,h,v,D);return-1<W?(h=l[W],g||(h.fa=!1)):(h=new B1(h,this.src,L,!!v,D),h.fa=g,l.push(h)),h};function qh(l,h){var g=h.type;if(g in l.g){var v=l.g[g],D=Array.prototype.indexOf.call(v,h,void 0),L;(L=0<=D)&&Array.prototype.splice.call(v,D,1),L&&(Nl(h),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Gh(l,h,g,v){for(var D=0;D<l.length;++D){var L=l[D];if(!L.da&&L.listener==h&&L.capture==!!g&&L.ha==v)return D}return-1}var Kh="closure_lm_"+(1e6*Math.random()|0),Qh={};function V_(l,h,g,v,D){if(Array.isArray(h)){for(var L=0;L<h.length;L++)V_(l,h[L],g,v,D);return null}return g=U_(g),l&&l[jn]?l.K(h,g,c(v)?!!v.capture:!1,D):$1(l,h,g,!1,v,D)}function $1(l,h,g,v,D,L){if(!h)throw Error("Invalid event type");var W=c(D)?!!D.capture:!!D,ye=Xh(l);if(ye||(l[Kh]=ye=new Pl(l)),g=ye.add(h,g,v,W,L),g.proxy)return g;if(v=W1(),g.proxy=v,v.src=l,v.listener=g,l.addEventListener)Bt||(D=W),D===void 0&&(D=!1),l.addEventListener(h.toString(),v,D);else if(l.attachEvent)l.attachEvent(F_(h.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return g}function W1(){function l(g){return h.call(l.src,l.listener,g)}const h=H1;return l}function j_(l,h,g,v,D){if(Array.isArray(h))for(var L=0;L<h.length;L++)j_(l,h[L],g,v,D);else v=c(v)?!!v.capture:!!v,g=U_(g),l&&l[jn]?(l=l.i,h=String(h).toString(),h in l.g&&(L=l.g[h],g=Gh(L,g,v,D),-1<g&&(Nl(L[g]),Array.prototype.splice.call(L,g,1),L.length==0&&(delete l.g[h],l.h--)))):l&&(l=Xh(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Gh(h,g,v,D)),(g=-1<l?h[l]:null)&&Yh(g))}function Yh(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[jn])qh(h.i,l);else{var g=l.type,v=l.proxy;h.removeEventListener?h.removeEventListener(g,v,l.capture):h.detachEvent?h.detachEvent(F_(g),v):h.addListener&&h.removeListener&&h.removeListener(v),(g=Xh(h))?(qh(g,l),g.h==0&&(g.src=null,h[Kh]=null)):Nl(l)}}}function F_(l){return l in Qh?Qh[l]:Qh[l]="on"+l}function H1(l,h){if(l.da)l=!0;else{h=new Mn(h,this);var g=l.listener,v=l.ha||l.src;l.fa&&Yh(l),l=g.call(v,h)}return l}function Xh(l){return l=l[Kh],l instanceof Pl?l:null}var Jh="__closure_events_fn_"+(1e9*Math.random()>>>0);function U_(l){return typeof l=="function"?l:(l[Jh]||(l[Jh]=function(h){return l.handleEvent(h)}),l[Jh])}function ct(){te.call(this),this.i=new Pl(this),this.M=this,this.F=null}T(ct,te),ct.prototype[jn]=!0,ct.prototype.removeEventListener=function(l,h,g,v){j_(this,l,h,g,v)};function Tt(l,h){var g,v=l.F;if(v)for(g=[];v;v=v.F)g.push(v);if(l=l.M,v=h.type||h,typeof h=="string")h=new _e(h,l);else if(h instanceof _e)h.target=h.target||l;else{var D=h;h=new _e(v,l),k(h,D)}if(D=!0,g)for(var L=g.length-1;0<=L;L--){var W=h.g=g[L];D=xl(W,v,!0,h)&&D}if(W=h.g=l,D=xl(W,v,!0,h)&&D,D=xl(W,v,!1,h)&&D,g)for(L=0;L<g.length;L++)W=h.g=g[L],D=xl(W,v,!1,h)&&D}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var g=l.g[h],v=0;v<g.length;v++)Nl(g[v]);delete l.g[h],l.h--}}this.F=null},ct.prototype.K=function(l,h,g,v){return this.i.add(String(l),h,!1,g,v)},ct.prototype.L=function(l,h,g,v){return this.i.add(String(l),h,!0,g,v)};function xl(l,h,g,v){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,L=0;L<h.length;++L){var W=h[L];if(W&&!W.da&&W.capture==g){var ye=W.listener,nt=W.ha||W.src;W.fa&&qh(l.i,W),D=ye.call(nt,v)!==!1&&D}}return D&&!v.defaultPrevented}function z_(l,h,g){if(typeof l=="function")g&&(l=m(l,g));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function B_(l){l.g=z_(()=>{l.g=null,l.i&&(l.i=!1,B_(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class q1 extends te{constructor(h,g){super(),this.m=h,this.l=g,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:B_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function go(l){te.call(this),this.h=l,this.g={}}T(go,te);var $_=[];function W_(l){U(l.g,function(h,g){this.g.hasOwnProperty(g)&&Yh(h)},l),l.g={}}go.prototype.N=function(){go.aa.N.call(this),W_(this)},go.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zh=a.JSON.stringify,G1=a.JSON.parse,K1=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function ed(){}ed.prototype.h=null;function H_(l){return l.h||(l.h=l.i())}function q_(){}var _o={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function td(){_e.call(this,"d")}T(td,_e);function nd(){_e.call(this,"c")}T(nd,_e);var hs={},G_=null;function bl(){return G_=G_||new ct}hs.La="serverreachability";function K_(l){_e.call(this,hs.La,l)}T(K_,_e);function yo(l){const h=bl();Tt(h,new K_(h))}hs.STAT_EVENT="statevent";function Q_(l,h){_e.call(this,hs.STAT_EVENT,l),this.stat=h}T(Q_,_e);function It(l){const h=bl();Tt(h,new Q_(h,l))}hs.Ma="timingevent";function Y_(l,h){_e.call(this,hs.Ma,l),this.size=h}T(Y_,_e);function vo(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function wo(){this.g=!0}wo.prototype.xa=function(){this.g=!1};function Q1(l,h,g,v,D,L){l.info(function(){if(l.g)if(L)for(var W="",ye=L.split("&"),nt=0;nt<ye.length;nt++){var de=ye[nt].split("=");if(1<de.length){var ht=de[0];de=de[1];var dt=ht.split("_");W=2<=dt.length&&dt[1]=="type"?W+(ht+"="+de+"&"):W+(ht+"=redacted&")}}else W=null;else W=L;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+h+`
`+g+`
`+W})}function Y1(l,h,g,v,D,L,W){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+h+`
`+g+`
`+L+" "+W})}function Qs(l,h,g,v){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+J1(l,g)+(v?" "+v:"")})}function X1(l,h){l.info(function(){return"TIMEOUT: "+h})}wo.prototype.info=function(){};function J1(l,h){if(!l.g)return h;if(!h)return null;try{var g=JSON.parse(h);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var v=g[l];if(!(2>v.length)){var D=v[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var W=1;W<D.length;W++)D[W]=""}}}}return Zh(g)}catch{return h}}var Dl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},X_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},rd;function Ol(){}T(Ol,ed),Ol.prototype.g=function(){return new XMLHttpRequest},Ol.prototype.i=function(){return{}},rd=new Ol;function _r(l,h,g,v){this.j=l,this.i=h,this.l=g,this.R=v||1,this.U=new go(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new J_}function J_(){this.i=null,this.g="",this.h=!1}var Z_={},sd={};function id(l,h,g){l.L=1,l.v=jl(Fn(h)),l.m=g,l.P=!0,ey(l,null)}function ey(l,h){l.F=Date.now(),Ll(l),l.A=Fn(l.v);var g=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),py(g.i,"t",v),l.C=0,g=l.j.J,l.h=new J_,l.g=by(l.j,g?h:null,!l.m),0<l.O&&(l.M=new q1(m(l.Y,l,l.g),l.O)),h=l.U,g=l.g,v=l.ca;var D="readystatechange";Array.isArray(D)||(D&&($_[0]=D.toString()),D=$_);for(var L=0;L<D.length;L++){var W=V_(g,D[L],v||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=l.H?w(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),yo(),Q1(l.i,l.u,l.A,l.l,l.R,l.m)}_r.prototype.ca=function(l){l=l.target;const h=this.M;h&&Un(l)==3?h.j():this.Y(l)},_r.prototype.Y=function(l){try{if(l==this.g)e:{const dt=Un(this.g);var h=this.g.Ba();const Js=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||Ey(this.g)))){this.J||dt!=4||h==7||(h==8||0>=Js?yo(3):yo(2)),od(this);var g=this.g.Z();this.X=g;t:if(ty(this)){var v=Ey(this.g);l="";var D=v.length,L=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ds(this),Eo(this);var W="";break t}this.h.i=new a.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,l+=this.h.i.decode(v[h],{stream:!(L&&h==D-1)});v.length=0,this.h.g+=l,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=g==200,Y1(this.i,this.u,this.A,this.l,this.R,dt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,nt=this.g;if((ye=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(ye)){var de=ye;break t}}de=null}if(g=de)Qs(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ad(this,g);else{this.o=!1,this.s=3,It(12),ds(this),Eo(this);break e}}if(this.P){g=!0;let on;for(;!this.J&&this.C<W.length;)if(on=Z1(this,W),on==sd){dt==4&&(this.s=4,It(14),g=!1),Qs(this.i,this.l,null,"[Incomplete Response]");break}else if(on==Z_){this.s=4,It(15),Qs(this.i,this.l,W,"[Invalid Chunk]"),g=!1;break}else Qs(this.i,this.l,on,null),ad(this,on);if(ty(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||W.length!=0||this.h.h||(this.s=1,It(16),g=!1),this.o=this.o&&g,!g)Qs(this.i,this.l,W,"[Invalid Chunked Response]"),ds(this),Eo(this);else if(0<W.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),fd(ht),ht.M=!0,It(11))}}else Qs(this.i,this.l,W,null),ad(this,W);dt==4&&ds(this),this.o&&!this.J&&(dt==4?ky(this.j,this):(this.o=!1,Ll(this)))}else gA(this.g),g==400&&0<W.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),ds(this),Eo(this)}}}catch{}finally{}};function ty(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Z1(l,h){var g=l.C,v=h.indexOf(`
`,g);return v==-1?sd:(g=Number(h.substring(g,v)),isNaN(g)?Z_:(v+=1,v+g>h.length?sd:(h=h.slice(v,v+g),l.C=v+g,h)))}_r.prototype.cancel=function(){this.J=!0,ds(this)};function Ll(l){l.S=Date.now()+l.I,ny(l,l.I)}function ny(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=vo(m(l.ba,l),h)}function od(l){l.B&&(a.clearTimeout(l.B),l.B=null)}_r.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(X1(this.i,this.A),this.L!=2&&(yo(),It(17)),ds(this),this.s=2,Eo(this)):ny(this,this.S-l)};function Eo(l){l.j.G==0||l.J||ky(l.j,l)}function ds(l){od(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,W_(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function ad(l,h){try{var g=l.j;if(g.G!=0&&(g.g==l||ld(g.h,l))){if(!l.K&&ld(g.h,l)&&g.G==3){try{var v=g.Da.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Wl(g),Bl(g);else break e;dd(g),It(18)}}else g.za=D[1],0<g.za-g.T&&37500>D[2]&&g.F&&g.v==0&&!g.C&&(g.C=vo(m(g.Za,g),6e3));if(1>=iy(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else ps(g,11)}else if((l.K||g.g==l)&&Wl(g),!y(h))for(D=g.Da.g.parse(h),h=0;h<D.length;h++){let de=D[h];if(g.T=de[0],de=de[1],g.G==2)if(de[0]=="c"){g.K=de[1],g.ia=de[2];const ht=de[3];ht!=null&&(g.la=ht,g.j.info("VER="+g.la));const dt=de[4];dt!=null&&(g.Aa=dt,g.j.info("SVER="+g.Aa));const Js=de[5];Js!=null&&typeof Js=="number"&&0<Js&&(v=1.5*Js,g.L=v,g.j.info("backChannelRequestTimeoutMs_="+v)),v=g;const on=l.g;if(on){const ql=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ql){var L=v.h;L.g||ql.indexOf("spdy")==-1&&ql.indexOf("quic")==-1&&ql.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(ud(L,L.h),L.h=null))}if(v.D){const pd=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;pd&&(v.ya=pd,Ie(v.I,v.D,pd))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),v=g;var W=l;if(v.qa=xy(v,v.J?v.ia:null,v.W),W.K){oy(v.h,W);var ye=W,nt=v.L;nt&&(ye.I=nt),ye.B&&(od(ye),Ll(ye)),v.g=W}else Ry(v);0<g.i.length&&$l(g)}else de[0]!="stop"&&de[0]!="close"||ps(g,7);else g.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?ps(g,7):hd(g):de[0]!="noop"&&g.l&&g.l.ta(de),g.v=0)}}yo(4)}catch{}}var eA=class{constructor(l,h){this.g=l,this.map=h}};function ry(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function iy(l){return l.h?1:l.g?l.g.size:0}function ld(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function ud(l,h){l.g?l.g.add(h):l.h=h}function oy(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}ry.prototype.cancel=function(){if(this.i=ay(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ay(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const g of l.g.values())h=h.concat(g.D);return h}return I(l.i)}function tA(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],g=l.length,v=0;v<g;v++)h.push(l[v]);return h}h=[],g=0;for(v in l)h[g++]=l[v];return h}function nA(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var g=0;g<l;g++)h.push(g);return h}h=[],g=0;for(const v in l)h[g++]=v;return h}}}function ly(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var g=nA(l),v=tA(l),D=v.length,L=0;L<D;L++)h.call(void 0,v[L],g&&g[L],l)}var uy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rA(l,h){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var v=l[g].indexOf("="),D=null;if(0<=v){var L=l[g].substring(0,v);D=l[g].substring(v+1)}else L=l[g];h(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function fs(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof fs){this.h=l.h,Ml(this,l.j),this.o=l.o,this.g=l.g,Vl(this,l.s),this.l=l.l;var h=l.i,g=new So;g.i=h.i,h.g&&(g.g=new Map(h.g),g.h=h.h),cy(this,g),this.m=l.m}else l&&(h=String(l).match(uy))?(this.h=!1,Ml(this,h[1]||"",!0),this.o=To(h[2]||""),this.g=To(h[3]||"",!0),Vl(this,h[4]),this.l=To(h[5]||"",!0),cy(this,h[6]||"",!0),this.m=To(h[7]||"")):(this.h=!1,this.i=new So(null,this.h))}fs.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Io(h,hy,!0),":");var g=this.g;return(g||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Io(h,hy,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Io(g,g.charAt(0)=="/"?oA:iA,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Io(g,lA)),l.join("")};function Fn(l){return new fs(l)}function Ml(l,h,g){l.j=g?To(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Vl(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function cy(l,h,g){h instanceof So?(l.i=h,uA(l.i,l.h)):(g||(h=Io(h,aA)),l.i=new So(h,l.h))}function Ie(l,h,g){l.i.set(h,g)}function jl(l){return Ie(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function To(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Io(l,h,g){return typeof l=="string"?(l=encodeURI(l).replace(h,sA),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function sA(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var hy=/[#\/\?@]/g,iA=/[#\?:]/g,oA=/[#\?]/g,aA=/[#\?@]/g,lA=/#/g;function So(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function yr(l){l.g||(l.g=new Map,l.h=0,l.i&&rA(l.i,function(h,g){l.add(decodeURIComponent(h.replace(/\+/g," ")),g)}))}t=So.prototype,t.add=function(l,h){yr(this),this.i=null,l=Ys(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(h),this.h+=1,this};function dy(l,h){yr(l),h=Ys(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function fy(l,h){return yr(l),h=Ys(l,h),l.g.has(h)}t.forEach=function(l,h){yr(this),this.g.forEach(function(g,v){g.forEach(function(D){l.call(h,D,v,this)},this)},this)},t.na=function(){yr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),g=[];for(let v=0;v<h.length;v++){const D=l[v];for(let L=0;L<D.length;L++)g.push(h[v])}return g},t.V=function(l){yr(this);let h=[];if(typeof l=="string")fy(this,l)&&(h=h.concat(this.g.get(Ys(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)h=h.concat(l[g])}return h},t.set=function(l,h){return yr(this),this.i=null,l=Ys(this,l),fy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function py(l,h,g){dy(l,h),0<g.length&&(l.i=null,l.g.set(Ys(l,h),I(g)),l.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var g=0;g<h.length;g++){var v=h[g];const L=encodeURIComponent(String(v)),W=this.V(v);for(v=0;v<W.length;v++){var D=L;W[v]!==""&&(D+="="+encodeURIComponent(String(W[v]))),l.push(D)}}return this.i=l.join("&")};function Ys(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function uA(l,h){h&&!l.j&&(yr(l),l.i=null,l.g.forEach(function(g,v){var D=v.toLowerCase();v!=D&&(dy(this,v),py(this,D,g))},l)),l.j=h}function cA(l,h){const g=new wo;if(a.Image){const v=new Image;v.onload=_(vr,g,"TestLoadImage: loaded",!0,h,v),v.onerror=_(vr,g,"TestLoadImage: error",!1,h,v),v.onabort=_(vr,g,"TestLoadImage: abort",!1,h,v),v.ontimeout=_(vr,g,"TestLoadImage: timeout",!1,h,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else h(!1)}function hA(l,h){const g=new wo,v=new AbortController,D=setTimeout(()=>{v.abort(),vr(g,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:v.signal}).then(L=>{clearTimeout(D),L.ok?vr(g,"TestPingServer: ok",!0,h):vr(g,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),vr(g,"TestPingServer: error",!1,h)})}function vr(l,h,g,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(g)}catch{}}function dA(){this.g=new K1}function fA(l,h,g){const v=g||"";try{ly(l,function(D,L){let W=D;c(D)&&(W=Zh(D)),h.push(v+L+"="+encodeURIComponent(W))})}catch(D){throw h.push(v+"type="+encodeURIComponent("_badmap")),D}}function Fl(l){this.l=l.Ub||null,this.j=l.eb||!1}T(Fl,ed),Fl.prototype.g=function(){return new Ul(this.l,this.j)},Fl.prototype.i=function(l){return function(){return l}}({});function Ul(l,h){ct.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(Ul,ct),t=Ul.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,Ro(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Co(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ro(this)),this.g&&(this.readyState=3,Ro(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;my(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function my(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Co(this):Ro(this),this.readyState==3&&my(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Co(this))},t.Qa=function(l){this.g&&(this.response=l,Co(this))},t.ga=function(){this.g&&Co(this)};function Co(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ro(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var g=h.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=h.next();return l.join(`\r
`)};function Ro(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ul.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function gy(l){let h="";return U(l,function(g,v){h+=v,h+=":",h+=g,h+=`\r
`}),h}function cd(l,h,g){e:{for(v in g){var v=!1;break e}v=!0}v||(g=gy(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):Ie(l,h,g))}function Oe(l){ct.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Oe,ct);var pA=/^https?$/i,mA=["POST","PUT"];t=Oe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,g,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():rd.g(),this.v=this.o?H_(this.o):H_(rd),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(L){_y(this,L);return}if(l=g||"",g=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)g.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())g.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),D=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(mA,h,void 0))||v||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,W]of g)this.g.setRequestHeader(L,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wy(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){_y(this,L)}};function _y(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,yy(l),zl(l)}function yy(l){l.A||(l.A=!0,Tt(l,"complete"),Tt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Tt(this,"complete"),Tt(this,"abort"),zl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zl(this,!0)),Oe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?vy(this):this.bb())},t.bb=function(){vy(this)};function vy(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Un(l)!=4||l.Z()!=2)){if(l.u&&Un(l)==4)z_(l.Ea,0,l);else if(Tt(l,"readystatechange"),Un(l)==4){l.h=!1;try{const W=l.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var g;if(!(g=h)){var v;if(v=W===0){var D=String(l.D).match(uy)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),v=!pA.test(D?D.toLowerCase():"")}g=v}if(g)Tt(l,"complete"),Tt(l,"success");else{l.m=6;try{var L=2<Un(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",yy(l)}}finally{zl(l)}}}}function zl(l,h){if(l.g){wy(l);const g=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Tt(l,"ready");try{g.onreadystatechange=v}catch{}}}function wy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Un(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),G1(h)}};function Ey(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function gA(l){const h={};l=(l.g&&2<=Un(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(y(l[v]))continue;var g=x(l[v]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=h[D]||[];h[D]=L,L.push(g)}R(h,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ao(l,h,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||h}function Ty(l){this.Aa=0,this.i=[],this.j=new wo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ao("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ao("baseRetryDelayMs",5e3,l),this.cb=Ao("retryDelaySeedMs",1e4,l),this.Wa=Ao("forwardChannelMaxRetries",2,l),this.wa=Ao("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new ry(l&&l.concurrentRequestLimit),this.Da=new dA,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ty.prototype,t.la=8,t.G=1,t.connect=function(l,h,g,v){It(0),this.W=l,this.H=h||{},g&&v!==void 0&&(this.H.OSID=g,this.H.OAID=v),this.F=this.X,this.I=xy(this,null,this.W),$l(this)};function hd(l){if(Iy(l),l.G==3){var h=l.U++,g=Fn(l.I);if(Ie(g,"SID",l.K),Ie(g,"RID",h),Ie(g,"TYPE","terminate"),ko(l,g),h=new _r(l,l.j,h),h.L=2,h.v=jl(Fn(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=h.v,g=!0),g||(h.g=by(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ll(h)}Py(l)}function Bl(l){l.g&&(fd(l),l.g.cancel(),l.g=null)}function Iy(l){Bl(l),l.u&&(a.clearTimeout(l.u),l.u=null),Wl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function $l(l){if(!sy(l.h)&&!l.s){l.s=!0;var h=l.Ga;zt||H(),j||(zt(),j=!0),M.add(h,l),l.B=0}}function _A(l,h){return iy(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=vo(m(l.Ga,l,h),Ny(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const D=new _r(this,this.j,l);let L=this.o;if(this.S&&(L?(L=w(L),k(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)e:{for(var h=0,g=0;g<this.i.length;g++){t:{var v=this.i[g];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,4096<h){h=g;break e}if(h===4096||g===this.i.length-1){h=g+1;break e}}h=1e3}else h=1e3;h=Cy(this,D,h),g=Fn(this.I),Ie(g,"RID",l),Ie(g,"CVER",22),this.D&&Ie(g,"X-HTTP-Session-Id",this.D),ko(this,g),L&&(this.O?h="headers="+encodeURIComponent(String(gy(L)))+"&"+h:this.m&&cd(g,this.m,L)),ud(this.h,D),this.Ua&&Ie(g,"TYPE","init"),this.P?(Ie(g,"$req",h),Ie(g,"SID","null"),D.T=!0,id(D,g,null)):id(D,g,h),this.G=2}}else this.G==3&&(l?Sy(this,l):this.i.length==0||sy(this.h)||Sy(this))};function Sy(l,h){var g;h?g=h.l:g=l.U++;const v=Fn(l.I);Ie(v,"SID",l.K),Ie(v,"RID",g),Ie(v,"AID",l.T),ko(l,v),l.m&&l.o&&cd(v,l.m,l.o),g=new _r(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),h&&(l.i=h.D.concat(l.i)),h=Cy(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),ud(l.h,g),id(g,v,h)}function ko(l,h){l.H&&U(l.H,function(g,v){Ie(h,v,g)}),l.l&&ly({},function(g,v){Ie(h,v,g)})}function Cy(l,h,g){g=Math.min(l.i.length,g);var v=l.l?m(l.l.Na,l.l,l):null;e:{var D=l.i;let L=-1;for(;;){const W=["count="+g];L==-1?0<g?(L=D[0].g,W.push("ofs="+L)):L=0:W.push("ofs="+L);let ye=!0;for(let nt=0;nt<g;nt++){let de=D[nt].g;const ht=D[nt].map;if(de-=L,0>de)L=Math.max(0,D[nt].g-100),ye=!1;else try{fA(ht,W,"req"+de+"_")}catch{v&&v(ht)}}if(ye){v=W.join("&");break e}}}return l=l.i.splice(0,g),h.D=l,v}function Ry(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;zt||H(),j||(zt(),j=!0),M.add(h,l),l.v=0}}function dd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=vo(m(l.Fa,l),Ny(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Ay(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=vo(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Bl(this),Ay(this))};function fd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Ay(l){l.g=new _r(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Fn(l.qa);Ie(h,"RID","rpc"),Ie(h,"SID",l.K),Ie(h,"AID",l.T),Ie(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ie(h,"TO",l.ja),Ie(h,"TYPE","xmlhttp"),ko(l,h),l.m&&l.o&&cd(h,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=jl(Fn(h)),g.m=null,g.P=!0,ey(g,l)}t.Za=function(){this.C!=null&&(this.C=null,Bl(this),dd(this),It(19))};function Wl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function ky(l,h){var g=null;if(l.g==h){Wl(l),fd(l),l.g=null;var v=2}else if(ld(l.h,h))g=h.D,oy(l.h,h),v=1;else return;if(l.G!=0){if(h.o)if(v==1){g=h.m?h.m.length:0,h=Date.now()-h.F;var D=l.B;v=bl(),Tt(v,new Y_(v,g)),$l(l)}else Ry(l);else if(D=h.s,D==3||D==0&&0<h.X||!(v==1&&_A(l,h)||v==2&&dd(l)))switch(g&&0<g.length&&(h=l.h,h.i=h.i.concat(g)),D){case 1:ps(l,5);break;case 4:ps(l,10);break;case 3:ps(l,6);break;default:ps(l,2)}}}function Ny(l,h){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*h}function ps(l,h){if(l.j.info("Error code "+h),h==2){var g=m(l.fb,l),v=l.Xa;const D=!v;v=new fs(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ml(v,"https"),jl(v),D?cA(v.toString(),g):hA(v.toString(),g)}else It(2);l.G=0,l.l&&l.l.sa(h),Py(l),Iy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Py(l){if(l.G=0,l.ka=[],l.l){const h=ay(l.h);(h.length!=0||l.i.length!=0)&&(N(l.ka,h),N(l.ka,l.i),l.h.i.length=0,I(l.i),l.i.length=0),l.l.ra()}}function xy(l,h,g){var v=g instanceof fs?Fn(g):new fs(g);if(v.g!="")h&&(v.g=h+"."+v.g),Vl(v,v.s);else{var D=a.location;v=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var L=new fs(null);v&&Ml(L,v),h&&(L.g=h),D&&Vl(L,D),g&&(L.l=g),v=L}return g=l.D,h=l.ya,g&&h&&Ie(v,g,h),Ie(v,"VER",l.la),ko(l,v),v}function by(l,h,g){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Oe(new Fl({eb:g})):new Oe(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Dy(){}t=Dy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Hl(){}Hl.prototype.g=function(l,h){return new $t(l,h)};function $t(l,h){ct.call(this),this.g=new Ty(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!y(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Xs(this)}T($t,ct),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){hd(this.g)},$t.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Zh(l),l=g);h.i.push(new eA(h.Ya++,l)),h.G==3&&$l(h)},$t.prototype.N=function(){this.g.l=null,delete this.j,hd(this.g),delete this.g,$t.aa.N.call(this)};function Oy(l){td.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const g in h){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}T(Oy,td);function Ly(){nd.call(this),this.status=1}T(Ly,nd);function Xs(l){this.g=l}T(Xs,Dy),Xs.prototype.ua=function(){Tt(this.g,"a")},Xs.prototype.ta=function(l){Tt(this.g,new Oy(l))},Xs.prototype.sa=function(l){Tt(this.g,new Ly)},Xs.prototype.ra=function(){Tt(this.g,"b")},Hl.prototype.createWebChannel=Hl.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,dS=function(){return new Hl},hS=function(){return bl()},cS=hs,_p={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Dl.NO_ERROR=0,Dl.TIMEOUT=8,Dl.HTTP_ERROR=6,Du=Dl,X_.COMPLETE="complete",uS=X_,q_.EventType=_o,_o.OPEN="a",_o.CLOSE="b",_o.ERROR="c",_o.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Xo=q_,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha,lS=Oe}).apply(typeof cu<"u"?cu:typeof self<"u"?self:typeof window<"u"?window:{});const _w="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new yh("@firebase/firestore");function Vo(){return Ls.logLevel}function K(t,...e){if(Ls.logLevel<=le.DEBUG){const n=e.map(lg);Ls.debug(`Firestore (${ao}): ${t}`,...n)}}function or(t,...e){if(Ls.logLevel<=le.ERROR){const n=e.map(lg);Ls.error(`Firestore (${ao}): ${t}`,...n)}}function Bi(t,...e){if(Ls.logLevel<=le.WARN){const n=e.map(lg);Ls.warn(`Firestore (${ao}): ${t}`,...n)}}function lg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${ao}) INTERNAL ASSERTION FAILED: `+t;throw or(e),new Error(e)}function ge(t,e){t||J()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class Pb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xb{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ge(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Jn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new fS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new gt(e)}}class bb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Db{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new bb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ob{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ge(this.o===void 0);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.R=n.token,new Ob(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Mb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function $i(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ke(0,0))}static max(){return new Z(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $a.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $a?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends $a{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const Vb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends $a{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return Vb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new G(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new G(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Re.fromString(e))}static fromName(e){return new Q(Re.fromString(e).popFirst(5))}static empty(){return new Q(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Re(e.slice()))}}function jb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Z.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new es(s,Q.empty(),e)}function Fb(t){return new es(t.readTime,t.key,-1)}class es{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new es(Z.min(),Q.empty(),-1)}static max(){return new es(Z.max(),Q.empty(),-1)}}function Ub(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==zb)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(s=>s?z.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new z((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new z((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function $b(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ug.oe=-1;function wh(t){return t==null}function Ec(t){return t===0&&1/t==-1/0}function Wb(t){return typeof t=="number"&&Number.isInteger(t)&&!Ec(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let We=class yp{constructor(e,n){this.comparator=e,this.root=n||Kr.EMPTY}insert(e,n){return new yp(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Kr.BLACK,null,null))}remove(e){return new yp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Kr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hu(this.root,e,this.comparator,!1)}getReverseIterator(){return new hu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hu(this.root,e,this.comparator,!0)}},hu=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Kr=class zn{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??zn.RED,this.left=s??zn.EMPTY,this.right=i??zn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new zn(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return zn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return zn.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,zn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,zn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}};Kr.EMPTY=null,Kr.RED=!0,Kr.BLACK=!1;Kr.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Kr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new vw(this.data.getIterator())}getIteratorFrom(e){return new vw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class vw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new qt([])}unionWith(e){let n=new at(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $i(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gS("Invalid base64 string: "+i):i}}(e);return new ut(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const Hb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ts(t){if(ge(!!t),typeof t=="string"){let e=0;const n=Hb.exec(t);if(ge(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ms(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hg(t){const e=t.mapValue.fields.__previous_value__;return cg(e)?hg(e):e}function Wa(t){const e=ts(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n,r,s,i,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ha{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ha("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ha&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du={mapValue:{}};function Vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cg(t)?4:Kb(t)?9007199254740991:Gb(t)?10:11:J()}function bn(t,e){if(t===e)return!0;const n=Vs(t);if(n!==Vs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wa(t).isEqual(Wa(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ts(s.timestampValue),a=ts(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ms(s.bytesValue).isEqual(Ms(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Fe(s.doubleValue),a=Fe(i.doubleValue);return o===a?Ec(o)===Ec(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return $i(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(yw(o)!==yw(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!bn(o[u],a[u])))return!1;return!0}(t,e);default:return J()}}function qa(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function Wi(t,e){if(t===e)return 0;const n=Vs(t),r=Vs(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Fe(i.integerValue||i.doubleValue),u=Fe(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return ww(t.timestampValue,e.timestampValue);case 4:return ww(Wa(t),Wa(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Ms(i),u=Ms(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=fe(a[c],u[c]);if(d!==0)return d}return fe(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=fe(Fe(i.latitude),Fe(o.latitude));return a!==0?a:fe(Fe(i.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ew(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,u,c,d;const f=i.fields||{},m=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,T=(u=m.value)===null||u===void 0?void 0:u.arrayValue,I=fe(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0);return I!==0?I:Ew(_,T)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===du.mapValue&&o===du.mapValue)return 0;if(i===du.mapValue)return 1;if(o===du.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=fe(u[f],d[f]);if(m!==0)return m;const _=Wi(a[u[f]],c[d[f]]);if(_!==0)return _}return fe(u.length,d.length)}(t.mapValue,e.mapValue);default:throw J()}}function ww(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=ts(t),r=ts(e),s=fe(n.seconds,r.seconds);return s!==0?s:fe(n.nanos,r.nanos)}function Ew(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Wi(n[s],r[s]);if(i)return i}return fe(n.length,r.length)}function Hi(t){return vp(t)}function vp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ts(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ms(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=vp(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${vp(n.fields[o])}`;return s+"}"}(t.mapValue):J()}function Tw(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function wp(t){return!!t&&"integerValue"in t}function dg(t){return!!t&&"arrayValue"in t}function Iw(t){return!!t&&"nullValue"in t}function Sw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ou(t){return!!t&&"mapValue"in t}function Gb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ca(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ca(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ca(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Kb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ou(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ca(n)}setAll(e){let n=it.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ca(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ou(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ou(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){qs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new xt(ca(this.value))}}function _S(t){const e=[];return qs(t.fields,(n,r)=>{const s=new it([n]);if(Ou(r)){const i=_S(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new yt(e,0,Z.min(),Z.min(),Z.min(),xt.empty(),0)}static newFoundDocument(e,n,r,s){return new yt(e,1,n,Z.min(),r,s,0)}static newNoDocument(e,n){return new yt(e,2,n,Z.min(),Z.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,Z.min(),Z.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){this.position=e,this.inclusive=n}}function Cw(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Wi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n="asc"){this.field=e,this.dir=n}}function Qb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{}class $e extends yS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Xb(e,n,r):n==="array-contains"?new eD(e,r):n==="in"?new tD(e,r):n==="not-in"?new nD(e,r):n==="array-contains-any"?new rD(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Jb(e,r):new Zb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wi(n,this.value)):n!==null&&Vs(this.value)===Vs(n)&&this.matchesComparison(Wi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends yS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new yn(e,n)}matches(e){return vS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vS(t){return t.op==="and"}function wS(t){return Yb(t)&&vS(t)}function Yb(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function Ep(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+Hi(t.value);if(wS(t))return t.filters.map(e=>Ep(e)).join(",");{const e=t.filters.map(n=>Ep(n)).join(",");return`${t.op}(${e})`}}function ES(t,e){return t instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.field.isEqual(s.field)&&bn(r.value,s.value)}(t,e):t instanceof yn?function(r,s){return s instanceof yn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&ES(o,s.filters[a]),!0):!1}(t,e):void J()}function TS(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${Hi(n.value)}`}(t):t instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(TS).join(" ,")+"}"}(t):"Filter"}class Xb extends $e{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class Jb extends $e{constructor(e,n){super(e,"in",n),this.keys=IS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Zb extends $e{constructor(e,n){super(e,"not-in",n),this.keys=IS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function IS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class eD extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dg(n)&&qa(n.arrayValue,this.value)}}class tD extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qa(this.value.arrayValue,n)}}class nD extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(qa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!qa(this.value.arrayValue,n)}}class rD extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>qa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function Aw(t,e=null,n=[],r=[],s=null,i=null,o=null){return new sD(t,e,n,r,s,i,o)}function fg(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ep(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),wh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hi(r)).join(",")),e.ue=n}return e.ue}function pg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Qb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ES(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rw(t.startAt,e.startAt)&&Rw(t.endAt,e.endAt)}function Tp(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function iD(t,e,n,r,s,i,o,a){return new pl(t,e,n,r,s,i,o,a)}function mg(t){return new pl(t)}function kw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function SS(t){return t.collectionGroup!==null}function ha(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new at(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ic(i,r))}),n.has(it.keyField().canonicalString())||e.ce.push(new Ic(it.keyField(),r))}return e.ce}function An(t){const e=ee(t);return e.le||(e.le=oD(e,ha(t))),e.le}function oD(t,e){if(t.limitType==="F")return Aw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ic(s.field,i)});const n=t.endAt?new Tc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Tc(t.startAt.position,t.startAt.inclusive):null;return Aw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ip(t,e){const n=t.filters.concat([e]);return new pl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Sp(t,e,n){return new pl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Eh(t,e){return pg(An(t),An(e))&&t.limitType===e.limitType}function CS(t){return`${fg(An(t))}|lt:${t.limitType}`}function ni(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>TS(s)).join(", ")}]`),wh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Hi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Hi(s)).join(",")),`Target(${r})`}(An(t))}; limitType=${t.limitType})`}function Th(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ha(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,u){const c=Cw(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,ha(r),s)||r.endAt&&!function(o,a,u){const c=Cw(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,ha(r),s))}(t,e)}function aD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function RS(t){return(e,n)=>{let r=!1;for(const s of ha(t)){const i=lD(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function lD(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,o,a){const u=o.data.field(i),c=a.data.field(i);return u!==null&&c!==null?Wi(u,c):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){qs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return mS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD=new We(Q.comparator);function ar(){return uD}const AS=new We(Q.comparator);function Jo(...t){let e=AS;for(const n of t)e=e.insert(n.key,n);return e}function kS(t){let e=AS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ts(){return da()}function NS(){return da()}function da(){return new lo(t=>t.toString(),(t,e)=>t.isEqual(e))}const cD=new We(Q.comparator),hD=new at(Q.comparator);function ue(...t){let e=hD;for(const n of t)e=e.add(n);return e}const dD=new at(fe);function fD(){return dD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ec(e)?"-0":e}}function PS(t){return{integerValue:""+t}}function pD(t,e){return Wb(e)?PS(e):gg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this._=void 0}}function mD(t,e,n){return t instanceof Ga?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&cg(i)&&(i=hg(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ka?bS(t,e):t instanceof Qa?DS(t,e):function(s,i){const o=xS(s,i),a=Nw(o)+Nw(s.Pe);return wp(o)&&wp(s.Pe)?PS(a):gg(s.serializer,a)}(t,e)}function gD(t,e,n){return t instanceof Ka?bS(t,e):t instanceof Qa?DS(t,e):n}function xS(t,e){return t instanceof Sc?function(r){return wp(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ga extends Ih{}class Ka extends Ih{constructor(e){super(),this.elements=e}}function bS(t,e){const n=OS(e);for(const r of t.elements)n.some(s=>bn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Qa extends Ih{constructor(e){super(),this.elements=e}}function DS(t,e){let n=OS(e);for(const r of t.elements)n=n.filter(s=>!bn(s,r));return{arrayValue:{values:n}}}class Sc extends Ih{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Nw(t){return Fe(t.integerValue||t.doubleValue)}function OS(t){return dg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(e,n){this.field=e,this.transform=n}}function yD(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ka&&s instanceof Ka||r instanceof Qa&&s instanceof Qa?$i(r.elements,s.elements,bn):r instanceof Sc&&s instanceof Sc?bn(r.Pe,s.Pe):r instanceof Ga&&s instanceof Ga}(t.transform,e.transform)}class vD{constructor(e,n){this.version=e,this.transformResults=n}}class kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sh{}function LS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new VS(t.key,kn.none()):new ml(t.key,t.data,kn.none());{const n=t.data,r=xt.empty();let s=new at(it.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new us(t.key,r,new qt(s.toArray()),kn.none())}}function wD(t,e,n){t instanceof ml?function(s,i,o){const a=s.value.clone(),u=xw(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof us?function(s,i,o){if(!Lu(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=xw(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(MS(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function fa(t,e,n,r){return t instanceof ml?function(i,o,a,u){if(!Lu(i.precondition,o))return a;const c=i.value.clone(),d=bw(i.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof us?function(i,o,a,u){if(!Lu(i.precondition,o))return a;const c=bw(i.fieldTransforms,u,o),d=o.data;return d.setAll(MS(i)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return Lu(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function ED(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=xS(r.transform,s||null);i!=null&&(n===null&&(n=xt.empty()),n.set(r.field,i))}return n||null}function Pw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&$i(r,s,(i,o)=>yD(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ml extends Sh{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class us extends Sh{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function MS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function xw(t,e,n){const r=new Map;ge(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,gD(o,a,n[s]))}return r}function bw(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,mD(i,o,e))}return r}class VS extends Sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TD extends Sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&wD(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=fa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=fa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=NS();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=LS(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&$i(this.mutations,e.mutations,(n,r)=>Pw(n,r))&&$i(this.baseMutations,e.baseMutations,(n,r)=>Pw(n,r))}}class _g{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ge(e.mutations.length===r.length);let s=function(){return cD}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new _g(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,ce;function RD(t){switch(t){default:return J();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function jS(t){if(t===void 0)return or("GRPC error has no .code"),V.UNKNOWN;switch(t){case ze.OK:return V.OK;case ze.CANCELLED:return V.CANCELLED;case ze.UNKNOWN:return V.UNKNOWN;case ze.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ze.INTERNAL:return V.INTERNAL;case ze.UNAVAILABLE:return V.UNAVAILABLE;case ze.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ze.NOT_FOUND:return V.NOT_FOUND;case ze.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ze.ABORTED:return V.ABORTED;case ze.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ze.DATA_LOSS:return V.DATA_LOSS;default:return J()}}(ce=ze||(ze={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD=new As([4294967295,4294967295],0);function Dw(t){const e=AD().encode(t),n=new aS;return n.update(e),new Uint8Array(n.digest())}function Ow(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new As([n,r],0),new As([s,i],0)]}class yg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Zo(`Invalid padding: ${n}`);if(r<0)throw new Zo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Zo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=As.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(As.fromNumber(r)));return s.compare(kD)===1&&(s=new As([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Dw(e),[r,s]=Ow(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new yg(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Dw(e),[r,s]=Ow(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Zo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,gl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ch(Z.min(),s,new We(fe),ar(),ue())}}class gl{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new gl(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class FS{constructor(e,n){this.targetId=e,this.me=n}}class US{constructor(e,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Lw{constructor(){this.fe=0,this.ge=Vw(),this.pe=ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ue(),n=ue(),r=ue();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:J()}}),new gl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Vw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ND{constructor(e){this.Le=e,this.Be=new Map,this.ke=ar(),this.qe=Mw(),this.Qe=new We(fe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Tp(i))if(r===0){const o=new Q(i.path);this.Ue(n,o,yt.newNoDocument(o,Z.min()))}else ge(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Ms(r).toUint8Array()}catch(u){if(u instanceof gS)return Bi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new yg(o,s,i)}catch(u){return Bi(u instanceof Zo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Tp(a.target)){const u=new Q(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,yt.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ue();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ch(e,n,this.Qe,this.ke,r);return this.ke=ar(),this.qe=Mw(),this.Qe=new We(fe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Lw,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(fe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Lw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Mw(){return new We(Q.comparator)}function Vw(){return new We(Q.comparator)}const PD={asc:"ASCENDING",desc:"DESCENDING"},xD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bD={and:"AND",or:"OR"};class DD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cp(t,e){return t.useProto3Json||wh(e)?e:{value:e}}function Cc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function OD(t,e){return Cc(t,e.toTimestamp())}function Nn(t){return ge(!!t),Z.fromTimestamp(function(n){const r=ts(n);return new Ke(r.seconds,r.nanos)}(t))}function vg(t,e){return Rp(t,e).canonicalString()}function Rp(t,e){const n=function(s){return new Re(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function BS(t){const e=Re.fromString(t);return ge(GS(e)),e}function Ap(t,e){return vg(t.databaseId,e.path)}function Qd(t,e){const n=BS(e);if(n.get(1)!==t.databaseId.projectId)throw new G(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(WS(n))}function $S(t,e){return vg(t.databaseId,e)}function LD(t){const e=BS(t);return e.length===4?Re.emptyPath():WS(e)}function kp(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function WS(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function jw(t,e,n){return{name:Ap(t,e),fields:n.value.mapValue.fields}}function MD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,d){return c.useProto3Json?(ge(d===void 0||typeof d=="string"),ut.fromBase64String(d||"")):(ge(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ut.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?V.UNKNOWN:jS(c.code);return new G(d,c.message||"")}(o);n=new US(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Qd(t,r.document.name),i=Nn(r.document.updateTime),o=r.document.createTime?Nn(r.document.createTime):Z.min(),a=new xt({mapValue:{fields:r.document.fields}}),u=yt.newFoundDocument(s,i,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Mu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Qd(t,r.document),i=r.readTime?Nn(r.readTime):Z.min(),o=yt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Mu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Qd(t,r.document),i=r.removedTargetIds||[];n=new Mu([],i,s,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new CD(s,i),a=r.targetId;n=new FS(a,o)}}return n}function VD(t,e){let n;if(e instanceof ml)n={update:jw(t,e.key,e.value)};else if(e instanceof VS)n={delete:Ap(t,e.key)};else if(e instanceof us)n={update:jw(t,e.key,e.data),updateMask:qD(e.fieldMask)};else{if(!(e instanceof TD))return J();n={verify:Ap(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ga)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ka)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Qa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Sc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:OD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J()}(t,e.precondition)),n}function jD(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Nn(s.updateTime):Nn(i);return o.isEqual(Z.min())&&(o=Nn(i)),new vD(o,s.transformResults||[])}(n,e))):[]}function FD(t,e){return{documents:[$S(t,e.path)]}}function UD(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=$S(t,s);const i=function(c){if(c.length!==0)return qS(yn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:ri(m.field),direction:$D(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Cp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:s}}function zD(t){let e=LD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ge(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(f){const m=HS(f);return m instanceof yn&&wS(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(T){return new Ic(si(T.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,wh(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,_=f.values||[];return new Tc(_,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,_=f.values||[];return new Tc(_,m)}(n.endAt)),iD(e,s,o,i,a,"F",u,c)}function BD(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function HS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=si(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=si(n.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=si(n.unaryFilter.field);return $e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=si(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return $e.create(si(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(r=>HS(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function $D(t){return PD[t]}function WD(t){return xD[t]}function HD(t){return bD[t]}function ri(t){return{fieldPath:t.canonicalString()}}function si(t){return it.fromServerFormat(t.fieldPath)}function qS(t){return t instanceof $e?function(n){if(n.op==="=="){if(Sw(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NAN"}};if(Iw(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Sw(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NAN"}};if(Iw(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ri(n.field),op:WD(n.op),value:n.value}}}(t):t instanceof yn?function(n){const r=n.getFilters().map(s=>qS(s));return r.length===1?r[0]:{compositeFilter:{op:HD(n.op),filters:r}}}(t):J()}function qD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function GS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,r,s,i=Z.min(),o=Z.min(),a=ut.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e){this.ct=e}}function KD(t){const e=zD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(){this.un=new YD}addToCollectionParentIndex(e,n){return this.un.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(es.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(es.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class YD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(Re.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new qi(0)}static kn(){return new qi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(){this.changes=new lo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&fa(r.mutation,s,qt.empty(),Ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const s=Ts();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Jo();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ts();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=ar();const o=da(),a=function(){return da()}();return n.forEach((u,c)=>{const d=r.get(c.key);s.has(c.key)&&(d===void 0||d.mutation instanceof us)?i=i.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),fa(d.mutation,c,d.mutation.getFieldMask(),Ke.now())):o.set(c.key,qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new JD(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=da();let s=new We((o,a)=>o-a),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||qt.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(s.get(a.batchId)||ue()).add(u);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=NS();d.forEach(m=>{if(!i.has(m)){const _=LS(n.get(m),r.get(m));_!==null&&f.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):SS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):z.resolve(Ts());let a=-1,u=i;return o.next(c=>z.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(d)?z.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,ue())).next(d=>({batchId:a,changes:kS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let s=Jo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Jo();return this.indexManager.getCollectionParents(e,i).next(a=>z.forEach(a,u=>{const c=function(f,m){return new pl(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,yt.newInvalidDocument(d)))});let a=Jo();return o.forEach((u,c)=>{const d=i.get(u);d!==void 0&&fa(d.mutation,c,qt.empty(),Ke.now()),Th(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return z.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Nn(s.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:KD(s.bundledQuery),readTime:Nn(s.readTime)}}(n)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(){this.overlays=new We(Q.comparator),this.Ir=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ts();return z.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const s=Ts(),i=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return z.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new We((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=i.get(c.largestBatchId);d===null&&(d=Ts(),i=i.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Ts(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=s)););return z.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new SD(n,r));let i=this.Ir.get(n);i===void 0&&(i=ue(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.Tr=new at(Ye.Er),this.dr=new at(Ye.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ye(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new Re([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new Re([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=ue();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||fe(e.wr,n.wr)}static Ar(e,n){return fe(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new at(Ye.Er)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ID(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new Ye(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const a=this.Dr(o.wr);i.push(a)}),z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(fe);return n.forEach(s=>{const i=new Ye(s,0),o=new Ye(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{r=r.add(a.wr)})}),z.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new Q(i),0);let a=new at(fe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.wr)),!0)},o),z.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ge(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return z.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ye(n,0),s=this.br.firstAfterOrEqual(r);return z.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.Mr=e,this.docs=function(){return new We(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=ar();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():yt.newInvalidDocument(s))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ar();const o=n.path,a=new Q(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Ub(Fb(d),r)<=0||(s.has(d.key)||Th(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return z.resolve(i)}getAllFromCollectionGroup(e,n,r,s){J()}Or(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new iO(this)}getSize(e){return z.resolve(this.size)}}class iO extends XD{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e){this.persistence=e,this.Nr=new lo(n=>fg(n),pg),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new wg,this.targetCount=0,this.kr=qi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),z.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new qi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.Kn(n),z.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),z.waitFor(i).next(()=>s)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),z.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),z.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,n){this.qr={},this.overlays={},this.Qr=new ug(0),this.Kr=!1,this.Kr=!0,this.$r=new nO,this.referenceDelegate=e(this),this.Ur=new oO(this),this.indexManager=new QD,this.remoteDocumentCache=function(s){return new sO(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new GD(n),this.Gr=new eO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new rO(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new lO(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return z.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class lO extends Bb{constructor(e){super(),this.currentSequenceNumber=e}}class Eg{constructor(e){this.persistence=e,this.Jr=new wg,this.Yr=null}static Zr(e){return new Eg(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),z.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.Xr,r=>{const s=Q.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,Z.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return z.or([()=>z.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ue(),s=ue();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Tg(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return u2()?8:$b(Et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new uO;return this.Xi(e,n,o).next(a=>{if(i.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Vo()<=le.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",ni(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),z.resolve()):(Vo()<=le.DEBUG&&K("QueryEngine","Query:",ni(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Vo()<=le.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",ni(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,An(n))):z.resolve())}Yi(e,n){if(kw(n))return z.resolve(null);let r=An(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Sp(n,null,"F"),r=An(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ue(...i);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,Sp(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,s){return kw(n)||s.isEqual(Z.min())?z.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?z.resolve(null):(Vo()<=le.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ni(n)),this.rs(e,o,n,jb(s,-1)).next(a=>a))})}ts(e,n){let r=new at(RS(e));return n.forEach((s,i)=>{Th(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Vo()<=le.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",ni(n)),this.Ji.getDocumentsMatchingQuery(e,n,es.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new We(fe),this._s=new lo(i=>fg(i),pg),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZD(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function dO(t,e,n,r){return new hO(t,e,n,r)}async function KS(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=ue();for(const c of s){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of i){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function fO(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let _=z.resolve();return m.forEach(T=>{_=_.next(()=>d.getEntry(u,T)).next(I=>{const N=c.docVersions.get(T);ge(N!==null),I.version.compareTo(N)<0&&(f.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),d.addEntry(I)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ue();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function QS(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function pO(t,e){const n=ee(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const a=[];e.targetChanges.forEach((d,f)=>{const m=s.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,f)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(ut.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(f,_),function(I,N,E){return I.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,_,d)&&a.push(n.Ur.updateTargetData(i,_))});let u=ar(),c=ue();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),a.push(mO(i,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(Z.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(f=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(d)}return z.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.os=s,i))}function mO(t,e,n){let r=ue(),s=ue();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=ar();return n.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function gO(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _O(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,z.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Np(t,e,n){const r=ee(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!fl(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Fw(t,e,n){const r=ee(t);let s=Z.min(),i=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=ee(u),m=f._s.get(d);return m!==void 0?z.resolve(f.os.get(m)):f.Ur.getTargetData(c,d)}(r,o,An(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:Z.min(),n?i:ue())).next(a=>(yO(r,aD(e),a),{documents:a,Ts:i})))}function yO(t,e,n){let r=t.us.get(e)||Z.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Uw{constructor(){this.activeTargetIds=fD()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vO{constructor(){this.so=new Uw,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Uw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fu=null;function Yd(){return fu===null?fu=function(){return 268435456+Math.round(2147483648*Math.random())}():fu++,"0x"+fu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class IO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const a=Yd(),u=this.xo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${a}:`,u,s);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,i,o),this.No(n,u,c,s).then(d=>(K("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Bi("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",s),d})}Lo(n,r,s,i,o,a){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ao}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=EO[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Yd();return new Promise((o,a)=>{const u=new lS;u.setWithCredentials(!0),u.listenOnce(uS.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Du.NO_ERROR:const d=u.getResponseJson();K(mt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Du.TIMEOUT:K(mt,`RPC '${e}' ${i} timed out`),a(new G(V.DEADLINE_EXCEEDED,"Request time out"));break;case Du.HTTP_ERROR:const f=u.getStatus();if(K(mt,`RPC '${e}' ${i} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const T=function(N){const E=N.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(E)>=0?E:V.UNKNOWN}(_.status);a(new G(T,_.message))}else a(new G(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new G(V.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{K(mt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);K(mt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const s=Yd(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=dS(),a=hS(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=i.join("");K(mt,`Creating RPC '${e}' stream ${s}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,_=!1;const T=new TO({Io:N=>{_?K(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(K(mt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),K(mt,`RPC '${e}' stream ${s} sending:`,N),f.send(N))},To:()=>f.close()}),I=(N,E,y)=>{N.listen(E,S=>{try{y(S)}catch(b){setTimeout(()=>{throw b},0)}})};return I(f,Xo.EventType.OPEN,()=>{_||(K(mt,`RPC '${e}' stream ${s} transport opened.`),T.yo())}),I(f,Xo.EventType.CLOSE,()=>{_||(_=!0,K(mt,`RPC '${e}' stream ${s} transport closed`),T.So())}),I(f,Xo.EventType.ERROR,N=>{_||(_=!0,Bi(mt,`RPC '${e}' stream ${s} transport errored:`,N),T.So(new G(V.UNAVAILABLE,"The operation could not be completed")))}),I(f,Xo.EventType.MESSAGE,N=>{var E;if(!_){const y=N.data[0];ge(!!y);const S=y,b=S.error||((E=S[0])===null||E===void 0?void 0:E.error);if(b){K(mt,`RPC '${e}' stream ${s} received error:`,b);const F=b.status;let U=function(C){const k=ze[C];if(k!==void 0)return jS(k)}(F),R=b.message;U===void 0&&(U=V.INTERNAL,R="Unknown error status: "+F+" with message "+b.message),_=!0,T.So(new G(U,R)),f.close()}else K(mt,`RPC '${e}' stream ${s} received:`,y),T.bo(y)}}),I(a,cS.STAT_EVENT,N=>{N.stat===_p.PROXY?K(mt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===_p.NOPROXY&&K(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function Xd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t){return new DD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,n,r,s,i,o,a,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new YS(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(or(n.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new G(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SO extends XS{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=MD(this.serializer,e),r=function(i){if(!("targetChange"in i))return Z.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?Nn(o.readTime):Z.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=kp(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=Tp(u)?{documents:FD(i,u)}:{query:UD(i,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=zS(i,o.resumeToken);const c=Cp(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=Cc(i,o.snapshotVersion.toTimestamp());const c=Cp(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=BD(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=kp(this.serializer),n.removeTarget=e,this.a_(n)}}class CO extends XS{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ge(!!e.streamToken),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=jD(e.writeResults,e.commitTime),r=Nn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=kp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>VD(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Rp(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(V.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Rp(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class AO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(or(n),this.D_=!1):K("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Gs(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ee(u);c.L_.add(4),await _l(c),c.q_.set("Unknown"),c.L_.delete(4),await Ah(c)}(this))})}),this.q_=new AO(r,s)}}async function Ah(t){if(Gs(t))for(const e of t.B_)await e(!0)}async function _l(t){for(const e of t.B_)await e(!1)}function JS(t,e){const n=ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Rg(n)?Cg(n):uo(n).r_()&&Sg(n,e))}function Ig(t,e){const n=ee(t),r=uo(n);n.N_.delete(e),r.r_()&&ZS(n,e),n.N_.size===0&&(r.r_()?r.o_():Gs(n)&&n.q_.set("Unknown"))}function Sg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}uo(t).A_(e)}function ZS(t,e){t.Q_.xe(e),uo(t).R_(e)}function Cg(t){t.Q_=new ND({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),uo(t).start(),t.q_.v_()}function Rg(t){return Gs(t)&&!uo(t).n_()&&t.N_.size>0}function Gs(t){return ee(t).L_.size===0}function eC(t){t.Q_=void 0}async function NO(t){t.q_.set("Online")}async function PO(t){t.N_.forEach((e,n)=>{Sg(t,e)})}async function xO(t,e){eC(t),Rg(t)?(t.q_.M_(e),Cg(t)):t.q_.set("Unknown")}async function bO(t,e,n){if(t.q_.set("Online"),e instanceof US&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Rc(t,r)}else if(e instanceof Mu?t.Q_.Ke(e):e instanceof FS?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Z.min()))try{const r=await QS(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.N_.get(c);d&&i.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=i.N_.get(u);if(!d)return;i.N_.set(u,d.withResumeToken(ut.EMPTY_BYTE_STRING,d.snapshotVersion)),ZS(i,u);const f=new Or(d.target,u,c,d.sequenceNumber);Sg(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await Rc(t,r)}}async function Rc(t,e,n){if(!fl(e))throw e;t.L_.add(1),await _l(t),t.q_.set("Offline"),n||(n=()=>QS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ah(t)})}function tC(t,e){return e().catch(n=>Rc(t,n,e))}async function kh(t){const e=ee(t),n=ns(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;DO(e);)try{const s=await gO(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,OO(e,s)}catch(s){await Rc(e,s)}nC(e)&&rC(e)}function DO(t){return Gs(t)&&t.O_.length<10}function OO(t,e){t.O_.push(e);const n=ns(t);n.r_()&&n.V_&&n.m_(e.mutations)}function nC(t){return Gs(t)&&!ns(t).n_()&&t.O_.length>0}function rC(t){ns(t).start()}async function LO(t){ns(t).p_()}async function MO(t){const e=ns(t);for(const n of t.O_)e.m_(n.mutations)}async function VO(t,e,n){const r=t.O_.shift(),s=_g.from(r,e,n);await tC(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await kh(t)}async function jO(t,e){e&&ns(t).V_&&await async function(r,s){if(function(o){return RD(o)&&o!==V.ABORTED}(s.code)){const i=r.O_.shift();ns(r).s_(),await tC(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await kh(r)}}(t,e),nC(t)&&rC(t)}async function Bw(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Gs(n);n.L_.add(3),await _l(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ah(n)}async function FO(t,e){const n=ee(t);e?(n.L_.delete(2),await Ah(n)):e||(n.L_.add(2),await _l(n),n.q_.set("Unknown"))}function uo(t){return t.K_||(t.K_=function(n,r,s){const i=ee(n);return i.w_(),new SO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:NO.bind(null,t),Ro:PO.bind(null,t),mo:xO.bind(null,t),d_:bO.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Rg(t)?Cg(t):t.q_.set("Unknown")):(await t.K_.stop(),eC(t))})),t.K_}function ns(t){return t.U_||(t.U_=function(n,r,s){const i=ee(n);return i.w_(),new CO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:LO.bind(null,t),mo:jO.bind(null,t),f_:MO.bind(null,t),g_:VO.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await kh(t)):(await t.U_.stop(),t.O_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Ag(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kg(t,e){if(or("AsyncQueue",`${e}: ${t}`),fl(t))return new G(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Jo(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new Ci(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ci)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ci;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(){this.W_=new We(Q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):J():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gi{constructor(e,n,r,s,i,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Gi(e,n,Ci.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Eh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class zO{constructor(){this.queries=Ww(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ee(n),i=s.queries;s.queries=Ww(),i.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new G(V.ABORTED,"Firestore shutting down"))}}function Ww(){return new lo(t=>CS(t),Eh)}async function sC(t,e){const n=ee(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new UO,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=kg(o,`Initialization of query '${ni(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Ng(n)}async function iC(t,e){const n=ee(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function BO(t,e){const n=ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(r=!0);o.z_=s}}r&&Ng(n)}function $O(t,e,n){const r=ee(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Ng(t){t.Y_.forEach(e=>{e.next()})}var Pp,Hw;(Hw=Pp||(Pp={})).ea="default",Hw.Cache="cache";class oC{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Pp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.key=e}}class lC{constructor(e){this.key=e}}class WO{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ue(),this.mutatedKeys=ue(),this.Aa=RS(e),this.Ra=new Ci(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new $w,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,f)=>{const m=s.get(d),_=Th(this.query,f)?f:null,T=!!m&&this.mutatedKeys.has(m.key),I=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let N=!1;m&&_?m.data.isEqual(_.data)?T!==I&&(r.track({type:3,doc:_}),N=!0):this.ga(m,_)||(r.track({type:2,doc:_}),N=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),N=!0):m&&!_&&(r.track({type:1,doc:m}),N=!0,(u||c)&&(a=!0)),N&&(_?(o=o.add(_),i=I?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(_,T){const I=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return I(_)-I(T)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),s=s!=null&&s;const a=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Gi(this.query,e.Ra,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new $w,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ue(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new lC(r))}),this.da.forEach(r=>{e.has(r)||n.push(new aC(r))}),n}ba(e){this.Ta=e.Ts,this.da=ue();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Gi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class HO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class qO{constructor(e){this.key=e,this.va=!1}}class GO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new lo(a=>CS(a),Eh),this.Ma=new Map,this.xa=new Set,this.Oa=new We(Q.comparator),this.Na=new Map,this.La=new wg,this.Ba={},this.ka=new Map,this.qa=qi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function KO(t,e,n=!0){const r=pC(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await uC(r,e,n,!0),s}async function QO(t,e){const n=pC(t);await uC(n,e,!0,!1)}async function uC(t,e,n,r){const s=await _O(t.localStore,An(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await YO(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&JS(t.remoteStore,s),a}async function YO(t,e,n,r,s){t.Ka=(f,m,_)=>async function(I,N,E,y){let S=N.view.ma(E);S.ns&&(S=await Fw(I.localStore,N.query,!1).then(({documents:R})=>N.view.ma(R,S)));const b=y&&y.targetChanges.get(N.targetId),F=y&&y.targetMismatches.get(N.targetId)!=null,U=N.view.applyChanges(S,I.isPrimaryClient,b,F);return Gw(I,N.targetId,U.wa),U.snapshot}(t,f,m,_);const i=await Fw(t.localStore,e,!0),o=new WO(e,i.Ts),a=o.ma(i.documents),u=gl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,u);Gw(t,n,c.wa);const d=new HO(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function XO(t,e,n){const r=ee(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Eh(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Np(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ig(r.remoteStore,s.targetId),xp(r,s.targetId)}).catch(dl)):(xp(r,s.targetId),await Np(r.localStore,s.targetId,!0))}async function JO(t,e){const n=ee(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ig(n.remoteStore,r.targetId))}async function ZO(t,e,n){const r=oL(t);try{const s=await function(o,a){const u=ee(o),c=Ke.now(),d=a.reduce((_,T)=>_.add(T.key),ue());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=ar(),I=ue();return u.cs.getEntries(_,d).next(N=>{T=N,T.forEach((E,y)=>{y.isValidDocument()||(I=I.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,T)).next(N=>{f=N;const E=[];for(const y of a){const S=ED(y,f.get(y.key).overlayedDocument);S!=null&&E.push(new us(y.key,S,_S(S.value.mapValue),kn.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,E,a)}).next(N=>{m=N;const E=N.applyToLocalDocumentSet(f,I);return u.documentOverlayCache.saveOverlays(_,N.batchId,E)})}).then(()=>({batchId:m.batchId,changes:kS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new We(fe)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,s.batchId,n),await yl(r,s.changes),await kh(r.remoteStore)}catch(s){const i=kg(s,"Failed to persist write");n.reject(i)}}async function cC(t,e){const n=ee(t);try{const r=await pO(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(ge(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?ge(o.va):s.removedDocuments.size>0&&(ge(o.va),o.va=!1))}),await yl(n,r,e)}catch(r){await dl(r)}}function qw(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const a=o.view.Z_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=ee(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&Ng(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function eL(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new We(Q.comparator);o=o.insert(i,yt.newNoDocument(i,Z.min()));const a=ue().add(i),u=new Ch(Z.min(),new Map,new We(fe),o,a);await cC(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Pg(r)}else await Np(r.localStore,e,!1).then(()=>xp(r,e,n)).catch(dl)}async function tL(t,e){const n=ee(t),r=e.batch.batchId;try{const s=await fO(n.localStore,e);dC(n,r,null),hC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yl(n,s)}catch(s){await dl(s)}}async function nL(t,e,n){const r=ee(t);try{const s=await function(o,a){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(ge(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);dC(r,e,n),hC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yl(r,s)}catch(s){await dl(s)}}function hC(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function dC(t,e,n){const r=ee(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function xp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||fC(t,r)})}function fC(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Ig(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Pg(t))}function Gw(t,e,n){for(const r of n)r instanceof aC?(t.La.addReference(r.key,e),rL(t,r)):r instanceof lC?(K("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||fC(t,r.key)):J()}function rL(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(K("SyncEngine","New document in limbo: "+n),t.xa.add(r),Pg(t))}function Pg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Q(Re.fromString(e)),r=t.qa.next();t.Na.set(r,new qO(n)),t.Oa=t.Oa.insert(n,r),JS(t.remoteStore,new Or(An(mg(n.path)),r,"TargetPurposeLimboResolution",ug.oe))}}async function yl(t,e,n){const r=ee(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){s.push(c);const f=Tg.Wi(u.targetId,c);i.push(f)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,c){const d=ee(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>z.forEach(c,m=>z.forEach(m.$i,_=>d.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>z.forEach(m.Ui,_=>d.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!fl(f))throw f;K("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const _=d.os.get(m),T=_.snapshotVersion,I=_.withLastLimboFreeSnapshotVersion(T);d.os=d.os.insert(m,I)}}}(r.localStore,i))}async function sL(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await KS(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(a=>{a.forEach(u=>{u.reject(new G(V.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yl(n,r.hs)}}function iL(t,e){const n=ee(t),r=n.Na.get(e);if(r&&r.va)return ue().add(r.key);{let s=ue();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const a=n.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}function pC(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eL.bind(null,e),e.Ca.d_=BO.bind(null,e.eventManager),e.Ca.$a=$O.bind(null,e.eventManager),e}function oL(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nL.bind(null,e),e}class Ac{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Rh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return dO(this.persistence,new cO,e.initialUser,this.serializer)}Ga(e){return new aO(Eg.Zr,this.serializer)}Wa(e){return new vO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ac.provider={build:()=>new Ac};class bp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sL.bind(null,this.syncEngine),await FO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zO}()}createDatastore(e){const n=Rh(e.databaseInfo.databaseId),r=function(i){return new IO(i)}(e.databaseInfo);return function(i,o,a,u){return new RO(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new kO(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>qw(this.syncEngine,n,0),function(){return zw.D()?new zw:new wO}())}createSyncEngine(e,n){return function(s,i,o,a,u,c,d){const f=new GO(s,i,o,a,u,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ee(s);K("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await _l(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}bp.provider={build:()=>new bp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):or("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=pS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{K("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=kg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Jd(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await KS(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Kw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lL(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Bw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Bw(e.remoteStore,s)),t._onlineComponents=e}async function lL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Bi("Error using user provided cache. Falling back to memory cache: "+n),await Jd(t,new Ac)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await Jd(t,new Ac);return t._offlineComponents}async function gC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await Kw(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await Kw(t,new bp))),t._onlineComponents}function uL(t){return gC(t).then(e=>e.syncEngine)}async function _C(t){const e=await gC(t),n=e.eventManager;return n.onListen=KO.bind(null,e.syncEngine),n.onUnlisten=XO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=QO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=JO.bind(null,e.syncEngine),n}function cL(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const d=new mC({next:m=>{d.Za(),o.enqueueAndForget(()=>iC(i,f));const _=m.docs.has(a);!_&&m.fromCache?c.reject(new G(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&u&&u.source==="server"?c.reject(new G(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new oC(mg(a.path),d,{includeMetadataChanges:!0,_a:!0});return sC(i,f)}(await _C(t),t.asyncQueue,e,n,r)),r.promise}function hL(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const d=new mC({next:m=>{d.Za(),o.enqueueAndForget(()=>iC(i,f)),m.fromCache&&u.source==="server"?c.reject(new G(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new oC(a,d,{includeMetadataChanges:!0,_a:!0});return sC(i,f)}(await _C(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(t,e,n){if(!n)throw new G(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dL(t,e,n,r){if(e===!0&&r===!0)throw new G(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yw(t){if(!Q.isDocumentKey(t))throw new G(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xw(t){if(Q.isDocumentKey(t))throw new G(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Nh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function lr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nh(t);throw new G(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ph{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jw({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Nb;switch(r.type){case"firstParty":return new Db(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Qw.get(n);r&&(K("ComponentProvider","Removing Datastore"),Qw.delete(n),r.terminate())}(this),Promise.resolve()}}function fL(t,e,n,r={}){var s;const i=(t=lr(t,Ph))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Bi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=gt.MOCK_USER;else{a=sg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new gt(c)}t._authCredentials=new Pb(new fS(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new co(this.firestore,e,this._query)}}class At{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class Qr extends co{constructor(e,n,r){super(e,n,mg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new Q(e))}withConverter(e){return new Qr(this.firestore,e,this._path)}}function pL(t,e,...n){if(t=ke(t),vC("collection","path",e),t instanceof Ph){const r=Re.fromString(e,...n);return Xw(r),new Qr(t,null,r)}{if(!(t instanceof At||t instanceof Qr))throw new G(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Xw(r),new Qr(t.firestore,null,r)}}function pu(t,e,...n){if(t=ke(t),arguments.length===1&&(e=pS.newId()),vC("doc","path",e),t instanceof Ph){const r=Re.fromString(e,...n);return Yw(r),new At(t,null,new Q(r))}{if(!(t instanceof At||t instanceof Qr))throw new G(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Yw(r),new At(t.firestore,t instanceof Qr?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new YS(this,"async_queue_retry"),this.Vu=()=>{const r=Xd();r&&K("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Xd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Xd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Jn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!fl(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw or("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Ag.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class vl extends Ph{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Zw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zw(e),this._firestoreClient=void 0,await e}}}function mL(t,e){const n=typeof t=="object"?t:vh(),r=typeof t=="string"?t:"(default)",s=hl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=rg("firestore");i&&fL(s,...i)}return s}function xg(t){if(t._terminated)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||gL(t),t._firestoreClient}function gL(t){var e,n,r;const s=t._freezeSettings(),i=function(a,u,c,d){return new qb(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,yC(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new aL(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ki(ut.fromBase64String(e))}catch(n){throw new G(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ki(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _L=/^__.*__$/;class yL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new us(e,this.data,this.fieldMask,n,this.fieldTransforms):new ml(e,this.data,n,this.fieldTransforms)}}class wC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new us(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function EC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Og{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Og(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return kc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(EC(this.Cu)&&_L.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class vL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Rh(e)}Qu(e,n,r,s=!1){return new Og({Cu:e,methodName:n,qu:r,path:it.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lg(t){const e=t._freezeSettings(),n=Rh(t._databaseId);return new vL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wL(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Vg("Data must be an object, but it was:",o,r);const a=TC(r,o);let u,c;if(i.merge)u=new qt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const f of i.mergeFields){const m=Dp(e,f,n);if(!o.contains(m))throw new G(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);SC(d,m)||d.push(m)}u=new qt(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new yL(new xt(a),u,c)}class Dh extends bh{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dh}}class Mg extends bh{_toFieldTransform(e){return new _D(e.path,new Ga)}isEqual(e){return e instanceof Mg}}function EL(t,e,n,r){const s=t.Qu(1,e,n);Vg("Data must be an object, but it was:",s,r);const i=[],o=xt.empty();qs(r,(u,c)=>{const d=jg(e,u,n);c=ke(c);const f=s.Nu(d);if(c instanceof Dh)i.push(d);else{const m=wl(c,f);m!=null&&(i.push(d),o.set(d,m))}});const a=new qt(i);return new wC(o,a,s.fieldTransforms)}function TL(t,e,n,r,s,i){const o=t.Qu(1,e,n),a=[Dp(e,r,n)],u=[s];if(i.length%2!=0)throw new G(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(Dp(e,i[m])),u.push(i[m+1]);const c=[],d=xt.empty();for(let m=a.length-1;m>=0;--m)if(!SC(c,a[m])){const _=a[m];let T=u[m];T=ke(T);const I=o.Nu(_);if(T instanceof Dh)c.push(_);else{const N=wl(T,I);N!=null&&(c.push(_),d.set(_,N))}}const f=new qt(c);return new wC(d,f,o.fieldTransforms)}function IL(t,e,n,r=!1){return wl(n,t.Qu(r?4:3,e))}function wl(t,e){if(IC(t=ke(t)))return Vg("Unsupported field value:",e,t),TC(t,e);if(t instanceof bh)return function(r,s){if(!EC(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let u=wl(a,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pD(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ke.fromDate(r);return{timestampValue:Cc(s.serializer,i)}}if(r instanceof Ke){const i=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cc(s.serializer,i)}}if(r instanceof bg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ki)return{bytesValue:zS(s.serializer,r._byteString)};if(r instanceof At){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:vg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Dg)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return gg(a.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Nh(r)}`)}(t,e)}function TC(t,e){const n={};return mS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qs(t,(r,s)=>{const i=wl(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function IC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof bg||t instanceof Ki||t instanceof At||t instanceof bh||t instanceof Dg)}function Vg(t,e,n){if(!IC(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Nh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Dp(t,e,n){if((e=ke(e))instanceof xh)return e._internalPath;if(typeof e=="string")return jg(t,e);throw kc("Field path arguments must be of type string or ",t,!1,void 0,n)}const SL=new RegExp("[~\\*/\\[\\]]");function jg(t,e,n){if(e.search(SL)>=0)throw kc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xh(...e.split("."))._internalPath}catch{throw kc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function kc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new G(V.INVALID_ARGUMENT,a+t+u)}function SC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class CL extends CC{data(){return super.data()}}function Fg(t,e){return typeof e=="string"?jg(t,e):e instanceof xh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ug{}class AL extends Ug{}function kL(t,e,...n){let r=[];e instanceof Ug&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof zg).length,a=i.filter(u=>u instanceof Oh).length;if(o>1||o>0&&a>0)throw new G(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Oh extends AL{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Oh(e,n,r)}_apply(e){const n=this._parse(e);return RC(e._query,n),new co(e.firestore,e.converter,Ip(e._query,n))}_parse(e){const n=Lg(e.firestore);return function(i,o,a,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new G(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){tE(f,d);const _=[];for(const T of f)_.push(eE(u,i,T));m={arrayValue:{values:_}}}else m=eE(u,i,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||tE(f,d),m=IL(a,o,f,d==="in"||d==="not-in");return $e.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function NL(t,e,n){const r=e,s=Fg("where",t);return Oh._create(s,r,n)}class zg extends Ug{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)RC(o,u),o=Ip(o,u)}(e._query,n),new co(e.firestore,e.converter,Ip(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function eE(t,e,n){if(typeof(n=ke(n))=="string"){if(n==="")throw new G(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!SS(e)&&n.indexOf("/")!==-1)throw new G(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Re.fromString(n));if(!Q.isDocumentKey(r))throw new G(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Tw(t,new Q(r))}if(n instanceof At)return Tw(t,n._key);throw new G(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nh(n)}.`)}function tE(t,e){if(!Array.isArray(t)||t.length===0)throw new G(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function RC(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class PL{convertValue(e,n="none"){switch(Vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return qs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Fe(o.doubleValue));return new Dg(i)}convertGeoPoint(e){return new bg(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=hg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wa(e));default:return null}}convertTimestamp(e){const n=ts(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);ge(GS(r));const s=new Ha(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(n)||or(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xL(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class AC extends CC{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Vu extends AC{data(e={}){return super.data(e)}}class bL{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ea(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Vu(this._firestore,this._userDataWriter,r.key,r,new ea(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new Vu(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ea(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new Vu(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ea(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:DL(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function DL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(t){t=lr(t,At);const e=lr(t.firestore,vl);return cL(xg(e),t._key).then(n=>ML(e,t,n))}class kC extends PL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ki(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function OL(t){t=lr(t,co);const e=lr(t.firestore,vl),n=xg(e),r=new kC(e);return RL(t._query),hL(n,t._query).then(s=>new bL(e,r,t,s))}function LL(t,e,n){t=lr(t,At);const r=lr(t.firestore,vl),s=xL(t.converter,e);return NC(r,[wL(Lg(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,kn.none())])}function Zd(t,e,n,...r){t=lr(t,At);const s=lr(t.firestore,vl),i=Lg(s);let o;return o=typeof(e=ke(e))=="string"||e instanceof xh?TL(i,"updateDoc",t._key,e,n,r):EL(i,"updateDoc",t._key,e),NC(s,[o.toMutation(t._key,kn.exists(!0))])}function NC(t,e){return function(r,s){const i=new Jn;return r.asyncQueue.enqueueAndForget(async()=>ZO(await uL(r),s,i)),i.promise}(xg(t),e)}function ML(t,e,n){const r=n.docs.get(e._key),s=new kC(t);return new AC(t,s,e._key,r,new ea(n.hasPendingWrites,n.fromCache),e.converter)}function jo(){return new Mg("serverTimestamp")}(function(e,n=!0){(function(s){ao=s})(ls),Zr(new sr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new vl(new xb(r.getProvider("auth-internal")),new Lb(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ha(c.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),nn(_w,"4.7.3",e),nn(_w,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC="firebasestorage.googleapis.com",xC="storageBucket",VL=2*60*1e3,jL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Ln{constructor(e,n,r=0){super(ef(e),`Firebase Storage: ${n} (${ef(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ef(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ve;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ve||(Ve={}));function ef(t){return"storage/"+t}function Bg(){const t="An unknown error occurred, please check the error payload for server response.";return new je(Ve.UNKNOWN,t)}function FL(t){return new je(Ve.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function UL(t){return new je(Ve.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function zL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new je(Ve.UNAUTHENTICATED,t)}function BL(){return new je(Ve.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function $L(t){return new je(Ve.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function WL(){return new je(Ve.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function HL(){return new je(Ve.CANCELED,"User canceled the upload/download.")}function qL(t){return new je(Ve.INVALID_URL,"Invalid URL '"+t+"'.")}function GL(t){return new je(Ve.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function KL(){return new je(Ve.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+xC+"' property when initializing the app?")}function QL(){return new je(Ve.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function YL(){return new je(Ve.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function XL(t){return new je(Ve.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Op(t){return new je(Ve.INVALID_ARGUMENT,t)}function bC(){return new je(Ve.APP_DELETED,"The Firebase app was deleted.")}function JL(t){return new je(Ve.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function pa(t,e){return new je(Ve.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Fo(t){throw new je(Ve.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Gt.makeFromUrl(e,n)}catch{return new Gt(e,"")}if(r.path==="")return r;throw GL(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${d}/b/${s}/o${m}`,"i"),T={bucket:1,path:3},I=n===PC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",E=new RegExp(`^https?://${I}/${s}/${N}`,"i"),S=[{regex:a,indices:u,postModify:i},{regex:_,indices:T,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<S.length;b++){const F=S[b],U=F.regex.exec(e);if(U){const R=U[F.indices.bucket];let w=U[F.indices.path];w||(w=""),r=new Gt(R,w),F.postModify(r);break}}if(r==null)throw qL(e);return r}}class ZL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eM(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...N){c||(c=!0,e.apply(null,N))}function f(N){s=setTimeout(()=>{s=null,t(_,u())},N)}function m(){i&&clearTimeout(i)}function _(N,...E){if(c){m();return}if(N){m(),d.call(null,N,...E);return}if(u()||o){m(),d.call(null,N,...E);return}r<64&&(r*=2);let S;a===1?(a=2,S=0):S=(r+Math.random())*1e3,f(S)}let T=!1;function I(N){T||(T=!0,m(),!c&&(s!==null?(N||(a=2),clearTimeout(s),f(0)):N||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,I(!0)},n),I}function tM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nM(t){return t!==void 0}function rM(t){return typeof t=="object"&&!Array.isArray(t)}function $g(t){return typeof t=="string"||t instanceof String}function rE(t){return Wg()&&t instanceof Blob}function Wg(){return typeof Blob<"u"}function sE(t,e,n,r){if(r<e)throw Op(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Op(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function DC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ks;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ks||(ks={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sM(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e,n,r,s,i,o,a,u,c,d,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,T)=>{this.resolve_=_,this.reject_=T,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new mu(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ks.NO_ERROR,u=i.getStatus();if(!a||sM(u,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===ks.ABORT;r(!1,new mu(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new mu(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());nM(u)?i(u):i()}catch(u){o(u)}else if(a!==null){const u=Bg();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(s.canceled){const u=this.appDelete_?bC():HL();o(u)}else{const u=WL();o(u)}};this.canceled_?n(!1,new mu(!1,null,!0)):this.backoffId_=eM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&tM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class mu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function oM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function aM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function lM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function uM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function cM(t,e,n,r,s,i,o=!0){const a=DC(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return lM(c,e),oM(c,n),aM(c,i),uM(c,r),new iM(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function dM(...t){const e=hM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Wg())return new Blob(t);throw new je(Ve.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function fM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(t){if(typeof atob>"u")throw XL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class tf{constructor(e,n){this.data=e,this.contentType=n||null}}function mM(t,e){switch(t){case In.RAW:return new tf(OC(e));case In.BASE64:case In.BASE64URL:return new tf(LC(t,e));case In.DATA_URL:return new tf(_M(e),yM(e))}throw Bg()}function OC(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function gM(t){let e;try{e=decodeURIComponent(t)}catch{throw pa(In.DATA_URL,"Malformed data URL.")}return OC(e)}function LC(t,e){switch(t){case In.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw pa(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case In.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw pa(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=pM(e)}catch(s){throw s.message.includes("polyfill")?s:pa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class MC{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw pa(In.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=vM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function _M(t){const e=new MC(t);return e.base64?LC(In.BASE64,e.rest):gM(e.rest)}function yM(t){return new MC(t).contentType}function vM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n){let r=0,s="";rE(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(rE(this.data_)){const r=this.data_,s=fM(r,e,n);return s===null?null:new Rr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Rr(r,!0)}}static getBlob(...e){if(Wg()){const n=e.map(r=>r instanceof Rr?r.data_:r);return new Rr(dM.apply(null,n))}else{const n=e.map(o=>$g(o)?mM(In.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Rr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t){let e;try{e=JSON.parse(t)}catch{return null}return rM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function EM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function jC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TM(t,e){return e}class St{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||TM}}let gu=null;function IM(t){return!$g(t)||t.length<2?t:jC(t)}function FC(){if(gu)return gu;const t=[];t.push(new St("bucket")),t.push(new St("generation")),t.push(new St("metageneration")),t.push(new St("name","fullPath",!0));function e(i,o){return IM(o)}const n=new St("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new St("size");return s.xform=r,t.push(s),t.push(new St("timeCreated")),t.push(new St("updated")),t.push(new St("md5Hash",null,!0)),t.push(new St("cacheControl",null,!0)),t.push(new St("contentDisposition",null,!0)),t.push(new St("contentEncoding",null,!0)),t.push(new St("contentLanguage",null,!0)),t.push(new St("contentType",null,!0)),t.push(new St("metadata","customMetadata",!0)),gu=t,gu}function SM(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Gt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function CM(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return SM(r,t),r}function UC(t,e,n){const r=VC(e);return r===null?null:CM(t,r,n)}function RM(t,e,n,r){const s=VC(e);if(s===null||!$g(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),_=Hg(m,n,r),T=DC({alt:"media",token:c});return _+T})[0]}function AM(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class zC{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(t){if(!t)throw Bg()}function kM(t,e){function n(r,s){const i=UC(t,s,e);return BC(i!==null),i}return n}function NM(t,e){function n(r,s){const i=UC(t,s,e);return BC(i!==null),RM(i,s,t.host,t._protocol)}return n}function $C(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=BL():s=zL():n.getStatus()===402?s=UL(t.bucket):n.getStatus()===403?s=$L(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function PM(t){const e=$C(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=FL(t.path)),i.serverResponse=s.serverResponse,i}return n}function xM(t,e,n){const r=e.fullServerUrl(),s=Hg(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new zC(s,i,NM(t,n),o);return a.errorHandler=PM(e),a}function bM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function DM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=bM(null,e)),r}function OM(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let b=0;b<2;b++)S=S+Math.random().toString().slice(2);return S}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=DM(e,r,s),d=AM(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",_=Rr.getBlob(f,r,m);if(_===null)throw QL();const T={name:c.fullPath},I=Hg(i,t.host,t._protocol),N="POST",E=t.maxUploadRetryTime,y=new zC(I,N,kM(t,n),E);return y.urlParams=T,y.headers=o,y.body=_.uploadData(),y.errorHandler=$C(e),y}class LM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ks.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ks.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ks.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Fo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Fo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Fo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Fo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Fo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class MM extends LM{initXhr(){this.xhr_.responseType="text"}}function WC(){return new MM}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n){this._service=e,n instanceof Gt?this._location=n:this._location=Gt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new js(e,n)}get root(){const e=new Gt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jC(this._location.path)}get storage(){return this._service}get parent(){const e=wM(this._location.path);if(e===null)return null;const n=new Gt(this._location.bucket,e);return new js(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw JL(e)}}function VM(t,e,n){t._throwIfRoot("uploadBytes");const r=OM(t.storage,t._location,FC(),new Rr(e,!0),n);return t.storage.makeRequestWithTokens(r,WC).then(s=>({metadata:s,ref:t}))}function jM(t){t._throwIfRoot("getDownloadURL");const e=xM(t.storage,t._location,FC());return t.storage.makeRequestWithTokens(e,WC).then(n=>{if(n===null)throw YL();return n})}function FM(t,e){const n=EM(t._location.path,e),r=new Gt(t._location.bucket,n);return new js(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UM(t){return/^[A-Za-z]+:\/\//.test(t)}function zM(t,e){return new js(t,e)}function HC(t,e){if(t instanceof qg){const n=t;if(n._bucket==null)throw KL();const r=new js(n,n._bucket);return e!=null?HC(r,e):r}else return e!==void 0?FM(t,e):t}function BM(t,e){if(e&&UM(e)){if(t instanceof qg)return zM(t,e);throw Op("To use ref(service, url), the first argument must be a Storage instance.")}else return HC(t,e)}function iE(t,e){const n=e==null?void 0:e[xC];return n==null?null:Gt.makeFromBucketSpec(n,t)}function $M(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:sg(s,t.app.options.projectId))}class qg{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=PC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=VL,this._maxUploadRetryTime=jL,this._requests=new Set,s!=null?this._bucket=Gt.makeFromBucketSpec(s,this._host):this._bucket=iE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Gt.makeFromBucketSpec(this._url,e):this._bucket=iE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){sE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){sE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new js(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new ZL(bC());{const o=cM(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const oE="@firebase/storage",aE="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC="storage";function WM(t,e,n){return t=ke(t),VM(t,e,n)}function HM(t){return t=ke(t),jM(t)}function qM(t,e){return t=ke(t),BM(t,e)}function GM(t=vh(),e){t=ke(t);const r=hl(t,qC).getImmediate({identifier:e}),s=rg("storage");return s&&KM(r,...s),r}function KM(t,e,n,r={}){$M(t,e,n,r)}function QM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new qg(n,r,s,e,ls)}function YM(){Zr(new sr(qC,QM,"PUBLIC").setMultipleInstances(!0)),nn(oE,aE,""),nn(oE,aE,"esm2017")}YM();var XM="firebase",JM="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn(XM,JM,"app");function Gg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function GC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZM=GC,KC=new cl("auth","Firebase",GC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=new yh("@firebase/auth");function eV(t,...e){Nc.logLevel<=le.WARN&&Nc.warn(`Auth (${ls}): ${t}`,...e)}function ju(t,...e){Nc.logLevel<=le.ERROR&&Nc.error(`Auth (${ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t,...e){throw Kg(t,...e)}function Pn(t,...e){return Kg(t,...e)}function QC(t,e,n){const r=Object.assign(Object.assign({},ZM()),{[e]:n});return new cl("auth","Firebase",r).create(e,{appName:t.name})}function Ns(t){return QC(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return KC.create(t,...e)}function X(t,e,...n){if(!t)throw Kg(e,...n)}function Gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ju(e),new Error(e)}function cr(t,e){t||Gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tV(){return lE()==="http:"||lE()==="https:"}function lE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tV()||o2()||"connection"in navigator)?navigator.onLine:!0}function rV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n){this.shortDelay=e,this.longDelay=n,cr(n>e,"Short delay should be less than long delay!"),this.isMobile=ig()||eS()}get(){return nV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t,e){cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iV=new El(3e4,6e4);function Yg(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ho(t,e,n,r,s={}){return XC(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=oo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},i);return i2()||(c.referrerPolicy="no-referrer"),YC.fetch()(JC(t,t.config.apiHost,n,a),c)})}async function XC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sV),e);try{const s=new aV(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw _u(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw _u(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw _u(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw _u(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw QC(t,d,c);ur(t,d)}}catch(s){if(s instanceof Ln)throw s;ur(t,"network-request-failed",{message:String(s)})}}async function oV(t,e,n,r,s={}){const i=await ho(t,e,n,r,s);return"mfaPendingCredential"in i&&ur(t,"multi-factor-auth-required",{_serverResponse:i}),i}function JC(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Qg(t.config,s):`${t.config.apiScheme}://${s}`}class aV{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),iV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _u(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Pn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lV(t,e){return ho(t,"POST","/v1/accounts:delete",e)}async function ZC(t,e){return ho(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uV(t,e=!1){const n=ke(t),r=await n.getIdToken(e),s=Xg(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ma(nf(s.auth_time)),issuedAtTime:ma(nf(s.iat)),expirationTime:ma(nf(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function nf(t){return Number(t)*1e3}function Xg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ju("JWT malformed, contained fewer than 3 sections"),null;try{const s=_c(n);return s?JSON.parse(s):(ju("Failed to decode base64 JWT payload"),null)}catch(s){return ju("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function uE(t){const e=Xg(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ya(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&cV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ma(this.lastLoginAt),this.creationTime=ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ya(t,ZC(n,{idToken:r}));X(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?eR(i.providerUserInfo):[],a=fV(t.providerData,o),u=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Mp(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function dV(t){const e=ke(t);await Pc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fV(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function eR(t){return t.map(e=>{var{providerId:n}=e,r=Gg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pV(t,e){const n=await XC(t,{},async()=>{const r=oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=JC(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",YC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mV(t,e){return ho(t,"POST","/v2/accounts:revokeToken",Yg(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=uE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await pV(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ri;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ri,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Gg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ya(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uV(this,e)}reload(){return dV(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dr(this.auth.app))return Promise.reject(Ns(this.auth));const e=await this.getIdToken();return await Ya(this,lV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:b,isAnonymous:F,providerData:U,stsTokenManager:R}=n;X(S&&R,e,"internal-error");const w=Ri.fromJSON(this.name,R);X(typeof S=="string",e,"internal-error"),Er(f,e.name),Er(m,e.name),X(typeof b=="boolean",e,"internal-error"),X(typeof F=="boolean",e,"internal-error"),Er(_,e.name),Er(T,e.name),Er(I,e.name),Er(N,e.name),Er(E,e.name),Er(y,e.name);const C=new Kn({uid:S,auth:e,email:m,emailVerified:b,displayName:f,isAnonymous:F,photoURL:T,phoneNumber:_,tenantId:I,stsTokenManager:w,createdAt:E,lastLoginAt:y});return U&&Array.isArray(U)&&(C.providerData=U.map(k=>Object.assign({},k))),N&&(C._redirectEventId=N),C}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ri;s.updateFromServerResponse(n);const i=new Kn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Pc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?eR(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Ri;a.updateFromIdToken(r);const u=new Kn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Mp(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=new Map;function Qn(t){cr(t instanceof Function,"Expected a class definition");let e=cE.get(t);return e?(cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cE.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tR.type="NONE";const hE=tR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Fu(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fu("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ai(Qn(hE),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Qn(hE);const o=Fu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Kn._fromJSON(e,d);c!==i&&(a=f),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Ai(i,e,r):(i=u[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Ai(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(aR(e))return"Blackberry";if(lR(e))return"Webos";if(rR(e))return"Safari";if((e.includes("chrome/")||sR(e))&&!e.includes("edge/"))return"Chrome";if(oR(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nR(t=Et()){return/firefox\//i.test(t)}function rR(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sR(t=Et()){return/crios\//i.test(t)}function iR(t=Et()){return/iemobile/i.test(t)}function oR(t=Et()){return/android/i.test(t)}function aR(t=Et()){return/blackberry/i.test(t)}function lR(t=Et()){return/webos/i.test(t)}function Jg(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gV(t=Et()){var e;return Jg(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _V(){return a2()&&document.documentMode===10}function uR(t=Et()){return Jg(t)||oR(t)||lR(t)||aR(t)||/windows phone/i.test(t)||iR(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t,e=[]){let n;switch(t){case"Browser":n=dE(Et());break;case"Worker":n=`${dE(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const u=e(i);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vV(t,e={}){return ho(t,"GET","/v2/passwordPolicy",Yg(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wV=6;class EV{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wV,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TV{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fE(this),this.idTokenSubscription=new fE(this),this.beforeStateQueue=new yV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=KC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ai.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ZC(this,{idToken:e}),r=await Kn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Dr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dr(this.app))return Promise.reject(Ns(this));const n=e?ke(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dr(this.app)?Promise.reject(Ns(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dr(this.app)?Promise.reject(Ns(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vV(this),n=new EV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Ai.create(this,[Qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zg(t){return ke(t)}class fE{constructor(e){this.auth=e,this.observer=null,this.addObserver=y2(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IV(t){e_=t}function SV(t){return e_.loadJS(t)}function CV(){return e_.gapiScript}function RV(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AV(t,e){const n=hl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(vc(i,e??{}))return s;ur(s,"already-initialized")}return n.initialize({options:e})}function kV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function NV(t,e,n){const r=Zg(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=hR(e),{host:o,port:a}=PV(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),xV()}function hR(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function PV(t){const e=hR(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:pE(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:pE(o)}}}function pE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(e){return Gn("not implemented")}_linkToIdToken(e,n){return Gn("not implemented")}_getReauthenticationResolver(e){return Gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(t,e){return oV(t,"POST","/v1/accounts:signInWithIdp",Yg(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bV="http://localhost";class Fs extends dR{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ur("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Gg(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Fs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ki(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ki(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ki(e,n)}buildRequest(){const e={requestUri:bV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends fR{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Tl{constructor(){super("facebook.com")}static credential(e){return Fs._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fs._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.GOOGLE_SIGN_IN_METHOD="google.com";Wn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends Tl{constructor(){super("github.com")}static credential(e){return Fs._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Tl{constructor(){super("twitter.com")}static credential(e,n){return Fs._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.TWITTER_SIGN_IN_METHOD="twitter.com";Nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kn._fromIdTokenResponse(e,r,s),o=mE(r);return new Qi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=mE(r);return new Qi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function mE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc extends Ln{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new xc(e,n,r,s)}}function pR(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xc._fromErrorAndOperation(t,i,e,r):i})}async function DV(t,e,n=!1){const r=await Ya(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OV(t,e,n=!1){const{auth:r}=t;if(Dr(r.app))return Promise.reject(Ns(r));const s="reauthenticate";try{const i=await Ya(t,pR(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=Xg(i.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),Qi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ur(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LV(t,e,n=!1){if(Dr(t.app))return Promise.reject(Ns(t));const r="signIn",s=await pR(t,r,e),i=await Qi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function MV(t,e,n,r){return ke(t).onIdTokenChanged(e,n,r)}function VV(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}const bc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bc,"1"),this.storage.removeItem(bc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jV=1e3,FV=10;class gR extends mR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=uR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);_V()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,FV):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gR.type="LOCAL";const UV=gR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R extends mR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_R.type="SESSION";const yR=_R;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zV(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Lh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),u=await zV(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,u)=>{const c=t_("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(d),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){return window}function $V(t){xn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(){return typeof xn().WorkerGlobalScope<"u"&&typeof xn().importScripts=="function"}async function WV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HV(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qV(){return vR()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR="firebaseLocalStorageDb",GV=1,Dc="firebaseLocalStorage",ER="fbase_key";class Il{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mh(t,e){return t.transaction([Dc],e?"readwrite":"readonly").objectStore(Dc)}function KV(){const t=indexedDB.deleteDatabase(wR);return new Il(t).toPromise()}function Vp(){const t=indexedDB.open(wR,GV);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Dc,{keyPath:ER})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Dc)?e(r):(r.close(),await KV(),e(await Vp()))})})}async function gE(t,e,n){const r=Mh(t,!0).put({[ER]:e,value:n});return new Il(r).toPromise()}async function QV(t,e){const n=Mh(t,!1).get(e),r=await new Il(n).toPromise();return r===void 0?null:r.value}function _E(t,e){const n=Mh(t,!0).delete(e);return new Il(n).toPromise()}const YV=800,XV=3;class TR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XV)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vR()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lh._getInstance(qV()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await WV(),!this.activeServiceWorker)return;this.sender=new BV(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vp();return await gE(e,bc,"1"),await _E(e,bc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QV(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_E(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Mh(s,!1).getAll();return new Il(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}TR.type="LOCAL";const JV=TR;new El(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZV(t,e){return e?Qn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_ extends dR{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ki(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ki(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ej(t){return LV(t.auth,new n_(t),t.bypassAuthState)}function tj(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),OV(n,new n_(t),t.bypassAuthState)}async function nj(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),DV(n,new n_(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ej;case"linkViaPopup":case"linkViaRedirect":return nj;case"reauthViaPopup":case"reauthViaRedirect":return tj;default:ur(this.auth,"internal-error")}}resolve(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rj=new El(2e3,1e4);class _i extends IR{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,_i.currentPopupAction&&_i.currentPopupAction.cancel(),_i.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){cr(this.filter.length===1,"Popup operations only handle one event");const e=t_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_i.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rj.get())};e()}}_i.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sj="pendingRedirect",Uu=new Map;class ij extends IR{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Uu.get(this.auth._key());if(!e){try{const r=await oj(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Uu.set(this.auth._key(),e)}return this.bypassAuthState||Uu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oj(t,e){const n=uj(e),r=lj(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function aj(t,e){Uu.set(t._key(),e)}function lj(t){return Qn(t._redirectPersistence)}function uj(t){return Fu(sj,t.config.apiKey,t.name)}async function cj(t,e,n=!1){if(Dr(t.app))return Promise.reject(Ns(t));const r=Zg(t),s=ZV(r,e),o=await new ij(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hj=10*60*1e3;class dj{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fj(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!SR(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hj&&this.cachedEventUids.clear(),this.cachedEventUids.has(yE(e))}saveEventToCache(e){this.cachedEventUids.add(yE(e)),this.lastProcessedEventTime=Date.now()}}function yE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function SR({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fj(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return SR(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pj(t,e={}){return ho(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mj=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gj=/^https?/;async function _j(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pj(t);for(const n of e)try{if(yj(n))return}catch{}ur(t,"unauthorized-domain")}function yj(t){const e=Lp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gj.test(n))return!1;if(mj.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vj=new El(3e4,6e4);function vE(){const t=xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wj(t){return new Promise((e,n)=>{var r,s,i;function o(){vE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vE(),n(Pn(t,"network-request-failed"))},timeout:vj.get()})}if(!((s=(r=xn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=xn().gapi)===null||i===void 0)&&i.load)o();else{const a=RV("iframefcb");return xn()[a]=()=>{gapi.load?o():n(Pn(t,"network-request-failed"))},SV(`${CV()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw zu=null,e})}let zu=null;function Ej(t){return zu=zu||wj(t),zu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tj=new El(5e3,15e3),Ij="__/auth/iframe",Sj="emulator/auth/iframe",Cj={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rj=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Aj(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qg(e,Sj):`https://${t.config.authDomain}/${Ij}`,r={apiKey:e.apiKey,appName:t.name,v:ls},s=Rj.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${oo(r).slice(1)}`}async function kj(t){const e=await Ej(t),n=xn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:Aj(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cj,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Pn(t,"network-request-failed"),a=xn().setTimeout(()=>{i(o)},Tj.get());function u(){xn().clearTimeout(a),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nj={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pj=500,xj=600,bj="_blank",Dj="http://localhost";class wE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Oj(t,e,n,r=Pj,s=xj){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},Nj),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Et().toLowerCase();n&&(a=sR(c)?bj:n),nR(c)&&(e=e||Dj,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[_,T])=>`${m}${_}=${T},`,"");if(gV(c)&&a!=="_self")return Lj(e||"",a),new wE(null);const f=window.open(e||"",a,d);X(f,t,"popup-blocked");try{f.focus()}catch{}return new wE(f)}function Lj(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mj="__/auth/handler",Vj="emulator/auth/handler",jj=encodeURIComponent("fac");async function EE(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ls,eventId:s};if(e instanceof fR){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Tl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${jj}=${encodeURIComponent(u)}`:"";return`${Fj(t)}?${oo(a).slice(1)}${c}`}function Fj({config:t}){return t.emulator?Qg(t,Vj):`https://${t.authDomain}/${Mj}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="webStorageSupport";class Uj{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yR,this._completeRedirectFn=cj,this._overrideRedirectResult=aj}async _openPopup(e,n,r,s){var i;cr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await EE(e,n,r,Lp(),s);return Oj(e,o,t_())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await EE(e,n,r,Lp(),s);return $V(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(cr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kj(e),r=new dj(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rf,{type:rf},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[rf];o!==void 0&&n(!!o),ur(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_j(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uR()||rR()||Jg()}}const zj=Uj;var TE="@firebase/auth",IE="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bj{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $j(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wj(t){Zr(new sr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cR(t)},c=new TV(r,s,i,u);return kV(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new sr("auth-internal",e=>{const n=Zg(e.getProvider("auth").getImmediate());return(r=>new Bj(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(TE,IE,$j(t)),nn(TE,IE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hj=5*60,qj=ZI("authIdTokenMaxAge")||Hj;let SE=null;const Gj=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qj)return;const s=n==null?void 0:n.token;SE!==s&&(SE=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Kj(t=vh()){const e=hl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AV(t,{popupRedirectResolver:zj,persistence:[JV,UV,yR]}),r=ZI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Gj(i.toString());VV(n,o,()=>o(n.currentUser)),MV(n,a=>o(a))}}const s=XI("auth");return s&&NV(n,`http://${s}`),n}function Qj(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}IV({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Pn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Qj().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Wj("Browser");var CE={};const RE="@firebase/database",AE="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let CR="";function Yj(t){CR=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xj{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ze(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:za(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jj{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return gr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Xj(e)}}catch{}return new Jj},Is=RR("localStorage"),Zj=RR("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new yh("@firebase/database"),eF=function(){let t=1;return function(){return t++}}(),AR=function(t){const e=E2(t),n=new _2;n.update(e);const r=n.digest();return ng.encodeByteArray(r)},Sl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Sl.apply(null,r):typeof r=="object"?e+=Ze(r):e+=r,e+=" "}return e};let ga=null,kE=!0;const tF=function(t,e){$(!0,"Can't turn on custom loggers persistently."),Ni.logLevel=le.VERBOSE,ga=Ni.log.bind(Ni)},vt=function(...t){if(kE===!0&&(kE=!1,ga===null&&Zj.get("logging_enabled")===!0&&tF()),ga){const e=Sl.apply(null,t);ga(e)}},Cl=function(t){return function(...e){vt(t,...e)}},jp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Sl(...t);Ni.error(e)},hr=function(...t){const e=`FIREBASE FATAL ERROR: ${Sl(...t)}`;throw Ni.error(e),new Error(e)},jt=function(...t){const e="FIREBASE WARNING: "+Sl(...t);Ni.warn(e)},nF=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&jt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},kR=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},rF=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Yi="[MIN_NAME]",Us="[MAX_NAME]",fo=function(t,e){if(t===e)return 0;if(t===Yi||e===Us)return-1;if(e===Yi||t===Us)return 1;{const n=NE(t),r=NE(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},sF=function(t,e){return t===e?0:t<e?-1:1},Uo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ze(e))},r_=function(t){if(typeof t!="object"||t===null)return Ze(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ze(e[r]),n+=":",n+=r_(t[e[r]]);return n+="}",n},NR=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Ft(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const PR=function(t){$(!kR(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,u;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const d=c.join("");let f="";for(u=0;u<64;u+=8){let m=parseInt(d.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},iF=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},oF=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function aF(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const lF=new RegExp("^-?(0*)\\d{1,10}$"),uF=-2147483648,cF=2147483647,NE=function(t){if(lF.test(t)){const e=Number(t);if(e>=uF&&e<=cF)return e}return null},po=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw jt("Exception was thrown by user callback.",n),e},Math.floor(0))}},hF=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_a=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dF{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){jt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fF{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(vt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',jt(e)}}class Bu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="5",xR="v",bR="s",DR="r",OR="f",LR=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,MR="ls",VR="p",Fp="ac",jR="websocket",FR="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n,r,s,i=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Is.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Is.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function pF(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function zR(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let r;if(e===jR)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===FR)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);pF(t)&&(n.ns=t.namespace);const s=[];return Ft(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mF{constructor(){this.counters_={}}incrementCounter(e,n=1){gr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Jx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf={},of={};function i_(t){const e=t.toString();return sf[e]||(sf[e]=new mF),sf[e]}function gF(t,e){const n=t.toString();return of[n]||(of[n]=e()),of[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _F{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&po(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="start",yF="close",vF="pLPCommand",wF="pRTLPCB",BR="id",$R="pw",WR="ser",EF="cb",TF="seg",IF="ts",SF="d",CF="dframe",HR=1870,qR=30,RF=HR-qR,AF=25e3,kF=3e4;class yi{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Cl(e),this.stats_=i_(n),this.urlFn=u=>(this.appCheckToken&&(u[Fp]=this.appCheckToken),zR(n,FR,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new _F(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(kF)),rF(()=>{if(this.isClosed_)return;this.scriptTagHolder=new o_((...i)=>{const[o,a,u,c,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===PE)this.id=a,this.password=u;else if(o===yF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[PE]="t",r[WR]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[EF]=this.scriptTagHolder.uniqueCallbackIdentifier),r[xR]=s_,this.transportSessionId&&(r[bR]=this.transportSessionId),this.lastSessionId&&(r[MR]=this.lastSessionId),this.applicationId&&(r[VR]=this.applicationId),this.appCheckToken&&(r[Fp]=this.appCheckToken),typeof location<"u"&&location.hostname&&LR.test(location.hostname)&&(r[DR]=OR);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){yi.forceAllow_=!0}static forceDisallow(){yi.forceDisallow_=!0}static isAvailable(){return yi.forceAllow_?!0:!yi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!iF()&&!oF()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=QI(n),s=NR(r,RF);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[CF]="t",r[BR]=e,r[$R]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ze(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class o_{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=eF(),window[vF+this.uniqueCallbackIdentifier]=e,window[wF+this.uniqueCallbackIdentifier]=n,this.myIFrame=o_.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){vt("frame writing exception"),a.stack&&vt(a.stack),vt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||vt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[BR]=this.myID,e[$R]=this.myPW,e[WR]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qR+r.length<=HR;){const o=this.pendingSegs.shift();r=r+"&"+TF+s+"="+o.seg+"&"+IF+s+"="+o.ts+"&"+SF+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(AF)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{vt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NF=16384,PF=45e3;let Oc=null;typeof MozWebSocket<"u"?Oc=MozWebSocket:typeof WebSocket<"u"&&(Oc=WebSocket);class hn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Cl(this.connId),this.stats_=i_(n),this.connURL=hn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[xR]=s_,typeof location<"u"&&location.hostname&&LR.test(location.hostname)&&(o[DR]=OR),n&&(o[bR]=n),r&&(o[MR]=r),s&&(o[Fp]=s),i&&(o[VR]=i),zR(e,jR,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Is.set("previous_websocket_failure",!0);try{let r;l2(),this.mySock=new Oc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Oc!==null&&!hn.forceDisallow_}static previouslyFailed(){return Is.isInMemoryStorage||Is.get("previous_websocket_failure")===!0}markConnectionHealthy(){Is.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=za(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=NR(n,NF);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(PF))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hn.responsesRequiredToBeHealthy=2;hn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[yi,hn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=hn&&hn.isAvailable();let r=n&&!hn.previouslyFailed();if(e.webSocketOnly&&(n||jt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[hn];else{const s=this.transports_=[];for(const i of Xa.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Xa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Xa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xF=6e4,bF=5e3,DF=10*1024,OF=100*1024,af="t",xE="d",LF="s",bE="r",MF="e",DE="o",OE="a",LE="n",ME="p",VF="h";class jF{constructor(e,n,r,s,i,o,a,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Cl("c:"+this.id+":"),this.transportManager_=new Xa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=_a(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>OF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>DF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(af in e){const n=e[af];n===OE?this.upgradeIfSecondaryHealthy_():n===bE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===DE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Uo("t",e),r=Uo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ME,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:OE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:LE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Uo("t",e),r=Uo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Uo(af,e);if(xE in e){const r=e[xE];if(n===VF){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===LE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===LF?this.onConnectionShutdown_(r):n===bE?this.onReset_(r):n===MF?jp("Server Error: "+r):n===DE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):jp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),s_!==r&&jt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),_a(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(xF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_a(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ME,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Is.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc extends KR{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ig()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Lc}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=32,jE=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function pe(){return new ve("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function rs(t){return t.pieces_.length-t.pieceNum_}function we(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function QR(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function FF(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function YR(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function XR(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function qe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ve)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new ve(n,0)}function ie(t){return t.pieceNum_>=t.pieces_.length}function Dt(t,e){const n=re(t),r=re(e);if(n===null)return e;if(n===r)return Dt(we(t),we(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function a_(t,e){if(rs(t)!==rs(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function dn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(rs(t)>rs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class UF{constructor(e,n){this.errorPrefix_=n,this.parts_=YR(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=_h(this.parts_[r]);JR(this)}}function zF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=_h(e),JR(t)}function BF(t){const e=t.parts_.pop();t.byteLength_-=_h(e),t.parts_.length>0&&(t.byteLength_-=1)}function JR(t){if(t.byteLength_>jE)throw new Error(t.errorPrefix_+"has a key path longer than "+jE+" bytes ("+t.byteLength_+").");if(t.parts_.length>VE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+VE+") or object contains a cycle "+ys(t))}function ys(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_ extends KR{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new l_}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=1e3,$F=60*5*1e3,FE=30*1e3,WF=1.3,HF=3e4,qF="server_kill",UE=3;class Zn extends GR{constructor(e,n,r,s,i,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Zn.nextPersistentConnectionId_++,this.log_=Cl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zo,this.maxReconnectDelay_=$F,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");l_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Lc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Ze(i)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new gh,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const u=a.d,c=a.s;Zn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&gr(e,"w")){const r=zi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();jt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||g2(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=FE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=m2(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ze(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):jp("Unrecognized action received from server: "+Ze(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>HF&&(this.reconnectDelay_=zo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*WF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Zn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?vt("getToken() completed but was canceled"):(vt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new jF(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{jt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(qF)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&jt(f),u())}}}interrupt(e){vt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){vt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],hp(this.interruptReasons_)&&(this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>r_(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new ve(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){vt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=UE&&(this.reconnectDelay_=FE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){vt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=UE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+CR.replace(/\./g,"-")]=1,ig()?e["framework.cordova"]=1:eS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Lc.getInstance().currentlyOnline();return hp(this.interruptReasons_)&&e}}Zn.nextPersistentConnectionId_=0;Zn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new se(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new se(Yi,e),s=new se(Yi,n);return this.compare(r,s)!==0}minPost(){return se.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu;class ZR extends Vh{static get __EMPTY_NODE(){return yu}static set __EMPTY_NODE(e){yu=e}compare(e,n){return fo(e.name,n.name)}isDefinedOn(e){throw io("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return se.MIN}maxPost(){return new se(Us,yu)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,yu)}toString(){return".key"}}const Pi=new ZR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Je{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Je.RED,this.left=s??Ot.EMPTY_NODE,this.right=i??Ot.EMPTY_NODE}copy(e,n,r,s,i){return new Je(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ot.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ot.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Je.RED=!0;Je.BLACK=!1;class GF{copy(e,n,r,s,i){return this}insert(e,n,r){return new Je(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ot{constructor(e,n=Ot.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ot(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Je.BLACK,null,null))}remove(e){return new Ot(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Je.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new vu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new vu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new vu(this.root_,null,this.comparator_,!0,e)}}Ot.EMPTY_NODE=new GF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KF(t,e){return fo(t.name,e.name)}function u_(t,e){return fo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Up;function QF(t){Up=t}const e1=function(t){return typeof t=="number"?"number:"+PR(t):"string:"+t},t1=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&gr(e,".sv"),"Priority must be a string or number.")}else $(t===Up||t.isEmpty(),"priority of unexpected type.");$(t===Up||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zE;class Qe{constructor(e,n=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),t1(this.priorityNode_)}static set __childrenNodeConstructor(e){zE=e}static get __childrenNodeConstructor(){return zE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:re(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=re(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:($(r!==".priority"||rs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(we(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+e1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=PR(this.value_):e+=this.value_,this.lazyHash_=AR(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Qe.VALUE_TYPE_ORDER.indexOf(n),i=Qe.VALUE_TYPE_ORDER.indexOf(r);return $(s>=0,"Unknown leaf type: "+n),$(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n1,r1;function YF(t){n1=t}function XF(t){r1=t}class JF extends Vh{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?fo(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(Us,new Qe("[PRIORITY-POST]",r1))}makePost(e,n){const r=n1(e);return new se(n,new Qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Me=new JF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZF=Math.log(2);class e4{constructor(e){const n=i=>parseInt(Math.log(i)/ZF,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Mc=function(t,e,n,r){t.sort(e);const s=function(u,c){const d=c-u;let f,m;if(d===0)return null;if(d===1)return f=t[u],m=n?n(f):f,new Je(m,f.node,Je.BLACK,null,null);{const _=parseInt(d/2,10)+u,T=s(u,_),I=s(_+1,c);return f=t[_],m=n?n(f):f,new Je(m,f.node,Je.BLACK,T,I)}},i=function(u){let c=null,d=null,f=t.length;const m=function(T,I){const N=f-T,E=f;f-=T;const y=s(N+1,E),S=t[N],b=n?n(S):S;_(new Je(b,S.node,I,null,y))},_=function(T){c?(c.left=T,c=T):(d=T,c=T)};for(let T=0;T<u.count;++T){const I=u.nextBitIsOne(),N=Math.pow(2,u.count-(T+1));I?m(N,Je.BLACK):(m(N,Je.BLACK),m(N,Je.RED))}return d},o=new e4(t.length),a=i(o);return new Ot(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lf;const ei={};class Yn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return $(ei&&Me,"ChildrenNode.ts has not been loaded"),lf=lf||new Yn({".priority":ei},{".priority":Me}),lf}get(e){const n=zi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ot?n:null}hasIndex(e){return gr(this.indexSet_,e.toString())}addIndex(e,n){$(e!==Pi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(se.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Mc(r,e.getCompare()):a=ei;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=a,new Yn(d,c)}addToIndexes(e,n){const r=yc(this.indexes_,(s,i)=>{const o=zi(this.indexSet_,i);if($(o,"Missing index implementation for "+i),s===ei)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(se.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),Mc(a,o.getCompare())}else return ei;else{const a=n.get(e.name);let u=s;return a&&(u=u.remove(new se(e.name,a))),u.insert(e,e.node)}});return new Yn(r,this.indexSet_)}removeFromIndexes(e,n){const r=yc(this.indexes_,s=>{if(s===ei)return s;{const i=n.get(e.name);return i?s.remove(new se(e.name,i)):s}});return new Yn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo;class Y{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&t1(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bo||(Bo=new Y(new Ot(u_),null,Yn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bo}updatePriority(e){return this.children_.isEmpty()?this:new Y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bo:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(we(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new se(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Bo:this.priorityNode_;return new Y(s,o,i)}}updateChild(e,n){const r=re(e);if(r===null)return n;{$(re(e)!==".priority"||rs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(we(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Me,(o,a)=>{n[o]=a.val(e),r++,i&&Y.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+e1(this.getPriority().val())+":"),this.forEachChild(Me,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":AR(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new se(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new se(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,se.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Rl?-1:0}withIndex(e){if(e===Pi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Y(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Pi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Me),s=n.getIterator(Me);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Pi?null:this.indexMap_.get(e.toString())}}Y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class t4 extends Y{constructor(){super(new Ot(u_),Y.EMPTY_NODE,Yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Y.EMPTY_NODE}isEmpty(){return!1}}const Rl=new t4;Object.defineProperties(se,{MIN:{value:new se(Yi,Y.EMPTY_NODE)},MAX:{value:new se(Us,Rl)}});ZR.__EMPTY_NODE=Y.EMPTY_NODE;Qe.__childrenNodeConstructor=Y;QF(Rl);XF(Rl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n4=!0;function st(t,e=null){if(t===null)return Y.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Qe(n,st(e))}if(!(t instanceof Array)&&n4){const n=[];let r=!1;if(Ft(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=st(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new se(o,u)))}}),n.length===0)return Y.EMPTY_NODE;const i=Mc(n,KF,o=>o.name,u_);if(r){const o=Mc(n,Me.getCompare());return new Y(i,st(e),new Yn({".priority":o},{".priority":Me}))}else return new Y(i,st(e),Yn.Default)}else{let n=Y.EMPTY_NODE;return Ft(t,(r,s)=>{if(gr(t,r)&&r.substring(0,1)!=="."){const i=st(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(st(e))}}YF(st);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4 extends Vh{constructor(e){super(),this.indexPath_=e,$(!ie(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?fo(e.name,n.name):i}makePost(e,n){const r=st(e),s=Y.EMPTY_NODE.updateChild(this.indexPath_,r);return new se(n,s)}maxPost(){const e=Y.EMPTY_NODE.updateChild(this.indexPath_,Rl);return new se(Us,e)}toString(){return YR(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4 extends Vh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?fo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,n){const r=st(e);return new se(n,r)}toString(){return".value"}}const i4=new s4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t){return{type:"value",snapshotNode:t}}function Xi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ja(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Za(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function o4(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){$(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ja(n,a)):$(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Xi(n,r)):o.trackChildChange(Za(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Me,(s,i)=>{n.hasChild(s)||r.trackChildChange(Ja(s,i))}),n.isLeafNode()||n.forEachChild(Me,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Za(s,i,o))}else r.trackChildChange(Xi(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Y.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.indexedFilter_=new c_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=el.getStartPost_(e),this.endPost_=el.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new se(n,r))||(r=Y.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Y.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(Y.EMPTY_NODE);const i=this;return n.forEachChild(Me,(o,a)=>{i.matches(new se(o,a))||(s=s.updateImmediateChild(o,Y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new el(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new se(n,r))||(r=Y.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=Y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=Y.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(Y.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,Y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,_)=>f(_,m)}else o=this.index_.getCompare();const a=e;$(a.numChildren()===this.limit_,"");const u=new se(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=s.getChildAfterChild(this.index_,c,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=s.getChildAfterChild(this.index_,m,this.reverse_);const _=m==null?1:o(m,u);if(d&&!r.isEmpty()&&_>=0)return i!=null&&i.trackChildChange(Za(n,r,f)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(Ja(n,f));const I=a.updateImmediateChild(n,Y.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(i!=null&&i.trackChildChange(Xi(m.name,m.node)),I.updateImmediateChild(m.name,m.node)):I}}else return r.isEmpty()?e:d&&o(c,u)>=0?(i!=null&&(i.trackChildChange(Ja(c.name,c.node)),i.trackChildChange(Xi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,Y.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yi}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Us}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const e=new h_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function l4(t){return t.loadsAllData()?new c_(t.getIndex()):t.hasLimit()?new a4(t):new el(t)}function BE(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Me?n="$priority":t.index_===i4?n="$value":t.index_===Pi?n="$key":($(t.index_ instanceof r4,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ze(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ze(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ze(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ze(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ze(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $E(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Me&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends GR{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Cl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Vc.getListenId_(e,r),a={};this.listens_[o]=a;const u=BE(e._queryParams);this.restRequest_(i+".json",u,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(i,f,!1,r),zi(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",s(m,null)}})}unlisten(e,n){const r=Vc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=BE(e._queryParams),r=e._path.toString(),s=new gh;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+oo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=za(a.responseText)}catch{jt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&jt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(){this.rootNode_=Y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(){return{value:null,children:new Map}}function i1(t,e,n){if(ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=re(e);t.children.has(r)||t.children.set(r,jc());const s=t.children.get(r);e=we(e),i1(s,e,n)}}function zp(t,e,n){t.value!==null?n(e,t.value):c4(t,(r,s)=>{const i=new ve(e.toString()+"/"+r);zp(s,i,n)})}function c4(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ft(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE=10*1e3,d4=30*1e3,f4=5*60*1e3;class p4{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new h4(e);const r=WE+(d4-WE)*Math.random();_a(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ft(e,(s,i)=>{i>0&&gr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),_a(this.reportStats_.bind(this),Math.floor(Math.random()*2*f4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(fn||(fn={}));function o1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function d_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function f_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=fn.ACK_USER_WRITE,this.source=o1()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new Fc(pe(),n,this.revert)}}else return $(re(this.path)===e,"operationForChild called for unrelated child."),new Fc(we(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n){this.source=e,this.path=n,this.type=fn.LISTEN_COMPLETE}operationForChild(e){return ie(this.path)?new tl(this.source,pe()):new tl(this.source,we(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=fn.OVERWRITE}operationForChild(e){return ie(this.path)?new zs(this.source,pe(),this.snap.getImmediateChild(e)):new zs(this.source,we(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=fn.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new zs(this.source,pe(),n.value):new nl(this.source,pe(),n)}else return $(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new nl(this.source,we(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function g4(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(o4(o.childName,o.snapshotNode))}),$o(t,s,"child_removed",e,r,n),$o(t,s,"child_added",e,r,n),$o(t,s,"child_moved",i,r,n),$o(t,s,"child_changed",e,r,n),$o(t,s,"value",e,r,n),s}function $o(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,u)=>y4(t,a,u)),o.forEach(a=>{const u=_4(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function _4(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function y4(t,e,n){if(e.childName==null||n.childName==null)throw io("Should only compare child_ events.");const r=new se(e.childName,e.snapshotNode),s=new se(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t,e){return{eventCache:t,serverCache:e}}function ya(t,e,n,r){return jh(new Bs(e,n,r),t.serverCache)}function a1(t,e,n,r){return jh(t.eventCache,new Bs(e,n,r))}function Bp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function $s(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uf;const v4=()=>(uf||(uf=new Ot(sF)),uf);class Ce{constructor(e,n=v4()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return Ft(e,(r,s)=>{n=n.set(new ve(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:pe(),value:this.value};if(ie(e))return null;{const r=re(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(we(e),n);return i!=null?{path:qe(new ve(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=re(e),r=this.children.get(n);return r!==null?r.subtree(we(e)):new Ce(null)}}set(e,n){if(ie(e))return new Ce(n,this.children);{const r=re(e),i=(this.children.get(r)||new Ce(null)).set(we(e),n),o=this.children.insert(r,i);return new Ce(this.value,o)}}remove(e){if(ie(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=re(e),r=this.children.get(n);if(r){const s=r.remove(we(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Ce(null):new Ce(this.value,i)}else return this}}get(e){if(ie(e))return this.value;{const n=re(e),r=this.children.get(n);return r?r.get(we(e)):null}}setTree(e,n){if(ie(e))return n;{const r=re(e),i=(this.children.get(r)||new Ce(null)).setTree(we(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Ce(this.value,o)}}fold(e){return this.fold_(pe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(qe(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,pe(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(ie(e))return null;{const i=re(e),o=this.children.get(i);return o?o.findOnPath_(we(e),qe(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,pe(),n)}foreachOnPath_(e,n,r){if(ie(e))return this;{this.value&&r(n,this.value);const s=re(e),i=this.children.get(s);return i?i.foreachOnPath_(we(e),qe(n,s),r):new Ce(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(qe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.writeTree_=e}static empty(){return new gn(new Ce(null))}}function va(t,e,n){if(ie(e))return new gn(new Ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Dt(s,e);return i=i.updateChild(o,n),new gn(t.writeTree_.set(s,i))}else{const s=new Ce(n),i=t.writeTree_.setTree(e,s);return new gn(i)}}}function HE(t,e,n){let r=t;return Ft(n,(s,i)=>{r=va(r,qe(e,s),i)}),r}function qE(t,e){if(ie(e))return gn.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new gn(n)}}function $p(t,e){return Ks(t,e)!=null}function Ks(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Dt(n.path,e)):null}function GE(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Me,(r,s)=>{e.push(new se(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new se(r,s.value))}),e}function Yr(t,e){if(ie(e))return t;{const n=Ks(t,e);return n!=null?new gn(new Ce(n)):new gn(t.writeTree_.subtree(e))}}function Wp(t){return t.writeTree_.isEmpty()}function Ji(t,e){return l1(pe(),t.writeTree_,e)}function l1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?($(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=l1(qe(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(qe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(t,e){return d1(e,t)}function w4(t,e,n,r,s){$(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=va(t.visibleWrites,e,n)),t.lastWriteId=r}function E4(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function T4(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&I4(a,r.path)?s=!1:dn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return S4(t),!0;if(r.snap)t.visibleWrites=qE(t.visibleWrites,r.path);else{const a=r.children;Ft(a,u=>{t.visibleWrites=qE(t.visibleWrites,qe(r.path,u))})}return!0}else return!1}function I4(t,e){if(t.snap)return dn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dn(qe(t.path,n),e))return!0;return!1}function S4(t){t.visibleWrites=u1(t.allWrites,C4,pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function C4(t){return t.visible}function u1(t,e,n){let r=gn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)dn(n,o)?(a=Dt(n,o),r=va(r,a,i.snap)):dn(o,n)&&(a=Dt(o,n),r=va(r,pe(),i.snap.getChild(a)));else if(i.children){if(dn(n,o))a=Dt(n,o),r=HE(r,a,i.children);else if(dn(o,n))if(a=Dt(o,n),ie(a))r=HE(r,pe(),i.children);else{const u=zi(i.children,re(a));if(u){const c=u.getChild(we(a));r=va(r,pe(),c)}}}else throw io("WriteRecord should have .snap or .children")}}return r}function c1(t,e,n,r,s){if(!r&&!s){const i=Ks(t.visibleWrites,e);if(i!=null)return i;{const o=Yr(t.visibleWrites,e);if(Wp(o))return n;if(n==null&&!$p(o,pe()))return null;{const a=n||Y.EMPTY_NODE;return Ji(o,a)}}}else{const i=Yr(t.visibleWrites,e);if(!s&&Wp(i))return n;if(!s&&n==null&&!$p(i,pe()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(dn(c.path,e)||dn(e,c.path))},a=u1(t.allWrites,o,e),u=n||Y.EMPTY_NODE;return Ji(a,u)}}}function R4(t,e,n){let r=Y.EMPTY_NODE;const s=Ks(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Me,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Yr(t.visibleWrites,e);return n.forEachChild(Me,(o,a)=>{const u=Ji(Yr(i,new ve(o)),a);r=r.updateImmediateChild(o,u)}),GE(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Yr(t.visibleWrites,e);return GE(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function A4(t,e,n,r,s){$(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=qe(e,n);if($p(t.visibleWrites,i))return null;{const o=Yr(t.visibleWrites,i);return Wp(o)?s.getChild(n):Ji(o,s.getChild(n))}}function k4(t,e,n,r){const s=qe(e,n),i=Ks(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Yr(t.visibleWrites,s);return Ji(o,r.getNode().getImmediateChild(n))}else return null}function N4(t,e){return Ks(t.visibleWrites,e)}function P4(t,e,n,r,s,i,o){let a;const u=Yr(t.visibleWrites,e),c=Ks(u,pe());if(c!=null)a=c;else if(n!=null)a=Ji(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),m=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=m.getNext();for(;_&&d.length<s;)f(_,r)!==0&&d.push(_),_=m.getNext();return d}else return[]}function x4(){return{visibleWrites:gn.empty(),allWrites:[],lastWriteId:-1}}function Uc(t,e,n,r){return c1(t.writeTree,t.treePath,e,n,r)}function m_(t,e){return R4(t.writeTree,t.treePath,e)}function KE(t,e,n,r){return A4(t.writeTree,t.treePath,e,n,r)}function zc(t,e){return N4(t.writeTree,qe(t.treePath,e))}function b4(t,e,n,r,s,i){return P4(t.writeTree,t.treePath,e,n,r,s,i)}function g_(t,e,n){return k4(t.writeTree,t.treePath,e,n)}function h1(t,e){return d1(qe(t.treePath,e),t.writeTree)}function d1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D4{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Za(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Ja(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Xi(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Za(r,e.snapshotNode,s.oldSnap));else throw io("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O4{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const f1=new O4;class __{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Bs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return g_(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$s(this.viewCache_),i=b4(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L4(t){return{filter:t}}function M4(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function V4(t,e,n,r,s){const i=new D4;let o,a;if(n.type===fn.OVERWRITE){const c=n;c.source.fromUser?o=Hp(t,e,c.path,c.snap,r,s,i):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ie(c.path),o=Bc(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===fn.MERGE){const c=n;c.source.fromUser?o=F4(t,e,c.path,c.children,r,s,i):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=qp(t,e,c.path,c.children,r,s,a,i))}else if(n.type===fn.ACK_USER_WRITE){const c=n;c.revert?o=B4(t,e,c.path,r,s,i):o=U4(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===fn.LISTEN_COMPLETE)o=z4(t,e,n.path,r,i);else throw io("Unknown operation type: "+n.type);const u=i.getChanges();return j4(e,o,u),{viewCache:o,changes:u}}function j4(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Bp(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(s1(Bp(e)))}}function p1(t,e,n,r,s,i){const o=e.eventCache;if(zc(r,n)!=null)return e;{let a,u;if(ie(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=$s(e),d=c instanceof Y?c:Y.EMPTY_NODE,f=m_(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const c=Uc(r,$s(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=re(n);if(c===".priority"){$(rs(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const f=KE(r,n,d,u);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=we(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=KE(r,n,o.getNode(),u);m!=null?f=o.getNode().getImmediateChild(c).updateChild(d,m):f=o.getNode().getImmediateChild(c)}else f=g_(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,d,s,i):a=o.getNode()}}return ya(e,a,o.isFullyInitialized()||ie(n),t.filter.filtersNodes())}}function Bc(t,e,n,r,s,i,o,a){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(ie(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const _=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),_,null)}else{const _=re(n);if(!u.isCompleteForPath(n)&&rs(n)>1)return e;const T=we(n),N=u.getNode().getImmediateChild(_).updateChild(T,r);_===".priority"?c=d.updatePriority(u.getNode(),N):c=d.updateChild(u.getNode(),_,N,T,f1,null)}const f=a1(e,c,u.isFullyInitialized()||ie(n),d.filtersNodes()),m=new __(s,f,i);return p1(t,f,n,s,m,a)}function Hp(t,e,n,r,s,i,o){const a=e.eventCache;let u,c;const d=new __(s,e,i);if(ie(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=ya(e,c,!0,t.filter.filtersNodes());else{const f=re(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=ya(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=we(n),_=a.getNode().getImmediateChild(f);let T;if(ie(m))T=r;else{const I=d.getCompleteChild(f);I!=null?QR(m)===".priority"&&I.getChild(XR(m)).isEmpty()?T=I:T=I.updateChild(m,r):T=Y.EMPTY_NODE}if(_.equals(T))u=e;else{const I=t.filter.updateChild(a.getNode(),f,T,m,d,o);u=ya(e,I,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function QE(t,e){return t.eventCache.isCompleteForChild(e)}function F4(t,e,n,r,s,i,o){let a=e;return r.foreach((u,c)=>{const d=qe(n,u);QE(e,re(d))&&(a=Hp(t,a,d,c,s,i,o))}),r.foreach((u,c)=>{const d=qe(n,u);QE(e,re(d))||(a=Hp(t,a,d,c,s,i,o))}),a}function YE(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function qp(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;ie(n)?c=r:c=new Ce(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),T=YE(t,_,m);u=Bc(t,u,new ve(f),T,s,i,o,a)}}),c.children.inorderTraversal((f,m)=>{const _=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!_){const T=e.serverCache.getNode().getImmediateChild(f),I=YE(t,T,m);u=Bc(t,u,new ve(f),I,s,i,o,a)}}),u}function U4(t,e,n,r,s,i,o){if(zc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(ie(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Bc(t,e,n,u.getNode().getChild(n),s,i,a,o);if(ie(n)){let c=new Ce(null);return u.getNode().forEachChild(Pi,(d,f)=>{c=c.set(new ve(d),f)}),qp(t,e,n,c,s,i,a,o)}else return e}else{let c=new Ce(null);return r.foreach((d,f)=>{const m=qe(n,d);u.isCompleteForPath(m)&&(c=c.set(d,u.getNode().getChild(m)))}),qp(t,e,n,c,s,i,a,o)}}function z4(t,e,n,r,s){const i=e.serverCache,o=a1(e,i.getNode(),i.isFullyInitialized()||ie(n),i.isFiltered());return p1(t,o,n,r,f1,s)}function B4(t,e,n,r,s,i){let o;if(zc(r,n)!=null)return e;{const a=new __(r,e,s),u=e.eventCache.getNode();let c;if(ie(n)||re(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Uc(r,$s(e));else{const f=e.serverCache.getNode();$(f instanceof Y,"serverChildren would be complete if leaf node"),d=m_(r,f)}d=d,c=t.filter.updateFullNode(u,d,i)}else{const d=re(n);let f=g_(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=u.getImmediateChild(d)),f!=null?c=t.filter.updateChild(u,d,f,we(n),a,i):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,Y.EMPTY_NODE,we(n),a,i):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Uc(r,$s(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||zc(r,pe())!=null,ya(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $4{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new c_(r.getIndex()),i=l4(r);this.processor_=L4(i);const o=n.serverCache,a=n.eventCache,u=s.updateFullNode(Y.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(Y.EMPTY_NODE,a.getNode(),null),d=new Bs(u,o.isFullyInitialized(),s.filtersNodes()),f=new Bs(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=jh(f,d),this.eventGenerator_=new m4(this.query_)}get query(){return this.query_}}function W4(t){return t.viewCache_.serverCache.getNode()}function H4(t,e){const n=$s(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function XE(t){return t.eventRegistrations_.length===0}function q4(t,e){t.eventRegistrations_.push(e)}function JE(t,e,n){const r=[];if(n){$(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function ZE(t,e,n,r){e.type===fn.MERGE&&e.source.queryId!==null&&($($s(t.viewCache_),"We should always have a full cache before handling merges"),$(Bp(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=V4(t.processor_,s,e,n,r);return M4(t.processor_,i.viewCache),$(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,m1(t,i.changes,i.viewCache.eventCache.getNode(),null)}function G4(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Me,(i,o)=>{r.push(Xi(i,o))}),n.isFullyInitialized()&&r.push(s1(n.getNode())),m1(t,r,n.getNode(),e)}function m1(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return g4(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $c;class K4{constructor(){this.views=new Map}}function Q4(t){$(!$c,"__referenceConstructor has already been defined"),$c=t}function Y4(){return $($c,"Reference.ts has not been loaded"),$c}function X4(t){return t.views.size===0}function y_(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return $(i!=null,"SyncTree gave us an op for an invalid query."),ZE(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(ZE(o,e,n,r));return i}}function J4(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Uc(n,s?r:null),u=!1;a?u=!0:r instanceof Y?(a=m_(n,r),u=!1):(a=Y.EMPTY_NODE,u=!1);const c=jh(new Bs(a,u,!1),new Bs(r,s,!1));return new $4(e,c)}return o}function Z4(t,e,n,r,s,i){const o=J4(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),q4(o,n),G4(o,n)}function eU(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=ss(t);if(s==="default")for(const[u,c]of t.views.entries())o=o.concat(JE(c,n,r)),XE(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||i.push(c.query));else{const u=t.views.get(s);u&&(o=o.concat(JE(u,n,r)),XE(u)&&(t.views.delete(s),u.query._queryParams.loadsAllData()||i.push(u.query)))}return a&&!ss(t)&&i.push(new(Y4())(e._repo,e._path)),{removed:i,events:o}}function g1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function xi(t,e){let n=null;for(const r of t.views.values())n=n||H4(r,e);return n}function _1(t,e){if(e._queryParams.loadsAllData())return Fh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function y1(t,e){return _1(t,e)!=null}function ss(t){return Fh(t)!=null}function Fh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wc;function tU(t){$(!Wc,"__referenceConstructor has already been defined"),Wc=t}function nU(){return $(Wc,"Reference.ts has not been loaded"),Wc}let rU=1;class e0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=x4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function v1(t,e,n,r,s){return w4(t.pendingWriteTree_,e,n,r,s),s?Al(t,new zs(o1(),e,n)):[]}function Ss(t,e,n=!1){const r=E4(t.pendingWriteTree_,e);if(T4(t.pendingWriteTree_,e)){let i=new Ce(null);return r.snap!=null?i=i.set(pe(),!0):Ft(r.children,o=>{i=i.set(new ve(o),!0)}),Al(t,new Fc(r.path,i,n))}else return[]}function Uh(t,e,n){return Al(t,new zs(d_(),e,n))}function sU(t,e,n){const r=Ce.fromObject(n);return Al(t,new nl(d_(),e,r))}function iU(t,e){return Al(t,new tl(d_(),e))}function oU(t,e,n){const r=w_(t,n);if(r){const s=E_(r),i=s.path,o=s.queryId,a=Dt(i,e),u=new tl(f_(o),a);return T_(t,i,u)}else return[]}function Gp(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||y1(o,e))){const u=eU(o,e,n,r);X4(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=u.removed;if(a=u.events,!s){const d=c.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(i,(m,_)=>ss(_));if(d&&!f){const m=t.syncPointTree_.subtree(i);if(!m.isEmpty()){const _=uU(m);for(let T=0;T<_.length;++T){const I=_[T],N=I.query,E=T1(t,I);t.listenProvider_.startListening(wa(N),Hc(t,N),E.hashFn,E.onComplete)}}}!f&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(wa(e),null):c.forEach(m=>{const _=t.queryToTagMap.get(zh(m));t.listenProvider_.stopListening(wa(m),_)}))}cU(t,c)}return a}function aU(t,e,n,r){const s=w_(t,r);if(s!=null){const i=E_(s),o=i.path,a=i.queryId,u=Dt(o,e),c=new zs(f_(a),u,n);return T_(t,o,c)}else return[]}function lU(t,e,n,r){const s=w_(t,r);if(s){const i=E_(s),o=i.path,a=i.queryId,u=Dt(o,e),c=Ce.fromObject(n),d=new nl(f_(a),u,c);return T_(t,o,d)}else return[]}function t0(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(m,_)=>{const T=Dt(m,s);i=i||xi(_,T),o=o||ss(_)});let a=t.syncPointTree_.get(s);a?(o=o||ss(a),i=i||xi(a,pe())):(a=new K4,t.syncPointTree_=t.syncPointTree_.set(s,a));let u;i!=null?u=!0:(u=!1,i=Y.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((_,T)=>{const I=xi(T,pe());I&&(i=i.updateImmediateChild(_,I))}));const c=y1(a,e);if(!c&&!e._queryParams.loadsAllData()){const m=zh(e);$(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const _=hU();t.queryToTagMap.set(m,_),t.tagToQueryMap.set(_,m)}const d=p_(t.pendingWriteTree_,s);let f=Z4(a,e,n,d,i,u);if(!c&&!o&&!r){const m=_1(a,e);f=f.concat(dU(t,e,m))}return f}function v_(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=Dt(o,e),c=xi(a,u);if(c)return c});return c1(s,e,i,n,!0)}function Al(t,e){return w1(e,t.syncPointTree_,null,p_(t.pendingWriteTree_,pe()))}function w1(t,e,n,r){if(ie(t.path))return E1(t,e,n,r);{const s=e.get(pe());n==null&&s!=null&&(n=xi(s,pe()));let i=[];const o=re(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,d=h1(r,o);i=i.concat(w1(a,u,c,d))}return s&&(i=i.concat(y_(s,t,r,n))),i}}function E1(t,e,n,r){const s=e.get(pe());n==null&&s!=null&&(n=xi(s,pe()));let i=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=h1(r,o),d=t.operationForChild(o);d&&(i=i.concat(E1(d,a,u,c)))}),s&&(i=i.concat(y_(s,t,r,n))),i}function T1(t,e){const n=e.query,r=Hc(t,n);return{hashFn:()=>(W4(e)||Y.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?oU(t,n._path,r):iU(t,n._path);{const i=aF(s,n);return Gp(t,n,null,i)}}}}function Hc(t,e){const n=zh(e);return t.queryToTagMap.get(n)}function zh(t){return t._path.toString()+"$"+t._queryIdentifier}function w_(t,e){return t.tagToQueryMap.get(e)}function E_(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function T_(t,e,n){const r=t.syncPointTree_.get(e);$(r,"Missing sync point for query tag that we're tracking");const s=p_(t.pendingWriteTree_,e);return y_(r,n,s,null)}function uU(t){return t.fold((e,n,r)=>{if(n&&ss(n))return[Fh(n)];{let s=[];return n&&(s=g1(n)),Ft(r,(i,o)=>{s=s.concat(o)}),s}})}function wa(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(nU())(t._repo,t._path):t}function cU(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=zh(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function hU(){return rU++}function dU(t,e,n){const r=e._path,s=Hc(t,e),i=T1(t,n),o=t.listenProvider_.startListening(wa(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)$(!ss(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,d,f)=>{if(!ie(c)&&d&&ss(d))return[Fh(d).query];{let m=[];return d&&(m=m.concat(g1(d).map(_=>_.query))),Ft(f,(_,T)=>{m=m.concat(T)}),m}});for(let c=0;c<u.length;++c){const d=u[c];t.listenProvider_.stopListening(wa(d),Hc(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new I_(n)}node(){return this.node_}}class S_{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=qe(this.path_,e);return new S_(this.syncTree_,n)}node(){return v_(this.syncTree_,this.path_)}}const fU=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},n0=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return pU(t[".sv"],e,n);if(typeof t[".sv"]=="object")return mU(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},pU=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},mU=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&$(!1,"Unexpected increment value: "+r);const s=e.node();if($(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},gU=function(t,e,n,r){return C_(e,new S_(n,t),r)},I1=function(t,e,n){return C_(t,new I_(e),n)};function C_(t,e,n){const r=t.getPriority().val(),s=n0(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=n0(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Qe(a,st(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Qe(s))),o.forEachChild(Me,(a,u)=>{const c=C_(u,e.getImmediateChild(a),n);c!==u&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function A_(t,e){let n=e instanceof ve?e:new ve(e),r=t,s=re(n);for(;s!==null;){const i=zi(r.node.children,s)||{children:{},childCount:0};r=new R_(s,r,i),n=we(n),s=re(n)}return r}function mo(t){return t.node.value}function S1(t,e){t.node.value=e,Kp(t)}function C1(t){return t.node.childCount>0}function _U(t){return mo(t)===void 0&&!C1(t)}function Bh(t,e){Ft(t.node.children,(n,r)=>{e(new R_(n,t,r))})}function R1(t,e,n,r){n&&e(t),Bh(t,s=>{R1(s,e,!0)})}function yU(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function kl(t){return new ve(t.parent===null?t.name:kl(t.parent)+"/"+t.name)}function Kp(t){t.parent!==null&&vU(t.parent,t.name,t)}function vU(t,e,n){const r=_U(n),s=gr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Kp(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Kp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wU=/[\[\].#$\/\u0000-\u001F\u007F]/,EU=/[\[\].#$\u0000-\u001F\u007F]/,cf=10*1024*1024,A1=function(t){return typeof t=="string"&&t.length!==0&&!wU.test(t)},k1=function(t){return typeof t=="string"&&t.length!==0&&!EU.test(t)},TU=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),k1(t)},N1=function(t,e,n,r){r&&e===void 0||k_(og(t,"value"),e,n)},k_=function(t,e,n){const r=n instanceof ve?new UF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ys(r));if(typeof e=="function")throw new Error(t+"contains a function "+ys(r)+" with contents = "+e.toString());if(kR(e))throw new Error(t+"contains "+e.toString()+" "+ys(r));if(typeof e=="string"&&e.length>cf/3&&_h(e)>cf)throw new Error(t+"contains a string greater than "+cf+" utf8 bytes "+ys(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Ft(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!A1(o)))throw new Error(t+" contains an invalid key ("+o+") "+ys(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);zF(r,o),k_(t,a,r),BF(r)}),s&&i)throw new Error(t+' contains ".value" child '+ys(r)+" in addition to actual children.")}},P1=function(t,e,n,r){if(!k1(n))throw new Error(og(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},IU=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),P1(t,e,n)},x1=function(t,e){if(re(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},SU=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!A1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!TU(n))throw new Error(og(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function N_(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!a_(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function b1(t,e,n){N_(t,n),D1(t,r=>a_(r,e))}function dr(t,e,n){N_(t,n),D1(t,r=>dn(r,e)||dn(e,r))}function D1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(RU(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function RU(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ga&&vt("event: "+n.toString()),po(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AU="repo_interrupt",kU=25;class NU{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new CU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jc(),this.transactionQueueTree_=new R_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function PU(t,e,n){if(t.stats_=i_(t.repoInfo_),t.forceRestClient_||hF())t.server_=new Vc(t.repoInfo_,(r,s,i,o)=>{r0(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>s0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ze(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Zn(t.repoInfo_,e,(r,s,i,o)=>{r0(t,r,s,i,o)},r=>{s0(t,r)},r=>{xU(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=gF(t.repoInfo_,()=>new p4(t.stats_,t.server_)),t.infoData_=new u4,t.infoSyncTree_=new e0({startListening:(r,s,i,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Uh(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),x_(t,"connected",!1),t.serverSyncTree_=new e0({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,u)=>{const c=o(a,u);dr(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function O1(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function P_(t){return fU({timestamp:O1(t)})}function r0(t,e,n,r,s){t.dataUpdateCount++;const i=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const u=yc(n,c=>st(c));o=lU(t.serverSyncTree_,i,u,s)}else{const u=st(n);o=aU(t.serverSyncTree_,i,u,s)}else if(r){const u=yc(n,c=>st(c));o=sU(t.serverSyncTree_,i,u)}else{const u=st(n);o=Uh(t.serverSyncTree_,i,u)}let a=i;o.length>0&&(a=$h(t,i)),dr(t.eventQueue_,a,o)}function s0(t,e){x_(t,"connected",e),e===!1&&DU(t)}function xU(t,e){Ft(e,(n,r)=>{x_(t,n,r)})}function x_(t,e,n){const r=new ve("/.info/"+e),s=st(n);t.infoData_.updateSnapshot(r,s);const i=Uh(t.infoSyncTree_,r,s);dr(t.eventQueue_,r,i)}function L1(t){return t.nextWriteId_++}function bU(t,e,n,r,s){b_(t,"set",{path:e.toString(),value:n,priority:r});const i=P_(t),o=st(n,r),a=v_(t.serverSyncTree_,e),u=I1(o,a,i),c=L1(t),d=v1(t.serverSyncTree_,e,u,c,!0);N_(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(m,_)=>{const T=m==="ok";T||jt("set at "+e+" failed: "+m);const I=Ss(t.serverSyncTree_,c,!T);dr(t.eventQueue_,e,I),MU(t,s,m,_)});const f=U1(t,e);$h(t,f),dr(t.eventQueue_,f,[])}function DU(t){b_(t,"onDisconnectEvents");const e=P_(t),n=jc();zp(t.onDisconnect_,pe(),(s,i)=>{const o=gU(s,i,t.serverSyncTree_,e);i1(n,s,o)});let r=[];zp(n,pe(),(s,i)=>{r=r.concat(Uh(t.serverSyncTree_,s,i));const o=U1(t,s);$h(t,o)}),t.onDisconnect_=jc(),dr(t.eventQueue_,pe(),r)}function OU(t,e,n){let r;re(e._path)===".info"?r=t0(t.infoSyncTree_,e,n):r=t0(t.serverSyncTree_,e,n),b1(t.eventQueue_,e._path,r)}function Qp(t,e,n){let r;re(e._path)===".info"?r=Gp(t.infoSyncTree_,e,n):r=Gp(t.serverSyncTree_,e,n),b1(t.eventQueue_,e._path,r)}function LU(t){t.persistentConnection_&&t.persistentConnection_.interrupt(AU)}function b_(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),vt(n,...e)}function MU(t,e,n,r){e&&po(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function M1(t,e,n){return v_(t.serverSyncTree_,e,n)||Y.EMPTY_NODE}function D_(t,e=t.transactionQueueTree_){if(e||Wh(t,e),mo(e)){const n=j1(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&VU(t,kl(e),n)}else C1(e)&&Bh(e,n=>{D_(t,n)})}function VU(t,e,n){const r=n.map(c=>c.currentWriteId),s=M1(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const d=n[c];$(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Dt(e,d.path);i=i.updateChild(f,d.currentOutputSnapshotRaw)}const a=i.val(!0),u=e;t.server_.put(u.toString(),a,c=>{b_(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(Ss(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Wh(t,A_(t.transactionQueueTree_,e)),D_(t,t.transactionQueueTree_),dr(t.eventQueue_,e,d);for(let m=0;m<f.length;m++)po(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{jt("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}$h(t,e)}},o)}function $h(t,e){const n=V1(t,e),r=kl(n),s=j1(t,n);return jU(t,s,r),r}function jU(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=Dt(n,u.path);let d=!1,f;if($(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,f=u.abortReason,s=s.concat(Ss(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=kU)d=!0,f="maxretry",s=s.concat(Ss(t.serverSyncTree_,u.currentWriteId,!0));else{const m=M1(t,u.path,o);u.currentInputSnapshot=m;const _=e[a].update(m.val());if(_!==void 0){k_("transaction failed: Data returned ",_,u.path);let T=st(_);typeof _=="object"&&_!=null&&gr(_,".priority")||(T=T.updatePriority(m.getPriority()));const N=u.currentWriteId,E=P_(t),y=I1(T,m,E);u.currentOutputSnapshotRaw=T,u.currentOutputSnapshotResolved=y,u.currentWriteId=L1(t),o.splice(o.indexOf(N),1),s=s.concat(v1(t.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally)),s=s.concat(Ss(t.serverSyncTree_,N,!0))}else d=!0,f="nodata",s=s.concat(Ss(t.serverSyncTree_,u.currentWriteId,!0))}dr(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Wh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)po(r[a]);D_(t,t.transactionQueueTree_)}function V1(t,e){let n,r=t.transactionQueueTree_;for(n=re(e);n!==null&&mo(r)===void 0;)r=A_(r,n),e=we(e),n=re(e);return r}function j1(t,e){const n=[];return F1(t,e,n),n.sort((r,s)=>r.order-s.order),n}function F1(t,e,n){const r=mo(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Bh(e,s=>{F1(t,s,n)})}function Wh(t,e){const n=mo(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,S1(e,n.length>0?n:void 0)}Bh(e,r=>{Wh(t,r)})}function U1(t,e){const n=kl(V1(t,e)),r=A_(t.transactionQueueTree_,e);return yU(r,s=>{hf(t,s)}),hf(t,r),R1(r,s=>{hf(t,s)}),n}function hf(t,e){const n=mo(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ss(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?S1(e,void 0):n.length=i+1,dr(t.eventQueue_,kl(e),s);for(let o=0;o<r.length;o++)po(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FU(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function UU(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):jt(`Invalid query segment '${n}' in query '${t}'`)}return e}const i0=function(t,e){const n=zU(t),r=n.namespace;n.domain==="firebase.com"&&hr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&hr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||nF();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new UR(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new ve(n.pathString)}},zU=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(s=FU(t.substring(d,f)));const m=UU(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const T=e.indexOf(".");r=e.substring(0,T).toLowerCase(),n=e.substring(T+1),i=r}"ns"in m&&(i=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",BU=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=o0.charAt(n%64),n=Math.floor(n/64);$(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=o0.charAt(e[s]);return $(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $U{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ze(this.snapshot.exportVal())}}class WU{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HU{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return $(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return ie(this._path)?null:QR(this._path)}get ref(){return new cs(this._repo,this._path)}get _queryIdentifier(){const e=$E(this._queryParams),n=r_(e);return n==="{}"?"default":n}get _queryObject(){return $E(this._queryParams)}isEqual(e){if(e=ke(e),!(e instanceof O_))return!1;const n=this._repo===e._repo,r=a_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+FF(this._path)}}class cs extends O_{constructor(e,n){super(e,n,new h_,!1)}get parent(){const e=XR(this._path);return e===null?null:new cs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class qc{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),r=rl(this.ref,e);return new qc(this._node.getChild(n),r,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new qc(s,rl(this.ref,r),Me)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Wo(t,e){return t=ke(t),t._checkNotDeleted("ref"),e!==void 0?rl(t._root,e):t._root}function rl(t,e){return t=ke(t),re(t._path)===null?IU("child","path",e):P1("child","path",e),new cs(t._repo,qe(t._path,e))}function a0(t,e){t=ke(t),x1("push",t._path),N1("push",e,t._path,!0);const n=O1(t._repo),r=BU(n),s=rl(t,r),i=rl(t,r);let o;return o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function wu(t,e){t=ke(t),x1("set",t._path),N1("set",e,t._path,!1);const n=new gh;return bU(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class L_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new $U("value",this,new qc(e.snapshotNode,new cs(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new WU(this,e,n):null}matches(e){return e instanceof L_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function qU(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const u=n,c=(d,f)=>{Qp(t._repo,t,a),u(d,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new HU(n,i||void 0),a=new L_(o);return OU(t._repo,t,a),()=>Qp(t._repo,t,a)}function GU(t,e,n,r){return qU(t,"value",e,n,r)}function KU(t,e,n){Qp(t._repo,t,null)}Q4(cs);tU(cs);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QU="FIREBASE_DATABASE_EMULATOR_HOST",Yp={};let YU=!1;function XU(t,e,n,r){t.repoInfo_=new UR(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function JU(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||hr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),vt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=i0(i,s),a=o.repoInfo,u;typeof process<"u"&&CE&&(u=CE[QU]),u?(i=`http://${u}?ns=${a.namespace}`,o=i0(i,s),a=o.repoInfo):o.repoInfo.secure;const c=new fF(t.name,t.options,e);SU("Invalid Firebase Database URL",o),ie(o.path)||hr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=e3(a,t,c,new dF(t.name,n));return new t3(d,t)}function ZU(t,e){const n=Yp[e];(!n||n[t.key]!==t)&&hr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),LU(t),delete n[t.key]}function e3(t,e,n,r){let s=Yp[e.name];s||(s={},Yp[e.name]=s);let i=s[t.toURLString()];return i&&hr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new NU(t,YU,n,r),s[t.toURLString()]=i,i}class t3{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(PU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new cs(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ZU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hr("Cannot call "+e+" on a deleted database.")}}function n3(t=vh(),e){const n=hl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=rg("database");r&&r3(n,...r)}return n}function r3(t,e,n,r={}){t=ke(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&hr("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&hr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Bu(Bu.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:sg(r.mockUserToken,t.app.options.projectId);i=new Bu(o)}XU(s,e,n,i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s3(t){Yj(ls),Zr(new sr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return JU(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),nn(RE,AE,t),nn(RE,AE,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i3={".sv":"timestamp"};function l0(){return i3}Zn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Zn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};s3();const o3={apiKey:"AIzaSyA99aKVRIdNJFVA6gsDVPHUl1pIcthwJAs",authDomain:"gen-lang-client-0324052801.firebaseapp.com",projectId:"gen-lang-client-0324052801",storageBucket:"gen-lang-client-0324052801.firebasestorage.app",messagingSenderId:"566230423463",appId:"1:566230423463:web:9123cf85f3f342c4174882",databaseURL:"https://gen-lang-client-0324052801-default-rtdb.firebaseio.com"},Hh=sS(o3),a3=Kj(Hh);a3.useDeviceLanguage();const l3=new Wn;l3.setCustomParameters({prompt:"select_account"});const Ho=mL(Hh),u3=GM(Hh),qo=n3(Hh),Gc={async createOrUpdateUser(t){const e=pu(Ho,"users",t.uid),n=await nE(e),r={uid:t.uid,email:t.email,displayName:t.displayName||"Anonymous",photoURL:t.photoURL||null,bio:"",updatedAt:jo()};return n.exists()?await Zd(e,{...r,updatedAt:jo()}):(r.createdAt=jo(),r.points=1e3,r.wins=0,await LL(e,r)),r},async getUserProfile(t){const e=pu(Ho,"users",t),n=await nE(e);return n.exists()?{id:n.id,...n.data()}:null},async getUserByEmail(t){const e=pL(Ho,"users"),n=kL(e,NL("email","==",t)),r=await OL(n);if(!r.empty){const s=r.docs[0];return{id:s.id,...s.data()}}return null},async updateUserProfile(t,e){const n=pu(Ho,"users",t);await Zd(n,{...e,updatedAt:jo()})},async uploadProfilePicture(t,e){const n=qM(u3,`profile_pictures/${t}`);await WM(n,e);const r=await HM(n);return await Zd(pu(Ho,"users",t),{photoURL:r,updatedAt:jo()}),r},async getLeaderboard(t=50){return[]}};function c3(){const t=Dn(),{user:e,setUser:n,setUserProfile:r,setLoading:s,isAuthenticated:i}=On(),[o,a]=O.useState(!1),[u,c]=O.useState(!1),[d,f]=O.useState(""),[m,_]=O.useState({email:"",password:"",username:""});O.useEffect(()=>{i&&e&&!isLoading&&t("/lobby",{replace:!0})},[i,e,isLoading,t]);const T=async N=>{if(N.preventDefault(),f(""),a(!0),!m.email.trim()){f("Email is required"),a(!1);return}if(!m.password.trim()){f("Password is required"),a(!1);return}if(m.password.length<6){f("Password must be at least 6 characters"),a(!1);return}try{if(u){const E=await Gc.getUserByEmail(m.email);if(!E){f("No account found with this email. Create an account first."),a(!1);return}n({uid:E.uid,email:E.email,displayName:E.displayName,photoURL:E.photoURL}),r(E),a(!1),t("/lobby")}else{if(!m.username.trim()){f("Username is required"),a(!1);return}const y={uid:`user_${Date.now()}`,email:m.email,displayName:m.username,photoURL:null},S=await Gc.createOrUpdateUser(y);n(y),r(S),a(!1),t("/lobby")}}catch(E){console.error("Auth error:",E),f("Failed to process request. Please try again."),a(!1)}},I=N=>{_({...m,[N.target.name]:N.target.value}),f("")};return p.jsxs("div",{className:"home",children:[p.jsxs("div",{className:"home-background",children:[p.jsx("div",{className:"bg-gradient-1"}),p.jsx("div",{className:"bg-gradient-2"}),p.jsx("div",{className:"bg-grid"}),p.jsx("div",{className:"bg-glow"})]}),p.jsxs("header",{className:"home-header",children:[p.jsx("div",{className:"home-logo",children:p.jsx("img",{src:"/logo.png",alt:"Dreamledge",className:"logo-img"})}),p.jsxs("button",{className:"header-leaderboard",onClick:()=>t("/leaderboard"),children:[p.jsx(eg,{size:18}),p.jsx("span",{children:"Rankings"})]})]}),p.jsxs("main",{className:"home-main",children:[p.jsxs("section",{className:"hero",children:[p.jsxs("div",{className:"hero-content",children:[p.jsxs("div",{className:"hero-badge",children:[p.jsx("span",{className:"badge-dot"}),"Live Battle Arena"]}),p.jsxs("h1",{className:"hero-title",children:["Where Artists",p.jsx("span",{className:"hero-title-accent",children:" Battle "}),"for Glory"]}),p.jsx("p",{className:"hero-subtitle",children:"Experience the thrill of live rap battles. Watch artists compete, judges critique, and the crowd decides the winner."}),p.jsx("div",{className:"hero-actions",children:p.jsxs("button",{className:"btn btn-primary btn-lg",onClick:()=>{var N;c(!1),(N=document.getElementById("join-section"))==null||N.scrollIntoView({behavior:"smooth"})},children:["Get Started",p.jsx(Dx,{size:20})]})})]}),p.jsx("div",{className:"hero-visual",children:p.jsxs("div",{className:"battle-preview",children:[p.jsxs("div",{className:"preview-card artist-1",children:[p.jsx("div",{className:"preview-avatar",children:p.jsx(Wr,{size:32})}),p.jsx("span",{className:"preview-label",children:"Artist"})]}),p.jsx("div",{className:"preview-vs",children:"VS"}),p.jsxs("div",{className:"preview-card artist-2",children:[p.jsx("div",{className:"preview-avatar",children:p.jsx(Wr,{size:32})}),p.jsx("span",{className:"preview-label",children:"Artist"})]})]})})]}),p.jsxs("section",{className:"features",children:[p.jsxs("div",{className:"feature-card",children:[p.jsx("div",{className:"feature-icon artist",children:p.jsx(Wr,{size:28})}),p.jsx("h3",{className:"feature-title",children:"Artists"}),p.jsx("p",{className:"feature-desc",children:"Upload your tracks and battle head-to-head. Show your flow, lyrics, and stage presence."})]}),p.jsxs("div",{className:"feature-card",children:[p.jsx("div",{className:"feature-icon judge",children:p.jsx(mc,{size:28})}),p.jsx("h3",{className:"feature-title",children:"Judges"}),p.jsx("p",{className:"feature-desc",children:"Evaluate performances with professional feedback. Vote on who brings the heat."})]}),p.jsxs("div",{className:"feature-card",children:[p.jsx("div",{className:"feature-icon spectator",children:p.jsx(Vx,{size:28})}),p.jsx("h3",{className:"feature-title",children:"Spectators"}),p.jsx("p",{className:"feature-desc",children:"Watch live battles, chat with fans, and vote for your favorite artist."})]})]}),p.jsx("section",{className:"auth-section",id:"join-section",children:p.jsxs("div",{className:"auth-card",children:[p.jsxs("div",{className:"auth-header",children:[p.jsx("h2",{className:"auth-title",children:u?"Welcome Back":"Join Dreamledge"}),p.jsx("p",{className:"auth-subtitle",children:u?"Sign in to continue to the arena":"Create an account to start battling"})]}),p.jsxs("form",{onSubmit:T,className:"auth-form",children:[!u&&p.jsxs("div",{className:"input-group",children:[p.jsxs("label",{className:"input-label",children:[p.jsx(tg,{size:16}),"Username"]}),p.jsx("input",{type:"text",name:"username",value:m.username,onChange:I,className:"input",placeholder:"Enter your username",required:!u})]}),p.jsxs("div",{className:"input-group",children:[p.jsxs("label",{className:"input-label",children:[p.jsx(zI,{size:16}),"Email"]}),p.jsx("input",{type:"email",name:"email",value:m.email,onChange:I,className:"input",placeholder:"Enter your email",required:!0})]}),p.jsxs("div",{className:"input-group",children:[p.jsxs("label",{className:"input-label",children:[p.jsx(Ux,{size:16}),"Password"]}),p.jsx("input",{type:"password",name:"password",value:m.password,onChange:I,className:"input",placeholder:"Enter your password",required:!0})]}),d&&p.jsx("p",{className:"error-text",children:d}),p.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:o,children:o?p.jsxs("span",{className:"loading-dots",children:[p.jsx("span",{}),p.jsx("span",{}),p.jsx("span",{})]}):u?"Sign In":"Create Account"})]}),p.jsx("div",{className:"auth-footer",children:p.jsxs("p",{children:[u?"Don't have an account? ":"Already have an account? ",p.jsx("button",{className:"auth-switch",onClick:()=>c(!u),children:u?"Create Account":"Sign In"})]})})]})})]}),p.jsx("footer",{className:"home-footer",children:p.jsx("p",{children:"© 2024 Dreamledge. All rights reserved."})})]})}function h3(){const t=Dn(),{user:e,userProfile:n}=On(),{setUserRole:r,setIsHost:s}=Xm(),[i,o]=O.useState(""),[a,u]=O.useState(!1),[c,d]=O.useState(!1),[f,m]=O.useState([{id:"1",name:"🔥 Hot Bars Only",players:4,status:"waiting"},{id:"2",name:"Underground Battles",players:6,status:"active"},{id:"3",name:"New Artist Showcase",players:3,status:"waiting"}]),_=()=>{const E="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let y="";for(let S=0;S<6;S++)y+=E.charAt(Math.floor(Math.random()*E.length));return y},T=E=>{r(E);const y=_();s(E==="artist"),t(`/waiting/${y}`)},I=E=>{r("spectator"),t(`/waiting/${E}`)},N=()=>{const E=_();s(!0),r("artist"),t(`/waiting/${E}`)};return p.jsx("div",{className:"lobby",children:p.jsxs("div",{className:"lobby-container",children:[p.jsxs("header",{className:"lobby-header",children:[p.jsx("h1",{className:"page-title",children:"Choose Your Path"}),p.jsx("p",{className:"lobby-subtitle",children:"Pick your role and enter the arena"})]}),p.jsxs("div",{className:"role-grid",children:[p.jsxs("button",{className:"role-card role-artist",onClick:()=>T("artist"),children:[p.jsx("div",{className:"role-icon",children:p.jsx(Gx,{size:32})}),p.jsxs("div",{className:"role-info",children:[p.jsx("h3",{className:"role-title",children:"Random Artist Battle"}),p.jsx("p",{className:"role-desc",children:"Enter the arena as an artist and compete"})]}),p.jsx("span",{className:"role-badge",children:"Compete"})]}),p.jsxs("button",{className:"role-card role-judge",onClick:()=>T("judge"),children:[p.jsx("div",{className:"role-icon",children:p.jsx(tg,{size:32})}),p.jsxs("div",{className:"role-info",children:[p.jsx("h3",{className:"role-title",children:"Random Judge"}),p.jsx("p",{className:"role-desc",children:"Evaluate and vote on performances"})]}),p.jsx("span",{className:"role-badge",children:"Judge"})]}),p.jsxs("button",{className:"role-card role-spectator",onClick:()=>T("spectator"),children:[p.jsx("div",{className:"role-icon",children:p.jsx(Hr,{size:32})}),p.jsxs("div",{className:"role-info",children:[p.jsx("h3",{className:"role-title",children:"Random Spectator"}),p.jsx("p",{className:"role-desc",children:"Watch battles and vote for favorites"})]}),p.jsx("span",{className:"role-badge",children:"Watch"})]}),p.jsxs("button",{className:"role-card role-create",onClick:N,children:[p.jsx("div",{className:"role-icon",children:p.jsx($I,{size:32})}),p.jsxs("div",{className:"role-info",children:[p.jsx("h3",{className:"role-title",children:"Create Battle"}),p.jsx("p",{className:"role-desc",children:"Host your own private battle room"})]}),p.jsx("span",{className:"role-badge",children:"Host"})]})]}),p.jsxs("div",{className:"join-room",children:[p.jsx("h2",{className:"section-title",children:"Join with Code"}),p.jsxs("div",{className:"join-form",children:[p.jsx("input",{type:"text",className:"input room-input",placeholder:"Enter room code",value:i,onChange:E=>o(E.target.value.toUpperCase()),maxLength:6}),p.jsx("button",{className:"btn btn-primary",onClick:()=>i.length>=4&&I(i),disabled:i.length<4,children:"Join Room"})]})]}),p.jsxs("section",{className:"active-rooms",children:[p.jsx("h2",{className:"section-title",children:"Active Battles"}),p.jsx("div",{className:"rooms-list",children:f.map(E=>p.jsxs("button",{className:"room-card",onClick:()=>I(E.id),children:[p.jsxs("div",{className:"room-info",children:[p.jsx("h3",{className:"room-name",children:E.name}),p.jsxs("div",{className:"room-meta",children:[p.jsxs("span",{className:"room-players",children:[p.jsx(Hr,{size:14}),E.players," online"]}),p.jsx("span",{className:`room-status ${E.status}`,children:E.status==="waiting"?"Waiting":"Live"})]})]}),p.jsx("div",{className:"room-action",children:p.jsx(qx,{size:18})})]},E.id))})]})]})})}const Sn={sendMessage:async(t,e,n,r,s,i=!1,o=null)=>{try{const a=Wo(qo,`chats/${t}/${e}/messages`),u=a0(a);await wu(u,{id:u.key,userId:n,username:r,message:s||"",isGif:i||!1,gifUrl:o||null,timestamp:l0(),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),console.log("Message sent successfully")}catch(a){console.error("Error sending message:",a)}},subscribeToMessages:(t,e,n)=>{try{const r=Wo(qo,`chats/${t}/${e}/messages`);return GU(r,s=>{const i=[];s.exists()&&s.forEach(o=>{i.push(o.val())}),n(i)},s=>{console.error("Error subscribing to messages:",s)}),()=>KU(r)}catch(r){return console.error("Error setting up subscription:",r),()=>{}}},createRoom:async(t,e)=>{const n=Wo(qo,"chats/rooms"),r=a0(n);return await wu(r,{id:r.key,name:t,createdBy:e,createdAt:l0(),members:{[e]:!0}}),r.key},joinRoom:async(t,e)=>{const n=Wo(qo,`chats/rooms/${t}/members/${e}`);await wu(n,!0)},leaveRoom:async(t,e)=>{const n=Wo(qo,`chats/rooms/${t}/members/${e}`);await wu(n,null)}},d3="qYl52xlnZyVb0oLhm9Tz8KlUn3wOlUsn";function M_({onSelect:t,onClose:e}){const[n,r]=O.useState(""),[s,i]=O.useState([]),[o,a]=O.useState(!0),[u,c]=O.useState(!1);O.useEffect(()=>{d("trending")},[]);const d=async(_,T="")=>{a(!0);try{let N=`https://api.giphy.com/v1/gifs/${_==="trending"?"trending":"search"}?api_key=${d3}&limit=20&rating=pg-13`;T&&(N+=`&q=${encodeURIComponent(T)}`);const y=await(await fetch(N)).json();if(y.data&&Array.isArray(y.data)){const S=y.data.map(b=>{var F,U,R,w,C,k,x,P;return{id:b.id,url:((U=(F=b.images)==null?void 0:F.fixed_width)==null?void 0:U.url)||((w=(R=b.images)==null?void 0:R.original)==null?void 0:w.url),preview:((k=(C=b.images)==null?void 0:C.fixed_width)==null?void 0:k.url)||((P=(x=b.images)==null?void 0:x.original)==null?void 0:P.url)}}).filter(b=>b.url);i(S)}}catch(I){console.error("Error fetching GIFs:",I),i([])}finally{a(!1)}},f=_=>{r(_),_.length>1?d("search",_):_.length===0&&d("trending")},m=_=>{t(_),e()};return p.jsxs("div",{className:"gif-picker",children:[p.jsxs("div",{className:"gif-picker-header",children:[p.jsx("h3",{children:"Choose a GIF"}),p.jsx("button",{className:"gif-close",onClick:e,children:p.jsx(ul,{size:18})})]}),p.jsxs("div",{className:"gif-search",children:[p.jsx(WI,{size:18,className:"search-icon"}),p.jsx("input",{type:"text",inputMode:u?"search":"text",placeholder:u?"Search GIFs...":"Tap to search",value:n,onChange:_=>f(_.target.value),onFocus:()=>c(!0),onBlur:()=>c(!1),className:"gif-search-input"})]}),p.jsxs("div",{className:"gif-section",children:[p.jsxs("div",{className:"gif-section-title",children:[p.jsx(HI,{size:14}),n?"Results":"Trending"]}),o?p.jsxs("div",{className:"gif-loading",children:[p.jsx(Fx,{size:32,className:"spinner"}),p.jsx("span",{children:"Loading..."})]}):p.jsx("div",{className:"gif-grid",children:s.map(_=>p.jsx("button",{className:"gif-item",onClick:()=>m(_.url),children:p.jsx("img",{src:_.preview,alt:"GIF",loading:"lazy"})},_.id))})]}),p.jsx("div",{className:"gif-picker-footer",children:p.jsx("span",{children:"GIPHY"})})]})}const f3={id:"1",phase:"performance",round:1,currentArtist:1,timeRemaining:180,artist1:{id:"1",name:"MC_Flow",votes:2,isPlaying:!0},artist2:{id:"2",name:"LyricQueen",votes:1,isPlaying:!1}};function p3(){const{battleId:t}=Qm(),e=Dn(),{user:n,userProfile:r}=On(),{userRole:s}=Xm(),{isGifPickerOpen:i,toggleGifPicker:o,closeGifPicker:a}=ph(),[u,c]=O.useState(f3),[d,f]=O.useState([{id:1,userId:"1",username:"MC_Flow",message:"Let's gooo! 🔥",time:"2:35 PM",isGif:!1},{id:2,userId:"3",username:"Spectator_1",message:"This is insane!",time:"2:35 PM",isGif:!1},{id:3,userId:"4",username:"Judge_Maya",message:"That flow was clean",time:"2:36 PM",isGif:!1},{id:4,userId:"5",username:"FanBoy",message:"",time:"2:36 PM",isGif:!0,gifUrl:"https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"}]),[m,_]=O.useState(""),[T,I]=O.useState(!1),[N,E]=O.useState(!1),[y,S]=O.useState(!0),[b,F]=O.useState(80),U=O.useRef(null);O.useEffect(()=>{var P;(P=U.current)==null||P.scrollIntoView({behavior:"smooth"})},[d]),O.useEffect(()=>{if(!t)return;const P=Sn.subscribeToMessages("arenas",t,A=>{A.length>0&&f(A)});return()=>P()},[t]),O.useEffect(()=>{const P=setInterval(()=>{c(A=>A.timeRemaining>0?{...A,timeRemaining:A.timeRemaining-1}:A)},1e3);return()=>clearInterval(P)},[]);const R=P=>{const A=Math.floor(P/60),Te=P%60;return`${A}:${Te.toString().padStart(2,"0")}`},w=async P=>{if(P.preventDefault(),!m.trim()||!t)return;const A=m;_("");const Te=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",tt={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:Te,message:A,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!1};f(Ut=>[...Ut,tt]);try{await Sn.sendMessage("arenas",t,(n==null?void 0:n.uid)||"me",Te,A)}catch(Ut){console.error("Failed to send message:",Ut)}},C=async P=>{if(!t)return;const A=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",Te={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:A,message:"",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!0,gifUrl:P};f(tt=>[...tt,Te]);try{await Sn.sendMessage("arenas",t,(n==null?void 0:n.uid)||"me",A,"",!0,P)}catch(tt){console.error("Failed to send GIF:",tt)}_("")},k=P=>{switch(P){case"waiting":return"Waiting";case"preparing":return"Preparing";case"submission":return"Submit Track";case"performance":return"Performance";case"voting":return"Voting";case"results":return"Results";default:return P}};u.currentArtist===1?u.artist1:u.artist2;const x=u.artist1.votes+u.artist2.votes;return p.jsx("div",{className:"arena",children:p.jsxs("div",{className:"arena-container",children:[p.jsxs("header",{className:"arena-header",children:[p.jsxs("div",{className:"battle-info",children:[p.jsx("span",{className:"battle-phase",children:k(u.phase)}),p.jsx("span",{className:"battle-divider",children:"•"}),p.jsxs("span",{className:"battle-round",children:["Round ",u.round]})]}),p.jsxs("div",{className:`timer ${u.timeRemaining<=30?"urgent":""}`,children:[p.jsx(Kx,{size:18}),p.jsx("span",{children:R(u.timeRemaining)})]})]}),p.jsxs("div",{className:"arena-content",children:[p.jsxs("section",{className:"arena-main",children:[p.jsxs("div",{className:"video-grid",children:[p.jsxs("div",{className:`video-box artist ${u.currentArtist===1?"active":""}`,children:[p.jsx("div",{className:"video-content",children:p.jsx("div",{className:"avatar-large",children:p.jsx(Wr,{size:40})})}),p.jsxs("div",{className:"video-info",children:[p.jsx("span",{className:"artist-name",children:u.artist1.name}),p.jsxs("div",{className:"artist-stats",children:[p.jsxs("span",{className:"vote-count",children:[p.jsx(rw,{size:14}),u.artist1.votes]}),u.currentArtist===1&&y&&p.jsxs("span",{className:"playing-indicator",children:[p.jsx($d,{size:14}),"Playing"]})]})]})]}),p.jsxs("div",{className:`video-box artist ${u.currentArtist===2?"active":""}`,children:[p.jsx("div",{className:"video-content",children:p.jsx("div",{className:"avatar-large",children:p.jsx(Wr,{size:40})})}),p.jsxs("div",{className:"video-info",children:[p.jsx("span",{className:"artist-name",children:u.artist2.name}),p.jsxs("div",{className:"artist-stats",children:[p.jsxs("span",{className:"vote-count",children:[p.jsx(rw,{size:14}),u.artist2.votes]}),u.currentArtist===2&&y&&p.jsxs("span",{className:"playing-indicator",children:[p.jsx($d,{size:14}),"Playing"]})]})]})]}),p.jsxs("div",{className:"video-box judge",children:[p.jsx("div",{className:"video-content",children:p.jsx("div",{className:"avatar-large judge",children:p.jsx(mc,{size:32})})}),p.jsx("div",{className:"video-info",children:p.jsx("span",{className:"artist-name",children:"Judge_Dave"})})]}),p.jsxs("div",{className:"video-box judge",children:[p.jsx("div",{className:"video-content",children:p.jsx("div",{className:"avatar-large judge",children:p.jsx(mc,{size:32})})}),p.jsx("div",{className:"video-info",children:p.jsx("span",{className:"artist-name",children:"Judge_Maya"})})]})]}),p.jsxs("div",{className:"arena-controls",children:[p.jsxs("div",{className:"playback-controls",children:[p.jsx("button",{className:`control-btn large ${y?"active":""}`,onClick:()=>S(!y),children:y?p.jsx(Bx,{size:24}):p.jsx(Wx,{size:24})}),p.jsxs("div",{className:"volume-control",children:[p.jsx($d,{size:18}),p.jsx("input",{type:"range",min:"0",max:"100",value:b,onChange:P=>F(P.target.value),className:"volume-slider"})]})]}),p.jsxs("div",{className:"media-controls",children:[p.jsx("button",{className:`control-btn ${T?"active":"off"}`,onClick:()=>I(!T),children:T?p.jsx(Wr,{size:20}):p.jsx(up,{size:20})}),p.jsx("button",{className:`control-btn ${N?"active":"off"}`,onClick:()=>E(!N),children:N?p.jsx(qI,{size:20}):p.jsx(cp,{size:20})}),p.jsx("button",{className:"control-btn leave",onClick:()=>e("/lobby"),children:p.jsx(ul,{size:20})})]})]}),p.jsxs("div",{className:"vote-bar",children:[p.jsx("div",{className:"vote-track",children:p.jsx("div",{className:"vote-progress",style:{width:`${u.artist1.votes/Math.max(x,1)*100}%`}})}),p.jsxs("div",{className:"vote-labels",children:[p.jsx("span",{children:u.artist1.name}),p.jsx("span",{className:"vs",children:"VS"}),p.jsx("span",{children:u.artist2.name})]})]})]}),p.jsxs("aside",{className:"chat-section arena-chat",children:[p.jsxs("div",{className:"chat-header",children:[p.jsx("h3",{children:"Live Crowd"}),p.jsxs("span",{className:"viewer-count",children:[p.jsx(Hr,{size:14}),"24 watching"]})]}),p.jsxs("div",{className:"chat-messages",children:[d.map(P=>p.jsxs("div",{className:`chat-message ${P.userId===(n==null?void 0:n.uid)?"own":""} ${P.isGif?"gif-message":""}`,children:[p.jsxs("div",{className:"message-header",children:[p.jsx("span",{className:"message-username",children:P.username}),p.jsx("span",{className:"message-time",children:P.time})]}),P.isGif?p.jsx("img",{src:P.gifUrl,alt:"GIF",className:"message-gif"}):p.jsx("p",{className:"message-content",children:P.message})]},P.id)),p.jsx("div",{ref:U})]}),p.jsxs("form",{className:"chat-input-form",onSubmit:w,children:[p.jsx("button",{type:"button",className:"gif-toggle",onClick:o,children:"GIF"}),p.jsx("input",{type:"text",className:"input chat-input",placeholder:"Say something...",value:m,onChange:P=>_(P.target.value)}),p.jsx("button",{type:"submit",className:"send-btn",disabled:!m.trim(),children:p.jsx(Zm,{size:18})})]}),i&&p.jsx(M_,{onSelect:C,onClose:o})]})]})]})})}function m3(){var R,w;const t=Dn(),{user:e,userProfile:n,setUserProfile:r}=On(),[s,i]=O.useState(!1),[o,a]=O.useState(!1),[u,c]=O.useState(!1),[d,f]=O.useState(!1),[m,_]=O.useState(""),T=O.useRef(null),[I,N]=O.useState({username:"",bio:"",avatarUrl:""});O.useEffect(()=>{if(!e){t("/");return}N({username:(n==null?void 0:n.displayName)||(e==null?void 0:e.displayName)||"",bio:(n==null?void 0:n.bio)||"",avatarUrl:(n==null?void 0:n.photoURL)||(e==null?void 0:e.photoURL)||""})},[e,n,t]);const E=C=>{const{name:k,value:x}=C.target;N(P=>({...P,[k]:x})),_("")},y=()=>{var C;(C=T.current)==null||C.click()},S=async C=>{var x;const k=(x=C.target.files)==null?void 0:x[0];if(!(!k||!e)){if(!k.type.startsWith("image/")){_("Please select an image file");return}if(k.size>5*1024*1024){_("Image must be less than 5MB");return}c(!0),_("");try{const P=await Gc.uploadProfilePicture(e.uid,k);N(A=>({...A,avatarUrl:P}))}catch(P){console.error("Upload error:",P),_("Failed to upload image")}finally{c(!1)}}},b=async()=>{if(!I.username.trim()){_("Username is required");return}if(I.username.length<3){_("Username must be at least 3 characters");return}if(e){a(!0),_("");try{await Gc.updateUserProfile(e.uid,{displayName:I.username,bio:I.bio,photoURL:I.avatarUrl});const C={...n,displayName:I.username,bio:I.bio,photoURL:I.avatarUrl};r(C),i(!1),f(!0),setTimeout(()=>f(!1),3e3)}catch(C){console.error("Save error:",C),_("Failed to save profile")}finally{a(!1)}}},F=()=>{N({username:(n==null?void 0:n.displayName)||(e==null?void 0:e.displayName)||"",bio:(n==null?void 0:n.bio)||"",avatarUrl:(n==null?void 0:n.photoURL)||(e==null?void 0:e.photoURL)||""}),i(!1),_("")},U=()=>I.avatarUrl&&I.avatarUrl.startsWith("http")?{backgroundImage:`url(${I.avatarUrl})`,backgroundSize:"cover"}:{background:I.avatarUrl||"var(--accent-red)"};return p.jsx("div",{className:"profile",children:p.jsxs("div",{className:"profile-container",children:[d&&p.jsxs("div",{className:"success-toast",children:[p.jsx(Jm,{size:18}),"Profile updated successfully!"]}),p.jsxs("header",{className:"profile-header",children:[p.jsxs("div",{className:"profile-avatar-section",children:[p.jsx("div",{className:"profile-avatar",style:U(),children:!((R=I.avatarUrl)!=null&&R.startsWith("http"))&&I.username?I.username.charAt(0).toUpperCase():""}),s&&p.jsx("button",{className:"avatar-edit-btn",onClick:y,disabled:u,children:u?p.jsx("div",{className:"loading-spinner small"}):p.jsx(Ox,{size:18})}),p.jsx("input",{ref:T,type:"file",accept:"image/*",onChange:S,style:{display:"none"}})]}),p.jsx("div",{className:"profile-info",children:s?p.jsxs("div",{className:"edit-form",children:[p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Username"}),p.jsx("input",{type:"text",name:"username",value:I.username,onChange:E,className:"input",placeholder:"Enter username",maxLength:20})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Bio"}),p.jsx("textarea",{name:"bio",value:I.bio,onChange:E,className:"input bio-input",placeholder:"Tell us about yourself...",maxLength:150,rows:3}),p.jsxs("span",{className:"char-count",children:[I.bio.length,"/150"]})]}),m&&p.jsxs("div",{className:"error-message",children:[p.jsx(xx,{size:16}),m]}),p.jsxs("div",{className:"edit-actions",children:[p.jsxs("button",{className:"btn btn-secondary",onClick:F,disabled:o,children:[p.jsx(ul,{size:18}),"Cancel"]}),p.jsx("button",{className:"btn btn-primary",onClick:b,disabled:o,children:o?p.jsx("span",{className:"saving",children:"Saving..."}):p.jsxs(p.Fragment,{children:[p.jsx(Hx,{size:18}),"Save"]})})]})]}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"profile-name-row",children:[p.jsx("h1",{className:"profile-name",children:I.username||"Anonymous"}),p.jsxs("button",{className:"edit-btn",onClick:()=>i(!0),children:[p.jsx($x,{size:16}),"Edit"]})]}),p.jsx("p",{className:"profile-bio",children:I.bio||"No bio yet"}),p.jsx("div",{className:"profile-meta",children:p.jsxs("span",{className:"meta-item",children:[p.jsx(zI,{size:14}),(e==null?void 0:e.email)||"No email"]})})]})})]}),p.jsxs("section",{className:"profile-stats",children:[p.jsxs("div",{className:"stat-card",children:[p.jsx("span",{className:"stat-value",children:"0"}),p.jsx("span",{className:"stat-label",children:"Battles Won"})]}),p.jsxs("div",{className:"stat-card",children:[p.jsx("span",{className:"stat-value",children:"0"}),p.jsx("span",{className:"stat-label",children:"Battles Lost"})]}),p.jsxs("div",{className:"stat-card",children:[p.jsx("span",{className:"stat-value",children:"0"}),p.jsx("span",{className:"stat-label",children:"Total Votes"})]})]}),p.jsxs("section",{className:"profile-section",children:[p.jsx("h2",{className:"section-title",children:"Account Info"}),p.jsxs("div",{className:"info-list",children:[p.jsxs("div",{className:"info-item",children:[p.jsx("span",{className:"info-label",children:"User ID"}),p.jsx("span",{className:"info-value mono",children:((w=e==null?void 0:e.uid)==null?void 0:w.slice(0,12))||"N/A"})]}),p.jsxs("div",{className:"info-item",children:[p.jsx("span",{className:"info-label",children:"Account Type"}),p.jsx("span",{className:"info-value",children:"Free"})]}),p.jsxs("div",{className:"info-item",children:[p.jsx("span",{className:"info-label",children:"Member Since"}),p.jsx("span",{className:"info-value",children:new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"})})]})]})]}),p.jsx("div",{className:"profile-note",children:p.jsx("p",{children:"Changes to your username and profile picture update instantly across the app."})})]})})}const g3=[{id:"1",type:"dm",name:"MC_Flow",avatar:"#e63946",lastMessage:"GG last battle!",time:"2:30 PM",unread:2},{id:"2",type:"dm",name:"Judge_Dave",avatar:"#2ecc71",lastMessage:"Your flow was clean",time:"1:15 PM",unread:0},{id:"3",type:"room",name:"Battle Lounge",avatar:"#3498db",lastMessage:"Who's ready for the next battle?",time:"12:45 PM",unread:5,members:24},{id:"4",type:"room",name:"Underground Cypher",avatar:"#9b59b6",lastMessage:"New track just dropped!",time:"Yesterday",unread:0,members:156}],_3=[{id:"room1",name:"Battle Lounge",members:24,isPublic:!0},{id:"room2",name:"Underground Cypher",members:156,isPublic:!0},{id:"room3",name:"Hip Hop Heads",members:89,isPublic:!0},{id:"room4",name:"Beat Makers",members:67,isPublic:!0}],u0=[{id:1,userId:"1",username:"MC_Flow",message:"GG last battle! 🔥",time:"2:30 PM"},{id:2,userId:"me",username:"You",message:"Thanks! You killed it too",time:"2:31 PM"},{id:3,userId:"1",username:"MC_Flow",message:"Wanna go again?",time:"2:32 PM"},{id:4,userId:"me",username:"You",message:"I'm down. Let me warm up first",time:"2:33 PM"},{id:5,userId:"1",username:"MC_Flow",message:"Bet. I'll create a room",time:"2:34 PM"}],c0=[{id:1,userId:"user1",username:"BeatMaker99",message:"Who's ready for the next battle?",time:"12:45 PM"},{id:2,userId:"user2",username:"FlowMaster",message:"I am! Hit me up",time:"12:46 PM"},{id:3,userId:"user3",username:"Lyricist",message:"Gonna spectate this one",time:"12:47 PM"},{id:4,userId:"user4",username:"HipHopFan",message:"This arena is fire 🔥",time:"12:48 PM"}];function h0(){const{conversationId:t}=Qm(),e=Dn(),{user:n,userProfile:r}=On(),{isGifPickerOpen:s,toggleGifPicker:i,closeGifPicker:o}=ph(),[a,u]=O.useState(g3),[c,d]=O.useState(_3),[f,m]=O.useState(t?"chat":"dms"),[_,T]=O.useState(null),[I,N]=O.useState([]),[E,y]=O.useState(""),[S,b]=O.useState(""),[F,U]=O.useState(!1),[R,w]=O.useState(""),[C,k]=O.useState(!1),x=O.useRef(null);O.useEffect(()=>{if(t){const M=a.find(H=>H.id===t);M&&(T(M),N(M.type==="room"?c0:u0),m("chat"))}},[t,a]),O.useEffect(()=>{var M;(M=x.current)==null||M.scrollIntoView({behavior:"smooth"})},[I]),O.useEffect(()=>{if(!_)return;const M=_.type==="room"?"rooms":"dms",H=_.id,ae=Sn.subscribeToMessages(M,H,te=>{te.length>0?(N(te),k(!0)):I.length===0&&k(!1)});return()=>ae()},[_]);const P=a.filter(M=>M.name.toLowerCase().includes(S.toLowerCase())),A=c.filter(M=>M.name.toLowerCase().includes(S.toLowerCase())),Te=M=>{T(M),N(M.type==="room"?c0:u0),m("chat"),e(`/messages/${M.id}`,{replace:!0})},tt=async M=>{if(M.preventDefault(),!E.trim()||!_)return;const H=E;y("");const ae=_.type==="room"?"rooms":"dms",te=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",_e={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:te,message:H,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!1};N(Bt=>[...Bt,_e]);try{await Sn.sendMessage(ae,_.id,(n==null?void 0:n.uid)||"me",te,H)}catch(Bt){console.error("Failed to send message:",Bt)}},Ut=async M=>{if(!_)return;const H=_.type==="room"?"rooms":"dms",ae=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",te={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:ae,message:"",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!0,gifUrl:M};N(_e=>[..._e,te]);try{await Sn.sendMessage(H,_.id,(n==null?void 0:n.uid)||"me",ae,"",!0,M)}catch(_e){console.error("Failed to send GIF:",_e)}y("")},zt=async()=>{if(R.trim()){r!=null&&r.username||n!=null&&n.displayName;try{const H={id:await Sn.createRoom(R,(n==null?void 0:n.uid)||"me"),name:R,members:1,isPublic:!0,type:"room",lastMessage:"Room created",time:"Now",unread:0};d([H,...c]),u([H,...a]),w(""),U(!1),Te(H)}catch(M){console.error("Failed to create room:",M)}}},j=()=>{T(null),m("dms"),e("/messages")};return p.jsx("div",{className:"messages",children:p.jsx("div",{className:"messages-container",children:f==="chat"&&_?p.jsxs("div",{className:"chat-view",children:[p.jsxs("header",{className:"chat-view-header",children:[p.jsx("button",{className:"back-btn",onClick:j,children:p.jsx(bx,{size:20})}),p.jsxs("div",{className:"chat-view-info",children:[p.jsx("span",{className:"chat-view-avatar",style:{background:_.avatar},children:_.type==="room"?p.jsx(nw,{size:18}):_.name.charAt(0)}),p.jsxs("div",{className:"chat-view-details",children:[p.jsx("h2",{className:"chat-view-name",children:_.name}),_.type==="room"&&p.jsxs("span",{className:"chat-view-meta",children:[p.jsx(Hr,{size:12}),_.members," members"]})]})]})]}),p.jsxs("div",{className:"chat-view-messages",children:[I.map(M=>p.jsxs("div",{className:`chat-view-message ${M.userId===(n==null?void 0:n.uid)||M.userId==="me"?"own":""} ${M.isGif?"gif-message":""}`,children:[M.userId!=="me"&&p.jsx("span",{className:"message-sender",children:M.username}),M.isGif?p.jsx("img",{src:M.gifUrl,alt:"GIF",className:"message-gif"}):p.jsx("p",{className:"message-text",children:M.message}),p.jsx("span",{className:"message-time",children:M.time})]},M.id)),p.jsx("div",{ref:x})]}),p.jsxs("form",{className:"chat-view-input",onSubmit:tt,children:[p.jsx("button",{type:"button",className:"gif-toggle",onClick:i,children:"GIF"}),p.jsx("input",{type:"text",className:"input",placeholder:`Message ${_.name}`,value:E,onChange:M=>y(M.target.value)}),p.jsx("button",{type:"submit",className:"send-btn",disabled:!E.trim(),children:p.jsx(Zm,{size:20})})]}),s&&p.jsx(M_,{onSelect:Ut,onClose:i})]}):p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"messages-header",children:p.jsx("h1",{className:"page-title",children:"Messages"})}),p.jsxs("div",{className:"messages-tabs",children:[p.jsxs("button",{className:`tab-btn ${f==="dms"?"active":""}`,onClick:()=>m("dms"),children:[p.jsx(BI,{size:18}),"Direct"]}),p.jsxs("button",{className:`tab-btn ${f==="rooms"?"active":""}`,onClick:()=>m("rooms"),children:[p.jsx(Hr,{size:18}),"Rooms"]})]}),p.jsxs("div",{className:"search-bar",children:[p.jsx(WI,{size:18,className:"search-icon"}),p.jsx("input",{type:"text",className:"input search-input",placeholder:"Search conversations...",value:S,onChange:M=>b(M.target.value)})]}),f==="dms"&&p.jsx("div",{className:"conversations-list",children:P.filter(M=>M.type==="dm").map(M=>p.jsxs("button",{className:"conversation-item",onClick:()=>Te(M),children:[p.jsx("span",{className:"conv-avatar",style:{background:M.avatar},children:M.name.charAt(0)}),p.jsxs("div",{className:"conv-info",children:[p.jsxs("div",{className:"conv-header",children:[p.jsx("span",{className:"conv-name",children:M.name}),p.jsx("span",{className:"conv-time",children:M.time})]}),p.jsx("p",{className:"conv-preview",children:M.lastMessage})]}),M.unread>0&&p.jsx("span",{className:"unread-badge",children:M.unread})]},M.id))}),f==="rooms"&&p.jsxs("div",{className:"rooms-section",children:[p.jsxs("button",{className:"create-room-btn",onClick:()=>U(!0),children:[p.jsx($I,{size:20}),"Create Room"]}),p.jsx("div",{className:"rooms-list",children:A.map(M=>p.jsxs("button",{className:"room-item",onClick:()=>Te({...M,type:"room",lastMessage:"Join the conversation",time:""}),children:[p.jsx("span",{className:"room-avatar",children:p.jsx(nw,{size:18})}),p.jsxs("div",{className:"room-info",children:[p.jsx("span",{className:"room-name",children:M.name}),p.jsxs("span",{className:"room-members",children:[p.jsx(Hr,{size:12}),M.members," members"]})]})]},M.id))})]}),F&&p.jsx("div",{className:"modal-overlay",onClick:()=>U(!1),children:p.jsxs("div",{className:"modal create-room-modal",onClick:M=>M.stopPropagation(),children:[p.jsxs("div",{className:"modal-header",children:[p.jsx("h3",{className:"modal-title",children:"Create Room"}),p.jsx("button",{className:"modal-close",onClick:()=>U(!1),children:p.jsx(ul,{size:20})})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Room Name"}),p.jsx("input",{type:"text",className:"input",placeholder:"Enter room name",value:R,onChange:M=>w(M.target.value),maxLength:30})]}),p.jsxs("button",{className:"btn btn-primary btn-lg",onClick:zt,disabled:!R.trim(),children:[p.jsx(Jm,{size:18}),"Create"]})]})})]})})})}const y3=[{id:"1",username:"MC_Flow",points:2450,wins:72,avatar:"#e63946",joinedAt:"2024-01-15"},{id:"2",username:"LyricQueen",points:2380,wins:69,avatar:"#9b59b6",joinedAt:"2024-01-18"},{id:"3",username:"BeatMaker99",points:1890,wins:44,avatar:"#2ecc71",joinedAt:"2024-02-01"},{id:"4",username:"FlowMaster",points:1650,wins:32,avatar:"#3498db",joinedAt:"2024-02-10"},{id:"5",username:"RhymeStar",points:1420,wins:21,avatar:"#f39c12",joinedAt:"2024-02-20"},{id:"6",username:"MicDropper",points:1280,wins:14,avatar:"#1abc9c",joinedAt:"2024-03-01"},{id:"7",username:"VerseKing",points:1150,wins:7,avatar:"#e74c3c",joinedAt:"2024-03-05"},{id:"8",username:"CypherSoul",points:1080,wins:4,avatar:"#34495e",joinedAt:"2024-03-08"},{id:"9",username:"BattleBorn",points:1050,wins:2,avatar:"#16a085",joinedAt:"2024-03-12"},{id:"10",username:"NewEntry",points:1e3,wins:0,avatar:"#8e44ad",joinedAt:"2024-03-15"}];function v3(){Dn();const{user:t,userProfile:e,isAuthenticated:n}=On(),[r,s]=O.useState([]),[i,o]=O.useState(null);O.useEffect(()=>{const c=[...y3].sort((d,f)=>f.points!==d.points?f.points-d.points:new Date(d.joinedAt)-new Date(f.joinedAt));if(s(c),t){const d=c.findIndex(f=>f.id===(t==null?void 0:t.uid));d>=0&&o(d+1)}},[t]);const a=c=>{switch(c){case 0:return p.jsx(Mx,{size:20,className:"rank-icon gold"});case 1:return p.jsx(sw,{size:20,className:"rank-icon silver"});case 2:return p.jsx(sw,{size:20,className:"rank-icon bronze"});default:return p.jsx("span",{className:"rank-number",children:c+1})}},u=c=>(c==null?void 0:c.charAt(0).toUpperCase())||"?";return p.jsx("div",{className:"leaderboard-page",children:p.jsxs("div",{className:"leaderboard-container",children:[p.jsxs("header",{className:"leaderboard-header",children:[p.jsxs("div",{className:"header-content",children:[p.jsx(eg,{size:32,className:"header-icon"}),p.jsx("h1",{className:"page-title",children:"Leaderboard"})]}),p.jsx("p",{className:"header-subtitle",children:"Top performers in the arena"})]}),i&&p.jsxs("div",{className:"your-rank-card",children:[p.jsxs("div",{className:"your-rank-info",children:[p.jsx("span",{className:"your-rank-label",children:"Your Rank"}),p.jsxs("span",{className:"your-rank-number",children:["#",i]})]}),p.jsx("div",{className:"your-stats",children:p.jsxs("div",{className:"stat",children:[p.jsx(iw,{size:16,className:"stat-icon"}),p.jsx("span",{className:"stat-value",children:(e==null?void 0:e.points)||1e3}),p.jsx("span",{className:"stat-label",children:"Points"})]})})]}),p.jsx("div",{className:"leaderboard-list",children:r.map((c,d)=>p.jsxs("div",{className:`leaderboard-card ${d<3?"top-three":""} ${c.id===(t==null?void 0:t.uid)?"current-user":""}`,children:[p.jsx("div",{className:"rank-position",children:a(d)}),p.jsx("div",{className:"user-avatar",style:{background:c.avatar},children:u(c.username)}),p.jsxs("div",{className:"user-info",children:[p.jsx("span",{className:"username",children:c.username}),p.jsxs("span",{className:"wins",children:[c.wins," wins"]})]}),p.jsxs("div",{className:"user-points",children:[p.jsx("span",{className:"points-value",children:c.points.toLocaleString()}),p.jsx("span",{className:"points-label",children:"pts"})]})]},c.id))}),p.jsxs("div",{className:"leaderboard-info",children:[p.jsxs("div",{className:"info-item",children:[p.jsx(HI,{size:16}),p.jsx("span",{children:"+20 points per win"})]}),p.jsxs("div",{className:"info-item",children:[p.jsx(iw,{size:16}),p.jsx("span",{children:"+1000 points for joining"})]})]})]})})}const w3=[{id:"1",name:"MC_Flow",role:"artist",isReady:!0,hasVideo:!0,hasAudio:!0},{id:"2",name:"LyricQueen",role:"artist",isReady:!0,hasVideo:!0,hasAudio:!1},{id:"3",name:"Judge_Dave",role:"judge",isReady:!0,hasVideo:!0,hasAudio:!0},{id:"4",name:"Judge_Maya",role:"judge",isReady:!1,hasVideo:!1,hasAudio:!0}];function E3(){const{roomId:t}=Qm(),e=Dn(),{user:n,userProfile:r}=On(),{userRole:s,isHost:i,setParticipants:o}=Xm(),{isGifPickerOpen:a,toggleGifPicker:u,closeGifPicker:c}=ph(),[d,f]=O.useState(w3),[m,_]=O.useState([{id:1,userId:"1",username:"MC_Flow",message:"Ready to drop some heat! 🔥",time:"2:30 PM"},{id:2,userId:"3",username:"Judge_Dave",message:"Let's see what you got",time:"2:31 PM"},{id:3,userId:"2",username:"LyricQueen",message:"GGs in advance 😤",time:"2:32 PM"}]),[T,I]=O.useState(""),[N,E]=O.useState(!1),[y,S]=O.useState(!0),[b,F]=O.useState(!0),[U,R]=O.useState(!1),w=O.useRef(null),C=d.filter(j=>j.role==="artist"&&j.isReady).length>=2&&d.filter(j=>j.role==="judge").length>=2;O.useEffect(()=>{var j;(j=w.current)==null||j.scrollIntoView({behavior:"smooth"})},[m]),O.useEffect(()=>{if(!t)return;const j=Sn.subscribeToMessages("waitingRooms",t,M=>{M.length>0&&_(M)});return()=>j()},[t]);const k=()=>{navigator.clipboard.writeText(t),E(!0),setTimeout(()=>E(!1),2e3)},x=async j=>{if(j.preventDefault(),!T.trim()||!t)return;const M=T;I("");const H=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",ae={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:H,message:M,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};_(te=>[...te,ae]);try{await Sn.sendMessage("waitingRooms",t,(n==null?void 0:n.uid)||"me",H,M)}catch(te){console.error("Failed to send message:",te)}},P=async j=>{if(!t)return;const M=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",H={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:M,message:"",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!0,gifUrl:j};_(ae=>[...ae,H]);try{await Sn.sendMessage("waitingRooms",t,(n==null?void 0:n.uid)||"me",M,"",!0,j)}catch(ae){console.error("Failed to send GIF:",ae)}I("")},A=()=>{C&&(R(!0),setTimeout(()=>{e(`/arena/${t}`)},1500))},Te=j=>{switch(j){case"artist":return p.jsx(Wr,{size:14});case"judge":return p.jsx(mc,{size:14});default:return p.jsx(Hr,{size:14})}},tt=d.filter(j=>j.isReady).length,Ut=d.filter(j=>j.role==="artist").length,zt=d.filter(j=>j.role==="judge").length;return p.jsx("div",{className:"waiting-room",children:p.jsxs("div",{className:"waiting-container",children:[p.jsxs("header",{className:"waiting-header",children:[p.jsxs("div",{className:"room-code-display",children:[p.jsx("span",{className:"room-label",children:"Room Code"}),p.jsxs("div",{className:"room-code-row",children:[p.jsx("span",{className:"room-code",children:t}),p.jsx("button",{className:"copy-btn",onClick:k,children:N?p.jsx(Jm,{size:18}):p.jsx(Lx,{size:18})})]})]}),p.jsxs("div",{className:"waiting-status",children:[p.jsxs("div",{className:"status-item",children:[p.jsxs("span",{className:"status-value",children:[Ut,"/2"]}),p.jsx("span",{className:"status-label",children:"Artists"})]}),p.jsxs("div",{className:"status-item",children:[p.jsxs("span",{className:"status-value",children:[zt,"/2"]}),p.jsx("span",{className:"status-label",children:"Judges"})]}),p.jsxs("div",{className:"status-item",children:[p.jsx("span",{className:"status-value",children:tt}),p.jsx("span",{className:"status-label",children:"Ready"})]})]})]}),p.jsxs("div",{className:"waiting-content",children:[p.jsxs("section",{className:"video-section",children:[p.jsx("h2",{className:"section-title",children:"Waiting for Players"}),p.jsx("div",{className:"video-grid",children:[...Array(4)].map((j,M)=>{const H=d[M];return p.jsx("div",{className:`video-box ${H?"has-participant":"empty"}`,children:H?p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"video-placeholder",children:p.jsx("div",{className:"avatar-placeholder",children:H.name.charAt(0)})}),p.jsxs("div",{className:"video-overlay",children:[p.jsxs("div",{className:"participant-info",children:[p.jsxs("span",{className:`role-badge-small badge-${H.role}`,children:[Te(H.role),H.role]}),p.jsx("span",{className:"participant-name",children:H.name})]}),p.jsxs("div",{className:"media-indicators",children:[!H.hasAudio&&p.jsx(up,{size:14}),!H.hasVideo&&p.jsx(cp,{size:14})]})]}),H.isReady&&p.jsx("div",{className:"ready-indicator",children:"Ready"})]}):p.jsxs("div",{className:"empty-slot",children:[p.jsx(Hr,{size:32}),p.jsx("span",{children:"Waiting..."})]})},M)})}),p.jsxs("div",{className:"media-controls",children:[p.jsx("button",{className:`control-btn ${b?"active":"off"}`,onClick:()=>F(!b),children:b?p.jsx(Wr,{size:20}):p.jsx(up,{size:20})}),p.jsx("button",{className:`control-btn ${y?"active":"off"}`,onClick:()=>S(!y),children:y?p.jsx(qI,{size:20}):p.jsx(cp,{size:20})}),p.jsx("button",{className:"control-btn leave",onClick:()=>e("/lobby"),children:p.jsx(ul,{size:20})})]})]}),p.jsxs("aside",{className:"chat-section",children:[p.jsx("div",{className:"chat-header",children:p.jsx("h3",{children:"Waiting Room Chat"})}),p.jsxs("div",{className:"chat-messages",children:[m.map(j=>p.jsxs("div",{className:`chat-message ${j.userId===(n==null?void 0:n.uid)?"own":""} ${j.isGif?"gif-message":""}`,children:[p.jsxs("div",{className:"message-header",children:[p.jsx("span",{className:"message-username",children:j.username}),p.jsx("span",{className:"message-time",children:j.time})]}),j.isGif?p.jsx("img",{src:j.gifUrl,alt:"GIF",className:"message-gif"}):p.jsx("p",{className:"message-content",children:j.message})]},j.id)),p.jsx("div",{ref:w})]}),p.jsxs("form",{className:"chat-input-form",onSubmit:x,children:[p.jsx("button",{type:"button",className:"gif-toggle",onClick:u,children:"GIF"}),p.jsx("input",{type:"text",className:"input chat-input",placeholder:"Say something...",value:T,onChange:j=>I(j.target.value)}),p.jsx("button",{type:"submit",className:"send-btn",disabled:!T.trim(),children:p.jsx(Zm,{size:18})})]}),a&&p.jsx(M_,{onSelect:P,onClose:u})]})]}),i&&p.jsxs("div",{className:"start-section",children:[p.jsx("button",{className:"btn btn-primary btn-lg start-btn",onClick:A,disabled:!C||U,children:U?"Starting...":"Start Battle"}),!C&&p.jsx("p",{className:"start-hint",children:"Need 2 artists and 2 judges ready to start"})]})]})})}function ti({children:t}){const{isAuthenticated:e,isLoading:n}=On(),[r,s]=O.useState(!1);return O.useEffect(()=>{const i=setTimeout(()=>s(!0),100);return()=>clearTimeout(i)},[]),n||!r?p.jsx("div",{className:"loading-screen",children:p.jsxs("div",{className:"loading-content",children:[p.jsx("div",{className:"loading-logo",children:"Dreamledge"}),p.jsx("div",{className:"loading-spinner"})]})}):e?t:p.jsx(OI,{to:"/",replace:!0})}function T3(){const{isLoading:t,setLoading:e}=On();return O.useEffect(()=>{const n=setTimeout(()=>e(!1),500);return()=>clearTimeout(n)},[e]),p.jsx($P,{children:p.jsxs("div",{className:"app",children:[p.jsx(Qx,{}),p.jsx("main",{className:"main-content",children:p.jsxs(LP,{children:[p.jsx(wn,{path:"/",element:p.jsx(c3,{})}),p.jsx(wn,{path:"/lobby",element:p.jsx(ti,{children:p.jsx(h3,{})})}),p.jsx(wn,{path:"/waiting/:roomId",element:p.jsx(ti,{children:p.jsx(E3,{})})}),p.jsx(wn,{path:"/arena/:battleId",element:p.jsx(ti,{children:p.jsx(p3,{})})}),p.jsx(wn,{path:"/profile",element:p.jsx(ti,{children:p.jsx(m3,{})})}),p.jsx(wn,{path:"/messages",element:p.jsx(ti,{children:p.jsx(h0,{})})}),p.jsx(wn,{path:"/messages/:conversationId",element:p.jsx(ti,{children:p.jsx(h0,{})})}),p.jsx(wn,{path:"/leaderboard",element:p.jsx(v3,{})}),p.jsx(wn,{path:"*",element:p.jsx(OI,{to:"/",replace:!0})})]})})]})})}df.createRoot(document.getElementById("root")).render(p.jsx(tm.StrictMode,{children:p.jsx(T3,{})}));
