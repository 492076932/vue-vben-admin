import{cC as e,b as s,d as a,g as o,h as i,o as r,i as t,w as n,j as p}from"./index.899e68b1.js";import{g as d,_ as m}from"./index.d0b91344.js";import"./_stringToArray.45d16e42.js";import"./domUtils.511e170d.js";import"./index.73bca1d9.js";import"./index.55180915.js";import"./index.1156589c.js";import"./index.6e6fb497.js";import"./FullscreenOutlined.37abc2dd.js";import"./RightOutlined.7a52ca15.js";import"./useTimeout.1aa049d6.js";import"./index.8a587a60.js";import"./animation.ce68d404.js";import"./useScrollTo.14ce33f8.js";import"./useAttrs.65aacca0.js";import"./useWindowSizeFn.43b90dac.js";import"./index.01e45a9d.js";import"./uuid.a6cec785.js";import"./download.8d0bafa5.js";import{u as l}from"./useForm.77949dc2.js";import{_ as c}from"./index.dc7cfeca.js";import"./usePageContext.914e04cb.js";const{uploadUrl:u=""}=s();function j(s,a){return e.uploadFile({url:u,onUploadProgress:a},s)}const g=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:j}}];var f=a({components:{BasicUpload:d,BasicForm:m,PageWrapper:c},setup(){const{createMessage:e}=o(),[s]=l({labelWidth:120,schemas:g,actionColOptions:{span:16}});return{handleChange:s=>{e.info(`已上传文件${JSON.stringify(s)}`)},uploadApi:j,register:s}}});f.render=function(e,s,a,o,d,m){const l=i("a-alert"),c=i("BasicUpload"),u=i("BasicForm"),j=i("PageWrapper");return r(),t(j,{title:"上传组件示例"},{default:n((()=>[p(l,{message:"基础示例",class:"my-5"}),p(c,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi},null,8,["onChange","api"]),p(l,{message:"嵌入表单,加入表单校验",class:"my-5"}),p(u,{onRegister:e.register},null,8,["onRegister"])])),_:1})};export default f;