import{d as e,bP as i,g as t,h as s,o,i as r,w as d,j as n}from"./index.1d8b385f.js";import{I as p}from"./index.2292ad4b.js";import{_ as a}from"./index.2409ec08.js";import{a as m}from"./index.fd2324d6.js";import{_ as l}from"./index.7d324b6c.js";import{u as f}from"./useForm.901716c8.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.094b03ed.js";import"./EyeOutlined.87340723.js";import"./index.e447d389.js";import"./responsiveObserve.c545f1cc.js";import"./index.b4d624ce.js";import"./findIndex.cf064dd0.js";import"./isEqual.93fdd584.js";import"./_baseProperty.74f89655.js";import"./toInteger.416f421e.js";import"./index.d9bea72d.js";import"./index.b65239bc.js";import"./CheckOutlined.f4a7eca6.js";import"./DownOutlined.012ff21f.js";import"./index.c3f7ce8c.js";import"./index.f1efc1a1.js";import"./UpOutlined.69059219.js";import"./index.215af218.js";import"./colors.cfff8c2b.js";import"./RightOutlined.04567b90.js";import"./RedoOutlined.bef090b2.js";import"./index.feda83ad.js";import"./EllipsisOutlined.2068088a.js";import"./types.40ed6fdc.js";import"./Tree.5733e28c.js";import"./util.7ce74c0f.js";import"./useAttrs.de3dd077.js";import"./index.95c10fda.js";import"./index.d5f35d33.js";import"./uuid.b62fb74c.js";import"./index.20d97b88.js";import"./DeleteOutlined.d5e82f30.js";import"./index.7e731350.js";import"./useTimeout.b2101222.js";import"./useWindowSizeFn.e30cf532.js";import"./FullscreenOutlined.9028e57e.js";import"./index.50c0302c.js";import"./index.559970a4.js";import"./index.291ca726.js";import"./LeftOutlined.e3b02fdb.js";import"./download.2380cae9.js";import"./domUtils.ddd08864.js";import"./_stringToArray.cc49bdca.js";import"./index.e2a60846.js";import"./useScrollTo.ff4d48ef.js";import"./animation.dd9fb5c4.js";import"./index.49ecf48a.js";import"./index.9a7f22a8.js";import"./usePageContext.93c5f1fd.js";import"./transButton.f370e4a3.js";import"./ArrowLeftOutlined.277444d7.js";const c=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:t})=>i(p,{placeholder:"请输入",value:e[t],onChange:i=>{e[t]=i.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var j=e({components:{BasicForm:a,CollapseContainer:m,PageWrapper:l,[p.name]:p},setup(){const{createMessage:e}=t(),[i,{setProps:s}]=f({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:i,schemas:c,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))},setProps:s}}});j.render=function(e,i,t,p,a,m){const l=s("a-input"),f=s("BasicForm"),c=s("CollapseContainer"),j=s("PageWrapper");return o(),r(j,{title:"自定义组件示例"},{default:d((()=>[n(c,{title:"自定义表单"},{default:d((()=>[n(f,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:d((({model:e,field:i})=>[n(l,{value:e[i],"onUpdate:value":t=>e[i]=t,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default j;
