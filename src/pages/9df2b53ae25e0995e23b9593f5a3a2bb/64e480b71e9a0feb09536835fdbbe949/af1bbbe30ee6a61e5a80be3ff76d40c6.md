---
title: external
date: 2023-07-02T10:04:15.322Z
size: 881
---
##### 组件库

不打包相应的lib库代码

##### 项目

- 如果项目未设置config.externals，对应的lib将源于node_modules
- 如果也设置了config.externals，需通过script标签全局引入

```javascript
config.externals = {
	uuid: 'uuid',
	echarts: 'echarts',
	vue: {
		commonjs: "vue", 
		commonjs2: "vue", 
		amd: "vue",
		root: "Vue",
	},
	lodash : {
		commonjs: "lodash", 
		commonjs2: "lodash", 
		amd: "lodash",
		root: "_",
	},
	'async-validator': {
		commonjs: "async-validator", 
		commonjs2: "async-validator", 
		amd: "async-validator",
		root: 'Schema',
	},
	'fuse.js': {
		commonjs: "fuse.js",
		commonjs2: "fuse.js", 
		amd: "fuse.js",
		root: "Fuse", 
	},
	'resize-observer-polyfill': {
		commonjs: "resize-observer-polyfill",
		commonjs2: "resize-observer-polyfill", 
		amd: "resize-observer-polyfill",
		root: "ResizeObserver", 
	},
}
```

