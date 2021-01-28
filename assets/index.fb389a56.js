import{a as e}from"./index.fd2324d6.js";import{d as o,g as n,h as s,o as r,i as a,w as t,j as i,m as l}from"./index.1d8b385f.js";import{_ as c}from"./index.7d324b6c.js";import"./index.e2a60846.js";import"./domUtils.ddd08864.js";import"./_stringToArray.cc49bdca.js";import"./RightOutlined.04567b90.js";import"./index.95c10fda.js";import"./useTimeout.b2101222.js";import"./useScrollTo.ff4d48ef.js";import"./animation.dd9fb5c4.js";import"./vendor.3b1829c7.js";import"./index.49ecf48a.js";import"./index.feda83ad.js";import"./EllipsisOutlined.2068088a.js";import"./types.40ed6fdc.js";import"./isEqual.93fdd584.js";import"./toInteger.416f421e.js";import"./DownOutlined.012ff21f.js";import"./index.9a7f22a8.js";import"./usePageContext.93c5f1fd.js";import"./transButton.f370e4a3.js";import"./ArrowLeftOutlined.277444d7.js";var d=o({components:{CollapseContainer:e,PageWrapper:c},setup(){const{createMessage:e,createConfirm:o,createSuccessModal:s,createInfoModal:r,createErrorModal:a,createWarningModal:t,notification:i}=n(),{info:l,success:c,warning:d,error:f}=e;return{infoMsg:l,successMsg:c,warningMsg:d,errorMsg:f,handleLoading:function(){e.loading("Loading...")},handleConfirm:function(e){o({iconType:e,title:"Tip",content:"content message..."})},handleSuccessModal:function(){s({title:"Tip",content:"content message..."})},handleErrorModal:function(){a({title:"Tip",content:"content message..."})},handleWarningModal:function(){t({title:"Tip",content:"content message..."})},handleInfoModal:function(){r({title:"Tip",content:"content message..."})},handleNotify:function(){i.success({message:"Tip",description:"content message..."})}}}});const f=l(" Info "),m=l(" Success "),u=l(" Warning "),g=l(" Error "),p=l(" Loading "),C=l(" Info "),h=l(" Warning "),j=l(" Success "),M=l(" Error "),_=l(" Info "),k=l(" Success "),w=l(" Error "),x=l(" Warning "),b=l(" Success ");d.render=function(e,o,n,l,c,d){const T=s("a-button"),E=s("CollapseContainer"),S=s("PageWrapper");return r(),a(S,{title:"消息示例"},{default:t((()=>[i(E,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Message"},{default:t((()=>[i(T,{onClick:o[1]||(o[1]=o=>e.infoMsg("Info message")),class:"mr-2"},{default:t((()=>[f])),_:1}),i(T,{onClick:o[2]||(o[2]=o=>e.successMsg("Success message")),class:"mr-2",color:"success"},{default:t((()=>[m])),_:1}),i(T,{onClick:o[3]||(o[3]=o=>e.warningMsg("Warning message")),class:"mr-2",color:"warning"},{default:t((()=>[u])),_:1}),i(T,{onClick:o[4]||(o[4]=o=>e.errorMsg("Error message")),class:"mr-2",color:"error"},{default:t((()=>[g])),_:1}),i(T,{onClick:e.handleLoading,class:"mr-2",type:"primary"},{default:t((()=>[p])),_:1},8,["onClick"])])),_:1}),i(E,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Comfirm"},{default:t((()=>[i(T,{onClick:o[5]||(o[5]=o=>e.handleConfirm("info")),class:"mr-2"},{default:t((()=>[C])),_:1}),i(T,{onClick:o[6]||(o[6]=o=>e.handleConfirm("warning")),color:"warning",class:"mr-2"},{default:t((()=>[h])),_:1}),i(T,{onClick:o[7]||(o[7]=o=>e.handleConfirm("success")),color:"success",class:"mr-2"},{default:t((()=>[j])),_:1}),i(T,{onClick:o[8]||(o[8]=o=>e.handleConfirm("error")),color:"error",class:"mr-2"},{default:t((()=>[M])),_:1})])),_:1}),i(E,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Modal"},{default:t((()=>[i(T,{onClick:e.handleInfoModal,class:"mr-2"},{default:t((()=>[_])),_:1},8,["onClick"]),i(T,{onClick:e.handleSuccessModal,color:"success",class:"mr-2"},{default:t((()=>[k])),_:1},8,["onClick"]),i(T,{onClick:e.handleErrorModal,color:"error",class:"mr-2"},{default:t((()=>[w])),_:1},8,["onClick"]),i(T,{onClick:e.handleWarningModal,color:"warning",class:"mr-2"},{default:t((()=>[x])),_:1},8,["onClick"])])),_:1}),i(E,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Notification 用法与上面一致"},{default:t((()=>[i(T,{onClick:e.handleNotify,color:"success",class:"mr-2"},{default:t((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1})};export default d;
