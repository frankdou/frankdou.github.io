---
title: webpack笔记
date: 2019-11-14 13:57:22
categories:
tags:
---
<blockquote class="blockquote-center"></blockquote>
<!-- more -->
webpack 
webpack-cli 
webpack-dec-server 
webpack-merge


loader 用于加载、转化某些资源
postcss-loader 前缀
css-loader 发布用
style-loader 开发用
mini-css-extract-plugin  loader + plugin
babel-loader
@babel/core
@babel/preset-env
file-loader 静态资源处理
image-webpack-loader 图片压缩


plugin 用于扩展webpack的功能
clean-webpack-plugin 清理目录
ProvidePlugin 
DefinePlugin 编译时配置全局变量
html-webpack-plugin 创建包含webpack编译资源(script、css、etc...)的html文件
purgecss-webpack-plugin 删除无用的css
add-asset-html-webpack-plugin 动态添加css、js链接到html + 保存相关文件到dist文件夹
webpack-cdn-plugin cdn资源加载
hard-source-webpack-plugin 编译速度速度优化


tips:

全局依赖，从输出的bundle中排除的办法
externals: {
    'jquery': '$',
}


tree-shaking
* tree-shaking只支持静态导入 import { a } from "./lib"，不支持动态导入require('..')
* 配置sideEffects: true, 用于删除引入但没使用的代码
* 配置sideEffects: ["**/*.css"]，避免webpack认为css是副作用
