import{a as s,r as e,h as o,i as t,o as l,j as i,k as a,w as n,p as r}from"./index.e84487d5.js";import"./xlsx.a48e520c.js";import"./index.e0e9ea26.js";import"./omit.3896c07b.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f28ab15c.js";import"./CheckOutlined.252282ed.js";import{s as p}from"./index.c5b45e58.js";import"./index.11699fd0.js";import"./colors.ff6d95b7.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.398fc43a.js";import"./index.bab9ff09.js";import"./UpOutlined.0ffab499.js";import"./DownOutlined.1102056e.js";import"./index.af91f443.js";import"./index.6dad0c9e.js";import"./index.d556317e.js";import{s as c}from"./index.de879313.js";import"./CloseOutlined.0f7fb5e4.js";import"./index.c7a54259.js";import"./index.5c04e818.js";import"./LeftOutlined.7832c85b.js";import"./functional.1555bd27.js";import"./RightOutlined.9c709ff3.js";import"./useTimeout.a6f3b2be.js";import"./useDebounce.94ac03e4.js";import"./useEventListener.8c177df1.js";import"./useBreakpoint.593bdcb4.js";import"./resizeEvent.f9055435.js";import"./domUtils.55f014ea.js";import"./useExpose.71ee03b4.js";import"./animation.85d10296.js";import"./index.1dbdd6e1.js";import"./index.9fd3b762.js";import"./useWindowSizeFn.ffa6ba78.js";import"./uuid.40269c00.js";import"./download.c30c39aa.js";const d=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:s=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var m=s({components:{BasicForm:p,CollapseContainer:c},setup(){const s=e(null),{createMessage:t}=o();return{formElRef:s,schemas:d,handleSubmit:s=>{t.success("click search,values:"+JSON.stringify(s))},setProps(e){const o=s.value;o&&o.setProps(e)}}}});const u={class:"m-4"},f={class:"mb-4"},b=r("更改labelWidth"),j=r("还原labelWidth"),P=r("更改Size"),C=r("还原Size"),h=r("禁用表单"),k=r("解除禁用"),_=r("紧凑表单"),x=r("还原正常间距"),v=r(" 操作按钮位置 "),w={class:"mb-4"},O=r(" 隐藏操作按钮 "),S=r(" 显示操作按钮 "),B=r(" 隐藏重置按钮 "),g=r(" 显示重置按钮 "),z=r(" 隐藏查询按钮 "),R=r(" 显示查询按钮 "),W=r(" 修改重置按钮 "),E=r(" 修改查询按钮 ");m.render=function(s,e,o,r,p,c){const d=t("a-button"),m=t("BasicForm"),y=t("CollapseContainer");return l(),i("div",u,[a("div",f,[a(d,{onClick:e[1]||(e[1]=e=>s.setProps({labelWidth:150})),class:"mr-2"},{default:n((()=>[b])),_:1}),a(d,{onClick:e[2]||(e[2]=e=>s.setProps({labelWidth:120})),class:"mr-2"},{default:n((()=>[j])),_:1}),a(d,{onClick:e[3]||(e[3]=e=>s.setProps({size:"large"})),class:"mr-2"},{default:n((()=>[P])),_:1}),a(d,{onClick:e[4]||(e[4]=e=>s.setProps({size:"default"})),class:"mr-2"},{default:n((()=>[C])),_:1}),a(d,{onClick:e[5]||(e[5]=e=>s.setProps({disabled:!0})),class:"mr-2"},{default:n((()=>[h])),_:1}),a(d,{onClick:e[6]||(e[6]=e=>s.setProps({disabled:!1})),class:"mr-2"},{default:n((()=>[k])),_:1}),a(d,{onClick:e[7]||(e[7]=e=>s.setProps({compact:!0})),class:"mr-2"},{default:n((()=>[_])),_:1}),a(d,{onClick:e[8]||(e[8]=e=>s.setProps({compact:!1})),class:"mr-2"},{default:n((()=>[x])),_:1}),a(d,{onClick:e[9]||(e[9]=e=>s.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:n((()=>[v])),_:1})]),a("div",w,[a(d,{onClick:e[10]||(e[10]=e=>s.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:n((()=>[O])),_:1}),a(d,{onClick:e[11]||(e[11]=e=>s.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:n((()=>[S])),_:1}),a(d,{onClick:e[12]||(e[12]=e=>s.setProps({showResetButton:!1})),class:"mr-2"},{default:n((()=>[B])),_:1}),a(d,{onClick:e[13]||(e[13]=e=>s.setProps({showResetButton:!0})),class:"mr-2"},{default:n((()=>[g])),_:1}),a(d,{onClick:e[14]||(e[14]=e=>s.setProps({showSubmitButton:!1})),class:"mr-2"},{default:n((()=>[z])),_:1}),a(d,{onClick:e[15]||(e[15]=e=>s.setProps({showSubmitButton:!0})),class:"mr-2"},{default:n((()=>[R])),_:1}),a(d,{onClick:e[16]||(e[16]=e=>s.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:n((()=>[W])),_:1}),a(d,{onClick:e[17]||(e[17]=e=>s.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:n((()=>[E])),_:1})]),a(y,{title:"使用ref调用表单内部函数示例"},{default:n((()=>[a(m,{schemas:s.schemas,ref:"formElRef",labelWidth:100,onSubmit:s.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])])),_:1})])};export default m;