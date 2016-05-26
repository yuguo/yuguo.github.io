---
layout: demo
title: Microdata Demo
comments: false
nav: true
---

Microdata是一种在DOM结构中增加item-xxx信息的方法，而[schema](http://schema.org)定义了搜索引擎能够认可的所有语义规范，由<cite>Google</cite>、<cite>Bing</cite>、<cite>Yahoo</cite>等联合支持。


示例1：一个语义化的对电影的描述

{% highlight html %}
<div itemscope itemtype="http://schema.org/Movie">
	 <h1 itemprop="name">Avatar</h1>
	 <div itemscope itemtype="http://schema.org/Person"><span itemprop="name">Director: <span itemprop="director">James Cameron</span> (born <span itemprop="birthData">August 16, 1954</span>)</span></div>
	 <span itemprop="genre">Science fiction</span>
	 <a href="../movies/avatar-theatrical-trailer.html" itemprop="trailer">Trailer</a>
</div>
{% endhighlight %}

示例2：一个语义化的对某项服务的描述（Offer指提供某项服务或者商品给其他人，比如卖一张电影票、一个某服务的使用权）。

{% highlight html %}
<div itemscope itemtype="http://schema.org/Offer">
	  <span itemprop="name">Blend-O-Matic</span>
	  <span itemprop="price">$19.95</span>
	  <div itemprop="reviews" itemscope itemtype="http://schema.org/AggregateRating">
	    <img src="four-stars.jpg" />
	    <meta itemprop="ratingValue" content="4" />
	    <meta itemprop="bestRating" content="5" />
	    Based on <span itemprop="ratingCount">25</span> user ratings
	  </div>
</div>
{% endhighlight %}

完整列表请见：[http://schema.org/docs/full.html](http://schema.org/docs/full.html)