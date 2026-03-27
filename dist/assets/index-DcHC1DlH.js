function PA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function R0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var A0={exports:{}},sh={},k0={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fl=Symbol.for("react.element"),xA=Symbol.for("react.portal"),bA=Symbol.for("react.fragment"),DA=Symbol.for("react.strict_mode"),OA=Symbol.for("react.profiler"),MA=Symbol.for("react.provider"),LA=Symbol.for("react.context"),VA=Symbol.for("react.forward_ref"),jA=Symbol.for("react.suspense"),FA=Symbol.for("react.memo"),UA=Symbol.for("react.lazy"),Jy=Symbol.iterator;function zA(t){return t===null||typeof t!="object"?null:(t=Jy&&t[Jy]||t["@@iterator"],typeof t=="function"?t:null)}var N0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P0=Object.assign,x0={};function ao(t,e,n){this.props=t,this.context=e,this.refs=x0,this.updater=n||N0}ao.prototype.isReactComponent={};ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function b0(){}b0.prototype=ao.prototype;function pm(t,e,n){this.props=t,this.context=e,this.refs=x0,this.updater=n||N0}var mm=pm.prototype=new b0;mm.constructor=pm;P0(mm,ao.prototype);mm.isPureReactComponent=!0;var Zy=Array.isArray,D0=Object.prototype.hasOwnProperty,gm={current:null},O0={key:!0,ref:!0,__self:!0,__source:!0};function M0(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)D0.call(e,r)&&!O0.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:fl,type:t,key:i,ref:o,props:s,_owner:gm.current}}function BA(t,e){return{$$typeof:fl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _m(t){return typeof t=="object"&&t!==null&&t.$$typeof===fl}function $A(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ev=/\/+/g;function Nd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$A(""+t.key):e.toString(36)}function xu(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fl:case xA:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Nd(o,0):r,Zy(s)?(n="",t!=null&&(n=t.replace(ev,"$&/")+"/"),xu(s,e,n,"",function(c){return c})):s!=null&&(_m(s)&&(s=BA(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(ev,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Zy(t))for(var a=0;a<t.length;a++){i=t[a];var u=r+Nd(i,a);o+=xu(i,e,n,u,s)}else if(u=zA(t),typeof u=="function")for(t=u.call(t),a=0;!(i=t.next()).done;)i=i.value,u=r+Nd(i,a++),o+=xu(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function su(t,e,n){if(t==null)return t;var r=[],s=0;return xu(t,r,"","",function(i){return e.call(n,i,s++)}),r}function WA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Lt={current:null},bu={transition:null},HA={ReactCurrentDispatcher:Lt,ReactCurrentBatchConfig:bu,ReactCurrentOwner:gm};function L0(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:su,forEach:function(t,e,n){su(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return su(t,function(){e++}),e},toArray:function(t){return su(t,function(e){return e})||[]},only:function(t){if(!_m(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=ao;ae.Fragment=bA;ae.Profiler=OA;ae.PureComponent=pm;ae.StrictMode=DA;ae.Suspense=jA;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HA;ae.act=L0;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=P0({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=gm.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)D0.call(e,u)&&!O0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:fl,type:t.type,key:s,ref:i,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:LA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:MA,_context:t},t.Consumer=t};ae.createElement=M0;ae.createFactory=function(t){var e=M0.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:VA,render:t}};ae.isValidElement=_m;ae.lazy=function(t){return{$$typeof:UA,_payload:{_status:-1,_result:t},_init:WA}};ae.memo=function(t,e){return{$$typeof:FA,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=bu.transition;bu.transition={};try{t()}finally{bu.transition=e}};ae.unstable_act=L0;ae.useCallback=function(t,e){return Lt.current.useCallback(t,e)};ae.useContext=function(t){return Lt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Lt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Lt.current.useEffect(t,e)};ae.useId=function(){return Lt.current.useId()};ae.useImperativeHandle=function(t,e,n){return Lt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return Lt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Lt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Lt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return Lt.current.useReducer(t,e,n)};ae.useRef=function(t){return Lt.current.useRef(t)};ae.useState=function(t){return Lt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return Lt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return Lt.current.useTransition()};ae.version="18.3.1";k0.exports=ae;var O=k0.exports;const ym=R0(O),qA=PA({__proto__:null,default:ym},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GA=O,KA=Symbol.for("react.element"),QA=Symbol.for("react.fragment"),YA=Object.prototype.hasOwnProperty,XA=GA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,JA={key:!0,ref:!0,__self:!0,__source:!0};function V0(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)YA.call(e,r)&&!JA.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:KA,type:t,key:i,ref:o,props:s,_owner:XA.current}}sh.Fragment=QA;sh.jsx=V0;sh.jsxs=V0;A0.exports=sh;var p=A0.exports,Af={},j0={exports:{}},Zt={},F0={exports:{}},U0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,W){var V=H.length;H.push(W);e:for(;0<V;){var Q=V-1>>>1,ee=H[Q];if(0<s(ee,W))H[Q]=W,H[V]=ee,V=Q;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var W=H[0],V=H.pop();if(V!==W){H[0]=V;e:for(var Q=0,ee=H.length,he=ee>>>1;Q<he;){var At=2*(Q+1)-1,Wt=H[At],zn=At+1,Bn=H[zn];if(0>s(Wt,V))zn<ee&&0>s(Bn,Wt)?(H[Q]=Bn,H[zn]=V,Q=zn):(H[Q]=Wt,H[At]=V,Q=At);else if(zn<ee&&0>s(Bn,V))H[Q]=Bn,H[zn]=V,Q=zn;else break e}}return W}function s(H,W){var V=H.sortIndex-W.sortIndex;return V!==0?V:H.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,m=3,_=!1,T=!1,C=!1,N=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(H){for(var W=n(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=H)r(c),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(c)}}function b(H){if(C=!1,R(H),!T)if(n(u)!==null)T=!0,Rt(F);else{var W=n(c);W!==null&&nt(b,W.startTime-H)}}function F(H,W){T=!1,C&&(C=!1,I(v),v=-1),_=!0;var V=m;try{for(R(W),f=n(u);f!==null&&(!(f.expirationTime>W)||H&&!P());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,m=f.priorityLevel;var ee=Q(f.expirationTime<=W);W=t.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(u)&&r(u),R(W)}else r(u);f=n(u)}if(f!==null)var he=!0;else{var At=n(c);At!==null&&nt(b,At.startTime-W),he=!1}return he}finally{f=null,m=V,_=!1}}var M=!1,E=null,v=-1,S=5,k=-1;function P(){return!(t.unstable_now()-k<S)}function x(){if(E!==null){var H=t.unstable_now();k=H;var W=!0;try{W=E(!0,H)}finally{W?A():(M=!1,E=null)}}else M=!1}var A;if(typeof y=="function")A=function(){y(x)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,$e=fe.port2;fe.port1.onmessage=x,A=function(){$e.postMessage(null)}}else A=function(){N(x,0)};function Rt(H){E=H,M||(M=!0,A())}function nt(H,W){v=N(function(){H(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){T||_||(T=!0,Rt(F))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(H){switch(m){case 1:case 2:case 3:var W=3;break;default:W=m}var V=m;m=W;try{return H()}finally{m=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,W){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var V=m;m=H;try{return W()}finally{m=V}},t.unstable_scheduleCallback=function(H,W,V){var Q=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Q+V:Q):V=Q,H){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=V+ee,H={id:h++,callback:W,priorityLevel:H,startTime:V,expirationTime:ee,sortIndex:-1},V>Q?(H.sortIndex=V,e(c,H),n(u)===null&&H===n(c)&&(C?(I(v),v=-1):C=!0,nt(b,V-Q))):(H.sortIndex=ee,e(u,H),T||_||(T=!0,Rt(F))),H},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(H){var W=m;return function(){var V=m;m=W;try{return H.apply(this,arguments)}finally{m=V}}}})(U0);F0.exports=U0;var ZA=F0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ek=O,Jt=ZA;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var z0=new Set,ka={};function Ks(t,e){ji(t,e),ji(t+"Capture",e)}function ji(t,e){for(ka[t]=e,t=0;t<e.length;t++)z0.add(e[t])}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kf=Object.prototype.hasOwnProperty,tk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tv={},nv={};function nk(t){return kf.call(nv,t)?!0:kf.call(tv,t)?!1:tk.test(t)?nv[t]=!0:(tv[t]=!0,!1)}function rk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sk(t,e,n,r){if(e===null||typeof e>"u"||rk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ct[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ct[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ct[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ct[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ct[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ct[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ct[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ct[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ct[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var vm=/[\-:]([a-z])/g;function wm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vm,wm);ct[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vm,wm);ct[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vm,wm);ct[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ct[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});ct.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ct[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Em(t,e,n,r){var s=ct.hasOwnProperty(e)?ct[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sk(e,n,s,r)&&(n=null),r||s===null?nk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var _r=ek.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,iu=Symbol.for("react.element"),hi=Symbol.for("react.portal"),di=Symbol.for("react.fragment"),Tm=Symbol.for("react.strict_mode"),Nf=Symbol.for("react.profiler"),B0=Symbol.for("react.provider"),$0=Symbol.for("react.context"),Im=Symbol.for("react.forward_ref"),Pf=Symbol.for("react.suspense"),xf=Symbol.for("react.suspense_list"),Sm=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),W0=Symbol.for("react.offscreen"),rv=Symbol.iterator;function Lo(t){return t===null||typeof t!="object"?null:(t=rv&&t[rv]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,Pd;function Zo(t){if(Pd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pd=e&&e[1]||""}return`
`+Pd+t}var xd=!1;function bd(t,e){if(!t||xd)return"";xd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{xd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zo(t):""}function ik(t){switch(t.tag){case 5:return Zo(t.type);case 16:return Zo("Lazy");case 13:return Zo("Suspense");case 19:return Zo("SuspenseList");case 0:case 2:case 15:return t=bd(t.type,!1),t;case 11:return t=bd(t.type.render,!1),t;case 1:return t=bd(t.type,!0),t;default:return""}}function bf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case di:return"Fragment";case hi:return"Portal";case Nf:return"Profiler";case Tm:return"StrictMode";case Pf:return"Suspense";case xf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $0:return(t.displayName||"Context")+".Consumer";case B0:return(t._context.displayName||"Context")+".Provider";case Im:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sm:return e=t.displayName||null,e!==null?e:bf(t.type)||"Memo";case Ar:e=t._payload,t=t._init;try{return bf(t(e))}catch{}}return null}function ok(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bf(e);case 8:return e===Tm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function H0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ak(t){var e=H0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ou(t){t._valueTracker||(t._valueTracker=ak(t))}function q0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=H0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ec(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Df(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=rs(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function G0(t,e){e=e.checked,e!=null&&Em(t,"checked",e,!1)}function Of(t,e){G0(t,e);var n=rs(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mf(t,e.type,rs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function iv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mf(t,e,n){(e!=="number"||ec(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ea=Array.isArray;function Ri(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+rs(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Lf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ov(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(ea(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rs(n)}}function K0(t,e){var n=rs(e.value),r=rs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function av(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Q0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Q0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var au,Y0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(au=au||document.createElement("div"),au.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=au.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lk=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(t){lk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),la[e]=la[t]})});function X0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||la.hasOwnProperty(t)&&la[t]?(""+e).trim():e+"px"}function J0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=X0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var uk=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jf(t,e){if(e){if(uk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Ff(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uf=null;function Cm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zf=null,Ai=null,ki=null;function lv(t){if(t=gl(t)){if(typeof zf!="function")throw Error(z(280));var e=t.stateNode;e&&(e=uh(e),zf(t.stateNode,t.type,e))}}function Z0(t){Ai?ki?ki.push(t):ki=[t]:Ai=t}function eT(){if(Ai){var t=Ai,e=ki;if(ki=Ai=null,lv(t),e)for(t=0;t<e.length;t++)lv(e[t])}}function tT(t,e){return t(e)}function nT(){}var Dd=!1;function rT(t,e,n){if(Dd)return t(e,n);Dd=!0;try{return tT(t,e,n)}finally{Dd=!1,(Ai!==null||ki!==null)&&(nT(),eT())}}function Pa(t,e){var n=t.stateNode;if(n===null)return null;var r=uh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Bf=!1;if(ir)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){Bf=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{Bf=!1}function ck(t,e,n,r,s,i,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ua=!1,tc=null,nc=!1,$f=null,hk={onError:function(t){ua=!0,tc=t}};function dk(t,e,n,r,s,i,o,a,u){ua=!1,tc=null,ck.apply(hk,arguments)}function fk(t,e,n,r,s,i,o,a,u){if(dk.apply(this,arguments),ua){if(ua){var c=tc;ua=!1,tc=null}else throw Error(z(198));nc||(nc=!0,$f=c)}}function Qs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function uv(t){if(Qs(t)!==t)throw Error(z(188))}function pk(t){var e=t.alternate;if(!e){if(e=Qs(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return uv(s),t;if(i===r)return uv(s),e;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function iT(t){return t=pk(t),t!==null?oT(t):null}function oT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=oT(t);if(e!==null)return e;t=t.sibling}return null}var aT=Jt.unstable_scheduleCallback,cv=Jt.unstable_cancelCallback,mk=Jt.unstable_shouldYield,gk=Jt.unstable_requestPaint,Be=Jt.unstable_now,_k=Jt.unstable_getCurrentPriorityLevel,Rm=Jt.unstable_ImmediatePriority,lT=Jt.unstable_UserBlockingPriority,rc=Jt.unstable_NormalPriority,yk=Jt.unstable_LowPriority,uT=Jt.unstable_IdlePriority,ih=null,Pn=null;function vk(t){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(ih,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:Tk,wk=Math.log,Ek=Math.LN2;function Tk(t){return t>>>=0,t===0?32:31-(wk(t)/Ek|0)|0}var lu=64,uu=4194304;function ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=ta(a):(i&=o,i!==0&&(r=ta(i)))}else o=n&~s,o!==0?r=ta(o):i!==0&&(r=ta(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),s=1<<n,r|=t[n],e&=~s;return r}function Ik(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-yn(i),a=1<<o,u=s[o];u===-1?(!(a&n)||a&r)&&(s[o]=Ik(a,e)):u<=e&&(t.expiredLanes|=a),i&=~a}}function Wf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cT(){var t=lu;return lu<<=1,!(lu&4194240)&&(lu=64),t}function Od(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function Ck(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-yn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Am(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var _e=0;function hT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dT,km,fT,pT,mT,Hf=!1,cu=[],zr=null,Br=null,$r=null,xa=new Map,ba=new Map,Nr=[],Rk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hv(t,e){switch(t){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function jo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=gl(e),e!==null&&km(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Ak(t,e,n,r,s){switch(e){case"focusin":return zr=jo(zr,t,e,n,r,s),!0;case"dragenter":return Br=jo(Br,t,e,n,r,s),!0;case"mouseover":return $r=jo($r,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return xa.set(i,jo(xa.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ba.set(i,jo(ba.get(i)||null,t,e,n,r,s)),!0}return!1}function gT(t){var e=Cs(t.target);if(e!==null){var n=Qs(e);if(n!==null){if(e=n.tag,e===13){if(e=sT(n),e!==null){t.blockedOn=e,mT(t.priority,function(){fT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Du(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Uf=r,n.target.dispatchEvent(r),Uf=null}else return e=gl(n),e!==null&&km(e),t.blockedOn=n,!1;e.shift()}return!0}function dv(t,e,n){Du(t)&&n.delete(e)}function kk(){Hf=!1,zr!==null&&Du(zr)&&(zr=null),Br!==null&&Du(Br)&&(Br=null),$r!==null&&Du($r)&&($r=null),xa.forEach(dv),ba.forEach(dv)}function Fo(t,e){t.blockedOn===e&&(t.blockedOn=null,Hf||(Hf=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,kk)))}function Da(t){function e(s){return Fo(s,t)}if(0<cu.length){Fo(cu[0],t);for(var n=1;n<cu.length;n++){var r=cu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(zr!==null&&Fo(zr,t),Br!==null&&Fo(Br,t),$r!==null&&Fo($r,t),xa.forEach(e),ba.forEach(e),n=0;n<Nr.length;n++)r=Nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)gT(n),n.blockedOn===null&&Nr.shift()}var Ni=_r.ReactCurrentBatchConfig,ic=!0;function Nk(t,e,n,r){var s=_e,i=Ni.transition;Ni.transition=null;try{_e=1,Nm(t,e,n,r)}finally{_e=s,Ni.transition=i}}function Pk(t,e,n,r){var s=_e,i=Ni.transition;Ni.transition=null;try{_e=4,Nm(t,e,n,r)}finally{_e=s,Ni.transition=i}}function Nm(t,e,n,r){if(ic){var s=qf(t,e,n,r);if(s===null)Wd(t,e,r,oc,n),hv(t,r);else if(Ak(s,t,e,n,r))r.stopPropagation();else if(hv(t,r),e&4&&-1<Rk.indexOf(t)){for(;s!==null;){var i=gl(s);if(i!==null&&dT(i),i=qf(t,e,n,r),i===null&&Wd(t,e,r,oc,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Wd(t,e,r,null,n)}}var oc=null;function qf(t,e,n,r){if(oc=null,t=Cm(r),t=Cs(t),t!==null)if(e=Qs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return oc=t,null}function _T(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_k()){case Rm:return 1;case lT:return 4;case rc:case yk:return 16;case uT:return 536870912;default:return 16}default:return 16}}var Mr=null,Pm=null,Ou=null;function yT(){if(Ou)return Ou;var t,e=Pm,n=e.length,r,s="value"in Mr?Mr.value:Mr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Ou=s.slice(t,1<r?1-r:void 0)}function Mu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function hu(){return!0}function fv(){return!1}function en(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?hu:fv,this.isPropagationStopped=fv,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hu)},persist:function(){},isPersistent:hu}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xm=en(lo),ml=De({},lo,{view:0,detail:0}),xk=en(ml),Md,Ld,Uo,oh=De({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Uo&&(Uo&&t.type==="mousemove"?(Md=t.screenX-Uo.screenX,Ld=t.screenY-Uo.screenY):Ld=Md=0,Uo=t),Md)},movementY:function(t){return"movementY"in t?t.movementY:Ld}}),pv=en(oh),bk=De({},oh,{dataTransfer:0}),Dk=en(bk),Ok=De({},ml,{relatedTarget:0}),Vd=en(Ok),Mk=De({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),Lk=en(Mk),Vk=De({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jk=en(Vk),Fk=De({},lo,{data:0}),mv=en(Fk),Uk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $k(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Bk[t])?!!e[t]:!1}function bm(){return $k}var Wk=De({},ml,{key:function(t){if(t.key){var e=Uk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Mu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bm,charCode:function(t){return t.type==="keypress"?Mu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Mu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hk=en(Wk),qk=De({},oh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gv=en(qk),Gk=De({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bm}),Kk=en(Gk),Qk=De({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yk=en(Qk),Xk=De({},oh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jk=en(Xk),Zk=[9,13,27,32],Dm=ir&&"CompositionEvent"in window,ca=null;ir&&"documentMode"in document&&(ca=document.documentMode);var eN=ir&&"TextEvent"in window&&!ca,vT=ir&&(!Dm||ca&&8<ca&&11>=ca),_v=" ",yv=!1;function wT(t,e){switch(t){case"keyup":return Zk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ET(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fi=!1;function tN(t,e){switch(t){case"compositionend":return ET(e);case"keypress":return e.which!==32?null:(yv=!0,_v);case"textInput":return t=e.data,t===_v&&yv?null:t;default:return null}}function nN(t,e){if(fi)return t==="compositionend"||!Dm&&wT(t,e)?(t=yT(),Ou=Pm=Mr=null,fi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vT&&e.locale!=="ko"?null:e.data;default:return null}}var rN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rN[t.type]:e==="textarea"}function TT(t,e,n,r){Z0(r),e=ac(e,"onChange"),0<e.length&&(n=new xm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ha=null,Oa=null;function sN(t){DT(t,0)}function ah(t){var e=gi(t);if(q0(e))return t}function iN(t,e){if(t==="change")return e}var IT=!1;if(ir){var jd;if(ir){var Fd="oninput"in document;if(!Fd){var wv=document.createElement("div");wv.setAttribute("oninput","return;"),Fd=typeof wv.oninput=="function"}jd=Fd}else jd=!1;IT=jd&&(!document.documentMode||9<document.documentMode)}function Ev(){ha&&(ha.detachEvent("onpropertychange",ST),Oa=ha=null)}function ST(t){if(t.propertyName==="value"&&ah(Oa)){var e=[];TT(e,Oa,t,Cm(t)),rT(sN,e)}}function oN(t,e,n){t==="focusin"?(Ev(),ha=e,Oa=n,ha.attachEvent("onpropertychange",ST)):t==="focusout"&&Ev()}function aN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ah(Oa)}function lN(t,e){if(t==="click")return ah(e)}function uN(t,e){if(t==="input"||t==="change")return ah(e)}function cN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var En=typeof Object.is=="function"?Object.is:cN;function Ma(t,e){if(En(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!kf.call(e,s)||!En(t[s],e[s]))return!1}return!0}function Tv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Iv(t,e){var n=Tv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tv(n)}}function CT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?CT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function RT(){for(var t=window,e=ec();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ec(t.document)}return e}function Om(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hN(t){var e=RT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&CT(n.ownerDocument.documentElement,n)){if(r!==null&&Om(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Iv(n,i);var o=Iv(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dN=ir&&"documentMode"in document&&11>=document.documentMode,pi=null,Gf=null,da=null,Kf=!1;function Sv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kf||pi==null||pi!==ec(r)||(r=pi,"selectionStart"in r&&Om(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),da&&Ma(da,r)||(da=r,r=ac(Gf,"onSelect"),0<r.length&&(e=new xm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pi)))}function du(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mi={animationend:du("Animation","AnimationEnd"),animationiteration:du("Animation","AnimationIteration"),animationstart:du("Animation","AnimationStart"),transitionend:du("Transition","TransitionEnd")},Ud={},AT={};ir&&(AT=document.createElement("div").style,"AnimationEvent"in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),"TransitionEvent"in window||delete mi.transitionend.transition);function lh(t){if(Ud[t])return Ud[t];if(!mi[t])return t;var e=mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in AT)return Ud[t]=e[n];return t}var kT=lh("animationend"),NT=lh("animationiteration"),PT=lh("animationstart"),xT=lh("transitionend"),bT=new Map,Cv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ds(t,e){bT.set(t,e),Ks(e,[t])}for(var zd=0;zd<Cv.length;zd++){var Bd=Cv[zd],fN=Bd.toLowerCase(),pN=Bd[0].toUpperCase()+Bd.slice(1);ds(fN,"on"+pN)}ds(kT,"onAnimationEnd");ds(NT,"onAnimationIteration");ds(PT,"onAnimationStart");ds("dblclick","onDoubleClick");ds("focusin","onFocus");ds("focusout","onBlur");ds(xT,"onTransitionEnd");ji("onMouseEnter",["mouseout","mouseover"]);ji("onMouseLeave",["mouseout","mouseover"]);ji("onPointerEnter",["pointerout","pointerover"]);ji("onPointerLeave",["pointerout","pointerover"]);Ks("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ks("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ks("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ks("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ks("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ks("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mN=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function Rv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,fk(r,e,void 0,t),t.currentTarget=null}function DT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&s.isPropagationStopped())break e;Rv(s,a,c),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&s.isPropagationStopped())break e;Rv(s,a,c),i=u}}}if(nc)throw t=$f,nc=!1,$f=null,t}function Re(t,e){var n=e[Zf];n===void 0&&(n=e[Zf]=new Set);var r=t+"__bubble";n.has(r)||(OT(e,t,2,!1),n.add(r))}function $d(t,e,n){var r=0;e&&(r|=4),OT(n,t,r,e)}var fu="_reactListening"+Math.random().toString(36).slice(2);function La(t){if(!t[fu]){t[fu]=!0,z0.forEach(function(n){n!=="selectionchange"&&(mN.has(n)||$d(n,!1,t),$d(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fu]||(e[fu]=!0,$d("selectionchange",!1,e))}}function OT(t,e,n,r){switch(_T(e)){case 1:var s=Nk;break;case 4:s=Pk;break;default:s=Nm}n=s.bind(null,e,n,t),s=void 0,!Bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Wd(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;a!==null;){if(o=Cs(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}rT(function(){var c=i,h=Cm(n),f=[];e:{var m=bT.get(t);if(m!==void 0){var _=xm,T=t;switch(t){case"keypress":if(Mu(n)===0)break e;case"keydown":case"keyup":_=Hk;break;case"focusin":T="focus",_=Vd;break;case"focusout":T="blur",_=Vd;break;case"beforeblur":case"afterblur":_=Vd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=pv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Dk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Kk;break;case kT:case NT:case PT:_=Lk;break;case xT:_=Yk;break;case"scroll":_=xk;break;case"wheel":_=Jk;break;case"copy":case"cut":case"paste":_=jk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=gv}var C=(e&4)!==0,N=!C&&t==="scroll",I=C?m!==null?m+"Capture":null:m;C=[];for(var y=c,R;y!==null;){R=y;var b=R.stateNode;if(R.tag===5&&b!==null&&(R=b,I!==null&&(b=Pa(y,I),b!=null&&C.push(Va(y,b,R)))),N)break;y=y.return}0<C.length&&(m=new _(m,T,null,n,h),f.push({event:m,listeners:C}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Uf&&(T=n.relatedTarget||n.fromElement)&&(Cs(T)||T[or]))break e;if((_||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,_?(T=n.relatedTarget||n.toElement,_=c,T=T?Cs(T):null,T!==null&&(N=Qs(T),T!==N||T.tag!==5&&T.tag!==6)&&(T=null)):(_=null,T=c),_!==T)){if(C=pv,b="onMouseLeave",I="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(C=gv,b="onPointerLeave",I="onPointerEnter",y="pointer"),N=_==null?m:gi(_),R=T==null?m:gi(T),m=new C(b,y+"leave",_,n,h),m.target=N,m.relatedTarget=R,b=null,Cs(h)===c&&(C=new C(I,y+"enter",T,n,h),C.target=R,C.relatedTarget=N,b=C),N=b,_&&T)t:{for(C=_,I=T,y=0,R=C;R;R=ii(R))y++;for(R=0,b=I;b;b=ii(b))R++;for(;0<y-R;)C=ii(C),y--;for(;0<R-y;)I=ii(I),R--;for(;y--;){if(C===I||I!==null&&C===I.alternate)break t;C=ii(C),I=ii(I)}C=null}else C=null;_!==null&&Av(f,m,_,C,!1),T!==null&&N!==null&&Av(f,N,T,C,!0)}}e:{if(m=c?gi(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var F=iN;else if(vv(m))if(IT)F=uN;else{F=aN;var M=oN}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=lN);if(F&&(F=F(t,c))){TT(f,F,n,h);break e}M&&M(t,m,c),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&Mf(m,"number",m.value)}switch(M=c?gi(c):window,t){case"focusin":(vv(M)||M.contentEditable==="true")&&(pi=M,Gf=c,da=null);break;case"focusout":da=Gf=pi=null;break;case"mousedown":Kf=!0;break;case"contextmenu":case"mouseup":case"dragend":Kf=!1,Sv(f,n,h);break;case"selectionchange":if(dN)break;case"keydown":case"keyup":Sv(f,n,h)}var E;if(Dm)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else fi?wT(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(vT&&n.locale!=="ko"&&(fi||v!=="onCompositionStart"?v==="onCompositionEnd"&&fi&&(E=yT()):(Mr=h,Pm="value"in Mr?Mr.value:Mr.textContent,fi=!0)),M=ac(c,v),0<M.length&&(v=new mv(v,t,null,n,h),f.push({event:v,listeners:M}),E?v.data=E:(E=ET(n),E!==null&&(v.data=E)))),(E=eN?tN(t,n):nN(t,n))&&(c=ac(c,"onBeforeInput"),0<c.length&&(h=new mv("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=E))}DT(f,e)})}function Va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ac(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Pa(t,n),i!=null&&r.unshift(Va(t,i,s)),i=Pa(t,e),i!=null&&r.push(Va(t,i,s))),t=t.return}return r}function ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Av(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,s?(u=Pa(n,i),u!=null&&o.unshift(Va(n,u,a))):s||(u=Pa(n,i),u!=null&&o.push(Va(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gN=/\r\n?/g,_N=/\u0000|\uFFFD/g;function kv(t){return(typeof t=="string"?t:""+t).replace(gN,`
`).replace(_N,"")}function pu(t,e,n){if(e=kv(e),kv(t)!==e&&n)throw Error(z(425))}function lc(){}var Qf=null,Yf=null;function Xf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jf=typeof setTimeout=="function"?setTimeout:void 0,yN=typeof clearTimeout=="function"?clearTimeout:void 0,Nv=typeof Promise=="function"?Promise:void 0,vN=typeof queueMicrotask=="function"?queueMicrotask:typeof Nv<"u"?function(t){return Nv.resolve(null).then(t).catch(wN)}:Jf;function wN(t){setTimeout(function(){throw t})}function Hd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Da(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Da(e)}function Wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Pv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var uo=Math.random().toString(36).slice(2),Rn="__reactFiber$"+uo,ja="__reactProps$"+uo,or="__reactContainer$"+uo,Zf="__reactEvents$"+uo,EN="__reactListeners$"+uo,TN="__reactHandles$"+uo;function Cs(t){var e=t[Rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[or]||n[Rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Pv(t);t!==null;){if(n=t[Rn])return n;t=Pv(t)}return e}t=n,n=t.parentNode}return null}function gl(t){return t=t[Rn]||t[or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function uh(t){return t[ja]||null}var ep=[],_i=-1;function fs(t){return{current:t}}function ke(t){0>_i||(t.current=ep[_i],ep[_i]=null,_i--)}function Ie(t,e){_i++,ep[_i]=t.current,t.current=e}var ss={},St=fs(ss),zt=fs(!1),Ms=ss;function Fi(t,e){var n=t.type.contextTypes;if(!n)return ss;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Bt(t){return t=t.childContextTypes,t!=null}function uc(){ke(zt),ke(St)}function xv(t,e,n){if(St.current!==ss)throw Error(z(168));Ie(St,e),Ie(zt,n)}function MT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(z(108,ok(t)||"Unknown",s));return De({},n,r)}function cc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ss,Ms=St.current,Ie(St,t),Ie(zt,zt.current),!0}function bv(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=MT(t,e,Ms),r.__reactInternalMemoizedMergedChildContext=t,ke(zt),ke(St),Ie(St,t)):ke(zt),Ie(zt,n)}var Gn=null,ch=!1,qd=!1;function LT(t){Gn===null?Gn=[t]:Gn.push(t)}function IN(t){ch=!0,LT(t)}function ps(){if(!qd&&Gn!==null){qd=!0;var t=0,e=_e;try{var n=Gn;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Gn=null,ch=!1}catch(s){throw Gn!==null&&(Gn=Gn.slice(t+1)),aT(Rm,ps),s}finally{_e=e,qd=!1}}return null}var yi=[],vi=0,hc=null,dc=0,tn=[],nn=0,Ls=null,Yn=1,Xn="";function Es(t,e){yi[vi++]=dc,yi[vi++]=hc,hc=t,dc=e}function VT(t,e,n){tn[nn++]=Yn,tn[nn++]=Xn,tn[nn++]=Ls,Ls=t;var r=Yn;t=Xn;var s=32-yn(r)-1;r&=~(1<<s),n+=1;var i=32-yn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Yn=1<<32-yn(e)+s|n<<s|r,Xn=i+t}else Yn=1<<i|n<<s|r,Xn=t}function Mm(t){t.return!==null&&(Es(t,1),VT(t,1,0))}function Lm(t){for(;t===hc;)hc=yi[--vi],yi[vi]=null,dc=yi[--vi],yi[vi]=null;for(;t===Ls;)Ls=tn[--nn],tn[nn]=null,Xn=tn[--nn],tn[nn]=null,Yn=tn[--nn],tn[nn]=null}var Xt=null,Kt=null,Ne=!1,mn=null;function jT(t,e){var n=rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xt=t,Kt=Wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xt=t,Kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ls!==null?{id:Yn,overflow:Xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xt=t,Kt=null,!0):!1;default:return!1}}function tp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function np(t){if(Ne){var e=Kt;if(e){var n=e;if(!Dv(t,e)){if(tp(t))throw Error(z(418));e=Wr(n.nextSibling);var r=Xt;e&&Dv(t,e)?jT(r,n):(t.flags=t.flags&-4097|2,Ne=!1,Xt=t)}}else{if(tp(t))throw Error(z(418));t.flags=t.flags&-4097|2,Ne=!1,Xt=t}}}function Ov(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xt=t}function mu(t){if(t!==Xt)return!1;if(!Ne)return Ov(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xf(t.type,t.memoizedProps)),e&&(e=Kt)){if(tp(t))throw FT(),Error(z(418));for(;e;)jT(t,e),e=Wr(e.nextSibling)}if(Ov(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Kt=Wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Kt=null}}else Kt=Xt?Wr(t.stateNode.nextSibling):null;return!0}function FT(){for(var t=Kt;t;)t=Wr(t.nextSibling)}function Ui(){Kt=Xt=null,Ne=!1}function Vm(t){mn===null?mn=[t]:mn.push(t)}var SN=_r.ReactCurrentBatchConfig;function zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function gu(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mv(t){var e=t._init;return e(t._payload)}function UT(t){function e(I,y){if(t){var R=I.deletions;R===null?(I.deletions=[y],I.flags|=16):R.push(y)}}function n(I,y){if(!t)return null;for(;y!==null;)e(I,y),y=y.sibling;return null}function r(I,y){for(I=new Map;y!==null;)y.key!==null?I.set(y.key,y):I.set(y.index,y),y=y.sibling;return I}function s(I,y){return I=Kr(I,y),I.index=0,I.sibling=null,I}function i(I,y,R){return I.index=R,t?(R=I.alternate,R!==null?(R=R.index,R<y?(I.flags|=2,y):R):(I.flags|=2,y)):(I.flags|=1048576,y)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function a(I,y,R,b){return y===null||y.tag!==6?(y=Zd(R,I.mode,b),y.return=I,y):(y=s(y,R),y.return=I,y)}function u(I,y,R,b){var F=R.type;return F===di?h(I,y,R.props.children,b,R.key):y!==null&&(y.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ar&&Mv(F)===y.type)?(b=s(y,R.props),b.ref=zo(I,y,R),b.return=I,b):(b=Bu(R.type,R.key,R.props,null,I.mode,b),b.ref=zo(I,y,R),b.return=I,b)}function c(I,y,R,b){return y===null||y.tag!==4||y.stateNode.containerInfo!==R.containerInfo||y.stateNode.implementation!==R.implementation?(y=ef(R,I.mode,b),y.return=I,y):(y=s(y,R.children||[]),y.return=I,y)}function h(I,y,R,b,F){return y===null||y.tag!==7?(y=xs(R,I.mode,b,F),y.return=I,y):(y=s(y,R),y.return=I,y)}function f(I,y,R){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Zd(""+y,I.mode,R),y.return=I,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case iu:return R=Bu(y.type,y.key,y.props,null,I.mode,R),R.ref=zo(I,null,y),R.return=I,R;case hi:return y=ef(y,I.mode,R),y.return=I,y;case Ar:var b=y._init;return f(I,b(y._payload),R)}if(ea(y)||Lo(y))return y=xs(y,I.mode,R,null),y.return=I,y;gu(I,y)}return null}function m(I,y,R,b){var F=y!==null?y.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return F!==null?null:a(I,y,""+R,b);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case iu:return R.key===F?u(I,y,R,b):null;case hi:return R.key===F?c(I,y,R,b):null;case Ar:return F=R._init,m(I,y,F(R._payload),b)}if(ea(R)||Lo(R))return F!==null?null:h(I,y,R,b,null);gu(I,R)}return null}function _(I,y,R,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return I=I.get(R)||null,a(y,I,""+b,F);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case iu:return I=I.get(b.key===null?R:b.key)||null,u(y,I,b,F);case hi:return I=I.get(b.key===null?R:b.key)||null,c(y,I,b,F);case Ar:var M=b._init;return _(I,y,R,M(b._payload),F)}if(ea(b)||Lo(b))return I=I.get(R)||null,h(y,I,b,F,null);gu(y,b)}return null}function T(I,y,R,b){for(var F=null,M=null,E=y,v=y=0,S=null;E!==null&&v<R.length;v++){E.index>v?(S=E,E=null):S=E.sibling;var k=m(I,E,R[v],b);if(k===null){E===null&&(E=S);break}t&&E&&k.alternate===null&&e(I,E),y=i(k,y,v),M===null?F=k:M.sibling=k,M=k,E=S}if(v===R.length)return n(I,E),Ne&&Es(I,v),F;if(E===null){for(;v<R.length;v++)E=f(I,R[v],b),E!==null&&(y=i(E,y,v),M===null?F=E:M.sibling=E,M=E);return Ne&&Es(I,v),F}for(E=r(I,E);v<R.length;v++)S=_(E,I,v,R[v],b),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?v:S.key),y=i(S,y,v),M===null?F=S:M.sibling=S,M=S);return t&&E.forEach(function(P){return e(I,P)}),Ne&&Es(I,v),F}function C(I,y,R,b){var F=Lo(R);if(typeof F!="function")throw Error(z(150));if(R=F.call(R),R==null)throw Error(z(151));for(var M=F=null,E=y,v=y=0,S=null,k=R.next();E!==null&&!k.done;v++,k=R.next()){E.index>v?(S=E,E=null):S=E.sibling;var P=m(I,E,k.value,b);if(P===null){E===null&&(E=S);break}t&&E&&P.alternate===null&&e(I,E),y=i(P,y,v),M===null?F=P:M.sibling=P,M=P,E=S}if(k.done)return n(I,E),Ne&&Es(I,v),F;if(E===null){for(;!k.done;v++,k=R.next())k=f(I,k.value,b),k!==null&&(y=i(k,y,v),M===null?F=k:M.sibling=k,M=k);return Ne&&Es(I,v),F}for(E=r(I,E);!k.done;v++,k=R.next())k=_(E,I,v,k.value,b),k!==null&&(t&&k.alternate!==null&&E.delete(k.key===null?v:k.key),y=i(k,y,v),M===null?F=k:M.sibling=k,M=k);return t&&E.forEach(function(x){return e(I,x)}),Ne&&Es(I,v),F}function N(I,y,R,b){if(typeof R=="object"&&R!==null&&R.type===di&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case iu:e:{for(var F=R.key,M=y;M!==null;){if(M.key===F){if(F=R.type,F===di){if(M.tag===7){n(I,M.sibling),y=s(M,R.props.children),y.return=I,I=y;break e}}else if(M.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ar&&Mv(F)===M.type){n(I,M.sibling),y=s(M,R.props),y.ref=zo(I,M,R),y.return=I,I=y;break e}n(I,M);break}else e(I,M);M=M.sibling}R.type===di?(y=xs(R.props.children,I.mode,b,R.key),y.return=I,I=y):(b=Bu(R.type,R.key,R.props,null,I.mode,b),b.ref=zo(I,y,R),b.return=I,I=b)}return o(I);case hi:e:{for(M=R.key;y!==null;){if(y.key===M)if(y.tag===4&&y.stateNode.containerInfo===R.containerInfo&&y.stateNode.implementation===R.implementation){n(I,y.sibling),y=s(y,R.children||[]),y.return=I,I=y;break e}else{n(I,y);break}else e(I,y);y=y.sibling}y=ef(R,I.mode,b),y.return=I,I=y}return o(I);case Ar:return M=R._init,N(I,y,M(R._payload),b)}if(ea(R))return T(I,y,R,b);if(Lo(R))return C(I,y,R,b);gu(I,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,y!==null&&y.tag===6?(n(I,y.sibling),y=s(y,R),y.return=I,I=y):(n(I,y),y=Zd(R,I.mode,b),y.return=I,I=y),o(I)):n(I,y)}return N}var zi=UT(!0),zT=UT(!1),fc=fs(null),pc=null,wi=null,jm=null;function Fm(){jm=wi=pc=null}function Um(t){var e=fc.current;ke(fc),t._currentValue=e}function rp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Pi(t,e){pc=t,jm=wi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ut=!0),t.firstContext=null)}function ln(t){var e=t._currentValue;if(jm!==t)if(t={context:t,memoizedValue:e,next:null},wi===null){if(pc===null)throw Error(z(308));wi=t,pc.dependencies={lanes:0,firstContext:t}}else wi=wi.next=t;return e}var Rs=null;function zm(t){Rs===null?Rs=[t]:Rs.push(t)}function BT(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,zm(e)):(n.next=s.next,s.next=n),e.interleaved=n,ar(t,r)}function ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kr=!1;function Bm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $T(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,ar(t,n)}return s=r.interleaved,s===null?(e.next=e,zm(r)):(e.next=s.next,s.next=e),r.interleaved=e,ar(t,n)}function Lu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Am(t,n)}}function Lv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function mc(t,e,n,r){var s=t.updateQueue;kr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(i!==null){var f=s.baseState;o=0,h=c=u=null,a=i;do{var m=a.lane,_=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,C=a;switch(m=e,_=n,C.tag){case 1:if(T=C.payload,typeof T=="function"){f=T.call(_,f,m);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=C.payload,m=typeof T=="function"?T.call(_,f,m):T,m==null)break e;f=De({},f,m);break e;case 2:kr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=_,u=f):h=h.next=_,o|=m;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;m=a,a=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(h===null&&(u=f),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);js|=o,t.lanes=o,t.memoizedState=f}}function Vv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(z(191,s));s.call(r)}}}var _l={},xn=fs(_l),Fa=fs(_l),Ua=fs(_l);function As(t){if(t===_l)throw Error(z(174));return t}function $m(t,e){switch(Ie(Ua,e),Ie(Fa,t),Ie(xn,_l),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vf(e,t)}ke(xn),Ie(xn,e)}function Bi(){ke(xn),ke(Fa),ke(Ua)}function WT(t){As(Ua.current);var e=As(xn.current),n=Vf(e,t.type);e!==n&&(Ie(Fa,t),Ie(xn,n))}function Wm(t){Fa.current===t&&(ke(xn),ke(Fa))}var Pe=fs(0);function gc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gd=[];function Hm(){for(var t=0;t<Gd.length;t++)Gd[t]._workInProgressVersionPrimary=null;Gd.length=0}var Vu=_r.ReactCurrentDispatcher,Kd=_r.ReactCurrentBatchConfig,Vs=0,xe=null,Ge=null,et=null,_c=!1,fa=!1,za=0,CN=0;function gt(){throw Error(z(321))}function qm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!En(t[n],e[n]))return!1;return!0}function Gm(t,e,n,r,s,i){if(Vs=i,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vu.current=t===null||t.memoizedState===null?NN:PN,t=n(r,s),fa){i=0;do{if(fa=!1,za=0,25<=i)throw Error(z(301));i+=1,et=Ge=null,e.updateQueue=null,Vu.current=xN,t=n(r,s)}while(fa)}if(Vu.current=yc,e=Ge!==null&&Ge.next!==null,Vs=0,et=Ge=xe=null,_c=!1,e)throw Error(z(300));return t}function Km(){var t=za!==0;return za=0,t}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?xe.memoizedState=et=t:et=et.next=t,et}function un(){if(Ge===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=et===null?xe.memoizedState:et.next;if(e!==null)et=e,Ge=t;else{if(t===null)throw Error(z(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},et===null?xe.memoizedState=et=t:et=et.next=t}return et}function Ba(t,e){return typeof e=="function"?e(t):e}function Qd(t){var e=un(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ge,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,u=null,c=i;do{var h=c.lane;if((Vs&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,xe.lanes|=h,js|=h}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=a,En(r,e.memoizedState)||(Ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,xe.lanes|=i,js|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yd(t){var e=un(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);En(i,e.memoizedState)||(Ut=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function HT(){}function qT(t,e){var n=xe,r=un(),s=e(),i=!En(r.memoizedState,s);if(i&&(r.memoizedState=s,Ut=!0),r=r.queue,Qm(QT.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,$a(9,KT.bind(null,n,r,s,e),void 0,null),tt===null)throw Error(z(349));Vs&30||GT(n,e,s)}return s}function GT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function KT(t,e,n,r){e.value=n,e.getSnapshot=r,YT(e)&&XT(t)}function QT(t,e,n){return n(function(){YT(e)&&XT(t)})}function YT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!En(t,n)}catch{return!0}}function XT(t){var e=ar(t,1);e!==null&&vn(e,t,1,-1)}function jv(t){var e=Cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:t},e.queue=t,t=t.dispatch=kN.bind(null,xe,t),[e.memoizedState,t]}function $a(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function JT(){return un().memoizedState}function ju(t,e,n,r){var s=Cn();xe.flags|=t,s.memoizedState=$a(1|e,n,void 0,r===void 0?null:r)}function hh(t,e,n,r){var s=un();r=r===void 0?null:r;var i=void 0;if(Ge!==null){var o=Ge.memoizedState;if(i=o.destroy,r!==null&&qm(r,o.deps)){s.memoizedState=$a(e,n,i,r);return}}xe.flags|=t,s.memoizedState=$a(1|e,n,i,r)}function Fv(t,e){return ju(8390656,8,t,e)}function Qm(t,e){return hh(2048,8,t,e)}function ZT(t,e){return hh(4,2,t,e)}function eI(t,e){return hh(4,4,t,e)}function tI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nI(t,e,n){return n=n!=null?n.concat([t]):null,hh(4,4,tI.bind(null,e,t),n)}function Ym(){}function rI(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sI(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function iI(t,e,n){return Vs&21?(En(n,e)||(n=cT(),xe.lanes|=n,js|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ut=!0),t.memoizedState=n)}function RN(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=Kd.transition;Kd.transition={};try{t(!1),e()}finally{_e=n,Kd.transition=r}}function oI(){return un().memoizedState}function AN(t,e,n){var r=Gr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},aI(t))lI(e,n);else if(n=BT(t,e,n,r),n!==null){var s=Dt();vn(n,t,r,s),uI(n,e,r)}}function kN(t,e,n){var r=Gr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(aI(t))lI(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,En(a,o)){var u=e.interleaved;u===null?(s.next=s,zm(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=BT(t,e,s,r),n!==null&&(s=Dt(),vn(n,t,r,s),uI(n,e,r))}}function aI(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function lI(t,e){fa=_c=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function uI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Am(t,n)}}var yc={readContext:ln,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},NN={readContext:ln,useCallback:function(t,e){return Cn().memoizedState=[t,e===void 0?null:e],t},useContext:ln,useEffect:Fv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ju(4194308,4,tI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ju(4194308,4,t,e)},useInsertionEffect:function(t,e){return ju(4,2,t,e)},useMemo:function(t,e){var n=Cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=AN.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=Cn();return t={current:t},e.memoizedState=t},useState:jv,useDebugValue:Ym,useDeferredValue:function(t){return Cn().memoizedState=t},useTransition:function(){var t=jv(!1),e=t[0];return t=RN.bind(null,t[1]),Cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,s=Cn();if(Ne){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),tt===null)throw Error(z(349));Vs&30||GT(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Fv(QT.bind(null,r,i,t),[t]),r.flags|=2048,$a(9,KT.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Cn(),e=tt.identifierPrefix;if(Ne){var n=Xn,r=Yn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=za++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=CN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},PN={readContext:ln,useCallback:rI,useContext:ln,useEffect:Qm,useImperativeHandle:nI,useInsertionEffect:ZT,useLayoutEffect:eI,useMemo:sI,useReducer:Qd,useRef:JT,useState:function(){return Qd(Ba)},useDebugValue:Ym,useDeferredValue:function(t){var e=un();return iI(e,Ge.memoizedState,t)},useTransition:function(){var t=Qd(Ba)[0],e=un().memoizedState;return[t,e]},useMutableSource:HT,useSyncExternalStore:qT,useId:oI,unstable_isNewReconciler:!1},xN={readContext:ln,useCallback:rI,useContext:ln,useEffect:Qm,useImperativeHandle:nI,useInsertionEffect:ZT,useLayoutEffect:eI,useMemo:sI,useReducer:Yd,useRef:JT,useState:function(){return Yd(Ba)},useDebugValue:Ym,useDeferredValue:function(t){var e=un();return Ge===null?e.memoizedState=t:iI(e,Ge.memoizedState,t)},useTransition:function(){var t=Yd(Ba)[0],e=un().memoizedState;return[t,e]},useMutableSource:HT,useSyncExternalStore:qT,useId:oI,unstable_isNewReconciler:!1};function fn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dh={isMounted:function(t){return(t=t._reactInternals)?Qs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Dt(),s=Gr(t),i=nr(r,s);i.payload=e,n!=null&&(i.callback=n),e=Hr(t,i,s),e!==null&&(vn(e,t,s,r),Lu(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Dt(),s=Gr(t),i=nr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Hr(t,i,s),e!==null&&(vn(e,t,s,r),Lu(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dt(),r=Gr(t),s=nr(n,r);s.tag=2,e!=null&&(s.callback=e),e=Hr(t,s,r),e!==null&&(vn(e,t,r,n),Lu(e,t,r))}};function Uv(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Ma(n,r)||!Ma(s,i):!0}function cI(t,e,n){var r=!1,s=ss,i=e.contextType;return typeof i=="object"&&i!==null?i=ln(i):(s=Bt(e)?Ms:St.current,r=e.contextTypes,i=(r=r!=null)?Fi(t,s):ss),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function zv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dh.enqueueReplaceState(e,e.state,null)}function ip(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Bm(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=ln(i):(i=Bt(e)?Ms:St.current,s.context=Fi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(sp(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&dh.enqueueReplaceState(s,s.state,null),mc(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function $i(t,e){try{var n="",r=e;do n+=ik(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Xd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function op(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bN=typeof WeakMap=="function"?WeakMap:Map;function hI(t,e,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wc||(wc=!0,gp=r),op(t,e)},n}function dI(t,e,n){n=nr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){op(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){op(t,e),typeof r!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Bv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new bN;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=qN.bind(null,t,e,n),e.then(t,t))}function $v(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wv(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nr(-1,1),e.tag=2,Hr(n,e,1))),n.lanes|=1),t)}var DN=_r.ReactCurrentOwner,Ut=!1;function xt(t,e,n,r){e.child=t===null?zT(e,null,n,r):zi(e,t.child,n,r)}function Hv(t,e,n,r,s){n=n.render;var i=e.ref;return Pi(e,s),r=Gm(t,e,n,r,i,s),n=Km(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,lr(t,e,s)):(Ne&&n&&Mm(e),e.flags|=1,xt(t,e,r,s),e.child)}function qv(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!sg(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,fI(t,e,i,r,s)):(t=Bu(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ma,n(o,r)&&t.ref===e.ref)return lr(t,e,s)}return e.flags|=1,t=Kr(i,r),t.ref=e.ref,t.return=e,e.child=t}function fI(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Ma(i,r)&&t.ref===e.ref)if(Ut=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Ut=!0);else return e.lanes=t.lanes,lr(t,e,s)}return ap(t,e,n,r,s)}function pI(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Ti,qt),qt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(Ti,qt),qt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ie(Ti,qt),qt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ie(Ti,qt),qt|=r;return xt(t,e,s,n),e.child}function mI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ap(t,e,n,r,s){var i=Bt(n)?Ms:St.current;return i=Fi(e,i),Pi(e,s),n=Gm(t,e,n,r,i,s),r=Km(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,lr(t,e,s)):(Ne&&r&&Mm(e),e.flags|=1,xt(t,e,n,s),e.child)}function Gv(t,e,n,r,s){if(Bt(n)){var i=!0;cc(e)}else i=!1;if(Pi(e,s),e.stateNode===null)Fu(t,e),cI(e,n,r),ip(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ln(c):(c=Bt(n)?Ms:St.current,c=Fi(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&zv(e,o,r,c),kr=!1;var m=e.memoizedState;o.state=m,mc(e,r,o,s),u=e.memoizedState,a!==r||m!==u||zt.current||kr?(typeof h=="function"&&(sp(e,n,h,r),u=e.memoizedState),(a=kr||Uv(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$T(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:fn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=ln(u):(u=Bt(n)?Ms:St.current,u=Fi(e,u));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&zv(e,o,r,u),kr=!1,m=e.memoizedState,o.state=m,mc(e,r,o,s);var T=e.memoizedState;a!==f||m!==T||zt.current||kr?(typeof _=="function"&&(sp(e,n,_,r),T=e.memoizedState),(c=kr||Uv(e,n,c,r,m,T,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return lp(t,e,n,r,i,s)}function lp(t,e,n,r,s,i){mI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&bv(e,n,!1),lr(t,e,i);r=e.stateNode,DN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zi(e,t.child,null,i),e.child=zi(e,null,a,i)):xt(t,e,a,i),e.memoizedState=r.state,s&&bv(e,n,!0),e.child}function gI(t){var e=t.stateNode;e.pendingContext?xv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xv(t,e.context,!1),$m(t,e.containerInfo)}function Kv(t,e,n,r,s){return Ui(),Vm(s),e.flags|=256,xt(t,e,n,r),e.child}var up={dehydrated:null,treeContext:null,retryLane:0};function cp(t){return{baseLanes:t,cachePool:null,transitions:null}}function _I(t,e,n){var r=e.pendingProps,s=Pe.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ie(Pe,s&1),t===null)return np(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=mh(o,r,0,null),t=xs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=cp(n),e.memoizedState=up,t):Xm(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return ON(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Kr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Kr(a,i):(i=xs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?cp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=up,r}return i=t.child,t=i.sibling,r=Kr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xm(t,e){return e=mh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _u(t,e,n,r){return r!==null&&Vm(r),zi(e,t.child,null,n),t=Xm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ON(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Xd(Error(z(422))),_u(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=mh({mode:"visible",children:r.children},s,0,null),i=xs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&zi(e,t.child,null,o),e.child.memoizedState=cp(o),e.memoizedState=up,i);if(!(e.mode&1))return _u(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(z(419)),r=Xd(i,r,void 0),_u(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ut||a){if(r=tt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,ar(t,s),vn(r,t,s,-1))}return rg(),r=Xd(Error(z(421))),_u(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=GN.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Kt=Wr(s.nextSibling),Xt=e,Ne=!0,mn=null,t!==null&&(tn[nn++]=Yn,tn[nn++]=Xn,tn[nn++]=Ls,Yn=t.id,Xn=t.overflow,Ls=e),e=Xm(e,r.children),e.flags|=4096,e)}function Qv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rp(t.return,e,n)}function Jd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function yI(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(xt(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qv(t,n,e);else if(t.tag===19)Qv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&gc(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Jd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&gc(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Jd(e,!0,n,null,i);break;case"together":Jd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),js|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function MN(t,e,n){switch(e.tag){case 3:gI(e),Ui();break;case 5:WT(e);break;case 1:Bt(e.type)&&cc(e);break;case 4:$m(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ie(fc,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?_I(t,e,n):(Ie(Pe,Pe.current&1),t=lr(t,e,n),t!==null?t.sibling:null);Ie(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return yI(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ie(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,pI(t,e,n)}return lr(t,e,n)}var vI,hp,wI,EI;vI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hp=function(){};wI=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,As(xn.current);var i=null;switch(n){case"input":s=Df(t,s),r=Df(t,r),i=[];break;case"select":s=De({},s,{value:void 0}),r=De({},r,{value:void 0}),i=[];break;case"textarea":s=Lf(t,s),r=Lf(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=lc)}jf(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ka.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ka.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Re("scroll",t),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};EI=function(t,e,n,r){n!==r&&(e.flags|=4)};function Bo(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function LN(t,e,n){var r=e.pendingProps;switch(Lm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return Bt(e.type)&&uc(),_t(e),null;case 3:return r=e.stateNode,Bi(),ke(zt),ke(St),Hm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(mu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mn!==null&&(vp(mn),mn=null))),hp(t,e),_t(e),null;case 5:Wm(e);var s=As(Ua.current);if(n=e.type,t!==null&&e.stateNode!=null)wI(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return _t(e),null}if(t=As(xn.current),mu(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Rn]=e,r[ja]=i,t=(e.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(s=0;s<na.length;s++)Re(na[s],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":sv(r,i),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Re("invalid",r);break;case"textarea":ov(r,i),Re("invalid",r)}jf(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&pu(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&pu(r.textContent,a,t),s=["children",""+a]):ka.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Re("scroll",r)}switch(n){case"input":ou(r),iv(r,i,!0);break;case"textarea":ou(r),av(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=lc)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Q0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rn]=e,t[ja]=r,vI(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ff(n,r),n){case"dialog":Re("cancel",t),Re("close",t),s=r;break;case"iframe":case"object":case"embed":Re("load",t),s=r;break;case"video":case"audio":for(s=0;s<na.length;s++)Re(na[s],t);s=r;break;case"source":Re("error",t),s=r;break;case"img":case"image":case"link":Re("error",t),Re("load",t),s=r;break;case"details":Re("toggle",t),s=r;break;case"input":sv(t,r),s=Df(t,r),Re("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=De({},r,{value:void 0}),Re("invalid",t);break;case"textarea":ov(t,r),s=Lf(t,r),Re("invalid",t);break;default:s=r}jf(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?J0(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Y0(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Na(t,u):typeof u=="number"&&Na(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ka.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Re("scroll",t):u!=null&&Em(t,i,u,o))}switch(n){case"input":ou(t),iv(t,r,!1);break;case"textarea":ou(t),av(t);break;case"option":r.value!=null&&t.setAttribute("value",""+rs(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ri(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ri(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=lc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _t(e),null;case 6:if(t&&e.stateNode!=null)EI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=As(Ua.current),As(xn.current),mu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rn]=e,(i=r.nodeValue!==n)&&(t=Xt,t!==null))switch(t.tag){case 3:pu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pu(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rn]=e,e.stateNode=r}return _t(e),null;case 13:if(ke(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&Kt!==null&&e.mode&1&&!(e.flags&128))FT(),Ui(),e.flags|=98560,i=!1;else if(i=mu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(z(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[Rn]=e}else Ui(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_t(e),i=!1}else mn!==null&&(vp(mn),mn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Ye===0&&(Ye=3):rg())),e.updateQueue!==null&&(e.flags|=4),_t(e),null);case 4:return Bi(),hp(t,e),t===null&&La(e.stateNode.containerInfo),_t(e),null;case 10:return Um(e.type._context),_t(e),null;case 17:return Bt(e.type)&&uc(),_t(e),null;case 19:if(ke(Pe),i=e.memoizedState,i===null)return _t(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Bo(i,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=gc(t),o!==null){for(e.flags|=128,Bo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Pe,Pe.current&1|2),e.child}t=t.sibling}i.tail!==null&&Be()>Wi&&(e.flags|=128,r=!0,Bo(i,!1),e.lanes=4194304)}else{if(!r)if(t=gc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ne)return _t(e),null}else 2*Be()-i.renderingStartTime>Wi&&n!==1073741824&&(e.flags|=128,r=!0,Bo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Be(),e.sibling=null,n=Pe.current,Ie(Pe,r?n&1|2:n&1),e):(_t(e),null);case 22:case 23:return ng(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qt&1073741824&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function VN(t,e){switch(Lm(e),e.tag){case 1:return Bt(e.type)&&uc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bi(),ke(zt),ke(St),Hm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wm(e),null;case 13:if(ke(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));Ui()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Pe),null;case 4:return Bi(),null;case 10:return Um(e.type._context),null;case 22:case 23:return ng(),null;case 24:return null;default:return null}}var yu=!1,Tt=!1,jN=typeof WeakSet=="function"?WeakSet:Set,q=null;function Ei(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function dp(t,e,n){try{n()}catch(r){Le(t,e,r)}}var Yv=!1;function FN(t,e){if(Qf=ic,t=RT(),Om(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var _;f!==n||s!==0&&f.nodeType!==3||(a=o+s),f!==i||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===t)break t;if(m===n&&++c===s&&(a=o),m===i&&++h===r&&(u=o),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yf={focusedElem:t,selectionRange:n},ic=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var C=T.memoizedProps,N=T.memoizedState,I=e.stateNode,y=I.getSnapshotBeforeUpdate(e.elementType===e.type?C:fn(e.type,C),N);I.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(b){Le(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return T=Yv,Yv=!1,T}function pa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&dp(e,n,i)}s=s.next}while(s!==r)}}function fh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function TI(t){var e=t.alternate;e!==null&&(t.alternate=null,TI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rn],delete e[ja],delete e[Zf],delete e[EN],delete e[TN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function II(t){return t.tag===5||t.tag===3||t.tag===4}function Xv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||II(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=lc));else if(r!==4&&(t=t.child,t!==null))for(pp(t,e,n),t=t.sibling;t!==null;)pp(t,e,n),t=t.sibling}function mp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(mp(t,e,n),t=t.sibling;t!==null;)mp(t,e,n),t=t.sibling}var st=null,pn=!1;function Cr(t,e,n){for(n=n.child;n!==null;)SI(t,e,n),n=n.sibling}function SI(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(ih,n)}catch{}switch(n.tag){case 5:Tt||Ei(n,e);case 6:var r=st,s=pn;st=null,Cr(t,e,n),st=r,pn=s,st!==null&&(pn?(t=st,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(pn?(t=st,n=n.stateNode,t.nodeType===8?Hd(t.parentNode,n):t.nodeType===1&&Hd(t,n),Da(t)):Hd(st,n.stateNode));break;case 4:r=st,s=pn,st=n.stateNode.containerInfo,pn=!0,Cr(t,e,n),st=r,pn=s;break;case 0:case 11:case 14:case 15:if(!Tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&dp(n,e,o),s=s.next}while(s!==r)}Cr(t,e,n);break;case 1:if(!Tt&&(Ei(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}Cr(t,e,n);break;case 21:Cr(t,e,n);break;case 22:n.mode&1?(Tt=(r=Tt)||n.memoizedState!==null,Cr(t,e,n),Tt=r):Cr(t,e,n);break;default:Cr(t,e,n)}}function Jv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jN),e.forEach(function(r){var s=KN.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function dn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:st=a.stateNode,pn=!1;break e;case 3:st=a.stateNode.containerInfo,pn=!0;break e;case 4:st=a.stateNode.containerInfo,pn=!0;break e}a=a.return}if(st===null)throw Error(z(160));SI(i,o,s),st=null,pn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Le(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)CI(e,t),e=e.sibling}function CI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dn(e,t),In(t),r&4){try{pa(3,t,t.return),fh(3,t)}catch(C){Le(t,t.return,C)}try{pa(5,t,t.return)}catch(C){Le(t,t.return,C)}}break;case 1:dn(e,t),In(t),r&512&&n!==null&&Ei(n,n.return);break;case 5:if(dn(e,t),In(t),r&512&&n!==null&&Ei(n,n.return),t.flags&32){var s=t.stateNode;try{Na(s,"")}catch(C){Le(t,t.return,C)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&G0(s,i),Ff(a,o);var c=Ff(a,i);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?J0(s,f):h==="dangerouslySetInnerHTML"?Y0(s,f):h==="children"?Na(s,f):Em(s,h,f,c)}switch(a){case"input":Of(s,i);break;case"textarea":K0(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?Ri(s,!!i.multiple,_,!1):m!==!!i.multiple&&(i.defaultValue!=null?Ri(s,!!i.multiple,i.defaultValue,!0):Ri(s,!!i.multiple,i.multiple?[]:"",!1))}s[ja]=i}catch(C){Le(t,t.return,C)}}break;case 6:if(dn(e,t),In(t),r&4){if(t.stateNode===null)throw Error(z(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(C){Le(t,t.return,C)}}break;case 3:if(dn(e,t),In(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Da(e.containerInfo)}catch(C){Le(t,t.return,C)}break;case 4:dn(e,t),In(t);break;case 13:dn(e,t),In(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(eg=Be())),r&4&&Jv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Tt=(c=Tt)||h,dn(e,t),Tt=c):dn(e,t),In(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(q=t,h=t.child;h!==null;){for(f=q=h;q!==null;){switch(m=q,_=m.child,m.tag){case 0:case 11:case 14:case 15:pa(4,m,m.return);break;case 1:Ei(m,m.return);var T=m.stateNode;if(typeof T.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(C){Le(r,n,C)}}break;case 5:Ei(m,m.return);break;case 22:if(m.memoizedState!==null){ew(f);continue}}_!==null?(_.return=m,q=_):ew(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{s=f.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=X0("display",o))}catch(C){Le(t,t.return,C)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(C){Le(t,t.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:dn(e,t),In(t),r&4&&Jv(t);break;case 21:break;default:dn(e,t),In(t)}}function In(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(II(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Na(s,""),r.flags&=-33);var i=Xv(t);mp(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Xv(t);pp(t,a,o);break;default:throw Error(z(161))}}catch(u){Le(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function UN(t,e,n){q=t,RI(t)}function RI(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||yu;if(!o){var a=s.alternate,u=a!==null&&a.memoizedState!==null||Tt;a=yu;var c=Tt;if(yu=o,(Tt=u)&&!c)for(q=s;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?tw(s):u!==null?(u.return=o,q=u):tw(s);for(;i!==null;)q=i,RI(i),i=i.sibling;q=s,yu=a,Tt=c}Zv(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):Zv(t)}}function Zv(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Tt||fh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Tt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:fn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Vv(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Da(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Tt||e.flags&512&&fp(e)}catch(m){Le(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function ew(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function tw(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fh(4,e)}catch(u){Le(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Le(e,s,u)}}var i=e.return;try{fp(e)}catch(u){Le(e,i,u)}break;case 5:var o=e.return;try{fp(e)}catch(u){Le(e,o,u)}}}catch(u){Le(e,e.return,u)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var zN=Math.ceil,vc=_r.ReactCurrentDispatcher,Jm=_r.ReactCurrentOwner,on=_r.ReactCurrentBatchConfig,de=0,tt=null,He=null,lt=0,qt=0,Ti=fs(0),Ye=0,Wa=null,js=0,ph=0,Zm=0,ma=null,jt=null,eg=0,Wi=1/0,Hn=null,wc=!1,gp=null,qr=null,vu=!1,Lr=null,Ec=0,ga=0,_p=null,Uu=-1,zu=0;function Dt(){return de&6?Be():Uu!==-1?Uu:Uu=Be()}function Gr(t){return t.mode&1?de&2&&lt!==0?lt&-lt:SN.transition!==null?(zu===0&&(zu=cT()),zu):(t=_e,t!==0||(t=window.event,t=t===void 0?16:_T(t.type)),t):1}function vn(t,e,n,r){if(50<ga)throw ga=0,_p=null,Error(z(185));pl(t,n,r),(!(de&2)||t!==tt)&&(t===tt&&(!(de&2)&&(ph|=n),Ye===4&&Pr(t,lt)),$t(t,r),n===1&&de===0&&!(e.mode&1)&&(Wi=Be()+500,ch&&ps()))}function $t(t,e){var n=t.callbackNode;Sk(t,e);var r=sc(t,t===tt?lt:0);if(r===0)n!==null&&cv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&cv(n),e===1)t.tag===0?IN(nw.bind(null,t)):LT(nw.bind(null,t)),vN(function(){!(de&6)&&ps()}),n=null;else{switch(hT(r)){case 1:n=Rm;break;case 4:n=lT;break;case 16:n=rc;break;case 536870912:n=uT;break;default:n=rc}n=OI(n,AI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function AI(t,e){if(Uu=-1,zu=0,de&6)throw Error(z(327));var n=t.callbackNode;if(xi()&&t.callbackNode!==n)return null;var r=sc(t,t===tt?lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Tc(t,r);else{e=r;var s=de;de|=2;var i=NI();(tt!==t||lt!==e)&&(Hn=null,Wi=Be()+500,Ps(t,e));do try{WN();break}catch(a){kI(t,a)}while(!0);Fm(),vc.current=i,de=s,He!==null?e=0:(tt=null,lt=0,e=Ye)}if(e!==0){if(e===2&&(s=Wf(t),s!==0&&(r=s,e=yp(t,s))),e===1)throw n=Wa,Ps(t,0),Pr(t,r),$t(t,Be()),n;if(e===6)Pr(t,r);else{if(s=t.current.alternate,!(r&30)&&!BN(s)&&(e=Tc(t,r),e===2&&(i=Wf(t),i!==0&&(r=i,e=yp(t,i))),e===1))throw n=Wa,Ps(t,0),Pr(t,r),$t(t,Be()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Ts(t,jt,Hn);break;case 3:if(Pr(t,r),(r&130023424)===r&&(e=eg+500-Be(),10<e)){if(sc(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Dt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Jf(Ts.bind(null,t,jt,Hn),e);break}Ts(t,jt,Hn);break;case 4:if(Pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-yn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zN(r/1960))-r,10<r){t.timeoutHandle=Jf(Ts.bind(null,t,jt,Hn),r);break}Ts(t,jt,Hn);break;case 5:Ts(t,jt,Hn);break;default:throw Error(z(329))}}}return $t(t,Be()),t.callbackNode===n?AI.bind(null,t):null}function yp(t,e){var n=ma;return t.current.memoizedState.isDehydrated&&(Ps(t,e).flags|=256),t=Tc(t,e),t!==2&&(e=jt,jt=n,e!==null&&vp(e)),t}function vp(t){jt===null?jt=t:jt.push.apply(jt,t)}function BN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!En(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pr(t,e){for(e&=~Zm,e&=~ph,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function nw(t){if(de&6)throw Error(z(327));xi();var e=sc(t,0);if(!(e&1))return $t(t,Be()),null;var n=Tc(t,e);if(t.tag!==0&&n===2){var r=Wf(t);r!==0&&(e=r,n=yp(t,r))}if(n===1)throw n=Wa,Ps(t,0),Pr(t,e),$t(t,Be()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ts(t,jt,Hn),$t(t,Be()),null}function tg(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(Wi=Be()+500,ch&&ps())}}function Fs(t){Lr!==null&&Lr.tag===0&&!(de&6)&&xi();var e=de;de|=1;var n=on.transition,r=_e;try{if(on.transition=null,_e=1,t)return t()}finally{_e=r,on.transition=n,de=e,!(de&6)&&ps()}}function ng(){qt=Ti.current,ke(Ti)}function Ps(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yN(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(Lm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&uc();break;case 3:Bi(),ke(zt),ke(St),Hm();break;case 5:Wm(r);break;case 4:Bi();break;case 13:ke(Pe);break;case 19:ke(Pe);break;case 10:Um(r.type._context);break;case 22:case 23:ng()}n=n.return}if(tt=t,He=t=Kr(t.current,null),lt=qt=e,Ye=0,Wa=null,Zm=ph=js=0,jt=ma=null,Rs!==null){for(e=0;e<Rs.length;e++)if(n=Rs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Rs=null}return t}function kI(t,e){do{var n=He;try{if(Fm(),Vu.current=yc,_c){for(var r=xe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}_c=!1}if(Vs=0,et=Ge=xe=null,fa=!1,za=0,Jm.current=null,n===null||n.return===null){Ye=1,Wa=e,He=null;break}e:{var i=t,o=n.return,a=n,u=e;if(e=lt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=$v(o);if(_!==null){_.flags&=-257,Wv(_,o,a,i,e),_.mode&1&&Bv(i,c,e),e=_,u=c;var T=e.updateQueue;if(T===null){var C=new Set;C.add(u),e.updateQueue=C}else T.add(u);break e}else{if(!(e&1)){Bv(i,c,e),rg();break e}u=Error(z(426))}}else if(Ne&&a.mode&1){var N=$v(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Wv(N,o,a,i,e),Vm($i(u,a));break e}}i=u=$i(u,a),Ye!==4&&(Ye=2),ma===null?ma=[i]:ma.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var I=hI(i,u,e);Lv(i,I);break e;case 1:a=u;var y=i.type,R=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(qr===null||!qr.has(R)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=dI(i,a,e);Lv(i,b);break e}}i=i.return}while(i!==null)}xI(n)}catch(F){e=F,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function NI(){var t=vc.current;return vc.current=yc,t===null?yc:t}function rg(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),tt===null||!(js&268435455)&&!(ph&268435455)||Pr(tt,lt)}function Tc(t,e){var n=de;de|=2;var r=NI();(tt!==t||lt!==e)&&(Hn=null,Ps(t,e));do try{$N();break}catch(s){kI(t,s)}while(!0);if(Fm(),de=n,vc.current=r,He!==null)throw Error(z(261));return tt=null,lt=0,Ye}function $N(){for(;He!==null;)PI(He)}function WN(){for(;He!==null&&!mk();)PI(He)}function PI(t){var e=DI(t.alternate,t,qt);t.memoizedProps=t.pendingProps,e===null?xI(t):He=e,Jm.current=null}function xI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=VN(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,He=null;return}}else if(n=LN(n,e,qt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ye===0&&(Ye=5)}function Ts(t,e,n){var r=_e,s=on.transition;try{on.transition=null,_e=1,HN(t,e,n,r)}finally{on.transition=s,_e=r}return null}function HN(t,e,n,r){do xi();while(Lr!==null);if(de&6)throw Error(z(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ck(t,i),t===tt&&(He=tt=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vu||(vu=!0,OI(rc,function(){return xi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=on.transition,on.transition=null;var o=_e;_e=1;var a=de;de|=4,Jm.current=null,FN(t,n),CI(n,t),hN(Yf),ic=!!Qf,Yf=Qf=null,t.current=n,UN(n),gk(),de=a,_e=o,on.transition=i}else t.current=n;if(vu&&(vu=!1,Lr=t,Ec=s),i=t.pendingLanes,i===0&&(qr=null),vk(n.stateNode),$t(t,Be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(wc)throw wc=!1,t=gp,gp=null,t;return Ec&1&&t.tag!==0&&xi(),i=t.pendingLanes,i&1?t===_p?ga++:(ga=0,_p=t):ga=0,ps(),null}function xi(){if(Lr!==null){var t=hT(Ec),e=on.transition,n=_e;try{if(on.transition=null,_e=16>t?16:t,Lr===null)var r=!1;else{if(t=Lr,Lr=null,Ec=0,de&6)throw Error(z(331));var s=de;for(de|=4,q=t.current;q!==null;){var i=q,o=i.child;if(q.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(q=c;q!==null;){var h=q;switch(h.tag){case 0:case 11:case 15:pa(8,h,i)}var f=h.child;if(f!==null)f.return=h,q=f;else for(;q!==null;){h=q;var m=h.sibling,_=h.return;if(TI(h),h===c){q=null;break}if(m!==null){m.return=_,q=m;break}q=_}}}var T=i.alternate;if(T!==null){var C=T.child;if(C!==null){T.child=null;do{var N=C.sibling;C.sibling=null,C=N}while(C!==null)}}q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,q=o;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:pa(9,i,i.return)}var I=i.sibling;if(I!==null){I.return=i.return,q=I;break e}q=i.return}}var y=t.current;for(q=y;q!==null;){o=q;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,q=R;else e:for(o=y;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fh(9,a)}}catch(F){Le(a,a.return,F)}if(a===o){q=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,q=b;break e}q=a.return}}if(de=s,ps(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(ih,t)}catch{}r=!0}return r}finally{_e=n,on.transition=e}}return!1}function rw(t,e,n){e=$i(n,e),e=hI(t,e,1),t=Hr(t,e,1),e=Dt(),t!==null&&(pl(t,1,e),$t(t,e))}function Le(t,e,n){if(t.tag===3)rw(t,t,n);else for(;e!==null;){if(e.tag===3){rw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qr===null||!qr.has(r))){t=$i(n,t),t=dI(e,t,1),e=Hr(e,t,1),t=Dt(),e!==null&&(pl(e,1,t),$t(e,t));break}}e=e.return}}function qN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Dt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(lt&n)===n&&(Ye===4||Ye===3&&(lt&130023424)===lt&&500>Be()-eg?Ps(t,0):Zm|=n),$t(t,e)}function bI(t,e){e===0&&(t.mode&1?(e=uu,uu<<=1,!(uu&130023424)&&(uu=4194304)):e=1);var n=Dt();t=ar(t,e),t!==null&&(pl(t,e,n),$t(t,n))}function GN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),bI(t,n)}function KN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),bI(t,n)}var DI;DI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||zt.current)Ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ut=!1,MN(t,e,n);Ut=!!(t.flags&131072)}else Ut=!1,Ne&&e.flags&1048576&&VT(e,dc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Fu(t,e),t=e.pendingProps;var s=Fi(e,St.current);Pi(e,n),s=Gm(null,e,r,t,s,n);var i=Km();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Bt(r)?(i=!0,cc(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Bm(e),s.updater=dh,e.stateNode=s,s._reactInternals=e,ip(e,r,t,n),e=lp(null,e,r,!0,i,n)):(e.tag=0,Ne&&i&&Mm(e),xt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Fu(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=YN(r),t=fn(r,t),s){case 0:e=ap(null,e,r,t,n);break e;case 1:e=Gv(null,e,r,t,n);break e;case 11:e=Hv(null,e,r,t,n);break e;case 14:e=qv(null,e,r,fn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:fn(r,s),ap(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:fn(r,s),Gv(t,e,r,s,n);case 3:e:{if(gI(e),t===null)throw Error(z(387));r=e.pendingProps,i=e.memoizedState,s=i.element,$T(t,e),mc(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=$i(Error(z(423)),e),e=Kv(t,e,r,n,s);break e}else if(r!==s){s=$i(Error(z(424)),e),e=Kv(t,e,r,n,s);break e}else for(Kt=Wr(e.stateNode.containerInfo.firstChild),Xt=e,Ne=!0,mn=null,n=zT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ui(),r===s){e=lr(t,e,n);break e}xt(t,e,r,n)}e=e.child}return e;case 5:return WT(e),t===null&&np(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Xf(r,s)?o=null:i!==null&&Xf(r,i)&&(e.flags|=32),mI(t,e),xt(t,e,o,n),e.child;case 6:return t===null&&np(e),null;case 13:return _I(t,e,n);case 4:return $m(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zi(e,null,r,n):xt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:fn(r,s),Hv(t,e,r,s,n);case 7:return xt(t,e,e.pendingProps,n),e.child;case 8:return xt(t,e,e.pendingProps.children,n),e.child;case 12:return xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ie(fc,r._currentValue),r._currentValue=o,i!==null)if(En(i.value,o)){if(i.children===s.children&&!zt.current){e=lr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=nr(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),rp(i.return,n,e),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),rp(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}xt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Pi(e,n),s=ln(s),r=r(s),e.flags|=1,xt(t,e,r,n),e.child;case 14:return r=e.type,s=fn(r,e.pendingProps),s=fn(r.type,s),qv(t,e,r,s,n);case 15:return fI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:fn(r,s),Fu(t,e),e.tag=1,Bt(r)?(t=!0,cc(e)):t=!1,Pi(e,n),cI(e,r,s),ip(e,r,s,n),lp(null,e,r,!0,t,n);case 19:return yI(t,e,n);case 22:return pI(t,e,n)}throw Error(z(156,e.tag))};function OI(t,e){return aT(t,e)}function QN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(t,e,n,r){return new QN(t,e,n,r)}function sg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function YN(t){if(typeof t=="function")return sg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Im)return 11;if(t===Sm)return 14}return 2}function Kr(t,e){var n=t.alternate;return n===null?(n=rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bu(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")sg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case di:return xs(n.children,s,i,e);case Tm:o=8,s|=8;break;case Nf:return t=rn(12,n,e,s|2),t.elementType=Nf,t.lanes=i,t;case Pf:return t=rn(13,n,e,s),t.elementType=Pf,t.lanes=i,t;case xf:return t=rn(19,n,e,s),t.elementType=xf,t.lanes=i,t;case W0:return mh(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B0:o=10;break e;case $0:o=9;break e;case Im:o=11;break e;case Sm:o=14;break e;case Ar:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=rn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function xs(t,e,n,r){return t=rn(7,t,r,e),t.lanes=n,t}function mh(t,e,n,r){return t=rn(22,t,r,e),t.elementType=W0,t.lanes=n,t.stateNode={isHidden:!1},t}function Zd(t,e,n){return t=rn(6,t,null,e),t.lanes=n,t}function ef(t,e,n){return e=rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function XN(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Od(0),this.expirationTimes=Od(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Od(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ig(t,e,n,r,s,i,o,a,u){return t=new XN(t,e,n,a,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=rn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bm(i),t}function JN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function MI(t){if(!t)return ss;t=t._reactInternals;e:{if(Qs(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Bt(n))return MT(t,n,e)}return e}function LI(t,e,n,r,s,i,o,a,u){return t=ig(n,r,!0,t,s,i,o,a,u),t.context=MI(null),n=t.current,r=Dt(),s=Gr(n),i=nr(r,s),i.callback=e??null,Hr(n,i,s),t.current.lanes=s,pl(t,s,r),$t(t,r),t}function gh(t,e,n,r){var s=e.current,i=Dt(),o=Gr(s);return n=MI(n),e.context===null?e.context=n:e.pendingContext=n,e=nr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Hr(s,e,o),t!==null&&(vn(t,s,o,i),Lu(t,s,o)),o}function Ic(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function og(t,e){sw(t,e),(t=t.alternate)&&sw(t,e)}function ZN(){return null}var VI=typeof reportError=="function"?reportError:function(t){console.error(t)};function ag(t){this._internalRoot=t}_h.prototype.render=ag.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));gh(t,e,null,null)};_h.prototype.unmount=ag.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fs(function(){gh(null,t,null,null)}),e[or]=null}};function _h(t){this._internalRoot=t}_h.prototype.unstable_scheduleHydration=function(t){if(t){var e=pT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nr.length&&e!==0&&e<Nr[n].priority;n++);Nr.splice(n,0,t),n===0&&gT(t)}};function lg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function iw(){}function eP(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Ic(o);i.call(c)}}var o=LI(e,r,t,0,null,!1,!1,"",iw);return t._reactRootContainer=o,t[or]=o.current,La(t.nodeType===8?t.parentNode:t),Fs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var c=Ic(u);a.call(c)}}var u=ig(t,0,!1,null,null,!1,!1,"",iw);return t._reactRootContainer=u,t[or]=u.current,La(t.nodeType===8?t.parentNode:t),Fs(function(){gh(e,u,n,r)}),u}function vh(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var u=Ic(o);a.call(u)}}gh(e,o,t,s)}else o=eP(n,e,t,s,r);return Ic(o)}dT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ta(e.pendingLanes);n!==0&&(Am(e,n|1),$t(e,Be()),!(de&6)&&(Wi=Be()+500,ps()))}break;case 13:Fs(function(){var r=ar(t,1);if(r!==null){var s=Dt();vn(r,t,1,s)}}),og(t,1)}};km=function(t){if(t.tag===13){var e=ar(t,134217728);if(e!==null){var n=Dt();vn(e,t,134217728,n)}og(t,134217728)}};fT=function(t){if(t.tag===13){var e=Gr(t),n=ar(t,e);if(n!==null){var r=Dt();vn(n,t,e,r)}og(t,e)}};pT=function(){return _e};mT=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};zf=function(t,e,n){switch(e){case"input":if(Of(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=uh(r);if(!s)throw Error(z(90));q0(r),Of(r,s)}}}break;case"textarea":K0(t,n);break;case"select":e=n.value,e!=null&&Ri(t,!!n.multiple,e,!1)}};tT=tg;nT=Fs;var tP={usingClientEntryPoint:!1,Events:[gl,gi,uh,Z0,eT,tg]},$o={findFiberByHostInstance:Cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nP={bundleType:$o.bundleType,version:$o.version,rendererPackageName:$o.rendererPackageName,rendererConfig:$o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=iT(t),t===null?null:t.stateNode},findFiberByHostInstance:$o.findFiberByHostInstance||ZN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wu.isDisabled&&wu.supportsFiber)try{ih=wu.inject(nP),Pn=wu}catch{}}Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tP;Zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lg(e))throw Error(z(200));return JN(t,e,null,n)};Zt.createRoot=function(t,e){if(!lg(t))throw Error(z(299));var n=!1,r="",s=VI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=ig(t,1,!1,null,null,n,!1,r,s),t[or]=e.current,La(t.nodeType===8?t.parentNode:t),new ag(e)};Zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=iT(e),t=t===null?null:t.stateNode,t};Zt.flushSync=function(t){return Fs(t)};Zt.hydrate=function(t,e,n){if(!yh(e))throw Error(z(200));return vh(null,t,e,!0,n)};Zt.hydrateRoot=function(t,e,n){if(!lg(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=VI;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=LI(e,null,t,1,n??null,s,!1,i,o),t[or]=e.current,La(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new _h(e)};Zt.render=function(t,e,n){if(!yh(e))throw Error(z(200));return vh(null,t,e,!1,n)};Zt.unmountComponentAtNode=function(t){if(!yh(t))throw Error(z(40));return t._reactRootContainer?(Fs(function(){vh(null,null,t,!1,function(){t._reactRootContainer=null,t[or]=null})}),!0):!1};Zt.unstable_batchedUpdates=tg;Zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yh(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return vh(t,e,n,!1,r)};Zt.version="18.3.1-next-f1338f8080-20240426";function jI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jI)}catch(t){console.error(t)}}jI(),j0.exports=Zt;var rP=j0.exports,ow=rP;Af.createRoot=ow.createRoot,Af.hydrateRoot=ow.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ha(){return Ha=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ha.apply(this,arguments)}var Vr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Vr||(Vr={}));const aw="popstate";function sP(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return wp("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Sc(s)}return oP(e,n,null,t)}function be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ug(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function iP(){return Math.random().toString(36).substr(2,8)}function lw(t,e){return{usr:t.state,key:t.key,idx:e}}function wp(t,e,n,r){return n===void 0&&(n=null),Ha({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?co(e):e,{state:n,key:e&&e.key||r||iP()})}function Sc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function co(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function oP(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=Vr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(Ha({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=Vr.Pop;let N=h(),I=N==null?null:N-c;c=N,u&&u({action:a,location:C.location,delta:I})}function m(N,I){a=Vr.Push;let y=wp(C.location,N,I);c=h()+1;let R=lw(y,c),b=C.createHref(y);try{o.pushState(R,"",b)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;s.location.assign(b)}i&&u&&u({action:a,location:C.location,delta:1})}function _(N,I){a=Vr.Replace;let y=wp(C.location,N,I);c=h();let R=lw(y,c),b=C.createHref(y);o.replaceState(R,"",b),i&&u&&u({action:a,location:C.location,delta:0})}function T(N){let I=s.location.origin!=="null"?s.location.origin:s.location.href,y=typeof N=="string"?N:Sc(N);return y=y.replace(/ $/,"%20"),be(I,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,I)}let C={get action(){return a},get location(){return t(s,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(aw,f),u=N,()=>{s.removeEventListener(aw,f),u=null}},createHref(N){return e(s,N)},createURL:T,encodeLocation(N){let I=T(N);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:_,go(N){return o.go(N)}};return C}var uw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(uw||(uw={}));function aP(t,e,n){return n===void 0&&(n="/"),lP(t,e,n)}function lP(t,e,n,r){let s=typeof e=="string"?co(e):e,i=Hi(s.pathname||"/",n);if(i==null)return null;let o=FI(t);uP(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=wP(i);a=yP(o[u],c)}return a}function FI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(be(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Qr([r,u.relativePath]),h=n.concat(u);i.children&&i.children.length>0&&(be(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),FI(i.children,e,h,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:gP(c,i.index),routesMeta:h})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let u of UI(i.path))s(i,o,u)}),e}function UI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=UI(r.join("/")),a=[];return a.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function uP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:_P(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const cP=/^:[\w-]+$/,hP=3,dP=2,fP=1,pP=10,mP=-2,cw=t=>t==="*";function gP(t,e){let n=t.split("/"),r=n.length;return n.some(cw)&&(r+=mP),e&&(r+=dP),n.filter(s=>!cw(s)).reduce((s,i)=>s+(cP.test(i)?hP:i===""?fP:pP),r)}function _P(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function yP(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=i==="/"?e:e.slice(i.length)||"/",f=Ep({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),m=u.route;if(!f)return null;Object.assign(s,f.params),o.push({params:s,pathname:Qr([i,f.pathname]),pathnameBase:CP(Qr([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=Qr([i,f.pathnameBase]))}return o}function Ep(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=vP(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:m,isOptional:_}=h;if(m==="*"){let C=a[f]||"";o=i.slice(0,i.length-C.length).replace(/(.)\/+$/,"$1")}const T=a[f];return _&&!T?c[m]=void 0:c[m]=(T||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:t}}function vP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ug(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function wP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ug(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Hi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const EP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,TP=t=>EP.test(t);function IP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?co(t):t,i;if(n)if(TP(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),ug(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=hw(n.substring(1),"/"):i=hw(n,e)}else i=e;return{pathname:i,search:RP(r),hash:AP(s)}}function hw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function tf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function SP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function cg(t,e){let n=SP(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function hg(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=co(t):(s=Ha({},t),be(!s.pathname||!s.pathname.includes("?"),tf("?","pathname","search",s)),be(!s.pathname||!s.pathname.includes("#"),tf("#","pathname","hash",s)),be(!s.search||!s.search.includes("#"),tf("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;s.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=IP(s,a),c=o&&o!=="/"&&o.endsWith("/"),h=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Qr=t=>t.join("/").replace(/\/\/+/g,"/"),CP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),RP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,AP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function kP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const zI=["post","put","patch","delete"];new Set(zI);const NP=["get",...zI];new Set(NP);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qa(){return qa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qa.apply(this,arguments)}const wh=O.createContext(null),BI=O.createContext(null),yr=O.createContext(null),Eh=O.createContext(null),vr=O.createContext({outlet:null,matches:[],isDataRoute:!1}),$I=O.createContext(null);function PP(t,e){let{relative:n}=e===void 0?{}:e;ho()||be(!1);let{basename:r,navigator:s}=O.useContext(yr),{hash:i,pathname:o,search:a}=Th(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Qr([r,o])),s.createHref({pathname:u,search:a,hash:i})}function ho(){return O.useContext(Eh)!=null}function Ys(){return ho()||be(!1),O.useContext(Eh).location}function WI(t){O.useContext(yr).static||O.useLayoutEffect(t)}function jn(){let{isDataRoute:t}=O.useContext(vr);return t?$P():xP()}function xP(){ho()||be(!1);let t=O.useContext(wh),{basename:e,future:n,navigator:r}=O.useContext(yr),{matches:s}=O.useContext(vr),{pathname:i}=Ys(),o=JSON.stringify(cg(s,n.v7_relativeSplatPath)),a=O.useRef(!1);return WI(()=>{a.current=!0}),O.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=hg(c,JSON.parse(o),i,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Qr([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,i,t])}function dg(){let{matches:t}=O.useContext(vr),e=t[t.length-1];return e?e.params:{}}function Th(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(yr),{matches:s}=O.useContext(vr),{pathname:i}=Ys(),o=JSON.stringify(cg(s,r.v7_relativeSplatPath));return O.useMemo(()=>hg(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function bP(t,e){return DP(t,e)}function DP(t,e,n,r){ho()||be(!1);let{navigator:s}=O.useContext(yr),{matches:i}=O.useContext(vr),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ys(),h;if(e){var f;let N=typeof e=="string"?co(e):e;u==="/"||(f=N.pathname)!=null&&f.startsWith(u)||be(!1),h=N}else h=c;let m=h.pathname||"/",_=m;if(u!=="/"){let N=u.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(N.length).join("/")}let T=aP(t,{pathname:_}),C=jP(T&&T.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:Qr([u,s.encodeLocation?s.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:Qr([u,s.encodeLocation?s.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),i,n,r);return e&&C?O.createElement(Eh.Provider,{value:{location:qa({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Vr.Pop}},C):C}function OP(){let t=BP(),e=kP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:s},n):null,null)}const MP=O.createElement(OP,null);class LP extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(vr.Provider,{value:this.props.routeContext},O.createElement($I.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function VP(t){let{routeContext:e,match:n,children:r}=t,s=O.useContext(wh);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(vr.Provider,{value:e},r)}function jP(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(s=n)==null?void 0:s.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||be(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:m,errors:_}=n,T=f.route.loader&&m[f.route.id]===void 0&&(!_||_[f.route.id]===void 0);if(f.route.lazy||T){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let _,T=!1,C=null,N=null;n&&(_=a&&f.route.id?a[f.route.id]:void 0,C=f.route.errorElement||MP,u&&(c<0&&m===0?(WP("route-fallback"),T=!0,N=null):c===m&&(T=!0,N=f.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),y=()=>{let R;return _?R=C:T?R=N:f.route.Component?R=O.createElement(f.route.Component,null):f.route.element?R=f.route.element:R=h,O.createElement(VP,{match:f,routeContext:{outlet:h,matches:I,isDataRoute:n!=null},children:R})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?O.createElement(LP,{location:n.location,revalidation:n.revalidation,component:C,error:_,children:y(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):y()},null)}var HI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(HI||{}),qI=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(qI||{});function FP(t){let e=O.useContext(wh);return e||be(!1),e}function UP(t){let e=O.useContext(BI);return e||be(!1),e}function zP(t){let e=O.useContext(vr);return e||be(!1),e}function GI(t){let e=zP(),n=e.matches[e.matches.length-1];return n.route.id||be(!1),n.route.id}function BP(){var t;let e=O.useContext($I),n=UP(),r=GI();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function $P(){let{router:t}=FP(HI.UseNavigateStable),e=GI(qI.UseNavigateStable),n=O.useRef(!1);return WI(()=>{n.current=!0}),O.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,qa({fromRouteId:e},i)))},[t,e])}const dw={};function WP(t,e,n){dw[t]||(dw[t]=!0)}function HP(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function KI(t){let{to:e,replace:n,state:r,relative:s}=t;ho()||be(!1);let{future:i,static:o}=O.useContext(yr),{matches:a}=O.useContext(vr),{pathname:u}=Ys(),c=jn(),h=hg(e,cg(a,i.v7_relativeSplatPath),u,s==="path"),f=JSON.stringify(h);return O.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:s}),[c,f,s,n,r]),null}function Sn(t){be(!1)}function qP(t){let{basename:e="/",children:n=null,location:r,navigationType:s=Vr.Pop,navigator:i,static:o=!1,future:a}=t;ho()&&be(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:i,static:o,future:qa({v7_relativeSplatPath:!1},a)}),[u,a,i,o]);typeof r=="string"&&(r=co(r));let{pathname:h="/",search:f="",hash:m="",state:_=null,key:T="default"}=r,C=O.useMemo(()=>{let N=Hi(h,u);return N==null?null:{location:{pathname:N,search:f,hash:m,state:_,key:T},navigationType:s}},[u,h,f,m,_,T,s]);return C==null?null:O.createElement(yr.Provider,{value:c},O.createElement(Eh.Provider,{children:n,value:C}))}function GP(t){let{children:e,location:n}=t;return bP(Tp(e),n)}new Promise(()=>{});function Tp(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,s)=>{if(!O.isValidElement(r))return;let i=[...e,s];if(r.type===O.Fragment){n.push.apply(n,Tp(r.props.children,i));return}r.type!==Sn&&be(!1),!r.props.index||!r.props.children||be(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Tp(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cc(){return Cc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cc.apply(this,arguments)}function QI(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function KP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function QP(t,e){return t.button===0&&(!e||e==="_self")&&!KP(t)}const YP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],XP=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],JP="6";try{window.__reactRouterVersion=JP}catch{}const ZP=O.createContext({isTransitioning:!1}),ex="startTransition",fw=qA[ex];function tx(t){let{basename:e,children:n,future:r,window:s}=t,i=O.useRef();i.current==null&&(i.current=sP({window:s,v5Compat:!0}));let o=i.current,[a,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=O.useCallback(f=>{c&&fw?fw(()=>u(f)):u(f)},[u,c]);return O.useLayoutEffect(()=>o.listen(h),[o,h]),O.useEffect(()=>HP(r),[r]),O.createElement(qP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const nx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sx=O.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:a,target:u,to:c,preventScrollReset:h,viewTransition:f}=e,m=QI(e,YP),{basename:_}=O.useContext(yr),T,C=!1;if(typeof c=="string"&&rx.test(c)&&(T=c,nx))try{let R=new URL(window.location.href),b=c.startsWith("//")?new URL(R.protocol+c):new URL(c),F=Hi(b.pathname,_);b.origin===R.origin&&F!=null?c=F+b.search+b.hash:C=!0}catch{}let N=PP(c,{relative:s}),I=ax(c,{replace:o,state:a,target:u,preventScrollReset:h,relative:s,viewTransition:f});function y(R){r&&r(R),R.defaultPrevented||I(R)}return O.createElement("a",Cc({},m,{href:T||N,onClick:C||i?r:y,ref:n,target:u}))}),ix=O.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:o=!1,style:a,to:u,viewTransition:c,children:h}=e,f=QI(e,XP),m=Th(u,{relative:f.relative}),_=Ys(),T=O.useContext(BI),{navigator:C,basename:N}=O.useContext(yr),I=T!=null&&lx(m)&&c===!0,y=C.encodeLocation?C.encodeLocation(m).pathname:m.pathname,R=_.pathname,b=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;s||(R=R.toLowerCase(),b=b?b.toLowerCase():null,y=y.toLowerCase()),b&&N&&(b=Hi(b,N)||b);const F=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let M=R===y||!o&&R.startsWith(y)&&R.charAt(F)==="/",E=b!=null&&(b===y||!o&&b.startsWith(y)&&b.charAt(y.length)==="/"),v={isActive:M,isPending:E,isTransitioning:I},S=M?r:void 0,k;typeof i=="function"?k=i(v):k=[i,M?"active":null,E?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let P=typeof a=="function"?a(v):a;return O.createElement(sx,Cc({},f,{"aria-current":S,className:k,ref:n,style:P,to:u,viewTransition:c}),typeof h=="function"?h(v):h)});var Ip;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ip||(Ip={}));var pw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(pw||(pw={}));function ox(t){let e=O.useContext(wh);return e||be(!1),e}function ax(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:a}=e===void 0?{}:e,u=jn(),c=Ys(),h=Th(t,{relative:o});return O.useCallback(f=>{if(QP(f,n)){f.preventDefault();let m=r!==void 0?r:Sc(c)===Sc(h);u(t,{replace:m,state:s,preventScrollReset:i,relative:o,viewTransition:a})}},[c,u,h,r,s,n,t,i,o,a])}function lx(t,e){e===void 0&&(e={});let n=O.useContext(ZP);n==null&&be(!1);let{basename:r}=ox(Ip.useViewTransitionState),s=Th(t,{relative:e.relative});if(!n.isTransitioning)return!1;let i=Hi(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Hi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ep(s.pathname,o)!=null||Ep(s.pathname,i)!=null}const ux={},mw=t=>{let e;const n=new Set,r=(h,f)=>{const m=typeof h=="function"?h(e):h;if(!Object.is(m,e)){const _=e;e=f??(typeof m!="object"||m===null)?m:Object.assign({},e,m),n.forEach(T=>T(e,_))}},s=()=>e,u={setState:r,getState:s,getInitialState:()=>c,subscribe:h=>(n.add(h),()=>n.delete(h)),destroy:()=>{(ux?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,s,u);return u},cx=t=>t?mw(t):mw;var YI={exports:{}},XI={},JI={exports:{}},ZI={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qi=O;function hx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dx=typeof Object.is=="function"?Object.is:hx,fx=qi.useState,px=qi.useEffect,mx=qi.useLayoutEffect,gx=qi.useDebugValue;function _x(t,e){var n=e(),r=fx({inst:{value:n,getSnapshot:e}}),s=r[0].inst,i=r[1];return mx(function(){s.value=n,s.getSnapshot=e,nf(s)&&i({inst:s})},[t,n,e]),px(function(){return nf(s)&&i({inst:s}),t(function(){nf(s)&&i({inst:s})})},[t]),gx(n),n}function nf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dx(t,n)}catch{return!0}}function yx(t,e){return e()}var vx=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?yx:_x;ZI.useSyncExternalStore=qi.useSyncExternalStore!==void 0?qi.useSyncExternalStore:vx;JI.exports=ZI;var wx=JI.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih=O,Ex=wx;function Tx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ix=typeof Object.is=="function"?Object.is:Tx,Sx=Ex.useSyncExternalStore,Cx=Ih.useRef,Rx=Ih.useEffect,Ax=Ih.useMemo,kx=Ih.useDebugValue;XI.useSyncExternalStoreWithSelector=function(t,e,n,r,s){var i=Cx(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=Ax(function(){function u(_){if(!c){if(c=!0,h=_,_=r(_),s!==void 0&&o.hasValue){var T=o.value;if(s(T,_))return f=T}return f=_}if(T=f,Ix(h,_))return T;var C=r(_);return s!==void 0&&s(T,C)?(h=_,T):(h=_,f=C)}var c=!1,h,f,m=n===void 0?null:n;return[function(){return u(e())},m===null?void 0:function(){return u(m())}]},[e,n,r,s]);var a=Sx(t,i[0],i[1]);return Rx(function(){o.hasValue=!0,o.value=a},[a]),kx(a),a};YI.exports=XI;var Nx=YI.exports;const Px=R0(Nx),eS={},{useDebugValue:xx}=ym,{useSyncExternalStoreWithSelector:bx}=Px;let gw=!1;const Dx=t=>t;function Ox(t,e=Dx,n){(eS?"production":void 0)!=="production"&&n&&!gw&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),gw=!0);const r=bx(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return xx(r),r}const _w=t=>{(eS?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?cx(t):t,n=(r,s)=>Ox(e,r,s);return Object.assign(n,e),n},fg=t=>t?_w(t):_w,Mx={};function Lx(t,e){let n;try{n=t()}catch{return}return{getItem:s=>{var i;const o=u=>u===null?null:JSON.parse(u,void 0),a=(i=n.getItem(s))!=null?i:null;return a instanceof Promise?a.then(o):o(a)},setItem:(s,i)=>n.setItem(s,JSON.stringify(i,void 0)),removeItem:s=>n.removeItem(s)}}const Ga=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return Ga(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return Ga(r)(n)}}}},Vx=(t,e)=>(n,r,s)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:N=>N,version:0,merge:(N,I)=>({...I,...N}),...e},o=!1;const a=new Set,u=new Set;let c;try{c=i.getStorage()}catch{}if(!c)return t((...N)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...N)},r,s);const h=Ga(i.serialize),f=()=>{const N=i.partialize({...r()});let I;const y=h({state:N,version:i.version}).then(R=>c.setItem(i.name,R)).catch(R=>{I=R});if(I)throw I;return y},m=s.setState;s.setState=(N,I)=>{m(N,I),f()};const _=t((...N)=>{n(...N),f()},r,s);let T;const C=()=>{var N;if(!c)return;o=!1,a.forEach(y=>y(r()));const I=((N=i.onRehydrateStorage)==null?void 0:N.call(i,r()))||void 0;return Ga(c.getItem.bind(c))(i.name).then(y=>{if(y)return i.deserialize(y)}).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==i.version){if(i.migrate)return i.migrate(y.state,y.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return y.state}).then(y=>{var R;return T=i.merge(y,(R=r())!=null?R:_),n(T,!0),f()}).then(()=>{I==null||I(T,void 0),o=!0,u.forEach(y=>y(T))}).catch(y=>{I==null||I(void 0,y)})};return s.persist={setOptions:N=>{i={...i,...N},N.getStorage&&(c=N.getStorage())},clearStorage:()=>{c==null||c.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>C(),hasHydrated:()=>o,onHydrate:N=>(a.add(N),()=>{a.delete(N)}),onFinishHydration:N=>(u.add(N),()=>{u.delete(N)})},C(),T||_},jx=(t,e)=>(n,r,s)=>{let i={storage:Lx(()=>localStorage),partialize:C=>C,version:0,merge:(C,N)=>({...N,...C}),...e},o=!1;const a=new Set,u=new Set;let c=i.storage;if(!c)return t((...C)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...C)},r,s);const h=()=>{const C=i.partialize({...r()});return c.setItem(i.name,{state:C,version:i.version})},f=s.setState;s.setState=(C,N)=>{f(C,N),h()};const m=t((...C)=>{n(...C),h()},r,s);s.getInitialState=()=>m;let _;const T=()=>{var C,N;if(!c)return;o=!1,a.forEach(y=>{var R;return y((R=r())!=null?R:m)});const I=((N=i.onRehydrateStorage)==null?void 0:N.call(i,(C=r())!=null?C:m))||void 0;return Ga(c.getItem.bind(c))(i.name).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==i.version){if(i.migrate)return[!0,i.migrate(y.state,y.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,y.state];return[!1,void 0]}).then(y=>{var R;const[b,F]=y;if(_=i.merge(F,(R=r())!=null?R:m),n(_,!0),b)return h()}).then(()=>{I==null||I(_,void 0),_=r(),o=!0,u.forEach(y=>y(_))}).catch(y=>{I==null||I(void 0,y)})};return s.persist={setOptions:C=>{i={...i,...C},C.storage&&(c=C.storage)},clearStorage:()=>{c==null||c.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>T(),hasHydrated:()=>o,onHydrate:C=>(a.add(C),()=>{a.delete(C)}),onFinishHydration:C=>(u.add(C),()=>{u.delete(C)})},i.skipHydration||T(),_||m},Fx=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((Mx?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Vx(t,e)):jx(t,e),Ux=Fx,wr=fg(Ux((t,e)=>({user:null,userProfile:null,isAuthenticated:!1,isLoading:!0,setUser:n=>t({user:n,isAuthenticated:!!n}),setUserProfile:n=>t({userProfile:n}),setLoading:n=>t({isLoading:n}),logout:()=>t({user:null,userProfile:null,isAuthenticated:!1})}),{name:"dreamledge-auth",partialize:t=>({user:t.user,isAuthenticated:t.isAuthenticated})})),pg=fg((t,e)=>({currentBattle:null,participants:[],battlePhase:"idle",round:1,timeRemaining:0,isHost:!1,userRole:null,userSlot:null,setCurrentBattle:n=>t({currentBattle:n}),setParticipants:n=>t({participants:n}),setBattlePhase:n=>t({battlePhase:n}),setRound:n=>t({round:n}),setTimeRemaining:n=>t({timeRemaining:n}),setIsHost:n=>t({isHost:n}),setUserRole:n=>t({userRole:n}),setUserSlot:n=>t({userSlot:n}),resetBattle:()=>t({currentBattle:null,participants:[],battlePhase:"idle",round:1,timeRemaining:0,isHost:!1,userRole:null,userSlot:null})})),Sh=fg(t=>({isSidebarOpen:!1,isGifPickerOpen:!1,activeModal:null,notifications:[],toggleSidebar:()=>t(e=>({isSidebarOpen:!e.isSidebarOpen})),closeSidebar:()=>t({isSidebarOpen:!1}),toggleGifPicker:()=>t(e=>({isGifPickerOpen:!e.isGifPickerOpen})),closeGifPicker:()=>t({isGifPickerOpen:!1}),openModal:e=>t({activeModal:e}),closeModal:()=>t({activeModal:null}),addNotification:e=>t(n=>({notifications:[...n.notifications,{id:Date.now(),...e}]})),removeNotification:e=>t(n=>({notifications:n.notifications.filter(r=>r.id!==e)}))}));/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ie=(t,e)=>{const n=O.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:a="",children:u,...c},h)=>O.createElement("svg",{ref:h,...zx,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${Bx(t)}`,a].join(" "),...c},[...e.map(([f,m])=>O.createElement(f,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=ie("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=ie("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=ie("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=ie("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=ie("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=ie("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=ie("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=ie("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=ie("Gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=ie("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=ie("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=ie("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=ie("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=ie("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=ie("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=ie("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=ie("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=ie("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=ie("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=ie("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=ie("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=ie("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=ie("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=ie("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=ie("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=ie("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=ie("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=ie("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=ie("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=ie("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=ie("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=ie("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=ie("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=ie("VideoOff",[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8",key:"ubwiq0"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z",key:"1l10zd"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=ie("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=ie("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=ie("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=ie("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function ib(){const{isAuthenticated:t,logout:e}=wr(),{closeSidebar:n}=Sh(),r=jn(),s=()=>{e(),r("/"),n()},i=[{path:"/lobby",icon:Qx,label:"Arena"},{path:"/leaderboard",icon:_g,label:"Rank"},{path:"/messages",icon:rS,label:"Messages"},{path:"/profile",icon:yg,label:"Profile"}];return p.jsx(p.Fragment,{children:t&&p.jsxs("div",{className:"mobile-nav",children:[i.map(o=>p.jsxs(ix,{to:o.path,className:({isActive:a})=>`mobile-nav-item ${a?"active":""}`,children:[p.jsx(o.icon,{size:24}),p.jsx("span",{children:o.label})]},o.path)),p.jsxs("button",{onClick:s,className:"mobile-nav-item mobile-logout",children:[p.jsx(Jx,{size:24}),p.jsx("span",{children:"Out"})]})]})})}function ob(){const t=jn(),{user:e,setUser:n,setUserProfile:r,isAuthenticated:s}=wr(),[i,o]=O.useState(!1),[a,u]=O.useState(!1),[c,h]=O.useState(""),[f,m]=O.useState({email:"",password:"",username:""}),_=async C=>{if(C.preventDefault(),h(""),o(!0),!f.email.trim()){h("Email is required"),o(!1);return}if(!f.password.trim()){h("Password is required"),o(!1);return}if(f.password.length<6){h("Password must be at least 6 characters"),o(!1);return}try{const N=`user_${Date.now()}`,I={uid:N,email:f.email,displayName:f.username,photoURL:null},y={uid:N,email:f.email,displayName:I.displayName||f.email.split("@")[0],bio:"",points:1e3,wins:0,createdAt:Date.now()};n(I),r(y),o(!1),t("/lobby")}catch(N){console.error("Auth error:",N),h("Failed to process request. Please try again."),o(!1)}},T=C=>{m({...f,[C.target.name]:C.target.value}),h("")};return p.jsxs("div",{className:"home",children:[p.jsxs("div",{className:"home-background",children:[p.jsx("div",{className:"bg-gradient-1"}),p.jsx("div",{className:"bg-gradient-2"}),p.jsx("div",{className:"bg-grid"}),p.jsx("div",{className:"bg-glow"})]}),p.jsxs("header",{className:"home-header",children:[p.jsx("div",{className:"home-logo",children:p.jsx("span",{className:"logo-wordmark",children:"Dreamledge"})}),p.jsxs("button",{className:"header-leaderboard",onClick:()=>t("/leaderboard"),children:[p.jsx(_g,{size:18}),p.jsx("span",{children:"Rankings"})]})]}),p.jsxs("main",{className:"home-main",children:[p.jsxs("section",{className:"hero",children:[p.jsxs("div",{className:"hero-content",children:[p.jsxs("div",{className:"hero-badge",children:[p.jsx("span",{className:"badge-dot"}),"Live Battle Arena"]}),p.jsxs("h1",{className:"hero-title",children:["Where Artists",p.jsx("span",{className:"hero-title-accent",children:" Battle "}),"for Glory"]}),p.jsx("p",{className:"hero-subtitle",children:"Experience the thrill of live rap battles. Watch artists compete, judges critique, and the crowd decides the winner."}),p.jsx("div",{className:"hero-actions",children:p.jsxs("button",{className:"btn btn-primary btn-lg",onClick:()=>{var C;u(!1),(C=document.getElementById("join-section"))==null||C.scrollIntoView({behavior:"smooth"})},children:["Get Started",p.jsx(Hx,{size:20})]})})]}),p.jsx("div",{className:"hero-visual",children:p.jsxs("div",{className:"battle-preview",children:[p.jsxs("div",{className:"preview-card artist-1",children:[p.jsx("div",{className:"preview-avatar",children:p.jsx(Yr,{size:32})}),p.jsx("span",{className:"preview-label",children:"Artist"})]}),p.jsx("div",{className:"preview-vs",children:"VS"}),p.jsxs("div",{className:"preview-card artist-2",children:[p.jsx("div",{className:"preview-avatar",children:p.jsx(Yr,{size:32})}),p.jsx("span",{className:"preview-label",children:"Artist"})]})]})})]}),p.jsxs("section",{className:"features",children:[p.jsxs("div",{className:"feature-card",children:[p.jsx("div",{className:"feature-icon artist",children:p.jsx(Yr,{size:28})}),p.jsx("h3",{className:"feature-title",children:"Artists"}),p.jsx("p",{className:"feature-desc",children:"Upload your tracks and battle head-to-head. Show your flow, lyrics, and stage presence."})]}),p.jsxs("div",{className:"feature-card",children:[p.jsx("div",{className:"feature-icon judge",children:p.jsx(Rc,{size:28})}),p.jsx("h3",{className:"feature-title",children:"Judges"}),p.jsx("p",{className:"feature-desc",children:"Evaluate performances with professional feedback. Vote on who brings the heat."})]}),p.jsxs("div",{className:"feature-card",children:[p.jsx("div",{className:"feature-icon spectator",children:p.jsx(Kx,{size:28})}),p.jsx("h3",{className:"feature-title",children:"Spectators"}),p.jsx("p",{className:"feature-desc",children:"Watch live battles, chat with fans, and vote for your favorite artist."})]})]}),p.jsx("section",{className:"auth-section",id:"join-section",children:p.jsxs("div",{className:"auth-card",children:[p.jsxs("div",{className:"auth-header",children:[p.jsx("h2",{className:"auth-title",children:a?"Welcome Back":"Join Dreamledge"}),p.jsx("p",{className:"auth-subtitle",children:a?"Sign in to continue to the arena":"Create an account to start battling"})]}),p.jsxs("form",{onSubmit:_,className:"auth-form",children:[!a&&p.jsxs("div",{className:"input-group",children:[p.jsxs("label",{className:"input-label",children:[p.jsx(yg,{size:16}),"Username"]}),p.jsx("input",{type:"text",name:"username",value:f.username,onChange:T,className:"input",placeholder:"Enter your username",required:!a})]}),p.jsxs("div",{className:"input-group",children:[p.jsxs("label",{className:"input-label",children:[p.jsx(nS,{size:16}),"Email"]}),p.jsx("input",{type:"email",name:"email",value:f.email,onChange:T,className:"input",placeholder:"Enter your email",required:!0})]}),p.jsxs("div",{className:"input-group",children:[p.jsxs("label",{className:"input-label",children:[p.jsx(Xx,{size:16}),"Password"]}),p.jsx("input",{type:"password",name:"password",value:f.password,onChange:T,className:"input",placeholder:"Enter your password",required:!0})]}),c&&p.jsx("p",{className:"error-text",children:c}),p.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:i,children:i?p.jsxs("span",{className:"loading-dots",children:[p.jsx("span",{}),p.jsx("span",{}),p.jsx("span",{})]}):a?"Sign In":"Create Account"})]}),p.jsx("div",{className:"auth-footer",children:p.jsxs("p",{children:[a?"Don't have an account? ":"Already have an account? ",p.jsx("button",{className:"auth-switch",onClick:()=>u(!a),children:a?"Create Account":"Sign In"})]})})]})})]}),p.jsx("footer",{className:"home-footer",children:p.jsx("p",{children:"© 2024 Dreamledge. All rights reserved."})})]})}var Tw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw fo(e)},fo=function(t){return new Error("Firebase Database ("+aS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ab=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},vg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let m=(a&15)<<2|c>>6,_=c&63;u||(_=64,o||(m=64)),r.push(n[h],n[f],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ab(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw new lb;const m=i<<2|a>>4;if(r.push(m),c!==64){const _=a<<4&240|c>>2;if(r.push(_),f!==64){const T=c<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uS=function(t){const e=lS(t);return vg.encodeByteArray(e,!0)},Ac=function(t){return uS(t).replace(/\./g,"")},kc=function(t){try{return vg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(t){return cS(void 0,t)}function cS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!cb(n)||(t[n]=cS(t[n],e[n]));return t}function cb(t){return t!=="__proto__"}/**
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
 */function hb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const db=()=>hb().__FIREBASE_DEFAULTS__,fb=()=>{if(typeof process>"u"||typeof Tw>"u")return;const t=Tw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kc(t[1]);return e&&JSON.parse(e)},Rh=()=>{try{return db()||fb()||pb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hS=t=>{var e,n;return(n=(e=Rh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wg=t=>{const e=hS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},dS=()=>{var t;return(t=Rh())===null||t===void 0?void 0:t.config},fS=t=>{var e;return(e=Rh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Eg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ac(JSON.stringify(n)),Ac(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function mb(){var t;const e=(t=Rh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _b(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yb(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vb(){return aS.NODE_ADMIN===!0}function wb(){return!mb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Eb(){try{return typeof indexedDB=="object"}catch{return!1}}function Tb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ib,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wl.prototype.create)}}class wl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Sb(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Fn(s,a,r)}}function Sb(t,e){return t.replace(Cb,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Cb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t){return JSON.parse(t)}function Qe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Ka(kc(i[0])||""),n=Ka(kc(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},Rb=function(t){const e=mS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ab=function(t){const e=mS(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Gi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Rp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nc(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Pc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Iw(i)&&Iw(o)){if(!Pc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Iw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^i&(o^a),h=1518500249):(c=i^o^a,h=1859775393):f<60?(c=i&o|a&(i|o),h=2400959708):(c=i^o^a,h=3395469782);const m=(s<<5|s>>>27)+c+u+h+r[f]&4294967295;u=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Nb(t,e){const n=new Pb(t,e);return n.subscribe.bind(n)}class Pb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=sf),s.error===void 0&&(s.error=sf),s.complete===void 0&&(s.complete=sf);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sf(){}function Ah(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Se(t){return t&&t._delegate?t._delegate:t}class ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Is="[DEFAULT]";/**
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
 */class Db{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mb(e))try{this.getOrInitializeService({instanceIdentifier:Is})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Is){return this.instances.has(e)}getOptions(e=Is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ob(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Is){return this.component?this.component.multipleInstances?e:Is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ob(t){return t===Is?void 0:t}function Mb(t){return t.instantiationMode==="EAGER"}/**
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
 */class Lb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Db(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const Vb={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},jb=le.INFO,Fb={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Ub=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Fb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nh{constructor(e){this.name=e,this._logLevel=jb,this._logHandler=Ub,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const zb=(t,e)=>e.some(n=>t instanceof n);let Sw,Cw;function Bb(){return Sw||(Sw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $b(){return Cw||(Cw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gS=new WeakMap,Ap=new WeakMap,_S=new WeakMap,of=new WeakMap,Ig=new WeakMap;function Wb(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Jr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gS.set(n,t)}).catch(()=>{}),Ig.set(e,t),e}function Hb(t){if(Ap.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ap.set(t,e)}let kp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ap.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_S.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qb(t){kp=t(kp)}function Gb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(af(this),e,...n);return _S.set(r,e.sort?e.sort():[e]),Jr(r)}:$b().includes(t)?function(...e){return t.apply(af(this),e),Jr(gS.get(this))}:function(...e){return Jr(t.apply(af(this),e))}}function Kb(t){return typeof t=="function"?Gb(t):(t instanceof IDBTransaction&&Hb(t),zb(t,Bb())?new Proxy(t,kp):t)}function Jr(t){if(t instanceof IDBRequest)return Wb(t);if(of.has(t))return of.get(t);const e=Kb(t);return e!==t&&(of.set(t,e),Ig.set(e,t)),e}const af=t=>Ig.get(t);function Qb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Jr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Jr(o.result),u.oldVersion,u.newVersion,Jr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Yb=["get","getKey","getAll","getAllKeys","count"],Xb=["put","add","delete","clear"],lf=new Map;function Rw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lf.get(e))return lf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Xb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Yb.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&u.done]))[0]};return lf.set(e,i),i}qb(t=>({...t,get:(e,n,r)=>Rw(e,n)||t.get(e,n,r),has:(e,n)=>!!Rw(e,n)||t.has(e,n)}));/**
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
 */class Jb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Np="@firebase/app",Aw="0.10.13";/**
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
 */const cr=new Nh("@firebase/app"),e2="@firebase/app-compat",t2="@firebase/analytics-compat",n2="@firebase/analytics",r2="@firebase/app-check-compat",s2="@firebase/app-check",i2="@firebase/auth",o2="@firebase/auth-compat",a2="@firebase/database",l2="@firebase/data-connect",u2="@firebase/database-compat",c2="@firebase/functions",h2="@firebase/functions-compat",d2="@firebase/installations",f2="@firebase/installations-compat",p2="@firebase/messaging",m2="@firebase/messaging-compat",g2="@firebase/performance",_2="@firebase/performance-compat",y2="@firebase/remote-config",v2="@firebase/remote-config-compat",w2="@firebase/storage",E2="@firebase/storage-compat",T2="@firebase/firestore",I2="@firebase/vertexai-preview",S2="@firebase/firestore-compat",C2="firebase",R2="10.14.1";/**
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
 */const Pp="[DEFAULT]",A2={[Np]:"fire-core",[e2]:"fire-core-compat",[n2]:"fire-analytics",[t2]:"fire-analytics-compat",[s2]:"fire-app-check",[r2]:"fire-app-check-compat",[i2]:"fire-auth",[o2]:"fire-auth-compat",[a2]:"fire-rtdb",[l2]:"fire-data-connect",[u2]:"fire-rtdb-compat",[c2]:"fire-fn",[h2]:"fire-fn-compat",[d2]:"fire-iid",[f2]:"fire-iid-compat",[p2]:"fire-fcm",[m2]:"fire-fcm-compat",[g2]:"fire-perf",[_2]:"fire-perf-compat",[y2]:"fire-rc",[v2]:"fire-rc-compat",[w2]:"fire-gcs",[E2]:"fire-gcs-compat",[T2]:"fire-fst",[S2]:"fire-fst-compat",[I2]:"fire-vertex","fire-js":"fire-js",[C2]:"fire-js-all"};/**
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
 */const xc=new Map,k2=new Map,xp=new Map;function kw(t,e){try{t.container.addComponent(e)}catch(n){cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function is(t){const e=t.name;if(xp.has(e))return cr.debug(`There were multiple attempts to register component ${e}.`),!1;xp.set(e,t);for(const n of xc.values())kw(n,t);for(const n of k2.values())kw(n,t);return!0}function El(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jr(t){return t.settings!==void 0}/**
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
 */const N2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zr=new wl("app","Firebase",N2);/**
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
 */class P2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zr.create("app-deleted",{appName:this._name})}}/**
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
 */const ms=R2;function yS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pp,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Zr.create("bad-app-name",{appName:String(s)});if(n||(n=dS()),!n)throw Zr.create("no-options");const i=xc.get(s);if(i){if(Pc(n,i.options)&&Pc(r,i.config))return i;throw Zr.create("duplicate-app",{appName:s})}const o=new Lb(s);for(const u of xp.values())o.addComponent(u);const a=new P2(n,r,o);return xc.set(s,a),a}function Ph(t=Pp){const e=xc.get(t);if(!e&&t===Pp&&dS())return yS();if(!e)throw Zr.create("no-app",{appName:t});return e}function an(t,e,n){var r;let s=(r=A2[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cr.warn(a.join(" "));return}is(new ur(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const x2="firebase-heartbeat-database",b2=1,Qa="firebase-heartbeat-store";let uf=null;function vS(){return uf||(uf=Qb(x2,b2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zr.create("idb-open",{originalErrorMessage:t.message})})),uf}async function D2(t){try{const n=(await vS()).transaction(Qa),r=await n.objectStore(Qa).get(wS(t));return await n.done,r}catch(e){if(e instanceof Fn)cr.warn(e.message);else{const n=Zr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cr.warn(n.message)}}}async function Nw(t,e){try{const r=(await vS()).transaction(Qa,"readwrite");await r.objectStore(Qa).put(e,wS(t)),await r.done}catch(n){if(n instanceof Fn)cr.warn(n.message);else{const r=Zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cr.warn(r.message)}}}function wS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const O2=1024,M2=30*24*60*60*1e3;class L2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new j2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Pw();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=M2}),this._storage.overwrite(this._heartbeatsCache))}catch(r){cr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pw(),{heartbeatsToSend:r,unsentEntries:s}=V2(this._heartbeatsCache.heartbeats),i=Ac(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return cr.warn(n),""}}}function Pw(){return new Date().toISOString().substring(0,10)}function V2(t,e=O2){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),xw(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),xw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class j2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eb()?Tb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await D2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Nw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Nw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function xw(t){return Ac(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function F2(t){is(new ur("platform-logger",e=>new Jb(e),"PRIVATE")),is(new ur("heartbeat",e=>new L2(e),"PRIVATE")),an(Np,Aw,t),an(Np,Aw,"esm2017"),an("fire-js","")}F2("");var bw={};const Dw="@firebase/database",Ow="1.0.8";/**
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
 */let ES="";function U2(t){ES=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Qe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ka(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new z2(e)}}catch{}return new B2},ks=TS("localStorage"),$2=TS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new Nh("@firebase/database"),W2=function(){let t=1;return function(){return t++}}(),IS=function(t){const e=bb(t),n=new kb;n.update(e);const r=n.digest();return vg.encodeByteArray(r)},Tl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Tl.apply(null,r):typeof r=="object"?e+=Qe(r):e+=r,e+=" "}return e};let _a=null,Mw=!0;const H2=function(t,e){B(!0,"Can't turn on custom loggers persistently."),bi.logLevel=le.VERBOSE,_a=bi.log.bind(bi)},ot=function(...t){if(Mw===!0&&(Mw=!1,_a===null&&$2.get("logging_enabled")===!0&&H2()),_a){const e=Tl.apply(null,t);_a(e)}},Il=function(t){return function(...e){ot(t,...e)}},bp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Tl(...t);bi.error(e)},hr=function(...t){const e=`FIREBASE FATAL ERROR: ${Tl(...t)}`;throw bi.error(e),new Error(e)},Ot=function(...t){const e="FIREBASE WARNING: "+Tl(...t);bi.warn(e)},q2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},G2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ki="[MIN_NAME]",Us="[MAX_NAME]",Xs=function(t,e){if(t===e)return 0;if(t===Ki||e===Us)return-1;if(e===Ki||t===Us)return 1;{const n=Lw(t),r=Lw(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},K2=function(t,e){return t===e?0:t<e?-1:1},Wo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Qe(e))},Cg=function(t){if(typeof t!="object"||t===null)return Qe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Qe(e[r]),n+=":",n+=Cg(t[e[r]]);return n+="}",n},SS=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function ht(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const CS=function(t){B(!Sg(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,u;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const h=c.join("");let f="";for(u=0;u<64;u+=8){let m=parseInt(h.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},Q2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Y2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function X2(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const J2=new RegExp("^-?(0*)\\d{1,10}$"),Z2=-2147483648,eD=2147483647,Lw=function(t){if(J2.test(t)){const e=Number(t);if(e>=Z2&&e<=eD)return e}return null},mo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ot("Exception was thrown by user callback.",n),e},Math.floor(0))}},tD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ya=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class nD{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ot(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ot(e)}}class $u{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$u.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="5",RS="v",AS="s",kS="r",NS="f",PS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xS="ls",bS="p",Dp="ac",DS="websocket",OS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n,r,s,i=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ks.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ks.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function sD(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function LS(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===DS)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===OS)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sD(t)&&(n.ns=t.namespace);const s=[];return ht(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(){this.counters_={}}incrementCounter(e,n=1){Un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ub(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf={},hf={};function Ag(t){const e=t.toString();return cf[e]||(cf[e]=new iD),cf[e]}function oD(t,e){const n=t.toString();return hf[n]||(hf[n]=e()),hf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&mo(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="start",lD="close",uD="pLPCommand",cD="pRTLPCB",VS="id",jS="pw",FS="ser",hD="cb",dD="seg",fD="ts",pD="d",mD="dframe",US=1870,zS=30,gD=US-zS,_D=25e3,yD=3e4;class Ii{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Il(e),this.stats_=Ag(n),this.urlFn=u=>(this.appCheckToken&&(u[Dp]=this.appCheckToken),LS(n,OS,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new aD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(yD)),G2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new kg((...i)=>{const[o,a,u,c,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Vw)this.id=a,this.password=u;else if(o===lD)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Vw]="t",r[FS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[hD]=this.scriptTagHolder.uniqueCallbackIdentifier),r[RS]=Rg,this.transportSessionId&&(r[AS]=this.transportSessionId),this.lastSessionId&&(r[xS]=this.lastSessionId),this.applicationId&&(r[bS]=this.applicationId),this.appCheckToken&&(r[Dp]=this.appCheckToken),typeof location<"u"&&location.hostname&&PS.test(location.hostname)&&(r[kS]=NS);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ii.forceAllow_=!0}static forceDisallow(){Ii.forceDisallow_=!0}static isAvailable(){return Ii.forceAllow_?!0:!Ii.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Q2()&&!Y2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=uS(n),s=SS(r,gD);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[mD]="t",r[VS]=e,r[jS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Qe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class kg{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=W2(),window[uD+this.uniqueCallbackIdentifier]=e,window[cD+this.uniqueCallbackIdentifier]=n,this.myIFrame=kg.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ot("frame writing exception"),a.stack&&ot(a.stack),ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ot("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[VS]=this.myID,e[jS]=this.myPW,e[FS]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zS+r.length<=US;){const o=this.pendingSegs.shift();r=r+"&"+dD+s+"="+o.seg+"&"+fD+s+"="+o.ts+"&"+pD+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(_D)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=16384,wD=45e3;let bc=null;typeof MozWebSocket<"u"?bc=MozWebSocket:typeof WebSocket<"u"&&(bc=WebSocket);class gn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Il(this.connId),this.stats_=Ag(n),this.connURL=gn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[RS]=Rg,typeof location<"u"&&location.hostname&&PS.test(location.hostname)&&(o[kS]=NS),n&&(o[AS]=n),r&&(o[xS]=r),s&&(o[Dp]=s),i&&(o[bS]=i),LS(e,DS,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ks.set("previous_websocket_failure",!0);try{let r;vb(),this.mySock=new bc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){gn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&bc!==null&&!gn.forceDisallow_}static previouslyFailed(){return ks.isInMemoryStorage||ks.get("previous_websocket_failure")===!0}markConnectionHealthy(){ks.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ka(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=SS(n,vD);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wD))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}gn.responsesRequiredToBeHealthy=2;gn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ii,gn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=gn&&gn.isAvailable();let r=n&&!gn.previouslyFailed();if(e.webSocketOnly&&(n||Ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[gn];else{const s=this.transports_=[];for(const i of Ya.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ya.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ya.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED=6e4,TD=5e3,ID=10*1024,SD=100*1024,df="t",jw="d",CD="s",Fw="r",RD="e",Uw="o",zw="a",Bw="n",$w="p",AD="h";class kD{constructor(e,n,r,s,i,o,a,u,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Il("c:"+this.id+":"),this.transportManager_=new Ya(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ya(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>SD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ID?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(df in e){const n=e[df];n===zw?this.upgradeIfSecondaryHealthy_():n===Fw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Uw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Wo("t",e),r=Wo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$w,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Wo("t",e),r=Wo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Wo(df,e);if(jw in e){const r=e[jw];if(n===AD){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Bw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===CD?this.onConnectionShutdown_(r):n===Fw?this.onReset_(r):n===RD?bp("Server Error: "+r):n===Uw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Rg!==r&&Ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ya(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ED))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ya(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(TD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$w,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ks.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends $S{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Tg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Dc}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=32,Hw=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ge(){return new ve("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function os(t){return t.pieces_.length-t.pieceNum_}function Te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function Ng(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ND(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Xa(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function WS(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function Ve(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ve)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new ve(n,0)}function oe(t){return t.pieceNum_>=t.pieces_.length}function bt(t,e){const n=re(t),r=re(e);if(n===null)return e;if(n===r)return bt(Te(t),Te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function PD(t,e){const n=Xa(t,0),r=Xa(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=Xs(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Pg(t,e){if(os(t)!==os(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function sn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(os(t)>os(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class xD{constructor(e,n){this.errorPrefix_=n,this.parts_=Xa(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=kh(this.parts_[r]);HS(this)}}function bD(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=kh(e),HS(t)}function DD(t){const e=t.parts_.pop();t.byteLength_-=kh(e),t.parts_.length>0&&(t.byteLength_-=1)}function HS(t){if(t.byteLength_>Hw)throw new Error(t.errorPrefix_+"has a key path longer than "+Hw+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ww)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ww+") or object contains a cycle "+Ss(t))}function Ss(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg extends $S{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new xg}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=1e3,OD=60*5*1e3,qw=30*1e3,MD=1.3,LD=3e4,VD="server_kill",Gw=3;class rr extends BS{constructor(e,n,r,s,i,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=rr.nextPersistentConnectionId_++,this.log_=Il("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ho,this.maxReconnectDelay_=OD,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Dc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Qe(i)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new vl,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const u=a.d,c=a.s;rr.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Un(e,"w")){const r=Gi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ab(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Rb(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Qe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):bp("Unrecognized action received from server: "+Qe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ho,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ho,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>LD&&(this.reconnectDelay_=Ho),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*MD)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+rr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ot("getToken() completed but was canceled"):(ot("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new kD(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Ot(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(VD)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Ot(f),u())}}}interrupt(e){ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Rp(this.interruptReasons_)&&(this.reconnectDelay_=Ho,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Cg(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new ve(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Gw&&(this.reconnectDelay_=qw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Gw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ES.replace(/\./g,"-")]=1,Tg()?e["framework.cordova"]=1:pS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Dc.getInstance().currentlyOnline();return Rp(this.interruptReasons_)&&e}}rr.nextPersistentConnectionId_=0;rr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new se(Ki,e),s=new se(Ki,n);return this.compare(r,s)!==0}minPost(){return se.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu;class qS extends xh{static get __EMPTY_NODE(){return Eu}static set __EMPTY_NODE(e){Eu=e}compare(e,n){return Xs(e.name,n.name)}isDefinedOn(e){throw fo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return se.MIN}maxPost(){return new se(Us,Eu)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,Eu)}toString(){return".key"}}const Di=new qS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tu=class{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Gt=class ra{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ra.RED,this.left=s??An.EMPTY_NODE,this.right=i??An.EMPTY_NODE}copy(e,n,r,s,i){return new ra(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return An.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return An.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ra.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ra.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Gt.RED=!0;Gt.BLACK=!1;class jD{copy(e,n,r,s,i){return this}insert(e,n,r){return new Gt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let An=class Wu{constructor(e,n=Wu.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Wu(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Gt.BLACK,null,null))}remove(e){return new Wu(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Gt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Tu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Tu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Tu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Tu(this.root_,null,this.comparator_,!0,e)}};An.EMPTY_NODE=new jD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FD(t,e){return Xs(t.name,e.name)}function bg(t,e){return Xs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Op;function UD(t){Op=t}const GS=function(t){return typeof t=="number"?"number:"+CS(t):"string:"+t},KS=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Un(e,".sv"),"Priority must be a string or number.")}else B(t===Op||t.isEmpty(),"priority of unexpected type.");B(t===Op||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kw;class Je{constructor(e,n=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),KS(this.priorityNode_)}static set __childrenNodeConstructor(e){Kw=e}static get __childrenNodeConstructor(){return Kw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:re(e)===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=re(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||os(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(Te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+GS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=CS(this.value_):e+=this.value_,this.lazyHash_=IS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Je.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Je.VALUE_TYPE_ORDER.indexOf(n),i=Je.VALUE_TYPE_ORDER.indexOf(r);return B(s>=0,"Unknown leaf type: "+n),B(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QS,YS;function zD(t){QS=t}function BD(t){YS=t}class $D extends xh{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Xs(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(Us,new Je("[PRIORITY-POST]",YS))}makePost(e,n){const r=QS(e);return new se(n,new Je("[PRIORITY-POST]",r))}toString(){return".priority"}}const je=new $D;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD=Math.log(2);class HD{constructor(e){const n=i=>parseInt(Math.log(i)/WD,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Oc=function(t,e,n,r){t.sort(e);const s=function(u,c){const h=c-u;let f,m;if(h===0)return null;if(h===1)return f=t[u],m=n?n(f):f,new Gt(m,f.node,Gt.BLACK,null,null);{const _=parseInt(h/2,10)+u,T=s(u,_),C=s(_+1,c);return f=t[_],m=n?n(f):f,new Gt(m,f.node,Gt.BLACK,T,C)}},i=function(u){let c=null,h=null,f=t.length;const m=function(T,C){const N=f-T,I=f;f-=T;const y=s(N+1,I),R=t[N],b=n?n(R):R;_(new Gt(b,R.node,C,null,y))},_=function(T){c?(c.left=T,c=T):(h=T,c=T)};for(let T=0;T<u.count;++T){const C=u.nextBitIsOne(),N=Math.pow(2,u.count-(T+1));C?m(N,Gt.BLACK):(m(N,Gt.BLACK),m(N,Gt.RED))}return h},o=new HD(t.length),a=i(o);return new An(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ff;const oi={};class Jn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(oi&&je,"ChildrenNode.ts has not been loaded"),ff=ff||new Jn({".priority":oi},{".priority":je}),ff}get(e){const n=Gi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof An?n:null}hasIndex(e){return Un(this.indexSet_,e.toString())}addIndex(e,n){B(e!==Di,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(se.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Oc(r,e.getCompare()):a=oi;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const h=Object.assign({},this.indexes_);return h[u]=a,new Jn(h,c)}addToIndexes(e,n){const r=Nc(this.indexes_,(s,i)=>{const o=Gi(this.indexSet_,i);if(B(o,"Missing index implementation for "+i),s===oi)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(se.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),Oc(a,o.getCompare())}else return oi;else{const a=n.get(e.name);let u=s;return a&&(u=u.remove(new se(e.name,a))),u.insert(e,e.node)}});return new Jn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Nc(this.indexes_,s=>{if(s===oi)return s;{const i=n.get(e.name);return i?s.remove(new se(e.name,i)):s}});return new Jn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo;class X{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&KS(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return qo||(qo=new X(new An(bg),null,Jn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qo}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?qo:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(Te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new se(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?qo:this.priorityNode_;return new X(s,o,i)}}updateChild(e,n){const r=re(e);if(r===null)return n;{B(re(e)!==".priority"||os(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Te(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(je,(o,a)=>{n[o]=a.val(e),r++,i&&X.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+GS(this.getPriority().val())+":"),this.forEachChild(je,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":IS(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new se(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new se(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,se.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Sl?-1:0}withIndex(e){if(e===Di||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Di||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(je),s=n.getIterator(je);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Di?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qD extends X{constructor(){super(new An(bg),X.EMPTY_NODE,Jn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const Sl=new qD;Object.defineProperties(se,{MIN:{value:new se(Ki,X.EMPTY_NODE)},MAX:{value:new se(Us,Sl)}});qS.__EMPTY_NODE=X.EMPTY_NODE;Je.__childrenNodeConstructor=X;UD(Sl);BD(Sl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD=!0;function Ke(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Je(n,Ke(e))}if(!(t instanceof Array)&&GD){const n=[];let r=!1;if(ht(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=Ke(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new se(o,u)))}}),n.length===0)return X.EMPTY_NODE;const i=Oc(n,FD,o=>o.name,bg);if(r){const o=Oc(n,je.getCompare());return new X(i,Ke(e),new Jn({".priority":o},{".priority":je}))}else return new X(i,Ke(e),Jn.Default)}else{let n=X.EMPTY_NODE;return ht(t,(r,s)=>{if(Un(t,r)&&r.substring(0,1)!=="."){const i=Ke(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(Ke(e))}}zD(Ke);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD extends xh{constructor(e){super(),this.indexPath_=e,B(!oe(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Xs(e.name,n.name):i}makePost(e,n){const r=Ke(e),s=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new se(n,s)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,Sl);return new se(Us,e)}toString(){return Xa(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD extends xh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Xs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,n){const r=Ke(e);return new se(n,r)}toString(){return".value"}}const YD=new QD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t){return{type:"value",snapshotNode:t}}function Qi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ja(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Za(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function XD(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ja(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Qi(n,r)):o.trackChildChange(Za(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(je,(s,i)=>{n.hasChild(s)||r.trackChildChange(Ja(s,i))}),n.isLeafNode()||n.forEachChild(je,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Za(s,i,o))}else r.trackChildChange(Qi(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.indexedFilter_=new Dg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=el.getStartPost_(e),this.endPost_=el.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new se(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(X.EMPTY_NODE);const i=this;return n.forEachChild(je,(o,a)=>{i.matches(new se(o,a))||(s=s.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new el(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new se(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=X.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(X.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,_)=>f(_,m)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const u=new se(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=s.getChildAfterChild(this.index_,c,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=s.getChildAfterChild(this.index_,m,this.reverse_);const _=m==null?1:o(m,u);if(h&&!r.isEmpty()&&_>=0)return i!=null&&i.trackChildChange(Za(n,r,f)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(Ja(n,f));const C=a.updateImmediateChild(n,X.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(i!=null&&i.trackChildChange(Qi(m.name,m.node)),C.updateImmediateChild(m.name,m.node)):C}}else return r.isEmpty()?e:h&&o(c,u)>=0?(i!=null&&(i.trackChildChange(Ja(c.name,c.node)),i.trackChildChange(Qi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=je}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ki}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Us}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===je}copy(){const e=new Og;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ZD(t){return t.loadsAllData()?new Dg(t.getIndex()):t.hasLimit()?new JD(t):new el(t)}function Qw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===je?n="$priority":t.index_===YD?n="$value":t.index_===Di?n="$key":(B(t.index_ instanceof KD,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Qe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Qe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Qe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Qe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Qe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Yw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==je&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc extends BS{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Il("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Mc.getListenId_(e,r),a={};this.listens_[o]=a;const u=Qw(e._queryParams);this.restRequest_(i+".json",u,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(i,f,!1,r),Gi(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",s(m,null)}})}unlisten(e,n){const r=Mc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Qw(e._queryParams),r=e._path.toString(),s=new vl;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+po(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Ka(a.responseText)}catch{Ot("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Ot("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(){return{value:null,children:new Map}}function JS(t,e,n){if(oe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=re(e);t.children.has(r)||t.children.set(r,Lc());const s=t.children.get(r);e=Te(e),JS(s,e,n)}}function Mp(t,e,n){t.value!==null?n(e,t.value):tO(t,(r,s)=>{const i=new ve(e.toString()+"/"+r);Mp(s,i,n)})}function tO(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ht(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=10*1e3,rO=30*1e3,sO=5*60*1e3;class iO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new nO(e);const r=Xw+(rO-Xw)*Math.random();ya(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ht(e,(s,i)=>{i>0&&Un(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),ya(this.reportStats_.bind(this),Math.floor(Math.random()*2*sO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _n;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_n||(_n={}));function Mg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Lg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=_n.ACK_USER_WRITE,this.source=Mg()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new Vc(ge(),n,this.revert)}}else return B(re(this.path)===e,"operationForChild called for unrelated child."),new Vc(Te(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n){this.source=e,this.path=n,this.type=_n.LISTEN_COMPLETE}operationForChild(e){return oe(this.path)?new tl(this.source,ge()):new tl(this.source,Te(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=_n.OVERWRITE}operationForChild(e){return oe(this.path)?new zs(this.source,ge(),this.snap.getImmediateChild(e)):new zs(this.source,Te(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=_n.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new zs(this.source,ge(),n.value):new Yi(this.source,ge(),n)}else return B(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Yi(this.source,Te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function aO(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(XD(o.childName,o.snapshotNode))}),Go(t,s,"child_removed",e,r,n),Go(t,s,"child_added",e,r,n),Go(t,s,"child_moved",i,r,n),Go(t,s,"child_changed",e,r,n),Go(t,s,"value",e,r,n),s}function Go(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,u)=>uO(t,a,u)),o.forEach(a=>{const u=lO(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function lO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function uO(t,e,n){if(e.childName==null||n.childName==null)throw fo("Should only compare child_ events.");const r=new se(e.childName,e.snapshotNode),s=new se(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t,e){return{eventCache:t,serverCache:e}}function va(t,e,n,r){return bh(new as(e,n,r),t.serverCache)}function ZS(t,e,n,r){return bh(t.eventCache,new as(e,n,r))}function jc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Bs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pf;const cO=()=>(pf||(pf=new An(K2)),pf);class Ee{constructor(e,n=cO()){this.value=e,this.children=n}static fromObject(e){let n=new Ee(null);return ht(e,(r,s)=>{n=n.set(new ve(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ge(),value:this.value};if(oe(e))return null;{const r=re(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Te(e),n);return i!=null?{path:Ve(new ve(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=re(e),r=this.children.get(n);return r!==null?r.subtree(Te(e)):new Ee(null)}}set(e,n){if(oe(e))return new Ee(n,this.children);{const r=re(e),i=(this.children.get(r)||new Ee(null)).set(Te(e),n),o=this.children.insert(r,i);return new Ee(this.value,o)}}remove(e){if(oe(e))return this.children.isEmpty()?new Ee(null):new Ee(null,this.children);{const n=re(e),r=this.children.get(n);if(r){const s=r.remove(Te(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Ee(null):new Ee(this.value,i)}else return this}}get(e){if(oe(e))return this.value;{const n=re(e),r=this.children.get(n);return r?r.get(Te(e)):null}}setTree(e,n){if(oe(e))return n;{const r=re(e),i=(this.children.get(r)||new Ee(null)).setTree(Te(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Ee(this.value,o)}}fold(e){return this.fold_(ge(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Ve(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ge(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(oe(e))return null;{const i=re(e),o=this.children.get(i);return o?o.findOnPath_(Te(e),Ve(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ge(),n)}foreachOnPath_(e,n,r){if(oe(e))return this;{this.value&&r(n,this.value);const s=re(e),i=this.children.get(s);return i?i.foreachOnPath_(Te(e),Ve(n,s),r):new Ee(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Ve(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.writeTree_=e}static empty(){return new wn(new Ee(null))}}function wa(t,e,n){if(oe(e))return new wn(new Ee(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=bt(s,e);return i=i.updateChild(o,n),new wn(t.writeTree_.set(s,i))}else{const s=new Ee(n),i=t.writeTree_.setTree(e,s);return new wn(i)}}}function Lp(t,e,n){let r=t;return ht(n,(s,i)=>{r=wa(r,Ve(e,s),i)}),r}function Jw(t,e){if(oe(e))return wn.empty();{const n=t.writeTree_.setTree(e,new Ee(null));return new wn(n)}}function Vp(t,e){return Js(t,e)!=null}function Js(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(bt(n.path,e)):null}function Zw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(je,(r,s)=>{e.push(new se(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new se(r,s.value))}),e}function es(t,e){if(oe(e))return t;{const n=Js(t,e);return n!=null?new wn(new Ee(n)):new wn(t.writeTree_.subtree(e))}}function jp(t){return t.writeTree_.isEmpty()}function Xi(t,e){return eC(ge(),t.writeTree_,e)}function eC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(B(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=eC(Ve(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ve(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t,e){return sC(e,t)}function hO(t,e,n,r,s){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=wa(t.visibleWrites,e,n)),t.lastWriteId=r}function dO(t,e,n,r){B(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Lp(t.visibleWrites,e,n),t.lastWriteId=r}function fO(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function pO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&mO(a,r.path)?s=!1:sn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return gO(t),!0;if(r.snap)t.visibleWrites=Jw(t.visibleWrites,r.path);else{const a=r.children;ht(a,u=>{t.visibleWrites=Jw(t.visibleWrites,Ve(r.path,u))})}return!0}else return!1}function mO(t,e){if(t.snap)return sn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&sn(Ve(t.path,n),e))return!0;return!1}function gO(t){t.visibleWrites=tC(t.allWrites,_O,ge()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function _O(t){return t.visible}function tC(t,e,n){let r=wn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)sn(n,o)?(a=bt(n,o),r=wa(r,a,i.snap)):sn(o,n)&&(a=bt(o,n),r=wa(r,ge(),i.snap.getChild(a)));else if(i.children){if(sn(n,o))a=bt(n,o),r=Lp(r,a,i.children);else if(sn(o,n))if(a=bt(o,n),oe(a))r=Lp(r,ge(),i.children);else{const u=Gi(i.children,re(a));if(u){const c=u.getChild(Te(a));r=wa(r,ge(),c)}}}else throw fo("WriteRecord should have .snap or .children")}}return r}function nC(t,e,n,r,s){if(!r&&!s){const i=Js(t.visibleWrites,e);if(i!=null)return i;{const o=es(t.visibleWrites,e);if(jp(o))return n;if(n==null&&!Vp(o,ge()))return null;{const a=n||X.EMPTY_NODE;return Xi(o,a)}}}else{const i=es(t.visibleWrites,e);if(!s&&jp(i))return n;if(!s&&n==null&&!Vp(i,ge()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(sn(c.path,e)||sn(e,c.path))},a=tC(t.allWrites,o,e),u=n||X.EMPTY_NODE;return Xi(a,u)}}}function yO(t,e,n){let r=X.EMPTY_NODE;const s=Js(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(je,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=es(t.visibleWrites,e);return n.forEachChild(je,(o,a)=>{const u=Xi(es(i,new ve(o)),a);r=r.updateImmediateChild(o,u)}),Zw(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=es(t.visibleWrites,e);return Zw(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function vO(t,e,n,r,s){B(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Ve(e,n);if(Vp(t.visibleWrites,i))return null;{const o=es(t.visibleWrites,i);return jp(o)?s.getChild(n):Xi(o,s.getChild(n))}}function wO(t,e,n,r){const s=Ve(e,n),i=Js(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=es(t.visibleWrites,s);return Xi(o,r.getNode().getImmediateChild(n))}else return null}function EO(t,e){return Js(t.visibleWrites,e)}function TO(t,e,n,r,s,i,o){let a;const u=es(t.visibleWrites,e),c=Js(u,ge());if(c!=null)a=c;else if(n!=null)a=Xi(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=m.getNext();for(;_&&h.length<s;)f(_,r)!==0&&h.push(_),_=m.getNext();return h}else return[]}function IO(){return{visibleWrites:wn.empty(),allWrites:[],lastWriteId:-1}}function Fc(t,e,n,r){return nC(t.writeTree,t.treePath,e,n,r)}function jg(t,e){return yO(t.writeTree,t.treePath,e)}function eE(t,e,n,r){return vO(t.writeTree,t.treePath,e,n,r)}function Uc(t,e){return EO(t.writeTree,Ve(t.treePath,e))}function SO(t,e,n,r,s,i){return TO(t.writeTree,t.treePath,e,n,r,s,i)}function Fg(t,e,n){return wO(t.writeTree,t.treePath,e,n)}function rC(t,e){return sC(Ve(t.treePath,e),t.writeTree)}function sC(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Za(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Ja(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Qi(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Za(r,e.snapshotNode,s.oldSnap));else throw fo("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const iC=new RO;class Ug{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new as(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Bs(this.viewCache_),i=SO(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AO(t){return{filter:t}}function kO(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function NO(t,e,n,r,s){const i=new CO;let o,a;if(n.type===_n.OVERWRITE){const c=n;c.source.fromUser?o=Fp(t,e,c.path,c.snap,r,s,i):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!oe(c.path),o=zc(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===_n.MERGE){const c=n;c.source.fromUser?o=xO(t,e,c.path,c.children,r,s,i):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Up(t,e,c.path,c.children,r,s,a,i))}else if(n.type===_n.ACK_USER_WRITE){const c=n;c.revert?o=OO(t,e,c.path,r,s,i):o=bO(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===_n.LISTEN_COMPLETE)o=DO(t,e,n.path,r,i);else throw fo("Unknown operation type: "+n.type);const u=i.getChanges();return PO(e,o,u),{viewCache:o,changes:u}}function PO(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=jc(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(XS(jc(e)))}}function oC(t,e,n,r,s,i){const o=e.eventCache;if(Uc(r,n)!=null)return e;{let a,u;if(oe(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Bs(e),h=c instanceof X?c:X.EMPTY_NODE,f=jg(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const c=Fc(r,Bs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=re(n);if(c===".priority"){B(os(n)===1,"Can't have a priority with additional path components");const h=o.getNode();u=e.serverCache.getNode();const f=eE(r,n,h,u);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Te(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=eE(r,n,o.getNode(),u);m!=null?f=o.getNode().getImmediateChild(c).updateChild(h,m):f=o.getNode().getImmediateChild(c)}else f=Fg(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,h,s,i):a=o.getNode()}}return va(e,a,o.isFullyInitialized()||oe(n),t.filter.filtersNodes())}}function zc(t,e,n,r,s,i,o,a){const u=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(oe(n))c=h.updateFullNode(u.getNode(),r,null);else if(h.filtersNodes()&&!u.isFiltered()){const _=u.getNode().updateChild(n,r);c=h.updateFullNode(u.getNode(),_,null)}else{const _=re(n);if(!u.isCompleteForPath(n)&&os(n)>1)return e;const T=Te(n),N=u.getNode().getImmediateChild(_).updateChild(T,r);_===".priority"?c=h.updatePriority(u.getNode(),N):c=h.updateChild(u.getNode(),_,N,T,iC,null)}const f=ZS(e,c,u.isFullyInitialized()||oe(n),h.filtersNodes()),m=new Ug(s,f,i);return oC(t,f,n,s,m,a)}function Fp(t,e,n,r,s,i,o){const a=e.eventCache;let u,c;const h=new Ug(s,e,i);if(oe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=va(e,c,!0,t.filter.filtersNodes());else{const f=re(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=va(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=Te(n),_=a.getNode().getImmediateChild(f);let T;if(oe(m))T=r;else{const C=h.getCompleteChild(f);C!=null?Ng(m)===".priority"&&C.getChild(WS(m)).isEmpty()?T=C:T=C.updateChild(m,r):T=X.EMPTY_NODE}if(_.equals(T))u=e;else{const C=t.filter.updateChild(a.getNode(),f,T,m,h,o);u=va(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function tE(t,e){return t.eventCache.isCompleteForChild(e)}function xO(t,e,n,r,s,i,o){let a=e;return r.foreach((u,c)=>{const h=Ve(n,u);tE(e,re(h))&&(a=Fp(t,a,h,c,s,i,o))}),r.foreach((u,c)=>{const h=Ve(n,u);tE(e,re(h))||(a=Fp(t,a,h,c,s,i,o))}),a}function nE(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Up(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;oe(n)?c=r:c=new Ee(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),T=nE(t,_,m);u=zc(t,u,new ve(f),T,s,i,o,a)}}),c.children.inorderTraversal((f,m)=>{const _=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!_){const T=e.serverCache.getNode().getImmediateChild(f),C=nE(t,T,m);u=zc(t,u,new ve(f),C,s,i,o,a)}}),u}function bO(t,e,n,r,s,i,o){if(Uc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(oe(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return zc(t,e,n,u.getNode().getChild(n),s,i,a,o);if(oe(n)){let c=new Ee(null);return u.getNode().forEachChild(Di,(h,f)=>{c=c.set(new ve(h),f)}),Up(t,e,n,c,s,i,a,o)}else return e}else{let c=new Ee(null);return r.foreach((h,f)=>{const m=Ve(n,h);u.isCompleteForPath(m)&&(c=c.set(h,u.getNode().getChild(m)))}),Up(t,e,n,c,s,i,a,o)}}function DO(t,e,n,r,s){const i=e.serverCache,o=ZS(e,i.getNode(),i.isFullyInitialized()||oe(n),i.isFiltered());return oC(t,o,n,r,iC,s)}function OO(t,e,n,r,s,i){let o;if(Uc(r,n)!=null)return e;{const a=new Ug(r,e,s),u=e.eventCache.getNode();let c;if(oe(n)||re(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Fc(r,Bs(e));else{const f=e.serverCache.getNode();B(f instanceof X,"serverChildren would be complete if leaf node"),h=jg(r,f)}h=h,c=t.filter.updateFullNode(u,h,i)}else{const h=re(n);let f=Fg(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=u.getImmediateChild(h)),f!=null?c=t.filter.updateChild(u,h,f,Te(n),a,i):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(u,h,X.EMPTY_NODE,Te(n),a,i):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Fc(r,Bs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Uc(r,ge())!=null,va(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Dg(r.getIndex()),i=ZD(r);this.processor_=AO(i);const o=n.serverCache,a=n.eventCache,u=s.updateFullNode(X.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(X.EMPTY_NODE,a.getNode(),null),h=new as(u,o.isFullyInitialized(),s.filtersNodes()),f=new as(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=bh(f,h),this.eventGenerator_=new oO(this.query_)}get query(){return this.query_}}function LO(t){return t.viewCache_.serverCache.getNode()}function VO(t){return jc(t.viewCache_)}function jO(t,e){const n=Bs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function rE(t){return t.eventRegistrations_.length===0}function FO(t,e){t.eventRegistrations_.push(e)}function sE(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function iE(t,e,n,r){e.type===_n.MERGE&&e.source.queryId!==null&&(B(Bs(t.viewCache_),"We should always have a full cache before handling merges"),B(jc(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=NO(t.processor_,s,e,n,r);return kO(t.processor_,i.viewCache),B(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,aC(t,i.changes,i.viewCache.eventCache.getNode(),null)}function UO(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(je,(i,o)=>{r.push(Qi(i,o))}),n.isFullyInitialized()&&r.push(XS(n.getNode())),aC(t,r,n.getNode(),e)}function aC(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return aO(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bc;class lC{constructor(){this.views=new Map}}function zO(t){B(!Bc,"__referenceConstructor has already been defined"),Bc=t}function BO(){return B(Bc,"Reference.ts has not been loaded"),Bc}function $O(t){return t.views.size===0}function zg(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return B(i!=null,"SyncTree gave us an op for an invalid query."),iE(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(iE(o,e,n,r));return i}}function uC(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Fc(n,s?r:null),u=!1;a?u=!0:r instanceof X?(a=jg(n,r),u=!1):(a=X.EMPTY_NODE,u=!1);const c=bh(new as(a,u,!1),new as(r,s,!1));return new MO(e,c)}return o}function WO(t,e,n,r,s,i){const o=uC(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),FO(o,n),UO(o,n)}function HO(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=ls(t);if(s==="default")for(const[u,c]of t.views.entries())o=o.concat(sE(c,n,r)),rE(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||i.push(c.query));else{const u=t.views.get(s);u&&(o=o.concat(sE(u,n,r)),rE(u)&&(t.views.delete(s),u.query._queryParams.loadsAllData()||i.push(u.query)))}return a&&!ls(t)&&i.push(new(BO())(e._repo,e._path)),{removed:i,events:o}}function cC(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ts(t,e){let n=null;for(const r of t.views.values())n=n||jO(r,e);return n}function hC(t,e){if(e._queryParams.loadsAllData())return Oh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function dC(t,e){return hC(t,e)!=null}function ls(t){return Oh(t)!=null}function Oh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $c;function qO(t){B(!$c,"__referenceConstructor has already been defined"),$c=t}function GO(){return B($c,"Reference.ts has not been loaded"),$c}let KO=1;class oE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ee(null),this.pendingWriteTree_=IO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fC(t,e,n,r,s){return hO(t.pendingWriteTree_,e,n,r,s),s?go(t,new zs(Mg(),e,n)):[]}function QO(t,e,n,r){dO(t.pendingWriteTree_,e,n,r);const s=Ee.fromObject(n);return go(t,new Yi(Mg(),e,s))}function Fr(t,e,n=!1){const r=fO(t.pendingWriteTree_,e);if(pO(t.pendingWriteTree_,e)){let i=new Ee(null);return r.snap!=null?i=i.set(ge(),!0):ht(r.children,o=>{i=i.set(new ve(o),!0)}),go(t,new Vc(r.path,i,n))}else return[]}function Cl(t,e,n){return go(t,new zs(Lg(),e,n))}function YO(t,e,n){const r=Ee.fromObject(n);return go(t,new Yi(Lg(),e,r))}function XO(t,e){return go(t,new tl(Lg(),e))}function JO(t,e,n){const r=$g(t,n);if(r){const s=Wg(r),i=s.path,o=s.queryId,a=bt(i,e),u=new tl(Vg(o),a);return Hg(t,i,u)}else return[]}function Wc(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||dC(o,e))){const u=HO(o,e,n,r);$O(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=u.removed;if(a=u.events,!s){const h=c.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(i,(m,_)=>ls(_));if(h&&!f){const m=t.syncPointTree_.subtree(i);if(!m.isEmpty()){const _=tM(m);for(let T=0;T<_.length;++T){const C=_[T],N=C.query,I=_C(t,C);t.listenProvider_.startListening(Ea(N),nl(t,N),I.hashFn,I.onComplete)}}}!f&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(Ea(e),null):c.forEach(m=>{const _=t.queryToTagMap.get(Mh(m));t.listenProvider_.stopListening(Ea(m),_)}))}nM(t,c)}return a}function pC(t,e,n,r){const s=$g(t,r);if(s!=null){const i=Wg(s),o=i.path,a=i.queryId,u=bt(o,e),c=new zs(Vg(a),u,n);return Hg(t,o,c)}else return[]}function ZO(t,e,n,r){const s=$g(t,r);if(s){const i=Wg(s),o=i.path,a=i.queryId,u=bt(o,e),c=Ee.fromObject(n),h=new Yi(Vg(a),u,c);return Hg(t,o,h)}else return[]}function zp(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(m,_)=>{const T=bt(m,s);i=i||ts(_,T),o=o||ls(_)});let a=t.syncPointTree_.get(s);a?(o=o||ls(a),i=i||ts(a,ge())):(a=new lC,t.syncPointTree_=t.syncPointTree_.set(s,a));let u;i!=null?u=!0:(u=!1,i=X.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((_,T)=>{const C=ts(T,ge());C&&(i=i.updateImmediateChild(_,C))}));const c=dC(a,e);if(!c&&!e._queryParams.loadsAllData()){const m=Mh(e);B(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const _=rM();t.queryToTagMap.set(m,_),t.tagToQueryMap.set(_,m)}const h=Dh(t.pendingWriteTree_,s);let f=WO(a,e,n,h,i,u);if(!c&&!o&&!r){const m=hC(a,e);f=f.concat(sM(t,e,m))}return f}function Bg(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=bt(o,e),c=ts(a,u);if(c)return c});return nC(s,e,i,n,!0)}function eM(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const f=bt(c,n);r=r||ts(h,f)});let s=t.syncPointTree_.get(n);s?r=r||ts(s,ge()):(s=new lC,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new as(r,!0,!1):null,a=Dh(t.pendingWriteTree_,e._path),u=uC(s,e,a,i?o.getNode():X.EMPTY_NODE,i);return VO(u)}function go(t,e){return mC(e,t.syncPointTree_,null,Dh(t.pendingWriteTree_,ge()))}function mC(t,e,n,r){if(oe(t.path))return gC(t,e,n,r);{const s=e.get(ge());n==null&&s!=null&&(n=ts(s,ge()));let i=[];const o=re(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,h=rC(r,o);i=i.concat(mC(a,u,c,h))}return s&&(i=i.concat(zg(s,t,r,n))),i}}function gC(t,e,n,r){const s=e.get(ge());n==null&&s!=null&&(n=ts(s,ge()));let i=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=rC(r,o),h=t.operationForChild(o);h&&(i=i.concat(gC(h,a,u,c)))}),s&&(i=i.concat(zg(s,t,r,n))),i}function _C(t,e){const n=e.query,r=nl(t,n);return{hashFn:()=>(LO(e)||X.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?JO(t,n._path,r):XO(t,n._path);{const i=X2(s,n);return Wc(t,n,null,i)}}}}function nl(t,e){const n=Mh(e);return t.queryToTagMap.get(n)}function Mh(t){return t._path.toString()+"$"+t._queryIdentifier}function $g(t,e){return t.tagToQueryMap.get(e)}function Wg(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function Hg(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const s=Dh(t.pendingWriteTree_,e);return zg(r,n,s,null)}function tM(t){return t.fold((e,n,r)=>{if(n&&ls(n))return[Oh(n)];{let s=[];return n&&(s=cC(n)),ht(r,(i,o)=>{s=s.concat(o)}),s}})}function Ea(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(GO())(t._repo,t._path):t}function nM(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Mh(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function rM(){return KO++}function sM(t,e,n){const r=e._path,s=nl(t,e),i=_C(t,n),o=t.listenProvider_.startListening(Ea(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)B(!ls(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,h,f)=>{if(!oe(c)&&h&&ls(h))return[Oh(h).query];{let m=[];return h&&(m=m.concat(cC(h).map(_=>_.query))),ht(f,(_,T)=>{m=m.concat(T)}),m}});for(let c=0;c<u.length;++c){const h=u[c];t.listenProvider_.stopListening(Ea(h),nl(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new qg(n)}node(){return this.node_}}class Gg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ve(this.path_,e);return new Gg(this.syncTree_,n)}node(){return Bg(this.syncTree_,this.path_)}}const iM=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},aE=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return oM(t[".sv"],e,n);if(typeof t[".sv"]=="object")return aM(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},oM=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},aM=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const s=e.node();if(B(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},yC=function(t,e,n,r){return Kg(e,new Gg(n,t),r)},vC=function(t,e,n){return Kg(t,new qg(e),n)};function Kg(t,e,n){const r=t.getPriority().val(),s=aE(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=aE(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Je(a,Ke(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Je(s))),o.forEachChild(je,(a,u)=>{const c=Kg(u,e.getImmediateChild(a),n);c!==u&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Yg(t,e){let n=e instanceof ve?e:new ve(e),r=t,s=re(n);for(;s!==null;){const i=Gi(r.node.children,s)||{children:{},childCount:0};r=new Qg(s,r,i),n=Te(n),s=re(n)}return r}function _o(t){return t.node.value}function wC(t,e){t.node.value=e,Bp(t)}function EC(t){return t.node.childCount>0}function lM(t){return _o(t)===void 0&&!EC(t)}function Lh(t,e){ht(t.node.children,(n,r)=>{e(new Qg(n,t,r))})}function TC(t,e,n,r){n&&e(t),Lh(t,s=>{TC(s,e,!0)})}function uM(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Rl(t){return new ve(t.parent===null?t.name:Rl(t.parent)+"/"+t.name)}function Bp(t){t.parent!==null&&cM(t.parent,t.name,t)}function cM(t,e,n){const r=lM(n),s=Un(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Bp(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Bp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM=/[\[\].#$\/\u0000-\u001F\u007F]/,dM=/[\[\].#$\u0000-\u001F\u007F]/,mf=10*1024*1024,Xg=function(t){return typeof t=="string"&&t.length!==0&&!hM.test(t)},IC=function(t){return typeof t=="string"&&t.length!==0&&!dM.test(t)},fM=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),IC(t)},pM=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Sg(t)||t&&typeof t=="object"&&Un(t,".sv")},SC=function(t,e,n,r){r&&e===void 0||Vh(Ah(t,"value"),e,n)},Vh=function(t,e,n){const r=n instanceof ve?new xD(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ss(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ss(r)+" with contents = "+e.toString());if(Sg(e))throw new Error(t+"contains "+e.toString()+" "+Ss(r));if(typeof e=="string"&&e.length>mf/3&&kh(e)>mf)throw new Error(t+"contains a string greater than "+mf+" utf8 bytes "+Ss(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(ht(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Xg(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ss(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);bD(r,o),Vh(t,a,r),DD(r)}),s&&i)throw new Error(t+' contains ".value" child '+Ss(r)+" in addition to actual children.")}},mM=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=Xa(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!Xg(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(PD);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&sn(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},gM=function(t,e,n,r){const s=Ah(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];ht(e,(o,a)=>{const u=new ve(o);if(Vh(s,a,Ve(n,u)),Ng(u)===".priority"&&!pM(a))throw new Error(s+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(u)}),mM(s,i)},CC=function(t,e,n,r){if(!IC(n))throw new Error(Ah(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},_M=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),CC(t,e,n)},RC=function(t,e){if(re(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},yM=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Xg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!fM(n))throw new Error(Ah(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jh(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Pg(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function AC(t,e,n){jh(t,n),kC(t,r=>Pg(r,e))}function cn(t,e,n){jh(t,n),kC(t,r=>sn(r,e)||sn(e,r))}function kC(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(wM(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function wM(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();_a&&ot("event: "+n.toString()),mo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM="repo_interrupt",TM=25;class IM{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new vM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Lc(),this.transactionQueueTree_=new Qg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function SM(t,e,n){if(t.stats_=Ag(t.repoInfo_),t.forceRestClient_||tD())t.server_=new Mc(t.repoInfo_,(r,s,i,o)=>{lE(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>uE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Qe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new rr(t.repoInfo_,e,(r,s,i,o)=>{lE(t,r,s,i,o)},r=>{uE(t,r)},r=>{CM(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=oD(t.repoInfo_,()=>new iO(t.stats_,t.server_)),t.infoData_=new eO,t.infoSyncTree_=new oE({startListening:(r,s,i,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Cl(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Jg(t,"connected",!1),t.serverSyncTree_=new oE({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,u)=>{const c=o(a,u);cn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function NC(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Fh(t){return iM({timestamp:NC(t)})}function lE(t,e,n,r,s){t.dataUpdateCount++;const i=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const u=Nc(n,c=>Ke(c));o=ZO(t.serverSyncTree_,i,u,s)}else{const u=Ke(n);o=pC(t.serverSyncTree_,i,u,s)}else if(r){const u=Nc(n,c=>Ke(c));o=YO(t.serverSyncTree_,i,u)}else{const u=Ke(n);o=Cl(t.serverSyncTree_,i,u)}let a=i;o.length>0&&(a=Ji(t,i)),cn(t.eventQueue_,a,o)}function uE(t,e){Jg(t,"connected",e),e===!1&&NM(t)}function CM(t,e){ht(e,(n,r)=>{Jg(t,n,r)})}function Jg(t,e,n){const r=new ve("/.info/"+e),s=Ke(n);t.infoData_.updateSnapshot(r,s);const i=Cl(t.infoSyncTree_,r,s);cn(t.eventQueue_,r,i)}function Zg(t){return t.nextWriteId_++}function RM(t,e,n){const r=eM(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=Ke(s).withIndex(e._queryParams.getIndex());zp(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Cl(t.serverSyncTree_,e._path,i);else{const a=nl(t.serverSyncTree_,e);o=pC(t.serverSyncTree_,e._path,i,a)}return cn(t.eventQueue_,e._path,o),Wc(t.serverSyncTree_,e,n,null,!0),i},s=>(Al(t,"get for query "+Qe(e)+" failed: "+s),Promise.reject(new Error(s))))}function AM(t,e,n,r,s){Al(t,"set",{path:e.toString(),value:n,priority:r});const i=Fh(t),o=Ke(n,r),a=Bg(t.serverSyncTree_,e),u=vC(o,a,i),c=Zg(t),h=fC(t.serverSyncTree_,e,u,c,!0);jh(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(m,_)=>{const T=m==="ok";T||Ot("set at "+e+" failed: "+m);const C=Fr(t.serverSyncTree_,c,!T);cn(t.eventQueue_,e,C),Wp(t,s,m,_)});const f=t_(t,e);Ji(t,f),cn(t.eventQueue_,f,[])}function kM(t,e,n,r){Al(t,"update",{path:e.toString(),value:n});let s=!0;const i=Fh(t),o={};if(ht(n,(a,u)=>{s=!1,o[a]=yC(Ve(e,a),Ke(u),t.serverSyncTree_,i)}),s)ot("update() called with empty data.  Don't do anything."),Wp(t,r,"ok",void 0);else{const a=Zg(t),u=QO(t.serverSyncTree_,e,o,a);jh(t.eventQueue_,u),t.server_.merge(e.toString(),n,(c,h)=>{const f=c==="ok";f||Ot("update at "+e+" failed: "+c);const m=Fr(t.serverSyncTree_,a,!f),_=m.length>0?Ji(t,e):e;cn(t.eventQueue_,_,m),Wp(t,r,c,h)}),ht(n,c=>{const h=t_(t,Ve(e,c));Ji(t,h)}),cn(t.eventQueue_,e,[])}}function NM(t){Al(t,"onDisconnectEvents");const e=Fh(t),n=Lc();Mp(t.onDisconnect_,ge(),(s,i)=>{const o=yC(s,i,t.serverSyncTree_,e);JS(n,s,o)});let r=[];Mp(n,ge(),(s,i)=>{r=r.concat(Cl(t.serverSyncTree_,s,i));const o=t_(t,s);Ji(t,o)}),t.onDisconnect_=Lc(),cn(t.eventQueue_,ge(),r)}function PM(t,e,n){let r;re(e._path)===".info"?r=zp(t.infoSyncTree_,e,n):r=zp(t.serverSyncTree_,e,n),AC(t.eventQueue_,e._path,r)}function $p(t,e,n){let r;re(e._path)===".info"?r=Wc(t.infoSyncTree_,e,n):r=Wc(t.serverSyncTree_,e,n),AC(t.eventQueue_,e._path,r)}function xM(t){t.persistentConnection_&&t.persistentConnection_.interrupt(EM)}function Al(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ot(n,...e)}function Wp(t,e,n,r){e&&mo(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function PC(t,e,n){return Bg(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function e_(t,e=t.transactionQueueTree_){if(e||Uh(t,e),_o(e)){const n=bC(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&bM(t,Rl(e),n)}else EC(e)&&Lh(e,n=>{e_(t,n)})}function bM(t,e,n){const r=n.map(c=>c.currentWriteId),s=PC(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const h=n[c];B(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=bt(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),u=e;t.server_.put(u.toString(),a,c=>{Al(t,"transaction put response",{path:u.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(Fr(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Uh(t,Yg(t.transactionQueueTree_,e)),e_(t,t.transactionQueueTree_),cn(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)mo(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Ot("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Ji(t,e)}},o)}function Ji(t,e){const n=xC(t,e),r=Rl(n),s=bC(t,n);return DM(t,s,r),r}function DM(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=bt(n,u.path);let h=!1,f;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)h=!0,f=u.abortReason,s=s.concat(Fr(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=TM)h=!0,f="maxretry",s=s.concat(Fr(t.serverSyncTree_,u.currentWriteId,!0));else{const m=PC(t,u.path,o);u.currentInputSnapshot=m;const _=e[a].update(m.val());if(_!==void 0){Vh("transaction failed: Data returned ",_,u.path);let T=Ke(_);typeof _=="object"&&_!=null&&Un(_,".priority")||(T=T.updatePriority(m.getPriority()));const N=u.currentWriteId,I=Fh(t),y=vC(T,m,I);u.currentOutputSnapshotRaw=T,u.currentOutputSnapshotResolved=y,u.currentWriteId=Zg(t),o.splice(o.indexOf(N),1),s=s.concat(fC(t.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally)),s=s.concat(Fr(t.serverSyncTree_,N,!0))}else h=!0,f="nodata",s=s.concat(Fr(t.serverSyncTree_,u.currentWriteId,!0))}cn(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Uh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)mo(r[a]);e_(t,t.transactionQueueTree_)}function xC(t,e){let n,r=t.transactionQueueTree_;for(n=re(e);n!==null&&_o(r)===void 0;)r=Yg(r,n),e=Te(e),n=re(e);return r}function bC(t,e){const n=[];return DC(t,e,n),n.sort((r,s)=>r.order-s.order),n}function DC(t,e,n){const r=_o(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Lh(e,s=>{DC(t,s,n)})}function Uh(t,e){const n=_o(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,wC(e,n.length>0?n:void 0)}Lh(e,r=>{Uh(t,r)})}function t_(t,e){const n=Rl(xC(t,e)),r=Yg(t.transactionQueueTree_,e);return uM(r,s=>{gf(t,s)}),gf(t,r),TC(r,s=>{gf(t,s)}),n}function gf(t,e){const n=_o(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Fr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?wC(e,void 0):n.length=i+1,cn(t.eventQueue_,Rl(e),s);for(let o=0;o<r.length;o++)mo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OM(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function MM(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ot(`Invalid query segment '${n}' in query '${t}'`)}return e}const cE=function(t,e){const n=LM(t),r=n.namespace;n.domain==="firebase.com"&&hr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&hr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||q2();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new MS(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new ve(n.pathString)}},LM=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(s=OM(t.substring(h,f)));const m=MM(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const T=e.indexOf(".");r=e.substring(0,T).toLowerCase(),n=e.substring(T+1),i=r}"ns"in m&&(i=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",VM=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=hE.charAt(n%64),n=Math.floor(n/64);B(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=hE.charAt(e[s]);return B(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Qe(this.snapshot.exportVal())}}class FM{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class n_{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return oe(this._path)?null:Ng(this._path)}get ref(){return new Er(this._repo,this._path)}get _queryIdentifier(){const e=Yw(this._queryParams),n=Cg(e);return n==="{}"?"default":n}get _queryObject(){return Yw(this._queryParams)}isEqual(e){if(e=Se(e),!(e instanceof n_))return!1;const n=this._repo===e._repo,r=Pg(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+ND(this._path)}}class Er extends n_{constructor(e,n){super(e,n,new Og,!1)}get parent(){const e=WS(this._path);return e===null?null:new Er(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class rl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),r=sl(this.ref,e);return new rl(this._node.getChild(n),r,je)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new rl(s,sl(this.ref,r),je)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function vt(t,e){return t=Se(t),t._checkNotDeleted("ref"),e!==void 0?sl(t._root,e):t._root}function sl(t,e){return t=Se(t),re(t._path)===null?_M("child","path",e):CC("child","path",e),new Er(t._repo,Ve(t._path,e))}function dE(t,e){t=Se(t),RC("push",t._path),SC("push",e,t._path,!0);const n=NC(t._repo),r=VM(n),s=sl(t,r),i=sl(t,r);let o;return o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Kn(t,e){t=Se(t),RC("set",t._path),SC("set",e,t._path,!1);const n=new vl;return AM(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function _f(t,e){gM("update",e,t._path);const n=new vl;return kM(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Ko(t){t=Se(t);const e=new OC(()=>{}),n=new zh(e);return RM(t._repo,t,n).then(r=>new rl(r,new Er(t._repo,t._path),t._queryParams.getIndex()))}class zh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new jM("value",this,new rl(e.snapshotNode,new Er(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new FM(this,e,n):null}matches(e){return e instanceof zh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function UM(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const u=n,c=(h,f)=>{$p(t._repo,t,a),u(h,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new OC(n,i||void 0),a=new zh(o);return PM(t._repo,t,a),()=>$p(t._repo,t,a)}function Hp(t,e,n,r){return UM(t,"value",e,n,r)}function qp(t,e,n){$p(t._repo,t,null)}zO(Er);qO(Er);/**
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
 */const zM="FIREBASE_DATABASE_EMULATOR_HOST",Gp={};let BM=!1;function $M(t,e,n,r){t.repoInfo_=new MS(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function WM(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||hr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ot("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=cE(i,s),a=o.repoInfo,u;typeof process<"u"&&bw&&(u=bw[zM]),u?(i=`http://${u}?ns=${a.namespace}`,o=cE(i,s),a=o.repoInfo):o.repoInfo.secure;const c=new rD(t.name,t.options,e);yM("Invalid Firebase Database URL",o),oe(o.path)||hr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=qM(a,t,c,new nD(t.name,n));return new GM(h,t)}function HM(t,e){const n=Gp[e];(!n||n[t.key]!==t)&&hr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),xM(t),delete n[t.key]}function qM(t,e,n,r){let s=Gp[e.name];s||(s={},Gp[e.name]=s);let i=s[t.toURLString()];return i&&hr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new IM(t,BM,n,r),s[t.toURLString()]=i,i}class GM{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(SM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Er(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(HM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hr("Cannot call "+e+" on a deleted database.")}}function KM(t=Ph(),e){const n=El(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=wg("database");r&&QM(n,...r)}return n}function QM(t,e,n,r={}){t=Se(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&hr("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&hr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new $u($u.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Eg(r.mockUserToken,t.app.options.projectId);i=new $u(o)}$M(s,e,n,i)}/**
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
 */function YM(t){U2(ms),is(new ur("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return WM(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),an(Dw,Ow,t),an(Dw,Ow,"esm2017")}/**
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
 */const XM={".sv":"timestamp"};function Si(){return XM}rr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};rr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};YM();var JM="firebase",ZM="10.14.1";/**
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
 */an(JM,ZM,"app");function r_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function MC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eL=MC,LC=new wl("auth","Firebase",MC());/**
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
 */const Hc=new Nh("@firebase/auth");function tL(t,...e){Hc.logLevel<=le.WARN&&Hc.warn(`Auth (${ms}): ${t}`,...e)}function Hu(t,...e){Hc.logLevel<=le.ERROR&&Hc.error(`Auth (${ms}): ${t}`,...e)}/**
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
 */function dr(t,...e){throw s_(t,...e)}function bn(t,...e){return s_(t,...e)}function VC(t,e,n){const r=Object.assign(Object.assign({},eL()),{[e]:n});return new wl("auth","Firebase",r).create(e,{appName:t.name})}function bs(t){return VC(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function s_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return LC.create(t,...e)}function J(t,e,...n){if(!t)throw s_(e,...n)}function Zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hu(e),new Error(e)}function fr(t,e){t||Zn(e)}/**
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
 */function Kp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nL(){return fE()==="http:"||fE()==="https:"}function fE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function rL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nL()||_b()||"connection"in navigator)?navigator.onLine:!0}function sL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class kl{constructor(e,n){this.shortDelay=e,this.longDelay=n,fr(n>e,"Short delay should be less than long delay!"),this.isMobile=Tg()||pS()}get(){return rL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function i_(t,e){fr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class jC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const oL=new kl(3e4,6e4);function o_(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yo(t,e,n,r,s={}){return FC(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=po(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},i);return gb()||(c.referrerPolicy="no-referrer"),jC.fetch()(UC(t,t.config.apiHost,n,a),c)})}async function FC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iL),e);try{const s=new lL(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Iu(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Iu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Iu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Iu(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw VC(t,h,c);dr(t,h)}}catch(s){if(s instanceof Fn)throw s;dr(t,"network-request-failed",{message:String(s)})}}async function aL(t,e,n,r,s={}){const i=await yo(t,e,n,r,s);return"mfaPendingCredential"in i&&dr(t,"multi-factor-auth-required",{_serverResponse:i}),i}function UC(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?i_(t.config,s):`${t.config.apiScheme}://${s}`}class lL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),oL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Iu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=bn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function uL(t,e){return yo(t,"POST","/v1/accounts:delete",e)}async function zC(t,e){return yo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ta(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cL(t,e=!1){const n=Se(t),r=await n.getIdToken(e),s=a_(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ta(yf(s.auth_time)),issuedAtTime:Ta(yf(s.iat)),expirationTime:Ta(yf(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yf(t){return Number(t)*1e3}function a_(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Hu("JWT malformed, contained fewer than 3 sections"),null;try{const s=kc(n);return s?JSON.parse(s):(Hu("Failed to decode base64 JWT payload"),null)}catch(s){return Hu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function pE(t){const e=a_(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function il(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&hL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ta(this.lastLoginAt),this.creationTime=Ta(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await il(t,zC(n,{idToken:r}));J(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?BC(i.providerUserInfo):[],a=pL(t.providerData,o),u=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Qp(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function fL(t){const e=Se(t);await qc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pL(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function BC(t){return t.map(e=>{var{providerId:n}=e,r=r_(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function mL(t,e){const n=await FC(t,{},async()=>{const r=po({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=UC(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gL(t,e){return yo(t,"POST","/v2/accounts:revokeToken",o_(t,e))}/**
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
 */class Oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=pE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await mL(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Oi;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oi,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
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
 */function Rr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class er{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=r_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Qp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await il(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cL(this,e)}reload(){return fL(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jr(this.auth.app))return Promise.reject(bs(this.auth));const e=await this.getIdToken();return await il(this,uL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:R,emailVerified:b,isAnonymous:F,providerData:M,stsTokenManager:E}=n;J(R&&E,e,"internal-error");const v=Oi.fromJSON(this.name,E);J(typeof R=="string",e,"internal-error"),Rr(f,e.name),Rr(m,e.name),J(typeof b=="boolean",e,"internal-error"),J(typeof F=="boolean",e,"internal-error"),Rr(_,e.name),Rr(T,e.name),Rr(C,e.name),Rr(N,e.name),Rr(I,e.name),Rr(y,e.name);const S=new er({uid:R,auth:e,email:m,emailVerified:b,displayName:f,isAnonymous:F,photoURL:T,phoneNumber:_,tenantId:C,stsTokenManager:v,createdAt:I,lastLoginAt:y});return M&&Array.isArray(M)&&(S.providerData=M.map(k=>Object.assign({},k))),N&&(S._redirectEventId=N),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new Oi;s.updateFromServerResponse(n);const i=new er({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?BC(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Oi;a.updateFromIdToken(r);const u=new er({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Qp(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
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
 */const mE=new Map;function tr(t){fr(t instanceof Function,"Expected a class definition");let e=mE.get(t);return e?(fr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mE.set(t,e),e)}/**
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
 */class $C{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$C.type="NONE";const gE=$C;/**
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
 */function qu(t,e,n){return`firebase:${t}:${e}:${n}`}class Mi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=qu(this.userKey,s.apiKey,i),this.fullPersistenceKey=qu("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mi(tr(gE),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||tr(gE);const o=qu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=er._fromJSON(e,h);c!==i&&(a=f),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Mi(i,e,r):(i=u[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Mi(i,e,r))}}/**
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
 */function _E(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(GC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(WC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(QC(e))return"Blackberry";if(YC(e))return"Webos";if(HC(e))return"Safari";if((e.includes("chrome/")||qC(e))&&!e.includes("edge/"))return"Chrome";if(KC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function WC(t=Ct()){return/firefox\//i.test(t)}function HC(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qC(t=Ct()){return/crios\//i.test(t)}function GC(t=Ct()){return/iemobile/i.test(t)}function KC(t=Ct()){return/android/i.test(t)}function QC(t=Ct()){return/blackberry/i.test(t)}function YC(t=Ct()){return/webos/i.test(t)}function l_(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _L(t=Ct()){var e;return l_(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yL(){return yb()&&document.documentMode===10}function XC(t=Ct()){return l_(t)||KC(t)||YC(t)||QC(t)||/windows phone/i.test(t)||GC(t)}/**
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
 */function JC(t,e=[]){let n;switch(t){case"Browser":n=_E(Ct());break;case"Worker":n=`${_E(Ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ms}/${r}`}/**
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
 */class vL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const u=e(i);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function wL(t,e={}){return yo(t,"GET","/v2/passwordPolicy",o_(t,e))}/**
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
 */const EL=6;class TL{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:EL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class IL{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yE(this),this.idTokenSubscription=new yE(this),this.beforeStateQueue=new vL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=LC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Mi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zC(this,{idToken:e}),r=await er._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(jr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jr(this.app))return Promise.reject(bs(this));const n=e?Se(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jr(this.app)?Promise.reject(bs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jr(this.app)?Promise.reject(bs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wL(this),n=new TL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await gL(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tr(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Mi.create(this,[tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=JC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&tL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function u_(t){return Se(t)}class yE{constructor(e){this.auth=e,this.observer=null,this.addObserver=Nb(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let c_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SL(t){c_=t}function CL(t){return c_.loadJS(t)}function RL(){return c_.gapiScript}function AL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function kL(t,e){const n=El(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Pc(i,e??{}))return s;dr(s,"already-initialized")}return n.initialize({options:e})}function NL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PL(t,e,n){const r=u_(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ZC(e),{host:o,port:a}=xL(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),bL()}function ZC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xL(t){const e=ZC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vE(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vE(o)}}}function vE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class eR{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,n){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}/**
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
 */async function Li(t,e){return aL(t,"POST","/v1/accounts:signInWithIdp",o_(t,e))}/**
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
 */const DL="http://localhost";class $s extends eR{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=r_(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new $s(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Li(e,n)}buildRequest(){const e={requestUri:DL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=po(n)}return e}}/**
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
 */class tR{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Nl extends tR{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xr extends Nl{constructor(){super("facebook.com")}static credential(e){return $s._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
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
 */class Qn extends Nl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $s._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
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
 */class br extends Nl{constructor(){super("github.com")}static credential(e){return $s._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return br.credential(e.oauthAccessToken)}catch{return null}}}br.GITHUB_SIGN_IN_METHOD="github.com";br.PROVIDER_ID="github.com";/**
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
 */class Dr extends Nl{constructor(){super("twitter.com")}static credential(e,n){return $s._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dr.credential(n,r)}catch{return null}}}Dr.TWITTER_SIGN_IN_METHOD="twitter.com";Dr.PROVIDER_ID="twitter.com";/**
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
 */class Zi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await er._fromIdTokenResponse(e,r,s),o=wE(r);return new Zi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=wE(r);return new Zi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function wE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Gc extends Fn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Gc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Gc(e,n,r,s)}}function nR(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Gc._fromErrorAndOperation(t,i,e,r):i})}async function OL(t,e,n=!1){const r=await il(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zi._forOperation(t,"link",r)}/**
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
 */async function ML(t,e,n=!1){const{auth:r}=t;if(jr(r.app))return Promise.reject(bs(r));const s="reauthenticate";try{const i=await il(t,nR(r,s,e,t),n);J(i.idToken,r,"internal-error");const o=a_(i.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),Zi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&dr(r,"user-mismatch"),i}}/**
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
 */async function LL(t,e,n=!1){if(jr(t.app))return Promise.reject(bs(t));const r="signIn",s=await nR(t,r,e),i=await Zi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function VL(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function jL(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}const Kc="__sak";/**
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
 */class rR{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Kc,"1"),this.storage.removeItem(Kc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const FL=1e3,UL=10;class sR extends rR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=XC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);yL()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,UL):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sR.type="LOCAL";const zL=sR;/**
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
 */class iR extends rR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iR.type="SESSION";const oR=iR;/**
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
 */function BL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Bh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),u=await BL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bh.receivers=[];/**
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
 */function h_(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $L{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,u)=>{const c=h_("",20);s.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(h),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Dn(){return window}function WL(t){Dn().location.href=t}/**
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
 */function aR(){return typeof Dn().WorkerGlobalScope<"u"&&typeof Dn().importScripts=="function"}async function HL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GL(){return aR()?self:null}/**
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
 */const lR="firebaseLocalStorageDb",KL=1,Qc="firebaseLocalStorage",uR="fbase_key";class Pl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $h(t,e){return t.transaction([Qc],e?"readwrite":"readonly").objectStore(Qc)}function QL(){const t=indexedDB.deleteDatabase(lR);return new Pl(t).toPromise()}function Yp(){const t=indexedDB.open(lR,KL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qc,{keyPath:uR})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qc)?e(r):(r.close(),await QL(),e(await Yp()))})})}async function EE(t,e,n){const r=$h(t,!0).put({[uR]:e,value:n});return new Pl(r).toPromise()}async function YL(t,e){const n=$h(t,!1).get(e),r=await new Pl(n).toPromise();return r===void 0?null:r.value}function TE(t,e){const n=$h(t,!0).delete(e);return new Pl(n).toPromise()}const XL=800,JL=3;class cR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return aR()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bh._getInstance(GL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HL(),!this.activeServiceWorker)return;this.sender=new $L(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yp();return await EE(e,Kc,"1"),await TE(e,Kc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>EE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>TE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$h(s,!1).getAll();return new Pl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cR.type="LOCAL";const ZL=cR;new kl(3e4,6e4);/**
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
 */function eV(t,e){return e?tr(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class d_ extends eR{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tV(t){return LL(t.auth,new d_(t),t.bypassAuthState)}function nV(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),ML(n,new d_(t),t.bypassAuthState)}async function rV(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),OL(n,new d_(t),t.bypassAuthState)}/**
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
 */class hR{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tV;case"linkViaPopup":case"linkViaRedirect":return rV;case"reauthViaPopup":case"reauthViaRedirect":return nV;default:dr(this.auth,"internal-error")}}resolve(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sV=new kl(2e3,1e4);class Ci extends hR{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ci.currentPopupAction&&Ci.currentPopupAction.cancel(),Ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){fr(this.filter.length===1,"Popup operations only handle one event");const e=h_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sV.get())};e()}}Ci.currentPopupAction=null;/**
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
 */const iV="pendingRedirect",Gu=new Map;class oV extends hR{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Gu.get(this.auth._key());if(!e){try{const r=await aV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Gu.set(this.auth._key(),e)}return this.bypassAuthState||Gu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aV(t,e){const n=cV(e),r=uV(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function lV(t,e){Gu.set(t._key(),e)}function uV(t){return tr(t._redirectPersistence)}function cV(t){return qu(iV,t.config.apiKey,t.name)}async function hV(t,e,n=!1){if(jr(t.app))return Promise.reject(bs(t));const r=u_(t),s=eV(r,e),o=await new oV(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const dV=10*60*1e3;class fV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dR(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dV&&this.cachedEventUids.clear(),this.cachedEventUids.has(IE(e))}saveEventToCache(e){this.cachedEventUids.add(IE(e)),this.lastProcessedEventTime=Date.now()}}function IE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dR({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dR(t);default:return!1}}/**
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
 */async function mV(t,e={}){return yo(t,"GET","/v1/projects",e)}/**
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
 */const gV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_V=/^https?/;async function yV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mV(t);for(const n of e)try{if(vV(n))return}catch{}dr(t,"unauthorized-domain")}function vV(t){const e=Kp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_V.test(n))return!1;if(gV.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const wV=new kl(3e4,6e4);function SE(){const t=Dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function EV(t){return new Promise((e,n)=>{var r,s,i;function o(){SE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{SE(),n(bn(t,"network-request-failed"))},timeout:wV.get()})}if(!((s=(r=Dn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Dn().gapi)===null||i===void 0)&&i.load)o();else{const a=AL("iframefcb");return Dn()[a]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},CL(`${RL()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Ku=null,e})}let Ku=null;function TV(t){return Ku=Ku||EV(t),Ku}/**
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
 */const IV=new kl(5e3,15e3),SV="__/auth/iframe",CV="emulator/auth/iframe",RV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kV(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?i_(e,CV):`https://${t.config.authDomain}/${SV}`,r={apiKey:e.apiKey,appName:t.name,v:ms},s=AV.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${po(r).slice(1)}`}async function NV(t){const e=await TV(t),n=Dn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:kV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RV,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),a=Dn().setTimeout(()=>{i(o)},IV.get());function u(){Dn().clearTimeout(a),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const PV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xV=500,bV=600,DV="_blank",OV="http://localhost";class CE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MV(t,e,n,r=xV,s=bV){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},PV),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Ct().toLowerCase();n&&(a=qC(c)?DV:n),WC(c)&&(e=e||OV,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[_,T])=>`${m}${_}=${T},`,"");if(_L(c)&&a!=="_self")return LV(e||"",a),new CE(null);const f=window.open(e||"",a,h);J(f,t,"popup-blocked");try{f.focus()}catch{}return new CE(f)}function LV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const VV="__/auth/handler",jV="emulator/auth/handler",FV=encodeURIComponent("fac");async function RE(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ms,eventId:s};if(e instanceof tR){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Rp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Nl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${FV}=${encodeURIComponent(u)}`:"";return`${UV(t)}?${po(a).slice(1)}${c}`}function UV({config:t}){return t.emulator?i_(t,jV):`https://${t.authDomain}/${VV}`}/**
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
 */const vf="webStorageSupport";class zV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oR,this._completeRedirectFn=hV,this._overrideRedirectResult=lV}async _openPopup(e,n,r,s){var i;fr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await RE(e,n,r,Kp(),s);return MV(e,o,h_())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await RE(e,n,r,Kp(),s);return WL(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(fr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await NV(e),r=new fV(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vf,{type:vf},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[vf];o!==void 0&&n(!!o),dr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return XC()||HC()||l_()}}const BV=zV;var AE="@firebase/auth",kE="1.7.9";/**
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
 */class $V{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function WV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HV(t){is(new ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:JC(t)},c=new IL(r,s,i,u);return NL(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),is(new ur("auth-internal",e=>{const n=u_(e.getProvider("auth").getImmediate());return(r=>new $V(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(AE,kE,WV(t)),an(AE,kE,"esm2017")}/**
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
 */const qV=5*60,GV=fS("authIdTokenMaxAge")||qV;let NE=null;const KV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GV)return;const s=n==null?void 0:n.token;NE!==s&&(NE=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function QV(t=Ph()){const e=El(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kL(t,{popupRedirectResolver:BV,persistence:[ZL,zL,oR]}),r=fS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=KV(i.toString());jL(n,o,()=>o(n.currentUser)),VL(n,a=>o(a))}}const s=hS("auth");return s&&PL(n,`http://${s}`),n}function YV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}SL({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=bn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",YV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HV("Browser");var PE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ds,fR;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function S(){}S.prototype=v.prototype,E.D=v.prototype,E.prototype=new S,E.prototype.constructor=E,E.C=function(k,P,x){for(var A=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)A[fe-2]=arguments[fe];return v.prototype[P].apply(k,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,v,S){S||(S=0);var k=Array(16);if(typeof v=="string")for(var P=0;16>P;++P)k[P]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(P=0;16>P;++P)k[P]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=E.g[0],S=E.g[1],P=E.g[2];var x=E.g[3],A=v+(x^S&(P^x))+k[0]+3614090360&4294967295;v=S+(A<<7&4294967295|A>>>25),A=x+(P^v&(S^P))+k[1]+3905402710&4294967295,x=v+(A<<12&4294967295|A>>>20),A=P+(S^x&(v^S))+k[2]+606105819&4294967295,P=x+(A<<17&4294967295|A>>>15),A=S+(v^P&(x^v))+k[3]+3250441966&4294967295,S=P+(A<<22&4294967295|A>>>10),A=v+(x^S&(P^x))+k[4]+4118548399&4294967295,v=S+(A<<7&4294967295|A>>>25),A=x+(P^v&(S^P))+k[5]+1200080426&4294967295,x=v+(A<<12&4294967295|A>>>20),A=P+(S^x&(v^S))+k[6]+2821735955&4294967295,P=x+(A<<17&4294967295|A>>>15),A=S+(v^P&(x^v))+k[7]+4249261313&4294967295,S=P+(A<<22&4294967295|A>>>10),A=v+(x^S&(P^x))+k[8]+1770035416&4294967295,v=S+(A<<7&4294967295|A>>>25),A=x+(P^v&(S^P))+k[9]+2336552879&4294967295,x=v+(A<<12&4294967295|A>>>20),A=P+(S^x&(v^S))+k[10]+4294925233&4294967295,P=x+(A<<17&4294967295|A>>>15),A=S+(v^P&(x^v))+k[11]+2304563134&4294967295,S=P+(A<<22&4294967295|A>>>10),A=v+(x^S&(P^x))+k[12]+1804603682&4294967295,v=S+(A<<7&4294967295|A>>>25),A=x+(P^v&(S^P))+k[13]+4254626195&4294967295,x=v+(A<<12&4294967295|A>>>20),A=P+(S^x&(v^S))+k[14]+2792965006&4294967295,P=x+(A<<17&4294967295|A>>>15),A=S+(v^P&(x^v))+k[15]+1236535329&4294967295,S=P+(A<<22&4294967295|A>>>10),A=v+(P^x&(S^P))+k[1]+4129170786&4294967295,v=S+(A<<5&4294967295|A>>>27),A=x+(S^P&(v^S))+k[6]+3225465664&4294967295,x=v+(A<<9&4294967295|A>>>23),A=P+(v^S&(x^v))+k[11]+643717713&4294967295,P=x+(A<<14&4294967295|A>>>18),A=S+(x^v&(P^x))+k[0]+3921069994&4294967295,S=P+(A<<20&4294967295|A>>>12),A=v+(P^x&(S^P))+k[5]+3593408605&4294967295,v=S+(A<<5&4294967295|A>>>27),A=x+(S^P&(v^S))+k[10]+38016083&4294967295,x=v+(A<<9&4294967295|A>>>23),A=P+(v^S&(x^v))+k[15]+3634488961&4294967295,P=x+(A<<14&4294967295|A>>>18),A=S+(x^v&(P^x))+k[4]+3889429448&4294967295,S=P+(A<<20&4294967295|A>>>12),A=v+(P^x&(S^P))+k[9]+568446438&4294967295,v=S+(A<<5&4294967295|A>>>27),A=x+(S^P&(v^S))+k[14]+3275163606&4294967295,x=v+(A<<9&4294967295|A>>>23),A=P+(v^S&(x^v))+k[3]+4107603335&4294967295,P=x+(A<<14&4294967295|A>>>18),A=S+(x^v&(P^x))+k[8]+1163531501&4294967295,S=P+(A<<20&4294967295|A>>>12),A=v+(P^x&(S^P))+k[13]+2850285829&4294967295,v=S+(A<<5&4294967295|A>>>27),A=x+(S^P&(v^S))+k[2]+4243563512&4294967295,x=v+(A<<9&4294967295|A>>>23),A=P+(v^S&(x^v))+k[7]+1735328473&4294967295,P=x+(A<<14&4294967295|A>>>18),A=S+(x^v&(P^x))+k[12]+2368359562&4294967295,S=P+(A<<20&4294967295|A>>>12),A=v+(S^P^x)+k[5]+4294588738&4294967295,v=S+(A<<4&4294967295|A>>>28),A=x+(v^S^P)+k[8]+2272392833&4294967295,x=v+(A<<11&4294967295|A>>>21),A=P+(x^v^S)+k[11]+1839030562&4294967295,P=x+(A<<16&4294967295|A>>>16),A=S+(P^x^v)+k[14]+4259657740&4294967295,S=P+(A<<23&4294967295|A>>>9),A=v+(S^P^x)+k[1]+2763975236&4294967295,v=S+(A<<4&4294967295|A>>>28),A=x+(v^S^P)+k[4]+1272893353&4294967295,x=v+(A<<11&4294967295|A>>>21),A=P+(x^v^S)+k[7]+4139469664&4294967295,P=x+(A<<16&4294967295|A>>>16),A=S+(P^x^v)+k[10]+3200236656&4294967295,S=P+(A<<23&4294967295|A>>>9),A=v+(S^P^x)+k[13]+681279174&4294967295,v=S+(A<<4&4294967295|A>>>28),A=x+(v^S^P)+k[0]+3936430074&4294967295,x=v+(A<<11&4294967295|A>>>21),A=P+(x^v^S)+k[3]+3572445317&4294967295,P=x+(A<<16&4294967295|A>>>16),A=S+(P^x^v)+k[6]+76029189&4294967295,S=P+(A<<23&4294967295|A>>>9),A=v+(S^P^x)+k[9]+3654602809&4294967295,v=S+(A<<4&4294967295|A>>>28),A=x+(v^S^P)+k[12]+3873151461&4294967295,x=v+(A<<11&4294967295|A>>>21),A=P+(x^v^S)+k[15]+530742520&4294967295,P=x+(A<<16&4294967295|A>>>16),A=S+(P^x^v)+k[2]+3299628645&4294967295,S=P+(A<<23&4294967295|A>>>9),A=v+(P^(S|~x))+k[0]+4096336452&4294967295,v=S+(A<<6&4294967295|A>>>26),A=x+(S^(v|~P))+k[7]+1126891415&4294967295,x=v+(A<<10&4294967295|A>>>22),A=P+(v^(x|~S))+k[14]+2878612391&4294967295,P=x+(A<<15&4294967295|A>>>17),A=S+(x^(P|~v))+k[5]+4237533241&4294967295,S=P+(A<<21&4294967295|A>>>11),A=v+(P^(S|~x))+k[12]+1700485571&4294967295,v=S+(A<<6&4294967295|A>>>26),A=x+(S^(v|~P))+k[3]+2399980690&4294967295,x=v+(A<<10&4294967295|A>>>22),A=P+(v^(x|~S))+k[10]+4293915773&4294967295,P=x+(A<<15&4294967295|A>>>17),A=S+(x^(P|~v))+k[1]+2240044497&4294967295,S=P+(A<<21&4294967295|A>>>11),A=v+(P^(S|~x))+k[8]+1873313359&4294967295,v=S+(A<<6&4294967295|A>>>26),A=x+(S^(v|~P))+k[15]+4264355552&4294967295,x=v+(A<<10&4294967295|A>>>22),A=P+(v^(x|~S))+k[6]+2734768916&4294967295,P=x+(A<<15&4294967295|A>>>17),A=S+(x^(P|~v))+k[13]+1309151649&4294967295,S=P+(A<<21&4294967295|A>>>11),A=v+(P^(S|~x))+k[4]+4149444226&4294967295,v=S+(A<<6&4294967295|A>>>26),A=x+(S^(v|~P))+k[11]+3174756917&4294967295,x=v+(A<<10&4294967295|A>>>22),A=P+(v^(x|~S))+k[2]+718787259&4294967295,P=x+(A<<15&4294967295|A>>>17),A=S+(x^(P|~v))+k[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,E.g[2]=E.g[2]+P&4294967295,E.g[3]=E.g[3]+x&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var S=v-this.blockSize,k=this.B,P=this.h,x=0;x<v;){if(P==0)for(;x<=S;)s(this,E,x),x+=this.blockSize;if(typeof E=="string"){for(;x<v;)if(k[P++]=E.charCodeAt(x++),P==this.blockSize){s(this,k),P=0;break}}else for(;x<v;)if(k[P++]=E[x++],P==this.blockSize){s(this,k),P=0;break}}this.h=P,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var S=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=S&255,S/=256;for(this.u(E),E=Array(16),v=S=0;4>v;++v)for(var k=0;32>k;k+=8)E[S++]=this.g[v]>>>k&255;return E};function i(E,v){var S=a;return Object.prototype.hasOwnProperty.call(S,E)?S[E]:S[E]=v(E)}function o(E,v){this.h=v;for(var S=[],k=!0,P=E.length-1;0<=P;P--){var x=E[P]|0;k&&x==v||(S[P]=x,k=!1)}this.g=S}var a={};function u(E){return-128<=E&&128>E?i(E,function(v){return new o([v|0],0>v?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return f;if(0>E)return N(c(-E));for(var v=[],S=1,k=0;E>=S;k++)v[k]=E/S|0,S*=4294967296;return new o(v,0)}function h(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return N(h(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(v,8)),k=f,P=0;P<E.length;P+=8){var x=Math.min(8,E.length-P),A=parseInt(E.substring(P,P+x),v);8>x?(x=c(Math.pow(v,x)),k=k.j(x).add(c(A))):(k=k.j(S),k=k.add(c(A)))}return k}var f=u(0),m=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-N(this).m();for(var E=0,v=1,S=0;S<this.g.length;S++){var k=this.i(S);E+=(0<=k?k:4294967296+k)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(T(this))return"0";if(C(this))return"-"+N(this).toString(E);for(var v=c(Math.pow(E,6)),S=this,k="";;){var P=b(S,v).g;S=I(S,P.j(v));var x=((0<S.g.length?S.g[0]:S.h)>>>0).toString(E);if(S=P,T(S))return x+k;for(;6>x.length;)x="0"+x;k=x+k}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function T(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function C(E){return E.h==-1}t.l=function(E){return E=I(this,E),C(E)?-1:T(E)?0:1};function N(E){for(var v=E.g.length,S=[],k=0;k<v;k++)S[k]=~E.g[k];return new o(S,~E.h).add(m)}t.abs=function(){return C(this)?N(this):this},t.add=function(E){for(var v=Math.max(this.g.length,E.g.length),S=[],k=0,P=0;P<=v;P++){var x=k+(this.i(P)&65535)+(E.i(P)&65535),A=(x>>>16)+(this.i(P)>>>16)+(E.i(P)>>>16);k=A>>>16,x&=65535,A&=65535,S[P]=A<<16|x}return new o(S,S[S.length-1]&-2147483648?-1:0)};function I(E,v){return E.add(N(v))}t.j=function(E){if(T(this)||T(E))return f;if(C(this))return C(E)?N(this).j(N(E)):N(N(this).j(E));if(C(E))return N(this.j(N(E)));if(0>this.l(_)&&0>E.l(_))return c(this.m()*E.m());for(var v=this.g.length+E.g.length,S=[],k=0;k<2*v;k++)S[k]=0;for(k=0;k<this.g.length;k++)for(var P=0;P<E.g.length;P++){var x=this.i(k)>>>16,A=this.i(k)&65535,fe=E.i(P)>>>16,$e=E.i(P)&65535;S[2*k+2*P]+=A*$e,y(S,2*k+2*P),S[2*k+2*P+1]+=x*$e,y(S,2*k+2*P+1),S[2*k+2*P+1]+=A*fe,y(S,2*k+2*P+1),S[2*k+2*P+2]+=x*fe,y(S,2*k+2*P+2)}for(k=0;k<v;k++)S[k]=S[2*k+1]<<16|S[2*k];for(k=v;k<2*v;k++)S[k]=0;return new o(S,0)};function y(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function R(E,v){this.g=E,this.h=v}function b(E,v){if(T(v))throw Error("division by zero");if(T(E))return new R(f,f);if(C(E))return v=b(N(E),v),new R(N(v.g),N(v.h));if(C(v))return v=b(E,N(v)),new R(N(v.g),v.h);if(30<E.g.length){if(C(E)||C(v))throw Error("slowDivide_ only works with positive integers.");for(var S=m,k=v;0>=k.l(E);)S=F(S),k=F(k);var P=M(S,1),x=M(k,1);for(k=M(k,2),S=M(S,2);!T(k);){var A=x.add(k);0>=A.l(E)&&(P=P.add(S),x=A),k=M(k,1),S=M(S,1)}return v=I(E,P.j(v)),new R(P,v)}for(P=f;0<=E.l(v);){for(S=Math.max(1,Math.floor(E.m()/v.m())),k=Math.ceil(Math.log(S)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),x=c(S),A=x.j(v);C(A)||0<A.l(E);)S-=k,x=c(S),A=x.j(v);T(x)&&(x=m),P=P.add(x),E=I(E,A)}return new R(P,E)}t.A=function(E){return b(this,E).h},t.and=function(E){for(var v=Math.max(this.g.length,E.g.length),S=[],k=0;k<v;k++)S[k]=this.i(k)&E.i(k);return new o(S,this.h&E.h)},t.or=function(E){for(var v=Math.max(this.g.length,E.g.length),S=[],k=0;k<v;k++)S[k]=this.i(k)|E.i(k);return new o(S,this.h|E.h)},t.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),S=[],k=0;k<v;k++)S[k]=this.i(k)^E.i(k);return new o(S,this.h^E.h)};function F(E){for(var v=E.g.length+1,S=[],k=0;k<v;k++)S[k]=E.i(k)<<1|E.i(k-1)>>>31;return new o(S,E.h)}function M(E,v){var S=v>>5;v%=32;for(var k=E.g.length-S,P=[],x=0;x<k;x++)P[x]=0<v?E.i(x+S)>>>v|E.i(x+S+1)<<32-v:E.i(x+S);return new o(P,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fR=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Ds=o}).apply(typeof PE<"u"?PE:typeof self<"u"?self:typeof window<"u"?window:{});var Su=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pR,sa,mR,Qu,Xp,gR,_R,yR;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,g){return l==Array.prototype||l==Object.prototype||(l[d]=g.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Su=="object"&&Su];for(var d=0;d<l.length;++d){var g=l[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(l,d){if(d)e:{var g=r;l=l.split(".");for(var w=0;w<l.length-1;w++){var D=l[w];if(!(D in g))break e;g=g[D]}l=l[l.length-1],w=g[l],d=d(w),d!=w&&d!=null&&e(g,l,{configurable:!0,writable:!0,value:d})}}function i(l,d){l instanceof String&&(l+="");var g=0,w=!1,D={next:function(){if(!w&&g<l.length){var L=g++;return{value:d(L,l[L]),done:!1}}return w=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(l){return l||function(){return i(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,g){return l.call.apply(l.bind,arguments)}function f(l,d,g){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,w),l.apply(d,D)}}return function(){return l.apply(d,arguments)}}function m(l,d,g){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function _(l,d){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function T(l,d){function g(){}g.prototype=d.prototype,l.aa=d.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(w,D,L){for(var $=Array(arguments.length-2),we=2;we<arguments.length;we++)$[we-2]=arguments[we];return d.prototype[D].apply(w,$)}}function C(l){const d=l.length;if(0<d){const g=Array(d);for(let w=0;w<d;w++)g[w]=l[w];return g}return[]}function N(l,d){for(let g=1;g<arguments.length;g++){const w=arguments[g];if(u(w)){const D=l.length||0,L=w.length||0;l.length=D+L;for(let $=0;$<L;$++)l[D+$]=w[$]}else l.push(w)}}class I{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function y(l){return/^[\s\xa0]*$/.test(l)}function R(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function b(l){return b[" "](l),l}b[" "]=function(){};var F=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function M(l,d,g){for(const w in l)d.call(g,l[w],w,l)}function E(l,d){for(const g in l)d.call(void 0,l[g],g,l)}function v(l){const d={};for(const g in l)d[g]=l[g];return d}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,d){let g,w;for(let D=1;D<arguments.length;D++){w=arguments[D];for(g in w)l[g]=w[g];for(let L=0;L<S.length;L++)g=S[L],Object.prototype.hasOwnProperty.call(w,g)&&(l[g]=w[g])}}function P(l){var d=1;l=l.split(":");const g=[];for(;0<d&&l.length;)g.push(l.shift()),d--;return l.length&&g.push(l.join(":")),g}function x(l){a.setTimeout(()=>{throw l},0)}function A(){var l=W;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class fe{constructor(){this.h=this.g=null}add(d,g){const w=$e.get();w.set(d,g),this.h?this.h.next=w:this.g=w,this.h=w}}var $e=new I(()=>new Rt,l=>l.reset());class Rt{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,H=!1,W=new fe,V=()=>{const l=a.Promise.resolve(void 0);nt=()=>{l.then(Q)}};var Q=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(g){x(g)}var d=$e;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}H=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var At=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};a.addEventListener("test",g,d),a.removeEventListener("test",g,d)}catch{}return l}();function Wt(l,d){if(he.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(F){e:{try{b(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else g=="mouseover"?d=l.fromElement:g=="mouseout"&&(d=l.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:zn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Wt.aa.h.call(this)}}T(Wt,he);var zn={2:"touch",3:"pen",4:"mouse"};Wt.prototype.h=function(){Wt.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Bn="closure_listenable_"+(1e6*Math.random()|0),Z1=0;function eA(l,d,g,w,D){this.listener=l,this.proxy=null,this.src=d,this.type=g,this.capture=!!w,this.ha=D,this.key=++Z1,this.da=this.fa=!1}function Ul(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function zl(l){this.src=l,this.g={},this.h=0}zl.prototype.add=function(l,d,g,w,D){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var $=ad(l,d,w,D);return-1<$?(d=l[$],g||(d.fa=!1)):(d=new eA(d,this.src,L,!!w,D),d.fa=g,l.push(d)),d};function od(l,d){var g=d.type;if(g in l.g){var w=l.g[g],D=Array.prototype.indexOf.call(w,d,void 0),L;(L=0<=D)&&Array.prototype.splice.call(w,D,1),L&&(Ul(d),l.g[g].length==0&&(delete l.g[g],l.h--))}}function ad(l,d,g,w){for(var D=0;D<l.length;++D){var L=l[D];if(!L.da&&L.listener==d&&L.capture==!!g&&L.ha==w)return D}return-1}var ld="closure_lm_"+(1e6*Math.random()|0),ud={};function Z_(l,d,g,w,D){if(Array.isArray(d)){for(var L=0;L<d.length;L++)Z_(l,d[L],g,w,D);return null}return g=ny(g),l&&l[Bn]?l.K(d,g,c(w)?!!w.capture:!1,D):tA(l,d,g,!1,w,D)}function tA(l,d,g,w,D,L){if(!d)throw Error("Invalid event type");var $=c(D)?!!D.capture:!!D,we=hd(l);if(we||(l[ld]=we=new zl(l)),g=we.add(d,g,w,$,L),g.proxy)return g;if(w=nA(),g.proxy=w,w.src=l,w.listener=g,l.addEventListener)At||(D=$),D===void 0&&(D=!1),l.addEventListener(d.toString(),w,D);else if(l.attachEvent)l.attachEvent(ty(d.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function nA(){function l(g){return d.call(l.src,l.listener,g)}const d=rA;return l}function ey(l,d,g,w,D){if(Array.isArray(d))for(var L=0;L<d.length;L++)ey(l,d[L],g,w,D);else w=c(w)?!!w.capture:!!w,g=ny(g),l&&l[Bn]?(l=l.i,d=String(d).toString(),d in l.g&&(L=l.g[d],g=ad(L,g,w,D),-1<g&&(Ul(L[g]),Array.prototype.splice.call(L,g,1),L.length==0&&(delete l.g[d],l.h--)))):l&&(l=hd(l))&&(d=l.g[d.toString()],l=-1,d&&(l=ad(d,g,w,D)),(g=-1<l?d[l]:null)&&cd(g))}function cd(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[Bn])od(d.i,l);else{var g=l.type,w=l.proxy;d.removeEventListener?d.removeEventListener(g,w,l.capture):d.detachEvent?d.detachEvent(ty(g),w):d.addListener&&d.removeListener&&d.removeListener(w),(g=hd(d))?(od(g,l),g.h==0&&(g.src=null,d[ld]=null)):Ul(l)}}}function ty(l){return l in ud?ud[l]:ud[l]="on"+l}function rA(l,d){if(l.da)l=!0;else{d=new Wt(d,this);var g=l.listener,w=l.ha||l.src;l.fa&&cd(l),l=g.call(w,d)}return l}function hd(l){return l=l[ld],l instanceof zl?l:null}var dd="__closure_events_fn_"+(1e9*Math.random()>>>0);function ny(l){return typeof l=="function"?l:(l[dd]||(l[dd]=function(d){return l.handleEvent(d)}),l[dd])}function ft(){ee.call(this),this.i=new zl(this),this.M=this,this.F=null}T(ft,ee),ft.prototype[Bn]=!0,ft.prototype.removeEventListener=function(l,d,g,w){ey(this,l,d,g,w)};function kt(l,d){var g,w=l.F;if(w)for(g=[];w;w=w.F)g.push(w);if(l=l.M,w=d.type||d,typeof d=="string")d=new he(d,l);else if(d instanceof he)d.target=d.target||l;else{var D=d;d=new he(w,l),k(d,D)}if(D=!0,g)for(var L=g.length-1;0<=L;L--){var $=d.g=g[L];D=Bl($,w,!0,d)&&D}if($=d.g=l,D=Bl($,w,!0,d)&&D,D=Bl($,w,!1,d)&&D,g)for(L=0;L<g.length;L++)$=d.g=g[L],D=Bl($,w,!1,d)&&D}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var g=l.g[d],w=0;w<g.length;w++)Ul(g[w]);delete l.g[d],l.h--}}this.F=null},ft.prototype.K=function(l,d,g,w){return this.i.add(String(l),d,!1,g,w)},ft.prototype.L=function(l,d,g,w){return this.i.add(String(l),d,!0,g,w)};function Bl(l,d,g,w){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,L=0;L<d.length;++L){var $=d[L];if($&&!$.da&&$.capture==g){var we=$.listener,rt=$.ha||$.src;$.fa&&od(l.i,$),D=we.call(rt,w)!==!1&&D}}return D&&!w.defaultPrevented}function ry(l,d,g){if(typeof l=="function")g&&(l=m(l,g));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function sy(l){l.g=ry(()=>{l.g=null,l.i&&(l.i=!1,sy(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class sA extends ee{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:sy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Io(l){ee.call(this),this.h=l,this.g={}}T(Io,ee);var iy=[];function oy(l){M(l.g,function(d,g){this.g.hasOwnProperty(g)&&cd(d)},l),l.g={}}Io.prototype.N=function(){Io.aa.N.call(this),oy(this)},Io.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fd=a.JSON.stringify,iA=a.JSON.parse,oA=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function pd(){}pd.prototype.h=null;function ay(l){return l.h||(l.h=l.i())}function ly(){}var So={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function md(){he.call(this,"d")}T(md,he);function gd(){he.call(this,"c")}T(gd,he);var _s={},uy=null;function $l(){return uy=uy||new ft}_s.La="serverreachability";function cy(l){he.call(this,_s.La,l)}T(cy,he);function Co(l){const d=$l();kt(d,new cy(d))}_s.STAT_EVENT="statevent";function hy(l,d){he.call(this,_s.STAT_EVENT,l),this.stat=d}T(hy,he);function Nt(l){const d=$l();kt(d,new hy(d,l))}_s.Ma="timingevent";function dy(l,d){he.call(this,_s.Ma,l),this.size=d}T(dy,he);function Ro(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Ao(){this.g=!0}Ao.prototype.xa=function(){this.g=!1};function aA(l,d,g,w,D,L){l.info(function(){if(l.g)if(L)for(var $="",we=L.split("&"),rt=0;rt<we.length;rt++){var pe=we[rt].split("=");if(1<pe.length){var pt=pe[0];pe=pe[1];var mt=pt.split("_");$=2<=mt.length&&mt[1]=="type"?$+(pt+"="+pe+"&"):$+(pt+"=redacted&")}}else $=null;else $=L;return"XMLHTTP REQ ("+w+") [attempt "+D+"]: "+d+`
`+g+`
`+$})}function lA(l,d,g,w,D,L,$){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+D+"]: "+d+`
`+g+`
`+L+" "+$})}function ti(l,d,g,w){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+cA(l,g)+(w?" "+w:"")})}function uA(l,d){l.info(function(){return"TIMEOUT: "+d})}Ao.prototype.info=function(){};function cA(l,d){if(!l.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var w=g[l];if(!(2>w.length)){var D=w[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var $=1;$<D.length;$++)D[$]=""}}}}return fd(g)}catch{return d}}var Wl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_d;function Hl(){}T(Hl,pd),Hl.prototype.g=function(){return new XMLHttpRequest},Hl.prototype.i=function(){return{}},_d=new Hl;function Tr(l,d,g,w){this.j=l,this.i=d,this.l=g,this.R=w||1,this.U=new Io(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new py}function py(){this.i=null,this.g="",this.h=!1}var my={},yd={};function vd(l,d,g){l.L=1,l.v=Ql($n(d)),l.m=g,l.P=!0,gy(l,null)}function gy(l,d){l.F=Date.now(),ql(l),l.A=$n(l.v);var g=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),Py(g.i,"t",w),l.C=0,g=l.j.J,l.h=new py,l.g=Ky(l.j,g?d:null,!l.m),0<l.O&&(l.M=new sA(m(l.Y,l,l.g),l.O)),d=l.U,g=l.g,w=l.ca;var D="readystatechange";Array.isArray(D)||(D&&(iy[0]=D.toString()),D=iy);for(var L=0;L<D.length;L++){var $=Z_(g,D[L],w||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Co(),aA(l.i,l.u,l.A,l.l,l.R,l.m)}Tr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Wn(l)==3?d.j():this.Y(l)},Tr.prototype.Y=function(l){try{if(l==this.g)e:{const mt=Wn(this.g);var d=this.g.Ba();const si=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Vy(this.g)))){this.J||mt!=4||d==7||(d==8||0>=si?Co(3):Co(2)),wd(this);var g=this.g.Z();this.X=g;t:if(_y(this)){var w=Vy(this.g);l="";var D=w.length,L=Wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ys(this),ko(this);var $="";break t}this.h.i=new a.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,l+=this.h.i.decode(w[d],{stream:!(L&&d==D-1)});w.length=0,this.h.g+=l,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=g==200,lA(this.i,this.u,this.A,this.l,this.R,mt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var we,rt=this.g;if((we=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(we)){var pe=we;break t}}pe=null}if(g=pe)ti(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ed(this,g);else{this.o=!1,this.s=3,Nt(12),ys(this),ko(this);break e}}if(this.P){g=!0;let hn;for(;!this.J&&this.C<$.length;)if(hn=hA(this,$),hn==yd){mt==4&&(this.s=4,Nt(14),g=!1),ti(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==my){this.s=4,Nt(15),ti(this.i,this.l,$,"[Invalid Chunk]"),g=!1;break}else ti(this.i,this.l,hn,null),Ed(this,hn);if(_y(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||$.length!=0||this.h.h||(this.s=1,Nt(16),g=!1),this.o=this.o&&g,!g)ti(this.i,this.l,$,"[Invalid Chunked Response]"),ys(this),ko(this);else if(0<$.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Ad(pt),pt.M=!0,Nt(11))}}else ti(this.i,this.l,$,null),Ed(this,$);mt==4&&ys(this),this.o&&!this.J&&(mt==4?Wy(this.j,this):(this.o=!1,ql(this)))}else kA(this.g),g==400&&0<$.indexOf("Unknown SID")?(this.s=3,Nt(12)):(this.s=0,Nt(13)),ys(this),ko(this)}}}catch{}finally{}};function _y(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function hA(l,d){var g=l.C,w=d.indexOf(`
`,g);return w==-1?yd:(g=Number(d.substring(g,w)),isNaN(g)?my:(w+=1,w+g>d.length?yd:(d=d.slice(w,w+g),l.C=w+g,d)))}Tr.prototype.cancel=function(){this.J=!0,ys(this)};function ql(l){l.S=Date.now()+l.I,yy(l,l.I)}function yy(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ro(m(l.ba,l),d)}function wd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Tr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(uA(this.i,this.A),this.L!=2&&(Co(),Nt(17)),ys(this),this.s=2,ko(this)):yy(this,this.S-l)};function ko(l){l.j.G==0||l.J||Wy(l.j,l)}function ys(l){wd(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,oy(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Ed(l,d){try{var g=l.j;if(g.G!=0&&(g.g==l||Td(g.h,l))){if(!l.K&&Td(g.h,l)&&g.G==3){try{var w=g.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var D=w;if(D[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)tu(g),Zl(g);else break e;Rd(g),Nt(18)}}else g.za=D[1],0<g.za-g.T&&37500>D[2]&&g.F&&g.v==0&&!g.C&&(g.C=Ro(m(g.Za,g),6e3));if(1>=Ey(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else ws(g,11)}else if((l.K||g.g==l)&&tu(g),!y(d))for(D=g.Da.g.parse(d),d=0;d<D.length;d++){let pe=D[d];if(g.T=pe[0],pe=pe[1],g.G==2)if(pe[0]=="c"){g.K=pe[1],g.ia=pe[2];const pt=pe[3];pt!=null&&(g.la=pt,g.j.info("VER="+g.la));const mt=pe[4];mt!=null&&(g.Aa=mt,g.j.info("SVER="+g.Aa));const si=pe[5];si!=null&&typeof si=="number"&&0<si&&(w=1.5*si,g.L=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const hn=l.g;if(hn){const ru=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ru){var L=w.h;L.g||ru.indexOf("spdy")==-1&&ru.indexOf("quic")==-1&&ru.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Id(L,L.h),L.h=null))}if(w.D){const kd=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;kd&&(w.ya=kd,Ce(w.I,w.D,kd))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),w=g;var $=l;if(w.qa=Gy(w,w.J?w.ia:null,w.W),$.K){Ty(w.h,$);var we=$,rt=w.L;rt&&(we.I=rt),we.B&&(wd(we),ql(we)),w.g=$}else By(w);0<g.i.length&&eu(g)}else pe[0]!="stop"&&pe[0]!="close"||ws(g,7);else g.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?ws(g,7):Cd(g):pe[0]!="noop"&&g.l&&g.l.ta(pe),g.v=0)}}Co(4)}catch{}}var dA=class{constructor(l,d){this.g=l,this.map=d}};function vy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ey(l){return l.h?1:l.g?l.g.size:0}function Td(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Id(l,d){l.g?l.g.add(d):l.h=d}function Ty(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}vy.prototype.cancel=function(){if(this.i=Iy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Iy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const g of l.g.values())d=d.concat(g.D);return d}return C(l.i)}function fA(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],g=l.length,w=0;w<g;w++)d.push(l[w]);return d}d=[],g=0;for(w in l)d[g++]=l[w];return d}function pA(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var g=0;g<l;g++)d.push(g);return d}d=[],g=0;for(const w in l)d[g++]=w;return d}}}function Sy(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var g=pA(l),w=fA(l),D=w.length,L=0;L<D;L++)d.call(void 0,w[L],g&&g[L],l)}var Cy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mA(l,d){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var w=l[g].indexOf("="),D=null;if(0<=w){var L=l[g].substring(0,w);D=l[g].substring(w+1)}else L=l[g];d(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function vs(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof vs){this.h=l.h,Gl(this,l.j),this.o=l.o,this.g=l.g,Kl(this,l.s),this.l=l.l;var d=l.i,g=new xo;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),Ry(this,g),this.m=l.m}else l&&(d=String(l).match(Cy))?(this.h=!1,Gl(this,d[1]||"",!0),this.o=No(d[2]||""),this.g=No(d[3]||"",!0),Kl(this,d[4]),this.l=No(d[5]||"",!0),Ry(this,d[6]||"",!0),this.m=No(d[7]||"")):(this.h=!1,this.i=new xo(null,this.h))}vs.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Po(d,Ay,!0),":");var g=this.g;return(g||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Po(d,Ay,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Po(g,g.charAt(0)=="/"?yA:_A,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Po(g,wA)),l.join("")};function $n(l){return new vs(l)}function Gl(l,d,g){l.j=g?No(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Kl(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Ry(l,d,g){d instanceof xo?(l.i=d,EA(l.i,l.h)):(g||(d=Po(d,vA)),l.i=new xo(d,l.h))}function Ce(l,d,g){l.i.set(d,g)}function Ql(l){return Ce(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function No(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Po(l,d,g){return typeof l=="string"?(l=encodeURI(l).replace(d,gA),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function gA(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ay=/[#\/\?@]/g,_A=/[#\?:]/g,yA=/[#\?]/g,vA=/[#\?@]/g,wA=/#/g;function xo(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Ir(l){l.g||(l.g=new Map,l.h=0,l.i&&mA(l.i,function(d,g){l.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=xo.prototype,t.add=function(l,d){Ir(this),this.i=null,l=ni(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(d),this.h+=1,this};function ky(l,d){Ir(l),d=ni(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Ny(l,d){return Ir(l),d=ni(l,d),l.g.has(d)}t.forEach=function(l,d){Ir(this),this.g.forEach(function(g,w){g.forEach(function(D){l.call(d,D,w,this)},this)},this)},t.na=function(){Ir(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let w=0;w<d.length;w++){const D=l[w];for(let L=0;L<D.length;L++)g.push(d[w])}return g},t.V=function(l){Ir(this);let d=[];if(typeof l=="string")Ny(this,l)&&(d=d.concat(this.g.get(ni(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)d=d.concat(l[g])}return d},t.set=function(l,d){return Ir(this),this.i=null,l=ni(this,l),Ny(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Py(l,d,g){ky(l,d),0<g.length&&(l.i=null,l.g.set(ni(l,d),C(g)),l.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var w=d[g];const L=encodeURIComponent(String(w)),$=this.V(w);for(w=0;w<$.length;w++){var D=L;$[w]!==""&&(D+="="+encodeURIComponent(String($[w]))),l.push(D)}}return this.i=l.join("&")};function ni(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function EA(l,d){d&&!l.j&&(Ir(l),l.i=null,l.g.forEach(function(g,w){var D=w.toLowerCase();w!=D&&(ky(this,w),Py(this,D,g))},l)),l.j=d}function TA(l,d){const g=new Ao;if(a.Image){const w=new Image;w.onload=_(Sr,g,"TestLoadImage: loaded",!0,d,w),w.onerror=_(Sr,g,"TestLoadImage: error",!1,d,w),w.onabort=_(Sr,g,"TestLoadImage: abort",!1,d,w),w.ontimeout=_(Sr,g,"TestLoadImage: timeout",!1,d,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else d(!1)}function IA(l,d){const g=new Ao,w=new AbortController,D=setTimeout(()=>{w.abort(),Sr(g,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:w.signal}).then(L=>{clearTimeout(D),L.ok?Sr(g,"TestPingServer: ok",!0,d):Sr(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),Sr(g,"TestPingServer: error",!1,d)})}function Sr(l,d,g,w,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),w(g)}catch{}}function SA(){this.g=new oA}function CA(l,d,g){const w=g||"";try{Sy(l,function(D,L){let $=D;c(D)&&($=fd(D)),d.push(w+L+"="+encodeURIComponent($))})}catch(D){throw d.push(w+"type="+encodeURIComponent("_badmap")),D}}function Yl(l){this.l=l.Ub||null,this.j=l.eb||!1}T(Yl,pd),Yl.prototype.g=function(){return new Xl(this.l,this.j)},Yl.prototype.i=function(l){return function(){return l}}({});function Xl(l,d){ft.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(Xl,ft),t=Xl.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Do(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Do(this)),this.g&&(this.readyState=3,Do(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function xy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?bo(this):Do(this),this.readyState==3&&xy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,bo(this))},t.Qa=function(l){this.g&&(this.response=l,bo(this))},t.ga=function(){this.g&&bo(this)};function bo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Do(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=d.next();return l.join(`\r
`)};function Do(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Xl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function by(l){let d="";return M(l,function(g,w){d+=w,d+=":",d+=g,d+=`\r
`}),d}function Sd(l,d,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=by(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):Ce(l,d,g))}function Me(l){ft.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Me,ft);var RA=/^https?$/i,AA=["POST","PUT"];t=Me.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_d.g(),this.v=this.o?ay(this.o):ay(_d),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(L){Dy(this,L);return}if(l=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var D in w)g.set(D,w[D]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const L of w.keys())g.set(L,w.get(L));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),D=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(AA,d,void 0))||w||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of g)this.g.setRequestHeader(L,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ly(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){Dy(this,L)}};function Dy(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Oy(l),Jl(l)}function Oy(l){l.A||(l.A=!0,kt(l,"complete"),kt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,kt(this,"complete"),kt(this,"abort"),Jl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jl(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?My(this):this.bb())},t.bb=function(){My(this)};function My(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Wn(l)!=4||l.Z()!=2)){if(l.u&&Wn(l)==4)ry(l.Ea,0,l);else if(kt(l,"readystatechange"),Wn(l)==4){l.h=!1;try{const $=l.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var w;if(w=$===0){var D=String(l.D).match(Cy)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),w=!RA.test(D?D.toLowerCase():"")}g=w}if(g)kt(l,"complete"),kt(l,"success");else{l.m=6;try{var L=2<Wn(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",Oy(l)}}finally{Jl(l)}}}}function Jl(l,d){if(l.g){Ly(l);const g=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||kt(l,"ready");try{g.onreadystatechange=w}catch{}}}function Ly(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Wn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Wn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),iA(d)}};function Vy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function kA(l){const d={};l=(l.g&&2<=Wn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(y(l[w]))continue;var g=P(l[w]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=d[D]||[];d[D]=L,L.push(g)}E(d,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oo(l,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||d}function jy(l){this.Aa=0,this.i=[],this.j=new Ao,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Oo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Oo("baseRetryDelayMs",5e3,l),this.cb=Oo("retryDelaySeedMs",1e4,l),this.Wa=Oo("forwardChannelMaxRetries",2,l),this.wa=Oo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new vy(l&&l.concurrentRequestLimit),this.Da=new SA,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=jy.prototype,t.la=8,t.G=1,t.connect=function(l,d,g,w){Nt(0),this.W=l,this.H=d||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.I=Gy(this,null,this.W),eu(this)};function Cd(l){if(Fy(l),l.G==3){var d=l.U++,g=$n(l.I);if(Ce(g,"SID",l.K),Ce(g,"RID",d),Ce(g,"TYPE","terminate"),Mo(l,g),d=new Tr(l,l.j,d),d.L=2,d.v=Ql($n(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=d.v,g=!0),g||(d.g=Ky(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ql(d)}qy(l)}function Zl(l){l.g&&(Ad(l),l.g.cancel(),l.g=null)}function Fy(l){Zl(l),l.u&&(a.clearTimeout(l.u),l.u=null),tu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function eu(l){if(!wy(l.h)&&!l.s){l.s=!0;var d=l.Ga;nt||V(),H||(nt(),H=!0),W.add(d,l),l.B=0}}function NA(l,d){return Ey(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ro(m(l.Ga,l,d),Hy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const D=new Tr(this,this.j,l);let L=this.o;if(this.S&&(L?(L=v(L),k(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=zy(this,D,d),g=$n(this.I),Ce(g,"RID",l),Ce(g,"CVER",22),this.D&&Ce(g,"X-HTTP-Session-Id",this.D),Mo(this,g),L&&(this.O?d="headers="+encodeURIComponent(String(by(L)))+"&"+d:this.m&&Sd(g,this.m,L)),Id(this.h,D),this.Ua&&Ce(g,"TYPE","init"),this.P?(Ce(g,"$req",d),Ce(g,"SID","null"),D.T=!0,vd(D,g,null)):vd(D,g,d),this.G=2}}else this.G==3&&(l?Uy(this,l):this.i.length==0||wy(this.h)||Uy(this))};function Uy(l,d){var g;d?g=d.l:g=l.U++;const w=$n(l.I);Ce(w,"SID",l.K),Ce(w,"RID",g),Ce(w,"AID",l.T),Mo(l,w),l.m&&l.o&&Sd(w,l.m,l.o),g=new Tr(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),d&&(l.i=d.D.concat(l.i)),d=zy(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Id(l.h,g),vd(g,w,d)}function Mo(l,d){l.H&&M(l.H,function(g,w){Ce(d,w,g)}),l.l&&Sy({},function(g,w){Ce(d,w,g)})}function zy(l,d,g){g=Math.min(l.i.length,g);var w=l.l?m(l.l.Na,l.l,l):null;e:{var D=l.i;let L=-1;for(;;){const $=["count="+g];L==-1?0<g?(L=D[0].g,$.push("ofs="+L)):L=0:$.push("ofs="+L);let we=!0;for(let rt=0;rt<g;rt++){let pe=D[rt].g;const pt=D[rt].map;if(pe-=L,0>pe)L=Math.max(0,D[rt].g-100),we=!1;else try{CA(pt,$,"req"+pe+"_")}catch{w&&w(pt)}}if(we){w=$.join("&");break e}}}return l=l.i.splice(0,g),d.D=l,w}function By(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;nt||V(),H||(nt(),H=!0),W.add(d,l),l.v=0}}function Rd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ro(m(l.Fa,l),Hy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,$y(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ro(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Nt(10),Zl(this),$y(this))};function Ad(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function $y(l){l.g=new Tr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=$n(l.qa);Ce(d,"RID","rpc"),Ce(d,"SID",l.K),Ce(d,"AID",l.T),Ce(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ce(d,"TO",l.ja),Ce(d,"TYPE","xmlhttp"),Mo(l,d),l.m&&l.o&&Sd(d,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Ql($n(d)),g.m=null,g.P=!0,gy(g,l)}t.Za=function(){this.C!=null&&(this.C=null,Zl(this),Rd(this),Nt(19))};function tu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Wy(l,d){var g=null;if(l.g==d){tu(l),Ad(l),l.g=null;var w=2}else if(Td(l.h,d))g=d.D,Ty(l.h,d),w=1;else return;if(l.G!=0){if(d.o)if(w==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var D=l.B;w=$l(),kt(w,new dy(w,g)),eu(l)}else By(l);else if(D=d.s,D==3||D==0&&0<d.X||!(w==1&&NA(l,d)||w==2&&Rd(l)))switch(g&&0<g.length&&(d=l.h,d.i=d.i.concat(g)),D){case 1:ws(l,5);break;case 4:ws(l,10);break;case 3:ws(l,6);break;default:ws(l,2)}}}function Hy(l,d){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*d}function ws(l,d){if(l.j.info("Error code "+d),d==2){var g=m(l.fb,l),w=l.Xa;const D=!w;w=new vs(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Gl(w,"https"),Ql(w),D?TA(w.toString(),g):IA(w.toString(),g)}else Nt(2);l.G=0,l.l&&l.l.sa(d),qy(l),Fy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Nt(2)):(this.j.info("Failed to ping google.com"),Nt(1))};function qy(l){if(l.G=0,l.ka=[],l.l){const d=Iy(l.h);(d.length!=0||l.i.length!=0)&&(N(l.ka,d),N(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function Gy(l,d,g){var w=g instanceof vs?$n(g):new vs(g);if(w.g!="")d&&(w.g=d+"."+w.g),Kl(w,w.s);else{var D=a.location;w=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var L=new vs(null);w&&Gl(L,w),d&&(L.g=d),D&&Kl(L,D),g&&(L.l=g),w=L}return g=l.D,d=l.ya,g&&d&&Ce(w,g,d),Ce(w,"VER",l.la),Mo(l,w),w}function Ky(l,d,g){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Me(new Yl({eb:g})):new Me(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qy(){}t=Qy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function nu(){}nu.prototype.g=function(l,d){return new Ht(l,d)};function Ht(l,d){ft.call(this),this.g=new jy(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!y(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!y(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new ri(this)}T(Ht,ft),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Cd(this.g)},Ht.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=fd(l),l=g);d.i.push(new dA(d.Ya++,l)),d.G==3&&eu(d)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Cd(this.g),delete this.g,Ht.aa.N.call(this)};function Yy(l){md.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const g in d){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}T(Yy,md);function Xy(){gd.call(this),this.status=1}T(Xy,gd);function ri(l){this.g=l}T(ri,Qy),ri.prototype.ua=function(){kt(this.g,"a")},ri.prototype.ta=function(l){kt(this.g,new Yy(l))},ri.prototype.sa=function(l){kt(this.g,new Xy)},ri.prototype.ra=function(){kt(this.g,"b")},nu.prototype.createWebChannel=nu.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,yR=function(){return new nu},_R=function(){return $l()},gR=_s,Xp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wl.NO_ERROR=0,Wl.TIMEOUT=8,Wl.HTTP_ERROR=6,Qu=Wl,fy.COMPLETE="complete",mR=fy,ly.EventType=So,So.OPEN="a",So.CLOSE="b",So.ERROR="c",So.MESSAGE="d",ft.prototype.listen=ft.prototype.K,sa=ly,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,pR=Me}).apply(typeof Su<"u"?Su:typeof self<"u"?self:typeof window<"u"?window:{});const xE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new Nh("@firebase/firestore");function Qo(){return Ws.logLevel}function K(t,...e){if(Ws.logLevel<=le.DEBUG){const n=e.map(f_);Ws.debug(`Firestore (${vo}): ${t}`,...n)}}function pr(t,...e){if(Ws.logLevel<=le.ERROR){const n=e.map(f_);Ws.error(`Firestore (${vo}): ${t}`,...n)}}function eo(t,...e){if(Ws.logLevel<=le.WARN){const n=e.map(f_);Ws.warn(`Firestore (${vo}): ${t}`,...n)}}function f_(t){if(typeof t=="string")return t;try{/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${vo}) INTERNAL ASSERTION FAILED: `+t;throw pr(e),new Error(e)}function ye(t,e){t||Z()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Et.UNAUTHENTICATED))}shutdown(){}}class JV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ZV{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ye(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new sr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new vR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new Et(e)}}class ej{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tj{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ej(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nj{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rj{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ye(this.o===void 0);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.R=n.token,new nj(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function sj(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=sj(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function to(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Xe(0,0))}static max(){return new te(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ol.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ol?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends ol{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const ij=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends ol{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return ij.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new G(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new G(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ae.fromString(e))}static fromName(e){return new Y(Ae.fromString(e).popFirst(5))}static empty(){return new Y(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ae(e.slice()))}}function oj(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new us(s,Y.empty(),e)}function aj(t){return new us(t.readTime,t.key,-1)}class us{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new us(te.min(),Y.empty(),-1)}static max(){return new us(te.max(),Y.empty(),-1)}}function lj(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
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
 */const uj="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cj{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xl(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==uj)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function hj(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class p_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}p_.oe=-1;function Wh(t){return t==null}function Yc(t){return t===0&&1/t==-1/0}function dj(t){return typeof t=="number"&&Number.isInteger(t)&&!Yc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ER(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cu(this.root,e,this.comparator,!0)}}class Cu{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=i??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new it(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,s,i){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new DE(this.data.getIterator())}getIteratorFrom(e){return new DE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class DE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new ut(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return to(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class TR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new TR("Invalid base64 string: "+i):i}}(e);return new dt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const fj=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cs(t){if(ye(!!t),typeof t=="string"){let e=0;const n=fj.exec(t);if(ye(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hs(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
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
 */function m_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function g_(t){const e=t.mapValue.fields.__previous_value__;return m_(e)?g_(e):e}function al(t){const e=cs(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pj{constructor(e,n,r,s,i,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ll{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ll("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ll&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ru={mapValue:{}};function qs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?m_(t)?4:gj(t)?9007199254740991:mj(t)?10:11:Z()}function Vn(t,e){if(t===e)return!0;const n=qs(t);if(n!==qs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return al(t).isEqual(al(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=cs(s.timestampValue),a=cs(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Hs(s.bytesValue).isEqual(Hs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),a=ze(i.doubleValue);return o===a?Yc(o)===Yc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return to(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(bE(o)!==bE(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Vn(o[u],a[u])))return!1;return!0}(t,e);default:return Z()}}function ul(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function no(t,e){if(t===e)return 0;const n=qs(t),r=qs(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ze(i.integerValue||i.doubleValue),u=ze(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return OE(t.timestampValue,e.timestampValue);case 4:return OE(al(t),al(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Hs(i),u=Hs(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=me(a[c],u[c]);if(h!==0)return h}return me(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=me(ze(i.latitude),ze(o.latitude));return a!==0?a:me(ze(i.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ME(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,u,c,h;const f=i.fields||{},m=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,T=(u=m.value)===null||u===void 0?void 0:u.arrayValue,C=me(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0);return C!==0?C:ME(_,T)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ru.mapValue&&o===Ru.mapValue)return 0;if(i===Ru.mapValue)return 1;if(o===Ru.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const m=me(u[f],h[f]);if(m!==0)return m;const _=no(a[u[f]],c[h[f]]);if(_!==0)return _}return me(u.length,h.length)}(t.mapValue,e.mapValue);default:throw Z()}}function OE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=cs(t),r=cs(e),s=me(n.seconds,r.seconds);return s!==0?s:me(n.nanos,r.nanos)}function ME(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=no(n[s],r[s]);if(i)return i}return me(n.length,r.length)}function ro(t){return Jp(t)}function Jp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=cs(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Hs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Jp(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Jp(n.fields[o])}`;return s+"}"}(t.mapValue):Z()}function LE(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Zp(t){return!!t&&"integerValue"in t}function __(t){return!!t&&"arrayValue"in t}function VE(t){return!!t&&"nullValue"in t}function jE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yu(t){return!!t&&"mapValue"in t}function mj(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ia(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Zs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ia(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ia(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gj(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ia(n)}setAll(e){let n=at.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ia(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Yu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Yu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Zs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ft(Ia(this.value))}}function IR(t){const e=[];return Zs(t.fields,(n,r)=>{const s=new at([n]);if(Yu(r)){const i=IR(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new It(e,0,te.min(),te.min(),te.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,s){return new It(e,1,n,te.min(),r,s,0)}static newNoDocument(e,n){return new It(e,2,n,te.min(),te.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new It(e,3,n,te.min(),te.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof It&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xc{constructor(e,n){this.position=e,this.inclusive=n}}function FE(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=no(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function UE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Jc{constructor(e,n="asc"){this.field=e,this.dir=n}}function _j(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class SR{}class qe extends SR{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vj(e,n,r):n==="array-contains"?new Tj(e,r):n==="in"?new Ij(e,r):n==="not-in"?new Sj(e,r):n==="array-contains-any"?new Cj(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wj(e,r):new Ej(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(no(n,this.value)):n!==null&&qs(this.value)===qs(n)&&this.matchesComparison(no(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tn extends SR{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Tn(e,n)}matches(e){return CR(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function CR(t){return t.op==="and"}function RR(t){return yj(t)&&CR(t)}function yj(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function em(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+ro(t.value);if(RR(t))return t.filters.map(e=>em(e)).join(",");{const e=t.filters.map(n=>em(n)).join(",");return`${t.op}(${e})`}}function AR(t,e){return t instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&Vn(r.value,s.value)}(t,e):t instanceof Tn?function(r,s){return s instanceof Tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&AR(o,s.filters[a]),!0):!1}(t,e):void Z()}function kR(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${ro(n.value)}`}(t):t instanceof Tn?function(n){return n.op.toString()+" {"+n.getFilters().map(kR).join(" ,")+"}"}(t):"Filter"}class vj extends qe{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class wj extends qe{constructor(e,n){super(e,"in",n),this.keys=NR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ej extends qe{constructor(e,n){super(e,"not-in",n),this.keys=NR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function NR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class Tj extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return __(n)&&ul(n.arrayValue,this.value)}}class Ij extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ul(this.value.arrayValue,n)}}class Sj extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ul(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ul(this.value.arrayValue,n)}}class Cj extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!__(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ul(this.value.arrayValue,r))}}/**
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
 */class Rj{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function zE(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Rj(t,e,n,r,s,i,o)}function y_(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>em(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Wh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ro(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ro(r)).join(",")),e.ue=n}return e.ue}function v_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_j(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!AR(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!UE(t.startAt,e.startAt)&&UE(t.endAt,e.endAt)}function tm(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Aj(t,e,n,r,s,i,o,a){return new Dl(t,e,n,r,s,i,o,a)}function w_(t){return new Dl(t)}function BE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function PR(t){return t.collectionGroup!==null}function Sa(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ut(at.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Jc(i,r))}),n.has(at.keyField().canonicalString())||e.ce.push(new Jc(at.keyField(),r))}return e.ce}function On(t){const e=ne(t);return e.le||(e.le=kj(e,Sa(t))),e.le}function kj(t,e){if(t.limitType==="F")return zE(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Jc(s.field,i)});const n=t.endAt?new Xc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xc(t.startAt.position,t.startAt.inclusive):null;return zE(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function nm(t,e){const n=t.filters.concat([e]);return new Dl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function rm(t,e,n){return new Dl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hh(t,e){return v_(On(t),On(e))&&t.limitType===e.limitType}function xR(t){return`${y_(On(t))}|lt:${t.limitType}`}function li(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>kR(s)).join(", ")}]`),Wh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ro(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ro(s)).join(",")),`Target(${r})`}(On(t))}; limitType=${t.limitType})`}function qh(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Sa(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,u){const c=FE(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Sa(r),s)||r.endAt&&!function(o,a,u){const c=FE(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Sa(r),s))}(t,e)}function Nj(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bR(t){return(e,n)=>{let r=!1;for(const s of Sa(t)){const i=Pj(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Pj(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,a){const u=o.data.field(i),c=a.data.field(i);return u!==null&&c!==null?no(u,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Zs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ER(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xj=new Oe(Y.comparator);function mr(){return xj}const DR=new Oe(Y.comparator);function ia(...t){let e=DR;for(const n of t)e=e.insert(n.key,n);return e}function OR(t){let e=DR;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ns(){return Ca()}function MR(){return Ca()}function Ca(){return new wo(t=>t.toString(),(t,e)=>t.isEqual(e))}const bj=new Oe(Y.comparator),Dj=new ut(Y.comparator);function ue(...t){let e=Dj;for(const n of t)e=e.add(n);return e}const Oj=new ut(me);function Mj(){return Oj}/**
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
 */function E_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yc(e)?"-0":e}}function LR(t){return{integerValue:""+t}}function Lj(t,e){return dj(e)?LR(e):E_(t,e)}/**
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
 */class Gh{constructor(){this._=void 0}}function Vj(t,e,n){return t instanceof cl?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&m_(i)&&(i=g_(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof hl?jR(t,e):t instanceof dl?FR(t,e):function(s,i){const o=VR(s,i),a=$E(o)+$E(s.Pe);return Zp(o)&&Zp(s.Pe)?LR(a):E_(s.serializer,a)}(t,e)}function jj(t,e,n){return t instanceof hl?jR(t,e):t instanceof dl?FR(t,e):n}function VR(t,e){return t instanceof Zc?function(r){return Zp(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class cl extends Gh{}class hl extends Gh{constructor(e){super(),this.elements=e}}function jR(t,e){const n=UR(e);for(const r of t.elements)n.some(s=>Vn(s,r))||n.push(r);return{arrayValue:{values:n}}}class dl extends Gh{constructor(e){super(),this.elements=e}}function FR(t,e){let n=UR(e);for(const r of t.elements)n=n.filter(s=>!Vn(s,r));return{arrayValue:{values:n}}}class Zc extends Gh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function $E(t){return ze(t.integerValue||t.doubleValue)}function UR(t){return __(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fj{constructor(e,n){this.field=e,this.transform=n}}function Uj(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof hl&&s instanceof hl||r instanceof dl&&s instanceof dl?to(r.elements,s.elements,Vn):r instanceof Zc&&s instanceof Zc?Vn(r.Pe,s.Pe):r instanceof cl&&s instanceof cl}(t.transform,e.transform)}class zj{constructor(e,n){this.version=e,this.transformResults=n}}class Mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mn}static exists(e){return new Mn(void 0,e)}static updateTime(e){return new Mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Kh{}function zR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $R(t.key,Mn.none()):new Ol(t.key,t.data,Mn.none());{const n=t.data,r=Ft.empty();let s=new ut(at.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new gs(t.key,r,new Qt(s.toArray()),Mn.none())}}function Bj(t,e,n){t instanceof Ol?function(s,i,o){const a=s.value.clone(),u=HE(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof gs?function(s,i,o){if(!Xu(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=HE(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(BR(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ra(t,e,n,r){return t instanceof Ol?function(i,o,a,u){if(!Xu(i.precondition,o))return a;const c=i.value.clone(),h=qE(i.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof gs?function(i,o,a,u){if(!Xu(i.precondition,o))return a;const c=qE(i.fieldTransforms,u,o),h=o.data;return h.setAll(BR(i)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return Xu(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function $j(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=VR(r.transform,s||null);i!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,i))}return n||null}function WE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&to(r,s,(i,o)=>Uj(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ol extends Kh{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class gs extends Kh{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function BR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function HE(t,e,n){const r=new Map;ye(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,jj(o,a,n[s]))}return r}function qE(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Vj(i,o,e))}return r}class $R extends Kh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wj extends Kh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hj{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Bj(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ra(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ra(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=MR();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=zR(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&to(this.mutations,e.mutations,(n,r)=>WE(n,r))&&to(this.baseMutations,e.baseMutations,(n,r)=>WE(n,r))}}class T_{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ye(e.mutations.length===r.length);let s=function(){return bj}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new T_(e,n,r,s)}}/**
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
 */class qj{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Gj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,ce;function Kj(t){switch(t){default:return Z();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function WR(t){if(t===void 0)return pr("GRPC error has no .code"),j.UNKNOWN;switch(t){case We.OK:return j.OK;case We.CANCELLED:return j.CANCELLED;case We.UNKNOWN:return j.UNKNOWN;case We.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case We.INTERNAL:return j.INTERNAL;case We.UNAVAILABLE:return j.UNAVAILABLE;case We.UNAUTHENTICATED:return j.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case We.NOT_FOUND:return j.NOT_FOUND;case We.ALREADY_EXISTS:return j.ALREADY_EXISTS;case We.PERMISSION_DENIED:return j.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case We.ABORTED:return j.ABORTED;case We.OUT_OF_RANGE:return j.OUT_OF_RANGE;case We.UNIMPLEMENTED:return j.UNIMPLEMENTED;case We.DATA_LOSS:return j.DATA_LOSS;default:return Z()}}(ce=We||(We={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Qj(){return new TextEncoder}/**
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
 */const Yj=new Ds([4294967295,4294967295],0);function GE(t){const e=Qj().encode(t),n=new fR;return n.update(e),new Uint8Array(n.digest())}function KE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ds([n,r],0),new Ds([s,i],0)]}class I_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new oa(`Invalid padding: ${n}`);if(r<0)throw new oa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new oa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new oa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ds.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Ds.fromNumber(r)));return s.compare(Yj)===1&&(s=new Ds([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=GE(e),[r,s]=KE(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new I_(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=GE(e),[r,s]=KE(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class oa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ml.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Qh(te.min(),s,new Oe(me),mr(),ue())}}class Ml{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ml(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class HR{constructor(e,n){this.targetId=e,this.me=n}}class qR{constructor(e,n,r=dt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class QE{constructor(){this.fe=0,this.ge=XE(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ue(),n=ue(),r=ue();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Z()}}),new Ml(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=XE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ye(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Xj{constructor(e){this.Le=e,this.Be=new Map,this.ke=mr(),this.qe=YE(),this.Qe=new Oe(me)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(tm(i))if(r===0){const o=new Y(i.path);this.Ue(n,o,It.newNoDocument(o,te.min()))}else ye(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Hs(r).toUint8Array()}catch(u){if(u instanceof TR)return eo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new I_(o,s,i)}catch(u){return eo(u instanceof oa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&tm(a.target)){const u=new Y(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,It.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ue();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Qh(e,n,this.Qe,this.ke,r);return this.ke=mr(),this.qe=YE(),this.Qe=new Oe(me),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new QE,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ut(me),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new QE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function YE(){return new Oe(Y.comparator)}function XE(){return new Oe(Y.comparator)}const Jj={asc:"ASCENDING",desc:"DESCENDING"},Zj={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eF={and:"AND",or:"OR"};class tF{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function sm(t,e){return t.useProto3Json||Wh(e)?e:{value:e}}function eh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nF(t,e){return eh(t,e.toTimestamp())}function Ln(t){return ye(!!t),te.fromTimestamp(function(n){const r=cs(n);return new Xe(r.seconds,r.nanos)}(t))}function S_(t,e){return im(t,e).canonicalString()}function im(t,e){const n=function(s){return new Ae(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function KR(t){const e=Ae.fromString(t);return ye(ZR(e)),e}function om(t,e){return S_(t.databaseId,e.path)}function wf(t,e){const n=KR(e);if(n.get(1)!==t.databaseId.projectId)throw new G(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(YR(n))}function QR(t,e){return S_(t.databaseId,e)}function rF(t){const e=KR(t);return e.length===4?Ae.emptyPath():YR(e)}function am(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function YR(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function JE(t,e,n){return{name:om(t,e),fields:n.value.mapValue.fields}}function sF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,h){return c.useProto3Json?(ye(h===void 0||typeof h=="string"),dt.fromBase64String(h||"")):(ye(h===void 0||h instanceof Buffer||h instanceof Uint8Array),dt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?j.UNKNOWN:WR(c.code);return new G(h,c.message||"")}(o);n=new qR(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=wf(t,r.document.name),i=Ln(r.document.updateTime),o=r.document.createTime?Ln(r.document.createTime):te.min(),a=new Ft({mapValue:{fields:r.document.fields}}),u=It.newFoundDocument(s,i,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Ju(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=wf(t,r.document),i=r.readTime?Ln(r.readTime):te.min(),o=It.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ju([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=wf(t,r.document),i=r.removedTargetIds||[];n=new Ju([],i,s,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Gj(s,i),a=r.targetId;n=new HR(a,o)}}return n}function iF(t,e){let n;if(e instanceof Ol)n={update:JE(t,e.key,e.value)};else if(e instanceof $R)n={delete:om(t,e.key)};else if(e instanceof gs)n={update:JE(t,e.key,e.data),updateMask:pF(e.fieldMask)};else{if(!(e instanceof Wj))return Z();n={verify:om(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof cl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof hl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof dl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Zc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:nF(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z()}(t,e.precondition)),n}function oF(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Ln(s.updateTime):Ln(i);return o.isEqual(te.min())&&(o=Ln(i)),new zj(o,s.transformResults||[])}(n,e))):[]}function aF(t,e){return{documents:[QR(t,e.path)]}}function lF(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=QR(t,s);const i=function(c){if(c.length!==0)return JR(Tn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:ui(m.field),direction:hF(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=sm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:s}}function uF(t){let e=rF(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ye(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const m=XR(f);return m instanceof Tn&&RR(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(T){return new Jc(ci(T.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Wh(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,_=f.values||[];return new Xc(_,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,_=f.values||[];return new Xc(_,m)}(n.endAt)),Aj(e,s,o,i,a,"F",u,c)}function cF(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function XR(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ci(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ci(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ci(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ci(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(ci(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Tn.create(n.compositeFilter.filters.map(r=>XR(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function hF(t){return Jj[t]}function dF(t){return Zj[t]}function fF(t){return eF[t]}function ui(t){return{fieldPath:t.canonicalString()}}function ci(t){return at.fromServerFormat(t.fieldPath)}function JR(t){return t instanceof qe?function(n){if(n.op==="=="){if(jE(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NAN"}};if(VE(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(jE(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NAN"}};if(VE(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ui(n.field),op:dF(n.op),value:n.value}}}(t):t instanceof Tn?function(n){const r=n.getFilters().map(s=>JR(s));return r.length===1?r[0]:{compositeFilter:{op:fF(n.op),filters:r}}}(t):Z()}function pF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ZR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,r,s,i=te.min(),o=te.min(),a=dt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mF{constructor(e){this.ct=e}}function gF(t){const e=uF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rm(e,e.limit,"L"):e}/**
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
 */class _F{constructor(){this.un=new yF}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(us.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(us.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class yF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(Ae.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new so(0)}static kn(){return new so(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF{constructor(){this.changes=new wo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,It.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EF{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ra(r.mutation,s,Qt.empty(),Xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const s=Ns();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ia();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ns();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=mr();const o=Ca(),a=function(){return Ca()}();return n.forEach((u,c)=>{const h=r.get(c.key);s.has(c.key)&&(h===void 0||h.mutation instanceof gs)?i=i.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ra(h.mutation,c,h.mutation.getFieldMask(),Xe.now())):o.set(c.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new wF(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ca();let s=new Oe((o,a)=>o-a),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||Qt.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(s.get(a.batchId)||ue()).add(u);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=MR();h.forEach(m=>{if(!i.has(m)){const _=zR(n.get(m),r.get(m));_!==null&&f.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):PR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Ns());let a=-1,u=i;return o.next(c=>U.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?U.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,ue())).next(h=>({batchId:a,changes:OR(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=ia();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ia();return this.indexManager.getCollectionParents(e,i).next(a=>U.forEach(a,u=>{const c=function(f,m){return new Dl(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,It.newInvalidDocument(h)))});let a=ia();return o.forEach((u,c)=>{const h=i.get(u);h!==void 0&&Ra(h.mutation,c,Qt.empty(),Xe.now()),qh(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class TF{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ln(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:gF(s.bundledQuery),readTime:Ln(s.readTime)}}(n)),U.resolve()}}/**
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
 */class IF{constructor(){this.overlays=new Oe(Y.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ns();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Ns(),i=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Oe((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=i.get(c.largestBatchId);h===null&&(h=Ns(),i=i.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Ns(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=s)););return U.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new qj(n,r));let i=this.Ir.get(n);i===void 0&&(i=ue(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class SF{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(){this.Tr=new ut(Ze.Er),this.dr=new ut(Ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Y(new Ae([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Y(new Ae([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=ue();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Y.comparator(e.key,n.key)||me(e.wr,n.wr)}static Ar(e,n){return me(e.wr,n.wr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ut(Ze.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Hj(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new Ze(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const a=this.Dr(o.wr);i.push(a)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(me);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{r=r.add(a.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new Y(i),0);let a=new ut(me);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.wr)),!0)},o),U.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ye(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ze(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RF{constructor(e){this.Mr=e,this.docs=function(){return new Oe(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():It.newInvalidDocument(n))}getEntries(e,n){let r=mr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():It.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=mr();const o=n.path,a=new Y(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||lj(aj(h),r)<=0||(s.has(h.key)||qh(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Z()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new AF(this)}getSize(e){return U.resolve(this.size)}}class AF extends vF{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kF{constructor(e){this.persistence=e,this.Nr=new wo(n=>y_(n),v_),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new C_,this.targetCount=0,this.kr=so.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new so(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NF{constructor(e,n){this.qr={},this.overlays={},this.Qr=new p_(0),this.Kr=!1,this.Kr=!0,this.$r=new SF,this.referenceDelegate=e(this),this.Ur=new kF(this),this.indexManager=new _F,this.remoteDocumentCache=function(s){return new RF(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new mF(n),this.Gr=new TF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new IF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new CF(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new PF(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class PF extends cj{constructor(e){super(),this.currentSequenceNumber=e}}class R_{constructor(e){this.persistence=e,this.Jr=new C_,this.Yr=null}static Zr(e){return new R_(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=Y.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ue(),s=ue();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new A_(e,n.fromCache,r,s)}}/**
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
 */class xF{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class bF{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return wb()?8:hj(Ct())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new xF;return this.Xi(e,n,o).next(a=>{if(i.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Qo()<=le.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",li(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Qo()<=le.DEBUG&&K("QueryEngine","Query:",li(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Qo()<=le.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",li(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(n))):U.resolve())}Yi(e,n){if(BE(n))return U.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=rm(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ue(...i);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,rm(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,s){return BE(n)||s.isEqual(te.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?U.resolve(null):(Qo()<=le.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),li(n)),this.rs(e,o,n,oj(s,-1)).next(a=>a))})}ts(e,n){let r=new ut(bR(e));return n.forEach((s,i)=>{qh(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Qo()<=le.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",li(n)),this.Ji.getDocumentsMatchingQuery(e,n,us.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class DF{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Oe(me),this._s=new wo(i=>y_(i),v_),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new EF(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function OF(t,e,n,r){return new DF(t,e,n,r)}async function e1(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=ue();for(const c of s){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of i){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function MF(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,m=f.keys();let _=U.resolve();return m.forEach(T=>{_=_.next(()=>h.getEntry(u,T)).next(C=>{const N=c.docVersions.get(T);ye(N!==null),C.version.compareTo(N)<0&&(f.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),h.addEntry(C)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ue();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function t1(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function LF(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const m=s.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(i,h.addedDocuments,f)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(dt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),s=s.insert(f,_),function(C,N,I){return C.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,_,h)&&a.push(n.Ur.updateTargetData(i,_))});let u=mr(),c=ue();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(VF(i,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(te.min())){const h=n.Ur.getLastRemoteSnapshotVersion(i).next(f=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return U.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.os=s,i))}function VF(t,e,n){let r=ue(),s=ue();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=mr();return n.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function jF(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function FF(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function lm(t,e,n){const r=ne(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bl(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function ZE(t,e,n){const r=ne(t);let s=te.min(),i=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=ne(u),m=f._s.get(h);return m!==void 0?U.resolve(f.os.get(m)):f.Ur.getTargetData(c,h)}(r,o,On(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:te.min(),n?i:ue())).next(a=>(UF(r,Nj(e),a),{documents:a,Ts:i})))}function UF(t,e,n){let r=t.us.get(e)||te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class e0{constructor(){this.activeTargetIds=Mj()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zF{constructor(){this.so=new e0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new e0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class BF{_o(e){}shutdown(){}}/**
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
 */class t0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Au=null;function Ef(){return Au===null?Au=function(){return 268435456+Math.round(2147483648*Math.random())}():Au++,"0x"+Au.toString(16)}/**
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
 */const $F={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WF{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class HF extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const a=Ef(),u=this.xo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${a}:`,u,s);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,i,o),this.No(n,u,c,s).then(h=>(K("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw eo("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",s),h})}Lo(n,r,s,i,o,a){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=$F[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Ef();return new Promise((o,a)=>{const u=new pR;u.setWithCredentials(!0),u.listenOnce(mR.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Qu.NO_ERROR:const h=u.getResponseJson();K(yt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Qu.TIMEOUT:K(yt,`RPC '${e}' ${i} timed out`),a(new G(j.DEADLINE_EXCEEDED,"Request time out"));break;case Qu.HTTP_ERROR:const f=u.getStatus();if(K(yt,`RPC '${e}' ${i} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const T=function(N){const I=N.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(I)>=0?I:j.UNKNOWN}(_.status);a(new G(T,_.message))}else a(new G(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new G(j.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{K(yt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);K(yt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const s=Ef(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yR(),a=_R(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=i.join("");K(yt,`Creating RPC '${e}' stream ${s}: ${h}`,u);const f=o.createWebChannel(h,u);let m=!1,_=!1;const T=new WF({Io:N=>{_?K(yt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(K(yt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),K(yt,`RPC '${e}' stream ${s} sending:`,N),f.send(N))},To:()=>f.close()}),C=(N,I,y)=>{N.listen(I,R=>{try{y(R)}catch(b){setTimeout(()=>{throw b},0)}})};return C(f,sa.EventType.OPEN,()=>{_||(K(yt,`RPC '${e}' stream ${s} transport opened.`),T.yo())}),C(f,sa.EventType.CLOSE,()=>{_||(_=!0,K(yt,`RPC '${e}' stream ${s} transport closed`),T.So())}),C(f,sa.EventType.ERROR,N=>{_||(_=!0,eo(yt,`RPC '${e}' stream ${s} transport errored:`,N),T.So(new G(j.UNAVAILABLE,"The operation could not be completed")))}),C(f,sa.EventType.MESSAGE,N=>{var I;if(!_){const y=N.data[0];ye(!!y);const R=y,b=R.error||((I=R[0])===null||I===void 0?void 0:I.error);if(b){K(yt,`RPC '${e}' stream ${s} received error:`,b);const F=b.status;let M=function(S){const k=We[S];if(k!==void 0)return WR(k)}(F),E=b.message;M===void 0&&(M=j.INTERNAL,E="Unknown error status: "+F+" with message "+b.message),_=!0,T.So(new G(M,E)),f.close()}else K(yt,`RPC '${e}' stream ${s} received:`,y),T.bo(y)}}),C(a,gR.STAT_EVENT,N=>{N.stat===Xp.PROXY?K(yt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Xp.NOPROXY&&K(yt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function Tf(){return typeof document<"u"?document:null}/**
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
 */function Yh(t){return new tF(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,n,r,s,i,o,a,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new n1(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(pr(n.toString()),pr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new G(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qF extends r1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=sF(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Ln(o.readTime):te.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=am(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=tm(u)?{documents:aF(i,u)}:{query:lF(i,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=GR(i,o.resumeToken);const c=sm(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=eh(i,o.snapshotVersion.toTimestamp());const c=sm(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=cF(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=am(this.serializer),n.removeTarget=e,this.a_(n)}}class GF extends r1{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ye(!!e.streamToken),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=oF(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=am(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>iF(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KF extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new G(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,im(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(j.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,im(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class QF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(pr(n),this.D_=!1):K("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YF{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{ei(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ne(u);c.L_.add(4),await Ll(c),c.q_.set("Unknown"),c.L_.delete(4),await Xh(c)}(this))})}),this.q_=new QF(r,s)}}async function Xh(t){if(ei(t))for(const e of t.B_)await e(!0)}async function Ll(t){for(const e of t.B_)await e(!1)}function s1(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),x_(n)?P_(n):Eo(n).r_()&&N_(n,e))}function k_(t,e){const n=ne(t),r=Eo(n);n.N_.delete(e),r.r_()&&i1(n,e),n.N_.size===0&&(r.r_()?r.o_():ei(n)&&n.q_.set("Unknown"))}function N_(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Eo(t).A_(e)}function i1(t,e){t.Q_.xe(e),Eo(t).R_(e)}function P_(t){t.Q_=new Xj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Eo(t).start(),t.q_.v_()}function x_(t){return ei(t)&&!Eo(t).n_()&&t.N_.size>0}function ei(t){return ne(t).L_.size===0}function o1(t){t.Q_=void 0}async function XF(t){t.q_.set("Online")}async function JF(t){t.N_.forEach((e,n)=>{N_(t,e)})}async function ZF(t,e){o1(t),x_(t)?(t.q_.M_(e),P_(t)):t.q_.set("Unknown")}async function e4(t,e,n){if(t.q_.set("Online"),e instanceof qR&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await th(t,r)}else if(e instanceof Ju?t.Q_.Ke(e):e instanceof HR?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const r=await t1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=i.N_.get(c);h&&i.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=i.N_.get(u);if(!h)return;i.N_.set(u,h.withResumeToken(dt.EMPTY_BYTE_STRING,h.snapshotVersion)),i1(i,u);const f=new Ur(h.target,u,c,h.sequenceNumber);N_(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await th(t,r)}}async function th(t,e,n){if(!bl(e))throw e;t.L_.add(1),await Ll(t),t.q_.set("Offline"),n||(n=()=>t1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Xh(t)})}function a1(t,e){return e().catch(n=>th(t,n,e))}async function Jh(t){const e=ne(t),n=hs(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;t4(e);)try{const s=await jF(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,n4(e,s)}catch(s){await th(e,s)}l1(e)&&u1(e)}function t4(t){return ei(t)&&t.O_.length<10}function n4(t,e){t.O_.push(e);const n=hs(t);n.r_()&&n.V_&&n.m_(e.mutations)}function l1(t){return ei(t)&&!hs(t).n_()&&t.O_.length>0}function u1(t){hs(t).start()}async function r4(t){hs(t).p_()}async function s4(t){const e=hs(t);for(const n of t.O_)e.m_(n.mutations)}async function i4(t,e,n){const r=t.O_.shift(),s=T_.from(r,e,n);await a1(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Jh(t)}async function o4(t,e){e&&hs(t).V_&&await async function(r,s){if(function(o){return Kj(o)&&o!==j.ABORTED}(s.code)){const i=r.O_.shift();hs(r).s_(),await a1(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Jh(r)}}(t,e),l1(t)&&u1(t)}async function n0(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=ei(n);n.L_.add(3),await Ll(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Xh(n)}async function a4(t,e){const n=ne(t);e?(n.L_.delete(2),await Xh(n)):e||(n.L_.add(2),await Ll(n),n.q_.set("Unknown"))}function Eo(t){return t.K_||(t.K_=function(n,r,s){const i=ne(n);return i.w_(),new qF(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:XF.bind(null,t),Ro:JF.bind(null,t),mo:ZF.bind(null,t),d_:e4.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),x_(t)?P_(t):t.q_.set("Unknown")):(await t.K_.stop(),o1(t))})),t.K_}function hs(t){return t.U_||(t.U_=function(n,r,s){const i=ne(n);return i.w_(),new GF(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:r4.bind(null,t),mo:o4.bind(null,t),f_:s4.bind(null,t),g_:i4.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Jh(t)):(await t.U_.stop(),t.O_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new b_(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function D_(t,e){if(pr("AsyncQueue",`${e}: ${t}`),bl(t))return new G(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=ia(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new Vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(){this.W_=new Oe(Y.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Z():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class io{constructor(e,n,r,s,i,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new io(e,n,Vi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class u4{constructor(){this.queries=s0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ne(n),i=s.queries;s.queries=s0(),i.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new G(j.ABORTED,"Firestore shutting down"))}}function s0(){return new wo(t=>xR(t),Hh)}async function c1(t,e){const n=ne(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new l4,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=D_(o,`Initialization of query '${li(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&O_(n)}async function h1(t,e){const n=ne(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function c4(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(r=!0);o.z_=s}}r&&O_(n)}function h4(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function O_(t){t.Y_.forEach(e=>{e.next()})}var um,i0;(i0=um||(um={})).ea="default",i0.Cache="cache";class d1{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new io(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==um.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.key=e}}class p1{constructor(e){this.key=e}}class d4{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ue(),this.mutatedKeys=ue(),this.Aa=bR(e),this.Ra=new Vi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new r0,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const m=s.get(h),_=qh(this.query,f)?f:null,T=!!m&&this.mutatedKeys.has(m.key),C=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let N=!1;m&&_?m.data.isEqual(_.data)?T!==C&&(r.track({type:3,doc:_}),N=!0):this.ga(m,_)||(r.track({type:2,doc:_}),N=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),N=!0):m&&!_&&(r.track({type:1,doc:m}),N=!0,(u||c)&&(a=!0)),N&&(_?(o=o.add(_),i=C?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(_,T){const C=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return C(_)-C(T)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),s=s!=null&&s;const a=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new io(this.query,e.Ra,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new r0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ue(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new p1(r))}),this.da.forEach(r=>{e.has(r)||n.push(new f1(r))}),n}ba(e){this.Ta=e.Ts,this.da=ue();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return io.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class f4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class p4{constructor(e){this.key=e,this.va=!1}}class m4{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new wo(a=>xR(a),Hh),this.Ma=new Map,this.xa=new Set,this.Oa=new Oe(Y.comparator),this.Na=new Map,this.La=new C_,this.Ba={},this.ka=new Map,this.qa=so.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function g4(t,e,n=!0){const r=w1(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await m1(r,e,n,!0),s}async function _4(t,e){const n=w1(t);await m1(n,e,!0,!1)}async function m1(t,e,n,r){const s=await FF(t.localStore,On(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await y4(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&s1(t.remoteStore,s),a}async function y4(t,e,n,r,s){t.Ka=(f,m,_)=>async function(C,N,I,y){let R=N.view.ma(I);R.ns&&(R=await ZE(C.localStore,N.query,!1).then(({documents:E})=>N.view.ma(E,R)));const b=y&&y.targetChanges.get(N.targetId),F=y&&y.targetMismatches.get(N.targetId)!=null,M=N.view.applyChanges(R,C.isPrimaryClient,b,F);return a0(C,N.targetId,M.wa),M.snapshot}(t,f,m,_);const i=await ZE(t.localStore,e,!0),o=new d4(e,i.Ts),a=o.ma(i.documents),u=Ml.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,u);a0(t,n,c.wa);const h=new f4(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function v4(t,e,n){const r=ne(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Hh(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await lm(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&k_(r.remoteStore,s.targetId),cm(r,s.targetId)}).catch(xl)):(cm(r,s.targetId),await lm(r.localStore,s.targetId,!0))}async function w4(t,e){const n=ne(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),k_(n.remoteStore,r.targetId))}async function E4(t,e,n){const r=k4(t);try{const s=await function(o,a){const u=ne(o),c=Xe.now(),h=a.reduce((_,T)=>_.add(T.key),ue());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=mr(),C=ue();return u.cs.getEntries(_,h).next(N=>{T=N,T.forEach((I,y)=>{y.isValidDocument()||(C=C.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,T)).next(N=>{f=N;const I=[];for(const y of a){const R=$j(y,f.get(y.key).overlayedDocument);R!=null&&I.push(new gs(y.key,R,IR(R.value.mapValue),Mn.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,I,a)}).next(N=>{m=N;const I=N.applyToLocalDocumentSet(f,C);return u.documentOverlayCache.saveOverlays(_,N.batchId,I)})}).then(()=>({batchId:m.batchId,changes:OR(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Oe(me)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,s.batchId,n),await Vl(r,s.changes),await Jh(r.remoteStore)}catch(s){const i=D_(s,"Failed to persist write");n.reject(i)}}async function g1(t,e){const n=ne(t);try{const r=await LF(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?ye(o.va):s.removedDocuments.size>0&&(ye(o.va),o.va=!1))}),await Vl(n,r,e)}catch(r){await xl(r)}}function o0(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const a=o.view.Z_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=ne(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&O_(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function T4(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Oe(Y.comparator);o=o.insert(i,It.newNoDocument(i,te.min()));const a=ue().add(i),u=new Qh(te.min(),new Map,new Oe(me),o,a);await g1(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),M_(r)}else await lm(r.localStore,e,!1).then(()=>cm(r,e,n)).catch(xl)}async function I4(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await MF(n.localStore,e);y1(n,r,null),_1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vl(n,s)}catch(s){await xl(s)}}async function S4(t,e,n){const r=ne(t);try{const s=await function(o,a){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(ye(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);y1(r,e,n),_1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Vl(r,s)}catch(s){await xl(s)}}function _1(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function y1(t,e,n){const r=ne(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function cm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||v1(t,r)})}function v1(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(k_(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),M_(t))}function a0(t,e,n){for(const r of n)r instanceof f1?(t.La.addReference(r.key,e),C4(t,r)):r instanceof p1?(K("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||v1(t,r.key)):Z()}function C4(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(K("SyncEngine","New document in limbo: "+n),t.xa.add(r),M_(t))}function M_(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Y(Ae.fromString(e)),r=t.qa.next();t.Na.set(r,new p4(n)),t.Oa=t.Oa.insert(n,r),s1(t.remoteStore,new Ur(On(w_(n.path)),r,"TargetPurposeLimboResolution",p_.oe))}}async function Vl(t,e,n){const r=ne(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){s.push(c);const f=A_.Wi(u.targetId,c);i.push(f)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,c){const h=ne(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>U.forEach(c,m=>U.forEach(m.$i,_=>h.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>U.forEach(m.Ui,_=>h.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!bl(f))throw f;K("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const _=h.os.get(m),T=_.snapshotVersion,C=_.withLastLimboFreeSnapshotVersion(T);h.os=h.os.insert(m,C)}}}(r.localStore,i))}async function R4(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await e1(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(a=>{a.forEach(u=>{u.reject(new G(j.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vl(n,r.hs)}}function A4(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return ue().add(r.key);{let s=ue();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const a=n.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}function w1(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=g1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=A4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=T4.bind(null,e),e.Ca.d_=c4.bind(null,e.eventManager),e.Ca.$a=h4.bind(null,e.eventManager),e}function k4(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=I4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=S4.bind(null,e),e}class nh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return OF(this.persistence,new bF,e.initialUser,this.serializer)}Ga(e){return new NF(R_.Zr,this.serializer)}Wa(e){return new zF}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nh.provider={build:()=>new nh};class hm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>o0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=R4.bind(null,this.syncEngine),await a4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new u4}()}createDatastore(e){const n=Yh(e.databaseInfo.databaseId),r=function(i){return new HF(i)}(e.databaseInfo);return function(i,o,a,u){return new KF(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new YF(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>o0(this.syncEngine,n,0),function(){return t0.D()?new t0:new BF}())}createSyncEngine(e,n){return function(s,i,o,a,u,c,h){const f=new m4(s,i,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ne(s);K("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ll(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}hm.provider={build:()=>new hm};/**
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
 */class E1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):pr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N4{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Et.UNAUTHENTICATED,this.clientId=wR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{K("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=D_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function If(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await e1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function l0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await P4(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>n0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>n0(e.remoteStore,s)),t._onlineComponents=e}async function P4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await If(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;eo("Error using user provided cache. Falling back to memory cache: "+n),await If(t,new nh)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await If(t,new nh);return t._offlineComponents}async function T1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await l0(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await l0(t,new hm))),t._onlineComponents}function x4(t){return T1(t).then(e=>e.syncEngine)}async function I1(t){const e=await T1(t),n=e.eventManager;return n.onListen=g4.bind(null,e.syncEngine),n.onUnlisten=v4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=w4.bind(null,e.syncEngine),n}function b4(t,e,n={}){const r=new sr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const h=new E1({next:m=>{h.Za(),o.enqueueAndForget(()=>h1(i,f));const _=m.docs.has(a);!_&&m.fromCache?c.reject(new G(j.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&u&&u.source==="server"?c.reject(new G(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new d1(w_(a.path),h,{includeMetadataChanges:!0,_a:!0});return c1(i,f)}(await I1(t),t.asyncQueue,e,n,r)),r.promise}function D4(t,e,n={}){const r=new sr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const h=new E1({next:m=>{h.Za(),o.enqueueAndForget(()=>h1(i,f)),m.fromCache&&u.source==="server"?c.reject(new G(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new d1(a,h,{includeMetadataChanges:!0,_a:!0});return c1(i,f)}(await I1(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function S1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const u0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(t,e,n){if(!n)throw new G(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function O4(t,e,n,r){if(e===!0&&r===!0)throw new G(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function c0(t){if(!Y.isDocumentKey(t))throw new G(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function h0(t){if(Y.isDocumentKey(t))throw new G(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function gr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zh(t);throw new G(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class d0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}O4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=S1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ed{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new d0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new d0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new XV;switch(r.type){case"firstParty":return new tj(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=u0.get(n);r&&(K("ComponentProvider","Removing Datastore"),u0.delete(n),r.terminate())}(this),Promise.resolve()}}function M4(t,e,n,r={}){var s;const i=(t=gr(t,ed))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&eo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Et.MOCK_USER;else{a=Eg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Et(c)}t._authCredentials=new JV(new vR(a,u))}}/**
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
 */class To{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new To(this.firestore,e,this._query)}}class Mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}}class ns extends To{constructor(e,n,r){super(e,n,w_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new Y(e))}withConverter(e){return new ns(this.firestore,e,this._path)}}function L4(t,e,...n){if(t=Se(t),C1("collection","path",e),t instanceof ed){const r=Ae.fromString(e,...n);return h0(r),new ns(t,null,r)}{if(!(t instanceof Mt||t instanceof ns))throw new G(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return h0(r),new ns(t.firestore,null,r)}}function ku(t,e,...n){if(t=Se(t),arguments.length===1&&(e=wR.newId()),C1("doc","path",e),t instanceof ed){const r=Ae.fromString(e,...n);return c0(r),new Mt(t,null,new Y(r))}{if(!(t instanceof Mt||t instanceof ns))throw new G(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return c0(r),new Mt(t.firestore,t instanceof ns?t.converter:null,new Y(r))}}/**
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
 */class f0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new n1(this,"async_queue_retry"),this.Vu=()=>{const r=Tf();r&&K("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Tf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Tf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new sr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!bl(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw pr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=b_.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class jl extends ed{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new f0,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new f0(e),this._firestoreClient=void 0,await e}}}function V4(t,e){const n=typeof t=="object"?t:Ph(),r=typeof t=="string"?t:"(default)",s=El(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=wg("firestore");i&&M4(s,...i)}return s}function L_(t){if(t._terminated)throw new G(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||j4(t),t._firestoreClient}function j4(t){var e,n,r;const s=t._freezeSettings(),i=function(a,u,c,h){return new pj(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,S1(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new N4(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class oo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oo(dt.fromBase64String(e))}catch(n){throw new G(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new oo(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class td{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class nd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */class j_{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F4=/^__.*__$/;class U4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ol(e,this.data,n,this.fieldTransforms)}}class R1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new gs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function A1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class F_{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new F_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return rh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(A1(this.Cu)&&F4.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class z4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Yh(e)}Qu(e,n,r,s=!1){return new F_({Cu:e,methodName:n,qu:r,path:at.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function U_(t){const e=t._freezeSettings(),n=Yh(t._databaseId);return new z4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function B4(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);B_("Data must be an object, but it was:",o,r);const a=k1(r,o);let u,c;if(i.merge)u=new Qt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const m=dm(e,f,n);if(!o.contains(m))throw new G(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);P1(h,m)||h.push(m)}u=new Qt(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new U4(new Ft(a),u,c)}class rd extends nd{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rd}}class z_ extends nd{_toFieldTransform(e){return new Fj(e.path,new cl)}isEqual(e){return e instanceof z_}}function $4(t,e,n,r){const s=t.Qu(1,e,n);B_("Data must be an object, but it was:",s,r);const i=[],o=Ft.empty();Zs(r,(u,c)=>{const h=$_(e,u,n);c=Se(c);const f=s.Nu(h);if(c instanceof rd)i.push(h);else{const m=Fl(c,f);m!=null&&(i.push(h),o.set(h,m))}});const a=new Qt(i);return new R1(o,a,s.fieldTransforms)}function W4(t,e,n,r,s,i){const o=t.Qu(1,e,n),a=[dm(e,r,n)],u=[s];if(i.length%2!=0)throw new G(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(dm(e,i[m])),u.push(i[m+1]);const c=[],h=Ft.empty();for(let m=a.length-1;m>=0;--m)if(!P1(c,a[m])){const _=a[m];let T=u[m];T=Se(T);const C=o.Nu(_);if(T instanceof rd)c.push(_);else{const N=Fl(T,C);N!=null&&(c.push(_),h.set(_,N))}}const f=new Qt(c);return new R1(h,f,o.fieldTransforms)}function H4(t,e,n,r=!1){return Fl(n,t.Qu(r?4:3,e))}function Fl(t,e){if(N1(t=Se(t)))return B_("Unsupported field value:",e,t),k1(t,e);if(t instanceof nd)return function(r,s){if(!A1(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let u=Fl(a,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Lj(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Xe.fromDate(r);return{timestampValue:eh(s.serializer,i)}}if(r instanceof Xe){const i=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:eh(s.serializer,i)}}if(r instanceof V_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof oo)return{bytesValue:GR(s.serializer,r._byteString)};if(r instanceof Mt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:S_(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof j_)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return E_(a.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Zh(r)}`)}(t,e)}function k1(t,e){const n={};return ER(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zs(t,(r,s)=>{const i=Fl(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function N1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof V_||t instanceof oo||t instanceof Mt||t instanceof nd||t instanceof j_)}function B_(t,e,n){if(!N1(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Zh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function dm(t,e,n){if((e=Se(e))instanceof td)return e._internalPath;if(typeof e=="string")return $_(t,e);throw rh("Field path arguments must be of type string or ",t,!1,void 0,n)}const q4=new RegExp("[~\\*/\\[\\]]");function $_(t,e,n){if(e.search(q4)>=0)throw rh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new td(...e.split("."))._internalPath}catch{throw rh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rh(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new G(j.INVALID_ARGUMENT,a+t+u)}function P1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class x1{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new G4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(W_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class G4 extends x1{data(){return super.data()}}function W_(t,e){return typeof e=="string"?$_(t,e):e instanceof td?e._internalPath:e._delegate._internalPath}/**
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
 */function K4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class H_{}class Q4 extends H_{}function Y4(t,e,...n){let r=[];e instanceof H_&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof q_).length,a=i.filter(u=>u instanceof sd).length;if(o>1||o>0&&a>0)throw new G(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class sd extends Q4{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new sd(e,n,r)}_apply(e){const n=this._parse(e);return b1(e._query,n),new To(e.firestore,e.converter,nm(e._query,n))}_parse(e){const n=U_(e.firestore);return function(i,o,a,u,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new G(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){m0(f,h);const _=[];for(const T of f)_.push(p0(u,i,T));m={arrayValue:{values:_}}}else m=p0(u,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||m0(f,h),m=H4(a,o,f,h==="in"||h==="not-in");return qe.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function X4(t,e,n){const r=e,s=W_("where",t);return sd._create(s,r,n)}class q_ extends H_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new q_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)b1(o,u),o=nm(o,u)}(e._query,n),new To(e.firestore,e.converter,nm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function p0(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new G(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!PR(e)&&n.indexOf("/")!==-1)throw new G(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ae.fromString(n));if(!Y.isDocumentKey(r))throw new G(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return LE(t,new Y(r))}if(n instanceof Mt)return LE(t,n._key);throw new G(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zh(n)}.`)}function m0(t,e){if(!Array.isArray(t)||t.length===0)throw new G(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function b1(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class J4{convertValue(e,n="none"){switch(qs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Zs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ze(o.doubleValue));return new j_(i)}convertGeoPoint(e){return new V_(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=g_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(al(e));default:return null}}convertTimestamp(e){const n=cs(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);ye(ZR(r));const s=new ll(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||pr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Z4(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class aa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class D1 extends x1{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(W_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Zu extends D1{data(e={}){return super.data(e)}}class eU{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new aa(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Zu(this._firestore,this._userDataWriter,r.key,r,new aa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new Zu(s._firestore,s._userDataWriter,a.doc.key,a.doc,new aa(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new Zu(s._firestore,s._userDataWriter,a.doc.key,a.doc,new aa(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:tU(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
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
 */function g0(t){t=gr(t,Mt);const e=gr(t.firestore,jl);return b4(L_(e),t._key).then(n=>sU(e,t,n))}class O1 extends J4{constructor(e){super(),this.firestore=e}convertBytes(e){return new oo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,n)}}function nU(t){t=gr(t,To);const e=gr(t.firestore,jl),n=L_(e),r=new O1(e);return K4(t._query),D4(n,t._query).then(s=>new eU(e,r,t,s))}function rU(t,e,n){t=gr(t,Mt);const r=gr(t.firestore,jl),s=Z4(t.converter,e);return M1(r,[B4(U_(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Mn.none())])}function Sf(t,e,n,...r){t=gr(t,Mt);const s=gr(t.firestore,jl),i=U_(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof td?W4(i,"updateDoc",t._key,e,n,r):$4(i,"updateDoc",t._key,e),M1(s,[o.toMutation(t._key,Mn.exists(!0))])}function M1(t,e){return function(r,s){const i=new sr;return r.asyncQueue.enqueueAndForget(async()=>E4(await x4(r),s,i)),i.promise}(L_(t),e)}function sU(t,e,n){const r=n.docs.get(e._key),s=new O1(t);return new D1(t,s,e._key,r,new aa(n.hasPendingWrites,n.fromCache),e.converter)}function Yo(){return new z_("serverTimestamp")}(function(e,n=!0){(function(s){vo=s})(ms),is(new ur("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new jl(new ZV(r.getProvider("auth-internal")),new rj(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ll(c.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),an(xE,"4.7.3",e),an(xE,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="firebasestorage.googleapis.com",V1="storageBucket",iU=2*60*1e3,oU=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Fn{constructor(e,n,r=0){super(Cf(e),`Firebase Storage: ${n} (${Cf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Cf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function Cf(t){return"storage/"+t}function G_(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue(Fe.UNKNOWN,t)}function aU(t){return new Ue(Fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function lU(t){return new Ue(Fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function uU(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(Fe.UNAUTHENTICATED,t)}function cU(){return new Ue(Fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function hU(t){return new Ue(Fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function dU(){return new Ue(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function fU(){return new Ue(Fe.CANCELED,"User canceled the upload/download.")}function pU(t){return new Ue(Fe.INVALID_URL,"Invalid URL '"+t+"'.")}function mU(t){return new Ue(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function gU(){return new Ue(Fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+V1+"' property when initializing the app?")}function _U(){return new Ue(Fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function yU(){return new Ue(Fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function vU(t){return new Ue(Fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function fm(t){return new Ue(Fe.INVALID_ARGUMENT,t)}function j1(){return new Ue(Fe.APP_DELETED,"The Firebase app was deleted.")}function wU(t){return new Ue(Fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Aa(t,e){return new Ue(Fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Xo(t){throw new Ue(Fe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Yt.makeFromUrl(e,n)}catch{return new Yt(e,"")}if(r.path==="")return r;throw mU(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${h}/b/${s}/o${m}`,"i"),T={bucket:1,path:3},C=n===L1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",I=new RegExp(`^https?://${C}/${s}/${N}`,"i"),R=[{regex:a,indices:u,postModify:i},{regex:_,indices:T,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<R.length;b++){const F=R[b],M=F.regex.exec(e);if(M){const E=M[F.indices.bucket];let v=M[F.indices.path];v||(v=""),r=new Yt(E,v),F.postModify(r);break}}if(r==null)throw pU(e);return r}}class EU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TU(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function u(){return a===2}let c=!1;function h(...N){c||(c=!0,e.apply(null,N))}function f(N){s=setTimeout(()=>{s=null,t(_,u())},N)}function m(){i&&clearTimeout(i)}function _(N,...I){if(c){m();return}if(N){m(),h.call(null,N,...I);return}if(u()||o){m(),h.call(null,N,...I);return}r<64&&(r*=2);let R;a===1?(a=2,R=0):R=(r+Math.random())*1e3,f(R)}let T=!1;function C(N){T||(T=!0,m(),!c&&(s!==null?(N||(a=2),clearTimeout(s),f(0)):N||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,C(!0)},n),C}function IU(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SU(t){return t!==void 0}function CU(t){return typeof t=="object"&&!Array.isArray(t)}function K_(t){return typeof t=="string"||t instanceof String}function _0(t){return Q_()&&t instanceof Blob}function Q_(){return typeof Blob<"u"}function y0(t,e,n,r){if(r<e)throw fm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw fm(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function F1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Os;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Os||(Os={}));/**
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
 */function RU(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AU{constructor(e,n,r,s,i,o,a,u,c,h,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,T)=>{this.resolve_=_,this.reject_=T,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Nu(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Os.NO_ERROR,u=i.getStatus();if(!a||RU(u,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Os.ABORT;r(!1,new Nu(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Nu(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());SU(u)?i(u):i()}catch(u){o(u)}else if(a!==null){const u=G_();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(s.canceled){const u=this.appDelete_?j1():fU();o(u)}else{const u=dU();o(u)}};this.canceled_?n(!1,new Nu(!1,null,!0)):this.backoffId_=TU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&IU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Nu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function kU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function NU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function PU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function xU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function bU(t,e,n,r,s,i,o=!0){const a=F1(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return PU(c,e),kU(c,n),NU(c,i),xU(c,r),new AU(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DU(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function OU(...t){const e=DU();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Q_())return new Blob(t);throw new Ue(Fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function MU(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function LU(t){if(typeof atob>"u")throw vU("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Rf{constructor(e,n){this.data=e,this.contentType=n||null}}function VU(t,e){switch(t){case kn.RAW:return new Rf(U1(e));case kn.BASE64:case kn.BASE64URL:return new Rf(z1(t,e));case kn.DATA_URL:return new Rf(FU(e),UU(e))}throw G_()}function U1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function jU(t){let e;try{e=decodeURIComponent(t)}catch{throw Aa(kn.DATA_URL,"Malformed data URL.")}return U1(e)}function z1(t,e){switch(t){case kn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Aa(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case kn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Aa(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=LU(e)}catch(s){throw s.message.includes("polyfill")?s:Aa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class B1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Aa(kn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=zU(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function FU(t){const e=new B1(t);return e.base64?z1(kn.BASE64,e.rest):jU(e.rest)}function UU(t){return new B1(t).contentType}function zU(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n){let r=0,s="";_0(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(_0(this.data_)){const r=this.data_,s=MU(r,e,n);return s===null?null:new Or(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Or(r,!0)}}static getBlob(...e){if(Q_()){const n=e.map(r=>r instanceof Or?r.data_:r);return new Or(OU.apply(null,n))}else{const n=e.map(o=>K_(o)?VU(kn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Or(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t){let e;try{e=JSON.parse(t)}catch{return null}return CU(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function $U(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function W1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WU(t,e){return e}class Pt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||WU}}let Pu=null;function HU(t){return!K_(t)||t.length<2?t:W1(t)}function H1(){if(Pu)return Pu;const t=[];t.push(new Pt("bucket")),t.push(new Pt("generation")),t.push(new Pt("metageneration")),t.push(new Pt("name","fullPath",!0));function e(i,o){return HU(o)}const n=new Pt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Pt("size");return s.xform=r,t.push(s),t.push(new Pt("timeCreated")),t.push(new Pt("updated")),t.push(new Pt("md5Hash",null,!0)),t.push(new Pt("cacheControl",null,!0)),t.push(new Pt("contentDisposition",null,!0)),t.push(new Pt("contentEncoding",null,!0)),t.push(new Pt("contentLanguage",null,!0)),t.push(new Pt("contentType",null,!0)),t.push(new Pt("metadata","customMetadata",!0)),Pu=t,Pu}function qU(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Yt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function GU(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return qU(r,t),r}function q1(t,e,n){const r=$1(e);return r===null?null:GU(t,r,n)}function KU(t,e,n,r){const s=$1(e);if(s===null||!K_(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const h=t.bucket,f=t.fullPath,m="/b/"+o(h)+"/o/"+o(f),_=Y_(m,n,r),T=F1({alt:"media",token:c});return _+T})[0]}function QU(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class G1{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(t){if(!t)throw G_()}function YU(t,e){function n(r,s){const i=q1(t,s,e);return K1(i!==null),i}return n}function XU(t,e){function n(r,s){const i=q1(t,s,e);return K1(i!==null),KU(i,s,t.host,t._protocol)}return n}function Q1(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=cU():s=uU():n.getStatus()===402?s=lU(t.bucket):n.getStatus()===403?s=hU(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function JU(t){const e=Q1(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=aU(t.path)),i.serverResponse=s.serverResponse,i}return n}function ZU(t,e,n){const r=e.fullServerUrl(),s=Y_(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new G1(s,i,XU(t,n),o);return a.errorHandler=JU(e),a}function e3(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function t3(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=e3(null,e)),r}function n3(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let R="";for(let b=0;b<2;b++)R=R+Math.random().toString().slice(2);return R}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=t3(e,r,s),h=QU(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",_=Or.getBlob(f,r,m);if(_===null)throw _U();const T={name:c.fullPath},C=Y_(i,t.host,t._protocol),N="POST",I=t.maxUploadRetryTime,y=new G1(C,N,YU(t,n),I);return y.urlParams=T,y.headers=o,y.body=_.uploadData(),y.errorHandler=Q1(e),y}class r3{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Os.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Os.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Os.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Xo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class s3 extends r3{initXhr(){this.xhr_.responseType="text"}}function Y1(){return new s3}/**
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
 */class Gs{constructor(e,n){this._service=e,n instanceof Yt?this._location=n:this._location=Yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Gs(e,n)}get root(){const e=new Yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return W1(this._location.path)}get storage(){return this._service}get parent(){const e=BU(this._location.path);if(e===null)return null;const n=new Yt(this._location.bucket,e);return new Gs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw wU(e)}}function i3(t,e,n){t._throwIfRoot("uploadBytes");const r=n3(t.storage,t._location,H1(),new Or(e,!0),n);return t.storage.makeRequestWithTokens(r,Y1).then(s=>({metadata:s,ref:t}))}function o3(t){t._throwIfRoot("getDownloadURL");const e=ZU(t.storage,t._location,H1());return t.storage.makeRequestWithTokens(e,Y1).then(n=>{if(n===null)throw yU();return n})}function a3(t,e){const n=$U(t._location.path,e),r=new Yt(t._location.bucket,n);return new Gs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l3(t){return/^[A-Za-z]+:\/\//.test(t)}function u3(t,e){return new Gs(t,e)}function X1(t,e){if(t instanceof X_){const n=t;if(n._bucket==null)throw gU();const r=new Gs(n,n._bucket);return e!=null?X1(r,e):r}else return e!==void 0?a3(t,e):t}function c3(t,e){if(e&&l3(e)){if(t instanceof X_)return u3(t,e);throw fm("To use ref(service, url), the first argument must be a Storage instance.")}else return X1(t,e)}function v0(t,e){const n=e==null?void 0:e[V1];return n==null?null:Yt.makeFromBucketSpec(n,t)}function h3(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Eg(s,t.app.options.projectId))}class X_{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=L1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=iU,this._maxUploadRetryTime=oU,this._requests=new Set,s!=null?this._bucket=Yt.makeFromBucketSpec(s,this._host):this._bucket=v0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yt.makeFromBucketSpec(this._url,e):this._bucket=v0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){y0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){y0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Gs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new EU(j1());{const o=bU(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const w0="@firebase/storage",E0="0.13.2";/**
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
 */const J1="storage";function d3(t,e,n){return t=Se(t),i3(t,e,n)}function f3(t){return t=Se(t),o3(t)}function p3(t,e){return t=Se(t),c3(t,e)}function m3(t=Ph(),e){t=Se(t);const r=El(t,J1).getImmediate({identifier:e}),s=wg("storage");return s&&g3(r,...s),r}function g3(t,e,n,r={}){h3(t,e,n,r)}function _3(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new X_(n,r,s,e,ms)}function y3(){is(new ur(J1,_3,"PUBLIC").setMultipleInstances(!0)),an(w0,E0,""),an(w0,E0,"esm2017")}y3();const v3={apiKey:"AIzaSyA99aKVRIdNJFVA6gsDVPHUl1pIcthwJAs",authDomain:"gen-lang-client-0324052801.firebaseapp.com",projectId:"gen-lang-client-0324052801",storageBucket:"gen-lang-client-0324052801.firebasestorage.app",messagingSenderId:"566230423463",appId:"1:566230423463:web:9123cf85f3f342c4174882",databaseURL:"https://gen-lang-client-0324052801-default-rtdb.firebaseio.com"},id=yS(v3);QV(id);new Qn;const Jo=V4(id),w3=m3(id),wt=KM(id),qn={createWaitingRoom:async(t,e,n)=>{const r=E3(),s=vt(wt,`waitingRooms/${r}`);return await Kn(s,{id:r,name:t||"Battle Room",hostId:e,hostUsername:n,status:"waiting",createdAt:Si(),maxPlayers:2,players:{[e]:{id:e,username:n,role:"artist",isHost:!0,joinedAt:Si()}}}),r},joinWaitingRoom:async(t,e,n,r="artist")=>{const s=vt(wt,`waitingRooms/${t}`),i=await Ko(s);if(!i.exists())throw new Error("Room not found");const o=i.val(),a=o.players||{},u=Object.keys(a).length;if(u>=o.maxPlayers)throw new Error("Room is full");const c=vt(wt,`waitingRooms/${t}/players/${e}`);return await Kn(c,{id:e,username:n,role:r,isHost:!1,joinedAt:Si()}),u+1>=o.maxPlayers&&await _f(s,{status:"ready"}),o},leaveWaitingRoom:async(t,e)=>{const n=vt(wt,`waitingRooms/${t}/players/${e}`);await Kn(n,null);const r=vt(wt,`waitingRooms/${t}`),s=await Ko(r);if(s.exists()){const i=s.val(),o=i.players||{};if(Object.keys(o).length===0)await Kn(r,null);else if(i.hostId===e){const u=Object.keys(o)[0];await _f(r,{hostId:u})}}},getWaitingRoom:async t=>{const e=vt(wt,`waitingRooms/${t}`),n=await Ko(e);return n.exists()?n.val():null},subscribeToWaitingRoom:(t,e)=>{const n=vt(wt,`waitingRooms/${t}`);return Hp(n,r=>{r.exists()?e(r.val()):e(null)}),()=>qp(n)},subscribeToWaitingRooms:t=>{const e=vt(wt,"waitingRooms");return Hp(e,n=>{const r=[];n.exists()&&n.forEach(s=>{const i=s.val();i.status==="waiting"&&r.push(i)}),t(r)}),()=>qp(e)},startBattle:async t=>{const e=vt(wt,`waitingRooms/${t}`),n=await Ko(e);if(!n.exists())throw new Error("Room not found");const r=n.val(),s=r.players||{};if(Object.keys(s).length<2)throw new Error("Need at least 2 players to start");const o=`battle_${t}`,a=vt(wt,`battles/${o}`);return await Kn(a,{id:o,roomId:t,name:r.name,status:"active",currentPhase:"submission",round:1,timeRemaining:120,createdAt:Si(),players:s,votes:{},tracks:{}}),await _f(e,{status:"started",battleId:o}),o},findMatch:async(t,e)=>{const n=vt(wt,"waitingRooms"),r=await Ko(n);if(r.exists()){const s=r.val();for(const[i,o]of Object.entries(s))if(o.status==="waiting"&&o.hostId!==t){const a=o.players||{};if(Object.keys(a).length<o.maxPlayers)return await qn.joinWaitingRoom(i,t,e),i}}return null}};function E3(){const t="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let n=0;n<6;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}function T3(){const t=jn(),{user:e,userProfile:n}=wr(),{setUserRole:r,setIsHost:s,setCurrentBattle:i}=pg(),[o,a]=O.useState(""),[u,c]=O.useState(!1),[h,f]=O.useState(!1),[m,_]=O.useState([]),[T,C]=O.useState("");O.useEffect(()=>{const M=qn.subscribeToWaitingRooms(E=>{console.log("Active rooms from Firebase:",E),_(E)});return()=>M()},[]);const N=async()=>{var M;if(!e){alert("Please sign in first");return}try{const E=(n==null?void 0:n.displayName)||e.displayName||((M=e.email)==null?void 0:M.split("@")[0])||"Anonymous",v=await qn.createWaitingRoom("Random Artists",e.uid,E);r("artist"),s(!0),t(`/waiting/${v}`)}catch(E){console.error("Match error:",E),alert("Error creating room: "+E.message)}},I=async M=>{var v;if(!e){alert("Please sign in first");return}const E=(n==null?void 0:n.displayName)||e.displayName||((v=e.email)==null?void 0:v.split("@")[0])||"Anonymous";if(M==="artist"){const S=await qn.createWaitingRoom(`${E}'s Battle`,e.uid,E);r(M),s(!0),t(`/waiting/${S}`)}else if(M==="judge"){const S=await qn.createWaitingRoom(`${E}'s Room`,e.uid,E);r(M),s(!0),t(`/waiting/${S}`)}else if(M==="spectator"){const S=await qn.createWaitingRoom(`${E}'s Room`,e.uid,E);r(M),s(!0),t(`/waiting/${S}`)}},y=async M=>{var E;if(!e){alert("Please sign in first");return}try{const v=(n==null?void 0:n.displayName)||e.displayName||((E=e.email)==null?void 0:E.split("@")[0])||"Anonymous";await qn.joinWaitingRoom(M.id,e.uid,v,"spectator"),r("spectator"),s(!1),t(`/waiting/${M.id}`)}catch(v){console.error("Join error:",v),alert(v.message||"Failed to join room")}},R=async()=>{var M;if(!o.trim()||!e){alert("Please sign in first");return}try{const E=(n==null?void 0:n.displayName)||e.displayName||((M=e.email)==null?void 0:M.split("@")[0])||"Anonymous";await qn.joinWaitingRoom(o.toUpperCase(),e.uid,E),r("spectator"),s(!1),t(`/waiting/${o.toUpperCase()}`)}catch(E){console.error("Join error:",E),alert(E.message||"Room not found")}},b=M=>{navigator.clipboard.writeText(M),f(!0),setTimeout(()=>f(!1),2e3)},F=m.filter(M=>{var E,v;return((E=M.name)==null?void 0:E.toLowerCase().includes(T.toLowerCase()))||((v=M.id)==null?void 0:v.toLowerCase().includes(T.toLowerCase()))});return p.jsx("div",{className:"lobby",children:p.jsxs("div",{className:"lobby-container",children:[p.jsxs("header",{className:"lobby-header",children:[p.jsx("h1",{className:"page-title",children:"Choose Your Path"}),p.jsx("p",{className:"lobby-subtitle",children:"Pick your role and enter the arena"})]}),p.jsxs("div",{className:"role-grid",children:[p.jsxs("button",{className:"role-card role-artist",onClick:N,children:[p.jsx("div",{className:"role-icon",children:p.jsx(rb,{size:32})}),p.jsxs("div",{className:"role-info",children:[p.jsx("h3",{className:"role-title",children:"Random Artists"}),p.jsx("p",{className:"role-desc",children:"Get matched with other artists instantly"})]}),p.jsx("span",{className:"role-badge",children:"Play"})]}),p.jsxs("button",{className:"role-card role-judge",onClick:()=>I("judge"),children:[p.jsx("div",{className:"role-icon",children:p.jsx(yg,{size:32})}),p.jsxs("div",{className:"role-info",children:[p.jsx("h3",{className:"role-title",children:"Random Judge"}),p.jsx("p",{className:"role-desc",children:"Evaluate and vote on performances"})]}),p.jsx("span",{className:"role-badge",children:"Judge"})]}),p.jsxs("button",{className:"role-card role-spectator",onClick:()=>I("spectator"),children:[p.jsx("div",{className:"role-icon",children:p.jsx(Xr,{size:32})}),p.jsxs("div",{className:"role-info",children:[p.jsx("h3",{className:"role-title",children:"Random Spectator"}),p.jsx("p",{className:"role-desc",children:"Watch battles and vote for favorites"})]}),p.jsx("span",{className:"role-badge",children:"Watch"})]}),p.jsxs("button",{className:"role-card role-create",onClick:()=>I("artist"),children:[p.jsx("div",{className:"role-icon",children:p.jsx(sS,{size:32})}),p.jsxs("div",{className:"role-info",children:[p.jsx("h3",{className:"role-title",children:"Create Battle"}),p.jsx("p",{className:"role-desc",children:"Host your own private battle room"})]}),p.jsx("span",{className:"role-badge",children:"Host"})]})]}),p.jsxs("div",{className:"join-room",children:[p.jsx("h2",{className:"section-title",children:"Join with Code"}),p.jsxs("div",{className:"join-form",children:[p.jsx("input",{type:"text",className:"input room-input",placeholder:"Enter room code",value:o,onChange:M=>a(M.target.value.toUpperCase()),maxLength:6}),p.jsx("button",{className:"btn btn-primary",onClick:()=>o.length>=4&&R(),disabled:o.length<4,children:"Join Room"})]})]}),p.jsxs("section",{className:"active-rooms",children:[p.jsxs("div",{className:"section-header",children:[p.jsx("h2",{className:"section-title",children:"Active Battles"}),p.jsxs("div",{className:"search-box",children:[p.jsx(mg,{size:16}),p.jsx("input",{type:"text",placeholder:"Search rooms...",value:T,onChange:M=>C(M.target.value)})]})]}),p.jsx("div",{className:"rooms-list",children:F.length===0?p.jsx("p",{className:"no-rooms",children:"No active battles. Create one or join with a code!"}):F.map(M=>{const E=M.players?Object.keys(M.players).length:0;return p.jsxs("button",{className:"room-card",onClick:()=>y(M),children:[p.jsxs("div",{className:"room-info",children:[p.jsx("h3",{className:"room-name",children:M.name}),p.jsxs("div",{className:"room-meta",children:[p.jsxs("span",{className:"room-players",children:[p.jsx(Xr,{size:14}),E," / ",M.maxPlayers||2," players"]}),p.jsx("span",{className:`room-status ${M.status}`,children:M.status==="waiting"?"Waiting":"Ready"})]})]}),p.jsxs("div",{className:"room-code",children:[p.jsx("span",{children:M.id}),p.jsx("button",{className:"copy-btn",onClick:v=>{v.stopPropagation(),b(M.id)},children:h?p.jsx(Ch,{size:14}):p.jsx(tS,{size:14})})]})]},M.id)})})]})]})})}const Nn={sendMessage:async(t,e,n,r,s,i=!1,o=null)=>{try{const a=vt(wt,`chats/${t}/${e}/messages`),u=dE(a);await Kn(u,{id:u.key,userId:n,username:r,message:s||"",isGif:i||!1,gifUrl:o||null,timestamp:Si(),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),console.log("Message sent successfully")}catch(a){console.error("Error sending message:",a)}},subscribeToMessages:(t,e,n)=>{try{const r=vt(wt,`chats/${t}/${e}/messages`);return Hp(r,s=>{const i=[];s.exists()&&s.forEach(o=>{i.push(o.val())}),n(i)},s=>{console.error("Error subscribing to messages:",s)}),()=>qp(r)}catch(r){return console.error("Error setting up subscription:",r),()=>{}}},createRoom:async(t,e)=>{const n=vt(wt,"chats/rooms"),r=dE(n);return await Kn(r,{id:r.key,name:t,createdBy:e,createdAt:Si(),members:{[e]:!0}}),r.key},joinRoom:async(t,e)=>{const n=vt(wt,`chats/rooms/${t}/members/${e}`);await Kn(n,!0)},leaveRoom:async(t,e)=>{const n=vt(wt,`chats/rooms/${t}/members/${e}`);await Kn(n,null)}},I3="qYl52xlnZyVb0oLhm9Tz8KlUn3wOlUsn";function J_({onSelect:t,onClose:e}){const[n,r]=O.useState(""),[s,i]=O.useState([]),[o,a]=O.useState(!0),[u,c]=O.useState(!1);O.useEffect(()=>{h("trending")},[]);const h=async(_,T="")=>{a(!0);try{let N=`https://api.giphy.com/v1/gifs/${_==="trending"?"trending":"search"}?api_key=${I3}&limit=20&rating=pg-13`;T&&(N+=`&q=${encodeURIComponent(T)}`);const y=await(await fetch(N)).json();if(y.data&&Array.isArray(y.data)){const R=y.data.map(b=>{var F,M,E,v,S,k,P,x;return{id:b.id,url:((M=(F=b.images)==null?void 0:F.fixed_width)==null?void 0:M.url)||((v=(E=b.images)==null?void 0:E.original)==null?void 0:v.url),preview:((k=(S=b.images)==null?void 0:S.fixed_width)==null?void 0:k.url)||((x=(P=b.images)==null?void 0:P.original)==null?void 0:x.url)}}).filter(b=>b.url);i(R)}}catch(C){console.error("Error fetching GIFs:",C),i([])}finally{a(!1)}},f=_=>{r(_),_.length>1?h("search",_):_.length===0&&h("trending")},m=_=>{t(_),e()};return p.jsxs("div",{className:"gif-picker",children:[p.jsxs("div",{className:"gif-picker-header",children:[p.jsx("h3",{children:"Choose a GIF"}),p.jsx("button",{className:"gif-close",onClick:e,children:p.jsx(yl,{size:18})})]}),p.jsxs("div",{className:"gif-search",children:[p.jsx(mg,{size:18,className:"search-icon"}),p.jsx("input",{type:"text",inputMode:u?"search":"text",placeholder:u?"Search GIFs...":"Tap to search",value:n,onChange:_=>f(_.target.value),onFocus:()=>c(!0),onBlur:()=>c(!1),className:"gif-search-input"})]}),p.jsxs("div",{className:"gif-section",children:[p.jsxs("div",{className:"gif-section-title",children:[p.jsx(iS,{size:14}),n?"Results":"Trending"]}),o?p.jsxs("div",{className:"gif-loading",children:[p.jsx(Yx,{size:32,className:"spinner"}),p.jsx("span",{children:"Loading..."})]}):p.jsx("div",{className:"gif-grid",children:s.map(_=>p.jsx("button",{className:"gif-item",onClick:()=>m(_.url),children:p.jsx("img",{src:_.preview,alt:"GIF",loading:"lazy"})},_.id))})]}),p.jsx("div",{className:"gif-picker-footer",children:p.jsx("span",{children:"GIPHY"})})]})}const S3={id:"1",phase:"performance",round:1,currentArtist:1,timeRemaining:180,artist1:{id:"1",name:"MC_Flow",votes:2,isPlaying:!0},artist2:{id:"2",name:"LyricQueen",votes:1,isPlaying:!1}};function C3(){const{battleId:t}=dg(),e=jn(),{user:n,userProfile:r}=wr(),{userRole:s}=pg(),{isGifPickerOpen:i,toggleGifPicker:o,closeGifPicker:a}=Sh(),[u,c]=O.useState(S3),[h,f]=O.useState([{id:1,userId:"1",username:"MC_Flow",message:"Let's gooo! 🔥",time:"2:35 PM",isGif:!1},{id:2,userId:"3",username:"Spectator_1",message:"This is insane!",time:"2:35 PM",isGif:!1},{id:3,userId:"4",username:"Judge_Maya",message:"That flow was clean",time:"2:36 PM",isGif:!1},{id:4,userId:"5",username:"FanBoy",message:"",time:"2:36 PM",isGif:!0,gifUrl:"https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"}]),[m,_]=O.useState(""),[T,C]=O.useState(!1),[N,I]=O.useState(!1),[y,R]=O.useState(!0),[b,F]=O.useState(80),M=O.useRef(null),E=O.useRef(null);O.useEffect(()=>{E.current&&(E.current.scrollTop=E.current.scrollHeight)},[h]),O.useEffect(()=>{if(!t)return;const A=Nn.subscribeToMessages("arenas",t,fe=>{fe.length>0&&f(fe)});return()=>A()},[t]),O.useEffect(()=>{const A=setInterval(()=>{c(fe=>fe.timeRemaining>0?{...fe,timeRemaining:fe.timeRemaining-1}:fe)},1e3);return()=>clearInterval(A)},[]);const v=A=>{const fe=Math.floor(A/60),$e=A%60;return`${fe}:${$e.toString().padStart(2,"0")}`},S=async A=>{if(A.preventDefault(),!m.trim()||!t)return;const fe=m;_("");const $e=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",Rt={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:$e,message:fe,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!1};f(nt=>[...nt,Rt]);try{await Nn.sendMessage("arenas",t,(n==null?void 0:n.uid)||"me",$e,fe)}catch(nt){console.error("Failed to send message:",nt)}},k=async A=>{if(!t)return;const fe=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",$e={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:fe,message:"",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!0,gifUrl:A};f(Rt=>[...Rt,$e]);try{await Nn.sendMessage("arenas",t,(n==null?void 0:n.uid)||"me",fe,"",!0,A)}catch(Rt){console.error("Failed to send GIF:",Rt)}_("")},P=A=>{switch(A){case"waiting":return"Waiting";case"preparing":return"Preparing";case"submission":return"Submit Track";case"performance":return"Performance";case"voting":return"Voting";case"results":return"Results";default:return A}};u.currentArtist===1?u.artist1:u.artist2;const x=u.artist1.votes+u.artist2.votes;return p.jsx("div",{className:"arena",children:p.jsxs("div",{className:"arena-container",children:[p.jsxs("header",{className:"arena-header",children:[p.jsxs("div",{className:"battle-info",children:[p.jsx("span",{className:"battle-phase",children:P(u.phase)}),p.jsx("span",{className:"battle-divider",children:"•"}),p.jsxs("span",{className:"battle-round",children:["Round ",u.round]})]}),p.jsxs("div",{className:`timer ${u.timeRemaining<=30?"urgent":""}`,children:[p.jsx(sb,{size:18}),p.jsx("span",{children:v(u.timeRemaining)})]})]}),p.jsxs("div",{className:"arena-content",children:[p.jsxs("section",{className:"arena-main",children:[p.jsxs("div",{className:"video-grid",children:[p.jsxs("div",{className:`video-box artist ${u.currentArtist===1?"active":""}`,children:[p.jsx("div",{className:"video-content",children:p.jsx("div",{className:"avatar-large",children:p.jsx(Yr,{size:40})})}),p.jsxs("div",{className:"video-info",children:[p.jsx("span",{className:"artist-name",children:u.artist1.name}),p.jsxs("div",{className:"artist-stats",children:[p.jsxs("span",{className:"vote-count",children:[p.jsx(vw,{size:14}),u.artist1.votes]}),u.currentArtist===1&&y&&p.jsxs("span",{className:"playing-indicator",children:[p.jsx(rf,{size:14}),"Playing"]})]})]})]}),p.jsxs("div",{className:`video-box artist ${u.currentArtist===2?"active":""}`,children:[p.jsx("div",{className:"video-content",children:p.jsx("div",{className:"avatar-large",children:p.jsx(Yr,{size:40})})}),p.jsxs("div",{className:"video-info",children:[p.jsx("span",{className:"artist-name",children:u.artist2.name}),p.jsxs("div",{className:"artist-stats",children:[p.jsxs("span",{className:"vote-count",children:[p.jsx(vw,{size:14}),u.artist2.votes]}),u.currentArtist===2&&y&&p.jsxs("span",{className:"playing-indicator",children:[p.jsx(rf,{size:14}),"Playing"]})]})]})]}),p.jsxs("div",{className:"video-box judge",children:[p.jsx("div",{className:"video-content",children:p.jsx("div",{className:"avatar-large judge",children:p.jsx(Rc,{size:32})})}),p.jsx("div",{className:"video-info",children:p.jsx("span",{className:"artist-name",children:"Judge_Dave"})})]}),p.jsxs("div",{className:"video-box judge",children:[p.jsx("div",{className:"video-content",children:p.jsx("div",{className:"avatar-large judge",children:p.jsx(Rc,{size:32})})}),p.jsx("div",{className:"video-info",children:p.jsx("span",{className:"artist-name",children:"Judge_Maya"})})]})]}),p.jsxs("div",{className:"arena-controls",children:[p.jsxs("div",{className:"playback-controls",children:[p.jsx("button",{className:`control-btn large ${y?"active":""}`,onClick:()=>R(!y),children:y?p.jsx(Zx,{size:24}):p.jsx(tb,{size:24})}),p.jsxs("div",{className:"volume-control",children:[p.jsx(rf,{size:18}),p.jsx("input",{type:"range",min:"0",max:"100",value:b,onChange:A=>F(A.target.value),className:"volume-slider"})]})]}),p.jsxs("div",{className:"media-controls",children:[p.jsx("button",{className:`control-btn ${T?"active":"off"}`,onClick:()=>C(!T),children:T?p.jsx(Yr,{size:20}):p.jsx(Sp,{size:20})}),p.jsx("button",{className:`control-btn ${N?"active":"off"}`,onClick:()=>I(!N),children:N?p.jsx(oS,{size:20}):p.jsx(Cp,{size:20})}),p.jsx("button",{className:"control-btn leave",onClick:()=>e("/lobby"),children:p.jsx(yl,{size:20})})]})]}),p.jsxs("div",{className:"vote-bar",children:[p.jsx("div",{className:"vote-track",children:p.jsx("div",{className:"vote-progress",style:{width:`${u.artist1.votes/Math.max(x,1)*100}%`}})}),p.jsxs("div",{className:"vote-labels",children:[p.jsx("span",{children:u.artist1.name}),p.jsx("span",{className:"vs",children:"VS"}),p.jsx("span",{children:u.artist2.name})]})]})]}),p.jsxs("aside",{className:"chat-section arena-chat",children:[p.jsxs("div",{className:"chat-header",children:[p.jsx("h3",{children:"Live Crowd"}),p.jsxs("span",{className:"viewer-count",children:[p.jsx(Xr,{size:14}),"24 watching"]})]}),p.jsxs("div",{className:"chat-messages",ref:E,children:[h.map(A=>p.jsxs("div",{className:`chat-message ${A.userId===(n==null?void 0:n.uid)?"own":""} ${A.isGif?"gif-message":""}`,children:[p.jsxs("div",{className:"message-header",children:[p.jsx("span",{className:"message-username",children:A.username}),p.jsx("span",{className:"message-time",children:A.time})]}),A.isGif?p.jsx("img",{src:A.gifUrl,alt:"GIF",className:"message-gif"}):p.jsx("p",{className:"message-content",children:A.message})]},A.id)),p.jsx("div",{ref:M})]}),p.jsxs("form",{className:"chat-input-form",onSubmit:S,children:[p.jsx("button",{type:"button",className:"gif-toggle",onClick:o,children:"GIF"}),p.jsx("input",{type:"text",className:"input chat-input",placeholder:"Say something...",value:m,onChange:A=>_(A.target.value)}),p.jsx("button",{type:"submit",className:"send-btn",disabled:!m.trim(),children:p.jsx(gg,{size:18})})]}),i&&p.jsx(J_,{onSelect:k,onClose:o})]})]})]})})}const T0={async createOrUpdateUser(t){const e=ku(Jo,"users",t.uid),n=await g0(e),r={uid:t.uid,email:t.email,displayName:t.displayName||"Anonymous",photoURL:t.photoURL||null,bio:"",updatedAt:Yo()};return n.exists()?await Sf(e,{...r,updatedAt:Yo()}):(r.createdAt=Yo(),r.points=1e3,r.wins=0,await rU(e,r)),r},async getUserProfile(t){const e=ku(Jo,"users",t),n=await g0(e);return n.exists()?{id:n.id,...n.data()}:null},async getUserByEmail(t){const e=L4(Jo,"users"),n=Y4(e,X4("email","==",t)),r=await nU(n);if(!r.empty){const s=r.docs[0];return{id:s.id,...s.data()}}return null},async updateUserProfile(t,e){const n=ku(Jo,"users",t);await Sf(n,{...e,updatedAt:Yo()})},async uploadProfilePicture(t,e){const n=p3(w3,`profile_pictures/${t}`);await d3(n,e);const r=await f3(n);return await Sf(ku(Jo,"users",t),{photoURL:r,updatedAt:Yo()}),r},async getLeaderboard(t=50){return[]}};function R3(){var E,v;const t=jn(),{user:e,userProfile:n,setUserProfile:r}=wr(),[s,i]=O.useState(!1),[o,a]=O.useState(!1),[u,c]=O.useState(!1),[h,f]=O.useState(!1),[m,_]=O.useState(""),T=O.useRef(null),[C,N]=O.useState({username:"",bio:"",avatarUrl:""});O.useEffect(()=>{if(!e){t("/");return}N({username:(n==null?void 0:n.displayName)||(e==null?void 0:e.displayName)||"",bio:(n==null?void 0:n.bio)||"",avatarUrl:(n==null?void 0:n.photoURL)||(e==null?void 0:e.photoURL)||""})},[e,n,t]);const I=S=>{const{name:k,value:P}=S.target;N(x=>({...x,[k]:P})),_("")},y=()=>{var S;(S=T.current)==null||S.click()},R=async S=>{var P;const k=(P=S.target.files)==null?void 0:P[0];if(!(!k||!e)){if(!k.type.startsWith("image/")){_("Please select an image file");return}if(k.size>5*1024*1024){_("Image must be less than 5MB");return}c(!0),_("");try{const x=await T0.uploadProfilePicture(e.uid,k);N(A=>({...A,avatarUrl:x}))}catch(x){console.error("Upload error:",x),_("Failed to upload image")}finally{c(!1)}}},b=async()=>{if(!C.username.trim()){_("Username is required");return}if(C.username.length<3){_("Username must be at least 3 characters");return}if(e){a(!0),_("");try{await T0.updateUserProfile(e.uid,{displayName:C.username,bio:C.bio,photoURL:C.avatarUrl});const S={...n,displayName:C.username,bio:C.bio,photoURL:C.avatarUrl};r(S),i(!1),f(!0),setTimeout(()=>f(!1),3e3)}catch(S){console.error("Save error:",S),_("Failed to save profile")}finally{a(!1)}}},F=()=>{N({username:(n==null?void 0:n.displayName)||(e==null?void 0:e.displayName)||"",bio:(n==null?void 0:n.bio)||"",avatarUrl:(n==null?void 0:n.photoURL)||(e==null?void 0:e.photoURL)||""}),i(!1),_("")},M=()=>C.avatarUrl&&C.avatarUrl.startsWith("http")?{backgroundImage:`url(${C.avatarUrl})`,backgroundSize:"cover"}:{background:C.avatarUrl||"var(--accent-red)"};return p.jsx("div",{className:"profile",children:p.jsxs("div",{className:"profile-container",children:[h&&p.jsxs("div",{className:"success-toast",children:[p.jsx(Ch,{size:18}),"Profile updated successfully!"]}),p.jsxs("header",{className:"profile-header",children:[p.jsxs("div",{className:"profile-avatar-section",children:[p.jsx("div",{className:"profile-avatar",style:M(),children:!((E=C.avatarUrl)!=null&&E.startsWith("http"))&&C.username?C.username.charAt(0).toUpperCase():""}),s&&p.jsx("button",{className:"avatar-edit-btn",onClick:y,disabled:u,children:u?p.jsx("div",{className:"loading-spinner small"}):p.jsx(qx,{size:18})}),p.jsx("input",{ref:T,type:"file",accept:"image/*",onChange:R,style:{display:"none"}})]}),p.jsx("div",{className:"profile-info",children:s?p.jsxs("div",{className:"edit-form",children:[p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Username"}),p.jsx("input",{type:"text",name:"username",value:C.username,onChange:I,className:"input",placeholder:"Enter username",maxLength:20})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Bio"}),p.jsx("textarea",{name:"bio",value:C.bio,onChange:I,className:"input bio-input",placeholder:"Tell us about yourself...",maxLength:150,rows:3}),p.jsxs("span",{className:"char-count",children:[C.bio.length,"/150"]})]}),m&&p.jsxs("div",{className:"error-message",children:[p.jsx($x,{size:16}),m]}),p.jsxs("div",{className:"edit-actions",children:[p.jsxs("button",{className:"btn btn-secondary",onClick:F,disabled:o,children:[p.jsx(yl,{size:18}),"Cancel"]}),p.jsx("button",{className:"btn btn-primary",onClick:b,disabled:o,children:o?p.jsx("span",{className:"saving",children:"Saving..."}):p.jsxs(p.Fragment,{children:[p.jsx(nb,{size:18}),"Save"]})})]})]}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"profile-name-row",children:[p.jsx("h1",{className:"profile-name",children:C.username||"Anonymous"}),p.jsxs("button",{className:"edit-btn",onClick:()=>i(!0),children:[p.jsx(eb,{size:16}),"Edit"]})]}),p.jsx("p",{className:"profile-bio",children:C.bio||"No bio yet"}),p.jsx("div",{className:"profile-meta",children:p.jsxs("span",{className:"meta-item",children:[p.jsx(nS,{size:14}),(e==null?void 0:e.email)||"No email"]})})]})})]}),p.jsxs("section",{className:"profile-stats",children:[p.jsxs("div",{className:"stat-card",children:[p.jsx("span",{className:"stat-value",children:"0"}),p.jsx("span",{className:"stat-label",children:"Battles Won"})]}),p.jsxs("div",{className:"stat-card",children:[p.jsx("span",{className:"stat-value",children:"0"}),p.jsx("span",{className:"stat-label",children:"Battles Lost"})]}),p.jsxs("div",{className:"stat-card",children:[p.jsx("span",{className:"stat-value",children:"0"}),p.jsx("span",{className:"stat-label",children:"Total Votes"})]})]}),p.jsxs("section",{className:"profile-section",children:[p.jsx("h2",{className:"section-title",children:"Account Info"}),p.jsxs("div",{className:"info-list",children:[p.jsxs("div",{className:"info-item",children:[p.jsx("span",{className:"info-label",children:"User ID"}),p.jsx("span",{className:"info-value mono",children:((v=e==null?void 0:e.uid)==null?void 0:v.slice(0,12))||"N/A"})]}),p.jsxs("div",{className:"info-item",children:[p.jsx("span",{className:"info-label",children:"Account Type"}),p.jsx("span",{className:"info-value",children:"Free"})]}),p.jsxs("div",{className:"info-item",children:[p.jsx("span",{className:"info-label",children:"Member Since"}),p.jsx("span",{className:"info-value",children:new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"})})]})]})]}),p.jsx("div",{className:"profile-note",children:p.jsx("p",{children:"Changes to your username and profile picture update instantly across the app."})})]})})}const A3=[{id:"1",type:"dm",name:"MC_Flow",avatar:"#e63946",lastMessage:"GG last battle!",time:"2:30 PM",unread:2},{id:"2",type:"dm",name:"Judge_Dave",avatar:"#2ecc71",lastMessage:"Your flow was clean",time:"1:15 PM",unread:0},{id:"3",type:"room",name:"Battle Lounge",avatar:"#3498db",lastMessage:"Who's ready for the next battle?",time:"12:45 PM",unread:5,members:24},{id:"4",type:"room",name:"Underground Cypher",avatar:"#9b59b6",lastMessage:"New track just dropped!",time:"Yesterday",unread:0,members:156}],k3=[{id:"room1",name:"Battle Lounge",members:24,isPublic:!0},{id:"room2",name:"Underground Cypher",members:156,isPublic:!0},{id:"room3",name:"Hip Hop Heads",members:89,isPublic:!0},{id:"room4",name:"Beat Makers",members:67,isPublic:!0}],I0=[{id:1,userId:"1",username:"MC_Flow",message:"GG last battle! 🔥",time:"2:30 PM"},{id:2,userId:"me",username:"You",message:"Thanks! You killed it too",time:"2:31 PM"},{id:3,userId:"1",username:"MC_Flow",message:"Wanna go again?",time:"2:32 PM"},{id:4,userId:"me",username:"You",message:"I'm down. Let me warm up first",time:"2:33 PM"},{id:5,userId:"1",username:"MC_Flow",message:"Bet. I'll create a room",time:"2:34 PM"}],S0=[{id:1,userId:"user1",username:"BeatMaker99",message:"Who's ready for the next battle?",time:"12:45 PM"},{id:2,userId:"user2",username:"FlowMaster",message:"I am! Hit me up",time:"12:46 PM"},{id:3,userId:"user3",username:"Lyricist",message:"Gonna spectate this one",time:"12:47 PM"},{id:4,userId:"user4",username:"HipHopFan",message:"This arena is fire 🔥",time:"12:48 PM"}];function C0(){const{conversationId:t}=dg(),e=jn(),{user:n,userProfile:r}=wr(),{isGifPickerOpen:s,toggleGifPicker:i,closeGifPicker:o}=Sh(),[a,u]=O.useState(A3),[c,h]=O.useState(k3),[f,m]=O.useState(t?"chat":"dms"),[_,T]=O.useState(null),[C,N]=O.useState([]),[I,y]=O.useState(""),[R,b]=O.useState(""),[F,M]=O.useState(!1),[E,v]=O.useState(""),[S,k]=O.useState(!1),P=O.useRef(null),x=O.useRef(null);O.useEffect(()=>{if(t){const V=a.find(Q=>Q.id===t);V&&(T(V),N(V.type==="room"?S0:I0),m("chat"))}},[t,a]),O.useEffect(()=>{x.current&&(x.current.scrollTop=x.current.scrollHeight)},[C]),O.useEffect(()=>{if(!_)return;const V=_.type==="room"?"rooms":"dms",Q=_.id,ee=Nn.subscribeToMessages(V,Q,he=>{he.length>0?(N(he),k(!0)):C.length===0&&k(!1)});return()=>ee()},[_]);const A=a.filter(V=>V.name.toLowerCase().includes(R.toLowerCase())),fe=c.filter(V=>V.name.toLowerCase().includes(R.toLowerCase())),$e=V=>{T(V),N(V.type==="room"?S0:I0),m("chat"),e(`/messages/${V.id}`,{replace:!0})},Rt=async V=>{if(V.preventDefault(),!I.trim()||!_)return;const Q=I;y("");const ee=_.type==="room"?"rooms":"dms",he=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",At={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:he,message:Q,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!1};N(Wt=>[...Wt,At]);try{await Nn.sendMessage(ee,_.id,(n==null?void 0:n.uid)||"me",he,Q)}catch(Wt){console.error("Failed to send message:",Wt)}},nt=async V=>{if(!_)return;const Q=_.type==="room"?"rooms":"dms",ee=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",he={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:ee,message:"",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!0,gifUrl:V};N(At=>[...At,he]);try{await Nn.sendMessage(Q,_.id,(n==null?void 0:n.uid)||"me",ee,"",!0,V)}catch(At){console.error("Failed to send GIF:",At)}y("")},H=async()=>{if(E.trim()){r!=null&&r.username||n!=null&&n.displayName;try{const Q={id:await Nn.createRoom(E,(n==null?void 0:n.uid)||"me"),name:E,members:1,isPublic:!0,type:"room",lastMessage:"Room created",time:"Now",unread:0};h([Q,...c]),u([Q,...a]),v(""),M(!1),$e(Q)}catch(V){console.error("Failed to create room:",V)}}},W=()=>{T(null),m("dms"),e("/messages")};return p.jsx("div",{className:"messages",children:p.jsx("div",{className:"messages-container",children:f==="chat"&&_?p.jsxs("div",{className:"chat-view",children:[p.jsxs("header",{className:"chat-view-header",children:[p.jsx("button",{className:"back-btn",onClick:W,children:p.jsx(Wx,{size:20})}),p.jsxs("div",{className:"chat-view-info",children:[p.jsx("span",{className:"chat-view-avatar",style:{background:_.avatar},children:_.type==="room"?p.jsx(yw,{size:18}):_.name.charAt(0)}),p.jsxs("div",{className:"chat-view-details",children:[p.jsx("h2",{className:"chat-view-name",children:_.name}),_.type==="room"&&p.jsxs("span",{className:"chat-view-meta",children:[p.jsx(Xr,{size:12}),_.members," members"]})]})]})]}),p.jsxs("div",{className:"chat-view-messages",ref:x,children:[C.map(V=>p.jsxs("div",{className:`chat-view-message ${V.userId===(n==null?void 0:n.uid)||V.userId==="me"?"own":""} ${V.isGif?"gif-message":""}`,children:[V.userId!=="me"&&p.jsx("span",{className:"message-sender",children:V.username}),V.isGif?p.jsx("img",{src:V.gifUrl,alt:"GIF",className:"message-gif"}):p.jsx("p",{className:"message-text",children:V.message}),p.jsx("span",{className:"message-time",children:V.time})]},V.id)),p.jsx("div",{ref:P})]}),p.jsxs("form",{className:"chat-view-input",onSubmit:Rt,children:[p.jsx("button",{type:"button",className:"gif-toggle",onClick:i,children:"GIF"}),p.jsx("input",{type:"text",className:"input",placeholder:`Message ${_.name}`,value:I,onChange:V=>y(V.target.value)}),p.jsx("button",{type:"submit",className:"send-btn",disabled:!I.trim(),children:p.jsx(gg,{size:20})})]}),s&&p.jsx(J_,{onSelect:nt,onClose:i})]}):p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"messages-header",children:p.jsx("h1",{className:"page-title",children:"Messages"})}),p.jsxs("div",{className:"messages-tabs",children:[p.jsxs("button",{className:`tab-btn ${f==="dms"?"active":""}`,onClick:()=>m("dms"),children:[p.jsx(rS,{size:18}),"Direct"]}),p.jsxs("button",{className:`tab-btn ${f==="rooms"?"active":""}`,onClick:()=>m("rooms"),children:[p.jsx(Xr,{size:18}),"Rooms"]})]}),p.jsxs("div",{className:"search-bar",children:[p.jsx(mg,{size:18,className:"search-icon"}),p.jsx("input",{type:"text",className:"input search-input",placeholder:"Search conversations...",value:R,onChange:V=>b(V.target.value)})]}),f==="dms"&&p.jsx("div",{className:"conversations-list",children:A.filter(V=>V.type==="dm").map(V=>p.jsxs("button",{className:"conversation-item",onClick:()=>$e(V),children:[p.jsx("span",{className:"conv-avatar",style:{background:V.avatar},children:V.name.charAt(0)}),p.jsxs("div",{className:"conv-info",children:[p.jsxs("div",{className:"conv-header",children:[p.jsx("span",{className:"conv-name",children:V.name}),p.jsx("span",{className:"conv-time",children:V.time})]}),p.jsx("p",{className:"conv-preview",children:V.lastMessage})]}),V.unread>0&&p.jsx("span",{className:"unread-badge",children:V.unread})]},V.id))}),f==="rooms"&&p.jsxs("div",{className:"rooms-section",children:[p.jsxs("button",{className:"create-room-btn",onClick:()=>M(!0),children:[p.jsx(sS,{size:20}),"Create Room"]}),p.jsx("div",{className:"rooms-list",children:fe.map(V=>p.jsxs("button",{className:"room-item",onClick:()=>$e({...V,type:"room",lastMessage:"Join the conversation",time:""}),children:[p.jsx("span",{className:"room-avatar",children:p.jsx(yw,{size:18})}),p.jsxs("div",{className:"room-info",children:[p.jsx("span",{className:"room-name",children:V.name}),p.jsxs("span",{className:"room-members",children:[p.jsx(Xr,{size:12}),V.members," members"]})]})]},V.id))})]}),F&&p.jsx("div",{className:"modal-overlay",onClick:()=>M(!1),children:p.jsxs("div",{className:"modal create-room-modal",onClick:V=>V.stopPropagation(),children:[p.jsxs("div",{className:"modal-header",children:[p.jsx("h3",{className:"modal-title",children:"Create Room"}),p.jsx("button",{className:"modal-close",onClick:()=>M(!1),children:p.jsx(yl,{size:20})})]}),p.jsxs("div",{className:"input-group",children:[p.jsx("label",{className:"input-label",children:"Room Name"}),p.jsx("input",{type:"text",className:"input",placeholder:"Enter room name",value:E,onChange:V=>v(V.target.value),maxLength:30})]}),p.jsxs("button",{className:"btn btn-primary btn-lg",onClick:H,disabled:!E.trim(),children:[p.jsx(Ch,{size:18}),"Create"]})]})})]})})})}const N3=[{id:"1",username:"MC_Flow",points:2450,wins:72,avatar:"#e63946",joinedAt:"2024-01-15"},{id:"2",username:"LyricQueen",points:2380,wins:69,avatar:"#9b59b6",joinedAt:"2024-01-18"},{id:"3",username:"BeatMaker99",points:1890,wins:44,avatar:"#2ecc71",joinedAt:"2024-02-01"},{id:"4",username:"FlowMaster",points:1650,wins:32,avatar:"#3498db",joinedAt:"2024-02-10"},{id:"5",username:"RhymeStar",points:1420,wins:21,avatar:"#f39c12",joinedAt:"2024-02-20"},{id:"6",username:"MicDropper",points:1280,wins:14,avatar:"#1abc9c",joinedAt:"2024-03-01"},{id:"7",username:"VerseKing",points:1150,wins:7,avatar:"#e74c3c",joinedAt:"2024-03-05"},{id:"8",username:"CypherSoul",points:1080,wins:4,avatar:"#34495e",joinedAt:"2024-03-08"},{id:"9",username:"BattleBorn",points:1050,wins:2,avatar:"#16a085",joinedAt:"2024-03-12"},{id:"10",username:"NewEntry",points:1e3,wins:0,avatar:"#8e44ad",joinedAt:"2024-03-15"}];function P3(){jn();const{user:t,userProfile:e,isAuthenticated:n}=wr(),[r,s]=O.useState([]),[i,o]=O.useState(null);O.useEffect(()=>{const c=[...N3].sort((h,f)=>f.points!==h.points?f.points-h.points:new Date(h.joinedAt)-new Date(f.joinedAt));if(s(c),t){const h=c.findIndex(f=>f.id===(t==null?void 0:t.uid));h>=0&&o(h+1)}},[t]);const a=c=>{switch(c){case 0:return p.jsx(Gx,{size:20,className:"rank-icon gold"});case 1:return p.jsx(ww,{size:20,className:"rank-icon silver"});case 2:return p.jsx(ww,{size:20,className:"rank-icon bronze"});default:return p.jsx("span",{className:"rank-number",children:c+1})}},u=c=>(c==null?void 0:c.charAt(0).toUpperCase())||"?";return p.jsx("div",{className:"leaderboard-page",children:p.jsxs("div",{className:"leaderboard-container",children:[p.jsxs("header",{className:"leaderboard-header",children:[p.jsxs("div",{className:"header-content",children:[p.jsx(_g,{size:32,className:"header-icon"}),p.jsx("h1",{className:"page-title",children:"Leaderboard"})]}),p.jsx("p",{className:"header-subtitle",children:"Top performers in the arena"})]}),i&&p.jsxs("div",{className:"your-rank-card",children:[p.jsxs("div",{className:"your-rank-info",children:[p.jsx("span",{className:"your-rank-label",children:"Your Rank"}),p.jsxs("span",{className:"your-rank-number",children:["#",i]})]}),p.jsx("div",{className:"your-stats",children:p.jsxs("div",{className:"stat",children:[p.jsx(Ew,{size:16,className:"stat-icon"}),p.jsx("span",{className:"stat-value",children:(e==null?void 0:e.points)||1e3}),p.jsx("span",{className:"stat-label",children:"Points"})]})})]}),p.jsx("div",{className:"leaderboard-list",children:r.map((c,h)=>p.jsxs("div",{className:`leaderboard-card ${h<3?"top-three":""} ${c.id===(t==null?void 0:t.uid)?"current-user":""}`,children:[p.jsx("div",{className:"rank-position",children:a(h)}),p.jsx("div",{className:"user-avatar",style:{background:c.avatar},children:u(c.username)}),p.jsxs("div",{className:"user-info",children:[p.jsx("span",{className:"username",children:c.username}),p.jsxs("span",{className:"wins",children:[c.wins," wins"]})]}),p.jsxs("div",{className:"user-points",children:[p.jsx("span",{className:"points-value",children:c.points.toLocaleString()}),p.jsx("span",{className:"points-label",children:"pts"})]})]},c.id))}),p.jsxs("div",{className:"leaderboard-info",children:[p.jsxs("div",{className:"info-item",children:[p.jsx(iS,{size:16}),p.jsx("span",{children:"+20 points per win"})]}),p.jsxs("div",{className:"info-item",children:[p.jsx(Ew,{size:16}),p.jsx("span",{children:"+1000 points for joining"})]})]})]})})}function x3(){const{roomId:t}=dg(),e=jn(),{user:n,userProfile:r}=wr(),{userRole:s,isHost:i,setParticipants:o}=pg(),{isGifPickerOpen:a,toggleGifPicker:u,closeGifPicker:c}=Sh(),[h,f]=O.useState([]),[m,_]=O.useState([]),[T,C]=O.useState(""),[N,I]=O.useState(!1),[y,R]=O.useState(!0),[b,F]=O.useState(!0),[M,E]=O.useState(!1),v=O.useRef(null),S=O.useRef(null),k=h.filter(W=>W.role==="artist"&&W.isReady).length>=2;O.useEffect(()=>{if(!t)return;const W=qn.subscribeToWaitingRoom(t,V=>{if(V&&V.players){const Q=Object.values(V.players).map(ee=>({id:ee.id,name:ee.username,role:ee.role||"artist",isReady:V.status==="ready",hasVideo:!0,hasAudio:!0}));f(Q)}});return()=>W()},[t]),O.useEffect(()=>{S.current&&(S.current.scrollTop=S.current.scrollHeight)},[m]),O.useEffect(()=>{if(!t)return;const W=Nn.subscribeToMessages("waitingRooms",t,V=>{V.length>0&&_(V)});return()=>W()},[t]);const P=()=>{navigator.clipboard.writeText(t),I(!0),setTimeout(()=>I(!1),2e3)},x=async W=>{if(W.preventDefault(),!T.trim()||!t)return;const V=T;C("");const Q=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",ee={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:Q,message:V,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};_(he=>[...he,ee]);try{await Nn.sendMessage("waitingRooms",t,(n==null?void 0:n.uid)||"me",Q,V)}catch(he){console.error("Failed to send message:",he)}},A=async W=>{if(!t)return;const V=(r==null?void 0:r.username)||(n==null?void 0:n.displayName)||"Anonymous",Q={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:V,message:"",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!0,gifUrl:W};_(ee=>[...ee,Q]);try{await Nn.sendMessage("waitingRooms",t,(n==null?void 0:n.uid)||"me",V,"",!0,W)}catch(ee){console.error("Failed to send GIF:",ee)}C("")},fe=()=>{k&&(E(!0),setTimeout(()=>{e(`/arena/${t}`)},1500))},$e=W=>{switch(W){case"artist":return p.jsx(Yr,{size:14});case"judge":return p.jsx(Rc,{size:14});default:return p.jsx(Xr,{size:14})}},Rt=h.filter(W=>W.isReady).length,nt=h.filter(W=>W.role==="artist").length,H=h.filter(W=>W.role==="judge").length;return p.jsx("div",{className:"waiting-room",children:p.jsxs("div",{className:"waiting-container",children:[p.jsxs("header",{className:"waiting-header",children:[p.jsxs("div",{className:"room-code-display",children:[p.jsx("span",{className:"room-label",children:"Room Code"}),p.jsxs("div",{className:"room-code-row",children:[p.jsx("span",{className:"room-code",children:t}),p.jsx("button",{className:"copy-btn",onClick:P,children:N?p.jsx(Ch,{size:18}):p.jsx(tS,{size:18})})]})]}),p.jsxs("div",{className:"waiting-status",children:[p.jsxs("div",{className:"status-item",children:[p.jsxs("span",{className:"status-value",children:[nt,"/2"]}),p.jsx("span",{className:"status-label",children:"Artists"})]}),p.jsxs("div",{className:"status-item",children:[p.jsxs("span",{className:"status-value",children:[H,"/2"]}),p.jsx("span",{className:"status-label",children:"Judges"})]}),p.jsxs("div",{className:"status-item",children:[p.jsx("span",{className:"status-value",children:Rt}),p.jsx("span",{className:"status-label",children:"Ready"})]})]})]}),p.jsxs("div",{className:"waiting-content",children:[p.jsxs("section",{className:"video-section",children:[p.jsx("h2",{className:"section-title",children:"Waiting for Players"}),p.jsx("div",{className:"video-grid",children:[...Array(4)].map((W,V)=>{const Q=h[V];return p.jsx("div",{className:`video-box ${Q?"has-participant":"empty"}`,children:Q?p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"video-placeholder",children:p.jsx("div",{className:"avatar-placeholder",children:Q.name.charAt(0)})}),p.jsxs("div",{className:"video-overlay",children:[p.jsxs("div",{className:"participant-info",children:[p.jsxs("span",{className:`role-badge-small badge-${Q.role}`,children:[$e(Q.role),Q.role]}),p.jsx("span",{className:"participant-name",children:Q.name})]}),p.jsxs("div",{className:"media-indicators",children:[!Q.hasAudio&&p.jsx(Sp,{size:14}),!Q.hasVideo&&p.jsx(Cp,{size:14})]})]}),Q.isReady&&p.jsx("div",{className:"ready-indicator",children:"Ready"})]}):p.jsxs("div",{className:"empty-slot",children:[p.jsx(Xr,{size:32}),p.jsx("span",{children:"Waiting..."})]})},V)})}),p.jsxs("div",{className:"media-controls",children:[p.jsx("button",{className:`control-btn ${b?"active":"off"}`,onClick:()=>F(!b),children:b?p.jsx(Yr,{size:20}):p.jsx(Sp,{size:20})}),p.jsx("button",{className:`control-btn ${y?"active":"off"}`,onClick:()=>R(!y),children:y?p.jsx(oS,{size:20}):p.jsx(Cp,{size:20})}),p.jsx("button",{className:"control-btn leave",onClick:()=>e("/lobby"),children:p.jsx(yl,{size:20})})]})]}),p.jsxs("aside",{className:"chat-section",children:[p.jsx("div",{className:"chat-header",children:p.jsx("h3",{children:"Waiting Room Chat"})}),p.jsxs("div",{className:"chat-messages",ref:S,children:[m.map(W=>p.jsxs("div",{className:`chat-message ${W.userId===(n==null?void 0:n.uid)?"own":""} ${W.isGif?"gif-message":""}`,children:[p.jsxs("div",{className:"message-header",children:[p.jsx("span",{className:"message-username",children:W.username}),p.jsx("span",{className:"message-time",children:W.time})]}),W.isGif?p.jsx("img",{src:W.gifUrl,alt:"GIF",className:"message-gif"}):p.jsx("p",{className:"message-content",children:W.message})]},W.id)),p.jsx("div",{ref:v})]}),p.jsxs("form",{className:"chat-input-form",onSubmit:x,children:[p.jsx("button",{type:"button",className:"gif-toggle",onClick:u,children:"GIF"}),p.jsx("input",{type:"text",className:"input chat-input",placeholder:"Say something...",value:T,onChange:W=>C(W.target.value)}),p.jsx("button",{type:"submit",className:"send-btn",disabled:!T.trim(),children:p.jsx(gg,{size:18})})]}),a&&p.jsx(J_,{onSelect:A,onClose:u})]})]}),i&&p.jsxs("div",{className:"start-section",children:[p.jsx("button",{className:"btn btn-primary btn-lg start-btn",onClick:fe,disabled:!k||M,children:M?"Starting...":"Start Battle"}),!k&&p.jsx("p",{className:"start-hint",children:"Need 2 artists and 2 judges ready to start"})]})]})})}function ai({children:t}){const{isAuthenticated:e}=wr();return e?t:p.jsx(KI,{to:"/",replace:!0})}function b3(){const{pathname:t}=Ys();return O.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[t]),null}function D3(){return p.jsxs(tx,{children:[p.jsx(b3,{}),p.jsxs("div",{className:"app",children:[p.jsx(ib,{}),p.jsx("main",{className:"main-content",children:p.jsxs(GP,{children:[p.jsx(Sn,{path:"/",element:p.jsx(ob,{})}),p.jsx(Sn,{path:"/lobby",element:p.jsx(ai,{children:p.jsx(T3,{})})}),p.jsx(Sn,{path:"/waiting/:roomId",element:p.jsx(ai,{children:p.jsx(x3,{})})}),p.jsx(Sn,{path:"/arena/:battleId",element:p.jsx(ai,{children:p.jsx(C3,{})})}),p.jsx(Sn,{path:"/profile",element:p.jsx(ai,{children:p.jsx(R3,{})})}),p.jsx(Sn,{path:"/messages",element:p.jsx(ai,{children:p.jsx(C0,{})})}),p.jsx(Sn,{path:"/messages/:conversationId",element:p.jsx(ai,{children:p.jsx(C0,{})})}),p.jsx(Sn,{path:"/leaderboard",element:p.jsx(P3,{})}),p.jsx(Sn,{path:"*",element:p.jsx(KI,{to:"/",replace:!0})})]})})]})]})}Af.createRoot(document.getElementById("root")).render(p.jsx(ym.StrictMode,{children:p.jsx(D3,{})}));
