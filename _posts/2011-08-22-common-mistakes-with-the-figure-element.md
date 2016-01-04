---
layout: post
title: 避免figure元素的错误用法
date: 2011-08-22 00:35
comments: true
categories: [前端]
---

新的html5标签&lt;figure&gt;和&lt;figcaption&gt;有一些常用的错误用法。
<h3>不是所有的图片都是&lt;figure&gt;</h3>
写html代码的时候一个重要原则就是“如非必要，不要写额外的代码”。有的人给整个网站所有的img都加上&lt;figure&gt;，这给自己增加了额外的不必要工作量。规范说&lt;figure&gt;是：<q>some flow content, optionally with a caption, that is self-contained and is typically referenced as a single unit from the main flow of the document.（一些文本流，可能包含标题——它们通常是作为文档的主要内容流中的一个自我包含的独立单元。）</q>
如何判断图片是不是需要用&lt;figure&gt;包括起来？这样判断吧：图片是不是与上下文有关的？如果是，那么再回答：把图片移到附录中，而不影响读者对全文的理解吗？如果回答再次是肯定的，那么就可以用&lt;figure&gt;。
<h3>logo不是&lt;figure&gt;</h3>
它被滥用了。
<figure><a href="http://yuguo.us/files/2011/08/taobao-logo.png"><img class="aligncenter size-full wp-image-857" title="taobao-logo" src="http://yuguo.us/files/2011/08/taobao-logo.png" alt=""   /></a><figcaption>淘宝的logo错误地使用的figure标签</figcaption></figure><h3>&lt;figure&gt;不只是图片</h3>
&lt;figure&gt;可以是视频、音频、表单（比如SVG）、引用、表格、代、一段散文或者……任何这些元素的集合。

参考资料：
<a href="http://html5doctor.com/the-figure-figcaption-elements/">http://html5doctor.com/the-figure-figcaption-elements/</a>
