---
layout: post
title: 利用淘宝API构建淘宝客自动发布系统
date: 2012-07-07 15:03
comments: true
categories: [开源]
---

【更新】33号铺的源码已开源：<a href="https://github.com/yuguo/33pu">https://github.com/yuguo/33pu</a>
大概几个月之前我开始对淘宝客产生兴趣，所谓淘宝客就是通过一个链接在淘宝上购物消费之后，这个链接所绑定的淘宝客帐号会获得分成。如今淘宝客已经成为一个非常大的产业，包括美丽说和蘑菇街都是做的非常不错的，但是只针对女生，可能因为女生更喜欢社交和秀，所以市场会比男生大很多。我想男生更容易接受的可能是杂志形式的导购，结论导向，倾向于快速购买。所以我打算自己做一个男生服装导购的网站——<strong><a href="http://33pu.net" target="_blank">33号铺</a></strong>。

所以我当时用WordPress做了一个主题，手动添加一些服装。当时的文章在这里：
<a title="Permalink to 做一个瀑布流的wordpress主题【1】" href="http://yuguo.us/weblog/make-a-waterfall-wordpress-theme-1/" rel="bookmark">做一个瀑布流的wordpress主题【1】</a><a title="Permalink to 做一个瀑布流的wordpress主题【2】" href="http://yuguo.us/weblog/make-a-waterfall-wordpress-theme-2/" rel="bookmark">做一个瀑布流的wordpress主题【2】</a>
随后经过一段时间的使用和运营，发现了WordPress来实现淘宝客的一些问题，在<a title="Permalink to 先做一半" href="http://yuguo.us/weblog/half-first/" rel="bookmark">先做一半</a>中都有记录。
<blockquote>之前33号铺是用WordPress作为后台，每次添加一件衣服的时候都要新建文章，然后上传图片，输入各种标题和价格选项。这种做法非常耗时，缺点比优点大得多。于是我规划新做一个系统，可以自己在网站后台完成添加条目的功能，尽可能地让编辑少操作。</blockquote>
我基于CI做了一个全新的后台管理系统，截止到今天，系统又完善了很多。我来介绍一下利用淘宝API构建的CPS自动发布系统吧。

1.首先初始化数据库之后就可以登录。
<a href="http://yuguo.us/files/2012/07/0.jpg"><img class="aligncenter size-full wp-image-1254" title="0" src="http://yuguo.us/files/2012/07/0.jpg" alt=""   /></a><a href="http://yuguo.us/files/2012/07/1.jpg"></a>
2.添加网站希望推广的产品的分类。我通过API抓取到淘宝客所有的分类，比如我就会添加男装下面的几个子类（T恤，衬衫等）。
<a href="http://yuguo.us/files/2012/07/3.jpg"><img class="aligncenter size-full wp-image-1255" title="3" src="http://yuguo.us/files/2012/07/3.jpg" alt=""   /></a>
3.添加好分类之后修改slug（但是不能修改ID，否则用API来拉取数据就会错误）
<a href="http://yuguo.us/files/2012/07/4.jpg"><img class="aligncenter size-full wp-image-1256" title="4" src="http://yuguo.us/files/2012/07/4.jpg" alt=""   /></a>
4.可以开始添加条目了，在后台进行搜索
<a href="http://yuguo.us/files/2012/07/6.jpg"><img class="aligncenter size-full wp-image-1257" title="6" src="http://yuguo.us/files/2012/07/6.jpg" alt=""   /></a>
5.选择分类来过滤结果
<a href="http://yuguo.us/files/2012/07/7.jpg"><img class="aligncenter size-full wp-image-1258" title="7" src="http://yuguo.us/files/2012/07/7.jpg" alt=""   /></a>
6.点击一个希望发布的条目，会通过API来ajax抓取到这个条目的其他图片，弹出浮层来显示这些图片。
<a href="http://yuguo.us/files/2012/07/8.jpg"><img class="aligncenter size-large wp-image-1259" title="8" src="http://yuguo.us/files/2012/07/8-1024x508.jpg" alt=""   /></a>
7.再次点击一个中意的图片（这个图片会最终发布到首页），会通过API再次ajax抓取到店铺信息，点击链接，还有佣金比等——然后自动发布！（也是ajax的）
<a href="http://yuguo.us/files/2012/07/10.jpg"><img class="aligncenter size-full wp-image-1261" title="10" src="http://yuguo.us/files/2012/07/10.jpg" alt=""   /></a>
感觉怎样~整个过程都是最大地优化编辑的发布过程，应该比市面上所有的淘宝客管理系统更方便。

感兴趣的加QQ群：230831981，敲门砖是“33号铺”。

【更新】33号铺的源码已开源：<a href="https://github.com/yuguo/33pu">https://github.com/yuguo/33pu</a>
