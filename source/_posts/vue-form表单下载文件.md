---
title: vue通过form表单下载文件
date: 2018-12-16 17:44:26
categories: vue
tags:
    - vue
    - js-utils
---
<blockquote class="blockquote-center"></blockquote>
<!-- more -->

```javascript
@submit.prevent.native 用来防止刷新
@keyup.enter.native 用来绑定enter事件

<form
    method='post'
    :action='xxxxxx'
    @keyup.enter.native='fetch'
    @submit.prevent.native
>
    <!-- 动态参数 -->
    <input
        type='hidden'
        v-for='(value, key) in params'
        :key='key'
        :name='key'
        :value='value'
    />
    <el-button
        type='primary'
        native-type='submit'
        :disabled='!exportMode'
    >导出</el-button>
</form>

```