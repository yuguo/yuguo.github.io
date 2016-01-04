---
layout: post
title: 项目升级
date: 2011-12-16 09:16
comments: true
categories: [做需求]
---

最近几周自己给自己加班，一个项目的整体CSS架构重新布置了一遍。虽然消耗了时间，但想到以后维护的人无论是别人还是自己都能更快写出好的代码，更方便找到需要的地方，修改组件的时候不困惑，或者看到代码的时候会心一笑，心里就觉得很值得。
<h2>第一次“升级”</h2>
第一次升级其实是跟随着快速上升的电梯，获得了提升，我本身没有做什么工作。<a href="http://qzone.qq.com/">QQ空间</a>从v5升级到v6，有很多地方都获得了巨大的提升，无论是对用户的性能体验提升，还是对我们开发者本身的方便性的提升。最重要的一个工具就是<a href="http://www.99css.com/archives/542">CSSGaga</a>，是一个大牛同事<a href="http://www.99css.com/">yt</a>写的软件，改变我们整组人的工作习惯，也奠定了整个v6前端文件（html/css/img/slice）架构。QQ空间包含很多项目，我负责其中几个，这次提到的升级项目是其中一个。

新的前端文件架构对开发者非常友好，举例而言：
<strong>DRY原则</strong>是说同样的代码只应该存在一份，Don't Repeat Yourself。如果一份代码在物理位置上保存在了n个路径上，那么修改的时候，如何同步修改这么多文件就是一个问题；如果几行代码保存在n份文件中，那么如何同步修改这些文件中的这几行代码，就是一个问题。<strong>所以一个特性或者组件应该只有一份代码中出现，或者说就是一个文件，这是理想的情况。</strong>所以项目中应该有很多小颗粒的CSS文件，这种颗粒文件就以qz_前缀命名：
<ul>
	<li>qz_a.css</li>
	<li>qz_b.css</li>
	<li>qz_c.css</li></ul>
还有一些所有项目都用到文件，以core_前缀开头：
<ul>
	<li>core_reset.css</li>
	<li>core_a.css</li>
	<li>core_b.css</li></ul>
对于前端开发来说浏览器的<strong>HTTP请求数</strong>是非常重要的一个概念，我们要尽可能的减少HTTP请求数避免阻塞。而使用link的方式引入这些文件的话，就有很多HTTP请求了：

proj.html:

&lt;link href="core_reset.css" type="text/css" rel="stylesheet"&gt;

&lt;link href="core_a.css" type="text/css" rel="stylesheet"&gt;

&lt;link href="core_b.css" type="text/css" rel="stylesheet"&gt;

&lt;link href="qz_a.css" type="text/css" rel="stylesheet"&gt;

&lt;link href="qz_b.css" type="text/css" rel="stylesheet"&gt;

&lt;link href="qz_c.css" type="text/css" rel="stylesheet"&gt;

&lt;link href="proj.css" type="text/css" rel="stylesheet"&gt;

如何减少呢？

proj.html:

&lt;link href="proj.css" type="text/css" rel="stylesheet"&gt;

proj.css:

@import url("core_reset.css");

