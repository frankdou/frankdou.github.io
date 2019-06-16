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
避免父组件传的props，未在子组件定义（使用），导致显示的附加在dom节点上

#### $attrs
父组件传的props，未在子组件定义（使用），会归至$attrs，可通过v-bind='$attrs'传至下级组件