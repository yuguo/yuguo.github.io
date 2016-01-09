---
layout: post
title: 做一个瀑布流的wordpress主题【1】
date: 2012-02-03 18:25
comments: true
categories: [back-end]
---

已经有这么多<strong>瀑布流</strong>的网站了，你一定也想自己做一个，我写这个系列教材是为了教你用wordpress这个世界上最好用的CMS来实现瀑布流的效果。

本文是第一篇，先讲最基本的页面显示。

阅读之前我假设你有一定的wordpress主题制作基础，你要知道通过codex来查阅wordpress的一些函数使用方法，对大循环也有一定了解，你还会一定的CSS基础知识。我不会贴出所有的代码，我会贴出一些关键代码和资源，有什么问题和意见可以留言。

如果你已经具备这样的知识，就可以继续阅读下去了。
<h2>类Pinterest网站</h2><strong>瀑布流</strong>网站又可以叫做类<strong>Pinterest</strong>网站，因为是Pinterest.com第一个使用这种布局方法展示内容，流行之后效仿者众，国内就有以下这些：
<a title="型男男装推荐" href="http://33pu.net">33号铺</a>：http://33pu.net/
<a id="" href="http://www.pinfun.com/" shape="rect" target="_blank">拼范</a>：http://www.pinfun.com/
<a id="" href="http://show.sodao.com/" shape="rect" target="_blank">搜道-秀</a>：http://show.sodao.com/
<a id="" href="http://markzhi.com/" shape="rect" target="_blank">Mark之</a>：http://markzhi.com/
<a id="" href="http://huaban.com/" shape="rect" target="_blank">花瓣</a>：http://huaban.com/
<a id="" href="http://www.mishang.com/" shape="rect" target="_blank">迷尚</a>：http://www.mishang.com/
<a id="" href="http://www.markpic.com/" shape="rect" target="_blank">码图网</a>：http://www.markpic.com/
<a id="" href="http://www.duitang.com/" shape="rect" target="_blank">堆糖</a>：http://www.duitang.com/
<a id="" href="http://idsoo.com/" shape="rect" target="_blank">Idsoo</a>：http://idsoo.com/
<a id="" href="http://www.budoou.com/" shape="rect" target="_blank">布兜</a>：http://www.budoou.com/
<a id="" href="http://www.topit.me/" shape="rect" target="_blank">Topit.me</a>：http://www.topit.me/
<a id="" href="http://weheartit.com/" shape="rect" target="_blank">weheartit</a>：http://weheartit.com/

另外，一些购物类推荐网站身上，也多有Pinterest的影子，比如<a id="" href="http://star.vancl.com/" shape="rect" target="_blank">凡客达人</a>、<a id="" href="http://www.meilishuo.com/" shape="rect" target="_blank">美丽说</a>、<a id="" href="http://www.mogujie.com/welcome" shape="rect" target="_blank">蘑菇街</a>（<a id="" href="http://www.mogujie.com/book/" shape="rect" target="_blank">book</a>）、<a id="" href="http://wow.taobao.com/" shape="rect" target="_blank">淘宝哇哦</a>、<a id="" href="http://www.xinxian.com/" shape="rect" target="_blank">新鲜网</a>等。

<a href="http://33pu.net/"><img class="size-full wp-image-1129" title="33号铺" src="http://yuguo.us/files/2012/02/1.jpg" alt="33号铺"   data-pinit="registered" /></a>
<h2>0.开始</h2>
按照一般的经验规则，我们采用一个空主题作为基础来进行修改。因为空主题（blank theme）会不断更新，具有一些最新的wordpress的函数和best practice。使用空主题就不用自己从头开始。

我们以<a href="http://wordpress.org/extend/themes/toolbox">toolbox</a>为例来进行下去，为什么用toolbox呢，因为它很简洁，而且是html5标签的，很上流。你自己使用什么空主题都可以，只要使用本教程的原则来进行即可。

启用toolbox之后，会看到站点首页有主体部分和边栏部分。主体部分显示一些文章，在边栏部分显示一些分类或者标签信息，这种结构如何和瀑布流网站对应起来呢？
<h2>1.干掉边栏</h2>
把sidebar.php删掉，你完全不需要它。然后把index.php中的以下代码删掉，这样就不会调用它了：
<pre>&lt;?php get_sidebar(); ?&gt;</pre>
当然，具有主题制作经验的你一定知道wordpress主题中php文件的调用会有一个优先级，比如存档页会优先使用archive.php再使用index.php，这样的话以上代码不会只有一个index.php文件中有。

我的建议是先把类似优先级树中的文件（比如single.php、tag.php、archive.php、category.php……这个要根据你主题的具体情况来看）全部删掉，在index.php中修改之后再根据修改好的index.php来复制修改完成archive.php或者home.php的修改。

做了这些事情之后刷新首页，你会发现边栏没了，只有一个主题部分，包含了若干文章。

下面可以发挥一下自己的CSS能力，把主体部分宽度改成100%，关于边栏的样式代码全部删掉。
<h2>2.自定义文章样式</h2>
文章现在是一条一条显示出来了，那么如何像<a title="型男男装推荐" href="http://33pu.net">33号铺</a>那样漂亮的一个一个条目展示出来呢？分两个步骤，先改结构，再改样式。
<h3>2.1 自定义结构</h3>
如果你的空主题足够先进，那么你在index.php中不会直接看到大循环里面的代码，而是有以下代码：
<pre>&lt;?php while ( have_posts() ) : the_post(); ?&gt;</pre><pre>&lt;?php

 /* Include the Post-Format-specific template for the content.

 * If you want to overload this in a child theme then include a file

 * called content-___.php (where ___ is the Post Format name) and that will be used instead.

 */

 get_template_part( 'content', get_post_format() );

 ?&gt;</pre><pre>&lt;?php endwhile; ?&gt;</pre>
嗯，注释已经说明了一切。大循环中的部分都会调用content.php或者类似优先级树的content-single.php等文件。现在我们只需要content.php。

打开content.php，就能看到每篇文章的循环代码。暂时只用修改最外围的一个div或者article，在class上加一个“goods”即可。
<h3> 2.2样式</h3>
在style.css里加入以下代码：
<pre>.goods {float: left;

  margin: 10px;

  width: 230px;

  color: #999;

  background-color: white;

  -moz-border-radius: 3px;

  -webkit-border-radius: 3px;

  border-radius: 3px;

  box-shadow: 0 1px 3px rgba(34,25,25,0.2);

  -moz-box-shadow: 0 1px 3px rgba(34,25,25,0.2);

  -webkit-box-shadow: 0 1px 3px rgba(34,25,25,0.2);

  transition: 0.3s;

  -webkit-transition: 0.3s;

  -moz-transition: 0.3s;

  -o-transition: 0.3s;

}</pre>
是的，这样你的文章就会像小方块一样排列。
<h3>2.3样式优化</h3>
用浮动来实现布局是有问题的，因为每篇文章高度不一定，所以需要脚本的帮助。

首先下载masonry.min.js到你的主题文件夹/js/masonry.min.js路径，下载和demo和教程地址都是：<a href="http://masonry.desandro.com">http://masonry.desandro.com</a>
下载完毕之后需要在你的主题中引用，正确的方法是在header.php的头部wp_head()之前加入以下代码：
<pre>&lt;?php

wp_enqueue_script('jquery');

wp_enqueue_script('masonry',get_bloginfo('template_directory').'/js/jquery.masonry.min.js');//自动排序

wp_enqueue_script('yoursitejs',get_bloginfo('template_directory').'/js/site.js');//自己写的一些脚本

?&gt;</pre>
这是为了避免其它插件也使用masonry的时候，再次载入同样的脚本。

然后再在主题文件夹的/js/文件夹中新建一个脚本比如site.js，代码如下：
<pre>jQuery(document).ready(function($){

jQuery.noConflict();

//动态调整位置

//http://masonry.desandro.com

var $container = $('#container');

$container.masonry({

itemSelector : '.goods'

});

});</pre>
这样就完成了脚本动态计算位置的工作了，页面载入之后会拉取3个脚本，首先是jquery，然后是jquery的插件masonry，最后site.js来执行。

好了，第一篇写到这里，下一篇写一下关于ajax拉取数据的功能。

