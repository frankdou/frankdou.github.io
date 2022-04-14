(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[811],{6981:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/es6/Set",function(){return t(829)}])},250:function(e,n,t){"use strict";var a=t(5893);n.Z={defaultMenuCollapsed:!0,head:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{name:"description",content:"\u524d\u7aef\u7b14\u8bb0"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-title",content:"\u524d\u7aef\u7b14\u8bb0"})]})}},829:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var a=t(5893),s=t(5716),r=t(3805),o=t(250),l=t(1151);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){c(e,n,t[n])}))}return e}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=function(){var n=Object.assign({p:"p",pre:"pre",code:"code",h5:"h5"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Set\u5bf9\u8c61\u662f\u503c\u7684\u96c6\u5408\uff0c\u53ef\u4ee5\u6309\u7167\u63d2\u5165\u7684\u987a\u5e8f\u8fed\u4ee3\u5b83\u7684\u5143\u7d20\uff0c\u6210\u5458\u7684\u503c\u90fd\u662f\u552f\u4e00\u7684"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'let mySet = new Set();\n\nmySet.add(1); // Set [ 1 ]\nmySet.add(5); // Set [ 1, 5 ]\nmySet.add("some text"); // Set [ 1, 5, "some text" ]\n\nlet o = {a: 1, b: 2}; \nmySet.add(o);  // Set { 1, 5, \'some text\', { a: 1, b: 2 } }\nmySet.add({a: 1, b: 2}); \n// \u4e0d\u662f\u540c\u4e2a\u6307\u5411\uff0c\u6240\u4ee5\u4f1a\u88ab\u6dfb\u52a0\n// Set { 1, 5, \'some text\', { a: 1, b: 2 }, { a: 1, b: 2 } }\n\nconsole.log(mySet.has(1)); // true\nconsole.log(mySet.has(3)); // false\nconsole.log(mySet.has(5)); // true\nconsole.log(mySet.has("Some Text".toLowerCase())); // true\nconsole.log(mySet.has(o)); // true\nconsole.log(mySet.has({a: 1, b: 2})); // false\nconsole.log(mySet.size); // 5\n\nmySet.delete(5);  // true,  \u4eceset\u4e2d\u79fb\u96645\nmySet.has(5);     // false, 5\u5df2\u7ecf\u88ab\u79fb\u9664\nmySet.size; // 4, \u521a\u521a\u79fb\u9664\u4e00\u4e2a\u503c\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'for (let item of mySet) console.log(item);\nfor (let item of mySet.keys()) console.log(item);\nfor (let item of mySet.values()) console.log(item);\n\n// \u6309\u987a\u5e8f\u8f93\u51fa\uff1a1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}\n\nconsole.log(mySet.entries());\n// [Set Entries] {\n//     [ 1, 1 ],\n//     [ 5, 5 ],\n//     [ \'some text\', \'some text\' ],\n//     [ { a: 1, b: 2 }, { a: 1, b: 2 } ],\n//     [ { a: 1, b: 2 }, { a: 1, b: 2 } ]\n//   }\n'})}),"\n",(0,a.jsx)(n.h5,{children:"\u8f6c\u6362Set\u4e3aArray"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'// [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]\nArray.from(mySet); \n'})}),"\n",(0,a.jsx)(n.h5,{children:"\u5c06Array\u8f6c\u6362\u4e3aSet"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'new Set(["value1", "value2", "value3"])\n// Set(3)\xa0{"value1", "value2", "value3"}\n'})}),"\n",(0,a.jsx)(n.h5,{children:"\u6c42\u4ea4\u96c6"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"new Set([...set1].filter(x => set2.has(x)));\n"})}),"\n",(0,a.jsx)(n.h5,{children:"\u6c42\u5dee\u96c6"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"new Set([...set1].filter(x => !set2.has(x)))\n"})}),"\n",(0,a.jsx)(n.h5,{children:"string"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"console.log(new Set('India'));\n// Set { 'I', 'n', 'd', 'i', 'a' }\n"})}),"\n",(0,a.jsx)(n.h5,{children:"Set\u8ba4\u4e3aNaN\u7b49\u4e8e\u81ea\u8eab\uff0c\u800c\u7cbe\u786e\u76f8\u7b49\u8fd0\u7b97\u7b26\uff08===\uff09\u8ba4\u4e3aNaN\u4e0d\u7b49\u4e8e\u81ea\u8eab"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"let set = new Set();\nlet a = NaN;\nlet b = NaN;\nset.add(a);\nset.add(b);\n\n// Set { NaN }\n// true\n// true\nconsole.log(set);\nconsole.log(set.has(a));\nconsole.log(set.has(b));\n"})})]})},t=Object.assign({},(0,l.ah)(),e.components),s=t.wrapper;return s?(0,a.jsx)(s,i({},e,{children:(0,a.jsx)(n,{})})):n()}var u=(0,a.jsx)(m,{});function d(e){return(0,r.withSSG)((0,s.Z)({filename:"Set.md",route:"/es6/Set",meta:{},pageMap:[{name:"es6",children:[{name:"Class",route:"/es6/Class"},{name:"Intl",route:"/es6/Intl"},{name:"Map",route:"/es6/Map"},{name:"Proxy",route:"/es6/Proxy"},{name:"Reflect",route:"/es6/Reflect"},{name:"Set",route:"/es6/Set"},{name:"Symbol",route:"/es6/Symbol"},{name:"WeakMap",route:"/es6/WeakMap"},{name:"WeakSet",route:"/es6/WeakSet"}],route:"/es6"},{name:"index",route:"/",frontMatter:{type:"page",title:"About",date:"2021-03-19T00:00:00.000Z"}}]},o.Z))(i({},e,{children:u}))}}},function(e){e.O(0,[847,774,888,179],(function(){return n=6981,e(e.s=n);var n}));var n=e.O();_N_E=n}]);