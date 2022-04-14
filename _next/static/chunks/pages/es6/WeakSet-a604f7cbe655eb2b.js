(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[150],{1897:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/es6/WeakSet",function(){return t(5726)}])},250:function(e,n,t){"use strict";var a=t(5893);n.Z={defaultMenuCollapsed:!0,head:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{name:"description",content:"\u524d\u7aef\u7b14\u8bb0"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-title",content:"\u524d\u7aef\u7b14\u8bb0"})]})}},5726:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var a=t(5893),r=t(5716),s=t(3805),o=t(250),l=t(1151);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){c(e,n,t[n])}))}return e}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=function(){var n=Object.assign({h5:"h5",pre:"pre",code:"code",ul:"ul",li:"li",p:"p"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h5,{children:"\u6210\u5458\u53ea\u80fd\u662f\u5bf9\u8c61\uff0c\u800c\u4e0d\u80fd\u662f\u5176\u4ed6\u7c7b\u578b\u7684\u503c"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'const a = [[1, 2], [3, 4]];\nconst b = [3, 4];\n\n// WeakSet {[1, 2], [3, 4]}\nconsole.log(new WeakSet(a));\n\n// \u6ce8\u610f\u662f\u6210\u5458\uff0c\u800c\u4e0d\u662f\u81ea\u8eab\n// TypeError: Invalid value used in weak set\nconsole.log(new WeakSet(b));\n\n\nlet myWeakSet = new WeakSet();\n\nmyWeakSet.add(1); //TypeError: Invalid value used in weak set\nmyWeakSet.add("some text"); // TypeError: Invalid value used in weak set\nmyWeakSet.add(Symbol()) // TypeError: Invalid value used in weak set\n'})}),"\n",(0,a.jsx)(n.h5,{children:"\u6ca1\u6709size\u5c5e\u6027\uff0c\u6ca1\u6709\u529e\u6cd5\u904d\u5386\u5b83\u7684\u6210\u5458"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u6210\u5458\u90fd\u662f\u5f31\u5f15\u7528\uff0c\u968f\u65f6\u53ef\u80fd\u6d88\u5931\uff0c\u904d\u5386\u673a\u5236\u65e0\u6cd5\u4fdd\u8bc1\u6210\u5458\u7684\u5b58\u5728\uff0c\u5f88\u53ef\u80fd\u521a\u521a\u904d\u5386\u7ed3\u675f\uff0c\u6210\u5458\u5c31\u53d6\u4e0d\u5230\u4e86"}),"\n",(0,a.jsx)(n.li,{children:"WeakSet\u6ca1\u6709\u5b58\u50a8\u5f53\u524d\u5bf9\u8c61\u7684\u5217\u8868\u3002 \u6b63\u56e0\u4e3a\u8fd9\u6837\uff0cWeakSet \u662f\u4e0d\u53ef\u679a\u4e3e\u7684"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"let ws = new WeakSet();\n\nconsole.log(ws.size); // undefined\nconsole.log(ws.forEach); // undefined\n\n// TypeError: ws.forEach is not a function\nws.forEach((item) => { console.log('WeakSet has ' + item)})\n\n// TypeError: ws is not iterable\nfor (let i of ws) {\n    console.log(i);\n}\n"})}),"\n",(0,a.jsx)(n.h5,{children:"\u5f31\u5f15\u7528\u6d4b\u8bd5"}),"\n",(0,a.jsx)(n.p,{children:"Node"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"// \u624b\u52a8\u6267\u884c\u5783\u573e\u56de\u6536\u673a\u5236\nnode --expose-gc\n\n// \u624b\u52a8\u6267\u884c\u4e00\u6b21\u5783\u573e\u56de\u6536\uff0c\u4fdd\u8bc1\u83b7\u53d6\u7684\u5185\u5b58\u4f7f\u7528\u72b6\u6001\u51c6\u786e\nglobal.gc();\n\n// \u67e5\u770b\u5185\u5b58\u5360\u7528\u7684\u521d\u59cb\u72b6\u6001\uff0cheapUsed \u4e3a 2M \u5de6\u53f3\nprocess.memoryUsage();\n\n\nlet ws = new WeakSet();\nlet arr = [new Array(5 * 1024 * 1024)]\n\nws.add(arr)\n\nglobal.gc();\n\n// \u67e5\u770b\u5185\u5b58\u5360\u7528\u72b6\u6001\uff0cheapUsed \u4e3a 42M \u5de6\u53f3\nprocess.memoryUsage();\n\n// \u6e05\u9664\u53d8\u91cf arr \u7684\u5f15\u7528\n// \u4f46\u6ca1\u6709\u624b\u52a8\u6e05\u9664 WeakSet \u5bf9\u5b83\u7684\u5f15\u7528\narr = null\n\n// \u518d\u6b21\u6267\u884c\u5783\u573e\u56de\u6536\nglobal.gc();\n\n// \u67e5\u770b\u5185\u5b58\u5360\u7528\u72b6\u6001\uff0cheapUsed\u56de\u5230 2M \u5de6\u53f3\nprocess.memoryUsage();\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6d4f\u89c8\u5668"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"<div id=\"target\">target</div>\n<div id=\"remove\">remove</div>\n<div id=\"check\">check</div>\n\n\nlet myWeakset = new WeakSet();\n\ndocument.getElementById('target').addEventListener('click', function () {\n    myWeakset.add(document.getElementById('target'))\n    console.log(myWeakset);\n}, false);\n\ndocument.getElementById('remove').addEventListener('click', function () {\n    document.getElementById('target').remove()\n}, false);\n\ndocument.getElementById('check').addEventListener('click', function () {\n    console.log(myWeakset);\n}, false);\n\n//\u5f53remove\u4e4b\u540e\uff0cmyWeakset\u4f1a\u7f6e\u7a7a\xa0{}\n"})})]})},t=Object.assign({},(0,l.ah)(),e.components),r=t.wrapper;return r?(0,a.jsx)(r,i({},e,{children:(0,a.jsx)(n,{})})):n()}var u=(0,a.jsx)(d,{});function m(e){return(0,s.withSSG)((0,r.Z)({filename:"WeakSet.md",route:"/es6/WeakSet",meta:{},pageMap:[{name:"es6",children:[{name:"Class",route:"/es6/Class"},{name:"Intl",route:"/es6/Intl"},{name:"Map",route:"/es6/Map"},{name:"Proxy",route:"/es6/Proxy"},{name:"Reflect",route:"/es6/Reflect"},{name:"Set",route:"/es6/Set"},{name:"Symbol",route:"/es6/Symbol"},{name:"WeakMap",route:"/es6/WeakMap"},{name:"WeakSet",route:"/es6/WeakSet"}],route:"/es6"},{name:"index",route:"/",frontMatter:{type:"page",title:"About",date:"2021-03-19T00:00:00.000Z"}}]},o.Z))(i({},e,{children:u}))}}},function(e){e.O(0,[847,774,888,179],(function(){return n=1897,e(e.s=n);var n}));var n=e.O();_N_E=n}]);