function zE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function d_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var f_={exports:{}},Wa={},p_={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),BE=Symbol.for("react.portal"),VE=Symbol.for("react.fragment"),HE=Symbol.for("react.strict_mode"),$E=Symbol.for("react.profiler"),WE=Symbol.for("react.provider"),GE=Symbol.for("react.context"),KE=Symbol.for("react.forward_ref"),qE=Symbol.for("react.suspense"),YE=Symbol.for("react.memo"),QE=Symbol.for("react.lazy"),mm=Symbol.iterator;function XE(t){return t===null||typeof t!="object"?null:(t=mm&&t[mm]||t["@@iterator"],typeof t=="function"?t:null)}var m_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g_=Object.assign,v_={};function Wi(t,e,n){this.props=t,this.context=e,this.refs=v_,this.updater=n||m_}Wi.prototype.isReactComponent={};Wi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function __(){}__.prototype=Wi.prototype;function hd(t,e,n){this.props=t,this.context=e,this.refs=v_,this.updater=n||m_}var dd=hd.prototype=new __;dd.constructor=hd;g_(dd,Wi.prototype);dd.isPureReactComponent=!0;var gm=Array.isArray,y_=Object.prototype.hasOwnProperty,fd={current:null},w_={key:!0,ref:!0,__self:!0,__source:!0};function E_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)y_.call(e,r)&&!w_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),h=0;h<a;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xo,type:t,key:s,ref:o,props:i,_owner:fd.current}}function JE(t,e){return{$$typeof:xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===xo}function ZE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vm=/\/+/g;function Zu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ZE(""+t.key):e.toString(36)}function Rl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xo:case BE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Zu(o,0):r,gm(i)?(n="",t!=null&&(n=t.replace(vm,"$&/")+"/"),Rl(i,e,n,"",function(h){return h})):i!=null&&(pd(i)&&(i=JE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",gm(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Zu(s,a);o+=Rl(s,e,n,u,i)}else if(u=XE(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Zu(s,a++),o+=Rl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ol(t,e,n){if(t==null)return t;var r=[],i=0;return Rl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function eS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var et={current:null},Pl={transition:null},tS={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:Pl,ReactCurrentOwner:fd};function S_(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:ol,forEach:function(t,e,n){ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ol(t,function(){e++}),e},toArray:function(t){return ol(t,function(e){return e})||[]},only:function(t){if(!pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=Wi;J.Fragment=VE;J.Profiler=$E;J.PureComponent=hd;J.StrictMode=HE;J.Suspense=qE;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tS;J.act=S_;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=g_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=fd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)y_.call(e,u)&&!w_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var h=0;h<u;h++)a[h]=arguments[h+2];r.children=a}return{$$typeof:xo,type:t.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(t){return t={$$typeof:GE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:WE,_context:t},t.Consumer=t};J.createElement=E_;J.createFactory=function(t){var e=E_.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:KE,render:t}};J.isValidElement=pd;J.lazy=function(t){return{$$typeof:QE,_payload:{_status:-1,_result:t},_init:eS}};J.memo=function(t,e){return{$$typeof:YE,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=Pl.transition;Pl.transition={};try{t()}finally{Pl.transition=e}};J.unstable_act=S_;J.useCallback=function(t,e){return et.current.useCallback(t,e)};J.useContext=function(t){return et.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return et.current.useDeferredValue(t)};J.useEffect=function(t,e){return et.current.useEffect(t,e)};J.useId=function(){return et.current.useId()};J.useImperativeHandle=function(t,e,n){return et.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return et.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return et.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return et.current.useMemo(t,e)};J.useReducer=function(t,e,n){return et.current.useReducer(t,e,n)};J.useRef=function(t){return et.current.useRef(t)};J.useState=function(t){return et.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return et.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return et.current.useTransition()};J.version="18.3.1";p_.exports=J;var D=p_.exports;const md=d_(D),nS=zE({__proto__:null,default:md},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rS=D,iS=Symbol.for("react.element"),sS=Symbol.for("react.fragment"),oS=Object.prototype.hasOwnProperty,lS=rS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aS={key:!0,ref:!0,__self:!0,__source:!0};function C_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)oS.call(e,r)&&!aS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:iS,type:t,key:s,ref:o,props:i,_owner:lS.current}}Wa.Fragment=sS;Wa.jsx=C_;Wa.jsxs=C_;f_.exports=Wa;var d=f_.exports,$c={},I_={exports:{}},_t={},k_={exports:{}},T_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,M){var H=j.length;j.push(M);e:for(;0<H;){var q=H-1>>>1,Z=j[q];if(0<i(Z,M))j[q]=M,j[H]=Z,H=q;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var M=j[0],H=j.pop();if(H!==M){j[0]=H;e:for(var q=0,Z=j.length,se=Z>>>1;q<se;){var sn=2*(q+1)-1,on=j[sn],ln=sn+1,an=j[ln];if(0>i(on,H))ln<Z&&0>i(an,on)?(j[q]=an,j[ln]=H,q=ln):(j[q]=on,j[sn]=H,q=sn);else if(ln<Z&&0>i(an,H))j[q]=an,j[ln]=H,q=ln;else break e}}return M}function i(j,M){var H=j.sortIndex-M.sortIndex;return H!==0?H:j.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],h=[],m=1,p=null,g=3,E=!1,T=!1,x=!1,A=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(j){for(var M=n(h);M!==null;){if(M.callback===null)r(h);else if(M.startTime<=j)r(h),M.sortIndex=M.expirationTime,e(u,M);else break;M=n(h)}}function O(j){if(x=!1,S(j),!T)if(n(u)!==null)T=!0,rn(F);else{var M=n(h);M!==null&&ft(O,M.startTime-j)}}function F(j,M){T=!1,x&&(x=!1,w(y),y=-1),E=!0;var H=g;try{for(S(M),p=n(u);p!==null&&(!(p.expirationTime>M)||j&&!P());){var q=p.callback;if(typeof q=="function"){p.callback=null,g=p.priorityLevel;var Z=q(p.expirationTime<=M);M=t.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(u)&&r(u),S(M)}else r(u);p=n(u)}if(p!==null)var se=!0;else{var sn=n(h);sn!==null&&ft(O,sn.startTime-M),se=!1}return se}finally{p=null,g=H,E=!1}}var U=!1,I=null,y=-1,C=5,N=-1;function P(){return!(t.unstable_now()-N<C)}function R(){if(I!==null){var j=t.unstable_now();N=j;var M=!0;try{M=I(!0,j)}finally{M?k():(U=!1,I=null)}}else U=!1}var k;if(typeof _=="function")k=function(){_(R)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,Te=me.port2;me.port1.onmessage=R,k=function(){Te.postMessage(null)}}else k=function(){A(R,0)};function rn(j){I=j,U||(U=!0,k())}function ft(j,M){y=A(function(){j(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){T||E||(T=!0,rn(F))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(g){case 1:case 2:case 3:var M=3;break;default:M=g}var H=g;g=M;try{return j()}finally{g=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,M){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var H=g;g=j;try{return M()}finally{g=H}},t.unstable_scheduleCallback=function(j,M,H){var q=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?q+H:q):H=q,j){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=H+Z,j={id:m++,callback:M,priorityLevel:j,startTime:H,expirationTime:Z,sortIndex:-1},H>q?(j.sortIndex=H,e(h,j),n(u)===null&&j===n(h)&&(x?(w(y),y=-1):x=!0,ft(O,H-q))):(j.sortIndex=Z,e(u,j),T||E||(T=!0,rn(F))),j},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(j){var M=g;return function(){var H=g;g=M;try{return j.apply(this,arguments)}finally{g=H}}}})(T_);k_.exports=T_;var uS=k_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cS=D,vt=uS;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var N_=new Set,Xs={};function qr(t,e){Pi(t,e),Pi(t+"Capture",e)}function Pi(t,e){for(Xs[t]=e,t=0;t<e.length;t++)N_.add(e[t])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=Object.prototype.hasOwnProperty,hS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_m={},ym={};function dS(t){return Wc.call(ym,t)?!0:Wc.call(_m,t)?!1:hS.test(t)?ym[t]=!0:(_m[t]=!0,!1)}function fS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pS(t,e,n,r){if(e===null||typeof e>"u"||fS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ue[t]=new tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ue[e]=new tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ue[t]=new tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ue[t]=new tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ue[t]=new tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ue[t]=new tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ue[t]=new tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ue[t]=new tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ue[t]=new tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var gd=/[\-:]([a-z])/g;function vd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gd,vd);Ue[e]=new tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gd,vd);Ue[e]=new tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gd,vd);Ue[e]=new tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ue[t]=new tt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ue[t]=new tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function _d(t,e,n,r){var i=Ue.hasOwnProperty(e)?Ue[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pS(e,n,i,r)&&(n=null),r||i===null?dS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var On=cS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ll=Symbol.for("react.element"),si=Symbol.for("react.portal"),oi=Symbol.for("react.fragment"),yd=Symbol.for("react.strict_mode"),Gc=Symbol.for("react.profiler"),x_=Symbol.for("react.provider"),R_=Symbol.for("react.context"),wd=Symbol.for("react.forward_ref"),Kc=Symbol.for("react.suspense"),qc=Symbol.for("react.suspense_list"),Ed=Symbol.for("react.memo"),Vn=Symbol.for("react.lazy"),P_=Symbol.for("react.offscreen"),wm=Symbol.iterator;function gs(t){return t===null||typeof t!="object"?null:(t=wm&&t[wm]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,ec;function Ps(t){if(ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ec=e&&e[1]||""}return`
`+ec+t}var tc=!1;function nc(t,e){if(!t||tc)return"";tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{tc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ps(t):""}function mS(t){switch(t.tag){case 5:return Ps(t.type);case 16:return Ps("Lazy");case 13:return Ps("Suspense");case 19:return Ps("SuspenseList");case 0:case 2:case 15:return t=nc(t.type,!1),t;case 11:return t=nc(t.type.render,!1),t;case 1:return t=nc(t.type,!0),t;default:return""}}function Yc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case oi:return"Fragment";case si:return"Portal";case Gc:return"Profiler";case yd:return"StrictMode";case Kc:return"Suspense";case qc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case R_:return(t.displayName||"Context")+".Consumer";case x_:return(t._context.displayName||"Context")+".Provider";case wd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ed:return e=t.displayName||null,e!==null?e:Yc(t.type)||"Memo";case Vn:e=t._payload,t=t._init;try{return Yc(t(e))}catch{}}return null}function gS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yc(e);case 8:return e===yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function A_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vS(t){var e=A_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function al(t){t._valueTracker||(t._valueTracker=vS(t))}function O_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=A_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qc(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Em(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function b_(t,e){e=e.checked,e!=null&&_d(t,"checked",e,!1)}function Xc(t,e){b_(t,e);var n=dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Jc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Jc(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Jc(t,e,n){(e!=="number"||Gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var As=Array.isArray;function _i(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Zc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Cm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(As(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function D_(t,e){var n=dr(e.value),r=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Im(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function L_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?L_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ul,M_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ul.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_S=["Webkit","ms","Moz","O"];Object.keys(Ds).forEach(function(t){_S.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ds[e]=Ds[t]})});function j_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ds.hasOwnProperty(t)&&Ds[t]?(""+e).trim():e+"px"}function F_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=j_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var yS=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function th(t,e){if(e){if(yS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function nh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rh=null;function Sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ih=null,yi=null,wi=null;function km(t){if(t=Ao(t)){if(typeof ih!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Qa(e),ih(t.stateNode,t.type,e))}}function U_(t){yi?wi?wi.push(t):wi=[t]:yi=t}function z_(){if(yi){var t=yi,e=wi;if(wi=yi=null,km(t),e)for(t=0;t<e.length;t++)km(e[t])}}function B_(t,e){return t(e)}function V_(){}var rc=!1;function H_(t,e,n){if(rc)return t(e,n);rc=!0;try{return B_(t,e,n)}finally{rc=!1,(yi!==null||wi!==null)&&(V_(),z_())}}function Zs(t,e){var n=t.stateNode;if(n===null)return null;var r=Qa(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var sh=!1;if(Cn)try{var vs={};Object.defineProperty(vs,"passive",{get:function(){sh=!0}}),window.addEventListener("test",vs,vs),window.removeEventListener("test",vs,vs)}catch{sh=!1}function wS(t,e,n,r,i,s,o,a,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(m){this.onError(m)}}var Ls=!1,Kl=null,ql=!1,oh=null,ES={onError:function(t){Ls=!0,Kl=t}};function SS(t,e,n,r,i,s,o,a,u){Ls=!1,Kl=null,wS.apply(ES,arguments)}function CS(t,e,n,r,i,s,o,a,u){if(SS.apply(this,arguments),Ls){if(Ls){var h=Kl;Ls=!1,Kl=null}else throw Error(z(198));ql||(ql=!0,oh=h)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tm(t){if(Yr(t)!==t)throw Error(z(188))}function IS(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Tm(i),t;if(s===r)return Tm(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function W_(t){return t=IS(t),t!==null?G_(t):null}function G_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=G_(t);if(e!==null)return e;t=t.sibling}return null}var K_=vt.unstable_scheduleCallback,Nm=vt.unstable_cancelCallback,kS=vt.unstable_shouldYield,TS=vt.unstable_requestPaint,Ie=vt.unstable_now,NS=vt.unstable_getCurrentPriorityLevel,Cd=vt.unstable_ImmediatePriority,q_=vt.unstable_UserBlockingPriority,Yl=vt.unstable_NormalPriority,xS=vt.unstable_LowPriority,Y_=vt.unstable_IdlePriority,Ga=null,Yt=null;function RS(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Ga,t,void 0,(t.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:OS,PS=Math.log,AS=Math.LN2;function OS(t){return t>>>=0,t===0?32:31-(PS(t)/AS|0)|0}var cl=64,hl=4194304;function Os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Os(a):(s&=o,s!==0&&(r=Os(s)))}else o=n&~i,o!==0?r=Os(o):s!==0&&(r=Os(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ut(e),i=1<<n,r|=t[n],e&=~i;return r}function bS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ut(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=bS(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function lh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Q_(){var t=cl;return cl<<=1,!(cl&4194240)&&(cl=64),t}function ic(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ro(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ut(e),t[e]=n}function LS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Id(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function X_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var J_,kd,Z_,ey,ty,ah=!1,dl=[],Jn=null,Zn=null,er=null,eo=new Map,to=new Map,$n=[],MS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xm(t,e){switch(t){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(e.pointerId)}}function _s(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ao(e),e!==null&&kd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function jS(t,e,n,r,i){switch(e){case"focusin":return Jn=_s(Jn,t,e,n,r,i),!0;case"dragenter":return Zn=_s(Zn,t,e,n,r,i),!0;case"mouseover":return er=_s(er,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return eo.set(s,_s(eo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,to.set(s,_s(to.get(s)||null,t,e,n,r,i)),!0}return!1}function ny(t){var e=Rr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=$_(n),e!==null){t.blockedOn=e,ty(t.priority,function(){Z_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);rh=r,n.target.dispatchEvent(r),rh=null}else return e=Ao(n),e!==null&&kd(e),t.blockedOn=n,!1;e.shift()}return!0}function Rm(t,e,n){Al(t)&&n.delete(e)}function FS(){ah=!1,Jn!==null&&Al(Jn)&&(Jn=null),Zn!==null&&Al(Zn)&&(Zn=null),er!==null&&Al(er)&&(er=null),eo.forEach(Rm),to.forEach(Rm)}function ys(t,e){t.blockedOn===e&&(t.blockedOn=null,ah||(ah=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,FS)))}function no(t){function e(i){return ys(i,t)}if(0<dl.length){ys(dl[0],t);for(var n=1;n<dl.length;n++){var r=dl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jn!==null&&ys(Jn,t),Zn!==null&&ys(Zn,t),er!==null&&ys(er,t),eo.forEach(e),to.forEach(e),n=0;n<$n.length;n++)r=$n[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)ny(n),n.blockedOn===null&&$n.shift()}var Ei=On.ReactCurrentBatchConfig,Xl=!0;function US(t,e,n,r){var i=oe,s=Ei.transition;Ei.transition=null;try{oe=1,Td(t,e,n,r)}finally{oe=i,Ei.transition=s}}function zS(t,e,n,r){var i=oe,s=Ei.transition;Ei.transition=null;try{oe=4,Td(t,e,n,r)}finally{oe=i,Ei.transition=s}}function Td(t,e,n,r){if(Xl){var i=uh(t,e,n,r);if(i===null)pc(t,e,r,Jl,n),xm(t,r);else if(jS(i,t,e,n,r))r.stopPropagation();else if(xm(t,r),e&4&&-1<MS.indexOf(t)){for(;i!==null;){var s=Ao(i);if(s!==null&&J_(s),s=uh(t,e,n,r),s===null&&pc(t,e,r,Jl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else pc(t,e,r,null,n)}}var Jl=null;function uh(t,e,n,r){if(Jl=null,t=Sd(r),t=Rr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jl=t,null}function ry(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(NS()){case Cd:return 1;case q_:return 4;case Yl:case xS:return 16;case Y_:return 536870912;default:return 16}default:return 16}}var Yn=null,Nd=null,Ol=null;function iy(){if(Ol)return Ol;var t,e=Nd,n=e.length,r,i="value"in Yn?Yn.value:Yn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ol=i.slice(t,1<r?1-r:void 0)}function bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function Pm(){return!1}function yt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fl:Pm,this.isPropagationStopped=Pm,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),e}var Gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xd=yt(Gi),Po=we({},Gi,{view:0,detail:0}),BS=yt(Po),sc,oc,ws,Ka=we({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ws&&(ws&&t.type==="mousemove"?(sc=t.screenX-ws.screenX,oc=t.screenY-ws.screenY):oc=sc=0,ws=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:oc}}),Am=yt(Ka),VS=we({},Ka,{dataTransfer:0}),HS=yt(VS),$S=we({},Po,{relatedTarget:0}),lc=yt($S),WS=we({},Gi,{animationName:0,elapsedTime:0,pseudoElement:0}),GS=yt(WS),KS=we({},Gi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qS=yt(KS),YS=we({},Gi,{data:0}),Om=yt(YS),QS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=JS[t])?!!e[t]:!1}function Rd(){return ZS}var eC=we({},Po,{key:function(t){if(t.key){var e=QS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?XS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rd,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tC=yt(eC),nC=we({},Ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=yt(nC),rC=we({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rd}),iC=yt(rC),sC=we({},Gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),oC=yt(sC),lC=we({},Ka,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aC=yt(lC),uC=[9,13,27,32],Pd=Cn&&"CompositionEvent"in window,Ms=null;Cn&&"documentMode"in document&&(Ms=document.documentMode);var cC=Cn&&"TextEvent"in window&&!Ms,sy=Cn&&(!Pd||Ms&&8<Ms&&11>=Ms),Dm=" ",Lm=!1;function oy(t,e){switch(t){case"keyup":return uC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ly(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var li=!1;function hC(t,e){switch(t){case"compositionend":return ly(e);case"keypress":return e.which!==32?null:(Lm=!0,Dm);case"textInput":return t=e.data,t===Dm&&Lm?null:t;default:return null}}function dC(t,e){if(li)return t==="compositionend"||!Pd&&oy(t,e)?(t=iy(),Ol=Nd=Yn=null,li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sy&&e.locale!=="ko"?null:e.data;default:return null}}var fC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fC[t.type]:e==="textarea"}function ay(t,e,n,r){U_(r),e=Zl(e,"onChange"),0<e.length&&(n=new xd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var js=null,ro=null;function pC(t){yy(t,0)}function qa(t){var e=ci(t);if(O_(e))return t}function mC(t,e){if(t==="change")return e}var uy=!1;if(Cn){var ac;if(Cn){var uc="oninput"in document;if(!uc){var jm=document.createElement("div");jm.setAttribute("oninput","return;"),uc=typeof jm.oninput=="function"}ac=uc}else ac=!1;uy=ac&&(!document.documentMode||9<document.documentMode)}function Fm(){js&&(js.detachEvent("onpropertychange",cy),ro=js=null)}function cy(t){if(t.propertyName==="value"&&qa(ro)){var e=[];ay(e,ro,t,Sd(t)),H_(pC,e)}}function gC(t,e,n){t==="focusin"?(Fm(),js=e,ro=n,js.attachEvent("onpropertychange",cy)):t==="focusout"&&Fm()}function vC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qa(ro)}function _C(t,e){if(t==="click")return qa(e)}function yC(t,e){if(t==="input"||t==="change")return qa(e)}function wC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ht=typeof Object.is=="function"?Object.is:wC;function io(t,e){if(Ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wc.call(e,i)||!Ht(t[i],e[i]))return!1}return!0}function Um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zm(t,e){var n=Um(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Um(n)}}function hy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dy(){for(var t=window,e=Gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Gl(t.document)}return e}function Ad(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function EC(t){var e=dy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&hy(n.ownerDocument.documentElement,n)){if(r!==null&&Ad(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=zm(n,s);var o=zm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var SC=Cn&&"documentMode"in document&&11>=document.documentMode,ai=null,ch=null,Fs=null,hh=!1;function Bm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hh||ai==null||ai!==Gl(r)||(r=ai,"selectionStart"in r&&Ad(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fs&&io(Fs,r)||(Fs=r,r=Zl(ch,"onSelect"),0<r.length&&(e=new xd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ai)))}function pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ui={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},cc={},fy={};Cn&&(fy=document.createElement("div").style,"AnimationEvent"in window||(delete ui.animationend.animation,delete ui.animationiteration.animation,delete ui.animationstart.animation),"TransitionEvent"in window||delete ui.transitionend.transition);function Ya(t){if(cc[t])return cc[t];if(!ui[t])return t;var e=ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fy)return cc[t]=e[n];return t}var py=Ya("animationend"),my=Ya("animationiteration"),gy=Ya("animationstart"),vy=Ya("transitionend"),_y=new Map,Vm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){_y.set(t,e),qr(e,[t])}for(var hc=0;hc<Vm.length;hc++){var dc=Vm[hc],CC=dc.toLowerCase(),IC=dc[0].toUpperCase()+dc.slice(1);vr(CC,"on"+IC)}vr(py,"onAnimationEnd");vr(my,"onAnimationIteration");vr(gy,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(vy,"onTransitionEnd");Pi("onMouseEnter",["mouseout","mouseover"]);Pi("onMouseLeave",["mouseout","mouseover"]);Pi("onPointerEnter",["pointerout","pointerover"]);Pi("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kC=new Set("cancel close invalid load scroll toggle".split(" ").concat(bs));function Hm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,CS(r,e,void 0,t),t.currentTarget=null}function yy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,h=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Hm(i,a,h),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,h=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Hm(i,a,h),s=u}}}if(ql)throw t=oh,ql=!1,oh=null,t}function de(t,e){var n=e[gh];n===void 0&&(n=e[gh]=new Set);var r=t+"__bubble";n.has(r)||(wy(e,t,2,!1),n.add(r))}function fc(t,e,n){var r=0;e&&(r|=4),wy(n,t,r,e)}var ml="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[ml]){t[ml]=!0,N_.forEach(function(n){n!=="selectionchange"&&(kC.has(n)||fc(n,!1,t),fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ml]||(e[ml]=!0,fc("selectionchange",!1,e))}}function wy(t,e,n,r){switch(ry(e)){case 1:var i=US;break;case 4:i=zS;break;default:i=Td}n=i.bind(null,e,n,t),i=void 0,!sh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function pc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Rr(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}H_(function(){var h=s,m=Sd(n),p=[];e:{var g=_y.get(t);if(g!==void 0){var E=xd,T=t;switch(t){case"keypress":if(bl(n)===0)break e;case"keydown":case"keyup":E=tC;break;case"focusin":T="focus",E=lc;break;case"focusout":T="blur",E=lc;break;case"beforeblur":case"afterblur":E=lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=HS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=iC;break;case py:case my:case gy:E=GS;break;case vy:E=oC;break;case"scroll":E=BS;break;case"wheel":E=aC;break;case"copy":case"cut":case"paste":E=qS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=bm}var x=(e&4)!==0,A=!x&&t==="scroll",w=x?g!==null?g+"Capture":null:g;x=[];for(var _=h,S;_!==null;){S=_;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,w!==null&&(O=Zs(_,w),O!=null&&x.push(oo(_,O,S)))),A)break;_=_.return}0<x.length&&(g=new E(g,T,null,n,m),p.push({event:g,listeners:x}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",g&&n!==rh&&(T=n.relatedTarget||n.fromElement)&&(Rr(T)||T[In]))break e;if((E||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,E?(T=n.relatedTarget||n.toElement,E=h,T=T?Rr(T):null,T!==null&&(A=Yr(T),T!==A||T.tag!==5&&T.tag!==6)&&(T=null)):(E=null,T=h),E!==T)){if(x=Am,O="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=bm,O="onPointerLeave",w="onPointerEnter",_="pointer"),A=E==null?g:ci(E),S=T==null?g:ci(T),g=new x(O,_+"leave",E,n,m),g.target=A,g.relatedTarget=S,O=null,Rr(m)===h&&(x=new x(w,_+"enter",T,n,m),x.target=S,x.relatedTarget=A,O=x),A=O,E&&T)t:{for(x=E,w=T,_=0,S=x;S;S=ni(S))_++;for(S=0,O=w;O;O=ni(O))S++;for(;0<_-S;)x=ni(x),_--;for(;0<S-_;)w=ni(w),S--;for(;_--;){if(x===w||w!==null&&x===w.alternate)break t;x=ni(x),w=ni(w)}x=null}else x=null;E!==null&&$m(p,g,E,x,!1),T!==null&&A!==null&&$m(p,A,T,x,!0)}}e:{if(g=h?ci(h):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var F=mC;else if(Mm(g))if(uy)F=yC;else{F=vC;var U=gC}else(E=g.nodeName)&&E.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=_C);if(F&&(F=F(t,h))){ay(p,F,n,m);break e}U&&U(t,g,h),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Jc(g,"number",g.value)}switch(U=h?ci(h):window,t){case"focusin":(Mm(U)||U.contentEditable==="true")&&(ai=U,ch=h,Fs=null);break;case"focusout":Fs=ch=ai=null;break;case"mousedown":hh=!0;break;case"contextmenu":case"mouseup":case"dragend":hh=!1,Bm(p,n,m);break;case"selectionchange":if(SC)break;case"keydown":case"keyup":Bm(p,n,m)}var I;if(Pd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else li?oy(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(sy&&n.locale!=="ko"&&(li||y!=="onCompositionStart"?y==="onCompositionEnd"&&li&&(I=iy()):(Yn=m,Nd="value"in Yn?Yn.value:Yn.textContent,li=!0)),U=Zl(h,y),0<U.length&&(y=new Om(y,t,null,n,m),p.push({event:y,listeners:U}),I?y.data=I:(I=ly(n),I!==null&&(y.data=I)))),(I=cC?hC(t,n):dC(t,n))&&(h=Zl(h,"onBeforeInput"),0<h.length&&(m=new Om("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:h}),m.data=I))}yy(p,e)})}function oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zs(t,n),s!=null&&r.unshift(oo(t,s,i)),s=Zs(t,e),s!=null&&r.push(oo(t,s,i))),t=t.return}return r}function ni(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $m(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,h=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&h!==null&&(a=h,i?(u=Zs(n,s),u!=null&&o.unshift(oo(n,u,a))):i||(u=Zs(n,s),u!=null&&o.push(oo(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var TC=/\r\n?/g,NC=/\u0000|\uFFFD/g;function Wm(t){return(typeof t=="string"?t:""+t).replace(TC,`
`).replace(NC,"")}function gl(t,e,n){if(e=Wm(e),Wm(t)!==e&&n)throw Error(z(425))}function ea(){}var dh=null,fh=null;function ph(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mh=typeof setTimeout=="function"?setTimeout:void 0,xC=typeof clearTimeout=="function"?clearTimeout:void 0,Gm=typeof Promise=="function"?Promise:void 0,RC=typeof queueMicrotask=="function"?queueMicrotask:typeof Gm<"u"?function(t){return Gm.resolve(null).then(t).catch(PC)}:mh;function PC(t){setTimeout(function(){throw t})}function mc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),no(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);no(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Km(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ki=Math.random().toString(36).slice(2),Kt="__reactFiber$"+Ki,lo="__reactProps$"+Ki,In="__reactContainer$"+Ki,gh="__reactEvents$"+Ki,AC="__reactListeners$"+Ki,OC="__reactHandles$"+Ki;function Rr(t){var e=t[Kt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[In]||n[Kt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Km(t);t!==null;){if(n=t[Kt])return n;t=Km(t)}return e}t=n,n=t.parentNode}return null}function Ao(t){return t=t[Kt]||t[In],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Qa(t){return t[lo]||null}var vh=[],hi=-1;function _r(t){return{current:t}}function pe(t){0>hi||(t.current=vh[hi],vh[hi]=null,hi--)}function ce(t,e){hi++,vh[hi]=t.current,t.current=e}var fr={},Ke=_r(fr),at=_r(!1),Fr=fr;function Ai(t,e){var n=t.type.contextTypes;if(!n)return fr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ut(t){return t=t.childContextTypes,t!=null}function ta(){pe(at),pe(Ke)}function qm(t,e,n){if(Ke.current!==fr)throw Error(z(168));ce(Ke,e),ce(at,n)}function Ey(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,gS(t)||"Unknown",i));return we({},n,r)}function na(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,Fr=Ke.current,ce(Ke,t),ce(at,at.current),!0}function Ym(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=Ey(t,e,Fr),r.__reactInternalMemoizedMergedChildContext=t,pe(at),pe(Ke),ce(Ke,t)):pe(at),ce(at,n)}var dn=null,Xa=!1,gc=!1;function Sy(t){dn===null?dn=[t]:dn.push(t)}function bC(t){Xa=!0,Sy(t)}function yr(){if(!gc&&dn!==null){gc=!0;var t=0,e=oe;try{var n=dn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dn=null,Xa=!1}catch(i){throw dn!==null&&(dn=dn.slice(t+1)),K_(Cd,yr),i}finally{oe=e,gc=!1}}return null}var di=[],fi=0,ra=null,ia=0,St=[],Ct=0,Ur=null,pn=1,mn="";function kr(t,e){di[fi++]=ia,di[fi++]=ra,ra=t,ia=e}function Cy(t,e,n){St[Ct++]=pn,St[Ct++]=mn,St[Ct++]=Ur,Ur=t;var r=pn;t=mn;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var s=32-Ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pn=1<<32-Ut(e)+i|n<<i|r,mn=s+t}else pn=1<<s|n<<i|r,mn=t}function Od(t){t.return!==null&&(kr(t,1),Cy(t,1,0))}function bd(t){for(;t===ra;)ra=di[--fi],di[fi]=null,ia=di[--fi],di[fi]=null;for(;t===Ur;)Ur=St[--Ct],St[Ct]=null,mn=St[--Ct],St[Ct]=null,pn=St[--Ct],St[Ct]=null}var gt=null,mt=null,ge=!1,bt=null;function Iy(t,e){var n=It(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gt=t,mt=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gt=t,mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ur!==null?{id:pn,overflow:mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=It(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gt=t,mt=null,!0):!1;default:return!1}}function _h(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yh(t){if(ge){var e=mt;if(e){var n=e;if(!Qm(t,e)){if(_h(t))throw Error(z(418));e=tr(n.nextSibling);var r=gt;e&&Qm(t,e)?Iy(r,n):(t.flags=t.flags&-4097|2,ge=!1,gt=t)}}else{if(_h(t))throw Error(z(418));t.flags=t.flags&-4097|2,ge=!1,gt=t}}}function Xm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gt=t}function vl(t){if(t!==gt)return!1;if(!ge)return Xm(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ph(t.type,t.memoizedProps)),e&&(e=mt)){if(_h(t))throw ky(),Error(z(418));for(;e;)Iy(t,e),e=tr(e.nextSibling)}if(Xm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mt=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mt=null}}else mt=gt?tr(t.stateNode.nextSibling):null;return!0}function ky(){for(var t=mt;t;)t=tr(t.nextSibling)}function Oi(){mt=gt=null,ge=!1}function Dd(t){bt===null?bt=[t]:bt.push(t)}var DC=On.ReactCurrentBatchConfig;function Es(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function _l(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jm(t){var e=t._init;return e(t._payload)}function Ty(t){function e(w,_){if(t){var S=w.deletions;S===null?(w.deletions=[_],w.flags|=16):S.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=sr(w,_),w.index=0,w.sibling=null,w}function s(w,_,S){return w.index=S,t?(S=w.alternate,S!==null?(S=S.index,S<_?(w.flags|=2,_):S):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,_,S,O){return _===null||_.tag!==6?(_=Cc(S,w.mode,O),_.return=w,_):(_=i(_,S),_.return=w,_)}function u(w,_,S,O){var F=S.type;return F===oi?m(w,_,S.props.children,O,S.key):_!==null&&(_.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Vn&&Jm(F)===_.type)?(O=i(_,S.props),O.ref=Es(w,_,S),O.return=w,O):(O=zl(S.type,S.key,S.props,null,w.mode,O),O.ref=Es(w,_,S),O.return=w,O)}function h(w,_,S,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=Ic(S,w.mode,O),_.return=w,_):(_=i(_,S.children||[]),_.return=w,_)}function m(w,_,S,O,F){return _===null||_.tag!==7?(_=Mr(S,w.mode,O,F),_.return=w,_):(_=i(_,S),_.return=w,_)}function p(w,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Cc(""+_,w.mode,S),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ll:return S=zl(_.type,_.key,_.props,null,w.mode,S),S.ref=Es(w,null,_),S.return=w,S;case si:return _=Ic(_,w.mode,S),_.return=w,_;case Vn:var O=_._init;return p(w,O(_._payload),S)}if(As(_)||gs(_))return _=Mr(_,w.mode,S,null),_.return=w,_;_l(w,_)}return null}function g(w,_,S,O){var F=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return F!==null?null:a(w,_,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ll:return S.key===F?u(w,_,S,O):null;case si:return S.key===F?h(w,_,S,O):null;case Vn:return F=S._init,g(w,_,F(S._payload),O)}if(As(S)||gs(S))return F!==null?null:m(w,_,S,O,null);_l(w,S)}return null}function E(w,_,S,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return w=w.get(S)||null,a(_,w,""+O,F);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ll:return w=w.get(O.key===null?S:O.key)||null,u(_,w,O,F);case si:return w=w.get(O.key===null?S:O.key)||null,h(_,w,O,F);case Vn:var U=O._init;return E(w,_,S,U(O._payload),F)}if(As(O)||gs(O))return w=w.get(S)||null,m(_,w,O,F,null);_l(_,O)}return null}function T(w,_,S,O){for(var F=null,U=null,I=_,y=_=0,C=null;I!==null&&y<S.length;y++){I.index>y?(C=I,I=null):C=I.sibling;var N=g(w,I,S[y],O);if(N===null){I===null&&(I=C);break}t&&I&&N.alternate===null&&e(w,I),_=s(N,_,y),U===null?F=N:U.sibling=N,U=N,I=C}if(y===S.length)return n(w,I),ge&&kr(w,y),F;if(I===null){for(;y<S.length;y++)I=p(w,S[y],O),I!==null&&(_=s(I,_,y),U===null?F=I:U.sibling=I,U=I);return ge&&kr(w,y),F}for(I=r(w,I);y<S.length;y++)C=E(I,w,y,S[y],O),C!==null&&(t&&C.alternate!==null&&I.delete(C.key===null?y:C.key),_=s(C,_,y),U===null?F=C:U.sibling=C,U=C);return t&&I.forEach(function(P){return e(w,P)}),ge&&kr(w,y),F}function x(w,_,S,O){var F=gs(S);if(typeof F!="function")throw Error(z(150));if(S=F.call(S),S==null)throw Error(z(151));for(var U=F=null,I=_,y=_=0,C=null,N=S.next();I!==null&&!N.done;y++,N=S.next()){I.index>y?(C=I,I=null):C=I.sibling;var P=g(w,I,N.value,O);if(P===null){I===null&&(I=C);break}t&&I&&P.alternate===null&&e(w,I),_=s(P,_,y),U===null?F=P:U.sibling=P,U=P,I=C}if(N.done)return n(w,I),ge&&kr(w,y),F;if(I===null){for(;!N.done;y++,N=S.next())N=p(w,N.value,O),N!==null&&(_=s(N,_,y),U===null?F=N:U.sibling=N,U=N);return ge&&kr(w,y),F}for(I=r(w,I);!N.done;y++,N=S.next())N=E(I,w,y,N.value,O),N!==null&&(t&&N.alternate!==null&&I.delete(N.key===null?y:N.key),_=s(N,_,y),U===null?F=N:U.sibling=N,U=N);return t&&I.forEach(function(R){return e(w,R)}),ge&&kr(w,y),F}function A(w,_,S,O){if(typeof S=="object"&&S!==null&&S.type===oi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ll:e:{for(var F=S.key,U=_;U!==null;){if(U.key===F){if(F=S.type,F===oi){if(U.tag===7){n(w,U.sibling),_=i(U,S.props.children),_.return=w,w=_;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Vn&&Jm(F)===U.type){n(w,U.sibling),_=i(U,S.props),_.ref=Es(w,U,S),_.return=w,w=_;break e}n(w,U);break}else e(w,U);U=U.sibling}S.type===oi?(_=Mr(S.props.children,w.mode,O,S.key),_.return=w,w=_):(O=zl(S.type,S.key,S.props,null,w.mode,O),O.ref=Es(w,_,S),O.return=w,w=O)}return o(w);case si:e:{for(U=S.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(w,_.sibling),_=i(_,S.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=Ic(S,w.mode,O),_.return=w,w=_}return o(w);case Vn:return U=S._init,A(w,_,U(S._payload),O)}if(As(S))return T(w,_,S,O);if(gs(S))return x(w,_,S,O);_l(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,S),_.return=w,w=_):(n(w,_),_=Cc(S,w.mode,O),_.return=w,w=_),o(w)):n(w,_)}return A}var bi=Ty(!0),Ny=Ty(!1),sa=_r(null),oa=null,pi=null,Ld=null;function Md(){Ld=pi=oa=null}function jd(t){var e=sa.current;pe(sa),t._currentValue=e}function wh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Si(t,e){oa=t,Ld=pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(st=!0),t.firstContext=null)}function Nt(t){var e=t._currentValue;if(Ld!==t)if(t={context:t,memoizedValue:e,next:null},pi===null){if(oa===null)throw Error(z(308));pi=t,oa.dependencies={lanes:0,firstContext:t}}else pi=pi.next=t;return e}var Pr=null;function Fd(t){Pr===null?Pr=[t]:Pr.push(t)}function xy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Fd(e)):(n.next=i.next,i.next=n),e.interleaved=n,kn(t,r)}function kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hn=!1;function Ud(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ry(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kn(t,n)}return i=r.interleaved,i===null?(e.next=e,Fd(r)):(e.next=i.next,i.next=e),r.interleaved=e,kn(t,n)}function Dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Id(t,n)}}function Zm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function la(t,e,n,r){var i=t.updateQueue;Hn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var m=t.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=h:a.next=h,m.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,m=h=u=null,a=s;do{var g=a.lane,E=a.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,x=a;switch(g=e,E=n,x.tag){case 1:if(T=x.payload,typeof T=="function"){p=T.call(E,p,g);break e}p=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=x.payload,g=typeof T=="function"?T.call(E,p,g):T,g==null)break e;p=we({},p,g);break e;case 2:Hn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else E={eventTime:E,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(h=m=E,u=p):m=m.next=E,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=m,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Br|=o,t.lanes=o,t.memoizedState=p}}function eg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Oo={},Qt=_r(Oo),ao=_r(Oo),uo=_r(Oo);function Ar(t){if(t===Oo)throw Error(z(174));return t}function zd(t,e){switch(ce(uo,e),ce(ao,t),ce(Qt,Oo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:eh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=eh(e,t)}pe(Qt),ce(Qt,e)}function Di(){pe(Qt),pe(ao),pe(uo)}function Py(t){Ar(uo.current);var e=Ar(Qt.current),n=eh(e,t.type);e!==n&&(ce(ao,t),ce(Qt,n))}function Bd(t){ao.current===t&&(pe(Qt),pe(ao))}var ve=_r(0);function aa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vc=[];function Vd(){for(var t=0;t<vc.length;t++)vc[t]._workInProgressVersionPrimary=null;vc.length=0}var Ll=On.ReactCurrentDispatcher,_c=On.ReactCurrentBatchConfig,zr=0,_e=null,Ne=null,Ae=null,ua=!1,Us=!1,co=0,LC=0;function He(){throw Error(z(321))}function Hd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ht(t[n],e[n]))return!1;return!0}function $d(t,e,n,r,i,s){if(zr=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ll.current=t===null||t.memoizedState===null?UC:zC,t=n(r,i),Us){s=0;do{if(Us=!1,co=0,25<=s)throw Error(z(301));s+=1,Ae=Ne=null,e.updateQueue=null,Ll.current=BC,t=n(r,i)}while(Us)}if(Ll.current=ca,e=Ne!==null&&Ne.next!==null,zr=0,Ae=Ne=_e=null,ua=!1,e)throw Error(z(300));return t}function Wd(){var t=co!==0;return co=0,t}function Gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?_e.memoizedState=Ae=t:Ae=Ae.next=t,Ae}function xt(){if(Ne===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=Ae===null?_e.memoizedState:Ae.next;if(e!==null)Ae=e,Ne=t;else{if(t===null)throw Error(z(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ae===null?_e.memoizedState=Ae=t:Ae=Ae.next=t}return Ae}function ho(t,e){return typeof e=="function"?e(t):e}function yc(t){var e=xt(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,h=s;do{var m=h.lane;if((zr&m)===m)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:m,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,_e.lanes|=m,Br|=m}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=a,Ht(r,e.memoizedState)||(st=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,Br|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wc(t){var e=xt(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ht(s,e.memoizedState)||(st=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ay(){}function Oy(t,e){var n=_e,r=xt(),i=e(),s=!Ht(r.memoizedState,i);if(s&&(r.memoizedState=i,st=!0),r=r.queue,Gd(Ly.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,fo(9,Dy.bind(null,n,r,i,e),void 0,null),De===null)throw Error(z(349));zr&30||by(n,e,i)}return i}function by(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Dy(t,e,n,r){e.value=n,e.getSnapshot=r,My(e)&&jy(t)}function Ly(t,e,n){return n(function(){My(e)&&jy(t)})}function My(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ht(t,n)}catch{return!0}}function jy(t){var e=kn(t,1);e!==null&&zt(e,t,1,-1)}function tg(t){var e=Gt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:t},e.queue=t,t=t.dispatch=FC.bind(null,_e,t),[e.memoizedState,t]}function fo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Fy(){return xt().memoizedState}function Ml(t,e,n,r){var i=Gt();_e.flags|=t,i.memoizedState=fo(1|e,n,void 0,r===void 0?null:r)}function Ja(t,e,n,r){var i=xt();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var o=Ne.memoizedState;if(s=o.destroy,r!==null&&Hd(r,o.deps)){i.memoizedState=fo(e,n,s,r);return}}_e.flags|=t,i.memoizedState=fo(1|e,n,s,r)}function ng(t,e){return Ml(8390656,8,t,e)}function Gd(t,e){return Ja(2048,8,t,e)}function Uy(t,e){return Ja(4,2,t,e)}function zy(t,e){return Ja(4,4,t,e)}function By(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vy(t,e,n){return n=n!=null?n.concat([t]):null,Ja(4,4,By.bind(null,e,t),n)}function Kd(){}function Hy(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $y(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Wy(t,e,n){return zr&21?(Ht(n,e)||(n=Q_(),_e.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,st=!0),t.memoizedState=n)}function MC(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=_c.transition;_c.transition={};try{t(!1),e()}finally{oe=n,_c.transition=r}}function Gy(){return xt().memoizedState}function jC(t,e,n){var r=ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ky(t))qy(e,n);else if(n=xy(t,e,n,r),n!==null){var i=Je();zt(n,t,r,i),Yy(n,e,r)}}function FC(t,e,n){var r=ir(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ky(t))qy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ht(a,o)){var u=e.interleaved;u===null?(i.next=i,Fd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=xy(t,e,i,r),n!==null&&(i=Je(),zt(n,t,r,i),Yy(n,e,r))}}function Ky(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function qy(t,e){Us=ua=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Yy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Id(t,n)}}var ca={readContext:Nt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},UC={readContext:Nt,useCallback:function(t,e){return Gt().memoizedState=[t,e===void 0?null:e],t},useContext:Nt,useEffect:ng,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4194308,4,By.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ml(4,2,t,e)},useMemo:function(t,e){var n=Gt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Gt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=jC.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=Gt();return t={current:t},e.memoizedState=t},useState:tg,useDebugValue:Kd,useDeferredValue:function(t){return Gt().memoizedState=t},useTransition:function(){var t=tg(!1),e=t[0];return t=MC.bind(null,t[1]),Gt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=Gt();if(ge){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),De===null)throw Error(z(349));zr&30||by(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ng(Ly.bind(null,r,s,t),[t]),r.flags|=2048,fo(9,Dy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Gt(),e=De.identifierPrefix;if(ge){var n=mn,r=pn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=LC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zC={readContext:Nt,useCallback:Hy,useContext:Nt,useEffect:Gd,useImperativeHandle:Vy,useInsertionEffect:Uy,useLayoutEffect:zy,useMemo:$y,useReducer:yc,useRef:Fy,useState:function(){return yc(ho)},useDebugValue:Kd,useDeferredValue:function(t){var e=xt();return Wy(e,Ne.memoizedState,t)},useTransition:function(){var t=yc(ho)[0],e=xt().memoizedState;return[t,e]},useMutableSource:Ay,useSyncExternalStore:Oy,useId:Gy,unstable_isNewReconciler:!1},BC={readContext:Nt,useCallback:Hy,useContext:Nt,useEffect:Gd,useImperativeHandle:Vy,useInsertionEffect:Uy,useLayoutEffect:zy,useMemo:$y,useReducer:wc,useRef:Fy,useState:function(){return wc(ho)},useDebugValue:Kd,useDeferredValue:function(t){var e=xt();return Ne===null?e.memoizedState=t:Wy(e,Ne.memoizedState,t)},useTransition:function(){var t=wc(ho)[0],e=xt().memoizedState;return[t,e]},useMutableSource:Ay,useSyncExternalStore:Oy,useId:Gy,unstable_isNewReconciler:!1};function At(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Eh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Za={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Je(),i=ir(t),s=En(r,i);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(zt(e,t,i,r),Dl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Je(),i=ir(t),s=En(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(zt(e,t,i,r),Dl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Je(),r=ir(t),i=En(n,r);i.tag=2,e!=null&&(i.callback=e),e=nr(t,i,r),e!==null&&(zt(e,t,r,n),Dl(e,t,r))}};function rg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!io(n,r)||!io(i,s):!0}function Qy(t,e,n){var r=!1,i=fr,s=e.contextType;return typeof s=="object"&&s!==null?s=Nt(s):(i=ut(e)?Fr:Ke.current,r=e.contextTypes,s=(r=r!=null)?Ai(t,i):fr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Za,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ig(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Za.enqueueReplaceState(e,e.state,null)}function Sh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ud(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Nt(s):(s=ut(e)?Fr:Ke.current,i.context=Ai(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Eh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Za.enqueueReplaceState(i,i.state,null),la(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Li(t,e){try{var n="",r=e;do n+=mS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ch(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var VC=typeof WeakMap=="function"?WeakMap:Map;function Xy(t,e,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){da||(da=!0,bh=r),Ch(t,e)},n}function Jy(t,e,n){n=En(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ch(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ch(t,e),typeof r!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new VC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=nI.bind(null,t,e,n),e.then(t,t))}function og(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=En(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var HC=On.ReactCurrentOwner,st=!1;function Qe(t,e,n,r){e.child=t===null?Ny(e,null,n,r):bi(e,t.child,n,r)}function ag(t,e,n,r,i){n=n.render;var s=e.ref;return Si(e,i),r=$d(t,e,n,r,s,i),n=Wd(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(ge&&n&&Od(e),e.flags|=1,Qe(t,e,r,i),e.child)}function ug(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!tf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Zy(t,e,s,r,i)):(t=zl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(o,r)&&t.ref===e.ref)return Tn(t,e,i)}return e.flags|=1,t=sr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Zy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(io(s,r)&&t.ref===e.ref)if(st=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(st=!0);else return e.lanes=t.lanes,Tn(t,e,i)}return Ih(t,e,n,r,i)}function e0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(gi,pt),pt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(gi,pt),pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(gi,pt),pt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(gi,pt),pt|=r;return Qe(t,e,i,n),e.child}function t0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ih(t,e,n,r,i){var s=ut(n)?Fr:Ke.current;return s=Ai(e,s),Si(e,i),n=$d(t,e,n,r,s,i),r=Wd(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(ge&&r&&Od(e),e.flags|=1,Qe(t,e,n,i),e.child)}function cg(t,e,n,r,i){if(ut(n)){var s=!0;na(e)}else s=!1;if(Si(e,i),e.stateNode===null)jl(t,e),Qy(e,n,r),Sh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Nt(h):(h=ut(n)?Fr:Ke.current,h=Ai(e,h));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==h)&&ig(e,o,r,h),Hn=!1;var g=e.memoizedState;o.state=g,la(e,r,o,i),u=e.memoizedState,a!==r||g!==u||at.current||Hn?(typeof m=="function"&&(Eh(e,n,m,r),u=e.memoizedState),(a=Hn||rg(e,n,a,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Ry(t,e),a=e.memoizedProps,h=e.type===e.elementType?a:At(e.type,a),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Nt(u):(u=ut(n)?Fr:Ke.current,u=Ai(e,u));var E=n.getDerivedStateFromProps;(m=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||g!==u)&&ig(e,o,r,u),Hn=!1,g=e.memoizedState,o.state=g,la(e,r,o,i);var T=e.memoizedState;a!==p||g!==T||at.current||Hn?(typeof E=="function"&&(Eh(e,n,E,r),T=e.memoizedState),(h=Hn||rg(e,n,h,r,g,T,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return kh(t,e,n,r,s,i)}function kh(t,e,n,r,i,s){t0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ym(e,n,!1),Tn(t,e,s);r=e.stateNode,HC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bi(e,t.child,null,s),e.child=bi(e,null,a,s)):Qe(t,e,a,s),e.memoizedState=r.state,i&&Ym(e,n,!0),e.child}function n0(t){var e=t.stateNode;e.pendingContext?qm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qm(t,e.context,!1),zd(t,e.containerInfo)}function hg(t,e,n,r,i){return Oi(),Dd(i),e.flags|=256,Qe(t,e,n,r),e.child}var Th={dehydrated:null,treeContext:null,retryLane:0};function Nh(t){return{baseLanes:t,cachePool:null,transitions:null}}function r0(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ve,i&1),t===null)return yh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nu(o,r,0,null),t=Mr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nh(n),e.memoizedState=Th,t):qd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return $C(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=sr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=Mr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Th,r}return s=t.child,t=s.sibling,r=sr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function qd(t,e){return e=nu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yl(t,e,n,r){return r!==null&&Dd(r),bi(e,t.child,null,n),t=qd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $C(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ec(Error(z(422))),yl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=nu({mode:"visible",children:r.children},i,0,null),s=Mr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&bi(e,t.child,null,o),e.child.memoizedState=Nh(o),e.memoizedState=Th,s);if(!(e.mode&1))return yl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=Ec(s,r,void 0),yl(t,e,o,r)}if(a=(o&t.childLanes)!==0,st||a){if(r=De,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kn(t,i),zt(r,t,i,-1))}return ef(),r=Ec(Error(z(421))),yl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=rI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,mt=tr(i.nextSibling),gt=e,ge=!0,bt=null,t!==null&&(St[Ct++]=pn,St[Ct++]=mn,St[Ct++]=Ur,pn=t.id,mn=t.overflow,Ur=e),e=qd(e,r.children),e.flags|=4096,e)}function dg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),wh(t.return,e,n)}function Sc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function i0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Qe(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dg(t,n,e);else if(t.tag===19)dg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&aa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&aa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sc(e,!0,n,null,s);break;case"together":Sc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WC(t,e,n){switch(e.tag){case 3:n0(e),Oi();break;case 5:Py(e);break;case 1:ut(e.type)&&na(e);break;case 4:zd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(sa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?r0(t,e,n):(ce(ve,ve.current&1),t=Tn(t,e,n),t!==null?t.sibling:null);ce(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return i0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,e0(t,e,n)}return Tn(t,e,n)}var s0,xh,o0,l0;s0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xh=function(){};o0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ar(Qt.current);var s=null;switch(n){case"input":i=Qc(t,i),r=Qc(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=Zc(t,i),r=Zc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ea)}th(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var a=i[h];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Xs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(a=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==a&&(u!=null||a!=null))if(h==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Xs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&de("scroll",t),s||a===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};l0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ss(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function GC(t,e,n){var r=e.pendingProps;switch(bd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(e),null;case 1:return ut(e.type)&&ta(),$e(e),null;case 3:return r=e.stateNode,Di(),pe(at),pe(Ke),Vd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,bt!==null&&(Mh(bt),bt=null))),xh(t,e),$e(e),null;case 5:Bd(e);var i=Ar(uo.current);if(n=e.type,t!==null&&e.stateNode!=null)o0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return $e(e),null}if(t=Ar(Qt.current),vl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Kt]=e,r[lo]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<bs.length;i++)de(bs[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Em(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Cm(r,s),de("invalid",r)}th(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&gl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&gl(r.textContent,a,t),i=["children",""+a]):Xs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":al(r),Sm(r,s,!0);break;case"textarea":al(r),Im(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ea)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=L_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Kt]=e,t[lo]=r,s0(t,e,!1,!1),e.stateNode=t;e:{switch(o=nh(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<bs.length;i++)de(bs[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Em(t,r),i=Qc(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),de("invalid",t);break;case"textarea":Cm(t,r),i=Zc(t,r),de("invalid",t);break;default:i=r}th(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?F_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&M_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Js(t,u):typeof u=="number"&&Js(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&_d(t,s,u,o))}switch(n){case"input":al(t),Sm(t,r,!1);break;case"textarea":al(t),Im(t);break;case"option":r.value!=null&&t.setAttribute("value",""+dr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?_i(t,!!r.multiple,s,!1):r.defaultValue!=null&&_i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ea)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $e(e),null;case 6:if(t&&e.stateNode!=null)l0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Ar(uo.current),Ar(Qt.current),vl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Kt]=e,(s=r.nodeValue!==n)&&(t=gt,t!==null))switch(t.tag){case 3:gl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kt]=e,e.stateNode=r}return $e(e),null;case 13:if(pe(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&mt!==null&&e.mode&1&&!(e.flags&128))ky(),Oi(),e.flags|=98560,s=!1;else if(s=vl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[Kt]=e}else Oi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$e(e),s=!1}else bt!==null&&(Mh(bt),bt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?Re===0&&(Re=3):ef())),e.updateQueue!==null&&(e.flags|=4),$e(e),null);case 4:return Di(),xh(t,e),t===null&&so(e.stateNode.containerInfo),$e(e),null;case 10:return jd(e.type._context),$e(e),null;case 17:return ut(e.type)&&ta(),$e(e),null;case 19:if(pe(ve),s=e.memoizedState,s===null)return $e(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ss(s,!1);else{if(Re!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=aa(t),o!==null){for(e.flags|=128,Ss(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ie()>Mi&&(e.flags|=128,r=!0,Ss(s,!1),e.lanes=4194304)}else{if(!r)if(t=aa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ss(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return $e(e),null}else 2*Ie()-s.renderingStartTime>Mi&&n!==1073741824&&(e.flags|=128,r=!0,Ss(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ie(),e.sibling=null,n=ve.current,ce(ve,r?n&1|2:n&1),e):($e(e),null);case 22:case 23:return Zd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?pt&1073741824&&($e(e),e.subtreeFlags&6&&(e.flags|=8192)):$e(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function KC(t,e){switch(bd(e),e.tag){case 1:return ut(e.type)&&ta(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Di(),pe(at),pe(Ke),Vd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bd(e),null;case 13:if(pe(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));Oi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ve),null;case 4:return Di(),null;case 10:return jd(e.type._context),null;case 22:case 23:return Zd(),null;case 24:return null;default:return null}}var wl=!1,We=!1,qC=typeof WeakSet=="function"?WeakSet:Set,$=null;function mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(t,e,r)}else n.current=null}function Rh(t,e,n){try{n()}catch(r){Ee(t,e,r)}}var fg=!1;function YC(t,e){if(dh=Xl,t=dy(),Ad(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,h=0,m=0,p=t,g=null;t:for(;;){for(var E;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(E=p.firstChild)!==null;)g=p,p=E;for(;;){if(p===t)break t;if(g===n&&++h===i&&(a=o),g===s&&++m===r&&(u=o),(E=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=E}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(fh={focusedElem:t,selectionRange:n},Xl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var x=T.memoizedProps,A=T.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?x:At(e.type,x),A);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(O){Ee(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return T=fg,fg=!1,T}function zs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Rh(e,n,s)}i=i.next}while(i!==r)}}function eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ph(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function a0(t){var e=t.alternate;e!==null&&(t.alternate=null,a0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kt],delete e[lo],delete e[gh],delete e[AC],delete e[OC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function u0(t){return t.tag===5||t.tag===3||t.tag===4}function pg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||u0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ah(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ea));else if(r!==4&&(t=t.child,t!==null))for(Ah(t,e,n),t=t.sibling;t!==null;)Ah(t,e,n),t=t.sibling}function Oh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Oh(t,e,n),t=t.sibling;t!==null;)Oh(t,e,n),t=t.sibling}var Me=null,Ot=!1;function zn(t,e,n){for(n=n.child;n!==null;)c0(t,e,n),n=n.sibling}function c0(t,e,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Ga,n)}catch{}switch(n.tag){case 5:We||mi(n,e);case 6:var r=Me,i=Ot;Me=null,zn(t,e,n),Me=r,Ot=i,Me!==null&&(Ot?(t=Me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Ot?(t=Me,n=n.stateNode,t.nodeType===8?mc(t.parentNode,n):t.nodeType===1&&mc(t,n),no(t)):mc(Me,n.stateNode));break;case 4:r=Me,i=Ot,Me=n.stateNode.containerInfo,Ot=!0,zn(t,e,n),Me=r,Ot=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rh(n,e,o),i=i.next}while(i!==r)}zn(t,e,n);break;case 1:if(!We&&(mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ee(n,e,a)}zn(t,e,n);break;case 21:zn(t,e,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,zn(t,e,n),We=r):zn(t,e,n);break;default:zn(t,e,n)}}function mg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qC),e.forEach(function(r){var i=iI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Me=a.stateNode,Ot=!1;break e;case 3:Me=a.stateNode.containerInfo,Ot=!0;break e;case 4:Me=a.stateNode.containerInfo,Ot=!0;break e}a=a.return}if(Me===null)throw Error(z(160));c0(s,o,i),Me=null,Ot=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ee(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)h0(e,t),e=e.sibling}function h0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pt(e,t),$t(t),r&4){try{zs(3,t,t.return),eu(3,t)}catch(x){Ee(t,t.return,x)}try{zs(5,t,t.return)}catch(x){Ee(t,t.return,x)}}break;case 1:Pt(e,t),$t(t),r&512&&n!==null&&mi(n,n.return);break;case 5:if(Pt(e,t),$t(t),r&512&&n!==null&&mi(n,n.return),t.flags&32){var i=t.stateNode;try{Js(i,"")}catch(x){Ee(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&b_(i,s),nh(a,o);var h=nh(a,s);for(o=0;o<u.length;o+=2){var m=u[o],p=u[o+1];m==="style"?F_(i,p):m==="dangerouslySetInnerHTML"?M_(i,p):m==="children"?Js(i,p):_d(i,m,p,h)}switch(a){case"input":Xc(i,s);break;case"textarea":D_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?_i(i,!!s.multiple,E,!1):g!==!!s.multiple&&(s.defaultValue!=null?_i(i,!!s.multiple,s.defaultValue,!0):_i(i,!!s.multiple,s.multiple?[]:"",!1))}i[lo]=s}catch(x){Ee(t,t.return,x)}}break;case 6:if(Pt(e,t),$t(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Ee(t,t.return,x)}}break;case 3:if(Pt(e,t),$t(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{no(e.containerInfo)}catch(x){Ee(t,t.return,x)}break;case 4:Pt(e,t),$t(t);break;case 13:Pt(e,t),$t(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Xd=Ie())),r&4&&mg(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(We=(h=We)||m,Pt(e,t),We=h):Pt(e,t),$t(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!m&&t.mode&1)for($=t,m=t.child;m!==null;){for(p=$=m;$!==null;){switch(g=$,E=g.child,g.tag){case 0:case 11:case 14:case 15:zs(4,g,g.return);break;case 1:mi(g,g.return);var T=g.stateNode;if(typeof T.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(x){Ee(r,n,x)}}break;case 5:mi(g,g.return);break;case 22:if(g.memoizedState!==null){vg(p);continue}}E!==null?(E.return=g,$=E):vg(p)}m=m.sibling}e:for(m=null,p=t;;){if(p.tag===5){if(m===null){m=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=j_("display",o))}catch(x){Ee(t,t.return,x)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(x){Ee(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Pt(e,t),$t(t),r&4&&mg(t);break;case 21:break;default:Pt(e,t),$t(t)}}function $t(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(u0(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Js(i,""),r.flags&=-33);var s=pg(t);Oh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=pg(t);Ah(t,a,o);break;default:throw Error(z(161))}}catch(u){Ee(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QC(t,e,n){$=t,d0(t)}function d0(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||wl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||We;a=wl;var h=We;if(wl=o,(We=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?_g(i):u!==null?(u.return=o,$=u):_g(i);for(;s!==null;)$=s,d0(s),s=s.sibling;$=i,wl=a,We=h}gg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):gg(t)}}function gg(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:We||eu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:At(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&eg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}eg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var m=h.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&no(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}We||e.flags&512&&Ph(e)}catch(g){Ee(e,e.return,g)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function vg(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function _g(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{eu(4,e)}catch(u){Ee(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ee(e,i,u)}}var s=e.return;try{Ph(e)}catch(u){Ee(e,s,u)}break;case 5:var o=e.return;try{Ph(e)}catch(u){Ee(e,o,u)}}}catch(u){Ee(e,e.return,u)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var XC=Math.ceil,ha=On.ReactCurrentDispatcher,Yd=On.ReactCurrentOwner,kt=On.ReactCurrentBatchConfig,te=0,De=null,ke=null,Fe=0,pt=0,gi=_r(0),Re=0,po=null,Br=0,tu=0,Qd=0,Bs=null,nt=null,Xd=0,Mi=1/0,hn=null,da=!1,bh=null,rr=null,El=!1,Qn=null,fa=0,Vs=0,Dh=null,Fl=-1,Ul=0;function Je(){return te&6?Ie():Fl!==-1?Fl:Fl=Ie()}function ir(t){return t.mode&1?te&2&&Fe!==0?Fe&-Fe:DC.transition!==null?(Ul===0&&(Ul=Q_()),Ul):(t=oe,t!==0||(t=window.event,t=t===void 0?16:ry(t.type)),t):1}function zt(t,e,n,r){if(50<Vs)throw Vs=0,Dh=null,Error(z(185));Ro(t,n,r),(!(te&2)||t!==De)&&(t===De&&(!(te&2)&&(tu|=n),Re===4&&Wn(t,Fe)),ct(t,r),n===1&&te===0&&!(e.mode&1)&&(Mi=Ie()+500,Xa&&yr()))}function ct(t,e){var n=t.callbackNode;DS(t,e);var r=Ql(t,t===De?Fe:0);if(r===0)n!==null&&Nm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Nm(n),e===1)t.tag===0?bC(yg.bind(null,t)):Sy(yg.bind(null,t)),RC(function(){!(te&6)&&yr()}),n=null;else{switch(X_(r)){case 1:n=Cd;break;case 4:n=q_;break;case 16:n=Yl;break;case 536870912:n=Y_;break;default:n=Yl}n=w0(n,f0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function f0(t,e){if(Fl=-1,Ul=0,te&6)throw Error(z(327));var n=t.callbackNode;if(Ci()&&t.callbackNode!==n)return null;var r=Ql(t,t===De?Fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=pa(t,r);else{e=r;var i=te;te|=2;var s=m0();(De!==t||Fe!==e)&&(hn=null,Mi=Ie()+500,Lr(t,e));do try{eI();break}catch(a){p0(t,a)}while(!0);Md(),ha.current=s,te=i,ke!==null?e=0:(De=null,Fe=0,e=Re)}if(e!==0){if(e===2&&(i=lh(t),i!==0&&(r=i,e=Lh(t,i))),e===1)throw n=po,Lr(t,0),Wn(t,r),ct(t,Ie()),n;if(e===6)Wn(t,r);else{if(i=t.current.alternate,!(r&30)&&!JC(i)&&(e=pa(t,r),e===2&&(s=lh(t),s!==0&&(r=s,e=Lh(t,s))),e===1))throw n=po,Lr(t,0),Wn(t,r),ct(t,Ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Tr(t,nt,hn);break;case 3:if(Wn(t,r),(r&130023424)===r&&(e=Xd+500-Ie(),10<e)){if(Ql(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Je(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=mh(Tr.bind(null,t,nt,hn),e);break}Tr(t,nt,hn);break;case 4:if(Wn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*XC(r/1960))-r,10<r){t.timeoutHandle=mh(Tr.bind(null,t,nt,hn),r);break}Tr(t,nt,hn);break;case 5:Tr(t,nt,hn);break;default:throw Error(z(329))}}}return ct(t,Ie()),t.callbackNode===n?f0.bind(null,t):null}function Lh(t,e){var n=Bs;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=pa(t,e),t!==2&&(e=nt,nt=n,e!==null&&Mh(e)),t}function Mh(t){nt===null?nt=t:nt.push.apply(nt,t)}function JC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ht(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wn(t,e){for(e&=~Qd,e&=~tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ut(e),r=1<<n;t[n]=-1,e&=~r}}function yg(t){if(te&6)throw Error(z(327));Ci();var e=Ql(t,0);if(!(e&1))return ct(t,Ie()),null;var n=pa(t,e);if(t.tag!==0&&n===2){var r=lh(t);r!==0&&(e=r,n=Lh(t,r))}if(n===1)throw n=po,Lr(t,0),Wn(t,e),ct(t,Ie()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,nt,hn),ct(t,Ie()),null}function Jd(t,e){var n=te;te|=1;try{return t(e)}finally{te=n,te===0&&(Mi=Ie()+500,Xa&&yr())}}function Vr(t){Qn!==null&&Qn.tag===0&&!(te&6)&&Ci();var e=te;te|=1;var n=kt.transition,r=oe;try{if(kt.transition=null,oe=1,t)return t()}finally{oe=r,kt.transition=n,te=e,!(te&6)&&yr()}}function Zd(){pt=gi.current,pe(gi)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xC(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(bd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ta();break;case 3:Di(),pe(at),pe(Ke),Vd();break;case 5:Bd(r);break;case 4:Di();break;case 13:pe(ve);break;case 19:pe(ve);break;case 10:jd(r.type._context);break;case 22:case 23:Zd()}n=n.return}if(De=t,ke=t=sr(t.current,null),Fe=pt=e,Re=0,po=null,Qd=tu=Br=0,nt=Bs=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pr=null}return t}function p0(t,e){do{var n=ke;try{if(Md(),Ll.current=ca,ua){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ua=!1}if(zr=0,Ae=Ne=_e=null,Us=!1,co=0,Yd.current=null,n===null||n.return===null){Re=1,po=e,ke=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Fe,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,m=a,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var E=og(o);if(E!==null){E.flags&=-257,lg(E,o,a,s,e),E.mode&1&&sg(s,h,e),e=E,u=h;var T=e.updateQueue;if(T===null){var x=new Set;x.add(u),e.updateQueue=x}else T.add(u);break e}else{if(!(e&1)){sg(s,h,e),ef();break e}u=Error(z(426))}}else if(ge&&a.mode&1){var A=og(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),lg(A,o,a,s,e),Dd(Li(u,a));break e}}s=u=Li(u,a),Re!==4&&(Re=2),Bs===null?Bs=[s]:Bs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=Xy(s,u,e);Zm(s,w);break e;case 1:a=u;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(rr===null||!rr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=Jy(s,a,e);Zm(s,O);break e}}s=s.return}while(s!==null)}v0(n)}catch(F){e=F,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function m0(){var t=ha.current;return ha.current=ca,t===null?ca:t}function ef(){(Re===0||Re===3||Re===2)&&(Re=4),De===null||!(Br&268435455)&&!(tu&268435455)||Wn(De,Fe)}function pa(t,e){var n=te;te|=2;var r=m0();(De!==t||Fe!==e)&&(hn=null,Lr(t,e));do try{ZC();break}catch(i){p0(t,i)}while(!0);if(Md(),te=n,ha.current=r,ke!==null)throw Error(z(261));return De=null,Fe=0,Re}function ZC(){for(;ke!==null;)g0(ke)}function eI(){for(;ke!==null&&!kS();)g0(ke)}function g0(t){var e=y0(t.alternate,t,pt);t.memoizedProps=t.pendingProps,e===null?v0(t):ke=e,Yd.current=null}function v0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=KC(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Re=6,ke=null;return}}else if(n=GC(n,e,pt),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Re===0&&(Re=5)}function Tr(t,e,n){var r=oe,i=kt.transition;try{kt.transition=null,oe=1,tI(t,e,n,r)}finally{kt.transition=i,oe=r}return null}function tI(t,e,n,r){do Ci();while(Qn!==null);if(te&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(LS(t,s),t===De&&(ke=De=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||El||(El=!0,w0(Yl,function(){return Ci(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kt.transition,kt.transition=null;var o=oe;oe=1;var a=te;te|=4,Yd.current=null,YC(t,n),h0(n,t),EC(fh),Xl=!!dh,fh=dh=null,t.current=n,QC(n),TS(),te=a,oe=o,kt.transition=s}else t.current=n;if(El&&(El=!1,Qn=t,fa=i),s=t.pendingLanes,s===0&&(rr=null),RS(n.stateNode),ct(t,Ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(da)throw da=!1,t=bh,bh=null,t;return fa&1&&t.tag!==0&&Ci(),s=t.pendingLanes,s&1?t===Dh?Vs++:(Vs=0,Dh=t):Vs=0,yr(),null}function Ci(){if(Qn!==null){var t=X_(fa),e=kt.transition,n=oe;try{if(kt.transition=null,oe=16>t?16:t,Qn===null)var r=!1;else{if(t=Qn,Qn=null,fa=0,te&6)throw Error(z(331));var i=te;for(te|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var h=a[u];for($=h;$!==null;){var m=$;switch(m.tag){case 0:case 11:case 15:zs(8,m,s)}var p=m.child;if(p!==null)p.return=m,$=p;else for(;$!==null;){m=$;var g=m.sibling,E=m.return;if(a0(m),m===h){$=null;break}if(g!==null){g.return=E,$=g;break}$=E}}}var T=s.alternate;if(T!==null){var x=T.child;if(x!==null){T.child=null;do{var A=x.sibling;x.sibling=null,x=A}while(x!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zs(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,$=w;break e}$=s.return}}var _=t.current;for($=_;$!==null;){o=$;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,$=S;else e:for(o=_;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:eu(9,a)}}catch(F){Ee(a,a.return,F)}if(a===o){$=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,$=O;break e}$=a.return}}if(te=i,yr(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Ga,t)}catch{}r=!0}return r}finally{oe=n,kt.transition=e}}return!1}function wg(t,e,n){e=Li(n,e),e=Xy(t,e,1),t=nr(t,e,1),e=Je(),t!==null&&(Ro(t,1,e),ct(t,e))}function Ee(t,e,n){if(t.tag===3)wg(t,t,n);else for(;e!==null;){if(e.tag===3){wg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rr===null||!rr.has(r))){t=Li(n,t),t=Jy(e,t,1),e=nr(e,t,1),t=Je(),e!==null&&(Ro(e,1,t),ct(e,t));break}}e=e.return}}function nI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Je(),t.pingedLanes|=t.suspendedLanes&n,De===t&&(Fe&n)===n&&(Re===4||Re===3&&(Fe&130023424)===Fe&&500>Ie()-Xd?Lr(t,0):Qd|=n),ct(t,e)}function _0(t,e){e===0&&(t.mode&1?(e=hl,hl<<=1,!(hl&130023424)&&(hl=4194304)):e=1);var n=Je();t=kn(t,e),t!==null&&(Ro(t,e,n),ct(t,n))}function rI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_0(t,n)}function iI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),_0(t,n)}var y0;y0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||at.current)st=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return st=!1,WC(t,e,n);st=!!(t.flags&131072)}else st=!1,ge&&e.flags&1048576&&Cy(e,ia,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;jl(t,e),t=e.pendingProps;var i=Ai(e,Ke.current);Si(e,n),i=$d(null,e,r,t,i,n);var s=Wd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ut(r)?(s=!0,na(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ud(e),i.updater=Za,e.stateNode=i,i._reactInternals=e,Sh(e,r,t,n),e=kh(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&Od(e),Qe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(jl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=oI(r),t=At(r,t),i){case 0:e=Ih(null,e,r,t,n);break e;case 1:e=cg(null,e,r,t,n);break e;case 11:e=ag(null,e,r,t,n);break e;case 14:e=ug(null,e,r,At(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Ih(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),cg(t,e,r,i,n);case 3:e:{if(n0(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Ry(t,e),la(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Li(Error(z(423)),e),e=hg(t,e,r,n,i);break e}else if(r!==i){i=Li(Error(z(424)),e),e=hg(t,e,r,n,i);break e}else for(mt=tr(e.stateNode.containerInfo.firstChild),gt=e,ge=!0,bt=null,n=Ny(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Oi(),r===i){e=Tn(t,e,n);break e}Qe(t,e,r,n)}e=e.child}return e;case 5:return Py(e),t===null&&yh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ph(r,i)?o=null:s!==null&&ph(r,s)&&(e.flags|=32),t0(t,e),Qe(t,e,o,n),e.child;case 6:return t===null&&yh(e),null;case 13:return r0(t,e,n);case 4:return zd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bi(e,null,r,n):Qe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),ag(t,e,r,i,n);case 7:return Qe(t,e,e.pendingProps,n),e.child;case 8:return Qe(t,e,e.pendingProps.children,n),e.child;case 12:return Qe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(sa,r._currentValue),r._currentValue=o,s!==null)if(Ht(s.value,o)){if(s.children===i.children&&!at.current){e=Tn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=En(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var m=h.pending;m===null?u.next=u:(u.next=m.next,m.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),wh(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Si(e,n),i=Nt(i),r=r(i),e.flags|=1,Qe(t,e,r,n),e.child;case 14:return r=e.type,i=At(r,e.pendingProps),i=At(r.type,i),ug(t,e,r,i,n);case 15:return Zy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),jl(t,e),e.tag=1,ut(r)?(t=!0,na(e)):t=!1,Si(e,n),Qy(e,r,i),Sh(e,r,i,n),kh(null,e,r,!0,t,n);case 19:return i0(t,e,n);case 22:return e0(t,e,n)}throw Error(z(156,e.tag))};function w0(t,e){return K_(t,e)}function sI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(t,e,n,r){return new sI(t,e,n,r)}function tf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oI(t){if(typeof t=="function")return tf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wd)return 11;if(t===Ed)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=It(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")tf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case oi:return Mr(n.children,i,s,e);case yd:o=8,i|=8;break;case Gc:return t=It(12,n,e,i|2),t.elementType=Gc,t.lanes=s,t;case Kc:return t=It(13,n,e,i),t.elementType=Kc,t.lanes=s,t;case qc:return t=It(19,n,e,i),t.elementType=qc,t.lanes=s,t;case P_:return nu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x_:o=10;break e;case R_:o=9;break e;case wd:o=11;break e;case Ed:o=14;break e;case Vn:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=It(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Mr(t,e,n,r){return t=It(7,t,r,e),t.lanes=n,t}function nu(t,e,n,r){return t=It(22,t,r,e),t.elementType=P_,t.lanes=n,t.stateNode={isHidden:!1},t}function Cc(t,e,n){return t=It(6,t,null,e),t.lanes=n,t}function Ic(t,e,n){return e=It(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function lI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ic(0),this.expirationTimes=ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ic(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nf(t,e,n,r,i,s,o,a,u){return t=new lI(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=It(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ud(s),t}function aI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:si,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function E0(t){if(!t)return fr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(ut(n))return Ey(t,n,e)}return e}function S0(t,e,n,r,i,s,o,a,u){return t=nf(n,r,!0,t,i,s,o,a,u),t.context=E0(null),n=t.current,r=Je(),i=ir(n),s=En(r,i),s.callback=e??null,nr(n,s,i),t.current.lanes=i,Ro(t,i,r),ct(t,r),t}function ru(t,e,n,r){var i=e.current,s=Je(),o=ir(i);return n=E0(n),e.context===null?e.context=n:e.pendingContext=n,e=En(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=nr(i,e,o),t!==null&&(zt(t,i,o,s),Dl(t,i,o)),o}function ma(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Eg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function rf(t,e){Eg(t,e),(t=t.alternate)&&Eg(t,e)}function uI(){return null}var C0=typeof reportError=="function"?reportError:function(t){console.error(t)};function sf(t){this._internalRoot=t}iu.prototype.render=sf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));ru(t,e,null,null)};iu.prototype.unmount=sf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){ru(null,t,null,null)}),e[In]=null}};function iu(t){this._internalRoot=t}iu.prototype.unstable_scheduleHydration=function(t){if(t){var e=ey();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$n.length&&e!==0&&e<$n[n].priority;n++);$n.splice(n,0,t),n===0&&ny(t)}};function of(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sg(){}function cI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=ma(o);s.call(h)}}var o=S0(e,r,t,0,null,!1,!1,"",Sg);return t._reactRootContainer=o,t[In]=o.current,so(t.nodeType===8?t.parentNode:t),Vr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var h=ma(u);a.call(h)}}var u=nf(t,0,!1,null,null,!1,!1,"",Sg);return t._reactRootContainer=u,t[In]=u.current,so(t.nodeType===8?t.parentNode:t),Vr(function(){ru(e,u,n,r)}),u}function ou(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=ma(o);a.call(u)}}ru(e,o,t,i)}else o=cI(n,e,t,i,r);return ma(o)}J_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Os(e.pendingLanes);n!==0&&(Id(e,n|1),ct(e,Ie()),!(te&6)&&(Mi=Ie()+500,yr()))}break;case 13:Vr(function(){var r=kn(t,1);if(r!==null){var i=Je();zt(r,t,1,i)}}),rf(t,1)}};kd=function(t){if(t.tag===13){var e=kn(t,134217728);if(e!==null){var n=Je();zt(e,t,134217728,n)}rf(t,134217728)}};Z_=function(t){if(t.tag===13){var e=ir(t),n=kn(t,e);if(n!==null){var r=Je();zt(n,t,e,r)}rf(t,e)}};ey=function(){return oe};ty=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};ih=function(t,e,n){switch(e){case"input":if(Xc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Qa(r);if(!i)throw Error(z(90));O_(r),Xc(r,i)}}}break;case"textarea":D_(t,n);break;case"select":e=n.value,e!=null&&_i(t,!!n.multiple,e,!1)}};B_=Jd;V_=Vr;var hI={usingClientEntryPoint:!1,Events:[Ao,ci,Qa,U_,z_,Jd]},Cs={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dI={bundleType:Cs.bundleType,version:Cs.version,rendererPackageName:Cs.rendererPackageName,rendererConfig:Cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=W_(t),t===null?null:t.stateNode},findFiberByHostInstance:Cs.findFiberByHostInstance||uI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{Ga=Sl.inject(dI),Yt=Sl}catch{}}_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hI;_t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!of(e))throw Error(z(200));return aI(t,e,null,n)};_t.createRoot=function(t,e){if(!of(t))throw Error(z(299));var n=!1,r="",i=C0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=nf(t,1,!1,null,null,n,!1,r,i),t[In]=e.current,so(t.nodeType===8?t.parentNode:t),new sf(e)};_t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=W_(e),t=t===null?null:t.stateNode,t};_t.flushSync=function(t){return Vr(t)};_t.hydrate=function(t,e,n){if(!su(e))throw Error(z(200));return ou(null,t,e,!0,n)};_t.hydrateRoot=function(t,e,n){if(!of(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=C0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=S0(e,null,t,1,n??null,i,!1,s,o),t[In]=e.current,so(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new iu(e)};_t.render=function(t,e,n){if(!su(e))throw Error(z(200));return ou(null,t,e,!1,n)};_t.unmountComponentAtNode=function(t){if(!su(t))throw Error(z(40));return t._reactRootContainer?(Vr(function(){ou(null,null,t,!1,function(){t._reactRootContainer=null,t[In]=null})}),!0):!1};_t.unstable_batchedUpdates=Jd;_t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!su(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return ou(t,e,n,!1,r)};_t.version="18.3.1-next-f1338f8080-20240426";function I0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I0)}catch(t){console.error(t)}}I0(),I_.exports=_t;var fI=I_.exports,Cg=fI;$c.createRoot=Cg.createRoot,$c.hydrateRoot=Cg.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mo.apply(this,arguments)}var Xn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xn||(Xn={}));const Ig="popstate";function pI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return jh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ga(i)}return gI(e,n,null,t)}function ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function lf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mI(){return Math.random().toString(36).substr(2,8)}function kg(t,e){return{usr:t.state,key:t.key,idx:e}}function jh(t,e,n,r){return n===void 0&&(n=null),mo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?qi(e):e,{state:n,key:e&&e.key||r||mI()})}function ga(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function qi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function gI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Xn.Pop,u=null,h=m();h==null&&(h=0,o.replaceState(mo({},o.state,{idx:h}),""));function m(){return(o.state||{idx:null}).idx}function p(){a=Xn.Pop;let A=m(),w=A==null?null:A-h;h=A,u&&u({action:a,location:x.location,delta:w})}function g(A,w){a=Xn.Push;let _=jh(x.location,A,w);h=m()+1;let S=kg(_,h),O=x.createHref(_);try{o.pushState(S,"",O)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(O)}s&&u&&u({action:a,location:x.location,delta:1})}function E(A,w){a=Xn.Replace;let _=jh(x.location,A,w);h=m();let S=kg(_,h),O=x.createHref(_);o.replaceState(S,"",O),s&&u&&u({action:a,location:x.location,delta:0})}function T(A){let w=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof A=="string"?A:ga(A);return _=_.replace(/ $/,"%20"),ye(w,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,w)}let x={get action(){return a},get location(){return t(i,o)},listen(A){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ig,p),u=A,()=>{i.removeEventListener(Ig,p),u=null}},createHref(A){return e(i,A)},createURL:T,encodeLocation(A){let w=T(A);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:E,go(A){return o.go(A)}};return x}var Tg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Tg||(Tg={}));function vI(t,e,n){return n===void 0&&(n="/"),_I(t,e,n)}function _I(t,e,n,r){let i=typeof e=="string"?qi(e):e,s=ji(i.pathname||"/",n);if(s==null)return null;let o=k0(t);yI(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let h=PI(s);a=xI(o[u],h)}return a}function k0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ye(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=or([r,u.relativePath]),m=n.concat(u);s.children&&s.children.length>0&&(ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),k0(s.children,e,m,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:TI(h,s.index),routesMeta:m})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of T0(s.path))i(s,o,u)}),e}function T0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=T0(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function yI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:NI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const wI=/^:[\w-]+$/,EI=3,SI=2,CI=1,II=10,kI=-2,Ng=t=>t==="*";function TI(t,e){let n=t.split("/"),r=n.length;return n.some(Ng)&&(r+=kI),e&&(r+=SI),n.filter(i=>!Ng(i)).reduce((i,s)=>i+(wI.test(s)?EI:s===""?CI:II),r)}function NI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function xI(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],h=a===r.length-1,m=s==="/"?e:e.slice(s.length)||"/",p=Fh({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},m),g=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:or([s,p.pathname]),pathnameBase:LI(or([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=or([s,p.pathnameBase]))}return o}function Fh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=RI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((h,m,p)=>{let{paramName:g,isOptional:E}=m;if(g==="*"){let x=a[p]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const T=a[p];return E&&!T?h[g]=void 0:h[g]=(T||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function RI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),lf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function PI(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return lf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ji(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const AI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,OI=t=>AI.test(t);function bI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?qi(t):t,s;if(n)if(OI(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),lf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=xg(n.substring(1),"/"):s=xg(n,e)}else s=e;return{pathname:s,search:MI(r),hash:jI(i)}}function xg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function kc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function DI(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function af(t,e){let n=DI(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function uf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=qi(t):(i=mo({},t),ye(!i.pathname||!i.pathname.includes("?"),kc("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),kc("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),kc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}a=p>=0?e[p]:"/"}let u=bI(i,a),h=o&&o!=="/"&&o.endsWith("/"),m=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||m)&&(u.pathname+="/"),u}const or=t=>t.join("/").replace(/\/\/+/g,"/"),LI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),MI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,jI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function FI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const N0=["post","put","patch","delete"];new Set(N0);const UI=["get",...N0];new Set(UI);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},go.apply(this,arguments)}const lu=D.createContext(null),x0=D.createContext(null),bn=D.createContext(null),au=D.createContext(null),Dn=D.createContext({outlet:null,matches:[],isDataRoute:!1}),R0=D.createContext(null);function zI(t,e){let{relative:n}=e===void 0?{}:e;Yi()||ye(!1);let{basename:r,navigator:i}=D.useContext(bn),{hash:s,pathname:o,search:a}=uu(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:or([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Yi(){return D.useContext(au)!=null}function Qi(){return Yi()||ye(!1),D.useContext(au).location}function P0(t){D.useContext(bn).static||D.useLayoutEffect(t)}function en(){let{isDataRoute:t}=D.useContext(Dn);return t?ZI():BI()}function BI(){Yi()||ye(!1);let t=D.useContext(lu),{basename:e,future:n,navigator:r}=D.useContext(bn),{matches:i}=D.useContext(Dn),{pathname:s}=Qi(),o=JSON.stringify(af(i,n.v7_relativeSplatPath)),a=D.useRef(!1);return P0(()=>{a.current=!0}),D.useCallback(function(h,m){if(m===void 0&&(m={}),!a.current)return;if(typeof h=="number"){r.go(h);return}let p=uf(h,JSON.parse(o),s,m.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:or([e,p.pathname])),(m.replace?r.replace:r.push)(p,m.state,m)},[e,r,o,s,t])}function cf(){let{matches:t}=D.useContext(Dn),e=t[t.length-1];return e?e.params:{}}function uu(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(bn),{matches:i}=D.useContext(Dn),{pathname:s}=Qi(),o=JSON.stringify(af(i,r.v7_relativeSplatPath));return D.useMemo(()=>uf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function VI(t,e){return HI(t,e)}function HI(t,e,n,r){Yi()||ye(!1);let{navigator:i}=D.useContext(bn),{matches:s}=D.useContext(Dn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=Qi(),m;if(e){var p;let A=typeof e=="string"?qi(e):e;u==="/"||(p=A.pathname)!=null&&p.startsWith(u)||ye(!1),m=A}else m=h;let g=m.pathname||"/",E=g;if(u!=="/"){let A=u.replace(/^\//,"").split("/");E="/"+g.replace(/^\//,"").split("/").slice(A.length).join("/")}let T=vI(t,{pathname:E}),x=qI(T&&T.map(A=>Object.assign({},A,{params:Object.assign({},a,A.params),pathname:or([u,i.encodeLocation?i.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?u:or([u,i.encodeLocation?i.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),s,n,r);return e&&x?D.createElement(au.Provider,{value:{location:go({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Xn.Pop}},x):x}function $I(){let t=JI(),e=FI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,null)}const WI=D.createElement($I,null);class GI extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(Dn.Provider,{value:this.props.routeContext},D.createElement(R0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function KI(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(lu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(Dn.Provider,{value:e},r)}function qI(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let m=o.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);m>=0||ye(!1),o=o.slice(0,Math.min(o.length,m+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let p=o[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=m),p.route.id){let{loaderData:g,errors:E}=n,T=p.route.loader&&g[p.route.id]===void 0&&(!E||E[p.route.id]===void 0);if(p.route.lazy||T){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((m,p,g)=>{let E,T=!1,x=null,A=null;n&&(E=a&&p.route.id?a[p.route.id]:void 0,x=p.route.errorElement||WI,u&&(h<0&&g===0?(ek("route-fallback"),T=!0,A=null):h===g&&(T=!0,A=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,g+1)),_=()=>{let S;return E?S=x:T?S=A:p.route.Component?S=D.createElement(p.route.Component,null):p.route.element?S=p.route.element:S=m,D.createElement(KI,{match:p,routeContext:{outlet:m,matches:w,isDataRoute:n!=null},children:S})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?D.createElement(GI,{location:n.location,revalidation:n.revalidation,component:x,error:E,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):_()},null)}var A0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(A0||{}),O0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(O0||{});function YI(t){let e=D.useContext(lu);return e||ye(!1),e}function QI(t){let e=D.useContext(x0);return e||ye(!1),e}function XI(t){let e=D.useContext(Dn);return e||ye(!1),e}function b0(t){let e=XI(),n=e.matches[e.matches.length-1];return n.route.id||ye(!1),n.route.id}function JI(){var t;let e=D.useContext(R0),n=QI(),r=b0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function ZI(){let{router:t}=YI(A0.UseNavigateStable),e=b0(O0.UseNavigateStable),n=D.useRef(!1);return P0(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,go({fromRouteId:e},s)))},[t,e])}const Rg={};function ek(t,e,n){Rg[t]||(Rg[t]=!0)}function tk(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function D0(t){let{to:e,replace:n,state:r,relative:i}=t;Yi()||ye(!1);let{future:s,static:o}=D.useContext(bn),{matches:a}=D.useContext(Dn),{pathname:u}=Qi(),h=en(),m=uf(e,af(a,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(m);return D.useEffect(()=>h(JSON.parse(p),{replace:n,state:r,relative:i}),[h,p,i,n,r]),null}function Wt(t){ye(!1)}function nk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Xn.Pop,navigator:s,static:o=!1,future:a}=t;Yi()&&ye(!1);let u=e.replace(/^\/*/,"/"),h=D.useMemo(()=>({basename:u,navigator:s,static:o,future:go({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=qi(r));let{pathname:m="/",search:p="",hash:g="",state:E=null,key:T="default"}=r,x=D.useMemo(()=>{let A=ji(m,u);return A==null?null:{location:{pathname:A,search:p,hash:g,state:E,key:T},navigationType:i}},[u,m,p,g,E,T,i]);return x==null?null:D.createElement(bn.Provider,{value:h},D.createElement(au.Provider,{children:n,value:x}))}function rk(t){let{children:e,location:n}=t;return VI(Uh(e),n)}new Promise(()=>{});function Uh(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,Uh(r.props.children,s));return}r.type!==Wt&&ye(!1),!r.props.index||!r.props.children||ye(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Uh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},va.apply(this,arguments)}function L0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ik(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function sk(t,e){return t.button===0&&(!e||e==="_self")&&!ik(t)}const ok=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],lk=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],ak="6";try{window.__reactRouterVersion=ak}catch{}const uk=D.createContext({isTransitioning:!1}),ck="startTransition",Pg=nS[ck];function hk(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=pI({window:i,v5Compat:!0}));let o=s.current,[a,u]=D.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},m=D.useCallback(p=>{h&&Pg?Pg(()=>u(p)):u(p)},[u,h]);return D.useLayoutEffect(()=>o.listen(m),[o,m]),D.useEffect(()=>tk(r),[r]),D.createElement(nk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const dk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pk=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:h,preventScrollReset:m,viewTransition:p}=e,g=L0(e,ok),{basename:E}=D.useContext(bn),T,x=!1;if(typeof h=="string"&&fk.test(h)&&(T=h,dk))try{let S=new URL(window.location.href),O=h.startsWith("//")?new URL(S.protocol+h):new URL(h),F=ji(O.pathname,E);O.origin===S.origin&&F!=null?h=F+O.search+O.hash:x=!0}catch{}let A=zI(h,{relative:i}),w=vk(h,{replace:o,state:a,target:u,preventScrollReset:m,relative:i,viewTransition:p});function _(S){r&&r(S),S.defaultPrevented||w(S)}return D.createElement("a",va({},g,{href:T||A,onClick:x||s?r:_,ref:n,target:u}))}),mk=D.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:u,viewTransition:h,children:m}=e,p=L0(e,lk),g=uu(u,{relative:p.relative}),E=Qi(),T=D.useContext(x0),{navigator:x,basename:A}=D.useContext(bn),w=T!=null&&_k(g)&&h===!0,_=x.encodeLocation?x.encodeLocation(g).pathname:g.pathname,S=E.pathname,O=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;i||(S=S.toLowerCase(),O=O?O.toLowerCase():null,_=_.toLowerCase()),O&&A&&(O=ji(O,A)||O);const F=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let U=S===_||!o&&S.startsWith(_)&&S.charAt(F)==="/",I=O!=null&&(O===_||!o&&O.startsWith(_)&&O.charAt(_.length)==="/"),y={isActive:U,isPending:I,isTransitioning:w},C=U?r:void 0,N;typeof s=="function"?N=s(y):N=[s,U?"active":null,I?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let P=typeof a=="function"?a(y):a;return D.createElement(pk,va({},p,{"aria-current":C,className:N,ref:n,style:P,to:u,viewTransition:h}),typeof m=="function"?m(y):m)});var zh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(zh||(zh={}));var Ag;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ag||(Ag={}));function gk(t){let e=D.useContext(lu);return e||ye(!1),e}function vk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,u=en(),h=Qi(),m=uu(t,{relative:o});return D.useCallback(p=>{if(sk(p,n)){p.preventDefault();let g=r!==void 0?r:ga(h)===ga(m);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[h,u,m,r,i,n,t,s,o,a])}function _k(t,e){e===void 0&&(e={});let n=D.useContext(uk);n==null&&ye(!1);let{basename:r}=gk(zh.useViewTransitionState),i=uu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=ji(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ji(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Fh(i.pathname,o)!=null||Fh(i.pathname,s)!=null}const yk={},Og=t=>{let e;const n=new Set,r=(m,p)=>{const g=typeof m=="function"?m(e):m;if(!Object.is(g,e)){const E=e;e=p??(typeof g!="object"||g===null)?g:Object.assign({},e,g),n.forEach(T=>T(e,E))}},i=()=>e,u={setState:r,getState:i,getInitialState:()=>h,subscribe:m=>(n.add(m),()=>n.delete(m)),destroy:()=>{(yk?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},h=e=t(r,i,u);return u},wk=t=>t?Og(t):Og;var M0={exports:{}},j0={},F0={exports:{}},U0={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fi=D;function Ek(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Sk=typeof Object.is=="function"?Object.is:Ek,Ck=Fi.useState,Ik=Fi.useEffect,kk=Fi.useLayoutEffect,Tk=Fi.useDebugValue;function Nk(t,e){var n=e(),r=Ck({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return kk(function(){i.value=n,i.getSnapshot=e,Tc(i)&&s({inst:i})},[t,n,e]),Ik(function(){return Tc(i)&&s({inst:i}),t(function(){Tc(i)&&s({inst:i})})},[t]),Tk(n),n}function Tc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Sk(t,n)}catch{return!0}}function xk(t,e){return e()}var Rk=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?xk:Nk;U0.useSyncExternalStore=Fi.useSyncExternalStore!==void 0?Fi.useSyncExternalStore:Rk;F0.exports=U0;var Pk=F0.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cu=D,Ak=Pk;function Ok(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bk=typeof Object.is=="function"?Object.is:Ok,Dk=Ak.useSyncExternalStore,Lk=cu.useRef,Mk=cu.useEffect,jk=cu.useMemo,Fk=cu.useDebugValue;j0.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=Lk(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=jk(function(){function u(E){if(!h){if(h=!0,m=E,E=r(E),i!==void 0&&o.hasValue){var T=o.value;if(i(T,E))return p=T}return p=E}if(T=p,bk(m,E))return T;var x=r(E);return i!==void 0&&i(T,x)?(m=E,T):(m=E,p=x)}var h=!1,m,p,g=n===void 0?null:n;return[function(){return u(e())},g===null?void 0:function(){return u(g())}]},[e,n,r,i]);var a=Dk(t,s[0],s[1]);return Mk(function(){o.hasValue=!0,o.value=a},[a]),Fk(a),a};M0.exports=j0;var Uk=M0.exports;const zk=d_(Uk),z0={},{useDebugValue:Bk}=md,{useSyncExternalStoreWithSelector:Vk}=zk;let bg=!1;const Hk=t=>t;function $k(t,e=Hk,n){(z0?"production":void 0)!=="production"&&n&&!bg&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),bg=!0);const r=Vk(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return Bk(r),r}const Dg=t=>{(z0?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?wk(t):t,n=(r,i)=>$k(e,r,i);return Object.assign(n,e),n},hf=t=>t?Dg(t):Dg,Wk={};function Gk(t,e){let n;try{n=t()}catch{return}return{getItem:i=>{var s;const o=u=>u===null?null:JSON.parse(u,void 0),a=(s=n.getItem(i))!=null?s:null;return a instanceof Promise?a.then(o):o(a)},setItem:(i,s)=>n.setItem(i,JSON.stringify(s,void 0)),removeItem:i=>n.removeItem(i)}}const vo=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return vo(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return vo(r)(n)}}}},Kk=(t,e)=>(n,r,i)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:A=>A,version:0,merge:(A,w)=>({...w,...A}),...e},o=!1;const a=new Set,u=new Set;let h;try{h=s.getStorage()}catch{}if(!h)return t((...A)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...A)},r,i);const m=vo(s.serialize),p=()=>{const A=s.partialize({...r()});let w;const _=m({state:A,version:s.version}).then(S=>h.setItem(s.name,S)).catch(S=>{w=S});if(w)throw w;return _},g=i.setState;i.setState=(A,w)=>{g(A,w),p()};const E=t((...A)=>{n(...A),p()},r,i);let T;const x=()=>{var A;if(!h)return;o=!1,a.forEach(_=>_(r()));const w=((A=s.onRehydrateStorage)==null?void 0:A.call(s,r()))||void 0;return vo(h.getItem.bind(h))(s.name).then(_=>{if(_)return s.deserialize(_)}).then(_=>{if(_)if(typeof _.version=="number"&&_.version!==s.version){if(s.migrate)return s.migrate(_.state,_.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return _.state}).then(_=>{var S;return T=s.merge(_,(S=r())!=null?S:E),n(T,!0),p()}).then(()=>{w==null||w(T,void 0),o=!0,u.forEach(_=>_(T))}).catch(_=>{w==null||w(void 0,_)})};return i.persist={setOptions:A=>{s={...s,...A},A.getStorage&&(h=A.getStorage())},clearStorage:()=>{h==null||h.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>x(),hasHydrated:()=>o,onHydrate:A=>(a.add(A),()=>{a.delete(A)}),onFinishHydration:A=>(u.add(A),()=>{u.delete(A)})},x(),T||E},qk=(t,e)=>(n,r,i)=>{let s={storage:Gk(()=>localStorage),partialize:x=>x,version:0,merge:(x,A)=>({...A,...x}),...e},o=!1;const a=new Set,u=new Set;let h=s.storage;if(!h)return t((...x)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...x)},r,i);const m=()=>{const x=s.partialize({...r()});return h.setItem(s.name,{state:x,version:s.version})},p=i.setState;i.setState=(x,A)=>{p(x,A),m()};const g=t((...x)=>{n(...x),m()},r,i);i.getInitialState=()=>g;let E;const T=()=>{var x,A;if(!h)return;o=!1,a.forEach(_=>{var S;return _((S=r())!=null?S:g)});const w=((A=s.onRehydrateStorage)==null?void 0:A.call(s,(x=r())!=null?x:g))||void 0;return vo(h.getItem.bind(h))(s.name).then(_=>{if(_)if(typeof _.version=="number"&&_.version!==s.version){if(s.migrate)return[!0,s.migrate(_.state,_.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,_.state];return[!1,void 0]}).then(_=>{var S;const[O,F]=_;if(E=s.merge(F,(S=r())!=null?S:g),n(E,!0),O)return m()}).then(()=>{w==null||w(E,void 0),E=r(),o=!0,u.forEach(_=>_(E))}).catch(_=>{w==null||w(void 0,_)})};return i.persist={setOptions:x=>{s={...s,...x},x.storage&&(h=x.storage)},clearStorage:()=>{h==null||h.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>T(),hasHydrated:()=>o,onHydrate:x=>(a.add(x),()=>{a.delete(x)}),onFinishHydration:x=>(u.add(x),()=>{u.delete(x)})},s.skipHydration||T(),E||g},Yk=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((Wk?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Kk(t,e)):qk(t,e),Qk=Yk,Ln=hf(Qk((t,e)=>({user:null,userProfile:null,isAuthenticated:!1,isLoading:!0,setUser:n=>t({user:n,isAuthenticated:!!n}),setUserProfile:n=>t({userProfile:n}),setLoading:n=>t({isLoading:n}),logout:()=>t({user:null,userProfile:null,isAuthenticated:!1})}),{name:"dreamledge-auth",partialize:t=>({user:t.user,isAuthenticated:t.isAuthenticated})})),df=hf((t,e)=>({currentBattle:null,participants:[],battlePhase:"idle",round:1,timeRemaining:0,isHost:!1,userRole:null,userSlot:null,setCurrentBattle:n=>t({currentBattle:n}),setParticipants:n=>t({participants:n}),setBattlePhase:n=>t({battlePhase:n}),setRound:n=>t({round:n}),setTimeRemaining:n=>t({timeRemaining:n}),setIsHost:n=>t({isHost:n}),setUserRole:n=>t({userRole:n}),setUserSlot:n=>t({userSlot:n}),resetBattle:()=>t({currentBattle:null,participants:[],battlePhase:"idle",round:1,timeRemaining:0,isHost:!1,userRole:null,userSlot:null})})),hu=hf(t=>({isSidebarOpen:!1,isGifPickerOpen:!1,activeModal:null,notifications:[],toggleSidebar:()=>t(e=>({isSidebarOpen:!e.isSidebarOpen})),closeSidebar:()=>t({isSidebarOpen:!1}),toggleGifPicker:()=>t(e=>({isGifPickerOpen:!e.isGifPickerOpen})),closeGifPicker:()=>t({isGifPickerOpen:!1}),openModal:e=>t({activeModal:e}),closeModal:()=>t({activeModal:null}),addNotification:e=>t(n=>({notifications:[...n.notifications,{id:Date.now(),...e}]})),removeNotification:e=>t(n=>({notifications:n.notifications.filter(r=>r.id!==e)}))}));/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),K=(t,e)=>{const n=D.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:u,...h},m)=>D.createElement("svg",{ref:m,...Xk,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${Jk(t)}`,a].join(" "),...h},[...e.map(([p,g])=>D.createElement(p,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=K("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=K("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=K("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=K("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=K("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=K("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=K("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=K("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=K("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=K("Gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=K("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=K("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=K("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=K("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=K("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=K("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=K("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=K("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=K("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=K("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=K("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=K("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=K("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=K("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=K("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=K("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=K("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=K("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=K("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=K("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=K("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=K("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=K("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=K("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=K("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=K("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=K("VideoOff",[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8",key:"ubwiq0"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z",key:"1l10zd"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=K("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=K("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=K("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=K("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function yT(){const{isAuthenticated:t,logout:e}=Ln(),{closeSidebar:n}=hu(),r=en(),i=()=>{e(),r("/"),n()},s=[{path:"/lobby",icon:lT,label:"Arena"},{path:"/leaderboard",icon:mf,label:"Rank"},{path:"/messages",icon:V0,label:"Messages"},{path:"/profile",icon:gf,label:"Profile"}];return d.jsx(d.Fragment,{children:t&&d.jsxs("div",{className:"mobile-nav",children:[s.map(o=>d.jsxs(mk,{to:o.path,className:({isActive:a})=>`mobile-nav-item ${a?"active":""}`,children:[d.jsx(o.icon,{size:24}),d.jsx("span",{children:o.label})]},o.path)),d.jsxs("button",{onClick:i,className:"mobile-nav-item mobile-logout",children:[d.jsx(cT,{size:24}),d.jsx("span",{children:"Out"})]})]})})}var Ug={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw Xi(e)},Xi=function(t){return new Error("Firebase Database ("+K0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,m=s>>2,p=(s&3)<<4|a>>4;let g=(a&15)<<2|h>>6,E=h&63;u||(E=64,o||(g=64)),r.push(n[m],n[p],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(q0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||h==null||p==null)throw new ET;const g=s<<2|a>>4;if(r.push(g),h!==64){const E=a<<4&240|h>>2;if(r.push(E),p!==64){const T=h<<6&192|p;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ET extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Y0=function(t){const e=q0(t);return vf.encodeByteArray(e,!0)},ya=function(t){return Y0(t).replace(/\./g,"")},wa=function(t){try{return vf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t){return Q0(void 0,t)}function Q0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!CT(n)||(t[n]=Q0(t[n],e[n]));return t}function CT(t){return t!=="__proto__"}/**
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
 */function IT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kT=()=>IT().__FIREBASE_DEFAULTS__,TT=()=>{if(typeof process>"u"||typeof Ug>"u")return;const t=Ug.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},NT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wa(t[1]);return e&&JSON.parse(e)},_f=()=>{try{return kT()||TT()||NT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},X0=t=>{var e,n;return(n=(e=_f())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yf=t=>{const e=X0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},J0=()=>{var t;return(t=_f())===null||t===void 0?void 0:t.config},Z0=t=>{var e;return(e=_f())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function wf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ya(JSON.stringify(n)),ya(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ef(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function xT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ew(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PT(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function AT(){return K0.NODE_ADMIN===!0}function OT(){try{return typeof indexedDB=="object"}catch{return!1}}function bT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="FirebaseError";class tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DT,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Do.prototype.create)}}class Do{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?LT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new tn(i,a,r)}}function LT(t,e){return t.replace(MT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const MT=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t){return JSON.parse(t)}function be(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=_o(wa(s[0])||""),n=_o(wa(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},jT=function(t){const e=tw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},FT=function(t){const e=tw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ui(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Hh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ea(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Sa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(zg(s)&&zg(o)){if(!Sa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)r[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const g=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],h,m;for(let p=0;p<80;p++){p<40?p<20?(h=a^s&(o^a),m=1518500249):(h=s^o^a,m=1859775393):p<60?(h=s&o|a&(s|o),m=2400959708):(h=s^o^a,m=3395469782);const g=(i<<5|i>>>27)+h+u+m+r[p]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function zT(t,e){const n=new BT(t,e);return n.subscribe.bind(n)}class BT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");VT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=xc),i.error===void 0&&(i.error=xc),i.complete===void 0&&(i.complete=xc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xc(){}function Sf(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function wt(t){return t&&t._delegate?t._delegate:t}class Nn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nr="[DEFAULT]";/**
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
 */class $T{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new du;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GT(e))try{this.getOrInitializeService({instanceIdentifier:Nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nr){return this.instances.has(e)}getOptions(e=Nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nr){return this.component?this.component.multipleInstances?e:Nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WT(t){return t===Nr?void 0:t}function GT(t){return t.instantiationMode==="EAGER"}/**
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
 */class KT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $T(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const qT={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},YT=re.INFO,QT={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},XT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=QT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pu{constructor(e){this.name=e,this._logLevel=YT,this._logHandler=XT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const JT=(t,e)=>e.some(n=>t instanceof n);let Bg,Vg;function ZT(){return Bg||(Bg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eN(){return Vg||(Vg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nw=new WeakMap,$h=new WeakMap,rw=new WeakMap,Rc=new WeakMap,Cf=new WeakMap;function tN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ur(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nw.set(n,t)}).catch(()=>{}),Cf.set(e,t),e}function nN(t){if($h.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});$h.set(t,e)}let Wh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $h.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rN(t){Wh=t(Wh)}function iN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pc(this),e,...n);return rw.set(r,e.sort?e.sort():[e]),ur(r)}:eN().includes(t)?function(...e){return t.apply(Pc(this),e),ur(nw.get(this))}:function(...e){return ur(t.apply(Pc(this),e))}}function sN(t){return typeof t=="function"?iN(t):(t instanceof IDBTransaction&&nN(t),JT(t,ZT())?new Proxy(t,Wh):t)}function ur(t){if(t instanceof IDBRequest)return tN(t);if(Rc.has(t))return Rc.get(t);const e=sN(t);return e!==t&&(Rc.set(t,e),Cf.set(e,t)),e}const Pc=t=>Cf.get(t);function oN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ur(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ur(o.result),u.oldVersion,u.newVersion,ur(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const lN=["get","getKey","getAll","getAllKeys","count"],aN=["put","add","delete","clear"],Ac=new Map;function Hg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ac.get(e))return Ac.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=aN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lN.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&u.done]))[0]};return Ac.set(e,s),s}rN(t=>({...t,get:(e,n,r)=>Hg(e,n)||t.get(e,n,r),has:(e,n)=>!!Hg(e,n)||t.has(e,n)}));/**
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
 */class uN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gh="@firebase/app",$g="0.10.13";/**
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
 */const xn=new pu("@firebase/app"),hN="@firebase/app-compat",dN="@firebase/analytics-compat",fN="@firebase/analytics",pN="@firebase/app-check-compat",mN="@firebase/app-check",gN="@firebase/auth",vN="@firebase/auth-compat",_N="@firebase/database",yN="@firebase/data-connect",wN="@firebase/database-compat",EN="@firebase/functions",SN="@firebase/functions-compat",CN="@firebase/installations",IN="@firebase/installations-compat",kN="@firebase/messaging",TN="@firebase/messaging-compat",NN="@firebase/performance",xN="@firebase/performance-compat",RN="@firebase/remote-config",PN="@firebase/remote-config-compat",AN="@firebase/storage",ON="@firebase/storage-compat",bN="@firebase/firestore",DN="@firebase/vertexai-preview",LN="@firebase/firestore-compat",MN="firebase",jN="10.14.1";/**
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
 */const Kh="[DEFAULT]",FN={[Gh]:"fire-core",[hN]:"fire-core-compat",[fN]:"fire-analytics",[dN]:"fire-analytics-compat",[mN]:"fire-app-check",[pN]:"fire-app-check-compat",[gN]:"fire-auth",[vN]:"fire-auth-compat",[_N]:"fire-rtdb",[yN]:"fire-data-connect",[wN]:"fire-rtdb-compat",[EN]:"fire-fn",[SN]:"fire-fn-compat",[CN]:"fire-iid",[IN]:"fire-iid-compat",[kN]:"fire-fcm",[TN]:"fire-fcm-compat",[NN]:"fire-perf",[xN]:"fire-perf-compat",[RN]:"fire-rc",[PN]:"fire-rc-compat",[AN]:"fire-gcs",[ON]:"fire-gcs-compat",[bN]:"fire-fst",[LN]:"fire-fst-compat",[DN]:"fire-vertex","fire-js":"fire-js",[MN]:"fire-js-all"};/**
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
 */const Ca=new Map,UN=new Map,qh=new Map;function Wg(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pr(t){const e=t.name;if(qh.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;qh.set(e,t);for(const n of Ca.values())Wg(n,t);for(const n of UN.values())Wg(n,t);return!0}function Lo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t.settings!==void 0}/**
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
 */const zN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cr=new Do("app","Firebase",zN);/**
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
 */class BN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}/**
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
 */const wr=jN;function iw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Kh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw cr.create("bad-app-name",{appName:String(i)});if(n||(n=J0()),!n)throw cr.create("no-options");const s=Ca.get(i);if(s){if(Sa(n,s.options)&&Sa(r,s.config))return s;throw cr.create("duplicate-app",{appName:i})}const o=new KT(i);for(const u of qh.values())o.addComponent(u);const a=new BN(n,r,o);return Ca.set(i,a),a}function mu(t=Kh){const e=Ca.get(t);if(!e&&t===Kh&&J0())return iw();if(!e)throw cr.create("no-app",{appName:t});return e}function Tt(t,e,n){var r;let i=(r=FN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(a.join(" "));return}pr(new Nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const VN="firebase-heartbeat-database",HN=1,yo="firebase-heartbeat-store";let Oc=null;function sw(){return Oc||(Oc=oN(VN,HN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yo)}catch(n){console.warn(n)}}}}).catch(t=>{throw cr.create("idb-open",{originalErrorMessage:t.message})})),Oc}async function $N(t){try{const n=(await sw()).transaction(yo),r=await n.objectStore(yo).get(ow(t));return await n.done,r}catch(e){if(e instanceof tn)xn.warn(e.message);else{const n=cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function Gg(t,e){try{const r=(await sw()).transaction(yo,"readwrite");await r.objectStore(yo).put(e,ow(t)),await r.done}catch(n){if(n instanceof tn)xn.warn(n.message);else{const r=cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function ow(t){return`${t.name}!${t.options.appId}`}/**
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
 */const WN=1024,GN=30*24*60*60*1e3;class KN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Kg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=GN}),this._storage.overwrite(this._heartbeatsCache))}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Kg(),{heartbeatsToSend:r,unsentEntries:i}=qN(this._heartbeatsCache.heartbeats),s=ya(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return xn.warn(n),""}}}function Kg(){return new Date().toISOString().substring(0,10)}function qN(t,e=WN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),qg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OT()?bT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $N(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qg(t){return ya(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function QN(t){pr(new Nn("platform-logger",e=>new uN(e),"PRIVATE")),pr(new Nn("heartbeat",e=>new KN(e),"PRIVATE")),Tt(Gh,$g,t),Tt(Gh,$g,"esm2017"),Tt("fire-js","")}QN("");var XN="firebase",JN="10.14.1";/**
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
 */Tt(XN,JN,"app");function If(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function lw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZN=lw,aw=new Do("auth","Firebase",lw());/**
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
 */const Ia=new pu("@firebase/auth");function ex(t,...e){Ia.logLevel<=re.WARN&&Ia.warn(`Auth (${wr}): ${t}`,...e)}function Bl(t,...e){Ia.logLevel<=re.ERROR&&Ia.error(`Auth (${wr}): ${t}`,...e)}/**
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
 */function Jt(t,...e){throw Tf(t,...e)}function Bt(t,...e){return Tf(t,...e)}function kf(t,e,n){const r=Object.assign(Object.assign({},ZN()),{[e]:n});return new Do("auth","Firebase",r).create(e,{appName:t.name})}function jr(t){return kf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tx(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Jt(t,"argument-error"),kf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return aw.create(t,...e)}function G(t,e,...n){if(!t)throw Tf(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bl(e),new Error(e)}function Rn(t,e){t||vn(e)}/**
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
 */function Yh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nx(){return Yg()==="http:"||Yg()==="https:"}function Yg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function rx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nx()||RT()||"connection"in navigator)?navigator.onLine:!0}function ix(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ef()||ew()}get(){return rx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nf(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class uw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ox=new Mo(3e4,6e4);function xf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zi(t,e,n,r,i={}){return cw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ji(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return xT()||(h.referrerPolicy="no-referrer"),uw.fetch()(hw(t,t.config.apiHost,n,a),h)})}async function cw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sx),e);try{const i=new ax(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Cl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,h]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Cl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Cl(t,"user-disabled",o);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw kf(t,m,h);Jt(t,m)}}catch(i){if(i instanceof tn)throw i;Jt(t,"network-request-failed",{message:String(i)})}}async function lx(t,e,n,r,i={}){const s=await Zi(t,e,n,r,i);return"mfaPendingCredential"in s&&Jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function hw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Nf(t.config,i):`${t.config.apiScheme}://${i}`}class ax{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),ox.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Bt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function ux(t,e){return Zi(t,"POST","/v1/accounts:delete",e)}async function dw(t,e){return Zi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cx(t,e=!1){const n=wt(t),r=await n.getIdToken(e),i=Rf(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Hs(bc(i.auth_time)),issuedAtTime:Hs(bc(i.iat)),expirationTime:Hs(bc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bc(t){return Number(t)*1e3}function Rf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bl("JWT malformed, contained fewer than 3 sections"),null;try{const i=wa(n);return i?JSON.parse(i):(Bl("Failed to decode base64 JWT payload"),null)}catch(i){return Bl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Qg(t){const e=Rf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tn&&hx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ka(t){var e;const n=t.auth,r=await t.getIdToken(),i=await wo(t,dw(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fw(s.providerUserInfo):[],a=px(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),m=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Qh(s.createdAt,s.lastLoginAt),isAnonymous:m};Object.assign(t,p)}async function fx(t){const e=wt(t);await ka(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function px(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fw(t){return t.map(e=>{var{providerId:n}=e,r=If(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function mx(t,e){const n=await cw(t,{},async()=>{const r=Ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=hw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gx(t,e){return Zi(t,"POST","/v2/accounts:revokeToken",xf(t,e))}/**
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
 */class Ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Qg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await mx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ii;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ii,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
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
 */function Bn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=If(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await wo(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cx(this,e)}reload(){return fx(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ka(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(jr(this.auth));const e=await this.getIdToken();return await wo(this,ux(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,h,m;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:S,emailVerified:O,isAnonymous:F,providerData:U,stsTokenManager:I}=n;G(S&&I,e,"internal-error");const y=Ii.fromJSON(this.name,I);G(typeof S=="string",e,"internal-error"),Bn(p,e.name),Bn(g,e.name),G(typeof O=="boolean",e,"internal-error"),G(typeof F=="boolean",e,"internal-error"),Bn(E,e.name),Bn(T,e.name),Bn(x,e.name),Bn(A,e.name),Bn(w,e.name),Bn(_,e.name);const C=new _n({uid:S,auth:e,email:g,emailVerified:O,displayName:p,isAnonymous:F,photoURL:T,phoneNumber:E,tenantId:x,stsTokenManager:y,createdAt:w,lastLoginAt:_});return U&&Array.isArray(U)&&(C.providerData=U.map(N=>Object.assign({},N))),A&&(C._redirectEventId=A),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ii;i.updateFromServerResponse(n);const s=new _n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ka(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?fw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ii;a.updateFromIdToken(r);const u=new _n({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Qh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Xg=new Map;function yn(t){Rn(t instanceof Function,"Expected a class definition");let e=Xg.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xg.set(t,e),e)}/**
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
 */class pw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pw.type="NONE";const Jg=pw;/**
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
 */function Vl(t,e,n){return`firebase:${t}:${e}:${n}`}class ki{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Vl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Vl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ki(yn(Jg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||yn(Jg);const o=Vl(r,e.config.apiKey,e.name);let a=null;for(const h of n)try{const m=await h._get(o);if(m){const p=_n._fromJSON(e,m);h!==s&&(a=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ki(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new ki(s,e,r))}}/**
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
 */function Zg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_w(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ww(e))return"Blackberry";if(Ew(e))return"Webos";if(gw(e))return"Safari";if((e.includes("chrome/")||vw(e))&&!e.includes("edge/"))return"Chrome";if(yw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mw(t=Ze()){return/firefox\//i.test(t)}function gw(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vw(t=Ze()){return/crios\//i.test(t)}function _w(t=Ze()){return/iemobile/i.test(t)}function yw(t=Ze()){return/android/i.test(t)}function ww(t=Ze()){return/blackberry/i.test(t)}function Ew(t=Ze()){return/webos/i.test(t)}function Pf(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vx(t=Ze()){var e;return Pf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _x(){return PT()&&document.documentMode===10}function Sw(t=Ze()){return Pf(t)||yw(t)||Ew(t)||ww(t)||/windows phone/i.test(t)||_w(t)}/**
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
 */function Cw(t,e=[]){let n;switch(t){case"Browser":n=Zg(Ze());break;case"Worker":n=`${Zg(Ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wr}/${r}`}/**
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
 */class yx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function wx(t,e={}){return Zi(t,"GET","/v2/passwordPolicy",xf(t,e))}/**
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
 */const Ex=6;class Sx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ex,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Cx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ev(this),this.idTokenSubscription=new ev(this),this.beforeStateQueue=new yx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ki.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dw(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(gn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ka(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ix()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(jr(this));const n=e?wt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(jr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(jr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wx(this),n=new Sx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Do("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await gx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await ki.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ex(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gu(t){return wt(t)}class ev{constructor(e){this.auth=e,this.observer=null,this.addObserver=zT(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Af={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ix(t){Af=t}function kx(t){return Af.loadJS(t)}function Tx(){return Af.gapiScript}function Nx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function xx(t,e){const n=Lo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Sa(s,e??{}))return i;Jt(i,"already-initialized")}return n.initialize({options:e})}function Rx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Px(t,e,n){const r=gu(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Iw(e),{host:o,port:a}=Ax(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Ox()}function Iw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ax(t){const e=Iw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:tv(o)}}}function tv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ox(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class kw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
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
 */async function Ti(t,e){return lx(t,"POST","/v1/accounts:signInWithIdp",xf(t,e))}/**
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
 */const bx="http://localhost";class Hr extends kw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=If(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Hr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ti(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ti(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ti(e,n)}buildRequest(){const e={requestUri:bx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ji(n)}return e}}/**
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
 */class Of{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jo extends Of{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gn extends jo{constructor(){super("facebook.com")}static credential(e){return Hr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
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
 */class fn extends jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
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
 */class Kn extends jo{constructor(){super("github.com")}static credential(e){return Hr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
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
 */class qn extends jo{constructor(){super("twitter.com")}static credential(e,n){return Hr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
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
 */class zi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _n._fromIdTokenResponse(e,r,i),o=nv(r);return new zi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=nv(r);return new zi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function nv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ta extends tn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ta.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ta(e,n,r,i)}}function Tw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ta._fromErrorAndOperation(t,s,e,r):s})}async function Dx(t,e,n=!1){const r=await wo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zi._forOperation(t,"link",r)}/**
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
 */async function Lx(t,e,n=!1){const{auth:r}=t;if(gn(r.app))return Promise.reject(jr(r));const i="reauthenticate";try{const s=await wo(t,Tw(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Rf(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),zi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),s}}/**
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
 */async function Mx(t,e,n=!1){if(gn(t.app))return Promise.reject(jr(t));const r="signIn",i=await Tw(t,r,e),s=await zi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function jx(t,e,n,r){return wt(t).onIdTokenChanged(e,n,r)}function Fx(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}const Na="__sak";/**
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
 */class Nw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Na,"1"),this.storage.removeItem(Na),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ux=1e3,zx=10;class xw extends Nw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_x()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ux)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xw.type="LOCAL";const Bx=xw;/**
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
 */class Rw extends Nw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rw.type="SESSION";const Pw=Rw;/**
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
 */function Vx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new vu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async h=>h(n.origin,s)),u=await Vx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vu.receivers=[];/**
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
 */function bf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Hx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const h=bf("",20);i.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(m),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(m),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Xt(){return window}function $x(t){Xt().location.href=t}/**
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
 */function Aw(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function Wx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Kx(){return Aw()?self:null}/**
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
 */const Ow="firebaseLocalStorageDb",qx=1,xa="firebaseLocalStorage",bw="fbase_key";class Fo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _u(t,e){return t.transaction([xa],e?"readwrite":"readonly").objectStore(xa)}function Yx(){const t=indexedDB.deleteDatabase(Ow);return new Fo(t).toPromise()}function Xh(){const t=indexedDB.open(Ow,qx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xa,{keyPath:bw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xa)?e(r):(r.close(),await Yx(),e(await Xh()))})})}async function rv(t,e,n){const r=_u(t,!0).put({[bw]:e,value:n});return new Fo(r).toPromise()}async function Qx(t,e){const n=_u(t,!1).get(e),r=await new Fo(n).toPromise();return r===void 0?null:r.value}function iv(t,e){const n=_u(t,!0).delete(e);return new Fo(n).toPromise()}const Xx=800,Jx=3;class Dw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Jx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Aw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vu._getInstance(Kx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Wx(),!this.activeServiceWorker)return;this.sender=new Hx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xh();return await rv(e,Na,"1"),await iv(e,Na),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Qx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>iv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=_u(i,!1).getAll();return new Fo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dw.type="LOCAL";const Zx=Dw;new Mo(3e4,6e4);/**
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
 */function Lw(t,e){return e?yn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Df extends kw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ti(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ti(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ti(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function e2(t){return Mx(t.auth,new Df(t),t.bypassAuthState)}function t2(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Lx(n,new Df(t),t.bypassAuthState)}async function n2(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Dx(n,new Df(t),t.bypassAuthState)}/**
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
 */class Mw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return e2;case"linkViaPopup":case"linkViaRedirect":return n2;case"reauthViaPopup":case"reauthViaRedirect":return t2;default:Jt(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const r2=new Mo(2e3,1e4);async function i2(t,e,n){if(gn(t.app))return Promise.reject(Bt(t,"operation-not-supported-in-this-environment"));const r=gu(t);tx(t,e,Of);const i=Lw(r,n);return new Or(r,"signInViaPopup",e,i).executeNotNull()}class Or extends Mw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=bf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,r2.get())};e()}}Or.currentPopupAction=null;/**
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
 */const s2="pendingRedirect",Hl=new Map;class o2 extends Mw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Hl.get(this.auth._key());if(!e){try{const r=await l2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Hl.set(this.auth._key(),e)}return this.bypassAuthState||Hl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function l2(t,e){const n=c2(e),r=u2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function a2(t,e){Hl.set(t._key(),e)}function u2(t){return yn(t._redirectPersistence)}function c2(t){return Vl(s2,t.config.apiKey,t.name)}async function h2(t,e,n=!1){if(gn(t.app))return Promise.reject(jr(t));const r=gu(t),i=Lw(r,e),o=await new o2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const d2=10*60*1e3;class f2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!p2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=d2&&this.cachedEventUids.clear(),this.cachedEventUids.has(sv(e))}saveEventToCache(e){this.cachedEventUids.add(sv(e)),this.lastProcessedEventTime=Date.now()}}function sv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function p2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jw(t);default:return!1}}/**
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
 */async function m2(t,e={}){return Zi(t,"GET","/v1/projects",e)}/**
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
 */const g2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,v2=/^https?/;async function _2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await m2(t);for(const n of e)try{if(y2(n))return}catch{}Jt(t,"unauthorized-domain")}function y2(t){const e=Yh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!v2.test(n))return!1;if(g2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const w2=new Mo(3e4,6e4);function ov(){const t=Xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function E2(t){return new Promise((e,n)=>{var r,i,s;function o(){ov(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ov(),n(Bt(t,"network-request-failed"))},timeout:w2.get()})}if(!((i=(r=Xt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Xt().gapi)===null||s===void 0)&&s.load)o();else{const a=Nx("iframefcb");return Xt()[a]=()=>{gapi.load?o():n(Bt(t,"network-request-failed"))},kx(`${Tx()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw $l=null,e})}let $l=null;function S2(t){return $l=$l||E2(t),$l}/**
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
 */const C2=new Mo(5e3,15e3),I2="__/auth/iframe",k2="emulator/auth/iframe",T2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},N2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function x2(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nf(e,k2):`https://${t.config.authDomain}/${I2}`,r={apiKey:e.apiKey,appName:t.name,v:wr},i=N2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ji(r).slice(1)}`}async function R2(t){const e=await S2(t),n=Xt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:x2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:T2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Bt(t,"network-request-failed"),a=Xt().setTimeout(()=>{s(o)},C2.get());function u(){Xt().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const P2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},A2=500,O2=600,b2="_blank",D2="http://localhost";class lv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function L2(t,e,n,r=A2,i=O2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},P2),{width:r.toString(),height:i.toString(),top:s,left:o}),h=Ze().toLowerCase();n&&(a=vw(h)?b2:n),mw(h)&&(e=e||D2,u.scrollbars="yes");const m=Object.entries(u).reduce((g,[E,T])=>`${g}${E}=${T},`,"");if(vx(h)&&a!=="_self")return M2(e||"",a),new lv(null);const p=window.open(e||"",a,m);G(p,t,"popup-blocked");try{p.focus()}catch{}return new lv(p)}function M2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const j2="__/auth/handler",F2="emulator/auth/handler",U2=encodeURIComponent("fac");async function av(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wr,eventId:i};if(e instanceof Of){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))o[m]=p}if(e instanceof jo){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const m of Object.keys(a))a[m]===void 0&&delete a[m];const u=await t._getAppCheckToken(),h=u?`#${U2}=${encodeURIComponent(u)}`:"";return`${z2(t)}?${Ji(a).slice(1)}${h}`}function z2({config:t}){return t.emulator?Nf(t,F2):`https://${t.authDomain}/${j2}`}/**
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
 */const Dc="webStorageSupport";class B2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pw,this._completeRedirectFn=h2,this._overrideRedirectResult=a2}async _openPopup(e,n,r,i){var s;Rn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await av(e,n,r,Yh(),i);return L2(e,o,bf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await av(e,n,r,Yh(),i);return $x(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await R2(e),r=new f2(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dc,{type:Dc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Dc];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sw()||gw()||Pf()}}const V2=B2;var uv="@firebase/auth",cv="1.7.9";/**
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
 */class H2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function W2(t){pr(new Nn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cw(t)},h=new Cx(r,i,s,u);return Rx(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pr(new Nn("auth-internal",e=>{const n=gu(e.getProvider("auth").getImmediate());return(r=>new H2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(uv,cv,$2(t)),Tt(uv,cv,"esm2017")}/**
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
 */const G2=5*60,K2=Z0("authIdTokenMaxAge")||G2;let hv=null;const q2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>K2)return;const i=n==null?void 0:n.token;hv!==i&&(hv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Y2(t=mu()){const e=Lo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xx(t,{popupRedirectResolver:V2,persistence:[Zx,Bx,Pw]}),r=Z0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=q2(s.toString());Fx(n,o,()=>o(n.currentUser)),jx(n,a=>o(a))}}const i=X0("auth");return i&&Px(n,`http://${i}`),n}function Q2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ix({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Bt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Q2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});W2("Browser");var dv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function C(){}C.prototype=y.prototype,I.D=y.prototype,I.prototype=new C,I.prototype.constructor=I,I.C=function(N,P,R){for(var k=Array(arguments.length-2),me=2;me<arguments.length;me++)k[me-2]=arguments[me];return y.prototype[P].apply(N,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,C){C||(C=0);var N=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)N[P]=y.charCodeAt(C++)|y.charCodeAt(C++)<<8|y.charCodeAt(C++)<<16|y.charCodeAt(C++)<<24;else for(P=0;16>P;++P)N[P]=y[C++]|y[C++]<<8|y[C++]<<16|y[C++]<<24;y=I.g[0],C=I.g[1],P=I.g[2];var R=I.g[3],k=y+(R^C&(P^R))+N[0]+3614090360&4294967295;y=C+(k<<7&4294967295|k>>>25),k=R+(P^y&(C^P))+N[1]+3905402710&4294967295,R=y+(k<<12&4294967295|k>>>20),k=P+(C^R&(y^C))+N[2]+606105819&4294967295,P=R+(k<<17&4294967295|k>>>15),k=C+(y^P&(R^y))+N[3]+3250441966&4294967295,C=P+(k<<22&4294967295|k>>>10),k=y+(R^C&(P^R))+N[4]+4118548399&4294967295,y=C+(k<<7&4294967295|k>>>25),k=R+(P^y&(C^P))+N[5]+1200080426&4294967295,R=y+(k<<12&4294967295|k>>>20),k=P+(C^R&(y^C))+N[6]+2821735955&4294967295,P=R+(k<<17&4294967295|k>>>15),k=C+(y^P&(R^y))+N[7]+4249261313&4294967295,C=P+(k<<22&4294967295|k>>>10),k=y+(R^C&(P^R))+N[8]+1770035416&4294967295,y=C+(k<<7&4294967295|k>>>25),k=R+(P^y&(C^P))+N[9]+2336552879&4294967295,R=y+(k<<12&4294967295|k>>>20),k=P+(C^R&(y^C))+N[10]+4294925233&4294967295,P=R+(k<<17&4294967295|k>>>15),k=C+(y^P&(R^y))+N[11]+2304563134&4294967295,C=P+(k<<22&4294967295|k>>>10),k=y+(R^C&(P^R))+N[12]+1804603682&4294967295,y=C+(k<<7&4294967295|k>>>25),k=R+(P^y&(C^P))+N[13]+4254626195&4294967295,R=y+(k<<12&4294967295|k>>>20),k=P+(C^R&(y^C))+N[14]+2792965006&4294967295,P=R+(k<<17&4294967295|k>>>15),k=C+(y^P&(R^y))+N[15]+1236535329&4294967295,C=P+(k<<22&4294967295|k>>>10),k=y+(P^R&(C^P))+N[1]+4129170786&4294967295,y=C+(k<<5&4294967295|k>>>27),k=R+(C^P&(y^C))+N[6]+3225465664&4294967295,R=y+(k<<9&4294967295|k>>>23),k=P+(y^C&(R^y))+N[11]+643717713&4294967295,P=R+(k<<14&4294967295|k>>>18),k=C+(R^y&(P^R))+N[0]+3921069994&4294967295,C=P+(k<<20&4294967295|k>>>12),k=y+(P^R&(C^P))+N[5]+3593408605&4294967295,y=C+(k<<5&4294967295|k>>>27),k=R+(C^P&(y^C))+N[10]+38016083&4294967295,R=y+(k<<9&4294967295|k>>>23),k=P+(y^C&(R^y))+N[15]+3634488961&4294967295,P=R+(k<<14&4294967295|k>>>18),k=C+(R^y&(P^R))+N[4]+3889429448&4294967295,C=P+(k<<20&4294967295|k>>>12),k=y+(P^R&(C^P))+N[9]+568446438&4294967295,y=C+(k<<5&4294967295|k>>>27),k=R+(C^P&(y^C))+N[14]+3275163606&4294967295,R=y+(k<<9&4294967295|k>>>23),k=P+(y^C&(R^y))+N[3]+4107603335&4294967295,P=R+(k<<14&4294967295|k>>>18),k=C+(R^y&(P^R))+N[8]+1163531501&4294967295,C=P+(k<<20&4294967295|k>>>12),k=y+(P^R&(C^P))+N[13]+2850285829&4294967295,y=C+(k<<5&4294967295|k>>>27),k=R+(C^P&(y^C))+N[2]+4243563512&4294967295,R=y+(k<<9&4294967295|k>>>23),k=P+(y^C&(R^y))+N[7]+1735328473&4294967295,P=R+(k<<14&4294967295|k>>>18),k=C+(R^y&(P^R))+N[12]+2368359562&4294967295,C=P+(k<<20&4294967295|k>>>12),k=y+(C^P^R)+N[5]+4294588738&4294967295,y=C+(k<<4&4294967295|k>>>28),k=R+(y^C^P)+N[8]+2272392833&4294967295,R=y+(k<<11&4294967295|k>>>21),k=P+(R^y^C)+N[11]+1839030562&4294967295,P=R+(k<<16&4294967295|k>>>16),k=C+(P^R^y)+N[14]+4259657740&4294967295,C=P+(k<<23&4294967295|k>>>9),k=y+(C^P^R)+N[1]+2763975236&4294967295,y=C+(k<<4&4294967295|k>>>28),k=R+(y^C^P)+N[4]+1272893353&4294967295,R=y+(k<<11&4294967295|k>>>21),k=P+(R^y^C)+N[7]+4139469664&4294967295,P=R+(k<<16&4294967295|k>>>16),k=C+(P^R^y)+N[10]+3200236656&4294967295,C=P+(k<<23&4294967295|k>>>9),k=y+(C^P^R)+N[13]+681279174&4294967295,y=C+(k<<4&4294967295|k>>>28),k=R+(y^C^P)+N[0]+3936430074&4294967295,R=y+(k<<11&4294967295|k>>>21),k=P+(R^y^C)+N[3]+3572445317&4294967295,P=R+(k<<16&4294967295|k>>>16),k=C+(P^R^y)+N[6]+76029189&4294967295,C=P+(k<<23&4294967295|k>>>9),k=y+(C^P^R)+N[9]+3654602809&4294967295,y=C+(k<<4&4294967295|k>>>28),k=R+(y^C^P)+N[12]+3873151461&4294967295,R=y+(k<<11&4294967295|k>>>21),k=P+(R^y^C)+N[15]+530742520&4294967295,P=R+(k<<16&4294967295|k>>>16),k=C+(P^R^y)+N[2]+3299628645&4294967295,C=P+(k<<23&4294967295|k>>>9),k=y+(P^(C|~R))+N[0]+4096336452&4294967295,y=C+(k<<6&4294967295|k>>>26),k=R+(C^(y|~P))+N[7]+1126891415&4294967295,R=y+(k<<10&4294967295|k>>>22),k=P+(y^(R|~C))+N[14]+2878612391&4294967295,P=R+(k<<15&4294967295|k>>>17),k=C+(R^(P|~y))+N[5]+4237533241&4294967295,C=P+(k<<21&4294967295|k>>>11),k=y+(P^(C|~R))+N[12]+1700485571&4294967295,y=C+(k<<6&4294967295|k>>>26),k=R+(C^(y|~P))+N[3]+2399980690&4294967295,R=y+(k<<10&4294967295|k>>>22),k=P+(y^(R|~C))+N[10]+4293915773&4294967295,P=R+(k<<15&4294967295|k>>>17),k=C+(R^(P|~y))+N[1]+2240044497&4294967295,C=P+(k<<21&4294967295|k>>>11),k=y+(P^(C|~R))+N[8]+1873313359&4294967295,y=C+(k<<6&4294967295|k>>>26),k=R+(C^(y|~P))+N[15]+4264355552&4294967295,R=y+(k<<10&4294967295|k>>>22),k=P+(y^(R|~C))+N[6]+2734768916&4294967295,P=R+(k<<15&4294967295|k>>>17),k=C+(R^(P|~y))+N[13]+1309151649&4294967295,C=P+(k<<21&4294967295|k>>>11),k=y+(P^(C|~R))+N[4]+4149444226&4294967295,y=C+(k<<6&4294967295|k>>>26),k=R+(C^(y|~P))+N[11]+3174756917&4294967295,R=y+(k<<10&4294967295|k>>>22),k=P+(y^(R|~C))+N[2]+718787259&4294967295,P=R+(k<<15&4294967295|k>>>17),k=C+(R^(P|~y))+N[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(P+(k<<21&4294967295|k>>>11))&4294967295,I.g[2]=I.g[2]+P&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var C=y-this.blockSize,N=this.B,P=this.h,R=0;R<y;){if(P==0)for(;R<=C;)i(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<y;)if(N[P++]=I.charCodeAt(R++),P==this.blockSize){i(this,N),P=0;break}}else for(;R<y;)if(N[P++]=I[R++],P==this.blockSize){i(this,N),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var C=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=C&255,C/=256;for(this.u(I),I=Array(16),y=C=0;4>y;++y)for(var N=0;32>N;N+=8)I[C++]=this.g[y]>>>N&255;return I};function s(I,y){var C=a;return Object.prototype.hasOwnProperty.call(C,I)?C[I]:C[I]=y(I)}function o(I,y){this.h=y;for(var C=[],N=!0,P=I.length-1;0<=P;P--){var R=I[P]|0;N&&R==y||(C[P]=R,N=!1)}this.g=C}var a={};function u(I){return-128<=I&&128>I?s(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return A(h(-I));for(var y=[],C=1,N=0;I>=C;N++)y[N]=I/C|0,C*=4294967296;return new o(y,0)}function m(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return A(m(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=h(Math.pow(y,8)),N=p,P=0;P<I.length;P+=8){var R=Math.min(8,I.length-P),k=parseInt(I.substring(P,P+R),y);8>R?(R=h(Math.pow(y,R)),N=N.j(R).add(h(k))):(N=N.j(C),N=N.add(h(k)))}return N}var p=u(0),g=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-A(this).m();for(var I=0,y=1,C=0;C<this.g.length;C++){var N=this.i(C);I+=(0<=N?N:4294967296+N)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(T(this))return"0";if(x(this))return"-"+A(this).toString(I);for(var y=h(Math.pow(I,6)),C=this,N="";;){var P=O(C,y).g;C=w(C,P.j(y));var R=((0<C.g.length?C.g[0]:C.h)>>>0).toString(I);if(C=P,T(C))return R+N;for(;6>R.length;)R="0"+R;N=R+N}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function T(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function x(I){return I.h==-1}t.l=function(I){return I=w(this,I),x(I)?-1:T(I)?0:1};function A(I){for(var y=I.g.length,C=[],N=0;N<y;N++)C[N]=~I.g[N];return new o(C,~I.h).add(g)}t.abs=function(){return x(this)?A(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),C=[],N=0,P=0;P<=y;P++){var R=N+(this.i(P)&65535)+(I.i(P)&65535),k=(R>>>16)+(this.i(P)>>>16)+(I.i(P)>>>16);N=k>>>16,R&=65535,k&=65535,C[P]=k<<16|R}return new o(C,C[C.length-1]&-2147483648?-1:0)};function w(I,y){return I.add(A(y))}t.j=function(I){if(T(this)||T(I))return p;if(x(this))return x(I)?A(this).j(A(I)):A(A(this).j(I));if(x(I))return A(this.j(A(I)));if(0>this.l(E)&&0>I.l(E))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,C=[],N=0;N<2*y;N++)C[N]=0;for(N=0;N<this.g.length;N++)for(var P=0;P<I.g.length;P++){var R=this.i(N)>>>16,k=this.i(N)&65535,me=I.i(P)>>>16,Te=I.i(P)&65535;C[2*N+2*P]+=k*Te,_(C,2*N+2*P),C[2*N+2*P+1]+=R*Te,_(C,2*N+2*P+1),C[2*N+2*P+1]+=k*me,_(C,2*N+2*P+1),C[2*N+2*P+2]+=R*me,_(C,2*N+2*P+2)}for(N=0;N<y;N++)C[N]=C[2*N+1]<<16|C[2*N];for(N=y;N<2*y;N++)C[N]=0;return new o(C,0)};function _(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function S(I,y){this.g=I,this.h=y}function O(I,y){if(T(y))throw Error("division by zero");if(T(I))return new S(p,p);if(x(I))return y=O(A(I),y),new S(A(y.g),A(y.h));if(x(y))return y=O(I,A(y)),new S(A(y.g),y.h);if(30<I.g.length){if(x(I)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var C=g,N=y;0>=N.l(I);)C=F(C),N=F(N);var P=U(C,1),R=U(N,1);for(N=U(N,2),C=U(C,2);!T(N);){var k=R.add(N);0>=k.l(I)&&(P=P.add(C),R=k),N=U(N,1),C=U(C,1)}return y=w(I,P.j(y)),new S(P,y)}for(P=p;0<=I.l(y);){for(C=Math.max(1,Math.floor(I.m()/y.m())),N=Math.ceil(Math.log(C)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),R=h(C),k=R.j(y);x(k)||0<k.l(I);)C-=N,R=h(C),k=R.j(y);T(R)&&(R=g),P=P.add(R),I=w(I,k)}return new S(P,I)}t.A=function(I){return O(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),C=[],N=0;N<y;N++)C[N]=this.i(N)&I.i(N);return new o(C,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),C=[],N=0;N<y;N++)C[N]=this.i(N)|I.i(N);return new o(C,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),C=[],N=0;N<y;N++)C[N]=this.i(N)^I.i(N);return new o(C,this.h^I.h)};function F(I){for(var y=I.g.length+1,C=[],N=0;N<y;N++)C[N]=I.i(N)<<1|I.i(N-1)>>>31;return new o(C,I.h)}function U(I,y){var C=y>>5;y%=32;for(var N=I.g.length-C,P=[],R=0;R<N;R++)P[R]=0<y?I.i(R+C)>>>y|I.i(R+C+1)<<32-y:I.i(R+C);return new o(P,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=m,Fw=o}).apply(typeof dv<"u"?dv:typeof self<"u"?self:typeof window<"u"?window:{});var Il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,c,f){return l==Array.prototype||l==Object.prototype||(l[c]=f.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Il=="object"&&Il];for(var c=0;c<l.length;++c){var f=l[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(l,c){if(c)e:{var f=r;l=l.split(".");for(var v=0;v<l.length-1;v++){var b=l[v];if(!(b in f))break e;f=f[b]}l=l[l.length-1],v=f[l],c=c(v),c!=v&&c!=null&&e(f,l,{configurable:!0,writable:!0,value:c})}}function s(l,c){l instanceof String&&(l+="");var f=0,v=!1,b={next:function(){if(!v&&f<l.length){var L=f++;return{value:c(L,l[L]),done:!1}}return v=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(l){return l||function(){return s(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var c=typeof l;return c=c!="object"?c:l?Array.isArray(l)?"array":c:"null",c=="array"||c=="object"&&typeof l.length=="number"}function h(l){var c=typeof l;return c=="object"&&l!=null||c=="function"}function m(l,c,f){return l.call.apply(l.bind,arguments)}function p(l,c,f){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,v),l.apply(c,b)}}return function(){return l.apply(c,arguments)}}function g(l,c,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:p,g.apply(null,arguments)}function E(l,c){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function T(l,c){function f(){}f.prototype=c.prototype,l.aa=c.prototype,l.prototype=new f,l.prototype.constructor=l,l.Qb=function(v,b,L){for(var V=Array(arguments.length-2),le=2;le<arguments.length;le++)V[le-2]=arguments[le];return c.prototype[b].apply(v,V)}}function x(l){const c=l.length;if(0<c){const f=Array(c);for(let v=0;v<c;v++)f[v]=l[v];return f}return[]}function A(l,c){for(let f=1;f<arguments.length;f++){const v=arguments[f];if(u(v)){const b=l.length||0,L=v.length||0;l.length=b+L;for(let V=0;V<L;V++)l[b+V]=v[V]}else l.push(v)}}class w{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(l){return/^[\s\xa0]*$/.test(l)}function S(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function O(l){return O[" "](l),l}O[" "]=function(){};var F=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function U(l,c,f){for(const v in l)c.call(f,l[v],v,l)}function I(l,c){for(const f in l)c.call(void 0,l[f],f,l)}function y(l){const c={};for(const f in l)c[f]=l[f];return c}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(l,c){let f,v;for(let b=1;b<arguments.length;b++){v=arguments[b];for(f in v)l[f]=v[f];for(let L=0;L<C.length;L++)f=C[L],Object.prototype.hasOwnProperty.call(v,f)&&(l[f]=v[f])}}function P(l){var c=1;l=l.split(":");const f=[];for(;0<c&&l.length;)f.push(l.shift()),c--;return l.length&&f.push(l.join(":")),f}function R(l){a.setTimeout(()=>{throw l},0)}function k(){var l=M;let c=null;return l.g&&(c=l.g,l.g=l.g.next,l.g||(l.h=null),c.next=null),c}class me{constructor(){this.h=this.g=null}add(c,f){const v=Te.get();v.set(c,f),this.h?this.h.next=v:this.g=v,this.h=v}}var Te=new w(()=>new rn,l=>l.reset());class rn{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ft,j=!1,M=new me,H=()=>{const l=a.Promise.resolve(void 0);ft=()=>{l.then(q)}};var q=()=>{for(var l;l=k();){try{l.h.call(l.g)}catch(f){R(f)}var c=Te;c.j(l),100>c.h&&(c.h++,l.next=c.g,c.g=l)}j=!1};function Z(){this.s=this.s,this.C=this.C}Z.prototype.s=!1,Z.prototype.ma=function(){this.s||(this.s=!0,this.N())},Z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(l,c){this.type=l,this.g=this.target=c,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var sn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,c=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const f=()=>{};a.addEventListener("test",f,c),a.removeEventListener("test",f,c)}catch{}return l}();function on(l,c){if(se.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var f=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=c,c=l.relatedTarget){if(F){e:{try{O(c.nodeName);var b=!0;break e}catch{}b=!1}b||(c=null)}}else f=="mouseover"?c=l.fromElement:f=="mouseout"&&(c=l.toElement);this.relatedTarget=c,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ln[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&on.aa.h.call(this)}}T(on,se);var ln={2:"touch",3:"pen",4:"mouse"};on.prototype.h=function(){on.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var an="closure_listenable_"+(1e6*Math.random()|0),lE=0;function aE(l,c,f,v,b){this.listener=l,this.proxy=null,this.src=c,this.type=f,this.capture=!!v,this.ha=b,this.key=++lE,this.da=this.fa=!1}function Wo(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Go(l){this.src=l,this.g={},this.h=0}Go.prototype.add=function(l,c,f,v,b){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var V=Ru(l,c,v,b);return-1<V?(c=l[V],f||(c.fa=!1)):(c=new aE(c,this.src,L,!!v,b),c.fa=f,l.push(c)),c};function xu(l,c){var f=c.type;if(f in l.g){var v=l.g[f],b=Array.prototype.indexOf.call(v,c,void 0),L;(L=0<=b)&&Array.prototype.splice.call(v,b,1),L&&(Wo(c),l.g[f].length==0&&(delete l.g[f],l.h--))}}function Ru(l,c,f,v){for(var b=0;b<l.length;++b){var L=l[b];if(!L.da&&L.listener==c&&L.capture==!!f&&L.ha==v)return b}return-1}var Pu="closure_lm_"+(1e6*Math.random()|0),Au={};function _p(l,c,f,v,b){if(Array.isArray(c)){for(var L=0;L<c.length;L++)_p(l,c[L],f,v,b);return null}return f=Ep(f),l&&l[an]?l.K(c,f,h(v)?!!v.capture:!1,b):uE(l,c,f,!1,v,b)}function uE(l,c,f,v,b,L){if(!c)throw Error("Invalid event type");var V=h(b)?!!b.capture:!!b,le=bu(l);if(le||(l[Pu]=le=new Go(l)),f=le.add(c,f,v,V,L),f.proxy)return f;if(v=cE(),f.proxy=v,v.src=l,v.listener=f,l.addEventListener)sn||(b=V),b===void 0&&(b=!1),l.addEventListener(c.toString(),v,b);else if(l.attachEvent)l.attachEvent(wp(c.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function cE(){function l(f){return c.call(l.src,l.listener,f)}const c=hE;return l}function yp(l,c,f,v,b){if(Array.isArray(c))for(var L=0;L<c.length;L++)yp(l,c[L],f,v,b);else v=h(v)?!!v.capture:!!v,f=Ep(f),l&&l[an]?(l=l.i,c=String(c).toString(),c in l.g&&(L=l.g[c],f=Ru(L,f,v,b),-1<f&&(Wo(L[f]),Array.prototype.splice.call(L,f,1),L.length==0&&(delete l.g[c],l.h--)))):l&&(l=bu(l))&&(c=l.g[c.toString()],l=-1,c&&(l=Ru(c,f,v,b)),(f=-1<l?c[l]:null)&&Ou(f))}function Ou(l){if(typeof l!="number"&&l&&!l.da){var c=l.src;if(c&&c[an])xu(c.i,l);else{var f=l.type,v=l.proxy;c.removeEventListener?c.removeEventListener(f,v,l.capture):c.detachEvent?c.detachEvent(wp(f),v):c.addListener&&c.removeListener&&c.removeListener(v),(f=bu(c))?(xu(f,l),f.h==0&&(f.src=null,c[Pu]=null)):Wo(l)}}}function wp(l){return l in Au?Au[l]:Au[l]="on"+l}function hE(l,c){if(l.da)l=!0;else{c=new on(c,this);var f=l.listener,v=l.ha||l.src;l.fa&&Ou(l),l=f.call(v,c)}return l}function bu(l){return l=l[Pu],l instanceof Go?l:null}var Du="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ep(l){return typeof l=="function"?l:(l[Du]||(l[Du]=function(c){return l.handleEvent(c)}),l[Du])}function ze(){Z.call(this),this.i=new Go(this),this.M=this,this.F=null}T(ze,Z),ze.prototype[an]=!0,ze.prototype.removeEventListener=function(l,c,f,v){yp(this,l,c,f,v)};function qe(l,c){var f,v=l.F;if(v)for(f=[];v;v=v.F)f.push(v);if(l=l.M,v=c.type||c,typeof c=="string")c=new se(c,l);else if(c instanceof se)c.target=c.target||l;else{var b=c;c=new se(v,l),N(c,b)}if(b=!0,f)for(var L=f.length-1;0<=L;L--){var V=c.g=f[L];b=Ko(V,v,!0,c)&&b}if(V=c.g=l,b=Ko(V,v,!0,c)&&b,b=Ko(V,v,!1,c)&&b,f)for(L=0;L<f.length;L++)V=c.g=f[L],b=Ko(V,v,!1,c)&&b}ze.prototype.N=function(){if(ze.aa.N.call(this),this.i){var l=this.i,c;for(c in l.g){for(var f=l.g[c],v=0;v<f.length;v++)Wo(f[v]);delete l.g[c],l.h--}}this.F=null},ze.prototype.K=function(l,c,f,v){return this.i.add(String(l),c,!1,f,v)},ze.prototype.L=function(l,c,f,v){return this.i.add(String(l),c,!0,f,v)};function Ko(l,c,f,v){if(c=l.i.g[String(c)],!c)return!0;c=c.concat();for(var b=!0,L=0;L<c.length;++L){var V=c[L];if(V&&!V.da&&V.capture==f){var le=V.listener,Le=V.ha||V.src;V.fa&&xu(l.i,V),b=le.call(Le,v)!==!1&&b}}return b&&!v.defaultPrevented}function Sp(l,c,f){if(typeof l=="function")f&&(l=g(l,f));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:a.setTimeout(l,c||0)}function Cp(l){l.g=Sp(()=>{l.g=null,l.i&&(l.i=!1,Cp(l))},l.l);const c=l.h;l.h=null,l.m.apply(null,c)}class dE extends Z{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Cp(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rs(l){Z.call(this),this.h=l,this.g={}}T(rs,Z);var Ip=[];function kp(l){U(l.g,function(c,f){this.g.hasOwnProperty(f)&&Ou(c)},l),l.g={}}rs.prototype.N=function(){rs.aa.N.call(this),kp(this)},rs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lu=a.JSON.stringify,fE=a.JSON.parse,pE=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Mu(){}Mu.prototype.h=null;function Tp(l){return l.h||(l.h=l.i())}function mE(){}var is={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ju(){se.call(this,"d")}T(ju,se);function Fu(){se.call(this,"c")}T(Fu,se);var Xr={},Np=null;function Uu(){return Np=Np||new ze}Xr.La="serverreachability";function xp(l){se.call(this,Xr.La,l)}T(xp,se);function ss(l){const c=Uu();qe(c,new xp(c))}Xr.STAT_EVENT="statevent";function Rp(l,c){se.call(this,Xr.STAT_EVENT,l),this.stat=c}T(Rp,se);function Ye(l){const c=Uu();qe(c,new Rp(c,l))}Xr.Ma="timingevent";function Pp(l,c){se.call(this,Xr.Ma,l),this.size=c}T(Pp,se);function os(l,c){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},c)}function ls(){this.g=!0}ls.prototype.xa=function(){this.g=!1};function gE(l,c,f,v,b,L){l.info(function(){if(l.g)if(L)for(var V="",le=L.split("&"),Le=0;Le<le.length;Le++){var ne=le[Le].split("=");if(1<ne.length){var Be=ne[0];ne=ne[1];var Ve=Be.split("_");V=2<=Ve.length&&Ve[1]=="type"?V+(Be+"="+ne+"&"):V+(Be+"=redacted&")}}else V=null;else V=L;return"XMLHTTP REQ ("+v+") [attempt "+b+"]: "+c+`
`+f+`
`+V})}function vE(l,c,f,v,b,L,V){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+b+"]: "+c+`
`+f+`
`+L+" "+V})}function Jr(l,c,f,v){l.info(function(){return"XMLHTTP TEXT ("+c+"): "+yE(l,f)+(v?" "+v:"")})}function _E(l,c){l.info(function(){return"TIMEOUT: "+c})}ls.prototype.info=function(){};function yE(l,c){if(!l.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(l=0;l<f.length;l++)if(Array.isArray(f[l])){var v=f[l];if(!(2>v.length)){var b=v[1];if(Array.isArray(b)&&!(1>b.length)){var L=b[0];if(L!="noop"&&L!="stop"&&L!="close")for(var V=1;V<b.length;V++)b[V]=""}}}}return Lu(f)}catch{return c}}var zu={NO_ERROR:0,TIMEOUT:8},wE={},Bu;function qo(){}T(qo,Mu),qo.prototype.g=function(){return new XMLHttpRequest},qo.prototype.i=function(){return{}},Bu=new qo;function jn(l,c,f,v){this.j=l,this.i=c,this.l=f,this.R=v||1,this.U=new rs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ap}function Ap(){this.i=null,this.g="",this.h=!1}var Op={},Vu={};function Hu(l,c,f){l.L=1,l.v=Jo(un(c)),l.m=f,l.P=!0,bp(l,null)}function bp(l,c){l.F=Date.now(),Yo(l),l.A=un(l.v);var f=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),Kp(f.i,"t",v),l.C=0,f=l.j.J,l.h=new Ap,l.g=hm(l.j,f?c:null,!l.m),0<l.O&&(l.M=new dE(g(l.Y,l,l.g),l.O)),c=l.U,f=l.g,v=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(Ip[0]=b.toString()),b=Ip);for(var L=0;L<b.length;L++){var V=_p(f,b[L],v||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,c)):(l.u="GET",l.g.ea(l.A,l.u,null,c)),ss(),gE(l.i,l.u,l.A,l.l,l.R,l.m)}jn.prototype.ca=function(l){l=l.target;const c=this.M;c&&cn(l)==3?c.j():this.Y(l)},jn.prototype.Y=function(l){try{if(l==this.g)e:{const Ve=cn(this.g);var c=this.g.Ba();const ti=this.g.Z();if(!(3>Ve)&&(Ve!=3||this.g&&(this.h.h||this.g.oa()||em(this.g)))){this.J||Ve!=4||c==7||(c==8||0>=ti?ss(3):ss(2)),$u(this);var f=this.g.Z();this.X=f;t:if(Dp(this)){var v=em(this.g);l="";var b=v.length,L=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Sr(this),as(this);var V="";break t}this.h.i=new a.TextDecoder}for(c=0;c<b;c++)this.h.h=!0,l+=this.h.i.decode(v[c],{stream:!(L&&c==b-1)});v.length=0,this.h.g+=l,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=f==200,vE(this.i,this.u,this.A,this.l,this.R,Ve,f),this.o){if(this.T&&!this.K){t:{if(this.g){var le,Le=this.g;if((le=Le.g?Le.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(le)){var ne=le;break t}}ne=null}if(f=ne)Jr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wu(this,f);else{this.o=!1,this.s=3,Ye(12),Sr(this),as(this);break e}}if(this.P){f=!0;let Rt;for(;!this.J&&this.C<V.length;)if(Rt=EE(this,V),Rt==Vu){Ve==4&&(this.s=4,Ye(14),f=!1),Jr(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==Op){this.s=4,Ye(15),Jr(this.i,this.l,V,"[Invalid Chunk]"),f=!1;break}else Jr(this.i,this.l,Rt,null),Wu(this,Rt);if(Dp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ve!=4||V.length!=0||this.h.h||(this.s=1,Ye(16),f=!1),this.o=this.o&&f,!f)Jr(this.i,this.l,V,"[Invalid Chunked Response]"),Sr(this),as(this);else if(0<V.length&&!this.W){this.W=!0;var Be=this.j;Be.g==this&&Be.ba&&!Be.M&&(Be.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Xu(Be),Be.M=!0,Ye(11))}}else Jr(this.i,this.l,V,null),Wu(this,V);Ve==4&&Sr(this),this.o&&!this.J&&(Ve==4?lm(this.j,this):(this.o=!1,Yo(this)))}else FE(this.g),f==400&&0<V.indexOf("Unknown SID")?(this.s=3,Ye(12)):(this.s=0,Ye(13)),Sr(this),as(this)}}}catch{}finally{}};function Dp(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function EE(l,c){var f=l.C,v=c.indexOf(`
`,f);return v==-1?Vu:(f=Number(c.substring(f,v)),isNaN(f)?Op:(v+=1,v+f>c.length?Vu:(c=c.slice(v,v+f),l.C=v+f,c)))}jn.prototype.cancel=function(){this.J=!0,Sr(this)};function Yo(l){l.S=Date.now()+l.I,Lp(l,l.I)}function Lp(l,c){if(l.B!=null)throw Error("WatchDog timer not null");l.B=os(g(l.ba,l),c)}function $u(l){l.B&&(a.clearTimeout(l.B),l.B=null)}jn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(_E(this.i,this.A),this.L!=2&&(ss(),Ye(17)),Sr(this),this.s=2,as(this)):Lp(this,this.S-l)};function as(l){l.j.G==0||l.J||lm(l.j,l)}function Sr(l){$u(l);var c=l.M;c&&typeof c.ma=="function"&&c.ma(),l.M=null,kp(l.U),l.g&&(c=l.g,l.g=null,c.abort(),c.ma())}function Wu(l,c){try{var f=l.j;if(f.G!=0&&(f.g==l||Gu(f.h,l))){if(!l.K&&Gu(f.h,l)&&f.G==3){try{var v=f.Da.g.parse(c)}catch{v=null}if(Array.isArray(v)&&v.length==3){var b=v;if(b[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<l.F)il(f),nl(f);else break e;Qu(f),Ye(18)}}else f.za=b[1],0<f.za-f.T&&37500>b[2]&&f.F&&f.v==0&&!f.C&&(f.C=os(g(f.Za,f),6e3));if(1>=Fp(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Ir(f,11)}else if((l.K||f.g==l)&&il(f),!_(c))for(b=f.Da.g.parse(c),c=0;c<b.length;c++){let ne=b[c];if(f.T=ne[0],ne=ne[1],f.G==2)if(ne[0]=="c"){f.K=ne[1],f.ia=ne[2];const Be=ne[3];Be!=null&&(f.la=Be,f.j.info("VER="+f.la));const Ve=ne[4];Ve!=null&&(f.Aa=Ve,f.j.info("SVER="+f.Aa));const ti=ne[5];ti!=null&&typeof ti=="number"&&0<ti&&(v=1.5*ti,f.L=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const Rt=l.g;if(Rt){const sl=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(sl){var L=v.h;L.g||sl.indexOf("spdy")==-1&&sl.indexOf("quic")==-1&&sl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Ku(L,L.h),L.h=null))}if(v.D){const Ju=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ju&&(v.ya=Ju,he(v.I,v.D,Ju))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-l.F,f.j.info("Handshake RTT: "+f.R+"ms")),v=f;var V=l;if(v.qa=cm(v,v.J?v.ia:null,v.W),V.K){Up(v.h,V);var le=V,Le=v.L;Le&&(le.I=Le),le.B&&($u(le),Yo(le)),v.g=V}else sm(v);0<f.i.length&&rl(f)}else ne[0]!="stop"&&ne[0]!="close"||Ir(f,7);else f.G==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?Ir(f,7):Yu(f):ne[0]!="noop"&&f.l&&f.l.ta(ne),f.v=0)}}ss(4)}catch{}}var SE=class{constructor(l,c){this.g=l,this.map=c}};function Mp(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jp(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Fp(l){return l.h?1:l.g?l.g.size:0}function Gu(l,c){return l.h?l.h==c:l.g?l.g.has(c):!1}function Ku(l,c){l.g?l.g.add(c):l.h=c}function Up(l,c){l.h&&l.h==c?l.h=null:l.g&&l.g.has(c)&&l.g.delete(c)}Mp.prototype.cancel=function(){if(this.i=zp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function zp(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let c=l.i;for(const f of l.g.values())c=c.concat(f.D);return c}return x(l.i)}function CE(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var c=[],f=l.length,v=0;v<f;v++)c.push(l[v]);return c}c=[],f=0;for(v in l)c[f++]=l[v];return c}function IE(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var c=[];l=l.length;for(var f=0;f<l;f++)c.push(f);return c}c=[],f=0;for(const v in l)c[f++]=v;return c}}}function Bp(l,c){if(l.forEach&&typeof l.forEach=="function")l.forEach(c,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,c,void 0);else for(var f=IE(l),v=CE(l),b=v.length,L=0;L<b;L++)c.call(void 0,v[L],f&&f[L],l)}var Vp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kE(l,c){if(l){l=l.split("&");for(var f=0;f<l.length;f++){var v=l[f].indexOf("="),b=null;if(0<=v){var L=l[f].substring(0,v);b=l[f].substring(v+1)}else L=l[f];c(L,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Cr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Cr){this.h=l.h,Qo(this,l.j),this.o=l.o,this.g=l.g,Xo(this,l.s),this.l=l.l;var c=l.i,f=new hs;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),Hp(this,f),this.m=l.m}else l&&(c=String(l).match(Vp))?(this.h=!1,Qo(this,c[1]||"",!0),this.o=us(c[2]||""),this.g=us(c[3]||"",!0),Xo(this,c[4]),this.l=us(c[5]||"",!0),Hp(this,c[6]||"",!0),this.m=us(c[7]||"")):(this.h=!1,this.i=new hs(null,this.h))}Cr.prototype.toString=function(){var l=[],c=this.j;c&&l.push(cs(c,$p,!0),":");var f=this.g;return(f||c=="file")&&(l.push("//"),(c=this.o)&&l.push(cs(c,$p,!0),"@"),l.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&l.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&l.push("/"),l.push(cs(f,f.charAt(0)=="/"?xE:NE,!0))),(f=this.i.toString())&&l.push("?",f),(f=this.m)&&l.push("#",cs(f,PE)),l.join("")};function un(l){return new Cr(l)}function Qo(l,c,f){l.j=f?us(c,!0):c,l.j&&(l.j=l.j.replace(/:$/,""))}function Xo(l,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);l.s=c}else l.s=null}function Hp(l,c,f){c instanceof hs?(l.i=c,AE(l.i,l.h)):(f||(c=cs(c,RE)),l.i=new hs(c,l.h))}function he(l,c,f){l.i.set(c,f)}function Jo(l){return he(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function us(l,c){return l?c?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function cs(l,c,f){return typeof l=="string"?(l=encodeURI(l).replace(c,TE),f&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function TE(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var $p=/[#\/\?@]/g,NE=/[#\?:]/g,xE=/[#\?]/g,RE=/[#\?@]/g,PE=/#/g;function hs(l,c){this.h=this.g=null,this.i=l||null,this.j=!!c}function Fn(l){l.g||(l.g=new Map,l.h=0,l.i&&kE(l.i,function(c,f){l.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=hs.prototype,t.add=function(l,c){Fn(this),this.i=null,l=Zr(this,l);var f=this.g.get(l);return f||this.g.set(l,f=[]),f.push(c),this.h+=1,this};function Wp(l,c){Fn(l),c=Zr(l,c),l.g.has(c)&&(l.i=null,l.h-=l.g.get(c).length,l.g.delete(c))}function Gp(l,c){return Fn(l),c=Zr(l,c),l.g.has(c)}t.forEach=function(l,c){Fn(this),this.g.forEach(function(f,v){f.forEach(function(b){l.call(c,b,v,this)},this)},this)},t.na=function(){Fn(this);const l=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let v=0;v<c.length;v++){const b=l[v];for(let L=0;L<b.length;L++)f.push(c[v])}return f},t.V=function(l){Fn(this);let c=[];if(typeof l=="string")Gp(this,l)&&(c=c.concat(this.g.get(Zr(this,l))));else{l=Array.from(this.g.values());for(let f=0;f<l.length;f++)c=c.concat(l[f])}return c},t.set=function(l,c){return Fn(this),this.i=null,l=Zr(this,l),Gp(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[c]),this.h+=1,this},t.get=function(l,c){return l?(l=this.V(l),0<l.length?String(l[0]):c):c};function Kp(l,c,f){Wp(l,c),0<f.length&&(l.i=null,l.g.set(Zr(l,c),x(f)),l.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var v=c[f];const L=encodeURIComponent(String(v)),V=this.V(v);for(v=0;v<V.length;v++){var b=L;V[v]!==""&&(b+="="+encodeURIComponent(String(V[v]))),l.push(b)}}return this.i=l.join("&")};function Zr(l,c){return c=String(c),l.j&&(c=c.toLowerCase()),c}function AE(l,c){c&&!l.j&&(Fn(l),l.i=null,l.g.forEach(function(f,v){var b=v.toLowerCase();v!=b&&(Wp(this,v),Kp(this,b,f))},l)),l.j=c}function OE(l,c){const f=new ls;if(a.Image){const v=new Image;v.onload=E(Un,f,"TestLoadImage: loaded",!0,c,v),v.onerror=E(Un,f,"TestLoadImage: error",!1,c,v),v.onabort=E(Un,f,"TestLoadImage: abort",!1,c,v),v.ontimeout=E(Un,f,"TestLoadImage: timeout",!1,c,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else c(!1)}function bE(l,c){const f=new ls,v=new AbortController,b=setTimeout(()=>{v.abort(),Un(f,"TestPingServer: timeout",!1,c)},1e4);fetch(l,{signal:v.signal}).then(L=>{clearTimeout(b),L.ok?Un(f,"TestPingServer: ok",!0,c):Un(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),Un(f,"TestPingServer: error",!1,c)})}function Un(l,c,f,v,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),v(f)}catch{}}function DE(){this.g=new pE}function LE(l,c,f){const v=f||"";try{Bp(l,function(b,L){let V=b;h(b)&&(V=Lu(b)),c.push(v+L+"="+encodeURIComponent(V))})}catch(b){throw c.push(v+"type="+encodeURIComponent("_badmap")),b}}function Zo(l){this.l=l.Ub||null,this.j=l.eb||!1}T(Zo,Mu),Zo.prototype.g=function(){return new el(this.l,this.j)},Zo.prototype.i=function(l){return function(){return l}}({});function el(l,c){ze.call(this),this.D=l,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(el,ze),t=el.prototype,t.open=function(l,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=c,this.readyState=1,fs(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(c.body=l),(this.D||a).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ds(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,fs(this)),this.g&&(this.readyState=3,fs(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qp(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function qp(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var c=l.value?l.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!l.done}))&&(this.response=this.responseText+=c)}l.done?ds(this):fs(this),this.readyState==3&&qp(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ds(this))},t.Qa=function(l){this.g&&(this.response=l,ds(this))},t.ga=function(){this.g&&ds(this)};function ds(l){l.readyState=4,l.l=null,l.j=null,l.v=null,fs(l)}t.setRequestHeader=function(l,c){this.u.append(l,c)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,l.push(f[0]+": "+f[1]),f=c.next();return l.join(`\r
`)};function fs(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(el.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Yp(l){let c="";return U(l,function(f,v){c+=v,c+=":",c+=f,c+=`\r
`}),c}function qu(l,c,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=Yp(f),typeof l=="string"?f!=null&&encodeURIComponent(String(f)):he(l,c,f))}function Ce(l){ze.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Ce,ze);var ME=/^https?$/i,jE=["POST","PUT"];t=Ce.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,c,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);c=c?c.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bu.g(),this.v=this.o?Tp(this.o):Tp(Bu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(l),!0),this.B=!1}catch(L){Qp(this,L);return}if(l=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var b in v)f.set(b,v[b]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())f.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),b=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(jE,c,void 0))||v||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,V]of f)this.g.setRequestHeader(L,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zp(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){Qp(this,L)}};function Qp(l,c){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=c,l.m=5,Xp(l),tl(l)}function Xp(l){l.A||(l.A=!0,qe(l,"complete"),qe(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,qe(this,"complete"),qe(this,"abort"),tl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tl(this,!0)),Ce.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Jp(this):this.bb())},t.bb=function(){Jp(this)};function Jp(l){if(l.h&&typeof o<"u"&&(!l.v[1]||cn(l)!=4||l.Z()!=2)){if(l.u&&cn(l)==4)Sp(l.Ea,0,l);else if(qe(l,"readystatechange"),cn(l)==4){l.h=!1;try{const V=l.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var v;if(v=V===0){var b=String(l.D).match(Vp)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),v=!ME.test(b?b.toLowerCase():"")}f=v}if(f)qe(l,"complete"),qe(l,"success");else{l.m=6;try{var L=2<cn(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",Xp(l)}}finally{tl(l)}}}}function tl(l,c){if(l.g){Zp(l);const f=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,c||qe(l,"ready");try{f.onreadystatechange=v}catch{}}}function Zp(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function cn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var c=this.g.responseText;return l&&c.indexOf(l)==0&&(c=c.substring(l.length)),fE(c)}};function em(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function FE(l){const c={};l=(l.g&&2<=cn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(_(l[v]))continue;var f=P(l[v]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=c[b]||[];c[b]=L,L.push(f)}I(c,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ps(l,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[l]||c}function tm(l){this.Aa=0,this.i=[],this.j=new ls,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ps("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ps("baseRetryDelayMs",5e3,l),this.cb=ps("retryDelaySeedMs",1e4,l),this.Wa=ps("forwardChannelMaxRetries",2,l),this.wa=ps("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Mp(l&&l.concurrentRequestLimit),this.Da=new DE,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=tm.prototype,t.la=8,t.G=1,t.connect=function(l,c,f,v){Ye(0),this.W=l,this.H=c||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.I=cm(this,null,this.W),rl(this)};function Yu(l){if(nm(l),l.G==3){var c=l.U++,f=un(l.I);if(he(f,"SID",l.K),he(f,"RID",c),he(f,"TYPE","terminate"),ms(l,f),c=new jn(l,l.j,c),c.L=2,c.v=Jo(un(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&a.Image&&(new Image().src=c.v,f=!0),f||(c.g=hm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Yo(c)}um(l)}function nl(l){l.g&&(Xu(l),l.g.cancel(),l.g=null)}function nm(l){nl(l),l.u&&(a.clearTimeout(l.u),l.u=null),il(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function rl(l){if(!jp(l.h)&&!l.s){l.s=!0;var c=l.Ga;ft||H(),j||(ft(),j=!0),M.add(c,l),l.B=0}}function UE(l,c){return Fp(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=c.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=os(g(l.Ga,l,c),am(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new jn(this,this.j,l);let L=this.o;if(this.S&&(L?(L=y(L),N(L,this.S)):L=this.S),this.m!==null||this.O||(b.H=L,L=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(c+=v,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=im(this,b,c),f=un(this.I),he(f,"RID",l),he(f,"CVER",22),this.D&&he(f,"X-HTTP-Session-Id",this.D),ms(this,f),L&&(this.O?c="headers="+encodeURIComponent(String(Yp(L)))+"&"+c:this.m&&qu(f,this.m,L)),Ku(this.h,b),this.Ua&&he(f,"TYPE","init"),this.P?(he(f,"$req",c),he(f,"SID","null"),b.T=!0,Hu(b,f,null)):Hu(b,f,c),this.G=2}}else this.G==3&&(l?rm(this,l):this.i.length==0||jp(this.h)||rm(this))};function rm(l,c){var f;c?f=c.l:f=l.U++;const v=un(l.I);he(v,"SID",l.K),he(v,"RID",f),he(v,"AID",l.T),ms(l,v),l.m&&l.o&&qu(v,l.m,l.o),f=new jn(l,l.j,f,l.B+1),l.m===null&&(f.H=l.o),c&&(l.i=c.D.concat(l.i)),c=im(l,f,1e3),f.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ku(l.h,f),Hu(f,v,c)}function ms(l,c){l.H&&U(l.H,function(f,v){he(c,v,f)}),l.l&&Bp({},function(f,v){he(c,v,f)})}function im(l,c,f){f=Math.min(l.i.length,f);var v=l.l?g(l.l.Na,l.l,l):null;e:{var b=l.i;let L=-1;for(;;){const V=["count="+f];L==-1?0<f?(L=b[0].g,V.push("ofs="+L)):L=0:V.push("ofs="+L);let le=!0;for(let Le=0;Le<f;Le++){let ne=b[Le].g;const Be=b[Le].map;if(ne-=L,0>ne)L=Math.max(0,b[Le].g-100),le=!1;else try{LE(Be,V,"req"+ne+"_")}catch{v&&v(Be)}}if(le){v=V.join("&");break e}}}return l=l.i.splice(0,f),c.D=l,v}function sm(l){if(!l.g&&!l.u){l.Y=1;var c=l.Fa;ft||H(),j||(ft(),j=!0),M.add(c,l),l.v=0}}function Qu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=os(g(l.Fa,l),am(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,om(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=os(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ye(10),nl(this),om(this))};function Xu(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function om(l){l.g=new jn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var c=un(l.qa);he(c,"RID","rpc"),he(c,"SID",l.K),he(c,"AID",l.T),he(c,"CI",l.F?"0":"1"),!l.F&&l.ja&&he(c,"TO",l.ja),he(c,"TYPE","xmlhttp"),ms(l,c),l.m&&l.o&&qu(c,l.m,l.o),l.L&&(l.g.I=l.L);var f=l.g;l=l.ia,f.L=1,f.v=Jo(un(c)),f.m=null,f.P=!0,bp(f,l)}t.Za=function(){this.C!=null&&(this.C=null,nl(this),Qu(this),Ye(19))};function il(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function lm(l,c){var f=null;if(l.g==c){il(l),Xu(l),l.g=null;var v=2}else if(Gu(l.h,c))f=c.D,Up(l.h,c),v=1;else return;if(l.G!=0){if(c.o)if(v==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var b=l.B;v=Uu(),qe(v,new Pp(v,f)),rl(l)}else sm(l);else if(b=c.s,b==3||b==0&&0<c.X||!(v==1&&UE(l,c)||v==2&&Qu(l)))switch(f&&0<f.length&&(c=l.h,c.i=c.i.concat(f)),b){case 1:Ir(l,5);break;case 4:Ir(l,10);break;case 3:Ir(l,6);break;default:Ir(l,2)}}}function am(l,c){let f=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(f*=2),f*c}function Ir(l,c){if(l.j.info("Error code "+c),c==2){var f=g(l.fb,l),v=l.Xa;const b=!v;v=new Cr(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Qo(v,"https"),Jo(v),b?OE(v.toString(),f):bE(v.toString(),f)}else Ye(2);l.G=0,l.l&&l.l.sa(c),um(l),nm(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ye(2)):(this.j.info("Failed to ping google.com"),Ye(1))};function um(l){if(l.G=0,l.ka=[],l.l){const c=zp(l.h);(c.length!=0||l.i.length!=0)&&(A(l.ka,c),A(l.ka,l.i),l.h.i.length=0,x(l.i),l.i.length=0),l.l.ra()}}function cm(l,c,f){var v=f instanceof Cr?un(f):new Cr(f);if(v.g!="")c&&(v.g=c+"."+v.g),Xo(v,v.s);else{var b=a.location;v=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;var L=new Cr(null);v&&Qo(L,v),c&&(L.g=c),b&&Xo(L,b),f&&(L.l=f),v=L}return f=l.D,c=l.ya,f&&c&&he(v,f,c),he(v,"VER",l.la),ms(l,v),v}function hm(l,c,f){if(c&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=l.Ca&&!l.pa?new Ce(new Zo({eb:f})):new Ce(l.pa),c.Ha(l.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function dm(){}t=dm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Et(l,c){ze.call(this),this.g=new tm(c),this.l=l,this.h=c&&c.messageUrlParams||null,l=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(l?l["X-WebChannel-Content-Type"]=c.messageContentType:l={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(l?l["X-WebChannel-Client-Profile"]=c.va:l={"X-WebChannel-Client-Profile":c.va}),this.g.S=l,(l=c&&c.Sb)&&!_(l)&&(this.g.m=l),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,l=this.h,l!==null&&c in l&&(l=this.h,c in l&&delete l[c])),this.j=new ei(this)}T(Et,ze),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){Yu(this.g)},Et.prototype.o=function(l){var c=this.g;if(typeof l=="string"){var f={};f.__data__=l,l=f}else this.u&&(f={},f.__data__=Lu(l),l=f);c.i.push(new SE(c.Ya++,l)),c.G==3&&rl(c)},Et.prototype.N=function(){this.g.l=null,delete this.j,Yu(this.g),delete this.g,Et.aa.N.call(this)};function fm(l){ju.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var c=l.__sm__;if(c){e:{for(const f in c){l=f;break e}l=void 0}(this.i=l)&&(l=this.i,c=c!==null&&l in c?c[l]:void 0),this.data=c}else this.data=l}T(fm,ju);function pm(){Fu.call(this),this.status=1}T(pm,Fu);function ei(l){this.g=l}T(ei,dm),ei.prototype.ua=function(){qe(this.g,"a")},ei.prototype.ta=function(l){qe(this.g,new fm(l))},ei.prototype.sa=function(l){qe(this.g,new pm)},ei.prototype.ra=function(){qe(this.g,"b")},Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,zu.NO_ERROR=0,zu.TIMEOUT=8,zu.HTTP_ERROR=6,wE.COMPLETE="complete",mE.EventType=is,is.OPEN="a",is.CLOSE="b",is.ERROR="c",is.MESSAGE="d",ze.prototype.listen=ze.prototype.K,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha}).apply(typeof Il<"u"?Il:typeof self<"u"?self:typeof window<"u"?window:{});const fv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new pu("@firebase/firestore");function Lt(t,...e){if(Bi.logLevel<=re.DEBUG){const n=e.map(Lf);Bi.debug(`Firestore (${Uo}): ${t}`,...n)}}function Uw(t,...e){if(Bi.logLevel<=re.ERROR){const n=e.map(Lf);Bi.error(`Firestore (${Uo}): ${t}`,...n)}}function X2(t,...e){if(Bi.logLevel<=re.WARN){const n=e.map(Lf);Bi.warn(`Firestore (${Uo}): ${t}`,...n)}}function Lf(t){if(typeof t=="string")return t;try{/**
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
 */function Mf(t="Unexpected state"){const e=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: `+t;throw Uw(e),new Error(e)}function $s(t,e){t||Mf()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class it extends tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class J2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class Z2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eR{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){$s(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ws;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ws,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Lt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Lt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ws)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Lt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($s(typeof r.accessToken=="string"),new zw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $s(e===null||typeof e=="string"),new Xe(e)}}class tR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class nR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new tR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){$s(this.o===void 0);const r=s=>{s.error!=null&&Lt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Lt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Lt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Lt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($s(typeof n.token=="string"),this.R=n.token,new rR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function sR(t){return t.name==="IndexedDbTransactionError"}class Ra{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ra&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pv,ee;(ee=pv||(pv={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Fw([4294967295,4294967295],0);function Lc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Lt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ws,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new jf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new it(rt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var mv,gv;(gv=mv||(mv={})).ea="default",gv.Cache="cache";/**
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
 */function lR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const vv=new Map;function aR(t,e,n,r){if(e===!0&&r===!0)throw new it(rt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function uR(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Mf()}function cR(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new it(rt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uR(t);throw new it(rt.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class _v{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new it(rt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new it(rt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new it(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new it(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new it(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bw{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _v({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new it(rt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new it(rt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _v(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new J2;switch(r.type){case"firstParty":return new nR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new it(rt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vv.get(n);r&&(Lt("ComponentProvider","Removing Datastore"),vv.delete(n),r.terminate())}(this),Promise.resolve()}}function hR(t,e,n,r={}){var i;const s=(t=cR(t,Bw))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&X2("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Xe.MOCK_USER;else{a=wf(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new it(rt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Xe(h)}t._authCredentials=new Z2(new zw(a,u))}}/**
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
 */class yv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new oR(this,"async_queue_retry"),this.Vu=()=>{const r=Lc();r&&Lt("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Lc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Lc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ws;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!sR(e))throw e;Lt("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Uw("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=jf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Mf()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class dR extends Bw{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new yv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yv(e),this._firestoreClient=void 0,await e}}}function fR(t,e){const n=typeof t=="object"?t:mu(),r=typeof t=="string"?t:"(default)",i=Lo(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=yf("firestore");s&&hR(i,...s)}return i}(function(e,n=!0){(function(i){Uo=i})(wr),pr(new Nn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new dR(new eR(r.getProvider("auth-internal")),new iR(r.getProvider("app-check-internal")),function(h,m){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new it(rt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ra(h.options.projectId,m)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Tt(fv,"4.7.3",e),Tt(fv,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="firebasestorage.googleapis.com",pR="storageBucket",mR=2*60*1e3,gR=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends tn{constructor(e,n,r=0){super(Mc(e),`Firebase Storage: ${n} (${Mc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,nn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Mc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Zt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Zt||(Zt={}));function Mc(t){return"storage/"+t}function vR(){const t="An unknown error occurred, please check the error payload for server response.";return new nn(Zt.UNKNOWN,t)}function _R(){return new nn(Zt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function yR(){return new nn(Zt.CANCELED,"User canceled the upload/download.")}function wR(t){return new nn(Zt.INVALID_URL,"Invalid URL '"+t+"'.")}function ER(t){return new nn(Zt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function wv(t){return new nn(Zt.INVALID_ARGUMENT,t)}function Hw(){return new nn(Zt.APP_DELETED,"The Firebase app was deleted.")}function SR(t){return new nn(Zt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Mt.makeFromUrl(e,n)}catch{return new Mt(e,"")}if(r.path==="")return r;throw ER(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(O){O.path_=decodeURIComponent(O.path)}const m="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",E=new RegExp(`^https?://${p}/${m}/b/${i}/o${g}`,"i"),T={bucket:1,path:3},x=n===Vw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",w=new RegExp(`^https?://${x}/${i}/${A}`,"i"),S=[{regex:a,indices:u,postModify:s},{regex:E,indices:T,postModify:h},{regex:w,indices:{bucket:1,path:2},postModify:h}];for(let O=0;O<S.length;O++){const F=S[O],U=F.regex.exec(e);if(U){const I=U[F.indices.bucket];let y=U[F.indices.path];y||(y=""),r=new Mt(I,y),F.postModify(r);break}}if(r==null)throw wR(e);return r}}class CR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let h=!1;function m(...A){h||(h=!0,e.apply(null,A))}function p(A){i=setTimeout(()=>{i=null,t(E,u())},A)}function g(){s&&clearTimeout(s)}function E(A,...w){if(h){g();return}if(A){g(),m.call(null,A,...w);return}if(u()||o){g(),m.call(null,A,...w);return}r<64&&(r*=2);let S;a===1?(a=2,S=0):S=(r+Math.random())*1e3,p(S)}let T=!1;function x(A){T||(T=!0,g(),!h&&(i!==null?(A||(a=2),clearTimeout(i),p(0)):A||(a=1)))}return p(0),s=setTimeout(()=>{o=!0,x(!0)},n),x}function kR(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(t){return t!==void 0}function Ev(t,e,n,r){if(r<e)throw wv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw wv(`Invalid value for '${t}'. Expected ${n} or less.`)}function NR(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Pa;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Pa||(Pa={}));/**
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
 */function xR(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n,r,i,s,o,a,u,h,m,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=m,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,T)=>{this.resolve_=E,this.reject_=T,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new kl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,h=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Pa.NO_ERROR,u=s.getStatus();if(!a||xR(u,this.additionalRetryCodes_)&&this.retry){const m=s.getErrorCode()===Pa.ABORT;r(!1,new kl(!1,null,m));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new kl(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());TR(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=vR();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?Hw():yR();o(u)}else{const u=_R();o(u)}};this.canceled_?n(!1,new kl(!1,null,!0)):this.backoffId_=IR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class kl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function PR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function AR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function OR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function bR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function DR(t,e,n,r,i,s,o=!0){const a=NR(t.urlParams),u=t.url+a,h=Object.assign({},t.headers);return OR(h,e),PR(h,n),AR(h,s),bR(h,r),new RR(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function MR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Aa{constructor(e,n){this._service=e,n instanceof Mt?this._location=n:this._location=Mt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Aa(e,n)}get root(){const e=new Mt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return MR(this._location.path)}get storage(){return this._service}get parent(){const e=LR(this._location.path);if(e===null)return null;const n=new Mt(this._location.bucket,e);return new Aa(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw SR(e)}}function Sv(t,e){const n=e==null?void 0:e[pR];return n==null?null:Mt.makeFromBucketSpec(n,t)}function jR(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:wf(i,t.app.options.projectId))}class FR{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Vw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mR,this._maxUploadRetryTime=gR,this._requests=new Set,i!=null?this._bucket=Mt.makeFromBucketSpec(i,this._host):this._bucket=Sv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Mt.makeFromBucketSpec(this._url,e):this._bucket=Sv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ev("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ev("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Aa(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new CR(Hw());{const o=DR(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Cv="@firebase/storage",Iv="0.13.2";/**
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
 */const $w="storage";function UR(t=mu(),e){t=wt(t);const r=Lo(t,$w).getImmediate({identifier:e}),i=yf("storage");return i&&zR(r,...i),r}function zR(t,e,n,r={}){jR(t,e,n,r)}function BR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new FR(n,r,i,e,wr)}function VR(){pr(new Nn($w,BR,"PUBLIC").setMultipleInstances(!0)),Tt(Cv,Iv,""),Tt(Cv,Iv,"esm2017")}VR();var kv={};const Tv="@firebase/database",Nv="1.0.8";/**
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
 */let Ww="";function HR(t){Ww=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:_o(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Mn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new $R(e)}}catch{}return new WR},br=Gw("localStorage"),GR=Gw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new pu("@firebase/database"),KR=function(){let t=1;return function(){return t++}}(),Kw=function(t){const e=HT(t),n=new UT;n.update(e);const r=n.digest();return vf.encodeByteArray(r)},zo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=zo.apply(null,r):typeof r=="object"?e+=be(r):e+=r,e+=" "}return e};let Gs=null,xv=!0;const qR=function(t,e){B(!0,"Can't turn on custom loggers persistently."),Ni.logLevel=re.VERBOSE,Gs=Ni.log.bind(Ni)},Ge=function(...t){if(xv===!0&&(xv=!1,Gs===null&&GR.get("logging_enabled")===!0&&qR()),Gs){const e=zo.apply(null,t);Gs(e)}},Bo=function(t){return function(...e){Ge(t,...e)}},Jh=function(...t){const e="FIREBASE INTERNAL ERROR: "+zo(...t);Ni.error(e)},Pn=function(...t){const e=`FIREBASE FATAL ERROR: ${zo(...t)}`;throw Ni.error(e),new Error(e)},ht=function(...t){const e="FIREBASE WARNING: "+zo(...t);Ni.warn(e)},YR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ht("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},QR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Vi="[MIN_NAME]",$r="[MAX_NAME]",es=function(t,e){if(t===e)return 0;if(t===Vi||e===$r)return-1;if(e===Vi||t===$r)return 1;{const n=Rv(t),r=Rv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},XR=function(t,e){return t===e?0:t<e?-1:1},Is=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+be(e))},Ff=function(t){if(typeof t!="object"||t===null)return be(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=be(e[r]),n+=":",n+=Ff(t[e[r]]);return n+="}",n},Yw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function dt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Qw=function(t){B(!qw(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const h=[];for(u=n;u;u-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)h.push(s%2?1:0),s=Math.floor(s/2);h.push(i?1:0),h.reverse();const m=h.join("");let p="";for(u=0;u<64;u+=8){let g=parseInt(m.substr(u,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},JR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ZR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function eP(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const tP=new RegExp("^-?(0*)\\d{1,10}$"),nP=-2147483648,rP=2147483647,Rv=function(t){if(tP.test(t)){const e=Number(t);if(e>=nP&&e<=rP)return e}return null},ts=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ht("Exception was thrown by user callback.",n),e},Math.floor(0))}},iP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ks=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class sP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ht(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ht(e)}}class Wl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Wl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="5",Xw="v",Jw="s",Zw="r",e1="f",t1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,n1="ls",r1="p",Zh="ac",i1="websocket",s1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=br.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&br.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function lP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function l1(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===i1)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===s1)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);lP(t)&&(n.ns=t.namespace);const i=[];return dt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(){this.counters_={}}incrementCounter(e,n=1){Mn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ST(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc={},Fc={};function zf(t){const e=t.toString();return jc[e]||(jc[e]=new aP),jc[e]}function uP(t,e){const n=t.toString();return Fc[n]||(Fc[n]=e()),Fc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ts(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="start",hP="close",dP="pLPCommand",fP="pRTLPCB",a1="id",u1="pw",c1="ser",pP="cb",mP="seg",gP="ts",vP="d",_P="dframe",h1=1870,d1=30,yP=h1-d1,wP=25e3,EP=3e4;class vi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bo(e),this.stats_=zf(n),this.urlFn=u=>(this.appCheckToken&&(u[Zh]=this.appCheckToken),l1(n,s1,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new cP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(EP)),QR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bf((...s)=>{const[o,a,u,h,m]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Pv)this.id=a,this.password=u;else if(o===hP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Pv]="t",r[c1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[pP]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Xw]=Uf,this.transportSessionId&&(r[Jw]=this.transportSessionId),this.lastSessionId&&(r[n1]=this.lastSessionId),this.applicationId&&(r[r1]=this.applicationId),this.appCheckToken&&(r[Zh]=this.appCheckToken),typeof location<"u"&&location.hostname&&t1.test(location.hostname)&&(r[Zw]=e1);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vi.forceAllow_=!0}static forceDisallow(){vi.forceDisallow_=!0}static isAvailable(){return vi.forceAllow_?!0:!vi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!JR()&&!ZR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Y0(n),i=Yw(r,yP);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[_P]="t",r[a1]=e,r[u1]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Bf{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=KR(),window[dP+this.uniqueCallbackIdentifier]=e,window[fP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Bf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ge("frame writing exception"),a.stack&&Ge(a.stack),Ge(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ge("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[a1]=this.myID,e[u1]=this.myPW,e[c1]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+d1+r.length<=h1;){const o=this.pendingSegs.shift();r=r+"&"+mP+i+"="+o.seg+"&"+gP+i+"="+o.ts+"&"+vP+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(wP)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP=16384,CP=45e3;let Oa=null;typeof MozWebSocket<"u"?Oa=MozWebSocket:typeof WebSocket<"u"&&(Oa=WebSocket);class Dt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bo(this.connId),this.stats_=zf(n),this.connURL=Dt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Xw]=Uf,typeof location<"u"&&location.hostname&&t1.test(location.hostname)&&(o[Zw]=e1),n&&(o[Jw]=n),r&&(o[n1]=r),i&&(o[Zh]=i),s&&(o[r1]=s),l1(e,i1,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,br.set("previous_websocket_failure",!0);try{let r;AT(),this.mySock=new Oa(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Oa!==null&&!Dt.forceDisallow_}static previouslyFailed(){return br.isInMemoryStorage||br.get("previous_websocket_failure")===!0}markConnectionHealthy(){br.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=_o(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Yw(n,SP);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(CP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Dt.responsesRequiredToBeHealthy=2;Dt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[vi,Dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Dt&&Dt.isAvailable();let r=n&&!Dt.previouslyFailed();if(e.webSocketOnly&&(n||ht("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Dt];else{const i=this.transports_=[];for(const s of Eo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Eo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Eo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=6e4,kP=5e3,TP=10*1024,NP=100*1024,Uc="t",Av="d",xP="s",Ov="r",RP="e",bv="o",Dv="a",Lv="n",Mv="p",PP="h";class AP{constructor(e,n,r,i,s,o,a,u,h,m){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=h,this.lastSessionId=m,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bo("c:"+this.id+":"),this.transportManager_=new Eo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ks(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>NP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>TP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Uc in e){const n=e[Uc];n===Dv?this.upgradeIfSecondaryHealthy_():n===Ov?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===bv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Is("t",e),r=Is("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Mv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Dv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Is("t",e),r=Is("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Is(Uc,e);if(Av in e){const r=e[Av];if(n===PP){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Lv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===xP?this.onConnectionShutdown_(r):n===Ov?this.onReset_(r):n===RP?Jh("Server Error: "+r):n===bv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Uf!==r&&ht("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ks(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(IP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ks(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Mv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(br.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends p1{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ef()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ba}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=32,Fv=768;class ae{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ie(){return new ae("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function mr(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ae(t.pieces_,e)}function m1(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function OP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function g1(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function v1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ae(e,0)}function xe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ae)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ae(n,0)}function X(t){return t.pieceNum_>=t.pieces_.length}function ot(t,e){const n=Y(t),r=Y(e);if(n===null)return e;if(n===r)return ot(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Vf(t,e){if(mr(t)!==mr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function jt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(mr(t)>mr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class bP{constructor(e,n){this.errorPrefix_=n,this.parts_=g1(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=fu(this.parts_[r]);_1(this)}}function DP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=fu(e),_1(t)}function LP(t){const e=t.parts_.pop();t.byteLength_-=fu(e),t.parts_.length>0&&(t.byteLength_-=1)}function _1(t){if(t.byteLength_>Fv)throw new Error(t.errorPrefix_+"has a key path longer than "+Fv+" bytes ("+t.byteLength_+").");if(t.parts_.length>jv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jv+") or object contains a cycle "+xr(t))}function xr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf extends p1{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Hf}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=1e3,MP=60*5*1e3,Uv=30*1e3,jP=1.3,FP=3e4,UP="server_kill",zv=3;class Sn extends f1{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Sn.nextPersistentConnectionId_++,this.log_=Bo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ks,this.maxReconnectDelay_=MP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ba.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(be(s)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new du,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,h=a.s;Sn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),h!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(h,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Mn(e,"w")){const r=Ui(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ht(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||FT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Uv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=jT(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Jh("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>FP&&(this.reconnectDelay_=ks),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Sn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},h=function(p){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(p)};this.realtime_={close:u,sendRequest:h};const m=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(m),this.appCheckTokenProvider_.getToken(m)]);o?Ge("getToken() completed but was canceled"):(Ge("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,a=new AP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,E=>{ht(E+" ("+this.repoInfo_.toString()+")"),this.interrupt(UP)},s))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&ht(p),u())}}}interrupt(e){Ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hh(this.interruptReasons_)&&(this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Ff(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ae(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ge("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zv&&(this.reconnectDelay_=Uv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ge("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ww.replace(/\./g,"-")]=1,Ef()?e["framework.cordova"]=1:ew()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ba.getInstance().currentlyOnline();return Hh(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Q(Vi,e),i=new Q(Vi,n);return this.compare(r,i)!==0}minPost(){return Q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl;class y1 extends yu{static get __EMPTY_NODE(){return Tl}static set __EMPTY_NODE(e){Tl=e}compare(e,n){return es(e.name,n.name)}isDefinedOn(e){throw Xi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q($r,Tl)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,Tl)}toString(){return".key"}}const xi=new y1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Oe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Oe.RED,this.left=i??lt.EMPTY_NODE,this.right=s??lt.EMPTY_NODE}copy(e,n,r,i,s){return new Oe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return lt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return lt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Oe.RED=!0;Oe.BLACK=!1;class zP{copy(e,n,r,i,s){return this}insert(e,n,r){return new Oe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class lt{constructor(e,n=lt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new lt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Oe.BLACK,null,null))}remove(e){return new lt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Oe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Nl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Nl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Nl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Nl(this.root_,null,this.comparator_,!0,e)}}lt.EMPTY_NODE=new zP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(t,e){return es(t.name,e.name)}function $f(t,e){return es(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ed;function VP(t){ed=t}const w1=function(t){return typeof t=="number"?"number:"+Qw(t):"string:"+t},E1=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Mn(e,".sv"),"Priority must be a string or number.")}else B(t===ed||t.isEmpty(),"priority of unexpected type.");B(t===ed||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bv;class Pe{constructor(e,n=Pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),E1(this.priorityNode_)}static set __childrenNodeConstructor(e){Bv=e}static get __childrenNodeConstructor(){return Bv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return X(e)?this:Y(e)===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Y(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||mr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+w1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Qw(this.value_):e+=this.value_,this.lazyHash_=Kw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Pe.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Pe.VALUE_TYPE_ORDER.indexOf(n),s=Pe.VALUE_TYPE_ORDER.indexOf(r);return B(i>=0,"Unknown leaf type: "+n),B(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S1,C1;function HP(t){S1=t}function $P(t){C1=t}class WP extends yu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?es(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q($r,new Pe("[PRIORITY-POST]",C1))}makePost(e,n){const r=S1(e);return new Q(n,new Pe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Se=new WP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=Math.log(2);class KP{constructor(e){const n=s=>parseInt(Math.log(s)/GP,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Da=function(t,e,n,r){t.sort(e);const i=function(u,h){const m=h-u;let p,g;if(m===0)return null;if(m===1)return p=t[u],g=n?n(p):p,new Oe(g,p.node,Oe.BLACK,null,null);{const E=parseInt(m/2,10)+u,T=i(u,E),x=i(E+1,h);return p=t[E],g=n?n(p):p,new Oe(g,p.node,Oe.BLACK,T,x)}},s=function(u){let h=null,m=null,p=t.length;const g=function(T,x){const A=p-T,w=p;p-=T;const _=i(A+1,w),S=t[A],O=n?n(S):S;E(new Oe(O,S.node,x,null,_))},E=function(T){h?(h.left=T,h=T):(m=T,h=T)};for(let T=0;T<u.count;++T){const x=u.nextBitIsOne(),A=Math.pow(2,u.count-(T+1));x?g(A,Oe.BLACK):(g(A,Oe.BLACK),g(A,Oe.RED))}return m},o=new KP(t.length),a=s(o);return new lt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zc;const ri={};class wn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(ri&&Se,"ChildrenNode.ts has not been loaded"),zc=zc||new wn({".priority":ri},{".priority":Se}),zc}get(e){const n=Ui(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof lt?n:null}hasIndex(e){return Mn(this.indexSet_,e.toString())}addIndex(e,n){B(e!==xi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Q.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Da(r,e.getCompare()):a=ri;const u=e.toString(),h=Object.assign({},this.indexSet_);h[u]=e;const m=Object.assign({},this.indexes_);return m[u]=a,new wn(m,h)}addToIndexes(e,n){const r=Ea(this.indexes_,(i,s)=>{const o=Ui(this.indexSet_,s);if(B(o,"Missing index implementation for "+s),i===ri)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(Q.Wrap);let h=u.getNext();for(;h;)h.name!==e.name&&a.push(h),h=u.getNext();return a.push(e),Da(a,o.getCompare())}else return ri;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new Q(e.name,a))),u.insert(e,e.node)}});return new wn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ea(this.indexes_,i=>{if(i===ri)return i;{const s=n.get(e.name);return s?i.remove(new Q(e.name,s)):i}});return new wn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts;class W{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&E1(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ts||(Ts=new W(new lt($f),null,wn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ts}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ts:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Q(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ts:this.priorityNode_;return new W(i,o,s)}}updateChild(e,n){const r=Y(e);if(r===null)return n;{B(Y(e)!==".priority"||mr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ue(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Se,(o,a)=>{n[o]=a.val(e),r++,s&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+w1(this.getPriority().val())+":"),this.forEachChild(Se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Kw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Vo?-1:0}withIndex(e){if(e===xi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===xi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Se),i=n.getIterator(Se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xi?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qP extends W{constructor(){super(new lt($f),W.EMPTY_NODE,wn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const Vo=new qP;Object.defineProperties(Q,{MIN:{value:new Q(Vi,W.EMPTY_NODE)},MAX:{value:new Q($r,Vo)}});y1.__EMPTY_NODE=W.EMPTY_NODE;Pe.__childrenNodeConstructor=W;VP(Vo);$P(Vo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=!0;function je(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Pe(n,je(e))}if(!(t instanceof Array)&&YP){const n=[];let r=!1;if(dt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=je(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new Q(o,u)))}}),n.length===0)return W.EMPTY_NODE;const s=Da(n,BP,o=>o.name,$f);if(r){const o=Da(n,Se.getCompare());return new W(s,je(e),new wn({".priority":o},{".priority":Se}))}else return new W(s,je(e),wn.Default)}else{let n=W.EMPTY_NODE;return dt(t,(r,i)=>{if(Mn(t,r)&&r.substring(0,1)!=="."){const s=je(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(je(e))}}HP(je);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP extends yu{constructor(e){super(),this.indexPath_=e,B(!X(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?es(e.name,n.name):s}makePost(e,n){const r=je(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,r);return new Q(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,Vo);return new Q($r,e)}toString(){return g1(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP extends yu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?es(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,n){const r=je(e);return new Q(n,r)}toString(){return".value"}}const JP=new XP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t){return{type:"value",snapshotNode:t}}function Hi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function So(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Co(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ZP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(So(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Hi(n,r)):o.trackChildChange(Co(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Se,(i,s)=>{n.hasChild(i)||r.trackChildChange(So(i,s))}),n.isLeafNode()||n.forEachChild(Se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Co(i,s,o))}else r.trackChildChange(Hi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.indexedFilter_=new Wf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Io.getStartPost_(e),this.endPost_=Io.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new Q(n,r))||(r=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=W.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const s=this;return n.forEachChild(Se,(o,a)=>{s.matches(new Q(o,a))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Io(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new Q(n,r))||(r=W.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const p=this.index_.getCompare();o=(g,E)=>p(E,g)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const u=new Q(n,r),h=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),m=this.rangedFilter_.matches(u);if(a.hasChild(n)){const p=a.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,h,this.reverse_);for(;g!=null&&(g.name===n||a.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const E=g==null?1:o(g,u);if(m&&!r.isEmpty()&&E>=0)return s!=null&&s.trackChildChange(Co(n,r,p)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(So(n,p));const x=a.updateImmediateChild(n,W.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(s!=null&&s.trackChildChange(Hi(g.name,g.node)),x.updateImmediateChild(g.name,g.node)):x}}else return r.isEmpty()?e:m&&o(h,u)>=0?(s!=null&&(s.trackChildChange(So(h.name,h.node)),s.trackChildChange(Hi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(h.name,W.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vi}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$r}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Se}copy(){const e=new Gf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function tA(t){return t.loadsAllData()?new Wf(t.getIndex()):t.hasLimit()?new eA(t):new Io(t)}function Vv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Se?n="$priority":t.index_===JP?n="$value":t.index_===xi?n="$key":(B(t.index_ instanceof QP,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=be(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=be(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+be(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=be(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Hv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Se&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La extends f1{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Bo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=La.getListenId_(e,r),a={};this.listens_[o]=a;const u=Vv(e._queryParams);this.restRequest_(s+".json",u,(h,m)=>{let p=m;if(h===404&&(p=null,h=null),h===null&&this.onDataUpdate_(s,p,!1,r),Ui(this.listens_,o)===a){let g;h?h===401?g="permission_denied":g="rest_error:"+h:g="ok",i(g,null)}})}unlisten(e,n){const r=La.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Vv(e._queryParams),r=e._path.toString(),i=new du;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ji(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=_o(a.responseText)}catch{ht("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&ht("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(){return{value:null,children:new Map}}function k1(t,e,n){if(X(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Y(e);t.children.has(r)||t.children.set(r,Ma());const i=t.children.get(r);e=ue(e),k1(i,e,n)}}function td(t,e,n){t.value!==null?n(e,t.value):rA(t,(r,i)=>{const s=new ae(e.toString()+"/"+r);td(i,s,n)})}function rA(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&dt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=10*1e3,sA=30*1e3,oA=5*60*1e3;class lA{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new iA(e);const r=$v+(sA-$v)*Math.random();Ks(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;dt(e,(i,s)=>{s>0&&Mn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ks(this.reportStats_.bind(this),Math.floor(Math.random()*2*oA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ft||(Ft={}));function T1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ft.ACK_USER_WRITE,this.source=T1()}operationForChild(e){if(X(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ae(e));return new ja(ie(),n,this.revert)}}else return B(Y(this.path)===e,"operationForChild called for unrelated child."),new ja(ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.source=e,this.path=n,this.type=Ft.LISTEN_COMPLETE}operationForChild(e){return X(this.path)?new ko(this.source,ie()):new ko(this.source,ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ft.OVERWRITE}operationForChild(e){return X(this.path)?new Wr(this.source,ie(),this.snap.getImmediateChild(e)):new Wr(this.source,ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ft.MERGE}operationForChild(e){if(X(this.path)){const n=this.children.subtree(new ae(e));return n.isEmpty()?null:n.value?new Wr(this.source,ie(),n.value):new To(this.source,ie(),n)}else return B(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new To(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(X(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function uA(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(ZP(o.childName,o.snapshotNode))}),Ns(t,i,"child_removed",e,r,n),Ns(t,i,"child_added",e,r,n),Ns(t,i,"child_moved",s,r,n),Ns(t,i,"child_changed",e,r,n),Ns(t,i,"value",e,r,n),i}function Ns(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>hA(t,a,u)),o.forEach(a=>{const u=cA(t,a,s);i.forEach(h=>{h.respondsTo(a.type)&&e.push(h.createEvent(u,t.query_))})})}function cA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function hA(t,e,n){if(e.childName==null||n.childName==null)throw Xi("Should only compare child_ events.");const r=new Q(e.childName,e.snapshotNode),i=new Q(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t,e){return{eventCache:t,serverCache:e}}function qs(t,e,n,r){return wu(new Gr(e,n,r),t.serverCache)}function N1(t,e,n,r){return wu(t.eventCache,new Gr(e,n,r))}function nd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Kr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bc;const dA=()=>(Bc||(Bc=new lt(XR)),Bc);class fe{constructor(e,n=dA()){this.value=e,this.children=n}static fromObject(e){let n=new fe(null);return dt(e,(r,i)=>{n=n.set(new ae(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ie(),value:this.value};if(X(e))return null;{const r=Y(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ue(e),n);return s!=null?{path:xe(new ae(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(X(e))return this;{const n=Y(e),r=this.children.get(n);return r!==null?r.subtree(ue(e)):new fe(null)}}set(e,n){if(X(e))return new fe(n,this.children);{const r=Y(e),s=(this.children.get(r)||new fe(null)).set(ue(e),n),o=this.children.insert(r,s);return new fe(this.value,o)}}remove(e){if(X(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const n=Y(e),r=this.children.get(n);if(r){const i=r.remove(ue(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new fe(null):new fe(this.value,s)}else return this}}get(e){if(X(e))return this.value;{const n=Y(e),r=this.children.get(n);return r?r.get(ue(e)):null}}setTree(e,n){if(X(e))return n;{const r=Y(e),s=(this.children.get(r)||new fe(null)).setTree(ue(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new fe(this.value,o)}}fold(e){return this.fold_(ie(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(xe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ie(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(X(e))return null;{const s=Y(e),o=this.children.get(s);return o?o.findOnPath_(ue(e),xe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ie(),n)}foreachOnPath_(e,n,r){if(X(e))return this;{this.value&&r(n,this.value);const i=Y(e),s=this.children.get(i);return s?s.foreachOnPath_(ue(e),xe(n,i),r):new fe(null)}}foreach(e){this.foreach_(ie(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(xe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.writeTree_=e}static empty(){return new Vt(new fe(null))}}function Ys(t,e,n){if(X(e))return new Vt(new fe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ot(i,e);return s=s.updateChild(o,n),new Vt(t.writeTree_.set(i,s))}else{const i=new fe(n),s=t.writeTree_.setTree(e,i);return new Vt(s)}}}function Wv(t,e,n){let r=t;return dt(n,(i,s)=>{r=Ys(r,xe(e,i),s)}),r}function Gv(t,e){if(X(e))return Vt.empty();{const n=t.writeTree_.setTree(e,new fe(null));return new Vt(n)}}function rd(t,e){return Qr(t,e)!=null}function Qr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ot(n.path,e)):null}function Kv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Se,(r,i)=>{e.push(new Q(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Q(r,i.value))}),e}function hr(t,e){if(X(e))return t;{const n=Qr(t,e);return n!=null?new Vt(new fe(n)):new Vt(t.writeTree_.subtree(e))}}function id(t){return t.writeTree_.isEmpty()}function $i(t,e){return x1(ie(),t.writeTree_,e)}function x1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(B(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=x1(xe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(xe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(t,e){return O1(e,t)}function fA(t,e,n,r,i){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ys(t.visibleWrites,e,n)),t.lastWriteId=r}function pA(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function mA(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&gA(a,r.path)?i=!1:jt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return vA(t),!0;if(r.snap)t.visibleWrites=Gv(t.visibleWrites,r.path);else{const a=r.children;dt(a,u=>{t.visibleWrites=Gv(t.visibleWrites,xe(r.path,u))})}return!0}else return!1}function gA(t,e){if(t.snap)return jt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&jt(xe(t.path,n),e))return!0;return!1}function vA(t){t.visibleWrites=R1(t.allWrites,_A,ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function _A(t){return t.visible}function R1(t,e,n){let r=Vt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)jt(n,o)?(a=ot(n,o),r=Ys(r,a,s.snap)):jt(o,n)&&(a=ot(o,n),r=Ys(r,ie(),s.snap.getChild(a)));else if(s.children){if(jt(n,o))a=ot(n,o),r=Wv(r,a,s.children);else if(jt(o,n))if(a=ot(o,n),X(a))r=Wv(r,ie(),s.children);else{const u=Ui(s.children,Y(a));if(u){const h=u.getChild(ue(a));r=Ys(r,ie(),h)}}}else throw Xi("WriteRecord should have .snap or .children")}}return r}function P1(t,e,n,r,i){if(!r&&!i){const s=Qr(t.visibleWrites,e);if(s!=null)return s;{const o=hr(t.visibleWrites,e);if(id(o))return n;if(n==null&&!rd(o,ie()))return null;{const a=n||W.EMPTY_NODE;return $i(o,a)}}}else{const s=hr(t.visibleWrites,e);if(!i&&id(s))return n;if(!i&&n==null&&!rd(s,ie()))return null;{const o=function(h){return(h.visible||i)&&(!r||!~r.indexOf(h.writeId))&&(jt(h.path,e)||jt(e,h.path))},a=R1(t.allWrites,o,e),u=n||W.EMPTY_NODE;return $i(a,u)}}}function yA(t,e,n){let r=W.EMPTY_NODE;const i=Qr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=hr(t.visibleWrites,e);return n.forEachChild(Se,(o,a)=>{const u=$i(hr(s,new ae(o)),a);r=r.updateImmediateChild(o,u)}),Kv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=hr(t.visibleWrites,e);return Kv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function wA(t,e,n,r,i){B(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=xe(e,n);if(rd(t.visibleWrites,s))return null;{const o=hr(t.visibleWrites,s);return id(o)?i.getChild(n):$i(o,i.getChild(n))}}function EA(t,e,n,r){const i=xe(e,n),s=Qr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=hr(t.visibleWrites,i);return $i(o,r.getNode().getImmediateChild(n))}else return null}function SA(t,e){return Qr(t.visibleWrites,e)}function CA(t,e,n,r,i,s,o){let a;const u=hr(t.visibleWrites,e),h=Qr(u,ie());if(h!=null)a=h;else if(n!=null)a=$i(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const m=[],p=o.getCompare(),g=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let E=g.getNext();for(;E&&m.length<i;)p(E,r)!==0&&m.push(E),E=g.getNext();return m}else return[]}function IA(){return{visibleWrites:Vt.empty(),allWrites:[],lastWriteId:-1}}function Fa(t,e,n,r){return P1(t.writeTree,t.treePath,e,n,r)}function Qf(t,e){return yA(t.writeTree,t.treePath,e)}function qv(t,e,n,r){return wA(t.writeTree,t.treePath,e,n,r)}function Ua(t,e){return SA(t.writeTree,xe(t.treePath,e))}function kA(t,e,n,r,i,s){return CA(t.writeTree,t.treePath,e,n,r,i,s)}function Xf(t,e,n){return EA(t.writeTree,t.treePath,e,n)}function A1(t,e){return O1(xe(t.treePath,e),t.writeTree)}function O1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Co(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,So(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Hi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Co(r,e.snapshotNode,i.oldSnap));else throw Xi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const b1=new NA;class Jf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Gr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Kr(this.viewCache_),s=kA(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t){return{filter:t}}function RA(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function PA(t,e,n,r,i){const s=new TA;let o,a;if(n.type===Ft.OVERWRITE){const h=n;h.source.fromUser?o=sd(t,e,h.path,h.snap,r,i,s):(B(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered()&&!X(h.path),o=za(t,e,h.path,h.snap,r,i,a,s))}else if(n.type===Ft.MERGE){const h=n;h.source.fromUser?o=OA(t,e,h.path,h.children,r,i,s):(B(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered(),o=od(t,e,h.path,h.children,r,i,a,s))}else if(n.type===Ft.ACK_USER_WRITE){const h=n;h.revert?o=LA(t,e,h.path,r,i,s):o=bA(t,e,h.path,h.affectedTree,r,i,s)}else if(n.type===Ft.LISTEN_COMPLETE)o=DA(t,e,n.path,r,s);else throw Xi("Unknown operation type: "+n.type);const u=s.getChanges();return AA(e,o,u),{viewCache:o,changes:u}}function AA(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=nd(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(I1(nd(e)))}}function D1(t,e,n,r,i,s){const o=e.eventCache;if(Ua(r,n)!=null)return e;{let a,u;if(X(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Kr(e),m=h instanceof W?h:W.EMPTY_NODE,p=Qf(r,m);a=t.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const h=Fa(r,Kr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const h=Y(n);if(h===".priority"){B(mr(n)===1,"Can't have a priority with additional path components");const m=o.getNode();u=e.serverCache.getNode();const p=qv(r,n,m,u);p!=null?a=t.filter.updatePriority(m,p):a=o.getNode()}else{const m=ue(n);let p;if(o.isCompleteForChild(h)){u=e.serverCache.getNode();const g=qv(r,n,o.getNode(),u);g!=null?p=o.getNode().getImmediateChild(h).updateChild(m,g):p=o.getNode().getImmediateChild(h)}else p=Xf(r,h,e.serverCache);p!=null?a=t.filter.updateChild(o.getNode(),h,p,m,i,s):a=o.getNode()}}return qs(e,a,o.isFullyInitialized()||X(n),t.filter.filtersNodes())}}function za(t,e,n,r,i,s,o,a){const u=e.serverCache;let h;const m=o?t.filter:t.filter.getIndexedFilter();if(X(n))h=m.updateFullNode(u.getNode(),r,null);else if(m.filtersNodes()&&!u.isFiltered()){const E=u.getNode().updateChild(n,r);h=m.updateFullNode(u.getNode(),E,null)}else{const E=Y(n);if(!u.isCompleteForPath(n)&&mr(n)>1)return e;const T=ue(n),A=u.getNode().getImmediateChild(E).updateChild(T,r);E===".priority"?h=m.updatePriority(u.getNode(),A):h=m.updateChild(u.getNode(),E,A,T,b1,null)}const p=N1(e,h,u.isFullyInitialized()||X(n),m.filtersNodes()),g=new Jf(i,p,s);return D1(t,p,n,i,g,a)}function sd(t,e,n,r,i,s,o){const a=e.eventCache;let u,h;const m=new Jf(i,e,s);if(X(n))h=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=qs(e,h,!0,t.filter.filtersNodes());else{const p=Y(n);if(p===".priority")h=t.filter.updatePriority(e.eventCache.getNode(),r),u=qs(e,h,a.isFullyInitialized(),a.isFiltered());else{const g=ue(n),E=a.getNode().getImmediateChild(p);let T;if(X(g))T=r;else{const x=m.getCompleteChild(p);x!=null?m1(g)===".priority"&&x.getChild(v1(g)).isEmpty()?T=x:T=x.updateChild(g,r):T=W.EMPTY_NODE}if(E.equals(T))u=e;else{const x=t.filter.updateChild(a.getNode(),p,T,g,m,o);u=qs(e,x,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function Yv(t,e){return t.eventCache.isCompleteForChild(e)}function OA(t,e,n,r,i,s,o){let a=e;return r.foreach((u,h)=>{const m=xe(n,u);Yv(e,Y(m))&&(a=sd(t,a,m,h,i,s,o))}),r.foreach((u,h)=>{const m=xe(n,u);Yv(e,Y(m))||(a=sd(t,a,m,h,i,s,o))}),a}function Qv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function od(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,h;X(n)?h=r:h=new fe(null).setTree(n,r);const m=e.serverCache.getNode();return h.children.inorderTraversal((p,g)=>{if(m.hasChild(p)){const E=e.serverCache.getNode().getImmediateChild(p),T=Qv(t,E,g);u=za(t,u,new ae(p),T,i,s,o,a)}}),h.children.inorderTraversal((p,g)=>{const E=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!m.hasChild(p)&&!E){const T=e.serverCache.getNode().getImmediateChild(p),x=Qv(t,T,g);u=za(t,u,new ae(p),x,i,s,o,a)}}),u}function bA(t,e,n,r,i,s,o){if(Ua(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(X(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return za(t,e,n,u.getNode().getChild(n),i,s,a,o);if(X(n)){let h=new fe(null);return u.getNode().forEachChild(xi,(m,p)=>{h=h.set(new ae(m),p)}),od(t,e,n,h,i,s,a,o)}else return e}else{let h=new fe(null);return r.foreach((m,p)=>{const g=xe(n,m);u.isCompleteForPath(g)&&(h=h.set(m,u.getNode().getChild(g)))}),od(t,e,n,h,i,s,a,o)}}function DA(t,e,n,r,i){const s=e.serverCache,o=N1(e,s.getNode(),s.isFullyInitialized()||X(n),s.isFiltered());return D1(t,o,n,r,b1,i)}function LA(t,e,n,r,i,s){let o;if(Ua(r,n)!=null)return e;{const a=new Jf(r,e,i),u=e.eventCache.getNode();let h;if(X(n)||Y(n)===".priority"){let m;if(e.serverCache.isFullyInitialized())m=Fa(r,Kr(e));else{const p=e.serverCache.getNode();B(p instanceof W,"serverChildren would be complete if leaf node"),m=Qf(r,p)}m=m,h=t.filter.updateFullNode(u,m,s)}else{const m=Y(n);let p=Xf(r,m,e.serverCache);p==null&&e.serverCache.isCompleteForChild(m)&&(p=u.getImmediateChild(m)),p!=null?h=t.filter.updateChild(u,m,p,ue(n),a,s):e.eventCache.getNode().hasChild(m)?h=t.filter.updateChild(u,m,W.EMPTY_NODE,ue(n),a,s):h=u,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Fa(r,Kr(e)),o.isLeafNode()&&(h=t.filter.updateFullNode(h,o,s)))}return o=e.serverCache.isFullyInitialized()||Ua(r,ie())!=null,qs(e,h,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Wf(r.getIndex()),s=tA(r);this.processor_=xA(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),h=s.updateFullNode(W.EMPTY_NODE,a.getNode(),null),m=new Gr(u,o.isFullyInitialized(),i.filtersNodes()),p=new Gr(h,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=wu(p,m),this.eventGenerator_=new aA(this.query_)}get query(){return this.query_}}function jA(t){return t.viewCache_.serverCache.getNode()}function FA(t,e){const n=Kr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!X(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function Xv(t){return t.eventRegistrations_.length===0}function UA(t,e){t.eventRegistrations_.push(e)}function Jv(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Zv(t,e,n,r){e.type===Ft.MERGE&&e.source.queryId!==null&&(B(Kr(t.viewCache_),"We should always have a full cache before handling merges"),B(nd(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=PA(t.processor_,i,e,n,r);return RA(t.processor_,s.viewCache),B(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,L1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function zA(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Se,(s,o)=>{r.push(Hi(s,o))}),n.isFullyInitialized()&&r.push(I1(n.getNode())),L1(t,r,n.getNode(),e)}function L1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return uA(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba;class BA{constructor(){this.views=new Map}}function VA(t){B(!Ba,"__referenceConstructor has already been defined"),Ba=t}function HA(){return B(Ba,"Reference.ts has not been loaded"),Ba}function $A(t){return t.views.size===0}function Zf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return B(s!=null,"SyncTree gave us an op for an invalid query."),Zv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Zv(o,e,n,r));return s}}function WA(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Fa(n,i?r:null),u=!1;a?u=!0:r instanceof W?(a=Qf(n,r),u=!1):(a=W.EMPTY_NODE,u=!1);const h=wu(new Gr(a,u,!1),new Gr(r,i,!1));return new MA(e,h)}return o}function GA(t,e,n,r,i,s){const o=WA(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),UA(o,n),zA(o,n)}function KA(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=gr(t);if(i==="default")for(const[u,h]of t.views.entries())o=o.concat(Jv(h,n,r)),Xv(h)&&(t.views.delete(u),h.query._queryParams.loadsAllData()||s.push(h.query));else{const u=t.views.get(i);u&&(o=o.concat(Jv(u,n,r)),Xv(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!gr(t)&&s.push(new(HA())(e._repo,e._path)),{removed:s,events:o}}function M1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ri(t,e){let n=null;for(const r of t.views.values())n=n||FA(r,e);return n}function j1(t,e){if(e._queryParams.loadsAllData())return Eu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function F1(t,e){return j1(t,e)!=null}function gr(t){return Eu(t)!=null}function Eu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Va;function qA(t){B(!Va,"__referenceConstructor has already been defined"),Va=t}function YA(){return B(Va,"Reference.ts has not been loaded"),Va}let QA=1;class e_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=IA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function U1(t,e,n,r,i){return fA(t.pendingWriteTree_,e,n,r,i),i?Ho(t,new Wr(T1(),e,n)):[]}function Dr(t,e,n=!1){const r=pA(t.pendingWriteTree_,e);if(mA(t.pendingWriteTree_,e)){let s=new fe(null);return r.snap!=null?s=s.set(ie(),!0):dt(r.children,o=>{s=s.set(new ae(o),!0)}),Ho(t,new ja(r.path,s,n))}else return[]}function Su(t,e,n){return Ho(t,new Wr(Kf(),e,n))}function XA(t,e,n){const r=fe.fromObject(n);return Ho(t,new To(Kf(),e,r))}function JA(t,e){return Ho(t,new ko(Kf(),e))}function ZA(t,e,n){const r=tp(t,n);if(r){const i=np(r),s=i.path,o=i.queryId,a=ot(s,e),u=new ko(qf(o),a);return rp(t,s,u)}else return[]}function ld(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||F1(o,e))){const u=KA(o,e,n,r);$A(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const h=u.removed;if(a=u.events,!i){const m=h.findIndex(g=>g._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(s,(g,E)=>gr(E));if(m&&!p){const g=t.syncPointTree_.subtree(s);if(!g.isEmpty()){const E=nO(g);for(let T=0;T<E.length;++T){const x=E[T],A=x.query,w=V1(t,x);t.listenProvider_.startListening(Qs(A),Ha(t,A),w.hashFn,w.onComplete)}}}!p&&h.length>0&&!r&&(m?t.listenProvider_.stopListening(Qs(e),null):h.forEach(g=>{const E=t.queryToTagMap.get(Cu(g));t.listenProvider_.stopListening(Qs(g),E)}))}rO(t,h)}return a}function eO(t,e,n,r){const i=tp(t,r);if(i!=null){const s=np(i),o=s.path,a=s.queryId,u=ot(o,e),h=new Wr(qf(a),u,n);return rp(t,o,h)}else return[]}function tO(t,e,n,r){const i=tp(t,r);if(i){const s=np(i),o=s.path,a=s.queryId,u=ot(o,e),h=fe.fromObject(n),m=new To(qf(a),u,h);return rp(t,o,m)}else return[]}function t_(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,E)=>{const T=ot(g,i);s=s||Ri(E,T),o=o||gr(E)});let a=t.syncPointTree_.get(i);a?(o=o||gr(a),s=s||Ri(a,ie())):(a=new BA,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=W.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((E,T)=>{const x=Ri(T,ie());x&&(s=s.updateImmediateChild(E,x))}));const h=F1(a,e);if(!h&&!e._queryParams.loadsAllData()){const g=Cu(e);B(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const E=iO();t.queryToTagMap.set(g,E),t.tagToQueryMap.set(E,g)}const m=Yf(t.pendingWriteTree_,i);let p=GA(a,e,n,m,s,u);if(!h&&!o&&!r){const g=j1(a,e);p=p.concat(sO(t,e,g))}return p}function ep(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=ot(o,e),h=Ri(a,u);if(h)return h});return P1(i,e,s,n,!0)}function Ho(t,e){return z1(e,t.syncPointTree_,null,Yf(t.pendingWriteTree_,ie()))}function z1(t,e,n,r){if(X(t.path))return B1(t,e,n,r);{const i=e.get(ie());n==null&&i!=null&&(n=Ri(i,ie()));let s=[];const o=Y(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const h=n?n.getImmediateChild(o):null,m=A1(r,o);s=s.concat(z1(a,u,h,m))}return i&&(s=s.concat(Zf(i,t,r,n))),s}}function B1(t,e,n,r){const i=e.get(ie());n==null&&i!=null&&(n=Ri(i,ie()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,h=A1(r,o),m=t.operationForChild(o);m&&(s=s.concat(B1(m,a,u,h)))}),i&&(s=s.concat(Zf(i,t,r,n))),s}function V1(t,e){const n=e.query,r=Ha(t,n);return{hashFn:()=>(jA(e)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?ZA(t,n._path,r):JA(t,n._path);{const s=eP(i,n);return ld(t,n,null,s)}}}}function Ha(t,e){const n=Cu(e);return t.queryToTagMap.get(n)}function Cu(t){return t._path.toString()+"$"+t._queryIdentifier}function tp(t,e){return t.tagToQueryMap.get(e)}function np(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ae(t.substr(0,e))}}function rp(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const i=Yf(t.pendingWriteTree_,e);return Zf(r,n,i,null)}function nO(t){return t.fold((e,n,r)=>{if(n&&gr(n))return[Eu(n)];{let i=[];return n&&(i=M1(n)),dt(r,(s,o)=>{i=i.concat(o)}),i}})}function Qs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(YA())(t._repo,t._path):t}function rO(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Cu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function iO(){return QA++}function sO(t,e,n){const r=e._path,i=Ha(t,e),s=V1(t,n),o=t.listenProvider_.startListening(Qs(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)B(!gr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((h,m,p)=>{if(!X(h)&&m&&gr(m))return[Eu(m).query];{let g=[];return m&&(g=g.concat(M1(m).map(E=>E.query))),dt(p,(E,T)=>{g=g.concat(T)}),g}});for(let h=0;h<u.length;++h){const m=u[h];t.listenProvider_.stopListening(Qs(m),Ha(t,m))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ip(n)}node(){return this.node_}}class sp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=xe(this.path_,e);return new sp(this.syncTree_,n)}node(){return ep(this.syncTree_,this.path_)}}const oO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},n_=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return lO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return aO(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},lO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},aO=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const i=e.node();if(B(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},uO=function(t,e,n,r){return op(e,new sp(n,t),r)},H1=function(t,e,n){return op(t,new ip(e),n)};function op(t,e,n){const r=t.getPriority().val(),i=n_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=n_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Pe(a,je(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Pe(i))),o.forEachChild(Se,(a,u)=>{const h=op(u,e.getImmediateChild(a),n);h!==u&&(s=s.updateImmediateChild(a,h))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ap(t,e){let n=e instanceof ae?e:new ae(e),r=t,i=Y(n);for(;i!==null;){const s=Ui(r.node.children,i)||{children:{},childCount:0};r=new lp(i,r,s),n=ue(n),i=Y(n)}return r}function ns(t){return t.node.value}function $1(t,e){t.node.value=e,ad(t)}function W1(t){return t.node.childCount>0}function cO(t){return ns(t)===void 0&&!W1(t)}function Iu(t,e){dt(t.node.children,(n,r)=>{e(new lp(n,t,r))})}function G1(t,e,n,r){n&&e(t),Iu(t,i=>{G1(i,e,!0)})}function hO(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function $o(t){return new ae(t.parent===null?t.name:$o(t.parent)+"/"+t.name)}function ad(t){t.parent!==null&&dO(t.parent,t.name,t)}function dO(t,e,n){const r=cO(n),i=Mn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ad(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ad(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO=/[\[\].#$\/\u0000-\u001F\u007F]/,pO=/[\[\].#$\u0000-\u001F\u007F]/,Vc=10*1024*1024,K1=function(t){return typeof t=="string"&&t.length!==0&&!fO.test(t)},q1=function(t){return typeof t=="string"&&t.length!==0&&!pO.test(t)},mO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),q1(t)},Y1=function(t,e,n,r){r&&e===void 0||up(Sf(t,"value"),e,n)},up=function(t,e,n){const r=n instanceof ae?new bP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+xr(r));if(typeof e=="function")throw new Error(t+"contains a function "+xr(r)+" with contents = "+e.toString());if(qw(e))throw new Error(t+"contains "+e.toString()+" "+xr(r));if(typeof e=="string"&&e.length>Vc/3&&fu(e)>Vc)throw new Error(t+"contains a string greater than "+Vc+" utf8 bytes "+xr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(dt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!K1(o)))throw new Error(t+" contains an invalid key ("+o+") "+xr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);DP(r,o),up(t,a,r),LP(r)}),i&&s)throw new Error(t+' contains ".value" child '+xr(r)+" in addition to actual children.")}},Q1=function(t,e,n,r){if(!q1(n))throw new Error(Sf(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},gO=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Q1(t,e,n)},X1=function(t,e){if(Y(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},vO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!K1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!mO(n))throw new Error(Sf(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function cp(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Vf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function J1(t,e,n){cp(t,n),Z1(t,r=>Vf(r,e))}function An(t,e,n){cp(t,n),Z1(t,r=>jt(r,e)||jt(e,r))}function Z1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(yO(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function yO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Gs&&Ge("event: "+n.toString()),ts(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO="repo_interrupt",EO=25;class SO{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _O,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ma(),this.transactionQueueTree_=new lp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function CO(t,e,n){if(t.stats_=zf(t.repoInfo_),t.forceRestClient_||iP())t.server_=new La(t.repoInfo_,(r,i,s,o)=>{r_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>i_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Sn(t.repoInfo_,e,(r,i,s,o)=>{r_(t,r,i,s,o)},r=>{i_(t,r)},r=>{IO(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=uP(t.repoInfo_,()=>new lA(t.stats_,t.server_)),t.infoData_=new nA,t.infoSyncTree_=new e_({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Su(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),dp(t,"connected",!1),t.serverSyncTree_=new e_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const h=o(a,u);An(t.eventQueue_,r._path,h)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function eE(t){const n=t.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function hp(t){return oO({timestamp:eE(t)})}function r_(t,e,n,r,i){t.dataUpdateCount++;const s=new ae(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=Ea(n,h=>je(h));o=tO(t.serverSyncTree_,s,u,i)}else{const u=je(n);o=eO(t.serverSyncTree_,s,u,i)}else if(r){const u=Ea(n,h=>je(h));o=XA(t.serverSyncTree_,s,u)}else{const u=je(n);o=Su(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=ku(t,s)),An(t.eventQueue_,a,o)}function i_(t,e){dp(t,"connected",e),e===!1&&TO(t)}function IO(t,e){dt(e,(n,r)=>{dp(t,n,r)})}function dp(t,e,n){const r=new ae("/.info/"+e),i=je(n);t.infoData_.updateSnapshot(r,i);const s=Su(t.infoSyncTree_,r,i);An(t.eventQueue_,r,s)}function tE(t){return t.nextWriteId_++}function kO(t,e,n,r,i){fp(t,"set",{path:e.toString(),value:n,priority:r});const s=hp(t),o=je(n,r),a=ep(t.serverSyncTree_,e),u=H1(o,a,s),h=tE(t),m=U1(t.serverSyncTree_,e,u,h,!0);cp(t.eventQueue_,m),t.server_.put(e.toString(),o.val(!0),(g,E)=>{const T=g==="ok";T||ht("set at "+e+" failed: "+g);const x=Dr(t.serverSyncTree_,h,!T);An(t.eventQueue_,e,x),RO(t,i,g,E)});const p=oE(t,e);ku(t,p),An(t.eventQueue_,p,[])}function TO(t){fp(t,"onDisconnectEvents");const e=hp(t),n=Ma();td(t.onDisconnect_,ie(),(i,s)=>{const o=uO(i,s,t.serverSyncTree_,e);k1(n,i,o)});let r=[];td(n,ie(),(i,s)=>{r=r.concat(Su(t.serverSyncTree_,i,s));const o=oE(t,i);ku(t,o)}),t.onDisconnect_=Ma(),An(t.eventQueue_,ie(),r)}function NO(t,e,n){let r;Y(e._path)===".info"?r=t_(t.infoSyncTree_,e,n):r=t_(t.serverSyncTree_,e,n),J1(t.eventQueue_,e._path,r)}function ud(t,e,n){let r;Y(e._path)===".info"?r=ld(t.infoSyncTree_,e,n):r=ld(t.serverSyncTree_,e,n),J1(t.eventQueue_,e._path,r)}function xO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(wO)}function fp(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ge(n,...e)}function RO(t,e,n,r){e&&ts(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function nE(t,e,n){return ep(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function pp(t,e=t.transactionQueueTree_){if(e||Tu(t,e),ns(e)){const n=iE(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&PO(t,$o(e),n)}else W1(e)&&Iu(e,n=>{pp(t,n)})}function PO(t,e,n){const r=n.map(h=>h.currentWriteId),i=nE(t,e,r);let s=i;const o=i.hash();for(let h=0;h<n.length;h++){const m=n[h];B(m.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),m.status=1,m.retryCount++;const p=ot(e,m.path);s=s.updateChild(p,m.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,h=>{fp(t,"transaction put response",{path:u.toString(),status:h});let m=[];if(h==="ok"){const p=[];for(let g=0;g<n.length;g++)n[g].status=2,m=m.concat(Dr(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&p.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Tu(t,ap(t.transactionQueueTree_,e)),pp(t,t.transactionQueueTree_),An(t.eventQueue_,e,m);for(let g=0;g<p.length;g++)ts(p[g])}else{if(h==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{ht("transaction at "+u.toString()+" failed: "+h);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=h}ku(t,e)}},o)}function ku(t,e){const n=rE(t,e),r=$o(n),i=iE(t,n);return AO(t,i,r),r}function AO(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],h=ot(n,u.path);let m=!1,p;if(B(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)m=!0,p=u.abortReason,i=i.concat(Dr(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=EO)m=!0,p="maxretry",i=i.concat(Dr(t.serverSyncTree_,u.currentWriteId,!0));else{const g=nE(t,u.path,o);u.currentInputSnapshot=g;const E=e[a].update(g.val());if(E!==void 0){up("transaction failed: Data returned ",E,u.path);let T=je(E);typeof E=="object"&&E!=null&&Mn(E,".priority")||(T=T.updatePriority(g.getPriority()));const A=u.currentWriteId,w=hp(t),_=H1(T,g,w);u.currentOutputSnapshotRaw=T,u.currentOutputSnapshotResolved=_,u.currentWriteId=tE(t),o.splice(o.indexOf(A),1),i=i.concat(U1(t.serverSyncTree_,u.path,_,u.currentWriteId,u.applyLocally)),i=i.concat(Dr(t.serverSyncTree_,A,!0))}else m=!0,p="nodata",i=i.concat(Dr(t.serverSyncTree_,u.currentWriteId,!0))}An(t.eventQueue_,n,i),i=[],m&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(p==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(p),!1,null))))}Tu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ts(r[a]);pp(t,t.transactionQueueTree_)}function rE(t,e){let n,r=t.transactionQueueTree_;for(n=Y(e);n!==null&&ns(r)===void 0;)r=ap(r,n),e=ue(e),n=Y(e);return r}function iE(t,e){const n=[];return sE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function sE(t,e,n){const r=ns(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Iu(e,i=>{sE(t,i,n)})}function Tu(t,e){const n=ns(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,$1(e,n.length>0?n:void 0)}Iu(e,r=>{Tu(t,r)})}function oE(t,e){const n=$o(rE(t,e)),r=ap(t.transactionQueueTree_,e);return hO(r,i=>{Hc(t,i)}),Hc(t,r),G1(r,i=>{Hc(t,i)}),n}function Hc(t,e){const n=ns(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Dr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?$1(e,void 0):n.length=s+1,An(t.eventQueue_,$o(e),i);for(let o=0;o<r.length;o++)ts(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function bO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ht(`Invalid query segment '${n}' in query '${t}'`)}return e}const s_=function(t,e){const n=DO(t),r=n.namespace;n.domain==="firebase.com"&&Pn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Pn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||YR();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new o1(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ae(n.pathString)}},DO=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let h=t.indexOf("//");h>=0&&(a=t.substring(0,h-1),t=t.substring(h+2));let m=t.indexOf("/");m===-1&&(m=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(m,p)),m<p&&(i=OO(t.substring(m,p)));const g=bO(t.substring(Math.min(t.length,p)));h=e.indexOf(":"),h>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(h+1),10)):h=e.length;const E=e.slice(0,h);if(E.toLowerCase()==="localhost")n="localhost";else if(E.split(".").length<=2)n=E;else{const T=e.indexOf(".");r=e.substring(0,T).toLowerCase(),n=e.substring(T+1),s=r}"ns"in g&&(s=g.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",LO=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=o_.charAt(n%64),n=Math.floor(n/64);B(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=o_.charAt(e[i]);return B(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+be(this.snapshot.exportVal())}}class jO{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class mp{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return X(this._path)?null:m1(this._path)}get ref(){return new Er(this._repo,this._path)}get _queryIdentifier(){const e=Hv(this._queryParams),n=Ff(e);return n==="{}"?"default":n}get _queryObject(){return Hv(this._queryParams)}isEqual(e){if(e=wt(e),!(e instanceof mp))return!1;const n=this._repo===e._repo,r=Vf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+OP(this._path)}}class Er extends mp{constructor(e,n){super(e,n,new Gf,!1)}get parent(){const e=v1(this._path);return e===null?null:new Er(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class $a{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ae(e),r=No(this.ref,e);return new $a(this._node.getChild(n),r,Se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new $a(i,No(this.ref,r),Se)))}hasChild(e){const n=new ae(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xs(t,e){return t=wt(t),t._checkNotDeleted("ref"),e!==void 0?No(t._root,e):t._root}function No(t,e){return t=wt(t),Y(t._path)===null?gO("child","path",e):Q1("child","path",e),new Er(t._repo,xe(t._path,e))}function l_(t,e){t=wt(t),X1("push",t._path),Y1("push",e,t._path,!0);const n=eE(t._repo),r=LO(n),i=No(t,r),s=No(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function xl(t,e){t=wt(t),X1("set",t._path),Y1("set",e,t._path,!1);const n=new du;return kO(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class gp{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new MO("value",this,new $a(e.snapshotNode,new Er(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new jO(this,e,n):null}matches(e){return e instanceof gp?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function UO(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const u=n,h=(m,p)=>{ud(t._repo,t,a),u(m,p)};h.userCallback=n.userCallback,h.context=n.context,n=h}const o=new FO(n,s||void 0),a=new gp(o);return NO(t._repo,t,a),()=>ud(t._repo,t,a)}function zO(t,e,n,r){return UO(t,"value",e,n,r)}function BO(t,e,n){ud(t._repo,t,null)}VA(Er);qA(Er);/**
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
 */const VO="FIREBASE_DATABASE_EMULATOR_HOST",cd={};let HO=!1;function $O(t,e,n,r){t.repoInfo_=new o1(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function WO(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Pn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ge("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=s_(s,i),a=o.repoInfo,u;typeof process<"u"&&kv&&(u=kv[VO]),u?(s=`http://${u}?ns=${a.namespace}`,o=s_(s,i),a=o.repoInfo):o.repoInfo.secure;const h=new oP(t.name,t.options,e);vO("Invalid Firebase Database URL",o),X(o.path)||Pn("Database URL must point to the root of a Firebase Database (not including a child path).");const m=KO(a,t,h,new sP(t.name,n));return new qO(m,t)}function GO(t,e){const n=cd[e];(!n||n[t.key]!==t)&&Pn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),xO(t),delete n[t.key]}function KO(t,e,n,r){let i=cd[e.name];i||(i={},cd[e.name]=i);let s=i[t.toURLString()];return s&&Pn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new SO(t,HO,n,r),i[t.toURLString()]=s,s}class qO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(CO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Er(this._repo,ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(GO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Pn("Cannot call "+e+" on a deleted database.")}}function YO(t=mu(),e){const n=Lo(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=yf("database");r&&QO(n,...r)}return n}function QO(t,e,n,r={}){t=wt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Pn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Pn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Wl(Wl.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:wf(r.mockUserToken,t.app.options.projectId);s=new Wl(o)}$O(i,e,n,s)}/**
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
 */function XO(t){HR(wr),pr(new Nn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return WO(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Tt(Tv,Nv,t),Tt(Tv,Nv,"esm2017")}/**
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
 */const JO={".sv":"timestamp"};function a_(){return JO}Sn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Sn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};XO();const ZO={apiKey:"AIzaSyA99aKVRIdNJFVA6gsDVPHUl1pIcthwJAs",authDomain:"gen-lang-client-0324052801.firebaseapp.com",projectId:"gen-lang-client-0324052801",storageBucket:"gen-lang-client-0324052801.firebasestorage.app",messagingSenderId:"566230423463",appId:"1:566230423463:web:9123cf85f3f342c4174882",databaseURL:"https://gen-lang-client-0324052801-default-rtdb.firebaseio.com"},Nu=iw(ZO),eb=Y2(Nu),tb=new fn,nb=()=>i2(eb,tb);fR(Nu);UR(Nu);const Rs=YO(Nu);function rb(){const t=en(),{setUser:e,setLoading:n,isAuthenticated:r}=Ln(),[i,s]=D.useState(!0),[o,a]=D.useState(!1),[u,h]=D.useState(""),[m,p]=D.useState({email:"",password:"",username:""});if(r)return t("/lobby"),null;const g=async()=>{h(""),a(!0);try{const x=await nb(),A={uid:x.user.uid,email:x.user.email,displayName:x.user.displayName,photoURL:x.user.photoURL};e(A),n(!1),t("/lobby")}catch{console.log("Using demo mode for Google sign-in");const A={uid:`google_user_${Date.now()}`,email:"demo@gmail.com",displayName:"Demo User",photoURL:null,isGoogle:!0};e(A),n(!1),t("/lobby")}finally{a(!1)}},E=async x=>{x.preventDefault(),h(""),a(!0);try{await new Promise(w=>setTimeout(w,1e3));const A={uid:`user_${Date.now()}`,email:m.email,displayName:m.username||m.email.split("@")[0]};e(A),n(!1),t("/profile")}catch{h("Authentication failed. Please try again.")}finally{a(!1)}},T=x=>{p({...m,[x.target.name]:x.target.value})};return d.jsxs("div",{className:"home",children:[d.jsxs("div",{className:"home-background",children:[d.jsx("div",{className:"bg-gradient-1"}),d.jsx("div",{className:"bg-gradient-2"}),d.jsx("div",{className:"bg-grid"}),d.jsx("div",{className:"bg-glow"})]}),d.jsxs("header",{className:"home-header",children:[d.jsxs("div",{className:"home-logo",children:[d.jsx(gT,{className:"logo-icon"}),d.jsx("span",{children:"Dreamledge"})]}),d.jsxs("button",{className:"header-leaderboard",onClick:()=>t("/leaderboard"),children:[d.jsx(mf,{size:18}),d.jsx("span",{children:"Rankings"})]})]}),d.jsxs("main",{className:"home-main",children:[d.jsxs("section",{className:"hero",children:[d.jsxs("div",{className:"hero-content",children:[d.jsxs("div",{className:"hero-badge",children:[d.jsx("span",{className:"badge-dot"}),"Live Battle Arena"]}),d.jsxs("h1",{className:"hero-title",children:["Where Artists",d.jsx("span",{className:"hero-title-accent",children:" Battle "}),"for Glory"]}),d.jsx("p",{className:"hero-subtitle",children:"Experience the thrill of live rap battles. Watch artists compete, judges critique, and the crowd decides the winner."}),d.jsx("div",{className:"hero-actions",children:d.jsxs("button",{className:"btn btn-primary btn-lg",onClick:()=>{var x;s(!1),(x=document.getElementById("join-section"))==null||x.scrollIntoView({behavior:"smooth"})},children:["Get Started",d.jsx(tT,{size:20})]})})]}),d.jsx("div",{className:"hero-visual",children:d.jsxs("div",{className:"battle-preview",children:[d.jsxs("div",{className:"preview-card artist-1",children:[d.jsx("div",{className:"preview-avatar",children:d.jsx(lr,{size:32})}),d.jsx("span",{className:"preview-label",children:"Artist"})]}),d.jsx("div",{className:"preview-vs",children:"VS"}),d.jsxs("div",{className:"preview-card artist-2",children:[d.jsx("div",{className:"preview-avatar",children:d.jsx(lr,{size:32})}),d.jsx("span",{className:"preview-label",children:"Artist"})]})]})})]}),d.jsxs("section",{className:"features",children:[d.jsxs("div",{className:"feature-card",children:[d.jsx("div",{className:"feature-icon artist",children:d.jsx(lr,{size:28})}),d.jsx("h3",{className:"feature-title",children:"Artists"}),d.jsx("p",{className:"feature-desc",children:"Upload your tracks and battle head-to-head. Show your flow, lyrics, and stage presence."})]}),d.jsxs("div",{className:"feature-card",children:[d.jsx("div",{className:"feature-icon judge",children:d.jsx(_a,{size:28})}),d.jsx("h3",{className:"feature-title",children:"Judges"}),d.jsx("p",{className:"feature-desc",children:"Evaluate performances with professional feedback. Vote on who brings the heat."})]}),d.jsxs("div",{className:"feature-card",children:[d.jsx("div",{className:"feature-icon spectator",children:d.jsx(oT,{size:28})}),d.jsx("h3",{className:"feature-title",children:"Spectators"}),d.jsx("p",{className:"feature-desc",children:"Watch live battles, chat with fans, and vote for your favorite artist."})]})]}),d.jsx("section",{className:"auth-section",id:"join-section",children:d.jsxs("div",{className:"auth-card",children:[d.jsxs("div",{className:"auth-header",children:[d.jsx("h2",{className:"auth-title",children:i?"Welcome Back":"Join Dreamledge"}),d.jsx("p",{className:"auth-subtitle",children:i?"Sign in to continue to the arena":"Create an account to start battling"})]}),d.jsxs("button",{type:"button",className:"btn btn-google",onClick:g,disabled:o,children:[d.jsx(rT,{size:20}),"Continue with Google"]}),d.jsx("div",{className:"auth-divider",children:d.jsx("span",{children:"or"})}),d.jsxs("form",{onSubmit:E,className:"auth-form",children:[!i&&d.jsxs("div",{className:"input-group",children:[d.jsxs("label",{className:"input-label",children:[d.jsx(gf,{size:16}),"Username"]}),d.jsx("input",{type:"text",name:"username",value:m.username,onChange:T,className:"input",placeholder:"Choose a username",required:!i})]}),d.jsxs("div",{className:"input-group",children:[d.jsxs("label",{className:"input-label",children:[d.jsx(B0,{size:16}),"Email"]}),d.jsx("input",{type:"email",name:"email",value:m.email,onChange:T,className:"input",placeholder:"Enter your email",required:!0})]}),d.jsxs("div",{className:"input-group",children:[d.jsxs("label",{className:"input-label",children:[d.jsx(uT,{size:16}),"Password"]}),d.jsx("input",{type:"password",name:"password",value:m.password,onChange:T,className:"input",placeholder:"Enter your password",required:!0})]}),u&&d.jsx("p",{className:"error-text",children:u}),d.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:o,children:o?d.jsxs("span",{className:"loading-dots",children:[d.jsx("span",{}),d.jsx("span",{}),d.jsx("span",{})]}):i?"Sign In":"Create Account"})]}),d.jsx("div",{className:"auth-footer",children:d.jsxs("p",{children:[i?"Don't have an account? ":"Already have an account? ",d.jsx("button",{className:"auth-switch",onClick:()=>s(!i),children:i?"Sign Up":"Sign In"})]})})]})})]}),d.jsx("footer",{className:"home-footer",children:d.jsx("p",{children:"© 2024 Dreamledge. All rights reserved."})})]})}function ib(){const t=en(),{user:e,userProfile:n}=Ln(),{setUserRole:r,setIsHost:i}=df(),[s,o]=D.useState(""),[a,u]=D.useState(!1),[h,m]=D.useState(!1),[p,g]=D.useState([{id:"1",name:"🔥 Hot Bars Only",players:4,status:"waiting"},{id:"2",name:"Underground Battles",players:6,status:"active"},{id:"3",name:"New Artist Showcase",players:3,status:"waiting"}]),E=()=>{const w="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let _="";for(let S=0;S<6;S++)_+=w.charAt(Math.floor(Math.random()*w.length));return _},T=w=>{r(w);const _=E();i(w==="artist"),t(`/waiting/${_}`)},x=w=>{r("spectator"),t(`/waiting/${w}`)},A=()=>{const w=E();i(!0),r("artist"),t(`/waiting/${w}`)};return d.jsx("div",{className:"lobby",children:d.jsxs("div",{className:"lobby-container",children:[d.jsxs("header",{className:"lobby-header",children:[d.jsx("h1",{className:"page-title",children:"Choose Your Path"}),d.jsx("p",{className:"lobby-subtitle",children:"Pick your role and enter the arena"})]}),d.jsxs("div",{className:"role-grid",children:[d.jsxs("button",{className:"role-card role-artist",onClick:()=>T("artist"),children:[d.jsx("div",{className:"role-icon",children:d.jsx(vT,{size:32})}),d.jsxs("div",{className:"role-info",children:[d.jsx("h3",{className:"role-title",children:"Random Artist Battle"}),d.jsx("p",{className:"role-desc",children:"Enter the arena as an artist and compete"})]}),d.jsx("span",{className:"role-badge",children:"Compete"})]}),d.jsxs("button",{className:"role-card role-judge",onClick:()=>T("judge"),children:[d.jsx("div",{className:"role-icon",children:d.jsx(gf,{size:32})}),d.jsxs("div",{className:"role-info",children:[d.jsx("h3",{className:"role-title",children:"Random Judge"}),d.jsx("p",{className:"role-desc",children:"Evaluate and vote on performances"})]}),d.jsx("span",{className:"role-badge",children:"Judge"})]}),d.jsxs("button",{className:"role-card role-spectator",onClick:()=>T("spectator"),children:[d.jsx("div",{className:"role-icon",children:d.jsx(ar,{size:32})}),d.jsxs("div",{className:"role-info",children:[d.jsx("h3",{className:"role-title",children:"Random Spectator"}),d.jsx("p",{className:"role-desc",children:"Watch battles and vote for favorites"})]}),d.jsx("span",{className:"role-badge",children:"Watch"})]}),d.jsxs("button",{className:"role-card role-create",onClick:A,children:[d.jsx("div",{className:"role-icon",children:d.jsx(H0,{size:32})}),d.jsxs("div",{className:"role-info",children:[d.jsx("h3",{className:"role-title",children:"Create Battle"}),d.jsx("p",{className:"role-desc",children:"Host your own private battle room"})]}),d.jsx("span",{className:"role-badge",children:"Host"})]})]}),d.jsxs("div",{className:"join-room",children:[d.jsx("h2",{className:"section-title",children:"Join with Code"}),d.jsxs("div",{className:"join-form",children:[d.jsx("input",{type:"text",className:"input room-input",placeholder:"Enter room code",value:s,onChange:w=>o(w.target.value.toUpperCase()),maxLength:6}),d.jsx("button",{className:"btn btn-primary",onClick:()=>s.length>=4&&x(s),disabled:s.length<4,children:"Join Room"})]})]}),d.jsxs("section",{className:"active-rooms",children:[d.jsx("h2",{className:"section-title",children:"Active Battles"}),d.jsx("div",{className:"rooms-list",children:p.map(w=>d.jsxs("button",{className:"room-card",onClick:()=>x(w.id),children:[d.jsxs("div",{className:"room-info",children:[d.jsx("h3",{className:"room-name",children:w.name}),d.jsxs("div",{className:"room-meta",children:[d.jsxs("span",{className:"room-players",children:[d.jsx(ar,{size:14}),w.players," online"]}),d.jsx("span",{className:`room-status ${w.status}`,children:w.status==="waiting"?"Waiting":"Live"})]})]}),d.jsx("div",{className:"room-action",children:d.jsx(mT,{size:18})})]},w.id))})]})]})})}const qt={sendMessage:async(t,e,n,r,i,s=!1,o=null)=>{try{const a=xs(Rs,`chats/${t}/${e}/messages`),u=l_(a);await xl(u,{id:u.key,userId:n,username:r,message:i||"",isGif:s||!1,gifUrl:o||null,timestamp:a_(),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),console.log("Message sent successfully")}catch(a){console.error("Error sending message:",a)}},subscribeToMessages:(t,e,n)=>{try{const r=xs(Rs,`chats/${t}/${e}/messages`);return zO(r,i=>{const s=[];i.exists()&&i.forEach(o=>{s.push(o.val())}),n(s)},i=>{console.error("Error subscribing to messages:",i)}),()=>BO(r)}catch(r){return console.error("Error setting up subscription:",r),()=>{}}},createRoom:async(t,e)=>{const n=xs(Rs,"chats/rooms"),r=l_(n);return await xl(r,{id:r.key,name:t,createdBy:e,createdAt:a_(),members:{[e]:!0}}),r.key},joinRoom:async(t,e)=>{const n=xs(Rs,`chats/rooms/${t}/members/${e}`);await xl(n,!0)},leaveRoom:async(t,e)=>{const n=xs(Rs,`chats/rooms/${t}/members/${e}`);await xl(n,null)}},sb="qYl52xlnZyVb0oLhm9Tz8KlUn3wOlUsn";function vp({onSelect:t,onClose:e}){const[n,r]=D.useState(""),[i,s]=D.useState([]),[o,a]=D.useState(!0),[u,h]=D.useState(!1);D.useEffect(()=>{m("trending")},[]);const m=async(E,T="")=>{a(!0);try{let A=`https://api.giphy.com/v1/gifs/${E==="trending"?"trending":"search"}?api_key=${sb}&limit=20&rating=pg-13`;T&&(A+=`&q=${encodeURIComponent(T)}`);const _=await(await fetch(A)).json();if(_.data&&Array.isArray(_.data)){const S=_.data.map(O=>{var F,U,I,y,C,N,P,R;return{id:O.id,url:((U=(F=O.images)==null?void 0:F.fixed_width)==null?void 0:U.url)||((y=(I=O.images)==null?void 0:I.original)==null?void 0:y.url),preview:((N=(C=O.images)==null?void 0:C.fixed_width)==null?void 0:N.url)||((R=(P=O.images)==null?void 0:P.original)==null?void 0:R.url)}}).filter(O=>O.url);s(S)}}catch(x){console.error("Error fetching GIFs:",x),s([])}finally{a(!1)}},p=E=>{r(E),E.length>1?m("search",E):E.length===0&&m("trending")},g=E=>{t(E),e()};return d.jsxs("div",{className:"gif-picker",children:[d.jsxs("div",{className:"gif-picker-header",children:[d.jsx("h3",{children:"Choose a GIF"}),d.jsx("button",{className:"gif-close",onClick:e,children:d.jsx(bo,{size:18})})]}),d.jsxs("div",{className:"gif-search",children:[d.jsx($0,{size:18,className:"search-icon"}),d.jsx("input",{type:"text",inputMode:u?"search":"text",placeholder:u?"Search GIFs...":"Tap to search",value:n,onChange:E=>p(E.target.value),onFocus:()=>h(!0),onBlur:()=>h(!1),className:"gif-search-input"})]}),d.jsxs("div",{className:"gif-section",children:[d.jsxs("div",{className:"gif-section-title",children:[d.jsx(W0,{size:14}),n?"Results":"Trending"]}),o?d.jsxs("div",{className:"gif-loading",children:[d.jsx(aT,{size:32,className:"spinner"}),d.jsx("span",{children:"Loading..."})]}):d.jsx("div",{className:"gif-grid",children:i.map(E=>d.jsx("button",{className:"gif-item",onClick:()=>g(E.url),children:d.jsx("img",{src:E.preview,alt:"GIF",loading:"lazy"})},E.id))})]}),d.jsx("div",{className:"gif-picker-footer",children:d.jsx("span",{children:"GIPHY"})})]})}const ob={id:"1",phase:"performance",round:1,currentArtist:1,timeRemaining:180,artist1:{id:"1",name:"MC_Flow",votes:2,isPlaying:!0},artist2:{id:"2",name:"LyricQueen",votes:1,isPlaying:!1}};function lb(){const{battleId:t}=cf(),e=en(),{user:n,userProfile:r}=Ln(),{userRole:i}=df(),{isGifPickerOpen:s,toggleGifPicker:o,closeGifPicker:a}=hu(),[u,h]=D.useState(ob),[m,p]=D.useState([{id:1,userId:"1",username:"MC_Flow",message:"Let's gooo! 🔥",time:"2:35 PM",isGif:!1},{id:2,userId:"3",username:"Spectator_1",message:"This is insane!",time:"2:35 PM",isGif:!1},{id:3,userId:"4",username:"Judge_Maya",message:"That flow was clean",time:"2:36 PM",isGif:!1},{id:4,userId:"5",username:"FanBoy",message:"",time:"2:36 PM",isGif:!0,gifUrl:"https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"}]),[g,E]=D.useState(""),[T,x]=D.useState(!1),[A,w]=D.useState(!1),[_,S]=D.useState(!0),[O,F]=D.useState(80),U=D.useRef(null);D.useEffect(()=>{var R;(R=U.current)==null||R.scrollIntoView({behavior:"smooth"})},[m]),D.useEffect(()=>{if(!t)return;const R=qt.subscribeToMessages("arenas",t,k=>{k.length>0&&p(k)});return()=>R()},[t]),D.useEffect(()=>{const R=setInterval(()=>{h(k=>k.timeRemaining>0?{...k,timeRemaining:k.timeRemaining-1}:k)},1e3);return()=>clearInterval(R)},[]);const I=R=>{const k=Math.floor(R/60),me=R%60;return`${k}:${me.toString().padStart(2,"0")}`},y=async R=>{if(R.preventDefault(),!g.trim()||!t)return;const k=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",me={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:k,message:g,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!1};p(Te=>[...Te,me]);try{await qt.sendMessage("arenas",t,(n==null?void 0:n.uid)||"me",k,g)}catch(Te){console.error("Failed to send message:",Te)}E("")},C=async R=>{if(!t)return;const k=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",me={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:k,message:"",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!0,gifUrl:R};p(Te=>[...Te,me]);try{await qt.sendMessage("arenas",t,(n==null?void 0:n.uid)||"me",k,"",!0,R)}catch(Te){console.error("Failed to send GIF:",Te)}E("")},N=R=>{switch(R){case"waiting":return"Waiting";case"preparing":return"Preparing";case"submission":return"Submit Track";case"performance":return"Performance";case"voting":return"Voting";case"results":return"Results";default:return R}};u.currentArtist===1?u.artist1:u.artist2;const P=u.artist1.votes+u.artist2.votes;return d.jsx("div",{className:"arena",children:d.jsxs("div",{className:"arena-container",children:[d.jsxs("header",{className:"arena-header",children:[d.jsxs("div",{className:"battle-info",children:[d.jsx("span",{className:"battle-phase",children:N(u.phase)}),d.jsx("span",{className:"battle-divider",children:"•"}),d.jsxs("span",{className:"battle-round",children:["Round ",u.round]})]}),d.jsxs("div",{className:`timer ${u.timeRemaining<=30?"urgent":""}`,children:[d.jsx(_T,{size:18}),d.jsx("span",{children:I(u.timeRemaining)})]})]}),d.jsxs("div",{className:"arena-content",children:[d.jsxs("section",{className:"arena-main",children:[d.jsxs("div",{className:"video-grid",children:[d.jsxs("div",{className:`video-box artist ${u.currentArtist===1?"active":""}`,children:[d.jsx("div",{className:"video-content",children:d.jsx("div",{className:"avatar-large",children:d.jsx(lr,{size:40})})}),d.jsxs("div",{className:"video-info",children:[d.jsx("span",{className:"artist-name",children:u.artist1.name}),d.jsxs("div",{className:"artist-stats",children:[d.jsxs("span",{className:"vote-count",children:[d.jsx(Mg,{size:14}),u.artist1.votes]}),u.currentArtist===1&&_&&d.jsxs("span",{className:"playing-indicator",children:[d.jsx(Nc,{size:14}),"Playing"]})]})]})]}),d.jsxs("div",{className:`video-box artist ${u.currentArtist===2?"active":""}`,children:[d.jsx("div",{className:"video-content",children:d.jsx("div",{className:"avatar-large",children:d.jsx(lr,{size:40})})}),d.jsxs("div",{className:"video-info",children:[d.jsx("span",{className:"artist-name",children:u.artist2.name}),d.jsxs("div",{className:"artist-stats",children:[d.jsxs("span",{className:"vote-count",children:[d.jsx(Mg,{size:14}),u.artist2.votes]}),u.currentArtist===2&&_&&d.jsxs("span",{className:"playing-indicator",children:[d.jsx(Nc,{size:14}),"Playing"]})]})]})]}),d.jsxs("div",{className:"video-box judge",children:[d.jsx("div",{className:"video-content",children:d.jsx("div",{className:"avatar-large judge",children:d.jsx(_a,{size:32})})}),d.jsx("div",{className:"video-info",children:d.jsx("span",{className:"artist-name",children:"Judge_Dave"})})]}),d.jsxs("div",{className:"video-box judge",children:[d.jsx("div",{className:"video-content",children:d.jsx("div",{className:"avatar-large judge",children:d.jsx(_a,{size:32})})}),d.jsx("div",{className:"video-info",children:d.jsx("span",{className:"artist-name",children:"Judge_Maya"})})]})]}),d.jsxs("div",{className:"arena-controls",children:[d.jsxs("div",{className:"playback-controls",children:[d.jsx("button",{className:`control-btn large ${_?"active":""}`,onClick:()=>S(!_),children:_?d.jsx(hT,{size:24}):d.jsx(fT,{size:24})}),d.jsxs("div",{className:"volume-control",children:[d.jsx(Nc,{size:18}),d.jsx("input",{type:"range",min:"0",max:"100",value:O,onChange:R=>F(R.target.value),className:"volume-slider"})]})]}),d.jsxs("div",{className:"media-controls",children:[d.jsx("button",{className:`control-btn ${T?"active":"off"}`,onClick:()=>x(!T),children:T?d.jsx(lr,{size:20}):d.jsx(Bh,{size:20})}),d.jsx("button",{className:`control-btn ${A?"active":"off"}`,onClick:()=>w(!A),children:A?d.jsx(G0,{size:20}):d.jsx(Vh,{size:20})}),d.jsx("button",{className:"control-btn leave",onClick:()=>e("/lobby"),children:d.jsx(bo,{size:20})})]})]}),d.jsxs("div",{className:"vote-bar",children:[d.jsx("div",{className:"vote-track",children:d.jsx("div",{className:"vote-progress",style:{width:`${u.artist1.votes/Math.max(P,1)*100}%`}})}),d.jsxs("div",{className:"vote-labels",children:[d.jsx("span",{children:u.artist1.name}),d.jsx("span",{className:"vs",children:"VS"}),d.jsx("span",{children:u.artist2.name})]})]})]}),d.jsxs("aside",{className:"chat-section arena-chat",children:[d.jsxs("div",{className:"chat-header",children:[d.jsx("h3",{children:"Live Crowd"}),d.jsxs("span",{className:"viewer-count",children:[d.jsx(ar,{size:14}),"24 watching"]})]}),d.jsxs("div",{className:"chat-messages",children:[m.map(R=>d.jsxs("div",{className:`chat-message ${R.userId===(n==null?void 0:n.uid)?"own":""} ${R.isGif?"gif-message":""}`,children:[d.jsxs("div",{className:"message-header",children:[d.jsx("span",{className:"message-username",children:R.username}),d.jsx("span",{className:"message-time",children:R.time})]}),R.isGif?d.jsx("img",{src:R.gifUrl,alt:"GIF",className:"message-gif"}):d.jsx("p",{className:"message-content",children:R.message})]},R.id)),d.jsx("div",{ref:U})]}),d.jsxs("form",{className:"chat-input-form",onSubmit:y,children:[d.jsx("button",{type:"button",className:"gif-toggle",onClick:o,children:"GIF"}),d.jsx("input",{type:"text",className:"input chat-input",placeholder:"Say something...",value:g,onChange:R=>E(R.target.value)}),d.jsx("button",{type:"submit",className:"send-btn",disabled:!g.trim(),children:d.jsx(pf,{size:18})})]}),s&&d.jsx(vp,{onSelect:C,onClose:o})]})]})]})})}function ab(){var _;const t=en(),{user:e,userProfile:n,setUserProfile:r}=Ln(),[i,s]=D.useState(!1),[o,a]=D.useState(!1),[u,h]=D.useState(!1),[m,p]=D.useState(""),[g,E]=D.useState({username:"",bio:"",avatarUrl:""});D.useEffect(()=>{if(!e){t("/");return}E({username:(n==null?void 0:n.username)||(e==null?void 0:e.displayName)||"",bio:(n==null?void 0:n.bio)||"",avatarUrl:(n==null?void 0:n.avatarUrl)||""})},[e,n,t]);const T=S=>{const{name:O,value:F}=S.target;E(U=>({...U,[O]:F})),p("")},x=async()=>{if(!g.username.trim()){p("Username is required");return}if(g.username.length<3){p("Username must be at least 3 characters");return}a(!0),p("");try{await new Promise(O=>setTimeout(O,500));const S={...n,username:g.username,bio:g.bio,avatarUrl:g.avatarUrl,lastUpdated:Date.now()};r(S),s(!1),h(!0),setTimeout(()=>h(!1),3e3)}catch{p("Failed to save profile")}finally{a(!1)}},A=()=>{E({username:(n==null?void 0:n.username)||(e==null?void 0:e.displayName)||"",bio:(n==null?void 0:n.bio)||"",avatarUrl:(n==null?void 0:n.avatarUrl)||""}),s(!1),p("")},w=()=>{const S=["#e63946","#2ecc71","#3498db","#9b59b6","#f39c12","#1abc9c","#e74c3c","#34495e"],O=S[Math.floor(Math.random()*S.length)];E(F=>({...F,avatarUrl:O}))};return d.jsx("div",{className:"profile",children:d.jsxs("div",{className:"profile-container",children:[u&&d.jsxs("div",{className:"success-toast",children:[d.jsx(ff,{size:18}),"Profile updated successfully!"]}),d.jsxs("header",{className:"profile-header",children:[d.jsxs("div",{className:"profile-avatar-section",children:[d.jsx("div",{className:"profile-avatar",style:{background:g.avatarUrl||"var(--accent-red)"},children:g.username?g.username.charAt(0).toUpperCase():"?"}),i&&d.jsx("button",{className:"avatar-edit-btn",onClick:w,children:d.jsx(nT,{size:18})})]}),d.jsx("div",{className:"profile-info",children:i?d.jsxs("div",{className:"edit-form",children:[d.jsxs("div",{className:"input-group",children:[d.jsx("label",{className:"input-label",children:"Username"}),d.jsx("input",{type:"text",name:"username",value:g.username,onChange:T,className:"input",placeholder:"Enter username",maxLength:20})]}),d.jsxs("div",{className:"input-group",children:[d.jsx("label",{className:"input-label",children:"Bio"}),d.jsx("textarea",{name:"bio",value:g.bio,onChange:T,className:"input bio-input",placeholder:"Tell us about yourself...",maxLength:150,rows:3}),d.jsxs("span",{className:"char-count",children:[g.bio.length,"/150"]})]}),m&&d.jsxs("div",{className:"error-message",children:[d.jsx(Zk,{size:16}),m]}),d.jsxs("div",{className:"edit-actions",children:[d.jsxs("button",{className:"btn btn-secondary",onClick:A,disabled:o,children:[d.jsx(bo,{size:18}),"Cancel"]}),d.jsx("button",{className:"btn btn-primary",onClick:x,disabled:o,children:o?d.jsx("span",{className:"saving",children:"Saving..."}):d.jsxs(d.Fragment,{children:[d.jsx(pT,{size:18}),"Save"]})})]})]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"profile-name-row",children:[d.jsx("h1",{className:"profile-name",children:g.username||"Anonymous"}),d.jsxs("button",{className:"edit-btn",onClick:()=>s(!0),children:[d.jsx(dT,{size:16}),"Edit"]})]}),d.jsx("p",{className:"profile-bio",children:g.bio||"No bio yet"}),d.jsx("div",{className:"profile-meta",children:d.jsxs("span",{className:"meta-item",children:[d.jsx(B0,{size:14}),(e==null?void 0:e.email)||"No email"]})})]})})]}),d.jsxs("section",{className:"profile-stats",children:[d.jsxs("div",{className:"stat-card",children:[d.jsx("span",{className:"stat-value",children:"0"}),d.jsx("span",{className:"stat-label",children:"Battles Won"})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("span",{className:"stat-value",children:"0"}),d.jsx("span",{className:"stat-label",children:"Battles Lost"})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("span",{className:"stat-value",children:"0"}),d.jsx("span",{className:"stat-label",children:"Total Votes"})]})]}),d.jsxs("section",{className:"profile-section",children:[d.jsx("h2",{className:"section-title",children:"Account Info"}),d.jsxs("div",{className:"info-list",children:[d.jsxs("div",{className:"info-item",children:[d.jsx("span",{className:"info-label",children:"User ID"}),d.jsx("span",{className:"info-value mono",children:((_=e==null?void 0:e.uid)==null?void 0:_.slice(0,12))||"N/A"})]}),d.jsxs("div",{className:"info-item",children:[d.jsx("span",{className:"info-label",children:"Account Type"}),d.jsx("span",{className:"info-value",children:"Free"})]}),d.jsxs("div",{className:"info-item",children:[d.jsx("span",{className:"info-label",children:"Member Since"}),d.jsx("span",{className:"info-value",children:new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"})})]})]})]}),d.jsx("div",{className:"profile-note",children:d.jsx("p",{children:"Changes to your username and profile picture update instantly across the app."})})]})})}const ub=[{id:"1",type:"dm",name:"MC_Flow",avatar:"#e63946",lastMessage:"GG last battle!",time:"2:30 PM",unread:2},{id:"2",type:"dm",name:"Judge_Dave",avatar:"#2ecc71",lastMessage:"Your flow was clean",time:"1:15 PM",unread:0},{id:"3",type:"room",name:"Battle Lounge",avatar:"#3498db",lastMessage:"Who's ready for the next battle?",time:"12:45 PM",unread:5,members:24},{id:"4",type:"room",name:"Underground Cypher",avatar:"#9b59b6",lastMessage:"New track just dropped!",time:"Yesterday",unread:0,members:156}],cb=[{id:"room1",name:"Battle Lounge",members:24,isPublic:!0},{id:"room2",name:"Underground Cypher",members:156,isPublic:!0},{id:"room3",name:"Hip Hop Heads",members:89,isPublic:!0},{id:"room4",name:"Beat Makers",members:67,isPublic:!0}],u_=[{id:1,userId:"1",username:"MC_Flow",message:"GG last battle! 🔥",time:"2:30 PM"},{id:2,userId:"me",username:"You",message:"Thanks! You killed it too",time:"2:31 PM"},{id:3,userId:"1",username:"MC_Flow",message:"Wanna go again?",time:"2:32 PM"},{id:4,userId:"me",username:"You",message:"I'm down. Let me warm up first",time:"2:33 PM"},{id:5,userId:"1",username:"MC_Flow",message:"Bet. I'll create a room",time:"2:34 PM"}],c_=[{id:1,userId:"user1",username:"BeatMaker99",message:"Who's ready for the next battle?",time:"12:45 PM"},{id:2,userId:"user2",username:"FlowMaster",message:"I am! Hit me up",time:"12:46 PM"},{id:3,userId:"user3",username:"Lyricist",message:"Gonna spectate this one",time:"12:47 PM"},{id:4,userId:"user4",username:"HipHopFan",message:"This arena is fire 🔥",time:"12:48 PM"}];function h_(){const{conversationId:t}=cf(),e=en(),{user:n,userProfile:r}=Ln(),{isGifPickerOpen:i,toggleGifPicker:s,closeGifPicker:o}=hu(),[a,u]=D.useState(ub),[h,m]=D.useState(cb),[p,g]=D.useState(t?"chat":"dms"),[E,T]=D.useState(null),[x,A]=D.useState([]),[w,_]=D.useState(""),[S,O]=D.useState(""),[F,U]=D.useState(!1),[I,y]=D.useState(""),[C,N]=D.useState(!1),P=D.useRef(null);D.useEffect(()=>{if(t){const M=a.find(H=>H.id===t);M&&(T(M),A(M.type==="room"?c_:u_),g("chat"))}},[t,a]),D.useEffect(()=>{var M;(M=P.current)==null||M.scrollIntoView({behavior:"smooth"})},[x]),D.useEffect(()=>{if(!E)return;const M=E.type==="room"?"rooms":"dms",H=E.id,q=qt.subscribeToMessages(M,H,Z=>{Z.length>0?(A(Z),N(!0)):N(!1)});return()=>q()},[E]);const R=a.filter(M=>M.name.toLowerCase().includes(S.toLowerCase())),k=h.filter(M=>M.name.toLowerCase().includes(S.toLowerCase())),me=M=>{T(M),A(M.type==="room"?c_:u_),g("chat"),e(`/messages/${M.id}`,{replace:!0})},Te=async M=>{if(M.preventDefault(),!w.trim()||!E)return;const H=E.type==="room"?"rooms":"dms",q=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",Z={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:q,message:w,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!1};A(se=>[...se,Z]);try{await qt.sendMessage(H,E.id,(n==null?void 0:n.uid)||"me",q,w)}catch(se){console.error("Failed to send message:",se)}_("")},rn=async M=>{if(!E)return;const H=E.type==="room"?"rooms":"dms",q=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",Z={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:q,message:"",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!0,gifUrl:M};A(se=>[...se,Z]);try{await qt.sendMessage(H,E.id,(n==null?void 0:n.uid)||"me",q,"",!0,M)}catch(se){console.error("Failed to send GIF:",se)}_("")},ft=async()=>{if(I.trim()){r!=null&&r.username||n!=null&&n.displayName;try{const H={id:await qt.createRoom(I,(n==null?void 0:n.uid)||"me"),name:I,members:1,isPublic:!0,type:"room",lastMessage:"Room created",time:"Now",unread:0};m([H,...h]),u([H,...a]),y(""),U(!1),me(H)}catch(M){console.error("Failed to create room:",M)}}},j=()=>{T(null),g("dms"),e("/messages")};return d.jsx("div",{className:"messages",children:d.jsx("div",{className:"messages-container",children:p==="chat"&&E?d.jsxs("div",{className:"chat-view",children:[d.jsxs("header",{className:"chat-view-header",children:[d.jsx("button",{className:"back-btn",onClick:j,children:d.jsx(eT,{size:20})}),d.jsxs("div",{className:"chat-view-info",children:[d.jsx("span",{className:"chat-view-avatar",style:{background:E.avatar},children:E.type==="room"?d.jsx(Lg,{size:18}):E.name.charAt(0)}),d.jsxs("div",{className:"chat-view-details",children:[d.jsx("h2",{className:"chat-view-name",children:E.name}),E.type==="room"&&d.jsxs("span",{className:"chat-view-meta",children:[d.jsx(ar,{size:12}),E.members," members"]})]})]})]}),d.jsxs("div",{className:"chat-view-messages",children:[x.map(M=>d.jsxs("div",{className:`chat-view-message ${M.userId===(n==null?void 0:n.uid)||M.userId==="me"?"own":""} ${M.isGif?"gif-message":""}`,children:[M.userId!=="me"&&d.jsx("span",{className:"message-sender",children:M.username}),M.isGif?d.jsx("img",{src:M.gifUrl,alt:"GIF",className:"message-gif"}):d.jsx("p",{className:"message-text",children:M.message}),d.jsx("span",{className:"message-time",children:M.time})]},M.id)),d.jsx("div",{ref:P})]}),d.jsxs("form",{className:"chat-view-input",onSubmit:Te,children:[d.jsx("button",{type:"button",className:"gif-toggle",onClick:s,children:"GIF"}),d.jsx("input",{type:"text",className:"input",placeholder:`Message ${E.name}`,value:w,onChange:M=>_(M.target.value)}),d.jsx("button",{type:"submit",className:"send-btn",disabled:!w.trim(),children:d.jsx(pf,{size:20})})]}),i&&d.jsx(vp,{onSelect:rn,onClose:s})]}):d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"messages-header",children:d.jsx("h1",{className:"page-title",children:"Messages"})}),d.jsxs("div",{className:"messages-tabs",children:[d.jsxs("button",{className:`tab-btn ${p==="dms"?"active":""}`,onClick:()=>g("dms"),children:[d.jsx(V0,{size:18}),"Direct"]}),d.jsxs("button",{className:`tab-btn ${p==="rooms"?"active":""}`,onClick:()=>g("rooms"),children:[d.jsx(ar,{size:18}),"Rooms"]})]}),d.jsxs("div",{className:"search-bar",children:[d.jsx($0,{size:18,className:"search-icon"}),d.jsx("input",{type:"text",className:"input search-input",placeholder:"Search conversations...",value:S,onChange:M=>O(M.target.value)})]}),p==="dms"&&d.jsx("div",{className:"conversations-list",children:R.filter(M=>M.type==="dm").map(M=>d.jsxs("button",{className:"conversation-item",onClick:()=>me(M),children:[d.jsx("span",{className:"conv-avatar",style:{background:M.avatar},children:M.name.charAt(0)}),d.jsxs("div",{className:"conv-info",children:[d.jsxs("div",{className:"conv-header",children:[d.jsx("span",{className:"conv-name",children:M.name}),d.jsx("span",{className:"conv-time",children:M.time})]}),d.jsx("p",{className:"conv-preview",children:M.lastMessage})]}),M.unread>0&&d.jsx("span",{className:"unread-badge",children:M.unread})]},M.id))}),p==="rooms"&&d.jsxs("div",{className:"rooms-section",children:[d.jsxs("button",{className:"create-room-btn",onClick:()=>U(!0),children:[d.jsx(H0,{size:20}),"Create Room"]}),d.jsx("div",{className:"rooms-list",children:k.map(M=>d.jsxs("button",{className:"room-item",onClick:()=>me({...M,type:"room",lastMessage:"Join the conversation",time:""}),children:[d.jsx("span",{className:"room-avatar",children:d.jsx(Lg,{size:18})}),d.jsxs("div",{className:"room-info",children:[d.jsx("span",{className:"room-name",children:M.name}),d.jsxs("span",{className:"room-members",children:[d.jsx(ar,{size:12}),M.members," members"]})]})]},M.id))})]}),F&&d.jsx("div",{className:"modal-overlay",onClick:()=>U(!1),children:d.jsxs("div",{className:"modal create-room-modal",onClick:M=>M.stopPropagation(),children:[d.jsxs("div",{className:"modal-header",children:[d.jsx("h3",{className:"modal-title",children:"Create Room"}),d.jsx("button",{className:"modal-close",onClick:()=>U(!1),children:d.jsx(bo,{size:20})})]}),d.jsxs("div",{className:"input-group",children:[d.jsx("label",{className:"input-label",children:"Room Name"}),d.jsx("input",{type:"text",className:"input",placeholder:"Enter room name",value:I,onChange:M=>y(M.target.value),maxLength:30})]}),d.jsxs("button",{className:"btn btn-primary btn-lg",onClick:ft,disabled:!I.trim(),children:[d.jsx(ff,{size:18}),"Create"]})]})})]})})})}const hb=[{id:"1",username:"MC_Flow",points:2450,wins:72,avatar:"#e63946",joinedAt:"2024-01-15"},{id:"2",username:"LyricQueen",points:2380,wins:69,avatar:"#9b59b6",joinedAt:"2024-01-18"},{id:"3",username:"BeatMaker99",points:1890,wins:44,avatar:"#2ecc71",joinedAt:"2024-02-01"},{id:"4",username:"FlowMaster",points:1650,wins:32,avatar:"#3498db",joinedAt:"2024-02-10"},{id:"5",username:"RhymeStar",points:1420,wins:21,avatar:"#f39c12",joinedAt:"2024-02-20"},{id:"6",username:"MicDropper",points:1280,wins:14,avatar:"#1abc9c",joinedAt:"2024-03-01"},{id:"7",username:"VerseKing",points:1150,wins:7,avatar:"#e74c3c",joinedAt:"2024-03-05"},{id:"8",username:"CypherSoul",points:1080,wins:4,avatar:"#34495e",joinedAt:"2024-03-08"},{id:"9",username:"BattleBorn",points:1050,wins:2,avatar:"#16a085",joinedAt:"2024-03-12"},{id:"10",username:"NewEntry",points:1e3,wins:0,avatar:"#8e44ad",joinedAt:"2024-03-15"}];function db(){en();const{user:t,userProfile:e,isAuthenticated:n}=Ln(),[r,i]=D.useState([]),[s,o]=D.useState(null);D.useEffect(()=>{const h=[...hb].sort((m,p)=>p.points!==m.points?p.points-m.points:new Date(m.joinedAt)-new Date(p.joinedAt));if(i(h),t){const m=h.findIndex(p=>p.id===(t==null?void 0:t.uid));m>=0&&o(m+1)}},[t]);const a=h=>{switch(h){case 0:return d.jsx(sT,{size:20,className:"rank-icon gold"});case 1:return d.jsx(jg,{size:20,className:"rank-icon silver"});case 2:return d.jsx(jg,{size:20,className:"rank-icon bronze"});default:return d.jsx("span",{className:"rank-number",children:h+1})}},u=h=>(h==null?void 0:h.charAt(0).toUpperCase())||"?";return d.jsx("div",{className:"leaderboard-page",children:d.jsxs("div",{className:"leaderboard-container",children:[d.jsxs("header",{className:"leaderboard-header",children:[d.jsxs("div",{className:"header-content",children:[d.jsx(mf,{size:32,className:"header-icon"}),d.jsx("h1",{className:"page-title",children:"Leaderboard"})]}),d.jsx("p",{className:"header-subtitle",children:"Top performers in the arena"})]}),s&&d.jsxs("div",{className:"your-rank-card",children:[d.jsxs("div",{className:"your-rank-info",children:[d.jsx("span",{className:"your-rank-label",children:"Your Rank"}),d.jsxs("span",{className:"your-rank-number",children:["#",s]})]}),d.jsx("div",{className:"your-stats",children:d.jsxs("div",{className:"stat",children:[d.jsx(Fg,{size:16,className:"stat-icon"}),d.jsx("span",{className:"stat-value",children:(e==null?void 0:e.points)||1e3}),d.jsx("span",{className:"stat-label",children:"Points"})]})})]}),d.jsx("div",{className:"leaderboard-list",children:r.map((h,m)=>d.jsxs("div",{className:`leaderboard-card ${m<3?"top-three":""} ${h.id===(t==null?void 0:t.uid)?"current-user":""}`,children:[d.jsx("div",{className:"rank-position",children:a(m)}),d.jsx("div",{className:"user-avatar",style:{background:h.avatar},children:u(h.username)}),d.jsxs("div",{className:"user-info",children:[d.jsx("span",{className:"username",children:h.username}),d.jsxs("span",{className:"wins",children:[h.wins," wins"]})]}),d.jsxs("div",{className:"user-points",children:[d.jsx("span",{className:"points-value",children:h.points.toLocaleString()}),d.jsx("span",{className:"points-label",children:"pts"})]})]},h.id))}),d.jsxs("div",{className:"leaderboard-info",children:[d.jsxs("div",{className:"info-item",children:[d.jsx(W0,{size:16}),d.jsx("span",{children:"+20 points per win"})]}),d.jsxs("div",{className:"info-item",children:[d.jsx(Fg,{size:16}),d.jsx("span",{children:"+1000 points for joining"})]})]})]})})}const fb=[{id:"1",name:"MC_Flow",role:"artist",isReady:!0,hasVideo:!0,hasAudio:!0},{id:"2",name:"LyricQueen",role:"artist",isReady:!0,hasVideo:!0,hasAudio:!1},{id:"3",name:"Judge_Dave",role:"judge",isReady:!0,hasVideo:!0,hasAudio:!0},{id:"4",name:"Judge_Maya",role:"judge",isReady:!1,hasVideo:!1,hasAudio:!0}];function pb(){const{roomId:t}=cf(),e=en(),{user:n,userProfile:r}=Ln(),{userRole:i,isHost:s,setParticipants:o}=df(),{isGifPickerOpen:a,toggleGifPicker:u,closeGifPicker:h}=hu(),[m,p]=D.useState(fb),[g,E]=D.useState([{id:1,userId:"1",username:"MC_Flow",message:"Ready to drop some heat! 🔥",time:"2:30 PM"},{id:2,userId:"3",username:"Judge_Dave",message:"Let's see what you got",time:"2:31 PM"},{id:3,userId:"2",username:"LyricQueen",message:"GGs in advance 😤",time:"2:32 PM"}]),[T,x]=D.useState(""),[A,w]=D.useState(!1),[_,S]=D.useState(!0),[O,F]=D.useState(!0),[U,I]=D.useState(!1),y=D.useRef(null),C=m.filter(j=>j.role==="artist"&&j.isReady).length>=2&&m.filter(j=>j.role==="judge").length>=2;D.useEffect(()=>{var j;(j=y.current)==null||j.scrollIntoView({behavior:"smooth"})},[g]),D.useEffect(()=>{if(!t)return;const j=qt.subscribeToMessages("waitingRooms",t,M=>{M.length>0&&E(M)});return()=>j()},[t]);const N=()=>{navigator.clipboard.writeText(t),w(!0),setTimeout(()=>w(!1),2e3)},P=async j=>{if(j.preventDefault(),!T.trim()||!t)return;const M=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",H={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:M,message:T,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};E(q=>[...q,H]);try{await qt.sendMessage("waitingRooms",t,(n==null?void 0:n.uid)||"me",M,T)}catch(q){console.error("Failed to send message:",q)}x("")},R=async j=>{if(!t)return;const M=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",H={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:M,message:"",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!0,gifUrl:j};E(q=>[...q,H]);try{await qt.sendMessage("waitingRooms",t,(n==null?void 0:n.uid)||"me",M,"",!0,j)}catch(q){console.error("Failed to send GIF:",q)}x("")},k=()=>{C&&(I(!0),setTimeout(()=>{e(`/arena/${t}`)},1500))},me=j=>{switch(j){case"artist":return d.jsx(lr,{size:14});case"judge":return d.jsx(_a,{size:14});default:return d.jsx(ar,{size:14})}},Te=m.filter(j=>j.isReady).length,rn=m.filter(j=>j.role==="artist").length,ft=m.filter(j=>j.role==="judge").length;return d.jsx("div",{className:"waiting-room",children:d.jsxs("div",{className:"waiting-container",children:[d.jsxs("header",{className:"waiting-header",children:[d.jsxs("div",{className:"room-code-display",children:[d.jsx("span",{className:"room-label",children:"Room Code"}),d.jsxs("div",{className:"room-code-row",children:[d.jsx("span",{className:"room-code",children:t}),d.jsx("button",{className:"copy-btn",onClick:N,children:A?d.jsx(ff,{size:18}):d.jsx(iT,{size:18})})]})]}),d.jsxs("div",{className:"waiting-status",children:[d.jsxs("div",{className:"status-item",children:[d.jsxs("span",{className:"status-value",children:[rn,"/2"]}),d.jsx("span",{className:"status-label",children:"Artists"})]}),d.jsxs("div",{className:"status-item",children:[d.jsxs("span",{className:"status-value",children:[ft,"/2"]}),d.jsx("span",{className:"status-label",children:"Judges"})]}),d.jsxs("div",{className:"status-item",children:[d.jsx("span",{className:"status-value",children:Te}),d.jsx("span",{className:"status-label",children:"Ready"})]})]})]}),d.jsxs("div",{className:"waiting-content",children:[d.jsxs("section",{className:"video-section",children:[d.jsx("h2",{className:"section-title",children:"Waiting for Players"}),d.jsx("div",{className:"video-grid",children:[...Array(4)].map((j,M)=>{const H=m[M];return d.jsx("div",{className:`video-box ${H?"has-participant":"empty"}`,children:H?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"video-placeholder",children:d.jsx("div",{className:"avatar-placeholder",children:H.name.charAt(0)})}),d.jsxs("div",{className:"video-overlay",children:[d.jsxs("div",{className:"participant-info",children:[d.jsxs("span",{className:`role-badge-small badge-${H.role}`,children:[me(H.role),H.role]}),d.jsx("span",{className:"participant-name",children:H.name})]}),d.jsxs("div",{className:"media-indicators",children:[!H.hasAudio&&d.jsx(Bh,{size:14}),!H.hasVideo&&d.jsx(Vh,{size:14})]})]}),H.isReady&&d.jsx("div",{className:"ready-indicator",children:"Ready"})]}):d.jsxs("div",{className:"empty-slot",children:[d.jsx(ar,{size:32}),d.jsx("span",{children:"Waiting..."})]})},M)})}),d.jsxs("div",{className:"media-controls",children:[d.jsx("button",{className:`control-btn ${O?"active":"off"}`,onClick:()=>F(!O),children:O?d.jsx(lr,{size:20}):d.jsx(Bh,{size:20})}),d.jsx("button",{className:`control-btn ${_?"active":"off"}`,onClick:()=>S(!_),children:_?d.jsx(G0,{size:20}):d.jsx(Vh,{size:20})}),d.jsx("button",{className:"control-btn leave",onClick:()=>e("/lobby"),children:d.jsx(bo,{size:20})})]})]}),d.jsxs("aside",{className:"chat-section",children:[d.jsx("div",{className:"chat-header",children:d.jsx("h3",{children:"Waiting Room Chat"})}),d.jsxs("div",{className:"chat-messages",children:[g.map(j=>d.jsxs("div",{className:`chat-message ${j.userId===(n==null?void 0:n.uid)?"own":""} ${j.isGif?"gif-message":""}`,children:[d.jsxs("div",{className:"message-header",children:[d.jsx("span",{className:"message-username",children:j.username}),d.jsx("span",{className:"message-time",children:j.time})]}),j.isGif?d.jsx("img",{src:j.gifUrl,alt:"GIF",className:"message-gif"}):d.jsx("p",{className:"message-content",children:j.message})]},j.id)),d.jsx("div",{ref:y})]}),d.jsxs("form",{className:"chat-input-form",onSubmit:P,children:[d.jsx("button",{type:"button",className:"gif-toggle",onClick:u,children:"GIF"}),d.jsx("input",{type:"text",className:"input chat-input",placeholder:"Say something...",value:T,onChange:j=>x(j.target.value)}),d.jsx("button",{type:"submit",className:"send-btn",disabled:!T.trim(),children:d.jsx(pf,{size:18})})]}),a&&d.jsx(vp,{onSelect:R,onClose:u})]})]}),s&&d.jsxs("div",{className:"start-section",children:[d.jsx("button",{className:"btn btn-primary btn-lg start-btn",onClick:k,disabled:!C||U,children:U?"Starting...":"Start Battle"}),!C&&d.jsx("p",{className:"start-hint",children:"Need 2 artists and 2 judges ready to start"})]})]})})}function ii({children:t}){const{isAuthenticated:e,isLoading:n}=Ln(),[r,i]=D.useState(!1);return D.useEffect(()=>{const s=setTimeout(()=>i(!0),100);return()=>clearTimeout(s)},[]),n||!r?d.jsx("div",{className:"loading-screen",children:d.jsxs("div",{className:"loading-content",children:[d.jsx("div",{className:"loading-logo",children:"Dreamledge"}),d.jsx("div",{className:"loading-spinner"})]})}):e?t:d.jsx(D0,{to:"/",replace:!0})}function mb(){return d.jsx(hk,{children:d.jsxs("div",{className:"app",children:[d.jsx(yT,{}),d.jsx("main",{className:"main-content",children:d.jsxs(rk,{children:[d.jsx(Wt,{path:"/",element:d.jsx(rb,{})}),d.jsx(Wt,{path:"/lobby",element:d.jsx(ii,{children:d.jsx(ib,{})})}),d.jsx(Wt,{path:"/waiting/:roomId",element:d.jsx(ii,{children:d.jsx(pb,{})})}),d.jsx(Wt,{path:"/arena/:battleId",element:d.jsx(ii,{children:d.jsx(lb,{})})}),d.jsx(Wt,{path:"/profile",element:d.jsx(ii,{children:d.jsx(ab,{})})}),d.jsx(Wt,{path:"/messages",element:d.jsx(ii,{children:d.jsx(h_,{})})}),d.jsx(Wt,{path:"/messages/:conversationId",element:d.jsx(ii,{children:d.jsx(h_,{})})}),d.jsx(Wt,{path:"/leaderboard",element:d.jsx(db,{})}),d.jsx(Wt,{path:"*",element:d.jsx(D0,{to:"/",replace:!0})})]})})]})})}$c.createRoot(document.getElementById("root")).render(d.jsx(md.StrictMode,{children:d.jsx(mb,{})}));
