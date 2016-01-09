---
layout: post
title: 从wordpress迁移到Drupal
date: 2011-01-28 01:00
comments: true
categories: [back-end]
---
<h2>从wordpress迁移到Drupal</h2>
从wordpress迁移到Drupal是一个相当直观的过程，你的内容和评论都能直接迁移过来。但更复杂的一些设置则需要更多手动操作了。本质上来说，Drupal从wordpress站点的feed导入数据并生成node和词汇表。

下面是推荐的步骤：
<ol>
	<li>建立一个Drupal站点</li>
	<li>根据需要配置你的站点</li>
	<li><a rel="nofollow" href="http://drupal.org/node/70151">安装</a> 模块 <a rel="nofollow" href="http://drupal.org/project/wordpress_import">Wordpress Import</a> 并且打开它</li>
	<li>根据<a href="http://drupal.org/project/wordpress_import">Wordpress Import</a>模块的指引完成导入工作</li></ol>
以下是需要考虑的问题：
<ul>
	<li>视觉上的布局、结构可能会跟以前不同，你可以考虑是否需要自定义内容类型模块（custom content types <a rel="nofollow" href="http://drupal.org/project/cck">the CCK module</a>）或者用默认的page类型来展示内容</li>
	<li>你可能需要为从wordpress导入的node定义主题</li>
	<li>从category到Drupal的分类学是一个信息从低级抽象到高级抽象的过程，所以在这一过程中不会损失信息，但可能需要一些手动的处理，你懂的</li></ul>
