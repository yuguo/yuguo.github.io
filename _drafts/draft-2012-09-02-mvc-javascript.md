---
layout: post
title: JavaScript和MVC
date: 2012-09-02 16:58
comments: true
published: false
categories: [JavaScript]

---
<h2>什么是MVC架构的JavaScript？</h2><a href="http://www.alistapart.com/articles/javascript-mvc/">A List Apart: JavaScript MVC</a>
概要：由于JavaScript越来越复杂，它开始追随服务器端技术的脚步——MVC模型。MVC是指模型-视图-控制器模型，对于使用服务器端框架的开发者来说非常熟悉。它是一种设计模式：把应用程序分为3部分：数据（也就是Model），表现层展现数据给用户（也就是view），还有处理用户交互的控制器（也就是controller）。

处理器决定接下来发生什么，一般来说Controller从Model拿数据，然后传给View。
<h2>JavaScript从MVC架构中获益了什么？</h2><ul>
	<li>让复杂APP的JavaScript拥有良好结构</li>
	<li>视图/逻辑的分离，方便修改和测试</li></ul><h2>如何开始使用MVC架构的JavaScript？</h2><a href="http://stackoverflow.com/questions/8497833/hello-world-in-mvc-pattern">http://stackoverflow.com/questions/8497833/hello-world-in-mvc-pattern</a>
首先需要了解的是，你不需要使用某个“MVC架构的JavaScript框架”才能享受MVC带来的好处。

最简单的hello world的例子如下：
<pre>var M = {}, V = {},

C = {};

M.data = "hello world"; 

V.render = function (M) { alert(M.data); } 

C.handleOnload = function () { V.render(M); } 

window.onload = C.handleOnLoad;</pre>
在这个例子中：
<ul>
	<li>视图只知道如何跟用户界面来交互，不知道关于模型的任何事情</li>
	<li>模型不知道关于视图和控制器的任何事情</li>
	<li>控制器知道模型和视图，它让视图去显示模型的数据</li></ul><h2>有哪些JavaScript框架是使用MVC架构的？</h2>
随着越来越多的JavaScript MVC框架诞生，选择哪一个框架变得困难，所以诞生了<a href="http://todomvc.com/">TodoMVC</a>这个项目。

它使用各种有名的MVC框架实现了同一个页面应用：一个Todo列表应用程序。

&nbsp;

