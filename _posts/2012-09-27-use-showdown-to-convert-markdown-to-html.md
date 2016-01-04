---
layout: post
title: 使用Showdown来把markdown语法转化成html
date: 2012-09-27 16:50
comments: true
categories: [前端]
---

有的时候我们会有这样一种需求，我们有一个用markdown格式编写的文档，希望在一个页面上展示出来（很有可能是github），我不能用任何服务器端的语言，只能用静态数据和JavaScript。我也不希望使用任何桌面转义软件，因为这样每次发布都会很复杂——编写markdown，转义html，发布html。

而我最开始使用markdown而不是html的原因是它非常快，而且在纯文本的状态下就非常具有可读性。

而且我不需要一个web端的编辑器，我会在本地的APP上编写markdown，这也是为了方便版本管理。

综合考虑之后，我使用showdown来实现markdown-&gt;html的转化。
<a href="http://softwaremaniacs.org/playground/showdown-highlight/">demo</a><a href="http://softwaremaniacs.org/playground/showdown-highlight/showdown.js">download</a>
usage：
<pre>var text = "Markdown *rocks*.";

var converter = new Showdown.converter();  

var html = converter.makeHtml(text); 

alert(html);</pre><code>就是这么简单。</code>
请注意markdown-&gt;html转化是不可逆的 ，所以总是需要保存一份markdown文件。如果你有一个数据库，而且不希望每次都由浏览器来渲染所有的markdown，那么你可以把markdown渲染生成的html保存在数据库中，不太优雅，但性能能有不错的提升。

