---
layout: post
title: css框架[4]-blueprint
date: 2010-09-09 01:01
comments: true
categories: [front-end]
---

blueprint跟960grids一样，是一个基于栅格理论的框架，它用两个简洁不简单的<a href="http://www.blueprintcss.org/tests/" target="_blank">demo页</a>把我征服了，不信你可以试试这两个demo，只在Firebug中修改类名来修改布局。
<h2>栅格系统</h2>
来自射雕前辈的栅格系统介绍：

<a href="http://lifesinger.org/blog/2008/10/grid-system-2/" target="_blank"><img class="size-full wp-image-195" title="栅格系统" src="http://yuguo.us/files/2010/09/grid_vocabulary.png" alt="栅格系统"   /></a>

blueprint的grid是标准24格，5像素边距，10像素边距，30像素栏。(30+10) x 12 - 5x2=950。如下图：

<a href="http://yuguo.us/files/2010/09/2010-9-8-22-58-10.jpg"><img class="size-full wp-image-194" title="oocss的栅格系统" src="http://yuguo.us/files/2010/09/2010-9-8-22-58-10.jpg" alt="oocss的栅格系统"   /></a>
<h2>规则</h2>
这些数字可能会把人绕的很晕，但实际上我们只需要记住整数就好了。这一点记在脑中：一行能显示24个单位的div，<em>最后一个div必须标明.last类</em>（div是形象的说法，用html5的section也完全没问题）。

.span-n即为n个单位宽，比如span-3为3单位宽（40 x 3 - 10=110px;其中10是右边距）；

.colborder为1个单位宽（栏目中的border，很好记），因为栏目间有分割条的时候，分割条离左右两遍的距离margin都会增大。blueprint把1个单位也就是40像素加上原来的10像素边距分给这个border两边，完美了。

.prepend-x为x个单位宽，代表左边空出n个单位的距离。

.append-y为y个单位宽，代表右边空出y个单位的距离。

.border 为0个单位，代表在右边加上一个竖条间隔border。这里没有使用多余的空间，它把原来的10px margin变成4px padding和5px margin。

这就是所有的布局类，再次提醒一<em>定要在某一行或者某一个布局类嵌套中的最后一个div加上.last类</em>，这样能去掉右边距避免掉下来。
<h2>应用</h2>
这样的话
<pre>&lt;div class="span-12"&gt;&lt;/div&gt;</pre><pre>&lt;div class="span-6"&gt;&lt;/div&gt;</pre><pre>&lt;div class="span-6 last"&gt;&lt;/div&gt;</pre>
就是正好一行了~因为12+6+6=24
<pre>&lt;div class="span-11 colborder"&gt;&lt;/div&gt;</pre><pre>&lt;div class="span-5 colborder"&gt;&lt;/div&gt;</pre><pre>&lt;div class="span-6 last"&gt;&lt;/div&gt;</pre>
也是正好满满一行：11+1+5+1+6=24
<pre>&lt;div class="span-9 prepend-2 append-1"&gt;&lt;/div&gt;</pre><pre>&lt;div class="span-6 border"&gt;&lt;/div&gt;</pre><pre>&lt;div class="span-6 last"&gt;&lt;/div&gt;</pre>
也正好满满一行：9+2+1+6+6=24

这就是基本布局，此外还有专门嵌套在布局类中使用的.push-z和.pull-z能把元素向左和向右平移到其他内容前面挡住。

blueprint的类名非常容易记，这篇日志写下来基本上类名都是我凭记忆写下来的，因为都是直观的英文+单位，这一点很值得借鉴。我对于数字定宽的类名也不是那么反感了（至少只有24个嘛）。
<h2>Bonus</h2>
除了grid.css之外，blueprint还包括了typography.css和forms.css，为不同的元素定义了一些好看的文字样式，非常不错。这里和这里分别是<a href="http://www.blueprintcss.org/tests/parts/elements.html" target="_blank">typography</a>和<a href="http://www.blueprintcss.org/tests/parts/forms.html" target="_blank">forms</a>的demo，这两个demo都是用grids来布局的，很漂亮。

总之blueprint是目前为止很接近我理想中的css框架的，方便易用。typography和forms的一些思想也可以在大项目中应用。grid缺乏语义化的问题可以用YUI的role来解决。

