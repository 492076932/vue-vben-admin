import{a$ as e,b0 as t,b1 as a,b2 as o,as as r,b3 as n,b4 as m,aE as s,s as d,b5 as i,f as u,aX as p,az as h,at as c,aA as l}from"./index.741c7e80.js";function f(e,t){void 0===t&&(t={});for(var a=function(e){for(var t=[],a=0;a<e.length;){var o=e[a];if("*"!==o&&"+"!==o&&"?"!==o)if("\\"!==o)if("{"!==o)if("}"!==o)if(":"!==o)if("("!==o)t.push({type:"CHAR",index:a,value:e[a++]});else{var r=1,n="";if("?"===e[s=a+1])throw new TypeError('Pattern cannot start with "?" at '+s);for(;s<e.length;)if("\\"!==e[s]){if(")"===e[s]){if(0==--r){s++;break}}else if("("===e[s]&&(r++,"?"!==e[s+1]))throw new TypeError("Capturing groups are not allowed at "+s);n+=e[s++]}else n+=e[s++]+e[s++];if(r)throw new TypeError("Unbalanced pattern at "+a);if(!n)throw new TypeError("Missing pattern at "+a);t.push({type:"PATTERN",index:a,value:n}),a=s}else{for(var m="",s=a+1;s<e.length;){var d=e.charCodeAt(s);if(!(d>=48&&d<=57||d>=65&&d<=90||d>=97&&d<=122||95===d))break;m+=e[s++]}if(!m)throw new TypeError("Missing parameter name at "+a);t.push({type:"NAME",index:a,value:m}),a=s}else t.push({type:"CLOSE",index:a,value:e[a++]});else t.push({type:"OPEN",index:a,value:e[a++]});else t.push({type:"ESCAPED_CHAR",index:a++,value:e[a++]});else t.push({type:"MODIFIER",index:a,value:e[a++]})}return t.push({type:"END",index:a,value:""}),t}(e),o=t.prefixes,r=void 0===o?"./":o,n="[^"+g(t.delimiter||"/#?")+"]+?",m=[],s=0,d=0,i="",u=function(e){if(d<a.length&&a[d].type===e)return a[d++].value},p=function(e){var t=u(e);if(void 0!==t)return t;var o=a[d],r=o.type,n=o.index;throw new TypeError("Unexpected "+r+" at "+n+", expected "+e)},h=function(){for(var e,t="";e=u("CHAR")||u("ESCAPED_CHAR");)t+=e;return t};d<a.length;){var c=u("CHAR"),l=u("NAME"),f=u("PATTERN");if(l||f){var b=c||"";-1===r.indexOf(b)&&(i+=b,b=""),i&&(m.push(i),i=""),m.push({name:l||s++,prefix:b,suffix:"",pattern:f||n,modifier:u("MODIFIER")||""})}else{var w=c||u("ESCAPED_CHAR");if(w)i+=w;else if(i&&(m.push(i),i=""),u("OPEN")){b=h();var x=u("NAME")||"",v=u("PATTERN")||"",y=h();p("CLOSE"),m.push({name:x||(v?s++:""),pattern:x&&!v?n:v,prefix:b,suffix:y,modifier:u("MODIFIER")||""})}else p("END")}}return m}function g(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function b(e){return e&&e.sensitive?"":"i"}function w(e,t,a){return function(e,t,a){void 0===a&&(a={});for(var o=a.strict,r=void 0!==o&&o,n=a.start,m=void 0===n||n,s=a.end,d=void 0===s||s,i=a.encode,u=void 0===i?function(e){return e}:i,p="["+g(a.endsWith||"")+"]|$",h="["+g(a.delimiter||"/#?")+"]",c=m?"^":"",l=0,f=e;l<f.length;l++){var w=f[l];if("string"==typeof w)c+=g(u(w));else{var x=g(u(w.prefix)),v=g(u(w.suffix));if(w.pattern)if(t&&t.push(w),x||v)if("+"===w.modifier||"*"===w.modifier){var y="*"===w.modifier?"?":"";c+="(?:"+x+"((?:"+w.pattern+")(?:"+v+x+"(?:"+w.pattern+"))*)"+v+")"+y}else c+="(?:"+x+"("+w.pattern+")"+v+")"+w.modifier;else c+="("+w.pattern+")"+w.modifier;else c+="(?:"+x+v+")"+w.modifier}}if(d)r||(c+=h+"?"),c+=a.endsWith?"(?="+p+")":"$";else{var T=e[e.length-1],E="string"==typeof T?h.indexOf(T[T.length-1])>-1:void 0===T;r||(c+="(?:"+h+"(?="+p+"))?"),E||(c+="(?="+h+"|"+p+")")}return new RegExp(c,b(a))}(f(e,a),t,a)}function x(e,t,a){return e instanceof RegExp?function(e,t){if(!t)return e;for(var a=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,r=a.exec(e.source);r;)t.push({name:r[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),r=a.exec(e.source);return e}(e,t):Array.isArray(e)?function(e,t,a){var o=e.map((function(e){return x(e,t,a).source}));return new RegExp("(?:"+o.join("|")+")",b(a))}(e,t,a):w(e,t,a)}const v={modules0:{orderNo:10,menu:{name:e("routes.dashboard.dashboard"),path:"/dashboard",children:[{path:"/workbench",name:e("routes.dashboard.workbench")},{path:"/analysis",name:e("routes.dashboard.analysis")}]}},modules1:{orderNo:500,menu:{name:e("routes.demo.charts.charts"),path:"/charts",children:[{path:"apexChart",name:e("routes.demo.charts.apexChart")},{path:"echarts",name:"Echarts",children:[{path:"map",name:e("routes.demo.charts.map")},{path:"line",name:e("routes.demo.charts.line")},{path:"pie",name:e("routes.demo.charts.pie")}]}]}},modules2:{orderNo:30,menu:{name:e("routes.demo.comp.comp"),path:"/comp",tag:{dot:!0},children:[{path:"basic",name:e("routes.demo.comp.basic")},{path:"countTo",name:e("routes.demo.comp.countTo")},{path:"transition",name:e("routes.demo.comp.transition")},{path:"modal",name:e("routes.demo.comp.modal")},{path:"drawer",name:e("routes.demo.comp.drawer")},{path:"desc",name:e("routes.demo.comp.desc")},{path:"qrcode",name:e("routes.demo.comp.qrcode")},{path:"strength-meter",name:e("routes.demo.comp.strength")},{path:"upload",name:e("routes.demo.comp.upload")},{path:"loading",name:e("routes.demo.comp.loading"),tag:{content:"new"}},{path:"scroll",name:e("routes.demo.comp.scroll"),children:[{path:"basic",name:e("routes.demo.comp.scrollBasic")},{path:"action",name:e("routes.demo.comp.scrollAction")},{path:"virtualScroll",name:e("routes.demo.comp.virtualScroll")}]},{path:"lazy",name:e("routes.demo.comp.lazy"),children:[{path:"basic",name:e("routes.demo.comp.lazyBasic")},{path:"transition",name:e("routes.demo.comp.lazyTransition")}]},{path:"verify",name:e("routes.demo.comp.verify"),children:[{path:"drag",name:e("routes.demo.comp.verifyDrag")},{path:"rotate",name:e("routes.demo.comp.verifyRotate")}]}]}},modules3:{orderNo:500,menu:{name:e("routes.demo.editor.editor"),path:"/editor",children:[{path:"markdown",name:e("routes.demo.editor.markdown")},{path:"tinymce",name:e("routes.demo.editor.tinymce"),children:[{path:"index",name:e("routes.demo.editor.tinymceBasic")},{path:"editor",name:e("routes.demo.editor.tinymceForm")}]}]}},modules4:{orderNo:500,menu:{name:e("routes.demo.excel.excel"),path:"/excel",children:[{path:"customExport",name:e("routes.demo.excel.customExport")},{path:"jsonExport",name:e("routes.demo.excel.jsonExport")},{path:"arrayExport",name:e("routes.demo.excel.arrayExport")},{path:"importExcel",name:e("routes.demo.excel.importExcel")}]}},modules5:{orderNo:19,menu:{name:e("routes.demo.feat.feat"),path:"/feat",children:[{path:"icon",name:e("routes.demo.feat.icon")},{path:"tabs",name:e("routes.demo.feat.tabs")},{path:"context-menu",name:e("routes.demo.feat.contextMenu")},{path:"download",name:e("routes.demo.feat.download")},{path:"click-out-side",name:e("routes.demo.feat.clickOutSide")},{path:"img-preview",name:e("routes.demo.feat.imgPreview")},{path:"copy",name:e("routes.demo.feat.copy")},{path:"msg",name:e("routes.demo.feat.msg")},{path:"watermark",name:e("routes.demo.feat.watermark")},{path:"full-screen",name:e("routes.demo.feat.fullScreen")},{path:"error-log",name:e("routes.demo.feat.errorLog")},{path:"testTab",name:e("routes.demo.feat.tab"),children:[{path:"id1",name:e("routes.demo.feat.tab1")},{path:"id2",name:e("routes.demo.feat.tab2")}]}]}},modules6:{orderNo:40,menu:{path:"/form",name:e("routes.demo.form.form"),children:[{path:"basic",name:e("routes.demo.form.basic")},{path:"useForm",name:e("routes.demo.form.useForm")},{path:"refForm",name:e("routes.demo.form.refForm")},{path:"advancedForm",name:e("routes.demo.form.advancedForm")},{path:"ruleForm",name:e("routes.demo.form.ruleForm")},{path:"dynamicForm",name:e("routes.demo.form.dynamicForm")},{path:"customerForm",name:e("routes.demo.form.customerForm")}]}},modules7:{orderNo:1e3,menu:{name:e("routes.demo.iframe.frame"),path:"/frame",children:[{path:"antv",name:e("routes.demo.iframe.antv")},{path:"doc",name:e("routes.demo.iframe.doc")},{path:"https://vvbin.cn/doc-next/",name:e("routes.demo.iframe.docExternal")}]}},modules8:{orderNo:2e3,menu:{name:e("routes.demo.level.level"),path:"/level",tag:{dot:!0},children:[{path:"menu1",name:"Menu1",children:[{path:"menu1-1",name:"Menu1-1",children:[{path:"menu1-1-1",name:"Menu1-1-1"}]},{path:"menu1-2",name:"Menu1-2"}]},{path:"menu2",name:"Menu2"}]}},modules9:{orderNo:20,menu:{name:e("routes.demo.page.page"),path:"/page-demo",tag:{dot:!0},children:[{path:"form",name:e("routes.demo.page.form"),children:[{path:"basic",name:e("routes.demo.page.formBasic")},{path:"step",name:e("routes.demo.page.formStep")},{path:"high",name:e("routes.demo.page.formHigh")}]},{path:"desc",name:e("routes.demo.page.desc"),children:[{path:"basic",name:e("routes.demo.page.descBasic")},{path:"high",name:e("routes.demo.page.descHigh")}]},{path:"result",name:e("routes.demo.page.result"),children:[{path:"success",name:e("routes.demo.page.resultSuccess")},{path:"fail",name:e("routes.demo.page.resultFail")}]},{path:"exception",name:e("routes.demo.page.exception"),children:[{path:"403",name:e("403")},{path:"404",name:e("404")},{path:"500",name:e("500")},{path:"net-work-error",name:e("routes.demo.page.netWorkError")},{path:"not-data",name:e("routes.demo.page.notData")}]},{path:"account",name:e("routes.demo.page.account"),children:[{path:"center",name:e("routes.demo.page.accountCenter")},{path:"setting",name:e("routes.demo.page.accountSetting")}]},{path:"list",name:e("routes.demo.page.list"),tag:{content:"new"},children:[{path:"basic",name:e("routes.demo.page.listBasic")},{path:"card",name:e("routes.demo.page.listCard")},{path:"search",name:e("routes.demo.page.listSearch")}]}]}},modules10:{orderNo:15,menu:{name:e("routes.demo.permission.permission"),path:"/permission",children:[{path:"front",name:e("routes.demo.permission.front"),children:[{path:"page",name:e("routes.demo.permission.frontPage")},{path:"btn",name:e("routes.demo.permission.frontBtn")},{path:"auth-pageA",name:e("routes.demo.permission.frontTestA")},{path:"auth-pageB",name:e("routes.demo.permission.frontTestB")}]},{path:"back",name:e("routes.demo.permission.back"),children:[{path:"page",name:e("routes.demo.permission.backPage")},{path:"btn",name:e("routes.demo.permission.backBtn")}]}]}},modules11:{orderNo:30,menu:{path:"/table",name:e("routes.demo.table.table"),children:[{path:"basic",name:e("routes.demo.table.basic")},{path:"treeTable",name:e("routes.demo.table.treeTable")},{path:"fetchTable",name:e("routes.demo.table.fetchTable")},{path:"fixedColumn",name:e("routes.demo.table.fixedColumn")},{path:"customerCell",name:e("routes.demo.table.customerCell")},{path:"formTable",name:e("routes.demo.table.formTable")},{path:"useTable",name:e("routes.demo.table.useTable")},{path:"refTable",name:e("routes.demo.table.refTable")},{path:"multipleHeader",name:e("routes.demo.table.multipleHeader")},{path:"mergeHeader",name:e("routes.demo.table.mergeHeader")},{path:"expandTable",name:e("routes.demo.table.expandTable")},{path:"fixedHeight",name:e("routes.demo.table.fixedHeight")},{path:"footerTable",name:e("routes.demo.table.footerTable")},{path:"editCellTable",name:e("routes.demo.table.editCellTable")},{path:"editRowTable",name:e("routes.demo.table.editRowTable")}]}},modules12:{orderNo:50,menu:{path:"/tree",name:e("routes.demo.tree.tree"),children:[{path:"basic",name:e("routes.demo.tree.basic")},{path:"editTree",name:e("routes.demo.tree.editTree")},{path:"actionTree",name:e("routes.demo.tree.actionTree")}]}},modules13:{orderNo:0,menu:{path:"/home/welcome",name:e("routes.dashboard.welcome")}}},y=/(((https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/,T=[];Object.keys(v).forEach((e=>{const t=v[e],a=Array.isArray(t)?[...t]:[t];T.push(...a)}));const E=()=>a.getProjectConfig.permissionMode===o.BACK,S=[];async function C(){return E()?r.getBackMenuListState:S}(()=>{T.sort(((e,t)=>(e.orderNo||0)-(t.orderNo||0)));for(const e of T)S.push(t(e))})();const A=async()=>{const e=await C(),t=s.getRoutes();return E()?e:m(e,R(t))};async function N(e){const t=await C(),a=await n(t,e);return null==a?void 0:a[0]}async function H(){const e=await C(),t=s.getRoutes(),a=e.map((e=>({...e,children:void 0})));return E()?a:a.filter(R(t))}async function F(e){const t=(await C()).find((t=>t.path===e));return t?t.children:[]}function R(e){return t=>{const a=e.find((e=>{var a,o,r;const n=null==(a=e.path.match(y))?void 0:a[0];if(n&&n===t.path)return!0;if(null==(o=e.meta)?void 0:o.carryParam)return x(e.path).test(t.path);const m=e.path===t.path;return!!m&&(!!(null==(r=e.meta)?void 0:r.ignoreAuth)||(m||x(e.path).test(t.path)))}));return!!a&&(t.icon=t.icon||a.meta.icon,t.meta=a.meta,!0)}}function M(){const e=i();return{getIsMobile:d((()=>u(e.isMobile)))}}const{getFullContent:k}=p(),{getMenuMode:P,getSplit:B,getShowHeaderTrigger:O,getIsSidebarType:D,getIsTopMenu:I}=c(),{getShowBreadCrumb:L,getShowLogo:j}=l(),$=d((()=>!u(D)&&u(q))),z=d((()=>!u(k)&&u($)&&u(q)&&!u(I))),_=d((()=>{const e=!u(k)&&u(q);return e&&!u($)||e&&u(I)})),U=d((()=>a.getProjectConfig.headerSetting)),W=d((()=>u(U).showDoc)),Z=d((()=>u(U).theme)),q=d((()=>u(U).show)),K=d((()=>u(U).fixed)),X=d((()=>u(U).bgColor)),G=d((()=>u(U).showSearch)),J=d((()=>u(U).useLockPage)),Q=d((()=>u(U).showFullScreen)),V=d((()=>u(U).showNotice)),Y=d((()=>!u(K)&&!u(z))),ee=d((()=>u(P)!==h.HORIZONTAL&&u(L)&&!u(B))),te=d((()=>u(j)&&!u(D))),ae=d((()=>u(ee)||u(O)));function oe(e){a.commitProjectConfigState({headerSetting:e})}function re(){return{setHeaderSetting:oe,getHeaderSetting:U,getShowDoc:W,getShowSearch:G,getHeaderTheme:Z,getUseLockPage:J,getShowFullScreen:Q,getShowNotice:V,getShowBread:ee,getShowContent:ae,getShowHeaderLogo:te,getShowHeader:q,getFixed:K,getShowMixHeaderRef:$,getShowFullHeaderRef:z,getShowInsetHeaderRef:_,getUnFixedAndFull:Y,getHeaderBgColor:X}}export{F as a,A as b,H as c,re as d,N as g,M as u};