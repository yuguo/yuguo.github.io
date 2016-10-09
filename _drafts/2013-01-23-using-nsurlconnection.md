---
layout: post
title: 理解NSURLConnection
date: 2013-01-23 09:35
comments: true
categories: [iOS]
---

其实本文应该是[缓存和NSURLConnection](https://yuguo.us/weblog/caching-and-nsurlconnection/)的前篇。iOS开发中，NSURLConnection是一种灵活的通过URL下载内容的方法。

UIWebView的的loadRequest方法
---

在了解NSURLConnection之前，我在创建一个UIWebView来显示远程服务器是上的URL之前，我是这样做的：

	UIWebView *webView = [[UIWebView alloc] initWithFrame:CGRectMake(0, 0, 320, 370)];
    [webView setDelegate:self];

    NSString *urlAddress = @"http://yuguo.github.com/raphaejs/arcs.html";
    NSURL *url = [NSURL URLWithString:urlAddress];
    NSURLRequest *requestObj = [NSURLRequest requestWithURL:url cachePolicy:NSURLRequestReturnCacheDataElseLoad timeoutInterval:10.0];
    [webView loadRequest:requestObj];

    [self.view addSubview:webView];

如果你注意到我有把webView的代理协议设置为self，那你就会知道我可以实现这些方法 ，来控制页面的展示：

	– webView:shouldStartLoadWithRequest:navigationType:
	– webViewDidStartLoad:
	– webViewDidFinishLoad:
	– webView:didFailLoadWithError:

因为webView除了可以载入url，还可以自己生成html片段，来让webView载入html片段。如果我只是要在webView中载入这个完整页面，那没有问题。如果希望下载的内容还能够保存和处理，那就需要NSURLConnection。

UIWebView的loadHTMLString方法
---

NSURLConnection提供了一系列简单的接口，来创建和取消一个连接。它还提供了一系列委托方法来控制连接。

这些委托方法按功能分为5大类：URL载入；缓存管理；认证；cookie储存；协议支持。

实现一个NSURLConnection的委托的时候，至少需要实现这几个方法：

	 connection:didReceiveResponse:
	 connection:didReceiveData:
	 connection:didFailWithError:
	 connectionDidFinishLoading:
