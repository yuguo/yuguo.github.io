---
layout: post
title: 自定义wordpress翻页
date: 2011-08-25 11:23
comments: true
categories: [CMS]
---
<h2>起因</h2>
我的博客下面有这样的翻页条，它是基于一个叫做PageNavi的插件生成的。
<img class="aligncenter size-full wp-image-864" title="pagenav_1" src="http://yuguo.us/files/2011/08/pagenav_1.png" alt=""   />
插件很复杂，有语言设置，还能在后台由用户设置具体条目或者显示信息。

 <a href="http://yuguo.us/files/2011/08/pagenav_2.png"><img class="aligncenter size-full wp-image-865" title="pagenav_2" src="http://yuguo.us/files/2011/08/pagenav_2.png" alt=""   /></a>虽然它很强大，但我如果想把我的博客主题开源发布出去，那么要求用户全都下载这个插件不是一个很好的选择。而且这么多自定义项并不是每个用户都需要的。 所以我决定把它整合到主题中去。步骤如下：
<ol>
	<li>创建函数</li>
	<li>在index.php中插入调用代码</li>
	<li>定义样式</li></ol><h2>1.创建函数</h2>
打开functions.php，创建我们的函数如下：
<pre>function yuguo_navi() {

  global $wp_query, $wp_rewrite;

  $pages = '';

  $max = $wp_query-&gt;max_num_pages;

  if (!$current = get_query_var('paged')) $current = 1;

  $a['base'] = ($wp_rewrite-&gt;using_permalinks()) ? user_trailingslashit( trailingslashit( remove_query_arg( 's', get_pagenum_link( 1 ) ) ) . 'page/%#%/', 'paged' ) : @add_query_arg('paged','%#%');

  if( !empty($wp_query-&gt;query_vars['s']) ) $a['add_args'] = array( 's' =&gt; get_query_var( 's' ) );

  $a['total'] = $max;

  $a['current'] = $current;

  //请配置下面的参数，用来设置页面的pagenav

  $total = 0; //1 - display the text "Page N of N", 0 - not display

  $a['mid_size'] = 2; //how many links to show on the left and right of the current

  $a['end_size'] = 1; //how many links to show in the beginning and end

  $a['prev_text'] = '«'; //text of the "Previous page" link

  $a['next_text'] = '»'; //text of the "Next page" link

  $a['type'] = 'plain';

  if ($max &gt; 1) echo '&lt;div class="yuguo-pagenavi"&gt;';

  if ($total == 1 &amp;&amp; $max &gt; 1) $pages = '&lt;span class="pages"&gt;Page ' . $current . ' of ' . $max . '&lt;/span&gt;'."\r\n";

  echo $pages . paginate_links($a);

  if ($max &gt; 1) echo '&lt;/div&gt;';

}</pre>
其中数组参数$a的一些数据是根据我自己的需求来配置的，参考自这里（<a href="http://dimox.net/wordpress-pagination-without-a-plugin-wp-pagenavi-alternative/">wordpress pagination without a plugin</a>），还有参考一个重要的函数<a href="http://codex.wordpress.org/Function_Reference/paginate_links">paginate_links()</a>的官方API。
<h2>2.在index.php中插入调用代码</h2>
在你的index.php中（一般是index.php，除非你想单独在某个页面使用）找到翻页代码：
<pre>&lt;div&gt;

 &lt;div&gt;&lt;?php next_posts_link( __( '&lt;span&gt;&amp;larr;&lt;/span&gt; Older posts', 'twentyten' ) ); ?&gt;&lt;/div&gt;

 &lt;div&gt;&lt;?php previous_posts_link( __( 'Newer posts &lt;span&gt;&amp;rarr;&lt;/span&gt;', 'twentyten' ) ); ?&gt;&lt;/div&gt;

&lt;/div&gt;</pre>
替换如下：
<pre>&lt;?php if (function_exists('yuguo_navi')) yuguo_navi(); ?&gt;</pre><h2>3.定义样式</h2>
在style.css中加入如下代码：
<pre>/*

yuguo-pagenavi 在function里定义的导航

*/

.yuguo-pagenavi {clear: both;text-align:center;}

.yuguo-pagenavi a, .yuguo-pagenavi span {display:inline-block;*display:inline;zoom:1;text-decoration: none;text-align:center;width:60px;color:#999;font-weight:bold;border-right:1px solid #bbb;}

.yuguo-pagenavi .next {border-right:0 none;}

.yuguo-pagenavi a {margin-left:-4px;}

.yuguo-pagenavi a:hover {color:#222;}

.yuguo-pagenavi span.current {background-color:#fff;color:#222;}

.yuguo-pagenavi span.current {font-weight: bold;}</pre>
OK，你的页面应该就跟我一样了。一个缺陷就是我无法通过API来控制a标签输出不带空格，而我的设计中导航间是没有间隙的，所以我只好用了-4px的负边距来解决。不是最好的解决办法，希望哪位有更好的建议。

