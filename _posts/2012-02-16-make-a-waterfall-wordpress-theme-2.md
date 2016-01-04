---
layout: post
title: 做一个瀑布流的wordpress主题【2】
date: 2012-02-16 14:47
comments: true
categories: [CMS]
---

上一篇已经实现了瀑布流wordpress主题的基本布局，接下来讲ajax加载内容。
<h2>翻页代码</h2>
标准的wordpress翻页代码是在大循环之外有以下代码：
<pre>&lt;div id="nav-previous"&gt;

 &lt;?php next_posts_link( __( 'Older posts') ); ?&gt;

&lt;/div&gt;</pre>
也就是说后台设置了每页显示10篇文章之后，就会每10篇一个翻页。
<a href="http://yuguo.us/files/2012/02/1.png"><img class="aligncenter size-full wp-image-1138" title="1" src="http://yuguo.us/files/2012/02/1.png" alt=""   data-pinit="registered" /></a><h2>无限滚动</h2>
当屏幕滚动到页面底部的时候，我们希望触发一个事件来ajax载入新的文章进来。有一个js插件可以很方便的做到这一点：<a href="https://github.com/paulirish/infinite-scroll">infinitescroll.js</a>
infinitescroll有一个<a href="http://www.infinite-scroll.com/">官网</a>，但已经停止更新好多年了，代码和文档都已经失效。最新的代码在<a href="https://github.com/paulirish/infinite-scroll">github</a>可以下载。读源代码也有比较清晰的说明。

引入infinitescroll.js之后可以在你的站点js中加入以下代码：
<pre>$container.infinitescroll({//这里是所有条目的容器，我们在上一篇中已经有了jQuery Object，就是$container</pre><pre>    navSelector  : "#nav-previous",

                   // 页面导航的选择器，这个会被隐藏

    nextSelector : "#nav-previous a",

                   // 这个是触发器，页面滚动到触发器的时候，就会开始ajax加载

    itemSelector : ".goods"

                   // selector for all items you'll retrieve

  });</pre>
除了基本的用法之外，插件还提供了一些参数来配置一些自定义风格，比如载入的动画。

此外，在masonry的官网也有介绍<a href="http://masonry.desandro.com/demos/infinite-scroll.html">如何跟infinitescroll插件</a>结合。

ajax载入就讲到这里，下一篇《自定义文章数据》。

