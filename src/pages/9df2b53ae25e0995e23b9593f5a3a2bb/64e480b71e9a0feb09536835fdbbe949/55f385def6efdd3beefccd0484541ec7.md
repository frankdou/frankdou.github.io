---
title: sourcemap
date: 2023-02-18T01:01:17.003Z
size: 902
---
##### eval

eval包裹代码块

##### sourcemap

产生.map文件

##### cheap

只有行信息，不包含列信息

##### inline

.map文件以dataURI的方式嵌入，不单独产生

##### module

包含loader相关信息

##### 开发模式，推荐使用
```
devtool: "eval-source-map"
```
##### 忽略node_modules的sourcemap引用
```js
new webpack.EvalSourceMapDevToolPlugin({
	exclude: [/node_modules/],
}),
```

##### 反解析

```javascript
const consumer = new sourceMap.SourceMapConsumer(content);
//获取原始文件名、行号、列号
const result = consumer.originalPositionFor({
    line: parseInt(line),
    column: parseInt(column)
});
//获取对应的原始文件内容，todo：根据行号信息，进行截取
result.sourcesContent = consumer.sourceContentFor(result.source);
```


refs:

https://github.com/joeyguo/noerror

https://github.com/hucheng91/fe-error-sourcemap
