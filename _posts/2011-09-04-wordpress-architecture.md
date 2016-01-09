---
layout: post
title: 主题开源：Architecture
date: 2011-09-04 17:35
comments: true
categories: [back-end]
---

我把我的博客主题开源了，根据小平的命名，主题名叫Architecture。

主题转移到<a title="Free WordPress Theme" href="http://yuguotheme.com">Yuguotheme</a>维护，Yuguotheme是专业的WordPress主题站点，欢迎留言。

主题页：<a href="http://yuguotheme.com/architecture/">http://yuguotheme.com/architecture/</a><a href="http://yuguotheme.com/?themedemo=Architecture">Demo页</a>
主题设计的大部分是@tianweier，小部分是我自己乱调。设计简洁，有层次。代码全部由我完成，参考了Twenty官方主题，以及GA插件的部分代码。
<h2>截图</h2><div class="mceTemp mceIEcenter"><dl id="attachment_916" class="wp-caption aligncenter" style="width: 996px;"><dt class="wp-caption-dt"><img class="size-full wp-image-916" title="首页截图" src="http://yuguo.us/files/2011/09/Architecture-1.png" alt="首页截图"   /></dt></dl><div class="mceTemp mceIEcenter"><dl id="attachment_917" class="wp-caption aligncenter" style="width: 979px;"><dt class="wp-caption-dt"><img class="size-full wp-image-917" title="内页截图" src="http://yuguo.us/files/2011/09/Architecture-2.png" alt="内页截图"   /></dt></dl><h2>特性</h2><ul>
	<li>html5；</li>
	<li>支持后台自定义Google Analytics账户；</li>
	<li>支持通过menu自定义导航；</li>
	<li>可在后台面板配置布局和宽度；</li>
	<li>支持挂件Widgets；</li>
	<li>支持后台自定义feature post category的ID；</li>
	<li>性能优秀；</li>
	<li>由CSS3驱动的个性title；</li>
	<li>em作为宽度单位和字体单位，对使用现代浏览器并设置字体大小的用户更加友好；</li>
	<li>aligncenter的图片完美自适应居中（图片超宽也居中）；</li></ul><h2>支持</h2><h3>1.如何自定义menu？</h3><div class="mceTemp mceIEcenter"><dl id="attachment_923" class="wp-caption aligncenter" style="width: 266px;"><dt class="wp-caption-dt"><img class="size-full wp-image-923" title="自定义menu" src="http://yuguo.us/files/2011/09/Architecture-3.png" alt="自定义menu"   /></dt></dl>
自定义方法为，在后台Appearance中找到Menus之后，自定义一些链接（任意链接，站内或者站外都可以）后添加到一个menu就可以了。本主题只设定了一个menu。
<h3><a href="http://yuguo.us/files/2011/09/Architecture-4.png"><img class="aligncenter size-full wp-image-924" title="后台自定义menu" src="http://yuguo.us/files/2011/09/Architecture-4.png" alt="后台自定义menu"   /></a></h3><h3>2.如何自定义Google Analytics代码？</h3>
自定义方法为，在后台的Appearance标签内找到Google Analytics子标签页，然后输入你的GA代号就可以了。在内页内另有说明。
<img class="aligncenter size-full wp-image-932" title="后台设置GA" src="http://yuguo.us/files/2011/09/Architecture08.png" alt="后台设置GA"   /><h3>3.如何设置feature post？</h3>
所谓feature post就是出现在首页边栏的图片，用来展示一些自己希望推荐的文章。如果不需要此特性，则可略过此条。

如果希望设定一些文章为feature post，那么需要做如下几项：
<ol>
	<li>创建一个新的category比如“feature”、或者“精选”。</li>
	<li>在category管理页，通过查看这一项category的链接来找到它的tag_id，这是一个数字。</li>
	<li>在后台设置页Appearance下的Feature post输入该数字。</li>
	<li>在需要设定Feature post的文章里设定Category为刚才创建的Category。</li>
	<li>在custom fields中name选择“thumbnail”，value设置一个缩略图的url。</li></ol><img class="aligncenter size-full wp-image-925" title="设置Category" src="http://yuguo.us/files/2011/09/Architecture-6.png" alt="设置Category"   /><img class="aligncenter size-full wp-image-927" title="设置custom fields" src="http://yuguo.us/files/2011/09/Architecture-7.png" alt="设置custom fields"   />
注意，缩略图的宽度必须为250或者250px以下。

注意，custom fields可能默认不展示，可以在右上角的screen option中找到。

过程确实比较繁琐，我也在考虑如何简化这一流程，如果有更好的建议，<del>欢迎留言。</del>
主题转移到<a title="Free WordPress Theme" href="http://yuguotheme.com">Yuguotheme</a>维护，Yuguotheme是专业的WordPress主题站点，欢迎留言。

主题页：<a href="http://yuguotheme.com/architecture/">http://yuguotheme.com/architecture/</a><a href="http://yuguotheme.com/?themedemo=Architecture">Demo页</a>
