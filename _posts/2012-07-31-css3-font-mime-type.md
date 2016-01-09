---
layout: post
title: CSS3字体的MIME TYPE
date: 2012-07-31 12:37
comments: true
categories: [front-end]
---

越深入研究CSS3字体这个话题，就越发现很多问题都处于空白或者争论状态，比如MIME TYPE。

我用IE9打开QZone看了一下HTTP请求，IE9支持3种字体格式所以下载了3个字体文件，它们的MIME类型都是text/html，这当然是错误的。
<a href="http://yuguo.us/files/2012/07/1.png"><img class="aligncenter size-full wp-image-1325" title="1" src="http://yuguo.us/files/2012/07/1.png" alt=""   /></a>
当然这个错误似乎没有产生什么严重的影响。不像Access-Control-Allow-Origin，如果没有正确设置Access-Control-Allow-Origin头，那么FF和IE9是不能使用跨域字体的，请求会被拒绝掉。
<a href="http://svn.apache.org/viewvc/httpd/httpd/branches/2.2.x/docs/conf/mime.types?view=annotate">最新Apache的默认配置</a>是这样的：
<pre>application/x-font-otf</pre><pre>application/x-font-woff</pre><pre>application/x-font-ttf</pre>
但是一些争执还是存在，比如：
<a href="http://stackoverflow.com/questions/2871655/proper-mime-type-for-fonts">http://stackoverflow.com/questions/2871655/proper-mime-type-for-fonts</a><a href="http://stackoverflow.com/questions/3594823/mime-type-for-woff-fonts">http://stackoverflow.com/questions/3594823/mime-type-for-woff-fonts</a>
看了半小时后我感觉我已经累了，不会再爱了，那就这样吧。

PS. Chrome会在console中出现警告：

Resource interpreted as Font but transferred with MIME type text/html: "<a title="http://ctc.qzonestyle.gtimg.cn/qzone_v6/font/qzficon-regular.woff?max_age=19830211&amp;d=20120731110341" href="http://ctc.qzonestyle.gtimg.cn/qzone_v6/font/qzficon-regular.woff?max_age=19830211&amp;d=20120731110341">http://ctc.qzonestyle.gtimg.cn/qzone_v6/font/qzficon-regular.woff?max_age=19830211&amp;d=20120731110341</a>".

这是很蛋疼的，因为规范中只有application这种类型，没有font这种类型。所以我还是坚持上面的结论。

