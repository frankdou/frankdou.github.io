---
title: angular filters
date: 2016-08-11 01:17:23
categories: angular
tags:
    - angular
---
<blockquote class="blockquote-center">angular filters</blockquote>
<!-- more -->

### 文件总类
```javascript
.filter('fileType', function() {
    return function(text) {
        var aType = text.split('.'),
            sType = aType[aType.length - 1].toUpperCase();

        switch (sType) {
            case 'MP3':
            case 'FLV':
            case 'RMVB':
            case 'WMV':
                sType = 'media';
                break;
            case 'PPT':
            case 'PDF':
            case 'DOC':
            case 'XLS':
            case 'MD':
                sType = 'doc';
                break;
            case 'TXT':
            case 'JS':
            case 'HTML':
            case 'XML':
                sType = 'plain';
                break;
            default:
                sType = '';
                break;
        }

        return sType;
    }
})
```

### 文件类型
```javascript
.filter('fileType', function() {
    return function(text) {
        var aType = text.split('.');
        return aType[aType.length - 1].toUpperCase();
    }
})
```

### 文件大小
```javascript
.filter('descSize', function () {
    return function (text) {
        var str = '';

        if (text > 1048576) {
            str = (text/1048576).toFixed(1) + 'MB';
        } else {
            str = (text/1024).toFixed(1) + 'KB';
        }

        return str;
    }
})
```

### json格式化输出
```javascript
.filter('beautifyJson', function() {
    return function(json) {
        var str = angular.copy(json);

        return JSON.stringify(str, null, 4);
    }
})
```
