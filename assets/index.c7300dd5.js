import{d as e,r as a,cp as s,cq as t,h as i,o,i as r,j as n,bs as l,H as d,b8 as p,bw as c,m}from"./index.1d8b385f.js";import{a as u}from"./index.b65239bc.js";import{_ as f}from"./index.7d324b6c.js";import{F as v,S as j,a as S,b,c as x,d as T,e as R,f as X,g as h,h as Y,i as g,E,j as _}from"./index.e2a60846.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.094b03ed.js";import"./CheckOutlined.f4a7eca6.js";import"./DownOutlined.012ff21f.js";import"./index.49ecf48a.js";import"./index.feda83ad.js";import"./RightOutlined.04567b90.js";import"./EllipsisOutlined.2068088a.js";import"./types.40ed6fdc.js";import"./isEqual.93fdd584.js";import"./toInteger.416f421e.js";import"./index.95c10fda.js";import"./index.9a7f22a8.js";import"./usePageContext.93c5f1fd.js";import"./transButton.f370e4a3.js";import"./ArrowLeftOutlined.277444d7.js";import"./domUtils.ddd08864.js";import"./_stringToArray.cc49bdca.js";const w=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map((e=>({label:e,value:e,key:e})));var y=e({components:{Select:u,PageWrapper:f,FadeTransition:v,ScaleTransition:j,SlideYTransition:S,ScrollYTransition:b,SlideYReverseTransition:x,ScrollYReverseTransition:T,SlideXTransition:R,ScrollXTransition:X,SlideXReverseTransition:h,ScrollXReverseTransition:Y,ScaleRotateTransition:g,ExpandXTransition:E,ExpandTransition:_},setup(){const e=a("Fade"),s=a(!0);return{options:w,value:e,start:function(){s.value=!1,setTimeout((()=>{s.value=!0}),300)},show:s}}});const O=c("data-v-51fb1392");s("data-v-51fb1392");const k={class:"flex"},C=m(" start "),F={class:"box"};t();const P=O(((e,a,s,t,c,m)=>{const u=i("Select"),f=i("a-button"),v=i("PageWrapper");return o(),r(v,{title:"动画组件示例"},{default:O((()=>[n("div",k,[n(u,{options:e.options,value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),n(f,{type:"primary",class:"ml-4",onClick:e.start},{default:O((()=>[C])),_:1},8,["onClick"])]),(o(),r(l(`${e.value}Transition`),null,{default:O((()=>[d(n("div",F,null,512),[[p,e.show]])])),_:1}))])),_:1})}));y.render=P,y.__scopeId="data-v-51fb1392";export default y;
