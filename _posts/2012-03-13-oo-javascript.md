---
layout: post
title: JavaScript中的面向对象函数
date: 2012-03-13 13:29
comments: true
categories: [front-end]
---

最近在读《Object-Oriented JavaScript》，里面对于函数的介绍非常让人印象深刻。
<h2>函数就是数据</h2>
因为函数也是数据，所以可以给变量赋值。通过给变量复制，从而定义函数，这种方法叫做<strong>函数直接量</strong>。
<pre>function f(){return 1;}//函数构造方法</pre><pre>var f = function(){return 1;} //函数直接量</pre>
二者是完全一样的。
<h2>匿名函数</h2>
正如数据可以匿名一样，函数也可以匿名：
<pre>"test"; //数据的匿名</pre><pre>function(a){return 1;}//函数的匿名</pre>
数据的匿名没有任何意义，因为它啥也没干，我们也无法处理它，但是我们可以把数据作为参数来使用或者赋值给变量，以此获得意义。

函数的匿名有两种使用方法使之获得意义：
<ol>
	<li>把（函数）传递给另一个函数作为参数。另一个函数会把这个匿名函数的返回值作为参数。</li>
	<li>定义匿名函数之后马上执行！</li></ol><strong>把匿名函数作为参数——回调函数</strong>
回调函数的好处有：
<ul>
	<li>不需要命名——避免创建全局变量，全局变量是糟糕的，会引起不易排查的bug；</li>
	<li>代码更简洁</li>
	<li>性能更好</li></ul>
坏处
<ul>
	<li>不能复用</li></ul><strong>匿名函数马上执行</strong><pre>(function(){</pre><pre>alert('foo');</pre><pre>})()</pre>
还可以带参数
<pre>(function(name){</pre><pre>alert('hello '+ name + '!');</pre><pre>})('Yuguo')</pre>
这种做法的好处就是可以避免创建全局变量。坏处是你无法把这个函数执行两次（除非你把它放在一个循环中，或者另一个函数中）
<h2>内部函数（私有函数）</h2>
在函数里可以定义函数，好处是可以避免创建全局变量，而且该函数是私有的，不会被外界污染。

