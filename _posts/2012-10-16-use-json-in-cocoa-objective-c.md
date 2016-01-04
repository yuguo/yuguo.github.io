---
layout: post
title: 在Cocoa/Objective-C中使用JSON
date: 2012-10-16 18:10
comments: true
categories: [iOS]
---

我在做一个参考类的APP，因为经常有数据需要更新，而我又不希望以更新APP版本的方式来进行，所以首先想到的就是与服务器端通信，通信的格式当然就是JSON了，我在服务器端可以有非常方便的方法创建JSON，而在APP端也可以非常方便地把JSON转成原生对象（NSDictionary或者NSArray）。

stig的开源JSON框架是一个非常易用的框架，它可以把任何JSON字符串转化成原生Objective-C对象。这个开源项目包含的文件有打包好的框架、Mac和iPhone的SDK、还有源代码。最简单的使用这个框架的方法就是直接把源代码引入你的APP，因为它十分轻量。

1.<a href="https://github.com/stig/json-framework">下载 </a>
2.把下载来的文件解压，把Classes文件夹拖到xcode中，选择Copy items into destination group’s folder (if needed)。

3.源码引入你的项目中后，你需要import到你的代码中：
<pre>#import "SBJson.h"</pre>
4.以下是一个有名值对的JSON字符串，所以转化成了NSDictionary。
<pre>NSString *someJSONDemo = @"{\"name\":\"yuguo\"}";

NSLog(@"The name is : %@",[(NSDictionary *)[someJSONDemo JSONValue] objectForKey:@"name"]);</pre>
5.如果需要把NSDictionary或者NSArray转化成JSON字符串：
<pre>[obj JSONRepresentation]</pre>
