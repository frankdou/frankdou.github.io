---
title: gulp-helper
date: 2016-08-10 22:51:01
categories: js
tags:
  - gulp
---
<blockquote class="blockquote-center">gulp技巧汇总</blockquote>
<!-- more -->
1.监听shell事件执行完毕

```javascript
gulp.task('xxxx', function() {
    return gulp.src('')
        .pipe(plugins.shell(['cat xx.js']))
        <!-- .on('end', browserSync.reload) -->
        .resume();
})
```

To be continue!
