---
title: BFC
size: 912
---
Block formatting context

BFC是“块级格式化上下文”的缩写。具有 BFC 特性的元素可以看作是一个独立的容器，容器里面的元素不会在布局上影响到外部元素。
例如浮动元素不会溢出到BFC区域之外，避免了元素重叠的问题。
BFC有多种形成方式，主要包括根元素、浮动元素、绝对定位元素等。

以下情况下会触发BFC
- 根元素
	- 在HTML中，`<html>`元素和包含根元素的父元素都是BFC容器
- float属性不为none
- position属性值为absolute或fixed
	- 绝对定位元素和固定定位元素不在文档的普通流中，所以它们自然形成BFC
- overflow属性值不为visible
	- 该属性值为auto、scroll等，它们可以用来让元素变成BFC容器，导致元素的内容在BFC中布局，而不会与其它元素重叠
- display属性值为table-cell/inline-block/inline-flex/inline-grid
