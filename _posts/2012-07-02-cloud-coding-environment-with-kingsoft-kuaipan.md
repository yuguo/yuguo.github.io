---
layout: post
title: 使用金山快盘部署云编码环境
date: 2012-07-02 10:00
comments: true
categories: [back-end]
---

我有一个这样的需求：我有一个项目需要在公司电脑上编码，在家里的时候用大屏幕台式机来编码，而早上早起时候则使用MBP拿到阳台上去编码。
<ol>
	<li>我需要让我的代码同步到云端。</li>
	<li>要尽可能地方便，快速。</li>
	<li>我的项目需要配置数据库，所以方案也要把这个考虑进来。</li>
	<li>我要使用熟悉的编辑器——IDEA。</li>
	<li>要使用通用服务器环境，而不是SAE那种修改过的环境。</li>
	<li>公司需要配置代理才能访问外网。</li></ol>
so，我肯定不考虑2b青年使用的U盘，<strong>SAE</strong>也不合适，web端编码的一些工具也不合适。后来想到用<strong>dropbox</strong>来同步文件，但是dropbox没有配置外置文件夹的地方。比如dropbox的同步文件夹是E:/dropbox，那我无法让E:/www目录成为dropbox的一个同步文件夹，多少有些不方便。

最好我发现<strong>金山快盘</strong>可以较好地解决我的问题。
<strong>同步文件</strong>
金山快盘跟dropbox一样可以在多个设备和平台间同步文件，而在Windows他们还创新地可以把整个快盘映射为电脑的一个虚拟磁盘，获得一个盘符比如Z，这时候我把本地的代码都放在Z:/www，修改apache的配置文件中的文档地址到Z:/www即可，所有的计算机都这样设置。这样在某台机器上编码修改之后就可以自动同步到云端，打开其他机器的时候就可以继续编码了。

使用IDEA的话，可以把module文件也保存在Z盘，这样项目信息也是多台机器共享的。
<strong>代理</strong>
金山快盘可以设置代理。
<strong>数据库</strong>
之前考虑远程数据库，让@damao还给我开了权限，后来发现CI连接远程数据库的时候，不知道如何配置代理。（可以吗？真心求教）。所以最终还是使用本机数据库。

那如何同步呢，我最终是写了一个初始化数据库的PHP……囧，但是确实满足我的需求了。

好像可以尝试把数据库安装在Z盘？我没试过。
<strong>有更好的方法？请留言告诉我！</strong>
