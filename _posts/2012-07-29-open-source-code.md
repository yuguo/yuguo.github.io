---
layout: post
title: 开源代码
date: 2012-07-29 20:04
comments: true
categories: [back-end]
---

最近读文章：<a href="http://tom.preston-werner.com/2011/11/22/open-source-everything.html">open source everything</a>，作者是github的联合创始人Tom。他的其他文章都非常好，强烈推荐大家读一下。不过本文只是要谈谈我对开源软件的想法。

最近我花了一点课外时间做了淘宝客的导购系统：<a href="http://33pu.net/">33号铺</a>，使用的是codeigniter、jQuery、bootstrap等一些快速开发框架。代码方面并没有什么值得夸耀，我也在PHP开发上几乎完全没有经验（除非你称改改wordpress主题为PHP开发经验），但我根据我对交互上的一些理解，利用各种框架和api算是把这个系统架构起来了——我甚至把主要功能做出来之后，才想到要登录安全方面的问题。

后来我在<a href="http://www.v2ex.com/?r=Yuguo">v2ex</a>上宣传这个系统，有一些朋友对这个系统比较感兴趣，我甚至考虑卖钱。我想自己辛苦工作这么久，不能就这么免费开源了，而且我有点忧虑，担心其他人会快速复制我的网站，然后把我打败。

上线一段时间之后，我发现由于缺乏运营，所以流量非常少，后来我看到这篇文章：<a href="http://tom.preston-werner.com/2011/11/22/open-source-everything.html">Open Source (Almost) Everything</a>，里面有一点击中我的要害：

If you do it right, open sourcing code is <strong>great advertising</strong> for you and your company.

如果我干的好，那么我的开源代码会成为我的很好的广告。

我想，开源出去对我也没有什么坏处，他们复制我的网站之后并没有抢走我的客户，因为我根本没有任何客户，反而如果我在底部加上链接，可能会带来一些流量。而且开源代码如果够出名，会有其他人来帮我共同完善代码。

so，我<a href="https://github.com/yuguo/33pu">把代码放在了github上开源</a>，并在<a href="http://www.v2ex.com/?r=Yuguo">v2ex</a>、<a href="http://t.qq.com/chandleryu">腾讯微博</a>、<a href="https://twitter.com/yuguo">Twitter</a>等一切我知道的地方宣传了这个消息。当然在那之前我还对代码做了一些优化，包括把之前hard code到代码中的配置信息全部挪到config.php中、包括把（几乎）所有的函数都加上了phpdoc注释——对了，因为我是一个PHP小白，我还专门查阅了<a href="http://manual.phpdoc.org/HTMLframesConverter/default/">phpdoc文档</a>，学习怎样写注释。

我甚至还优化了安装程序，这样方便别人尽量方便的部署代码。

代码发布出去之后反响非常热烈，在v2ex上有<a href="http://www.v2ex.com/t/43322">82人收藏这个帖子</a>，当天网站流量达到1200多PV，比平时的30PV多出了40倍，在github上两天内有100多个watch和20多个fork信息，然后我偶然查看github的PHP语言排行榜的时候发现<a href="https://github.com/languages/PHP">本周最热门的项目中</a>，33pu竟然排名第四！<img class="aligncenter size-full wp-image-1308" title="33pu" src="http://yuguo.us/files/2012/07/2000.png" alt=""   />
无论这些数据能否给我的网站带来实际转化率，我都觉得无所谓了，因为这一切太酷了！

实际上，我还不够了解PHP这门语言，但我勇敢地开源了并觉得这件事还挺有意思。最重要的是，自己<strong>在这个过程中自己获得的提升比其他任何人都多得多</strong>。

若由于觉得自己的代码不够好而不开源，理由不成立。

写的不好没关系，《Clean Code》说，每次checkin都保证比checkout的时候更好，那么代码仓库会变得越来越好，这是一个不断变好的代码仓库。而且开源出去大家是看你的idea，而不是你的trick，如果你的idea够好，那么就会收获来自社区的感谢，和你应有的名声。

自从github获得1亿美元的投资（事实上他们创业的第一天就不需要风投，第一天就开始盈利，这真是创业者典范），我就开始相信，开源一定是未来主流，前端后端桌面服务器全部开源，如果以自己是C++程序员为理由而拒绝开源社区，那迟早会被飞速上升的电梯抛下。

最后做下广告：我的github帐号：<a href="https://github.com/yuguo/">https://github.com/yuguo/</a>，欢迎大家follow我，主要会研究一些前端和后端的东西，语言无所谓，重要的是用语言做的事。

