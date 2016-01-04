---
layout: post
title: JavaScript快速检测浏览器对CSS3特性的支持
date: 2012-09-24 16:01
comments: true
categories: [JavaScript]
---

在项目中需要快速检测浏览器是否支持某CSS3特性，比如检测是否支持“transform”，然后我的布局会有两种完全不同的版式。

当然除开本文介绍的这种快速方法，还有一种更有名和更通用的方法，那就是<a href="http://modernizr.com/">modernizr</a>，运行脚本之后它会在html的class上加上浏览器支持的所有特性的列表。

优点：
<ul>
	<li>js是可配置的，不需要的特性检测可以在配置脚本中去掉</li>
	<li>基于特性检测</li>
	<li>js库简单好用</li></ul><p style="text-align: center;"><img class="aligncenter size-full wp-image-1407" title="modernizr" src="http://yuguo.us/files/2012/09/1.png" alt="modernizr"   /></p>
除此之外还有一种不太好的方法，那就是判断浏览器的UA，不好的原因是UA可能会伪造，而且版本判断繁琐，还有不稳定。

优点：性能可能是最优的

最后就是本文介绍的这个方法，我写了一个函数快速检测是否浏览器支持某CSS特性，适合的场景是快速需要知道浏览器是否支持某一个CSS特性（而不是好几个）。

优点：
<ul>
	<li>性能不错</li>
	<li>通用性强</li>
	<li>适合检测单个CSS特性</li></ul><pre>var supports = (function() {

 var div = document.createElement('div'),

 vendors = 'Khtml O Moz Webkit'.split(' '),

 len = vendors.length;

 return function(prop) {

 if ( prop in div.style ) return true;

 if ('-ms-' + prop in div.style) return true;

 prop = prop.replace(/^[a-z]/, function(val) {

 return val.toUpperCase();

 });

 while(len--) {

 if ( vendors[len] + prop in div.style ) {

 return true;

 }

 }

 return false;

 };

 })();

if ( supports('textShadow') ) {

 document.documentElement.className += ' textShadow';

}</pre>
这就是最终代码，原理是：

1.创建一个div，然后可以获得div.style，这是它所支持的属性的数组列表。
<p style="text-align: center;"><img class="aligncenter size-full wp-image-1408" title="div.style" src="http://yuguo.us/files/2012/09/2.png" alt="div.style"   /></p>
2.检查text是否包含在数组中，如果是，直接返回true。

3.检查各种前缀，比如Webkit加上text，即webkitTransition，如果包含在style中，返回true。

4.值得注意的是在CSS中属性名为：-webkit-transition，但是在DOM的style中 ，却是对应webkitTransition。我也不知道为什么会这样。

参考资料：<a href="http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-detect-css-support-in-browsers-with-javascript/">http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-detect-css-support-in-browsers-with-javascript/</a>
