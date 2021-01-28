import{_ as e}from"./index.2409ec08.js";import{a as s}from"./index.fd2324d6.js";import{d as o,g as t,h as i,o as l,i as r,w as a,j as n,m as d}from"./index.1d8b385f.js";import{_ as p}from"./index.7d324b6c.js";import{u as c}from"./useForm.901716c8.js";import"./index.e447d389.js";import"./responsiveObserve.c545f1cc.js";import"./index.b4d624ce.js";import"./vendor.3b1829c7.js";import"./findIndex.cf064dd0.js";import"./isEqual.93fdd584.js";import"./_baseProperty.74f89655.js";import"./toInteger.416f421e.js";import"./index.d9bea72d.js";import"./index.b65239bc.js";import"./SearchOutlined.094b03ed.js";import"./CheckOutlined.f4a7eca6.js";import"./DownOutlined.012ff21f.js";import"./index.c3f7ce8c.js";import"./index.f1efc1a1.js";import"./UpOutlined.69059219.js";import"./index.2292ad4b.js";import"./EyeOutlined.87340723.js";import"./index.215af218.js";import"./colors.cfff8c2b.js";import"./RightOutlined.04567b90.js";import"./RedoOutlined.bef090b2.js";import"./index.feda83ad.js";import"./EllipsisOutlined.2068088a.js";import"./types.40ed6fdc.js";import"./Tree.5733e28c.js";import"./util.7ce74c0f.js";import"./useAttrs.de3dd077.js";import"./index.95c10fda.js";import"./index.d5f35d33.js";import"./uuid.b62fb74c.js";import"./index.20d97b88.js";import"./DeleteOutlined.d5e82f30.js";import"./index.7e731350.js";import"./useTimeout.b2101222.js";import"./useWindowSizeFn.e30cf532.js";import"./FullscreenOutlined.9028e57e.js";import"./index.50c0302c.js";import"./index.559970a4.js";import"./index.291ca726.js";import"./LeftOutlined.e3b02fdb.js";import"./download.2380cae9.js";import"./domUtils.ddd08864.js";import"./_stringToArray.cc49bdca.js";import"./index.e2a60846.js";import"./useScrollTo.ff4d48ef.js";import"./animation.dd9fb5c4.js";import"./index.49ecf48a.js";import"./index.9a7f22a8.js";import"./usePageContext.93c5f1fd.js";import"./transButton.f370e4a3.js";import"./ArrowLeftOutlined.277444d7.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var u=o({components:{BasicForm:e,CollapseContainer:s,PageWrapper:p},setup(){const{createMessage:e}=t(),[s,{setProps:o}]=c({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:s,schemas:m,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:o}}});const f={class:"mb-4"},j=d(" 更改labelWidth "),b=d(" 还原labelWidth "),P=d(" 更改Size "),x=d(" 还原Size "),C=d(" 禁用表单 "),h=d(" 解除禁用 "),k=d(" 紧凑表单 "),_=d(" 还原正常间距 "),O=d(" 操作按钮位置 "),g={class:"mb-4"},v=d(" 隐藏操作按钮 "),S=d(" 显示操作按钮 "),w=d(" 隐藏重置按钮 "),B=d(" 显示重置按钮 "),W=d(" 隐藏查询按钮 "),y=d(" 显示查询按钮 "),F=d(" 修改重置按钮 "),R=d(" 修改查询按钮 ");u.render=function(e,s,o,t,d,p){const c=i("a-button"),m=i("BasicForm"),u=i("CollapseContainer"),z=i("PageWrapper");return l(),r(z,{title:"UseForm操作示例"},{default:a((()=>[n("div",f,[n(c,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:a((()=>[j])),_:1}),n(c,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:a((()=>[b])),_:1}),n(c,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:a((()=>[P])),_:1}),n(c,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:a((()=>[x])),_:1}),n(c,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:a((()=>[C])),_:1}),n(c,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:a((()=>[h])),_:1}),n(c,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:a((()=>[k])),_:1}),n(c,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:a((()=>[_])),_:1}),n(c,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:a((()=>[O])),_:1})]),n("div",g,[n(c,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:a((()=>[v])),_:1}),n(c,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:a((()=>[S])),_:1}),n(c,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:a((()=>[w])),_:1}),n(c,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:a((()=>[B])),_:1}),n(c,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:a((()=>[W])),_:1}),n(c,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:a((()=>[y])),_:1}),n(c,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:a((()=>[F])),_:1}),n(c,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:a((()=>[R])),_:1})]),n(u,{title:"useForm示例"},{default:a((()=>[n(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;
