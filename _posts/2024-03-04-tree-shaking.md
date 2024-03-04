---
layout: post
title: 'tree-shaking'
date: 2024-03-03
categories: vue js
author: 皇甫春风
tags: vue js
---

# 什么是 tree-shaking

Tree-Shaking这个概念在前端领域是因为rollup.js而起，后来webpack等也加入支持Tree-Shaking的行列中。简单来说就是移除掉项目中永远不会被执行的代码（dead code），实际情况中，代码虽然依赖了某个模块，但其实只使用其中的某些功能。通过Tree-shaking，将没有使用的模块代码移除掉，这样来达到删除无用代码的目的。

<ul><li>对于 export 写法，webpack 和 vite 都支持 treeshaking 未使用的代码</li><li>对于 export default，webpack treeshaking 不支持直接型默认导出，但支持引用型默认导出。</li><li>对于 export default，vite treeshaking 两者都不支持</li>
<li>开发中如果要使用 export default，为了兼容多个打包工具，建议函数不合并在一个模块，而是每个模块导出单个函数。</li>
</ul>

# Tree-shaking的原理和支持

- 实现tree-shaking的基础是依赖于ES6的模块特性，即模块必须是ESM（ES Module）。这是因为ES6模块的依赖关系是确定的、静态的，和运行的时的状态无关，可以进行静态分析。
- 现在主流的打包工具都支持Tree-shaking，例如最早支持的rollup，后来支持的webpack，以及vite等等。
- 代码前注释 `/*#__PURE__*/` 会被识别为无副作用代码，可以被Tree-shaking安全删除
- vue3 可以通过 `__VUE_OPTIONS_API__:false`  启用/禁用选项式 API 支持。禁用此功能将减小打包结果的体积，但如果第三方库依赖选项式 API，则可能影响兼容性。