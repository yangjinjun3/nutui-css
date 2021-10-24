# nutui-css

## 痛点
1. 您是否穿梭过很多项目去重复拷贝一些通用样式呢？
2. 您是否曾经忘记一些通用样式的实现方式，每次遇到都要去网上 Google 一遍呢？

## 概述
该包旨在解决您的这些痛点，您无需在您的项目中书写这些通用样式，直接可以用它解决一切。

## 功能

| 分类     | 功能点                                               |
| -------- | ------------------------------------ |
| reset  | 滚动条滑动、windows 系统美化 chrome 滚动条、去除 chrome 中文本框/域默认的黄色背景、IOS 默认文本框/域阴影、列表、表格、文本域、置灰状态的鼠标样式              |
| mixin  | 文本溢出显示省略号、1px 物理像素           |
| layout  | 垂直水平居中、一侧固定宽度，另一侧宽度自适应、两侧固定宽度，中间宽度自适应、分散对齐、圣杯布局、两列等高布局、图文布局、对齐、等分布局           |
| shape  | 三角形、实心圆、宽高二比一矩形           |
| component  | 三个点、loading、图片遮罩层          |

## 使用方式
1. 在 vite 中使用

```js
// vite.config.js
export default defineConfig({
    ...,
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "node_modules/@jd/nutui-css/styles/index.scss";`
			}
		}
	},
    ...
})
```

## 推荐文章