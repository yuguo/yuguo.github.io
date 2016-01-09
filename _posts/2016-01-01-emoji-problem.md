---
layout: post
title: Emoji-移动时代的巴别塔危机
date: 2016-01-01 00：01
comments: true
categories: [front-end]
keywords: Emoji, 苹果, 微软, Android, 区别
featured: true
banner_image: /files/2015/12/emoji.jpg
---

2015年对于 emoji 的发展是非常辉煌的一年，社交网络在总结[2015最受欢迎的 emoji 表情](http://socialbeta.com/t/the-top-100-most-popular-instagram-emojis)，杜蕾斯在 Twitter 上发起号召希望[在新的 emoji 中加入安全套](http://www.qdaily.com/articles/17795.html)，传言[索尼要拍一部 Emoji 动画电影](http://www.pingwest.com/sony-emoji-movie/)。但是很少有人讨论 emoji 现在存在的一些问题，这就是我写这篇文章的原因。

<!--more-->

题图是一个很常见的 Emoji 表情在不同系统中的表现，它代表一种略微无奈，希望获得帮助的表情。但是对于大部分用户而言，可能只见过其中一两个。有的只见过 iOS 版本，有的只见过 Android 版本。

这是由于 Emoji 的技术和规范决定的，Emoji 规范定义了某个字符的语义，然后允许大家自己设计表情图案，这让我想起《圣经》中的巴别塔——变乱之源。

## 巴别塔

> 那时、天下人的口音言语、都是一样。他们往东边迁移的时候、在示拿地遇见一片平原、就住在那里。他们彼此商量说、来吧、我们要作砖、把砖烧透了。他们就拿砖当石头、又拿石漆当灰泥。他们说、来吧、我们要建造一座城、和一座塔、塔顶通天、为要传扬我们的名、免得我们分散在全地上。耶和华降临要看看世人所建造的城和塔。耶和华说、看哪、他们成为一样的人民、都是一样的言语、如今既作起这事来、以后他们所要作的事、就没有不成就的了。我们下去、在那里变乱他们的口音、使他们的言语、彼此不通。于是耶和华使他们从那里分散在全地上。他们就停工、不造那城了。**因为耶和华在那里变乱天下人的言语、使众人分散在全地上、所以那城名叫巴别。**

——创世记11:1-9（中文和合本）

圣经里的这一段，一方面展示了上帝的神力，一方面又很巧妙，上帝并没有使用强力摧毁巴别塔，而是间接达成了这个目标：**他让世上的人不再说同一种语言，众人就散了。**

## Emoji 之父

Emoji 表情是一种视觉上的速记符号，最初是在 1999年 由一个名叫 Shigetaka Kurita（栗田穣崇）的日本人发明的。

Emoji 这个词来源于日本语里的絵（e =图片）文（mo =写）字（ji=字符）。栗田创造了这些符号，是为了能在消息对话中，相较于传统的纯文字或者简单的表情，提供出更丰富的感情色彩，让对话不至于被曲解。

第一批 250 个左右的 emoji 表情来自于栗田的前公司 Docomo。但它没能为此项设计取得版权，这让其他公司也得以使用 emoji。Docomo 的竞争对手和苹果这样的技术标准公司，都在大量的使用或者自己设计 emoji 表情符号。 最终，数百个 emoji 表情被编入 Unicode 中。2010年，由于大多数现代计算机系统都兼容 Unicode， emoji 便趁着东风在全球流行起来。

这是[2010年包含在 Unicode 6.0 规范中的 emoji 列表](http://emojipedia.org/unicode-6.0/)。

如果你使用 OS X 操作系统，那么你打开上面的链接之后，应该能看到如下图的 emoji 图文对应的列表：

![Emoji 6.0](/files/2015/12/emoji-6.0.png)

如果你使用 Windows 系统，就会看见一些单色的 emoji 图案。

![Emoji 6.0](/files/2015/12/windows-7-emoji.png)

甚至在某些旧的 Windows 系统中，会看不见对应的 emoji 图案，取而代之是一些未知编码，可能显示为类似“口”一样的文字。

## 自由的Emoji规范

对于某个 emoji ，它实际上是一个 Unicode 字符，至于字符显示成什么样，取决于字体。因此不同的操作系统内置了不同的字体，不同的字体覆盖到的字符集各不相同，因此会出现某些 emoji 在某个系统上无法显示的情况。

以这个 emoji 表情为例（Apple Color Emoji）：

![](/files/2015/12/grinning-face.png)

- 官方名字：`Grinning Face`
- Unicode number: `U+1F600`
- HTML-code: `&#128512`;
- Description: A face with a big open (grinning) mouth, showing teeth. Differs only slightly from the Smiling Face With Open Mouth And Smiling Eyes by the fact that these eyes are small circles, instead of the emoji-style smiling eyes.

它的版权细节是这样的：

> 所有的 emoji 的官方名字版权属于 Unicode 规范，对这个 emoji 的描述文字版权属于 emojipedia 网站，而对应的图形设计版权属于它的创作者或公司。

## Apple 的技术实现

Apple 让 emoji 真正成为了全世界通用的语言，这一方面归功于 iPhone 的热销，另一方面也归功于 Willem Van Lancker ，Apple Color Emoji 创造者，当年以Apple实习生身份画了最初的500个iOS 写实风格的 Emoji。

![Willem Van Lancker ](/files/2015/12/willem.jpg)

这说明了好的设计师有多么重要，Apple Color Emoji 的成功固然有平台的因素，但是对比下各平台的 emoji 设计风格，还是不得不承认 Apple 的设计非常细致，情绪表达得很微妙，而且设计风格统一，比大部分设计都强。 

此外，从技术上讲，**Apple 实际上是设计了一款叫做 Apple Color Emoji 的字体，它包含了这些字符（而且字符数量持续增加中）**。这款字体首先在 OS X Lion 和 iOS 5 中亮相。

## 版权的阴影

版权是个好东西，但是由于我们最熟悉的 Apple Color Emoji 字符设计的版权是完全属于 Apple 的，这就带来了一些法律问题。

我查阅了大量（可能接近一百篇英文文档和问答、邮件对话）资料之后，发现对于 Apple Color Emoji 的授权说明是非常模糊的。

> Emoji 可以认为是在你的设备上（本地）渲染出来的图形，因为它在互联网上传输时只是 Unicode 字符。那么这个图形的版权等于设备上的字体版权。 （来源[StackOverflow](http://stackoverflow.com/questions/10834811/emoji-copyright)）

如果你买了一台 iPhone 或者 Mac，那么你的系统中的 emoji 字体仅授权给你个人在这台设备上使用，你没有权限在其他设备上安装这个字体（专业术语叫做“分发”），也没有权限在你的出版作品中使用它，等等。

相对而言，Google 设计的 Android Emoji 字体是遵循 Apache 2 license ，因此只要你遵循它的具体规则就可以合法使用了。

但是有什么用呢？一方面，大家熟悉和认可的是 Apple 设计的 emoji，另一方面，Google 设计的 emoji 真的很难看，免费提供应该也没人用吧（哭晕在厕所）。

诡异的是，有的用户使用 Android 手机，但是见过 iOS 版本的 emoji（比如输入法），这是为什么呢。这是因为在 App 中封装了 Apple Color Emoji 的图片。

这样做是合法的吗？应该是非法的。不过现在国内这样做的人很多，还没有人收到律师函，至于以后是否会有风险，不得而知。

但是国外很多公司已经发现其中潜藏的风险，所以有一部分产品开始使用开源的 emoji 方案（比如[emojione](http://emojione.com/)），有一些开始设计自己的 emoji 字体（比如 Facebook、Google、HTC、Instagram、LG、Microsoft、Mozilla、Samsung、Slack、Snapchat、Twitter、Viber、WhatsApp等）。

在可以预见的未来，emoji 的设计分裂可能会越来越严重。

## 扩展阅读：除了 emoji 以外的图形

Unicode 中除了 emoji 属于图形字符，还包括宗教或信仰类（☭），货币类（泰铢฿）等，但因为这些比较简单，而且在 Unicode 规范中加入得比较早，所以各系统支持度很高。