---
layout: post
title: Instapaper Friendly -- dos and don&#039;ts
date: 2011-09-26 11:04
comments: true
categories: [产品]
---
<h2>什么是Instapaper</h2><a href="http://www.instapaper.com/">Instapaper</a>是一个提供Read Later服务的跨平台解决方案。在任何地方（比如浏览器中，或者Google Reader中，邮件等）选择Read Later之后，还能在任何地方（iPad，iPhone，kindle）阅读。
<h2>什么是Instapaper Friendly？</h2>
当读者访问你的网站，而且你的网站是阅读性质的（比如博客、相册），而不是社交性质的（比如SNS，Twitter），那么你的读者很有可能会使用Instapaper来Read Later。如果读者保存下来的内容乱七八糟，要么没有保存到正文，要么保存了广告，或者评论，那就不是友好的。反之则是友好的。

Read Later之后的text文件拥有以下特性的页面是友好的：
<ul>
	<li>有且只有一个标题</li>
	<li>无广告</li>
	<li>无交互链接或者交互按钮（比如评论、赞等）</li>
	<li>无评论（除非评论是页面的重要内容）</li>
	<li>像一篇文章</li>
	<li>文章内容顺序正确</li>
	<li>有内容图片（注意是img而不是background-image）</li>
	<li>无装饰图片（比如list前面的小星星图片在text中用·来表示就好）</li>
	<li>有版权信息</li>
	<li>……</li></ul><h2>为什么我要关心Instapaper？</h2>
Instapaper使用一些内部的算法来获取文章中的标题信息、正文信息，并且把它们和广告、评论区分开来。这些算法不得而知，但一定是一种聪明的算法，根据html标签等前端代码来读取内容，这跟Google的爬虫非常类似。被Instapaper抓取得乱七八糟的页面一定是语义化或者结构有问题的页面，基于此，我认为对Instapaper友好不仅仅是对Instapaper用户友好，更加重要的目标是对所有的机器人友好。

举一个简单的例子，<a href="http://wpmu.org/daily-tip-how-to-make-your-wordpress-blog-instapaper-friendly/">Daily Tip: How to Make Your WordPress Blog Instapaper Friendly</a> WPMU的一个错误之处就是在文章页里有两个h1，一个是网站logo“<a href="http://www.wpmu.org/">WPMU.org</a>”，另一个就是本文标题。这就导致在Read Later中会出现两个标题。
<h2>如何做到Instapaper Friendly？</h2>
Instapaper虽然对网站主隐藏了其获取正文信息的算法，但它也给网站主一些<a href="http://www.instapaper.com/publishers">公开的建议</a>。从编程思想上来看，这是很好的：没有必要展现出复杂的实现，而仅仅给出简单的接口，保证谁所有人会使用、所有人都有权限使用。
<h3>公开的建议</h3>
Instapaper给网站开发者一些公开的建议，包括对正文文本解析的控制、对Instapaper的拒绝（就好像通过robots.txt来拒绝google一样）、在站点添加Read Later按钮等。我只分析对正文文本解析的控制（Control text parsing for your site with HTML）。
<ul>
	<li><code>instapaper_title</code>: The first element with this class will be used as the title. If omitted, the HTML<code>&lt;title&gt;</code> element is used and Instapaper will try to remove common prefixes (such as “Archive”).</li>
	<li><code>instapaper_body</code>: The first element with this class will be used as the body container. All text outside of this element will be removed from the text output. If omitted, Instapaper will try to locate a suitable body container that includes all article text with minimal clutter. If such a container cannot be found with confidence, the HTML <code>&lt;body&gt;</code> element will be used.</li>
	<li><code>instapaper_ignore</code>: Any elements with this class, and their contents, will be removed from the text output. It’s not necessary to specify this on anything outside of the <code>instapaper_body</code>element, if present.</li></ul>
也就是说，通过3个class名，可以显式地告诉Instapaper如何读取内容。instapaper_title这个class里的元素会作为标题，如果没有这个class，那么会获取页面的&lt;title&gt;标签。
<h3>前端代码的最佳实践</h3><h4>使用语义化的html标签，不使用inline style</h4>
比如&lt;h2&gt;、&lt;h3&gt;作为段落标题，使用&lt;strong&gt;而不是&lt;span style="font-weight:bold"&gt;加粗，使用&lt;code&gt;来输出代码，使用&lt;li&gt;输出代码，使用&lt;p&gt;而不是&lt;br/&gt;来区分段落……因为当Read Later之后，站点样式就失效了。
<h4>&lt;h1&gt;标签</h4>
页面中不要用两个&lt;h1&gt;标签，只需要一个作为最重要的标题就好了，比如新闻标题，博客标题……而不是网站标题。

也不要把&lt;h1&gt;标签放在&lt;li&gt;等其他标签中，从语义化来讲这是不对的。比如<a href="http://ooxx.me">大猫</a>的日志页：
<a href="http://ooxx.me/mybloglog-farewell.orz"><img class="aligncenter size-full wp-image-956" title="instapaper-2" src="http://yuguo.us/files/2011/09/instapaper-2.png" alt="错误地使用h1标签"   /></a>
那么在Instapaper的text中显示如下：
<img class="aligncenter size-full wp-image-957" title="instapaper-3" src="http://yuguo.us/files/2011/09/instapaper-3.png" alt="错误地使用h1，导致在Instapaper中显示错误"   /><h4>&lt;h1&gt;标签要带链接并指向本页url</h4>
帮助text来找到原文页面。不是必须的，但是会更友好。
<h4>不要错误地使用&lt;section&gt;标签</h4>
检查自己博客的read later情况的时候，发现顶部导航条那里的个人信息也出现在了text中。调试过后发现使用了&lt;section&gt;标签，改为div就好了。查阅了这么一篇文章<a href="http://csspod.com/archives/section-is-not-just-a-semantic-div">《&lt;section&gt;不仅仅是“语义化的&lt;div&gt;”》</a>之后，觉得自己之前对section的理解确实是错了。
<blockquote>HTML 5中有一个构造文档大纲的算法，可以被诸如AT（不知何意，屏幕阅读器一类？）用来帮助用户通览文档。&lt;section&gt;及其他的新元素是这个算法的重要组成部分。每嵌套一个&lt;section&gt;，大纲的深度就增加一级（如果你想把这种模型的优势和传统的&lt;h1&gt;-&lt;h6&gt;模型比较，想象一下一个基于Web的Feed阅读器通过组合在一起的内容整合网站的页面结构，在HTML 4中，这意味要解析所有的内容并重新把所有的标题重新编号；HTML 5则可以在恰当的文档层级结束标题。）</blockquote>
所以其实&lt;section&gt;与&lt;h1&gt;-&lt;h6&gt;构建大纲有点类似，滥用的话，会让read later读取到错误的文章大纲。
<h4>注意标签顺序</h4>
即时在设计上是发表日期在前，标题在后，而在html代码中也应该是h1在前，这也是保证盲人读屏器第一次读到的是标题而不是不重要的时间。
<h4>对文章的操作，比如评论、编辑等不要放在&lt;article&gt;标签中。</h4><h2>最终优化结果</h2>
下面的截图是优化之后的结果，就像一篇文章一样，阅读体验很好。
<img class="aligncenter size-full wp-image-960" title="instapaper-5" src="http://yuguo.us/files/2011/09/instapaper-5.png" alt=""   />
相关资料：

&nbsp;
<a href="http://wordpress.org/extend/plugins/instapaper-friendly/">Instapaper Friendly</a><a href="http://wpmu.org/daily-tip-how-to-make-your-wordpress-blog-instapaper-friendly/">Daily Tip: How to Make Your WordPress Blog Instapaper Friendly</a><a href="http://www.instapaper.com/publishers">Information for publishers</a>
