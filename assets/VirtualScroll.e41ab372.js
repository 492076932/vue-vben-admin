import{J as e,K as t,d as a,bz as s,br as i,bs as d,i as r,o as l,j as o,k as m,m as c,aJ as n,n as p}from"./index.871a73d0.js";import"./index.a45b2b74.js";import{_ as u}from"./index.472abbb9.js";import"./index.b0611c31.js";import"./index.673364b0.js";import"./index.8d91dadc.js";import"./index.9fbd6c39.js";import"./usePageContext.8b8441ee.js";const _=e((()=>t((()=>__import__("./index.a796a143.js")),["/assets/index.a796a143.js","/assets/index.5ddcb78c.css","/assets/index.871a73d0.js","/assets/index.94daecd6.css"]))),v=(()=>{const e=[];for(let t=1;t<2e4;t++)e.push({title:"列表项"+t});return e})();var b=a({components:{VScroll:_,Divider:s,PageWrapper:u},setup:()=>({data:v})});const f=n("data-v-ee54a078");i("data-v-ee54a078");const h=p("基础滚动示例"),j={class:"virtual-scroll-demo-wrap"},x={class:"virtual-scroll-demo__item"},g=p("即使不可见，也预先加载50条数据，防止空白"),w={class:"virtual-scroll-demo-wrap"},P={class:"virtual-scroll-demo__item"};d();const D=f(((e,t,a,s,i,d)=>{const n=r("Divider"),p=r("VScroll"),u=r("PageWrapper");return l(),o(u,{class:"virtual-scroll-demo"},{default:f((()=>[m(n,null,{default:f((()=>[h])),_:1}),m("div",j,[m(p,{itemHeight:41,items:e.data,height:300,width:300},{default:f((({item:e})=>[m("div",x,c(e.title),1)])),_:1},8,["items"])]),m(n,null,{default:f((()=>[g])),_:1}),m("div",w,[m(p,{itemHeight:41,items:e.data,height:300,width:300,bench:50},{default:f((({item:e})=>[m("div",P,c(e.title),1)])),_:1},8,["items"])])])),_:1})}));b.render=D,b.__scopeId="data-v-ee54a078";export default b;