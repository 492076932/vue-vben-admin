import{d as e,aF as s,aK as t,$ as i,bR as r,h as a,o,i as p,j as n,w as m,b0 as d,aL as l,aM as f,T as u,bx as c}from"./index.1d8b385f.js";import{I as g}from"./index.291ca726.js";import{_ as j}from"./index.7d324b6c.js";import"./vendor.3b1829c7.js";import"./LeftOutlined.e3b02fdb.js";import"./RightOutlined.04567b90.js";import"./index.49ecf48a.js";import"./index.feda83ad.js";import"./EllipsisOutlined.2068088a.js";import"./types.40ed6fdc.js";import"./isEqual.93fdd584.js";import"./toInteger.416f421e.js";import"./DownOutlined.012ff21f.js";import"./index.95c10fda.js";import"./index.9a7f22a8.js";import"./usePageContext.93c5f1fd.js";import"./transButton.f370e4a3.js";import"./ArrowLeftOutlined.277444d7.js";var v=e({name:"ImagePreview",components:{Image:g,PreviewGroup:g.PreviewGroup},props:{functional:s.bool,imageList:{type:Array}},setup(e){const{prefixCls:s}=t("image-preview");return{prefixCls:s,getImageList:i((()=>{const{imageList:s}=e;return s?s.map((e=>r(e)?{src:e,placeholder:!1}:e)):[]}))}}});v.render=function(e,s,t,i,r,g){const j=a("Image"),v=a("PreviewGroup");return o(),p("div",{class:e.prefixCls},[n(v,null,{default:m((()=>[!e.imageList||e.$slots.default?d(e.$slots,"default",{key:0}):(o(!0),p(l,{key:1},f(e.getImageList,(e=>(o(),p(j,u({key:e.src},e),c({_:2},[e.placeholder?{name:"placeholder",fn:m((()=>[n(j,u(e,{src:e.placeholder,preview:!1}),null,16,["src"])]))}:void 0]),1040)))),128))])),_:1})],2)};const x=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var h=e({components:{PageWrapper:j,ImagePreview:v},setup:()=>({imgList:x})});h.render=function(e,s,t,i,r,d){const l=a("ImagePreview"),f=a("PageWrapper");return o(),p(f,{title:"图片预览示例"},{default:m((()=>[n(l,{imageList:e.imgList},null,8,["imageList"])])),_:1})};export default h;
