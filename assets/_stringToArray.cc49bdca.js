import{ci as f}from"./index.1d8b385f.js";function u(u,d,e){var n=u.length;return e=void 0===e?n:e,!d&&e>=n?u:f(u,d,e)}var d=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");function e(f){return d.test(f)}var n="[\\ud800-\\udfff]",t="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\\ud83c[\\udffb-\\udfff]",i="[^\\ud800-\\udfff]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",o="[\\ud800-\\udbff][\\udc00-\\udfff]",a="(?:"+t+"|"+r+")"+"?",s="[\\ufe0e\\ufe0f]?"+a+("(?:\\u200d(?:"+[i,c,o].join("|")+")[\\ufe0e\\ufe0f]?"+a+")*"),p="(?:"+[i+t+"?",t,c,o,n].join("|")+")",g=RegExp(r+"(?="+r+")|"+p+s,"g");function v(f){return e(f)?function(f){return f.match(g)||[]}(f):function(f){return f.split("")}(f)}export{u as c,e as h,v as s};
