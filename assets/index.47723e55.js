import{D as e}from"./index.e07219e9.js";import{u as a}from"./useDescription.c24a955b.js";import{_ as s}from"./index.472abbb9.js";import{d as t,i,o as r,j as o,w as n,k as m}from"./index.871a73d0.js";import"./index.c741f5a3.js";import"./index.763e570f.js";import"./index.3ab8cadf.js";import"./domUtils.f6df7058.js";import"./RightOutlined.726ff22e.js";import"./index.8d91dadc.js";import"./useTimeout.da8cb4b6.js";import"./useScrollTo.25bb0b32.js";import"./animation.36cf3c57.js";import"./index.b0611c31.js";import"./index.673364b0.js";import"./index.9fbd6c39.js";import"./usePageContext.8b8441ee.js";const l={username:"test",nickName:"VB",age:25,phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},c=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,a)=>`${a.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}];var d=t({components:{Description:e,PageWrapper:s},setup(){const[e]=a({title:"useDescription",data:l,schema:c}),[s]=a({title:"无边框",bordered:!1,data:l,schema:c});return{mockData:l,schema:c,register:e,register1:s}}});d.render=function(e,a,s,t,l,c){const d=i("Description"),p=i("PageWrapper");return r(),o(p,{title:"详情组件示例"},{default:n((()=>[m(d,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),m(d,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),m(d,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),m(d,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])])),_:1})};export default d;