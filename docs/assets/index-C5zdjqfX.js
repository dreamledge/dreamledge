function ek(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function t0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var n0={exports:{}},zc={},r0={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tl=Symbol.for("react.element"),tk=Symbol.for("react.portal"),nk=Symbol.for("react.fragment"),rk=Symbol.for("react.strict_mode"),sk=Symbol.for("react.profiler"),ik=Symbol.for("react.provider"),ok=Symbol.for("react.context"),ak=Symbol.for("react.forward_ref"),lk=Symbol.for("react.suspense"),uk=Symbol.for("react.memo"),ck=Symbol.for("react.lazy"),Ny=Symbol.iterator;function hk(t){return t===null||typeof t!="object"?null:(t=Ny&&t[Ny]||t["@@iterator"],typeof t=="function"?t:null)}var s0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},i0=Object.assign,o0={};function Ji(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||s0}Ji.prototype.isReactComponent={};Ji.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ji.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function a0(){}a0.prototype=Ji.prototype;function Hp(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||s0}var qp=Hp.prototype=new a0;qp.constructor=Hp;i0(qp,Ji.prototype);qp.isPureReactComponent=!0;var Py=Array.isArray,l0=Object.prototype.hasOwnProperty,Gp={current:null},u0={key:!0,ref:!0,__self:!0,__source:!0};function c0(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)l0.call(e,r)&&!u0.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:tl,type:t,key:i,ref:o,props:s,_owner:Gp.current}}function dk(t,e){return{$$typeof:tl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kp(t){return typeof t=="object"&&t!==null&&t.$$typeof===tl}function fk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xy=/\/+/g;function ud(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fk(""+t.key):e.toString(36)}function gu(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case tl:case tk:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+ud(o,0):r,Py(s)?(n="",t!=null&&(n=t.replace(xy,"$&/")+"/"),gu(s,e,n,"",function(c){return c})):s!=null&&(Kp(s)&&(s=dk(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(xy,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Py(t))for(var a=0;a<t.length;a++){i=t[a];var u=r+ud(i,a);o+=gu(i,e,n,u,s)}else if(u=hk(t),typeof u=="function")for(t=u.call(t),a=0;!(i=t.next()).done;)i=i.value,u=r+ud(i,a++),o+=gu(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zl(t,e,n){if(t==null)return t;var r=[],s=0;return gu(t,r,"","",function(i){return e.call(n,i,s++)}),r}function pk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},_u={transition:null},mk={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:_u,ReactCurrentOwner:Gp};function h0(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:zl,forEach:function(t,e,n){zl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zl(t,function(){e++}),e},toArray:function(t){return zl(t,function(e){return e})||[]},only:function(t){if(!Kp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=Ji;oe.Fragment=nk;oe.Profiler=sk;oe.PureComponent=Hp;oe.StrictMode=rk;oe.Suspense=lk;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mk;oe.act=h0;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=i0({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Gp.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)l0.call(e,u)&&!u0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:tl,type:t.type,key:s,ref:i,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:ok,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ik,_context:t},t.Consumer=t};oe.createElement=c0;oe.createFactory=function(t){var e=c0.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:ak,render:t}};oe.isValidElement=Kp;oe.lazy=function(t){return{$$typeof:ck,_payload:{_status:-1,_result:t},_init:pk}};oe.memo=function(t,e){return{$$typeof:uk,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=_u.transition;_u.transition={};try{t()}finally{_u.transition=e}};oe.unstable_act=h0;oe.useCallback=function(t,e){return kt.current.useCallback(t,e)};oe.useContext=function(t){return kt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return kt.current.useEffect(t,e)};oe.useId=function(){return kt.current.useId()};oe.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return kt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};oe.useRef=function(t){return kt.current.useRef(t)};oe.useState=function(t){return kt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return kt.current.useTransition()};oe.version="18.3.1";r0.exports=oe;var O=r0.exports;const Qp=t0(O),gk=ek({__proto__:null,default:Qp},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _k=O,yk=Symbol.for("react.element"),vk=Symbol.for("react.fragment"),wk=Object.prototype.hasOwnProperty,Ek=_k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tk={key:!0,ref:!0,__self:!0,__source:!0};function d0(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)wk.call(e,r)&&!Tk.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:yk,type:t,key:i,ref:o,props:s,_owner:Ek.current}}zc.Fragment=vk;zc.jsx=d0;zc.jsxs=d0;n0.exports=zc;var p=n0.exports,of={},f0={exports:{}},Yt={},p0={exports:{}},m0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,M){var H=V.length;V.push(M);e:for(;0<H;){var ae=H-1>>>1,ne=V[ae];if(0<s(ne,M))V[ae]=M,V[H]=ne,H=ae;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var M=V[0],H=V.pop();if(H!==M){V[0]=H;e:for(var ae=0,ne=V.length,_e=ne>>>1;ae<_e;){var zt=2*(ae+1)-1,Mn=V[zt],Vn=zt+1,jn=V[Vn];if(0>s(Mn,H))Vn<ne&&0>s(jn,Mn)?(V[ae]=jn,V[Vn]=H,ae=Vn):(V[ae]=Mn,V[zt]=H,ae=zt);else if(Vn<ne&&0>s(jn,H))V[ae]=jn,V[Vn]=H,ae=Vn;else break e}}return M}function s(V,M){var H=V.sortIndex-M.sortIndex;return H!==0?H:V.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,g=3,_=!1,T=!1,I=!1,k=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(V){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=V)r(c),M.sortIndex=M.expirationTime,e(u,M);else break;M=n(c)}}function b(V){if(I=!1,S(V),!T)if(n(u)!==null)T=!0,Ft(j);else{var M=n(c);M!==null&&Ut(b,M.startTime-V)}}function j(V,M){T=!1,I&&(I=!1,E(w),w=-1),_=!0;var H=g;try{for(S(M),f=n(u);f!==null&&(!(f.expirationTime>M)||V&&!x());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,g=f.priorityLevel;var ne=ae(f.expirationTime<=M);M=t.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(u)&&r(u),S(M)}else r(u);f=n(u)}if(f!==null)var _e=!0;else{var zt=n(c);zt!==null&&Ut(b,zt.startTime-M),_e=!1}return _e}finally{f=null,g=H,_=!1}}var F=!1,R=null,w=-1,C=5,N=-1;function x(){return!(t.unstable_now()-N<C)}function P(){if(R!==null){var V=t.unstable_now();N=V;var M=!0;try{M=R(!0,V)}finally{M?A():(F=!1,R=null)}}else F=!1}var A;if(typeof y=="function")A=function(){y(P)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,tt=Te.port2;Te.port1.onmessage=P,A=function(){tt.postMessage(null)}}else A=function(){k(P,0)};function Ft(V){R=V,F||(F=!0,A())}function Ut(V,M){w=k(function(){V(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){T||_||(T=!0,Ft(j))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(V){switch(g){case 1:case 2:case 3:var M=3;break;default:M=g}var H=g;g=M;try{return V()}finally{g=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,M){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var H=g;g=V;try{return M()}finally{g=H}},t.unstable_scheduleCallback=function(V,M,H){var ae=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ae+H:ae):H=ae,V){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=H+ne,V={id:d++,callback:M,priorityLevel:V,startTime:H,expirationTime:ne,sortIndex:-1},H>ae?(V.sortIndex=H,e(c,V),n(u)===null&&V===n(c)&&(I?(E(w),w=-1):I=!0,Ut(b,H-ae))):(V.sortIndex=ne,e(u,V),T||_||(T=!0,Ft(j))),V},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(V){var M=g;return function(){var H=g;g=M;try{return V.apply(this,arguments)}finally{g=H}}}})(m0);p0.exports=m0;var Ik=p0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sk=O,Qt=Ik;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g0=new Set,_a={};function Ws(t,e){xi(t,e),xi(t+"Capture",e)}function xi(t,e){for(_a[t]=e,t=0;t<e.length;t++)g0.add(e[t])}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),af=Object.prototype.hasOwnProperty,Ck=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,by={},Dy={};function Rk(t){return af.call(Dy,t)?!0:af.call(by,t)?!1:Ck.test(t)?Dy[t]=!0:(by[t]=!0,!1)}function kk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ak(t,e,n,r){if(e===null||typeof e>"u"||kk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function At(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new At(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new At(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new At(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new At(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new At(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new At(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new At(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new At(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new At(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yp=/[\-:]([a-z])/g;function Xp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yp,Xp);lt[e]=new At(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yp,Xp);lt[e]=new At(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yp,Xp);lt[e]=new At(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new At(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new At(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jp(t,e,n,r){var s=lt.hasOwnProperty(e)?lt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ak(e,n,s,r)&&(n=null),r||s===null?Rk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var hr=Sk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bl=Symbol.for("react.element"),ii=Symbol.for("react.portal"),oi=Symbol.for("react.fragment"),Zp=Symbol.for("react.strict_mode"),lf=Symbol.for("react.profiler"),_0=Symbol.for("react.provider"),y0=Symbol.for("react.context"),em=Symbol.for("react.forward_ref"),uf=Symbol.for("react.suspense"),cf=Symbol.for("react.suspense_list"),tm=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),v0=Symbol.for("react.offscreen"),Oy=Symbol.iterator;function ko(t){return t===null||typeof t!="object"?null:(t=Oy&&t[Oy]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,cd;function Wo(t){if(cd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cd=e&&e[1]||""}return`
`+cd+t}var hd=!1;function dd(t,e){if(!t||hd)return"";hd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{hd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wo(t):""}function Nk(t){switch(t.tag){case 5:return Wo(t.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return t=dd(t.type,!1),t;case 11:return t=dd(t.type.render,!1),t;case 1:return t=dd(t.type,!0),t;default:return""}}function hf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case oi:return"Fragment";case ii:return"Portal";case lf:return"Profiler";case Zp:return"StrictMode";case uf:return"Suspense";case cf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case y0:return(t.displayName||"Context")+".Consumer";case _0:return(t._context.displayName||"Context")+".Provider";case em:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tm:return e=t.displayName||null,e!==null?e:hf(t.type)||"Memo";case Er:e=t._payload,t=t._init;try{return hf(t(e))}catch{}}return null}function Pk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hf(e);case 8:return e===Zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function w0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xk(t){var e=w0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $l(t){t._valueTracker||(t._valueTracker=xk(t))}function E0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=w0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Vu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function df(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ly(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function T0(t,e){e=e.checked,e!=null&&Jp(t,"checked",e,!1)}function ff(t,e){T0(t,e);var n=Qr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pf(t,e.type,n):e.hasOwnProperty("defaultValue")&&pf(t,e.type,Qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function My(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pf(t,e,n){(e!=="number"||Vu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ho=Array.isArray;function yi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function mf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Ho(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qr(n)}}function I0(t,e){var n=Qr(e.value),r=Qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function jy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function S0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?S0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wl,C0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wl=Wl||document.createElement("div"),Wl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bk=["Webkit","ms","Moz","O"];Object.keys(Xo).forEach(function(t){bk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xo[e]=Xo[t]})});function R0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xo.hasOwnProperty(t)&&Xo[t]?(""+e).trim():e+"px"}function k0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=R0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var Dk=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _f(t,e){if(e){if(Dk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function yf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vf=null;function nm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wf=null,vi=null,wi=null;function Fy(t){if(t=sl(t)){if(typeof wf!="function")throw Error(B(280));var e=t.stateNode;e&&(e=qc(e),wf(t.stateNode,t.type,e))}}function A0(t){vi?wi?wi.push(t):wi=[t]:vi=t}function N0(){if(vi){var t=vi,e=wi;if(wi=vi=null,Fy(t),e)for(t=0;t<e.length;t++)Fy(e[t])}}function P0(t,e){return t(e)}function x0(){}var fd=!1;function b0(t,e,n){if(fd)return t(e,n);fd=!0;try{return P0(t,e,n)}finally{fd=!1,(vi!==null||wi!==null)&&(x0(),N0())}}function va(t,e){var n=t.stateNode;if(n===null)return null;var r=qc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Ef=!1;if(er)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){Ef=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{Ef=!1}function Ok(t,e,n,r,s,i,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Jo=!1,ju=null,Fu=!1,Tf=null,Lk={onError:function(t){Jo=!0,ju=t}};function Mk(t,e,n,r,s,i,o,a,u){Jo=!1,ju=null,Ok.apply(Lk,arguments)}function Vk(t,e,n,r,s,i,o,a,u){if(Mk.apply(this,arguments),Jo){if(Jo){var c=ju;Jo=!1,ju=null}else throw Error(B(198));Fu||(Fu=!0,Tf=c)}}function Hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function D0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Uy(t){if(Hs(t)!==t)throw Error(B(188))}function jk(t){var e=t.alternate;if(!e){if(e=Hs(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Uy(s),t;if(i===r)return Uy(s),e;i=i.sibling}throw Error(B(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function O0(t){return t=jk(t),t!==null?L0(t):null}function L0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=L0(t);if(e!==null)return e;t=t.sibling}return null}var M0=Qt.unstable_scheduleCallback,zy=Qt.unstable_cancelCallback,Fk=Qt.unstable_shouldYield,Uk=Qt.unstable_requestPaint,Ue=Qt.unstable_now,zk=Qt.unstable_getCurrentPriorityLevel,rm=Qt.unstable_ImmediatePriority,V0=Qt.unstable_UserBlockingPriority,Uu=Qt.unstable_NormalPriority,Bk=Qt.unstable_LowPriority,j0=Qt.unstable_IdlePriority,Bc=null,Cn=null;function $k(t){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(Bc,t,void 0,(t.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:qk,Wk=Math.log,Hk=Math.LN2;function qk(t){return t>>>=0,t===0?32:31-(Wk(t)/Hk|0)|0}var Hl=64,ql=4194304;function qo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=qo(a):(i&=o,i!==0&&(r=qo(i)))}else o=n&~s,o!==0?r=qo(o):i!==0&&(r=qo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pn(e),s=1<<n,r|=t[n],e&=~s;return r}function Gk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-pn(i),a=1<<o,u=s[o];u===-1?(!(a&n)||a&r)&&(s[o]=Gk(a,e)):u<=e&&(t.expiredLanes|=a),i&=~a}}function If(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function F0(){var t=Hl;return Hl<<=1,!(Hl&4194240)&&(Hl=64),t}function pd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function nl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pn(e),t[e]=n}function Qk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-pn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function sm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var me=0;function U0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var z0,im,B0,$0,W0,Sf=!1,Gl=[],Dr=null,Or=null,Lr=null,wa=new Map,Ea=new Map,Ir=[],Yk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function By(t,e){switch(t){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(e.pointerId)}}function No(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=sl(e),e!==null&&im(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Xk(t,e,n,r,s){switch(e){case"focusin":return Dr=No(Dr,t,e,n,r,s),!0;case"dragenter":return Or=No(Or,t,e,n,r,s),!0;case"mouseover":return Lr=No(Lr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return wa.set(i,No(wa.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Ea.set(i,No(Ea.get(i)||null,t,e,n,r,s)),!0}return!1}function H0(t){var e=_s(t.target);if(e!==null){var n=Hs(e);if(n!==null){if(e=n.tag,e===13){if(e=D0(n),e!==null){t.blockedOn=e,W0(t.priority,function(){B0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vf=r,n.target.dispatchEvent(r),vf=null}else return e=sl(n),e!==null&&im(e),t.blockedOn=n,!1;e.shift()}return!0}function $y(t,e,n){yu(t)&&n.delete(e)}function Jk(){Sf=!1,Dr!==null&&yu(Dr)&&(Dr=null),Or!==null&&yu(Or)&&(Or=null),Lr!==null&&yu(Lr)&&(Lr=null),wa.forEach($y),Ea.forEach($y)}function Po(t,e){t.blockedOn===e&&(t.blockedOn=null,Sf||(Sf=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,Jk)))}function Ta(t){function e(s){return Po(s,t)}if(0<Gl.length){Po(Gl[0],t);for(var n=1;n<Gl.length;n++){var r=Gl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Dr!==null&&Po(Dr,t),Or!==null&&Po(Or,t),Lr!==null&&Po(Lr,t),wa.forEach(e),Ea.forEach(e),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)H0(n),n.blockedOn===null&&Ir.shift()}var Ei=hr.ReactCurrentBatchConfig,Bu=!0;function Zk(t,e,n,r){var s=me,i=Ei.transition;Ei.transition=null;try{me=1,om(t,e,n,r)}finally{me=s,Ei.transition=i}}function eA(t,e,n,r){var s=me,i=Ei.transition;Ei.transition=null;try{me=4,om(t,e,n,r)}finally{me=s,Ei.transition=i}}function om(t,e,n,r){if(Bu){var s=Cf(t,e,n,r);if(s===null)Sd(t,e,r,$u,n),By(t,r);else if(Xk(s,t,e,n,r))r.stopPropagation();else if(By(t,r),e&4&&-1<Yk.indexOf(t)){for(;s!==null;){var i=sl(s);if(i!==null&&z0(i),i=Cf(t,e,n,r),i===null&&Sd(t,e,r,$u,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Sd(t,e,r,null,n)}}var $u=null;function Cf(t,e,n,r){if($u=null,t=nm(r),t=_s(t),t!==null)if(e=Hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=D0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $u=t,null}function q0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zk()){case rm:return 1;case V0:return 4;case Uu:case Bk:return 16;case j0:return 536870912;default:return 16}default:return 16}}var Nr=null,am=null,vu=null;function G0(){if(vu)return vu;var t,e=am,n=e.length,r,s="value"in Nr?Nr.value:Nr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return vu=s.slice(t,1<r?1-r:void 0)}function wu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Kl(){return!0}function Wy(){return!1}function Xt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Kl:Wy,this.isPropagationStopped=Wy,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kl)},persist:function(){},isPersistent:Kl}),e}var Zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lm=Xt(Zi),rl=xe({},Zi,{view:0,detail:0}),tA=Xt(rl),md,gd,xo,$c=xe({},rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:um,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(md=t.screenX-xo.screenX,gd=t.screenY-xo.screenY):gd=md=0,xo=t),md)},movementY:function(t){return"movementY"in t?t.movementY:gd}}),Hy=Xt($c),nA=xe({},$c,{dataTransfer:0}),rA=Xt(nA),sA=xe({},rl,{relatedTarget:0}),_d=Xt(sA),iA=xe({},Zi,{animationName:0,elapsedTime:0,pseudoElement:0}),oA=Xt(iA),aA=xe({},Zi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lA=Xt(aA),uA=xe({},Zi,{data:0}),qy=Xt(uA),cA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dA[t])?!!e[t]:!1}function um(){return fA}var pA=xe({},rl,{key:function(t){if(t.key){var e=cA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:um,charCode:function(t){return t.type==="keypress"?wu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mA=Xt(pA),gA=xe({},$c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gy=Xt(gA),_A=xe({},rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:um}),yA=Xt(_A),vA=xe({},Zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),wA=Xt(vA),EA=xe({},$c,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),TA=Xt(EA),IA=[9,13,27,32],cm=er&&"CompositionEvent"in window,Zo=null;er&&"documentMode"in document&&(Zo=document.documentMode);var SA=er&&"TextEvent"in window&&!Zo,K0=er&&(!cm||Zo&&8<Zo&&11>=Zo),Ky=" ",Qy=!1;function Q0(t,e){switch(t){case"keyup":return IA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ai=!1;function CA(t,e){switch(t){case"compositionend":return Y0(e);case"keypress":return e.which!==32?null:(Qy=!0,Ky);case"textInput":return t=e.data,t===Ky&&Qy?null:t;default:return null}}function RA(t,e){if(ai)return t==="compositionend"||!cm&&Q0(t,e)?(t=G0(),vu=am=Nr=null,ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return K0&&e.locale!=="ko"?null:e.data;default:return null}}var kA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kA[t.type]:e==="textarea"}function X0(t,e,n,r){A0(r),e=Wu(e,"onChange"),0<e.length&&(n=new lm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ea=null,Ia=null;function AA(t){lT(t,0)}function Wc(t){var e=ci(t);if(E0(e))return t}function NA(t,e){if(t==="change")return e}var J0=!1;if(er){var yd;if(er){var vd="oninput"in document;if(!vd){var Xy=document.createElement("div");Xy.setAttribute("oninput","return;"),vd=typeof Xy.oninput=="function"}yd=vd}else yd=!1;J0=yd&&(!document.documentMode||9<document.documentMode)}function Jy(){ea&&(ea.detachEvent("onpropertychange",Z0),Ia=ea=null)}function Z0(t){if(t.propertyName==="value"&&Wc(Ia)){var e=[];X0(e,Ia,t,nm(t)),b0(AA,e)}}function PA(t,e,n){t==="focusin"?(Jy(),ea=e,Ia=n,ea.attachEvent("onpropertychange",Z0)):t==="focusout"&&Jy()}function xA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wc(Ia)}function bA(t,e){if(t==="click")return Wc(e)}function DA(t,e){if(t==="input"||t==="change")return Wc(e)}function OA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yn=typeof Object.is=="function"?Object.is:OA;function Sa(t,e){if(yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!af.call(e,s)||!yn(t[s],e[s]))return!1}return!0}function Zy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ev(t,e){var n=Zy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zy(n)}}function eT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?eT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tT(){for(var t=window,e=Vu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vu(t.document)}return e}function hm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LA(t){var e=tT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&eT(n.ownerDocument.documentElement,n)){if(r!==null&&hm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=ev(n,i);var o=ev(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var MA=er&&"documentMode"in document&&11>=document.documentMode,li=null,Rf=null,ta=null,kf=!1;function tv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kf||li==null||li!==Vu(r)||(r=li,"selectionStart"in r&&hm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ta&&Sa(ta,r)||(ta=r,r=Wu(Rf,"onSelect"),0<r.length&&(e=new lm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=li)))}function Ql(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ui={animationend:Ql("Animation","AnimationEnd"),animationiteration:Ql("Animation","AnimationIteration"),animationstart:Ql("Animation","AnimationStart"),transitionend:Ql("Transition","TransitionEnd")},wd={},nT={};er&&(nT=document.createElement("div").style,"AnimationEvent"in window||(delete ui.animationend.animation,delete ui.animationiteration.animation,delete ui.animationstart.animation),"TransitionEvent"in window||delete ui.transitionend.transition);function Hc(t){if(wd[t])return wd[t];if(!ui[t])return t;var e=ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in nT)return wd[t]=e[n];return t}var rT=Hc("animationend"),sT=Hc("animationiteration"),iT=Hc("animationstart"),oT=Hc("transitionend"),aT=new Map,nv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rs(t,e){aT.set(t,e),Ws(e,[t])}for(var Ed=0;Ed<nv.length;Ed++){var Td=nv[Ed],VA=Td.toLowerCase(),jA=Td[0].toUpperCase()+Td.slice(1);rs(VA,"on"+jA)}rs(rT,"onAnimationEnd");rs(sT,"onAnimationIteration");rs(iT,"onAnimationStart");rs("dblclick","onDoubleClick");rs("focusin","onFocus");rs("focusout","onBlur");rs(oT,"onTransitionEnd");xi("onMouseEnter",["mouseout","mouseover"]);xi("onMouseLeave",["mouseout","mouseover"]);xi("onPointerEnter",["pointerout","pointerover"]);xi("onPointerLeave",["pointerout","pointerover"]);Ws("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ws("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ws("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ws("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ws("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ws("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function rv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Vk(r,e,void 0,t),t.currentTarget=null}function lT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&s.isPropagationStopped())break e;rv(s,a,c),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&s.isPropagationStopped())break e;rv(s,a,c),i=u}}}if(Fu)throw t=Tf,Fu=!1,Tf=null,t}function Se(t,e){var n=e[bf];n===void 0&&(n=e[bf]=new Set);var r=t+"__bubble";n.has(r)||(uT(e,t,2,!1),n.add(r))}function Id(t,e,n){var r=0;e&&(r|=4),uT(n,t,r,e)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Ca(t){if(!t[Yl]){t[Yl]=!0,g0.forEach(function(n){n!=="selectionchange"&&(FA.has(n)||Id(n,!1,t),Id(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yl]||(e[Yl]=!0,Id("selectionchange",!1,e))}}function uT(t,e,n,r){switch(q0(e)){case 1:var s=Zk;break;case 4:s=eA;break;default:s=om}n=s.bind(null,e,n,t),s=void 0,!Ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Sd(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;a!==null;){if(o=_s(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}b0(function(){var c=i,d=nm(n),f=[];e:{var g=aT.get(t);if(g!==void 0){var _=lm,T=t;switch(t){case"keypress":if(wu(n)===0)break e;case"keydown":case"keyup":_=mA;break;case"focusin":T="focus",_=_d;break;case"focusout":T="blur",_=_d;break;case"beforeblur":case"afterblur":_=_d;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Hy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=rA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=yA;break;case rT:case sT:case iT:_=oA;break;case oT:_=wA;break;case"scroll":_=tA;break;case"wheel":_=TA;break;case"copy":case"cut":case"paste":_=lA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Gy}var I=(e&4)!==0,k=!I&&t==="scroll",E=I?g!==null?g+"Capture":null:g;I=[];for(var y=c,S;y!==null;){S=y;var b=S.stateNode;if(S.tag===5&&b!==null&&(S=b,E!==null&&(b=va(y,E),b!=null&&I.push(Ra(y,b,S)))),k)break;y=y.return}0<I.length&&(g=new _(g,T,null,n,d),f.push({event:g,listeners:I}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",g&&n!==vf&&(T=n.relatedTarget||n.fromElement)&&(_s(T)||T[tr]))break e;if((_||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,_?(T=n.relatedTarget||n.toElement,_=c,T=T?_s(T):null,T!==null&&(k=Hs(T),T!==k||T.tag!==5&&T.tag!==6)&&(T=null)):(_=null,T=c),_!==T)){if(I=Hy,b="onMouseLeave",E="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(I=Gy,b="onPointerLeave",E="onPointerEnter",y="pointer"),k=_==null?g:ci(_),S=T==null?g:ci(T),g=new I(b,y+"leave",_,n,d),g.target=k,g.relatedTarget=S,b=null,_s(d)===c&&(I=new I(E,y+"enter",T,n,d),I.target=S,I.relatedTarget=k,b=I),k=b,_&&T)t:{for(I=_,E=T,y=0,S=I;S;S=Zs(S))y++;for(S=0,b=E;b;b=Zs(b))S++;for(;0<y-S;)I=Zs(I),y--;for(;0<S-y;)E=Zs(E),S--;for(;y--;){if(I===E||E!==null&&I===E.alternate)break t;I=Zs(I),E=Zs(E)}I=null}else I=null;_!==null&&sv(f,g,_,I,!1),T!==null&&k!==null&&sv(f,k,T,I,!0)}}e:{if(g=c?ci(c):window,_=g.nodeName&&g.nodeName.toLowerCase(),_==="select"||_==="input"&&g.type==="file")var j=NA;else if(Yy(g))if(J0)j=DA;else{j=xA;var F=PA}else(_=g.nodeName)&&_.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=bA);if(j&&(j=j(t,c))){X0(f,j,n,d);break e}F&&F(t,g,c),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&pf(g,"number",g.value)}switch(F=c?ci(c):window,t){case"focusin":(Yy(F)||F.contentEditable==="true")&&(li=F,Rf=c,ta=null);break;case"focusout":ta=Rf=li=null;break;case"mousedown":kf=!0;break;case"contextmenu":case"mouseup":case"dragend":kf=!1,tv(f,n,d);break;case"selectionchange":if(MA)break;case"keydown":case"keyup":tv(f,n,d)}var R;if(cm)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else ai?Q0(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(K0&&n.locale!=="ko"&&(ai||w!=="onCompositionStart"?w==="onCompositionEnd"&&ai&&(R=G0()):(Nr=d,am="value"in Nr?Nr.value:Nr.textContent,ai=!0)),F=Wu(c,w),0<F.length&&(w=new qy(w,t,null,n,d),f.push({event:w,listeners:F}),R?w.data=R:(R=Y0(n),R!==null&&(w.data=R)))),(R=SA?CA(t,n):RA(t,n))&&(c=Wu(c,"onBeforeInput"),0<c.length&&(d=new qy("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=R))}lT(f,e)})}function Ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=va(t,n),i!=null&&r.unshift(Ra(t,i,s)),i=va(t,e),i!=null&&r.push(Ra(t,i,s))),t=t.return}return r}function Zs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sv(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,s?(u=va(n,i),u!=null&&o.unshift(Ra(n,u,a))):s||(u=va(n,i),u!=null&&o.push(Ra(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var UA=/\r\n?/g,zA=/\u0000|\uFFFD/g;function iv(t){return(typeof t=="string"?t:""+t).replace(UA,`
`).replace(zA,"")}function Xl(t,e,n){if(e=iv(e),iv(t)!==e&&n)throw Error(B(425))}function Hu(){}var Af=null,Nf=null;function Pf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xf=typeof setTimeout=="function"?setTimeout:void 0,BA=typeof clearTimeout=="function"?clearTimeout:void 0,ov=typeof Promise=="function"?Promise:void 0,$A=typeof queueMicrotask=="function"?queueMicrotask:typeof ov<"u"?function(t){return ov.resolve(null).then(t).catch(WA)}:xf;function WA(t){setTimeout(function(){throw t})}function Cd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Ta(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ta(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function av(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var eo=Math.random().toString(36).slice(2),Tn="__reactFiber$"+eo,ka="__reactProps$"+eo,tr="__reactContainer$"+eo,bf="__reactEvents$"+eo,HA="__reactListeners$"+eo,qA="__reactHandles$"+eo;function _s(t){var e=t[Tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tr]||n[Tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=av(t);t!==null;){if(n=t[Tn])return n;t=av(t)}return e}t=n,n=t.parentNode}return null}function sl(t){return t=t[Tn]||t[tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function qc(t){return t[ka]||null}var Df=[],hi=-1;function ss(t){return{current:t}}function Re(t){0>hi||(t.current=Df[hi],Df[hi]=null,hi--)}function Ee(t,e){hi++,Df[hi]=t.current,t.current=e}var Yr={},wt=ss(Yr),Ot=ss(!1),Ns=Yr;function bi(t,e){var n=t.type.contextTypes;if(!n)return Yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Lt(t){return t=t.childContextTypes,t!=null}function qu(){Re(Ot),Re(wt)}function lv(t,e,n){if(wt.current!==Yr)throw Error(B(168));Ee(wt,e),Ee(Ot,n)}function cT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(B(108,Pk(t)||"Unknown",s));return xe({},n,r)}function Gu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yr,Ns=wt.current,Ee(wt,t),Ee(Ot,Ot.current),!0}function uv(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=cT(t,e,Ns),r.__reactInternalMemoizedMergedChildContext=t,Re(Ot),Re(wt),Ee(wt,t)):Re(Ot),Ee(Ot,n)}var $n=null,Gc=!1,Rd=!1;function hT(t){$n===null?$n=[t]:$n.push(t)}function GA(t){Gc=!0,hT(t)}function is(){if(!Rd&&$n!==null){Rd=!0;var t=0,e=me;try{var n=$n;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$n=null,Gc=!1}catch(s){throw $n!==null&&($n=$n.slice(t+1)),M0(rm,is),s}finally{me=e,Rd=!1}}return null}var di=[],fi=0,Ku=null,Qu=0,Jt=[],Zt=0,Ps=null,Hn=1,qn="";function fs(t,e){di[fi++]=Qu,di[fi++]=Ku,Ku=t,Qu=e}function dT(t,e,n){Jt[Zt++]=Hn,Jt[Zt++]=qn,Jt[Zt++]=Ps,Ps=t;var r=Hn;t=qn;var s=32-pn(r)-1;r&=~(1<<s),n+=1;var i=32-pn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Hn=1<<32-pn(e)+s|n<<s|r,qn=i+t}else Hn=1<<i|n<<s|r,qn=t}function dm(t){t.return!==null&&(fs(t,1),dT(t,1,0))}function fm(t){for(;t===Ku;)Ku=di[--fi],di[fi]=null,Qu=di[--fi],di[fi]=null;for(;t===Ps;)Ps=Jt[--Zt],Jt[Zt]=null,qn=Jt[--Zt],Jt[Zt]=null,Hn=Jt[--Zt],Jt[Zt]=null}var Gt=null,Wt=null,ke=!1,cn=null;function fT(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Gt=t,Wt=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Gt=t,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ps!==null?{id:Hn,overflow:qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Gt=t,Wt=null,!0):!1;default:return!1}}function Of(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lf(t){if(ke){var e=Wt;if(e){var n=e;if(!cv(t,e)){if(Of(t))throw Error(B(418));e=Mr(n.nextSibling);var r=Gt;e&&cv(t,e)?fT(r,n):(t.flags=t.flags&-4097|2,ke=!1,Gt=t)}}else{if(Of(t))throw Error(B(418));t.flags=t.flags&-4097|2,ke=!1,Gt=t}}}function hv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gt=t}function Jl(t){if(t!==Gt)return!1;if(!ke)return hv(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pf(t.type,t.memoizedProps)),e&&(e=Wt)){if(Of(t))throw pT(),Error(B(418));for(;e;)fT(t,e),e=Mr(e.nextSibling)}if(hv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wt=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wt=null}}else Wt=Gt?Mr(t.stateNode.nextSibling):null;return!0}function pT(){for(var t=Wt;t;)t=Mr(t.nextSibling)}function Di(){Wt=Gt=null,ke=!1}function pm(t){cn===null?cn=[t]:cn.push(t)}var KA=hr.ReactCurrentBatchConfig;function bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Zl(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dv(t){var e=t._init;return e(t._payload)}function mT(t){function e(E,y){if(t){var S=E.deletions;S===null?(E.deletions=[y],E.flags|=16):S.push(y)}}function n(E,y){if(!t)return null;for(;y!==null;)e(E,y),y=y.sibling;return null}function r(E,y){for(E=new Map;y!==null;)y.key!==null?E.set(y.key,y):E.set(y.index,y),y=y.sibling;return E}function s(E,y){return E=Ur(E,y),E.index=0,E.sibling=null,E}function i(E,y,S){return E.index=S,t?(S=E.alternate,S!==null?(S=S.index,S<y?(E.flags|=2,y):S):(E.flags|=2,y)):(E.flags|=1048576,y)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,y,S,b){return y===null||y.tag!==6?(y=Dd(S,E.mode,b),y.return=E,y):(y=s(y,S),y.return=E,y)}function u(E,y,S,b){var j=S.type;return j===oi?d(E,y,S.props.children,b,S.key):y!==null&&(y.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Er&&dv(j)===y.type)?(b=s(y,S.props),b.ref=bo(E,y,S),b.return=E,b):(b=ku(S.type,S.key,S.props,null,E.mode,b),b.ref=bo(E,y,S),b.return=E,b)}function c(E,y,S,b){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=Od(S,E.mode,b),y.return=E,y):(y=s(y,S.children||[]),y.return=E,y)}function d(E,y,S,b,j){return y===null||y.tag!==7?(y=Cs(S,E.mode,b,j),y.return=E,y):(y=s(y,S),y.return=E,y)}function f(E,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Dd(""+y,E.mode,S),y.return=E,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Bl:return S=ku(y.type,y.key,y.props,null,E.mode,S),S.ref=bo(E,null,y),S.return=E,S;case ii:return y=Od(y,E.mode,S),y.return=E,y;case Er:var b=y._init;return f(E,b(y._payload),S)}if(Ho(y)||ko(y))return y=Cs(y,E.mode,S,null),y.return=E,y;Zl(E,y)}return null}function g(E,y,S,b){var j=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:a(E,y,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Bl:return S.key===j?u(E,y,S,b):null;case ii:return S.key===j?c(E,y,S,b):null;case Er:return j=S._init,g(E,y,j(S._payload),b)}if(Ho(S)||ko(S))return j!==null?null:d(E,y,S,b,null);Zl(E,S)}return null}function _(E,y,S,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return E=E.get(S)||null,a(y,E,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Bl:return E=E.get(b.key===null?S:b.key)||null,u(y,E,b,j);case ii:return E=E.get(b.key===null?S:b.key)||null,c(y,E,b,j);case Er:var F=b._init;return _(E,y,S,F(b._payload),j)}if(Ho(b)||ko(b))return E=E.get(S)||null,d(y,E,b,j,null);Zl(y,b)}return null}function T(E,y,S,b){for(var j=null,F=null,R=y,w=y=0,C=null;R!==null&&w<S.length;w++){R.index>w?(C=R,R=null):C=R.sibling;var N=g(E,R,S[w],b);if(N===null){R===null&&(R=C);break}t&&R&&N.alternate===null&&e(E,R),y=i(N,y,w),F===null?j=N:F.sibling=N,F=N,R=C}if(w===S.length)return n(E,R),ke&&fs(E,w),j;if(R===null){for(;w<S.length;w++)R=f(E,S[w],b),R!==null&&(y=i(R,y,w),F===null?j=R:F.sibling=R,F=R);return ke&&fs(E,w),j}for(R=r(E,R);w<S.length;w++)C=_(R,E,w,S[w],b),C!==null&&(t&&C.alternate!==null&&R.delete(C.key===null?w:C.key),y=i(C,y,w),F===null?j=C:F.sibling=C,F=C);return t&&R.forEach(function(x){return e(E,x)}),ke&&fs(E,w),j}function I(E,y,S,b){var j=ko(S);if(typeof j!="function")throw Error(B(150));if(S=j.call(S),S==null)throw Error(B(151));for(var F=j=null,R=y,w=y=0,C=null,N=S.next();R!==null&&!N.done;w++,N=S.next()){R.index>w?(C=R,R=null):C=R.sibling;var x=g(E,R,N.value,b);if(x===null){R===null&&(R=C);break}t&&R&&x.alternate===null&&e(E,R),y=i(x,y,w),F===null?j=x:F.sibling=x,F=x,R=C}if(N.done)return n(E,R),ke&&fs(E,w),j;if(R===null){for(;!N.done;w++,N=S.next())N=f(E,N.value,b),N!==null&&(y=i(N,y,w),F===null?j=N:F.sibling=N,F=N);return ke&&fs(E,w),j}for(R=r(E,R);!N.done;w++,N=S.next())N=_(R,E,w,N.value,b),N!==null&&(t&&N.alternate!==null&&R.delete(N.key===null?w:N.key),y=i(N,y,w),F===null?j=N:F.sibling=N,F=N);return t&&R.forEach(function(P){return e(E,P)}),ke&&fs(E,w),j}function k(E,y,S,b){if(typeof S=="object"&&S!==null&&S.type===oi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Bl:e:{for(var j=S.key,F=y;F!==null;){if(F.key===j){if(j=S.type,j===oi){if(F.tag===7){n(E,F.sibling),y=s(F,S.props.children),y.return=E,E=y;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Er&&dv(j)===F.type){n(E,F.sibling),y=s(F,S.props),y.ref=bo(E,F,S),y.return=E,E=y;break e}n(E,F);break}else e(E,F);F=F.sibling}S.type===oi?(y=Cs(S.props.children,E.mode,b,S.key),y.return=E,E=y):(b=ku(S.type,S.key,S.props,null,E.mode,b),b.ref=bo(E,y,S),b.return=E,E=b)}return o(E);case ii:e:{for(F=S.key;y!==null;){if(y.key===F)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){n(E,y.sibling),y=s(y,S.children||[]),y.return=E,E=y;break e}else{n(E,y);break}else e(E,y);y=y.sibling}y=Od(S,E.mode,b),y.return=E,E=y}return o(E);case Er:return F=S._init,k(E,y,F(S._payload),b)}if(Ho(S))return T(E,y,S,b);if(ko(S))return I(E,y,S,b);Zl(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(n(E,y.sibling),y=s(y,S),y.return=E,E=y):(n(E,y),y=Dd(S,E.mode,b),y.return=E,E=y),o(E)):n(E,y)}return k}var Oi=mT(!0),gT=mT(!1),Yu=ss(null),Xu=null,pi=null,mm=null;function gm(){mm=pi=Xu=null}function _m(t){var e=Yu.current;Re(Yu),t._currentValue=e}function Mf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ti(t,e){Xu=t,mm=pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xt=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(mm!==t)if(t={context:t,memoizedValue:e,next:null},pi===null){if(Xu===null)throw Error(B(308));pi=t,Xu.dependencies={lanes:0,firstContext:t}}else pi=pi.next=t;return e}var ys=null;function ym(t){ys===null?ys=[t]:ys.push(t)}function _T(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,ym(e)):(n.next=s.next,s.next=n),e.interleaved=n,nr(t,r)}function nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Tr=!1;function vm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,nr(t,n)}return s=r.interleaved,s===null?(e.next=e,ym(r)):(e.next=s.next,s.next=e),r.interleaved=e,nr(t,n)}function Eu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sm(t,n)}}function fv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ju(t,e,n,r){var s=t.updateQueue;Tr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(i!==null){var f=s.baseState;o=0,d=c=u=null,a=i;do{var g=a.lane,_=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,I=a;switch(g=e,_=n,I.tag){case 1:if(T=I.payload,typeof T=="function"){f=T.call(_,f,g);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=I.payload,g=typeof T=="function"?T.call(_,f,g):T,g==null)break e;f=xe({},f,g);break e;case 2:Tr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[a]:g.push(a))}else _={eventTime:_,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=_,u=f):d=d.next=_,o|=g;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;g=a,a=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(d===null&&(u=f),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);bs|=o,t.lanes=o,t.memoizedState=f}}function pv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(B(191,s));s.call(r)}}}var il={},Rn=ss(il),Aa=ss(il),Na=ss(il);function vs(t){if(t===il)throw Error(B(174));return t}function wm(t,e){switch(Ee(Na,e),Ee(Aa,t),Ee(Rn,il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gf(e,t)}Re(Rn),Ee(Rn,e)}function Li(){Re(Rn),Re(Aa),Re(Na)}function vT(t){vs(Na.current);var e=vs(Rn.current),n=gf(e,t.type);e!==n&&(Ee(Aa,t),Ee(Rn,n))}function Em(t){Aa.current===t&&(Re(Rn),Re(Aa))}var Ae=ss(0);function Zu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kd=[];function Tm(){for(var t=0;t<kd.length;t++)kd[t]._workInProgressVersionPrimary=null;kd.length=0}var Tu=hr.ReactCurrentDispatcher,Ad=hr.ReactCurrentBatchConfig,xs=0,Ne=null,We=null,Xe=null,ec=!1,na=!1,Pa=0,QA=0;function ft(){throw Error(B(321))}function Im(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yn(t[n],e[n]))return!1;return!0}function Sm(t,e,n,r,s,i){if(xs=i,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tu.current=t===null||t.memoizedState===null?ZA:eN,t=n(r,s),na){i=0;do{if(na=!1,Pa=0,25<=i)throw Error(B(301));i+=1,Xe=We=null,e.updateQueue=null,Tu.current=tN,t=n(r,s)}while(na)}if(Tu.current=tc,e=We!==null&&We.next!==null,xs=0,Xe=We=Ne=null,ec=!1,e)throw Error(B(300));return t}function Cm(){var t=Pa!==0;return Pa=0,t}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Ne.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function sn(){if(We===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var e=Xe===null?Ne.memoizedState:Xe.next;if(e!==null)Xe=e,We=t;else{if(t===null)throw Error(B(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Xe===null?Ne.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function xa(t,e){return typeof e=="function"?e(t):e}function Nd(t){var e=sn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=We,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,u=null,c=i;do{var d=c.lane;if((xs&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Ne.lanes|=d,bs|=d}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=a,yn(r,e.memoizedState)||(xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ne.lanes|=i,bs|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pd(t){var e=sn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);yn(i,e.memoizedState)||(xt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function wT(){}function ET(t,e){var n=Ne,r=sn(),s=e(),i=!yn(r.memoizedState,s);if(i&&(r.memoizedState=s,xt=!0),r=r.queue,Rm(ST.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,ba(9,IT.bind(null,n,r,s,e),void 0,null),et===null)throw Error(B(349));xs&30||TT(n,e,s)}return s}function TT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function IT(t,e,n,r){e.value=n,e.getSnapshot=r,CT(e)&&RT(t)}function ST(t,e,n){return n(function(){CT(e)&&RT(t)})}function CT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yn(t,n)}catch{return!0}}function RT(t){var e=nr(t,1);e!==null&&mn(e,t,1,-1)}function mv(t){var e=En();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},e.queue=t,t=t.dispatch=JA.bind(null,Ne,t),[e.memoizedState,t]}function ba(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function kT(){return sn().memoizedState}function Iu(t,e,n,r){var s=En();Ne.flags|=t,s.memoizedState=ba(1|e,n,void 0,r===void 0?null:r)}function Kc(t,e,n,r){var s=sn();r=r===void 0?null:r;var i=void 0;if(We!==null){var o=We.memoizedState;if(i=o.destroy,r!==null&&Im(r,o.deps)){s.memoizedState=ba(e,n,i,r);return}}Ne.flags|=t,s.memoizedState=ba(1|e,n,i,r)}function gv(t,e){return Iu(8390656,8,t,e)}function Rm(t,e){return Kc(2048,8,t,e)}function AT(t,e){return Kc(4,2,t,e)}function NT(t,e){return Kc(4,4,t,e)}function PT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xT(t,e,n){return n=n!=null?n.concat([t]):null,Kc(4,4,PT.bind(null,e,t),n)}function km(){}function bT(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Im(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function DT(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Im(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function OT(t,e,n){return xs&21?(yn(n,e)||(n=F0(),Ne.lanes|=n,bs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xt=!0),t.memoizedState=n)}function YA(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=Ad.transition;Ad.transition={};try{t(!1),e()}finally{me=n,Ad.transition=r}}function LT(){return sn().memoizedState}function XA(t,e,n){var r=Fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},MT(t))VT(e,n);else if(n=_T(t,e,n,r),n!==null){var s=Rt();mn(n,t,r,s),jT(n,e,r)}}function JA(t,e,n){var r=Fr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(MT(t))VT(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,yn(a,o)){var u=e.interleaved;u===null?(s.next=s,ym(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=_T(t,e,s,r),n!==null&&(s=Rt(),mn(n,t,r,s),jT(n,e,r))}}function MT(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function VT(t,e){na=ec=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sm(t,n)}}var tc={readContext:rn,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},ZA={readContext:rn,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:gv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Iu(4194308,4,PT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Iu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Iu(4,2,t,e)},useMemo:function(t,e){var n=En();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=En();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=XA.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:mv,useDebugValue:km,useDeferredValue:function(t){return En().memoizedState=t},useTransition:function(){var t=mv(!1),e=t[0];return t=YA.bind(null,t[1]),En().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,s=En();if(ke){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),et===null)throw Error(B(349));xs&30||TT(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,gv(ST.bind(null,r,i,t),[t]),r.flags|=2048,ba(9,IT.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=En(),e=et.identifierPrefix;if(ke){var n=qn,r=Hn;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=QA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eN={readContext:rn,useCallback:bT,useContext:rn,useEffect:Rm,useImperativeHandle:xT,useInsertionEffect:AT,useLayoutEffect:NT,useMemo:DT,useReducer:Nd,useRef:kT,useState:function(){return Nd(xa)},useDebugValue:km,useDeferredValue:function(t){var e=sn();return OT(e,We.memoizedState,t)},useTransition:function(){var t=Nd(xa)[0],e=sn().memoizedState;return[t,e]},useMutableSource:wT,useSyncExternalStore:ET,useId:LT,unstable_isNewReconciler:!1},tN={readContext:rn,useCallback:bT,useContext:rn,useEffect:Rm,useImperativeHandle:xT,useInsertionEffect:AT,useLayoutEffect:NT,useMemo:DT,useReducer:Pd,useRef:kT,useState:function(){return Pd(xa)},useDebugValue:km,useDeferredValue:function(t){var e=sn();return We===null?e.memoizedState=t:OT(e,We.memoizedState,t)},useTransition:function(){var t=Pd(xa)[0],e=sn().memoizedState;return[t,e]},useMutableSource:wT,useSyncExternalStore:ET,useId:LT,unstable_isNewReconciler:!1};function ln(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Qc={isMounted:function(t){return(t=t._reactInternals)?Hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Rt(),s=Fr(t),i=Jn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Vr(t,i,s),e!==null&&(mn(e,t,s,r),Eu(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Rt(),s=Fr(t),i=Jn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Vr(t,i,s),e!==null&&(mn(e,t,s,r),Eu(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Rt(),r=Fr(t),s=Jn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Vr(t,s,r),e!==null&&(mn(e,t,r,n),Eu(e,t,r))}};function _v(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Sa(n,r)||!Sa(s,i):!0}function FT(t,e,n){var r=!1,s=Yr,i=e.contextType;return typeof i=="object"&&i!==null?i=rn(i):(s=Lt(e)?Ns:wt.current,r=e.contextTypes,i=(r=r!=null)?bi(t,s):Yr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Qc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function yv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Qc.enqueueReplaceState(e,e.state,null)}function jf(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},vm(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=rn(i):(i=Lt(e)?Ns:wt.current,s.context=bi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Vf(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Qc.enqueueReplaceState(s,s.state,null),Ju(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Mi(t,e){try{var n="",r=e;do n+=Nk(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function xd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ff(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nN=typeof WeakMap=="function"?WeakMap:Map;function UT(t,e,n){n=Jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){rc||(rc=!0,Qf=r),Ff(t,e)},n}function zT(t,e,n){n=Jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Ff(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ff(t,e),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new nN;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=gN.bind(null,t,e,n),e.then(t,t))}function wv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ev(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jn(-1,1),e.tag=2,Vr(n,e,1))),n.lanes|=1),t)}var rN=hr.ReactCurrentOwner,xt=!1;function Ct(t,e,n,r){e.child=t===null?gT(e,null,n,r):Oi(e,t.child,n,r)}function Tv(t,e,n,r,s){n=n.render;var i=e.ref;return Ti(e,s),r=Sm(t,e,n,r,i,s),n=Cm(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,rr(t,e,s)):(ke&&n&&dm(e),e.flags|=1,Ct(t,e,r,s),e.child)}function Iv(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Lm(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,BT(t,e,i,r,s)):(t=ku(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Sa,n(o,r)&&t.ref===e.ref)return rr(t,e,s)}return e.flags|=1,t=Ur(i,r),t.ref=e.ref,t.return=e,e.child=t}function BT(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Sa(i,r)&&t.ref===e.ref)if(xt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(xt=!0);else return e.lanes=t.lanes,rr(t,e,s)}return Uf(t,e,n,r,s)}function $T(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(gi,$t),$t|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(gi,$t),$t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ee(gi,$t),$t|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ee(gi,$t),$t|=r;return Ct(t,e,s,n),e.child}function WT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uf(t,e,n,r,s){var i=Lt(n)?Ns:wt.current;return i=bi(e,i),Ti(e,s),n=Sm(t,e,n,r,i,s),r=Cm(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,rr(t,e,s)):(ke&&r&&dm(e),e.flags|=1,Ct(t,e,n,s),e.child)}function Sv(t,e,n,r,s){if(Lt(n)){var i=!0;Gu(e)}else i=!1;if(Ti(e,s),e.stateNode===null)Su(t,e),FT(e,n,r),jf(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=rn(c):(c=Lt(n)?Ns:wt.current,c=bi(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&yv(e,o,r,c),Tr=!1;var g=e.memoizedState;o.state=g,Ju(e,r,o,s),u=e.memoizedState,a!==r||g!==u||Ot.current||Tr?(typeof d=="function"&&(Vf(e,n,d,r),u=e.memoizedState),(a=Tr||_v(e,n,a,r,g,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,yT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ln(e.type,a),o.props=c,f=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=rn(u):(u=Lt(n)?Ns:wt.current,u=bi(e,u));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||g!==u)&&yv(e,o,r,u),Tr=!1,g=e.memoizedState,o.state=g,Ju(e,r,o,s);var T=e.memoizedState;a!==f||g!==T||Ot.current||Tr?(typeof _=="function"&&(Vf(e,n,_,r),T=e.memoizedState),(c=Tr||_v(e,n,c,r,g,T,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return zf(t,e,n,r,i,s)}function zf(t,e,n,r,s,i){WT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&uv(e,n,!1),rr(t,e,i);r=e.stateNode,rN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Oi(e,t.child,null,i),e.child=Oi(e,null,a,i)):Ct(t,e,a,i),e.memoizedState=r.state,s&&uv(e,n,!0),e.child}function HT(t){var e=t.stateNode;e.pendingContext?lv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lv(t,e.context,!1),wm(t,e.containerInfo)}function Cv(t,e,n,r,s){return Di(),pm(s),e.flags|=256,Ct(t,e,n,r),e.child}var Bf={dehydrated:null,treeContext:null,retryLane:0};function $f(t){return{baseLanes:t,cachePool:null,transitions:null}}function qT(t,e,n){var r=e.pendingProps,s=Ae.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ee(Ae,s&1),t===null)return Lf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Jc(o,r,0,null),t=Cs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=$f(n),e.memoizedState=Bf,t):Am(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return sN(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ur(s,u),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Ur(a,i):(i=Cs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?$f(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Bf,r}return i=t.child,t=i.sibling,r=Ur(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Am(t,e){return e=Jc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function eu(t,e,n,r){return r!==null&&pm(r),Oi(e,t.child,null,n),t=Am(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sN(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=xd(Error(B(422))),eu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Jc({mode:"visible",children:r.children},s,0,null),i=Cs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Oi(e,t.child,null,o),e.child.memoizedState=$f(o),e.memoizedState=Bf,i);if(!(e.mode&1))return eu(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(B(419)),r=xd(i,r,void 0),eu(t,e,o,r)}if(a=(o&t.childLanes)!==0,xt||a){if(r=et,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,nr(t,s),mn(r,t,s,-1))}return Om(),r=xd(Error(B(421))),eu(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=_N.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Wt=Mr(s.nextSibling),Gt=e,ke=!0,cn=null,t!==null&&(Jt[Zt++]=Hn,Jt[Zt++]=qn,Jt[Zt++]=Ps,Hn=t.id,qn=t.overflow,Ps=e),e=Am(e,r.children),e.flags|=4096,e)}function Rv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Mf(t.return,e,n)}function bd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function GT(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Ct(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rv(t,n,e);else if(t.tag===19)Rv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Zu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),bd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Zu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}bd(e,!0,n,null,i);break;case"together":bd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Su(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iN(t,e,n){switch(e.tag){case 3:HT(e),Di();break;case 5:vT(e);break;case 1:Lt(e.type)&&Gu(e);break;case 4:wm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ee(Yu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?qT(t,e,n):(Ee(Ae,Ae.current&1),t=rr(t,e,n),t!==null?t.sibling:null);Ee(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return GT(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ee(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,$T(t,e,n)}return rr(t,e,n)}var KT,Wf,QT,YT;KT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wf=function(){};QT=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,vs(Rn.current);var i=null;switch(n){case"input":s=df(t,s),r=df(t,r),i=[];break;case"select":s=xe({},s,{value:void 0}),r=xe({},r,{value:void 0}),i=[];break;case"textarea":s=mf(t,s),r=mf(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Hu)}_f(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_a.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_a.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Se("scroll",t),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};YT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Do(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function oN(t,e,n){var r=e.pendingProps;switch(fm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return Lt(e.type)&&qu(),pt(e),null;case 3:return r=e.stateNode,Li(),Re(Ot),Re(wt),Tm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Jl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cn!==null&&(Jf(cn),cn=null))),Wf(t,e),pt(e),null;case 5:Em(e);var s=vs(Na.current);if(n=e.type,t!==null&&e.stateNode!=null)QT(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return pt(e),null}if(t=vs(Rn.current),Jl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Tn]=e,r[ka]=i,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(s=0;s<Go.length;s++)Se(Go[s],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":Ly(r,i),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Se("invalid",r);break;case"textarea":Vy(r,i),Se("invalid",r)}_f(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Xl(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Xl(r.textContent,a,t),s=["children",""+a]):_a.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":$l(r),My(r,i,!0);break;case"textarea":$l(r),jy(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Hu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=S0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tn]=e,t[ka]=r,KT(t,e,!1,!1),e.stateNode=t;e:{switch(o=yf(n,r),n){case"dialog":Se("cancel",t),Se("close",t),s=r;break;case"iframe":case"object":case"embed":Se("load",t),s=r;break;case"video":case"audio":for(s=0;s<Go.length;s++)Se(Go[s],t);s=r;break;case"source":Se("error",t),s=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),s=r;break;case"details":Se("toggle",t),s=r;break;case"input":Ly(t,r),s=df(t,r),Se("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=xe({},r,{value:void 0}),Se("invalid",t);break;case"textarea":Vy(t,r),s=mf(t,r),Se("invalid",t);break;default:s=r}_f(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?k0(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&C0(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ya(t,u):typeof u=="number"&&ya(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(_a.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Se("scroll",t):u!=null&&Jp(t,i,u,o))}switch(n){case"input":$l(t),My(t,r,!1);break;case"textarea":$l(t),jy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?yi(t,!!r.multiple,i,!1):r.defaultValue!=null&&yi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Hu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pt(e),null;case 6:if(t&&e.stateNode!=null)YT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=vs(Na.current),vs(Rn.current),Jl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tn]=e,(i=r.nodeValue!==n)&&(t=Gt,t!==null))switch(t.tag){case 3:Xl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tn]=e,e.stateNode=r}return pt(e),null;case 13:if(Re(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&Wt!==null&&e.mode&1&&!(e.flags&128))pT(),Di(),e.flags|=98560,i=!1;else if(i=Jl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(B(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[Tn]=e}else Di(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pt(e),i=!1}else cn!==null&&(Jf(cn),cn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?Ge===0&&(Ge=3):Om())),e.updateQueue!==null&&(e.flags|=4),pt(e),null);case 4:return Li(),Wf(t,e),t===null&&Ca(e.stateNode.containerInfo),pt(e),null;case 10:return _m(e.type._context),pt(e),null;case 17:return Lt(e.type)&&qu(),pt(e),null;case 19:if(Re(Ae),i=e.memoizedState,i===null)return pt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Do(i,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Zu(t),o!==null){for(e.flags|=128,Do(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(Ae,Ae.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ue()>Vi&&(e.flags|=128,r=!0,Do(i,!1),e.lanes=4194304)}else{if(!r)if(t=Zu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Do(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ke)return pt(e),null}else 2*Ue()-i.renderingStartTime>Vi&&n!==1073741824&&(e.flags|=128,r=!0,Do(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ue(),e.sibling=null,n=Ae.current,Ee(Ae,r?n&1|2:n&1),e):(pt(e),null);case 22:case 23:return Dm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?$t&1073741824&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function aN(t,e){switch(fm(e),e.tag){case 1:return Lt(e.type)&&qu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Li(),Re(Ot),Re(wt),Tm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Em(e),null;case 13:if(Re(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Di()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(Ae),null;case 4:return Li(),null;case 10:return _m(e.type._context),null;case 22:case 23:return Dm(),null;case 24:return null;default:return null}}var tu=!1,_t=!1,lN=typeof WeakSet=="function"?WeakSet:Set,q=null;function mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function Hf(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var kv=!1;function uN(t,e){if(Af=Bu,t=tT(),hm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,g=null;t:for(;;){for(var _;f!==n||s!==0&&f.nodeType!==3||(a=o+s),f!==i||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)g=f,f=_;for(;;){if(f===t)break t;if(g===n&&++c===s&&(a=o),g===i&&++d===r&&(u=o),(_=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nf={focusedElem:t,selectionRange:n},Bu=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var I=T.memoizedProps,k=T.memoizedState,E=e.stateNode,y=E.getSnapshotBeforeUpdate(e.elementType===e.type?I:ln(e.type,I),k);E.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(b){Oe(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return T=kv,kv=!1,T}function ra(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Hf(e,n,i)}s=s.next}while(s!==r)}}function Yc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function XT(t){var e=t.alternate;e!==null&&(t.alternate=null,XT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tn],delete e[ka],delete e[bf],delete e[HA],delete e[qA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function JT(t){return t.tag===5||t.tag===3||t.tag===4}function Av(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||JT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hu));else if(r!==4&&(t=t.child,t!==null))for(Gf(t,e,n),t=t.sibling;t!==null;)Gf(t,e,n),t=t.sibling}function Kf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Kf(t,e,n),t=t.sibling;t!==null;)Kf(t,e,n),t=t.sibling}var rt=null,un=!1;function vr(t,e,n){for(n=n.child;n!==null;)ZT(t,e,n),n=n.sibling}function ZT(t,e,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(Bc,n)}catch{}switch(n.tag){case 5:_t||mi(n,e);case 6:var r=rt,s=un;rt=null,vr(t,e,n),rt=r,un=s,rt!==null&&(un?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(un?(t=rt,n=n.stateNode,t.nodeType===8?Cd(t.parentNode,n):t.nodeType===1&&Cd(t,n),Ta(t)):Cd(rt,n.stateNode));break;case 4:r=rt,s=un,rt=n.stateNode.containerInfo,un=!0,vr(t,e,n),rt=r,un=s;break;case 0:case 11:case 14:case 15:if(!_t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Hf(n,e,o),s=s.next}while(s!==r)}vr(t,e,n);break;case 1:if(!_t&&(mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}vr(t,e,n);break;case 21:vr(t,e,n);break;case 22:n.mode&1?(_t=(r=_t)||n.memoizedState!==null,vr(t,e,n),_t=r):vr(t,e,n);break;default:vr(t,e,n)}}function Nv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lN),e.forEach(function(r){var s=yN.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function an(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rt=a.stateNode,un=!1;break e;case 3:rt=a.stateNode.containerInfo,un=!0;break e;case 4:rt=a.stateNode.containerInfo,un=!0;break e}a=a.return}if(rt===null)throw Error(B(160));ZT(i,o,s),rt=null,un=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Oe(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)eI(e,t),e=e.sibling}function eI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(an(e,t),vn(t),r&4){try{ra(3,t,t.return),Yc(3,t)}catch(I){Oe(t,t.return,I)}try{ra(5,t,t.return)}catch(I){Oe(t,t.return,I)}}break;case 1:an(e,t),vn(t),r&512&&n!==null&&mi(n,n.return);break;case 5:if(an(e,t),vn(t),r&512&&n!==null&&mi(n,n.return),t.flags&32){var s=t.stateNode;try{ya(s,"")}catch(I){Oe(t,t.return,I)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&T0(s,i),yf(a,o);var c=yf(a,i);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?k0(s,f):d==="dangerouslySetInnerHTML"?C0(s,f):d==="children"?ya(s,f):Jp(s,d,f,c)}switch(a){case"input":ff(s,i);break;case"textarea":I0(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?yi(s,!!i.multiple,_,!1):g!==!!i.multiple&&(i.defaultValue!=null?yi(s,!!i.multiple,i.defaultValue,!0):yi(s,!!i.multiple,i.multiple?[]:"",!1))}s[ka]=i}catch(I){Oe(t,t.return,I)}}break;case 6:if(an(e,t),vn(t),r&4){if(t.stateNode===null)throw Error(B(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(I){Oe(t,t.return,I)}}break;case 3:if(an(e,t),vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ta(e.containerInfo)}catch(I){Oe(t,t.return,I)}break;case 4:an(e,t),vn(t);break;case 13:an(e,t),vn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(xm=Ue())),r&4&&Nv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(_t=(c=_t)||d,an(e,t),_t=c):an(e,t),vn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(q=t,d=t.child;d!==null;){for(f=q=d;q!==null;){switch(g=q,_=g.child,g.tag){case 0:case 11:case 14:case 15:ra(4,g,g.return);break;case 1:mi(g,g.return);var T=g.stateNode;if(typeof T.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(I){Oe(r,n,I)}}break;case 5:mi(g,g.return);break;case 22:if(g.memoizedState!==null){xv(f);continue}}_!==null?(_.return=g,q=_):xv(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{s=f.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=R0("display",o))}catch(I){Oe(t,t.return,I)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(I){Oe(t,t.return,I)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:an(e,t),vn(t),r&4&&Nv(t);break;case 21:break;default:an(e,t),vn(t)}}function vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(JT(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ya(s,""),r.flags&=-33);var i=Av(t);Kf(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Av(t);Gf(t,a,o);break;default:throw Error(B(161))}}catch(u){Oe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cN(t,e,n){q=t,tI(t)}function tI(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||tu;if(!o){var a=s.alternate,u=a!==null&&a.memoizedState!==null||_t;a=tu;var c=_t;if(tu=o,(_t=u)&&!c)for(q=s;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?bv(s):u!==null?(u.return=o,q=u):bv(s);for(;i!==null;)q=i,tI(i),i=i.sibling;q=s,tu=a,_t=c}Pv(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):Pv(t)}}function Pv(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_t||Yc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:ln(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&pv(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ta(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}_t||e.flags&512&&qf(e)}catch(g){Oe(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function xv(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function bv(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yc(4,e)}catch(u){Oe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Oe(e,s,u)}}var i=e.return;try{qf(e)}catch(u){Oe(e,i,u)}break;case 5:var o=e.return;try{qf(e)}catch(u){Oe(e,o,u)}}}catch(u){Oe(e,e.return,u)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var hN=Math.ceil,nc=hr.ReactCurrentDispatcher,Nm=hr.ReactCurrentOwner,tn=hr.ReactCurrentBatchConfig,he=0,et=null,Be=null,ot=0,$t=0,gi=ss(0),Ge=0,Da=null,bs=0,Xc=0,Pm=0,sa=null,Nt=null,xm=0,Vi=1/0,Bn=null,rc=!1,Qf=null,jr=null,nu=!1,Pr=null,sc=0,ia=0,Yf=null,Cu=-1,Ru=0;function Rt(){return he&6?Ue():Cu!==-1?Cu:Cu=Ue()}function Fr(t){return t.mode&1?he&2&&ot!==0?ot&-ot:KA.transition!==null?(Ru===0&&(Ru=F0()),Ru):(t=me,t!==0||(t=window.event,t=t===void 0?16:q0(t.type)),t):1}function mn(t,e,n,r){if(50<ia)throw ia=0,Yf=null,Error(B(185));nl(t,n,r),(!(he&2)||t!==et)&&(t===et&&(!(he&2)&&(Xc|=n),Ge===4&&Sr(t,ot)),Mt(t,r),n===1&&he===0&&!(e.mode&1)&&(Vi=Ue()+500,Gc&&is()))}function Mt(t,e){var n=t.callbackNode;Kk(t,e);var r=zu(t,t===et?ot:0);if(r===0)n!==null&&zy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&zy(n),e===1)t.tag===0?GA(Dv.bind(null,t)):hT(Dv.bind(null,t)),$A(function(){!(he&6)&&is()}),n=null;else{switch(U0(r)){case 1:n=rm;break;case 4:n=V0;break;case 16:n=Uu;break;case 536870912:n=j0;break;default:n=Uu}n=uI(n,nI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function nI(t,e){if(Cu=-1,Ru=0,he&6)throw Error(B(327));var n=t.callbackNode;if(Ii()&&t.callbackNode!==n)return null;var r=zu(t,t===et?ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ic(t,r);else{e=r;var s=he;he|=2;var i=sI();(et!==t||ot!==e)&&(Bn=null,Vi=Ue()+500,Ss(t,e));do try{pN();break}catch(a){rI(t,a)}while(!0);gm(),nc.current=i,he=s,Be!==null?e=0:(et=null,ot=0,e=Ge)}if(e!==0){if(e===2&&(s=If(t),s!==0&&(r=s,e=Xf(t,s))),e===1)throw n=Da,Ss(t,0),Sr(t,r),Mt(t,Ue()),n;if(e===6)Sr(t,r);else{if(s=t.current.alternate,!(r&30)&&!dN(s)&&(e=ic(t,r),e===2&&(i=If(t),i!==0&&(r=i,e=Xf(t,i))),e===1))throw n=Da,Ss(t,0),Sr(t,r),Mt(t,Ue()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:ps(t,Nt,Bn);break;case 3:if(Sr(t,r),(r&130023424)===r&&(e=xm+500-Ue(),10<e)){if(zu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Rt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=xf(ps.bind(null,t,Nt,Bn),e);break}ps(t,Nt,Bn);break;case 4:if(Sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-pn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hN(r/1960))-r,10<r){t.timeoutHandle=xf(ps.bind(null,t,Nt,Bn),r);break}ps(t,Nt,Bn);break;case 5:ps(t,Nt,Bn);break;default:throw Error(B(329))}}}return Mt(t,Ue()),t.callbackNode===n?nI.bind(null,t):null}function Xf(t,e){var n=sa;return t.current.memoizedState.isDehydrated&&(Ss(t,e).flags|=256),t=ic(t,e),t!==2&&(e=Nt,Nt=n,e!==null&&Jf(e)),t}function Jf(t){Nt===null?Nt=t:Nt.push.apply(Nt,t)}function dN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!yn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~Pm,e&=~Xc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pn(e),r=1<<n;t[n]=-1,e&=~r}}function Dv(t){if(he&6)throw Error(B(327));Ii();var e=zu(t,0);if(!(e&1))return Mt(t,Ue()),null;var n=ic(t,e);if(t.tag!==0&&n===2){var r=If(t);r!==0&&(e=r,n=Xf(t,r))}if(n===1)throw n=Da,Ss(t,0),Sr(t,e),Mt(t,Ue()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ps(t,Nt,Bn),Mt(t,Ue()),null}function bm(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Vi=Ue()+500,Gc&&is())}}function Ds(t){Pr!==null&&Pr.tag===0&&!(he&6)&&Ii();var e=he;he|=1;var n=tn.transition,r=me;try{if(tn.transition=null,me=1,t)return t()}finally{me=r,tn.transition=n,he=e,!(he&6)&&is()}}function Dm(){$t=gi.current,Re(gi)}function Ss(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,BA(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(fm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qu();break;case 3:Li(),Re(Ot),Re(wt),Tm();break;case 5:Em(r);break;case 4:Li();break;case 13:Re(Ae);break;case 19:Re(Ae);break;case 10:_m(r.type._context);break;case 22:case 23:Dm()}n=n.return}if(et=t,Be=t=Ur(t.current,null),ot=$t=e,Ge=0,Da=null,Pm=Xc=bs=0,Nt=sa=null,ys!==null){for(e=0;e<ys.length;e++)if(n=ys[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}ys=null}return t}function rI(t,e){do{var n=Be;try{if(gm(),Tu.current=tc,ec){for(var r=Ne.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ec=!1}if(xs=0,Xe=We=Ne=null,na=!1,Pa=0,Nm.current=null,n===null||n.return===null){Ge=1,Da=e,Be=null;break}e:{var i=t,o=n.return,a=n,u=e;if(e=ot,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=wv(o);if(_!==null){_.flags&=-257,Ev(_,o,a,i,e),_.mode&1&&vv(i,c,e),e=_,u=c;var T=e.updateQueue;if(T===null){var I=new Set;I.add(u),e.updateQueue=I}else T.add(u);break e}else{if(!(e&1)){vv(i,c,e),Om();break e}u=Error(B(426))}}else if(ke&&a.mode&1){var k=wv(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Ev(k,o,a,i,e),pm(Mi(u,a));break e}}i=u=Mi(u,a),Ge!==4&&(Ge=2),sa===null?sa=[i]:sa.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var E=UT(i,u,e);fv(i,E);break e;case 1:a=u;var y=i.type,S=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(jr===null||!jr.has(S)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=zT(i,a,e);fv(i,b);break e}}i=i.return}while(i!==null)}oI(n)}catch(j){e=j,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function sI(){var t=nc.current;return nc.current=tc,t===null?tc:t}function Om(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),et===null||!(bs&268435455)&&!(Xc&268435455)||Sr(et,ot)}function ic(t,e){var n=he;he|=2;var r=sI();(et!==t||ot!==e)&&(Bn=null,Ss(t,e));do try{fN();break}catch(s){rI(t,s)}while(!0);if(gm(),he=n,nc.current=r,Be!==null)throw Error(B(261));return et=null,ot=0,Ge}function fN(){for(;Be!==null;)iI(Be)}function pN(){for(;Be!==null&&!Fk();)iI(Be)}function iI(t){var e=lI(t.alternate,t,$t);t.memoizedProps=t.pendingProps,e===null?oI(t):Be=e,Nm.current=null}function oI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=aN(n,e),n!==null){n.flags&=32767,Be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,Be=null;return}}else if(n=oN(n,e,$t),n!==null){Be=n;return}if(e=e.sibling,e!==null){Be=e;return}Be=e=t}while(e!==null);Ge===0&&(Ge=5)}function ps(t,e,n){var r=me,s=tn.transition;try{tn.transition=null,me=1,mN(t,e,n,r)}finally{tn.transition=s,me=r}return null}function mN(t,e,n,r){do Ii();while(Pr!==null);if(he&6)throw Error(B(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(Qk(t,i),t===et&&(Be=et=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nu||(nu=!0,uI(Uu,function(){return Ii(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=tn.transition,tn.transition=null;var o=me;me=1;var a=he;he|=4,Nm.current=null,uN(t,n),eI(n,t),LA(Nf),Bu=!!Af,Nf=Af=null,t.current=n,cN(n),Uk(),he=a,me=o,tn.transition=i}else t.current=n;if(nu&&(nu=!1,Pr=t,sc=s),i=t.pendingLanes,i===0&&(jr=null),$k(n.stateNode),Mt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(rc)throw rc=!1,t=Qf,Qf=null,t;return sc&1&&t.tag!==0&&Ii(),i=t.pendingLanes,i&1?t===Yf?ia++:(ia=0,Yf=t):ia=0,is(),null}function Ii(){if(Pr!==null){var t=U0(sc),e=tn.transition,n=me;try{if(tn.transition=null,me=16>t?16:t,Pr===null)var r=!1;else{if(t=Pr,Pr=null,sc=0,he&6)throw Error(B(331));var s=he;for(he|=4,q=t.current;q!==null;){var i=q,o=i.child;if(q.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:ra(8,d,i)}var f=d.child;if(f!==null)f.return=d,q=f;else for(;q!==null;){d=q;var g=d.sibling,_=d.return;if(XT(d),d===c){q=null;break}if(g!==null){g.return=_,q=g;break}q=_}}}var T=i.alternate;if(T!==null){var I=T.child;if(I!==null){T.child=null;do{var k=I.sibling;I.sibling=null,I=k}while(I!==null)}}q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,q=o;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ra(9,i,i.return)}var E=i.sibling;if(E!==null){E.return=i.return,q=E;break e}q=i.return}}var y=t.current;for(q=y;q!==null;){o=q;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,q=S;else e:for(o=y;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yc(9,a)}}catch(j){Oe(a,a.return,j)}if(a===o){q=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,q=b;break e}q=a.return}}if(he=s,is(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(Bc,t)}catch{}r=!0}return r}finally{me=n,tn.transition=e}}return!1}function Ov(t,e,n){e=Mi(n,e),e=UT(t,e,1),t=Vr(t,e,1),e=Rt(),t!==null&&(nl(t,1,e),Mt(t,e))}function Oe(t,e,n){if(t.tag===3)Ov(t,t,n);else for(;e!==null;){if(e.tag===3){Ov(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){t=Mi(n,t),t=zT(e,t,1),e=Vr(e,t,1),t=Rt(),e!==null&&(nl(e,1,t),Mt(e,t));break}}e=e.return}}function gN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Rt(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(ot&n)===n&&(Ge===4||Ge===3&&(ot&130023424)===ot&&500>Ue()-xm?Ss(t,0):Pm|=n),Mt(t,e)}function aI(t,e){e===0&&(t.mode&1?(e=ql,ql<<=1,!(ql&130023424)&&(ql=4194304)):e=1);var n=Rt();t=nr(t,e),t!==null&&(nl(t,e,n),Mt(t,n))}function _N(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),aI(t,n)}function yN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),aI(t,n)}var lI;lI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ot.current)xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xt=!1,iN(t,e,n);xt=!!(t.flags&131072)}else xt=!1,ke&&e.flags&1048576&&dT(e,Qu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Su(t,e),t=e.pendingProps;var s=bi(e,wt.current);Ti(e,n),s=Sm(null,e,r,t,s,n);var i=Cm();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Lt(r)?(i=!0,Gu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,vm(e),s.updater=Qc,e.stateNode=s,s._reactInternals=e,jf(e,r,t,n),e=zf(null,e,r,!0,i,n)):(e.tag=0,ke&&i&&dm(e),Ct(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Su(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=wN(r),t=ln(r,t),s){case 0:e=Uf(null,e,r,t,n);break e;case 1:e=Sv(null,e,r,t,n);break e;case 11:e=Tv(null,e,r,t,n);break e;case 14:e=Iv(null,e,r,ln(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),Uf(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),Sv(t,e,r,s,n);case 3:e:{if(HT(e),t===null)throw Error(B(387));r=e.pendingProps,i=e.memoizedState,s=i.element,yT(t,e),Ju(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Mi(Error(B(423)),e),e=Cv(t,e,r,n,s);break e}else if(r!==s){s=Mi(Error(B(424)),e),e=Cv(t,e,r,n,s);break e}else for(Wt=Mr(e.stateNode.containerInfo.firstChild),Gt=e,ke=!0,cn=null,n=gT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Di(),r===s){e=rr(t,e,n);break e}Ct(t,e,r,n)}e=e.child}return e;case 5:return vT(e),t===null&&Lf(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Pf(r,s)?o=null:i!==null&&Pf(r,i)&&(e.flags|=32),WT(t,e),Ct(t,e,o,n),e.child;case 6:return t===null&&Lf(e),null;case 13:return qT(t,e,n);case 4:return wm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Oi(e,null,r,n):Ct(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),Tv(t,e,r,s,n);case 7:return Ct(t,e,e.pendingProps,n),e.child;case 8:return Ct(t,e,e.pendingProps.children,n),e.child;case 12:return Ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ee(Yu,r._currentValue),r._currentValue=o,i!==null)if(yn(i.value,o)){if(i.children===s.children&&!Ot.current){e=rr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Jn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Mf(i.return,n,e),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Mf(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ct(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ti(e,n),s=rn(s),r=r(s),e.flags|=1,Ct(t,e,r,n),e.child;case 14:return r=e.type,s=ln(r,e.pendingProps),s=ln(r.type,s),Iv(t,e,r,s,n);case 15:return BT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),Su(t,e),e.tag=1,Lt(r)?(t=!0,Gu(e)):t=!1,Ti(e,n),FT(e,r,s),jf(e,r,s,n),zf(null,e,r,!0,t,n);case 19:return GT(t,e,n);case 22:return $T(t,e,n)}throw Error(B(156,e.tag))};function uI(t,e){return M0(t,e)}function vN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new vN(t,e,n,r)}function Lm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wN(t){if(typeof t=="function")return Lm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===em)return 11;if(t===tm)return 14}return 2}function Ur(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ku(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Lm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case oi:return Cs(n.children,s,i,e);case Zp:o=8,s|=8;break;case lf:return t=en(12,n,e,s|2),t.elementType=lf,t.lanes=i,t;case uf:return t=en(13,n,e,s),t.elementType=uf,t.lanes=i,t;case cf:return t=en(19,n,e,s),t.elementType=cf,t.lanes=i,t;case v0:return Jc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _0:o=10;break e;case y0:o=9;break e;case em:o=11;break e;case tm:o=14;break e;case Er:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=en(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Cs(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function Jc(t,e,n,r){return t=en(22,t,r,e),t.elementType=v0,t.lanes=n,t.stateNode={isHidden:!1},t}function Dd(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Od(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function EN(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pd(0),this.expirationTimes=pd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Mm(t,e,n,r,s,i,o,a,u){return t=new EN(t,e,n,a,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=en(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vm(i),t}function TN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function cI(t){if(!t)return Yr;t=t._reactInternals;e:{if(Hs(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Lt(n))return cT(t,n,e)}return e}function hI(t,e,n,r,s,i,o,a,u){return t=Mm(n,r,!0,t,s,i,o,a,u),t.context=cI(null),n=t.current,r=Rt(),s=Fr(n),i=Jn(r,s),i.callback=e??null,Vr(n,i,s),t.current.lanes=s,nl(t,s,r),Mt(t,r),t}function Zc(t,e,n,r){var s=e.current,i=Rt(),o=Fr(s);return n=cI(n),e.context===null?e.context=n:e.pendingContext=n,e=Jn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Vr(s,e,o),t!==null&&(mn(t,s,o,i),Eu(t,s,o)),o}function oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vm(t,e){Lv(t,e),(t=t.alternate)&&Lv(t,e)}function IN(){return null}var dI=typeof reportError=="function"?reportError:function(t){console.error(t)};function jm(t){this._internalRoot=t}eh.prototype.render=jm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Zc(t,e,null,null)};eh.prototype.unmount=jm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ds(function(){Zc(null,t,null,null)}),e[tr]=null}};function eh(t){this._internalRoot=t}eh.prototype.unstable_scheduleHydration=function(t){if(t){var e=$0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ir.length&&e!==0&&e<Ir[n].priority;n++);Ir.splice(n,0,t),n===0&&H0(t)}};function Fm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mv(){}function SN(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=oc(o);i.call(c)}}var o=hI(e,r,t,0,null,!1,!1,"",Mv);return t._reactRootContainer=o,t[tr]=o.current,Ca(t.nodeType===8?t.parentNode:t),Ds(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var c=oc(u);a.call(c)}}var u=Mm(t,0,!1,null,null,!1,!1,"",Mv);return t._reactRootContainer=u,t[tr]=u.current,Ca(t.nodeType===8?t.parentNode:t),Ds(function(){Zc(e,u,n,r)}),u}function nh(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var u=oc(o);a.call(u)}}Zc(e,o,t,s)}else o=SN(n,e,t,s,r);return oc(o)}z0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qo(e.pendingLanes);n!==0&&(sm(e,n|1),Mt(e,Ue()),!(he&6)&&(Vi=Ue()+500,is()))}break;case 13:Ds(function(){var r=nr(t,1);if(r!==null){var s=Rt();mn(r,t,1,s)}}),Vm(t,1)}};im=function(t){if(t.tag===13){var e=nr(t,134217728);if(e!==null){var n=Rt();mn(e,t,134217728,n)}Vm(t,134217728)}};B0=function(t){if(t.tag===13){var e=Fr(t),n=nr(t,e);if(n!==null){var r=Rt();mn(n,t,e,r)}Vm(t,e)}};$0=function(){return me};W0=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};wf=function(t,e,n){switch(e){case"input":if(ff(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=qc(r);if(!s)throw Error(B(90));E0(r),ff(r,s)}}}break;case"textarea":I0(t,n);break;case"select":e=n.value,e!=null&&yi(t,!!n.multiple,e,!1)}};P0=bm;x0=Ds;var CN={usingClientEntryPoint:!1,Events:[sl,ci,qc,A0,N0,bm]},Oo={findFiberByHostInstance:_s,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RN={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=O0(t),t===null?null:t.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||IN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{Bc=ru.inject(RN),Cn=ru}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CN;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fm(e))throw Error(B(200));return TN(t,e,null,n)};Yt.createRoot=function(t,e){if(!Fm(t))throw Error(B(299));var n=!1,r="",s=dI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Mm(t,1,!1,null,null,n,!1,r,s),t[tr]=e.current,Ca(t.nodeType===8?t.parentNode:t),new jm(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=O0(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return Ds(t)};Yt.hydrate=function(t,e,n){if(!th(e))throw Error(B(200));return nh(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!Fm(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=dI;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=hI(e,null,t,1,n??null,s,!1,i,o),t[tr]=e.current,Ca(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new eh(e)};Yt.render=function(t,e,n){if(!th(e))throw Error(B(200));return nh(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!th(t))throw Error(B(40));return t._reactRootContainer?(Ds(function(){nh(null,null,t,!1,function(){t._reactRootContainer=null,t[tr]=null})}),!0):!1};Yt.unstable_batchedUpdates=bm;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!th(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return nh(t,e,n,!1,r)};Yt.version="18.3.1-next-f1338f8080-20240426";function fI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fI)}catch(t){console.error(t)}}fI(),f0.exports=Yt;var kN=f0.exports,Vv=kN;of.createRoot=Vv.createRoot,of.hydrateRoot=Vv.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oa.apply(this,arguments)}var xr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(xr||(xr={}));const jv="popstate";function AN(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return Zf("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:ac(s)}return PN(e,n,null,t)}function Pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Um(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function NN(){return Math.random().toString(36).substr(2,8)}function Fv(t,e){return{usr:t.state,key:t.key,idx:e}}function Zf(t,e,n,r){return n===void 0&&(n=null),Oa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?to(e):e,{state:n,key:e&&e.key||r||NN()})}function ac(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function to(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function PN(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=xr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Oa({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=xr.Pop;let k=d(),E=k==null?null:k-c;c=k,u&&u({action:a,location:I.location,delta:E})}function g(k,E){a=xr.Push;let y=Zf(I.location,k,E);c=d()+1;let S=Fv(y,c),b=I.createHref(y);try{o.pushState(S,"",b)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;s.location.assign(b)}i&&u&&u({action:a,location:I.location,delta:1})}function _(k,E){a=xr.Replace;let y=Zf(I.location,k,E);c=d();let S=Fv(y,c),b=I.createHref(y);o.replaceState(S,"",b),i&&u&&u({action:a,location:I.location,delta:0})}function T(k){let E=s.location.origin!=="null"?s.location.origin:s.location.href,y=typeof k=="string"?k:ac(k);return y=y.replace(/ $/,"%20"),Pe(E,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,E)}let I={get action(){return a},get location(){return t(s,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(jv,f),u=k,()=>{s.removeEventListener(jv,f),u=null}},createHref(k){return e(s,k)},createURL:T,encodeLocation(k){let E=T(k);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:g,replace:_,go(k){return o.go(k)}};return I}var Uv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Uv||(Uv={}));function xN(t,e,n){return n===void 0&&(n="/"),bN(t,e,n)}function bN(t,e,n,r){let s=typeof e=="string"?to(e):e,i=ji(s.pathname||"/",n);if(i==null)return null;let o=pI(t);DN(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=WN(i);a=BN(o[u],c)}return a}function pI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(Pe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=zr([r,u.relativePath]),d=n.concat(u);i.children&&i.children.length>0&&(Pe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),pI(i.children,e,d,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:UN(c,i.index),routesMeta:d})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let u of mI(i.path))s(i,o,u)}),e}function mI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=mI(r.join("/")),a=[];return a.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function DN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:zN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ON=/^:[\w-]+$/,LN=3,MN=2,VN=1,jN=10,FN=-2,zv=t=>t==="*";function UN(t,e){let n=t.split("/"),r=n.length;return n.some(zv)&&(r+=FN),e&&(r+=MN),n.filter(s=>!zv(s)).reduce((s,i)=>s+(ON.test(i)?LN:i===""?VN:jN),r)}function zN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function BN(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=i==="/"?e:e.slice(i.length)||"/",f=ep({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),g=u.route;if(!f)return null;Object.assign(s,f.params),o.push({params:s,pathname:zr([i,f.pathname]),pathnameBase:QN(zr([i,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(i=zr([i,f.pathnameBase]))}return o}function ep(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=$N(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:g,isOptional:_}=d;if(g==="*"){let I=a[f]||"";o=i.slice(0,i.length-I.length).replace(/(.)\/+$/,"$1")}const T=a[f];return _&&!T?c[g]=void 0:c[g]=(T||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:t}}function $N(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Um(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function WN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Um(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ji(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const HN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qN=t=>HN.test(t);function GN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?to(t):t,i;if(n)if(qN(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Um(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=Bv(n.substring(1),"/"):i=Bv(n,e)}else i=e;return{pathname:i,search:YN(r),hash:XN(s)}}function Bv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Ld(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function KN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function zm(t,e){let n=KN(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Bm(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=to(t):(s=Oa({},t),Pe(!s.pathname||!s.pathname.includes("?"),Ld("?","pathname","search",s)),Pe(!s.pathname||!s.pathname.includes("#"),Ld("#","pathname","hash",s)),Pe(!s.search||!s.search.includes("#"),Ld("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;s.pathname=g.join("/")}a=f>=0?e[f]:"/"}let u=GN(s,a),c=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const zr=t=>t.join("/").replace(/\/\/+/g,"/"),QN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),YN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,XN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function JN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const gI=["post","put","patch","delete"];new Set(gI);const ZN=["get",...gI];new Set(ZN);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function La(){return La=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},La.apply(this,arguments)}const rh=O.createContext(null),_I=O.createContext(null),dr=O.createContext(null),sh=O.createContext(null),fr=O.createContext({outlet:null,matches:[],isDataRoute:!1}),yI=O.createContext(null);function eP(t,e){let{relative:n}=e===void 0?{}:e;no()||Pe(!1);let{basename:r,navigator:s}=O.useContext(dr),{hash:i,pathname:o,search:a}=ih(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:zr([r,o])),s.createHref({pathname:u,search:a,hash:i})}function no(){return O.useContext(sh)!=null}function ro(){return no()||Pe(!1),O.useContext(sh).location}function vI(t){O.useContext(dr).static||O.useLayoutEffect(t)}function On(){let{isDataRoute:t}=O.useContext(fr);return t?fP():tP()}function tP(){no()||Pe(!1);let t=O.useContext(rh),{basename:e,future:n,navigator:r}=O.useContext(dr),{matches:s}=O.useContext(fr),{pathname:i}=ro(),o=JSON.stringify(zm(s,n.v7_relativeSplatPath)),a=O.useRef(!1);return vI(()=>{a.current=!0}),O.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Bm(c,JSON.parse(o),i,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:zr([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,i,t])}function $m(){let{matches:t}=O.useContext(fr),e=t[t.length-1];return e?e.params:{}}function ih(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(dr),{matches:s}=O.useContext(fr),{pathname:i}=ro(),o=JSON.stringify(zm(s,r.v7_relativeSplatPath));return O.useMemo(()=>Bm(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function nP(t,e){return rP(t,e)}function rP(t,e,n,r){no()||Pe(!1);let{navigator:s}=O.useContext(dr),{matches:i}=O.useContext(fr),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ro(),d;if(e){var f;let k=typeof e=="string"?to(e):e;u==="/"||(f=k.pathname)!=null&&f.startsWith(u)||Pe(!1),d=k}else d=c;let g=d.pathname||"/",_=g;if(u!=="/"){let k=u.replace(/^\//,"").split("/");_="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let T=xN(t,{pathname:_}),I=lP(T&&T.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:zr([u,s.encodeLocation?s.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:zr([u,s.encodeLocation?s.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return e&&I?O.createElement(sh.Provider,{value:{location:La({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:xr.Pop}},I):I}function sP(){let t=dP(),e=JN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:s},n):null,null)}const iP=O.createElement(sP,null);class oP extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(fr.Provider,{value:this.props.routeContext},O.createElement(yI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function aP(t){let{routeContext:e,match:n,children:r}=t,s=O.useContext(rh);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(fr.Provider,{value:e},r)}function lP(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(s=n)==null?void 0:s.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Pe(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:g,errors:_}=n,T=f.route.loader&&g[f.route.id]===void 0&&(!_||_[f.route.id]===void 0);if(f.route.lazy||T){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,g)=>{let _,T=!1,I=null,k=null;n&&(_=a&&f.route.id?a[f.route.id]:void 0,I=f.route.errorElement||iP,u&&(c<0&&g===0?(pP("route-fallback"),T=!0,k=null):c===g&&(T=!0,k=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,g+1)),y=()=>{let S;return _?S=I:T?S=k:f.route.Component?S=O.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=d,O.createElement(aP,{match:f,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?O.createElement(oP,{location:n.location,revalidation:n.revalidation,component:I,error:_,children:y(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):y()},null)}var wI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(wI||{}),EI=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(EI||{});function uP(t){let e=O.useContext(rh);return e||Pe(!1),e}function cP(t){let e=O.useContext(_I);return e||Pe(!1),e}function hP(t){let e=O.useContext(fr);return e||Pe(!1),e}function TI(t){let e=hP(),n=e.matches[e.matches.length-1];return n.route.id||Pe(!1),n.route.id}function dP(){var t;let e=O.useContext(yI),n=cP(),r=TI();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function fP(){let{router:t}=uP(wI.UseNavigateStable),e=TI(EI.UseNavigateStable),n=O.useRef(!1);return vI(()=>{n.current=!0}),O.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,La({fromRouteId:e},i)))},[t,e])}const $v={};function pP(t,e,n){$v[t]||($v[t]=!0)}function mP(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function II(t){let{to:e,replace:n,state:r,relative:s}=t;no()||Pe(!1);let{future:i,static:o}=O.useContext(dr),{matches:a}=O.useContext(fr),{pathname:u}=ro(),c=On(),d=Bm(e,zm(a,i.v7_relativeSplatPath),u,s==="path"),f=JSON.stringify(d);return O.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:s}),[c,f,s,n,r]),null}function wn(t){Pe(!1)}function gP(t){let{basename:e="/",children:n=null,location:r,navigationType:s=xr.Pop,navigator:i,static:o=!1,future:a}=t;no()&&Pe(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:i,static:o,future:La({v7_relativeSplatPath:!1},a)}),[u,a,i,o]);typeof r=="string"&&(r=to(r));let{pathname:d="/",search:f="",hash:g="",state:_=null,key:T="default"}=r,I=O.useMemo(()=>{let k=ji(d,u);return k==null?null:{location:{pathname:k,search:f,hash:g,state:_,key:T},navigationType:s}},[u,d,f,g,_,T,s]);return I==null?null:O.createElement(dr.Provider,{value:c},O.createElement(sh.Provider,{children:n,value:I}))}function _P(t){let{children:e,location:n}=t;return nP(tp(e),n)}new Promise(()=>{});function tp(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,s)=>{if(!O.isValidElement(r))return;let i=[...e,s];if(r.type===O.Fragment){n.push.apply(n,tp(r.props.children,i));return}r.type!==wn&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=tp(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lc(){return lc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},lc.apply(this,arguments)}function SI(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function yP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function vP(t,e){return t.button===0&&(!e||e==="_self")&&!yP(t)}const wP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],EP=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],TP="6";try{window.__reactRouterVersion=TP}catch{}const IP=O.createContext({isTransitioning:!1}),SP="startTransition",Wv=gk[SP];function CP(t){let{basename:e,children:n,future:r,window:s}=t,i=O.useRef();i.current==null&&(i.current=AN({window:s,v5Compat:!0}));let o=i.current,[a,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=O.useCallback(f=>{c&&Wv?Wv(()=>u(f)):u(f)},[u,c]);return O.useLayoutEffect(()=>o.listen(d),[o,d]),O.useEffect(()=>mP(r),[r]),O.createElement(gP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const RP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,AP=O.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:a,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,g=SI(e,wP),{basename:_}=O.useContext(dr),T,I=!1;if(typeof c=="string"&&kP.test(c)&&(T=c,RP))try{let S=new URL(window.location.href),b=c.startsWith("//")?new URL(S.protocol+c):new URL(c),j=ji(b.pathname,_);b.origin===S.origin&&j!=null?c=j+b.search+b.hash:I=!0}catch{}let k=eP(c,{relative:s}),E=xP(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:s,viewTransition:f});function y(S){r&&r(S),S.defaultPrevented||E(S)}return O.createElement("a",lc({},g,{href:T||k,onClick:I||i?r:y,ref:n,target:u}))}),NP=O.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:o=!1,style:a,to:u,viewTransition:c,children:d}=e,f=SI(e,EP),g=ih(u,{relative:f.relative}),_=ro(),T=O.useContext(_I),{navigator:I,basename:k}=O.useContext(dr),E=T!=null&&bP(g)&&c===!0,y=I.encodeLocation?I.encodeLocation(g).pathname:g.pathname,S=_.pathname,b=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;s||(S=S.toLowerCase(),b=b?b.toLowerCase():null,y=y.toLowerCase()),b&&k&&(b=ji(b,k)||b);const j=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let F=S===y||!o&&S.startsWith(y)&&S.charAt(j)==="/",R=b!=null&&(b===y||!o&&b.startsWith(y)&&b.charAt(y.length)==="/"),w={isActive:F,isPending:R,isTransitioning:E},C=F?r:void 0,N;typeof i=="function"?N=i(w):N=[i,F?"active":null,R?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let x=typeof a=="function"?a(w):a;return O.createElement(AP,lc({},f,{"aria-current":C,className:N,ref:n,style:x,to:u,viewTransition:c}),typeof d=="function"?d(w):d)});var np;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(np||(np={}));var Hv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Hv||(Hv={}));function PP(t){let e=O.useContext(rh);return e||Pe(!1),e}function xP(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:a}=e===void 0?{}:e,u=On(),c=ro(),d=ih(t,{relative:o});return O.useCallback(f=>{if(vP(f,n)){f.preventDefault();let g=r!==void 0?r:ac(c)===ac(d);u(t,{replace:g,state:s,preventScrollReset:i,relative:o,viewTransition:a})}},[c,u,d,r,s,n,t,i,o,a])}function bP(t,e){e===void 0&&(e={});let n=O.useContext(IP);n==null&&Pe(!1);let{basename:r}=PP(np.useViewTransitionState),s=ih(t,{relative:e.relative});if(!n.isTransitioning)return!1;let i=ji(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ji(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ep(s.pathname,o)!=null||ep(s.pathname,i)!=null}const DP={},qv=t=>{let e;const n=new Set,r=(d,f)=>{const g=typeof d=="function"?d(e):d;if(!Object.is(g,e)){const _=e;e=f??(typeof g!="object"||g===null)?g:Object.assign({},e,g),n.forEach(T=>T(e,_))}},s=()=>e,u={setState:r,getState:s,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(DP?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,s,u);return u},OP=t=>t?qv(t):qv;var CI={exports:{}},RI={},kI={exports:{}},AI={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fi=O;function LP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var MP=typeof Object.is=="function"?Object.is:LP,VP=Fi.useState,jP=Fi.useEffect,FP=Fi.useLayoutEffect,UP=Fi.useDebugValue;function zP(t,e){var n=e(),r=VP({inst:{value:n,getSnapshot:e}}),s=r[0].inst,i=r[1];return FP(function(){s.value=n,s.getSnapshot=e,Md(s)&&i({inst:s})},[t,n,e]),jP(function(){return Md(s)&&i({inst:s}),t(function(){Md(s)&&i({inst:s})})},[t]),UP(n),n}function Md(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!MP(t,n)}catch{return!0}}function BP(t,e){return e()}var $P=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?BP:zP;AI.useSyncExternalStore=Fi.useSyncExternalStore!==void 0?Fi.useSyncExternalStore:$P;kI.exports=AI;var WP=kI.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh=O,HP=WP;function qP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var GP=typeof Object.is=="function"?Object.is:qP,KP=HP.useSyncExternalStore,QP=oh.useRef,YP=oh.useEffect,XP=oh.useMemo,JP=oh.useDebugValue;RI.useSyncExternalStoreWithSelector=function(t,e,n,r,s){var i=QP(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=XP(function(){function u(_){if(!c){if(c=!0,d=_,_=r(_),s!==void 0&&o.hasValue){var T=o.value;if(s(T,_))return f=T}return f=_}if(T=f,GP(d,_))return T;var I=r(_);return s!==void 0&&s(T,I)?(d=_,T):(d=_,f=I)}var c=!1,d,f,g=n===void 0?null:n;return[function(){return u(e())},g===null?void 0:function(){return u(g())}]},[e,n,r,s]);var a=KP(t,i[0],i[1]);return YP(function(){o.hasValue=!0,o.value=a},[a]),JP(a),a};CI.exports=RI;var ZP=CI.exports;const ex=t0(ZP),NI={},{useDebugValue:tx}=Qp,{useSyncExternalStoreWithSelector:nx}=ex;let Gv=!1;const rx=t=>t;function sx(t,e=rx,n){(NI?"production":void 0)!=="production"&&n&&!Gv&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Gv=!0);const r=nx(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return tx(r),r}const Kv=t=>{(NI?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?OP(t):t,n=(r,s)=>sx(e,r,s);return Object.assign(n,e),n},Wm=t=>t?Kv(t):Kv,ix={};function ox(t,e){let n;try{n=t()}catch{return}return{getItem:s=>{var i;const o=u=>u===null?null:JSON.parse(u,void 0),a=(i=n.getItem(s))!=null?i:null;return a instanceof Promise?a.then(o):o(a)},setItem:(s,i)=>n.setItem(s,JSON.stringify(i,void 0)),removeItem:s=>n.removeItem(s)}}const Ma=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return Ma(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return Ma(r)(n)}}}},ax=(t,e)=>(n,r,s)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:k=>k,version:0,merge:(k,E)=>({...E,...k}),...e},o=!1;const a=new Set,u=new Set;let c;try{c=i.getStorage()}catch{}if(!c)return t((...k)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...k)},r,s);const d=Ma(i.serialize),f=()=>{const k=i.partialize({...r()});let E;const y=d({state:k,version:i.version}).then(S=>c.setItem(i.name,S)).catch(S=>{E=S});if(E)throw E;return y},g=s.setState;s.setState=(k,E)=>{g(k,E),f()};const _=t((...k)=>{n(...k),f()},r,s);let T;const I=()=>{var k;if(!c)return;o=!1,a.forEach(y=>y(r()));const E=((k=i.onRehydrateStorage)==null?void 0:k.call(i,r()))||void 0;return Ma(c.getItem.bind(c))(i.name).then(y=>{if(y)return i.deserialize(y)}).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==i.version){if(i.migrate)return i.migrate(y.state,y.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return y.state}).then(y=>{var S;return T=i.merge(y,(S=r())!=null?S:_),n(T,!0),f()}).then(()=>{E==null||E(T,void 0),o=!0,u.forEach(y=>y(T))}).catch(y=>{E==null||E(void 0,y)})};return s.persist={setOptions:k=>{i={...i,...k},k.getStorage&&(c=k.getStorage())},clearStorage:()=>{c==null||c.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>I(),hasHydrated:()=>o,onHydrate:k=>(a.add(k),()=>{a.delete(k)}),onFinishHydration:k=>(u.add(k),()=>{u.delete(k)})},I(),T||_},lx=(t,e)=>(n,r,s)=>{let i={storage:ox(()=>localStorage),partialize:I=>I,version:0,merge:(I,k)=>({...k,...I}),...e},o=!1;const a=new Set,u=new Set;let c=i.storage;if(!c)return t((...I)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...I)},r,s);const d=()=>{const I=i.partialize({...r()});return c.setItem(i.name,{state:I,version:i.version})},f=s.setState;s.setState=(I,k)=>{f(I,k),d()};const g=t((...I)=>{n(...I),d()},r,s);s.getInitialState=()=>g;let _;const T=()=>{var I,k;if(!c)return;o=!1,a.forEach(y=>{var S;return y((S=r())!=null?S:g)});const E=((k=i.onRehydrateStorage)==null?void 0:k.call(i,(I=r())!=null?I:g))||void 0;return Ma(c.getItem.bind(c))(i.name).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==i.version){if(i.migrate)return[!0,i.migrate(y.state,y.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,y.state];return[!1,void 0]}).then(y=>{var S;const[b,j]=y;if(_=i.merge(j,(S=r())!=null?S:g),n(_,!0),b)return d()}).then(()=>{E==null||E(_,void 0),_=r(),o=!0,u.forEach(y=>y(_))}).catch(y=>{E==null||E(void 0,y)})};return s.persist={setOptions:I=>{i={...i,...I},I.storage&&(c=I.storage)},clearStorage:()=>{c==null||c.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>T(),hasHydrated:()=>o,onHydrate:I=>(a.add(I),()=>{a.delete(I)}),onFinishHydration:I=>(u.add(I),()=>{u.delete(I)})},i.skipHydration||T(),_||g},ux=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((ix?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),ax(t,e)):lx(t,e),cx=ux,pr=Wm(cx((t,e)=>({user:null,userProfile:null,isAuthenticated:!1,isLoading:!0,setUser:n=>t({user:n,isAuthenticated:!!n}),setUserProfile:n=>t({userProfile:n}),setLoading:n=>t({isLoading:n}),logout:()=>t({user:null,userProfile:null,isAuthenticated:!1})}),{name:"dreamledge-auth",partialize:t=>({user:t.user,isAuthenticated:t.isAuthenticated})})),Hm=Wm((t,e)=>({currentBattle:null,participants:[],battlePhase:"idle",round:1,timeRemaining:0,isHost:!1,userRole:null,userSlot:null,setCurrentBattle:n=>t({currentBattle:n}),setParticipants:n=>t({participants:n}),setBattlePhase:n=>t({battlePhase:n}),setRound:n=>t({round:n}),setTimeRemaining:n=>t({timeRemaining:n}),setIsHost:n=>t({isHost:n}),setUserRole:n=>t({userRole:n}),setUserSlot:n=>t({userSlot:n}),resetBattle:()=>t({currentBattle:null,participants:[],battlePhase:"idle",round:1,timeRemaining:0,isHost:!1,userRole:null,userSlot:null})})),ah=Wm(t=>({isSidebarOpen:!1,isGifPickerOpen:!1,activeModal:null,notifications:[],toggleSidebar:()=>t(e=>({isSidebarOpen:!e.isSidebarOpen})),closeSidebar:()=>t({isSidebarOpen:!1}),toggleGifPicker:()=>t(e=>({isGifPickerOpen:!e.isGifPickerOpen})),closeGifPicker:()=>t({isGifPickerOpen:!1}),openModal:e=>t({activeModal:e}),closeModal:()=>t({activeModal:null}),addNotification:e=>t(n=>({notifications:[...n.notifications,{id:Date.now(),...e}]})),removeNotification:e=>t(n=>({notifications:n.notifications.filter(r=>r.id!==e)}))}));/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),te=(t,e)=>{const n=O.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:a="",children:u,...c},d)=>O.createElement("svg",{ref:d,...hx,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${dx(t)}`,a].join(" "),...c},[...e.map(([f,g])=>O.createElement(f,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=te("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=te("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=te("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=te("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=te("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=te("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=te("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=te("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=te("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=te("Gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=te("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=te("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=te("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=te("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=te("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=te("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PI=te("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=te("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xI=te("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=te("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=te("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=te("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=te("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=te("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bI=te("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=te("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DI=te("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=te("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=te("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=te("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=te("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=te("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OI=te("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=te("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=te("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=te("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=te("VideoOff",[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8",key:"ubwiq0"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z",key:"1l10zd"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LI=te("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=te("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=te("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=te("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Dx(){const{isAuthenticated:t,logout:e}=pr(),{closeSidebar:n}=ah(),r=On(),s=()=>{e(),r("/"),n()},i=[{path:"/lobby",icon:Ex,label:"Arena"},{path:"/leaderboard",icon:Km,label:"Rank"},{path:"/messages",icon:xI,label:"Messages"},{path:"/profile",icon:Qm,label:"Profile"}];return p.jsx(p.Fragment,{children:t&&p.jsxs("div",{className:"mobile-nav",children:[i.map(o=>p.jsxs(NP,{to:o.path,className:({isActive:a})=>`mobile-nav-item ${a?"active":""}`,children:[p.jsx(o.icon,{size:24}),p.jsx("span",{children:o.label})]},o.path)),p.jsxs("button",{onClick:s,className:"mobile-nav-item mobile-logout",children:[p.jsx(Sx,{size:24}),p.jsx("span",{children:"Out"})]})]})})}var Zv={};/**
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
 */const MI={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const $=function(t,e){if(!t)throw so(e)},so=function(t){return new Error("Firebase Database ("+MI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const VI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ox=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ym={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,d=i>>2,f=(i&3)<<4|a>>4;let g=(a&15)<<2|c>>6,_=c&63;u||(_=64,o||(g=64)),r.push(n[d],n[f],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(VI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ox(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw new Lx;const g=i<<2|a>>4;if(r.push(g),c!==64){const _=a<<4&240|c>>2;if(r.push(_),f!==64){const T=c<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Lx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jI=function(t){const e=VI(t);return Ym.encodeByteArray(e,!0)},cc=function(t){return jI(t).replace(/\./g,"")},hc=function(t){try{return Ym.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Mx(t){return FI(void 0,t)}function FI(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Vx(n)||(t[n]=FI(t[n],e[n]));return t}function Vx(t){return t!=="__proto__"}/**
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
 */function jx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fx=()=>jx().__FIREBASE_DEFAULTS__,Ux=()=>{if(typeof process>"u"||typeof Zv>"u")return;const t=Zv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hc(t[1]);return e&&JSON.parse(e)},lh=()=>{try{return Fx()||Ux()||zx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},UI=t=>{var e,n;return(n=(e=lh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xm=t=>{const e=UI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},zI=()=>{var t;return(t=lh())===null||t===void 0?void 0:t.config},BI=t=>{var e;return(e=lh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class uh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Jm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[cc(JSON.stringify(n)),cc(JSON.stringify(o)),""].join(".")}/**
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
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function Bx(){var t;const e=(t=lh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $x(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Wx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $I(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hx(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qx(){return MI.NODE_ADMIN===!0}function Gx(){return!Bx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kx(){try{return typeof indexedDB=="object"}catch{return!1}}function Qx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Yx="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Yx,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,al.prototype.create)}}class al{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Xx(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ln(s,a,r)}}function Xx(t,e){return t.replace(Jx,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Jx=/\{\$([^}]+)}/g;/**
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
 */function Va(t){return JSON.parse(t)}function Ze(t){return JSON.stringify(t)}/**
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
 */const WI=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Va(hc(i[0])||""),n=Va(hc(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},Zx=function(t){const e=WI(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},e2=function(t){const e=WI(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function mr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ui(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ip(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dc(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function fc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ew(i)&&ew(o)){if(!fc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ew(t){return t!==null&&typeof t=="object"}/**
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
 */function io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class t2{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const g=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(g<<1|g>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^i&(o^a),d=1518500249):(c=i^o^a,d=1859775393):f<60?(c=i&o|a&(i|o),d=2400959708):(c=i^o^a,d=3395469782);const g=(s<<5|s>>>27)+c+u+d+r[f]&4294967295;u=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=g}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function n2(t,e){const n=new r2(t,e);return n.subscribe.bind(n)}class r2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");s2(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=jd),s.error===void 0&&(s.error=jd),s.complete===void 0&&(s.complete=jd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function s2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jd(){}function eg(t,e){return`${t} failed: ${e} argument `}/**
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
 */const i2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,$(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ch=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function be(t){return t&&t._delegate?t._delegate:t}class sr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ms="[DEFAULT]";/**
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
 */class o2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(l2(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:a2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function a2(t){return t===ms?void 0:t}function l2(t){return t.instantiationMode==="EAGER"}/**
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
 */class u2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new o2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const c2={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},h2=le.INFO,d2={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},f2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=d2[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hh{constructor(e){this.name=e,this._logLevel=h2,this._logHandler=f2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?c2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const p2=(t,e)=>e.some(n=>t instanceof n);let tw,nw;function m2(){return tw||(tw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function g2(){return nw||(nw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const HI=new WeakMap,op=new WeakMap,qI=new WeakMap,Fd=new WeakMap,tg=new WeakMap;function _2(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Wr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&HI.set(n,t)}).catch(()=>{}),tg.set(e,t),e}function y2(t){if(op.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});op.set(t,e)}let ap={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return op.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function v2(t){ap=t(ap)}function w2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ud(this),e,...n);return qI.set(r,e.sort?e.sort():[e]),Wr(r)}:g2().includes(t)?function(...e){return t.apply(Ud(this),e),Wr(HI.get(this))}:function(...e){return Wr(t.apply(Ud(this),e))}}function E2(t){return typeof t=="function"?w2(t):(t instanceof IDBTransaction&&y2(t),p2(t,m2())?new Proxy(t,ap):t)}function Wr(t){if(t instanceof IDBRequest)return _2(t);if(Fd.has(t))return Fd.get(t);const e=E2(t);return e!==t&&(Fd.set(t,e),tg.set(e,t)),e}const Ud=t=>tg.get(t);function T2(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Wr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Wr(o.result),u.oldVersion,u.newVersion,Wr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const I2=["get","getKey","getAll","getAllKeys","count"],S2=["put","add","delete","clear"],zd=new Map;function rw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zd.get(e))return zd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=S2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||I2.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&u.done]))[0]};return zd.set(e,i),i}v2(t=>({...t,get:(e,n,r)=>rw(e,n)||t.get(e,n,r),has:(e,n)=>!!rw(e,n)||t.has(e,n)}));/**
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
 */class C2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(R2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function R2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lp="@firebase/app",sw="0.10.13";/**
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
 */const ir=new hh("@firebase/app"),k2="@firebase/app-compat",A2="@firebase/analytics-compat",N2="@firebase/analytics",P2="@firebase/app-check-compat",x2="@firebase/app-check",b2="@firebase/auth",D2="@firebase/auth-compat",O2="@firebase/database",L2="@firebase/data-connect",M2="@firebase/database-compat",V2="@firebase/functions",j2="@firebase/functions-compat",F2="@firebase/installations",U2="@firebase/installations-compat",z2="@firebase/messaging",B2="@firebase/messaging-compat",$2="@firebase/performance",W2="@firebase/performance-compat",H2="@firebase/remote-config",q2="@firebase/remote-config-compat",G2="@firebase/storage",K2="@firebase/storage-compat",Q2="@firebase/firestore",Y2="@firebase/vertexai-preview",X2="@firebase/firestore-compat",J2="firebase",Z2="10.14.1";/**
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
 */const up="[DEFAULT]",eb={[lp]:"fire-core",[k2]:"fire-core-compat",[N2]:"fire-analytics",[A2]:"fire-analytics-compat",[x2]:"fire-app-check",[P2]:"fire-app-check-compat",[b2]:"fire-auth",[D2]:"fire-auth-compat",[O2]:"fire-rtdb",[L2]:"fire-data-connect",[M2]:"fire-rtdb-compat",[V2]:"fire-fn",[j2]:"fire-fn-compat",[F2]:"fire-iid",[U2]:"fire-iid-compat",[z2]:"fire-fcm",[B2]:"fire-fcm-compat",[$2]:"fire-perf",[W2]:"fire-perf-compat",[H2]:"fire-rc",[q2]:"fire-rc-compat",[G2]:"fire-gcs",[K2]:"fire-gcs-compat",[Q2]:"fire-fst",[X2]:"fire-fst-compat",[Y2]:"fire-vertex","fire-js":"fire-js",[J2]:"fire-js-all"};/**
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
 */const pc=new Map,tb=new Map,cp=new Map;function iw(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xr(t){const e=t.name;if(cp.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;cp.set(e,t);for(const n of pc.values())iw(n,t);for(const n of tb.values())iw(n,t);return!0}function ll(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Gn(t){return t.settings!==void 0}/**
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
 */const nb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Hr=new al("app","Firebase",nb);/**
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
 */class rb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hr.create("app-deleted",{appName:this._name})}}/**
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
 */const os=Z2;function GI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:up,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Hr.create("bad-app-name",{appName:String(s)});if(n||(n=zI()),!n)throw Hr.create("no-options");const i=pc.get(s);if(i){if(fc(n,i.options)&&fc(r,i.config))return i;throw Hr.create("duplicate-app",{appName:s})}const o=new u2(s);for(const u of cp.values())o.addComponent(u);const a=new rb(n,r,o);return pc.set(s,a),a}function dh(t=up){const e=pc.get(t);if(!e&&t===up&&zI())return GI();if(!e)throw Hr.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let s=(r=eb[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(a.join(" "));return}Xr(new sr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const sb="firebase-heartbeat-database",ib=1,ja="firebase-heartbeat-store";let Bd=null;function KI(){return Bd||(Bd=T2(sb,ib,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ja)}catch(n){console.warn(n)}}}}).catch(t=>{throw Hr.create("idb-open",{originalErrorMessage:t.message})})),Bd}async function ob(t){try{const n=(await KI()).transaction(ja),r=await n.objectStore(ja).get(QI(t));return await n.done,r}catch(e){if(e instanceof Ln)ir.warn(e.message);else{const n=Hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(n.message)}}}async function ow(t,e){try{const r=(await KI()).transaction(ja,"readwrite");await r.objectStore(ja).put(e,QI(t)),await r.done}catch(n){if(n instanceof Ln)ir.warn(n.message);else{const r=Hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ir.warn(r.message)}}}function QI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ab=1024,lb=30*24*60*60*1e3;class ub{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=aw();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=lb}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=aw(),{heartbeatsToSend:r,unsentEntries:s}=cb(this._heartbeatsCache.heartbeats),i=cc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ir.warn(n),""}}}function aw(){return new Date().toISOString().substring(0,10)}function cb(t,e=ab){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),lw(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),lw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kx()?Qx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ob(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ow(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ow(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function lw(t){return cc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function db(t){Xr(new sr("platform-logger",e=>new C2(e),"PRIVATE")),Xr(new sr("heartbeat",e=>new ub(e),"PRIVATE")),nn(lp,sw,t),nn(lp,sw,"esm2017"),nn("fire-js","")}db("");var fb="firebase",pb="10.14.1";/**
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
 */nn(fb,pb,"app");function ng(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function YI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mb=YI,XI=new al("auth","Firebase",YI());/**
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
 */const mc=new hh("@firebase/auth");function gb(t,...e){mc.logLevel<=le.WARN&&mc.warn(`Auth (${os}): ${t}`,...e)}function Au(t,...e){mc.logLevel<=le.ERROR&&mc.error(`Auth (${os}): ${t}`,...e)}/**
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
 */function xn(t,...e){throw sg(t,...e)}function gn(t,...e){return sg(t,...e)}function rg(t,e,n){const r=Object.assign(Object.assign({},mb()),{[e]:n});return new al("auth","Firebase",r).create(e,{appName:t.name})}function Rs(t){return rg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _b(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&xn(t,"argument-error"),rg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return XI.create(t,...e)}function X(t,e,...n){if(!t)throw sg(e,...n)}function Kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Au(e),new Error(e)}function or(t,e){t||Kn(e)}/**
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
 */function hp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yb(){return uw()==="http:"||uw()==="https:"}function uw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function vb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yb()||Wx()||"connection"in navigator)?navigator.onLine:!0}function wb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ul{constructor(e,n){this.shortDelay=e,this.longDelay=n,or(n>e,"Short delay should be less than long delay!"),this.isMobile=Zm()||$I()}get(){return vb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ig(t,e){or(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class JI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Eb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Tb=new ul(3e4,6e4);function og(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function oo(t,e,n,r,s={}){return ZI(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=io(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},i);return $x()||(c.referrerPolicy="no-referrer"),JI.fetch()(eS(t,t.config.apiHost,n,a),c)})}async function ZI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Eb),e);try{const s=new Sb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw su(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw su(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw su(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw su(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw rg(t,d,c);xn(t,d)}}catch(s){if(s instanceof Ln)throw s;xn(t,"network-request-failed",{message:String(s)})}}async function Ib(t,e,n,r,s={}){const i=await oo(t,e,n,r,s);return"mfaPendingCredential"in i&&xn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function eS(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ig(t.config,s):`${t.config.apiScheme}://${s}`}class Sb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),Tb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function su(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=gn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Cb(t,e){return oo(t,"POST","/v1/accounts:delete",e)}async function tS(t,e){return oo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function oa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rb(t,e=!1){const n=be(t),r=await n.getIdToken(e),s=ag(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:oa($d(s.auth_time)),issuedAtTime:oa($d(s.iat)),expirationTime:oa($d(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $d(t){return Number(t)*1e3}function ag(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Au("JWT malformed, contained fewer than 3 sections"),null;try{const s=hc(n);return s?JSON.parse(s):(Au("Failed to decode base64 JWT payload"),null)}catch(s){return Au("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function cw(t){const e=ag(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&kb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ab{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oa(this.lastLoginAt),this.creationTime=oa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Fa(t,tS(n,{idToken:r}));X(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?nS(i.providerUserInfo):[],a=Pb(t.providerData,o),u=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new dp(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function Nb(t){const e=be(t);await gc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Pb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function nS(t){return t.map(e=>{var{providerId:n}=e,r=ng(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function xb(t,e){const n=await ZI(t,{},async()=>{const r=io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=eS(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",JI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bb(t,e){return oo(t,"POST","/v2/accounts:revokeToken",og(t,e))}/**
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
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=cw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await xb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Si;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
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
 */function wr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ng(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ab(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fa(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Rb(this,e)}reload(){return Nb(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gn(this.auth.app))return Promise.reject(Rs(this.auth));const e=await this.getIdToken();return await Fa(this,Cb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:b,isAnonymous:j,providerData:F,stsTokenManager:R}=n;X(S&&R,e,"internal-error");const w=Si.fromJSON(this.name,R);X(typeof S=="string",e,"internal-error"),wr(f,e.name),wr(g,e.name),X(typeof b=="boolean",e,"internal-error"),X(typeof j=="boolean",e,"internal-error"),wr(_,e.name),wr(T,e.name),wr(I,e.name),wr(k,e.name),wr(E,e.name),wr(y,e.name);const C=new Qn({uid:S,auth:e,email:g,emailVerified:b,displayName:f,isAnonymous:j,photoURL:T,phoneNumber:_,tenantId:I,stsTokenManager:w,createdAt:E,lastLoginAt:y});return F&&Array.isArray(F)&&(C.providerData=F.map(N=>Object.assign({},N))),k&&(C._redirectEventId=k),C}static async _fromIdTokenResponse(e,n,r=!1){const s=new Si;s.updateFromServerResponse(n);const i=new Qn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await gc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?nS(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Si;a.updateFromIdToken(r);const u=new Qn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new dp(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
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
 */const hw=new Map;function Yn(t){or(t instanceof Function,"Expected a class definition");let e=hw.get(t);return e?(or(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hw.set(t,e),e)}/**
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
 */class rS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rS.type="NONE";const dw=rS;/**
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
 */function Nu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ci{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Nu(this.userKey,s.apiKey,i),this.fullPersistenceKey=Nu("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ci(Yn(dw),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Yn(dw);const o=Nu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Qn._fromJSON(e,d);c!==i&&(a=f),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Ci(i,e,r):(i=u[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Ci(i,e,r))}}/**
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
 */function fw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(aS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uS(e))return"Blackberry";if(cS(e))return"Webos";if(iS(e))return"Safari";if((e.includes("chrome/")||oS(e))&&!e.includes("edge/"))return"Chrome";if(lS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sS(t=Et()){return/firefox\//i.test(t)}function iS(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oS(t=Et()){return/crios\//i.test(t)}function aS(t=Et()){return/iemobile/i.test(t)}function lS(t=Et()){return/android/i.test(t)}function uS(t=Et()){return/blackberry/i.test(t)}function cS(t=Et()){return/webos/i.test(t)}function lg(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Db(t=Et()){var e;return lg(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ob(){return Hx()&&document.documentMode===10}function hS(t=Et()){return lg(t)||lS(t)||cS(t)||uS(t)||/windows phone/i.test(t)||aS(t)}/**
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
 */function dS(t,e=[]){let n;switch(t){case"Browser":n=fw(Et());break;case"Worker":n=`${fw(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${os}/${r}`}/**
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
 */class Lb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const u=e(i);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Mb(t,e={}){return oo(t,"GET","/v2/passwordPolicy",og(t,e))}/**
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
 */const Vb=6;class jb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Vb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Fb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pw(this),this.idTokenSubscription=new pw(this),this.beforeStateQueue=new Lb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=XI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ci.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await tS(this,{idToken:e}),r=await Qn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Gn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gn(this.app))return Promise.reject(Rs(this));const n=e?be(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gn(this.app)?Promise.reject(Rs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gn(this.app)?Promise.reject(Rs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Mb(this),n=new jb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new al("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Ci.create(this,[Yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fh(t){return be(t)}class pw{constructor(e){this.auth=e,this.observer=null,this.addObserver=n2(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ug={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ub(t){ug=t}function zb(t){return ug.loadJS(t)}function Bb(){return ug.gapiScript}function $b(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Wb(t,e){const n=ll(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(fc(i,e??{}))return s;xn(s,"already-initialized")}return n.initialize({options:e})}function Hb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qb(t,e,n){const r=fh(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=fS(e),{host:o,port:a}=Gb(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Kb()}function fS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Gb(t){const e=fS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:mw(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:mw(o)}}}function mw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Kb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class pS{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kn("not implemented")}_getIdTokenResponse(e){return Kn("not implemented")}_linkToIdToken(e,n){return Kn("not implemented")}_getReauthenticationResolver(e){return Kn("not implemented")}}/**
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
 */async function Ri(t,e){return Ib(t,"POST","/v1/accounts:signInWithIdp",og(t,e))}/**
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
 */const Qb="http://localhost";class Os extends pS{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ng(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Os(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ri(e,n)}buildRequest(){const e={requestUri:Qb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=io(n)}return e}}/**
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
 */class cg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class cl extends cg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Cr extends cl{constructor(){super("facebook.com")}static credential(e){return Os._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cr.PROVIDER_ID="facebook.com";/**
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
 */class Wn extends cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Os._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.GOOGLE_SIGN_IN_METHOD="google.com";Wn.PROVIDER_ID="google.com";/**
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
 */class Rr extends cl{constructor(){super("github.com")}static credential(e){return Os._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.GITHUB_SIGN_IN_METHOD="github.com";Rr.PROVIDER_ID="github.com";/**
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
 */class kr extends cl{constructor(){super("twitter.com")}static credential(e,n){return Os._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kr.credential(n,r)}catch{return null}}}kr.TWITTER_SIGN_IN_METHOD="twitter.com";kr.PROVIDER_ID="twitter.com";/**
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
 */class zi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Qn._fromIdTokenResponse(e,r,s),o=gw(r);return new zi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=gw(r);return new zi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function gw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class _c extends Ln{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_c.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _c(e,n,r,s)}}function mS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_c._fromErrorAndOperation(t,i,e,r):i})}async function Yb(t,e,n=!1){const r=await Fa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zi._forOperation(t,"link",r)}/**
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
 */async function Xb(t,e,n=!1){const{auth:r}=t;if(Gn(r.app))return Promise.reject(Rs(r));const s="reauthenticate";try{const i=await Fa(t,mS(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=ag(i.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),zi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&xn(r,"user-mismatch"),i}}/**
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
 */async function Jb(t,e,n=!1){if(Gn(t.app))return Promise.reject(Rs(t));const r="signIn",s=await mS(t,r,e),i=await zi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Zb(t,e,n,r){return be(t).onIdTokenChanged(e,n,r)}function eD(t,e,n){return be(t).beforeAuthStateChanged(e,n)}const yc="__sak";/**
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
 */class gS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yc,"1"),this.storage.removeItem(yc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const tD=1e3,nD=10;class _S extends gS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Ob()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,nD):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_S.type="LOCAL";const rD=_S;/**
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
 */class yS extends gS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yS.type="SESSION";const vS=yS;/**
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
 */function sD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ph{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ph(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),u=await sD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ph.receivers=[];/**
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
 */function hg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class iD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,u)=>{const c=hg("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const g=f;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(d),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function kn(){return window}function oD(t){kn().location.href=t}/**
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
 */function wS(){return typeof kn().WorkerGlobalScope<"u"&&typeof kn().importScripts=="function"}async function aD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uD(){return wS()?self:null}/**
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
 */const ES="firebaseLocalStorageDb",cD=1,vc="firebaseLocalStorage",TS="fbase_key";class hl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mh(t,e){return t.transaction([vc],e?"readwrite":"readonly").objectStore(vc)}function hD(){const t=indexedDB.deleteDatabase(ES);return new hl(t).toPromise()}function fp(){const t=indexedDB.open(ES,cD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vc,{keyPath:TS})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vc)?e(r):(r.close(),await hD(),e(await fp()))})})}async function _w(t,e,n){const r=mh(t,!0).put({[TS]:e,value:n});return new hl(r).toPromise()}async function dD(t,e){const n=mh(t,!1).get(e),r=await new hl(n).toPromise();return r===void 0?null:r.value}function yw(t,e){const n=mh(t,!0).delete(e);return new hl(n).toPromise()}const fD=800,pD=3;class IS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ph._getInstance(uD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aD(),!this.activeServiceWorker)return;this.sender=new iD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fp();return await _w(e,yc,"1"),await yw(e,yc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_w(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=mh(s,!1).getAll();return new hl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}IS.type="LOCAL";const mD=IS;new ul(3e4,6e4);/**
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
 */function SS(t,e){return e?Yn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class dg extends pS{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gD(t){return Jb(t.auth,new dg(t),t.bypassAuthState)}function _D(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Xb(n,new dg(t),t.bypassAuthState)}async function yD(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Yb(n,new dg(t),t.bypassAuthState)}/**
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
 */class CS{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gD;case"linkViaPopup":case"linkViaRedirect":return yD;case"reauthViaPopup":case"reauthViaRedirect":return _D;default:xn(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vD=new ul(2e3,1e4);async function wD(t,e,n){if(Gn(t.app))return Promise.reject(gn(t,"operation-not-supported-in-this-environment"));const r=fh(t);_b(t,e,cg);const s=SS(r,n);return new ws(r,"signInViaPopup",e,s).executeNotNull()}class ws extends CS{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ws.currentPopupAction&&ws.currentPopupAction.cancel(),ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=hg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vD.get())};e()}}ws.currentPopupAction=null;/**
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
 */const ED="pendingRedirect",Pu=new Map;class TD extends CS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Pu.get(this.auth._key());if(!e){try{const r=await ID(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Pu.set(this.auth._key(),e)}return this.bypassAuthState||Pu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ID(t,e){const n=RD(e),r=CD(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function SD(t,e){Pu.set(t._key(),e)}function CD(t){return Yn(t._redirectPersistence)}function RD(t){return Nu(ED,t.config.apiKey,t.name)}async function kD(t,e,n=!1){if(Gn(t.app))return Promise.reject(Rs(t));const r=fh(t),s=SS(r,e),o=await new TD(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const AD=10*60*1e3;class ND{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!RS(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AD&&this.cachedEventUids.clear(),this.cachedEventUids.has(vw(e))}saveEventToCache(e){this.cachedEventUids.add(vw(e)),this.lastProcessedEventTime=Date.now()}}function vw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function RS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RS(t);default:return!1}}/**
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
 */async function xD(t,e={}){return oo(t,"GET","/v1/projects",e)}/**
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
 */const bD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DD=/^https?/;async function OD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xD(t);for(const n of e)try{if(LD(n))return}catch{}xn(t,"unauthorized-domain")}function LD(t){const e=hp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!DD.test(n))return!1;if(bD.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const MD=new ul(3e4,6e4);function ww(){const t=kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function VD(t){return new Promise((e,n)=>{var r,s,i;function o(){ww(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ww(),n(gn(t,"network-request-failed"))},timeout:MD.get()})}if(!((s=(r=kn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=kn().gapi)===null||i===void 0)&&i.load)o();else{const a=$b("iframefcb");return kn()[a]=()=>{gapi.load?o():n(gn(t,"network-request-failed"))},zb(`${Bb()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw xu=null,e})}let xu=null;function jD(t){return xu=xu||VD(t),xu}/**
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
 */const FD=new ul(5e3,15e3),UD="__/auth/iframe",zD="emulator/auth/iframe",BD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$D=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WD(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ig(e,zD):`https://${t.config.authDomain}/${UD}`,r={apiKey:e.apiKey,appName:t.name,v:os},s=$D.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${io(r).slice(1)}`}async function HD(t){const e=await jD(t),n=kn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:WD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BD,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),a=kn().setTimeout(()=>{i(o)},FD.get());function u(){kn().clearTimeout(a),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const qD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GD=500,KD=600,QD="_blank",YD="http://localhost";class Ew{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XD(t,e,n,r=GD,s=KD){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},qD),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Et().toLowerCase();n&&(a=oS(c)?QD:n),sS(c)&&(e=e||YD,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[_,T])=>`${g}${_}=${T},`,"");if(Db(c)&&a!=="_self")return JD(e||"",a),new Ew(null);const f=window.open(e||"",a,d);X(f,t,"popup-blocked");try{f.focus()}catch{}return new Ew(f)}function JD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ZD="__/auth/handler",eO="emulator/auth/handler",tO=encodeURIComponent("fac");async function Tw(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:os,eventId:s};if(e instanceof cg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ip(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof cl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${tO}=${encodeURIComponent(u)}`:"";return`${nO(t)}?${io(a).slice(1)}${c}`}function nO({config:t}){return t.emulator?ig(t,eO):`https://${t.authDomain}/${ZD}`}/**
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
 */const Wd="webStorageSupport";class rO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vS,this._completeRedirectFn=kD,this._overrideRedirectResult=SD}async _openPopup(e,n,r,s){var i;or((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Tw(e,n,r,hp(),s);return XD(e,o,hg())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Tw(e,n,r,hp(),s);return oD(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(or(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HD(e),r=new ND(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wd,{type:Wd},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Wd];o!==void 0&&n(!!o),xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hS()||iS()||lg()}}const sO=rO;var Iw="@firebase/auth",Sw="1.7.9";/**
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
 */class iO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aO(t){Xr(new sr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dS(t)},c=new Fb(r,s,i,u);return Hb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xr(new sr("auth-internal",e=>{const n=fh(e.getProvider("auth").getImmediate());return(r=>new iO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(Iw,Sw,oO(t)),nn(Iw,Sw,"esm2017")}/**
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
 */const lO=5*60,uO=BI("authIdTokenMaxAge")||lO;let Cw=null;const cO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uO)return;const s=n==null?void 0:n.token;Cw!==s&&(Cw=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hO(t=dh()){const e=ll(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Wb(t,{popupRedirectResolver:sO,persistence:[mD,rD,vS]}),r=BI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=cO(i.toString());eD(n,o,()=>o(n.currentUser)),Zb(n,a=>o(a))}}const s=UI("auth");return s&&qb(n,`http://${s}`),n}function dO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ub({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=gn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",dO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aO("Browser");var Rw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ks,kS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,w){function C(){}C.prototype=w.prototype,R.D=w.prototype,R.prototype=new C,R.prototype.constructor=R,R.C=function(N,x,P){for(var A=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)A[Te-2]=arguments[Te];return w.prototype[x].apply(N,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,w,C){C||(C=0);var N=Array(16);if(typeof w=="string")for(var x=0;16>x;++x)N[x]=w.charCodeAt(C++)|w.charCodeAt(C++)<<8|w.charCodeAt(C++)<<16|w.charCodeAt(C++)<<24;else for(x=0;16>x;++x)N[x]=w[C++]|w[C++]<<8|w[C++]<<16|w[C++]<<24;w=R.g[0],C=R.g[1],x=R.g[2];var P=R.g[3],A=w+(P^C&(x^P))+N[0]+3614090360&4294967295;w=C+(A<<7&4294967295|A>>>25),A=P+(x^w&(C^x))+N[1]+3905402710&4294967295,P=w+(A<<12&4294967295|A>>>20),A=x+(C^P&(w^C))+N[2]+606105819&4294967295,x=P+(A<<17&4294967295|A>>>15),A=C+(w^x&(P^w))+N[3]+3250441966&4294967295,C=x+(A<<22&4294967295|A>>>10),A=w+(P^C&(x^P))+N[4]+4118548399&4294967295,w=C+(A<<7&4294967295|A>>>25),A=P+(x^w&(C^x))+N[5]+1200080426&4294967295,P=w+(A<<12&4294967295|A>>>20),A=x+(C^P&(w^C))+N[6]+2821735955&4294967295,x=P+(A<<17&4294967295|A>>>15),A=C+(w^x&(P^w))+N[7]+4249261313&4294967295,C=x+(A<<22&4294967295|A>>>10),A=w+(P^C&(x^P))+N[8]+1770035416&4294967295,w=C+(A<<7&4294967295|A>>>25),A=P+(x^w&(C^x))+N[9]+2336552879&4294967295,P=w+(A<<12&4294967295|A>>>20),A=x+(C^P&(w^C))+N[10]+4294925233&4294967295,x=P+(A<<17&4294967295|A>>>15),A=C+(w^x&(P^w))+N[11]+2304563134&4294967295,C=x+(A<<22&4294967295|A>>>10),A=w+(P^C&(x^P))+N[12]+1804603682&4294967295,w=C+(A<<7&4294967295|A>>>25),A=P+(x^w&(C^x))+N[13]+4254626195&4294967295,P=w+(A<<12&4294967295|A>>>20),A=x+(C^P&(w^C))+N[14]+2792965006&4294967295,x=P+(A<<17&4294967295|A>>>15),A=C+(w^x&(P^w))+N[15]+1236535329&4294967295,C=x+(A<<22&4294967295|A>>>10),A=w+(x^P&(C^x))+N[1]+4129170786&4294967295,w=C+(A<<5&4294967295|A>>>27),A=P+(C^x&(w^C))+N[6]+3225465664&4294967295,P=w+(A<<9&4294967295|A>>>23),A=x+(w^C&(P^w))+N[11]+643717713&4294967295,x=P+(A<<14&4294967295|A>>>18),A=C+(P^w&(x^P))+N[0]+3921069994&4294967295,C=x+(A<<20&4294967295|A>>>12),A=w+(x^P&(C^x))+N[5]+3593408605&4294967295,w=C+(A<<5&4294967295|A>>>27),A=P+(C^x&(w^C))+N[10]+38016083&4294967295,P=w+(A<<9&4294967295|A>>>23),A=x+(w^C&(P^w))+N[15]+3634488961&4294967295,x=P+(A<<14&4294967295|A>>>18),A=C+(P^w&(x^P))+N[4]+3889429448&4294967295,C=x+(A<<20&4294967295|A>>>12),A=w+(x^P&(C^x))+N[9]+568446438&4294967295,w=C+(A<<5&4294967295|A>>>27),A=P+(C^x&(w^C))+N[14]+3275163606&4294967295,P=w+(A<<9&4294967295|A>>>23),A=x+(w^C&(P^w))+N[3]+4107603335&4294967295,x=P+(A<<14&4294967295|A>>>18),A=C+(P^w&(x^P))+N[8]+1163531501&4294967295,C=x+(A<<20&4294967295|A>>>12),A=w+(x^P&(C^x))+N[13]+2850285829&4294967295,w=C+(A<<5&4294967295|A>>>27),A=P+(C^x&(w^C))+N[2]+4243563512&4294967295,P=w+(A<<9&4294967295|A>>>23),A=x+(w^C&(P^w))+N[7]+1735328473&4294967295,x=P+(A<<14&4294967295|A>>>18),A=C+(P^w&(x^P))+N[12]+2368359562&4294967295,C=x+(A<<20&4294967295|A>>>12),A=w+(C^x^P)+N[5]+4294588738&4294967295,w=C+(A<<4&4294967295|A>>>28),A=P+(w^C^x)+N[8]+2272392833&4294967295,P=w+(A<<11&4294967295|A>>>21),A=x+(P^w^C)+N[11]+1839030562&4294967295,x=P+(A<<16&4294967295|A>>>16),A=C+(x^P^w)+N[14]+4259657740&4294967295,C=x+(A<<23&4294967295|A>>>9),A=w+(C^x^P)+N[1]+2763975236&4294967295,w=C+(A<<4&4294967295|A>>>28),A=P+(w^C^x)+N[4]+1272893353&4294967295,P=w+(A<<11&4294967295|A>>>21),A=x+(P^w^C)+N[7]+4139469664&4294967295,x=P+(A<<16&4294967295|A>>>16),A=C+(x^P^w)+N[10]+3200236656&4294967295,C=x+(A<<23&4294967295|A>>>9),A=w+(C^x^P)+N[13]+681279174&4294967295,w=C+(A<<4&4294967295|A>>>28),A=P+(w^C^x)+N[0]+3936430074&4294967295,P=w+(A<<11&4294967295|A>>>21),A=x+(P^w^C)+N[3]+3572445317&4294967295,x=P+(A<<16&4294967295|A>>>16),A=C+(x^P^w)+N[6]+76029189&4294967295,C=x+(A<<23&4294967295|A>>>9),A=w+(C^x^P)+N[9]+3654602809&4294967295,w=C+(A<<4&4294967295|A>>>28),A=P+(w^C^x)+N[12]+3873151461&4294967295,P=w+(A<<11&4294967295|A>>>21),A=x+(P^w^C)+N[15]+530742520&4294967295,x=P+(A<<16&4294967295|A>>>16),A=C+(x^P^w)+N[2]+3299628645&4294967295,C=x+(A<<23&4294967295|A>>>9),A=w+(x^(C|~P))+N[0]+4096336452&4294967295,w=C+(A<<6&4294967295|A>>>26),A=P+(C^(w|~x))+N[7]+1126891415&4294967295,P=w+(A<<10&4294967295|A>>>22),A=x+(w^(P|~C))+N[14]+2878612391&4294967295,x=P+(A<<15&4294967295|A>>>17),A=C+(P^(x|~w))+N[5]+4237533241&4294967295,C=x+(A<<21&4294967295|A>>>11),A=w+(x^(C|~P))+N[12]+1700485571&4294967295,w=C+(A<<6&4294967295|A>>>26),A=P+(C^(w|~x))+N[3]+2399980690&4294967295,P=w+(A<<10&4294967295|A>>>22),A=x+(w^(P|~C))+N[10]+4293915773&4294967295,x=P+(A<<15&4294967295|A>>>17),A=C+(P^(x|~w))+N[1]+2240044497&4294967295,C=x+(A<<21&4294967295|A>>>11),A=w+(x^(C|~P))+N[8]+1873313359&4294967295,w=C+(A<<6&4294967295|A>>>26),A=P+(C^(w|~x))+N[15]+4264355552&4294967295,P=w+(A<<10&4294967295|A>>>22),A=x+(w^(P|~C))+N[6]+2734768916&4294967295,x=P+(A<<15&4294967295|A>>>17),A=C+(P^(x|~w))+N[13]+1309151649&4294967295,C=x+(A<<21&4294967295|A>>>11),A=w+(x^(C|~P))+N[4]+4149444226&4294967295,w=C+(A<<6&4294967295|A>>>26),A=P+(C^(w|~x))+N[11]+3174756917&4294967295,P=w+(A<<10&4294967295|A>>>22),A=x+(w^(P|~C))+N[2]+718787259&4294967295,x=P+(A<<15&4294967295|A>>>17),A=C+(P^(x|~w))+N[9]+3951481745&4294967295,R.g[0]=R.g[0]+w&4294967295,R.g[1]=R.g[1]+(x+(A<<21&4294967295|A>>>11))&4294967295,R.g[2]=R.g[2]+x&4294967295,R.g[3]=R.g[3]+P&4294967295}r.prototype.u=function(R,w){w===void 0&&(w=R.length);for(var C=w-this.blockSize,N=this.B,x=this.h,P=0;P<w;){if(x==0)for(;P<=C;)s(this,R,P),P+=this.blockSize;if(typeof R=="string"){for(;P<w;)if(N[x++]=R.charCodeAt(P++),x==this.blockSize){s(this,N),x=0;break}}else for(;P<w;)if(N[x++]=R[P++],x==this.blockSize){s(this,N),x=0;break}}this.h=x,this.o+=w},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var w=1;w<R.length-8;++w)R[w]=0;var C=8*this.o;for(w=R.length-8;w<R.length;++w)R[w]=C&255,C/=256;for(this.u(R),R=Array(16),w=C=0;4>w;++w)for(var N=0;32>N;N+=8)R[C++]=this.g[w]>>>N&255;return R};function i(R,w){var C=a;return Object.prototype.hasOwnProperty.call(C,R)?C[R]:C[R]=w(R)}function o(R,w){this.h=w;for(var C=[],N=!0,x=R.length-1;0<=x;x--){var P=R[x]|0;N&&P==w||(C[x]=P,N=!1)}this.g=C}var a={};function u(R){return-128<=R&&128>R?i(R,function(w){return new o([w|0],0>w?-1:0)}):new o([R|0],0>R?-1:0)}function c(R){if(isNaN(R)||!isFinite(R))return f;if(0>R)return k(c(-R));for(var w=[],C=1,N=0;R>=C;N++)w[N]=R/C|0,C*=4294967296;return new o(w,0)}function d(R,w){if(R.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R.charAt(0)=="-")return k(d(R.substring(1),w));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=c(Math.pow(w,8)),N=f,x=0;x<R.length;x+=8){var P=Math.min(8,R.length-x),A=parseInt(R.substring(x,x+P),w);8>P?(P=c(Math.pow(w,P)),N=N.j(P).add(c(A))):(N=N.j(C),N=N.add(c(A)))}return N}var f=u(0),g=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(I(this))return-k(this).m();for(var R=0,w=1,C=0;C<this.g.length;C++){var N=this.i(C);R+=(0<=N?N:4294967296+N)*w,w*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(T(this))return"0";if(I(this))return"-"+k(this).toString(R);for(var w=c(Math.pow(R,6)),C=this,N="";;){var x=b(C,w).g;C=E(C,x.j(w));var P=((0<C.g.length?C.g[0]:C.h)>>>0).toString(R);if(C=x,T(C))return P+N;for(;6>P.length;)P="0"+P;N=P+N}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function T(R){if(R.h!=0)return!1;for(var w=0;w<R.g.length;w++)if(R.g[w]!=0)return!1;return!0}function I(R){return R.h==-1}t.l=function(R){return R=E(this,R),I(R)?-1:T(R)?0:1};function k(R){for(var w=R.g.length,C=[],N=0;N<w;N++)C[N]=~R.g[N];return new o(C,~R.h).add(g)}t.abs=function(){return I(this)?k(this):this},t.add=function(R){for(var w=Math.max(this.g.length,R.g.length),C=[],N=0,x=0;x<=w;x++){var P=N+(this.i(x)&65535)+(R.i(x)&65535),A=(P>>>16)+(this.i(x)>>>16)+(R.i(x)>>>16);N=A>>>16,P&=65535,A&=65535,C[x]=A<<16|P}return new o(C,C[C.length-1]&-2147483648?-1:0)};function E(R,w){return R.add(k(w))}t.j=function(R){if(T(this)||T(R))return f;if(I(this))return I(R)?k(this).j(k(R)):k(k(this).j(R));if(I(R))return k(this.j(k(R)));if(0>this.l(_)&&0>R.l(_))return c(this.m()*R.m());for(var w=this.g.length+R.g.length,C=[],N=0;N<2*w;N++)C[N]=0;for(N=0;N<this.g.length;N++)for(var x=0;x<R.g.length;x++){var P=this.i(N)>>>16,A=this.i(N)&65535,Te=R.i(x)>>>16,tt=R.i(x)&65535;C[2*N+2*x]+=A*tt,y(C,2*N+2*x),C[2*N+2*x+1]+=P*tt,y(C,2*N+2*x+1),C[2*N+2*x+1]+=A*Te,y(C,2*N+2*x+1),C[2*N+2*x+2]+=P*Te,y(C,2*N+2*x+2)}for(N=0;N<w;N++)C[N]=C[2*N+1]<<16|C[2*N];for(N=w;N<2*w;N++)C[N]=0;return new o(C,0)};function y(R,w){for(;(R[w]&65535)!=R[w];)R[w+1]+=R[w]>>>16,R[w]&=65535,w++}function S(R,w){this.g=R,this.h=w}function b(R,w){if(T(w))throw Error("division by zero");if(T(R))return new S(f,f);if(I(R))return w=b(k(R),w),new S(k(w.g),k(w.h));if(I(w))return w=b(R,k(w)),new S(k(w.g),w.h);if(30<R.g.length){if(I(R)||I(w))throw Error("slowDivide_ only works with positive integers.");for(var C=g,N=w;0>=N.l(R);)C=j(C),N=j(N);var x=F(C,1),P=F(N,1);for(N=F(N,2),C=F(C,2);!T(N);){var A=P.add(N);0>=A.l(R)&&(x=x.add(C),P=A),N=F(N,1),C=F(C,1)}return w=E(R,x.j(w)),new S(x,w)}for(x=f;0<=R.l(w);){for(C=Math.max(1,Math.floor(R.m()/w.m())),N=Math.ceil(Math.log(C)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),P=c(C),A=P.j(w);I(A)||0<A.l(R);)C-=N,P=c(C),A=P.j(w);T(P)&&(P=g),x=x.add(P),R=E(R,A)}return new S(x,R)}t.A=function(R){return b(this,R).h},t.and=function(R){for(var w=Math.max(this.g.length,R.g.length),C=[],N=0;N<w;N++)C[N]=this.i(N)&R.i(N);return new o(C,this.h&R.h)},t.or=function(R){for(var w=Math.max(this.g.length,R.g.length),C=[],N=0;N<w;N++)C[N]=this.i(N)|R.i(N);return new o(C,this.h|R.h)},t.xor=function(R){for(var w=Math.max(this.g.length,R.g.length),C=[],N=0;N<w;N++)C[N]=this.i(N)^R.i(N);return new o(C,this.h^R.h)};function j(R){for(var w=R.g.length+1,C=[],N=0;N<w;N++)C[N]=R.i(N)<<1|R.i(N-1)>>>31;return new o(C,R.h)}function F(R,w){var C=w>>5;w%=32;for(var N=R.g.length-C,x=[],P=0;P<N;P++)x[P]=0<w?R.i(P+C)>>>w|R.i(P+C+1)<<32-w:R.i(P+C);return new o(x,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,kS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,ks=o}).apply(typeof Rw<"u"?Rw:typeof self<"u"?self:typeof window<"u"?window:{});var iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var AS,Ko,NS,bu,pp,PS,xS,bS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,m){return l==Array.prototype||l==Object.prototype||(l[h]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof iu=="object"&&iu];for(var h=0;h<l.length;++h){var m=l[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(l,h){if(h)e:{var m=r;l=l.split(".");for(var v=0;v<l.length-1;v++){var D=l[v];if(!(D in m))break e;m=m[D]}l=l[l.length-1],v=m[l],h=h(v),h!=v&&h!=null&&e(m,l,{configurable:!0,writable:!0,value:h})}}function i(l,h){l instanceof String&&(l+="");var m=0,v=!1,D={next:function(){if(!v&&m<l.length){var L=m++;return{value:h(L,l[L]),done:!1}}return v=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(l){return l||function(){return i(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,m){return l.call.apply(l.bind,arguments)}function f(l,h,m){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,v),l.apply(h,D)}}return function(){return l.apply(h,arguments)}}function g(l,h,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,g.apply(null,arguments)}function _(l,h){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function T(l,h){function m(){}m.prototype=h.prototype,l.aa=h.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(v,D,L){for(var W=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)W[ye-2]=arguments[ye];return h.prototype[D].apply(v,W)}}function I(l){const h=l.length;if(0<h){const m=Array(h);for(let v=0;v<h;v++)m[v]=l[v];return m}return[]}function k(l,h){for(let m=1;m<arguments.length;m++){const v=arguments[m];if(u(v)){const D=l.length||0,L=v.length||0;l.length=D+L;for(let W=0;W<L;W++)l[D+W]=v[W]}else l.push(v)}}class E{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(l){return/^[\s\xa0]*$/.test(l)}function S(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function b(l){return b[" "](l),l}b[" "]=function(){};var j=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function F(l,h,m){for(const v in l)h.call(m,l[v],v,l)}function R(l,h){for(const m in l)h.call(void 0,l[m],m,l)}function w(l){const h={};for(const m in l)h[m]=l[m];return h}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(l,h){let m,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(m in v)l[m]=v[m];for(let L=0;L<C.length;L++)m=C[L],Object.prototype.hasOwnProperty.call(v,m)&&(l[m]=v[m])}}function x(l){var h=1;l=l.split(":");const m=[];for(;0<h&&l.length;)m.push(l.shift()),h--;return l.length&&m.push(l.join(":")),m}function P(l){a.setTimeout(()=>{throw l},0)}function A(){var l=M;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Te{constructor(){this.h=this.g=null}add(h,m){const v=tt.get();v.set(h,m),this.h?this.h.next=v:this.g=v,this.h=v}}var tt=new E(()=>new Ft,l=>l.reset());class Ft{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Ut,V=!1,M=new Te,H=()=>{const l=a.Promise.resolve(void 0);Ut=()=>{l.then(ae)}};var ae=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(m){P(m)}var h=tt;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}V=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var zt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,h),a.removeEventListener("test",m,h)}catch{}return l}();function Mn(l,h){if(_e.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(j){e:{try{b(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else m=="mouseover"?h=l.fromElement:m=="mouseout"&&(h=l.toElement);this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Vn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Mn.aa.h.call(this)}}T(Mn,_e);var Vn={2:"touch",3:"pen",4:"mouse"};Mn.prototype.h=function(){Mn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var jn="closure_listenable_"+(1e6*Math.random()|0),IR=0;function SR(l,h,m,v,D){this.listener=l,this.proxy=null,this.src=h,this.type=m,this.capture=!!v,this.ha=D,this.key=++IR,this.da=this.fa=!1}function Il(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Sl(l){this.src=l,this.g={},this.h=0}Sl.prototype.add=function(l,h,m,v,D){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var W=zh(l,h,v,D);return-1<W?(h=l[W],m||(h.fa=!1)):(h=new SR(h,this.src,L,!!v,D),h.fa=m,l.push(h)),h};function Uh(l,h){var m=h.type;if(m in l.g){var v=l.g[m],D=Array.prototype.indexOf.call(v,h,void 0),L;(L=0<=D)&&Array.prototype.splice.call(v,D,1),L&&(Il(h),l.g[m].length==0&&(delete l.g[m],l.h--))}}function zh(l,h,m,v){for(var D=0;D<l.length;++D){var L=l[D];if(!L.da&&L.listener==h&&L.capture==!!m&&L.ha==v)return D}return-1}var Bh="closure_lm_"+(1e6*Math.random()|0),$h={};function P_(l,h,m,v,D){if(Array.isArray(h)){for(var L=0;L<h.length;L++)P_(l,h[L],m,v,D);return null}return m=D_(m),l&&l[jn]?l.K(h,m,c(v)?!!v.capture:!1,D):CR(l,h,m,!1,v,D)}function CR(l,h,m,v,D,L){if(!h)throw Error("Invalid event type");var W=c(D)?!!D.capture:!!D,ye=Hh(l);if(ye||(l[Bh]=ye=new Sl(l)),m=ye.add(h,m,v,W,L),m.proxy)return m;if(v=RR(),m.proxy=v,v.src=l,v.listener=m,l.addEventListener)zt||(D=W),D===void 0&&(D=!1),l.addEventListener(h.toString(),v,D);else if(l.attachEvent)l.attachEvent(b_(h.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function RR(){function l(m){return h.call(l.src,l.listener,m)}const h=kR;return l}function x_(l,h,m,v,D){if(Array.isArray(h))for(var L=0;L<h.length;L++)x_(l,h[L],m,v,D);else v=c(v)?!!v.capture:!!v,m=D_(m),l&&l[jn]?(l=l.i,h=String(h).toString(),h in l.g&&(L=l.g[h],m=zh(L,m,v,D),-1<m&&(Il(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete l.g[h],l.h--)))):l&&(l=Hh(l))&&(h=l.g[h.toString()],l=-1,h&&(l=zh(h,m,v,D)),(m=-1<l?h[l]:null)&&Wh(m))}function Wh(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[jn])Uh(h.i,l);else{var m=l.type,v=l.proxy;h.removeEventListener?h.removeEventListener(m,v,l.capture):h.detachEvent?h.detachEvent(b_(m),v):h.addListener&&h.removeListener&&h.removeListener(v),(m=Hh(h))?(Uh(m,l),m.h==0&&(m.src=null,h[Bh]=null)):Il(l)}}}function b_(l){return l in $h?$h[l]:$h[l]="on"+l}function kR(l,h){if(l.da)l=!0;else{h=new Mn(h,this);var m=l.listener,v=l.ha||l.src;l.fa&&Wh(l),l=m.call(v,h)}return l}function Hh(l){return l=l[Bh],l instanceof Sl?l:null}var qh="__closure_events_fn_"+(1e9*Math.random()>>>0);function D_(l){return typeof l=="function"?l:(l[qh]||(l[qh]=function(h){return l.handleEvent(h)}),l[qh])}function ct(){ne.call(this),this.i=new Sl(this),this.M=this,this.F=null}T(ct,ne),ct.prototype[jn]=!0,ct.prototype.removeEventListener=function(l,h,m,v){x_(this,l,h,m,v)};function Tt(l,h){var m,v=l.F;if(v)for(m=[];v;v=v.F)m.push(v);if(l=l.M,v=h.type||h,typeof h=="string")h=new _e(h,l);else if(h instanceof _e)h.target=h.target||l;else{var D=h;h=new _e(v,l),N(h,D)}if(D=!0,m)for(var L=m.length-1;0<=L;L--){var W=h.g=m[L];D=Cl(W,v,!0,h)&&D}if(W=h.g=l,D=Cl(W,v,!0,h)&&D,D=Cl(W,v,!1,h)&&D,m)for(L=0;L<m.length;L++)W=h.g=m[L],D=Cl(W,v,!1,h)&&D}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var m=l.g[h],v=0;v<m.length;v++)Il(m[v]);delete l.g[h],l.h--}}this.F=null},ct.prototype.K=function(l,h,m,v){return this.i.add(String(l),h,!1,m,v)},ct.prototype.L=function(l,h,m,v){return this.i.add(String(l),h,!0,m,v)};function Cl(l,h,m,v){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,L=0;L<h.length;++L){var W=h[L];if(W&&!W.da&&W.capture==m){var ye=W.listener,nt=W.ha||W.src;W.fa&&Uh(l.i,W),D=ye.call(nt,v)!==!1&&D}}return D&&!v.defaultPrevented}function O_(l,h,m){if(typeof l=="function")m&&(l=g(l,m));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function L_(l){l.g=O_(()=>{l.g=null,l.i&&(l.i=!1,L_(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class AR extends ne{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:L_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function po(l){ne.call(this),this.h=l,this.g={}}T(po,ne);var M_=[];function V_(l){F(l.g,function(h,m){this.g.hasOwnProperty(m)&&Wh(h)},l),l.g={}}po.prototype.N=function(){po.aa.N.call(this),V_(this)},po.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gh=a.JSON.stringify,NR=a.JSON.parse,PR=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Kh(){}Kh.prototype.h=null;function j_(l){return l.h||(l.h=l.i())}function F_(){}var mo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qh(){_e.call(this,"d")}T(Qh,_e);function Yh(){_e.call(this,"c")}T(Yh,_e);var us={},U_=null;function Rl(){return U_=U_||new ct}us.La="serverreachability";function z_(l){_e.call(this,us.La,l)}T(z_,_e);function go(l){const h=Rl();Tt(h,new z_(h))}us.STAT_EVENT="statevent";function B_(l,h){_e.call(this,us.STAT_EVENT,l),this.stat=h}T(B_,_e);function It(l){const h=Rl();Tt(h,new B_(h,l))}us.Ma="timingevent";function $_(l,h){_e.call(this,us.Ma,l),this.size=h}T($_,_e);function _o(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function yo(){this.g=!0}yo.prototype.xa=function(){this.g=!1};function xR(l,h,m,v,D,L){l.info(function(){if(l.g)if(L)for(var W="",ye=L.split("&"),nt=0;nt<ye.length;nt++){var de=ye[nt].split("=");if(1<de.length){var ht=de[0];de=de[1];var dt=ht.split("_");W=2<=dt.length&&dt[1]=="type"?W+(ht+"="+de+"&"):W+(ht+"=redacted&")}}else W=null;else W=L;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+h+`
`+m+`
`+W})}function bR(l,h,m,v,D,L,W){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+h+`
`+m+`
`+L+" "+W})}function Qs(l,h,m,v){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+OR(l,m)+(v?" "+v:"")})}function DR(l,h){l.info(function(){return"TIMEOUT: "+h})}yo.prototype.info=function(){};function OR(l,h){if(!l.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var v=m[l];if(!(2>v.length)){var D=v[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var W=1;W<D.length;W++)D[W]=""}}}}return Gh(m)}catch{return h}}var kl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},W_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xh;function Al(){}T(Al,Kh),Al.prototype.g=function(){return new XMLHttpRequest},Al.prototype.i=function(){return{}},Xh=new Al;function gr(l,h,m,v){this.j=l,this.i=h,this.l=m,this.R=v||1,this.U=new po(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new H_}function H_(){this.i=null,this.g="",this.h=!1}var q_={},Jh={};function Zh(l,h,m){l.L=1,l.v=bl(Fn(h)),l.m=m,l.P=!0,G_(l,null)}function G_(l,h){l.F=Date.now(),Nl(l),l.A=Fn(l.v);var m=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),ay(m.i,"t",v),l.C=0,m=l.j.J,l.h=new H_,l.g=Cy(l.j,m?h:null,!l.m),0<l.O&&(l.M=new AR(g(l.Y,l,l.g),l.O)),h=l.U,m=l.g,v=l.ca;var D="readystatechange";Array.isArray(D)||(D&&(M_[0]=D.toString()),D=M_);for(var L=0;L<D.length;L++){var W=P_(m,D[L],v||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=l.H?w(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),go(),xR(l.i,l.u,l.A,l.l,l.R,l.m)}gr.prototype.ca=function(l){l=l.target;const h=this.M;h&&Un(l)==3?h.j():this.Y(l)},gr.prototype.Y=function(l){try{if(l==this.g)e:{const dt=Un(this.g);var h=this.g.Ba();const Js=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||py(this.g)))){this.J||dt!=4||h==7||(h==8||0>=Js?go(3):go(2)),ed(this);var m=this.g.Z();this.X=m;t:if(K_(this)){var v=py(this.g);l="";var D=v.length,L=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cs(this),vo(this);var W="";break t}this.h.i=new a.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,l+=this.h.i.decode(v[h],{stream:!(L&&h==D-1)});v.length=0,this.h.g+=l,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=m==200,bR(this.i,this.u,this.A,this.l,this.R,dt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,nt=this.g;if((ye=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(ye)){var de=ye;break t}}de=null}if(m=de)Qs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,td(this,m);else{this.o=!1,this.s=3,It(12),cs(this),vo(this);break e}}if(this.P){m=!0;let on;for(;!this.J&&this.C<W.length;)if(on=LR(this,W),on==Jh){dt==4&&(this.s=4,It(14),m=!1),Qs(this.i,this.l,null,"[Incomplete Response]");break}else if(on==q_){this.s=4,It(15),Qs(this.i,this.l,W,"[Invalid Chunk]"),m=!1;break}else Qs(this.i,this.l,on,null),td(this,on);if(K_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||W.length!=0||this.h.h||(this.s=1,It(16),m=!1),this.o=this.o&&m,!m)Qs(this.i,this.l,W,"[Invalid Chunked Response]"),cs(this),vo(this);else if(0<W.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),ad(ht),ht.M=!0,It(11))}}else Qs(this.i,this.l,W,null),td(this,W);dt==4&&cs(this),this.o&&!this.J&&(dt==4?Ey(this.j,this):(this.o=!1,Nl(this)))}else JR(this.g),m==400&&0<W.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),cs(this),vo(this)}}}catch{}finally{}};function K_(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function LR(l,h){var m=l.C,v=h.indexOf(`
`,m);return v==-1?Jh:(m=Number(h.substring(m,v)),isNaN(m)?q_:(v+=1,v+m>h.length?Jh:(h=h.slice(v,v+m),l.C=v+m,h)))}gr.prototype.cancel=function(){this.J=!0,cs(this)};function Nl(l){l.S=Date.now()+l.I,Q_(l,l.I)}function Q_(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=_o(g(l.ba,l),h)}function ed(l){l.B&&(a.clearTimeout(l.B),l.B=null)}gr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(DR(this.i,this.A),this.L!=2&&(go(),It(17)),cs(this),this.s=2,vo(this)):Q_(this,this.S-l)};function vo(l){l.j.G==0||l.J||Ey(l.j,l)}function cs(l){ed(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,V_(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function td(l,h){try{var m=l.j;if(m.G!=0&&(m.g==l||nd(m.h,l))){if(!l.K&&nd(m.h,l)&&m.G==3){try{var v=m.Da.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)jl(m),Ml(m);else break e;od(m),It(18)}}else m.za=D[1],0<m.za-m.T&&37500>D[2]&&m.F&&m.v==0&&!m.C&&(m.C=_o(g(m.Za,m),6e3));if(1>=J_(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ds(m,11)}else if((l.K||m.g==l)&&jl(m),!y(h))for(D=m.Da.g.parse(h),h=0;h<D.length;h++){let de=D[h];if(m.T=de[0],de=de[1],m.G==2)if(de[0]=="c"){m.K=de[1],m.ia=de[2];const ht=de[3];ht!=null&&(m.la=ht,m.j.info("VER="+m.la));const dt=de[4];dt!=null&&(m.Aa=dt,m.j.info("SVER="+m.Aa));const Js=de[5];Js!=null&&typeof Js=="number"&&0<Js&&(v=1.5*Js,m.L=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const on=l.g;if(on){const Ul=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ul){var L=v.h;L.g||Ul.indexOf("spdy")==-1&&Ul.indexOf("quic")==-1&&Ul.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(rd(L,L.h),L.h=null))}if(v.D){const ld=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;ld&&(v.ya=ld,Ie(v.I,v.D,ld))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),v=m;var W=l;if(v.qa=Sy(v,v.J?v.ia:null,v.W),W.K){Z_(v.h,W);var ye=W,nt=v.L;nt&&(ye.I=nt),ye.B&&(ed(ye),Nl(ye)),v.g=W}else vy(v);0<m.i.length&&Vl(m)}else de[0]!="stop"&&de[0]!="close"||ds(m,7);else m.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?ds(m,7):id(m):de[0]!="noop"&&m.l&&m.l.ta(de),m.v=0)}}go(4)}catch{}}var MR=class{constructor(l,h){this.g=l,this.map=h}};function Y_(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function X_(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function J_(l){return l.h?1:l.g?l.g.size:0}function nd(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function rd(l,h){l.g?l.g.add(h):l.h=h}function Z_(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Y_.prototype.cancel=function(){if(this.i=ey(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ey(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const m of l.g.values())h=h.concat(m.D);return h}return I(l.i)}function VR(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],m=l.length,v=0;v<m;v++)h.push(l[v]);return h}h=[],m=0;for(v in l)h[m++]=l[v];return h}function jR(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var m=0;m<l;m++)h.push(m);return h}h=[],m=0;for(const v in l)h[m++]=v;return h}}}function ty(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var m=jR(l),v=VR(l),D=v.length,L=0;L<D;L++)h.call(void 0,v[L],m&&m[L],l)}var ny=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FR(l,h){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var v=l[m].indexOf("="),D=null;if(0<=v){var L=l[m].substring(0,v);D=l[m].substring(v+1)}else L=l[m];h(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function hs(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof hs){this.h=l.h,Pl(this,l.j),this.o=l.o,this.g=l.g,xl(this,l.s),this.l=l.l;var h=l.i,m=new To;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),ry(this,m),this.m=l.m}else l&&(h=String(l).match(ny))?(this.h=!1,Pl(this,h[1]||"",!0),this.o=wo(h[2]||""),this.g=wo(h[3]||"",!0),xl(this,h[4]),this.l=wo(h[5]||"",!0),ry(this,h[6]||"",!0),this.m=wo(h[7]||"")):(this.h=!1,this.i=new To(null,this.h))}hs.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Eo(h,sy,!0),":");var m=this.g;return(m||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Eo(h,sy,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Eo(m,m.charAt(0)=="/"?BR:zR,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Eo(m,WR)),l.join("")};function Fn(l){return new hs(l)}function Pl(l,h,m){l.j=m?wo(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function xl(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function ry(l,h,m){h instanceof To?(l.i=h,HR(l.i,l.h)):(m||(h=Eo(h,$R)),l.i=new To(h,l.h))}function Ie(l,h,m){l.i.set(h,m)}function bl(l){return Ie(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function wo(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Eo(l,h,m){return typeof l=="string"?(l=encodeURI(l).replace(h,UR),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function UR(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var sy=/[#\/\?@]/g,zR=/[#\?:]/g,BR=/[#\?]/g,$R=/[#\?@]/g,WR=/#/g;function To(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function _r(l){l.g||(l.g=new Map,l.h=0,l.i&&FR(l.i,function(h,m){l.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=To.prototype,t.add=function(l,h){_r(this),this.i=null,l=Ys(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(h),this.h+=1,this};function iy(l,h){_r(l),h=Ys(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function oy(l,h){return _r(l),h=Ys(l,h),l.g.has(h)}t.forEach=function(l,h){_r(this),this.g.forEach(function(m,v){m.forEach(function(D){l.call(h,D,v,this)},this)},this)},t.na=function(){_r(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let v=0;v<h.length;v++){const D=l[v];for(let L=0;L<D.length;L++)m.push(h[v])}return m},t.V=function(l){_r(this);let h=[];if(typeof l=="string")oy(this,l)&&(h=h.concat(this.g.get(Ys(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)h=h.concat(l[m])}return h},t.set=function(l,h){return _r(this),this.i=null,l=Ys(this,l),oy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function ay(l,h,m){iy(l,h),0<m.length&&(l.i=null,l.g.set(Ys(l,h),I(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var v=h[m];const L=encodeURIComponent(String(v)),W=this.V(v);for(v=0;v<W.length;v++){var D=L;W[v]!==""&&(D+="="+encodeURIComponent(String(W[v]))),l.push(D)}}return this.i=l.join("&")};function Ys(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function HR(l,h){h&&!l.j&&(_r(l),l.i=null,l.g.forEach(function(m,v){var D=v.toLowerCase();v!=D&&(iy(this,v),ay(this,D,m))},l)),l.j=h}function qR(l,h){const m=new yo;if(a.Image){const v=new Image;v.onload=_(yr,m,"TestLoadImage: loaded",!0,h,v),v.onerror=_(yr,m,"TestLoadImage: error",!1,h,v),v.onabort=_(yr,m,"TestLoadImage: abort",!1,h,v),v.ontimeout=_(yr,m,"TestLoadImage: timeout",!1,h,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else h(!1)}function GR(l,h){const m=new yo,v=new AbortController,D=setTimeout(()=>{v.abort(),yr(m,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:v.signal}).then(L=>{clearTimeout(D),L.ok?yr(m,"TestPingServer: ok",!0,h):yr(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),yr(m,"TestPingServer: error",!1,h)})}function yr(l,h,m,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(m)}catch{}}function KR(){this.g=new PR}function QR(l,h,m){const v=m||"";try{ty(l,function(D,L){let W=D;c(D)&&(W=Gh(D)),h.push(v+L+"="+encodeURIComponent(W))})}catch(D){throw h.push(v+"type="+encodeURIComponent("_badmap")),D}}function Dl(l){this.l=l.Ub||null,this.j=l.eb||!1}T(Dl,Kh),Dl.prototype.g=function(){return new Ol(this.l,this.j)},Dl.prototype.i=function(l){return function(){return l}}({});function Ol(l,h){ct.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(Ol,ct),t=Ol.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,So(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Io(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,So(this)),this.g&&(this.readyState=3,So(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ly(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ly(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Io(this):So(this),this.readyState==3&&ly(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Io(this))},t.Qa=function(l){this.g&&(this.response=l,Io(this))},t.ga=function(){this.g&&Io(this)};function Io(l){l.readyState=4,l.l=null,l.j=null,l.v=null,So(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=h.next();return l.join(`\r
`)};function So(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ol.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function uy(l){let h="";return F(l,function(m,v){h+=v,h+=":",h+=m,h+=`\r
`}),h}function sd(l,h,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=uy(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Ie(l,h,m))}function De(l){ct.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(De,ct);var YR=/^https?$/i,XR=["POST","PUT"];t=De.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xh.g(),this.v=this.o?j_(this.o):j_(Xh),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(L){cy(this,L);return}if(l=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)m.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())m.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),D=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(XR,h,void 0))||v||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,W]of m)this.g.setRequestHeader(L,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fy(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){cy(this,L)}};function cy(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,hy(l),Ll(l)}function hy(l){l.A||(l.A=!0,Tt(l,"complete"),Tt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Tt(this,"complete"),Tt(this,"abort"),Ll(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ll(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?dy(this):this.bb())},t.bb=function(){dy(this)};function dy(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Un(l)!=4||l.Z()!=2)){if(l.u&&Un(l)==4)O_(l.Ea,0,l);else if(Tt(l,"readystatechange"),Un(l)==4){l.h=!1;try{const W=l.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var v;if(v=W===0){var D=String(l.D).match(ny)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),v=!YR.test(D?D.toLowerCase():"")}m=v}if(m)Tt(l,"complete"),Tt(l,"success");else{l.m=6;try{var L=2<Un(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",hy(l)}}finally{Ll(l)}}}}function Ll(l,h){if(l.g){fy(l);const m=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Tt(l,"ready");try{m.onreadystatechange=v}catch{}}}function fy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Un(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),NR(h)}};function py(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function JR(l){const h={};l=(l.g&&2<=Un(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(y(l[v]))continue;var m=x(l[v]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=h[D]||[];h[D]=L,L.push(m)}R(h,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Co(l,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||h}function my(l){this.Aa=0,this.i=[],this.j=new yo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Co("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Co("baseRetryDelayMs",5e3,l),this.cb=Co("retryDelaySeedMs",1e4,l),this.Wa=Co("forwardChannelMaxRetries",2,l),this.wa=Co("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Y_(l&&l.concurrentRequestLimit),this.Da=new KR,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=my.prototype,t.la=8,t.G=1,t.connect=function(l,h,m,v){It(0),this.W=l,this.H=h||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.I=Sy(this,null,this.W),Vl(this)};function id(l){if(gy(l),l.G==3){var h=l.U++,m=Fn(l.I);if(Ie(m,"SID",l.K),Ie(m,"RID",h),Ie(m,"TYPE","terminate"),Ro(l,m),h=new gr(l,l.j,h),h.L=2,h.v=bl(Fn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=h.v,m=!0),m||(h.g=Cy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Nl(h)}Iy(l)}function Ml(l){l.g&&(ad(l),l.g.cancel(),l.g=null)}function gy(l){Ml(l),l.u&&(a.clearTimeout(l.u),l.u=null),jl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Vl(l){if(!X_(l.h)&&!l.s){l.s=!0;var h=l.Ga;Ut||H(),V||(Ut(),V=!0),M.add(h,l),l.B=0}}function ZR(l,h){return J_(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=_o(g(l.Ga,l,h),Ty(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const D=new gr(this,this.j,l);let L=this.o;if(this.S&&(L?(L=w(L),N(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=yy(this,D,h),m=Fn(this.I),Ie(m,"RID",l),Ie(m,"CVER",22),this.D&&Ie(m,"X-HTTP-Session-Id",this.D),Ro(this,m),L&&(this.O?h="headers="+encodeURIComponent(String(uy(L)))+"&"+h:this.m&&sd(m,this.m,L)),rd(this.h,D),this.Ua&&Ie(m,"TYPE","init"),this.P?(Ie(m,"$req",h),Ie(m,"SID","null"),D.T=!0,Zh(D,m,null)):Zh(D,m,h),this.G=2}}else this.G==3&&(l?_y(this,l):this.i.length==0||X_(this.h)||_y(this))};function _y(l,h){var m;h?m=h.l:m=l.U++;const v=Fn(l.I);Ie(v,"SID",l.K),Ie(v,"RID",m),Ie(v,"AID",l.T),Ro(l,v),l.m&&l.o&&sd(v,l.m,l.o),m=new gr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),h&&(l.i=h.D.concat(l.i)),h=yy(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),rd(l.h,m),Zh(m,v,h)}function Ro(l,h){l.H&&F(l.H,function(m,v){Ie(h,v,m)}),l.l&&ty({},function(m,v){Ie(h,v,m)})}function yy(l,h,m){m=Math.min(l.i.length,m);var v=l.l?g(l.l.Na,l.l,l):null;e:{var D=l.i;let L=-1;for(;;){const W=["count="+m];L==-1?0<m?(L=D[0].g,W.push("ofs="+L)):L=0:W.push("ofs="+L);let ye=!0;for(let nt=0;nt<m;nt++){let de=D[nt].g;const ht=D[nt].map;if(de-=L,0>de)L=Math.max(0,D[nt].g-100),ye=!1;else try{QR(ht,W,"req"+de+"_")}catch{v&&v(ht)}}if(ye){v=W.join("&");break e}}}return l=l.i.splice(0,m),h.D=l,v}function vy(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Ut||H(),V||(Ut(),V=!0),M.add(h,l),l.v=0}}function od(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=_o(g(l.Fa,l),Ty(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,wy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=_o(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Ml(this),wy(this))};function ad(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function wy(l){l.g=new gr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Fn(l.qa);Ie(h,"RID","rpc"),Ie(h,"SID",l.K),Ie(h,"AID",l.T),Ie(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ie(h,"TO",l.ja),Ie(h,"TYPE","xmlhttp"),Ro(l,h),l.m&&l.o&&sd(h,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=bl(Fn(h)),m.m=null,m.P=!0,G_(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Ml(this),od(this),It(19))};function jl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Ey(l,h){var m=null;if(l.g==h){jl(l),ad(l),l.g=null;var v=2}else if(nd(l.h,h))m=h.D,Z_(l.h,h),v=1;else return;if(l.G!=0){if(h.o)if(v==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var D=l.B;v=Rl(),Tt(v,new $_(v,m)),Vl(l)}else vy(l);else if(D=h.s,D==3||D==0&&0<h.X||!(v==1&&ZR(l,h)||v==2&&od(l)))switch(m&&0<m.length&&(h=l.h,h.i=h.i.concat(m)),D){case 1:ds(l,5);break;case 4:ds(l,10);break;case 3:ds(l,6);break;default:ds(l,2)}}}function Ty(l,h){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*h}function ds(l,h){if(l.j.info("Error code "+h),h==2){var m=g(l.fb,l),v=l.Xa;const D=!v;v=new hs(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Pl(v,"https"),bl(v),D?qR(v.toString(),m):GR(v.toString(),m)}else It(2);l.G=0,l.l&&l.l.sa(h),Iy(l),gy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Iy(l){if(l.G=0,l.ka=[],l.l){const h=ey(l.h);(h.length!=0||l.i.length!=0)&&(k(l.ka,h),k(l.ka,l.i),l.h.i.length=0,I(l.i),l.i.length=0),l.l.ra()}}function Sy(l,h,m){var v=m instanceof hs?Fn(m):new hs(m);if(v.g!="")h&&(v.g=h+"."+v.g),xl(v,v.s);else{var D=a.location;v=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var L=new hs(null);v&&Pl(L,v),h&&(L.g=h),D&&xl(L,D),m&&(L.l=m),v=L}return m=l.D,h=l.ya,m&&h&&Ie(v,m,h),Ie(v,"VER",l.la),Ro(l,v),v}function Cy(l,h,m){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new De(new Dl({eb:m})):new De(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ry(){}t=Ry.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Fl(){}Fl.prototype.g=function(l,h){return new Bt(l,h)};function Bt(l,h){ct.call(this),this.g=new my(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!y(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Xs(this)}T(Bt,ct),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){id(this.g)},Bt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=Gh(l),l=m);h.i.push(new MR(h.Ya++,l)),h.G==3&&Vl(h)},Bt.prototype.N=function(){this.g.l=null,delete this.j,id(this.g),delete this.g,Bt.aa.N.call(this)};function ky(l){Qh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const m in h){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}T(ky,Qh);function Ay(){Yh.call(this),this.status=1}T(Ay,Yh);function Xs(l){this.g=l}T(Xs,Ry),Xs.prototype.ua=function(){Tt(this.g,"a")},Xs.prototype.ta=function(l){Tt(this.g,new ky(l))},Xs.prototype.sa=function(l){Tt(this.g,new Ay)},Xs.prototype.ra=function(){Tt(this.g,"b")},Fl.prototype.createWebChannel=Fl.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,bS=function(){return new Fl},xS=function(){return Rl()},PS=us,pp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},kl.NO_ERROR=0,kl.TIMEOUT=8,kl.HTTP_ERROR=6,bu=kl,W_.COMPLETE="complete",NS=W_,F_.EventType=mo,mo.OPEN="a",mo.CLOSE="b",mo.ERROR="c",mo.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Ko=F_,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,AS=De}).apply(typeof iu<"u"?iu:typeof self<"u"?self:typeof window<"u"?window:{});const kw="@firebase/firestore";/**
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
 */const Ls=new hh("@firebase/firestore");function Lo(){return Ls.logLevel}function G(t,...e){if(Ls.logLevel<=le.DEBUG){const n=e.map(fg);Ls.debug(`Firestore (${ao}): ${t}`,...n)}}function ar(t,...e){if(Ls.logLevel<=le.ERROR){const n=e.map(fg);Ls.error(`Firestore (${ao}): ${t}`,...n)}}function Bi(t,...e){if(Ls.logLevel<=le.WARN){const n=e.map(fg);Ls.warn(`Firestore (${ao}): ${t}`,...n)}}function fg(t){if(typeof t=="string")return t;try{/**
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${ao}) INTERNAL ASSERTION FAILED: `+t;throw ar(e),new Error(e)}function ge(t,e){t||J()}function ee(t,e){return t}/**
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
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class DS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class pO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mO{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ge(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new DS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new gt(e)}}class gO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _O{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new gO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ge(this.o===void 0);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.R=n.token,new yO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function wO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class OS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=wO(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function $i(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ua{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ua.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ua?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends Ua{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const EO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Ua{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return EO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new K(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new K(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Le.fromString(e))}static fromName(e){return new Q(Le.fromString(e).popFirst(5))}static empty(){return new Q(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Le(e.slice()))}}function TO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Z.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new Jr(s,Q.empty(),e)}function IO(t){return new Jr(t.readTime,t.key,-1)}class Jr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jr(Z.min(),Q.empty(),-1)}static max(){return new Jr(Z.max(),Q.empty(),-1)}}function SO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const CO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class RO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function dl(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==CO)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function kO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class pg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}pg.oe=-1;function gh(t){return t==null}function wc(t){return t===0&&1/t==-1/0}function AO(t){return typeof t=="number"&&Number.isInteger(t)&&!wc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Aw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function LS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let $e=class mp{constructor(e,n){this.comparator=e,this.root=n||Gr.EMPTY}insert(e,n){return new mp(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Gr.BLACK,null,null))}remove(e){return new mp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Gr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ou(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ou(this.root,e,this.comparator,!1)}getReverseIterator(){return new ou(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ou(this.root,e,this.comparator,!0)}},ou=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Gr=class zn{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??zn.RED,this.left=s??zn.EMPTY,this.right=i??zn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new zn(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return zn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return zn.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,zn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,zn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}};Gr.EMPTY=null,Gr.RED=!0,Gr.BLACK=!1;Gr.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Gr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nw(this.data.getIterator())}getIteratorFrom(e){return new Nw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class Nw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ht{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new at(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $i(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class MS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new MS("Invalid base64 string: "+i):i}}(e);return new ut(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const NO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zr(t){if(ge(!!t),typeof t=="string"){let e=0;const n=NO.exec(t);if(ge(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ms(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
 */function mg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gg(t){const e=t.mapValue.fields.__previous_value__;return mg(e)?gg(e):e}function za(t){const e=Zr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
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
 */class PO{constructor(e,n,r,s,i,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ba{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ba("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ba&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const au={mapValue:{}};function Vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mg(t)?4:bO(t)?9007199254740991:xO(t)?10:11:J()}function bn(t,e){if(t===e)return!0;const n=Vs(t);if(n!==Vs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return za(t).isEqual(za(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Zr(s.timestampValue),a=Zr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ms(s.bytesValue).isEqual(Ms(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Fe(s.doubleValue),a=Fe(i.doubleValue);return o===a?wc(o)===wc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return $i(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Aw(o)!==Aw(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!bn(o[u],a[u])))return!1;return!0}(t,e);default:return J()}}function $a(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function Wi(t,e){if(t===e)return 0;const n=Vs(t),r=Vs(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Fe(i.integerValue||i.doubleValue),u=Fe(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Pw(t.timestampValue,e.timestampValue);case 4:return Pw(za(t),za(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Ms(i),u=Ms(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=fe(a[c],u[c]);if(d!==0)return d}return fe(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=fe(Fe(i.latitude),Fe(o.latitude));return a!==0?a:fe(Fe(i.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return xw(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,u,c,d;const f=i.fields||{},g=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,T=(u=g.value)===null||u===void 0?void 0:u.arrayValue,I=fe(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0);return I!==0?I:xw(_,T)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===au.mapValue&&o===au.mapValue)return 0;if(i===au.mapValue)return 1;if(o===au.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const g=fe(u[f],d[f]);if(g!==0)return g;const _=Wi(a[u[f]],c[d[f]]);if(_!==0)return _}return fe(u.length,d.length)}(t.mapValue,e.mapValue);default:throw J()}}function Pw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=Zr(t),r=Zr(e),s=fe(n.seconds,r.seconds);return s!==0?s:fe(n.nanos,r.nanos)}function xw(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Wi(n[s],r[s]);if(i)return i}return fe(n.length,r.length)}function Hi(t){return gp(t)}function gp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Zr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ms(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=gp(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${gp(n.fields[o])}`;return s+"}"}(t.mapValue):J()}function _p(t){return!!t&&"integerValue"in t}function _g(t){return!!t&&"arrayValue"in t}function bw(t){return!!t&&"nullValue"in t}function Dw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Du(t){return!!t&&"mapValue"in t}function xO(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function aa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=aa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=aa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Du(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=aa(n)}setAll(e){let n=it.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=aa(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Du(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Du(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){qs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Pt(aa(this.value))}}function VS(t){const e=[];return qs(t.fields,(n,r)=>{const s=new it([n]);if(Du(r)){const i=VS(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ht(e)}/**
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
 */class yt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new yt(e,0,Z.min(),Z.min(),Z.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,s){return new yt(e,1,n,Z.min(),r,s,0)}static newNoDocument(e,n){return new yt(e,2,n,Z.min(),Z.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,Z.min(),Z.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ec{constructor(e,n){this.position=e,this.inclusive=n}}function Ow(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Wi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Lw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Tc{constructor(e,n="asc"){this.field=e,this.dir=n}}function DO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class jS{}class He extends jS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LO(e,n,r):n==="array-contains"?new jO(e,r):n==="in"?new FO(e,r):n==="not-in"?new UO(e,r):n==="array-contains-any"?new zO(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new MO(e,r):new VO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wi(n,this.value)):n!==null&&Vs(this.value)===Vs(n)&&this.matchesComparison(Wi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends jS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Dn(e,n)}matches(e){return FS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function FS(t){return t.op==="and"}function US(t){return OO(t)&&FS(t)}function OO(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function yp(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+Hi(t.value);if(US(t))return t.filters.map(e=>yp(e)).join(",");{const e=t.filters.map(n=>yp(n)).join(",");return`${t.op}(${e})`}}function zS(t,e){return t instanceof He?function(r,s){return s instanceof He&&r.op===s.op&&r.field.isEqual(s.field)&&bn(r.value,s.value)}(t,e):t instanceof Dn?function(r,s){return s instanceof Dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&zS(o,s.filters[a]),!0):!1}(t,e):void J()}function BS(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${Hi(n.value)}`}(t):t instanceof Dn?function(n){return n.op.toString()+" {"+n.getFilters().map(BS).join(" ,")+"}"}(t):"Filter"}class LO extends He{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class MO extends He{constructor(e,n){super(e,"in",n),this.keys=$S("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class VO extends He{constructor(e,n){super(e,"not-in",n),this.keys=$S("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $S(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class jO extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _g(n)&&$a(n.arrayValue,this.value)}}class FO extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$a(this.value.arrayValue,n)}}class UO extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if($a(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!$a(this.value.arrayValue,n)}}class zO extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_g(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$a(this.value.arrayValue,r))}}/**
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
 */class BO{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function Mw(t,e=null,n=[],r=[],s=null,i=null,o=null){return new BO(t,e,n,r,s,i,o)}function yg(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),gh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hi(r)).join(",")),e.ue=n}return e.ue}function vg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!DO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Lw(t.startAt,e.startAt)&&Lw(t.endAt,e.endAt)}function vp(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class _h{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function $O(t,e,n,r,s,i,o,a){return new _h(t,e,n,r,s,i,o,a)}function wg(t){return new _h(t)}function Vw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function WO(t){return t.collectionGroup!==null}function la(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new at(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Tc(i,r))}),n.has(it.keyField().canonicalString())||e.ce.push(new Tc(it.keyField(),r))}return e.ce}function An(t){const e=ee(t);return e.le||(e.le=HO(e,la(t))),e.le}function HO(t,e){if(t.limitType==="F")return Mw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Tc(s.field,i)});const n=t.endAt?new Ec(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ec(t.startAt.position,t.startAt.inclusive):null;return Mw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function wp(t,e,n){return new _h(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yh(t,e){return vg(An(t),An(e))&&t.limitType===e.limitType}function WS(t){return`${yg(An(t))}|lt:${t.limitType}`}function ni(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>BS(s)).join(", ")}]`),gh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Hi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Hi(s)).join(",")),`Target(${r})`}(An(t))}; limitType=${t.limitType})`}function vh(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of la(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,u){const c=Ow(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,la(r),s)||r.endAt&&!function(o,a,u){const c=Ow(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,la(r),s))}(t,e)}function qO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function HS(t){return(e,n)=>{let r=!1;for(const s of la(t)){const i=GO(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function GO(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,o,a){const u=o.data.field(i),c=a.data.field(i);return u!==null&&c!==null?Wi(u,c):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
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
 */class lo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){qs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return LS(this.inner)}size(){return this.innerSize}}/**
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
 */const KO=new $e(Q.comparator);function lr(){return KO}const qS=new $e(Q.comparator);function Qo(...t){let e=qS;for(const n of t)e=e.insert(n.key,n);return e}function GS(t){let e=qS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Es(){return ua()}function KS(){return ua()}function ua(){return new lo(t=>t.toString(),(t,e)=>t.isEqual(e))}const QO=new $e(Q.comparator),YO=new at(Q.comparator);function ue(...t){let e=YO;for(const n of t)e=e.add(n);return e}const XO=new at(fe);function JO(){return XO}/**
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
 */function Eg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wc(e)?"-0":e}}function QS(t){return{integerValue:""+t}}function ZO(t,e){return AO(e)?QS(e):Eg(t,e)}/**
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
 */class wh{constructor(){this._=void 0}}function eL(t,e,n){return t instanceof Wa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&mg(i)&&(i=gg(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ha?XS(t,e):t instanceof qa?JS(t,e):function(s,i){const o=YS(s,i),a=jw(o)+jw(s.Pe);return _p(o)&&_p(s.Pe)?QS(a):Eg(s.serializer,a)}(t,e)}function tL(t,e,n){return t instanceof Ha?XS(t,e):t instanceof qa?JS(t,e):n}function YS(t,e){return t instanceof Ic?function(r){return _p(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Wa extends wh{}class Ha extends wh{constructor(e){super(),this.elements=e}}function XS(t,e){const n=ZS(e);for(const r of t.elements)n.some(s=>bn(s,r))||n.push(r);return{arrayValue:{values:n}}}class qa extends wh{constructor(e){super(),this.elements=e}}function JS(t,e){let n=ZS(e);for(const r of t.elements)n=n.filter(s=>!bn(s,r));return{arrayValue:{values:n}}}class Ic extends wh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function jw(t){return Fe(t.integerValue||t.doubleValue)}function ZS(t){return _g(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class nL{constructor(e,n){this.field=e,this.transform=n}}function rL(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ha&&s instanceof Ha||r instanceof qa&&s instanceof qa?$i(r.elements,s.elements,bn):r instanceof Ic&&s instanceof Ic?bn(r.Pe,s.Pe):r instanceof Wa&&s instanceof Wa}(t.transform,e.transform)}class sL{constructor(e,n){this.version=e,this.transformResults=n}}class Nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ou(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Eh{}function eC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nC(t.key,Nn.none()):new pl(t.key,t.data,Nn.none());{const n=t.data,r=Pt.empty();let s=new at(it.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new as(t.key,r,new Ht(s.toArray()),Nn.none())}}function iL(t,e,n){t instanceof pl?function(s,i,o){const a=s.value.clone(),u=Uw(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof as?function(s,i,o){if(!Ou(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Uw(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(tC(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ca(t,e,n,r){return t instanceof pl?function(i,o,a,u){if(!Ou(i.precondition,o))return a;const c=i.value.clone(),d=zw(i.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof as?function(i,o,a,u){if(!Ou(i.precondition,o))return a;const c=zw(i.fieldTransforms,u,o),d=o.data;return d.setAll(tC(i)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return Ou(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function oL(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=YS(r.transform,s||null);i!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,i))}return n||null}function Fw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&$i(r,s,(i,o)=>rL(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pl extends Eh{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class as extends Eh{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Uw(t,e,n){const r=new Map;ge(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,tL(o,a,n[s]))}return r}function zw(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,eL(i,o,e))}return r}class nC extends Eh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aL extends Eh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class lL{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&iL(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ca(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ca(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=KS();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=eC(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&$i(this.mutations,e.mutations,(n,r)=>Fw(n,r))&&$i(this.baseMutations,e.baseMutations,(n,r)=>Fw(n,r))}}class Tg{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ge(e.mutations.length===r.length);let s=function(){return QO}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Tg(e,n,r,s)}}/**
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
 */class uL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class cL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,ce;function hL(t){switch(t){default:return J();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function rC(t){if(t===void 0)return ar("GRPC error has no .code"),z.UNKNOWN;switch(t){case ze.OK:return z.OK;case ze.CANCELLED:return z.CANCELLED;case ze.UNKNOWN:return z.UNKNOWN;case ze.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case ze.INTERNAL:return z.INTERNAL;case ze.UNAVAILABLE:return z.UNAVAILABLE;case ze.UNAUTHENTICATED:return z.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case ze.NOT_FOUND:return z.NOT_FOUND;case ze.ALREADY_EXISTS:return z.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return z.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case ze.ABORTED:return z.ABORTED;case ze.OUT_OF_RANGE:return z.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return z.UNIMPLEMENTED;case ze.DATA_LOSS:return z.DATA_LOSS;default:return J()}}(ce=ze||(ze={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function dL(){return new TextEncoder}/**
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
 */const fL=new ks([4294967295,4294967295],0);function Bw(t){const e=dL().encode(t),n=new kS;return n.update(e),new Uint8Array(n.digest())}function $w(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ks([n,r],0),new ks([s,i],0)]}class Ig{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Yo(`Invalid padding: ${n}`);if(r<0)throw new Yo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Yo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Yo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ks.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(ks.fromNumber(r)));return s.compare(fL)===1&&(s=new ks([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Bw(e),[r,s]=$w(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ig(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Bw(e),[r,s]=$w(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Yo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Th{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ml.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Th(Z.min(),s,new $e(fe),lr(),ue())}}class ml{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ml(r,n,ue(),ue(),ue())}}/**
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
 */class Lu{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class sC{constructor(e,n){this.targetId=e,this.me=n}}class iC{constructor(e,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ww{constructor(){this.fe=0,this.ge=qw(),this.pe=ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ue(),n=ue(),r=ue();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:J()}}),new ml(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=qw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class pL{constructor(e){this.Le=e,this.Be=new Map,this.ke=lr(),this.qe=Hw(),this.Qe=new $e(fe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(vp(i))if(r===0){const o=new Q(i.path);this.Ue(n,o,yt.newNoDocument(o,Z.min()))}else ge(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Ms(r).toUint8Array()}catch(u){if(u instanceof MS)return Bi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Ig(o,s,i)}catch(u){return Bi(u instanceof Yo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&vp(a.target)){const u=new Q(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,yt.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ue();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Th(e,n,this.Qe,this.ke,r);return this.ke=lr(),this.qe=Hw(),this.Qe=new $e(fe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ww,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(fe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ww),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Hw(){return new $e(Q.comparator)}function qw(){return new $e(Q.comparator)}const mL={asc:"ASCENDING",desc:"DESCENDING"},gL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_L={and:"AND",or:"OR"};class yL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ep(t,e){return t.useProto3Json||gh(e)?e:{value:e}}function Sc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vL(t,e){return Sc(t,e.toTimestamp())}function Pn(t){return ge(!!t),Z.fromTimestamp(function(n){const r=Zr(n);return new Ke(r.seconds,r.nanos)}(t))}function Sg(t,e){return Tp(t,e).canonicalString()}function Tp(t,e){const n=function(s){return new Le(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function aC(t){const e=Le.fromString(t);return ge(dC(e)),e}function Ip(t,e){return Sg(t.databaseId,e.path)}function Hd(t,e){const n=aC(e);if(n.get(1)!==t.databaseId.projectId)throw new K(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(uC(n))}function lC(t,e){return Sg(t.databaseId,e)}function wL(t){const e=aC(t);return e.length===4?Le.emptyPath():uC(e)}function Sp(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function uC(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gw(t,e,n){return{name:Ip(t,e),fields:n.value.mapValue.fields}}function EL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,d){return c.useProto3Json?(ge(d===void 0||typeof d=="string"),ut.fromBase64String(d||"")):(ge(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ut.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?z.UNKNOWN:rC(c.code);return new K(d,c.message||"")}(o);n=new iC(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hd(t,r.document.name),i=Pn(r.document.updateTime),o=r.document.createTime?Pn(r.document.createTime):Z.min(),a=new Pt({mapValue:{fields:r.document.fields}}),u=yt.newFoundDocument(s,i,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Lu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hd(t,r.document),i=r.readTime?Pn(r.readTime):Z.min(),o=yt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Lu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hd(t,r.document),i=r.removedTargetIds||[];n=new Lu([],i,s,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new cL(s,i),a=r.targetId;n=new sC(a,o)}}return n}function TL(t,e){let n;if(e instanceof pl)n={update:Gw(t,e.key,e.value)};else if(e instanceof nC)n={delete:Ip(t,e.key)};else if(e instanceof as)n={update:Gw(t,e.key,e.data),updateMask:xL(e.fieldMask)};else{if(!(e instanceof aL))return J();n={verify:Ip(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Wa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ha)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof qa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ic)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:vL(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J()}(t,e.precondition)),n}function IL(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Pn(s.updateTime):Pn(i);return o.isEqual(Z.min())&&(o=Pn(i)),new sL(o,s.transformResults||[])}(n,e))):[]}function SL(t,e){return{documents:[lC(t,e.path)]}}function CL(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=lC(t,s);const i=function(c){if(c.length!==0)return hC(Dn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:ri(g.field),direction:AL(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ep(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:s}}function RL(t){let e=wL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ge(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(f){const g=cC(f);return g instanceof Dn&&US(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(g=>function(T){return new Tc(si(T.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(f){let g;return g=typeof f=="object"?f.value:f,gh(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(f){const g=!!f.before,_=f.values||[];return new Ec(_,g)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const g=!f.before,_=f.values||[];return new Ec(_,g)}(n.endAt)),$O(e,s,o,i,a,"F",u,c)}function kL(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function cC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=si(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=si(n.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=si(n.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=si(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return He.create(si(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dn.create(n.compositeFilter.filters.map(r=>cC(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function AL(t){return mL[t]}function NL(t){return gL[t]}function PL(t){return _L[t]}function ri(t){return{fieldPath:t.canonicalString()}}function si(t){return it.fromServerFormat(t.fieldPath)}function hC(t){return t instanceof He?function(n){if(n.op==="=="){if(Dw(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NAN"}};if(bw(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Dw(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NAN"}};if(bw(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ri(n.field),op:NL(n.op),value:n.value}}}(t):t instanceof Dn?function(n){const r=n.getFilters().map(s=>hC(s));return r.length===1?r[0]:{compositeFilter:{op:PL(n.op),filters:r}}}(t):J()}function xL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class br{constructor(e,n,r,s,i=Z.min(),o=Z.min(),a=ut.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class bL{constructor(e){this.ct=e}}function DL(t){const e=RL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wp(e,e.limit,"L"):e}/**
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
 */class OL{constructor(){this.un=new LL}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Jr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Jr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class LL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(Le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(Le.comparator)).toArray()}}/**
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
 */class ML{constructor(){this.changes=new lo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class VL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class jL{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ca(r.mutation,s,Ht.empty(),Ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const s=Es();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Qo();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Es();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=lr();const o=ua(),a=function(){return ua()}();return n.forEach((u,c)=>{const d=r.get(c.key);s.has(c.key)&&(d===void 0||d.mutation instanceof as)?i=i.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ca(d.mutation,c,d.mutation.getFieldMask(),Ke.now())):o.set(c.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new VL(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ua();let s=new $e((o,a)=>o-a),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Ht.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(s.get(a.batchId)||ue()).add(u);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=KS();d.forEach(g=>{if(!i.has(g)){const _=eC(n.get(g),r.get(g));_!==null&&f.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):WO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Es());let a=-1,u=i;return o.next(c=>U.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,ue())).next(d=>({batchId:a,changes:GS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let s=Qo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Qo();return this.indexManager.getCollectionParents(e,i).next(a=>U.forEach(a,u=>{const c=function(f,g){return new _h(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(d=>{d.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,yt.newInvalidDocument(d)))});let a=Qo();return o.forEach((u,c)=>{const d=i.get(u);d!==void 0&&ca(d.mutation,c,Ht.empty(),Ke.now()),vh(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class FL{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Pn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:DL(s.bundledQuery),readTime:Pn(s.readTime)}}(n)),U.resolve()}}/**
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
 */class UL{constructor(){this.overlays=new $e(Q.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Es();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Es(),i=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new $e((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=i.get(c.largestBatchId);d===null&&(d=Es(),i=i.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Es(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=s)););return U.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uL(n,r));let i=this.Ir.get(n);i===void 0&&(i=ue(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class zL{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class Cg{constructor(){this.Tr=new at(Ye.Er),this.dr=new at(Ye.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ye(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new Le([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new Le([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=ue();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||fe(e.wr,n.wr)}static Ar(e,n){return fe(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
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
 */class BL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new at(Ye.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lL(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new Ye(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const a=this.Dr(o.wr);i.push(a)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(fe);return n.forEach(s=>{const i=new Ye(s,0),o=new Ye(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{r=r.add(a.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new Q(i),0);let a=new at(fe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.wr)),!0)},o),U.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ge(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ye(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class $L{constructor(e){this.Mr=e,this.docs=function(){return new $e(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=lr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():yt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=lr();const o=n.path,a=new Q(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||SO(IO(d),r)<=0||(s.has(d.key)||vh(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){J()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new WL(this)}getSize(e){return U.resolve(this.size)}}class WL extends ML{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class HL{constructor(e){this.persistence=e,this.Nr=new lo(n=>yg(n),vg),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Cg,this.targetCount=0,this.kr=qi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new qi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
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
 */class qL{constructor(e,n){this.qr={},this.overlays={},this.Qr=new pg(0),this.Kr=!1,this.Kr=!0,this.$r=new zL,this.referenceDelegate=e(this),this.Ur=new HL(this),this.indexManager=new OL,this.remoteDocumentCache=function(s){return new $L(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new bL(n),this.Gr=new FL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new BL(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const s=new GL(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class GL extends RO{constructor(e){super(),this.currentSequenceNumber=e}}class Rg{constructor(e){this.persistence=e,this.Jr=new Cg,this.Yr=null}static Zr(e){return new Rg(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=Q.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,Z.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class kg{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ue(),s=ue();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new kg(e,n.fromCache,r,s)}}/**
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
 */class KL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class QL{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Gx()?8:kO(Et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new KL;return this.Xi(e,n,o).next(a=>{if(i.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Lo()<=le.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",ni(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Lo()<=le.DEBUG&&G("QueryEngine","Query:",ni(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Lo()<=le.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",ni(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,An(n))):U.resolve())}Yi(e,n){if(Vw(n))return U.resolve(null);let r=An(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=wp(n,null,"F"),r=An(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ue(...i);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,wp(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,s){return Vw(n)||s.isEqual(Z.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?U.resolve(null):(Lo()<=le.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ni(n)),this.rs(e,o,n,TO(s,-1)).next(a=>a))})}ts(e,n){let r=new at(HS(e));return n.forEach((s,i)=>{vh(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Lo()<=le.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",ni(n)),this.Ji.getDocumentsMatchingQuery(e,n,Jr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class YL{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new $e(fe),this._s=new lo(i=>yg(i),vg),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jL(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function XL(t,e,n,r){return new YL(t,e,n,r)}async function fC(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=ue();for(const c of s){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of i){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function JL(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,g=f.keys();let _=U.resolve();return g.forEach(T=>{_=_.next(()=>d.getEntry(u,T)).next(I=>{const k=c.docVersions.get(T);ge(k!==null),I.version.compareTo(k)<0&&(f.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),d.addEntry(I)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ue();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function pC(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function ZL(t,e){const n=ee(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const a=[];e.targetChanges.forEach((d,f)=>{const g=s.get(f);if(!g)return;a.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,f)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(ut.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(f,_),function(I,k,E){return I.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,_,d)&&a.push(n.Ur.updateTargetData(i,_))});let u=lr(),c=ue();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),a.push(eM(i,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(Z.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(f=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(d)}return U.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.os=s,i))}function eM(t,e,n){let r=ue(),s=ue();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=lr();return n.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function tM(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nM(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new br(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Cp(t,e,n){const r=ee(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!fl(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Kw(t,e,n){const r=ee(t);let s=Z.min(),i=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=ee(u),g=f._s.get(d);return g!==void 0?U.resolve(f.os.get(g)):f.Ur.getTargetData(c,d)}(r,o,An(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:Z.min(),n?i:ue())).next(a=>(rM(r,qO(e),a),{documents:a,Ts:i})))}function rM(t,e,n){let r=t.us.get(e)||Z.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Qw{constructor(){this.activeTargetIds=JO()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sM{constructor(){this.so=new Qw,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Qw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class iM{_o(e){}shutdown(){}}/**
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
 */class Yw{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let lu=null;function qd(){return lu===null?lu=function(){return 268435456+Math.round(2147483648*Math.random())}():lu++,"0x"+lu.toString(16)}/**
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
 */const oM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class aM{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const mt="WebChannelConnection";class lM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const a=qd(),u=this.xo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${a}:`,u,s);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,i,o),this.No(n,u,c,s).then(d=>(G("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Bi("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",s),d})}Lo(n,r,s,i,o,a){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ao}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=oM[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=qd();return new Promise((o,a)=>{const u=new AS;u.setWithCredentials(!0),u.listenOnce(NS.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case bu.NO_ERROR:const d=u.getResponseJson();G(mt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case bu.TIMEOUT:G(mt,`RPC '${e}' ${i} timed out`),a(new K(z.DEADLINE_EXCEEDED,"Request time out"));break;case bu.HTTP_ERROR:const f=u.getStatus();if(G(mt,`RPC '${e}' ${i} failed with status:`,f,"response text:",u.getResponseText()),f>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const T=function(k){const E=k.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(E)>=0?E:z.UNKNOWN}(_.status);a(new K(T,_.message))}else a(new K(z.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new K(z.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{G(mt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);G(mt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const s=qd(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=bS(),a=xS(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=i.join("");G(mt,`Creating RPC '${e}' stream ${s}: ${d}`,u);const f=o.createWebChannel(d,u);let g=!1,_=!1;const T=new aM({Io:k=>{_?G(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(g||(G(mt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),G(mt,`RPC '${e}' stream ${s} sending:`,k),f.send(k))},To:()=>f.close()}),I=(k,E,y)=>{k.listen(E,S=>{try{y(S)}catch(b){setTimeout(()=>{throw b},0)}})};return I(f,Ko.EventType.OPEN,()=>{_||(G(mt,`RPC '${e}' stream ${s} transport opened.`),T.yo())}),I(f,Ko.EventType.CLOSE,()=>{_||(_=!0,G(mt,`RPC '${e}' stream ${s} transport closed`),T.So())}),I(f,Ko.EventType.ERROR,k=>{_||(_=!0,Bi(mt,`RPC '${e}' stream ${s} transport errored:`,k),T.So(new K(z.UNAVAILABLE,"The operation could not be completed")))}),I(f,Ko.EventType.MESSAGE,k=>{var E;if(!_){const y=k.data[0];ge(!!y);const S=y,b=S.error||((E=S[0])===null||E===void 0?void 0:E.error);if(b){G(mt,`RPC '${e}' stream ${s} received error:`,b);const j=b.status;let F=function(C){const N=ze[C];if(N!==void 0)return rC(N)}(j),R=b.message;F===void 0&&(F=z.INTERNAL,R="Unknown error status: "+j+" with message "+b.message),_=!0,T.So(new K(F,R)),f.close()}else G(mt,`RPC '${e}' stream ${s} received:`,y),T.bo(y)}}),I(a,PS.STAT_EVENT,k=>{k.stat===pp.PROXY?G(mt,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===pp.NOPROXY&&G(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function Gd(){return typeof document<"u"?document:null}/**
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
 */function Ih(t){return new yL(t,!0)}/**
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
 */class mC{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class gC{constructor(e,n,r,s,i,o,a,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new mC(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(ar(n.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new K(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uM extends gC{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=EL(this.serializer,e),r=function(i){if(!("targetChange"in i))return Z.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?Pn(o.readTime):Z.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Sp(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=vp(u)?{documents:SL(i,u)}:{query:CL(i,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=oC(i,o.resumeToken);const c=Ep(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=Sc(i,o.snapshotVersion.toTimestamp());const c=Ep(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=kL(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Sp(this.serializer),n.removeTarget=e,this.a_(n)}}class cM extends gC{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ge(!!e.streamToken),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=IL(e.writeResults,e.commitTime),r=Pn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Sp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>TL(this.serializer,r))};this.a_(n)}}/**
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
 */class hM extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new K(z.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Tp(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(z.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Tp(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(z.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class dM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ar(n),this.D_=!1):G("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class fM{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Gs(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ee(u);c.L_.add(4),await gl(c),c.q_.set("Unknown"),c.L_.delete(4),await Sh(c)}(this))})}),this.q_=new dM(r,s)}}async function Sh(t){if(Gs(t))for(const e of t.B_)await e(!0)}async function gl(t){for(const e of t.B_)await e(!1)}function _C(t,e){const n=ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),xg(n)?Pg(n):uo(n).r_()&&Ng(n,e))}function Ag(t,e){const n=ee(t),r=uo(n);n.N_.delete(e),r.r_()&&yC(n,e),n.N_.size===0&&(r.r_()?r.o_():Gs(n)&&n.q_.set("Unknown"))}function Ng(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}uo(t).A_(e)}function yC(t,e){t.Q_.xe(e),uo(t).R_(e)}function Pg(t){t.Q_=new pL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),uo(t).start(),t.q_.v_()}function xg(t){return Gs(t)&&!uo(t).n_()&&t.N_.size>0}function Gs(t){return ee(t).L_.size===0}function vC(t){t.Q_=void 0}async function pM(t){t.q_.set("Online")}async function mM(t){t.N_.forEach((e,n)=>{Ng(t,e)})}async function gM(t,e){vC(t),xg(t)?(t.q_.M_(e),Pg(t)):t.q_.set("Unknown")}async function _M(t,e,n){if(t.q_.set("Online"),e instanceof iC&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cc(t,r)}else if(e instanceof Lu?t.Q_.Ke(e):e instanceof sC?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Z.min()))try{const r=await pC(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.N_.get(c);d&&i.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=i.N_.get(u);if(!d)return;i.N_.set(u,d.withResumeToken(ut.EMPTY_BYTE_STRING,d.snapshotVersion)),yC(i,u);const f=new br(d.target,u,c,d.sequenceNumber);Ng(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await Cc(t,r)}}async function Cc(t,e,n){if(!fl(e))throw e;t.L_.add(1),await gl(t),t.q_.set("Offline"),n||(n=()=>pC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Sh(t)})}function wC(t,e){return e().catch(n=>Cc(t,n,e))}async function Ch(t){const e=ee(t),n=es(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;yM(e);)try{const s=await tM(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,vM(e,s)}catch(s){await Cc(e,s)}EC(e)&&TC(e)}function yM(t){return Gs(t)&&t.O_.length<10}function vM(t,e){t.O_.push(e);const n=es(t);n.r_()&&n.V_&&n.m_(e.mutations)}function EC(t){return Gs(t)&&!es(t).n_()&&t.O_.length>0}function TC(t){es(t).start()}async function wM(t){es(t).p_()}async function EM(t){const e=es(t);for(const n of t.O_)e.m_(n.mutations)}async function TM(t,e,n){const r=t.O_.shift(),s=Tg.from(r,e,n);await wC(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ch(t)}async function IM(t,e){e&&es(t).V_&&await async function(r,s){if(function(o){return hL(o)&&o!==z.ABORTED}(s.code)){const i=r.O_.shift();es(r).s_(),await wC(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ch(r)}}(t,e),EC(t)&&TC(t)}async function Xw(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=Gs(n);n.L_.add(3),await gl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Sh(n)}async function SM(t,e){const n=ee(t);e?(n.L_.delete(2),await Sh(n)):e||(n.L_.add(2),await gl(n),n.q_.set("Unknown"))}function uo(t){return t.K_||(t.K_=function(n,r,s){const i=ee(n);return i.w_(),new uM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:pM.bind(null,t),Ro:mM.bind(null,t),mo:gM.bind(null,t),d_:_M.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),xg(t)?Pg(t):t.q_.set("Unknown")):(await t.K_.stop(),vC(t))})),t.K_}function es(t){return t.U_||(t.U_=function(n,r,s){const i=ee(n);return i.w_(),new cM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:wM.bind(null,t),mo:IM.bind(null,t),f_:EM.bind(null,t),g_:TM.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ch(t)):(await t.U_.stop(),t.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class bg{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new bg(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dg(t,e){if(ar("AsyncQueue",`${e}: ${t}`),fl(t))return new K(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ki{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Qo(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new ki(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ki)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ki;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Jw{constructor(){this.W_=new $e(Q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):J():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gi{constructor(e,n,r,s,i,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Gi(e,n,ki.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class CM{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class RM{constructor(){this.queries=Zw(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ee(n),i=s.queries;s.queries=Zw(),i.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new K(z.ABORTED,"Firestore shutting down"))}}function Zw(){return new lo(t=>WS(t),yh)}async function kM(t,e){const n=ee(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new CM,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Dg(o,`Initialization of query '${ni(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Og(n)}async function AM(t,e){const n=ee(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function NM(t,e){const n=ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(r=!0);o.z_=s}}r&&Og(n)}function PM(t,e,n){const r=ee(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Og(t){t.Y_.forEach(e=>{e.next()})}var Rp,eE;(eE=Rp||(Rp={})).ea="default",eE.Cache="cache";class xM{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Rp.Cache}}/**
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
 */class IC{constructor(e){this.key=e}}class SC{constructor(e){this.key=e}}class bM{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ue(),this.mutatedKeys=ue(),this.Aa=HS(e),this.Ra=new ki(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Jw,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,f)=>{const g=s.get(d),_=vh(this.query,f)?f:null,T=!!g&&this.mutatedKeys.has(g.key),I=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let k=!1;g&&_?g.data.isEqual(_.data)?T!==I&&(r.track({type:3,doc:_}),k=!0):this.ga(g,_)||(r.track({type:2,doc:_}),k=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!g&&_?(r.track({type:0,doc:_}),k=!0):g&&!_&&(r.track({type:1,doc:g}),k=!0,(u||c)&&(a=!0)),k&&(_?(o=o.add(_),i=I?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(_,T){const I=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return I(_)-I(T)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),s=s!=null&&s;const a=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Gi(this.query,e.Ra,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Jw,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ue(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new SC(r))}),this.da.forEach(r=>{e.has(r)||n.push(new IC(r))}),n}ba(e){this.Ta=e.Ts,this.da=ue();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Gi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class DM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class OM{constructor(e){this.key=e,this.va=!1}}class LM{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new lo(a=>WS(a),yh),this.Ma=new Map,this.xa=new Set,this.Oa=new $e(Q.comparator),this.Na=new Map,this.La=new Cg,this.Ba={},this.ka=new Map,this.qa=qi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function MM(t,e,n=!0){const r=PC(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await CC(r,e,n,!0),s}async function VM(t,e){const n=PC(t);await CC(n,e,!0,!1)}async function CC(t,e,n,r){const s=await nM(t.localStore,An(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await jM(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&_C(t.remoteStore,s),a}async function jM(t,e,n,r,s){t.Ka=(f,g,_)=>async function(I,k,E,y){let S=k.view.ma(E);S.ns&&(S=await Kw(I.localStore,k.query,!1).then(({documents:R})=>k.view.ma(R,S)));const b=y&&y.targetChanges.get(k.targetId),j=y&&y.targetMismatches.get(k.targetId)!=null,F=k.view.applyChanges(S,I.isPrimaryClient,b,j);return nE(I,k.targetId,F.wa),F.snapshot}(t,f,g,_);const i=await Kw(t.localStore,e,!0),o=new bM(e,i.Ts),a=o.ma(i.documents),u=ml.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,u);nE(t,n,c.wa);const d=new DM(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function FM(t,e,n){const r=ee(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!yh(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Cp(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ag(r.remoteStore,s.targetId),kp(r,s.targetId)}).catch(dl)):(kp(r,s.targetId),await Cp(r.localStore,s.targetId,!0))}async function UM(t,e){const n=ee(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ag(n.remoteStore,r.targetId))}async function zM(t,e,n){const r=KM(t);try{const s=await function(o,a){const u=ee(o),c=Ke.now(),d=a.reduce((_,T)=>_.add(T.key),ue());let f,g;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=lr(),I=ue();return u.cs.getEntries(_,d).next(k=>{T=k,T.forEach((E,y)=>{y.isValidDocument()||(I=I.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,T)).next(k=>{f=k;const E=[];for(const y of a){const S=oL(y,f.get(y.key).overlayedDocument);S!=null&&E.push(new as(y.key,S,VS(S.value.mapValue),Nn.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,E,a)}).next(k=>{g=k;const E=k.applyToLocalDocumentSet(f,I);return u.documentOverlayCache.saveOverlays(_,k.batchId,E)})}).then(()=>({batchId:g.batchId,changes:GS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new $e(fe)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,s.batchId,n),await _l(r,s.changes),await Ch(r.remoteStore)}catch(s){const i=Dg(s,"Failed to persist write");n.reject(i)}}async function RC(t,e){const n=ee(t);try{const r=await ZL(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(ge(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?ge(o.va):s.removedDocuments.size>0&&(ge(o.va),o.va=!1))}),await _l(n,r,e)}catch(r){await dl(r)}}function tE(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const a=o.view.Z_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=ee(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const g of f.j_)g.Z_(a)&&(c=!0)}),c&&Og(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BM(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new $e(Q.comparator);o=o.insert(i,yt.newNoDocument(i,Z.min()));const a=ue().add(i),u=new Th(Z.min(),new Map,new $e(fe),o,a);await RC(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Lg(r)}else await Cp(r.localStore,e,!1).then(()=>kp(r,e,n)).catch(dl)}async function $M(t,e){const n=ee(t),r=e.batch.batchId;try{const s=await JL(n.localStore,e);AC(n,r,null),kC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _l(n,s)}catch(s){await dl(s)}}async function WM(t,e,n){const r=ee(t);try{const s=await function(o,a){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(ge(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);AC(r,e,n),kC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _l(r,s)}catch(s){await dl(s)}}function kC(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function AC(t,e,n){const r=ee(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function kp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||NC(t,r)})}function NC(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Ag(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Lg(t))}function nE(t,e,n){for(const r of n)r instanceof IC?(t.La.addReference(r.key,e),HM(t,r)):r instanceof SC?(G("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||NC(t,r.key)):J()}function HM(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(G("SyncEngine","New document in limbo: "+n),t.xa.add(r),Lg(t))}function Lg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Q(Le.fromString(e)),r=t.qa.next();t.Na.set(r,new OM(n)),t.Oa=t.Oa.insert(n,r),_C(t.remoteStore,new br(An(wg(n.path)),r,"TargetPurposeLimboResolution",pg.oe))}}async function _l(t,e,n){const r=ee(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){s.push(c);const f=kg.Wi(u.targetId,c);i.push(f)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,c){const d=ee(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>U.forEach(c,g=>U.forEach(g.$i,_=>d.persistence.referenceDelegate.addReference(f,g.targetId,_)).next(()=>U.forEach(g.Ui,_=>d.persistence.referenceDelegate.removeReference(f,g.targetId,_)))))}catch(f){if(!fl(f))throw f;G("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const g=f.targetId;if(!f.fromCache){const _=d.os.get(g),T=_.snapshotVersion,I=_.withLastLimboFreeSnapshotVersion(T);d.os=d.os.insert(g,I)}}}(r.localStore,i))}async function qM(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await fC(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(a=>{a.forEach(u=>{u.reject(new K(z.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _l(n,r.hs)}}function GM(t,e){const n=ee(t),r=n.Na.get(e);if(r&&r.va)return ue().add(r.key);{let s=ue();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const a=n.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}function PC(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=RC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BM.bind(null,e),e.Ca.d_=NM.bind(null,e.eventManager),e.Ca.$a=PM.bind(null,e.eventManager),e}function KM(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$M.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WM.bind(null,e),e}class Rc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ih(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return XL(this.persistence,new QL,e.initialUser,this.serializer)}Ga(e){return new qL(Rg.Zr,this.serializer)}Wa(e){return new sM}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rc.provider={build:()=>new Rc};class Ap{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qM.bind(null,this.syncEngine),await SM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new RM}()}createDatastore(e){const n=Ih(e.databaseInfo.databaseId),r=function(i){return new lM(i)}(e.databaseInfo);return function(i,o,a,u){return new hM(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new fM(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>tE(this.syncEngine,n,0),function(){return Yw.D()?new Yw:new iM}())}createSyncEngine(e,n){return function(s,i,o,a,u,c,d){const f=new LM(s,i,o,a,u,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ee(s);G("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await gl(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ap.provider={build:()=>new Ap};/**
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
 */class QM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ar("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class YM{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=OS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{G("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Dg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kd(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await fC(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function rE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await XM(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Xw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Xw(e.remoteStore,s)),t._onlineComponents=e}async function XM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===z.FAILED_PRECONDITION||s.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Bi("Error using user provided cache. Falling back to memory cache: "+n),await Kd(t,new Rc)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Kd(t,new Rc);return t._offlineComponents}async function xC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await rE(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await rE(t,new Ap))),t._onlineComponents}function JM(t){return xC(t).then(e=>e.syncEngine)}async function ZM(t){const e=await xC(t),n=e.eventManager;return n.onListen=MM.bind(null,e.syncEngine),n.onUnlisten=FM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=VM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=UM.bind(null,e.syncEngine),n}function eV(t,e,n={}){const r=new qr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const d=new QM({next:g=>{d.Za(),o.enqueueAndForget(()=>AM(i,f));const _=g.docs.has(a);!_&&g.fromCache?c.reject(new K(z.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&u&&u.source==="server"?c.reject(new K(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),f=new xM(wg(a.path),d,{includeMetadataChanges:!0,_a:!0});return kM(i,f)}(await ZM(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function bC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const sE=new Map;/**
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
 */function tV(t,e,n){if(!n)throw new K(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nV(t,e,n,r){if(e===!0&&r===!0)throw new K(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function iE(t){if(!Q.isDocumentKey(t))throw new K(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Mg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function js(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mg(t);throw new K(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class oE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vg{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fO;switch(r.type){case"firstParty":return new _O(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=sE.get(n);r&&(G("ComponentProvider","Removing Datastore"),sE.delete(n),r.terminate())}(this),Promise.resolve()}}function rV(t,e,n,r={}){var s;const i=(t=js(t,Vg))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Bi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=gt.MOCK_USER;else{a=Jm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new K(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new gt(c)}t._authCredentials=new pO(new DS(a,u))}}/**
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
 */class jg{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jg(this.firestore,e,this._query)}}class Kt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ga(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Kt(this.firestore,e,this._key)}}class Ga extends jg{constructor(e,n,r){super(e,n,wg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Kt(this.firestore,null,new Q(e))}withConverter(e){return new Ga(this.firestore,e,this._path)}}function uu(t,e,...n){if(t=be(t),arguments.length===1&&(e=OS.newId()),tV("doc","path",e),t instanceof Vg){const r=Le.fromString(e,...n);return iE(r),new Kt(t,null,new Q(r))}{if(!(t instanceof Kt||t instanceof Ga))throw new K(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return iE(r),new Kt(t.firestore,t instanceof Ga?t.converter:null,new Q(r))}}/**
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
 */class aE{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new mC(this,"async_queue_retry"),this.Vu=()=>{const r=Gd();r&&G("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Gd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Gd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new qr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!fl(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ar("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=bg.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Rh extends Vg{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new aE,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new aE(e),this._firestoreClient=void 0,await e}}}function sV(t,e){const n=typeof t=="object"?t:dh(),r=typeof t=="string"?t:"(default)",s=ll(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Xm("firestore");i&&rV(s,...i)}return s}function DC(t){if(t._terminated)throw new K(z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||iV(t),t._firestoreClient}function iV(t){var e,n,r;const s=t._freezeSettings(),i=function(a,u,c,d){return new PO(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,bC(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new YM(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Ki{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ki(ut.fromBase64String(e))}catch(n){throw new K(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ki(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class kh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ah{constructor(e){this._methodName=e}}/**
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
 */class Fg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
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
 */class Ug{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const oV=/^__.*__$/;class aV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,n,this.fieldTransforms):new pl(e,this.data,n,this.fieldTransforms)}}class OC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new as(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function LC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class zg{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new zg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return kc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(LC(this.Cu)&&oV.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class lV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ih(e)}Qu(e,n,r,s=!1){return new zg({Cu:e,methodName:n,qu:r,path:it.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function MC(t){const e=t._freezeSettings(),n=Ih(t._databaseId);return new lV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uV(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);$g("Data must be an object, but it was:",o,r);const a=VC(r,o);let u,c;if(i.merge)u=new Ht(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const f of i.mergeFields){const g=Np(e,f,n);if(!o.contains(g))throw new K(z.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);FC(d,g)||d.push(g)}u=new Ht(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new aV(new Pt(a),u,c)}class Nh extends Ah{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nh}}class Bg extends Ah{_toFieldTransform(e){return new nL(e.path,new Wa)}isEqual(e){return e instanceof Bg}}function cV(t,e,n,r){const s=t.Qu(1,e,n);$g("Data must be an object, but it was:",s,r);const i=[],o=Pt.empty();qs(r,(u,c)=>{const d=Wg(e,u,n);c=be(c);const f=s.Nu(d);if(c instanceof Nh)i.push(d);else{const g=Ph(c,f);g!=null&&(i.push(d),o.set(d,g))}});const a=new Ht(i);return new OC(o,a,s.fieldTransforms)}function hV(t,e,n,r,s,i){const o=t.Qu(1,e,n),a=[Np(e,r,n)],u=[s];if(i.length%2!=0)throw new K(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)a.push(Np(e,i[g])),u.push(i[g+1]);const c=[],d=Pt.empty();for(let g=a.length-1;g>=0;--g)if(!FC(c,a[g])){const _=a[g];let T=u[g];T=be(T);const I=o.Nu(_);if(T instanceof Nh)c.push(_);else{const k=Ph(T,I);k!=null&&(c.push(_),d.set(_,k))}}const f=new Ht(c);return new OC(d,f,o.fieldTransforms)}function Ph(t,e){if(jC(t=be(t)))return $g("Unsupported field value:",e,t),VC(t,e);if(t instanceof Ah)return function(r,s){if(!LC(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let u=Ph(a,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ZO(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ke.fromDate(r);return{timestampValue:Sc(s.serializer,i)}}if(r instanceof Ke){const i=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Sc(s.serializer,i)}}if(r instanceof Fg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ki)return{bytesValue:oC(s.serializer,r._byteString)};if(r instanceof Kt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Sg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ug)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Eg(a.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Mg(r)}`)}(t,e)}function VC(t,e){const n={};return LS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qs(t,(r,s)=>{const i=Ph(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function jC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof Fg||t instanceof Ki||t instanceof Kt||t instanceof Ah||t instanceof Ug)}function $g(t,e,n){if(!jC(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Mg(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Np(t,e,n){if((e=be(e))instanceof kh)return e._internalPath;if(typeof e=="string")return Wg(t,e);throw kc("Field path arguments must be of type string or ",t,!1,void 0,n)}const dV=new RegExp("[~\\*/\\[\\]]");function Wg(t,e,n){if(e.search(dV)>=0)throw kc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kh(...e.split("."))._internalPath}catch{throw kc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function kc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new K(z.INVALID_ARGUMENT,a+t+u)}function FC(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class UC{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zC("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fV extends UC{data(){return super.data()}}function zC(t,e){return typeof e=="string"?Wg(t,e):e instanceof kh?e._internalPath:e._delegate._internalPath}class pV{convertValue(e,n="none"){switch(Vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return qs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Fe(o.doubleValue));return new Ug(i)}convertGeoPoint(e){return new Fg(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(za(e));default:return null}}convertTimestamp(e){const n=Zr(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);ge(dC(r));const s=new Ba(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(n)||ar(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function mV(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class gV{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class BC extends UC{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _V(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(zC("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class _V extends BC{data(e={}){return super.data(e)}}/**
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
 */function lE(t){t=js(t,Kt);const e=js(t.firestore,Rh);return eV(DC(e),t._key).then(n=>wV(e,t,n))}class yV extends pV{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ki(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Kt(this.firestore,null,n)}}function vV(t,e,n){t=js(t,Kt);const r=js(t.firestore,Rh),s=mV(t.converter,e);return $C(r,[uV(MC(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Nn.none())])}function Qd(t,e,n,...r){t=js(t,Kt);const s=js(t.firestore,Rh),i=MC(s);let o;return o=typeof(e=be(e))=="string"||e instanceof kh?hV(i,"updateDoc",t._key,e,n,r):cV(i,"updateDoc",t._key,e),$C(s,[o.toMutation(t._key,Nn.exists(!0))])}function $C(t,e){return function(r,s){const i=new qr;return r.asyncQueue.enqueueAndForget(async()=>zM(await JM(r),s,i)),i.promise}(DC(t),e)}function wV(t,e,n){const r=n.docs.get(e._key),s=new yV(t);return new BC(t,s,e._key,r,new gV(n.hasPendingWrites,n.fromCache),e.converter)}function Mo(){return new Bg("serverTimestamp")}(function(e,n=!0){(function(s){ao=s})(os),Xr(new sr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Rh(new mO(r.getProvider("auth-internal")),new vO(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ba(c.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),nn(kw,"4.7.3",e),nn(kw,"4.7.3","esm2017")})();/**
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
 */const WC="firebasestorage.googleapis.com",HC="storageBucket",EV=2*60*1e3,TV=10*60*1e3;/**
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
 */class je extends Ln{constructor(e,n,r=0){super(Yd(e),`Firebase Storage: ${n} (${Yd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ve;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ve||(Ve={}));function Yd(t){return"storage/"+t}function Hg(){const t="An unknown error occurred, please check the error payload for server response.";return new je(Ve.UNKNOWN,t)}function IV(t){return new je(Ve.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function SV(t){return new je(Ve.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function CV(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new je(Ve.UNAUTHENTICATED,t)}function RV(){return new je(Ve.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function kV(t){return new je(Ve.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function AV(){return new je(Ve.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function NV(){return new je(Ve.CANCELED,"User canceled the upload/download.")}function PV(t){return new je(Ve.INVALID_URL,"Invalid URL '"+t+"'.")}function xV(t){return new je(Ve.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function bV(){return new je(Ve.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+HC+"' property when initializing the app?")}function DV(){return new je(Ve.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function OV(){return new je(Ve.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function LV(t){return new je(Ve.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Pp(t){return new je(Ve.INVALID_ARGUMENT,t)}function qC(){return new je(Ve.APP_DELETED,"The Firebase app was deleted.")}function MV(t){return new je(Ve.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ha(t,e){return new je(Ve.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Vo(t){throw new je(Ve.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=qt.makeFromUrl(e,n)}catch{return new qt(e,"")}if(r.path==="")return r;throw xV(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${d}/b/${s}/o${g}`,"i"),T={bucket:1,path:3},I=n===WC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",E=new RegExp(`^https?://${I}/${s}/${k}`,"i"),S=[{regex:a,indices:u,postModify:i},{regex:_,indices:T,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<S.length;b++){const j=S[b],F=j.regex.exec(e);if(F){const R=F[j.indices.bucket];let w=F[j.indices.path];w||(w=""),r=new qt(R,w),j.postModify(r);break}}if(r==null)throw PV(e);return r}}class VV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function jV(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...k){c||(c=!0,e.apply(null,k))}function f(k){s=setTimeout(()=>{s=null,t(_,u())},k)}function g(){i&&clearTimeout(i)}function _(k,...E){if(c){g();return}if(k){g(),d.call(null,k,...E);return}if(u()||o){g(),d.call(null,k,...E);return}r<64&&(r*=2);let S;a===1?(a=2,S=0):S=(r+Math.random())*1e3,f(S)}let T=!1;function I(k){T||(T=!0,g(),!c&&(s!==null?(k||(a=2),clearTimeout(s),f(0)):k||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,I(!0)},n),I}function FV(t){t(!1)}/**
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
 */function UV(t){return t!==void 0}function zV(t){return typeof t=="object"&&!Array.isArray(t)}function qg(t){return typeof t=="string"||t instanceof String}function uE(t){return Gg()&&t instanceof Blob}function Gg(){return typeof Blob<"u"}function cE(t,e,n,r){if(r<e)throw Pp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Pp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Kg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function GC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var As;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(As||(As={}));/**
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
 */function BV(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class $V{constructor(e,n,r,s,i,o,a,u,c,d,f,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,T)=>{this.resolve_=_,this.reject_=T,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new cu(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===As.NO_ERROR,u=i.getStatus();if(!a||BV(u,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===As.ABORT;r(!1,new cu(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new cu(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());UV(u)?i(u):i()}catch(u){o(u)}else if(a!==null){const u=Hg();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(s.canceled){const u=this.appDelete_?qC():NV();o(u)}else{const u=AV();o(u)}};this.canceled_?n(!1,new cu(!1,null,!0)):this.backoffId_=jV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&FV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class cu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function WV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function HV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function GV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function KV(t,e,n,r,s,i,o=!0){const a=GC(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return qV(c,e),WV(c,n),HV(c,i),GV(c,r),new $V(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function QV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function YV(...t){const e=QV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Gg())return new Blob(t);throw new je(Ve.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function XV(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function JV(t){if(typeof atob>"u")throw LV("base-64");return atob(t)}/**
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
 */const In={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xd{constructor(e,n){this.data=e,this.contentType=n||null}}function ZV(t,e){switch(t){case In.RAW:return new Xd(KC(e));case In.BASE64:case In.BASE64URL:return new Xd(QC(t,e));case In.DATA_URL:return new Xd(tj(e),nj(e))}throw Hg()}function KC(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function ej(t){let e;try{e=decodeURIComponent(t)}catch{throw ha(In.DATA_URL,"Malformed data URL.")}return KC(e)}function QC(t,e){switch(t){case In.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ha(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case In.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ha(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=JV(e)}catch(s){throw s.message.includes("polyfill")?s:ha(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class YC{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ha(In.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=rj(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function tj(t){const e=new YC(t);return e.base64?QC(In.BASE64,e.rest):ej(e.rest)}function nj(t){return new YC(t).contentType}function rj(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Ar{constructor(e,n){let r=0,s="";uE(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(uE(this.data_)){const r=this.data_,s=XV(r,e,n);return s===null?null:new Ar(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ar(r,!0)}}static getBlob(...e){if(Gg()){const n=e.map(r=>r instanceof Ar?r.data_:r);return new Ar(YV.apply(null,n))}else{const n=e.map(o=>qg(o)?ZV(In.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Ar(s,!0)}}uploadData(){return this.data_}}/**
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
 */function XC(t){let e;try{e=JSON.parse(t)}catch{return null}return zV(e)?e:null}/**
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
 */function sj(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ij(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function JC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function oj(t,e){return e}class St{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||oj}}let hu=null;function aj(t){return!qg(t)||t.length<2?t:JC(t)}function ZC(){if(hu)return hu;const t=[];t.push(new St("bucket")),t.push(new St("generation")),t.push(new St("metageneration")),t.push(new St("name","fullPath",!0));function e(i,o){return aj(o)}const n=new St("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new St("size");return s.xform=r,t.push(s),t.push(new St("timeCreated")),t.push(new St("updated")),t.push(new St("md5Hash",null,!0)),t.push(new St("cacheControl",null,!0)),t.push(new St("contentDisposition",null,!0)),t.push(new St("contentEncoding",null,!0)),t.push(new St("contentLanguage",null,!0)),t.push(new St("contentType",null,!0)),t.push(new St("metadata","customMetadata",!0)),hu=t,hu}function lj(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new qt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function uj(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return lj(r,t),r}function e1(t,e,n){const r=XC(e);return r===null?null:uj(t,r,n)}function cj(t,e,n,r){const s=XC(e);if(s===null||!qg(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const d=t.bucket,f=t.fullPath,g="/b/"+o(d)+"/o/"+o(f),_=Kg(g,n,r),T=GC({alt:"media",token:c});return _+T})[0]}function hj(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class t1{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function n1(t){if(!t)throw Hg()}function dj(t,e){function n(r,s){const i=e1(t,s,e);return n1(i!==null),i}return n}function fj(t,e){function n(r,s){const i=e1(t,s,e);return n1(i!==null),cj(i,s,t.host,t._protocol)}return n}function r1(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=RV():s=CV():n.getStatus()===402?s=SV(t.bucket):n.getStatus()===403?s=kV(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function pj(t){const e=r1(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=IV(t.path)),i.serverResponse=s.serverResponse,i}return n}function mj(t,e,n){const r=e.fullServerUrl(),s=Kg(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new t1(s,i,fj(t,n),o);return a.errorHandler=pj(e),a}function gj(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _j(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=gj(null,e)),r}function yj(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let b=0;b<2;b++)S=S+Math.random().toString().slice(2);return S}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=_j(e,r,s),d=hj(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+u+"--",_=Ar.getBlob(f,r,g);if(_===null)throw DV();const T={name:c.fullPath},I=Kg(i,t.host,t._protocol),k="POST",E=t.maxUploadRetryTime,y=new t1(I,k,dj(t,n),E);return y.urlParams=T,y.headers=o,y.body=_.uploadData(),y.errorHandler=r1(e),y}class vj{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=As.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=As.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=As.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Vo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Vo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Vo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Vo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Vo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class wj extends vj{initXhr(){this.xhr_.responseType="text"}}function s1(){return new wj}/**
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
 */class Fs{constructor(e,n){this._service=e,n instanceof qt?this._location=n:this._location=qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fs(e,n)}get root(){const e=new qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return JC(this._location.path)}get storage(){return this._service}get parent(){const e=sj(this._location.path);if(e===null)return null;const n=new qt(this._location.bucket,e);return new Fs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw MV(e)}}function Ej(t,e,n){t._throwIfRoot("uploadBytes");const r=yj(t.storage,t._location,ZC(),new Ar(e,!0),n);return t.storage.makeRequestWithTokens(r,s1).then(s=>({metadata:s,ref:t}))}function Tj(t){t._throwIfRoot("getDownloadURL");const e=mj(t.storage,t._location,ZC());return t.storage.makeRequestWithTokens(e,s1).then(n=>{if(n===null)throw OV();return n})}function Ij(t,e){const n=ij(t._location.path,e),r=new qt(t._location.bucket,n);return new Fs(t.storage,r)}/**
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
 */function Sj(t){return/^[A-Za-z]+:\/\//.test(t)}function Cj(t,e){return new Fs(t,e)}function i1(t,e){if(t instanceof Qg){const n=t;if(n._bucket==null)throw bV();const r=new Fs(n,n._bucket);return e!=null?i1(r,e):r}else return e!==void 0?Ij(t,e):t}function Rj(t,e){if(e&&Sj(e)){if(t instanceof Qg)return Cj(t,e);throw Pp("To use ref(service, url), the first argument must be a Storage instance.")}else return i1(t,e)}function hE(t,e){const n=e==null?void 0:e[HC];return n==null?null:qt.makeFromBucketSpec(n,t)}function kj(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Jm(s,t.app.options.projectId))}class Qg{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=WC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=EV,this._maxUploadRetryTime=TV,this._requests=new Set,s!=null?this._bucket=qt.makeFromBucketSpec(s,this._host):this._bucket=hE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qt.makeFromBucketSpec(this._url,e):this._bucket=hE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){cE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){cE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new VV(qC());{const o=KV(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const dE="@firebase/storage",fE="0.13.2";/**
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
 */const o1="storage";function Aj(t,e,n){return t=be(t),Ej(t,e,n)}function Nj(t){return t=be(t),Tj(t)}function Pj(t,e){return t=be(t),Rj(t,e)}function xj(t=dh(),e){t=be(t);const r=ll(t,o1).getImmediate({identifier:e}),s=Xm("storage");return s&&bj(r,...s),r}function bj(t,e,n,r={}){kj(t,e,n,r)}function Dj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Qg(n,r,s,e,os)}function Oj(){Xr(new sr(o1,Dj,"PUBLIC").setMultipleInstances(!0)),nn(dE,fE,""),nn(dE,fE,"esm2017")}Oj();var pE={};const mE="@firebase/database",gE="1.0.8";/**
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
 */let a1="";function Lj(t){a1=t}/**
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
 */class Mj{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ze(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Va(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Vj{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return mr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const l1=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Mj(e)}}catch{}return new Vj},Ts=l1("localStorage"),jj=l1("sessionStorage");/**
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
 */const Ai=new hh("@firebase/database"),Fj=function(){let t=1;return function(){return t++}}(),u1=function(t){const e=i2(t),n=new t2;n.update(e);const r=n.digest();return Ym.encodeByteArray(r)},yl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=yl.apply(null,r):typeof r=="object"?e+=Ze(r):e+=r,e+=" "}return e};let da=null,_E=!0;const Uj=function(t,e){$(!0,"Can't turn on custom loggers persistently."),Ai.logLevel=le.VERBOSE,da=Ai.log.bind(Ai)},vt=function(...t){if(_E===!0&&(_E=!1,da===null&&jj.get("logging_enabled")===!0&&Uj()),da){const e=yl.apply(null,t);da(e)}},vl=function(t){return function(...e){vt(t,...e)}},xp=function(...t){const e="FIREBASE INTERNAL ERROR: "+yl(...t);Ai.error(e)},ur=function(...t){const e=`FIREBASE FATAL ERROR: ${yl(...t)}`;throw Ai.error(e),new Error(e)},Vt=function(...t){const e="FIREBASE WARNING: "+yl(...t);Ai.warn(e)},zj=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},c1=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Bj=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Qi="[MIN_NAME]",Us="[MAX_NAME]",co=function(t,e){if(t===e)return 0;if(t===Qi||e===Us)return-1;if(e===Qi||t===Us)return 1;{const n=yE(t),r=yE(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},$j=function(t,e){return t===e?0:t<e?-1:1},jo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ze(e))},Yg=function(t){if(typeof t!="object"||t===null)return Ze(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ze(e[r]),n+=":",n+=Yg(t[e[r]]);return n+="}",n},h1=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function jt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const d1=function(t){$(!c1(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,u;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const d=c.join("");let f="";for(u=0;u<64;u+=8){let g=parseInt(d.substr(u,8),2).toString(16);g.length===1&&(g="0"+g),f=f+g}return f.toLowerCase()},Wj=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Hj=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function qj(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Gj=new RegExp("^-?(0*)\\d{1,10}$"),Kj=-2147483648,Qj=2147483647,yE=function(t){if(Gj.test(t)){const e=Number(t);if(e>=Kj&&e<=Qj)return e}return null},ho=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Vt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Yj=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Xj{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Vt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Jj{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(vt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Vt(e)}}class Mu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Mu.OWNER="owner";/**
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
 */const Xg="5",f1="v",p1="s",m1="r",g1="f",_1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,y1="ls",v1="p",bp="ac",w1="websocket",E1="long_polling";/**
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
 */class T1{constructor(e,n,r,s,i=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ts.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ts.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Zj(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function I1(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let r;if(e===w1)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===E1)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Zj(t)&&(n.ns=t.namespace);const s=[];return jt(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class e4{constructor(){this.counters_={}}incrementCounter(e,n=1){mr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Mx(this.counters_)}}/**
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
 */const Jd={},Zd={};function Jg(t){const e=t.toString();return Jd[e]||(Jd[e]=new e4),Jd[e]}function t4(t,e){const n=t.toString();return Zd[n]||(Zd[n]=e()),Zd[n]}/**
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
 */class n4{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&ho(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const vE="start",r4="close",s4="pLPCommand",i4="pRTLPCB",S1="id",C1="pw",R1="ser",o4="cb",a4="seg",l4="ts",u4="d",c4="dframe",k1=1870,A1=30,h4=k1-A1,d4=25e3,f4=3e4;class _i{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vl(e),this.stats_=Jg(n),this.urlFn=u=>(this.appCheckToken&&(u[bp]=this.appCheckToken),I1(n,E1,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new n4(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(f4)),Bj(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Zg((...i)=>{const[o,a,u,c,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===vE)this.id=a,this.password=u;else if(o===r4)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[vE]="t",r[R1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[o4]=this.scriptTagHolder.uniqueCallbackIdentifier),r[f1]=Xg,this.transportSessionId&&(r[p1]=this.transportSessionId),this.lastSessionId&&(r[y1]=this.lastSessionId),this.applicationId&&(r[v1]=this.applicationId),this.appCheckToken&&(r[bp]=this.appCheckToken),typeof location<"u"&&location.hostname&&_1.test(location.hostname)&&(r[m1]=g1);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_i.forceAllow_=!0}static forceDisallow(){_i.forceDisallow_=!0}static isAvailable(){return _i.forceAllow_?!0:!_i.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Wj()&&!Hj()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=jI(n),s=h1(r,h4);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[c4]="t",r[S1]=e,r[C1]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ze(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Zg{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Fj(),window[s4+this.uniqueCallbackIdentifier]=e,window[i4+this.uniqueCallbackIdentifier]=n,this.myIFrame=Zg.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){vt("frame writing exception"),a.stack&&vt(a.stack),vt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||vt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[S1]=this.myID,e[C1]=this.myPW,e[R1]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+A1+r.length<=k1;){const o=this.pendingSegs.shift();r=r+"&"+a4+s+"="+o.seg+"&"+l4+s+"="+o.ts+"&"+u4+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(d4)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{vt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const p4=16384,m4=45e3;let Ac=null;typeof MozWebSocket<"u"?Ac=MozWebSocket:typeof WebSocket<"u"&&(Ac=WebSocket);class hn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vl(this.connId),this.stats_=Jg(n),this.connURL=hn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[f1]=Xg,typeof location<"u"&&location.hostname&&_1.test(location.hostname)&&(o[m1]=g1),n&&(o[p1]=n),r&&(o[y1]=r),s&&(o[bp]=s),i&&(o[v1]=i),I1(e,w1,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ts.set("previous_websocket_failure",!0);try{let r;qx(),this.mySock=new Ac(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ac!==null&&!hn.forceDisallow_}static previouslyFailed(){return Ts.isInMemoryStorage||Ts.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ts.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Va(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=h1(n,p4);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(m4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hn.responsesRequiredToBeHealthy=2;hn.healthyTimeout=3e4;/**
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
 */class Ka{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_i,hn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=hn&&hn.isAvailable();let r=n&&!hn.previouslyFailed();if(e.webSocketOnly&&(n||Vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[hn];else{const s=this.transports_=[];for(const i of Ka.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ka.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ka.globalTransportInitialized_=!1;/**
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
 */const g4=6e4,_4=5e3,y4=10*1024,v4=100*1024,ef="t",wE="d",w4="s",EE="r",E4="e",TE="o",IE="a",SE="n",CE="p",T4="h";class I4{constructor(e,n,r,s,i,o,a,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vl("c:"+this.id+":"),this.transportManager_=new Ka(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=fa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>v4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>y4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ef in e){const n=e[ef];n===IE?this.upgradeIfSecondaryHealthy_():n===EE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===TE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=jo("t",e),r=jo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:CE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:IE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:SE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=jo("t",e),r=jo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=jo(ef,e);if(wE in e){const r=e[wE];if(n===T4){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===SE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===w4?this.onConnectionShutdown_(r):n===EE?this.onReset_(r):n===E4?xp("Server Error: "+r):n===TE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Xg!==r&&Vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),fa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(g4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(_4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:CE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ts.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class N1{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class P1{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Nc extends P1{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Nc}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const RE=32,kE=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function pe(){return new ve("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ts(t){return t.pieces_.length-t.pieceNum_}function we(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function x1(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function S4(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function b1(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function D1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function qe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ve)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new ve(n,0)}function ie(t){return t.pieceNum_>=t.pieces_.length}function bt(t,e){const n=re(t),r=re(e);if(n===null)return e;if(n===r)return bt(we(t),we(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function e_(t,e){if(ts(t)!==ts(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function dn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ts(t)>ts(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class C4{constructor(e,n){this.errorPrefix_=n,this.parts_=b1(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ch(this.parts_[r]);O1(this)}}function R4(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ch(e),O1(t)}function k4(t){const e=t.parts_.pop();t.byteLength_-=ch(e),t.parts_.length>0&&(t.byteLength_-=1)}function O1(t){if(t.byteLength_>kE)throw new Error(t.errorPrefix_+"has a key path longer than "+kE+" bytes ("+t.byteLength_+").");if(t.parts_.length>RE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+RE+") or object contains a cycle "+gs(t))}function gs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class t_ extends P1{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new t_}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Fo=1e3,A4=60*5*1e3,AE=30*1e3,N4=1.3,P4=3e4,x4="server_kill",NE=3;class Zn extends N1{constructor(e,n,r,s,i,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Zn.nextPersistentConnectionId_++,this.log_=vl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fo,this.maxReconnectDelay_=A4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");t_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Nc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Ze(i)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new uh,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const u=a.d,c=a.s;Zn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&mr(e,"w")){const r=Ui(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||e2(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=AE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Zx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ze(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):xp("Unrecognized action received from server: "+Ze(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>P4&&(this.reconnectDelay_=Fo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*N4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Zn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,g]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?vt("getToken() completed but was canceled"):(vt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=g&&g.token,a=new I4(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Vt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(x4)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Vt(f),u())}}}interrupt(e){vt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){vt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ip(this.interruptReasons_)&&(this.reconnectDelay_=Fo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Yg(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new ve(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){vt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=NE&&(this.reconnectDelay_=AE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){vt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=NE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+a1.replace(/\./g,"-")]=1,Zm()?e["framework.cordova"]=1:$I()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Nc.getInstance().currentlyOnline();return ip(this.interruptReasons_)&&e}}Zn.nextPersistentConnectionId_=0;Zn.nextConnectionId_=0;/**
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
 */class xh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new se(Qi,e),s=new se(Qi,n);return this.compare(r,s)!==0}minPost(){return se.MIN}}/**
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
 */let du;class L1 extends xh{static get __EMPTY_NODE(){return du}static set __EMPTY_NODE(e){du=e}compare(e,n){return co(e.name,n.name)}isDefinedOn(e){throw so("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return se.MIN}maxPost(){return new se(Us,du)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,du)}toString(){return".key"}}const Ni=new L1;/**
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
 */class fu{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Je{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Je.RED,this.left=s??Dt.EMPTY_NODE,this.right=i??Dt.EMPTY_NODE}copy(e,n,r,s,i){return new Je(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Dt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Dt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Je.RED=!0;Je.BLACK=!1;class b4{copy(e,n,r,s,i){return this}insert(e,n,r){return new Je(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Dt{constructor(e,n=Dt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Dt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Je.BLACK,null,null))}remove(e){return new Dt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Je.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new fu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new fu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new fu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new fu(this.root_,null,this.comparator_,!0,e)}}Dt.EMPTY_NODE=new b4;/**
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
 */function D4(t,e){return co(t.name,e.name)}function n_(t,e){return co(t,e)}/**
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
 */let Dp;function O4(t){Dp=t}const M1=function(t){return typeof t=="number"?"number:"+d1(t):"string:"+t},V1=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mr(e,".sv"),"Priority must be a string or number.")}else $(t===Dp||t.isEmpty(),"priority of unexpected type.");$(t===Dp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let PE;class Qe{constructor(e,n=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),V1(this.priorityNode_)}static set __childrenNodeConstructor(e){PE=e}static get __childrenNodeConstructor(){return PE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:re(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=re(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:($(r!==".priority"||ts(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(we(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+M1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=d1(this.value_):e+=this.value_,this.lazyHash_=u1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Qe.VALUE_TYPE_ORDER.indexOf(n),i=Qe.VALUE_TYPE_ORDER.indexOf(r);return $(s>=0,"Unknown leaf type: "+n),$(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let j1,F1;function L4(t){j1=t}function M4(t){F1=t}class V4 extends xh{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?co(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(Us,new Qe("[PRIORITY-POST]",F1))}makePost(e,n){const r=j1(e);return new se(n,new Qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Me=new V4;/**
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
 */const j4=Math.log(2);class F4{constructor(e){const n=i=>parseInt(Math.log(i)/j4,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Pc=function(t,e,n,r){t.sort(e);const s=function(u,c){const d=c-u;let f,g;if(d===0)return null;if(d===1)return f=t[u],g=n?n(f):f,new Je(g,f.node,Je.BLACK,null,null);{const _=parseInt(d/2,10)+u,T=s(u,_),I=s(_+1,c);return f=t[_],g=n?n(f):f,new Je(g,f.node,Je.BLACK,T,I)}},i=function(u){let c=null,d=null,f=t.length;const g=function(T,I){const k=f-T,E=f;f-=T;const y=s(k+1,E),S=t[k],b=n?n(S):S;_(new Je(b,S.node,I,null,y))},_=function(T){c?(c.left=T,c=T):(d=T,c=T)};for(let T=0;T<u.count;++T){const I=u.nextBitIsOne(),k=Math.pow(2,u.count-(T+1));I?g(k,Je.BLACK):(g(k,Je.BLACK),g(k,Je.RED))}return d},o=new F4(t.length),a=i(o);return new Dt(r||e,a)};/**
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
 */let tf;const ei={};class Xn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return $(ei&&Me,"ChildrenNode.ts has not been loaded"),tf=tf||new Xn({".priority":ei},{".priority":Me}),tf}get(e){const n=Ui(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Dt?n:null}hasIndex(e){return mr(this.indexSet_,e.toString())}addIndex(e,n){$(e!==Ni,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(se.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Pc(r,e.getCompare()):a=ei;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=a,new Xn(d,c)}addToIndexes(e,n){const r=dc(this.indexes_,(s,i)=>{const o=Ui(this.indexSet_,i);if($(o,"Missing index implementation for "+i),s===ei)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(se.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),Pc(a,o.getCompare())}else return ei;else{const a=n.get(e.name);let u=s;return a&&(u=u.remove(new se(e.name,a))),u.insert(e,e.node)}});return new Xn(r,this.indexSet_)}removeFromIndexes(e,n){const r=dc(this.indexes_,s=>{if(s===ei)return s;{const i=n.get(e.name);return i?s.remove(new se(e.name,i)):s}});return new Xn(r,this.indexSet_)}}/**
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
 */let Uo;class Y{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&V1(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Uo||(Uo=new Y(new Dt(n_),null,Xn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Uo}updatePriority(e){return this.children_.isEmpty()?this:new Y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Uo:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(we(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new se(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Uo:this.priorityNode_;return new Y(s,o,i)}}updateChild(e,n){const r=re(e);if(r===null)return n;{$(re(e)!==".priority"||ts(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(we(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Me,(o,a)=>{n[o]=a.val(e),r++,i&&Y.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+M1(this.getPriority().val())+":"),this.forEachChild(Me,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":u1(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new se(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new se(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,se.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===wl?-1:0}withIndex(e){if(e===Ni||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Y(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ni||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Me),s=n.getIterator(Me);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ni?null:this.indexMap_.get(e.toString())}}Y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class U4 extends Y{constructor(){super(new Dt(n_),Y.EMPTY_NODE,Xn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Y.EMPTY_NODE}isEmpty(){return!1}}const wl=new U4;Object.defineProperties(se,{MIN:{value:new se(Qi,Y.EMPTY_NODE)},MAX:{value:new se(Us,wl)}});L1.__EMPTY_NODE=Y.EMPTY_NODE;Qe.__childrenNodeConstructor=Y;O4(wl);M4(wl);/**
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
 */const z4=!0;function st(t,e=null){if(t===null)return Y.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Qe(n,st(e))}if(!(t instanceof Array)&&z4){const n=[];let r=!1;if(jt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=st(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new se(o,u)))}}),n.length===0)return Y.EMPTY_NODE;const i=Pc(n,D4,o=>o.name,n_);if(r){const o=Pc(n,Me.getCompare());return new Y(i,st(e),new Xn({".priority":o},{".priority":Me}))}else return new Y(i,st(e),Xn.Default)}else{let n=Y.EMPTY_NODE;return jt(t,(r,s)=>{if(mr(t,r)&&r.substring(0,1)!=="."){const i=st(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(st(e))}}L4(st);/**
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
 */class B4 extends xh{constructor(e){super(),this.indexPath_=e,$(!ie(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?co(e.name,n.name):i}makePost(e,n){const r=st(e),s=Y.EMPTY_NODE.updateChild(this.indexPath_,r);return new se(n,s)}maxPost(){const e=Y.EMPTY_NODE.updateChild(this.indexPath_,wl);return new se(Us,e)}toString(){return b1(this.indexPath_,0).join("/")}}/**
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
 */class $4 extends xh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?co(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,n){const r=st(e);return new se(n,r)}toString(){return".value"}}const W4=new $4;/**
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
 */function U1(t){return{type:"value",snapshotNode:t}}function Yi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Qa(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ya(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function H4(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class r_{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){$(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Qa(n,a)):$(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Yi(n,r)):o.trackChildChange(Ya(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Me,(s,i)=>{n.hasChild(s)||r.trackChildChange(Qa(s,i))}),n.isLeafNode()||n.forEachChild(Me,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Ya(s,i,o))}else r.trackChildChange(Yi(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Y.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Xa{constructor(e){this.indexedFilter_=new r_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xa.getStartPost_(e),this.endPost_=Xa.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new se(n,r))||(r=Y.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Y.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(Y.EMPTY_NODE);const i=this;return n.forEachChild(Me,(o,a)=>{i.matches(new se(o,a))||(s=s.updateImmediateChild(o,Y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class q4{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Xa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new se(n,r))||(r=Y.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=Y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=Y.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(Y.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,Y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(g,_)=>f(_,g)}else o=this.index_.getCompare();const a=e;$(a.numChildren()===this.limit_,"");const u=new se(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let g=s.getChildAfterChild(this.index_,c,this.reverse_);for(;g!=null&&(g.name===n||a.hasChild(g.name));)g=s.getChildAfterChild(this.index_,g,this.reverse_);const _=g==null?1:o(g,u);if(d&&!r.isEmpty()&&_>=0)return i!=null&&i.trackChildChange(Ya(n,r,f)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(Qa(n,f));const I=a.updateImmediateChild(n,Y.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(i!=null&&i.trackChildChange(Yi(g.name,g.node)),I.updateImmediateChild(g.name,g.node)):I}}else return r.isEmpty()?e:d&&o(c,u)>=0?(i!=null&&(i.trackChildChange(Qa(c.name,c.node)),i.trackChildChange(Yi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,Y.EMPTY_NODE)):e}}/**
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
 */class s_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qi}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Us}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const e=new s_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function G4(t){return t.loadsAllData()?new r_(t.getIndex()):t.hasLimit()?new q4(t):new Xa(t)}function xE(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Me?n="$priority":t.index_===W4?n="$value":t.index_===Ni?n="$key":($(t.index_ instanceof B4,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ze(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ze(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ze(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ze(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ze(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function bE(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Me&&(e.i=t.index_.toString()),e}/**
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
 */class xc extends N1{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=vl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=xc.getListenId_(e,r),a={};this.listens_[o]=a;const u=xE(e._queryParams);this.restRequest_(i+".json",u,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(i,f,!1,r),Ui(this.listens_,o)===a){let g;c?c===401?g="permission_denied":g="rest_error:"+c:g="ok",s(g,null)}})}unlisten(e,n){const r=xc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=xE(e._queryParams),r=e._path.toString(),s=new uh;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+io(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Va(a.responseText)}catch{Vt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Vt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class K4{constructor(){this.rootNode_=Y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function bc(){return{value:null,children:new Map}}function z1(t,e,n){if(ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=re(e);t.children.has(r)||t.children.set(r,bc());const s=t.children.get(r);e=we(e),z1(s,e,n)}}function Op(t,e,n){t.value!==null?n(e,t.value):Q4(t,(r,s)=>{const i=new ve(e.toString()+"/"+r);Op(s,i,n)})}function Q4(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class Y4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&jt(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const DE=10*1e3,X4=30*1e3,J4=5*60*1e3;class Z4{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Y4(e);const r=DE+(X4-DE)*Math.random();fa(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;jt(e,(s,i)=>{i>0&&mr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),fa(this.reportStats_.bind(this),Math.floor(Math.random()*2*J4))}}/**
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
 */var fn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(fn||(fn={}));function B1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function i_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function o_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Dc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=fn.ACK_USER_WRITE,this.source=B1()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new Dc(pe(),n,this.revert)}}else return $(re(this.path)===e,"operationForChild called for unrelated child."),new Dc(we(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ja{constructor(e,n){this.source=e,this.path=n,this.type=fn.LISTEN_COMPLETE}operationForChild(e){return ie(this.path)?new Ja(this.source,pe()):new Ja(this.source,we(this.path))}}/**
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
 */class Za{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=fn.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new zs(this.source,pe(),n.value):new Za(this.source,pe(),n)}else return $(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Za(this.source,we(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class eF{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tF(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(H4(o.childName,o.snapshotNode))}),zo(t,s,"child_removed",e,r,n),zo(t,s,"child_added",e,r,n),zo(t,s,"child_moved",i,r,n),zo(t,s,"child_changed",e,r,n),zo(t,s,"value",e,r,n),s}function zo(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,u)=>rF(t,a,u)),o.forEach(a=>{const u=nF(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function nF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function rF(t,e,n){if(e.childName==null||n.childName==null)throw so("Should only compare child_ events.");const r=new se(e.childName,e.snapshotNode),s=new se(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function bh(t,e){return{eventCache:t,serverCache:e}}function pa(t,e,n,r){return bh(new Bs(e,n,r),t.serverCache)}function $1(t,e,n,r){return bh(t.eventCache,new Bs(e,n,r))}function Lp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function $s(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let nf;const sF=()=>(nf||(nf=new Dt($j)),nf);class Ce{constructor(e,n=sF()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return jt(e,(r,s)=>{n=n.set(new ve(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:pe(),value:this.value};if(ie(e))return null;{const r=re(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(we(e),n);return i!=null?{path:qe(new ve(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=re(e),r=this.children.get(n);return r!==null?r.subtree(we(e)):new Ce(null)}}set(e,n){if(ie(e))return new Ce(n,this.children);{const r=re(e),i=(this.children.get(r)||new Ce(null)).set(we(e),n),o=this.children.insert(r,i);return new Ce(this.value,o)}}remove(e){if(ie(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=re(e),r=this.children.get(n);if(r){const s=r.remove(we(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Ce(null):new Ce(this.value,i)}else return this}}get(e){if(ie(e))return this.value;{const n=re(e),r=this.children.get(n);return r?r.get(we(e)):null}}setTree(e,n){if(ie(e))return n;{const r=re(e),i=(this.children.get(r)||new Ce(null)).setTree(we(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Ce(this.value,o)}}fold(e){return this.fold_(pe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(qe(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,pe(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(ie(e))return null;{const i=re(e),o=this.children.get(i);return o?o.findOnPath_(we(e),qe(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,pe(),n)}foreachOnPath_(e,n,r){if(ie(e))return this;{this.value&&r(n,this.value);const s=re(e),i=this.children.get(s);return i?i.foreachOnPath_(we(e),qe(n,s),r):new Ce(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(qe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class _n{constructor(e){this.writeTree_=e}static empty(){return new _n(new Ce(null))}}function ma(t,e,n){if(ie(e))return new _n(new Ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=bt(s,e);return i=i.updateChild(o,n),new _n(t.writeTree_.set(s,i))}else{const s=new Ce(n),i=t.writeTree_.setTree(e,s);return new _n(i)}}}function OE(t,e,n){let r=t;return jt(n,(s,i)=>{r=ma(r,qe(e,s),i)}),r}function LE(t,e){if(ie(e))return _n.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new _n(n)}}function Mp(t,e){return Ks(t,e)!=null}function Ks(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(bt(n.path,e)):null}function ME(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Me,(r,s)=>{e.push(new se(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new se(r,s.value))}),e}function Kr(t,e){if(ie(e))return t;{const n=Ks(t,e);return n!=null?new _n(new Ce(n)):new _n(t.writeTree_.subtree(e))}}function Vp(t){return t.writeTree_.isEmpty()}function Xi(t,e){return W1(pe(),t.writeTree_,e)}function W1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?($(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=W1(qe(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(qe(t,".priority"),r)),n}}/**
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
 */function a_(t,e){return K1(e,t)}function iF(t,e,n,r,s){$(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=ma(t.visibleWrites,e,n)),t.lastWriteId=r}function oF(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function aF(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&lF(a,r.path)?s=!1:dn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return uF(t),!0;if(r.snap)t.visibleWrites=LE(t.visibleWrites,r.path);else{const a=r.children;jt(a,u=>{t.visibleWrites=LE(t.visibleWrites,qe(r.path,u))})}return!0}else return!1}function lF(t,e){if(t.snap)return dn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dn(qe(t.path,n),e))return!0;return!1}function uF(t){t.visibleWrites=H1(t.allWrites,cF,pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function cF(t){return t.visible}function H1(t,e,n){let r=_n.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)dn(n,o)?(a=bt(n,o),r=ma(r,a,i.snap)):dn(o,n)&&(a=bt(o,n),r=ma(r,pe(),i.snap.getChild(a)));else if(i.children){if(dn(n,o))a=bt(n,o),r=OE(r,a,i.children);else if(dn(o,n))if(a=bt(o,n),ie(a))r=OE(r,pe(),i.children);else{const u=Ui(i.children,re(a));if(u){const c=u.getChild(we(a));r=ma(r,pe(),c)}}}else throw so("WriteRecord should have .snap or .children")}}return r}function q1(t,e,n,r,s){if(!r&&!s){const i=Ks(t.visibleWrites,e);if(i!=null)return i;{const o=Kr(t.visibleWrites,e);if(Vp(o))return n;if(n==null&&!Mp(o,pe()))return null;{const a=n||Y.EMPTY_NODE;return Xi(o,a)}}}else{const i=Kr(t.visibleWrites,e);if(!s&&Vp(i))return n;if(!s&&n==null&&!Mp(i,pe()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(dn(c.path,e)||dn(e,c.path))},a=H1(t.allWrites,o,e),u=n||Y.EMPTY_NODE;return Xi(a,u)}}}function hF(t,e,n){let r=Y.EMPTY_NODE;const s=Ks(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Me,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Kr(t.visibleWrites,e);return n.forEachChild(Me,(o,a)=>{const u=Xi(Kr(i,new ve(o)),a);r=r.updateImmediateChild(o,u)}),ME(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Kr(t.visibleWrites,e);return ME(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function dF(t,e,n,r,s){$(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=qe(e,n);if(Mp(t.visibleWrites,i))return null;{const o=Kr(t.visibleWrites,i);return Vp(o)?s.getChild(n):Xi(o,s.getChild(n))}}function fF(t,e,n,r){const s=qe(e,n),i=Ks(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Kr(t.visibleWrites,s);return Xi(o,r.getNode().getImmediateChild(n))}else return null}function pF(t,e){return Ks(t.visibleWrites,e)}function mF(t,e,n,r,s,i,o){let a;const u=Kr(t.visibleWrites,e),c=Ks(u,pe());if(c!=null)a=c;else if(n!=null)a=Xi(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),g=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=g.getNext();for(;_&&d.length<s;)f(_,r)!==0&&d.push(_),_=g.getNext();return d}else return[]}function gF(){return{visibleWrites:_n.empty(),allWrites:[],lastWriteId:-1}}function Oc(t,e,n,r){return q1(t.writeTree,t.treePath,e,n,r)}function l_(t,e){return hF(t.writeTree,t.treePath,e)}function VE(t,e,n,r){return dF(t.writeTree,t.treePath,e,n,r)}function Lc(t,e){return pF(t.writeTree,qe(t.treePath,e))}function _F(t,e,n,r,s,i){return mF(t.writeTree,t.treePath,e,n,r,s,i)}function u_(t,e,n){return fF(t.writeTree,t.treePath,e,n)}function G1(t,e){return K1(qe(t.treePath,e),t.writeTree)}function K1(t,e){return{treePath:t,writeTree:e}}/**
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
 */class yF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Ya(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Qa(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Yi(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Ya(r,e.snapshotNode,s.oldSnap));else throw so("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class vF{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Q1=new vF;class c_{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Bs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return u_(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$s(this.viewCache_),i=_F(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
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
 */function wF(t){return{filter:t}}function EF(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function TF(t,e,n,r,s){const i=new yF;let o,a;if(n.type===fn.OVERWRITE){const c=n;c.source.fromUser?o=jp(t,e,c.path,c.snap,r,s,i):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ie(c.path),o=Mc(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===fn.MERGE){const c=n;c.source.fromUser?o=SF(t,e,c.path,c.children,r,s,i):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Fp(t,e,c.path,c.children,r,s,a,i))}else if(n.type===fn.ACK_USER_WRITE){const c=n;c.revert?o=kF(t,e,c.path,r,s,i):o=CF(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===fn.LISTEN_COMPLETE)o=RF(t,e,n.path,r,i);else throw so("Unknown operation type: "+n.type);const u=i.getChanges();return IF(e,o,u),{viewCache:o,changes:u}}function IF(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Lp(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(U1(Lp(e)))}}function Y1(t,e,n,r,s,i){const o=e.eventCache;if(Lc(r,n)!=null)return e;{let a,u;if(ie(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=$s(e),d=c instanceof Y?c:Y.EMPTY_NODE,f=l_(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const c=Oc(r,$s(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=re(n);if(c===".priority"){$(ts(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const f=VE(r,n,d,u);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=we(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const g=VE(r,n,o.getNode(),u);g!=null?f=o.getNode().getImmediateChild(c).updateChild(d,g):f=o.getNode().getImmediateChild(c)}else f=u_(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,d,s,i):a=o.getNode()}}return pa(e,a,o.isFullyInitialized()||ie(n),t.filter.filtersNodes())}}function Mc(t,e,n,r,s,i,o,a){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(ie(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const _=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),_,null)}else{const _=re(n);if(!u.isCompleteForPath(n)&&ts(n)>1)return e;const T=we(n),k=u.getNode().getImmediateChild(_).updateChild(T,r);_===".priority"?c=d.updatePriority(u.getNode(),k):c=d.updateChild(u.getNode(),_,k,T,Q1,null)}const f=$1(e,c,u.isFullyInitialized()||ie(n),d.filtersNodes()),g=new c_(s,f,i);return Y1(t,f,n,s,g,a)}function jp(t,e,n,r,s,i,o){const a=e.eventCache;let u,c;const d=new c_(s,e,i);if(ie(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=pa(e,c,!0,t.filter.filtersNodes());else{const f=re(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=pa(e,c,a.isFullyInitialized(),a.isFiltered());else{const g=we(n),_=a.getNode().getImmediateChild(f);let T;if(ie(g))T=r;else{const I=d.getCompleteChild(f);I!=null?x1(g)===".priority"&&I.getChild(D1(g)).isEmpty()?T=I:T=I.updateChild(g,r):T=Y.EMPTY_NODE}if(_.equals(T))u=e;else{const I=t.filter.updateChild(a.getNode(),f,T,g,d,o);u=pa(e,I,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function jE(t,e){return t.eventCache.isCompleteForChild(e)}function SF(t,e,n,r,s,i,o){let a=e;return r.foreach((u,c)=>{const d=qe(n,u);jE(e,re(d))&&(a=jp(t,a,d,c,s,i,o))}),r.foreach((u,c)=>{const d=qe(n,u);jE(e,re(d))||(a=jp(t,a,d,c,s,i,o))}),a}function FE(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Fp(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;ie(n)?c=r:c=new Ce(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,g)=>{if(d.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),T=FE(t,_,g);u=Mc(t,u,new ve(f),T,s,i,o,a)}}),c.children.inorderTraversal((f,g)=>{const _=!e.serverCache.isCompleteForChild(f)&&g.value===null;if(!d.hasChild(f)&&!_){const T=e.serverCache.getNode().getImmediateChild(f),I=FE(t,T,g);u=Mc(t,u,new ve(f),I,s,i,o,a)}}),u}function CF(t,e,n,r,s,i,o){if(Lc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(ie(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Mc(t,e,n,u.getNode().getChild(n),s,i,a,o);if(ie(n)){let c=new Ce(null);return u.getNode().forEachChild(Ni,(d,f)=>{c=c.set(new ve(d),f)}),Fp(t,e,n,c,s,i,a,o)}else return e}else{let c=new Ce(null);return r.foreach((d,f)=>{const g=qe(n,d);u.isCompleteForPath(g)&&(c=c.set(d,u.getNode().getChild(g)))}),Fp(t,e,n,c,s,i,a,o)}}function RF(t,e,n,r,s){const i=e.serverCache,o=$1(e,i.getNode(),i.isFullyInitialized()||ie(n),i.isFiltered());return Y1(t,o,n,r,Q1,s)}function kF(t,e,n,r,s,i){let o;if(Lc(r,n)!=null)return e;{const a=new c_(r,e,s),u=e.eventCache.getNode();let c;if(ie(n)||re(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Oc(r,$s(e));else{const f=e.serverCache.getNode();$(f instanceof Y,"serverChildren would be complete if leaf node"),d=l_(r,f)}d=d,c=t.filter.updateFullNode(u,d,i)}else{const d=re(n);let f=u_(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=u.getImmediateChild(d)),f!=null?c=t.filter.updateChild(u,d,f,we(n),a,i):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,Y.EMPTY_NODE,we(n),a,i):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Oc(r,$s(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Lc(r,pe())!=null,pa(e,c,o,t.filter.filtersNodes())}}/**
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
 */class AF{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new r_(r.getIndex()),i=G4(r);this.processor_=wF(i);const o=n.serverCache,a=n.eventCache,u=s.updateFullNode(Y.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(Y.EMPTY_NODE,a.getNode(),null),d=new Bs(u,o.isFullyInitialized(),s.filtersNodes()),f=new Bs(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=bh(f,d),this.eventGenerator_=new eF(this.query_)}get query(){return this.query_}}function NF(t){return t.viewCache_.serverCache.getNode()}function PF(t,e){const n=$s(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function UE(t){return t.eventRegistrations_.length===0}function xF(t,e){t.eventRegistrations_.push(e)}function zE(t,e,n){const r=[];if(n){$(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function BE(t,e,n,r){e.type===fn.MERGE&&e.source.queryId!==null&&($($s(t.viewCache_),"We should always have a full cache before handling merges"),$(Lp(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=TF(t.processor_,s,e,n,r);return EF(t.processor_,i.viewCache),$(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,X1(t,i.changes,i.viewCache.eventCache.getNode(),null)}function bF(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Me,(i,o)=>{r.push(Yi(i,o))}),n.isFullyInitialized()&&r.push(U1(n.getNode())),X1(t,r,n.getNode(),e)}function X1(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return tF(t.eventGenerator_,e,n,s)}/**
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
 */let Vc;class DF{constructor(){this.views=new Map}}function OF(t){$(!Vc,"__referenceConstructor has already been defined"),Vc=t}function LF(){return $(Vc,"Reference.ts has not been loaded"),Vc}function MF(t){return t.views.size===0}function h_(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return $(i!=null,"SyncTree gave us an op for an invalid query."),BE(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(BE(o,e,n,r));return i}}function VF(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Oc(n,s?r:null),u=!1;a?u=!0:r instanceof Y?(a=l_(n,r),u=!1):(a=Y.EMPTY_NODE,u=!1);const c=bh(new Bs(a,u,!1),new Bs(r,s,!1));return new AF(e,c)}return o}function jF(t,e,n,r,s,i){const o=VF(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),xF(o,n),bF(o,n)}function FF(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=ns(t);if(s==="default")for(const[u,c]of t.views.entries())o=o.concat(zE(c,n,r)),UE(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||i.push(c.query));else{const u=t.views.get(s);u&&(o=o.concat(zE(u,n,r)),UE(u)&&(t.views.delete(s),u.query._queryParams.loadsAllData()||i.push(u.query)))}return a&&!ns(t)&&i.push(new(LF())(e._repo,e._path)),{removed:i,events:o}}function J1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pi(t,e){let n=null;for(const r of t.views.values())n=n||PF(r,e);return n}function Z1(t,e){if(e._queryParams.loadsAllData())return Dh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function eR(t,e){return Z1(t,e)!=null}function ns(t){return Dh(t)!=null}function Dh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let jc;function UF(t){$(!jc,"__referenceConstructor has already been defined"),jc=t}function zF(){return $(jc,"Reference.ts has not been loaded"),jc}let BF=1;class $E{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=gF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function tR(t,e,n,r,s){return iF(t.pendingWriteTree_,e,n,r,s),s?El(t,new zs(B1(),e,n)):[]}function Is(t,e,n=!1){const r=oF(t.pendingWriteTree_,e);if(aF(t.pendingWriteTree_,e)){let i=new Ce(null);return r.snap!=null?i=i.set(pe(),!0):jt(r.children,o=>{i=i.set(new ve(o),!0)}),El(t,new Dc(r.path,i,n))}else return[]}function Oh(t,e,n){return El(t,new zs(i_(),e,n))}function $F(t,e,n){const r=Ce.fromObject(n);return El(t,new Za(i_(),e,r))}function WF(t,e){return El(t,new Ja(i_(),e))}function HF(t,e,n){const r=f_(t,n);if(r){const s=p_(r),i=s.path,o=s.queryId,a=bt(i,e),u=new Ja(o_(o),a);return m_(t,i,u)}else return[]}function Up(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||eR(o,e))){const u=FF(o,e,n,r);MF(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=u.removed;if(a=u.events,!s){const d=c.findIndex(g=>g._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(i,(g,_)=>ns(_));if(d&&!f){const g=t.syncPointTree_.subtree(i);if(!g.isEmpty()){const _=KF(g);for(let T=0;T<_.length;++T){const I=_[T],k=I.query,E=sR(t,I);t.listenProvider_.startListening(ga(k),Fc(t,k),E.hashFn,E.onComplete)}}}!f&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(ga(e),null):c.forEach(g=>{const _=t.queryToTagMap.get(Lh(g));t.listenProvider_.stopListening(ga(g),_)}))}QF(t,c)}return a}function qF(t,e,n,r){const s=f_(t,r);if(s!=null){const i=p_(s),o=i.path,a=i.queryId,u=bt(o,e),c=new zs(o_(a),u,n);return m_(t,o,c)}else return[]}function GF(t,e,n,r){const s=f_(t,r);if(s){const i=p_(s),o=i.path,a=i.queryId,u=bt(o,e),c=Ce.fromObject(n),d=new Za(o_(a),u,c);return m_(t,o,d)}else return[]}function WE(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(g,_)=>{const T=bt(g,s);i=i||Pi(_,T),o=o||ns(_)});let a=t.syncPointTree_.get(s);a?(o=o||ns(a),i=i||Pi(a,pe())):(a=new DF,t.syncPointTree_=t.syncPointTree_.set(s,a));let u;i!=null?u=!0:(u=!1,i=Y.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((_,T)=>{const I=Pi(T,pe());I&&(i=i.updateImmediateChild(_,I))}));const c=eR(a,e);if(!c&&!e._queryParams.loadsAllData()){const g=Lh(e);$(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const _=YF();t.queryToTagMap.set(g,_),t.tagToQueryMap.set(_,g)}const d=a_(t.pendingWriteTree_,s);let f=jF(a,e,n,d,i,u);if(!c&&!o&&!r){const g=Z1(a,e);f=f.concat(XF(t,e,g))}return f}function d_(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=bt(o,e),c=Pi(a,u);if(c)return c});return q1(s,e,i,n,!0)}function El(t,e){return nR(e,t.syncPointTree_,null,a_(t.pendingWriteTree_,pe()))}function nR(t,e,n,r){if(ie(t.path))return rR(t,e,n,r);{const s=e.get(pe());n==null&&s!=null&&(n=Pi(s,pe()));let i=[];const o=re(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,d=G1(r,o);i=i.concat(nR(a,u,c,d))}return s&&(i=i.concat(h_(s,t,r,n))),i}}function rR(t,e,n,r){const s=e.get(pe());n==null&&s!=null&&(n=Pi(s,pe()));let i=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=G1(r,o),d=t.operationForChild(o);d&&(i=i.concat(rR(d,a,u,c)))}),s&&(i=i.concat(h_(s,t,r,n))),i}function sR(t,e){const n=e.query,r=Fc(t,n);return{hashFn:()=>(NF(e)||Y.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?HF(t,n._path,r):WF(t,n._path);{const i=qj(s,n);return Up(t,n,null,i)}}}}function Fc(t,e){const n=Lh(e);return t.queryToTagMap.get(n)}function Lh(t){return t._path.toString()+"$"+t._queryIdentifier}function f_(t,e){return t.tagToQueryMap.get(e)}function p_(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function m_(t,e,n){const r=t.syncPointTree_.get(e);$(r,"Missing sync point for query tag that we're tracking");const s=a_(t.pendingWriteTree_,e);return h_(r,n,s,null)}function KF(t){return t.fold((e,n,r)=>{if(n&&ns(n))return[Dh(n)];{let s=[];return n&&(s=J1(n)),jt(r,(i,o)=>{s=s.concat(o)}),s}})}function ga(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(zF())(t._repo,t._path):t}function QF(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Lh(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function YF(){return BF++}function XF(t,e,n){const r=e._path,s=Fc(t,e),i=sR(t,n),o=t.listenProvider_.startListening(ga(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)$(!ns(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,d,f)=>{if(!ie(c)&&d&&ns(d))return[Dh(d).query];{let g=[];return d&&(g=g.concat(J1(d).map(_=>_.query))),jt(f,(_,T)=>{g=g.concat(T)}),g}});for(let c=0;c<u.length;++c){const d=u[c];t.listenProvider_.stopListening(ga(d),Fc(t,d))}}return o}/**
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
 */class g_{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new g_(n)}node(){return this.node_}}class __{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=qe(this.path_,e);return new __(this.syncTree_,n)}node(){return d_(this.syncTree_,this.path_)}}const JF=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},HE=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ZF(t[".sv"],e,n);if(typeof t[".sv"]=="object")return eU(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ZF=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},eU=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&$(!1,"Unexpected increment value: "+r);const s=e.node();if($(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},tU=function(t,e,n,r){return y_(e,new __(n,t),r)},iR=function(t,e,n){return y_(t,new g_(e),n)};function y_(t,e,n){const r=t.getPriority().val(),s=HE(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=HE(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Qe(a,st(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Qe(s))),o.forEachChild(Me,(a,u)=>{const c=y_(u,e.getImmediateChild(a),n);c!==u&&(i=i.updateImmediateChild(a,c))}),i}}/**
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
 */class v_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function w_(t,e){let n=e instanceof ve?e:new ve(e),r=t,s=re(n);for(;s!==null;){const i=Ui(r.node.children,s)||{children:{},childCount:0};r=new v_(s,r,i),n=we(n),s=re(n)}return r}function fo(t){return t.node.value}function oR(t,e){t.node.value=e,zp(t)}function aR(t){return t.node.childCount>0}function nU(t){return fo(t)===void 0&&!aR(t)}function Mh(t,e){jt(t.node.children,(n,r)=>{e(new v_(n,t,r))})}function lR(t,e,n,r){n&&e(t),Mh(t,s=>{lR(s,e,!0)})}function rU(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Tl(t){return new ve(t.parent===null?t.name:Tl(t.parent)+"/"+t.name)}function zp(t){t.parent!==null&&sU(t.parent,t.name,t)}function sU(t,e,n){const r=nU(n),s=mr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,zp(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,zp(t))}/**
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
 */const iU=/[\[\].#$\/\u0000-\u001F\u007F]/,oU=/[\[\].#$\u0000-\u001F\u007F]/,rf=10*1024*1024,uR=function(t){return typeof t=="string"&&t.length!==0&&!iU.test(t)},cR=function(t){return typeof t=="string"&&t.length!==0&&!oU.test(t)},aU=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),cR(t)},hR=function(t,e,n,r){r&&e===void 0||E_(eg(t,"value"),e,n)},E_=function(t,e,n){const r=n instanceof ve?new C4(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+gs(r));if(typeof e=="function")throw new Error(t+"contains a function "+gs(r)+" with contents = "+e.toString());if(c1(e))throw new Error(t+"contains "+e.toString()+" "+gs(r));if(typeof e=="string"&&e.length>rf/3&&ch(e)>rf)throw new Error(t+"contains a string greater than "+rf+" utf8 bytes "+gs(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(jt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!uR(o)))throw new Error(t+" contains an invalid key ("+o+") "+gs(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);R4(r,o),E_(t,a,r),k4(r)}),s&&i)throw new Error(t+' contains ".value" child '+gs(r)+" in addition to actual children.")}},dR=function(t,e,n,r){if(!cR(n))throw new Error(eg(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},lU=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),dR(t,e,n)},fR=function(t,e){if(re(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},uU=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!uR(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!aU(n))throw new Error(eg(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class cU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function T_(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!e_(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function pR(t,e,n){T_(t,n),mR(t,r=>e_(r,e))}function cr(t,e,n){T_(t,n),mR(t,r=>dn(r,e)||dn(e,r))}function mR(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(hU(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function hU(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();da&&vt("event: "+n.toString()),ho(r)}}}/**
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
 */const dU="repo_interrupt",fU=25;class pU{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new cU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bc(),this.transactionQueueTree_=new v_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function mU(t,e,n){if(t.stats_=Jg(t.repoInfo_),t.forceRestClient_||Yj())t.server_=new xc(t.repoInfo_,(r,s,i,o)=>{qE(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>GE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ze(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Zn(t.repoInfo_,e,(r,s,i,o)=>{qE(t,r,s,i,o)},r=>{GE(t,r)},r=>{gU(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=t4(t.repoInfo_,()=>new Z4(t.stats_,t.server_)),t.infoData_=new K4,t.infoSyncTree_=new $E({startListening:(r,s,i,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Oh(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),S_(t,"connected",!1),t.serverSyncTree_=new $E({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,u)=>{const c=o(a,u);cr(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function gR(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function I_(t){return JF({timestamp:gR(t)})}function qE(t,e,n,r,s){t.dataUpdateCount++;const i=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const u=dc(n,c=>st(c));o=GF(t.serverSyncTree_,i,u,s)}else{const u=st(n);o=qF(t.serverSyncTree_,i,u,s)}else if(r){const u=dc(n,c=>st(c));o=$F(t.serverSyncTree_,i,u)}else{const u=st(n);o=Oh(t.serverSyncTree_,i,u)}let a=i;o.length>0&&(a=Vh(t,i)),cr(t.eventQueue_,a,o)}function GE(t,e){S_(t,"connected",e),e===!1&&yU(t)}function gU(t,e){jt(e,(n,r)=>{S_(t,n,r)})}function S_(t,e,n){const r=new ve("/.info/"+e),s=st(n);t.infoData_.updateSnapshot(r,s);const i=Oh(t.infoSyncTree_,r,s);cr(t.eventQueue_,r,i)}function _R(t){return t.nextWriteId_++}function _U(t,e,n,r,s){C_(t,"set",{path:e.toString(),value:n,priority:r});const i=I_(t),o=st(n,r),a=d_(t.serverSyncTree_,e),u=iR(o,a,i),c=_R(t),d=tR(t.serverSyncTree_,e,u,c,!0);T_(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(g,_)=>{const T=g==="ok";T||Vt("set at "+e+" failed: "+g);const I=Is(t.serverSyncTree_,c,!T);cr(t.eventQueue_,e,I),EU(t,s,g,_)});const f=TR(t,e);Vh(t,f),cr(t.eventQueue_,f,[])}function yU(t){C_(t,"onDisconnectEvents");const e=I_(t),n=bc();Op(t.onDisconnect_,pe(),(s,i)=>{const o=tU(s,i,t.serverSyncTree_,e);z1(n,s,o)});let r=[];Op(n,pe(),(s,i)=>{r=r.concat(Oh(t.serverSyncTree_,s,i));const o=TR(t,s);Vh(t,o)}),t.onDisconnect_=bc(),cr(t.eventQueue_,pe(),r)}function vU(t,e,n){let r;re(e._path)===".info"?r=WE(t.infoSyncTree_,e,n):r=WE(t.serverSyncTree_,e,n),pR(t.eventQueue_,e._path,r)}function Bp(t,e,n){let r;re(e._path)===".info"?r=Up(t.infoSyncTree_,e,n):r=Up(t.serverSyncTree_,e,n),pR(t.eventQueue_,e._path,r)}function wU(t){t.persistentConnection_&&t.persistentConnection_.interrupt(dU)}function C_(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),vt(n,...e)}function EU(t,e,n,r){e&&ho(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function yR(t,e,n){return d_(t.serverSyncTree_,e,n)||Y.EMPTY_NODE}function R_(t,e=t.transactionQueueTree_){if(e||jh(t,e),fo(e)){const n=wR(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&TU(t,Tl(e),n)}else aR(e)&&Mh(e,n=>{R_(t,n)})}function TU(t,e,n){const r=n.map(c=>c.currentWriteId),s=yR(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const d=n[c];$(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=bt(e,d.path);i=i.updateChild(f,d.currentOutputSnapshotRaw)}const a=i.val(!0),u=e;t.server_.put(u.toString(),a,c=>{C_(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let g=0;g<n.length;g++)n[g].status=2,d=d.concat(Is(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&f.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();jh(t,w_(t.transactionQueueTree_,e)),R_(t,t.transactionQueueTree_),cr(t.eventQueue_,e,d);for(let g=0;g<f.length;g++)ho(f[g])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Vt("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Vh(t,e)}},o)}function Vh(t,e){const n=vR(t,e),r=Tl(n),s=wR(t,n);return IU(t,s,r),r}function IU(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=bt(n,u.path);let d=!1,f;if($(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,f=u.abortReason,s=s.concat(Is(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=fU)d=!0,f="maxretry",s=s.concat(Is(t.serverSyncTree_,u.currentWriteId,!0));else{const g=yR(t,u.path,o);u.currentInputSnapshot=g;const _=e[a].update(g.val());if(_!==void 0){E_("transaction failed: Data returned ",_,u.path);let T=st(_);typeof _=="object"&&_!=null&&mr(_,".priority")||(T=T.updatePriority(g.getPriority()));const k=u.currentWriteId,E=I_(t),y=iR(T,g,E);u.currentOutputSnapshotRaw=T,u.currentOutputSnapshotResolved=y,u.currentWriteId=_R(t),o.splice(o.indexOf(k),1),s=s.concat(tR(t.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally)),s=s.concat(Is(t.serverSyncTree_,k,!0))}else d=!0,f="nodata",s=s.concat(Is(t.serverSyncTree_,u.currentWriteId,!0))}cr(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}jh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ho(r[a]);R_(t,t.transactionQueueTree_)}function vR(t,e){let n,r=t.transactionQueueTree_;for(n=re(e);n!==null&&fo(r)===void 0;)r=w_(r,n),e=we(e),n=re(e);return r}function wR(t,e){const n=[];return ER(t,e,n),n.sort((r,s)=>r.order-s.order),n}function ER(t,e,n){const r=fo(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Mh(e,s=>{ER(t,s,n)})}function jh(t,e){const n=fo(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,oR(e,n.length>0?n:void 0)}Mh(e,r=>{jh(t,r)})}function TR(t,e){const n=Tl(vR(t,e)),r=w_(t.transactionQueueTree_,e);return rU(r,s=>{sf(t,s)}),sf(t,r),lR(r,s=>{sf(t,s)}),n}function sf(t,e){const n=fo(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Is(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?oR(e,void 0):n.length=i+1,cr(t.eventQueue_,Tl(e),s);for(let o=0;o<r.length;o++)ho(r[o])}}/**
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
 */function SU(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function CU(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Vt(`Invalid query segment '${n}' in query '${t}'`)}return e}const KE=function(t,e){const n=RU(t),r=n.namespace;n.domain==="firebase.com"&&ur(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ur("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||zj();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new T1(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new ve(n.pathString)}},RU=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(s=SU(t.substring(d,f)));const g=CU(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const T=e.indexOf(".");r=e.substring(0,T).toLowerCase(),n=e.substring(T+1),i=r}"ns"in g&&(i=g.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */const QE="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",kU=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=QE.charAt(n%64),n=Math.floor(n/64);$(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=QE.charAt(e[s]);return $(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class AU{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ze(this.snapshot.exportVal())}}class NU{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class PU{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return $(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class k_{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return ie(this._path)?null:x1(this._path)}get ref(){return new ls(this._repo,this._path)}get _queryIdentifier(){const e=bE(this._queryParams),n=Yg(e);return n==="{}"?"default":n}get _queryObject(){return bE(this._queryParams)}isEqual(e){if(e=be(e),!(e instanceof k_))return!1;const n=this._repo===e._repo,r=e_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+S4(this._path)}}class ls extends k_{constructor(e,n){super(e,n,new s_,!1)}get parent(){const e=D1(this._path);return e===null?null:new ls(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Uc{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),r=el(this.ref,e);return new Uc(this._node.getChild(n),r,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Uc(s,el(this.ref,r),Me)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bo(t,e){return t=be(t),t._checkNotDeleted("ref"),e!==void 0?el(t._root,e):t._root}function el(t,e){return t=be(t),re(t._path)===null?lU("child","path",e):dR("child","path",e),new ls(t._repo,qe(t._path,e))}function YE(t,e){t=be(t),fR("push",t._path),hR("push",e,t._path,!0);const n=gR(t._repo),r=kU(n),s=el(t,r),i=el(t,r);let o;return o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function pu(t,e){t=be(t),fR("set",t._path),hR("set",e,t._path,!1);const n=new uh;return _U(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class A_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new AU("value",this,new Uc(e.snapshotNode,new ls(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new NU(this,e,n):null}matches(e){return e instanceof A_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function xU(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const u=n,c=(d,f)=>{Bp(t._repo,t,a),u(d,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new PU(n,i||void 0),a=new A_(o);return vU(t._repo,t,a),()=>Bp(t._repo,t,a)}function bU(t,e,n,r){return xU(t,"value",e,n,r)}function DU(t,e,n){Bp(t._repo,t,null)}OF(ls);UF(ls);/**
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
 */const OU="FIREBASE_DATABASE_EMULATOR_HOST",$p={};let LU=!1;function MU(t,e,n,r){t.repoInfo_=new T1(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function VU(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||ur("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),vt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=KE(i,s),a=o.repoInfo,u;typeof process<"u"&&pE&&(u=pE[OU]),u?(i=`http://${u}?ns=${a.namespace}`,o=KE(i,s),a=o.repoInfo):o.repoInfo.secure;const c=new Jj(t.name,t.options,e);uU("Invalid Firebase Database URL",o),ie(o.path)||ur("Database URL must point to the root of a Firebase Database (not including a child path).");const d=FU(a,t,c,new Xj(t.name,n));return new UU(d,t)}function jU(t,e){const n=$p[e];(!n||n[t.key]!==t)&&ur(`Database ${e}(${t.repoInfo_}) has already been deleted.`),wU(t),delete n[t.key]}function FU(t,e,n,r){let s=$p[e.name];s||(s={},$p[e.name]=s);let i=s[t.toURLString()];return i&&ur("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new pU(t,LU,n,r),s[t.toURLString()]=i,i}class UU{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(mU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ls(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ur("Cannot call "+e+" on a deleted database.")}}function zU(t=dh(),e){const n=ll(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Xm("database");r&&BU(n,...r)}return n}function BU(t,e,n,r={}){t=be(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ur("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&ur('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Mu(Mu.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Jm(r.mockUserToken,t.app.options.projectId);i=new Mu(o)}MU(s,e,n,i)}/**
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
 */function $U(t){Lj(os),Xr(new sr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return VU(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),nn(mE,gE,t),nn(mE,gE,"esm2017")}/**
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
 */const WU={".sv":"timestamp"};function XE(){return WU}Zn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Zn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};$U();const HU={apiKey:"AIzaSyA99aKVRIdNJFVA6gsDVPHUl1pIcthwJAs",authDomain:"gen-lang-client-0324052801.firebaseapp.com",projectId:"gen-lang-client-0324052801",storageBucket:"gen-lang-client-0324052801.firebasestorage.app",messagingSenderId:"566230423463",appId:"1:566230423463:web:9123cf85f3f342c4174882",databaseURL:"https://gen-lang-client-0324052801-default-rtdb.firebaseio.com"},Fh=GI(HU),qU=hO(Fh),GU=new Wn,KU=()=>wD(qU,GU),mu=sV(Fh),QU=xj(Fh),$o=zU(Fh),Wp={async createOrUpdateUser(t){const e=uu(mu,"users",t.uid),n=await lE(e),r={uid:t.uid,email:t.email,displayName:t.displayName||"Anonymous",photoURL:t.photoURL||null,bio:"",updatedAt:Mo()};return n.exists()?await Qd(e,{...r,updatedAt:Mo()}):(r.createdAt=Mo(),r.points=1e3,r.wins=0,await vV(e,r)),r},async getUserProfile(t){const e=uu(mu,"users",t),n=await lE(e);return n.exists()?{id:n.id,...n.data()}:null},async updateUserProfile(t,e){const n=uu(mu,"users",t);await Qd(n,{...e,updatedAt:Mo()})},async uploadProfilePicture(t,e){const n=Pj(QU,`profile_pictures/${t}`);await Aj(n,e);const r=await Nj(n);return await Qd(uu(mu,"users",t),{photoURL:r,updatedAt:Mo()}),r},async getLeaderboard(t=50){return[]}};function YU(){const t=On(),{setUser:e,setUserProfile:n,setLoading:r,isAuthenticated:s}=pr(),[i,o]=O.useState(!0),[a,u]=O.useState(!1),[c,d]=O.useState(""),[f,g]=O.useState({email:"",password:"",username:""});if(s)return t("/lobby"),null;const _=async()=>{d(""),u(!0);try{const k=await KU(),E={uid:k.user.uid,email:k.user.email,displayName:k.user.displayName,photoURL:k.user.photoURL},y=await Wp.createOrUpdateUser(E);e(E),n(y),r(!1),t("/lobby")}catch(k){console.error("Google sign-in error:",k),d("Failed to sign in. Please check Firebase configuration."),u(!1)}},T=async k=>{k.preventDefault(),d(""),u(!0);try{await new Promise(y=>setTimeout(y,1e3));const E={uid:`user_${Date.now()}`,email:f.email,displayName:f.username||f.email.split("@")[0]};e(E),r(!1),t("/profile")}catch{d("Authentication failed. Please try again.")}finally{u(!1)}},I=k=>{g({...f,[k.target.name]:k.target.value})};return p.jsxs("div",{className:"home",children:[p.jsxs("div",{className:"home-background",children:[p.jsx("div",{className:"bg-gradient-1"}),p.jsx("div",{className:"bg-gradient-2"}),p.jsx("div",{className:"bg-grid"}),p.jsx("div",{className:"bg-glow"})]}),p.jsxs("header",{className:"home-header",children:[p.jsxs("div",{className:"home-logo",children:[p.jsx(Px,{className:"logo-icon"}),p.jsx("span",{children:"Dreamledge"})]}),p.jsxs("button",{className:"header-leaderboard",onClick:()=>t("/leaderboard"),children:[p.jsx(Km,{size:18}),p.jsx("span",{children:"Rankings"})]})]}),p.jsxs("main",{className:"home-main",children:[p.jsxs("section",{className:"hero",children:[p.jsxs("div",{className:"hero-content",children:[p.jsxs("div",{className:"hero-badge",children:[p.jsx("span",{className:"badge-dot"}),"Live Battle Arena"]}),p.jsxs("h1",{className:"hero-title",children:["Where Artists",p.jsx("span",{className:"hero-title-accent",children:" Battle "}),"for Glory"]}),p.jsx("p",{className:"hero-subtitle",children:"Experience the thrill of live rap battles. Watch artists compete, judges critique, and the crowd decides the winner."}),p.jsx("div",{className:"hero-actions",children:p.jsxs("button",{className:"btn btn-primary btn-lg",onClick:()=>{var k;o(!1),(k=document.getElementById("join-section"))==null||k.scrollIntoView({behavior:"smooth"})},children:["Get Started",p.jsx(mx,{size:20})]})})]}),p.jsx("div",{className:"hero-visual",children:p.jsxs("div",{className:"battle-preview",children:[p.jsxs("div",{className:"preview-card artist-1",children:[p.jsx("div",{className:"preview-avatar",children:p.jsx(Br,{size:32})}),p.jsx("span",{className:"preview-label",children:"Artist"})]}),p.jsx("div",{className:"preview-vs",children:"VS"}),p.jsxs("div",{className:"preview-card artist-2",children:[p.jsx("div",{className:"preview-avatar",children:p.jsx(Br,{size:32})}),p.jsx("span",{className:"preview-label",children:"Artist"})]})]})})]}),p.jsxs("section",{className:"features",children:[p.jsxs("div",{className:"feature-card",children:[p.jsx("div",{className:"feature-icon artist",children:p.jsx(Br,{size:28})}),p.jsx("h3",{className:"feature-title",children:"Artists"}),p.jsx("p",{className:"feature-desc",children:"Upload your tracks and battle head-to-head. Show your flow, lyrics, and stage presence."})]}),p.jsxs("div",{className:"feature-card",children:[p.jsx("div",{className:"feature-icon judge",children:p.jsx(uc,{size:28})}),p.jsx("h3",{className:"feature-title",children:"Judges"}),p.jsx("p",{className:"feature-desc",children:"Evaluate performances with professional feedback. Vote on who brings the heat."})]}),p.jsxs("div",{className:"feature-card",children:[p.jsx("div",{className:"feature-icon spectator",children:p.jsx(wx,{size:28})}),p.jsx("h3",{className:"feature-title",children:"Spectators"}),p.jsx("p",{className:"feature-desc",children:"Watch live battles, chat with fans, and vote for your favorite artist."})]})]}),p.jsx("section",{className:"auth-section",id:"join-section",children:p.jsxs("div",{className:"auth-card",children:[p.jsxs("div",{className:"auth-header",children:[p.jsx("h2",{className:"auth-title",children:i?"Welcome Back":"Join Dreamledge"}),p.jsx("p",{className:"auth-subtitle",children:i?"Sign in to continue to the arena":"Create an account to start battling"})]}),p.jsxs("button",{type:"button",className:"btn btn-google",onClick:_,disabled:a,children:[p.jsx(_x,{size:20}),"Continue with Google"]}),p.jsx("div",{className:"auth-divider",children:p.jsx("span",{children:"or"})}),p.jsxs("form",{onSubmit:T,className:"auth-form",children:[!i&&p.jsxs("div",{className:"input-group",children:[p.jsxs("label",{className:"input-label",children:[p.jsx(Qm,{size:16}),"Username"]}),p.jsx("input",{type:"text",name:"username",value:f.username,onChange:I,className:"input",placeholder:"Choose a username",required:!i})]}),p.jsxs("div",{className:"input-group",children:[p.jsxs("label",{className:"input-label",children:[p.jsx(PI,{size:16}),"Email"]}),p.jsx("input",{type:"email",name:"email",value:f.email,onChange:I,className:"input",placeholder:"Enter your email",required:!0})]}),p.jsxs("div",{className:"input-group",children:[p.jsxs("label",{className:"input-label",children:[p.jsx(Ix,{size:16}),"Password"]}),p.jsx("input",{type:"password",name:"password",value:f.password,onChange:I,className:"input",placeholder:"Enter your password",required:!0})]}),c&&p.jsx("p",{className:"error-text",children:c}),p.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:a,children:a?p.jsxs("span",{className:"loading-dots",children:[p.jsx("span",{}),p.jsx("span",{}),p.jsx("span",{})]}):i?"Sign In":"Create Account"})]}),p.jsx("div",{className:"auth-footer",children:p.jsxs("p",{children:[i?"Don't have an account? ":"Already have an account? ",p.jsx("button",{className:"auth-switch",onClick:()=>o(!i),children:i?"Sign Up":"Sign In"})]})})]})})]}),p.jsx("footer",{className:"home-footer",children:p.jsx("p",{children:"© 2024 Dreamledge. All rights reserved."})})]})}function XU(){const t=On(),{user:e,userProfile:n}=pr(),{setUserRole:r,setIsHost:s}=Hm(),[i,o]=O.useState(""),[a,u]=O.useState(!1),[c,d]=O.useState(!1),[f,g]=O.useState([{id:"1",name:"🔥 Hot Bars Only",players:4,status:"waiting"},{id:"2",name:"Underground Battles",players:6,status:"active"},{id:"3",name:"New Artist Showcase",players:3,status:"waiting"}]),_=()=>{const E="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let y="";for(let S=0;S<6;S++)y+=E.charAt(Math.floor(Math.random()*E.length));return y},T=E=>{r(E);const y=_();s(E==="artist"),t(`/waiting/${y}`)},I=E=>{r("spectator"),t(`/waiting/${E}`)},k=()=>{const E=_();s(!0),r("artist"),t(`/waiting/${E}`)};return p.jsx("div",{className:"lobby",children:p.jsxs("div",{className:"lobby-container",children:[p.jsxs("header",{className:"lobby-header",children:[p.jsx("h1",{className:"page-title",children:"Choose Your Path"}),p.jsx("p",{className:"lobby-subtitle",children:"Pick your role and enter the arena"})]}),p.jsxs("div",{className:"role-grid",children:[p.jsxs("button",{className:"role-card role-artist",onClick:()=>T("artist"),children:[p.jsx("div",{className:"role-icon",children:p.jsx(xx,{size:32})}),p.jsxs("div",{className:"role-info",children:[p.jsx("h3",{className:"role-title",children:"Random Artist Battle"}),p.jsx("p",{className:"role-desc",children:"Enter the arena as an artist and compete"})]}),p.jsx("span",{className:"role-badge",children:"Compete"})]}),p.jsxs("button",{className:"role-card role-judge",onClick:()=>T("judge"),children:[p.jsx("div",{className:"role-icon",children:p.jsx(Qm,{size:32})}),p.jsxs("div",{className:"role-info",children:[p.jsx("h3",{className:"role-title",children:"Random Judge"}),p.jsx("p",{className:"role-desc",children:"Evaluate and vote on performances"})]}),p.jsx("span",{className:"role-badge",children:"Judge"})]}),p.jsxs("button",{className:"role-card role-spectator",onClick:()=>T("spectator"),children:[p.jsx("div",{className:"role-icon",children:p.jsx($r,{size:32})}),p.jsxs("div",{className:"role-info",children:[p.jsx("h3",{className:"role-title",children:"Random Spectator"}),p.jsx("p",{className:"role-desc",children:"Watch battles and vote for favorites"})]}),p.jsx("span",{className:"role-badge",children:"Watch"})]}),p.jsxs("button",{className:"role-card role-create",onClick:k,children:[p.jsx("div",{className:"role-icon",children:p.jsx(bI,{size:32})}),p.jsxs("div",{className:"role-info",children:[p.jsx("h3",{className:"role-title",children:"Create Battle"}),p.jsx("p",{className:"role-desc",children:"Host your own private battle room"})]}),p.jsx("span",{className:"role-badge",children:"Host"})]})]}),p.jsxs("div",{className:"join-room",children:[p.jsx("h2",{className:"section-title",children:"Join with Code"}),p.jsxs("div",{className:"join-form",children:[p.jsx("input",{type:"text",className:"input room-input",placeholder:"Enter room code",value:i,onChange:E=>o(E.target.value.toUpperCase()),maxLength:6}),p.jsx("button",{className:"btn btn-primary",onClick:()=>i.length>=4&&I(i),disabled:i.length<4,children:"Join Room"})]})]}),p.jsxs("section",{className:"active-rooms",children:[p.jsx("h2",{className:"section-title",children:"Active Battles"}),p.jsx("div",{className:"rooms-list",children:f.map(E=>p.jsxs("button",{className:"room-card",onClick:()=>I(E.id),children:[p.jsxs("div",{className:"room-info",children:[p.jsx("h3",{className:"room-name",children:E.name}),p.jsxs("div",{className:"room-meta",children:[p.jsxs("span",{className:"room-players",children:[p.jsx($r,{size:14}),E.players," online"]}),p.jsx("span",{className:`room-status ${E.status}`,children:E.status==="waiting"?"Waiting":"Live"})]})]}),p.jsx("div",{className:"room-action",children:p.jsx(Nx,{size:18})})]},E.id))})]})]})})}const Sn={sendMessage:async(t,e,n,r,s,i=!1,o=null)=>{try{const a=Bo($o,`chats/${t}/${e}/messages`),u=YE(a);await pu(u,{id:u.key,userId:n,username:r,message:s||"",isGif:i||!1,gifUrl:o||null,timestamp:XE(),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),console.log("Message sent successfully")}catch(a){console.error("Error sending message:",a)}},subscribeToMessages:(t,e,n)=>{try{const r=Bo($o,`chats/${t}/${e}/messages`);return bU(r,s=>{const i=[];s.exists()&&s.forEach(o=>{i.push(o.val())}),n(i)},s=>{console.error("Error subscribing to messages:",s)}),()=>DU(r)}catch(r){return console.error("Error setting up subscription:",r),()=>{}}},createRoom:async(t,e)=>{const n=Bo($o,"chats/rooms"),r=YE(n);return await pu(r,{id:r.key,name:t,createdBy:e,createdAt:XE(),members:{[e]:!0}}),r.key},joinRoom:async(t,e)=>{const n=Bo($o,`chats/rooms/${t}/members/${e}`);await pu(n,!0)},leaveRoom:async(t,e)=>{const n=Bo($o,`chats/rooms/${t}/members/${e}`);await pu(n,null)}},JU="qYl52xlnZyVb0oLhm9Tz8KlUn3wOlUsn";function N_({onSelect:t,onClose:e}){const[n,r]=O.useState(""),[s,i]=O.useState([]),[o,a]=O.useState(!0),[u,c]=O.useState(!1);O.useEffect(()=>{d("trending")},[]);const d=async(_,T="")=>{a(!0);try{let k=`https://api.giphy.com/v1/gifs/${_==="trending"?"trending":"search"}?api_key=${JU}&limit=20&rating=pg-13`;T&&(k+=`&q=${encodeURIComponent(T)}`);const y=await(await fetch(k)).json();if(y.data&&Array.isArray(y.data)){const S=y.data.map(b=>{var j,F,R,w,C,N,x,P;return{id:b.id,url:((F=(j=b.images)==null?void 0:j.fixed_width)==null?void 0:F.url)||((w=(R=b.images)==null?void 0:R.original)==null?void 0:w.url),preview:((N=(C=b.images)==null?void 0:C.fixed_width)==null?void 0:N.url)||((P=(x=b.images)==null?void 0:x.original)==null?void 0:P.url)}}).filter(b=>b.url);i(S)}}catch(I){console.error("Error fetching GIFs:",I),i([])}finally{a(!1)}},f=_=>{r(_),_.length>1?d("search",_):_.length===0&&d("trending")},g=_=>{t(_),e()};return p.jsxs("div",{className:"gif-picker",children:[p.jsxs("div",{className:"gif-picker-header",children:[p.jsx("h3",{children:"Choose a GIF"}),p.jsx("button",{className:"gif-close",onClick:e,children:p.jsx(ol,{size:18})})]}),p.jsxs("div",{className:"gif-search",children:[p.jsx(DI,{size:18,className:"search-icon"}),p.jsx("input",{type:"text",inputMode:u?"search":"text",placeholder:u?"Search GIFs...":"Tap to search",value:n,onChange:_=>f(_.target.value),onFocus:()=>c(!0),onBlur:()=>c(!1),className:"gif-search-input"})]}),p.jsxs("div",{className:"gif-section",children:[p.jsxs("div",{className:"gif-section-title",children:[p.jsx(OI,{size:14}),n?"Results":"Trending"]}),o?p.jsxs("div",{className:"gif-loading",children:[p.jsx(Tx,{size:32,className:"spinner"}),p.jsx("span",{children:"Loading..."})]}):p.jsx("div",{className:"gif-grid",children:s.map(_=>p.jsx("button",{className:"gif-item",onClick:()=>g(_.url),children:p.jsx("img",{src:_.preview,alt:"GIF",loading:"lazy"})},_.id))})]}),p.jsx("div",{className:"gif-picker-footer",children:p.jsx("span",{children:"GIPHY"})})]})}const ZU={id:"1",phase:"performance",round:1,currentArtist:1,timeRemaining:180,artist1:{id:"1",name:"MC_Flow",votes:2,isPlaying:!0},artist2:{id:"2",name:"LyricQueen",votes:1,isPlaying:!1}};function e3(){const{battleId:t}=$m(),e=On(),{user:n,userProfile:r}=pr(),{userRole:s}=Hm(),{isGifPickerOpen:i,toggleGifPicker:o,closeGifPicker:a}=ah(),[u,c]=O.useState(ZU),[d,f]=O.useState([{id:1,userId:"1",username:"MC_Flow",message:"Let's gooo! 🔥",time:"2:35 PM",isGif:!1},{id:2,userId:"3",username:"Spectator_1",message:"This is insane!",time:"2:35 PM",isGif:!1},{id:3,userId:"4",username:"Judge_Maya",message:"That flow was clean",time:"2:36 PM",isGif:!1},{id:4,userId:"5",username:"FanBoy",message:"",time:"2:36 PM",isGif:!0,gifUrl:"https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"}]),[g,_]=O.useState(""),[T,I]=O.useState(!1),[k,E]=O.useState(!1),[y,S]=O.useState(!0),[b,j]=O.useState(80),F=O.useRef(null);O.useEffect(()=>{var P;(P=F.current)==null||P.scrollIntoView({behavior:"smooth"})},[d]),O.useEffect(()=>{if(!t)return;const P=Sn.subscribeToMessages("arenas",t,A=>{A.length>0&&f(A)});return()=>P()},[t]),O.useEffect(()=>{const P=setInterval(()=>{c(A=>A.timeRemaining>0?{...A,timeRemaining:A.timeRemaining-1}:A)},1e3);return()=>clearInterval(P)},[]);const R=P=>{const A=Math.floor(P/60),Te=P%60;return`${A}:${Te.toString().padStart(2,"0")}`},w=async P=>{if(P.preventDefault(),!g.trim()||!t)return;const A=g;_("");const Te=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",tt={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:Te,message:A,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!1};f(Ft=>[...Ft,tt]);try{await Sn.sendMessage("arenas",t,(n==null?void 0:n.uid)||"me",Te,A)}catch(Ft){console.error("Failed to send message:",Ft)}},C=async P=>{if(!t)return;const A=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",Te={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:A,message:"",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!0,gifUrl:P};f(tt=>[...tt,Te]);try{await Sn.sendMessage("arenas",t,(n==null?void 0:n.uid)||"me",A,"",!0,P)}catch(tt){console.error("Failed to send GIF:",tt)}_("")},N=P=>{switch(P){case"waiting":return"Waiting";case"preparing":return"Preparing";case"submission":return"Submit Track";case"performance":return"Performance";case"voting":return"Voting";case"results":return"Results";default:return P}};u.currentArtist===1?u.artist1:u.artist2;const x=u.artist1.votes+u.artist2.votes;return p.jsx("div",{className:"arena",children:p.jsxs("div",{className:"arena-container",children:[p.jsxs("header",{className:"arena-header",children:[p.jsxs("div",{className:"battle-info",children:[p.jsx("span",{className:"battle-phase",children:N(u.phase)}),p.jsx("span",{className:"battle-divider",children:"•"}),p.jsxs("span",{className:"battle-round",children:["Round ",u.round]})]}),p.jsxs("div",{className:`timer ${u.timeRemaining<=30?"urgent":""}`,children:[p.jsx(bx,{size:18}),p.jsx("span",{children:R(u.timeRemaining)})]})]}),p.jsxs("div",{className:"arena-content",children:[p.jsxs("section",{className:"arena-main",children:[p.jsxs("div",{className:"video-grid",children:[p.jsxs("div",{className:`video-box artist ${u.currentArtist===1?"active":""}`,children:[p.jsx("div",{className:"video-content",children:p.jsx("div",{className:"avatar-large",children:p.jsx(Br,{size:40})})}),p.jsxs("div",{className:"video-info",children:[p.jsx("span",{className:"artist-name",children:u.artist1.name}),p.jsxs("div",{className:"artist-stats",children:[p.jsxs("span",{className:"vote-count",children:[p.jsx(Yv,{size:14}),u.artist1.votes]}),u.currentArtist===1&&y&&p.jsxs("span",{className:"playing-indicator",children:[p.jsx(Vd,{size:14}),"Playing"]})]})]})]}),p.jsxs("div",{className:`video-box artist ${u.currentArtist===2?"active":""}`,children:[p.jsx("div",{className:"video-content",children:p.jsx("div",{className:"avatar-large",children:p.jsx(Br,{size:40})})}),p.jsxs("div",{className:"video-info",children:[p.jsx("span",{className:"artist-name",children:u.artist2.name}),p.jsxs("div",{className:"artist-stats",children:[p.jsxs("span",{className:"vote-count",children:[p.jsx(Yv,{size:14}),u.artist2.votes]}),u.currentArtist===2&&y&&p.jsxs("span",{className:"playing-indicator",children:[p.jsx(Vd,{size:14}),"Playing"]})]})]})]}),p.jsxs("div",{className:"video-box judge",children:[p.jsx("div",{className:"video-content",children:p.jsx("div",{className:"avatar-large judge",children:p.jsx(uc,{size:32})})}),p.jsx("div",{className:"video-info",children:p.jsx("span",{className:"artist-name",children:"Judge_Dave"})})]}),p.jsxs("div",{className:"video-box judge",children:[p.jsx("div",{className:"video-content",children:p.jsx("div",{className:"avatar-large judge",children:p.jsx(uc,{size:32})})}),p.jsx("div",{className:"video-info",children:p.jsx("span",{className:"artist-name",children:"Judge_Maya"})})]})]}),p.jsxs("div",{className:"arena-controls",children:[p.jsxs("div",{className:"playback-controls",children:[p.jsx("button",{className:`control-btn large ${y?"active":""}`,onClick:()=>S(!y),children:y?p.jsx(Cx,{size:24}):p.jsx(kx,{size:24})}),p.jsxs("div",{className:"volume-control",children:[p.jsx(Vd,{size:18}),p.jsx("input",{type:"range",min:"0",max:"100",value:b,onChange:P=>j(P.target.value),className:"volume-slider"})]})]}),p.jsxs("div",{className:"media-controls",children:[p.jsx("button",{className:`control-btn ${T?"active":"off"}`,onClick:()=>I(!T),children:T?p.jsx(Br,{size:20}):p.jsx(rp,{size:20})}),p.jsx("button",{className:`control-btn ${k?"active":"off"}`,onClick:()=>E(!k),children:k?p.jsx(LI,{size:20}):p.jsx(sp,{size:20})}),p.jsx("button",{className:"control-btn leave",onClick:()=>e("/lobby"),children:p.jsx(ol,{size:20})})]})]}),p.jsxs("div",{className:"vote-bar",children:[p.jsx("div",{className:"vote-track",children:p.jsx("div",{className:"vote-progress",style:{width:`${u.artist1.votes/Math.max(x,1)*100}%`}})}),p.jsxs("div",{className:"vote-labels",children:[p.jsx("span",{children:u.artist1.name}),p.jsx("span",{className:"vs",children:"VS"}),p.jsx("span",{children:u.artist2.name})]})]})]}),p.jsxs("aside",{className:"chat-section arena-chat",children:[p.jsxs("div",{className:"chat-header",children:[p.jsx("h3",{children:"Live Crowd"}),p.jsxs("span",{className:"viewer-count",children:[p.jsx($r,{size:14}),"24 watching"]})]}),p.jsxs("div",{className:"chat-messages",children:[d.map(P=>p.jsxs("div",{className:`chat-message ${P.userId===(n==null?void 0:n.uid)?"own":""} ${P.isGif?"gif-message":""}`,children:[p.jsxs("div",{className:"message-header",children:[p.jsx("span",{className:"message-username",children:P.username}),p.jsx("span",{className:"message-time",children:P.time})]}),P.isGif?p.jsx("img",{src:P.gifUrl,alt:"GIF",className:"message-gif"}):p.jsx("p",{className:"message-content",children:P.message})]},P.id)),p.jsx("div",{ref:F})]}),p.jsxs("form",{className:"chat-input-form",onSubmit:w,children:[p.jsx("button",{type:"button",className:"gif-toggle",onClick:o,children:"GIF"}),p.jsx("input",{type:"text",className:"input chat-input",placeholder:"Say something...",value:g,onChange:P=>_(P.target.value)}),p.jsx("button",{type:"submit",className:"send-btn",disabled:!g.trim(),children:p.jsx(Gm,{size:18})})]}),i&&p.jsx(N_,{onSelect:C,onClose:o})]})]})]})})}function t3(){var R,w;const t=On(),{user:e,userProfile:n,setUserProfile:r}=pr(),[s,i]=O.useState(!1),[o,a]=O.useState(!1),[u,c]=O.useState(!1),[d,f]=O.useState(!1),[g,_]=O.useState(""),T=O.useRef(null),[I,k]=O.useState({username:"",bio:"",avatarUrl:""});O.useEffect(()=>{if(!e){t("/");return}k({username:(n==null?void 0:n.displayName)||(e==null?void 0:e.displayName)||"",bio:(n==null?void 0:n.bio)||"",avatarUrl:(n==null?void 0:n.photoURL)||(e==null?void 0:e.photoURL)||""})},[e,n,t]);const E=C=>{const{name:N,value:x}=C.target;k(P=>({...P,[N]:x})),_("")},y=()=>{var C;(C=T.current)==null||C.click()},S=async C=>{var x;const N=(x=C.target.files)==null?void 0:x[0];if(!(!N||!e)){if(!N.type.startsWith("image/")){_("Please select an image file");return}if(N.size>5*1024*1024){_("Image must be less than 5MB");return}c(!0),_("");try{const P=await Wp.uploadProfilePicture(e.uid,N);k(A=>({...A,avatarUrl:P}))}catch(P){console.error("Upload error:",P),_("Failed to upload image")}finally{c(!1)}}},b=async()=>{if(!I.username.trim()){_("Username is required");return}if(I.username.length<3){_("Username must be at least 3 characters");return}if(e){a(!0),_("");try{await Wp.updateUserProfile(e.uid,{displayName:I.username,bio:I.bio,photoURL:I.avatarUrl});const C={...n,displayName:I.username,bio:I.bio,photoURL:I.avatarUrl};r(C),i(!1),f(!0),setTimeout(()=>f(!1),3e3)}catch(C){console.error("Save error:",C),_("Failed to save profile")}finally{a(!1)}}},j=()=>{k({username:(n==null?void 0:n.displayName)||(e==null?void 0:e.displayName)||"",bio:(n==null?void 0:n.bio)||"",avatarUrl:(n==null?void 0:n.photoURL)||(e==null?void 0:e.photoURL)||""}),i(!1),_("")},F=()=>I.avatarUrl&&I.avatarUrl.startsWith("http")?{backgroundImage:`url(${I.avatarUrl})`,backgroundSize:"cover"}:{background:I.avatarUrl||"var(--accent-red)"};return p.jsx("div",{className:"profile",children:p.jsxs("div",{className:"profile-container",children:[d&&p.jsxs("div",{className:"success-toast",children:[p.jsx(qm,{size:18}),"Profile updated successfully!"]}),p.jsxs("header",{className:"profile-header",children:[p.jsxs("div",{className:"profile-avatar-section",children:[p.jsx("div",{className:"profile-avatar",style:F(),children:!((R=I.avatarUrl)!=null&&R.startsWith("http"))&&I.username?I.username.charAt(0).toUpperCase():""}),s&&p.jsx("button",{className:"avatar-edit-btn",onClick:y,disabled:u,children:u?p.jsx("div",{className:"loading-spinner small"}):p.jsx(gx,{size:18})}),p.jsx("input",{ref:T,type:"file",accept:"image/*",onChange:S,style:{display:"none"}})]}),p.jsx("div",{className:"profile-info",children:s?p.jsxs("div",{className:"edit-form",children:[p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Username"}),p.jsx("input",{type:"text",name:"username",value:I.username,onChange:E,className:"input",placeholder:"Enter username",maxLength:20})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Bio"}),p.jsx("textarea",{name:"bio",value:I.bio,onChange:E,className:"input bio-input",placeholder:"Tell us about yourself...",maxLength:150,rows:3}),p.jsxs("span",{className:"char-count",children:[I.bio.length,"/150"]})]}),g&&p.jsxs("div",{className:"error-message",children:[p.jsx(fx,{size:16}),g]}),p.jsxs("div",{className:"edit-actions",children:[p.jsxs("button",{className:"btn btn-secondary",onClick:j,disabled:o,children:[p.jsx(ol,{size:18}),"Cancel"]}),p.jsx("button",{className:"btn btn-primary",onClick:b,disabled:o,children:o?p.jsx("span",{className:"saving",children:"Saving..."}):p.jsxs(p.Fragment,{children:[p.jsx(Ax,{size:18}),"Save"]})})]})]}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"profile-name-row",children:[p.jsx("h1",{className:"profile-name",children:I.username||"Anonymous"}),p.jsxs("button",{className:"edit-btn",onClick:()=>i(!0),children:[p.jsx(Rx,{size:16}),"Edit"]})]}),p.jsx("p",{className:"profile-bio",children:I.bio||"No bio yet"}),p.jsx("div",{className:"profile-meta",children:p.jsxs("span",{className:"meta-item",children:[p.jsx(PI,{size:14}),(e==null?void 0:e.email)||"No email"]})})]})})]}),p.jsxs("section",{className:"profile-stats",children:[p.jsxs("div",{className:"stat-card",children:[p.jsx("span",{className:"stat-value",children:"0"}),p.jsx("span",{className:"stat-label",children:"Battles Won"})]}),p.jsxs("div",{className:"stat-card",children:[p.jsx("span",{className:"stat-value",children:"0"}),p.jsx("span",{className:"stat-label",children:"Battles Lost"})]}),p.jsxs("div",{className:"stat-card",children:[p.jsx("span",{className:"stat-value",children:"0"}),p.jsx("span",{className:"stat-label",children:"Total Votes"})]})]}),p.jsxs("section",{className:"profile-section",children:[p.jsx("h2",{className:"section-title",children:"Account Info"}),p.jsxs("div",{className:"info-list",children:[p.jsxs("div",{className:"info-item",children:[p.jsx("span",{className:"info-label",children:"User ID"}),p.jsx("span",{className:"info-value mono",children:((w=e==null?void 0:e.uid)==null?void 0:w.slice(0,12))||"N/A"})]}),p.jsxs("div",{className:"info-item",children:[p.jsx("span",{className:"info-label",children:"Account Type"}),p.jsx("span",{className:"info-value",children:"Free"})]}),p.jsxs("div",{className:"info-item",children:[p.jsx("span",{className:"info-label",children:"Member Since"}),p.jsx("span",{className:"info-value",children:new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"})})]})]})]}),p.jsx("div",{className:"profile-note",children:p.jsx("p",{children:"Changes to your username and profile picture update instantly across the app."})})]})})}const n3=[{id:"1",type:"dm",name:"MC_Flow",avatar:"#e63946",lastMessage:"GG last battle!",time:"2:30 PM",unread:2},{id:"2",type:"dm",name:"Judge_Dave",avatar:"#2ecc71",lastMessage:"Your flow was clean",time:"1:15 PM",unread:0},{id:"3",type:"room",name:"Battle Lounge",avatar:"#3498db",lastMessage:"Who's ready for the next battle?",time:"12:45 PM",unread:5,members:24},{id:"4",type:"room",name:"Underground Cypher",avatar:"#9b59b6",lastMessage:"New track just dropped!",time:"Yesterday",unread:0,members:156}],r3=[{id:"room1",name:"Battle Lounge",members:24,isPublic:!0},{id:"room2",name:"Underground Cypher",members:156,isPublic:!0},{id:"room3",name:"Hip Hop Heads",members:89,isPublic:!0},{id:"room4",name:"Beat Makers",members:67,isPublic:!0}],JE=[{id:1,userId:"1",username:"MC_Flow",message:"GG last battle! 🔥",time:"2:30 PM"},{id:2,userId:"me",username:"You",message:"Thanks! You killed it too",time:"2:31 PM"},{id:3,userId:"1",username:"MC_Flow",message:"Wanna go again?",time:"2:32 PM"},{id:4,userId:"me",username:"You",message:"I'm down. Let me warm up first",time:"2:33 PM"},{id:5,userId:"1",username:"MC_Flow",message:"Bet. I'll create a room",time:"2:34 PM"}],ZE=[{id:1,userId:"user1",username:"BeatMaker99",message:"Who's ready for the next battle?",time:"12:45 PM"},{id:2,userId:"user2",username:"FlowMaster",message:"I am! Hit me up",time:"12:46 PM"},{id:3,userId:"user3",username:"Lyricist",message:"Gonna spectate this one",time:"12:47 PM"},{id:4,userId:"user4",username:"HipHopFan",message:"This arena is fire 🔥",time:"12:48 PM"}];function e0(){const{conversationId:t}=$m(),e=On(),{user:n,userProfile:r}=pr(),{isGifPickerOpen:s,toggleGifPicker:i,closeGifPicker:o}=ah(),[a,u]=O.useState(n3),[c,d]=O.useState(r3),[f,g]=O.useState(t?"chat":"dms"),[_,T]=O.useState(null),[I,k]=O.useState([]),[E,y]=O.useState(""),[S,b]=O.useState(""),[j,F]=O.useState(!1),[R,w]=O.useState(""),[C,N]=O.useState(!1),x=O.useRef(null);O.useEffect(()=>{if(t){const M=a.find(H=>H.id===t);M&&(T(M),k(M.type==="room"?ZE:JE),g("chat"))}},[t,a]),O.useEffect(()=>{var M;(M=x.current)==null||M.scrollIntoView({behavior:"smooth"})},[I]),O.useEffect(()=>{if(!_)return;const M=_.type==="room"?"rooms":"dms",H=_.id,ae=Sn.subscribeToMessages(M,H,ne=>{ne.length>0?(k(ne),N(!0)):I.length===0&&N(!1)});return()=>ae()},[_]);const P=a.filter(M=>M.name.toLowerCase().includes(S.toLowerCase())),A=c.filter(M=>M.name.toLowerCase().includes(S.toLowerCase())),Te=M=>{T(M),k(M.type==="room"?ZE:JE),g("chat"),e(`/messages/${M.id}`,{replace:!0})},tt=async M=>{if(M.preventDefault(),!E.trim()||!_)return;const H=E;y("");const ae=_.type==="room"?"rooms":"dms",ne=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",_e={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:ne,message:H,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!1};k(zt=>[...zt,_e]);try{await Sn.sendMessage(ae,_.id,(n==null?void 0:n.uid)||"me",ne,H)}catch(zt){console.error("Failed to send message:",zt)}},Ft=async M=>{if(!_)return;const H=_.type==="room"?"rooms":"dms",ae=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",ne={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:ae,message:"",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!0,gifUrl:M};k(_e=>[..._e,ne]);try{await Sn.sendMessage(H,_.id,(n==null?void 0:n.uid)||"me",ae,"",!0,M)}catch(_e){console.error("Failed to send GIF:",_e)}y("")},Ut=async()=>{if(R.trim()){r!=null&&r.username||n!=null&&n.displayName;try{const H={id:await Sn.createRoom(R,(n==null?void 0:n.uid)||"me"),name:R,members:1,isPublic:!0,type:"room",lastMessage:"Room created",time:"Now",unread:0};d([H,...c]),u([H,...a]),w(""),F(!1),Te(H)}catch(M){console.error("Failed to create room:",M)}}},V=()=>{T(null),g("dms"),e("/messages")};return p.jsx("div",{className:"messages",children:p.jsx("div",{className:"messages-container",children:f==="chat"&&_?p.jsxs("div",{className:"chat-view",children:[p.jsxs("header",{className:"chat-view-header",children:[p.jsx("button",{className:"back-btn",onClick:V,children:p.jsx(px,{size:20})}),p.jsxs("div",{className:"chat-view-info",children:[p.jsx("span",{className:"chat-view-avatar",style:{background:_.avatar},children:_.type==="room"?p.jsx(Qv,{size:18}):_.name.charAt(0)}),p.jsxs("div",{className:"chat-view-details",children:[p.jsx("h2",{className:"chat-view-name",children:_.name}),_.type==="room"&&p.jsxs("span",{className:"chat-view-meta",children:[p.jsx($r,{size:12}),_.members," members"]})]})]})]}),p.jsxs("div",{className:"chat-view-messages",children:[I.map(M=>p.jsxs("div",{className:`chat-view-message ${M.userId===(n==null?void 0:n.uid)||M.userId==="me"?"own":""} ${M.isGif?"gif-message":""}`,children:[M.userId!=="me"&&p.jsx("span",{className:"message-sender",children:M.username}),M.isGif?p.jsx("img",{src:M.gifUrl,alt:"GIF",className:"message-gif"}):p.jsx("p",{className:"message-text",children:M.message}),p.jsx("span",{className:"message-time",children:M.time})]},M.id)),p.jsx("div",{ref:x})]}),p.jsxs("form",{className:"chat-view-input",onSubmit:tt,children:[p.jsx("button",{type:"button",className:"gif-toggle",onClick:i,children:"GIF"}),p.jsx("input",{type:"text",className:"input",placeholder:`Message ${_.name}`,value:E,onChange:M=>y(M.target.value)}),p.jsx("button",{type:"submit",className:"send-btn",disabled:!E.trim(),children:p.jsx(Gm,{size:20})})]}),s&&p.jsx(N_,{onSelect:Ft,onClose:i})]}):p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"messages-header",children:p.jsx("h1",{className:"page-title",children:"Messages"})}),p.jsxs("div",{className:"messages-tabs",children:[p.jsxs("button",{className:`tab-btn ${f==="dms"?"active":""}`,onClick:()=>g("dms"),children:[p.jsx(xI,{size:18}),"Direct"]}),p.jsxs("button",{className:`tab-btn ${f==="rooms"?"active":""}`,onClick:()=>g("rooms"),children:[p.jsx($r,{size:18}),"Rooms"]})]}),p.jsxs("div",{className:"search-bar",children:[p.jsx(DI,{size:18,className:"search-icon"}),p.jsx("input",{type:"text",className:"input search-input",placeholder:"Search conversations...",value:S,onChange:M=>b(M.target.value)})]}),f==="dms"&&p.jsx("div",{className:"conversations-list",children:P.filter(M=>M.type==="dm").map(M=>p.jsxs("button",{className:"conversation-item",onClick:()=>Te(M),children:[p.jsx("span",{className:"conv-avatar",style:{background:M.avatar},children:M.name.charAt(0)}),p.jsxs("div",{className:"conv-info",children:[p.jsxs("div",{className:"conv-header",children:[p.jsx("span",{className:"conv-name",children:M.name}),p.jsx("span",{className:"conv-time",children:M.time})]}),p.jsx("p",{className:"conv-preview",children:M.lastMessage})]}),M.unread>0&&p.jsx("span",{className:"unread-badge",children:M.unread})]},M.id))}),f==="rooms"&&p.jsxs("div",{className:"rooms-section",children:[p.jsxs("button",{className:"create-room-btn",onClick:()=>F(!0),children:[p.jsx(bI,{size:20}),"Create Room"]}),p.jsx("div",{className:"rooms-list",children:A.map(M=>p.jsxs("button",{className:"room-item",onClick:()=>Te({...M,type:"room",lastMessage:"Join the conversation",time:""}),children:[p.jsx("span",{className:"room-avatar",children:p.jsx(Qv,{size:18})}),p.jsxs("div",{className:"room-info",children:[p.jsx("span",{className:"room-name",children:M.name}),p.jsxs("span",{className:"room-members",children:[p.jsx($r,{size:12}),M.members," members"]})]})]},M.id))})]}),j&&p.jsx("div",{className:"modal-overlay",onClick:()=>F(!1),children:p.jsxs("div",{className:"modal create-room-modal",onClick:M=>M.stopPropagation(),children:[p.jsxs("div",{className:"modal-header",children:[p.jsx("h3",{className:"modal-title",children:"Create Room"}),p.jsx("button",{className:"modal-close",onClick:()=>F(!1),children:p.jsx(ol,{size:20})})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Room Name"}),p.jsx("input",{type:"text",className:"input",placeholder:"Enter room name",value:R,onChange:M=>w(M.target.value),maxLength:30})]}),p.jsxs("button",{className:"btn btn-primary btn-lg",onClick:Ut,disabled:!R.trim(),children:[p.jsx(qm,{size:18}),"Create"]})]})})]})})})}const s3=[{id:"1",username:"MC_Flow",points:2450,wins:72,avatar:"#e63946",joinedAt:"2024-01-15"},{id:"2",username:"LyricQueen",points:2380,wins:69,avatar:"#9b59b6",joinedAt:"2024-01-18"},{id:"3",username:"BeatMaker99",points:1890,wins:44,avatar:"#2ecc71",joinedAt:"2024-02-01"},{id:"4",username:"FlowMaster",points:1650,wins:32,avatar:"#3498db",joinedAt:"2024-02-10"},{id:"5",username:"RhymeStar",points:1420,wins:21,avatar:"#f39c12",joinedAt:"2024-02-20"},{id:"6",username:"MicDropper",points:1280,wins:14,avatar:"#1abc9c",joinedAt:"2024-03-01"},{id:"7",username:"VerseKing",points:1150,wins:7,avatar:"#e74c3c",joinedAt:"2024-03-05"},{id:"8",username:"CypherSoul",points:1080,wins:4,avatar:"#34495e",joinedAt:"2024-03-08"},{id:"9",username:"BattleBorn",points:1050,wins:2,avatar:"#16a085",joinedAt:"2024-03-12"},{id:"10",username:"NewEntry",points:1e3,wins:0,avatar:"#8e44ad",joinedAt:"2024-03-15"}];function i3(){On();const{user:t,userProfile:e,isAuthenticated:n}=pr(),[r,s]=O.useState([]),[i,o]=O.useState(null);O.useEffect(()=>{const c=[...s3].sort((d,f)=>f.points!==d.points?f.points-d.points:new Date(d.joinedAt)-new Date(f.joinedAt));if(s(c),t){const d=c.findIndex(f=>f.id===(t==null?void 0:t.uid));d>=0&&o(d+1)}},[t]);const a=c=>{switch(c){case 0:return p.jsx(vx,{size:20,className:"rank-icon gold"});case 1:return p.jsx(Xv,{size:20,className:"rank-icon silver"});case 2:return p.jsx(Xv,{size:20,className:"rank-icon bronze"});default:return p.jsx("span",{className:"rank-number",children:c+1})}},u=c=>(c==null?void 0:c.charAt(0).toUpperCase())||"?";return p.jsx("div",{className:"leaderboard-page",children:p.jsxs("div",{className:"leaderboard-container",children:[p.jsxs("header",{className:"leaderboard-header",children:[p.jsxs("div",{className:"header-content",children:[p.jsx(Km,{size:32,className:"header-icon"}),p.jsx("h1",{className:"page-title",children:"Leaderboard"})]}),p.jsx("p",{className:"header-subtitle",children:"Top performers in the arena"})]}),i&&p.jsxs("div",{className:"your-rank-card",children:[p.jsxs("div",{className:"your-rank-info",children:[p.jsx("span",{className:"your-rank-label",children:"Your Rank"}),p.jsxs("span",{className:"your-rank-number",children:["#",i]})]}),p.jsx("div",{className:"your-stats",children:p.jsxs("div",{className:"stat",children:[p.jsx(Jv,{size:16,className:"stat-icon"}),p.jsx("span",{className:"stat-value",children:(e==null?void 0:e.points)||1e3}),p.jsx("span",{className:"stat-label",children:"Points"})]})})]}),p.jsx("div",{className:"leaderboard-list",children:r.map((c,d)=>p.jsxs("div",{className:`leaderboard-card ${d<3?"top-three":""} ${c.id===(t==null?void 0:t.uid)?"current-user":""}`,children:[p.jsx("div",{className:"rank-position",children:a(d)}),p.jsx("div",{className:"user-avatar",style:{background:c.avatar},children:u(c.username)}),p.jsxs("div",{className:"user-info",children:[p.jsx("span",{className:"username",children:c.username}),p.jsxs("span",{className:"wins",children:[c.wins," wins"]})]}),p.jsxs("div",{className:"user-points",children:[p.jsx("span",{className:"points-value",children:c.points.toLocaleString()}),p.jsx("span",{className:"points-label",children:"pts"})]})]},c.id))}),p.jsxs("div",{className:"leaderboard-info",children:[p.jsxs("div",{className:"info-item",children:[p.jsx(OI,{size:16}),p.jsx("span",{children:"+20 points per win"})]}),p.jsxs("div",{className:"info-item",children:[p.jsx(Jv,{size:16}),p.jsx("span",{children:"+1000 points for joining"})]})]})]})})}const o3=[{id:"1",name:"MC_Flow",role:"artist",isReady:!0,hasVideo:!0,hasAudio:!0},{id:"2",name:"LyricQueen",role:"artist",isReady:!0,hasVideo:!0,hasAudio:!1},{id:"3",name:"Judge_Dave",role:"judge",isReady:!0,hasVideo:!0,hasAudio:!0},{id:"4",name:"Judge_Maya",role:"judge",isReady:!1,hasVideo:!1,hasAudio:!0}];function a3(){const{roomId:t}=$m(),e=On(),{user:n,userProfile:r}=pr(),{userRole:s,isHost:i,setParticipants:o}=Hm(),{isGifPickerOpen:a,toggleGifPicker:u,closeGifPicker:c}=ah(),[d,f]=O.useState(o3),[g,_]=O.useState([{id:1,userId:"1",username:"MC_Flow",message:"Ready to drop some heat! 🔥",time:"2:30 PM"},{id:2,userId:"3",username:"Judge_Dave",message:"Let's see what you got",time:"2:31 PM"},{id:3,userId:"2",username:"LyricQueen",message:"GGs in advance 😤",time:"2:32 PM"}]),[T,I]=O.useState(""),[k,E]=O.useState(!1),[y,S]=O.useState(!0),[b,j]=O.useState(!0),[F,R]=O.useState(!1),w=O.useRef(null),C=d.filter(V=>V.role==="artist"&&V.isReady).length>=2&&d.filter(V=>V.role==="judge").length>=2;O.useEffect(()=>{var V;(V=w.current)==null||V.scrollIntoView({behavior:"smooth"})},[g]),O.useEffect(()=>{if(!t)return;const V=Sn.subscribeToMessages("waitingRooms",t,M=>{M.length>0&&_(M)});return()=>V()},[t]);const N=()=>{navigator.clipboard.writeText(t),E(!0),setTimeout(()=>E(!1),2e3)},x=async V=>{if(V.preventDefault(),!T.trim()||!t)return;const M=T;I("");const H=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",ae={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:H,message:M,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};_(ne=>[...ne,ae]);try{await Sn.sendMessage("waitingRooms",t,(n==null?void 0:n.uid)||"me",H,M)}catch(ne){console.error("Failed to send message:",ne)}},P=async V=>{if(!t)return;const M=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",H={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:M,message:"",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!0,gifUrl:V};_(ae=>[...ae,H]);try{await Sn.sendMessage("waitingRooms",t,(n==null?void 0:n.uid)||"me",M,"",!0,V)}catch(ae){console.error("Failed to send GIF:",ae)}I("")},A=()=>{C&&(R(!0),setTimeout(()=>{e(`/arena/${t}`)},1500))},Te=V=>{switch(V){case"artist":return p.jsx(Br,{size:14});case"judge":return p.jsx(uc,{size:14});default:return p.jsx($r,{size:14})}},tt=d.filter(V=>V.isReady).length,Ft=d.filter(V=>V.role==="artist").length,Ut=d.filter(V=>V.role==="judge").length;return p.jsx("div",{className:"waiting-room",children:p.jsxs("div",{className:"waiting-container",children:[p.jsxs("header",{className:"waiting-header",children:[p.jsxs("div",{className:"room-code-display",children:[p.jsx("span",{className:"room-label",children:"Room Code"}),p.jsxs("div",{className:"room-code-row",children:[p.jsx("span",{className:"room-code",children:t}),p.jsx("button",{className:"copy-btn",onClick:N,children:k?p.jsx(qm,{size:18}):p.jsx(yx,{size:18})})]})]}),p.jsxs("div",{className:"waiting-status",children:[p.jsxs("div",{className:"status-item",children:[p.jsxs("span",{className:"status-value",children:[Ft,"/2"]}),p.jsx("span",{className:"status-label",children:"Artists"})]}),p.jsxs("div",{className:"status-item",children:[p.jsxs("span",{className:"status-value",children:[Ut,"/2"]}),p.jsx("span",{className:"status-label",children:"Judges"})]}),p.jsxs("div",{className:"status-item",children:[p.jsx("span",{className:"status-value",children:tt}),p.jsx("span",{className:"status-label",children:"Ready"})]})]})]}),p.jsxs("div",{className:"waiting-content",children:[p.jsxs("section",{className:"video-section",children:[p.jsx("h2",{className:"section-title",children:"Waiting for Players"}),p.jsx("div",{className:"video-grid",children:[...Array(4)].map((V,M)=>{const H=d[M];return p.jsx("div",{className:`video-box ${H?"has-participant":"empty"}`,children:H?p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"video-placeholder",children:p.jsx("div",{className:"avatar-placeholder",children:H.name.charAt(0)})}),p.jsxs("div",{className:"video-overlay",children:[p.jsxs("div",{className:"participant-info",children:[p.jsxs("span",{className:`role-badge-small badge-${H.role}`,children:[Te(H.role),H.role]}),p.jsx("span",{className:"participant-name",children:H.name})]}),p.jsxs("div",{className:"media-indicators",children:[!H.hasAudio&&p.jsx(rp,{size:14}),!H.hasVideo&&p.jsx(sp,{size:14})]})]}),H.isReady&&p.jsx("div",{className:"ready-indicator",children:"Ready"})]}):p.jsxs("div",{className:"empty-slot",children:[p.jsx($r,{size:32}),p.jsx("span",{children:"Waiting..."})]})},M)})}),p.jsxs("div",{className:"media-controls",children:[p.jsx("button",{className:`control-btn ${b?"active":"off"}`,onClick:()=>j(!b),children:b?p.jsx(Br,{size:20}):p.jsx(rp,{size:20})}),p.jsx("button",{className:`control-btn ${y?"active":"off"}`,onClick:()=>S(!y),children:y?p.jsx(LI,{size:20}):p.jsx(sp,{size:20})}),p.jsx("button",{className:"control-btn leave",onClick:()=>e("/lobby"),children:p.jsx(ol,{size:20})})]})]}),p.jsxs("aside",{className:"chat-section",children:[p.jsx("div",{className:"chat-header",children:p.jsx("h3",{children:"Waiting Room Chat"})}),p.jsxs("div",{className:"chat-messages",children:[g.map(V=>p.jsxs("div",{className:`chat-message ${V.userId===(n==null?void 0:n.uid)?"own":""} ${V.isGif?"gif-message":""}`,children:[p.jsxs("div",{className:"message-header",children:[p.jsx("span",{className:"message-username",children:V.username}),p.jsx("span",{className:"message-time",children:V.time})]}),V.isGif?p.jsx("img",{src:V.gifUrl,alt:"GIF",className:"message-gif"}):p.jsx("p",{className:"message-content",children:V.message})]},V.id)),p.jsx("div",{ref:w})]}),p.jsxs("form",{className:"chat-input-form",onSubmit:x,children:[p.jsx("button",{type:"button",className:"gif-toggle",onClick:u,children:"GIF"}),p.jsx("input",{type:"text",className:"input chat-input",placeholder:"Say something...",value:T,onChange:V=>I(V.target.value)}),p.jsx("button",{type:"submit",className:"send-btn",disabled:!T.trim(),children:p.jsx(Gm,{size:18})})]}),a&&p.jsx(N_,{onSelect:P,onClose:u})]})]}),i&&p.jsxs("div",{className:"start-section",children:[p.jsx("button",{className:"btn btn-primary btn-lg start-btn",onClick:A,disabled:!C||F,children:F?"Starting...":"Start Battle"}),!C&&p.jsx("p",{className:"start-hint",children:"Need 2 artists and 2 judges ready to start"})]})]})})}function ti({children:t}){const{isAuthenticated:e,isLoading:n}=pr(),[r,s]=O.useState(!1);return O.useEffect(()=>{const i=setTimeout(()=>s(!0),100);return()=>clearTimeout(i)},[]),n||!r?p.jsx("div",{className:"loading-screen",children:p.jsxs("div",{className:"loading-content",children:[p.jsx("div",{className:"loading-logo",children:"Dreamledge"}),p.jsx("div",{className:"loading-spinner"})]})}):e?t:p.jsx(II,{to:"/",replace:!0})}function l3(){return p.jsx(CP,{children:p.jsxs("div",{className:"app",children:[p.jsx(Dx,{}),p.jsx("main",{className:"main-content",children:p.jsxs(_P,{children:[p.jsx(wn,{path:"/",element:p.jsx(YU,{})}),p.jsx(wn,{path:"/lobby",element:p.jsx(ti,{children:p.jsx(XU,{})})}),p.jsx(wn,{path:"/waiting/:roomId",element:p.jsx(ti,{children:p.jsx(a3,{})})}),p.jsx(wn,{path:"/arena/:battleId",element:p.jsx(ti,{children:p.jsx(e3,{})})}),p.jsx(wn,{path:"/profile",element:p.jsx(ti,{children:p.jsx(t3,{})})}),p.jsx(wn,{path:"/messages",element:p.jsx(ti,{children:p.jsx(e0,{})})}),p.jsx(wn,{path:"/messages/:conversationId",element:p.jsx(ti,{children:p.jsx(e0,{})})}),p.jsx(wn,{path:"/leaderboard",element:p.jsx(i3,{})}),p.jsx(wn,{path:"*",element:p.jsx(II,{to:"/",replace:!0})})]})})]})})}of.createRoot(document.getElementById("root")).render(p.jsx(Qp.StrictMode,{children:p.jsx(l3,{})}));
