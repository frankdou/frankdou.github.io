---
title: vue-tips
date: 2019-01-21 15:00:05
categories:
tags:
    - vue
---
<blockquote class="blockquote-center">vue-tips</blockquote>
<!-- more -->

#### vue + iframe通信
```
<template>
    <div />
</template>

<script>
import $ from 'jquery';

export default {
    data() {
        return {
            dIframe: null,
        };
    },
    computed: {
        sUrl() {
            return 'http://xxxxxx';
        },
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.dIframe = $(`<iframe src=${this.sUrl} class='iframe' />`);

            // iframe onload event
            this.dIframe.on('load', this.onLoaded);

            // append iframe
            $(this.$el).append(this.dIframe);
        },
        onLoaded() {
            // send data to iframe
            this.dIframe[0].contentWindow.postMessage('loaded', this.sUrl);
        },
    },
};
</script>
```
```
iframe文件

window.addEventListener('message', ({ data }) => {
    console.log(data, '2222');
}, false);
```

#### inheritAttrs（默认true）
问题：父组件传来，但是未在props定义的属性，会显式的附加在dom节点上
设置inheritAttrs:false，这些默认行为将会被去掉

#### $attrs
父组件传的属性，未在子组件props定义，会归至$attrs
可通v-bind='$attrs'传至下级组件

#### v-model
语法糖
```
<a-component v-model="obj.c" />

+ 

子组件触发
$emit('input', 'xxxxx') input之类
$emit('change', 'xxxxx') checkbox、radio、select之类
================================================

<a-component
    :label="obj.c"
    @eventName="obj.c = $event"
/>

+ 

子组件触发$emit('eventName', 'xxxxx')
```

省去了父组件绑定事件，更新数据的动作

#### sync
语法糖
```
<a-component :title.sync="obj.c" />

+ 

子组件触发$emit('update:title', 'xxxxx')

======

<a-component
  :title="obj.c"
  @update:title="obj.c = $event"
/>

+ 

子组件触发$emit('update:title', 'xxxxx')
```

同样省去了父组件绑定事件，更新数据的动作

#### v-bind.sync

```
obj = {
    a: 1,
    b: 2,
}

--------------------------------

<a-component v-bind.sync="obj" />

+ 

子组件触发
$emit('update:a', 'xxxxx')
$emit('update:b', 'xxxxx')
...
================================

<a-component
    :a='obj.a'
    :b='obj.b'
    @update:a='obj.a = $event'
    @update:c='obj.c = $event'
/>

+ 

子组件触发
$emit('update:a', 'xxxxx')
$emit('update:b', 'xxxxx')
...
```

同样省去了父组件绑定事件，更新数据的动作，但是有多少key的更新动作，就能省多少

备注：
* 一个元素不能绑定多个v-bind

#### 阻止回车提交表单刷新的行为
```
@submit.prevent.native
```

#### computed方式，使用、更新props
```
computed: {
    project: {
        get() {
            return this.$attrs.project;
        },
        set(value) {
            this.$emit('update:project', value);
        }
    },
    namespace: {
        get() {
            return this.$attrs.namespace;
        },
        set(value) {
            this.$emit('update:namespace', value);
        }
    },
}
```

