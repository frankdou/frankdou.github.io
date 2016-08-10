---
title: javascript让光标定位于input内容的最后
date: 2016-08-11 01:42:02
categories: js
tags:
  - js-utils
---
<blockquote class="blockquote-center">javascript让光标定位于input内容的最后</blockquote>
<!-- more -->
### 通用
```javascript
input.value = input.value
```

### firefox
```javascript
setTimeout(function() {
    var n = input.value.length
        input.setSelectionRange(n, n);
    input.focus()
}, 0)
```

```javascript
var n = input.value.length;
input.selectionStart = n;
input.selectionEnd = n;
```

### IE only
```javascript
var range = input.createTextRange(); //建立文本选区
range.moveStart('character', input.value.length); //选区的起点移到最后去
range.collapse(true);
range.select();
```
