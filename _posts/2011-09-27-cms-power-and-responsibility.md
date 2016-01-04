---
layout: post
title: CMS的能力和责任
date: 2011-09-27 00:13
comments: true
categories: [CMS]
---

看到一篇很好玩而且有意义的文章：<a title="Permanent Link to With Great (CMS) Power Comes Great Responsibility" href="http://sixrevisions.com/user-interface/with-great-cms-power-comes-great-responsibility/" rel="bookmark">With Great (CMS) Power Comes Great Responsibility</a>
文章的主要观点是对现代强大的CMS的质疑：
<h3>CMS提供功能异常强大的后台文本编辑器（比如WYSIWYG）是否有必要？</h3>
其实WYSIWYG是与web语义化背道而驰的的。WYSIWYG带来的是更多的inline-style。牛逼而简约的编辑器只要提供以下html标签就好：
<ul>
	<li>Heading 1</li>
	<li>Heading 2</li>
	<li>Heading 3</li>
	<li>Heading 4 (if needed)</li>
	<li>Blockquote</li>
	<li>Ordered and unordered lists</li>
	<li>Italics</li>
	<li>Bold</li>
	<li>One or two special CSS classes for emphasizing or de-emphasizing text</li></ul>
让用户能自定义文本的颜色的话，页面就会乱七八糟的，如果只允许使用i和b的话，就会好很多了。
<h3>用户编辑CSS和HTML是否有必要？</h3>
极少数用户能熟练掌握CSS和HTML，或者能理解HTML标签的语义化。所以不应该给与太大的自由度。
<h3>给与的特性太多</h3>
在编辑器中加入用户不需要的特性，反而是对用户的困扰，使得他不能完成特定操作。
<h2>结论</h2>
作为CMS的开发者，我们需要保证用户能方便地使用工具来管理站点内容，但也要珍视他们的时间。给他们太多选择和能力的话，他们会花上更多的时间把网站搞的乱七八糟。我们不要给与太多选项、特性，让他们困扰，而应该给出方便、一致的选项。

&nbsp;

