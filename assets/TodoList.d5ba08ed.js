import{d as t,b1 as s,cp as i,cq as o,h as e,o as a,i as l,j as d,aL as m,aM as n,l as r,m as p,bw as c}from"./index.8d47259d.js";import{L as u}from"./index.03f2ddf6.js";import"./index.b469a9ef.js";import"./index.61a494b6.js";import"./index.536a9ea9.js";import{T as f}from"./index.c9ca5f2c.js";/* empty css              */import{a as j}from"./index.f0041cf8.js";import{t as _}from"./data.aa527d47.js";import{E as b}from"./EllipsisOutlined.ac143bad.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.d8605098.js";import"./CheckOutlined.6d03f126.js";import"./DownOutlined.9a820ce4.js";import"./LeftOutlined.4109bee3.js";import"./RightOutlined.23eff149.js";import"./DoubleLeftOutlined.46581461.js";import"./DoubleRightOutlined.b467a1b1.js";import"./zh_CN.8094f4d6.js";import"./responsiveObserve.c545f1cc.js";import"./colors.dd4ad3f2.js";import"./index.be6382ea.js";import"./domUtils.958d292f.js";import"./_stringToArray.60f5614b.js";import"./useTimeout.b2057379.js";import"./useScrollTo.c394ad0f.js";import"./animation.8dadcc24.js";var L=t({name:"TodoList",components:{CollapseContainer:j,List:u,ListItem:u.Item,ListItemMeta:u.Item.Meta,Tag:f,Tooltip:s,EllipsisOutlined:b},setup:()=>({todoList:_})});const x=c("data-v-579679d3");i("data-v-579679d3");const O=d("span",null,[p(" 待办事项 "),d("span",{class:"todo-list__total"},"30")],-1),v={class:"todo-list__item-title"},T={class:"todo-list__item-memo"},h={class:"todo-list__item-desc"},I=d("br",null,null,-1),g=p(" 待审批 "),C={class:"todo-list__all"},E=p(" 查看更多 ");o();const M=x(((t,s,i,o,c,u)=>{const f=e("ListItemMeta"),j=e("Tag"),_=e("a-button"),b=e("ListItem"),L=e("List"),M=e("EllipsisOutlined"),k=e("Tooltip"),y=e("CollapseContainer");return a(),l(y,{class:"todo-list",title:"待办事项",canExpan:!1},{title:x((()=>[O])),default:x((()=>[d(L,null,{default:x((()=>[(a(!0),l(m,null,n(t.todoList,(t=>(a(),l(b,{key:t.id,class:"todo-list__item"},{default:x((()=>[d(f,null,{title:x((()=>[d("div",null,[d("span",v,r(t.title),1),d("span",T,r(t.memo),1)])])),description:x((()=>[d("div",h,[p(" 提交人："+r(t.sbmter)+" ",1),I,p(" 提交时间："+r(t.sbmtTime),1)])])),_:2},1024),d(_,{type:"link"},{default:x((()=>[d(j,{color:"blue"},{default:x((()=>[g])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1}),d("div",C,[d(k,{placement:"topRight"},{title:x((()=>[E])),default:x((()=>[d(M)])),_:1})])])),_:1})}));L.render=M,L.__scopeId="data-v-579679d3";export default L;