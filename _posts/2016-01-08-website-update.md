---
layout: post
title: 小站升级：迁移到 linode
date: 2016-01-08 15：51
comments: true
categories: [front-end]
keywords: jekyll, https, linode, gitpage
featured: true
banner_image: /files/2016/01/joshua-tree-national-park.jpg
---

新年新气象，本来只是想把站点从 gitpages 迁移到 linode 的VPS，结果根本停不下来，顺便升级了服务器的 linux 版本，更新了主题，然后支持了 `https`。

<!--more-->

因为篇幅较长，我想把每个部分尽量说清楚。所以本系列分为三个部分，本文为第一部分。

- **迁移到 linode vps**
- 支持并强制 `https`
- 更换站点主题

## 迁移到到 linode vps

我的整站（https://yuguo.us）在 2013 年[从WordPress迁移到Jekyll](/weblog/github-page-to-amazon-s3/)，站点就开始从动态网站变成了静态网站，免除了 WordPress 的升级，补丁，插件维护，数据库备份等等，简直是生活更轻松。之前使用 markdown 编辑器来写文章，现在直接用 sublime 写日志，也觉得越来越习惯。在命令行中运行 `jekyll s` 之后，`jekyll` 就会监控代码的变更，然后自动生成新的静态页，我在浏览器中刷新 `http://localhost:4000` 来预览。当然缺点也有，页面变多之后，现在生成一次整站需要9-11秒，做不到即时预览。

{% include image_caption.html imageurl="/files/2016/01/jekyll-1.png" title="jekyll s" description="Jekyll 每次生成全站需要9-11秒的时间。" %}

如图，全站生成需要9-11秒。

但是，如果只是希望调试当前页面，解决办法也很简单，就是通过 `--incremental` 参数来开启增量构建（Incremental regeneration），这是 jekyll 3.0 新增的特性。如果只编辑了某一个 `markdown` 文件，就只生成它对应的 `html` 页面。如此做，就可以获得不错的性能提升。

{% include image_caption.html imageurl="/files/2016/01/jekyll-2.png" title="jekyll s --incremental" description="Jekyll 开启增量编译之后，每次生成一页只需要3-4秒的时间。" %}

Jekyll 生成的静态页需要部署在一台服务器上，才能作为网站给用户使用。我一直使用 `gitpages` 的免费文件托管，也推荐给很多人使用。至今为止已经用了两年，现在决定要换，主要基于几个原因。

1. 速度不快，更严重的是在读一些较大的文件（比如200k以上的图片），内容下载时间变得特别长。
2. 不支持自定义域名的 `https`。
3. 部署在 gitpage 上，相当于把站点源码提交到 github，然后由 github 生成站点，所以整个站点都“被迫”开源。
4. 电信 DNS 上偶尔出现抽风问题。

这是我在电信网络下分别 `ping` gitpages 和 linode 的速度区别：

测试 gitpages 的中国区 CDN：

{% highlight shell %}
PING github.map.fastly.net (23.235.43.133): 56 data bytes
64 bytes from 23.235.43.133: icmp_seq=0 ttl=50 time=377.045 ms
64 bytes from 23.235.43.133: icmp_seq=1 ttl=50 time=419.516 ms
{% endhighlight %}

测试 linode 的 VPS：

{% highlight shell %}
PING yuguo.us (106.187.100.75) 56(84) bytes of data.
64 bytes from li493-75.members.linode.com (106.187.100.75): icmp_req=1 ttl=64 time=0.047 ms
64 bytes from li493-75.members.linode.com (106.187.100.75): icmp_req=2 ttl=64 time=0.061 ms
{% endhighlight %}

开源倒也没有什么问题，我之前的主题也是修改自国外免费主题，所以也开放给大家使用。但是有些人拿到主题之后，Google 分析代码都不改就用，我在站点统计中看到一堆乱七八糟的域名。

linode 的服务器一直是优质vps的代名词，价格不便宜，但是稳定省心，节省的精力用来赚大钱。我的 linode 2048 是每年大概200美元价格，这台机器是日本节点，速度不错。配置最低的 linode 1024是每年120美元，使用推荐链接之后应该还能省20美元。

欢迎使用我的 linode 推荐链接：[https://www.linode.com/?r=ce84d007e2a02072cfcec1bc008f24dc3b10c299](/https://www.linode.com/?r=ce84d007e2a02072cfcec1bc008f24dc3b10c299)

### 使用 `git hooks` 和 jekyll 部署站点

站点托管在 gitpages 的时候，部署方式就是 `git`，没有其它的选择，本身这种方式也足够好，不需要其他的选择。

现在切换到了 vps，在部署方式上就有了一些选择：

1. sftp/ftp： 这是最简单无门槛的部署方式，对服务器要求很低，能支持静态资源的服务器就可以托管。具体来讲是把  `jekyll` 在本地生成的 `_site` 目录整个上传到服务器上。缺点是不能增量部署，假如我们修改了页面模板，引起了 `_site` 目录中所有静态 `html` 文件的变化，这时候使用 sftp 或者 ftp 的方式，就需要把所有的 `html` 页面都重新上传至服务器。页面越多，耗费的时间越多。

2. `git`： 我强烈推荐使用 `git` 来管理和部署代码，有这样几个优点。
	- 在本地电脑和服务器上都安装 `git` 和 `jekyll`，部署即同步，不需要考虑备份的问题。如果你只有这样一个网站，几乎不需要开启服务器备份。当然如果同一台主机上还部署了 `WordPress` 等讨厌的家伙，保险起见还是需要开启备份。
	- 每次修改代码和文章之后，只需要从本地提交源码到服务器，会通过 `git hooks` 运行一段脚本，启动 `jekyll` 来自动编译源码，生成静态页并输出到服务器的 `www` 目录。（这只是一个例子，也可以是任何有外网访问权限的目录）
	- 只有 `www` 目录是公开的，自己的 `git` 目录是私密的，保证安全性。
	- 纯命令行操作，提交和推送代码的时候，感觉自己像一个萌萌哒黑客。
	- 通过在自己的电脑上部署私钥，在远程 vps 上部署公钥，二者可以安全方便地交流，不需要输入用户名和密码。

3. `scp`： `scp` 其实是一个 `ssh` 命令，本质上还是把生成的 `_site` 目录通过 `ssh` 传输到服务器。因为有自动化的脚本，执行倒是很简单，但是仍然需要考虑 `sftp/ftp` 中的缺点——无法增量部署。

除此之外，官方还提供了一些脚本等方式，不过如果你现在考虑把自己的 `jeyll` 站点部署到一台 `vps` 的话，最好的方式毫无疑问就是 `git` 。

参考：[Jekyll Deployment Methods](http://jekyllrb.com/docs/deployment-methods/) ， [使用git部署站点](/weblog/push-git-repository-to-server/)