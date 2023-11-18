import{F as y,r as O,h as P,v as S,K as T,a7 as C,i as v,C as x,u as R}from"./setup-cda53db1.js";const l=typeof window<"u",L=l&&"IntersectionObserver"in window,X=l&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),Y=l&&"EyeDropper"in window;function m(e,n,t){F(e,n),n.set(e,t)}function F(e,n){if(n.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function b(e,n,t){var r=w(e,n,"set");return D(e,r,t),t}function D(e,n,t){if(n.set)n.set.call(e,t);else{if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=t}}function u(e,n){var t=w(e,n,"get");return $(e,t)}function w(e,n,t){if(!n.has(e))throw new TypeError("attempted to "+t+" private field on non-instance");return n.get(e)}function $(e,n){return n.get?n.get.call(e):n.value}function A(e,n,t){const r=n.length-1;if(r<0)return e===void 0?t:e;for(let s=0;s<r;s++){if(e==null)return t;e=e[n[s]]}return e==null||e[n[r]]===void 0?t:e[n[r]]}function I(e,n){if(e===n)return!0;if(e instanceof Date&&n instanceof Date&&e.getTime()!==n.getTime()||e!==Object(e)||n!==Object(n))return!1;const t=Object.keys(e);return t.length!==Object.keys(n).length?!1:t.every(r=>I(e[r],n[r]))}function M(e,n,t){return e==null||!n||typeof n!="string"?t:e[n]!==void 0?e[n]:(n=n.replace(/\[(\w+)\]/g,".$1"),n=n.replace(/^\./,""),A(e,n.split("."),t))}function q(e,n,t){if(n===!0)return e===void 0?t:e;if(n==null||typeof n=="boolean")return t;if(e!==Object(e)){if(typeof n!="function")return t;const s=n(e,t);return typeof s>"u"?t:s}if(typeof n=="string")return M(e,n,t);if(Array.isArray(n))return A(e,n,t);if(typeof n!="function")return t;const r=n(e,t);return typeof r>"u"?t:r}function H(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(t,r)=>n+r)}function j(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${n}`:void 0}function h(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function J(e){if(e&&"$el"in e){const n=e.$el;return(n==null?void 0:n.nodeType)===Node.TEXT_NODE?n.nextElementSibling:n}return e}const Q=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),Z=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function ee(e){return Object.keys(e)}function ne(e,n){return n.every(t=>e.hasOwnProperty(t))}function te(e,n){const t={},r=new Set(Object.keys(e));for(const s of n)r.has(s)&&(t[s]=e[s]);return t}function p(e,n,t){const r=Object.create(null),s=Object.create(null);for(const o in e)n.some(i=>i instanceof RegExp?i.test(o):i===o)&&!(t!=null&&t.some(i=>i===o))?r[o]=e[o]:s[o]=e[o];return[r,s]}function N(e,n){const t={...e};return n.forEach(r=>delete t[r]),t}function re(e,n){const t={};return n.forEach(r=>t[r]=e[r]),t}const E=/^on[^a-z]/,se=e=>E.test(e),z=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"],B=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Escape","Tab"," "];function oe(e){return e.isComposing&&B.includes(e.key)}function ie(e){const[n,t]=p(e,[E]),r=N(n,z),[s,o]=p(t,["class","style","id",/^data-/]);return Object.assign(s,n),Object.assign(o,r),[s,o]}function ue(e){return e==null?[]:Array.isArray(e)?e:[e]}function ae(e,n){let t=0;const r=function(){for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];clearTimeout(t),t=setTimeout(()=>e(...o),R(n))};return r.clear=()=>{clearTimeout(t)},r.immediate=e,r}function ce(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(n,Math.min(t,e))}function fe(e){const n=e.toString().trim();return n.includes(".")?n.length-n.indexOf(".")-1:0}function le(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+t.repeat(Math.max(0,n-e.length))}function ge(e,n){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,n-e.length))+e}function de(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const t=[];let r=0;for(;r<e.length;)t.push(e.substr(r,n)),r+=n;return t}function me(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(e<n)return`${e} B`;const t=n===1024?["Ki","Mi","Gi"]:["k","M","G"];let r=-1;for(;Math.abs(e)>=n&&r<t.length-1;)e/=n,++r;return`${e.toFixed(1)} ${t[r]}B`}function G(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const r={};for(const s in e)r[s]=e[s];for(const s in n){const o=e[s],i=n[s];if(h(o)&&h(i)){r[s]=G(o,i,t);continue}if(Array.isArray(o)&&Array.isArray(i)&&t){r[s]=t(o,i);continue}r[s]=i}return r}function K(e){return e.map(n=>n.type===y?K(n.children):n).flat()}function f(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(f.cache.has(e))return f.cache.get(e);const n=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return f.cache.set(e,n),n}f.cache=new Map;function g(e,n){if(!n||typeof n!="object")return[];if(Array.isArray(n))return n.map(t=>g(e,t)).flat(1);if(Array.isArray(n.children))return n.children.map(t=>g(e,t)).flat(1);if(n.component){if(Object.getOwnPropertySymbols(n.component.provides).includes(e))return[n.component];if(n.component.subTree)return g(e,n.component.subTree).flat(1)}return[]}var c=new WeakMap,a=new WeakMap;class he{constructor(n){m(this,c,{writable:!0,value:[]}),m(this,a,{writable:!0,value:0}),this.size=n}push(n){u(this,c)[u(this,a)]=n,b(this,a,(u(this,a)+1)%this.size)}values(){return u(this,c).slice(u(this,a)).concat(u(this,c).slice(0,u(this,a)))}}function pe(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function ye(e){const n=O({}),t=P(e);return S(()=>{for(const r in t.value)n[r]=t.value[r]},{flush:"sync"}),T(n)}function we(e,n){return e.includes(n)}function Ae(e){return e[2].toLowerCase()+e.slice(3)}const Ee=()=>[Function,Array];function Oe(e,n){return n="on"+C(n),!!(e[n]||e[`${n}Once`]||e[`${n}Capture`]||e[`${n}OnceCapture`]||e[`${n}CaptureOnce`])}function Pe(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];if(Array.isArray(e))for(const s of e)s(...t);else typeof e=="function"&&e(...t)}function U(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const t=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(r=>`${r}${n?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...e.querySelectorAll(t)]}function _(e,n,t){let r,s=e.indexOf(document.activeElement);const o=n==="next"?1:-1;do s+=o,r=e[s];while((!r||r.offsetParent==null||!((t==null?void 0:t(r))??!0))&&s<e.length&&s>=0);return r}function k(e,n){var r,s,o,i;const t=U(e);if(!n)(e===document.activeElement||!e.contains(document.activeElement))&&((r=t[0])==null||r.focus());else if(n==="first")(s=t[0])==null||s.focus();else if(n==="last")(o=t.at(-1))==null||o.focus();else if(typeof n=="number")(i=t[n])==null||i.focus();else{const d=_(t,n);d?d.focus():k(e,n==="next"?"first":"last")}}function Se(e){return e==null||typeof e=="string"&&e.trim()===""}function Te(){}function Ce(e,n){if(!(l&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${n})`)))return null;try{return!!e&&e.matches(n)}catch{return null}}function V(e){return e.some(n=>v(n)?n.type===x?!1:n.type!==y||V(n.children):!0)?e:null}export{p as A,pe as B,ne as C,fe as D,Ee as E,Z as F,Y as G,oe as H,l as I,M as J,Se as K,me as L,he as M,re as N,h as O,de as P,le as Q,f as R,L as S,ge as T,X as U,Q as V,ee as W,se as a,ce as b,j as c,ye as d,Ae as e,I as f,g,K as h,we as i,Oe as j,ie as k,Ce as l,G as m,q as n,N as o,k as p,U as q,J as r,_ as s,te as t,Pe as u,H as v,ue as w,ae as x,V as y,Te as z};