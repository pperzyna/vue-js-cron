import{_ as b,r as s,M as g,p as n,q as r,N as x,V as m,O as d,P as i,U as _,t as k,v as f,Q as u,aj as C,R as N}from"./framework-41b13dfe.js";const h={setup(){const a=[{name:"Light",component:"cron-light"},{name:"Vuetify",component:"cron-vuetify"},{name:"Element Plus",component:"cron-element-plus"},{name:"Ant",component:"cron-ant"}],l=["en","de","pt","es"],v=a[0],e=p=>{let t=a.map(c=>c.name).indexOf(p);return t=t>=0?t:0,a[t]};return{flavor:s(v),flavors:a,selectFlavor:e,text:s(v.name),locales:l,locale:s("en"),value:s("* * * * *")}}},B={class:"cron-demo"},U=u("p",null,"Flavor",-1),D=u("p",null,"Locale",-1),F={class:"mb-2"},L={class:"text-lightest mb-5"};function E(a,l,v,e,p,t){const c=g("v-btn"),V=g("v-btn-toggle");return n(),r("div",B,[U,x(V,{modelValue:e.text,"onUpdate:modelValue":l[0]||(l[0]=o=>e.text=o),tile:"",color:"secondary",group:"",density:"compact",class:"mb-2 elevation-5"},{default:m(()=>[(n(!0),r(d,null,i(e.flavors,o=>(n(),_(c,{value:o.name,key:o.name,onClick:y=>e.flavor=o},{default:m(()=>[k(f(o.name),1)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["modelValue"]),D,x(V,{modelValue:e.locale,"onUpdate:modelValue":l[1]||(l[1]=o=>e.locale=o),tile:"",color:"secondary",group:"",density:"compact",class:"mb-10 elevation-5"},{default:m(()=>[(n(!0),r(d,null,i(e.locales,o=>(n(),_(c,{value:o,key:o},{default:m(()=>[k(f(o),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),u("p",F,[(n(!0),r(d,null,i(e.locales,o=>(n(),r(d,{key:o},[o==e.locale?(n(),_(C(e.flavor.component),{key:0,modelValue:e.value,"onUpdate:modelValue":l[2]||(l[2]=y=>e.value=y),locale:e.locale},null,8,["modelValue","locale"])):N("v-if",!0)],64))),128))]),u("p",L," cron expression: "+f(e.value),1)])}const P=b(h,[["render",E],["__file","cron-demo.vue"]]);export{P as default};
