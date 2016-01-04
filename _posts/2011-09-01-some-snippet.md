---
layout: post
title: 学用代码片段
date: 2011-09-01 14:48
comments: true
categories: [编程]
---

之前写过一篇文章<a href="http://yuguo.us/weblog/emeditor-snippet/">《EmEditor代码片段插件介绍》</a>，现在项目越来越多，越来越大，不再用EmEditor，而用IntelliJ IDEA。这个IDE能管理项目，而且也有类似的代码片段功能——Live Template。本文主要就是关于Live Template（模版）。
<h3>自定义变量</h3>
Live Template最核心的思想是通过一个字段（Abbreviation）来展开一个模版（Template），这样我们输入很少字符的字段，就能输出很多字符的模版，从而节省时间和精力。

模版中包含纯文本和变量。变量是两个美元符号$中间包含字符，比如$&lt;variable name&gt;$这样的格式。

举个例子，在设定字体大小的时候，往往需要同时设置px和rem两种单位，为了节省时间，我就创建了这个叫做fs的模版。

在IDEA中Ctrl+Alt+S打开设置，然后搜索Live Template，之后我们会看见很多group，比如html、css、zen css等，我这个模版是在css中触发，所以我在css group里新建一个模版。Group只是用来管理Live Template，跟在什么环境下触发没关系，还可以自己建一些group比如“项目”
<a href="http://yuguo.us/files/2011/08/live_template_1.png"><img class="aligncenter size-full wp-image-888" title="live_template_1" src="http://yuguo.us/files/2011/08/live_template_1.png" alt=""   /></a>
css group里新建一个fs模版

我设定的缩写是fs，属于css这个Group，描述是css中的font-size这个属性。

Template text中的文本我写的是
<pre>font-size:$v1$px;font-size:$v2$rem;</pre>
展开快捷键是默认的（Tab），最后只有在CSS上下文（注意，是CSS上下文，不是CSS文件，这样在HTML中的&lt;style&gt;里也是能展开这个Template的）中输入：fs（Tab）之后，就会出现下面的截图：
<a href="http://yuguo.us/files/2011/08/live_template_2.png"><img class="aligncenter size-full wp-image-889" title="live_template_2" src="http://yuguo.us/files/2011/08/live_template_2.png" alt=""   /></a>
我随便设置了两个变量$v1$和$v2$，只是作为用户输入的一个placeholder，也可以是任何其他值。除了两个预设变量。
<h3>预设变量</h3>
IDEA自带两个变量，用户无法修改，一个是$SELECTION$。

$SELECTION$被用于“环绕模版”中，所谓环绕模版，就是当模版被展开的时候，被选择的文字会包含在模版之中。比如我创建一个模版如下：

这时候有两种方法来展开模版，方法一是通过缩写+指定快捷键，方法二是Ctrl+Alt+T，然后选择对应的模版，这个时候所有的包含了$SELECTION$的。

另一个预设变量是$END$，它表示模版结束的地方。
<h3>Expression</h3>
在编辑模板的对话框中点击Edit varibles按钮的时候，会出现一个对话框，其中可以编辑每一个变量的Expression。
<a href="http://yuguo.us/files/2011/08/edit_varibles.png"><img class="aligncenter size-full wp-image-893" title="edit_varibles" src="http://yuguo.us/files/2011/08/edit_varibles.png" alt=""   /></a>
Express中可以有3种值：
<ul>
	<li>预设的函数，可能有参数，也可能没参数。Predefined functions with possible arguments.</li>
	<li>双引号包围的字符串常量。String constants in double quotes.</li>
	<li>其他变量的名字。The name of another variable defined in a live template.</li></ul>
预设的函数有一些会很有用，比如用time()输出当前的时间。
<h3>例子</h3>
以下是我用代码片段来给项目带来快捷的一些例子。从这些例子中主要可以看出使用代码片段的几个优势：
<ol>
	<li>一致性</li>
	<li>便捷性</li>
	<li>规范性</li></ol><h4>html</h4>
/[tab]——【说明】HTML注释
<pre>&lt;!-- $END$ --&gt;</pre>
a[tab]
<pre>&lt;a href="##" title="$text$"&gt;$text$&lt;/a&gt;$END$</pre>
ai[tab]
<pre>&lt;a href="##" title="$title$"&gt;&lt;img src="pic/sample.jpg" alt="$title$" /&gt;&lt;/a&gt;</pre>
b[tab]
<pre>&lt;b class="btn_$value$"&gt;&lt;/b&gt;</pre>
div[tab]——【说明】div基本上都是有class的
<pre>&lt;div class="$end$"&gt;

&lt;/div&gt;</pre>
dl[tab]——【说明】节省输入
<pre>&lt;dl&gt;

	&lt;dt&gt;&lt;/dt&gt;

	&lt;dd&gt;&lt;/dd&gt;

	&lt;dt&gt;&lt;/dt&gt;

	&lt;dd&gt;&lt;/dd&gt;

&lt;/dl&gt;</pre>
i[tab]——【说明】项目中约定用i标签做图标
<pre>&lt;i class="ico_$end$"&gt;&lt;/i&gt;</pre>
img[tab]——【说明】避免忘记alt文字
<pre>&lt;img src="http://placehold.it/70x53" alt="$alt$" /&gt;$END$</pre>
jquery[tab]——【说明】在项目中经常需要做一些简单的动态演示，给前台开发使用，简单 演示我就用jquery来做
<pre>&lt;!-- 前端演示脚本 开始 --&gt;

&lt;script src="http://qzonestyle.gtimg.cn/qzone_v6/html/api/js/jq.js" type="text/javascript"&gt;&lt;/script&gt;

&lt;script type="text/javascript"&gt;

&lt;/script&gt;

&lt;!-- 前端演示脚本 结束 --&gt;</pre>
la[tab]——【说明】list里面包含一个a，这是常用的一种结构
<pre>&lt;li&gt;&lt;a href="#"&gt;$text$&lt;/a&gt;&lt;/li&gt;$END$</pre><h4>CSS</h4>
CSS的代码片段更多的是为了浏览器兼容而设置。

/[tab]——【说明】简单注释
<pre>/* $VALUE$ */$END$</pre>
//[tab]——【说明】复杂注释，用来分页
<pre>/* ====  page: $start$ ==== */</pre>
db/di/dn[tab]
<pre>display:block;display:inline;display:none;</pre>
ib[tab]——【说明】跨浏览器的inline-block
<pre>display:inline-block;*display:inline;zoom:1;</pre>
radius[tab]——【说明】可以通过一个变量，一次输出数值
<pre>-moz-border-radius: $num$px; -webkit-border-radius: $num$px; border-radius: $num$px;</pre>
fs[tab]——【说明】设置正文的文字大小的时候，除了用px单位，最好还用<a href="http://rebuildpattern.com/node/151">rem</a>单位来设置
<pre>font-size:$v1$px;font-size:$v2$rem;</pre>
lo[tab]——【说明】通过line-height和overflowhidden的方法来隐藏文字
<pre>line-height:900px;overflow:hidden;font-size:0;</pre>
opacy[tab]——【说明】<a href="http://rebuildpattern.com/node/104">参考资料</a><pre>filter:alpha(opacity=$n$0);-moz-opacity:0.$n$;-khtml-opacity: 0.$n$;opacity: 0.$n$;</pre>
nowrap——【说明】<a href="http://rebuildpattern.com/node/106">不换行</a><pre>white-space:nowrap;width:100%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;word-wrap:normal</pre><h3>总结</h3>
更多的代码片段我没有列出来，每个人需求不同，如果每次在完成某个任务、获得某种灵感的时候，把完成细节用代码片段总结出来，一定能越来越快越来越好。有的时候不知道如何把握代码片段复杂度，以下原则作为参考：
<ol>
	<li>很多情况下，冗余的代码就是健壮的代码。它是能够最大化容忍外部因素的不确定性的一种模式。</li>
	<li>代码片段应该保持较小的粒度。拿建筑学做比喻，代码片段是砖和三合板，而不是细小的沙子，也不是成型的小房子。</li></ol>
