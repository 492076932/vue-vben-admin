var e=Object.assign;import{d as t,r as i,a as r,aD as o,cp as s,cq as n,h as d,o as p,i as a,bw as m,j as c,H as j,b8 as f,k as l}from"./index.1d8b385f.js";import{S as u}from"./index.f06578cd.js";import x from"./Step1.8d316e7c.js";import b from"./Step2.0c67bb07.js";import S from"./Step3.9cfdcfdf.js";import{_ as v}from"./index.7d324b6c.js";import"./vendor.3b1829c7.js";import"./CheckOutlined.f4a7eca6.js";import"./index.50c0302c.js";import"./index.2292ad4b.js";import"./SearchOutlined.094b03ed.js";import"./EyeOutlined.87340723.js";import"./index.b65239bc.js";import"./DownOutlined.012ff21f.js";import"./index.2409ec08.js";import"./index.e447d389.js";import"./responsiveObserve.c545f1cc.js";import"./index.b4d624ce.js";import"./findIndex.cf064dd0.js";import"./isEqual.93fdd584.js";import"./_baseProperty.74f89655.js";import"./toInteger.416f421e.js";import"./index.d9bea72d.js";import"./index.c3f7ce8c.js";import"./index.f1efc1a1.js";import"./UpOutlined.69059219.js";import"./index.215af218.js";import"./colors.cfff8c2b.js";import"./RightOutlined.04567b90.js";import"./RedoOutlined.bef090b2.js";import"./index.feda83ad.js";import"./EllipsisOutlined.2068088a.js";import"./types.40ed6fdc.js";import"./Tree.5733e28c.js";import"./util.7ce74c0f.js";import"./useAttrs.de3dd077.js";import"./index.95c10fda.js";import"./index.d5f35d33.js";import"./uuid.b62fb74c.js";import"./index.20d97b88.js";import"./DeleteOutlined.d5e82f30.js";import"./index.7e731350.js";import"./useTimeout.b2101222.js";import"./useWindowSizeFn.e30cf532.js";import"./index.fd2324d6.js";import"./index.e2a60846.js";import"./domUtils.ddd08864.js";import"./_stringToArray.cc49bdca.js";import"./useScrollTo.ff4d48ef.js";import"./animation.dd9fb5c4.js";import"./FullscreenOutlined.9028e57e.js";import"./index.559970a4.js";import"./index.291ca726.js";import"./LeftOutlined.e3b02fdb.js";import"./download.2380cae9.js";import"./data.2505cb7f.js";import"./useForm.901716c8.js";import"./index.de275b8a.js";import"./index.ebf4f741.js";import"./index.49ecf48a.js";import"./index.9a7f22a8.js";import"./usePageContext.93c5f1fd.js";import"./transButton.f370e4a3.js";import"./ArrowLeftOutlined.277444d7.js";var O=t({components:{Step1:x,Step2:b,Step3:S,PageWrapper:v,[u.name]:u,[u.Step.name]:u.Step},setup(){const t=i(0),s=r({initSetp2:!1,initSetp3:!1});return e({current:t,handleStep1Next:function(e){t.value++,s.initSetp2=!0},handleStep2Next:function(e){t.value++,s.initSetp3=!0},handleRedo:function(){t.value=0,s.initSetp2=!1,s.initSetp3=!1},handleStepPrev:function(){t.value--}},o(s))}});const h=m("data-v-53523f72");s("data-v-53523f72");const g={class:"step-form-form"},N={class:"mt-5"};n();const P=h(((e,t,i,r,o,s)=>{const n=d("a-step"),m=d("a-steps"),u=d("Step1"),x=d("Step2"),b=d("Step3"),S=d("PageWrapper");return p(),a(S,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:h((()=>[c("div",g,[c(m,{current:e.current},{default:h((()=>[c(n,{title:"填写转账信息"}),c(n,{title:"确认转账信息"}),c(n,{title:"完成"})])),_:1},8,["current"])]),c("div",N,[j(c(u,{onNext:e.handleStep1Next},null,8,["onNext"]),[[f,0===e.current]]),e.initSetp2?j((p(),a(x,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[f,1===e.current]]):l("",!0),e.initSetp3?j((p(),a(b,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[f,2===e.current]]):l("",!0)])])),_:1})}));O.render=P,O.__scopeId="data-v-53523f72";export default O;
