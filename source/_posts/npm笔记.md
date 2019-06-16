---
title: NPM笔记
date: 2018-07-24 23:31:32
categories: npm
tags:
    - npm
---
<blockquote class="blockquote-center">NPM笔记</blockquote>
<!-- more -->

### 全局模块查看
```bash
npm ls -g -depth=0
```


### npm link
[ref](https://github.com/atian25/blog/issues/17)

```bash
# 先去到模块目录，把它 link 到全局
cd path/to/component
npm link

# 查看 npm ls -g -depth=0
aaa@1.0.0 -> /Users/xxx/aaa

# 再去项目进行link
cd path/to/project
npm link aaa

# 解除link
cd path/to/component
npm unlink
```