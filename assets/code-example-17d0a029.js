import{_ as S,M as e,p as _,q as g,N as o,V as t,U as V,t as i,v as k,R as y,W as N,a6 as h,Z as B,Q as l,s as a,$ as C}from"./framework-41b13dfe.js";const $={props:{title:{type:String,default:""}},data(){return{viewSource:!1}}},E=l("span",null,"View source",-1),D={class:"source"};function q(n,c,r,H,s,M){const v=e("v-toolbar-title"),d=e("v-spacer"),p=e("v-icon"),u=e("v-btn"),m=e("v-tooltip"),f=e("v-toolbar"),b=e("v-expand-transition");return _(),g("div",null,[o(f,{dense:"",class:"elevation-0 bg-transparent"},{default:t(()=>[r.title?(_(),V(v,{key:0,class:"pa-0 ma-0"},{default:t(()=>[i(k(r.title),1)]),_:1})):y("v-if",!0),o(d),o(m,{bottom:""},{activator:t(({attrs:w,on:x})=>[o(u,N(w,h(x),{icon:"",onClick:c[0]||(c[0]=P=>s.viewSource=!s.viewSource)}),{default:t(()=>[o(p,null,{default:t(()=>[i("mdi-code-tags")]),_:1})]),_:2},1040)]),default:t(()=>[E]),_:1})]),_:1}),o(b,null,{default:t(()=>[B(l("div",D,[a(n.$slots,"source")],512),[[C,s.viewSource]])]),_:3}),l("div",null,[a(n.$slots,"default")]),a(n.$slots,"code")])}const R=S($,[["render",q],["__file","code-example.vue"]]);export{R as default};
