import{b as n}from"./domUtils.ddd08864.js";import{b_ as e}from"./index.1d8b385f.js";const t=new Map;let o;function a(n,e){let t=[];return Array.isArray(e.arg)?t=e.arg:t.push(e.arg),function(o,a){const s=e.instance.popperRef,d=o.target,r=a.target,u=!e||!e.instance,i=!d||!r,c=n.contains(d)||n.contains(r),l=n===d,m=t.length&&t.some((n=>null==n?void 0:n.contains(d)))||t.length&&t.includes(r),p=s&&(s.contains(d)||s.contains(r));u||i||c||l||m||p||e.value()}}e||(n(document,"mousedown",(n=>o=n)),n(document,"mouseup",(n=>{for(const{documentHandler:e}of t.values())e(n,o)})));const s={beforeMount(n,e){t.set(n,{documentHandler:a(n,e),bindingFn:e.value})},updated(n,e){t.set(n,{documentHandler:a(n,e),bindingFn:e.value})},unmounted(n){t.delete(n)}};export{s as C};
