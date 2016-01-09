---
layout: post
title: 使用PHP来调用REST API
date: 2012-06-04 13:42
comments: true
categories: [back-end]
---

表征状态转移（英文：Representational State Transfer，简称REST）是<a title="Roy Fielding（尚未撰写）" href="http://zh.wikipedia.org/w/index.php?title=Roy_Fielding&amp;action=edit&amp;redlink=1">Roy Fielding</a>博士在2000年他的博士论文中提出来的一种<a title="软件架构" href="http://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E6%9E%B6%E6%9E%84">软件架构</a>风格。

越来越多的公司开放了API，比如<a href="http://open.qq.com/">腾讯开放平台</a>，<a href="http://open.taobao.com">淘宝开放平台</a>，<a href="http://open.baidu.com/">百度开放平台</a>，<a href="https://developers.google.com/">Google Developers</a>等。开放的方式各不相同，有REST和SOAP两种。

REST很容易理解，而且只要是支持HTTP/HTTPS的客户端/服务器就支持它。你可以用HTTP GET方法来执行命令。所以，开发者们感受到的REST的优势是：开发简单、只需依托现有Web基础设施、以及学习成本低。

然而，SOAP作为一种古老的Web服务技术，短期内还不会退出历史舞台。

在我们第三方开发者的PHP应用程序中如果要使用REST API，主要分为两个步骤。一、生成请求。二、处理返回值。
<h2>一、生成请求</h2>
主要有三种方法来生成一个HTTP请求。第一种方法就是手动生成请求，使用PHP的header方法。这给了你最大的灵活性，但是需要更多的 编码。第二种方法是使用PHP内置的file_get_contents()方法或者file()/fopen()/fread()/fclose()方法，使用这种方法少了一点灵活性，但是代码量非常少。第三种方法是使用跟API配套的自定义Class，或者叫SDK。如果可以的话，尽量使用第三种方法，它是最方便的。
<h3>手动生成请求</h3>
手动生成请求只有在第一次处理的时候才有点棘手，以后的话可以调用方法直接得到结果。此外了解手动生成请求的过程也有助于理解REST和HTTP。
<pre>function callAPI($endpoint, $devkey, $action, $type, $keyword)

{

  $action = urlencode($action);

  $type = urlencode($type);

  $keyword = urlencode($keyword);

  $url = $endpoint . "?devkey=$devkey&amp;action=$action&amp;type=$type&amp;keyword=$keyword";

  $url_info = parse_url($url);

  $host = $url_info['host'];

  $path = $url_info['path'] . "?" . $url_info[‘query'];

  $data = "";

  $fp=fsockopen($host, 80);

  fputs($fp, "POST ". $path . "HTTP/1.1\r\n");

  fputs($fp, "Host: ". $host ."\r\n");

  fputs($fp, "Accept: */*\r\n");

  fputs($fp, "Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7\r\n");

  fputs($fp, "Connection: close\r\n");

  fputs($fp, "Content-Type: application/x-www-form-urlencoded\r\n");

  fputs($fp, "Content-Length: ". strlen($data) . "\r\n\r\n");

  fputs($fp, "$data");

  $response="";

  while(!feof($fp))

  {

    $response.=fgets($fp, 128);

  }

  fclose($fp);

  list($http_headers, $http_content)=explode("\r\n\r\n", $response);

  return $http_content;

}</pre><h3>快速方法</h3><pre>function callAPIQuick($endpoint, $devkey, $action, $type, $keyword)

{

  $action = urlencode($action);

  $type = urlencode($type);

  $keyword = urlencode($keyword);

  $url = $endpoint . "?devkey=$devkey&amp;action=$action&amp;type=$type&amp;keyword=$keyword";

  $response = @file_get_contents($url);

  return $response;

}</pre>
使用PHP的内置方法file_get_contents会让代码量少很多（也少了一些灵活性）。
<h3> SDK方法</h3>
很多开放平台都会提供各语言的SDK下载，比如淘宝开放平台就提供了<a href="http://open.taobao.com/doc/detail.htm?id=34">java、.net、PHP的SDK</a>，并且还能够根据每个应用的API调用权限进行单独打包。
<h2>二、处理返回值</h2>
返回值要么是JSON格式，要么是XML格式。

如果是XML的话，可以使用PHP5的<a href="http://www.w3schools.com/php/php_xml_simplexml.asp">simplexml</a>来解析。自从PHP 5.2，也已经默认加入了<a href="http://www.ruanyifeng.com/blog/2011/01/json_in_php.html">JSON格式</a>的支持。

