---
layout: post
title: CodeIgniter简介
date: 2012-04-18 20:59
comments: true
categories: [back-end]
---
<a href="http://codeigniter.org.cn/">CodeIgniter</a>是一个轻量又灵活的PHP框架，它有以下优点：
<ul>
	<li>你想要一个小巧的框架。</li>
	<li>你需要出色的性能。</li>
	<li>你需要广泛兼容标准主机上的各种 PHP 版本和配置。</li>
	<li>你想要一个几乎只需 0 配置的框架。</li>
	<li>你想要一个不需使用命令行的框架。</li>
	<li>你想要一个不需坚守限制性编码规则的框架。</li>
	<li>你对 PEAR 这种大规模集成类库不感兴趣。</li>
	<li>你不希望被迫学习一门模板语言(虽然可以选择你喜欢的模板解析器)。</li>
	<li>你不喜欢复杂，热爱简单。</li>
	<li>你需要清晰、完善的文档。</li></ul><h2>易于安装和配置</h2>
CodeIgniter几乎不需要配置，把它放在Apache的某个目录就可以直接运行了。
<h2>友好灵活的URL路由</h2>
根据MVC模式，CodeIgniter的URL一般如以下形式表示：
<pre>example.com/class/function/ID</pre>
所以在控制器类中创建了类、函数以及函数接受的参数之后，就可以通过URL直接调用函数的方法。
<h2>MVC模型</h2><ul>
	<li><strong>模型 (Model) </strong>代表你的数据结构。通常来说，你的模型类将包含取出、插入、更新你的数据库资料这些功能。</li>
	<li><strong>视图 (View) </strong>是展示给用户的信息。一个视图通常是一个网页，但是在 CodeIgniter 中，一个视图也可以是一个页面片段，如页头、页尾。它还可以是一个 RSS 页面，或任何其它类型的“页面”。</li>
	<li><strong>控制器 (Controller) </strong>是模型、视图以及其他任何处理 HTTP 请求所必须的资源之间的<em>中介</em>，并生成网页。</li></ul><h2>按需加载辅助函数</h2>
CodeIgniter包含一些实用的辅助函数，但这并不意味着它会让你的服务器更慢，因为这些辅助函数是默认不加载的，需要通过$this-&gt;load来加载特定的模块。CodeIgniter的核心是非常小巧快速的。

比如URL辅助函数就是一个非常实用的函数，这样当网站的根目录改变的时候更有移植性。我之前做的网站挂载在海外服务器上，后来事故率高了以后移植到国内的服务器和域名，所以让你的代码有移植性是很重要的。
<h2>全局加载资源</h2>
CodeIgniter 带有"自动装载"功能可以允许系统每次运行时自动初始化类库、辅助函数和模型。如果你需要某些资源在整个应用程序中全局使用，为方便起见可以考虑自动装载它们。

要自动装载资源，打开 <var>application/config/autoload.php</var> 文件，然后将你想要自动装载的项目添加到 <samp>autoload</samp>数组中，你会发现该文件中对应于上面每个项目类型指示。

所以如果要在全局加载url和file两个辅助函数，可以在autoload.php中编辑以下代码：
<pre>$autoload['helper'] = array('url', 'file');</pre><h2>文档</h2>
CodeIgniter的另一个巨大优势就是它拥有详细的（中文）文档，当然非中文的资料更多，所以还是要学好英文，也是练习英文的好机会。
<a href="http://codeigniter.org.cn/user_guide/index.html">http://codeigniter.org.cn/user_guide/index.html</a>
