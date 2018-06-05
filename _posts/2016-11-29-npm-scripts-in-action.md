---
layout: post
title: NPM Scripts实战
date: 2016-11-29 19:00
categories: [前端]
keywords: [NPM Scripts, 前端, 构建, gulp]
---

一年前，我在开发一个 gulp 插件的时候意识到，其实 gulp 插件本质上并没有做主要的逻辑工作。

一个 gulp 插件往往依赖更底层的 npm 包来处理相关的文件操作、压缩、编译等，它使用 gulp-util 来将顶层需求（客户）和底层工具（干活的小工）连接起来，自己就像一个包工头。

就连 gulp 引以为豪的 stream 特性，其实也是 sh 里面的 `stdout` 和 `stdin` 的对接，是一个非常基本的功能。更何况很多 gulp 插件在封装的过程中还抛弃了 stream 特性，只支持文件I/O。

现在前端越来越复杂，除了浏览器端的内容越来越多，在构建端的工具也越来越复杂，一个构建工具还不够（gulp），要两个（gulp+webpack），然后加上各种插件，一个普通的前端项目可能需要好几百个依赖。

如果不做优化，可能修改一处代码，需要的构建过程要好几分钟，堪比原生应用开发。

对开发团队而言，这些新的闪亮工具层出不同，简直是军备竞赛。使用更多工具就代表更加现代化，使用 webpack 2 的就名正言顺鄙视使用 webpack 的。

我们的开发过程真的有必要那么复杂吗？

在思考的过程中，我开始做一些研究，想看看能否用最底层的 npm scripts，也就是从 1980 年至今常青的 shell script language，加上一些成熟的 npm 包来实现前端构建的过程。

**事实证明，这完全是可行的！**

从 clean、less、uglify、build 到 hashname，基本上常见的构建过程都可以实现，我把代码示例以及说明提交到这个 github 仓库：

[https://github.com/yuguo/npm-scripts-tutorial](https://github.com/yuguo/npm-scripts-tutorial)

如果这个项目对你有帮助，请 star 表示支持，如果此项目有一些你不能解决的问题，欢迎在 issue 中详细地提出（提问越详细，就能越快得到解决），我会尽量帮你完善，谢谢！