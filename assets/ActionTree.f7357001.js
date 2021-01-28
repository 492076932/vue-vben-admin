import{B as e,t}from"./data.e323a8cb.js";import{a}from"./index.fd2324d6.js";import{d as n,r as s,g as l,e as d,h as o,o as i,i as r,w as c,j as f,m as p}from"./index.1d8b385f.js";import{_ as u}from"./index.7d324b6c.js";import"./index.e2a60846.js";import"./domUtils.ddd08864.js";import"./_stringToArray.cc49bdca.js";import"./RightOutlined.04567b90.js";import"./index.95c10fda.js";import"./useTimeout.b2101222.js";import"./useScrollTo.ff4d48ef.js";import"./animation.dd9fb5c4.js";import"./vendor.3b1829c7.js";import"./index.49ecf48a.js";import"./index.feda83ad.js";import"./EllipsisOutlined.2068088a.js";import"./types.40ed6fdc.js";import"./isEqual.93fdd584.js";import"./toInteger.416f421e.js";import"./DownOutlined.012ff21f.js";import"./index.9a7f22a8.js";import"./usePageContext.93c5f1fd.js";import"./transButton.f370e4a3.js";import"./ArrowLeftOutlined.277444d7.js";var m=n({components:{BasicTree:e,CollapseContainer:a,PageWrapper:u},setup(){const e=s(null),{createMessage:a}=l();function n(){const t=d(e);if(!t)throw new Error("tree is null!");return t}return{treeData:t,treeRef:e,handleLevel:function(e){n().filterByLevel(e)},handleSetCheckData:function(){n().setCheckedKeys(["0-0"])},handleGetCheckData:function(){const e=n().getCheckedKeys();a.success(JSON.stringify(e))},handleSetSelectData:function(){n().setSelectedKeys(["0-0"])},handleGetSelectData:function(){const e=n().getSelectedKeys();a.success(JSON.stringify(e))},handleSetExpandData:function(){n().setExpandedKeys(["0-0"])},handleGetExpandData:function(){const e=n().getExpandedKeys();a.success(JSON.stringify(e))},appendNodeByKey:function(e=null){n().insertNodeByKey({parentKey:e,node:{title:"新增节点",key:"2-2-2"},push:"push"})},deleteNodeByKey:function(e){n().deleteNodeByKey(e)},updateNodeByKey:function(e){n().updateNodeByKey(e,{title:"parent2-new"})}}}});const y={class:"mb-4"},C=p(" 显示到第2级 "),h=p(" 显示到第1级 "),k=p(" 设置勾选数据 "),j=p(" 获取勾选数据 "),x=p(" 设置选中数据 "),D=p(" 获取选中数据 "),K=p(" 设置展开数据 "),B=p(" 获取展开数据 "),S={class:"mb-4"},_=p(" 添加根节点 "),g=p(" 添加在parent3内添加节点 "),N=p(" 删除parent3节点 "),b=p(" 更新parent2节点 ");m.render=function(e,t,a,n,s,l){const d=o("a-button"),p=o("BasicTree"),u=o("CollapseContainer"),m=o("PageWrapper");return i(),r(m,{title:"Tree函数操作示例",contentBackground:"",contentClass:"p-4"},{default:c((()=>[f("div",y,[f(d,{onClick:t[1]||(t[1]=t=>e.handleLevel(2)),class:"mr-2"},{default:c((()=>[C])),_:1}),f(d,{onClick:t[2]||(t[2]=t=>e.handleLevel(1)),class:"mr-2"},{default:c((()=>[h])),_:1}),f(d,{onClick:e.handleSetCheckData,class:"mr-2"},{default:c((()=>[k])),_:1},8,["onClick"]),f(d,{onClick:e.handleGetCheckData,class:"mr-2"},{default:c((()=>[j])),_:1},8,["onClick"]),f(d,{onClick:e.handleSetSelectData,class:"mr-2"},{default:c((()=>[x])),_:1},8,["onClick"]),f(d,{onClick:e.handleGetSelectData,class:"mr-2"},{default:c((()=>[D])),_:1},8,["onClick"]),f(d,{onClick:e.handleSetExpandData,class:"mr-2"},{default:c((()=>[K])),_:1},8,["onClick"]),f(d,{onClick:e.handleGetExpandData,class:"mr-2"},{default:c((()=>[B])),_:1},8,["onClick"])]),f("div",S,[f(d,{onClick:t[3]||(t[3]=t=>e.appendNodeByKey(null)),class:"mr-2"},{default:c((()=>[_])),_:1}),f(d,{onClick:t[4]||(t[4]=t=>e.appendNodeByKey("2-2")),class:"mr-2"},{default:c((()=>[g])),_:1}),f(d,{onClick:t[5]||(t[5]=t=>e.deleteNodeByKey("2-2")),class:"mr-2"},{default:c((()=>[N])),_:1}),f(d,{onClick:t[6]||(t[6]=t=>e.updateNodeByKey("1-1")),class:"mr-2"},{default:c((()=>[b])),_:1})]),f(u,{title:"函数操作",class:"mr-4",canExpan:!1,style:{width:"33%"}},{default:c((()=>[f(p,{treeData:e.treeData,ref:"treeRef",checkable:!0},null,8,["treeData"])])),_:1})])),_:1})};export default m;
