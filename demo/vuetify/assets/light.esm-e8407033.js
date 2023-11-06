import{N as E,z as b,B as N,Q as S}from"./core-01a2ee8d.js";import{L as B,w as m,f as w,_ as M,$ as r,a3 as a,I as $,a7 as u,a2 as i,b as V,F as v,a4 as C,a8 as g,ab as z,V as U}from"./index-959551f4.js";var y={name:"CustomSelect",props:{...N(),modelValue:{type:[String,Number,Array]},selection:{type:String},clearable:{type:Boolean,default:!1}},emits:["update:model-value"],setup(e,{emit:l}){const s=S(e),t=w(!1),d=()=>{t.value=!1,document.removeEventListener("click",d)},f=()=>{t.value=!t.value,t.value?setTimeout(()=>{document.addEventListener("click",d)},1):document.removeEventListener("click",d)};return m(s.selected,()=>{l("update:model-value",s.selected.value)}),m(()=>e.modelValue,n=>{n&&s.setValues(n)},{immediate:!0}),{...s,menu:t,toggleMenu:f}}};const F={class:"vcron-select-container"},Q={key:0,class:"vcron-select-list"},T=["onClick"],j={key:0};function A(e,l,s,t,d,f){return r(),a("div",F,[i("span",{class:"vcron-select-input",onClick:l[1]||(l[1]=(...n)=>t.toggleMenu&&t.toggleMenu(...n))},[$(u(s.selection??e.selectedStr)+" ",1),s.clearable&&!e.isEmpty?(r(),a("span",{key:0,onClick:l[0]||(l[0]=(...n)=>e.clear&&e.clear(...n))},"✕")):g("v-if",!0)]),t.menu?(r(),a("div",Q,[(r(!0),a(v,null,C(e.itemRows,(n,o)=>(r(),a("div",{class:"vcron-select-row",key:o},[(r(!0),a(v,null,C(n,(c,L)=>(r(),a("div",{key:o+"-"+L,class:z(["vcron-select-col",{"vcron-select-selected":e.has(c)}]),onClick:[h=>e.select(c),l[2]||(l[2]=U(h=>e.multiple?()=>{}:t.toggleMenu(),["stop"]))]},[c?(r(),a("div",j,u(c.text),1)):g("v-if",!0)],10,T))),128))]))),128))])):g("v-if",!0)])}y.render=A;y.__file="src/components/CustomSelect.vue";var p=B({name:"VueCronEditor",components:{CustomSelect:y},emits:["update:model-value","error"],props:{...E,cols:{type:Object,default:()=>({second:5,minute:5,hour:4,day:4})}},setup(e,{emit:l}){const s=b(e);return m(()=>e.modelValue,t=>{s.cron.value=t}),m(s.cron,t=>{l("update:model-value",t)}),m(s.error,t=>{l("error",t)}),{...s}}});const D={class:"vcron-editor"},I={class:"vcron-l-spacer"},O={class:"vcron-l-spacer"};function P(e,l,s,t,d,f){const n=M("custom-select");return r(),a("span",D,[$(u(e.period.text)+" ",1),i("span",null,u(e.period.prefix.value),1),i("div",I,[V(n,{"model-value":e.period.selected.value.id,"item-value":"id",items:e.period.items,"onUpdate:modelValue":l[0]||(l[0]=o=>e.period.select(o)),cols:e.cols.period||1},null,8,["model-value","items","cols"])]),i("span",null,u(e.period.suffix.value),1),(r(!0),a(v,null,C(e.selected,o=>(r(),a(v,{key:o.id},[i("span",null,u(o.prefix.value),1),i("div",O,[V(n,{"model-value":o.selected.value,"onUpdate:modelValue":c=>o.select(c),items:o.items,cols:e.cols[o.id]||1,selection:o.text.value,multiple:"",clearable:""},null,8,["model-value","onUpdate:modelValue","items","cols","selection"])]),i("span",null,u(o.suffix.value),1)],64))),128))])}p.render=P;p.__file="src/CronEditor.vue";function k(e){k.installed||(k.installed=!0,e.component("CronLight",p))}const q={install:k,component:p};export{p as CronLight,q as CronLightPlugin,q as default,k as install};
