---
title: '让selectize.js支持IE6的办法'
date: 2016-08-11 00:54:23
categories: js
tags:
    - js
---
<blockquote class="blockquote-center">让selectize.js支持IE6的办法</blockquote>
<!-- more -->

### 文件加载
```html
<!--[if lt IE 9]><script src="http://cdnjs.cloudflare.com/ajax/libs/es5-shim/2.0.8/es5-shim.min.js"></script><![endif]-->
<script src="jquery.js"></script>
<!--stand along version-->
<script src="https://raw.githubusercontent.com/brianreavis/selectize.js/v0.11.2/dist/js/selectize.min.js"></script>
```

### CSS覆盖
```css
.selectize-control{
  width: 500px;
}
.selectize-input{
  background: #ffffff;
  cursor: text;
  border: 1px solid #d0d0d0;
  width: 100%;
  overflow: hidden;
  padding: 6px 0;
}
.selectize-input .item{
  cursor: pointer;
  margin: 6px;
  padding: 2px 6px;
  background: #f2f2f2;
  color: #303030;
  border: 0 solid #d0d0d0;
  vertical-align: baseline;
  float: left;
  white-space: nowrap;/* for ie */
  zoom: 1;
}
.selectize-input .item.active{
  border: 1px solid #ccc;
  padding: 1px 5px;
}
.selectize-input input {
  color: #303030;
  font-family: inherit;
  font-size: 14px;
  float: left !important;
  min-height: 0 !important;
  max-height: none !important;
  max-width: 100% !important;
  margin-top: 12px !important;
  margin-left: 6px !important;
  text-indent: 0 !important;
  border: 0 none !important;
  background: none !important;
  -webkit-user-select: auto !important;
}
.selectize-input input:focus {
  outline: none !important;
}
.selectize-input:after {
  content: ' ';
  display: block;
  clear: left;
}
/*dropdown*/
.selectize-dropdown {
  position: absolute;/* for ie */
  z-index: 100;
  background: #fff;
}
.selectize-dropdown-content {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 200px;
  border: 1px solid #d0d0d0;
  margin: -1px 0 0 0;
  border-top: 0 none;
  background: #fff;
}
.selectize-dropdown .option, .selectize-dropdown .create{
  cursor: pointer;
  display: block;
  width: 100%;
  overflow: hidden;
  padding: 6px;
}
.selectize-dropdown .option.active, .selectize-dropdown .create.active{
  background-color: #f5fafd;
  color: #495c68;
}
/*common*/
.selectize-dropdown, .selectize-input{
  color: #303030;
  font-size: 14px;
}
```

### js执行
```javascript
    dTarget.selectize({
        create: true,
        createOnBlur: true,
        persist: false,
        maxItems: null,
        valueField: 'value',
        labelField: 'value',
        searchField: ['value'],
        options: [{
            "value": "港剧"
        }, {
            "value": "韩剧"
        }, {
            "value": "美剧"
        }],
        render: {
            item: function(item, escape) {
                return '<div class="item">' + escape(item.value) + '</div>';
            },
            option: function(item, escape) {
                return '<a class="option">' + escape(item.value) + '</a>';
            }
        }
    });
```
