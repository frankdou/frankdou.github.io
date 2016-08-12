---
title: sublimetext配置
date: 2016-08-11 00:17:42
categories: sublimetext
tags:
    - sublimetext
---
<blockquote class="blockquote-center">SublimeText配置记录</blockquote>
<!-- more -->

### 整体配置
> Preference > Settings > user

```javascript
{
    "color_scheme": "Packages/Theme - Spacegray/base16-ocean.light.tmTheme",
    "theme": "Spacegray Light.sublime-theme",
    "ensure_newline_at_eof_on_save": true, // save的时候底部多一行空白
    "font_size": 16.0, //字体大小
    "font_face": "monaco", // 字体
    "highlight_line": true, // 高亮选中行
    "word_wrap": true, // 强制换行
    "wrap_width": 90, // 行宽
    "bold_folder_labels": true, // 文件夹粗体
    "highlight_modified_tabs": true, // 高亮编辑过的文件
    "trim_trailing_white_space_on_save": true, // 过滤行尾空白
    "tab_size": 4, // tab长度
    "line_padding_top": 1, // 行上padding
    "line_padding_bottom": 1, // 行下padding
    "draw_minimap_border": true, // 缩略图边框
    "translate_tabs_to_spaces": true, // 转换tab到空格
    "draw_white_space": "all", // 显示空格
    "ignored_packages":
    [
        "Vintage"
    ]
}
```
### 插件
#### all autocomplete
#### GitGutter
#### color picker
#### FuzzyFilePath
#### theme spacegray
#### emmet
#### angular Snippets
#### CSS Media Query Snippets
#### JavaScript & NodeJS Snippets
#### Jquery Snippets
#### jsformat
#### tag (html format)
#### prettyjson
#### markdown light
#### better-coffee
#### css format
#### DocBlockr

### [支持react](https://segmentfault.com/a/1190000003698071#articleHeader7)
