import{d as e,h as o,o as l,i as n,w as a,j as t}from"./index.899e68b1.js";import{_ as p}from"./index.d0b91344.js";import"./_stringToArray.45d16e42.js";import"./domUtils.511e170d.js";import"./index.73bca1d9.js";import"./index.55180915.js";import{a as s}from"./index.1156589c.js";import"./index.6e6fb497.js";import"./FullscreenOutlined.37abc2dd.js";import"./RightOutlined.7a52ca15.js";import"./useTimeout.1aa049d6.js";import"./index.8a587a60.js";import"./animation.ce68d404.js";import"./useScrollTo.14ce33f8.js";import"./useAttrs.65aacca0.js";import"./useWindowSizeFn.43b90dac.js";import"./index.01e45a9d.js";import"./uuid.a6cec785.js";import"./download.8d0bafa5.js";import{u as i}from"./useForm.77949dc2.js";import{_ as r}from"./index.dc7cfeca.js";import"./usePageContext.914e04cb.js";var c=e({components:{BasicForm:p,CollapseContainer:s,PageWrapper:r},setup(){const[e]=i({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[o]=i({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:o}}});c.render=function(e,p,s,i,r,c){const d=o("BasicForm"),m=o("CollapseContainer"),u=o("PageWrapper");return l(),n(u,{title:"可折叠表单示例"},{default:a((()=>[t(m,{title:"基础收缩示例"},{default:a((()=>[t(d,{onRegister:e.register},null,8,["onRegister"])])),_:1}),t(m,{title:"超过3行自动收起",class:"mt-4"},{default:a((()=>[t(d,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default c;