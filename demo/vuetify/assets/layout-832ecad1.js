import{f as ct,B as le,K as ft,L as we,r as dt,M as de,m as O,I as P,N as mt,O as xe,c as vt,t as Ce,h as gt,b as K}from"./helpers-fb896a1f.js";import{L as ht,M as pt,f as F,z as S,e as v,y as N,s as D,u as me,x as G,r as B,t as yt,h as bt,b as I,m as wt,w as H,C as xt,E as Ct,D as St,p as ze,q as $t,N as Ft,O as kt,l as It}from"./index-959551f4.js";const j=2.4,Se=.2126729,$e=.7151522,Fe=.072175,Ot=.55,Pt=.58,At=.57,Lt=.62,X=.03,ke=1.45,Rt=5e-4,Dt=1.25,Mt=1.25,Ie=.078,Oe=12.82051282051282,Y=.06,Pe=.001;function Ae(e,t){const n=(e.r/255)**j,a=(e.g/255)**j,s=(e.b/255)**j,o=(t.r/255)**j,r=(t.g/255)**j,l=(t.b/255)**j;let u=n*Se+a*$e+s*Fe,c=o*Se+r*$e+l*Fe;if(u<=X&&(u+=(X-u)**ke),c<=X&&(c+=(X-c)**ke),Math.abs(c-u)<Rt)return 0;let f;if(c>u){const i=(c**Ot-u**Pt)*Dt;f=i<Pe?0:i<Ie?i-i*Oe*Y:i-Y}else{const i=(c**Lt-u**At)*Mt;f=i>-Pe?0:i>-Ie?i-i*Oe*Y:i+Y}return f*100}function wn(e,t){t=Array.isArray(t)?t.slice(0,-1).map(n=>`'${n}'`).join(", ")+` or '${t.at(-1)}'`:`'${t}'`}const Q=.20689655172413793,Tt=e=>e>Q**3?Math.cbrt(e):e/(3*Q**2)+4/29,Et=e=>e>Q?e**3:3*Q**2*(e-4/29);function We(e){const t=Tt,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function _e(e){const t=Et,n=(e[0]+16)/116;return[t(n+e[1]/500)*.95047,t(n),t(n-e[2]/200)*1.08883]}const Vt=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],jt=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,Bt=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],Ht=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function Ue(e){const t=Array(3),n=jt,a=Vt;for(let s=0;s<3;++s)t[s]=Math.round(ct(n(a[s][0]*e[0]+a[s][1]*e[1]+a[s][2]*e[2]))*255);return{r:t[0],g:t[1],b:t[2]}}function ve(e){let{r:t,g:n,b:a}=e;const s=[0,0,0],o=Ht,r=Bt;t=o(t/255),n=o(n/255),a=o(a/255);for(let l=0;l<3;++l)s[l]=r[l][0]*t+r[l][1]*n+r[l][2]*a;return s}function Nt(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function xn(e){return Nt(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const Le=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,zt={rgb:(e,t,n,a)=>({r:e,g:t,b:n,a}),rgba:(e,t,n,a)=>({r:e,g:t,b:n,a}),hsl:(e,t,n,a)=>Re({h:e,s:t,l:n,a}),hsla:(e,t,n,a)=>Re({h:e,s:t,l:n,a}),hsv:(e,t,n,a)=>E({h:e,s:t,v:n,a}),hsva:(e,t,n,a)=>E({h:e,s:t,v:n,a})};function A(e){if(typeof e=="number")return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"&&Le.test(e)){const{groups:t}=e.match(Le),{fn:n,values:a}=t,s=a.split(/,\s*/).map(o=>o.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(o)/100:parseFloat(o));return zt[n](...s)}else if(typeof e=="string"){let t=e.startsWith("#")?e.slice(1):e;return[3,4].includes(t.length)?t=t.split("").map(n=>n+n).join(""):[6,8].includes(t.length),Ke(t)}else if(typeof e=="object"){if(le(e,["r","g","b"]))return e;if(le(e,["h","s","l"]))return E(Ge(e));if(le(e,["h","s","v"]))return E(e)}throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function E(e){const{h:t,s:n,v:a,a:s}=e,o=l=>{const u=(l+t/60)%6;return a-a*n*Math.max(Math.min(u,4-u,1),0)},r=[o(5),o(3),o(1)].map(l=>Math.round(l*255));return{r:r[0],g:r[1],b:r[2],a:s}}function Re(e){return E(Ge(e))}function Wt(e){if(!e)return{h:0,s:1,v:1,a:1};const t=e.r/255,n=e.g/255,a=e.b/255,s=Math.max(t,n,a),o=Math.min(t,n,a);let r=0;s!==o&&(s===t?r=60*(0+(n-a)/(s-o)):s===n?r=60*(2+(a-t)/(s-o)):s===a&&(r=60*(4+(t-n)/(s-o)))),r<0&&(r=r+360);const l=s===0?0:(s-o)/s,u=[r,l,s];return{h:u[0],s:u[1],v:u[2],a:e.a}}function Cn(e){const{h:t,s:n,v:a,a:s}=e,o=a-a*n/2,r=o===1||o===0?0:(a-o)/Math.min(o,1-o);return{h:t,s:r,l:o,a:s}}function Ge(e){const{h:t,s:n,l:a,a:s}=e,o=a+n*Math.min(a,1-a),r=o===0?0:2-2*a/o;return{h:t,s:r,v:o,a:s}}function _t(e){let{r:t,g:n,b:a,a:s}=e;return s===void 0?`rgb(${t}, ${n}, ${a})`:`rgba(${t}, ${n}, ${a}, ${s})`}function Sn(e){return _t(E(e))}function q(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function Ze(e){let{r:t,g:n,b:a,a:s}=e;return`#${[q(t),q(n),q(a),s!==void 0?q(Math.round(s*255)):""].join("")}`}function Ke(e){e=Ut(e);let[t,n,a,s]=ft(e,2).map(o=>parseInt(o,16));return s=s===void 0?s:s/255,{r:t,g:n,b:a,a:s}}function $n(e){const t=Ke(e);return Wt(t)}function Fn(e){return Ze(E(e))}function Ut(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(t=>t+t).join("")),e.length!==6&&(e=we(we(e,6),8,"F")),e}function Gt(e,t){const n=We(ve(e));return n[0]=n[0]+t*10,Ue(_e(n))}function Zt(e,t){const n=We(ve(e));return n[0]=n[0]-t*10,Ue(_e(n))}function ce(e){const t=A(e);return ve(t)[1]}function kn(e,t){const n=ce(e),a=ce(t),s=Math.max(n,a),o=Math.min(n,a);return(s+.05)/(o+.05)}function Kt(e){const t=Math.abs(Ae(A(0),A(e)));return Math.abs(Ae(A(16777215),A(e)))>Math.min(t,50)?"#fff":"#000"}function Z(e,t){return n=>Object.keys(e).reduce((a,s)=>{const r=typeof e[s]=="object"&&e[s]!=null&&!Array.isArray(e[s])?e[s]:{type:e[s]};return n&&s in n?a[s]={...r,default:n[s]}:a[s]=r,t&&!a[s].source&&(a[s].source=t),a},{})}function ae(e){if(e._setup=e._setup??e.setup,!e.name)return e;if(e._setup){e.props=Z(e.props??{},e.name)();const t=Object.keys(e.props);e.filterProps=function(a){return dt(a,t,["class","style"])},e.props._as=String,e.setup=function(a,s){const o=ge();if(!o.value)return e._setup(a,s);const{props:r,provideSubDefaults:l}=qe(a,a._as??e.name,o),u=e._setup(r,s);return l(),u}}return e}function Xt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t=>(e?ae:ht)(t)}function L(e,t){const n=pt();if(!n)throw new Error(`[Vuetify] ${e} ${t||"must be called from inside a setup function"}`);return n}function In(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const t=L(e).type;return de((t==null?void 0:t.aliasName)||(t==null?void 0:t.name))}let Xe=0,J=new WeakMap;function Ye(){const e=L("getUid");if(J.has(e))return J.get(e);{const t=Xe++;return J.set(e,t),t}}Ye.reset=()=>{Xe=0,J=new WeakMap};function Yt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L("injectSelf");const{provides:n}=t;if(n&&e in n)return n[e]}const ee=Symbol.for("vuetify:defaults");function On(e){return F(e)}function ge(){const e=S(ee);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function Pn(e,t){const n=ge(),a=F(e),s=v(()=>{if(G(t==null?void 0:t.disabled))return n.value;const r=G(t==null?void 0:t.scoped),l=G(t==null?void 0:t.reset),u=G(t==null?void 0:t.root);if(a.value==null&&!(r||l||u))return n.value;let c=O(a.value,{prev:n.value});if(r)return c;if(l||u){const f=Number(l||1/0);for(let i=0;i<=f&&!(!c||!("prev"in c));i++)c=c.prev;return c&&typeof u=="string"&&u in c&&(c=O(O(c,{prev:c}),c[u])),c}return c.prev?O(c.prev,c):c});return N(ee,s),s}function qt(e,t){var n,a;return typeof((n=e.props)==null?void 0:n[t])<"u"||typeof((a=e.props)==null?void 0:a[de(t)])<"u"}function qe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ge();const a=L("useDefaults");if(t=t??a.type.name??a.type.__name,!t)throw new Error("[Vuetify] Could not determine component name");const s=v(()=>{var u;return(u=n.value)==null?void 0:u[e._as??t]}),o=new Proxy(e,{get(u,c){var i,m,g,d;const f=Reflect.get(u,c);return c==="class"||c==="style"?[(i=s.value)==null?void 0:i[c],f].filter(y=>y!=null):typeof c=="string"&&!qt(a.vnode,c)?((m=s.value)==null?void 0:m[c])??((d=(g=n.value)==null?void 0:g.global)==null?void 0:d[c])??f:f}}),r=D();me(()=>{if(s.value){const u=Object.entries(s.value).filter(c=>{let[f]=c;return f.startsWith(f[0].toUpperCase())});r.value=u.length?Object.fromEntries(u):void 0}else r.value=void 0});function l(){const u=Yt(ee,a);N(ee,v(()=>r.value?O((u==null?void 0:u.value)??{},r.value):u==null?void 0:u.value))}return{props:o,provideSubDefaults:l}}function An(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;const{props:n,provideSubDefaults:a}=qe(e,t);return a(),n}const Ln=["sm","md","lg","xl","xxl"],Jt=Symbol.for("vuetify:display"),De={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},Qt=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:De;return O(De,e)};function Me(e){return P&&!e?window.innerWidth:typeof e=="object"&&e.clientWidth||0}function Te(e){return P&&!e?window.innerHeight:typeof e=="object"&&e.clientHeight||0}function Ee(e){const t=P&&!e?window.navigator.userAgent:"ssr";function n(d){return!!t.match(d)}const a=n(/android/i),s=n(/iphone|ipad|ipod/i),o=n(/cordova/i),r=n(/electron/i),l=n(/chrome/i),u=n(/edge/i),c=n(/firefox/i),f=n(/opera/i),i=n(/win/i),m=n(/mac/i),g=n(/linux/i);return{android:a,ios:s,cordova:o,electron:r,chrome:l,edge:u,firefox:c,opera:f,win:i,mac:m,linux:g,touch:mt,ssr:t==="ssr"}}function Rn(e,t){const{thresholds:n,mobileBreakpoint:a}=Qt(e),s=D(Te(t)),o=D(Ee(t)),r=B({}),l=D(Me(t));function u(){s.value=Te(),l.value=Me()}function c(){u(),o.value=Ee()}return me(()=>{const f=l.value<n.sm,i=l.value<n.md&&!f,m=l.value<n.lg&&!(i||f),g=l.value<n.xl&&!(m||i||f),d=l.value<n.xxl&&!(g||m||i||f),y=l.value>=n.xxl,x=f?"xs":i?"sm":m?"md":g?"lg":d?"xl":"xxl",V=typeof a=="number"?a:n[a],R=l.value<V;r.xs=f,r.sm=i,r.md=m,r.lg=g,r.xl=d,r.xxl=y,r.smAndUp=!f,r.mdAndUp=!(f||i),r.lgAndUp=!(f||i||m),r.xlAndUp=!(f||i||m||g),r.smAndDown=!(m||g||d||y),r.mdAndDown=!(g||d||y),r.lgAndDown=!(d||y),r.xlAndDown=!y,r.name=x,r.height=s.value,r.width=l.value,r.mobile=R,r.mobileBreakpoint=a,r.platform=o.value,r.thresholds=n}),P&&window.addEventListener("resize",u,{passive:!0}),{...yt(r),update:c,ssr:!!t}}function Dn(){const e=S(Jt);if(!e)throw new Error("Could not find Vuetify display injection");return e}const en={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar"},tn={component:e=>bt(Qe,{...e,class:"mdi"})},nn=[String,Function,Object,Array],an=Symbol.for("vuetify:icons"),se=Z({icon:{type:nn},tag:{type:String,required:!0}},"icon"),Ve=Xt()({name:"VComponentIcon",props:se(),setup(e,t){let{slots:n}=t;return()=>{const a=e.icon;return I(e.tag,null,{default:()=>{var s;return[e.icon?I(a,null,null):(s=n.default)==null?void 0:s.call(n)]}})}}}),Je=ae({name:"VSvgIcon",inheritAttrs:!1,props:se(),setup(e,t){let{attrs:n}=t;return()=>I(e.tag,wt(n,{style:null}),{default:()=>[I("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(a=>Array.isArray(a)?I("path",{d:a[0],"fill-opacity":a[1]},null):I("path",{d:a},null)):I("path",{d:e.icon},null)])]})}}),Mn=ae({name:"VLigatureIcon",props:se(),setup(e){return()=>I(e.tag,null,{default:()=>[e.icon]})}}),Qe=ae({name:"VClassIcon",props:se(),setup(e){return()=>I(e.tag,{class:e.icon},null)}}),sn={svg:{component:Je},class:{component:Qe}};function Tn(e){return O({defaultSet:"mdi",sets:{...sn,mdi:tn},aliases:{...en,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"}},e)}const En=e=>{const t=S(an);if(!t)throw new Error("Missing Vuetify Icons provide!");return{iconData:v(()=>{var u;const a=G(e);if(!a)return{component:Ve};let s=a;if(typeof s=="string"&&(s=s.trim(),s.startsWith("$")&&(s=(u=t.aliases)==null?void 0:u[s.slice(1)])),!s)throw new Error(`Could not find aliased icon "${a}"`);if(Array.isArray(s))return{component:Je,icon:s};if(typeof s!="string")return{component:Ve,icon:s};const o=Object.keys(t.sets).find(c=>typeof s=="string"&&s.startsWith(`${c}:`)),r=o?s.slice(o.length+1):s;return{component:t.sets[o??t.defaultSet].component,icon:r}})}},rn={badge:"Badge",open:"Open",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{ok:"OK",cancel:"Cancel",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},on={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1};function ln(e,t){let n;function a(){n=Ct(),n.run(()=>t.length?t(()=>{n==null||n.stop(),a()}):t())}H(e,s=>{s&&!n?a():s||(n==null||n.stop(),n=void 0)},{immediate:!0}),xt(()=>{n==null||n.stop()})}function un(e,t,n){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:i=>i,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:i=>i;const o=L("useProxiedModel"),r=F(e[t]!==void 0?e[t]:n),l=de(t),c=l!==t?v(()=>{var i,m,g,d;return e[t],!!(((i=o.vnode.props)!=null&&i.hasOwnProperty(t)||(m=o.vnode.props)!=null&&m.hasOwnProperty(l))&&((g=o.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${t}`)||(d=o.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${l}`)))}):v(()=>{var i,m;return e[t],!!((i=o.vnode.props)!=null&&i.hasOwnProperty(t)&&((m=o.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${t}`)))});ln(()=>!c.value,()=>{H(()=>e[t],i=>{r.value=i})});const f=v({get(){const i=e[t];return a(c.value?i:r.value)},set(i){const m=s(i),g=St(c.value?e[t]:r.value);g===m||a(g)===i||(r.value=m,o==null||o.emit(`update:${t}`,m))}});return Object.defineProperty(f,"externalValue",{get:()=>c.value?e[t]:r.value}),f}const je="$vuetify.",Be=(e,t)=>e.replace(/\{(\d+)\}/g,(n,a)=>String(t[+a])),et=(e,t,n)=>function(a){for(var s=arguments.length,o=new Array(s>1?s-1:0),r=1;r<s;r++)o[r-1]=arguments[r];if(!a.startsWith(je))return Be(a,o);const l=a.replace(je,""),u=e.value&&n.value[e.value],c=t.value&&n.value[t.value];let f=xe(u,l,null);return f||(`${a}${e.value}`,f=xe(c,l,null)),f||(f=a),typeof f!="string"&&(f=a),Be(f,o)};function tt(e,t){return(n,a)=>new Intl.NumberFormat([e.value,t.value],a).format(n)}function ue(e,t,n){const a=un(e,t,e[t]??n.value);return a.value=e[t]??n.value,H(n,s=>{e[t]==null&&(a.value=n.value)}),a}function nt(e){return t=>{const n=ue(t,"locale",e.current),a=ue(t,"fallback",e.fallback),s=ue(t,"messages",e.messages);return{name:"vuetify",current:n,fallback:a,messages:s,t:et(n,a,s),n:tt(n,a),provide:nt({current:n,fallback:a,messages:s})}}}function cn(e){const t=D((e==null?void 0:e.locale)??"en"),n=D((e==null?void 0:e.fallback)??"en"),a=F({en:rn,...e==null?void 0:e.messages});return{name:"vuetify",current:t,fallback:n,messages:a,t:et(t,n,a),n:tt(t,n),provide:nt({current:t,fallback:n,messages:a})}}const te=Symbol.for("vuetify:locale");function fn(e){return e.name!=null}function Vn(e){const t=e!=null&&e.adapter&&fn(e==null?void 0:e.adapter)?e==null?void 0:e.adapter:cn(e),n=dn(t,e);return{...t,...n}}function jn(){const e=S(te);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}function Bn(e){const t=S(te);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");const n=t.provide(e),a=mn(n,t.rtl,e),s={...n,...a};return N(te,s),s}function dn(e,t){const n=F((t==null?void 0:t.rtl)??on),a=v(()=>n.value[e.current.value]??!1);return{isRtl:a,rtl:n,rtlClasses:v(()=>`v-locale--is-${a.value?"rtl":"ltr"}`)}}function mn(e,t,n){const a=v(()=>n.rtl??t.value[e.current.value]??!1);return{isRtl:a,rtl:t,rtlClasses:v(()=>`v-locale--is-${a.value?"rtl":"ltr"}`)}}function Hn(){const e=S(te);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}const fe=Symbol.for("vuetify:theme"),Nn=Z({theme:String},"theme"),U={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function vn(){var n,a;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:U;if(!e)return{...U,isDisabled:!0};const t={};for(const[s,o]of Object.entries(e.themes??{})){const r=o.dark||s==="dark"?(n=U.themes)==null?void 0:n.dark:(a=U.themes)==null?void 0:a.light;t[s]=O(r,o)}return O(U,{...e,themes:t})}function zn(e){const t=vn(e),n=F(t.defaultTheme),a=F(t.themes),s=v(()=>{const f={};for(const[i,m]of Object.entries(a.value)){const g=f[i]={...m,colors:{...m.colors}};if(t.variations)for(const d of t.variations.colors){const y=g.colors[d];if(y)for(const x of["lighten","darken"]){const V=x==="lighten"?Gt:Zt;for(const R of vt(t.variations[x],1))g.colors[`${d}-${x}-${R}`]=Ze(V(A(y),R))}}for(const d of Object.keys(g.colors)){if(/^on-[a-z]/.test(d)||g.colors[`on-${d}`])continue;const y=`on-${d}`,x=A(g.colors[d]);g.colors[y]=Kt(x)}}return f}),o=v(()=>s.value[n.value]),r=v(()=>{const f=[];o.value.dark&&T(f,":root",["color-scheme: dark"]),T(f,":root",He(o.value));for(const[d,y]of Object.entries(s.value))T(f,`.v-theme--${d}`,[`color-scheme: ${y.dark?"dark":"normal"}`,...He(y)]);const i=[],m=[],g=new Set(Object.values(s.value).flatMap(d=>Object.keys(d.colors)));for(const d of g)/^on-[a-z]/.test(d)?T(m,`.${d}`,[`color: rgb(var(--v-theme-${d})) !important`]):(T(i,`.bg-${d}`,[`--v-theme-overlay-multiplier: var(--v-theme-${d}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${d})) !important`,`color: rgb(var(--v-theme-on-${d})) !important`]),T(m,`.text-${d}`,[`color: rgb(var(--v-theme-${d})) !important`]),T(m,`.border-${d}`,[`--v-border-color: var(--v-theme-${d})`]));return f.push(...i,...m),f.map((d,y)=>y===0?d:`    ${d}`).join("")});function l(){return{style:[{children:r.value,id:"vuetify-theme-stylesheet",nonce:t.cspNonce||!1}]}}function u(f){if(t.isDisabled)return;const i=f._context.provides.usehead;if(i)if(i.push){const m=i.push(l);P&&H(r,()=>{m.patch(l)})}else P?(i.addHeadObjs(v(l)),me(()=>i.updateDOM())):i.addHeadObjs(l());else{let g=function(){if(typeof document<"u"&&!m){const d=document.createElement("style");d.type="text/css",d.id="vuetify-theme-stylesheet",t.cspNonce&&d.setAttribute("nonce",t.cspNonce),m=d,document.head.appendChild(m)}m&&(m.innerHTML=r.value)},m=P?document.getElementById("vuetify-theme-stylesheet"):null;P?H(r,g,{immediate:!0}):g()}}const c=v(()=>t.isDisabled?void 0:`v-theme--${n.value}`);return{install:u,isDisabled:t.isDisabled,name:n,themes:a,current:o,computedThemes:s,themeClasses:c,styles:r,global:{name:n,current:o}}}function Wn(e){L("provideTheme");const t=S(fe,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=v(()=>e.theme??t.name.value),a=v(()=>t.themes.value[n.value]),s=v(()=>t.isDisabled?void 0:`v-theme--${n.value}`),o={...t,name:n,current:a,themeClasses:s};return N(fe,o),o}function _n(){L("useTheme");const e=S(fe,null);if(!e)throw new Error("Could not find Vuetify theme injection");return e}function T(e,t,n){e.push(`${t} {
`,...n.map(a=>`  ${a};
`),`}
`)}function He(e){const t=e.dark?2:1,n=e.dark?1:2,a=[];for(const[s,o]of Object.entries(e.colors)){const r=A(o);a.push(`--v-theme-${s}: ${r.r},${r.g},${r.b}`),s.startsWith("on-")||a.push(`--v-theme-${s}-overlay-multiplier: ${ce(o)>.18?t:n}`)}for(const[s,o]of Object.entries(e.variables)){const r=typeof o=="string"&&o.startsWith("#")?A(o):void 0,l=r?`${r.r}, ${r.g}, ${r.b}`:void 0;a.push(`--v-${s}: ${l??o}`)}return a}function gn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=F(),a=F();if(P){const s=new ResizeObserver(o=>{e==null||e(o,s),o.length&&(t==="content"?a.value=o[0].contentRect:a.value=o[0].target.getBoundingClientRect())});ze(()=>{s.disconnect()}),H(n,(o,r)=>{r&&(s.unobserve(Ce(r)),a.value=void 0),o&&s.observe(Ce(o))},{flush:"post"})}return{resizeRef:n,contentRect:$t(a)}}const ne=Symbol.for("vuetify:layout"),at=Symbol.for("vuetify:layout-item"),Ne=1e3,Un=Z({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Gn=Z({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Zn(){const e=S(ne);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Kn(e){const t=S(ne);if(!t)throw new Error("[Vuetify] Could not find injected layout");const n=e.id??`layout-item-${Ye()}`,a=L("useLayoutItem");N(at,{id:n});const s=D(!1);Ft(()=>s.value=!0),kt(()=>s.value=!1);const{layoutItemStyles:o,layoutItemScrimStyles:r}=t.register(a,{...e,active:v(()=>s.value?!1:e.active.value),id:n});return ze(()=>t.unregister(n)),{layoutItemStyles:o,layoutRect:t.layoutRect,layoutItemScrimStyles:r}}const hn=(e,t,n,a)=>{let s={top:0,left:0,right:0,bottom:0};const o=[{id:"",layer:{...s}}];for(const r of e){const l=t.get(r),u=n.get(r),c=a.get(r);if(!l||!u||!c)continue;const f={...s,[l.value]:parseInt(s[l.value],10)+(c.value?parseInt(u.value,10):0)};o.push({id:r,layer:f}),s=f}return o};function Xn(e){const t=S(ne,null),n=v(()=>t?t.rootZIndex.value-100:Ne),a=F([]),s=B(new Map),o=B(new Map),r=B(new Map),l=B(new Map),u=B(new Map),{resizeRef:c,contentRect:f}=gn(),i=v(()=>{const p=new Map,C=e.overlaps??[];for(const h of C.filter(w=>w.includes(":"))){const[w,b]=h.split(":");if(!a.value.includes(w)||!a.value.includes(b))continue;const k=s.get(w),M=s.get(b),z=o.get(w),W=o.get(b);!k||!M||!z||!W||(p.set(b,{position:k.value,amount:parseInt(z.value,10)}),p.set(w,{position:M.value,amount:-parseInt(W.value,10)}))}return p}),m=v(()=>{const p=[...new Set([...r.values()].map(h=>h.value))].sort((h,w)=>h-w),C=[];for(const h of p){const w=a.value.filter(b=>{var k;return((k=r.get(b))==null?void 0:k.value)===h});C.push(...w)}return hn(C,s,o,l)}),g=v(()=>!Array.from(u.values()).some(p=>p.value)),d=v(()=>m.value[m.value.length-1].layer),y=v(()=>({"--v-layout-left":K(d.value.left),"--v-layout-right":K(d.value.right),"--v-layout-top":K(d.value.top),"--v-layout-bottom":K(d.value.bottom),...g.value?void 0:{transition:"none"}})),x=v(()=>m.value.slice(1).map((p,C)=>{let{id:h}=p;const{layer:w}=m.value[C],b=o.get(h),k=s.get(h);return{id:h,...w,size:Number(b.value),position:k.value}})),V=p=>x.value.find(C=>C.id===p),R=L("createLayout"),he=D(!1);It(()=>{he.value=!0}),N(ne,{register:(p,C)=>{let{id:h,order:w,position:b,layoutSize:k,elementSize:M,active:z,disableTransitions:W,absolute:ot}=C;r.set(h,w),s.set(h,b),o.set(h,k),l.set(h,z),W&&u.set(h,W);const pe=gt(at,R==null?void 0:R.vnode).indexOf(p);pe>-1?a.value.splice(pe,0,h):a.value.push(h);const ye=v(()=>x.value.findIndex(_=>_.id===h)),re=v(()=>n.value+m.value.length*2-ye.value*2),it=v(()=>{const _=b.value==="left"||b.value==="right",oe=b.value==="right",ut=b.value==="bottom",be={[b.value]:0,zIndex:re.value,transform:`translate${_?"X":"Y"}(${(z.value?0:-110)*(oe||ut?-1:1)}%)`,position:ot.value||n.value!==Ne?"absolute":"fixed",...g.value?void 0:{transition:"none"}};if(!he.value)return be;const $=x.value[ye.value];if(!$)throw new Error(`[Vuetify] Could not find layout item "${h}"`);const ie=i.value.get(h);return ie&&($[ie.position]+=ie.amount),{...be,height:_?`calc(100% - ${$.top}px - ${$.bottom}px)`:M.value?`${M.value}px`:void 0,left:oe?void 0:`${$.left}px`,right:oe?`${$.right}px`:void 0,top:b.value!=="bottom"?`${$.top}px`:void 0,bottom:b.value!=="top"?`${$.bottom}px`:void 0,width:_?M.value?`${M.value}px`:void 0:`calc(100% - ${$.left}px - ${$.right}px)`}}),lt=v(()=>({zIndex:re.value-1}));return{layoutItemStyles:it,layoutItemScrimStyles:lt,zIndex:re}},unregister:p=>{r.delete(p),s.delete(p),o.delete(p),l.delete(p),u.delete(p),a.value=a.value.filter(C=>C!==p)},mainRect:d,mainStyles:y,getLayoutItem:V,items:x,layoutRect:f,rootZIndex:n});const st=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),rt=v(()=>({zIndex:t?n.value:void 0,position:t?"relative":void 0,overflow:t?"hidden":void 0}));return{layoutClasses:st,layoutStyles:rt,getLayoutItem:V,items:x,layoutRect:f,layoutRef:c}}export{Qe as $,Kt as A,Gn as B,un as C,ee as D,ln as E,Kn as F,nn as G,En as H,an as I,gn as J,wn as K,te as L,E as M,Cn as N,Ge as O,Fn as P,$n as Q,Wt as R,Sn as S,fe as T,_t as U,kn as V,Ln as W,Bn as X,Ve as Y,Je as Z,Mn as _,Rn as a,zn as b,On as c,Tn as d,Vn as e,ae as f,Jt as g,Ye as h,Dn as i,Zn as j,jn as k,Hn as l,_n as m,Xt as n,L as o,Z as p,Un as q,Nn as r,Wn as s,Xn as t,An as u,Pn as v,In as w,Nt as x,xn as y,A as z};
