---
layout: post
title: 自定义Access-Control-Allow-Origin策略以解决字体文件跨域权限问题
date: 2012-12-03 12:21
comments: true
categories: [front-end]
---
<h2>什么是Access-Control-Allow-Origin</h2>
Access-Control-Allow-Origin是HTML5中定义的一种服务器端返回Response header，用来解决资源（比如字体）的跨域权限问题。

它定义了该资源允许被哪个域引用，或者被所有域引用（google字体使用*表示字体资源允许被所有域引用）。
<h2>什么是资源跨域权限</h2>
当两个域具有相同的协议(如http), 相同的端口(如80)，相同的host（如www.example.org)，那么我们就可以认为它们是相同的域。

比如http://www.example.org/和http://www.example.org/sub/是同域，而http://www.example.org, https://www.example.org, http://www.example.org:8080, http://sub.example.org中的任何两个都将构成<a href="http://www.woiweb.net/tag/%E8%B7%A8%E5%9F%9F">跨域</a>。

例如www.a.com对www.b.com下的asset.php发送了一个<a href="http://www.woiweb.net/tag/%E8%B7%A8%E5%9F%9F">跨域</a>的HTTP请求，那么asset.php必须加入如下的响应头：

header("Access-Control-Allow-Origin: <a href="http://www.a.com/">http://www.a.com</a>");

坑爹的是，该域值不可为正则表达式，如<a href="http://*.a.com/">http://*.a.com</a><h2>如果HTML和CSS等资源所在的CDN不一致，就会出现跨域访问，而这在大型网站中是很常见的</h2>
HTML域： <a href="http://ctc.qzs.qq.com/">http://ctc.qzs.qq.com</a><a href="http://ctc.qzs.qq.com/">/</a> 【等】

CSS域： <a href="http://ctc.qzonestyle.gtimg.cn/">http://</a><a href="http://ctc.qzonestyle.gtimg.cn/">ctc.qzonestyle.gtimg.cn</a> 【等】

字体与CSS是相对路径所以同域： <a href="http://ctc.qzonestyle.gtimg.cn/">http://</a><a href="http://ctc.qzonestyle.gtimg.cn/">ctc.qzonestyle.gtimg.cn</a>
但是HTML与字体是跨域！

高级浏览器访问html页面的时候，对于CSS文件中使用的字体文件的请求，会带一个origin:头，这个头就是html页面所在的域。
<a href="http://yuguo.us/files/2012/12/1.png"><img class="aligncenter size-full wp-image-1511" title="1" src="http://yuguo.us/files/2012/12/1.png" alt=""   /></a>
高级浏览器（Firefox，IE9+）会对比自己发出的Request header中的Origin:和返回字体文件的Response header的Access-Control-Allow-Origin:域
<ul>
	<li>若相同，则表示该网站有权限使用该字体，浏览器显示字体</li>
	<li>若不同，则表示该网站无权使用该字体，浏览器虽然下载了该字体，但拒绝显示</li></ul><h3>解决办法1</h3><ul>
	<li>对于字体文件的Request，全部在返回头中加入：</li>
	<li>Access-Control-Allow-Origin:*</li>
	<li>缺点：安全性问题</li></ul><h3>解决办法2</h3>
根据Request Headers的内容，决定一些需要的Response Headers的内容，这里定义规则如下：

根据Request的Origin: 进行决策，

在Origin来自

*.qq.com（包括<span style="text-decoration: underline;"><a href="http://www.qq.com/">www.qq.com</a></span>; qq.com;）时;

Response Header中增加Access-Control-Allow-Origin:头

头的内容保持和Requset Headers中的Origin: 头URI中的protocol, domainname, port内容，并一致

