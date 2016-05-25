---
layout: demo
title: HTML5 Semantic Code Demo
comments: false
nav: true
---

使用 HTML5 标签来描述代码时，常用的有 `<code>` `<pre>` `<samp>` `<kbd>` 四种。

一、`<code>` 用于描述普通代码或者技术名词：
----

<p>The <code>fruitdb</code> program can be used for tracking fruit production.</p>


二、`<pre>` 表示可定义预格式化的文本。
----

被包围在pre 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。

<p>This is the <code>Panel</code> constructor:</p>

<pre><code>function Panel(element, canClose, closeHandler) {
  this.element = element;
  this.canClose = canClose;
  this.closeHandler = function () { if (closeHandler) closeHandler() };
}</code></pre>	

三、`<kbd>` 表示提示键盘输入，而 `<samp>`表示计算机输出。
----

<p>To make George eat an apple, press <kbd>Shift</kbd>+<kbd>F3</kbd></p>

<pre><samp>You are in an open field west of a big white house with a boarded
front door.
There is a small mailbox here.

></samp> <kbd>open mailbox</kbd>

<samp>Opening the mailbox reveals:
A leaflet.

></samp></pre>
