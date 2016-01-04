---
layout: post
title: 瀑布流介绍
date: 2012-01-08 18:04
comments: true
categories: [JavaScript]
---
<h2>关于瀑布流</h2>
最近几个月突然流行一种布局方式——瀑布流。

比如最早的 <a href="http://pinterest.com/">Pinterest</a>，然后国内的<a href="http://33pu.net">33号铺</a>，<a href="http://markzhi.com/">Mark之</a>，<a href="http://www.mogujie.com/book/clothing/">蘑菇街</a>，还有<a href="http://qzone.qq.com">Qzone</a>的好友相册，以及淘宝最新上线的“<a href="http://wow.taobao.com/">哇哦</a>” 等等，都是采用这种布局方法。
<img class="aligncenter size-full wp-image-1105" title="Pinterest瀑布流布局" src="http://yuguo.us/files/2012/01/waterfall.png" alt="Pinterest瀑布流布局"   />
兼容性较强的实现方法有两种，taobaoUED<a href="http://ued.taobao.com/blog/2011/09/14/waterfall/">有介绍</a>：
<ol>
	<li>N列布局方法</li>
	<li>绝对定位方法</li></ol>
推荐使用绝对定位方法，那么如何使用绝对定位呢？有两个js库值得推荐。
<ol>
	<li><a href="http://masonry.desandro.com">masonry</a></li>
	<li><a href="http://docs.kissyui.com/docs/html/api/component/waterfall/">KISSY的Waterfall组件</a></li></ol>
masonry提供的定位参数更多，包括流式布局、居中、图片lazyload、jQuery动画、在瀑布流中定位一个区域（放广告）等。

KISSY更轻便，而且还多了一个专门异步加载的class。

二者各有所长，根据自己的需要选择一个即可，用法也很简单，看看API和demo就可以了。

