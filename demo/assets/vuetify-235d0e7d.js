import{B as j,G,Q as F,Z as N}from"./core-706edc4a.js";import{d as Q,W as o,X as t,a0 as d,ak as U,Z as s,j as r,G as Z,I as n,a1 as u,a5 as V,Y as m,F as y,$ as _,a4 as p}from"./setup-c3cc28c1.js";const E={inheritAttrs:!1,name:"CustomSelect",props:{...F(),menuProps:{type:Object,default:()=>{}},chipProps:{type:Object,default:()=>{}}},emits:["update:model-value"],setup(e,a){return N(e,()=>e.modelValue,a)}},w=(e,a)=>{const c=e.__vccOpts||e;for(const[k,b]of a)c[k]=b;return c};function I(e,a,c,k,b,P){const i=o("v-icon"),f=o("v-list-item"),x=o("v-col"),l=o("v-row"),C=o("v-list"),g=o("v-menu"),S=o("v-chip");return t(),d(S,V(c.chipProps,{disabled:e.disabled}),U({default:s(()=>[n(" "+u(e.selection??e.selectedStr)+" ",1),r(g,V({activator:"parent"},c.menuProps),{default:s(()=>[r(C,{class:"pa-0 ma-0"},{default:s(()=>[(t(!0),m(y,null,_(e.itemRows,(h,B)=>(t(),d(l,{key:B,"no-gutters":""},{default:s(()=>[(t(!0),m(y,null,_(h,(v,O)=>(t(),d(x,{key:O},{default:s(()=>[v?(t(),d(f,{key:0,class:"vcron-v-item",onClick:z=>e.select(v),active:e.has(v)},{default:s(()=>[n(u(v.text),1)]),_:2},1032,["onClick","active"])):p("",!0)]),_:2},1024))),128))]),_:2},1024))),128))]),_:1})]),_:1},16)]),_:2},[e.clearable&&!e.isEmpty?{name:"append",fn:s(()=>[r(i,{size:"small",icon:"mdi-close",onClick:a[0]||(a[0]=Z(h=>e.clear(),["stop"]))})]),key:"0"}:void 0]),1040,["disabled"])}const L=w(E,[["render",I]]),M=()=>({chipProps:{type:Object,default(){return{}}},...j()}),R=Q({name:"CronVuetify",components:{CustomSelect:L},props:M(),emits:["update:model-value","error"],setup(e,a){return G(e,()=>e.modelValue,a)}}),T={style:{display:"inline-block"}};function $(e,a,c,k,b,P){const i=o("v-col"),f=o("custom-select"),x=o("v-row");return t(),m("div",T,[r(x,{align:"baseline",dense:""},{default:s(()=>[e.period.prefix.value?(t(),d(i,{key:0,class:"flex-grow-0"},{default:s(()=>[n(u(e.period.prefix.value),1)]),_:1})):p("",!0),r(i,{cols:"auto"},{default:s(()=>[r(f,{"model-value":e.period.selected.value.id,"item-value":"id",items:e.period.items,"onUpdate:modelValue":a[0]||(a[0]=l=>e.period.select(l)),disabled:e.disabled,"chip-props":e.chipProps},null,8,["model-value","items","disabled","chip-props"])]),_:1}),e.period.suffix.value?(t(),d(i,{key:1,class:"flex-grow-0"},{default:s(()=>[n(u(e.period.suffix.value),1)]),_:1})):p("",!0),(t(!0),m(y,null,_(e.selected,l=>(t(),m(y,{key:l.id},[l.prefix.value?(t(),d(i,{key:0,class:"flex-grow-0"},{default:s(()=>[n(u(l.prefix.value),1)]),_:2},1024)):p("",!0),r(i,{cols:"auto"},{default:s(()=>[r(f,{"model-value":l.selected.value,"onUpdate:modelValue":C=>l.select(C),items:l.items,cols:e.cols[l.id]||1,selection:l.text.value,multiple:"",clearable:"",disabled:e.disabled,"chip-props":e.chipProps,"menu-props":{closeOnContentClick:!1}},null,8,["model-value","onUpdate:modelValue","items","cols","selection","disabled","chip-props"])]),_:2},1024),l.suffix.value?(t(),d(i,{key:1,class:"flex-grow-0"},{default:s(()=>[n(u(l.suffix.value),1)]),_:2},1024)):p("",!0)],64))),128))]),_:1})])}const q=w(R,[["render",$]]),H={install:e=>{e.component("CronVuetify",q)}};export{q as CronVuetify,H as CronVuetifyPlugin,M as cronVuetifyProps,H as default};