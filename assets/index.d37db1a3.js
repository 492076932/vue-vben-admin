import{_ as e}from"./index.2409ec08.js";import{a as o}from"./index.fd2324d6.js";import{d as i,r as n,g as t,h as l,o as s,i as a,w as p,j as r}from"./index.1d8b385f.js";import{_ as d}from"./index.7d324b6c.js";import{o as c}from"./select.908d9776.js";import"./index.e447d389.js";import"./responsiveObserve.c545f1cc.js";import"./index.b4d624ce.js";import"./vendor.3b1829c7.js";import"./findIndex.cf064dd0.js";import"./isEqual.93fdd584.js";import"./_baseProperty.74f89655.js";import"./toInteger.416f421e.js";import"./index.d9bea72d.js";import"./index.b65239bc.js";import"./SearchOutlined.094b03ed.js";import"./CheckOutlined.f4a7eca6.js";import"./DownOutlined.012ff21f.js";import"./index.c3f7ce8c.js";import"./index.f1efc1a1.js";import"./UpOutlined.69059219.js";import"./index.2292ad4b.js";import"./EyeOutlined.87340723.js";import"./index.215af218.js";import"./colors.cfff8c2b.js";import"./RightOutlined.04567b90.js";import"./RedoOutlined.bef090b2.js";import"./index.feda83ad.js";import"./EllipsisOutlined.2068088a.js";import"./types.40ed6fdc.js";import"./Tree.5733e28c.js";import"./util.7ce74c0f.js";import"./useAttrs.de3dd077.js";import"./index.95c10fda.js";import"./index.d5f35d33.js";import"./uuid.b62fb74c.js";import"./index.20d97b88.js";import"./DeleteOutlined.d5e82f30.js";import"./index.7e731350.js";import"./useTimeout.b2101222.js";import"./useWindowSizeFn.e30cf532.js";import"./FullscreenOutlined.9028e57e.js";import"./index.50c0302c.js";import"./index.559970a4.js";import"./index.291ca726.js";import"./LeftOutlined.e3b02fdb.js";import"./download.2380cae9.js";import"./domUtils.ddd08864.js";import"./_stringToArray.cc49bdca.js";import"./index.e2a60846.js";import"./useScrollTo.ff4d48ef.js";import"./animation.dd9fb5c4.js";import"./index.49ecf48a.js";import"./index.9a7f22a8.js";import"./usePageContext.93c5f1fd.js";import"./transButton.f370e4a3.js";import"./ArrowLeftOutlined.277444d7.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:({schema:e,formModel:o})=>({placeholder:"自定义placeholder",onChange:e=>{}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"field2",component:"Input",label:"带后缀",defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{}},suffix:"天"},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field8",component:"Checkbox",label:"字段8",colProps:{span:8},renderComponentContent:"Check"},{field:"field9",component:"Switch",label:"字段9",colProps:{span:8}},{field:"field10",component:"RadioButtonGroup",label:"字段10",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field11",component:"Cascader",label:"字段11",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"field30",component:"ApiSelect",label:"远程下拉",required:!0,componentProps:{api:c},colProps:{span:8},defaultValue:"0"},{field:"field20",component:"InputNumber",label:"字段20",required:!0,colProps:{span:8}}];var f=i({components:{BasicForm:e,CollapseContainer:o,PageWrapper:d},setup(){const e=n(null),{createMessage:o}=t();return{schemas:m,handleSubmit:e=>{o.success("click search,values:"+JSON.stringify(e))},check:e}}});f.render=function(e,o,i,n,t,d){const c=l("BasicForm"),m=l("CollapseContainer"),f=l("PageWrapper");return s(),a(f,{title:"表单基础示例"},{default:p((()=>[r(m,{title:"基础示例"},{default:p((()=>[r(c,{autoFocusFirstItem:"",labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default f;
