import{d as e,h as i,o as s,i as o,j as t}from"./index.899e68b1.js";import"./index.d0b91344.js";import"./_stringToArray.45d16e42.js";import"./domUtils.511e170d.js";import"./index.73bca1d9.js";import"./index.55180915.js";import"./index.1156589c.js";import"./CheckOutlined.fc6e0763.js";import"./index.6e6fb497.js";import{_ as r}from"./index.7aa6041f.js";import"./FullscreenOutlined.37abc2dd.js";import"./RightOutlined.7a52ca15.js";import"./SettingOutlined.a20a6645.js";import"./useTimeout.1aa049d6.js";import"./index.8a587a60.js";import"./animation.ce68d404.js";import"./useScrollTo.14ce33f8.js";import"./useAttrs.65aacca0.js";import"./useWindowSizeFn.43b90dac.js";import"./index.01e45a9d.js";import"./uuid.a6cec785.js";import"./download.8d0bafa5.js";import"./useForm.77949dc2.js";import"./clickOutside.508ede81.js";import"./useSortable.d78f3ef5.js";import"./useExpose.5450fd15.js";import{u as a}from"./useTable.75c8965a.js";import{getBasicColumns as n}from"./tableData.7aa0192c.js";import{d as m}from"./table.e7e99e41.js";var d=e({components:{BasicTable:r},setup(){const[e]=a({title:"表尾行合计示例",api:m,rowSelection:{type:"checkbox"},columns:n(),showSummary:!0,summaryFunc:function(e){const i=e.reduce(((e,i)=>e+=i.no),0);return[{_row:"合计",_index:"平均值",no:i},{_row:"合计",_index:"平均值",no:i}]},scroll:{x:2e3},canResize:!1});return{registerTable:e}}});const c={class:"p-4"};d.render=function(e,r,a,n,m,d){const p=i("BasicTable");return s(),o("div",c,[t(p,{onRegister:e.registerTable},null,8,["onRegister"])])};export default d;