---
layout: post
title: SAE与Cron
date: 2012-09-26 21:35
comments: true
categories: [back-end]
---
<a href="http://sae.sina.com.cn/?m=devcenter&amp;catId=195">Cron</a>服务是SAE为开发者提供的分布式定时服务，用来定时触发开发者的特定动作，满足比如定时计算排行榜等需求。<a href="http://sae.sina.com.cn/?m=devcenter&amp;catId=195">Cron</a>的设置是通过App的config.yaml来实现的，只要用户在App目录下的config.yaml里按照我们的提供的语法格式进行配置，部署后就能生效。<a href="http://sae.sina.com.cn/?m=devcenter&amp;catId=195">Cron</a>的执行是以HTTP方式触发的，触发后真正执行的是用户在App中的PHP代码。<a href="http://sae.sina.com.cn/?m=devcenter&amp;catId=195">Cron</a>服务是分布式环境部署的，具有高可靠性，多点之间相互隔离且同时触发，并且通过分布式锁进行选举并最终由一个健康节点执行。
<h2>应用场景</h2><a href="http://sae.sina.com.cn/?m=devcenter&amp;catId=195">Cron</a>服务主要提供两类的定时需求：

A. 每隔一定时间执行，如每隔2个小时执行1次。

B. 在某个特定时间点执行，如每周二晚上9:10执行。

针对A应用场景，<a href="http://sae.sina.com.cn/?m=devcenter&amp;catId=195">Cron</a>提供偏移offset功能，也就是用户可以显式指定偏移时间，否则，默认针对间隔时间做随机偏移。
<a href="http://sae.sina.com.cn/?m=devcenter&amp;catId=195">Cron</a>服务支持http basic auth，用户可以设置用户名和密码来控制访问。

&nbsp;

