function G1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Cv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Iv={exports:{}},ka={},kv={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po=Symbol.for("react.element"),K1=Symbol.for("react.portal"),q1=Symbol.for("react.fragment"),Y1=Symbol.for("react.strict_mode"),Q1=Symbol.for("react.profiler"),X1=Symbol.for("react.provider"),J1=Symbol.for("react.context"),Z1=Symbol.for("react.forward_ref"),eE=Symbol.for("react.suspense"),tE=Symbol.for("react.memo"),nE=Symbol.for("react.lazy"),Ap=Symbol.iterator;function rE(t){return t===null||typeof t!="object"?null:(t=Ap&&t[Ap]||t["@@iterator"],typeof t=="function"?t:null)}var Tv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nv=Object.assign,xv={};function Fi(t,e,n){this.props=t,this.context=e,this.refs=xv,this.updater=n||Tv}Fi.prototype.isReactComponent={};Fi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rv(){}Rv.prototype=Fi.prototype;function zh(t,e,n){this.props=t,this.context=e,this.refs=xv,this.updater=n||Tv}var Bh=zh.prototype=new Rv;Bh.constructor=zh;Nv(Bh,Fi.prototype);Bh.isPureReactComponent=!0;var Op=Array.isArray,Pv=Object.prototype.hasOwnProperty,Vh={current:null},Av={key:!0,ref:!0,__self:!0,__source:!0};function Ov(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Pv.call(e,r)&&!Av.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),h=0;h<a;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:po,type:t,key:s,ref:o,props:i,_owner:Vh.current}}function iE(t,e){return{$$typeof:po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hh(t){return typeof t=="object"&&t!==null&&t.$$typeof===po}function sE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dp=/\/+/g;function Ru(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sE(""+t.key):e.toString(36)}function pl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case po:case K1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ru(o,0):r,Op(i)?(n="",t!=null&&(n=t.replace(Dp,"$&/")+"/"),pl(i,e,n,"",function(h){return h})):i!=null&&(Hh(i)&&(i=iE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Dp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Op(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Ru(s,a);o+=pl(s,e,n,u,i)}else if(u=rE(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Ru(s,a++),o+=pl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Go(t,e,n){if(t==null)return t;var r=[],i=0;return pl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function oE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tt={current:null},ml={transition:null},lE={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:ml,ReactCurrentOwner:Vh};function Dv(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:Go,forEach:function(t,e,n){Go(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Go(t,function(){e++}),e},toArray:function(t){return Go(t,function(e){return e})||[]},only:function(t){if(!Hh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=Fi;q.Fragment=q1;q.Profiler=Q1;q.PureComponent=zh;q.StrictMode=Y1;q.Suspense=eE;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lE;q.act=Dv;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Nv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Pv.call(e,u)&&!Av.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var h=0;h<u;h++)a[h]=arguments[h+2];r.children=a}return{$$typeof:po,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:J1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:X1,_context:t},t.Consumer=t};q.createElement=Ov;q.createFactory=function(t){var e=Ov.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:Z1,render:t}};q.isValidElement=Hh;q.lazy=function(t){return{$$typeof:nE,_payload:{_status:-1,_result:t},_init:oE}};q.memo=function(t,e){return{$$typeof:tE,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=ml.transition;ml.transition={};try{t()}finally{ml.transition=e}};q.unstable_act=Dv;q.useCallback=function(t,e){return tt.current.useCallback(t,e)};q.useContext=function(t){return tt.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return tt.current.useDeferredValue(t)};q.useEffect=function(t,e){return tt.current.useEffect(t,e)};q.useId=function(){return tt.current.useId()};q.useImperativeHandle=function(t,e,n){return tt.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return tt.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return tt.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return tt.current.useMemo(t,e)};q.useReducer=function(t,e,n){return tt.current.useReducer(t,e,n)};q.useRef=function(t){return tt.current.useRef(t)};q.useState=function(t){return tt.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return tt.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return tt.current.useTransition()};q.version="18.3.1";kv.exports=q;var M=kv.exports;const $h=Cv(M),aE=G1({__proto__:null,default:$h},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uE=M,cE=Symbol.for("react.element"),hE=Symbol.for("react.fragment"),dE=Object.prototype.hasOwnProperty,fE=uE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pE={key:!0,ref:!0,__self:!0,__source:!0};function Lv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)dE.call(e,r)&&!pE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:cE,type:t,key:s,ref:o,props:i,_owner:fE.current}}ka.Fragment=hE;ka.jsx=Lv;ka.jsxs=Lv;Iv.exports=ka;var d=Iv.exports,wc={},Mv={exports:{}},gt={},jv={exports:{}},bv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,$){var K=z.length;z.push($);e:for(;0<K;){var ge=K-1>>>1,oe=z[ge];if(0<i(oe,$))z[ge]=$,z[K]=oe,K=ge;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var $=z[0],K=z.pop();if(K!==$){z[0]=K;e:for(var ge=0,oe=z.length,Se=oe>>>1;ge<Se;){var en=2*(ge+1)-1,tn=z[en],nn=en+1,rn=z[nn];if(0>i(tn,K))nn<oe&&0>i(rn,tn)?(z[ge]=rn,z[nn]=K,ge=nn):(z[ge]=tn,z[en]=K,ge=en);else if(nn<oe&&0>i(rn,K))z[ge]=rn,z[nn]=K,ge=nn;else break e}}return $}function i(z,$){var K=z.sortIndex-$.sortIndex;return K!==0?K:z.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],h=[],m=1,p=null,g=3,x=!1,N=!1,R=!1,A=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(z){for(var $=n(h);$!==null;){if($.callback===null)r(h);else if($.startTime<=z)r(h),$.sortIndex=$.expirationTime,e(u,$);else break;$=n(h)}}function D(z){if(R=!1,E(z),!N)if(n(u)!==null)N=!0,V(j);else{var $=n(h);$!==null&&W(D,$.startTime-z)}}function j(z,$){N=!1,R&&(R=!1,w(y),y=-1),x=!0;var K=g;try{for(E($),p=n(u);p!==null&&(!(p.expirationTime>$)||z&&!T());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,g=p.priorityLevel;var oe=ge(p.expirationTime<=$);$=t.unstable_now(),typeof oe=="function"?p.callback=oe:p===n(u)&&r(u),E($)}else r(u);p=n(u)}if(p!==null)var Se=!0;else{var en=n(h);en!==null&&W(D,en.startTime-$),Se=!1}return Se}finally{p=null,g=K,x=!1}}var b=!1,C=null,y=-1,S=5,I=-1;function T(){return!(t.unstable_now()-I<S)}function P(){if(C!==null){var z=t.unstable_now();I=z;var $=!0;try{$=C(!0,z)}finally{$?k():(b=!1,C=null)}}else b=!1}var k;if(typeof _=="function")k=function(){_(P)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,xt=Ue.port2;Ue.port1.onmessage=P,k=function(){xt.postMessage(null)}}else k=function(){A(P,0)};function V(z){C=z,b||(b=!0,k())}function W(z,$){y=A(function(){z(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){N||x||(N=!0,V(j))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var $=3;break;default:$=g}var K=g;g=$;try{return z()}finally{g=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var K=g;g=z;try{return $()}finally{g=K}},t.unstable_scheduleCallback=function(z,$,K){var ge=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ge+K:ge):K=ge,z){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=K+oe,z={id:m++,callback:$,priorityLevel:z,startTime:K,expirationTime:oe,sortIndex:-1},K>ge?(z.sortIndex=K,e(h,z),n(u)===null&&z===n(h)&&(R?(w(y),y=-1):R=!0,W(D,K-ge))):(z.sortIndex=oe,e(u,z),N||x||(N=!0,V(j))),z},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(z){var $=g;return function(){var K=g;g=$;try{return z.apply(this,arguments)}finally{g=K}}}})(bv);jv.exports=bv;var mE=jv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gE=M,mt=mE;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uv=new Set,Vs={};function Vr(t,e){ki(t,e),ki(t+"Capture",e)}function ki(t,e){for(Vs[t]=e,t=0;t<e.length;t++)Uv.add(e[t])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ec=Object.prototype.hasOwnProperty,vE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lp={},Mp={};function yE(t){return Ec.call(Mp,t)?!0:Ec.call(Lp,t)?!1:vE.test(t)?Mp[t]=!0:(Lp[t]=!0,!1)}function _E(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wE(t,e,n,r){if(e===null||typeof e>"u"||_E(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){be[t]=new nt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];be[e]=new nt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){be[t]=new nt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){be[t]=new nt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){be[t]=new nt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){be[t]=new nt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){be[t]=new nt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){be[t]=new nt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){be[t]=new nt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wh=/[\-:]([a-z])/g;function Gh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wh,Gh);be[e]=new nt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wh,Gh);be[e]=new nt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wh,Gh);be[e]=new nt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){be[t]=new nt(t,1,!1,t.toLowerCase(),null,!1,!1)});be.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){be[t]=new nt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kh(t,e,n,r){var i=be.hasOwnProperty(e)?be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wE(e,n,i,r)&&(n=null),r||i===null?yE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var xn=gE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ko=Symbol.for("react.element"),ei=Symbol.for("react.portal"),ti=Symbol.for("react.fragment"),qh=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),Fv=Symbol.for("react.provider"),zv=Symbol.for("react.context"),Yh=Symbol.for("react.forward_ref"),Cc=Symbol.for("react.suspense"),Ic=Symbol.for("react.suspense_list"),Qh=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),Bv=Symbol.for("react.offscreen"),jp=Symbol.iterator;function cs(t){return t===null||typeof t!="object"?null:(t=jp&&t[jp]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,Pu;function Ss(t){if(Pu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pu=e&&e[1]||""}return`
`+Pu+t}var Au=!1;function Ou(t,e){if(!t||Au)return"";Au=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Au=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ss(t):""}function EE(t){switch(t.tag){case 5:return Ss(t.type);case 16:return Ss("Lazy");case 13:return Ss("Suspense");case 19:return Ss("SuspenseList");case 0:case 2:case 15:return t=Ou(t.type,!1),t;case 11:return t=Ou(t.type.render,!1),t;case 1:return t=Ou(t.type,!0),t;default:return""}}function kc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ti:return"Fragment";case ei:return"Portal";case Sc:return"Profiler";case qh:return"StrictMode";case Cc:return"Suspense";case Ic:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zv:return(t.displayName||"Context")+".Consumer";case Fv:return(t._context.displayName||"Context")+".Provider";case Yh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qh:return e=t.displayName||null,e!==null?e:kc(t.type)||"Memo";case Fn:e=t._payload,t=t._init;try{return kc(t(e))}catch{}}return null}function SE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kc(e);case 8:return e===qh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function CE(t){var e=Vv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qo(t){t._valueTracker||(t._valueTracker=CE(t))}function Hv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Vv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tc(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $v(t,e){e=e.checked,e!=null&&Kh(t,"checked",e,!1)}function Nc(t,e){$v(t,e);var n=ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xc(t,e.type,n):e.hasOwnProperty("defaultValue")&&xc(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Up(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xc(t,e,n){(e!=="number"||Al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Cs=Array.isArray;function pi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Cs(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function Wv(t,e){var n=ur(e.value),r=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Yo,Kv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Yo=Yo||document.createElement("div"),Yo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Hs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IE=["Webkit","ms","Moz","O"];Object.keys(Ts).forEach(function(t){IE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ts[e]=Ts[t]})});function qv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ts.hasOwnProperty(t)&&Ts[t]?(""+e).trim():e+"px"}function Yv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var kE=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ac(t,e){if(e){if(kE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Oc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dc=null;function Xh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lc=null,mi=null,gi=null;function Bp(t){if(t=vo(t)){if(typeof Lc!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Pa(e),Lc(t.stateNode,t.type,e))}}function Qv(t){mi?gi?gi.push(t):gi=[t]:mi=t}function Xv(){if(mi){var t=mi,e=gi;if(gi=mi=null,Bp(t),e)for(t=0;t<e.length;t++)Bp(e[t])}}function Jv(t,e){return t(e)}function Zv(){}var Du=!1;function ey(t,e,n){if(Du)return t(e,n);Du=!0;try{return Jv(t,e,n)}finally{Du=!1,(mi!==null||gi!==null)&&(Zv(),Xv())}}function $s(t,e){var n=t.stateNode;if(n===null)return null;var r=Pa(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Mc=!1;if(wn)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){Mc=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{Mc=!1}function TE(t,e,n,r,i,s,o,a,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(m){this.onError(m)}}var Ns=!1,Ol=null,Dl=!1,jc=null,NE={onError:function(t){Ns=!0,Ol=t}};function xE(t,e,n,r,i,s,o,a,u){Ns=!1,Ol=null,TE.apply(NE,arguments)}function RE(t,e,n,r,i,s,o,a,u){if(xE.apply(this,arguments),Ns){if(Ns){var h=Ol;Ns=!1,Ol=null}else throw Error(U(198));Dl||(Dl=!0,jc=h)}}function Hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ty(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vp(t){if(Hr(t)!==t)throw Error(U(188))}function PE(t){var e=t.alternate;if(!e){if(e=Hr(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vp(i),t;if(s===r)return Vp(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function ny(t){return t=PE(t),t!==null?ry(t):null}function ry(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ry(t);if(e!==null)return e;t=t.sibling}return null}var iy=mt.unstable_scheduleCallback,Hp=mt.unstable_cancelCallback,AE=mt.unstable_shouldYield,OE=mt.unstable_requestPaint,Ie=mt.unstable_now,DE=mt.unstable_getCurrentPriorityLevel,Jh=mt.unstable_ImmediatePriority,sy=mt.unstable_UserBlockingPriority,Ll=mt.unstable_NormalPriority,LE=mt.unstable_LowPriority,oy=mt.unstable_IdlePriority,Ta=null,Kt=null;function ME(t){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(Ta,t,void 0,(t.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:UE,jE=Math.log,bE=Math.LN2;function UE(t){return t>>>=0,t===0?32:31-(jE(t)/bE|0)|0}var Qo=64,Xo=4194304;function Is(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Is(a):(s&=o,s!==0&&(r=Is(s)))}else o=n&~i,o!==0?r=Is(o):s!==0&&(r=Is(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ut(e),i=1<<n,r|=t[n],e&=~i;return r}function FE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ut(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=FE(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function bc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ly(){var t=Qo;return Qo<<=1,!(Qo&4194240)&&(Qo=64),t}function Lu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ut(e),t[e]=n}function BE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Zh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ie=0;function ay(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uy,ed,cy,hy,dy,Uc=!1,Jo=[],Yn=null,Qn=null,Xn=null,Ws=new Map,Gs=new Map,Bn=[],VE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $p(t,e){switch(t){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":Ws.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gs.delete(e.pointerId)}}function ds(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=vo(e),e!==null&&ed(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function HE(t,e,n,r,i){switch(e){case"focusin":return Yn=ds(Yn,t,e,n,r,i),!0;case"dragenter":return Qn=ds(Qn,t,e,n,r,i),!0;case"mouseover":return Xn=ds(Xn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ws.set(s,ds(Ws.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Gs.set(s,ds(Gs.get(s)||null,t,e,n,r,i)),!0}return!1}function fy(t){var e=kr(t.target);if(e!==null){var n=Hr(e);if(n!==null){if(e=n.tag,e===13){if(e=ty(n),e!==null){t.blockedOn=e,dy(t.priority,function(){cy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Dc=r,n.target.dispatchEvent(r),Dc=null}else return e=vo(n),e!==null&&ed(e),t.blockedOn=n,!1;e.shift()}return!0}function Wp(t,e,n){gl(t)&&n.delete(e)}function $E(){Uc=!1,Yn!==null&&gl(Yn)&&(Yn=null),Qn!==null&&gl(Qn)&&(Qn=null),Xn!==null&&gl(Xn)&&(Xn=null),Ws.forEach(Wp),Gs.forEach(Wp)}function fs(t,e){t.blockedOn===e&&(t.blockedOn=null,Uc||(Uc=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,$E)))}function Ks(t){function e(i){return fs(i,t)}if(0<Jo.length){fs(Jo[0],t);for(var n=1;n<Jo.length;n++){var r=Jo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Yn!==null&&fs(Yn,t),Qn!==null&&fs(Qn,t),Xn!==null&&fs(Xn,t),Ws.forEach(e),Gs.forEach(e),n=0;n<Bn.length;n++)r=Bn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Bn.length&&(n=Bn[0],n.blockedOn===null);)fy(n),n.blockedOn===null&&Bn.shift()}var vi=xn.ReactCurrentBatchConfig,jl=!0;function WE(t,e,n,r){var i=ie,s=vi.transition;vi.transition=null;try{ie=1,td(t,e,n,r)}finally{ie=i,vi.transition=s}}function GE(t,e,n,r){var i=ie,s=vi.transition;vi.transition=null;try{ie=4,td(t,e,n,r)}finally{ie=i,vi.transition=s}}function td(t,e,n,r){if(jl){var i=Fc(t,e,n,r);if(i===null)$u(t,e,r,bl,n),$p(t,r);else if(HE(i,t,e,n,r))r.stopPropagation();else if($p(t,r),e&4&&-1<VE.indexOf(t)){for(;i!==null;){var s=vo(i);if(s!==null&&uy(s),s=Fc(t,e,n,r),s===null&&$u(t,e,r,bl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $u(t,e,r,null,n)}}var bl=null;function Fc(t,e,n,r){if(bl=null,t=Xh(r),t=kr(t),t!==null)if(e=Hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ty(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bl=t,null}function py(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DE()){case Jh:return 1;case sy:return 4;case Ll:case LE:return 16;case oy:return 536870912;default:return 16}default:return 16}}var Gn=null,nd=null,vl=null;function my(){if(vl)return vl;var t,e=nd,n=e.length,r,i="value"in Gn?Gn.value:Gn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return vl=i.slice(t,1<r?1-r:void 0)}function yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zo(){return!0}function Gp(){return!1}function vt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zo:Gp,this.isPropagationStopped=Gp,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),e}var zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rd=vt(zi),go=we({},zi,{view:0,detail:0}),KE=vt(go),Mu,ju,ps,Na=we({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:id,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ps&&(ps&&t.type==="mousemove"?(Mu=t.screenX-ps.screenX,ju=t.screenY-ps.screenY):ju=Mu=0,ps=t),Mu)},movementY:function(t){return"movementY"in t?t.movementY:ju}}),Kp=vt(Na),qE=we({},Na,{dataTransfer:0}),YE=vt(qE),QE=we({},go,{relatedTarget:0}),bu=vt(QE),XE=we({},zi,{animationName:0,elapsedTime:0,pseudoElement:0}),JE=vt(XE),ZE=we({},zi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eS=vt(ZE),tS=we({},zi,{data:0}),qp=vt(tS),nS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iS[t])?!!e[t]:!1}function id(){return sS}var oS=we({},go,{key:function(t){if(t.key){var e=nS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:id,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lS=vt(oS),aS=we({},Na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yp=vt(aS),uS=we({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:id}),cS=vt(uS),hS=we({},zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),dS=vt(hS),fS=we({},Na,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pS=vt(fS),mS=[9,13,27,32],sd=wn&&"CompositionEvent"in window,xs=null;wn&&"documentMode"in document&&(xs=document.documentMode);var gS=wn&&"TextEvent"in window&&!xs,gy=wn&&(!sd||xs&&8<xs&&11>=xs),Qp=" ",Xp=!1;function vy(t,e){switch(t){case"keyup":return mS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ni=!1;function vS(t,e){switch(t){case"compositionend":return yy(e);case"keypress":return e.which!==32?null:(Xp=!0,Qp);case"textInput":return t=e.data,t===Qp&&Xp?null:t;default:return null}}function yS(t,e){if(ni)return t==="compositionend"||!sd&&vy(t,e)?(t=my(),vl=nd=Gn=null,ni=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gy&&e.locale!=="ko"?null:e.data;default:return null}}var _S={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_S[t.type]:e==="textarea"}function _y(t,e,n,r){Qv(r),e=Ul(e,"onChange"),0<e.length&&(n=new rd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Rs=null,qs=null;function wS(t){Py(t,0)}function xa(t){var e=si(t);if(Hv(e))return t}function ES(t,e){if(t==="change")return e}var wy=!1;if(wn){var Uu;if(wn){var Fu="oninput"in document;if(!Fu){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),Fu=typeof Zp.oninput=="function"}Uu=Fu}else Uu=!1;wy=Uu&&(!document.documentMode||9<document.documentMode)}function em(){Rs&&(Rs.detachEvent("onpropertychange",Ey),qs=Rs=null)}function Ey(t){if(t.propertyName==="value"&&xa(qs)){var e=[];_y(e,qs,t,Xh(t)),ey(wS,e)}}function SS(t,e,n){t==="focusin"?(em(),Rs=e,qs=n,Rs.attachEvent("onpropertychange",Ey)):t==="focusout"&&em()}function CS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xa(qs)}function IS(t,e){if(t==="click")return xa(e)}function kS(t,e){if(t==="input"||t==="change")return xa(e)}function TS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vt=typeof Object.is=="function"?Object.is:TS;function Ys(t,e){if(Vt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ec.call(e,i)||!Vt(t[i],e[i]))return!1}return!0}function tm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nm(t,e){var n=tm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tm(n)}}function Sy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cy(){for(var t=window,e=Al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Al(t.document)}return e}function od(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function NS(t){var e=Cy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sy(n.ownerDocument.documentElement,n)){if(r!==null&&od(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=nm(n,s);var o=nm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xS=wn&&"documentMode"in document&&11>=document.documentMode,ri=null,zc=null,Ps=null,Bc=!1;function rm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bc||ri==null||ri!==Al(r)||(r=ri,"selectionStart"in r&&od(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ps&&Ys(Ps,r)||(Ps=r,r=Ul(zc,"onSelect"),0<r.length&&(e=new rd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ri)))}function el(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ii={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionend:el("Transition","TransitionEnd")},zu={},Iy={};wn&&(Iy=document.createElement("div").style,"AnimationEvent"in window||(delete ii.animationend.animation,delete ii.animationiteration.animation,delete ii.animationstart.animation),"TransitionEvent"in window||delete ii.transitionend.transition);function Ra(t){if(zu[t])return zu[t];if(!ii[t])return t;var e=ii[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Iy)return zu[t]=e[n];return t}var ky=Ra("animationend"),Ty=Ra("animationiteration"),Ny=Ra("animationstart"),xy=Ra("transitionend"),Ry=new Map,im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){Ry.set(t,e),Vr(e,[t])}for(var Bu=0;Bu<im.length;Bu++){var Vu=im[Bu],RS=Vu.toLowerCase(),PS=Vu[0].toUpperCase()+Vu.slice(1);fr(RS,"on"+PS)}fr(ky,"onAnimationEnd");fr(Ty,"onAnimationIteration");fr(Ny,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(xy,"onTransitionEnd");ki("onMouseEnter",["mouseout","mouseover"]);ki("onMouseLeave",["mouseout","mouseover"]);ki("onPointerEnter",["pointerout","pointerover"]);ki("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ks));function sm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,RE(r,e,void 0,t),t.currentTarget=null}function Py(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,h=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;sm(i,a,h),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,h=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;sm(i,a,h),s=u}}}if(Dl)throw t=jc,Dl=!1,jc=null,t}function ce(t,e){var n=e[Gc];n===void 0&&(n=e[Gc]=new Set);var r=t+"__bubble";n.has(r)||(Ay(e,t,2,!1),n.add(r))}function Hu(t,e,n){var r=0;e&&(r|=4),Ay(n,t,r,e)}var tl="_reactListening"+Math.random().toString(36).slice(2);function Qs(t){if(!t[tl]){t[tl]=!0,Uv.forEach(function(n){n!=="selectionchange"&&(AS.has(n)||Hu(n,!1,t),Hu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tl]||(e[tl]=!0,Hu("selectionchange",!1,e))}}function Ay(t,e,n,r){switch(py(e)){case 1:var i=WE;break;case 4:i=GE;break;default:i=td}n=i.bind(null,e,n,t),i=void 0,!Mc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $u(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=kr(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}ey(function(){var h=s,m=Xh(n),p=[];e:{var g=Ry.get(t);if(g!==void 0){var x=rd,N=t;switch(t){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":x=lS;break;case"focusin":N="focus",x=bu;break;case"focusout":N="blur",x=bu;break;case"beforeblur":case"afterblur":x=bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=YE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=cS;break;case ky:case Ty:case Ny:x=JE;break;case xy:x=dS;break;case"scroll":x=KE;break;case"wheel":x=pS;break;case"copy":case"cut":case"paste":x=eS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Yp}var R=(e&4)!==0,A=!R&&t==="scroll",w=R?g!==null?g+"Capture":null:g;R=[];for(var _=h,E;_!==null;){E=_;var D=E.stateNode;if(E.tag===5&&D!==null&&(E=D,w!==null&&(D=$s(_,w),D!=null&&R.push(Xs(_,D,E)))),A)break;_=_.return}0<R.length&&(g=new x(g,N,null,n,m),p.push({event:g,listeners:R}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",g&&n!==Dc&&(N=n.relatedTarget||n.fromElement)&&(kr(N)||N[En]))break e;if((x||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,x?(N=n.relatedTarget||n.toElement,x=h,N=N?kr(N):null,N!==null&&(A=Hr(N),N!==A||N.tag!==5&&N.tag!==6)&&(N=null)):(x=null,N=h),x!==N)){if(R=Kp,D="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(R=Yp,D="onPointerLeave",w="onPointerEnter",_="pointer"),A=x==null?g:si(x),E=N==null?g:si(N),g=new R(D,_+"leave",x,n,m),g.target=A,g.relatedTarget=E,D=null,kr(m)===h&&(R=new R(w,_+"enter",N,n,m),R.target=E,R.relatedTarget=A,D=R),A=D,x&&N)t:{for(R=x,w=N,_=0,E=R;E;E=Xr(E))_++;for(E=0,D=w;D;D=Xr(D))E++;for(;0<_-E;)R=Xr(R),_--;for(;0<E-_;)w=Xr(w),E--;for(;_--;){if(R===w||w!==null&&R===w.alternate)break t;R=Xr(R),w=Xr(w)}R=null}else R=null;x!==null&&om(p,g,x,R,!1),N!==null&&A!==null&&om(p,A,N,R,!0)}}e:{if(g=h?si(h):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var j=ES;else if(Jp(g))if(wy)j=kS;else{j=CS;var b=SS}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=IS);if(j&&(j=j(t,h))){_y(p,j,n,m);break e}b&&b(t,g,h),t==="focusout"&&(b=g._wrapperState)&&b.controlled&&g.type==="number"&&xc(g,"number",g.value)}switch(b=h?si(h):window,t){case"focusin":(Jp(b)||b.contentEditable==="true")&&(ri=b,zc=h,Ps=null);break;case"focusout":Ps=zc=ri=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,rm(p,n,m);break;case"selectionchange":if(xS)break;case"keydown":case"keyup":rm(p,n,m)}var C;if(sd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ni?vy(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(gy&&n.locale!=="ko"&&(ni||y!=="onCompositionStart"?y==="onCompositionEnd"&&ni&&(C=my()):(Gn=m,nd="value"in Gn?Gn.value:Gn.textContent,ni=!0)),b=Ul(h,y),0<b.length&&(y=new qp(y,t,null,n,m),p.push({event:y,listeners:b}),C?y.data=C:(C=yy(n),C!==null&&(y.data=C)))),(C=gS?vS(t,n):yS(t,n))&&(h=Ul(h,"onBeforeInput"),0<h.length&&(m=new qp("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:h}),m.data=C))}Py(p,e)})}function Xs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ul(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$s(t,n),s!=null&&r.unshift(Xs(t,s,i)),s=$s(t,e),s!=null&&r.push(Xs(t,s,i))),t=t.return}return r}function Xr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function om(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,h=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&h!==null&&(a=h,i?(u=$s(n,s),u!=null&&o.unshift(Xs(n,u,a))):i||(u=$s(n,s),u!=null&&o.push(Xs(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OS=/\r\n?/g,DS=/\u0000|\uFFFD/g;function lm(t){return(typeof t=="string"?t:""+t).replace(OS,`
`).replace(DS,"")}function nl(t,e,n){if(e=lm(e),lm(t)!==e&&n)throw Error(U(425))}function Fl(){}var Vc=null,Hc=null;function $c(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,LS=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,MS=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(t){return am.resolve(null).then(t).catch(jS)}:Wc;function jS(t){setTimeout(function(){throw t})}function Wu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ks(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ks(e)}function Jn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bi=Math.random().toString(36).slice(2),Wt="__reactFiber$"+Bi,Js="__reactProps$"+Bi,En="__reactContainer$"+Bi,Gc="__reactEvents$"+Bi,bS="__reactListeners$"+Bi,US="__reactHandles$"+Bi;function kr(t){var e=t[Wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[En]||n[Wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=um(t);t!==null;){if(n=t[Wt])return n;t=um(t)}return e}t=n,n=t.parentNode}return null}function vo(t){return t=t[Wt]||t[En],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function si(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Pa(t){return t[Js]||null}var Kc=[],oi=-1;function pr(t){return{current:t}}function fe(t){0>oi||(t.current=Kc[oi],Kc[oi]=null,oi--)}function ae(t,e){oi++,Kc[oi]=t.current,t.current=e}var cr={},qe=pr(cr),at=pr(!1),Dr=cr;function Ti(t,e){var n=t.type.contextTypes;if(!n)return cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ut(t){return t=t.childContextTypes,t!=null}function zl(){fe(at),fe(qe)}function cm(t,e,n){if(qe.current!==cr)throw Error(U(168));ae(qe,e),ae(at,n)}function Oy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,SE(t)||"Unknown",i));return we({},n,r)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Dr=qe.current,ae(qe,t),ae(at,at.current),!0}function hm(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=Oy(t,e,Dr),r.__reactInternalMemoizedMergedChildContext=t,fe(at),fe(qe),ae(qe,t)):fe(at),ae(at,n)}var un=null,Aa=!1,Gu=!1;function Dy(t){un===null?un=[t]:un.push(t)}function FS(t){Aa=!0,Dy(t)}function mr(){if(!Gu&&un!==null){Gu=!0;var t=0,e=ie;try{var n=un;for(ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}un=null,Aa=!1}catch(i){throw un!==null&&(un=un.slice(t+1)),iy(Jh,mr),i}finally{ie=e,Gu=!1}}return null}var li=[],ai=0,Vl=null,Hl=0,_t=[],wt=0,Lr=null,hn=1,dn="";function Er(t,e){li[ai++]=Hl,li[ai++]=Vl,Vl=t,Hl=e}function Ly(t,e,n){_t[wt++]=hn,_t[wt++]=dn,_t[wt++]=Lr,Lr=t;var r=hn;t=dn;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var s=32-Ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,hn=1<<32-Ut(e)+i|n<<i|r,dn=s+t}else hn=1<<s|n<<i|r,dn=t}function ld(t){t.return!==null&&(Er(t,1),Ly(t,1,0))}function ad(t){for(;t===Vl;)Vl=li[--ai],li[ai]=null,Hl=li[--ai],li[ai]=null;for(;t===Lr;)Lr=_t[--wt],_t[wt]=null,dn=_t[--wt],_t[wt]=null,hn=_t[--wt],_t[wt]=null}var ft=null,dt=null,me=!1,Dt=null;function My(t,e){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ft=t,dt=Jn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ft=t,dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:hn,overflow:dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ft=t,dt=null,!0):!1;default:return!1}}function qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yc(t){if(me){var e=dt;if(e){var n=e;if(!dm(t,e)){if(qc(t))throw Error(U(418));e=Jn(n.nextSibling);var r=ft;e&&dm(t,e)?My(r,n):(t.flags=t.flags&-4097|2,me=!1,ft=t)}}else{if(qc(t))throw Error(U(418));t.flags=t.flags&-4097|2,me=!1,ft=t}}}function fm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ft=t}function rl(t){if(t!==ft)return!1;if(!me)return fm(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$c(t.type,t.memoizedProps)),e&&(e=dt)){if(qc(t))throw jy(),Error(U(418));for(;e;)My(t,e),e=Jn(e.nextSibling)}if(fm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dt=Jn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dt=null}}else dt=ft?Jn(t.stateNode.nextSibling):null;return!0}function jy(){for(var t=dt;t;)t=Jn(t.nextSibling)}function Ni(){dt=ft=null,me=!1}function ud(t){Dt===null?Dt=[t]:Dt.push(t)}var zS=xn.ReactCurrentBatchConfig;function ms(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function il(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pm(t){var e=t._init;return e(t._payload)}function by(t){function e(w,_){if(t){var E=w.deletions;E===null?(w.deletions=[_],w.flags|=16):E.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=nr(w,_),w.index=0,w.sibling=null,w}function s(w,_,E){return w.index=E,t?(E=w.alternate,E!==null?(E=E.index,E<_?(w.flags|=2,_):E):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,_,E,D){return _===null||_.tag!==6?(_=Zu(E,w.mode,D),_.return=w,_):(_=i(_,E),_.return=w,_)}function u(w,_,E,D){var j=E.type;return j===ti?m(w,_,E.props.children,D,E.key):_!==null&&(_.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Fn&&pm(j)===_.type)?(D=i(_,E.props),D.ref=ms(w,_,E),D.return=w,D):(D=kl(E.type,E.key,E.props,null,w.mode,D),D.ref=ms(w,_,E),D.return=w,D)}function h(w,_,E,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==E.containerInfo||_.stateNode.implementation!==E.implementation?(_=ec(E,w.mode,D),_.return=w,_):(_=i(_,E.children||[]),_.return=w,_)}function m(w,_,E,D,j){return _===null||_.tag!==7?(_=Ar(E,w.mode,D,j),_.return=w,_):(_=i(_,E),_.return=w,_)}function p(w,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Zu(""+_,w.mode,E),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ko:return E=kl(_.type,_.key,_.props,null,w.mode,E),E.ref=ms(w,null,_),E.return=w,E;case ei:return _=ec(_,w.mode,E),_.return=w,_;case Fn:var D=_._init;return p(w,D(_._payload),E)}if(Cs(_)||cs(_))return _=Ar(_,w.mode,E,null),_.return=w,_;il(w,_)}return null}function g(w,_,E,D){var j=_!==null?_.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return j!==null?null:a(w,_,""+E,D);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ko:return E.key===j?u(w,_,E,D):null;case ei:return E.key===j?h(w,_,E,D):null;case Fn:return j=E._init,g(w,_,j(E._payload),D)}if(Cs(E)||cs(E))return j!==null?null:m(w,_,E,D,null);il(w,E)}return null}function x(w,_,E,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return w=w.get(E)||null,a(_,w,""+D,j);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ko:return w=w.get(D.key===null?E:D.key)||null,u(_,w,D,j);case ei:return w=w.get(D.key===null?E:D.key)||null,h(_,w,D,j);case Fn:var b=D._init;return x(w,_,E,b(D._payload),j)}if(Cs(D)||cs(D))return w=w.get(E)||null,m(_,w,D,j,null);il(_,D)}return null}function N(w,_,E,D){for(var j=null,b=null,C=_,y=_=0,S=null;C!==null&&y<E.length;y++){C.index>y?(S=C,C=null):S=C.sibling;var I=g(w,C,E[y],D);if(I===null){C===null&&(C=S);break}t&&C&&I.alternate===null&&e(w,C),_=s(I,_,y),b===null?j=I:b.sibling=I,b=I,C=S}if(y===E.length)return n(w,C),me&&Er(w,y),j;if(C===null){for(;y<E.length;y++)C=p(w,E[y],D),C!==null&&(_=s(C,_,y),b===null?j=C:b.sibling=C,b=C);return me&&Er(w,y),j}for(C=r(w,C);y<E.length;y++)S=x(C,w,y,E[y],D),S!==null&&(t&&S.alternate!==null&&C.delete(S.key===null?y:S.key),_=s(S,_,y),b===null?j=S:b.sibling=S,b=S);return t&&C.forEach(function(T){return e(w,T)}),me&&Er(w,y),j}function R(w,_,E,D){var j=cs(E);if(typeof j!="function")throw Error(U(150));if(E=j.call(E),E==null)throw Error(U(151));for(var b=j=null,C=_,y=_=0,S=null,I=E.next();C!==null&&!I.done;y++,I=E.next()){C.index>y?(S=C,C=null):S=C.sibling;var T=g(w,C,I.value,D);if(T===null){C===null&&(C=S);break}t&&C&&T.alternate===null&&e(w,C),_=s(T,_,y),b===null?j=T:b.sibling=T,b=T,C=S}if(I.done)return n(w,C),me&&Er(w,y),j;if(C===null){for(;!I.done;y++,I=E.next())I=p(w,I.value,D),I!==null&&(_=s(I,_,y),b===null?j=I:b.sibling=I,b=I);return me&&Er(w,y),j}for(C=r(w,C);!I.done;y++,I=E.next())I=x(C,w,y,I.value,D),I!==null&&(t&&I.alternate!==null&&C.delete(I.key===null?y:I.key),_=s(I,_,y),b===null?j=I:b.sibling=I,b=I);return t&&C.forEach(function(P){return e(w,P)}),me&&Er(w,y),j}function A(w,_,E,D){if(typeof E=="object"&&E!==null&&E.type===ti&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Ko:e:{for(var j=E.key,b=_;b!==null;){if(b.key===j){if(j=E.type,j===ti){if(b.tag===7){n(w,b.sibling),_=i(b,E.props.children),_.return=w,w=_;break e}}else if(b.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Fn&&pm(j)===b.type){n(w,b.sibling),_=i(b,E.props),_.ref=ms(w,b,E),_.return=w,w=_;break e}n(w,b);break}else e(w,b);b=b.sibling}E.type===ti?(_=Ar(E.props.children,w.mode,D,E.key),_.return=w,w=_):(D=kl(E.type,E.key,E.props,null,w.mode,D),D.ref=ms(w,_,E),D.return=w,w=D)}return o(w);case ei:e:{for(b=E.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===E.containerInfo&&_.stateNode.implementation===E.implementation){n(w,_.sibling),_=i(_,E.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=ec(E,w.mode,D),_.return=w,w=_}return o(w);case Fn:return b=E._init,A(w,_,b(E._payload),D)}if(Cs(E))return N(w,_,E,D);if(cs(E))return R(w,_,E,D);il(w,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,E),_.return=w,w=_):(n(w,_),_=Zu(E,w.mode,D),_.return=w,w=_),o(w)):n(w,_)}return A}var xi=by(!0),Uy=by(!1),$l=pr(null),Wl=null,ui=null,cd=null;function hd(){cd=ui=Wl=null}function dd(t){var e=$l.current;fe($l),t._currentValue=e}function Qc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function yi(t,e){Wl=t,cd=ui=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ot=!0),t.firstContext=null)}function kt(t){var e=t._currentValue;if(cd!==t)if(t={context:t,memoizedValue:e,next:null},ui===null){if(Wl===null)throw Error(U(308));ui=t,Wl.dependencies={lanes:0,firstContext:t}}else ui=ui.next=t;return e}var Tr=null;function fd(t){Tr===null?Tr=[t]:Tr.push(t)}function Fy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Sn(t,r)}function Sn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zn=!1;function pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Sn(t,n)}return i=r.interleaved,i===null?(e.next=e,fd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Sn(t,n)}function _l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zh(t,n)}}function mm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gl(t,e,n,r){var i=t.updateQueue;zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var m=t.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=h:a.next=h,m.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,m=h=u=null,a=s;do{var g=a.lane,x=a.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var N=t,R=a;switch(g=e,x=n,R.tag){case 1:if(N=R.payload,typeof N=="function"){p=N.call(x,p,g);break e}p=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=R.payload,g=typeof N=="function"?N.call(x,p,g):N,g==null)break e;p=we({},p,g);break e;case 2:zn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else x={eventTime:x,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(h=m=x,u=p):m=m.next=x,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=m,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=p}}function gm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var yo={},qt=pr(yo),Zs=pr(yo),eo=pr(yo);function Nr(t){if(t===yo)throw Error(U(174));return t}function md(t,e){switch(ae(eo,e),ae(Zs,t),ae(qt,yo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pc(e,t)}fe(qt),ae(qt,e)}function Ri(){fe(qt),fe(Zs),fe(eo)}function By(t){Nr(eo.current);var e=Nr(qt.current),n=Pc(e,t.type);e!==n&&(ae(Zs,t),ae(qt,n))}function gd(t){Zs.current===t&&(fe(qt),fe(Zs))}var ve=pr(0);function Kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ku=[];function vd(){for(var t=0;t<Ku.length;t++)Ku[t]._workInProgressVersionPrimary=null;Ku.length=0}var wl=xn.ReactCurrentDispatcher,qu=xn.ReactCurrentBatchConfig,Mr=0,ye=null,Te=null,Re=null,ql=!1,As=!1,to=0,BS=0;function Ve(){throw Error(U(321))}function yd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vt(t[n],e[n]))return!1;return!0}function _d(t,e,n,r,i,s){if(Mr=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wl.current=t===null||t.memoizedState===null?WS:GS,t=n(r,i),As){s=0;do{if(As=!1,to=0,25<=s)throw Error(U(301));s+=1,Re=Te=null,e.updateQueue=null,wl.current=KS,t=n(r,i)}while(As)}if(wl.current=Yl,e=Te!==null&&Te.next!==null,Mr=0,Re=Te=ye=null,ql=!1,e)throw Error(U(300));return t}function wd(){var t=to!==0;return to=0,t}function $t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ye.memoizedState=Re=t:Re=Re.next=t,Re}function Tt(){if(Te===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=Te.next;var e=Re===null?ye.memoizedState:Re.next;if(e!==null)Re=e,Te=t;else{if(t===null)throw Error(U(310));Te=t,t={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Re===null?ye.memoizedState=Re=t:Re=Re.next=t}return Re}function no(t,e){return typeof e=="function"?e(t):e}function Yu(t){var e=Tt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,h=s;do{var m=h.lane;if((Mr&m)===m)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:m,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,ye.lanes|=m,jr|=m}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=a,Vt(r,e.memoizedState)||(ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qu(t){var e=Tt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Vt(s,e.memoizedState)||(ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Vy(){}function Hy(t,e){var n=ye,r=Tt(),i=e(),s=!Vt(r.memoizedState,i);if(s&&(r.memoizedState=i,ot=!0),r=r.queue,Ed(Gy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,ro(9,Wy.bind(null,n,r,i,e),void 0,null),Oe===null)throw Error(U(349));Mr&30||$y(n,e,i)}return i}function $y(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wy(t,e,n,r){e.value=n,e.getSnapshot=r,Ky(e)&&qy(t)}function Gy(t,e,n){return n(function(){Ky(e)&&qy(t)})}function Ky(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vt(t,n)}catch{return!0}}function qy(t){var e=Sn(t,1);e!==null&&Ft(e,t,1,-1)}function vm(t){var e=$t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:t},e.queue=t,t=t.dispatch=$S.bind(null,ye,t),[e.memoizedState,t]}function ro(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Yy(){return Tt().memoizedState}function El(t,e,n,r){var i=$t();ye.flags|=t,i.memoizedState=ro(1|e,n,void 0,r===void 0?null:r)}function Oa(t,e,n,r){var i=Tt();r=r===void 0?null:r;var s=void 0;if(Te!==null){var o=Te.memoizedState;if(s=o.destroy,r!==null&&yd(r,o.deps)){i.memoizedState=ro(e,n,s,r);return}}ye.flags|=t,i.memoizedState=ro(1|e,n,s,r)}function ym(t,e){return El(8390656,8,t,e)}function Ed(t,e){return Oa(2048,8,t,e)}function Qy(t,e){return Oa(4,2,t,e)}function Xy(t,e){return Oa(4,4,t,e)}function Jy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zy(t,e,n){return n=n!=null?n.concat([t]):null,Oa(4,4,Jy.bind(null,e,t),n)}function Sd(){}function e_(t,e){var n=Tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function t_(t,e){var n=Tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function n_(t,e,n){return Mr&21?(Vt(n,e)||(n=ly(),ye.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ot=!0),t.memoizedState=n)}function VS(t,e){var n=ie;ie=n!==0&&4>n?n:4,t(!0);var r=qu.transition;qu.transition={};try{t(!1),e()}finally{ie=n,qu.transition=r}}function r_(){return Tt().memoizedState}function HS(t,e,n){var r=tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},i_(t))s_(e,n);else if(n=Fy(t,e,n,r),n!==null){var i=Ze();Ft(n,t,r,i),o_(n,e,r)}}function $S(t,e,n){var r=tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(i_(t))s_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Vt(a,o)){var u=e.interleaved;u===null?(i.next=i,fd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Fy(t,e,i,r),n!==null&&(i=Ze(),Ft(n,t,r,i),o_(n,e,r))}}function i_(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function s_(t,e){As=ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function o_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zh(t,n)}}var Yl={readContext:kt,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},WS={readContext:kt,useCallback:function(t,e){return $t().memoizedState=[t,e===void 0?null:e],t},useContext:kt,useEffect:ym,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,El(4194308,4,Jy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return El(4194308,4,t,e)},useInsertionEffect:function(t,e){return El(4,2,t,e)},useMemo:function(t,e){var n=$t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=HS.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=$t();return t={current:t},e.memoizedState=t},useState:vm,useDebugValue:Sd,useDeferredValue:function(t){return $t().memoizedState=t},useTransition:function(){var t=vm(!1),e=t[0];return t=VS.bind(null,t[1]),$t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=$t();if(me){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Oe===null)throw Error(U(349));Mr&30||$y(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ym(Gy.bind(null,r,s,t),[t]),r.flags|=2048,ro(9,Wy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=$t(),e=Oe.identifierPrefix;if(me){var n=dn,r=hn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=to++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=BS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},GS={readContext:kt,useCallback:e_,useContext:kt,useEffect:Ed,useImperativeHandle:Zy,useInsertionEffect:Qy,useLayoutEffect:Xy,useMemo:t_,useReducer:Yu,useRef:Yy,useState:function(){return Yu(no)},useDebugValue:Sd,useDeferredValue:function(t){var e=Tt();return n_(e,Te.memoizedState,t)},useTransition:function(){var t=Yu(no)[0],e=Tt().memoizedState;return[t,e]},useMutableSource:Vy,useSyncExternalStore:Hy,useId:r_,unstable_isNewReconciler:!1},KS={readContext:kt,useCallback:e_,useContext:kt,useEffect:Ed,useImperativeHandle:Zy,useInsertionEffect:Qy,useLayoutEffect:Xy,useMemo:t_,useReducer:Qu,useRef:Yy,useState:function(){return Qu(no)},useDebugValue:Sd,useDeferredValue:function(t){var e=Tt();return Te===null?e.memoizedState=t:n_(e,Te.memoizedState,t)},useTransition:function(){var t=Qu(no)[0],e=Tt().memoizedState;return[t,e]},useMutableSource:Vy,useSyncExternalStore:Hy,useId:r_,unstable_isNewReconciler:!1};function At(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Xc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Da={isMounted:function(t){return(t=t._reactInternals)?Hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ze(),i=tr(t),s=yn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Zn(t,s,i),e!==null&&(Ft(e,t,i,r),_l(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ze(),i=tr(t),s=yn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zn(t,s,i),e!==null&&(Ft(e,t,i,r),_l(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ze(),r=tr(t),i=yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zn(t,i,r),e!==null&&(Ft(e,t,r,n),_l(e,t,r))}};function _m(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ys(n,r)||!Ys(i,s):!0}function l_(t,e,n){var r=!1,i=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=kt(s):(i=ut(e)?Dr:qe.current,r=e.contextTypes,s=(r=r!=null)?Ti(t,i):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Da,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function wm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Da.enqueueReplaceState(e,e.state,null)}function Jc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},pd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=kt(s):(s=ut(e)?Dr:qe.current,i.context=Ti(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Da.enqueueReplaceState(i,i.state,null),Gl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Pi(t,e){try{var n="",r=e;do n+=EE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Xu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qS=typeof WeakMap=="function"?WeakMap:Map;function a_(t,e,n){n=yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Xl||(Xl=!0,uh=r),Zc(t,e)},n}function u_(t,e,n){n=yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Zc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zc(t,e),typeof r!="function"&&(er===null?er=new Set([this]):er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Em(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new qS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=aC.bind(null,t,e,n),e.then(t,t))}function Sm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yn(-1,1),e.tag=2,Zn(n,e,1))),n.lanes|=1),t)}var YS=xn.ReactCurrentOwner,ot=!1;function Xe(t,e,n,r){e.child=t===null?Uy(e,null,n,r):xi(e,t.child,n,r)}function Im(t,e,n,r,i){n=n.render;var s=e.ref;return yi(e,i),r=_d(t,e,n,r,s,i),n=wd(),t!==null&&!ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(me&&n&&ld(e),e.flags|=1,Xe(t,e,r,i),e.child)}function km(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,c_(t,e,s,r,i)):(t=kl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ys,n(o,r)&&t.ref===e.ref)return Cn(t,e,i)}return e.flags|=1,t=nr(s,r),t.ref=e.ref,t.return=e,e.child=t}function c_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ys(s,r)&&t.ref===e.ref)if(ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ot=!0);else return e.lanes=t.lanes,Cn(t,e,i)}return eh(t,e,n,r,i)}function h_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(hi,ht),ht|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(hi,ht),ht|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(hi,ht),ht|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(hi,ht),ht|=r;return Xe(t,e,i,n),e.child}function d_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function eh(t,e,n,r,i){var s=ut(n)?Dr:qe.current;return s=Ti(e,s),yi(e,i),n=_d(t,e,n,r,s,i),r=wd(),t!==null&&!ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(me&&r&&ld(e),e.flags|=1,Xe(t,e,n,i),e.child)}function Tm(t,e,n,r,i){if(ut(n)){var s=!0;Bl(e)}else s=!1;if(yi(e,i),e.stateNode===null)Sl(t,e),l_(e,n,r),Jc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=kt(h):(h=ut(n)?Dr:qe.current,h=Ti(e,h));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==h)&&wm(e,o,r,h),zn=!1;var g=e.memoizedState;o.state=g,Gl(e,r,o,i),u=e.memoizedState,a!==r||g!==u||at.current||zn?(typeof m=="function"&&(Xc(e,n,m,r),u=e.memoizedState),(a=zn||_m(e,n,a,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,zy(t,e),a=e.memoizedProps,h=e.type===e.elementType?a:At(e.type,a),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=kt(u):(u=ut(n)?Dr:qe.current,u=Ti(e,u));var x=n.getDerivedStateFromProps;(m=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||g!==u)&&wm(e,o,r,u),zn=!1,g=e.memoizedState,o.state=g,Gl(e,r,o,i);var N=e.memoizedState;a!==p||g!==N||at.current||zn?(typeof x=="function"&&(Xc(e,n,x,r),N=e.memoizedState),(h=zn||_m(e,n,h,r,g,N,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return th(t,e,n,r,s,i)}function th(t,e,n,r,i,s){d_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hm(e,n,!1),Cn(t,e,s);r=e.stateNode,YS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=xi(e,t.child,null,s),e.child=xi(e,null,a,s)):Xe(t,e,a,s),e.memoizedState=r.state,i&&hm(e,n,!0),e.child}function f_(t){var e=t.stateNode;e.pendingContext?cm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cm(t,e.context,!1),md(t,e.containerInfo)}function Nm(t,e,n,r,i){return Ni(),ud(i),e.flags|=256,Xe(t,e,n,r),e.child}var nh={dehydrated:null,treeContext:null,retryLane:0};function rh(t){return{baseLanes:t,cachePool:null,transitions:null}}function p_(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(ve,i&1),t===null)return Yc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ja(o,r,0,null),t=Ar(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rh(n),e.memoizedState=nh,t):Cd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return QS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=nr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=nr(a,s):(s=Ar(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?rh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nh,r}return s=t.child,t=s.sibling,r=nr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cd(t,e){return e=ja({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sl(t,e,n,r){return r!==null&&ud(r),xi(e,t.child,null,n),t=Cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function QS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Xu(Error(U(422))),sl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ja({mode:"visible",children:r.children},i,0,null),s=Ar(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&xi(e,t.child,null,o),e.child.memoizedState=rh(o),e.memoizedState=nh,s);if(!(e.mode&1))return sl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=Xu(s,r,void 0),sl(t,e,o,r)}if(a=(o&t.childLanes)!==0,ot||a){if(r=Oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Sn(t,i),Ft(r,t,i,-1))}return Rd(),r=Xu(Error(U(421))),sl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=uC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,dt=Jn(i.nextSibling),ft=e,me=!0,Dt=null,t!==null&&(_t[wt++]=hn,_t[wt++]=dn,_t[wt++]=Lr,hn=t.id,dn=t.overflow,Lr=e),e=Cd(e,r.children),e.flags|=4096,e)}function xm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qc(t.return,e,n)}function Ju(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function m_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Xe(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xm(t,n,e);else if(t.tag===19)xm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Kl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ju(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Kl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ju(e,!0,n,null,s);break;case"together":Ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function XS(t,e,n){switch(e.tag){case 3:f_(e),Ni();break;case 5:By(e);break;case 1:ut(e.type)&&Bl(e);break;case 4:md(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae($l,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?p_(t,e,n):(ae(ve,ve.current&1),t=Cn(t,e,n),t!==null?t.sibling:null);ae(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return m_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,h_(t,e,n)}return Cn(t,e,n)}var g_,ih,v_,y_;g_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ih=function(){};v_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Nr(qt.current);var s=null;switch(n){case"input":i=Tc(t,i),r=Tc(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=Rc(t,i),r=Rc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Fl)}Ac(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var a=i[h];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Vs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(a=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==a&&(u!=null||a!=null))if(h==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Vs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ce("scroll",t),s||a===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};y_=function(t,e,n,r){n!==r&&(e.flags|=4)};function gs(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function He(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function JS(t,e,n){var r=e.pendingProps;switch(ad(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(e),null;case 1:return ut(e.type)&&zl(),He(e),null;case 3:return r=e.stateNode,Ri(),fe(at),fe(qe),vd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(rl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dt!==null&&(dh(Dt),Dt=null))),ih(t,e),He(e),null;case 5:gd(e);var i=Nr(eo.current);if(n=e.type,t!==null&&e.stateNode!=null)v_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return He(e),null}if(t=Nr(qt.current),rl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Wt]=e,r[Js]=s,t=(e.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<ks.length;i++)ce(ks[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":bp(r,s),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ce("invalid",r);break;case"textarea":Fp(r,s),ce("invalid",r)}Ac(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&nl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&nl(r.textContent,a,t),i=["children",""+a]):Vs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":qo(r),Up(r,s,!0);break;case"textarea":qo(r),zp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Fl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Wt]=e,t[Js]=r,g_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Oc(n,r),n){case"dialog":ce("cancel",t),ce("close",t),i=r;break;case"iframe":case"object":case"embed":ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<ks.length;i++)ce(ks[i],t);i=r;break;case"source":ce("error",t),i=r;break;case"img":case"image":case"link":ce("error",t),ce("load",t),i=r;break;case"details":ce("toggle",t),i=r;break;case"input":bp(t,r),i=Tc(t,r),ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),ce("invalid",t);break;case"textarea":Fp(t,r),i=Rc(t,r),ce("invalid",t);break;default:i=r}Ac(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Yv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Kv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Hs(t,u):typeof u=="number"&&Hs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ce("scroll",t):u!=null&&Kh(t,s,u,o))}switch(n){case"input":qo(t),Up(t,r,!1);break;case"textarea":qo(t),zp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ur(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?pi(t,!!r.multiple,s,!1):r.defaultValue!=null&&pi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return He(e),null;case 6:if(t&&e.stateNode!=null)y_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Nr(eo.current),Nr(qt.current),rl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wt]=e,(s=r.nodeValue!==n)&&(t=ft,t!==null))switch(t.tag){case 3:nl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wt]=e,e.stateNode=r}return He(e),null;case 13:if(fe(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&dt!==null&&e.mode&1&&!(e.flags&128))jy(),Ni(),e.flags|=98560,s=!1;else if(s=rl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Wt]=e}else Ni(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;He(e),s=!1}else Dt!==null&&(dh(Dt),Dt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?Ne===0&&(Ne=3):Rd())),e.updateQueue!==null&&(e.flags|=4),He(e),null);case 4:return Ri(),ih(t,e),t===null&&Qs(e.stateNode.containerInfo),He(e),null;case 10:return dd(e.type._context),He(e),null;case 17:return ut(e.type)&&zl(),He(e),null;case 19:if(fe(ve),s=e.memoizedState,s===null)return He(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)gs(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Kl(t),o!==null){for(e.flags|=128,gs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ie()>Ai&&(e.flags|=128,r=!0,gs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Kl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return He(e),null}else 2*Ie()-s.renderingStartTime>Ai&&n!==1073741824&&(e.flags|=128,r=!0,gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ie(),e.sibling=null,n=ve.current,ae(ve,r?n&1|2:n&1),e):(He(e),null);case 22:case 23:return xd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ht&1073741824&&(He(e),e.subtreeFlags&6&&(e.flags|=8192)):He(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function ZS(t,e){switch(ad(e),e.tag){case 1:return ut(e.type)&&zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ri(),fe(at),fe(qe),vd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gd(e),null;case 13:if(fe(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return fe(ve),null;case 4:return Ri(),null;case 10:return dd(e.type._context),null;case 22:case 23:return xd(),null;case 24:return null;default:return null}}var ol=!1,$e=!1,eC=typeof WeakSet=="function"?WeakSet:Set,H=null;function ci(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(t,e,r)}else n.current=null}function sh(t,e,n){try{n()}catch(r){Ee(t,e,r)}}var Rm=!1;function tC(t,e){if(Vc=jl,t=Cy(),od(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,h=0,m=0,p=t,g=null;t:for(;;){for(var x;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(x=p.firstChild)!==null;)g=p,p=x;for(;;){if(p===t)break t;if(g===n&&++h===i&&(a=o),g===s&&++m===r&&(u=o),(x=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=x}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hc={focusedElem:t,selectionRange:n},jl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var R=N.memoizedProps,A=N.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?R:At(e.type,R),A);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(D){Ee(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return N=Rm,Rm=!1,N}function Os(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&sh(e,n,s)}i=i.next}while(i!==r)}}function La(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function oh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function __(t){var e=t.alternate;e!==null&&(t.alternate=null,__(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wt],delete e[Js],delete e[Gc],delete e[bS],delete e[US])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function w_(t){return t.tag===5||t.tag===3||t.tag===4}function Pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||w_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fl));else if(r!==4&&(t=t.child,t!==null))for(lh(t,e,n),t=t.sibling;t!==null;)lh(t,e,n),t=t.sibling}function ah(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ah(t,e,n),t=t.sibling;t!==null;)ah(t,e,n),t=t.sibling}var Le=null,Ot=!1;function bn(t,e,n){for(n=n.child;n!==null;)E_(t,e,n),n=n.sibling}function E_(t,e,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(Ta,n)}catch{}switch(n.tag){case 5:$e||ci(n,e);case 6:var r=Le,i=Ot;Le=null,bn(t,e,n),Le=r,Ot=i,Le!==null&&(Ot?(t=Le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Ot?(t=Le,n=n.stateNode,t.nodeType===8?Wu(t.parentNode,n):t.nodeType===1&&Wu(t,n),Ks(t)):Wu(Le,n.stateNode));break;case 4:r=Le,i=Ot,Le=n.stateNode.containerInfo,Ot=!0,bn(t,e,n),Le=r,Ot=i;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sh(n,e,o),i=i.next}while(i!==r)}bn(t,e,n);break;case 1:if(!$e&&(ci(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ee(n,e,a)}bn(t,e,n);break;case 21:bn(t,e,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,bn(t,e,n),$e=r):bn(t,e,n);break;default:bn(t,e,n)}}function Am(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eC),e.forEach(function(r){var i=cC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Le=a.stateNode,Ot=!1;break e;case 3:Le=a.stateNode.containerInfo,Ot=!0;break e;case 4:Le=a.stateNode.containerInfo,Ot=!0;break e}a=a.return}if(Le===null)throw Error(U(160));E_(s,o,i),Le=null,Ot=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ee(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)S_(e,t),e=e.sibling}function S_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pt(e,t),Ht(t),r&4){try{Os(3,t,t.return),La(3,t)}catch(R){Ee(t,t.return,R)}try{Os(5,t,t.return)}catch(R){Ee(t,t.return,R)}}break;case 1:Pt(e,t),Ht(t),r&512&&n!==null&&ci(n,n.return);break;case 5:if(Pt(e,t),Ht(t),r&512&&n!==null&&ci(n,n.return),t.flags&32){var i=t.stateNode;try{Hs(i,"")}catch(R){Ee(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&$v(i,s),Oc(a,o);var h=Oc(a,s);for(o=0;o<u.length;o+=2){var m=u[o],p=u[o+1];m==="style"?Yv(i,p):m==="dangerouslySetInnerHTML"?Kv(i,p):m==="children"?Hs(i,p):Kh(i,m,p,h)}switch(a){case"input":Nc(i,s);break;case"textarea":Wv(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?pi(i,!!s.multiple,x,!1):g!==!!s.multiple&&(s.defaultValue!=null?pi(i,!!s.multiple,s.defaultValue,!0):pi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Js]=s}catch(R){Ee(t,t.return,R)}}break;case 6:if(Pt(e,t),Ht(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){Ee(t,t.return,R)}}break;case 3:if(Pt(e,t),Ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ks(e.containerInfo)}catch(R){Ee(t,t.return,R)}break;case 4:Pt(e,t),Ht(t);break;case 13:Pt(e,t),Ht(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Td=Ie())),r&4&&Am(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?($e=(h=$e)||m,Pt(e,t),$e=h):Pt(e,t),Ht(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!m&&t.mode&1)for(H=t,m=t.child;m!==null;){for(p=H=m;H!==null;){switch(g=H,x=g.child,g.tag){case 0:case 11:case 14:case 15:Os(4,g,g.return);break;case 1:ci(g,g.return);var N=g.stateNode;if(typeof N.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(R){Ee(r,n,R)}}break;case 5:ci(g,g.return);break;case 22:if(g.memoizedState!==null){Dm(p);continue}}x!==null?(x.return=g,H=x):Dm(p)}m=m.sibling}e:for(m=null,p=t;;){if(p.tag===5){if(m===null){m=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=qv("display",o))}catch(R){Ee(t,t.return,R)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(R){Ee(t,t.return,R)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Pt(e,t),Ht(t),r&4&&Am(t);break;case 21:break;default:Pt(e,t),Ht(t)}}function Ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(w_(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hs(i,""),r.flags&=-33);var s=Pm(t);ah(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Pm(t);lh(t,a,o);break;default:throw Error(U(161))}}catch(u){Ee(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nC(t,e,n){H=t,C_(t)}function C_(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ol;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||$e;a=ol;var h=$e;if(ol=o,($e=u)&&!h)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Lm(i):u!==null?(u.return=o,H=u):Lm(i);for(;s!==null;)H=s,C_(s),s=s.sibling;H=i,ol=a,$e=h}Om(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Om(t)}}function Om(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$e||La(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!$e)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:At(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var m=h.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Ks(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}$e||e.flags&512&&oh(e)}catch(g){Ee(e,e.return,g)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Dm(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Lm(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{La(4,e)}catch(u){Ee(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ee(e,i,u)}}var s=e.return;try{oh(e)}catch(u){Ee(e,s,u)}break;case 5:var o=e.return;try{oh(e)}catch(u){Ee(e,o,u)}}}catch(u){Ee(e,e.return,u)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var rC=Math.ceil,Ql=xn.ReactCurrentDispatcher,Id=xn.ReactCurrentOwner,Ct=xn.ReactCurrentBatchConfig,ee=0,Oe=null,ke=null,je=0,ht=0,hi=pr(0),Ne=0,io=null,jr=0,Ma=0,kd=0,Ds=null,rt=null,Td=0,Ai=1/0,an=null,Xl=!1,uh=null,er=null,ll=!1,Kn=null,Jl=0,Ls=0,ch=null,Cl=-1,Il=0;function Ze(){return ee&6?Ie():Cl!==-1?Cl:Cl=Ie()}function tr(t){return t.mode&1?ee&2&&je!==0?je&-je:zS.transition!==null?(Il===0&&(Il=ly()),Il):(t=ie,t!==0||(t=window.event,t=t===void 0?16:py(t.type)),t):1}function Ft(t,e,n,r){if(50<Ls)throw Ls=0,ch=null,Error(U(185));mo(t,n,r),(!(ee&2)||t!==Oe)&&(t===Oe&&(!(ee&2)&&(Ma|=n),Ne===4&&Vn(t,je)),ct(t,r),n===1&&ee===0&&!(e.mode&1)&&(Ai=Ie()+500,Aa&&mr()))}function ct(t,e){var n=t.callbackNode;zE(t,e);var r=Ml(t,t===Oe?je:0);if(r===0)n!==null&&Hp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hp(n),e===1)t.tag===0?FS(Mm.bind(null,t)):Dy(Mm.bind(null,t)),MS(function(){!(ee&6)&&mr()}),n=null;else{switch(ay(r)){case 1:n=Jh;break;case 4:n=sy;break;case 16:n=Ll;break;case 536870912:n=oy;break;default:n=Ll}n=A_(n,I_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function I_(t,e){if(Cl=-1,Il=0,ee&6)throw Error(U(327));var n=t.callbackNode;if(_i()&&t.callbackNode!==n)return null;var r=Ml(t,t===Oe?je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Zl(t,r);else{e=r;var i=ee;ee|=2;var s=T_();(Oe!==t||je!==e)&&(an=null,Ai=Ie()+500,Pr(t,e));do try{oC();break}catch(a){k_(t,a)}while(!0);hd(),Ql.current=s,ee=i,ke!==null?e=0:(Oe=null,je=0,e=Ne)}if(e!==0){if(e===2&&(i=bc(t),i!==0&&(r=i,e=hh(t,i))),e===1)throw n=io,Pr(t,0),Vn(t,r),ct(t,Ie()),n;if(e===6)Vn(t,r);else{if(i=t.current.alternate,!(r&30)&&!iC(i)&&(e=Zl(t,r),e===2&&(s=bc(t),s!==0&&(r=s,e=hh(t,s))),e===1))throw n=io,Pr(t,0),Vn(t,r),ct(t,Ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Sr(t,rt,an);break;case 3:if(Vn(t,r),(r&130023424)===r&&(e=Td+500-Ie(),10<e)){if(Ml(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ze(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Wc(Sr.bind(null,t,rt,an),e);break}Sr(t,rt,an);break;case 4:if(Vn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rC(r/1960))-r,10<r){t.timeoutHandle=Wc(Sr.bind(null,t,rt,an),r);break}Sr(t,rt,an);break;case 5:Sr(t,rt,an);break;default:throw Error(U(329))}}}return ct(t,Ie()),t.callbackNode===n?I_.bind(null,t):null}function hh(t,e){var n=Ds;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=Zl(t,e),t!==2&&(e=rt,rt=n,e!==null&&dh(e)),t}function dh(t){rt===null?rt=t:rt.push.apply(rt,t)}function iC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Vt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vn(t,e){for(e&=~kd,e&=~Ma,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ut(e),r=1<<n;t[n]=-1,e&=~r}}function Mm(t){if(ee&6)throw Error(U(327));_i();var e=Ml(t,0);if(!(e&1))return ct(t,Ie()),null;var n=Zl(t,e);if(t.tag!==0&&n===2){var r=bc(t);r!==0&&(e=r,n=hh(t,r))}if(n===1)throw n=io,Pr(t,0),Vn(t,e),ct(t,Ie()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,rt,an),ct(t,Ie()),null}function Nd(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(Ai=Ie()+500,Aa&&mr())}}function br(t){Kn!==null&&Kn.tag===0&&!(ee&6)&&_i();var e=ee;ee|=1;var n=Ct.transition,r=ie;try{if(Ct.transition=null,ie=1,t)return t()}finally{ie=r,Ct.transition=n,ee=e,!(ee&6)&&mr()}}function xd(){ht=hi.current,fe(hi)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,LS(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(ad(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zl();break;case 3:Ri(),fe(at),fe(qe),vd();break;case 5:gd(r);break;case 4:Ri();break;case 13:fe(ve);break;case 19:fe(ve);break;case 10:dd(r.type._context);break;case 22:case 23:xd()}n=n.return}if(Oe=t,ke=t=nr(t.current,null),je=ht=e,Ne=0,io=null,kd=Ma=jr=0,rt=Ds=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Tr=null}return t}function k_(t,e){do{var n=ke;try{if(hd(),wl.current=Yl,ql){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ql=!1}if(Mr=0,Re=Te=ye=null,As=!1,to=0,Id.current=null,n===null||n.return===null){Ne=1,io=e,ke=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=je,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,m=a,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=Sm(o);if(x!==null){x.flags&=-257,Cm(x,o,a,s,e),x.mode&1&&Em(s,h,e),e=x,u=h;var N=e.updateQueue;if(N===null){var R=new Set;R.add(u),e.updateQueue=R}else N.add(u);break e}else{if(!(e&1)){Em(s,h,e),Rd();break e}u=Error(U(426))}}else if(me&&a.mode&1){var A=Sm(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Cm(A,o,a,s,e),ud(Pi(u,a));break e}}s=u=Pi(u,a),Ne!==4&&(Ne=2),Ds===null?Ds=[s]:Ds.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=a_(s,u,e);mm(s,w);break e;case 1:a=u;var _=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(er===null||!er.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=u_(s,a,e);mm(s,D);break e}}s=s.return}while(s!==null)}x_(n)}catch(j){e=j,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function T_(){var t=Ql.current;return Ql.current=Yl,t===null?Yl:t}function Rd(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Oe===null||!(jr&268435455)&&!(Ma&268435455)||Vn(Oe,je)}function Zl(t,e){var n=ee;ee|=2;var r=T_();(Oe!==t||je!==e)&&(an=null,Pr(t,e));do try{sC();break}catch(i){k_(t,i)}while(!0);if(hd(),ee=n,Ql.current=r,ke!==null)throw Error(U(261));return Oe=null,je=0,Ne}function sC(){for(;ke!==null;)N_(ke)}function oC(){for(;ke!==null&&!AE();)N_(ke)}function N_(t){var e=P_(t.alternate,t,ht);t.memoizedProps=t.pendingProps,e===null?x_(t):ke=e,Id.current=null}function x_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ZS(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,ke=null;return}}else if(n=JS(n,e,ht),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Ne===0&&(Ne=5)}function Sr(t,e,n){var r=ie,i=Ct.transition;try{Ct.transition=null,ie=1,lC(t,e,n,r)}finally{Ct.transition=i,ie=r}return null}function lC(t,e,n,r){do _i();while(Kn!==null);if(ee&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(BE(t,s),t===Oe&&(ke=Oe=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,A_(Ll,function(){return _i(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ct.transition,Ct.transition=null;var o=ie;ie=1;var a=ee;ee|=4,Id.current=null,tC(t,n),S_(n,t),NS(Hc),jl=!!Vc,Hc=Vc=null,t.current=n,nC(n),OE(),ee=a,ie=o,Ct.transition=s}else t.current=n;if(ll&&(ll=!1,Kn=t,Jl=i),s=t.pendingLanes,s===0&&(er=null),ME(n.stateNode),ct(t,Ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xl)throw Xl=!1,t=uh,uh=null,t;return Jl&1&&t.tag!==0&&_i(),s=t.pendingLanes,s&1?t===ch?Ls++:(Ls=0,ch=t):Ls=0,mr(),null}function _i(){if(Kn!==null){var t=ay(Jl),e=Ct.transition,n=ie;try{if(Ct.transition=null,ie=16>t?16:t,Kn===null)var r=!1;else{if(t=Kn,Kn=null,Jl=0,ee&6)throw Error(U(331));var i=ee;for(ee|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var h=a[u];for(H=h;H!==null;){var m=H;switch(m.tag){case 0:case 11:case 15:Os(8,m,s)}var p=m.child;if(p!==null)p.return=m,H=p;else for(;H!==null;){m=H;var g=m.sibling,x=m.return;if(__(m),m===h){H=null;break}if(g!==null){g.return=x,H=g;break}H=x}}}var N=s.alternate;if(N!==null){var R=N.child;if(R!==null){N.child=null;do{var A=R.sibling;R.sibling=null,R=A}while(R!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Os(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,H=w;break e}H=s.return}}var _=t.current;for(H=_;H!==null;){o=H;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,H=E;else e:for(o=_;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:La(9,a)}}catch(j){Ee(a,a.return,j)}if(a===o){H=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,H=D;break e}H=a.return}}if(ee=i,mr(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(Ta,t)}catch{}r=!0}return r}finally{ie=n,Ct.transition=e}}return!1}function jm(t,e,n){e=Pi(n,e),e=a_(t,e,1),t=Zn(t,e,1),e=Ze(),t!==null&&(mo(t,1,e),ct(t,e))}function Ee(t,e,n){if(t.tag===3)jm(t,t,n);else for(;e!==null;){if(e.tag===3){jm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){t=Pi(n,t),t=u_(e,t,1),e=Zn(e,t,1),t=Ze(),e!==null&&(mo(e,1,t),ct(e,t));break}}e=e.return}}function aC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ze(),t.pingedLanes|=t.suspendedLanes&n,Oe===t&&(je&n)===n&&(Ne===4||Ne===3&&(je&130023424)===je&&500>Ie()-Td?Pr(t,0):kd|=n),ct(t,e)}function R_(t,e){e===0&&(t.mode&1?(e=Xo,Xo<<=1,!(Xo&130023424)&&(Xo=4194304)):e=1);var n=Ze();t=Sn(t,e),t!==null&&(mo(t,e,n),ct(t,n))}function uC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),R_(t,n)}function cC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),R_(t,n)}var P_;P_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||at.current)ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ot=!1,XS(t,e,n);ot=!!(t.flags&131072)}else ot=!1,me&&e.flags&1048576&&Ly(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Sl(t,e),t=e.pendingProps;var i=Ti(e,qe.current);yi(e,n),i=_d(null,e,r,t,i,n);var s=wd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ut(r)?(s=!0,Bl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pd(e),i.updater=Da,e.stateNode=i,i._reactInternals=e,Jc(e,r,t,n),e=th(null,e,r,!0,s,n)):(e.tag=0,me&&s&&ld(e),Xe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Sl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=dC(r),t=At(r,t),i){case 0:e=eh(null,e,r,t,n);break e;case 1:e=Tm(null,e,r,t,n);break e;case 11:e=Im(null,e,r,t,n);break e;case 14:e=km(null,e,r,At(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),eh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Tm(t,e,r,i,n);case 3:e:{if(f_(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,zy(t,e),Gl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Pi(Error(U(423)),e),e=Nm(t,e,r,n,i);break e}else if(r!==i){i=Pi(Error(U(424)),e),e=Nm(t,e,r,n,i);break e}else for(dt=Jn(e.stateNode.containerInfo.firstChild),ft=e,me=!0,Dt=null,n=Uy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ni(),r===i){e=Cn(t,e,n);break e}Xe(t,e,r,n)}e=e.child}return e;case 5:return By(e),t===null&&Yc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,$c(r,i)?o=null:s!==null&&$c(r,s)&&(e.flags|=32),d_(t,e),Xe(t,e,o,n),e.child;case 6:return t===null&&Yc(e),null;case 13:return p_(t,e,n);case 4:return md(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xi(e,null,r,n):Xe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Im(t,e,r,i,n);case 7:return Xe(t,e,e.pendingProps,n),e.child;case 8:return Xe(t,e,e.pendingProps.children,n),e.child;case 12:return Xe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae($l,r._currentValue),r._currentValue=o,s!==null)if(Vt(s.value,o)){if(s.children===i.children&&!at.current){e=Cn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=yn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var m=h.pending;m===null?u.next=u:(u.next=m.next,m.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Qc(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,yi(e,n),i=kt(i),r=r(i),e.flags|=1,Xe(t,e,r,n),e.child;case 14:return r=e.type,i=At(r,e.pendingProps),i=At(r.type,i),km(t,e,r,i,n);case 15:return c_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Sl(t,e),e.tag=1,ut(r)?(t=!0,Bl(e)):t=!1,yi(e,n),l_(e,r,i),Jc(e,r,i,n),th(null,e,r,!0,t,n);case 19:return m_(t,e,n);case 22:return h_(t,e,n)}throw Error(U(156,e.tag))};function A_(t,e){return iy(t,e)}function hC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(t,e,n,r){return new hC(t,e,n,r)}function Pd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dC(t){if(typeof t=="function")return Pd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yh)return 11;if(t===Qh)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=Et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function kl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ti:return Ar(n.children,i,s,e);case qh:o=8,i|=8;break;case Sc:return t=Et(12,n,e,i|2),t.elementType=Sc,t.lanes=s,t;case Cc:return t=Et(13,n,e,i),t.elementType=Cc,t.lanes=s,t;case Ic:return t=Et(19,n,e,i),t.elementType=Ic,t.lanes=s,t;case Bv:return ja(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fv:o=10;break e;case zv:o=9;break e;case Yh:o=11;break e;case Qh:o=14;break e;case Fn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Et(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ar(t,e,n,r){return t=Et(7,t,r,e),t.lanes=n,t}function ja(t,e,n,r){return t=Et(22,t,r,e),t.elementType=Bv,t.lanes=n,t.stateNode={isHidden:!1},t}function Zu(t,e,n){return t=Et(6,t,null,e),t.lanes=n,t}function ec(t,e,n){return e=Et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lu(0),this.expirationTimes=Lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ad(t,e,n,r,i,s,o,a,u){return t=new fC(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Et(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pd(s),t}function pC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ei,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function O_(t){if(!t)return cr;t=t._reactInternals;e:{if(Hr(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(ut(n))return Oy(t,n,e)}return e}function D_(t,e,n,r,i,s,o,a,u){return t=Ad(n,r,!0,t,i,s,o,a,u),t.context=O_(null),n=t.current,r=Ze(),i=tr(n),s=yn(r,i),s.callback=e??null,Zn(n,s,i),t.current.lanes=i,mo(t,i,r),ct(t,r),t}function ba(t,e,n,r){var i=e.current,s=Ze(),o=tr(i);return n=O_(n),e.context===null?e.context=n:e.pendingContext=n,e=yn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zn(i,e,o),t!==null&&(Ft(t,i,o,s),_l(t,i,o)),o}function ea(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Od(t,e){bm(t,e),(t=t.alternate)&&bm(t,e)}function mC(){return null}var L_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dd(t){this._internalRoot=t}Ua.prototype.render=Dd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));ba(t,e,null,null)};Ua.prototype.unmount=Dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){ba(null,t,null,null)}),e[En]=null}};function Ua(t){this._internalRoot=t}Ua.prototype.unstable_scheduleHydration=function(t){if(t){var e=hy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bn.length&&e!==0&&e<Bn[n].priority;n++);Bn.splice(n,0,t),n===0&&fy(t)}};function Ld(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Um(){}function gC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=ea(o);s.call(h)}}var o=D_(e,r,t,0,null,!1,!1,"",Um);return t._reactRootContainer=o,t[En]=o.current,Qs(t.nodeType===8?t.parentNode:t),br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var h=ea(u);a.call(h)}}var u=Ad(t,0,!1,null,null,!1,!1,"",Um);return t._reactRootContainer=u,t[En]=u.current,Qs(t.nodeType===8?t.parentNode:t),br(function(){ba(e,u,n,r)}),u}function za(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=ea(o);a.call(u)}}ba(e,o,t,i)}else o=gC(n,e,t,i,r);return ea(o)}uy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Is(e.pendingLanes);n!==0&&(Zh(e,n|1),ct(e,Ie()),!(ee&6)&&(Ai=Ie()+500,mr()))}break;case 13:br(function(){var r=Sn(t,1);if(r!==null){var i=Ze();Ft(r,t,1,i)}}),Od(t,1)}};ed=function(t){if(t.tag===13){var e=Sn(t,134217728);if(e!==null){var n=Ze();Ft(e,t,134217728,n)}Od(t,134217728)}};cy=function(t){if(t.tag===13){var e=tr(t),n=Sn(t,e);if(n!==null){var r=Ze();Ft(n,t,e,r)}Od(t,e)}};hy=function(){return ie};dy=function(t,e){var n=ie;try{return ie=t,e()}finally{ie=n}};Lc=function(t,e,n){switch(e){case"input":if(Nc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Pa(r);if(!i)throw Error(U(90));Hv(r),Nc(r,i)}}}break;case"textarea":Wv(t,n);break;case"select":e=n.value,e!=null&&pi(t,!!n.multiple,e,!1)}};Jv=Nd;Zv=br;var vC={usingClientEntryPoint:!1,Events:[vo,si,Pa,Qv,Xv,Nd]},vs={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yC={bundleType:vs.bundleType,version:vs.version,rendererPackageName:vs.rendererPackageName,rendererConfig:vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ny(t),t===null?null:t.stateNode},findFiberByHostInstance:vs.findFiberByHostInstance||mC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{Ta=al.inject(yC),Kt=al}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vC;gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ld(e))throw Error(U(200));return pC(t,e,null,n)};gt.createRoot=function(t,e){if(!Ld(t))throw Error(U(299));var n=!1,r="",i=L_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ad(t,1,!1,null,null,n,!1,r,i),t[En]=e.current,Qs(t.nodeType===8?t.parentNode:t),new Dd(e)};gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=ny(e),t=t===null?null:t.stateNode,t};gt.flushSync=function(t){return br(t)};gt.hydrate=function(t,e,n){if(!Fa(e))throw Error(U(200));return za(null,t,e,!0,n)};gt.hydrateRoot=function(t,e,n){if(!Ld(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=L_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=D_(e,null,t,1,n??null,i,!1,s,o),t[En]=e.current,Qs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ua(e)};gt.render=function(t,e,n){if(!Fa(e))throw Error(U(200));return za(null,t,e,!1,n)};gt.unmountComponentAtNode=function(t){if(!Fa(t))throw Error(U(40));return t._reactRootContainer?(br(function(){za(null,null,t,!1,function(){t._reactRootContainer=null,t[En]=null})}),!0):!1};gt.unstable_batchedUpdates=Nd;gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Fa(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return za(t,e,n,!1,r)};gt.version="18.3.1-next-f1338f8080-20240426";function M_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M_)}catch(t){console.error(t)}}M_(),Mv.exports=gt;var _C=Mv.exports,Fm=_C;wc.createRoot=Fm.createRoot,wc.hydrateRoot=Fm.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},so.apply(this,arguments)}var qn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(qn||(qn={}));const zm="popstate";function wC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return fh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ta(i)}return SC(e,n,null,t)}function _e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Md(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function EC(){return Math.random().toString(36).substr(2,8)}function Bm(t,e){return{usr:t.state,key:t.key,idx:e}}function fh(t,e,n,r){return n===void 0&&(n=null),so({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Vi(e):e,{state:n,key:e&&e.key||r||EC()})}function ta(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Vi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function SC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=qn.Pop,u=null,h=m();h==null&&(h=0,o.replaceState(so({},o.state,{idx:h}),""));function m(){return(o.state||{idx:null}).idx}function p(){a=qn.Pop;let A=m(),w=A==null?null:A-h;h=A,u&&u({action:a,location:R.location,delta:w})}function g(A,w){a=qn.Push;let _=fh(R.location,A,w);h=m()+1;let E=Bm(_,h),D=R.createHref(_);try{o.pushState(E,"",D)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(D)}s&&u&&u({action:a,location:R.location,delta:1})}function x(A,w){a=qn.Replace;let _=fh(R.location,A,w);h=m();let E=Bm(_,h),D=R.createHref(_);o.replaceState(E,"",D),s&&u&&u({action:a,location:R.location,delta:0})}function N(A){let w=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof A=="string"?A:ta(A);return _=_.replace(/ $/,"%20"),_e(w,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,w)}let R={get action(){return a},get location(){return t(i,o)},listen(A){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(zm,p),u=A,()=>{i.removeEventListener(zm,p),u=null}},createHref(A){return e(i,A)},createURL:N,encodeLocation(A){let w=N(A);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:x,go(A){return o.go(A)}};return R}var Vm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Vm||(Vm={}));function CC(t,e,n){return n===void 0&&(n="/"),IC(t,e,n)}function IC(t,e,n,r){let i=typeof e=="string"?Vi(e):e,s=Oi(i.pathname||"/",n);if(s==null)return null;let o=j_(t);kC(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let h=jC(s);a=LC(o[u],h)}return a}function j_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(_e(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=rr([r,u.relativePath]),m=n.concat(u);s.children&&s.children.length>0&&(_e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),j_(s.children,e,m,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:OC(h,s.index),routesMeta:m})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of b_(s.path))i(s,o,u)}),e}function b_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=b_(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function kC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:DC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const TC=/^:[\w-]+$/,NC=3,xC=2,RC=1,PC=10,AC=-2,Hm=t=>t==="*";function OC(t,e){let n=t.split("/"),r=n.length;return n.some(Hm)&&(r+=AC),e&&(r+=xC),n.filter(i=>!Hm(i)).reduce((i,s)=>i+(TC.test(s)?NC:s===""?RC:PC),r)}function DC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function LC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],h=a===r.length-1,m=s==="/"?e:e.slice(s.length)||"/",p=ph({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},m),g=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:rr([s,p.pathname]),pathnameBase:BC(rr([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=rr([s,p.pathnameBase]))}return o}function ph(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=MC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((h,m,p)=>{let{paramName:g,isOptional:x}=m;if(g==="*"){let R=a[p]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const N=a[p];return x&&!N?h[g]=void 0:h[g]=(N||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function MC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Md(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function jC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Md(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Oi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const bC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,UC=t=>bC.test(t);function FC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Vi(t):t,s;if(n)if(UC(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Md(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=$m(n.substring(1),"/"):s=$m(n,e)}else s=e;return{pathname:s,search:VC(r),hash:HC(i)}}function $m(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function tc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function jd(t,e){let n=zC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function bd(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Vi(t):(i=so({},t),_e(!i.pathname||!i.pathname.includes("?"),tc("?","pathname","search",i)),_e(!i.pathname||!i.pathname.includes("#"),tc("#","pathname","hash",i)),_e(!i.search||!i.search.includes("#"),tc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}a=p>=0?e[p]:"/"}let u=FC(i,a),h=o&&o!=="/"&&o.endsWith("/"),m=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||m)&&(u.pathname+="/"),u}const rr=t=>t.join("/").replace(/\/\/+/g,"/"),BC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),VC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,HC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function $C(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const U_=["post","put","patch","delete"];new Set(U_);const WC=["get",...U_];new Set(WC);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oo(){return oo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oo.apply(this,arguments)}const Ba=M.createContext(null),F_=M.createContext(null),Rn=M.createContext(null),Va=M.createContext(null),Pn=M.createContext({outlet:null,matches:[],isDataRoute:!1}),z_=M.createContext(null);function GC(t,e){let{relative:n}=e===void 0?{}:e;Hi()||_e(!1);let{basename:r,navigator:i}=M.useContext(Rn),{hash:s,pathname:o,search:a}=Ha(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:rr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Hi(){return M.useContext(Va)!=null}function $i(){return Hi()||_e(!1),M.useContext(Va).location}function B_(t){M.useContext(Rn).static||M.useLayoutEffect(t)}function An(){let{isDataRoute:t}=M.useContext(Pn);return t?sI():KC()}function KC(){Hi()||_e(!1);let t=M.useContext(Ba),{basename:e,future:n,navigator:r}=M.useContext(Rn),{matches:i}=M.useContext(Pn),{pathname:s}=$i(),o=JSON.stringify(jd(i,n.v7_relativeSplatPath)),a=M.useRef(!1);return B_(()=>{a.current=!0}),M.useCallback(function(h,m){if(m===void 0&&(m={}),!a.current)return;if(typeof h=="number"){r.go(h);return}let p=bd(h,JSON.parse(o),s,m.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:rr([e,p.pathname])),(m.replace?r.replace:r.push)(p,m.state,m)},[e,r,o,s,t])}function Ud(){let{matches:t}=M.useContext(Pn),e=t[t.length-1];return e?e.params:{}}function Ha(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(Rn),{matches:i}=M.useContext(Pn),{pathname:s}=$i(),o=JSON.stringify(jd(i,r.v7_relativeSplatPath));return M.useMemo(()=>bd(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function qC(t,e){return YC(t,e)}function YC(t,e,n,r){Hi()||_e(!1);let{navigator:i}=M.useContext(Rn),{matches:s}=M.useContext(Pn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=$i(),m;if(e){var p;let A=typeof e=="string"?Vi(e):e;u==="/"||(p=A.pathname)!=null&&p.startsWith(u)||_e(!1),m=A}else m=h;let g=m.pathname||"/",x=g;if(u!=="/"){let A=u.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(A.length).join("/")}let N=CC(t,{pathname:x}),R=eI(N&&N.map(A=>Object.assign({},A,{params:Object.assign({},a,A.params),pathname:rr([u,i.encodeLocation?i.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?u:rr([u,i.encodeLocation?i.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),s,n,r);return e&&R?M.createElement(Va.Provider,{value:{location:oo({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:qn.Pop}},R):R}function QC(){let t=iI(),e=$C(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const XC=M.createElement(QC,null);class JC extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(Pn.Provider,{value:this.props.routeContext},M.createElement(z_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ZC(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(Ba);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(Pn.Provider,{value:e},r)}function eI(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let m=o.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);m>=0||_e(!1),o=o.slice(0,Math.min(o.length,m+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let p=o[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=m),p.route.id){let{loaderData:g,errors:x}=n,N=p.route.loader&&g[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||N){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((m,p,g)=>{let x,N=!1,R=null,A=null;n&&(x=a&&p.route.id?a[p.route.id]:void 0,R=p.route.errorElement||XC,u&&(h<0&&g===0?(oI("route-fallback"),N=!0,A=null):h===g&&(N=!0,A=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,g+1)),_=()=>{let E;return x?E=R:N?E=A:p.route.Component?E=M.createElement(p.route.Component,null):p.route.element?E=p.route.element:E=m,M.createElement(ZC,{match:p,routeContext:{outlet:m,matches:w,isDataRoute:n!=null},children:E})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?M.createElement(JC,{location:n.location,revalidation:n.revalidation,component:R,error:x,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):_()},null)}var V_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(V_||{}),H_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(H_||{});function tI(t){let e=M.useContext(Ba);return e||_e(!1),e}function nI(t){let e=M.useContext(F_);return e||_e(!1),e}function rI(t){let e=M.useContext(Pn);return e||_e(!1),e}function $_(t){let e=rI(),n=e.matches[e.matches.length-1];return n.route.id||_e(!1),n.route.id}function iI(){var t;let e=M.useContext(z_),n=nI(),r=$_();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function sI(){let{router:t}=tI(V_.UseNavigateStable),e=$_(H_.UseNavigateStable),n=M.useRef(!1);return B_(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,oo({fromRouteId:e},s)))},[t,e])}const Wm={};function oI(t,e,n){Wm[t]||(Wm[t]=!0)}function lI(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function W_(t){let{to:e,replace:n,state:r,relative:i}=t;Hi()||_e(!1);let{future:s,static:o}=M.useContext(Rn),{matches:a}=M.useContext(Pn),{pathname:u}=$i(),h=An(),m=bd(e,jd(a,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(m);return M.useEffect(()=>h(JSON.parse(p),{replace:n,state:r,relative:i}),[h,p,i,n,r]),null}function ln(t){_e(!1)}function aI(t){let{basename:e="/",children:n=null,location:r,navigationType:i=qn.Pop,navigator:s,static:o=!1,future:a}=t;Hi()&&_e(!1);let u=e.replace(/^\/*/,"/"),h=M.useMemo(()=>({basename:u,navigator:s,static:o,future:oo({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Vi(r));let{pathname:m="/",search:p="",hash:g="",state:x=null,key:N="default"}=r,R=M.useMemo(()=>{let A=Oi(m,u);return A==null?null:{location:{pathname:A,search:p,hash:g,state:x,key:N},navigationType:i}},[u,m,p,g,x,N,i]);return R==null?null:M.createElement(Rn.Provider,{value:h},M.createElement(Va.Provider,{children:n,value:R}))}function uI(t){let{children:e,location:n}=t;return qC(mh(e),n)}new Promise(()=>{});function mh(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,mh(r.props.children,s));return}r.type!==ln&&_e(!1),!r.props.index||!r.props.children||_e(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=mh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function na(){return na=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},na.apply(this,arguments)}function G_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function cI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hI(t,e){return t.button===0&&(!e||e==="_self")&&!cI(t)}const dI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],fI=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],pI="6";try{window.__reactRouterVersion=pI}catch{}const mI=M.createContext({isTransitioning:!1}),gI="startTransition",Gm=aE[gI];function vI(t){let{basename:e,children:n,future:r,window:i}=t,s=M.useRef();s.current==null&&(s.current=wC({window:i,v5Compat:!0}));let o=s.current,[a,u]=M.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},m=M.useCallback(p=>{h&&Gm?Gm(()=>u(p)):u(p)},[u,h]);return M.useLayoutEffect(()=>o.listen(m),[o,m]),M.useEffect(()=>lI(r),[r]),M.createElement(aI,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const yI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_I=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wI=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:h,preventScrollReset:m,viewTransition:p}=e,g=G_(e,dI),{basename:x}=M.useContext(Rn),N,R=!1;if(typeof h=="string"&&_I.test(h)&&(N=h,yI))try{let E=new URL(window.location.href),D=h.startsWith("//")?new URL(E.protocol+h):new URL(h),j=Oi(D.pathname,x);D.origin===E.origin&&j!=null?h=j+D.search+D.hash:R=!0}catch{}let A=GC(h,{relative:i}),w=CI(h,{replace:o,state:a,target:u,preventScrollReset:m,relative:i,viewTransition:p});function _(E){r&&r(E),E.defaultPrevented||w(E)}return M.createElement("a",na({},g,{href:N||A,onClick:R||s?r:_,ref:n,target:u}))}),EI=M.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:u,viewTransition:h,children:m}=e,p=G_(e,fI),g=Ha(u,{relative:p.relative}),x=$i(),N=M.useContext(F_),{navigator:R,basename:A}=M.useContext(Rn),w=N!=null&&II(g)&&h===!0,_=R.encodeLocation?R.encodeLocation(g).pathname:g.pathname,E=x.pathname,D=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;i||(E=E.toLowerCase(),D=D?D.toLowerCase():null,_=_.toLowerCase()),D&&A&&(D=Oi(D,A)||D);const j=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let b=E===_||!o&&E.startsWith(_)&&E.charAt(j)==="/",C=D!=null&&(D===_||!o&&D.startsWith(_)&&D.charAt(_.length)==="/"),y={isActive:b,isPending:C,isTransitioning:w},S=b?r:void 0,I;typeof s=="function"?I=s(y):I=[s,b?"active":null,C?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let T=typeof a=="function"?a(y):a;return M.createElement(wI,na({},p,{"aria-current":S,className:I,ref:n,style:T,to:u,viewTransition:h}),typeof m=="function"?m(y):m)});var gh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(gh||(gh={}));var Km;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Km||(Km={}));function SI(t){let e=M.useContext(Ba);return e||_e(!1),e}function CI(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,u=An(),h=$i(),m=Ha(t,{relative:o});return M.useCallback(p=>{if(hI(p,n)){p.preventDefault();let g=r!==void 0?r:ta(h)===ta(m);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[h,u,m,r,i,n,t,s,o,a])}function II(t,e){e===void 0&&(e={});let n=M.useContext(mI);n==null&&_e(!1);let{basename:r}=SI(gh.useViewTransitionState),i=Ha(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Oi(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Oi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ph(i.pathname,o)!=null||ph(i.pathname,s)!=null}const kI={},qm=t=>{let e;const n=new Set,r=(m,p)=>{const g=typeof m=="function"?m(e):m;if(!Object.is(g,e)){const x=e;e=p??(typeof g!="object"||g===null)?g:Object.assign({},e,g),n.forEach(N=>N(e,x))}},i=()=>e,u={setState:r,getState:i,getInitialState:()=>h,subscribe:m=>(n.add(m),()=>n.delete(m)),destroy:()=>{(kI?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},h=e=t(r,i,u);return u},TI=t=>t?qm(t):qm;var K_={exports:{}},q_={},Y_={exports:{}},Q_={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Di=M;function NI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xI=typeof Object.is=="function"?Object.is:NI,RI=Di.useState,PI=Di.useEffect,AI=Di.useLayoutEffect,OI=Di.useDebugValue;function DI(t,e){var n=e(),r=RI({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return AI(function(){i.value=n,i.getSnapshot=e,nc(i)&&s({inst:i})},[t,n,e]),PI(function(){return nc(i)&&s({inst:i}),t(function(){nc(i)&&s({inst:i})})},[t]),OI(n),n}function nc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xI(t,n)}catch{return!0}}function LI(t,e){return e()}var MI=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?LI:DI;Q_.useSyncExternalStore=Di.useSyncExternalStore!==void 0?Di.useSyncExternalStore:MI;Y_.exports=Q_;var jI=Y_.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $a=M,bI=jI;function UI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var FI=typeof Object.is=="function"?Object.is:UI,zI=bI.useSyncExternalStore,BI=$a.useRef,VI=$a.useEffect,HI=$a.useMemo,$I=$a.useDebugValue;q_.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=BI(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=HI(function(){function u(x){if(!h){if(h=!0,m=x,x=r(x),i!==void 0&&o.hasValue){var N=o.value;if(i(N,x))return p=N}return p=x}if(N=p,FI(m,x))return N;var R=r(x);return i!==void 0&&i(N,R)?(m=x,N):(m=x,p=R)}var h=!1,m,p,g=n===void 0?null:n;return[function(){return u(e())},g===null?void 0:function(){return u(g())}]},[e,n,r,i]);var a=zI(t,s[0],s[1]);return VI(function(){o.hasValue=!0,o.value=a},[a]),$I(a),a};K_.exports=q_;var WI=K_.exports;const GI=Cv(WI),X_={},{useDebugValue:KI}=$h,{useSyncExternalStoreWithSelector:qI}=GI;let Ym=!1;const YI=t=>t;function QI(t,e=YI,n){(X_?"production":void 0)!=="production"&&n&&!Ym&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Ym=!0);const r=qI(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return KI(r),r}const Qm=t=>{(X_?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?TI(t):t,n=(r,i)=>QI(e,r,i);return Object.assign(n,e),n},Fd=t=>t?Qm(t):Qm,XI={};function JI(t,e){let n;try{n=t()}catch{return}return{getItem:i=>{var s;const o=u=>u===null?null:JSON.parse(u,void 0),a=(s=n.getItem(i))!=null?s:null;return a instanceof Promise?a.then(o):o(a)},setItem:(i,s)=>n.setItem(i,JSON.stringify(s,void 0)),removeItem:i=>n.removeItem(i)}}const lo=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return lo(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return lo(r)(n)}}}},ZI=(t,e)=>(n,r,i)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:A=>A,version:0,merge:(A,w)=>({...w,...A}),...e},o=!1;const a=new Set,u=new Set;let h;try{h=s.getStorage()}catch{}if(!h)return t((...A)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...A)},r,i);const m=lo(s.serialize),p=()=>{const A=s.partialize({...r()});let w;const _=m({state:A,version:s.version}).then(E=>h.setItem(s.name,E)).catch(E=>{w=E});if(w)throw w;return _},g=i.setState;i.setState=(A,w)=>{g(A,w),p()};const x=t((...A)=>{n(...A),p()},r,i);let N;const R=()=>{var A;if(!h)return;o=!1,a.forEach(_=>_(r()));const w=((A=s.onRehydrateStorage)==null?void 0:A.call(s,r()))||void 0;return lo(h.getItem.bind(h))(s.name).then(_=>{if(_)return s.deserialize(_)}).then(_=>{if(_)if(typeof _.version=="number"&&_.version!==s.version){if(s.migrate)return s.migrate(_.state,_.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return _.state}).then(_=>{var E;return N=s.merge(_,(E=r())!=null?E:x),n(N,!0),p()}).then(()=>{w==null||w(N,void 0),o=!0,u.forEach(_=>_(N))}).catch(_=>{w==null||w(void 0,_)})};return i.persist={setOptions:A=>{s={...s,...A},A.getStorage&&(h=A.getStorage())},clearStorage:()=>{h==null||h.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>R(),hasHydrated:()=>o,onHydrate:A=>(a.add(A),()=>{a.delete(A)}),onFinishHydration:A=>(u.add(A),()=>{u.delete(A)})},R(),N||x},ek=(t,e)=>(n,r,i)=>{let s={storage:JI(()=>localStorage),partialize:R=>R,version:0,merge:(R,A)=>({...A,...R}),...e},o=!1;const a=new Set,u=new Set;let h=s.storage;if(!h)return t((...R)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...R)},r,i);const m=()=>{const R=s.partialize({...r()});return h.setItem(s.name,{state:R,version:s.version})},p=i.setState;i.setState=(R,A)=>{p(R,A),m()};const g=t((...R)=>{n(...R),m()},r,i);i.getInitialState=()=>g;let x;const N=()=>{var R,A;if(!h)return;o=!1,a.forEach(_=>{var E;return _((E=r())!=null?E:g)});const w=((A=s.onRehydrateStorage)==null?void 0:A.call(s,(R=r())!=null?R:g))||void 0;return lo(h.getItem.bind(h))(s.name).then(_=>{if(_)if(typeof _.version=="number"&&_.version!==s.version){if(s.migrate)return[!0,s.migrate(_.state,_.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,_.state];return[!1,void 0]}).then(_=>{var E;const[D,j]=_;if(x=s.merge(j,(E=r())!=null?E:g),n(x,!0),D)return m()}).then(()=>{w==null||w(x,void 0),x=r(),o=!0,u.forEach(_=>_(x))}).catch(_=>{w==null||w(void 0,_)})};return i.persist={setOptions:R=>{s={...s,...R},R.storage&&(h=R.storage)},clearStorage:()=>{h==null||h.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>N(),hasHydrated:()=>o,onHydrate:R=>(a.add(R),()=>{a.delete(R)}),onFinishHydration:R=>(u.add(R),()=>{u.delete(R)})},s.skipHydration||N(),x||g},tk=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((XI?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),ZI(t,e)):ek(t,e),nk=tk,gr=Fd(nk((t,e)=>({user:null,userProfile:null,isAuthenticated:!1,isLoading:!0,setUser:n=>t({user:n,isAuthenticated:!!n}),setUserProfile:n=>t({userProfile:n}),setLoading:n=>t({isLoading:n}),logout:()=>t({user:null,userProfile:null,isAuthenticated:!1})}),{name:"dreamledge-auth",partialize:t=>({user:t.user,isAuthenticated:t.isAuthenticated})})),zd=Fd((t,e)=>({currentBattle:null,participants:[],battlePhase:"idle",round:1,timeRemaining:0,isHost:!1,userRole:null,userSlot:null,setCurrentBattle:n=>t({currentBattle:n}),setParticipants:n=>t({participants:n}),setBattlePhase:n=>t({battlePhase:n}),setRound:n=>t({round:n}),setTimeRemaining:n=>t({timeRemaining:n}),setIsHost:n=>t({isHost:n}),setUserRole:n=>t({userRole:n}),setUserSlot:n=>t({userSlot:n}),resetBattle:()=>t({currentBattle:null,participants:[],battlePhase:"idle",round:1,timeRemaining:0,isHost:!1,userRole:null,userSlot:null})})),Wa=Fd(t=>({isSidebarOpen:!1,isGifPickerOpen:!1,activeModal:null,notifications:[],toggleSidebar:()=>t(e=>({isSidebarOpen:!e.isSidebarOpen})),closeSidebar:()=>t({isSidebarOpen:!1}),toggleGifPicker:()=>t(e=>({isGifPickerOpen:!e.isGifPickerOpen})),closeGifPicker:()=>t({isGifPickerOpen:!1}),openModal:e=>t({activeModal:e}),closeModal:()=>t({activeModal:null}),addNotification:e=>t(n=>({notifications:[...n.notifications,{id:Date.now(),...e}]})),removeNotification:e=>t(n=>({notifications:n.notifications.filter(r=>r.id!==e)}))}));/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Y=(t,e)=>{const n=M.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:u,...h},m)=>M.createElement("svg",{ref:m,...rk,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${ik(t)}`,a].join(" "),...h},[...e.map(([p,g])=>M.createElement(p,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=Y("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=Y("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=Y("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=Y("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=Y("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=Y("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=Y("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=Y("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=Y("Gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=Y("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=Y("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=Y("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=Y("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=Y("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=Y("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=Y("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=Y("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=Y("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=Y("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=Y("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=Y("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=Y("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=Y("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=Y("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=Y("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=Y("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=Y("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=Y("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=Y("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=Y("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=Y("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=Y("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=Y("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=Y("VideoOff",[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8",key:"ubwiq0"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z",key:"1l10zd"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=Y("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=Y("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=Y("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function kk(){const{isAuthenticated:t,logout:e}=gr(),{closeSidebar:n}=Wa(),r=An(),i=()=>{e(),r("/"),n()},s=[{path:"/lobby",icon:dk,label:"Arena"},{path:"/messages",icon:Z_,label:"Messages"},{path:"/profile",icon:Hd,label:"Profile"}];return d.jsx(d.Fragment,{children:t&&d.jsxs("div",{className:"mobile-nav",children:[s.map(o=>d.jsxs(EI,{to:o.path,className:({isActive:a})=>`mobile-nav-item ${a?"active":""}`,children:[d.jsx(o.icon,{size:24}),d.jsx("span",{children:o.label})]},o.path)),d.jsxs("button",{onClick:i,className:"mobile-nav-item mobile-logout",children:[d.jsx(mk,{size:24}),d.jsx("span",{children:"Sign Out"})]})]})})}var Zm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw Wi(e)},Wi=function(t){return new Error("Firebase Database ("+r0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Tk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},$d={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,m=s>>2,p=(s&3)<<4|a>>4;let g=(a&15)<<2|h>>6,x=h&63;u||(x=64,o||(g=64)),r.push(n[m],n[p],n[g],n[x])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Tk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||h==null||p==null)throw new Nk;const g=s<<2|a>>4;if(r.push(g),h!==64){const x=a<<4&240|h>>2;if(r.push(x),p!==64){const N=h<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s0=function(t){const e=i0(t);return $d.encodeByteArray(e,!0)},ia=function(t){return s0(t).replace(/\./g,"")},sa=function(t){try{return $d.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(t){return o0(void 0,t)}function o0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Rk(n)||(t[n]=o0(t[n],e[n]));return t}function Rk(t){return t!=="__proto__"}/**
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
 */function Pk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ak=()=>Pk().__FIREBASE_DEFAULTS__,Ok=()=>{if(typeof process>"u"||typeof Zm>"u")return;const t=Zm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Dk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sa(t[1]);return e&&JSON.parse(e)},Wd=()=>{try{return Ak()||Ok()||Dk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},l0=t=>{var e,n;return(n=(e=Wd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gd=t=>{const e=l0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},a0=()=>{var t;return(t=Wd())===null||t===void 0?void 0:t.config},u0=t=>{var e;return(e=Wd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function qd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ia(JSON.stringify(n)),ia(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function Lk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function c0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jk(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bk(){return r0.NODE_ADMIN===!0}function Uk(){try{return typeof indexedDB=="object"}catch{return!1}}function Fk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk="FirebaseError";class Jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zk,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wo.prototype.create)}}class wo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Bk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Jt(i,a,r)}}function Bk(t,e){return t.replace(Vk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Vk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t){return JSON.parse(t)}function Me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ao(sa(s[0])||""),n=ao(sa(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Hk=function(t){const e=h0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},$k=function(t){const e=h0(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Li(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function _h(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oa(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function la(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(eg(s)&&eg(o)){if(!la(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function eg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)r[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const g=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],h,m;for(let p=0;p<80;p++){p<40?p<20?(h=a^s&(o^a),m=1518500249):(h=s^o^a,m=1859775393):p<60?(h=s&o|a&(s|o),m=2400959708):(h=s^o^a,m=3395469782);const g=(i<<5|i>>>27)+h+u+m+r[p]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Gk(t,e){const n=new Kk(t,e);return n.subscribe.bind(n)}class Kk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ic),i.error===void 0&&(i.error=ic),i.complete===void 0&&(i.complete=ic);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ic(){}function Yk(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ga=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Dn(t){return t&&t._delegate?t._delegate:t}class In{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Cr="[DEFAULT]";/**
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
 */class Xk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Kd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zk(e))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cr){return this.instances.has(e)}getOptions(e=Cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cr){return this.component?this.component.multipleInstances?e:Cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jk(t){return t===Cr?void 0:t}function Zk(t){return t.instantiationMode==="EAGER"}/**
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
 */class eT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const tT={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},nT=ne.INFO,rT={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},iT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=rT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ka{constructor(e){this.name=e,this._logLevel=nT,this._logHandler=iT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const sT=(t,e)=>e.some(n=>t instanceof n);let tg,ng;function oT(){return tg||(tg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lT(){return ng||(ng=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d0=new WeakMap,wh=new WeakMap,f0=new WeakMap,sc=new WeakMap,Qd=new WeakMap;function aT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(or(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&d0.set(n,t)}).catch(()=>{}),Qd.set(e,t),e}function uT(t){if(wh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});wh.set(t,e)}let Eh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||f0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cT(t){Eh=t(Eh)}function hT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oc(this),e,...n);return f0.set(r,e.sort?e.sort():[e]),or(r)}:lT().includes(t)?function(...e){return t.apply(oc(this),e),or(d0.get(this))}:function(...e){return or(t.apply(oc(this),e))}}function dT(t){return typeof t=="function"?hT(t):(t instanceof IDBTransaction&&uT(t),sT(t,oT())?new Proxy(t,Eh):t)}function or(t){if(t instanceof IDBRequest)return aT(t);if(sc.has(t))return sc.get(t);const e=dT(t);return e!==t&&(sc.set(t,e),Qd.set(e,t)),e}const oc=t=>Qd.get(t);function fT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=or(o);return r&&o.addEventListener("upgradeneeded",u=>{r(or(o.result),u.oldVersion,u.newVersion,or(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const pT=["get","getKey","getAll","getAllKeys","count"],mT=["put","add","delete","clear"],lc=new Map;function rg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lc.get(e))return lc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pT.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&u.done]))[0]};return lc.set(e,s),s}cT(t=>({...t,get:(e,n,r)=>rg(e,n)||t.get(e,n,r),has:(e,n)=>!!rg(e,n)||t.has(e,n)}));/**
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
 */class gT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sh="@firebase/app",ig="0.10.13";/**
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
 */const kn=new Ka("@firebase/app"),yT="@firebase/app-compat",_T="@firebase/analytics-compat",wT="@firebase/analytics",ET="@firebase/app-check-compat",ST="@firebase/app-check",CT="@firebase/auth",IT="@firebase/auth-compat",kT="@firebase/database",TT="@firebase/data-connect",NT="@firebase/database-compat",xT="@firebase/functions",RT="@firebase/functions-compat",PT="@firebase/installations",AT="@firebase/installations-compat",OT="@firebase/messaging",DT="@firebase/messaging-compat",LT="@firebase/performance",MT="@firebase/performance-compat",jT="@firebase/remote-config",bT="@firebase/remote-config-compat",UT="@firebase/storage",FT="@firebase/storage-compat",zT="@firebase/firestore",BT="@firebase/vertexai-preview",VT="@firebase/firestore-compat",HT="firebase",$T="10.14.1";/**
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
 */const Ch="[DEFAULT]",WT={[Sh]:"fire-core",[yT]:"fire-core-compat",[wT]:"fire-analytics",[_T]:"fire-analytics-compat",[ST]:"fire-app-check",[ET]:"fire-app-check-compat",[CT]:"fire-auth",[IT]:"fire-auth-compat",[kT]:"fire-rtdb",[TT]:"fire-data-connect",[NT]:"fire-rtdb-compat",[xT]:"fire-fn",[RT]:"fire-fn-compat",[PT]:"fire-iid",[AT]:"fire-iid-compat",[OT]:"fire-fcm",[DT]:"fire-fcm-compat",[LT]:"fire-perf",[MT]:"fire-perf-compat",[jT]:"fire-rc",[bT]:"fire-rc-compat",[UT]:"fire-gcs",[FT]:"fire-gcs-compat",[zT]:"fire-fst",[VT]:"fire-fst-compat",[BT]:"fire-vertex","fire-js":"fire-js",[HT]:"fire-js-all"};/**
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
 */const aa=new Map,GT=new Map,Ih=new Map;function sg(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hr(t){const e=t.name;if(Ih.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;Ih.set(e,t);for(const n of aa.values())sg(n,t);for(const n of GT.values())sg(n,t);return!0}function Eo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fn(t){return t.settings!==void 0}/**
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
 */const KT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lr=new wo("app","Firebase",KT);/**
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
 */class qT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lr.create("app-deleted",{appName:this._name})}}/**
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
 */const vr=$T;function p0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ch,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw lr.create("bad-app-name",{appName:String(i)});if(n||(n=a0()),!n)throw lr.create("no-options");const s=aa.get(i);if(s){if(la(n,s.options)&&la(r,s.config))return s;throw lr.create("duplicate-app",{appName:i})}const o=new eT(i);for(const u of Ih.values())o.addComponent(u);const a=new qT(n,r,o);return aa.set(i,a),a}function qa(t=Ch){const e=aa.get(t);if(!e&&t===Ch&&a0())return p0();if(!e)throw lr.create("no-app",{appName:t});return e}function It(t,e,n){var r;let i=(r=WT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(a.join(" "));return}hr(new In(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const YT="firebase-heartbeat-database",QT=1,uo="firebase-heartbeat-store";let ac=null;function m0(){return ac||(ac=fT(YT,QT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(uo)}catch(n){console.warn(n)}}}}).catch(t=>{throw lr.create("idb-open",{originalErrorMessage:t.message})})),ac}async function XT(t){try{const n=(await m0()).transaction(uo),r=await n.objectStore(uo).get(g0(t));return await n.done,r}catch(e){if(e instanceof Jt)kn.warn(e.message);else{const n=lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function og(t,e){try{const r=(await m0()).transaction(uo,"readwrite");await r.objectStore(uo).put(e,g0(t)),await r.done}catch(n){if(n instanceof Jt)kn.warn(n.message);else{const r=lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(r.message)}}}function g0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const JT=1024,ZT=30*24*60*60*1e3;class eN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=lg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ZT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lg(),{heartbeatsToSend:r,unsentEntries:i}=tN(this._heartbeatsCache.heartbeats),s=ia(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return kn.warn(n),""}}}function lg(){return new Date().toISOString().substring(0,10)}function tN(t,e=JT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ag(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ag(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uk()?Fk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await XT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return og(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return og(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ag(t){return ia(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function rN(t){hr(new In("platform-logger",e=>new gT(e),"PRIVATE")),hr(new In("heartbeat",e=>new eN(e),"PRIVATE")),It(Sh,ig,t),It(Sh,ig,"esm2017"),It("fire-js","")}rN("");var iN="firebase",sN="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It(iN,sN,"app");function Xd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function v0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oN=v0,y0=new wo("auth","Firebase",v0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new Ka("@firebase/auth");function lN(t,...e){ua.logLevel<=ne.WARN&&ua.warn(`Auth (${vr}): ${t}`,...e)}function Tl(t,...e){ua.logLevel<=ne.ERROR&&ua.error(`Auth (${vr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,...e){throw Zd(t,...e)}function zt(t,...e){return Zd(t,...e)}function Jd(t,e,n){const r=Object.assign(Object.assign({},oN()),{[e]:n});return new wo("auth","Firebase",r).create(e,{appName:t.name})}function Or(t){return Jd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function aN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Qt(t,"argument-error"),Jd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return y0.create(t,...e)}function G(t,e,...n){if(!t)throw Zd(e,...n)}function pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Tl(e),new Error(e)}function Tn(t,e){t||pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uN(){return ug()==="http:"||ug()==="https:"}function ug(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uN()||Mk()||"connection"in navigator)?navigator.onLine:!0}function hN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=Yd()||c0()}get(){return cN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=new So(3e4,6e4);function tf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ki(t,e,n,r,i={}){return w0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Gi(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return Lk()||(h.referrerPolicy="no-referrer"),_0.fetch()(E0(t,t.config.apiHost,n,a),h)})}async function w0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},dN),e);try{const i=new mN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ul(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,h]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ul(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ul(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ul(t,"user-disabled",o);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Jd(t,m,h);Qt(t,m)}}catch(i){if(i instanceof Jt)throw i;Qt(t,"network-request-failed",{message:String(i)})}}async function pN(t,e,n,r,i={}){const s=await Ki(t,e,n,r,i);return"mfaPendingCredential"in s&&Qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function E0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ef(t.config,i):`${t.config.apiScheme}://${i}`}class mN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zt(this.auth,"network-request-failed")),fN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ul(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=zt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN(t,e){return Ki(t,"POST","/v1/accounts:delete",e)}async function S0(t,e){return Ki(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vN(t,e=!1){const n=Dn(t),r=await n.getIdToken(e),i=nf(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ms(uc(i.auth_time)),issuedAtTime:Ms(uc(i.iat)),expirationTime:Ms(uc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function uc(t){return Number(t)*1e3}function nf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Tl("JWT malformed, contained fewer than 3 sections"),null;try{const i=sa(n);return i?JSON.parse(i):(Tl("Failed to decode base64 JWT payload"),null)}catch(i){return Tl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cg(t){const e=nf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jt&&yN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function yN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ms(this.lastLoginAt),this.creationTime=Ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ca(t){var e;const n=t.auth,r=await t.getIdToken(),i=await co(t,S0(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?C0(s.providerUserInfo):[],a=EN(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),m=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Th(s.createdAt,s.lastLoginAt),isAnonymous:m};Object.assign(t,p)}async function wN(t){const e=Dn(t);await ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function C0(t){return t.map(e=>{var{providerId:n}=e,r=Xd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SN(t,e){const n=await w0(t,{},async()=>{const r=Gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=E0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CN(t,e){return Ki(t,"POST","/v2/accounts:revokeToken",tf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=cg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await SN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new wi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wi,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Xd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _N(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Th(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await co(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vN(this,e)}reload(){return wN(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ca(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(Or(this.auth));const e=await this.getIdToken();return await co(this,gN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,h,m;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,x=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:E,emailVerified:D,isAnonymous:j,providerData:b,stsTokenManager:C}=n;G(E&&C,e,"internal-error");const y=wi.fromJSON(this.name,C);G(typeof E=="string",e,"internal-error"),Un(p,e.name),Un(g,e.name),G(typeof D=="boolean",e,"internal-error"),G(typeof j=="boolean",e,"internal-error"),Un(x,e.name),Un(N,e.name),Un(R,e.name),Un(A,e.name),Un(w,e.name),Un(_,e.name);const S=new mn({uid:E,auth:e,email:g,emailVerified:D,displayName:p,isAnonymous:j,photoURL:N,phoneNumber:x,tenantId:R,stsTokenManager:y,createdAt:w,lastLoginAt:_});return b&&Array.isArray(b)&&(S.providerData=b.map(I=>Object.assign({},I))),A&&(S._redirectEventId=A),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new wi;i.updateFromServerResponse(n);const s=new mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ca(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?C0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new wi;a.updateFromIdToken(r);const u=new mn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Th(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Map;function gn(t){Tn(t instanceof Function,"Expected a class definition");let e=hg.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hg.set(t,e),e)}/**
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
 */class I0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}I0.type="NONE";const dg=I0;/**
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
 */function Nl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ei{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Nl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Nl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ei(gn(dg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||gn(dg);const o=Nl(r,e.config.apiKey,e.name);let a=null;for(const h of n)try{const m=await h._get(o);if(m){const p=mn._fromJSON(e,m);h!==s&&(a=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ei(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Ei(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(x0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(k0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(P0(e))return"Blackberry";if(A0(e))return"Webos";if(T0(e))return"Safari";if((e.includes("chrome/")||N0(e))&&!e.includes("edge/"))return"Chrome";if(R0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function k0(t=et()){return/firefox\//i.test(t)}function T0(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function N0(t=et()){return/crios\//i.test(t)}function x0(t=et()){return/iemobile/i.test(t)}function R0(t=et()){return/android/i.test(t)}function P0(t=et()){return/blackberry/i.test(t)}function A0(t=et()){return/webos/i.test(t)}function rf(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IN(t=et()){var e;return rf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kN(){return jk()&&document.documentMode===10}function O0(t=et()){return rf(t)||R0(t)||A0(t)||P0(t)||/windows phone/i.test(t)||x0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t,e=[]){let n;switch(t){case"Browser":n=fg(et());break;case"Worker":n=`${fg(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vr}/${r}`}/**
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
 */class TN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function NN(t,e={}){return Ki(t,"GET","/v2/passwordPolicy",tf(t,e))}/**
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
 */const xN=6;class RN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:xN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pg(this),this.idTokenSubscription=new pg(this),this.beforeStateQueue=new TN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=y0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ei.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await S0(this,{idToken:e}),r=await mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ca(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(Or(this));const n=e?Dn(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(Or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(Or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await NN(this),n=new RN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await CN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Ei.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=D0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ya(t){return Dn(t)}class pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gk(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AN(t){sf=t}function ON(t){return sf.loadJS(t)}function DN(){return sf.gapiScript}function LN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t,e){const n=Eo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(la(s,e??{}))return i;Qt(i,"already-initialized")}return n.initialize({options:e})}function jN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bN(t,e,n){const r=Ya(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=L0(e),{host:o,port:a}=UN(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),FN()}function L0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function UN(t){const e=L0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:mg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:mg(o)}}}function mg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(t,e){return pN(t,"POST","/v1/accounts:signInWithIdp",tf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN="http://localhost";class Ur extends M0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Xd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ur(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Si(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Si(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Si(e,n)}buildRequest(){const e={requestUri:zN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Co extends of{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Co{constructor(){super("facebook.com")}static credential(e){return Ur._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ur._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Co{constructor(){super("github.com")}static credential(e){return Ur._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Co{constructor(){super("twitter.com")}static credential(e,n){return Ur._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.TWITTER_SIGN_IN_METHOD="twitter.com";Wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await mn._fromIdTokenResponse(e,r,i),o=gg(r);return new Mi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gg(r);return new Mi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends Jt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ha.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ha(e,n,r,i)}}function j0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ha._fromErrorAndOperation(t,s,e,r):s})}async function BN(t,e,n=!1){const r=await co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mi._forOperation(t,"link",r)}/**
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
 */async function VN(t,e,n=!1){const{auth:r}=t;if(fn(r.app))return Promise.reject(Or(r));const i="reauthenticate";try{const s=await co(t,j0(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=nf(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),Mi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HN(t,e,n=!1){if(fn(t.app))return Promise.reject(Or(t));const r="signIn",i=await j0(t,r,e),s=await Mi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function $N(t,e,n,r){return Dn(t).onIdTokenChanged(e,n,r)}function WN(t,e,n){return Dn(t).beforeAuthStateChanged(e,n)}const da="__sak";/**
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
 */class b0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(da,"1"),this.storage.removeItem(da),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=1e3,KN=10;class U0 extends b0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=O0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);kN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,KN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},GN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}U0.type="LOCAL";const qN=U0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0 extends b0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}F0.type="SESSION";const z0=F0;/**
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
 */function YN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Qa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async h=>h(n.origin,s)),u=await YN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class QN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const h=lf("",20);i.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(m),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(m),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function XN(t){Yt().location.href=t}/**
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
 */function B0(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function JN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function e2(){return B0()?self:null}/**
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
 */const V0="firebaseLocalStorageDb",t2=1,fa="firebaseLocalStorage",H0="fbase_key";class Io{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xa(t,e){return t.transaction([fa],e?"readwrite":"readonly").objectStore(fa)}function n2(){const t=indexedDB.deleteDatabase(V0);return new Io(t).toPromise()}function Nh(){const t=indexedDB.open(V0,t2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fa,{keyPath:H0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fa)?e(r):(r.close(),await n2(),e(await Nh()))})})}async function vg(t,e,n){const r=Xa(t,!0).put({[H0]:e,value:n});return new Io(r).toPromise()}async function r2(t,e){const n=Xa(t,!1).get(e),r=await new Io(n).toPromise();return r===void 0?null:r.value}function yg(t,e){const n=Xa(t,!0).delete(e);return new Io(n).toPromise()}const i2=800,s2=3;class $0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>s2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return B0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qa._getInstance(e2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await JN(),!this.activeServiceWorker)return;this.sender=new QN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nh();return await vg(e,da,"1"),await yg(e,da),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>r2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Xa(i,!1).getAll();return new Io(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),i2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$0.type="LOCAL";const o2=$0;new So(3e4,6e4);/**
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
 */function W0(t,e){return e?gn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class af extends M0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Si(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Si(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Si(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function l2(t){return HN(t.auth,new af(t),t.bypassAuthState)}function a2(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),VN(n,new af(t),t.bypassAuthState)}async function u2(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),BN(n,new af(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return l2;case"linkViaPopup":case"linkViaRedirect":return u2;case"reauthViaPopup":case"reauthViaRedirect":return a2;default:Qt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2=new So(2e3,1e4);async function h2(t,e,n){if(fn(t.app))return Promise.reject(zt(t,"operation-not-supported-in-this-environment"));const r=Ya(t);aN(t,e,of);const i=W0(r,n);return new xr(r,"signInViaPopup",e,i).executeNotNull()}class xr extends G0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=lf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,c2.get())};e()}}xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2="pendingRedirect",xl=new Map;class f2 extends G0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xl.get(this.auth._key());if(!e){try{const r=await p2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xl.set(this.auth._key(),e)}return this.bypassAuthState||xl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function p2(t,e){const n=v2(e),r=g2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function m2(t,e){xl.set(t._key(),e)}function g2(t){return gn(t._redirectPersistence)}function v2(t){return Nl(d2,t.config.apiKey,t.name)}async function y2(t,e,n=!1){if(fn(t.app))return Promise.reject(Or(t));const r=Ya(t),i=W0(r,e),o=await new f2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=10*60*1e3;class w2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!E2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!K0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_2&&this.cachedEventUids.clear(),this.cachedEventUids.has(_g(e))}saveEventToCache(e){this.cachedEventUids.add(_g(e)),this.lastProcessedEventTime=Date.now()}}function _g(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function K0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function E2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return K0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S2(t,e={}){return Ki(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,I2=/^https?/;async function k2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await S2(t);for(const n of e)try{if(T2(n))return}catch{}Qt(t,"unauthorized-domain")}function T2(t){const e=kh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!I2.test(n))return!1;if(C2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const N2=new So(3e4,6e4);function wg(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function x2(t){return new Promise((e,n)=>{var r,i,s;function o(){wg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wg(),n(zt(t,"network-request-failed"))},timeout:N2.get()})}if(!((i=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Yt().gapi)===null||s===void 0)&&s.load)o();else{const a=LN("iframefcb");return Yt()[a]=()=>{gapi.load?o():n(zt(t,"network-request-failed"))},ON(`${DN()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Rl=null,e})}let Rl=null;function R2(t){return Rl=Rl||x2(t),Rl}/**
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
 */const P2=new So(5e3,15e3),A2="__/auth/iframe",O2="emulator/auth/iframe",D2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},L2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function M2(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ef(e,O2):`https://${t.config.authDomain}/${A2}`,r={apiKey:e.apiKey,appName:t.name,v:vr},i=L2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Gi(r).slice(1)}`}async function j2(t){const e=await R2(t),n=Yt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:M2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:D2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=zt(t,"network-request-failed"),a=Yt().setTimeout(()=>{s(o)},P2.get());function u(){Yt().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const b2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},U2=500,F2=600,z2="_blank",B2="http://localhost";class Eg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function V2(t,e,n,r=U2,i=F2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},b2),{width:r.toString(),height:i.toString(),top:s,left:o}),h=et().toLowerCase();n&&(a=N0(h)?z2:n),k0(h)&&(e=e||B2,u.scrollbars="yes");const m=Object.entries(u).reduce((g,[x,N])=>`${g}${x}=${N},`,"");if(IN(h)&&a!=="_self")return H2(e||"",a),new Eg(null);const p=window.open(e||"",a,m);G(p,t,"popup-blocked");try{p.focus()}catch{}return new Eg(p)}function H2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $2="__/auth/handler",W2="emulator/auth/handler",G2=encodeURIComponent("fac");async function Sg(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vr,eventId:i};if(e instanceof of){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_h(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))o[m]=p}if(e instanceof Co){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const m of Object.keys(a))a[m]===void 0&&delete a[m];const u=await t._getAppCheckToken(),h=u?`#${G2}=${encodeURIComponent(u)}`:"";return`${K2(t)}?${Gi(a).slice(1)}${h}`}function K2({config:t}){return t.emulator?ef(t,W2):`https://${t.authDomain}/${$2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="webStorageSupport";class q2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=z0,this._completeRedirectFn=y2,this._overrideRedirectResult=m2}async _openPopup(e,n,r,i){var s;Tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Sg(e,n,r,kh(),i);return V2(e,o,lf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Sg(e,n,r,kh(),i);return XN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await j2(e),r=new w2(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cc,{type:cc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[cc];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=k2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return O0()||T0()||rf()}}const Y2=q2;var Cg="@firebase/auth",Ig="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function J2(t){hr(new In("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:D0(t)},h=new PN(r,i,s,u);return jN(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hr(new In("auth-internal",e=>{const n=Ya(e.getProvider("auth").getImmediate());return(r=>new Q2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(Cg,Ig,X2(t)),It(Cg,Ig,"esm2017")}/**
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
 */const Z2=5*60,ex=u0("authIdTokenMaxAge")||Z2;let kg=null;const tx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ex)return;const i=n==null?void 0:n.token;kg!==i&&(kg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nx(t=qa()){const e=Eo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=MN(t,{popupRedirectResolver:Y2,persistence:[o2,qN,z0]}),r=u0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=tx(s.toString());WN(n,o,()=>o(n.currentUser)),$N(n,a=>o(a))}}const i=l0("auth");return i&&bN(n,`http://${i}`),n}function rx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}AN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=zt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});J2("Browser");var Tg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var q0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,y){function S(){}S.prototype=y.prototype,C.D=y.prototype,C.prototype=new S,C.prototype.constructor=C,C.C=function(I,T,P){for(var k=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)k[Ue-2]=arguments[Ue];return y.prototype[T].apply(I,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(C,y,S){S||(S=0);var I=Array(16);if(typeof y=="string")for(var T=0;16>T;++T)I[T]=y.charCodeAt(S++)|y.charCodeAt(S++)<<8|y.charCodeAt(S++)<<16|y.charCodeAt(S++)<<24;else for(T=0;16>T;++T)I[T]=y[S++]|y[S++]<<8|y[S++]<<16|y[S++]<<24;y=C.g[0],S=C.g[1],T=C.g[2];var P=C.g[3],k=y+(P^S&(T^P))+I[0]+3614090360&4294967295;y=S+(k<<7&4294967295|k>>>25),k=P+(T^y&(S^T))+I[1]+3905402710&4294967295,P=y+(k<<12&4294967295|k>>>20),k=T+(S^P&(y^S))+I[2]+606105819&4294967295,T=P+(k<<17&4294967295|k>>>15),k=S+(y^T&(P^y))+I[3]+3250441966&4294967295,S=T+(k<<22&4294967295|k>>>10),k=y+(P^S&(T^P))+I[4]+4118548399&4294967295,y=S+(k<<7&4294967295|k>>>25),k=P+(T^y&(S^T))+I[5]+1200080426&4294967295,P=y+(k<<12&4294967295|k>>>20),k=T+(S^P&(y^S))+I[6]+2821735955&4294967295,T=P+(k<<17&4294967295|k>>>15),k=S+(y^T&(P^y))+I[7]+4249261313&4294967295,S=T+(k<<22&4294967295|k>>>10),k=y+(P^S&(T^P))+I[8]+1770035416&4294967295,y=S+(k<<7&4294967295|k>>>25),k=P+(T^y&(S^T))+I[9]+2336552879&4294967295,P=y+(k<<12&4294967295|k>>>20),k=T+(S^P&(y^S))+I[10]+4294925233&4294967295,T=P+(k<<17&4294967295|k>>>15),k=S+(y^T&(P^y))+I[11]+2304563134&4294967295,S=T+(k<<22&4294967295|k>>>10),k=y+(P^S&(T^P))+I[12]+1804603682&4294967295,y=S+(k<<7&4294967295|k>>>25),k=P+(T^y&(S^T))+I[13]+4254626195&4294967295,P=y+(k<<12&4294967295|k>>>20),k=T+(S^P&(y^S))+I[14]+2792965006&4294967295,T=P+(k<<17&4294967295|k>>>15),k=S+(y^T&(P^y))+I[15]+1236535329&4294967295,S=T+(k<<22&4294967295|k>>>10),k=y+(T^P&(S^T))+I[1]+4129170786&4294967295,y=S+(k<<5&4294967295|k>>>27),k=P+(S^T&(y^S))+I[6]+3225465664&4294967295,P=y+(k<<9&4294967295|k>>>23),k=T+(y^S&(P^y))+I[11]+643717713&4294967295,T=P+(k<<14&4294967295|k>>>18),k=S+(P^y&(T^P))+I[0]+3921069994&4294967295,S=T+(k<<20&4294967295|k>>>12),k=y+(T^P&(S^T))+I[5]+3593408605&4294967295,y=S+(k<<5&4294967295|k>>>27),k=P+(S^T&(y^S))+I[10]+38016083&4294967295,P=y+(k<<9&4294967295|k>>>23),k=T+(y^S&(P^y))+I[15]+3634488961&4294967295,T=P+(k<<14&4294967295|k>>>18),k=S+(P^y&(T^P))+I[4]+3889429448&4294967295,S=T+(k<<20&4294967295|k>>>12),k=y+(T^P&(S^T))+I[9]+568446438&4294967295,y=S+(k<<5&4294967295|k>>>27),k=P+(S^T&(y^S))+I[14]+3275163606&4294967295,P=y+(k<<9&4294967295|k>>>23),k=T+(y^S&(P^y))+I[3]+4107603335&4294967295,T=P+(k<<14&4294967295|k>>>18),k=S+(P^y&(T^P))+I[8]+1163531501&4294967295,S=T+(k<<20&4294967295|k>>>12),k=y+(T^P&(S^T))+I[13]+2850285829&4294967295,y=S+(k<<5&4294967295|k>>>27),k=P+(S^T&(y^S))+I[2]+4243563512&4294967295,P=y+(k<<9&4294967295|k>>>23),k=T+(y^S&(P^y))+I[7]+1735328473&4294967295,T=P+(k<<14&4294967295|k>>>18),k=S+(P^y&(T^P))+I[12]+2368359562&4294967295,S=T+(k<<20&4294967295|k>>>12),k=y+(S^T^P)+I[5]+4294588738&4294967295,y=S+(k<<4&4294967295|k>>>28),k=P+(y^S^T)+I[8]+2272392833&4294967295,P=y+(k<<11&4294967295|k>>>21),k=T+(P^y^S)+I[11]+1839030562&4294967295,T=P+(k<<16&4294967295|k>>>16),k=S+(T^P^y)+I[14]+4259657740&4294967295,S=T+(k<<23&4294967295|k>>>9),k=y+(S^T^P)+I[1]+2763975236&4294967295,y=S+(k<<4&4294967295|k>>>28),k=P+(y^S^T)+I[4]+1272893353&4294967295,P=y+(k<<11&4294967295|k>>>21),k=T+(P^y^S)+I[7]+4139469664&4294967295,T=P+(k<<16&4294967295|k>>>16),k=S+(T^P^y)+I[10]+3200236656&4294967295,S=T+(k<<23&4294967295|k>>>9),k=y+(S^T^P)+I[13]+681279174&4294967295,y=S+(k<<4&4294967295|k>>>28),k=P+(y^S^T)+I[0]+3936430074&4294967295,P=y+(k<<11&4294967295|k>>>21),k=T+(P^y^S)+I[3]+3572445317&4294967295,T=P+(k<<16&4294967295|k>>>16),k=S+(T^P^y)+I[6]+76029189&4294967295,S=T+(k<<23&4294967295|k>>>9),k=y+(S^T^P)+I[9]+3654602809&4294967295,y=S+(k<<4&4294967295|k>>>28),k=P+(y^S^T)+I[12]+3873151461&4294967295,P=y+(k<<11&4294967295|k>>>21),k=T+(P^y^S)+I[15]+530742520&4294967295,T=P+(k<<16&4294967295|k>>>16),k=S+(T^P^y)+I[2]+3299628645&4294967295,S=T+(k<<23&4294967295|k>>>9),k=y+(T^(S|~P))+I[0]+4096336452&4294967295,y=S+(k<<6&4294967295|k>>>26),k=P+(S^(y|~T))+I[7]+1126891415&4294967295,P=y+(k<<10&4294967295|k>>>22),k=T+(y^(P|~S))+I[14]+2878612391&4294967295,T=P+(k<<15&4294967295|k>>>17),k=S+(P^(T|~y))+I[5]+4237533241&4294967295,S=T+(k<<21&4294967295|k>>>11),k=y+(T^(S|~P))+I[12]+1700485571&4294967295,y=S+(k<<6&4294967295|k>>>26),k=P+(S^(y|~T))+I[3]+2399980690&4294967295,P=y+(k<<10&4294967295|k>>>22),k=T+(y^(P|~S))+I[10]+4293915773&4294967295,T=P+(k<<15&4294967295|k>>>17),k=S+(P^(T|~y))+I[1]+2240044497&4294967295,S=T+(k<<21&4294967295|k>>>11),k=y+(T^(S|~P))+I[8]+1873313359&4294967295,y=S+(k<<6&4294967295|k>>>26),k=P+(S^(y|~T))+I[15]+4264355552&4294967295,P=y+(k<<10&4294967295|k>>>22),k=T+(y^(P|~S))+I[6]+2734768916&4294967295,T=P+(k<<15&4294967295|k>>>17),k=S+(P^(T|~y))+I[13]+1309151649&4294967295,S=T+(k<<21&4294967295|k>>>11),k=y+(T^(S|~P))+I[4]+4149444226&4294967295,y=S+(k<<6&4294967295|k>>>26),k=P+(S^(y|~T))+I[11]+3174756917&4294967295,P=y+(k<<10&4294967295|k>>>22),k=T+(y^(P|~S))+I[2]+718787259&4294967295,T=P+(k<<15&4294967295|k>>>17),k=S+(P^(T|~y))+I[9]+3951481745&4294967295,C.g[0]=C.g[0]+y&4294967295,C.g[1]=C.g[1]+(T+(k<<21&4294967295|k>>>11))&4294967295,C.g[2]=C.g[2]+T&4294967295,C.g[3]=C.g[3]+P&4294967295}r.prototype.u=function(C,y){y===void 0&&(y=C.length);for(var S=y-this.blockSize,I=this.B,T=this.h,P=0;P<y;){if(T==0)for(;P<=S;)i(this,C,P),P+=this.blockSize;if(typeof C=="string"){for(;P<y;)if(I[T++]=C.charCodeAt(P++),T==this.blockSize){i(this,I),T=0;break}}else for(;P<y;)if(I[T++]=C[P++],T==this.blockSize){i(this,I),T=0;break}}this.h=T,this.o+=y},r.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var y=1;y<C.length-8;++y)C[y]=0;var S=8*this.o;for(y=C.length-8;y<C.length;++y)C[y]=S&255,S/=256;for(this.u(C),C=Array(16),y=S=0;4>y;++y)for(var I=0;32>I;I+=8)C[S++]=this.g[y]>>>I&255;return C};function s(C,y){var S=a;return Object.prototype.hasOwnProperty.call(S,C)?S[C]:S[C]=y(C)}function o(C,y){this.h=y;for(var S=[],I=!0,T=C.length-1;0<=T;T--){var P=C[T]|0;I&&P==y||(S[T]=P,I=!1)}this.g=S}var a={};function u(C){return-128<=C&&128>C?s(C,function(y){return new o([y|0],0>y?-1:0)}):new o([C|0],0>C?-1:0)}function h(C){if(isNaN(C)||!isFinite(C))return p;if(0>C)return A(h(-C));for(var y=[],S=1,I=0;C>=S;I++)y[I]=C/S|0,S*=4294967296;return new o(y,0)}function m(C,y){if(C.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(C.charAt(0)=="-")return A(m(C.substring(1),y));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=h(Math.pow(y,8)),I=p,T=0;T<C.length;T+=8){var P=Math.min(8,C.length-T),k=parseInt(C.substring(T,T+P),y);8>P?(P=h(Math.pow(y,P)),I=I.j(P).add(h(k))):(I=I.j(S),I=I.add(h(k)))}return I}var p=u(0),g=u(1),x=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-A(this).m();for(var C=0,y=1,S=0;S<this.g.length;S++){var I=this.i(S);C+=(0<=I?I:4294967296+I)*y,y*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(N(this))return"0";if(R(this))return"-"+A(this).toString(C);for(var y=h(Math.pow(C,6)),S=this,I="";;){var T=D(S,y).g;S=w(S,T.j(y));var P=((0<S.g.length?S.g[0]:S.h)>>>0).toString(C);if(S=T,N(S))return P+I;for(;6>P.length;)P="0"+P;I=P+I}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function N(C){if(C.h!=0)return!1;for(var y=0;y<C.g.length;y++)if(C.g[y]!=0)return!1;return!0}function R(C){return C.h==-1}t.l=function(C){return C=w(this,C),R(C)?-1:N(C)?0:1};function A(C){for(var y=C.g.length,S=[],I=0;I<y;I++)S[I]=~C.g[I];return new o(S,~C.h).add(g)}t.abs=function(){return R(this)?A(this):this},t.add=function(C){for(var y=Math.max(this.g.length,C.g.length),S=[],I=0,T=0;T<=y;T++){var P=I+(this.i(T)&65535)+(C.i(T)&65535),k=(P>>>16)+(this.i(T)>>>16)+(C.i(T)>>>16);I=k>>>16,P&=65535,k&=65535,S[T]=k<<16|P}return new o(S,S[S.length-1]&-2147483648?-1:0)};function w(C,y){return C.add(A(y))}t.j=function(C){if(N(this)||N(C))return p;if(R(this))return R(C)?A(this).j(A(C)):A(A(this).j(C));if(R(C))return A(this.j(A(C)));if(0>this.l(x)&&0>C.l(x))return h(this.m()*C.m());for(var y=this.g.length+C.g.length,S=[],I=0;I<2*y;I++)S[I]=0;for(I=0;I<this.g.length;I++)for(var T=0;T<C.g.length;T++){var P=this.i(I)>>>16,k=this.i(I)&65535,Ue=C.i(T)>>>16,xt=C.i(T)&65535;S[2*I+2*T]+=k*xt,_(S,2*I+2*T),S[2*I+2*T+1]+=P*xt,_(S,2*I+2*T+1),S[2*I+2*T+1]+=k*Ue,_(S,2*I+2*T+1),S[2*I+2*T+2]+=P*Ue,_(S,2*I+2*T+2)}for(I=0;I<y;I++)S[I]=S[2*I+1]<<16|S[2*I];for(I=y;I<2*y;I++)S[I]=0;return new o(S,0)};function _(C,y){for(;(C[y]&65535)!=C[y];)C[y+1]+=C[y]>>>16,C[y]&=65535,y++}function E(C,y){this.g=C,this.h=y}function D(C,y){if(N(y))throw Error("division by zero");if(N(C))return new E(p,p);if(R(C))return y=D(A(C),y),new E(A(y.g),A(y.h));if(R(y))return y=D(C,A(y)),new E(A(y.g),y.h);if(30<C.g.length){if(R(C)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var S=g,I=y;0>=I.l(C);)S=j(S),I=j(I);var T=b(S,1),P=b(I,1);for(I=b(I,2),S=b(S,2);!N(I);){var k=P.add(I);0>=k.l(C)&&(T=T.add(S),P=k),I=b(I,1),S=b(S,1)}return y=w(C,T.j(y)),new E(T,y)}for(T=p;0<=C.l(y);){for(S=Math.max(1,Math.floor(C.m()/y.m())),I=Math.ceil(Math.log(S)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),P=h(S),k=P.j(y);R(k)||0<k.l(C);)S-=I,P=h(S),k=P.j(y);N(P)&&(P=g),T=T.add(P),C=w(C,k)}return new E(T,C)}t.A=function(C){return D(this,C).h},t.and=function(C){for(var y=Math.max(this.g.length,C.g.length),S=[],I=0;I<y;I++)S[I]=this.i(I)&C.i(I);return new o(S,this.h&C.h)},t.or=function(C){for(var y=Math.max(this.g.length,C.g.length),S=[],I=0;I<y;I++)S[I]=this.i(I)|C.i(I);return new o(S,this.h|C.h)},t.xor=function(C){for(var y=Math.max(this.g.length,C.g.length),S=[],I=0;I<y;I++)S[I]=this.i(I)^C.i(I);return new o(S,this.h^C.h)};function j(C){for(var y=C.g.length+1,S=[],I=0;I<y;I++)S[I]=C.i(I)<<1|C.i(I-1)>>>31;return new o(S,C.h)}function b(C,y){var S=y>>5;y%=32;for(var I=C.g.length-S,T=[],P=0;P<I;P++)T[P]=0<y?C.i(P+S)>>>y|C.i(P+S+1)<<32-y:C.i(P+S);return new o(T,C.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=m,q0=o}).apply(typeof Tg<"u"?Tg:typeof self<"u"?self:typeof window<"u"?window:{});var cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,c,f){return l==Array.prototype||l==Object.prototype||(l[c]=f.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof cl=="object"&&cl];for(var c=0;c<l.length;++c){var f=l[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(l,c){if(c)e:{var f=r;l=l.split(".");for(var v=0;v<l.length-1;v++){var O=l[v];if(!(O in f))break e;f=f[O]}l=l[l.length-1],v=f[l],c=c(v),c!=v&&c!=null&&e(f,l,{configurable:!0,writable:!0,value:c})}}function s(l,c){l instanceof String&&(l+="");var f=0,v=!1,O={next:function(){if(!v&&f<l.length){var L=f++;return{value:c(L,l[L]),done:!1}}return v=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var c=typeof l;return c=c!="object"?c:l?Array.isArray(l)?"array":c:"null",c=="array"||c=="object"&&typeof l.length=="number"}function h(l){var c=typeof l;return c=="object"&&l!=null||c=="function"}function m(l,c,f){return l.call.apply(l.bind,arguments)}function p(l,c,f){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,v),l.apply(c,O)}}return function(){return l.apply(c,arguments)}}function g(l,c,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:p,g.apply(null,arguments)}function x(l,c){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function N(l,c){function f(){}f.prototype=c.prototype,l.aa=c.prototype,l.prototype=new f,l.prototype.constructor=l,l.Qb=function(v,O,L){for(var F=Array(arguments.length-2),le=2;le<arguments.length;le++)F[le-2]=arguments[le];return c.prototype[O].apply(v,F)}}function R(l){const c=l.length;if(0<c){const f=Array(c);for(let v=0;v<c;v++)f[v]=l[v];return f}return[]}function A(l,c){for(let f=1;f<arguments.length;f++){const v=arguments[f];if(u(v)){const O=l.length||0,L=v.length||0;l.length=O+L;for(let F=0;F<L;F++)l[O+F]=v[F]}else l.push(v)}}class w{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(l){return/^[\s\xa0]*$/.test(l)}function E(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var j=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function b(l,c,f){for(const v in l)c.call(f,l[v],v,l)}function C(l,c){for(const f in l)c.call(void 0,l[f],f,l)}function y(l){const c={};for(const f in l)c[f]=l[f];return c}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(l,c){let f,v;for(let O=1;O<arguments.length;O++){v=arguments[O];for(f in v)l[f]=v[f];for(let L=0;L<S.length;L++)f=S[L],Object.prototype.hasOwnProperty.call(v,f)&&(l[f]=v[f])}}function T(l){var c=1;l=l.split(":");const f=[];for(;0<c&&l.length;)f.push(l.shift()),c--;return l.length&&f.push(l.join(":")),f}function P(l){a.setTimeout(()=>{throw l},0)}function k(){var l=$;let c=null;return l.g&&(c=l.g,l.g=l.g.next,l.g||(l.h=null),c.next=null),c}class Ue{constructor(){this.h=this.g=null}add(c,f){const v=xt.get();v.set(c,f),this.h?this.h.next=v:this.g=v,this.h=v}}var xt=new w(()=>new V,l=>l.reset());class V{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let W,z=!1,$=new Ue,K=()=>{const l=a.Promise.resolve(void 0);W=()=>{l.then(ge)}};var ge=()=>{for(var l;l=k();){try{l.h.call(l.g)}catch(f){P(f)}var c=xt;c.j(l),100>c.h&&(c.h++,l.next=c.g,c.g=l)}z=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(l,c){this.type=l,this.g=this.target=c,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var en=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,c=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const f=()=>{};a.addEventListener("test",f,c),a.removeEventListener("test",f,c)}catch{}return l}();function tn(l,c){if(Se.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var f=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=c,c=l.relatedTarget){if(j){e:{try{D(c.nodeName);var O=!0;break e}catch{}O=!1}O||(c=null)}}else f=="mouseover"?c=l.fromElement:f=="mouseout"&&(c=l.toElement);this.relatedTarget=c,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:nn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&tn.aa.h.call(this)}}N(tn,Se);var nn={2:"touch",3:"pen",4:"mouse"};tn.prototype.h=function(){tn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var rn="closure_listenable_"+(1e6*Math.random()|0),f1=0;function p1(l,c,f,v,O){this.listener=l,this.proxy=null,this.src=c,this.type=f,this.capture=!!v,this.ha=O,this.key=++f1,this.da=this.fa=!1}function Ao(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Oo(l){this.src=l,this.g={},this.h=0}Oo.prototype.add=function(l,c,f,v,O){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var F=su(l,c,v,O);return-1<F?(c=l[F],f||(c.fa=!1)):(c=new p1(c,this.src,L,!!v,O),c.fa=f,l.push(c)),c};function iu(l,c){var f=c.type;if(f in l.g){var v=l.g[f],O=Array.prototype.indexOf.call(v,c,void 0),L;(L=0<=O)&&Array.prototype.splice.call(v,O,1),L&&(Ao(c),l.g[f].length==0&&(delete l.g[f],l.h--))}}function su(l,c,f,v){for(var O=0;O<l.length;++O){var L=l[O];if(!L.da&&L.listener==c&&L.capture==!!f&&L.ha==v)return O}return-1}var ou="closure_lm_"+(1e6*Math.random()|0),lu={};function Lf(l,c,f,v,O){if(Array.isArray(c)){for(var L=0;L<c.length;L++)Lf(l,c[L],f,v,O);return null}return f=bf(f),l&&l[rn]?l.K(c,f,h(v)?!!v.capture:!1,O):m1(l,c,f,!1,v,O)}function m1(l,c,f,v,O,L){if(!c)throw Error("Invalid event type");var F=h(O)?!!O.capture:!!O,le=uu(l);if(le||(l[ou]=le=new Oo(l)),f=le.add(c,f,v,F,L),f.proxy)return f;if(v=g1(),f.proxy=v,v.src=l,v.listener=f,l.addEventListener)en||(O=F),O===void 0&&(O=!1),l.addEventListener(c.toString(),v,O);else if(l.attachEvent)l.attachEvent(jf(c.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function g1(){function l(f){return c.call(l.src,l.listener,f)}const c=v1;return l}function Mf(l,c,f,v,O){if(Array.isArray(c))for(var L=0;L<c.length;L++)Mf(l,c[L],f,v,O);else v=h(v)?!!v.capture:!!v,f=bf(f),l&&l[rn]?(l=l.i,c=String(c).toString(),c in l.g&&(L=l.g[c],f=su(L,f,v,O),-1<f&&(Ao(L[f]),Array.prototype.splice.call(L,f,1),L.length==0&&(delete l.g[c],l.h--)))):l&&(l=uu(l))&&(c=l.g[c.toString()],l=-1,c&&(l=su(c,f,v,O)),(f=-1<l?c[l]:null)&&au(f))}function au(l){if(typeof l!="number"&&l&&!l.da){var c=l.src;if(c&&c[rn])iu(c.i,l);else{var f=l.type,v=l.proxy;c.removeEventListener?c.removeEventListener(f,v,l.capture):c.detachEvent?c.detachEvent(jf(f),v):c.addListener&&c.removeListener&&c.removeListener(v),(f=uu(c))?(iu(f,l),f.h==0&&(f.src=null,c[ou]=null)):Ao(l)}}}function jf(l){return l in lu?lu[l]:lu[l]="on"+l}function v1(l,c){if(l.da)l=!0;else{c=new tn(c,this);var f=l.listener,v=l.ha||l.src;l.fa&&au(l),l=f.call(v,c)}return l}function uu(l){return l=l[ou],l instanceof Oo?l:null}var cu="__closure_events_fn_"+(1e9*Math.random()>>>0);function bf(l){return typeof l=="function"?l:(l[cu]||(l[cu]=function(c){return l.handleEvent(c)}),l[cu])}function Fe(){oe.call(this),this.i=new Oo(this),this.M=this,this.F=null}N(Fe,oe),Fe.prototype[rn]=!0,Fe.prototype.removeEventListener=function(l,c,f,v){Mf(this,l,c,f,v)};function Ye(l,c){var f,v=l.F;if(v)for(f=[];v;v=v.F)f.push(v);if(l=l.M,v=c.type||c,typeof c=="string")c=new Se(c,l);else if(c instanceof Se)c.target=c.target||l;else{var O=c;c=new Se(v,l),I(c,O)}if(O=!0,f)for(var L=f.length-1;0<=L;L--){var F=c.g=f[L];O=Do(F,v,!0,c)&&O}if(F=c.g=l,O=Do(F,v,!0,c)&&O,O=Do(F,v,!1,c)&&O,f)for(L=0;L<f.length;L++)F=c.g=f[L],O=Do(F,v,!1,c)&&O}Fe.prototype.N=function(){if(Fe.aa.N.call(this),this.i){var l=this.i,c;for(c in l.g){for(var f=l.g[c],v=0;v<f.length;v++)Ao(f[v]);delete l.g[c],l.h--}}this.F=null},Fe.prototype.K=function(l,c,f,v){return this.i.add(String(l),c,!1,f,v)},Fe.prototype.L=function(l,c,f,v){return this.i.add(String(l),c,!0,f,v)};function Do(l,c,f,v){if(c=l.i.g[String(c)],!c)return!0;c=c.concat();for(var O=!0,L=0;L<c.length;++L){var F=c[L];if(F&&!F.da&&F.capture==f){var le=F.listener,De=F.ha||F.src;F.fa&&iu(l.i,F),O=le.call(De,v)!==!1&&O}}return O&&!v.defaultPrevented}function Uf(l,c,f){if(typeof l=="function")f&&(l=g(l,f));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:a.setTimeout(l,c||0)}function Ff(l){l.g=Uf(()=>{l.g=null,l.i&&(l.i=!1,Ff(l))},l.l);const c=l.h;l.h=null,l.m.apply(null,c)}class y1 extends oe{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ff(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xi(l){oe.call(this),this.h=l,this.g={}}N(Xi,oe);var zf=[];function Bf(l){b(l.g,function(c,f){this.g.hasOwnProperty(f)&&au(c)},l),l.g={}}Xi.prototype.N=function(){Xi.aa.N.call(this),Bf(this)},Xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hu=a.JSON.stringify,_1=a.JSON.parse,w1=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function du(){}du.prototype.h=null;function Vf(l){return l.h||(l.h=l.i())}function E1(){}var Ji={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fu(){Se.call(this,"d")}N(fu,Se);function pu(){Se.call(this,"c")}N(pu,Se);var Gr={},Hf=null;function mu(){return Hf=Hf||new Fe}Gr.La="serverreachability";function $f(l){Se.call(this,Gr.La,l)}N($f,Se);function Zi(l){const c=mu();Ye(c,new $f(c))}Gr.STAT_EVENT="statevent";function Wf(l,c){Se.call(this,Gr.STAT_EVENT,l),this.stat=c}N(Wf,Se);function Qe(l){const c=mu();Ye(c,new Wf(c,l))}Gr.Ma="timingevent";function Gf(l,c){Se.call(this,Gr.Ma,l),this.size=c}N(Gf,Se);function es(l,c){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},c)}function ts(){this.g=!0}ts.prototype.xa=function(){this.g=!1};function S1(l,c,f,v,O,L){l.info(function(){if(l.g)if(L)for(var F="",le=L.split("&"),De=0;De<le.length;De++){var te=le[De].split("=");if(1<te.length){var ze=te[0];te=te[1];var Be=ze.split("_");F=2<=Be.length&&Be[1]=="type"?F+(ze+"="+te+"&"):F+(ze+"=redacted&")}}else F=null;else F=L;return"XMLHTTP REQ ("+v+") [attempt "+O+"]: "+c+`
`+f+`
`+F})}function C1(l,c,f,v,O,L,F){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+O+"]: "+c+`
`+f+`
`+L+" "+F})}function Kr(l,c,f,v){l.info(function(){return"XMLHTTP TEXT ("+c+"): "+k1(l,f)+(v?" "+v:"")})}function I1(l,c){l.info(function(){return"TIMEOUT: "+c})}ts.prototype.info=function(){};function k1(l,c){if(!l.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(l=0;l<f.length;l++)if(Array.isArray(f[l])){var v=f[l];if(!(2>v.length)){var O=v[1];if(Array.isArray(O)&&!(1>O.length)){var L=O[0];if(L!="noop"&&L!="stop"&&L!="close")for(var F=1;F<O.length;F++)O[F]=""}}}}return hu(f)}catch{return c}}var gu={NO_ERROR:0,TIMEOUT:8},T1={},vu;function Lo(){}N(Lo,du),Lo.prototype.g=function(){return new XMLHttpRequest},Lo.prototype.i=function(){return{}},vu=new Lo;function Ln(l,c,f,v){this.j=l,this.i=c,this.l=f,this.R=v||1,this.U=new Xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Kf}function Kf(){this.i=null,this.g="",this.h=!1}var qf={},yu={};function _u(l,c,f){l.L=1,l.v=Uo(sn(c)),l.m=f,l.P=!0,Yf(l,null)}function Yf(l,c){l.F=Date.now(),Mo(l),l.A=sn(l.v);var f=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),up(f.i,"t",v),l.C=0,f=l.j.J,l.h=new Kf,l.g=Np(l.j,f?c:null,!l.m),0<l.O&&(l.M=new y1(g(l.Y,l,l.g),l.O)),c=l.U,f=l.g,v=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(zf[0]=O.toString()),O=zf);for(var L=0;L<O.length;L++){var F=Lf(f,O[L],v||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,c)):(l.u="GET",l.g.ea(l.A,l.u,null,c)),Zi(),S1(l.i,l.u,l.A,l.l,l.R,l.m)}Ln.prototype.ca=function(l){l=l.target;const c=this.M;c&&on(l)==3?c.j():this.Y(l)},Ln.prototype.Y=function(l){try{if(l==this.g)e:{const Be=on(this.g);var c=this.g.Ba();const Qr=this.g.Z();if(!(3>Be)&&(Be!=3||this.g&&(this.h.h||this.g.oa()||gp(this.g)))){this.J||Be!=4||c==7||(c==8||0>=Qr?Zi(3):Zi(2)),wu(this);var f=this.g.Z();this.X=f;t:if(Qf(this)){var v=gp(this.g);l="";var O=v.length,L=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yr(this),ns(this);var F="";break t}this.h.i=new a.TextDecoder}for(c=0;c<O;c++)this.h.h=!0,l+=this.h.i.decode(v[c],{stream:!(L&&c==O-1)});v.length=0,this.h.g+=l,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=f==200,C1(this.i,this.u,this.A,this.l,this.R,Be,f),this.o){if(this.T&&!this.K){t:{if(this.g){var le,De=this.g;if((le=De.g?De.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(le)){var te=le;break t}}te=null}if(f=te)Kr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Eu(this,f);else{this.o=!1,this.s=3,Qe(12),yr(this),ns(this);break e}}if(this.P){f=!0;let Rt;for(;!this.J&&this.C<F.length;)if(Rt=N1(this,F),Rt==yu){Be==4&&(this.s=4,Qe(14),f=!1),Kr(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==qf){this.s=4,Qe(15),Kr(this.i,this.l,F,"[Invalid Chunk]"),f=!1;break}else Kr(this.i,this.l,Rt,null),Eu(this,Rt);if(Qf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Be!=4||F.length!=0||this.h.h||(this.s=1,Qe(16),f=!1),this.o=this.o&&f,!f)Kr(this.i,this.l,F,"[Invalid Chunked Response]"),yr(this),ns(this);else if(0<F.length&&!this.W){this.W=!0;var ze=this.j;ze.g==this&&ze.ba&&!ze.M&&(ze.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Nu(ze),ze.M=!0,Qe(11))}}else Kr(this.i,this.l,F,null),Eu(this,F);Be==4&&yr(this),this.o&&!this.J&&(Be==4?Cp(this.j,this):(this.o=!1,Mo(this)))}else $1(this.g),f==400&&0<F.indexOf("Unknown SID")?(this.s=3,Qe(12)):(this.s=0,Qe(13)),yr(this),ns(this)}}}catch{}finally{}};function Qf(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function N1(l,c){var f=l.C,v=c.indexOf(`
`,f);return v==-1?yu:(f=Number(c.substring(f,v)),isNaN(f)?qf:(v+=1,v+f>c.length?yu:(c=c.slice(v,v+f),l.C=v+f,c)))}Ln.prototype.cancel=function(){this.J=!0,yr(this)};function Mo(l){l.S=Date.now()+l.I,Xf(l,l.I)}function Xf(l,c){if(l.B!=null)throw Error("WatchDog timer not null");l.B=es(g(l.ba,l),c)}function wu(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Ln.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(I1(this.i,this.A),this.L!=2&&(Zi(),Qe(17)),yr(this),this.s=2,ns(this)):Xf(this,this.S-l)};function ns(l){l.j.G==0||l.J||Cp(l.j,l)}function yr(l){wu(l);var c=l.M;c&&typeof c.ma=="function"&&c.ma(),l.M=null,Bf(l.U),l.g&&(c=l.g,l.g=null,c.abort(),c.ma())}function Eu(l,c){try{var f=l.j;if(f.G!=0&&(f.g==l||Su(f.h,l))){if(!l.K&&Su(f.h,l)&&f.G==3){try{var v=f.Da.g.parse(c)}catch{v=null}if(Array.isArray(v)&&v.length==3){var O=v;if(O[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<l.F)$o(f),Vo(f);else break e;Tu(f),Qe(18)}}else f.za=O[1],0<f.za-f.T&&37500>O[2]&&f.F&&f.v==0&&!f.C&&(f.C=es(g(f.Za,f),6e3));if(1>=ep(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else wr(f,11)}else if((l.K||f.g==l)&&$o(f),!_(c))for(O=f.Da.g.parse(c),c=0;c<O.length;c++){let te=O[c];if(f.T=te[0],te=te[1],f.G==2)if(te[0]=="c"){f.K=te[1],f.ia=te[2];const ze=te[3];ze!=null&&(f.la=ze,f.j.info("VER="+f.la));const Be=te[4];Be!=null&&(f.Aa=Be,f.j.info("SVER="+f.Aa));const Qr=te[5];Qr!=null&&typeof Qr=="number"&&0<Qr&&(v=1.5*Qr,f.L=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const Rt=l.g;if(Rt){const Wo=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wo){var L=v.h;L.g||Wo.indexOf("spdy")==-1&&Wo.indexOf("quic")==-1&&Wo.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Cu(L,L.h),L.h=null))}if(v.D){const xu=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;xu&&(v.ya=xu,ue(v.I,v.D,xu))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-l.F,f.j.info("Handshake RTT: "+f.R+"ms")),v=f;var F=l;if(v.qa=Tp(v,v.J?v.ia:null,v.W),F.K){tp(v.h,F);var le=F,De=v.L;De&&(le.I=De),le.B&&(wu(le),Mo(le)),v.g=F}else Ep(v);0<f.i.length&&Ho(f)}else te[0]!="stop"&&te[0]!="close"||wr(f,7);else f.G==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?wr(f,7):ku(f):te[0]!="noop"&&f.l&&f.l.ta(te),f.v=0)}}Zi(4)}catch{}}var x1=class{constructor(l,c){this.g=l,this.map=c}};function Jf(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zf(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ep(l){return l.h?1:l.g?l.g.size:0}function Su(l,c){return l.h?l.h==c:l.g?l.g.has(c):!1}function Cu(l,c){l.g?l.g.add(c):l.h=c}function tp(l,c){l.h&&l.h==c?l.h=null:l.g&&l.g.has(c)&&l.g.delete(c)}Jf.prototype.cancel=function(){if(this.i=np(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function np(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let c=l.i;for(const f of l.g.values())c=c.concat(f.D);return c}return R(l.i)}function R1(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var c=[],f=l.length,v=0;v<f;v++)c.push(l[v]);return c}c=[],f=0;for(v in l)c[f++]=l[v];return c}function P1(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var c=[];l=l.length;for(var f=0;f<l;f++)c.push(f);return c}c=[],f=0;for(const v in l)c[f++]=v;return c}}}function rp(l,c){if(l.forEach&&typeof l.forEach=="function")l.forEach(c,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,c,void 0);else for(var f=P1(l),v=R1(l),O=v.length,L=0;L<O;L++)c.call(void 0,v[L],f&&f[L],l)}var ip=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function A1(l,c){if(l){l=l.split("&");for(var f=0;f<l.length;f++){var v=l[f].indexOf("="),O=null;if(0<=v){var L=l[f].substring(0,v);O=l[f].substring(v+1)}else L=l[f];c(L,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function _r(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof _r){this.h=l.h,jo(this,l.j),this.o=l.o,this.g=l.g,bo(this,l.s),this.l=l.l;var c=l.i,f=new ss;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),sp(this,f),this.m=l.m}else l&&(c=String(l).match(ip))?(this.h=!1,jo(this,c[1]||"",!0),this.o=rs(c[2]||""),this.g=rs(c[3]||"",!0),bo(this,c[4]),this.l=rs(c[5]||"",!0),sp(this,c[6]||"",!0),this.m=rs(c[7]||"")):(this.h=!1,this.i=new ss(null,this.h))}_r.prototype.toString=function(){var l=[],c=this.j;c&&l.push(is(c,op,!0),":");var f=this.g;return(f||c=="file")&&(l.push("//"),(c=this.o)&&l.push(is(c,op,!0),"@"),l.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&l.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&l.push("/"),l.push(is(f,f.charAt(0)=="/"?L1:D1,!0))),(f=this.i.toString())&&l.push("?",f),(f=this.m)&&l.push("#",is(f,j1)),l.join("")};function sn(l){return new _r(l)}function jo(l,c,f){l.j=f?rs(c,!0):c,l.j&&(l.j=l.j.replace(/:$/,""))}function bo(l,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);l.s=c}else l.s=null}function sp(l,c,f){c instanceof ss?(l.i=c,b1(l.i,l.h)):(f||(c=is(c,M1)),l.i=new ss(c,l.h))}function ue(l,c,f){l.i.set(c,f)}function Uo(l){return ue(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function rs(l,c){return l?c?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function is(l,c,f){return typeof l=="string"?(l=encodeURI(l).replace(c,O1),f&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function O1(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var op=/[#\/\?@]/g,D1=/[#\?:]/g,L1=/[#\?]/g,M1=/[#\?@]/g,j1=/#/g;function ss(l,c){this.h=this.g=null,this.i=l||null,this.j=!!c}function Mn(l){l.g||(l.g=new Map,l.h=0,l.i&&A1(l.i,function(c,f){l.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=ss.prototype,t.add=function(l,c){Mn(this),this.i=null,l=qr(this,l);var f=this.g.get(l);return f||this.g.set(l,f=[]),f.push(c),this.h+=1,this};function lp(l,c){Mn(l),c=qr(l,c),l.g.has(c)&&(l.i=null,l.h-=l.g.get(c).length,l.g.delete(c))}function ap(l,c){return Mn(l),c=qr(l,c),l.g.has(c)}t.forEach=function(l,c){Mn(this),this.g.forEach(function(f,v){f.forEach(function(O){l.call(c,O,v,this)},this)},this)},t.na=function(){Mn(this);const l=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let v=0;v<c.length;v++){const O=l[v];for(let L=0;L<O.length;L++)f.push(c[v])}return f},t.V=function(l){Mn(this);let c=[];if(typeof l=="string")ap(this,l)&&(c=c.concat(this.g.get(qr(this,l))));else{l=Array.from(this.g.values());for(let f=0;f<l.length;f++)c=c.concat(l[f])}return c},t.set=function(l,c){return Mn(this),this.i=null,l=qr(this,l),ap(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[c]),this.h+=1,this},t.get=function(l,c){return l?(l=this.V(l),0<l.length?String(l[0]):c):c};function up(l,c,f){lp(l,c),0<f.length&&(l.i=null,l.g.set(qr(l,c),R(f)),l.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var v=c[f];const L=encodeURIComponent(String(v)),F=this.V(v);for(v=0;v<F.length;v++){var O=L;F[v]!==""&&(O+="="+encodeURIComponent(String(F[v]))),l.push(O)}}return this.i=l.join("&")};function qr(l,c){return c=String(c),l.j&&(c=c.toLowerCase()),c}function b1(l,c){c&&!l.j&&(Mn(l),l.i=null,l.g.forEach(function(f,v){var O=v.toLowerCase();v!=O&&(lp(this,v),up(this,O,f))},l)),l.j=c}function U1(l,c){const f=new ts;if(a.Image){const v=new Image;v.onload=x(jn,f,"TestLoadImage: loaded",!0,c,v),v.onerror=x(jn,f,"TestLoadImage: error",!1,c,v),v.onabort=x(jn,f,"TestLoadImage: abort",!1,c,v),v.ontimeout=x(jn,f,"TestLoadImage: timeout",!1,c,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else c(!1)}function F1(l,c){const f=new ts,v=new AbortController,O=setTimeout(()=>{v.abort(),jn(f,"TestPingServer: timeout",!1,c)},1e4);fetch(l,{signal:v.signal}).then(L=>{clearTimeout(O),L.ok?jn(f,"TestPingServer: ok",!0,c):jn(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(O),jn(f,"TestPingServer: error",!1,c)})}function jn(l,c,f,v,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),v(f)}catch{}}function z1(){this.g=new w1}function B1(l,c,f){const v=f||"";try{rp(l,function(O,L){let F=O;h(O)&&(F=hu(O)),c.push(v+L+"="+encodeURIComponent(F))})}catch(O){throw c.push(v+"type="+encodeURIComponent("_badmap")),O}}function Fo(l){this.l=l.Ub||null,this.j=l.eb||!1}N(Fo,du),Fo.prototype.g=function(){return new zo(this.l,this.j)},Fo.prototype.i=function(l){return function(){return l}}({});function zo(l,c){Fe.call(this),this.D=l,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(zo,Fe),t=zo.prototype,t.open=function(l,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=c,this.readyState=1,ls(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(c.body=l),(this.D||a).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,os(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ls(this)),this.g&&(this.readyState=3,ls(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cp(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function cp(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var c=l.value?l.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!l.done}))&&(this.response=this.responseText+=c)}l.done?os(this):ls(this),this.readyState==3&&cp(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,os(this))},t.Qa=function(l){this.g&&(this.response=l,os(this))},t.ga=function(){this.g&&os(this)};function os(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ls(l)}t.setRequestHeader=function(l,c){this.u.append(l,c)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,l.push(f[0]+": "+f[1]),f=c.next();return l.join(`\r
`)};function ls(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(zo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function hp(l){let c="";return b(l,function(f,v){c+=v,c+=":",c+=f,c+=`\r
`}),c}function Iu(l,c,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=hp(f),typeof l=="string"?f!=null&&encodeURIComponent(String(f)):ue(l,c,f))}function Ce(l){Fe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Ce,Fe);var V1=/^https?$/i,H1=["POST","PUT"];t=Ce.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,c,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);c=c?c.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vu.g(),this.v=this.o?Vf(this.o):Vf(vu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(l),!0),this.B=!1}catch(L){dp(this,L);return}if(l=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var O in v)f.set(O,v[O]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())f.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(H1,c,void 0))||v||O||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,F]of f)this.g.setRequestHeader(L,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mp(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){dp(this,L)}};function dp(l,c){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=c,l.m=5,fp(l),Bo(l)}function fp(l){l.A||(l.A=!0,Ye(l,"complete"),Ye(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Ye(this,"complete"),Ye(this,"abort"),Bo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bo(this,!0)),Ce.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?pp(this):this.bb())},t.bb=function(){pp(this)};function pp(l){if(l.h&&typeof o<"u"&&(!l.v[1]||on(l)!=4||l.Z()!=2)){if(l.u&&on(l)==4)Uf(l.Ea,0,l);else if(Ye(l,"readystatechange"),on(l)==4){l.h=!1;try{const F=l.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var v;if(v=F===0){var O=String(l.D).match(ip)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),v=!V1.test(O?O.toLowerCase():"")}f=v}if(f)Ye(l,"complete"),Ye(l,"success");else{l.m=6;try{var L=2<on(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",fp(l)}}finally{Bo(l)}}}}function Bo(l,c){if(l.g){mp(l);const f=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,c||Ye(l,"ready");try{f.onreadystatechange=v}catch{}}}function mp(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function on(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var c=this.g.responseText;return l&&c.indexOf(l)==0&&(c=c.substring(l.length)),_1(c)}};function gp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function $1(l){const c={};l=(l.g&&2<=on(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(_(l[v]))continue;var f=T(l[v]);const O=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=c[O]||[];c[O]=L,L.push(f)}C(c,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function as(l,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[l]||c}function vp(l){this.Aa=0,this.i=[],this.j=new ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=as("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=as("baseRetryDelayMs",5e3,l),this.cb=as("retryDelaySeedMs",1e4,l),this.Wa=as("forwardChannelMaxRetries",2,l),this.wa=as("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Jf(l&&l.concurrentRequestLimit),this.Da=new z1,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=vp.prototype,t.la=8,t.G=1,t.connect=function(l,c,f,v){Qe(0),this.W=l,this.H=c||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.I=Tp(this,null,this.W),Ho(this)};function ku(l){if(yp(l),l.G==3){var c=l.U++,f=sn(l.I);if(ue(f,"SID",l.K),ue(f,"RID",c),ue(f,"TYPE","terminate"),us(l,f),c=new Ln(l,l.j,c),c.L=2,c.v=Uo(sn(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&a.Image&&(new Image().src=c.v,f=!0),f||(c.g=Np(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Mo(c)}kp(l)}function Vo(l){l.g&&(Nu(l),l.g.cancel(),l.g=null)}function yp(l){Vo(l),l.u&&(a.clearTimeout(l.u),l.u=null),$o(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ho(l){if(!Zf(l.h)&&!l.s){l.s=!0;var c=l.Ga;W||K(),z||(W(),z=!0),$.add(c,l),l.B=0}}function W1(l,c){return ep(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=c.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=es(g(l.Ga,l,c),Ip(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new Ln(this,this.j,l);let L=this.o;if(this.S&&(L?(L=y(L),I(L,this.S)):L=this.S),this.m!==null||this.O||(O.H=L,L=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(c+=v,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=wp(this,O,c),f=sn(this.I),ue(f,"RID",l),ue(f,"CVER",22),this.D&&ue(f,"X-HTTP-Session-Id",this.D),us(this,f),L&&(this.O?c="headers="+encodeURIComponent(String(hp(L)))+"&"+c:this.m&&Iu(f,this.m,L)),Cu(this.h,O),this.Ua&&ue(f,"TYPE","init"),this.P?(ue(f,"$req",c),ue(f,"SID","null"),O.T=!0,_u(O,f,null)):_u(O,f,c),this.G=2}}else this.G==3&&(l?_p(this,l):this.i.length==0||Zf(this.h)||_p(this))};function _p(l,c){var f;c?f=c.l:f=l.U++;const v=sn(l.I);ue(v,"SID",l.K),ue(v,"RID",f),ue(v,"AID",l.T),us(l,v),l.m&&l.o&&Iu(v,l.m,l.o),f=new Ln(l,l.j,f,l.B+1),l.m===null&&(f.H=l.o),c&&(l.i=c.D.concat(l.i)),c=wp(l,f,1e3),f.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Cu(l.h,f),_u(f,v,c)}function us(l,c){l.H&&b(l.H,function(f,v){ue(c,v,f)}),l.l&&rp({},function(f,v){ue(c,v,f)})}function wp(l,c,f){f=Math.min(l.i.length,f);var v=l.l?g(l.l.Na,l.l,l):null;e:{var O=l.i;let L=-1;for(;;){const F=["count="+f];L==-1?0<f?(L=O[0].g,F.push("ofs="+L)):L=0:F.push("ofs="+L);let le=!0;for(let De=0;De<f;De++){let te=O[De].g;const ze=O[De].map;if(te-=L,0>te)L=Math.max(0,O[De].g-100),le=!1;else try{B1(ze,F,"req"+te+"_")}catch{v&&v(ze)}}if(le){v=F.join("&");break e}}}return l=l.i.splice(0,f),c.D=l,v}function Ep(l){if(!l.g&&!l.u){l.Y=1;var c=l.Fa;W||K(),z||(W(),z=!0),$.add(c,l),l.v=0}}function Tu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=es(g(l.Fa,l),Ip(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Sp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=es(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Qe(10),Vo(this),Sp(this))};function Nu(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Sp(l){l.g=new Ln(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var c=sn(l.qa);ue(c,"RID","rpc"),ue(c,"SID",l.K),ue(c,"AID",l.T),ue(c,"CI",l.F?"0":"1"),!l.F&&l.ja&&ue(c,"TO",l.ja),ue(c,"TYPE","xmlhttp"),us(l,c),l.m&&l.o&&Iu(c,l.m,l.o),l.L&&(l.g.I=l.L);var f=l.g;l=l.ia,f.L=1,f.v=Uo(sn(c)),f.m=null,f.P=!0,Yf(f,l)}t.Za=function(){this.C!=null&&(this.C=null,Vo(this),Tu(this),Qe(19))};function $o(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Cp(l,c){var f=null;if(l.g==c){$o(l),Nu(l),l.g=null;var v=2}else if(Su(l.h,c))f=c.D,tp(l.h,c),v=1;else return;if(l.G!=0){if(c.o)if(v==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var O=l.B;v=mu(),Ye(v,new Gf(v,f)),Ho(l)}else Ep(l);else if(O=c.s,O==3||O==0&&0<c.X||!(v==1&&W1(l,c)||v==2&&Tu(l)))switch(f&&0<f.length&&(c=l.h,c.i=c.i.concat(f)),O){case 1:wr(l,5);break;case 4:wr(l,10);break;case 3:wr(l,6);break;default:wr(l,2)}}}function Ip(l,c){let f=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(f*=2),f*c}function wr(l,c){if(l.j.info("Error code "+c),c==2){var f=g(l.fb,l),v=l.Xa;const O=!v;v=new _r(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||jo(v,"https"),Uo(v),O?U1(v.toString(),f):F1(v.toString(),f)}else Qe(2);l.G=0,l.l&&l.l.sa(c),kp(l),yp(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Qe(2)):(this.j.info("Failed to ping google.com"),Qe(1))};function kp(l){if(l.G=0,l.ka=[],l.l){const c=np(l.h);(c.length!=0||l.i.length!=0)&&(A(l.ka,c),A(l.ka,l.i),l.h.i.length=0,R(l.i),l.i.length=0),l.l.ra()}}function Tp(l,c,f){var v=f instanceof _r?sn(f):new _r(f);if(v.g!="")c&&(v.g=c+"."+v.g),bo(v,v.s);else{var O=a.location;v=O.protocol,c=c?c+"."+O.hostname:O.hostname,O=+O.port;var L=new _r(null);v&&jo(L,v),c&&(L.g=c),O&&bo(L,O),f&&(L.l=f),v=L}return f=l.D,c=l.ya,f&&c&&ue(v,f,c),ue(v,"VER",l.la),us(l,v),v}function Np(l,c,f){if(c&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=l.Ca&&!l.pa?new Ce(new Fo({eb:f})):new Ce(l.pa),c.Ha(l.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xp(){}t=xp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function yt(l,c){Fe.call(this),this.g=new vp(c),this.l=l,this.h=c&&c.messageUrlParams||null,l=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(l?l["X-WebChannel-Content-Type"]=c.messageContentType:l={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(l?l["X-WebChannel-Client-Profile"]=c.va:l={"X-WebChannel-Client-Profile":c.va}),this.g.S=l,(l=c&&c.Sb)&&!_(l)&&(this.g.m=l),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,l=this.h,l!==null&&c in l&&(l=this.h,c in l&&delete l[c])),this.j=new Yr(this)}N(yt,Fe),yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){ku(this.g)},yt.prototype.o=function(l){var c=this.g;if(typeof l=="string"){var f={};f.__data__=l,l=f}else this.u&&(f={},f.__data__=hu(l),l=f);c.i.push(new x1(c.Ya++,l)),c.G==3&&Ho(c)},yt.prototype.N=function(){this.g.l=null,delete this.j,ku(this.g),delete this.g,yt.aa.N.call(this)};function Rp(l){fu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var c=l.__sm__;if(c){e:{for(const f in c){l=f;break e}l=void 0}(this.i=l)&&(l=this.i,c=c!==null&&l in c?c[l]:void 0),this.data=c}else this.data=l}N(Rp,fu);function Pp(){pu.call(this),this.status=1}N(Pp,pu);function Yr(l){this.g=l}N(Yr,xp),Yr.prototype.ua=function(){Ye(this.g,"a")},Yr.prototype.ta=function(l){Ye(this.g,new Rp(l))},Yr.prototype.sa=function(l){Ye(this.g,new Pp)},Yr.prototype.ra=function(){Ye(this.g,"b")},yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,gu.NO_ERROR=0,gu.TIMEOUT=8,gu.HTTP_ERROR=6,T1.COMPLETE="complete",E1.EventType=Ji,Ji.OPEN="a",Ji.CLOSE="b",Ji.ERROR="c",Ji.MESSAGE="d",Fe.prototype.listen=Fe.prototype.K,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha}).apply(typeof cl<"u"?cl:typeof self<"u"?self:typeof window<"u"?window:{});const Ng="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new Ka("@firebase/firestore");function Mt(t,...e){if(ji.logLevel<=ne.DEBUG){const n=e.map(uf);ji.debug(`Firestore (${ko}): ${t}`,...n)}}function Y0(t,...e){if(ji.logLevel<=ne.ERROR){const n=e.map(uf);ji.error(`Firestore (${ko}): ${t}`,...n)}}function ix(t,...e){if(ji.logLevel<=ne.WARN){const n=e.map(uf);ji.warn(`Firestore (${ko}): ${t}`,...n)}}function uf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function cf(t="Unexpected state"){const e=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: `+t;throw Y0(e),new Error(e)}function js(t,e){t||cf()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class st extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class ox{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lx{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){js(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new bs;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new bs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Mt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Mt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new bs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Mt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(js(typeof r.accessToken=="string"),new Q0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return js(e===null||typeof e=="string"),new Je(e)}}class ax{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ux{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ax(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){js(this.o===void 0);const r=s=>{s.error!=null&&Mt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Mt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Mt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Mt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(js(typeof n.token=="string"),this.R=n.token,new cx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function dx(t){return t.name==="IndexedDbTransactionError"}class pa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new pa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xg,X;(X=xg||(xg={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new q0([4294967295,4294967295],0);function hc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Mt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new bs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new hf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new st(it.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Rg,Pg;(Pg=Rg||(Rg={})).ea="default",Pg.Cache="cache";/**
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
 */function px(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=new Map;function mx(t,e,n,r){if(e===!0&&r===!0)throw new st(it.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gx(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":cf()}function vx(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new st(it.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gx(t);throw new st(it.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new st(it.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new st(it.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=px((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new st(it.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new st(it.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new st(it.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class X0{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Og({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new st(it.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new st(it.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Og(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sx;switch(r.type){case"firstParty":return new ux(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new st(it.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ag.get(n);r&&(Mt("ComponentProvider","Removing Datastore"),Ag.delete(n),r.terminate())}(this),Promise.resolve()}}function yx(t,e,n,r={}){var i;const s=(t=vx(t,X0))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ix("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Je.MOCK_USER;else{a=qd(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new st(it.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Je(h)}t._authCredentials=new ox(new Q0(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new fx(this,"async_queue_retry"),this.Vu=()=>{const r=hc();r&&Mt("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=hc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=hc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new bs;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!dx(e))throw e;Mt("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Y0("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=hf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&cf()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class _x extends X0{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Dg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Dg(e),this._firestoreClient=void 0,await e}}}function wx(t,e){const n=typeof t=="object"?t:qa(),r=typeof t=="string"?t:"(default)",i=Eo(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Gd("firestore");s&&yx(i,...s)}return i}(function(e,n=!0){(function(i){ko=i})(vr),hr(new In("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new _x(new lx(r.getProvider("auth-internal")),new hx(r.getProvider("app-check-internal")),function(h,m){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new st(it.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pa(h.options.projectId,m)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),It(Ng,"4.7.3",e),It(Ng,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0="firebasestorage.googleapis.com",Ex="storageBucket",Sx=2*60*1e3,Cx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Jt{constructor(e,n,r=0){super(dc(e),`Firebase Storage: ${n} (${dc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Zt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return dc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Xt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Xt||(Xt={}));function dc(t){return"storage/"+t}function Ix(){const t="An unknown error occurred, please check the error payload for server response.";return new Zt(Xt.UNKNOWN,t)}function kx(){return new Zt(Xt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Tx(){return new Zt(Xt.CANCELED,"User canceled the upload/download.")}function Nx(t){return new Zt(Xt.INVALID_URL,"Invalid URL '"+t+"'.")}function xx(t){return new Zt(Xt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Lg(t){return new Zt(Xt.INVALID_ARGUMENT,t)}function Z0(){return new Zt(Xt.APP_DELETED,"The Firebase app was deleted.")}function Rx(t){return new Zt(Xt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=jt.makeFromUrl(e,n)}catch{return new jt(e,"")}if(r.path==="")return r;throw xx(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(D){D.path_=decodeURIComponent(D.path)}const m="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",x=new RegExp(`^https?://${p}/${m}/b/${i}/o${g}`,"i"),N={bucket:1,path:3},R=n===J0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",w=new RegExp(`^https?://${R}/${i}/${A}`,"i"),E=[{regex:a,indices:u,postModify:s},{regex:x,indices:N,postModify:h},{regex:w,indices:{bucket:1,path:2},postModify:h}];for(let D=0;D<E.length;D++){const j=E[D],b=j.regex.exec(e);if(b){const C=b[j.indices.bucket];let y=b[j.indices.path];y||(y=""),r=new jt(C,y),j.postModify(r);break}}if(r==null)throw Nx(e);return r}}class Px{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let h=!1;function m(...A){h||(h=!0,e.apply(null,A))}function p(A){i=setTimeout(()=>{i=null,t(x,u())},A)}function g(){s&&clearTimeout(s)}function x(A,...w){if(h){g();return}if(A){g(),m.call(null,A,...w);return}if(u()||o){g(),m.call(null,A,...w);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,p(E)}let N=!1;function R(A){N||(N=!0,g(),!h&&(i!==null?(A||(a=2),clearTimeout(i),p(0)):A||(a=1)))}return p(0),s=setTimeout(()=>{o=!0,R(!0)},n),R}function Ox(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(t){return t!==void 0}function Mg(t,e,n,r){if(r<e)throw Lg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Lg(`Invalid value for '${t}'. Expected ${n} or less.`)}function Lx(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var ma;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ma||(ma={}));/**
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
 */function Mx(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,n,r,i,s,o,a,u,h,m,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=m,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,N)=>{this.resolve_=x,this.reject_=N,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new hl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,h=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ma.NO_ERROR,u=s.getStatus();if(!a||Mx(u,this.additionalRetryCodes_)&&this.retry){const m=s.getErrorCode()===ma.ABORT;r(!1,new hl(!1,null,m));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new hl(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());Dx(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=Ix();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?Z0():Tx();o(u)}else{const u=kx();o(u)}};this.canceled_?n(!1,new hl(!1,null,!0)):this.backoffId_=Ax(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ox(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class hl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function bx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ux(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Fx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function zx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Bx(t,e,n,r,i,s,o=!0){const a=Lx(t.urlParams),u=t.url+a,h=Object.assign({},t.headers);return Fx(h,e),bx(h,n),Ux(h,s),zx(h,r),new jx(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Hx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class ga{constructor(e,n){this._service=e,n instanceof jt?this._location=n:this._location=jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ga(e,n)}get root(){const e=new jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Hx(this._location.path)}get storage(){return this._service}get parent(){const e=Vx(this._location.path);if(e===null)return null;const n=new jt(this._location.bucket,e);return new ga(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Rx(e)}}function jg(t,e){const n=e==null?void 0:e[Ex];return n==null?null:jt.makeFromBucketSpec(n,t)}function $x(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:qd(i,t.app.options.projectId))}class Wx{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=J0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Sx,this._maxUploadRetryTime=Cx,this._requests=new Set,i!=null?this._bucket=jt.makeFromBucketSpec(i,this._host):this._bucket=jg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jt.makeFromBucketSpec(this._url,e):this._bucket=jg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Mg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Mg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ga(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Px(Z0());{const o=Bx(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const bg="@firebase/storage",Ug="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="storage";function Gx(t=qa(),e){t=Dn(t);const r=Eo(t,ew).getImmediate({identifier:e}),i=Gd("storage");return i&&Kx(r,...i),r}function Kx(t,e,n,r={}){$x(t,e,n,r)}function qx(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Wx(n,r,i,e,vr)}function Yx(){hr(new In(ew,qx,"PUBLIC").setMultipleInstances(!0)),It(bg,Ug,""),It(bg,Ug,"esm2017")}Yx();var Fg={};const zg="@firebase/database",Bg="1.0.8";/**
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
 */let tw="";function Qx(t){tw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ao(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return On(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Xx(e)}}catch{}return new Jx},Rr=nw("localStorage"),Zx=nw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Ka("@firebase/database"),eR=function(){let t=1;return function(){return t++}}(),rw=function(t){const e=Qk(t),n=new Wk;n.update(e);const r=n.digest();return $d.encodeByteArray(r)},To=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=To.apply(null,r):typeof r=="object"?e+=Me(r):e+=r,e+=" "}return e};let Us=null,Vg=!0;const tR=function(t,e){B(!0,"Can't turn on custom loggers persistently."),Ci.logLevel=ne.VERBOSE,Us=Ci.log.bind(Ci)},We=function(...t){if(Vg===!0&&(Vg=!1,Us===null&&Zx.get("logging_enabled")===!0&&tR()),Us){const e=To.apply(null,t);Us(e)}},No=function(t){return function(...e){We(t,...e)}},xh=function(...t){const e="FIREBASE INTERNAL ERROR: "+To(...t);Ci.error(e)},Nn=function(...t){const e=`FIREBASE FATAL ERROR: ${To(...t)}`;throw Ci.error(e),new Error(e)},pt=function(...t){const e="FIREBASE WARNING: "+To(...t);Ci.warn(e)},nR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},iw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},rR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bi="[MIN_NAME]",Fr="[MAX_NAME]",qi=function(t,e){if(t===e)return 0;if(t===bi||e===Fr)return-1;if(e===bi||t===Fr)return 1;{const n=Hg(t),r=Hg(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},iR=function(t,e){return t===e?0:t<e?-1:1},ys=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Me(e))},df=function(t){if(typeof t!="object"||t===null)return Me(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Me(e[r]),n+=":",n+=df(t[e[r]]);return n+="}",n},sw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Nt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ow=function(t){B(!iw(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const h=[];for(u=n;u;u-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)h.push(s%2?1:0),s=Math.floor(s/2);h.push(i?1:0),h.reverse();const m=h.join("");let p="";for(u=0;u<64;u+=8){let g=parseInt(m.substr(u,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},sR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},oR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},lR=new RegExp("^-?(0*)\\d{1,10}$"),aR=-2147483648,uR=2147483647,Hg=function(t){if(lR.test(t)){const e=Number(t);if(e>=aR&&e<=uR)return e}return null},xo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw pt("Exception was thrown by user callback.",n),e},Math.floor(0))}},cR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class hR{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){pt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(We("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',pt(e)}}class Pl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Pl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="5",lw="v",aw="s",uw="r",cw="f",hw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dw="ls",fw="p",Rh="ac",pw="websocket",mw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Rr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Rr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function fR(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function vw(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===pw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===mw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);fR(t)&&(n.ns=t.namespace);const i=[];return Nt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(){this.counters_={}}incrementCounter(e,n=1){On(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return xk(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc={},pc={};function pf(t){const e=t.toString();return fc[e]||(fc[e]=new pR),fc[e]}function mR(t,e){const n=t.toString();return pc[n]||(pc[n]=e()),pc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&xo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="start",vR="close",yR="pLPCommand",_R="pRTLPCB",yw="id",_w="pw",ww="ser",wR="cb",ER="seg",SR="ts",CR="d",IR="dframe",Ew=1870,Sw=30,kR=Ew-Sw,TR=25e3,NR=3e4;class di{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=No(e),this.stats_=pf(n),this.urlFn=u=>(this.appCheckToken&&(u[Rh]=this.appCheckToken),vw(n,mw,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new gR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(NR)),rR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new mf((...s)=>{const[o,a,u,h,m]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===$g)this.id=a,this.password=u;else if(o===vR)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[$g]="t",r[ww]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[wR]=this.scriptTagHolder.uniqueCallbackIdentifier),r[lw]=ff,this.transportSessionId&&(r[aw]=this.transportSessionId),this.lastSessionId&&(r[dw]=this.lastSessionId),this.applicationId&&(r[fw]=this.applicationId),this.appCheckToken&&(r[Rh]=this.appCheckToken),typeof location<"u"&&location.hostname&&hw.test(location.hostname)&&(r[uw]=cw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){di.forceAllow_=!0}static forceDisallow(){di.forceDisallow_=!0}static isAvailable(){return di.forceAllow_?!0:!di.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!sR()&&!oR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=s0(n),i=sw(r,kR);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[IR]="t",r[yw]=e,r[_w]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class mf{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=eR(),window[yR+this.uniqueCallbackIdentifier]=e,window[_R+this.uniqueCallbackIdentifier]=n,this.myIFrame=mf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){We("frame writing exception"),a.stack&&We(a.stack),We(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||We("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[yw]=this.myID,e[_w]=this.myPW,e[ww]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Sw+r.length<=Ew;){const o=this.pendingSegs.shift();r=r+"&"+ER+i+"="+o.seg+"&"+SR+i+"="+o.ts+"&"+CR+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(TR)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{We("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=16384,RR=45e3;let va=null;typeof MozWebSocket<"u"?va=MozWebSocket:typeof WebSocket<"u"&&(va=WebSocket);class Lt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=No(this.connId),this.stats_=pf(n),this.connURL=Lt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[lw]=ff,typeof location<"u"&&location.hostname&&hw.test(location.hostname)&&(o[uw]=cw),n&&(o[aw]=n),r&&(o[dw]=r),i&&(o[Rh]=i),s&&(o[fw]=s),vw(e,pw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Rr.set("previous_websocket_failure",!0);try{let r;bk(),this.mySock=new va(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Lt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&va!==null&&!Lt.forceDisallow_}static previouslyFailed(){return Rr.isInMemoryStorage||Rr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Rr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ao(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=sw(n,xR);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(RR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Lt.responsesRequiredToBeHealthy=2;Lt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[di,Lt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Lt&&Lt.isAvailable();let r=n&&!Lt.previouslyFailed();if(e.webSocketOnly&&(n||pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Lt];else{const i=this.transports_=[];for(const s of ho.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ho.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ho.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=6e4,AR=5e3,OR=10*1024,DR=100*1024,mc="t",Wg="d",LR="s",Gg="r",MR="e",Kg="o",qg="a",Yg="n",Qg="p",jR="h";class bR{constructor(e,n,r,i,s,o,a,u,h,m){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=h,this.lastSessionId=m,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=No("c:"+this.id+":"),this.transportManager_=new ho(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Fs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>DR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>OR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mc in e){const n=e[mc];n===qg?this.upgradeIfSecondaryHealthy_():n===Gg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Kg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ys("t",e),r=ys("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:qg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ys("t",e),r=ys("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ys(mc,e);if(Wg in e){const r=e[Wg];if(n===jR){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Yg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===LR?this.onConnectionShutdown_(r):n===Gg?this.onReset_(r):n===MR?xh("Server Error: "+r):n===Kg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ff!==r&&pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Fs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(PR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(AR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Rr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends Iw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Yd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ya}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=32,Jg=768;class pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function se(){return new pe("")}function J(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function dr(t){return t.pieces_.length-t.pieceNum_}function de(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new pe(t.pieces_,e)}function kw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function UR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Tw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Nw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new pe(e,0)}function Ae(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof pe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new pe(n,0)}function Q(t){return t.pieceNum_>=t.pieces_.length}function St(t,e){const n=J(t),r=J(e);if(n===null)return e;if(n===r)return St(de(t),de(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function xw(t,e){if(dr(t)!==dr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function bt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(dr(t)>dr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class FR{constructor(e,n){this.errorPrefix_=n,this.parts_=Tw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ga(this.parts_[r]);Rw(this)}}function zR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ga(e),Rw(t)}function BR(t){const e=t.parts_.pop();t.byteLength_-=Ga(e),t.parts_.length>0&&(t.byteLength_-=1)}function Rw(t){if(t.byteLength_>Jg)throw new Error(t.errorPrefix_+"has a key path longer than "+Jg+" bytes ("+t.byteLength_+").");if(t.parts_.length>Xg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xg+") or object contains a cycle "+Ir(t))}function Ir(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf extends Iw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new gf}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=1e3,VR=60*5*1e3,Zg=30*1e3,HR=1.3,$R=3e4,WR="server_kill",ev=3;class _n extends Cw{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=_n.nextPersistentConnectionId_++,this.log_=No("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_s,this.maxReconnectDelay_=VR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ya.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Me(s)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Kd,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,h=a.s;_n.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),h!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(h,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&On(e,"w")){const r=Li(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$k(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Hk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Me(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):xh("Unrecognized action received from server: "+Me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_s,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_s,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>$R&&(this.reconnectDelay_=_s),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*HR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+_n.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},h=function(p){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(p)};this.realtime_={close:u,sendRequest:h};const m=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(m),this.appCheckTokenProvider_.getToken(m)]);o?We("getToken() completed but was canceled"):(We("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,a=new bR(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,x=>{pt(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(WR)},s))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&pt(p),u())}}}interrupt(e){We("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){We("Resuming connection for reason: "+e),delete this.interruptReasons_[e],_h(this.interruptReasons_)&&(this.reconnectDelay_=_s,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>df(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new pe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){We("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ev&&(this.reconnectDelay_=Zg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){We("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ev&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+tw.replace(/\./g,"-")]=1,Yd()?e["framework.cordova"]=1:c0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ya.getInstance().currentlyOnline();return _h(this.interruptReasons_)&&e}}_n.nextPersistentConnectionId_=0;_n.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Z(bi,e),i=new Z(bi,n);return this.compare(r,i)!==0}minPost(){return Z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl;class Pw extends Ja{static get __EMPTY_NODE(){return dl}static set __EMPTY_NODE(e){dl=e}compare(e,n){return qi(e.name,n.name)}isDefinedOn(e){throw Wi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Z.MIN}maxPost(){return new Z(Fr,dl)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new Z(e,dl)}toString(){return".key"}}const Ii=new Pw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Pe.RED,this.left=i??lt.EMPTY_NODE,this.right=s??lt.EMPTY_NODE}copy(e,n,r,i,s){return new Pe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return lt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return lt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pe.RED=!0;Pe.BLACK=!1;class GR{copy(e,n,r,i,s){return this}insert(e,n,r){return new Pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class lt{constructor(e,n=lt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new lt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Pe.BLACK,null,null))}remove(e){return new lt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new fl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new fl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new fl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new fl(this.root_,null,this.comparator_,!0,e)}}lt.EMPTY_NODE=new GR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t,e){return qi(t.name,e.name)}function vf(t,e){return qi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ph;function qR(t){Ph=t}const Aw=function(t){return typeof t=="number"?"number:"+ow(t):"string:"+t},Ow=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&On(e,".sv"),"Priority must be a string or number.")}else B(t===Ph||t.isEmpty(),"priority of unexpected type.");B(t===Ph||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tv;class xe{constructor(e,n=xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ow(this.priorityNode_)}static set __childrenNodeConstructor(e){tv=e}static get __childrenNodeConstructor(){return tv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:J(e)===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=J(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||dr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(de(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Aw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ow(this.value_):e+=this.value_,this.lazyHash_=rw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xe.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=xe.VALUE_TYPE_ORDER.indexOf(n),s=xe.VALUE_TYPE_ORDER.indexOf(r);return B(i>=0,"Unknown leaf type: "+n),B(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dw,Lw;function YR(t){Dw=t}function QR(t){Lw=t}class XR extends Ja{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?qi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(Fr,new xe("[PRIORITY-POST]",Lw))}makePost(e,n){const r=Dw(e);return new Z(n,new xe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ke=new XR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=Math.log(2);class ZR{constructor(e){const n=s=>parseInt(Math.log(s)/JR,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _a=function(t,e,n,r){t.sort(e);const i=function(u,h){const m=h-u;let p,g;if(m===0)return null;if(m===1)return p=t[u],g=n?n(p):p,new Pe(g,p.node,Pe.BLACK,null,null);{const x=parseInt(m/2,10)+u,N=i(u,x),R=i(x+1,h);return p=t[x],g=n?n(p):p,new Pe(g,p.node,Pe.BLACK,N,R)}},s=function(u){let h=null,m=null,p=t.length;const g=function(N,R){const A=p-N,w=p;p-=N;const _=i(A+1,w),E=t[A],D=n?n(E):E;x(new Pe(D,E.node,R,null,_))},x=function(N){h?(h.left=N,h=N):(m=N,h=N)};for(let N=0;N<u.count;++N){const R=u.nextBitIsOne(),A=Math.pow(2,u.count-(N+1));R?g(A,Pe.BLACK):(g(A,Pe.BLACK),g(A,Pe.RED))}return m},o=new ZR(t.length),a=s(o);return new lt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc;const Jr={};class vn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(Jr&&Ke,"ChildrenNode.ts has not been loaded"),gc=gc||new vn({".priority":Jr},{".priority":Ke}),gc}get(e){const n=Li(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof lt?n:null}hasIndex(e){return On(this.indexSet_,e.toString())}addIndex(e,n){B(e!==Ii,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=_a(r,e.getCompare()):a=Jr;const u=e.toString(),h=Object.assign({},this.indexSet_);h[u]=e;const m=Object.assign({},this.indexes_);return m[u]=a,new vn(m,h)}addToIndexes(e,n){const r=oa(this.indexes_,(i,s)=>{const o=Li(this.indexSet_,s);if(B(o,"Missing index implementation for "+s),i===Jr)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(Z.Wrap);let h=u.getNext();for(;h;)h.name!==e.name&&a.push(h),h=u.getNext();return a.push(e),_a(a,o.getCompare())}else return Jr;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new Z(e.name,a))),u.insert(e,e.node)}});return new vn(r,this.indexSet_)}removeFromIndexes(e,n){const r=oa(this.indexes_,i=>{if(i===Jr)return i;{const s=n.get(e.name);return s?i.remove(new Z(e.name,s)):i}});return new vn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws;class re{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Ow(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ws||(ws=new re(new lt(vf),null,vn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ws}updatePriority(e){return this.children_.isEmpty()?this:new re(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ws:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(de(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ws:this.priorityNode_;return new re(i,o,s)}}updateChild(e,n){const r=J(e);if(r===null)return n;{B(J(e)!==".priority"||dr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(de(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ke,(o,a)=>{n[o]=a.val(e),r++,s&&re.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Aw(this.getPriority().val())+":"),this.forEachChild(Ke,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":rw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ro?-1:0}withIndex(e){if(e===Ii||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new re(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ii||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ke),i=n.getIterator(Ke);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ii?null:this.indexMap_.get(e.toString())}}re.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class eP extends re{constructor(){super(new lt(vf),re.EMPTY_NODE,vn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return re.EMPTY_NODE}isEmpty(){return!1}}const Ro=new eP;Object.defineProperties(Z,{MIN:{value:new Z(bi,re.EMPTY_NODE)},MAX:{value:new Z(Fr,Ro)}});Pw.__EMPTY_NODE=re.EMPTY_NODE;xe.__childrenNodeConstructor=re;qR(Ro);QR(Ro);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=!0;function Ge(t,e=null){if(t===null)return re.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xe(n,Ge(e))}if(!(t instanceof Array)&&tP){const n=[];let r=!1;if(Nt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=Ge(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new Z(o,u)))}}),n.length===0)return re.EMPTY_NODE;const s=_a(n,KR,o=>o.name,vf);if(r){const o=_a(n,Ke.getCompare());return new re(s,Ge(e),new vn({".priority":o},{".priority":Ke}))}else return new re(s,Ge(e),vn.Default)}else{let n=re.EMPTY_NODE;return Nt(t,(r,i)=>{if(On(t,r)&&r.substring(0,1)!=="."){const s=Ge(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ge(e))}}YR(Ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP extends Ja{constructor(e){super(),this.indexPath_=e,B(!Q(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?qi(e.name,n.name):s}makePost(e,n){const r=Ge(e),i=re.EMPTY_NODE.updateChild(this.indexPath_,r);return new Z(n,i)}maxPost(){const e=re.EMPTY_NODE.updateChild(this.indexPath_,Ro);return new Z(Fr,e)}toString(){return Tw(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP extends Ja{compare(e,n){const r=e.node.compareTo(n.node);return r===0?qi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(e,n){const r=Ge(e);return new Z(n,r)}toString(){return".value"}}const iP=new rP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(t){return{type:"value",snapshotNode:t}}function oP(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function lP(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function nv(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function aP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ke}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bi}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Fr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ke}copy(){const e=new yf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ke?n="$priority":t.index_===iP?n="$value":t.index_===Ii?n="$key":(B(t.index_ instanceof nP,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Me(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Me(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Me(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Me(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function iv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ke&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends Cw{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=No("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=wa.getListenId_(e,r),a={};this.listens_[o]=a;const u=rv(e._queryParams);this.restRequest_(s+".json",u,(h,m)=>{let p=m;if(h===404&&(p=null,h=null),h===null&&this.onDataUpdate_(s,p,!1,r),Li(this.listens_,o)===a){let g;h?h===401?g="permission_denied":g="rest_error:"+h:g="ok",i(g,null)}})}unlisten(e,n){const r=wa.getListenId_(e,n);delete this.listens_[r]}get(e){const n=rv(e._queryParams),r=e._path.toString(),i=new Kd;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Gi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=ao(a.responseText)}catch{pt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&pt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(){this.rootNode_=re.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(){return{value:null,children:new Map}}function Mw(t,e,n){if(Q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=J(e);t.children.has(r)||t.children.set(r,Ea());const i=t.children.get(r);e=de(e),Mw(i,e,n)}}function Ah(t,e,n){t.value!==null?n(e,t.value):cP(t,(r,i)=>{const s=new pe(e.toString()+"/"+r);Ah(i,s,n)})}function cP(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Nt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=10*1e3,dP=30*1e3,fP=5*60*1e3;class pP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new hP(e);const r=sv+(dP-sv)*Math.random();Fs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Nt(e,(i,s)=>{s>0&&On(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Fs(this.reportStats_.bind(this),Math.floor(Math.random()*2*fP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Gt||(Gt={}));function jw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Uw(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Gt.ACK_USER_WRITE,this.source=jw()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new pe(e));return new Sa(se(),n,this.revert)}}else return B(J(this.path)===e,"operationForChild called for unrelated child."),new Sa(de(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Gt.OVERWRITE}operationForChild(e){return Q(this.path)?new zr(this.source,se(),this.snap.getImmediateChild(e)):new zr(this.source,de(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Gt.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new pe(e));return n.isEmpty()?null:n.value?new zr(this.source,se(),n.value):new fo(this.source,se(),n)}else return B(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fo(this.source,de(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function mP(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(aP(o.childName,o.snapshotNode))}),Es(t,i,"child_removed",e,r,n),Es(t,i,"child_added",e,r,n),Es(t,i,"child_moved",s,r,n),Es(t,i,"child_changed",e,r,n),Es(t,i,"value",e,r,n),i}function Es(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>vP(t,a,u)),o.forEach(a=>{const u=gP(t,a,s);i.forEach(h=>{h.respondsTo(a.type)&&e.push(h.createEvent(u,t.query_))})})}function gP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function vP(t,e,n){if(e.childName==null||n.childName==null)throw Wi("Should only compare child_ events.");const r=new Z(e.childName,e.snapshotNode),i=new Z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(t,e){return{eventCache:t,serverCache:e}}function zs(t,e,n,r){return Fw(new _f(e,n,r),t.serverCache)}function zw(t,e,n,r){return Fw(t.eventCache,new _f(e,n,r))}function Oh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Br(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vc;const yP=()=>(vc||(vc=new lt(iR)),vc);class he{constructor(e,n=yP()){this.value=e,this.children=n}static fromObject(e){let n=new he(null);return Nt(e,(r,i)=>{n=n.set(new pe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:se(),value:this.value};if(Q(e))return null;{const r=J(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(de(e),n);return s!=null?{path:Ae(new pe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=J(e),r=this.children.get(n);return r!==null?r.subtree(de(e)):new he(null)}}set(e,n){if(Q(e))return new he(n,this.children);{const r=J(e),s=(this.children.get(r)||new he(null)).set(de(e),n),o=this.children.insert(r,s);return new he(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=J(e),r=this.children.get(n);if(r){const i=r.remove(de(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new he(null):new he(this.value,s)}else return this}}get(e){if(Q(e))return this.value;{const n=J(e),r=this.children.get(n);return r?r.get(de(e)):null}}setTree(e,n){if(Q(e))return n;{const r=J(e),s=(this.children.get(r)||new he(null)).setTree(de(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new he(this.value,o)}}fold(e){return this.fold_(se(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ae(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,se(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Q(e))return null;{const s=J(e),o=this.children.get(s);return o?o.findOnPath_(de(e),Ae(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,se(),n)}foreachOnPath_(e,n,r){if(Q(e))return this;{this.value&&r(n,this.value);const i=J(e),s=this.children.get(i);return s?s.foreachOnPath_(de(e),Ae(n,i),r):new he(null)}}foreach(e){this.foreach_(se(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ae(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.writeTree_=e}static empty(){return new Bt(new he(null))}}function Bs(t,e,n){if(Q(e))return new Bt(new he(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=St(i,e);return s=s.updateChild(o,n),new Bt(t.writeTree_.set(i,s))}else{const i=new he(n),s=t.writeTree_.setTree(e,i);return new Bt(s)}}}function ov(t,e,n){let r=t;return Nt(n,(i,s)=>{r=Bs(r,Ae(e,i),s)}),r}function lv(t,e){if(Q(e))return Bt.empty();{const n=t.writeTree_.setTree(e,new he(null));return new Bt(n)}}function Dh(t,e){return $r(t,e)!=null}function $r(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(St(n.path,e)):null}function av(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ke,(r,i)=>{e.push(new Z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Z(r,i.value))}),e}function ar(t,e){if(Q(e))return t;{const n=$r(t,e);return n!=null?new Bt(new he(n)):new Bt(t.writeTree_.subtree(e))}}function Lh(t){return t.writeTree_.isEmpty()}function Ui(t,e){return Bw(se(),t.writeTree_,e)}function Bw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(B(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Bw(Ae(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ae(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(t,e){return Kw(e,t)}function _P(t,e,n,r,i){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Bs(t.visibleWrites,e,n)),t.lastWriteId=r}function wP(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function EP(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&SP(a,r.path)?i=!1:bt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return CP(t),!0;if(r.snap)t.visibleWrites=lv(t.visibleWrites,r.path);else{const a=r.children;Nt(a,u=>{t.visibleWrites=lv(t.visibleWrites,Ae(r.path,u))})}return!0}else return!1}function SP(t,e){if(t.snap)return bt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&bt(Ae(t.path,n),e))return!0;return!1}function CP(t){t.visibleWrites=Hw(t.allWrites,IP,se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function IP(t){return t.visible}function Hw(t,e,n){let r=Bt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)bt(n,o)?(a=St(n,o),r=Bs(r,a,s.snap)):bt(o,n)&&(a=St(o,n),r=Bs(r,se(),s.snap.getChild(a)));else if(s.children){if(bt(n,o))a=St(n,o),r=ov(r,a,s.children);else if(bt(o,n))if(a=St(o,n),Q(a))r=ov(r,se(),s.children);else{const u=Li(s.children,J(a));if(u){const h=u.getChild(de(a));r=Bs(r,se(),h)}}}else throw Wi("WriteRecord should have .snap or .children")}}return r}function $w(t,e,n,r,i){if(!r&&!i){const s=$r(t.visibleWrites,e);if(s!=null)return s;{const o=ar(t.visibleWrites,e);if(Lh(o))return n;if(n==null&&!Dh(o,se()))return null;{const a=n||re.EMPTY_NODE;return Ui(o,a)}}}else{const s=ar(t.visibleWrites,e);if(!i&&Lh(s))return n;if(!i&&n==null&&!Dh(s,se()))return null;{const o=function(h){return(h.visible||i)&&(!r||!~r.indexOf(h.writeId))&&(bt(h.path,e)||bt(e,h.path))},a=Hw(t.allWrites,o,e),u=n||re.EMPTY_NODE;return Ui(a,u)}}}function kP(t,e,n){let r=re.EMPTY_NODE;const i=$r(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ke,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ar(t.visibleWrites,e);return n.forEachChild(Ke,(o,a)=>{const u=Ui(ar(s,new pe(o)),a);r=r.updateImmediateChild(o,u)}),av(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ar(t.visibleWrites,e);return av(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function TP(t,e,n,r,i){B(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ae(e,n);if(Dh(t.visibleWrites,s))return null;{const o=ar(t.visibleWrites,s);return Lh(o)?i.getChild(n):Ui(o,i.getChild(n))}}function NP(t,e,n,r){const i=Ae(e,n),s=$r(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ar(t.visibleWrites,i);return Ui(o,r.getNode().getImmediateChild(n))}else return null}function xP(t,e){return $r(t.visibleWrites,e)}function RP(t,e,n,r,i,s,o){let a;const u=ar(t.visibleWrites,e),h=$r(u,se());if(h!=null)a=h;else if(n!=null)a=Ui(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const m=[],p=o.getCompare(),g=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let x=g.getNext();for(;x&&m.length<i;)p(x,r)!==0&&m.push(x),x=g.getNext();return m}else return[]}function PP(){return{visibleWrites:Bt.empty(),allWrites:[],lastWriteId:-1}}function Mh(t,e,n,r){return $w(t.writeTree,t.treePath,e,n,r)}function Ww(t,e){return kP(t.writeTree,t.treePath,e)}function uv(t,e,n,r){return TP(t.writeTree,t.treePath,e,n,r)}function Ca(t,e){return xP(t.writeTree,Ae(t.treePath,e))}function AP(t,e,n,r,i,s){return RP(t.writeTree,t.treePath,e,n,r,i,s)}function wf(t,e,n){return NP(t.writeTree,t.treePath,e,n)}function Gw(t,e){return Kw(Ae(t.treePath,e),t.writeTree)}function Kw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,nv(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,lP(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,oP(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,nv(r,e.snapshotNode,i.oldSnap));else throw Wi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const qw=new DP;class Ef{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new _f(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return wf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Br(this.viewCache_),s=AP(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function LP(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function MP(t,e,n,r,i){const s=new OP;let o,a;if(n.type===Gt.OVERWRITE){const h=n;h.source.fromUser?o=jh(t,e,h.path,h.snap,r,i,s):(B(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered()&&!Q(h.path),o=Ia(t,e,h.path,h.snap,r,i,a,s))}else if(n.type===Gt.MERGE){const h=n;h.source.fromUser?o=bP(t,e,h.path,h.children,r,i,s):(B(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered(),o=bh(t,e,h.path,h.children,r,i,a,s))}else if(n.type===Gt.ACK_USER_WRITE){const h=n;h.revert?o=zP(t,e,h.path,r,i,s):o=UP(t,e,h.path,h.affectedTree,r,i,s)}else if(n.type===Gt.LISTEN_COMPLETE)o=FP(t,e,n.path,r,s);else throw Wi("Unknown operation type: "+n.type);const u=s.getChanges();return jP(e,o,u),{viewCache:o,changes:u}}function jP(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Oh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(sP(Oh(e)))}}function Yw(t,e,n,r,i,s){const o=e.eventCache;if(Ca(r,n)!=null)return e;{let a,u;if(Q(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Br(e),m=h instanceof re?h:re.EMPTY_NODE,p=Ww(r,m);a=t.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const h=Mh(r,Br(e));a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const h=J(n);if(h===".priority"){B(dr(n)===1,"Can't have a priority with additional path components");const m=o.getNode();u=e.serverCache.getNode();const p=uv(r,n,m,u);p!=null?a=t.filter.updatePriority(m,p):a=o.getNode()}else{const m=de(n);let p;if(o.isCompleteForChild(h)){u=e.serverCache.getNode();const g=uv(r,n,o.getNode(),u);g!=null?p=o.getNode().getImmediateChild(h).updateChild(m,g):p=o.getNode().getImmediateChild(h)}else p=wf(r,h,e.serverCache);p!=null?a=t.filter.updateChild(o.getNode(),h,p,m,i,s):a=o.getNode()}}return zs(e,a,o.isFullyInitialized()||Q(n),t.filter.filtersNodes())}}function Ia(t,e,n,r,i,s,o,a){const u=e.serverCache;let h;const m=o?t.filter:t.filter.getIndexedFilter();if(Q(n))h=m.updateFullNode(u.getNode(),r,null);else if(m.filtersNodes()&&!u.isFiltered()){const x=u.getNode().updateChild(n,r);h=m.updateFullNode(u.getNode(),x,null)}else{const x=J(n);if(!u.isCompleteForPath(n)&&dr(n)>1)return e;const N=de(n),A=u.getNode().getImmediateChild(x).updateChild(N,r);x===".priority"?h=m.updatePriority(u.getNode(),A):h=m.updateChild(u.getNode(),x,A,N,qw,null)}const p=zw(e,h,u.isFullyInitialized()||Q(n),m.filtersNodes()),g=new Ef(i,p,s);return Yw(t,p,n,i,g,a)}function jh(t,e,n,r,i,s,o){const a=e.eventCache;let u,h;const m=new Ef(i,e,s);if(Q(n))h=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=zs(e,h,!0,t.filter.filtersNodes());else{const p=J(n);if(p===".priority")h=t.filter.updatePriority(e.eventCache.getNode(),r),u=zs(e,h,a.isFullyInitialized(),a.isFiltered());else{const g=de(n),x=a.getNode().getImmediateChild(p);let N;if(Q(g))N=r;else{const R=m.getCompleteChild(p);R!=null?kw(g)===".priority"&&R.getChild(Nw(g)).isEmpty()?N=R:N=R.updateChild(g,r):N=re.EMPTY_NODE}if(x.equals(N))u=e;else{const R=t.filter.updateChild(a.getNode(),p,N,g,m,o);u=zs(e,R,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function cv(t,e){return t.eventCache.isCompleteForChild(e)}function bP(t,e,n,r,i,s,o){let a=e;return r.foreach((u,h)=>{const m=Ae(n,u);cv(e,J(m))&&(a=jh(t,a,m,h,i,s,o))}),r.foreach((u,h)=>{const m=Ae(n,u);cv(e,J(m))||(a=jh(t,a,m,h,i,s,o))}),a}function hv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function bh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,h;Q(n)?h=r:h=new he(null).setTree(n,r);const m=e.serverCache.getNode();return h.children.inorderTraversal((p,g)=>{if(m.hasChild(p)){const x=e.serverCache.getNode().getImmediateChild(p),N=hv(t,x,g);u=Ia(t,u,new pe(p),N,i,s,o,a)}}),h.children.inorderTraversal((p,g)=>{const x=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!m.hasChild(p)&&!x){const N=e.serverCache.getNode().getImmediateChild(p),R=hv(t,N,g);u=Ia(t,u,new pe(p),R,i,s,o,a)}}),u}function UP(t,e,n,r,i,s,o){if(Ca(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(Q(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Ia(t,e,n,u.getNode().getChild(n),i,s,a,o);if(Q(n)){let h=new he(null);return u.getNode().forEachChild(Ii,(m,p)=>{h=h.set(new pe(m),p)}),bh(t,e,n,h,i,s,a,o)}else return e}else{let h=new he(null);return r.foreach((m,p)=>{const g=Ae(n,m);u.isCompleteForPath(g)&&(h=h.set(m,u.getNode().getChild(g)))}),bh(t,e,n,h,i,s,a,o)}}function FP(t,e,n,r,i){const s=e.serverCache,o=zw(e,s.getNode(),s.isFullyInitialized()||Q(n),s.isFiltered());return Yw(t,o,n,r,qw,i)}function zP(t,e,n,r,i,s){let o;if(Ca(r,n)!=null)return e;{const a=new Ef(r,e,i),u=e.eventCache.getNode();let h;if(Q(n)||J(n)===".priority"){let m;if(e.serverCache.isFullyInitialized())m=Mh(r,Br(e));else{const p=e.serverCache.getNode();B(p instanceof re,"serverChildren would be complete if leaf node"),m=Ww(r,p)}m=m,h=t.filter.updateFullNode(u,m,s)}else{const m=J(n);let p=wf(r,m,e.serverCache);p==null&&e.serverCache.isCompleteForChild(m)&&(p=u.getImmediateChild(m)),p!=null?h=t.filter.updateChild(u,m,p,de(n),a,s):e.eventCache.getNode().hasChild(m)?h=t.filter.updateChild(u,m,re.EMPTY_NODE,de(n),a,s):h=u,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Mh(r,Br(e)),o.isLeafNode()&&(h=t.filter.updateFullNode(h,o,s)))}return o=e.serverCache.isFullyInitialized()||Ca(r,se())!=null,zs(e,h,o,t.filter.filtersNodes())}}function BP(t,e){const n=Br(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function dv(t,e,n,r){e.type===Gt.MERGE&&e.source.queryId!==null&&(B(Br(t.viewCache_),"We should always have a full cache before handling merges"),B(Oh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=MP(t.processor_,i,e,n,r);return LP(t.processor_,s.viewCache),B(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,VP(t,s.changes,s.viewCache.eventCache.getNode())}function VP(t,e,n,r){const i=t.eventRegistrations_;return mP(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fv;function HP(t){B(!fv,"__referenceConstructor has already been defined"),fv=t}function Sf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return B(s!=null,"SyncTree gave us an op for an invalid query."),dv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(dv(o,e,n,r));return s}}function Cf(t,e){let n=null;for(const r of t.views.values())n=n||BP(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pv;function $P(t){B(!pv,"__referenceConstructor has already been defined"),pv=t}class mv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=PP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function WP(t,e,n,r,i){return _P(t.pendingWriteTree_,e,n,r,i),i?eu(t,new zr(jw(),e,n)):[]}function fi(t,e,n=!1){const r=wP(t.pendingWriteTree_,e);if(EP(t.pendingWriteTree_,e)){let s=new he(null);return r.snap!=null?s=s.set(se(),!0):Nt(r.children,o=>{s=s.set(new pe(o),!0)}),eu(t,new Sa(r.path,s,n))}else return[]}function Za(t,e,n){return eu(t,new zr(bw(),e,n))}function GP(t,e,n){const r=he.fromObject(n);return eu(t,new fo(bw(),e,r))}function KP(t,e,n,r){const i=Zw(t,r);if(i!=null){const s=e1(i),o=s.path,a=s.queryId,u=St(o,e),h=new zr(Uw(a),u,n);return t1(t,o,h)}else return[]}function qP(t,e,n,r){const i=Zw(t,r);if(i){const s=e1(i),o=s.path,a=s.queryId,u=St(o,e),h=he.fromObject(n),m=new fo(Uw(a),u,h);return t1(t,o,m)}else return[]}function Qw(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=St(o,e),h=Cf(a,u);if(h)return h});return $w(i,e,s,n,!0)}function eu(t,e){return Xw(e,t.syncPointTree_,null,Vw(t.pendingWriteTree_,se()))}function Xw(t,e,n,r){if(Q(t.path))return Jw(t,e,n,r);{const i=e.get(se());n==null&&i!=null&&(n=Cf(i,se()));let s=[];const o=J(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const h=n?n.getImmediateChild(o):null,m=Gw(r,o);s=s.concat(Xw(a,u,h,m))}return i&&(s=s.concat(Sf(i,t,r,n))),s}}function Jw(t,e,n,r){const i=e.get(se());n==null&&i!=null&&(n=Cf(i,se()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,h=Gw(r,o),m=t.operationForChild(o);m&&(s=s.concat(Jw(m,a,u,h)))}),i&&(s=s.concat(Sf(i,t,r,n))),s}function Zw(t,e){return t.tagToQueryMap.get(e)}function e1(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new pe(t.substr(0,e))}}function t1(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const i=Vw(t.pendingWriteTree_,e);return Sf(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new If(n)}node(){return this.node_}}class kf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ae(this.path_,e);return new kf(this.syncTree_,n)}node(){return Qw(this.syncTree_,this.path_)}}const YP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},gv=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return QP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return XP(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},QP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},XP=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const i=e.node();if(B(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},JP=function(t,e,n,r){return Tf(e,new kf(n,t),r)},ZP=function(t,e,n){return Tf(t,new If(e),n)};function Tf(t,e,n){const r=t.getPriority().val(),i=gv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=gv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new xe(a,Ge(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new xe(i))),o.forEachChild(Ke,(a,u)=>{const h=Tf(u,e.getImmediateChild(a),n);h!==u&&(s=s.updateImmediateChild(a,h))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function xf(t,e){let n=e instanceof pe?e:new pe(e),r=t,i=J(n);for(;i!==null;){const s=Li(r.node.children,i)||{children:{},childCount:0};r=new Nf(i,r,s),n=de(n),i=J(n)}return r}function Yi(t){return t.node.value}function n1(t,e){t.node.value=e,Uh(t)}function r1(t){return t.node.childCount>0}function eA(t){return Yi(t)===void 0&&!r1(t)}function tu(t,e){Nt(t.node.children,(n,r)=>{e(new Nf(n,t,r))})}function i1(t,e,n,r){n&&e(t),tu(t,i=>{i1(i,e,!0)})}function tA(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Po(t){return new pe(t.parent===null?t.name:Po(t.parent)+"/"+t.name)}function Uh(t){t.parent!==null&&nA(t.parent,t.name,t)}function nA(t,e,n){const r=eA(n),i=On(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Uh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Uh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=/[\[\].#$\/\u0000-\u001F\u007F]/,iA=/[\[\].#$\u0000-\u001F\u007F]/,yc=10*1024*1024,s1=function(t){return typeof t=="string"&&t.length!==0&&!rA.test(t)},sA=function(t){return typeof t=="string"&&t.length!==0&&!iA.test(t)},oA=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),sA(t)},o1=function(t,e,n){const r=n instanceof pe?new FR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ir(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ir(r)+" with contents = "+e.toString());if(iw(e))throw new Error(t+"contains "+e.toString()+" "+Ir(r));if(typeof e=="string"&&e.length>yc/3&&Ga(e)>yc)throw new Error(t+"contains a string greater than "+yc+" utf8 bytes "+Ir(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Nt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!s1(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ir(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);zR(r,o),o1(t,a,r),BR(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ir(r)+" in addition to actual children.")}},lA=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!s1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!oA(n))throw new Error(Yk(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function uA(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!xw(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Wr(t,e,n){uA(t,n),cA(t,r=>bt(r,e)||bt(e,r))}function cA(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(hA(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function hA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Us&&We("event: "+n.toString()),xo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA="repo_interrupt",fA=25;class pA{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new aA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ea(),this.transactionQueueTree_=new Nf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function mA(t,e,n){if(t.stats_=pf(t.repoInfo_),t.forceRestClient_||cR())t.server_=new wa(t.repoInfo_,(r,i,s,o)=>{vv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>yv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Me(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new _n(t.repoInfo_,e,(r,i,s,o)=>{vv(t,r,i,s,o)},r=>{yv(t,r)},r=>{vA(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=mR(t.repoInfo_,()=>new pP(t.stats_,t.server_)),t.infoData_=new uP,t.infoSyncTree_=new mv({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Za(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Rf(t,"connected",!1),t.serverSyncTree_=new mv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const h=o(a,u);Wr(t.eventQueue_,r._path,h)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function gA(t){const n=t.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function l1(t){return YP({timestamp:gA(t)})}function vv(t,e,n,r,i){t.dataUpdateCount++;const s=new pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=oa(n,h=>Ge(h));o=qP(t.serverSyncTree_,s,u,i)}else{const u=Ge(n);o=KP(t.serverSyncTree_,s,u,i)}else if(r){const u=oa(n,h=>Ge(h));o=GP(t.serverSyncTree_,s,u)}else{const u=Ge(n);o=Za(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=Af(t,s)),Wr(t.eventQueue_,a,o)}function yv(t,e){Rf(t,"connected",e),e===!1&&_A(t)}function vA(t,e){Nt(e,(n,r)=>{Rf(t,n,r)})}function Rf(t,e,n){const r=new pe("/.info/"+e),i=Ge(n);t.infoData_.updateSnapshot(r,i);const s=Za(t.infoSyncTree_,r,i);Wr(t.eventQueue_,r,s)}function yA(t){return t.nextWriteId_++}function _A(t){a1(t,"onDisconnectEvents");const e=l1(t),n=Ea();Ah(t.onDisconnect_,se(),(i,s)=>{const o=JP(i,s,t.serverSyncTree_,e);Mw(n,i,o)});let r=[];Ah(n,se(),(i,s)=>{r=r.concat(Za(t.serverSyncTree_,i,s));const o=CA(t,i);Af(t,o)}),t.onDisconnect_=Ea(),Wr(t.eventQueue_,se(),r)}function wA(t){t.persistentConnection_&&t.persistentConnection_.interrupt(dA)}function a1(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),We(n,...e)}function u1(t,e,n){return Qw(t.serverSyncTree_,e,n)||re.EMPTY_NODE}function Pf(t,e=t.transactionQueueTree_){if(e||nu(t,e),Yi(e)){const n=h1(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&EA(t,Po(e),n)}else r1(e)&&tu(e,n=>{Pf(t,n)})}function EA(t,e,n){const r=n.map(h=>h.currentWriteId),i=u1(t,e,r);let s=i;const o=i.hash();for(let h=0;h<n.length;h++){const m=n[h];B(m.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),m.status=1,m.retryCount++;const p=St(e,m.path);s=s.updateChild(p,m.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,h=>{a1(t,"transaction put response",{path:u.toString(),status:h});let m=[];if(h==="ok"){const p=[];for(let g=0;g<n.length;g++)n[g].status=2,m=m.concat(fi(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&p.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();nu(t,xf(t.transactionQueueTree_,e)),Pf(t,t.transactionQueueTree_),Wr(t.eventQueue_,e,m);for(let g=0;g<p.length;g++)xo(p[g])}else{if(h==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{pt("transaction at "+u.toString()+" failed: "+h);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=h}Af(t,e)}},o)}function Af(t,e){const n=c1(t,e),r=Po(n),i=h1(t,n);return SA(t,i,r),r}function SA(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],h=St(n,u.path);let m=!1,p;if(B(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)m=!0,p=u.abortReason,i=i.concat(fi(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=fA)m=!0,p="maxretry",i=i.concat(fi(t.serverSyncTree_,u.currentWriteId,!0));else{const g=u1(t,u.path,o);u.currentInputSnapshot=g;const x=e[a].update(g.val());if(x!==void 0){o1("transaction failed: Data returned ",x,u.path);let N=Ge(x);typeof x=="object"&&x!=null&&On(x,".priority")||(N=N.updatePriority(g.getPriority()));const A=u.currentWriteId,w=l1(t),_=ZP(N,g,w);u.currentOutputSnapshotRaw=N,u.currentOutputSnapshotResolved=_,u.currentWriteId=yA(t),o.splice(o.indexOf(A),1),i=i.concat(WP(t.serverSyncTree_,u.path,_,u.currentWriteId,u.applyLocally)),i=i.concat(fi(t.serverSyncTree_,A,!0))}else m=!0,p="nodata",i=i.concat(fi(t.serverSyncTree_,u.currentWriteId,!0))}Wr(t.eventQueue_,n,i),i=[],m&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(p==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(p),!1,null))))}nu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)xo(r[a]);Pf(t,t.transactionQueueTree_)}function c1(t,e){let n,r=t.transactionQueueTree_;for(n=J(e);n!==null&&Yi(r)===void 0;)r=xf(r,n),e=de(e),n=J(e);return r}function h1(t,e){const n=[];return d1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function d1(t,e,n){const r=Yi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);tu(e,i=>{d1(t,i,n)})}function nu(t,e){const n=Yi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,n1(e,n.length>0?n:void 0)}tu(e,r=>{nu(t,r)})}function CA(t,e){const n=Po(c1(t,e)),r=xf(t.transactionQueueTree_,e);return tA(r,i=>{_c(t,i)}),_c(t,r),i1(r,i=>{_c(t,i)}),n}function _c(t,e){const n=Yi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(fi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?n1(e,void 0):n.length=s+1,Wr(t.eventQueue_,Po(e),i);for(let o=0;o<r.length;o++)xo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function kA(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):pt(`Invalid query segment '${n}' in query '${t}'`)}return e}const _v=function(t,e){const n=TA(t),r=n.namespace;n.domain==="firebase.com"&&Nn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Nn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||nR();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new gw(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new pe(n.pathString)}},TA=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let h=t.indexOf("//");h>=0&&(a=t.substring(0,h-1),t=t.substring(h+2));let m=t.indexOf("/");m===-1&&(m=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(m,p)),m<p&&(i=IA(t.substring(m,p)));const g=kA(t.substring(Math.min(t.length,p)));h=e.indexOf(":"),h>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(h+1),10)):h=e.length;const x=e.slice(0,h);if(x.toLowerCase()==="localhost")n="localhost";else if(x.split(".").length<=2)n=x;else{const N=e.indexOf(".");r=e.substring(0,N).toLowerCase(),n=e.substring(N+1),s=r}"ns"in g&&(s=g.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Q(this._path)?null:kw(this._path)}get ref(){return new Qi(this._repo,this._path)}get _queryIdentifier(){const e=iv(this._queryParams),n=df(e);return n==="{}"?"default":n}get _queryObject(){return iv(this._queryParams)}isEqual(e){if(e=Dn(e),!(e instanceof Of))return!1;const n=this._repo===e._repo,r=xw(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+UR(this._path)}}class Qi extends Of{constructor(e,n){super(e,n,new yf,!1)}get parent(){const e=Nw(this._path);return e===null?null:new Qi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}HP(Qi);$P(Qi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA="FIREBASE_DATABASE_EMULATOR_HOST",Fh={};let xA=!1;function RA(t,e,n,r){t.repoInfo_=new gw(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function PA(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Nn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),We("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=_v(s,i),a=o.repoInfo,u;typeof process<"u"&&Fg&&(u=Fg[NA]),u?(s=`http://${u}?ns=${a.namespace}`,o=_v(s,i),a=o.repoInfo):o.repoInfo.secure;const h=new dR(t.name,t.options,e);lA("Invalid Firebase Database URL",o),Q(o.path)||Nn("Database URL must point to the root of a Firebase Database (not including a child path).");const m=OA(a,t,h,new hR(t.name,n));return new DA(m,t)}function AA(t,e){const n=Fh[e];(!n||n[t.key]!==t)&&Nn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),wA(t),delete n[t.key]}function OA(t,e,n,r){let i=Fh[e.name];i||(i={},Fh[e.name]=i);let s=i[t.toURLString()];return s&&Nn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new pA(t,xA,n,r),i[t.toURLString()]=s,s}class DA{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(mA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qi(this._repo,se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(AA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Nn("Cannot call "+e+" on a deleted database.")}}function LA(t=qa(),e){const n=Eo(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Gd("database");r&&MA(n,...r)}return n}function MA(t,e,n,r={}){t=Dn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Nn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Nn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Pl(Pl.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:qd(r.mockUserToken,t.app.options.projectId);s=new Pl(o)}RA(i,e,n,s)}/**
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
 */function jA(t){Qx(vr),hr(new In("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return PA(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),It(zg,Bg,t),It(zg,Bg,"esm2017")}_n.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};_n.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};jA();const bA={apiKey:"demo-api-key",authDomain:"demo-project.firebaseapp.com",projectId:"demo-project",storageBucket:"demo-project.appspot.com",messagingSenderId:"123456789",appId:"1:123456789:web:abcdef",databaseURL:"https://demo-project.firebaseio.com"},ru=p0(bA),UA=nx(ru),FA=new cn,zA=()=>h2(UA,FA);wx(ru);Gx(ru);LA(ru);function BA(){const t=An(),{setUser:e,setLoading:n,isAuthenticated:r}=gr(),[i,s]=M.useState(!0),[o,a]=M.useState(!1),[u,h]=M.useState(""),[m,p]=M.useState({email:"",password:"",username:""});if(r)return t("/lobby"),null;const g=async()=>{h(""),a(!0);try{const R=await zA(),A={uid:R.user.uid,email:R.user.email,displayName:R.user.displayName,photoURL:R.user.photoURL};e(A),n(!1),t("/lobby")}catch{console.log("Using demo mode for Google sign-in");const A={uid:`google_user_${Date.now()}`,email:"demo@gmail.com",displayName:"Demo User",photoURL:null,isGoogle:!0};e(A),n(!1),t("/lobby")}finally{a(!1)}},x=async R=>{R.preventDefault(),h(""),a(!0);try{await new Promise(w=>setTimeout(w,1e3));const A={uid:`user_${Date.now()}`,email:m.email,displayName:m.username||m.email.split("@")[0]};e(A),n(!1),t("/profile")}catch{h("Authentication failed. Please try again.")}finally{a(!1)}},N=R=>{p({...m,[R.target.name]:R.target.value})};return d.jsxs("div",{className:"home",children:[d.jsxs("div",{className:"home-background",children:[d.jsx("div",{className:"bg-gradient-1"}),d.jsx("div",{className:"bg-gradient-2"}),d.jsx("div",{className:"bg-grid"}),d.jsx("div",{className:"bg-glow"})]}),d.jsx("header",{className:"home-header",children:d.jsxs("div",{className:"home-logo",children:[d.jsx(Ek,{className:"logo-icon"}),d.jsx("span",{children:"Dreamledge"})]})}),d.jsxs("main",{className:"home-main",children:[d.jsxs("section",{className:"hero",children:[d.jsxs("div",{className:"hero-content",children:[d.jsxs("div",{className:"hero-badge",children:[d.jsx("span",{className:"badge-dot"}),"Live Battle Arena"]}),d.jsxs("h1",{className:"hero-title",children:["Where Artists",d.jsx("span",{className:"hero-title-accent",children:" Battle "}),"for Glory"]}),d.jsx("p",{className:"hero-subtitle",children:"Experience the thrill of live rap battles. Watch artists compete, judges critique, and the crowd decides the winner."}),d.jsx("div",{className:"hero-actions",children:d.jsxs("button",{className:"btn btn-primary btn-lg",onClick:()=>{var R;s(!1),(R=document.getElementById("join-section"))==null||R.scrollIntoView({behavior:"smooth"})},children:["Get Started",d.jsx(lk,{size:20})]})})]}),d.jsx("div",{className:"hero-visual",children:d.jsxs("div",{className:"battle-preview",children:[d.jsxs("div",{className:"preview-card artist-1",children:[d.jsx("div",{className:"preview-avatar",children:d.jsx(ir,{size:32})}),d.jsx("span",{className:"preview-label",children:"Artist"})]}),d.jsx("div",{className:"preview-vs",children:"VS"}),d.jsxs("div",{className:"preview-card artist-2",children:[d.jsx("div",{className:"preview-avatar",children:d.jsx(ir,{size:32})}),d.jsx("span",{className:"preview-label",children:"Artist"})]})]})})]}),d.jsxs("section",{className:"features",children:[d.jsxs("div",{className:"feature-card",children:[d.jsx("div",{className:"feature-icon artist",children:d.jsx(ir,{size:28})}),d.jsx("h3",{className:"feature-title",children:"Artists"}),d.jsx("p",{className:"feature-desc",children:"Upload your tracks and battle head-to-head. Show your flow, lyrics, and stage presence."})]}),d.jsxs("div",{className:"feature-card",children:[d.jsx("div",{className:"feature-icon judge",children:d.jsx(ra,{size:28})}),d.jsx("h3",{className:"feature-title",children:"Judges"}),d.jsx("p",{className:"feature-desc",children:"Evaluate performances with professional feedback. Vote on who brings the heat."})]}),d.jsxs("div",{className:"feature-card",children:[d.jsx("div",{className:"feature-icon spectator",children:d.jsx(hk,{size:28})}),d.jsx("h3",{className:"feature-title",children:"Spectators"}),d.jsx("p",{className:"feature-desc",children:"Watch live battles, chat with fans, and vote for your favorite artist."})]})]}),d.jsx("section",{className:"auth-section",id:"join-section",children:d.jsxs("div",{className:"auth-card",children:[d.jsxs("div",{className:"auth-header",children:[d.jsx("h2",{className:"auth-title",children:i?"Welcome Back":"Join Dreamledge"}),d.jsx("p",{className:"auth-subtitle",children:i?"Sign in to continue to the arena":"Create an account to start battling"})]}),d.jsxs("button",{type:"button",className:"btn btn-google",onClick:g,disabled:o,children:[d.jsx(uk,{size:20}),"Continue with Google"]}),d.jsx("div",{className:"auth-divider",children:d.jsx("span",{children:"or"})}),d.jsxs("form",{onSubmit:x,className:"auth-form",children:[!i&&d.jsxs("div",{className:"input-group",children:[d.jsxs("label",{className:"input-label",children:[d.jsx(Hd,{size:16}),"Username"]}),d.jsx("input",{type:"text",name:"username",value:m.username,onChange:N,className:"input",placeholder:"Choose a username",required:!i})]}),d.jsxs("div",{className:"input-group",children:[d.jsxs("label",{className:"input-label",children:[d.jsx(J_,{size:16}),"Email"]}),d.jsx("input",{type:"email",name:"email",value:m.email,onChange:N,className:"input",placeholder:"Enter your email",required:!0})]}),d.jsxs("div",{className:"input-group",children:[d.jsxs("label",{className:"input-label",children:[d.jsx(pk,{size:16}),"Password"]}),d.jsx("input",{type:"password",name:"password",value:m.password,onChange:N,className:"input",placeholder:"Enter your password",required:!0})]}),u&&d.jsx("p",{className:"error-text",children:u}),d.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:o,children:o?d.jsxs("span",{className:"loading-dots",children:[d.jsx("span",{}),d.jsx("span",{}),d.jsx("span",{})]}):i?"Sign In":"Create Account"})]}),d.jsx("div",{className:"auth-footer",children:d.jsxs("p",{children:[i?"Don't have an account? ":"Already have an account? ",d.jsx("button",{className:"auth-switch",onClick:()=>s(!i),children:i?"Sign Up":"Sign In"})]})})]})})]}),d.jsx("footer",{className:"home-footer",children:d.jsx("p",{children:"© 2024 Dreamledge. All rights reserved."})})]})}function VA(){const t=An(),{user:e,userProfile:n}=gr(),{setUserRole:r,setIsHost:i}=zd(),[s,o]=M.useState(""),[a,u]=M.useState(!1),[h,m]=M.useState(!1),[p,g]=M.useState([{id:"1",name:"🔥 Hot Bars Only",players:4,status:"waiting"},{id:"2",name:"Underground Battles",players:6,status:"active"},{id:"3",name:"New Artist Showcase",players:3,status:"waiting"}]),x=()=>{const w="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let _="";for(let E=0;E<6;E++)_+=w.charAt(Math.floor(Math.random()*w.length));return _},N=w=>{r(w);const _=x();i(w==="artist"),t(`/waiting/${_}`)},R=w=>{r("spectator"),t(`/waiting/${w}`)},A=()=>{const w=x();i(!0),r("artist"),t(`/waiting/${w}`)};return d.jsx("div",{className:"lobby",children:d.jsxs("div",{className:"lobby-container",children:[d.jsxs("header",{className:"lobby-header",children:[d.jsx("h1",{className:"page-title",children:"Choose Your Path"}),d.jsx("p",{className:"lobby-subtitle",children:"Pick your role and enter the arena"})]}),d.jsxs("div",{className:"role-grid",children:[d.jsxs("button",{className:"role-card role-artist",onClick:()=>N("artist"),children:[d.jsx("div",{className:"role-icon",children:d.jsx(Sk,{size:32})}),d.jsxs("div",{className:"role-info",children:[d.jsx("h3",{className:"role-title",children:"Random Artist Battle"}),d.jsx("p",{className:"role-desc",children:"Enter the arena as an artist and compete"})]}),d.jsx("span",{className:"role-badge",children:"Compete"})]}),d.jsxs("button",{className:"role-card role-judge",onClick:()=>N("judge"),children:[d.jsx("div",{className:"role-icon",children:d.jsx(Hd,{size:32})}),d.jsxs("div",{className:"role-info",children:[d.jsx("h3",{className:"role-title",children:"Random Judge"}),d.jsx("p",{className:"role-desc",children:"Evaluate and vote on performances"})]}),d.jsx("span",{className:"role-badge",children:"Judge"})]}),d.jsxs("button",{className:"role-card role-spectator",onClick:()=>N("spectator"),children:[d.jsx("div",{className:"role-icon",children:d.jsx(sr,{size:32})}),d.jsxs("div",{className:"role-info",children:[d.jsx("h3",{className:"role-title",children:"Random Spectator"}),d.jsx("p",{className:"role-desc",children:"Watch battles and vote for favorites"})]}),d.jsx("span",{className:"role-badge",children:"Watch"})]}),d.jsxs("button",{className:"role-card role-create",onClick:A,children:[d.jsx("div",{className:"role-icon",children:d.jsx(e0,{size:32})}),d.jsxs("div",{className:"role-info",children:[d.jsx("h3",{className:"role-title",children:"Create Battle"}),d.jsx("p",{className:"role-desc",children:"Host your own private battle room"})]}),d.jsx("span",{className:"role-badge",children:"Host"})]})]}),d.jsxs("div",{className:"join-room",children:[d.jsx("h2",{className:"section-title",children:"Join with Code"}),d.jsxs("div",{className:"join-form",children:[d.jsx("input",{type:"text",className:"input room-input",placeholder:"Enter room code",value:s,onChange:w=>o(w.target.value.toUpperCase()),maxLength:6}),d.jsx("button",{className:"btn btn-primary",onClick:()=>s.length>=4&&R(s),disabled:s.length<4,children:"Join Room"})]})]}),d.jsxs("section",{className:"active-rooms",children:[d.jsx("h2",{className:"section-title",children:"Active Battles"}),d.jsx("div",{className:"rooms-list",children:p.map(w=>d.jsxs("button",{className:"room-card",onClick:()=>R(w.id),children:[d.jsxs("div",{className:"room-info",children:[d.jsx("h3",{className:"room-name",children:w.name}),d.jsxs("div",{className:"room-meta",children:[d.jsxs("span",{className:"room-players",children:[d.jsx(sr,{size:14}),w.players," online"]}),d.jsx("span",{className:`room-status ${w.status}`,children:w.status==="waiting"?"Waiting":"Live"})]})]}),d.jsx("div",{className:"room-action",children:d.jsx(wk,{size:18})})]},w.id))})]})]})})}const HA="qYl52xlnZyVb0oLhm9Tz8KlUn3wOlUsn";function Df({onSelect:t,onClose:e}){const[n,r]=M.useState(""),[i,s]=M.useState([]),[o,a]=M.useState(!0),[u,h]=M.useState(!1);M.useEffect(()=>{m("trending")},[]);const m=async(x,N="")=>{a(!0);try{let A=`https://api.giphy.com/v1/gifs/${x==="trending"?"trending":"search"}?api_key=${HA}&limit=20&rating=pg-13`;N&&(A+=`&q=${encodeURIComponent(N)}`);const _=await(await fetch(A)).json();if(_.data&&Array.isArray(_.data)){const E=_.data.map(D=>{var j,b,C,y,S,I,T,P;return{id:D.id,url:((b=(j=D.images)==null?void 0:j.fixed_width)==null?void 0:b.url)||((y=(C=D.images)==null?void 0:C.original)==null?void 0:y.url),preview:((I=(S=D.images)==null?void 0:S.fixed_width)==null?void 0:I.url)||((P=(T=D.images)==null?void 0:T.original)==null?void 0:P.url)}}).filter(D=>D.url);s(E)}}catch(R){console.error("Error fetching GIFs:",R),s([])}finally{a(!1)}},p=x=>{r(x),x.length>1?m("search",x):x.length===0&&m("trending")},g=x=>{t(x)};return d.jsxs("div",{className:"gif-picker",children:[d.jsxs("div",{className:"gif-picker-header",children:[d.jsx("h3",{children:"Choose a GIF"}),d.jsx("button",{className:"gif-close",onClick:e,children:d.jsx(_o,{size:18})})]}),d.jsxs("div",{className:"gif-search",children:[d.jsx(t0,{size:18,className:"search-icon"}),d.jsx("input",{type:"text",inputMode:u?"search":"text",placeholder:u?"Search GIFs...":"Tap to search",value:n,onChange:x=>p(x.target.value),onFocus:()=>h(!0),onBlur:()=>h(!1),className:"gif-search-input"})]}),d.jsxs("div",{className:"gif-section",children:[d.jsxs("div",{className:"gif-section-title",children:[d.jsx(Ik,{size:14}),n?"Results":"Trending"]}),o?d.jsxs("div",{className:"gif-loading",children:[d.jsx(fk,{size:32,className:"spinner"}),d.jsx("span",{children:"Loading..."})]}):d.jsx("div",{className:"gif-grid",children:i.map(x=>d.jsx("button",{className:"gif-item",onClick:()=>g(x.url),children:d.jsx("img",{src:x.preview,alt:"GIF",loading:"lazy"})},x.id))})]}),d.jsx("div",{className:"gif-picker-footer",children:d.jsx("span",{children:"GIPHY"})})]})}const $A={id:"1",phase:"performance",round:1,currentArtist:1,timeRemaining:180,artist1:{id:"1",name:"MC_Flow",votes:2,isPlaying:!0},artist2:{id:"2",name:"LyricQueen",votes:1,isPlaying:!1}};function WA(){const{battleId:t}=Ud(),e=An(),{user:n,userProfile:r}=gr(),{userRole:i}=zd(),{isGifPickerOpen:s,toggleGifPicker:o}=Wa(),[a,u]=M.useState($A),[h,m]=M.useState([{id:1,userId:"1",username:"MC_Flow",message:"Let's gooo! 🔥",time:"2:35 PM",isGif:!1},{id:2,userId:"3",username:"Spectator_1",message:"This is insane!",time:"2:35 PM",isGif:!1},{id:3,userId:"4",username:"Judge_Maya",message:"That flow was clean",time:"2:36 PM",isGif:!1},{id:4,userId:"5",username:"FanBoy",message:"",time:"2:36 PM",isGif:!0,gifUrl:"https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"}]),[p,g]=M.useState(""),[x,N]=M.useState(!1),[R,A]=M.useState(!1),[w,_]=M.useState(!0),[E,D]=M.useState(80),j=M.useRef(null);M.useEffect(()=>{var T;(T=j.current)==null||T.scrollIntoView({behavior:"smooth"})},[h]),M.useEffect(()=>{const T=setInterval(()=>{u(P=>P.timeRemaining>0?{...P,timeRemaining:P.timeRemaining-1}:P)},1e3);return()=>clearInterval(T)},[]);const b=T=>{const P=Math.floor(T/60),k=T%60;return`${P}:${k.toString().padStart(2,"0")}`},C=T=>{if(T.preventDefault(),!p.trim())return;const P={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:(r==null?void 0:r.username)||"You",message:p,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!1};m([...h,P]),g("")},y=T=>{const P={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:(r==null?void 0:r.username)||"You",message:"",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!0,gifUrl:T};m([...h,P]),g("")},S=T=>{switch(T){case"waiting":return"Waiting";case"preparing":return"Preparing";case"submission":return"Submit Track";case"performance":return"Performance";case"voting":return"Voting";case"results":return"Results";default:return T}};a.currentArtist===1?a.artist1:a.artist2;const I=a.artist1.votes+a.artist2.votes;return d.jsx("div",{className:"arena",children:d.jsxs("div",{className:"arena-container",children:[d.jsxs("header",{className:"arena-header",children:[d.jsxs("div",{className:"battle-info",children:[d.jsx("span",{className:"battle-phase",children:S(a.phase)}),d.jsx("span",{className:"battle-divider",children:"•"}),d.jsxs("span",{className:"battle-round",children:["Round ",a.round]})]}),d.jsxs("div",{className:`timer ${a.timeRemaining<=30?"urgent":""}`,children:[d.jsx(Ck,{size:18}),d.jsx("span",{children:b(a.timeRemaining)})]})]}),d.jsxs("div",{className:"arena-content",children:[d.jsxs("section",{className:"arena-main",children:[d.jsxs("div",{className:"video-grid",children:[d.jsxs("div",{className:`video-box artist ${a.currentArtist===1?"active":""}`,children:[d.jsx("div",{className:"video-content",children:d.jsx("div",{className:"avatar-large",children:d.jsx(ir,{size:40})})}),d.jsxs("div",{className:"video-info",children:[d.jsx("span",{className:"artist-name",children:a.artist1.name}),d.jsxs("div",{className:"artist-stats",children:[d.jsxs("span",{className:"vote-count",children:[d.jsx(Jm,{size:14}),a.artist1.votes]}),a.currentArtist===1&&w&&d.jsxs("span",{className:"playing-indicator",children:[d.jsx(rc,{size:14}),"Playing"]})]})]})]}),d.jsxs("div",{className:`video-box artist ${a.currentArtist===2?"active":""}`,children:[d.jsx("div",{className:"video-content",children:d.jsx("div",{className:"avatar-large",children:d.jsx(ir,{size:40})})}),d.jsxs("div",{className:"video-info",children:[d.jsx("span",{className:"artist-name",children:a.artist2.name}),d.jsxs("div",{className:"artist-stats",children:[d.jsxs("span",{className:"vote-count",children:[d.jsx(Jm,{size:14}),a.artist2.votes]}),a.currentArtist===2&&w&&d.jsxs("span",{className:"playing-indicator",children:[d.jsx(rc,{size:14}),"Playing"]})]})]})]}),d.jsxs("div",{className:"video-box judge",children:[d.jsx("div",{className:"video-content",children:d.jsx("div",{className:"avatar-large judge",children:d.jsx(ra,{size:32})})}),d.jsx("div",{className:"video-info",children:d.jsx("span",{className:"artist-name",children:"Judge_Dave"})})]}),d.jsxs("div",{className:"video-box judge",children:[d.jsx("div",{className:"video-content",children:d.jsx("div",{className:"avatar-large judge",children:d.jsx(ra,{size:32})})}),d.jsx("div",{className:"video-info",children:d.jsx("span",{className:"artist-name",children:"Judge_Maya"})})]})]}),d.jsxs("div",{className:"arena-controls",children:[d.jsxs("div",{className:"playback-controls",children:[d.jsx("button",{className:`control-btn large ${w?"active":""}`,onClick:()=>_(!w),children:w?d.jsx(gk,{size:24}):d.jsx(yk,{size:24})}),d.jsxs("div",{className:"volume-control",children:[d.jsx(rc,{size:18}),d.jsx("input",{type:"range",min:"0",max:"100",value:E,onChange:T=>D(T.target.value),className:"volume-slider"})]})]}),d.jsxs("div",{className:"media-controls",children:[d.jsx("button",{className:`control-btn ${x?"active":"off"}`,onClick:()=>N(!x),children:x?d.jsx(ir,{size:20}):d.jsx(vh,{size:20})}),d.jsx("button",{className:`control-btn ${R?"active":"off"}`,onClick:()=>A(!R),children:R?d.jsx(n0,{size:20}):d.jsx(yh,{size:20})}),d.jsx("button",{className:"control-btn leave",onClick:()=>e("/lobby"),children:d.jsx(_o,{size:20})})]})]}),d.jsxs("div",{className:"vote-bar",children:[d.jsx("div",{className:"vote-track",children:d.jsx("div",{className:"vote-progress",style:{width:`${a.artist1.votes/Math.max(I,1)*100}%`}})}),d.jsxs("div",{className:"vote-labels",children:[d.jsx("span",{children:a.artist1.name}),d.jsx("span",{className:"vs",children:"VS"}),d.jsx("span",{children:a.artist2.name})]})]})]}),d.jsxs("aside",{className:"chat-section arena-chat",children:[d.jsxs("div",{className:"chat-header",children:[d.jsx("h3",{children:"Live Crowd"}),d.jsxs("span",{className:"viewer-count",children:[d.jsx(sr,{size:14}),"24 watching"]})]}),d.jsxs("div",{className:"chat-messages",children:[h.map(T=>d.jsxs("div",{className:`chat-message ${T.userId===(n==null?void 0:n.uid)?"own":""} ${T.isGif?"gif-message":""}`,children:[d.jsxs("div",{className:"message-header",children:[d.jsx("span",{className:"message-username",children:T.username}),d.jsx("span",{className:"message-time",children:T.time})]}),T.isGif?d.jsx("img",{src:T.gifUrl,alt:"GIF",className:"message-gif"}):d.jsx("p",{className:"message-content",children:T.message})]},T.id)),d.jsx("div",{ref:j})]}),d.jsxs("form",{className:"chat-input-form",onSubmit:C,children:[d.jsx("button",{type:"button",className:"gif-toggle",onClick:o,children:"GIF"}),d.jsx("input",{type:"text",className:"input chat-input",placeholder:"Say something...",value:p,onChange:T=>g(T.target.value)}),d.jsx("button",{type:"submit",className:"send-btn",disabled:!p.trim(),children:d.jsx(Vd,{size:18})})]}),s&&d.jsx(Df,{onSelect:y,onClose:o})]})]})]})})}function GA(){var _;const t=An(),{user:e,userProfile:n,setUserProfile:r}=gr(),[i,s]=M.useState(!1),[o,a]=M.useState(!1),[u,h]=M.useState(!1),[m,p]=M.useState(""),[g,x]=M.useState({username:"",bio:"",avatarUrl:""});M.useEffect(()=>{if(!e){t("/");return}x({username:(n==null?void 0:n.username)||(e==null?void 0:e.displayName)||"",bio:(n==null?void 0:n.bio)||"",avatarUrl:(n==null?void 0:n.avatarUrl)||""})},[e,n,t]);const N=E=>{const{name:D,value:j}=E.target;x(b=>({...b,[D]:j})),p("")},R=async()=>{if(!g.username.trim()){p("Username is required");return}if(g.username.length<3){p("Username must be at least 3 characters");return}a(!0),p("");try{await new Promise(D=>setTimeout(D,500));const E={...n,username:g.username,bio:g.bio,avatarUrl:g.avatarUrl,lastUpdated:Date.now()};r(E),s(!1),h(!0),setTimeout(()=>h(!1),3e3)}catch{p("Failed to save profile")}finally{a(!1)}},A=()=>{x({username:(n==null?void 0:n.username)||(e==null?void 0:e.displayName)||"",bio:(n==null?void 0:n.bio)||"",avatarUrl:(n==null?void 0:n.avatarUrl)||""}),s(!1),p("")},w=()=>{const E=["#e63946","#2ecc71","#3498db","#9b59b6","#f39c12","#1abc9c","#e74c3c","#34495e"],D=E[Math.floor(Math.random()*E.length)];x(j=>({...j,avatarUrl:D}))};return d.jsx("div",{className:"profile",children:d.jsxs("div",{className:"profile-container",children:[u&&d.jsxs("div",{className:"success-toast",children:[d.jsx(Bd,{size:18}),"Profile updated successfully!"]}),d.jsxs("header",{className:"profile-header",children:[d.jsxs("div",{className:"profile-avatar-section",children:[d.jsx("div",{className:"profile-avatar",style:{background:g.avatarUrl||"var(--accent-red)"},children:g.username?g.username.charAt(0).toUpperCase():"?"}),i&&d.jsx("button",{className:"avatar-edit-btn",onClick:w,children:d.jsx(ak,{size:18})})]}),d.jsx("div",{className:"profile-info",children:i?d.jsxs("div",{className:"edit-form",children:[d.jsxs("div",{className:"input-group",children:[d.jsx("label",{className:"input-label",children:"Username"}),d.jsx("input",{type:"text",name:"username",value:g.username,onChange:N,className:"input",placeholder:"Enter username",maxLength:20})]}),d.jsxs("div",{className:"input-group",children:[d.jsx("label",{className:"input-label",children:"Bio"}),d.jsx("textarea",{name:"bio",value:g.bio,onChange:N,className:"input bio-input",placeholder:"Tell us about yourself...",maxLength:150,rows:3}),d.jsxs("span",{className:"char-count",children:[g.bio.length,"/150"]})]}),m&&d.jsxs("div",{className:"error-message",children:[d.jsx(sk,{size:16}),m]}),d.jsxs("div",{className:"edit-actions",children:[d.jsxs("button",{className:"btn btn-secondary",onClick:A,disabled:o,children:[d.jsx(_o,{size:18}),"Cancel"]}),d.jsx("button",{className:"btn btn-primary",onClick:R,disabled:o,children:o?d.jsx("span",{className:"saving",children:"Saving..."}):d.jsxs(d.Fragment,{children:[d.jsx(_k,{size:18}),"Save"]})})]})]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"profile-name-row",children:[d.jsx("h1",{className:"profile-name",children:g.username||"Anonymous"}),d.jsxs("button",{className:"edit-btn",onClick:()=>s(!0),children:[d.jsx(vk,{size:16}),"Edit"]})]}),d.jsx("p",{className:"profile-bio",children:g.bio||"No bio yet"}),d.jsx("div",{className:"profile-meta",children:d.jsxs("span",{className:"meta-item",children:[d.jsx(J_,{size:14}),(e==null?void 0:e.email)||"No email"]})})]})})]}),d.jsxs("section",{className:"profile-stats",children:[d.jsxs("div",{className:"stat-card",children:[d.jsx("span",{className:"stat-value",children:"0"}),d.jsx("span",{className:"stat-label",children:"Battles Won"})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("span",{className:"stat-value",children:"0"}),d.jsx("span",{className:"stat-label",children:"Battles Lost"})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("span",{className:"stat-value",children:"0"}),d.jsx("span",{className:"stat-label",children:"Total Votes"})]})]}),d.jsxs("section",{className:"profile-section",children:[d.jsx("h2",{className:"section-title",children:"Account Info"}),d.jsxs("div",{className:"info-list",children:[d.jsxs("div",{className:"info-item",children:[d.jsx("span",{className:"info-label",children:"User ID"}),d.jsx("span",{className:"info-value mono",children:((_=e==null?void 0:e.uid)==null?void 0:_.slice(0,12))||"N/A"})]}),d.jsxs("div",{className:"info-item",children:[d.jsx("span",{className:"info-label",children:"Account Type"}),d.jsx("span",{className:"info-value",children:"Free"})]}),d.jsxs("div",{className:"info-item",children:[d.jsx("span",{className:"info-label",children:"Member Since"}),d.jsx("span",{className:"info-value",children:new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"})})]})]})]}),d.jsx("div",{className:"profile-note",children:d.jsx("p",{children:"Changes to your username and profile picture update instantly across the app."})})]})})}const KA=[{id:"1",type:"dm",name:"MC_Flow",avatar:"#e63946",lastMessage:"GG last battle!",time:"2:30 PM",unread:2},{id:"2",type:"dm",name:"Judge_Dave",avatar:"#2ecc71",lastMessage:"Your flow was clean",time:"1:15 PM",unread:0},{id:"3",type:"room",name:"Battle Lounge",avatar:"#3498db",lastMessage:"Who's ready for the next battle?",time:"12:45 PM",unread:5,members:24},{id:"4",type:"room",name:"Underground Cypher",avatar:"#9b59b6",lastMessage:"New track just dropped!",time:"Yesterday",unread:0,members:156}],qA=[{id:"room1",name:"Battle Lounge",members:24,isPublic:!0},{id:"room2",name:"Underground Cypher",members:156,isPublic:!0},{id:"room3",name:"Hip Hop Heads",members:89,isPublic:!0},{id:"room4",name:"Beat Makers",members:67,isPublic:!0}],wv=[{id:1,userId:"1",username:"MC_Flow",message:"GG last battle! 🔥",time:"2:30 PM"},{id:2,userId:"me",username:"You",message:"Thanks! You killed it too",time:"2:31 PM"},{id:3,userId:"1",username:"MC_Flow",message:"Wanna go again?",time:"2:32 PM"},{id:4,userId:"me",username:"You",message:"I'm down. Let me warm up first",time:"2:33 PM"},{id:5,userId:"1",username:"MC_Flow",message:"Bet. I'll create a room",time:"2:34 PM"}],Ev=[{id:1,userId:"user1",username:"BeatMaker99",message:"Who's ready for the next battle?",time:"12:45 PM"},{id:2,userId:"user2",username:"FlowMaster",message:"I am! Hit me up",time:"12:46 PM"},{id:3,userId:"user3",username:"Lyricist",message:"Gonna spectate this one",time:"12:47 PM"},{id:4,userId:"user4",username:"HipHopFan",message:"This arena is fire 🔥",time:"12:48 PM"}];function Sv(){const{conversationId:t}=Ud(),e=An(),{user:n,userProfile:r}=gr(),{isGifPickerOpen:i,toggleGifPicker:s}=Wa(),[o,a]=M.useState(KA),[u,h]=M.useState(qA),[m,p]=M.useState(t?"chat":"dms"),[g,x]=M.useState(null),[N,R]=M.useState([]),[A,w]=M.useState(""),[_,E]=M.useState(""),[D,j]=M.useState(!1),[b,C]=M.useState(""),y=M.useRef(null);M.useEffect(()=>{if(t){const V=o.find(W=>W.id===t);V&&(x(V),R(V.type==="room"?Ev:wv),p("chat"))}},[t,o]),M.useEffect(()=>{var V;(V=y.current)==null||V.scrollIntoView({behavior:"smooth"})},[N]);const S=o.filter(V=>V.name.toLowerCase().includes(_.toLowerCase())),I=u.filter(V=>V.name.toLowerCase().includes(_.toLowerCase())),T=V=>{x(V),R(V.type==="room"?Ev:wv),p("chat"),e(`/messages/${V.id}`,{replace:!0})},P=V=>{if(V.preventDefault(),!A.trim())return;const W={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:(r==null?void 0:r.username)||"You",message:A,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};R([...N,W]),w("")},k=V=>{const W={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:(r==null?void 0:r.username)||"You",message:"",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!0,gifUrl:V};R([...N,W]),w("")},Ue=()=>{if(!b.trim())return;const V={id:`room_${Date.now()}`,name:b,members:1,isPublic:!0,type:"room",lastMessage:"Room created",time:"Now",unread:0};h([V,...u]),a([V,...o]),C(""),j(!1),T(V)},xt=()=>{x(null),p("dms"),e("/messages")};return d.jsx("div",{className:"messages",children:d.jsx("div",{className:"messages-container",children:m==="chat"&&g?d.jsxs("div",{className:"chat-view",children:[d.jsxs("header",{className:"chat-view-header",children:[d.jsx("button",{className:"back-btn",onClick:xt,children:d.jsx(ok,{size:20})}),d.jsxs("div",{className:"chat-view-info",children:[d.jsx("span",{className:"chat-view-avatar",style:{background:g.avatar},children:g.type==="room"?d.jsx(Xm,{size:18}):g.name.charAt(0)}),d.jsxs("div",{className:"chat-view-details",children:[d.jsx("h2",{className:"chat-view-name",children:g.name}),g.type==="room"&&d.jsxs("span",{className:"chat-view-meta",children:[d.jsx(sr,{size:12}),g.members," members"]})]})]})]}),d.jsxs("div",{className:"chat-view-messages",children:[N.map(V=>d.jsxs("div",{className:`chat-view-message ${V.userId===(n==null?void 0:n.uid)||V.userId==="me"?"own":""} ${V.isGif?"gif-message":""}`,children:[V.userId!=="me"&&d.jsx("span",{className:"message-sender",children:V.username}),V.isGif?d.jsx("img",{src:V.gifUrl,alt:"GIF",className:"message-gif"}):d.jsx("p",{className:"message-text",children:V.message}),d.jsx("span",{className:"message-time",children:V.time})]},V.id)),d.jsx("div",{ref:y})]}),d.jsxs("form",{className:"chat-view-input",onSubmit:P,children:[d.jsx("button",{type:"button",className:"gif-toggle",onClick:s,children:"GIF"}),d.jsx("input",{type:"text",className:"input",placeholder:`Message ${g.name}`,value:A,onChange:V=>w(V.target.value)}),d.jsx("button",{type:"submit",className:"send-btn",disabled:!A.trim(),children:d.jsx(Vd,{size:20})})]}),i&&d.jsx(Df,{onSelect:k,onClose:s})]}):d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"messages-header",children:d.jsx("h1",{className:"page-title",children:"Messages"})}),d.jsxs("div",{className:"messages-tabs",children:[d.jsxs("button",{className:`tab-btn ${m==="dms"?"active":""}`,onClick:()=>p("dms"),children:[d.jsx(Z_,{size:18}),"Direct"]}),d.jsxs("button",{className:`tab-btn ${m==="rooms"?"active":""}`,onClick:()=>p("rooms"),children:[d.jsx(sr,{size:18}),"Rooms"]})]}),d.jsxs("div",{className:"search-bar",children:[d.jsx(t0,{size:18,className:"search-icon"}),d.jsx("input",{type:"text",className:"input search-input",placeholder:"Search conversations...",value:_,onChange:V=>E(V.target.value)})]}),m==="dms"&&d.jsx("div",{className:"conversations-list",children:S.filter(V=>V.type==="dm").map(V=>d.jsxs("button",{className:"conversation-item",onClick:()=>T(V),children:[d.jsx("span",{className:"conv-avatar",style:{background:V.avatar},children:V.name.charAt(0)}),d.jsxs("div",{className:"conv-info",children:[d.jsxs("div",{className:"conv-header",children:[d.jsx("span",{className:"conv-name",children:V.name}),d.jsx("span",{className:"conv-time",children:V.time})]}),d.jsx("p",{className:"conv-preview",children:V.lastMessage})]}),V.unread>0&&d.jsx("span",{className:"unread-badge",children:V.unread})]},V.id))}),m==="rooms"&&d.jsxs("div",{className:"rooms-section",children:[d.jsxs("button",{className:"create-room-btn",onClick:()=>j(!0),children:[d.jsx(e0,{size:20}),"Create Room"]}),d.jsx("div",{className:"rooms-list",children:I.map(V=>d.jsxs("button",{className:"room-item",onClick:()=>T({...V,type:"room",lastMessage:"Join the conversation",time:""}),children:[d.jsx("span",{className:"room-avatar",children:d.jsx(Xm,{size:18})}),d.jsxs("div",{className:"room-info",children:[d.jsx("span",{className:"room-name",children:V.name}),d.jsxs("span",{className:"room-members",children:[d.jsx(sr,{size:12}),V.members," members"]})]})]},V.id))})]}),D&&d.jsx("div",{className:"modal-overlay",onClick:()=>j(!1),children:d.jsxs("div",{className:"modal create-room-modal",onClick:V=>V.stopPropagation(),children:[d.jsxs("div",{className:"modal-header",children:[d.jsx("h3",{className:"modal-title",children:"Create Room"}),d.jsx("button",{className:"modal-close",onClick:()=>j(!1),children:d.jsx(_o,{size:20})})]}),d.jsxs("div",{className:"input-group",children:[d.jsx("label",{className:"input-label",children:"Room Name"}),d.jsx("input",{type:"text",className:"input",placeholder:"Enter room name",value:b,onChange:V=>C(V.target.value),maxLength:30})]}),d.jsxs("button",{className:"btn btn-primary btn-lg",onClick:Ue,disabled:!b.trim(),children:[d.jsx(Bd,{size:18}),"Create"]})]})})]})})})}const YA=[{id:"1",name:"MC_Flow",role:"artist",isReady:!0,hasVideo:!0,hasAudio:!0},{id:"2",name:"LyricQueen",role:"artist",isReady:!0,hasVideo:!0,hasAudio:!1},{id:"3",name:"Judge_Dave",role:"judge",isReady:!0,hasVideo:!0,hasAudio:!0},{id:"4",name:"Judge_Maya",role:"judge",isReady:!1,hasVideo:!1,hasAudio:!0}];function QA(){const{roomId:t}=Ud(),e=An(),{user:n,userProfile:r}=gr(),{userRole:i,isHost:s,setParticipants:o}=zd(),{isGifPickerOpen:a,toggleGifPicker:u}=Wa(),[h,m]=M.useState(YA),[p,g]=M.useState([{id:1,userId:"1",username:"MC_Flow",message:"Ready to drop some heat! 🔥",time:"2:30 PM"},{id:2,userId:"3",username:"Judge_Dave",message:"Let's see what you got",time:"2:31 PM"},{id:3,userId:"2",username:"LyricQueen",message:"GGs in advance 😤",time:"2:32 PM"}]),[x,N]=M.useState(""),[R,A]=M.useState(!1),[w,_]=M.useState(!0),[E,D]=M.useState(!0),[j,b]=M.useState(!1),C=M.useRef(null),y=h.filter(W=>W.role==="artist"&&W.isReady).length>=2&&h.filter(W=>W.role==="judge").length>=2;M.useEffect(()=>{var W;(W=C.current)==null||W.scrollIntoView({behavior:"smooth"})},[p]);const S=()=>{navigator.clipboard.writeText(t),A(!0),setTimeout(()=>A(!1),2e3)},I=W=>{if(W.preventDefault(),!x.trim())return;const z={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:(r==null?void 0:r.username)||"You",message:x,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};g([...p,z]),N("")},T=W=>{const z={id:Date.now(),userId:(n==null?void 0:n.uid)||"me",username:(r==null?void 0:r.username)||"You",message:"",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isGif:!0,gifUrl:W};g([...p,z]),N("")},P=()=>{y&&(b(!0),setTimeout(()=>{e(`/arena/${t}`)},1500))},k=W=>{switch(W){case"artist":return d.jsx(ir,{size:14});case"judge":return d.jsx(ra,{size:14});default:return d.jsx(sr,{size:14})}},Ue=h.filter(W=>W.isReady).length,xt=h.filter(W=>W.role==="artist").length,V=h.filter(W=>W.role==="judge").length;return d.jsx("div",{className:"waiting-room",children:d.jsxs("div",{className:"waiting-container",children:[d.jsxs("header",{className:"waiting-header",children:[d.jsxs("div",{className:"room-code-display",children:[d.jsx("span",{className:"room-label",children:"Room Code"}),d.jsxs("div",{className:"room-code-row",children:[d.jsx("span",{className:"room-code",children:t}),d.jsx("button",{className:"copy-btn",onClick:S,children:R?d.jsx(Bd,{size:18}):d.jsx(ck,{size:18})})]})]}),d.jsxs("div",{className:"waiting-status",children:[d.jsxs("div",{className:"status-item",children:[d.jsxs("span",{className:"status-value",children:[xt,"/2"]}),d.jsx("span",{className:"status-label",children:"Artists"})]}),d.jsxs("div",{className:"status-item",children:[d.jsxs("span",{className:"status-value",children:[V,"/2"]}),d.jsx("span",{className:"status-label",children:"Judges"})]}),d.jsxs("div",{className:"status-item",children:[d.jsx("span",{className:"status-value",children:Ue}),d.jsx("span",{className:"status-label",children:"Ready"})]})]})]}),d.jsxs("div",{className:"waiting-content",children:[d.jsxs("section",{className:"video-section",children:[d.jsx("h2",{className:"section-title",children:"Waiting for Players"}),d.jsx("div",{className:"video-grid",children:[...Array(4)].map((W,z)=>{const $=h[z];return d.jsx("div",{className:`video-box ${$?"has-participant":"empty"}`,children:$?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"video-placeholder",children:d.jsx("div",{className:"avatar-placeholder",children:$.name.charAt(0)})}),d.jsxs("div",{className:"video-overlay",children:[d.jsxs("div",{className:"participant-info",children:[d.jsxs("span",{className:`role-badge-small badge-${$.role}`,children:[k($.role),$.role]}),d.jsx("span",{className:"participant-name",children:$.name})]}),d.jsxs("div",{className:"media-indicators",children:[!$.hasAudio&&d.jsx(vh,{size:14}),!$.hasVideo&&d.jsx(yh,{size:14})]})]}),$.isReady&&d.jsx("div",{className:"ready-indicator",children:"Ready"})]}):d.jsxs("div",{className:"empty-slot",children:[d.jsx(sr,{size:32}),d.jsx("span",{children:"Waiting..."})]})},z)})}),d.jsxs("div",{className:"media-controls",children:[d.jsx("button",{className:`control-btn ${E?"active":"off"}`,onClick:()=>D(!E),children:E?d.jsx(ir,{size:20}):d.jsx(vh,{size:20})}),d.jsx("button",{className:`control-btn ${w?"active":"off"}`,onClick:()=>_(!w),children:w?d.jsx(n0,{size:20}):d.jsx(yh,{size:20})}),d.jsx("button",{className:"control-btn leave",onClick:()=>e("/lobby"),children:d.jsx(_o,{size:20})})]})]}),d.jsxs("aside",{className:"chat-section",children:[d.jsx("div",{className:"chat-header",children:d.jsx("h3",{children:"Waiting Room Chat"})}),d.jsxs("div",{className:"chat-messages",children:[p.map(W=>d.jsxs("div",{className:`chat-message ${W.userId===(n==null?void 0:n.uid)?"own":""} ${W.isGif?"gif-message":""}`,children:[d.jsxs("div",{className:"message-header",children:[d.jsx("span",{className:"message-username",children:W.username}),d.jsx("span",{className:"message-time",children:W.time})]}),W.isGif?d.jsx("img",{src:W.gifUrl,alt:"GIF",className:"message-gif"}):d.jsx("p",{className:"message-content",children:W.message})]},W.id)),d.jsx("div",{ref:C})]}),d.jsxs("form",{className:"chat-input-form",onSubmit:I,children:[d.jsx("button",{type:"button",className:"gif-toggle",onClick:u,children:"GIF"}),d.jsx("input",{type:"text",className:"input chat-input",placeholder:"Say something...",value:x,onChange:W=>N(W.target.value)}),d.jsx("button",{type:"submit",className:"send-btn",disabled:!x.trim(),children:d.jsx(Vd,{size:18})})]}),a&&d.jsx(Df,{onSelect:T,onClose:u})]})]}),s&&d.jsxs("div",{className:"start-section",children:[d.jsx("button",{className:"btn btn-primary btn-lg start-btn",onClick:P,disabled:!y||j,children:j?"Starting...":"Start Battle"}),!y&&d.jsx("p",{className:"start-hint",children:"Need 2 artists and 2 judges ready to start"})]})]})})}function Zr({children:t}){const{isAuthenticated:e,isLoading:n}=gr(),[r,i]=M.useState(!1);return M.useEffect(()=>{const s=setTimeout(()=>i(!0),100);return()=>clearTimeout(s)},[]),n||!r?d.jsx("div",{className:"loading-screen",children:d.jsxs("div",{className:"loading-content",children:[d.jsx("div",{className:"loading-logo",children:"Dreamledge"}),d.jsx("div",{className:"loading-spinner"})]})}):e?t:d.jsx(W_,{to:"/",replace:!0})}function XA(){return d.jsx(vI,{children:d.jsxs("div",{className:"app",children:[d.jsx(kk,{}),d.jsx("main",{className:"main-content",children:d.jsxs(uI,{children:[d.jsx(ln,{path:"/",element:d.jsx(BA,{})}),d.jsx(ln,{path:"/lobby",element:d.jsx(Zr,{children:d.jsx(VA,{})})}),d.jsx(ln,{path:"/waiting/:roomId",element:d.jsx(Zr,{children:d.jsx(QA,{})})}),d.jsx(ln,{path:"/arena/:battleId",element:d.jsx(Zr,{children:d.jsx(WA,{})})}),d.jsx(ln,{path:"/profile",element:d.jsx(Zr,{children:d.jsx(GA,{})})}),d.jsx(ln,{path:"/messages",element:d.jsx(Zr,{children:d.jsx(Sv,{})})}),d.jsx(ln,{path:"/messages/:conversationId",element:d.jsx(Zr,{children:d.jsx(Sv,{})})}),d.jsx(ln,{path:"*",element:d.jsx(W_,{to:"/",replace:!0})})]})})]})})}wc.createRoot(document.getElementById("root")).render(d.jsx($h.StrictMode,{children:d.jsx(XA,{})}));
