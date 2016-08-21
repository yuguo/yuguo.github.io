---
layout: post
title: JavaScript模块化编程简史（2010-2016）
date: 2016-08-20 19：00
comments: true
categories: [前端]
keywords: JavaScript, 模块化, module, ES6
published: false
---

对于任何一个开发 Web 站点的前端开发者，JavaScript 模块化编程都是一个非常重要的知识。

我们可能已经在开发中使用模块化的开发，但是自己却没有意识到，比如在浏览器中使用 JavaScript 加载器，比如在 Node 中使用 require 来引入模块。而且模块化开发的方式一直在改变，在最新的 ES6 中，官方引入了原生对于模块的支持，那么在生产环境中究竟使用哪一种最好，我们是否需要刷新一下自己的知识库？

所以我花了一个周末的时间重新仔细回顾 JavaScript 模块化编程的历史，并且记录下我的学习笔记。

## 1、解释一下什么是模块（modules）？

好的作者把他们的书分为一些章和节，好的程序员把代码分为一些模块。

就像一本书的章节一样，模块只是把一些代码聚合在一起罢了。

但是好的模块，是高度独立的，它可以被随时加入或者移除，而不会损害系统。

使用模块有这样几个好处：

1）**可维护性。** 因为模块是高度独立的，一个设计良好的模块是为了让代码库对自己的依赖越少越好，这样自己就可以独立去更新和改进。

2）**命名空间。** 在 JavaScript 里面，如果一个变量在最顶级的函数之外声明，它就直接变成全局可用。因为如此，常常不小心出现命名空间污染的情况。命名空间污染是指完全不相干的代码却共享了相同的全局变量。

所以在开发实践中，我们需要使用模块化开发来封装变量，避免污染全局环境。

3）**重用代码。** 我们有时候会喜欢从之前写过的项目中拷贝代码到新的项目，这没有问题，但是更好的方法是，通过模块引用的方式，来达到更好的效果。

通过使用模块来重用代码，我们可以在更新了模块之后，让引用了该模块的所有项目都同步更新，还能通过指定版本号来避免 API 变更的问题。

## 2、如何实现模块化？

“模块”这种模式有点类似类（classes），因为JavaScript语言在 ES6 之前都不支持类。

在其他语言中（比如Java和Python），我们可以把公开或者私有的属性和函数都放在一个类中。这可以让我们决定哪些属性和方法可以作为类的公共 API，哪些属性和方法隐藏在类内部。

而在 JavaScript 中只有创建了一个函数的时候，才会在它内部产生一个新的运行环境。通过这个新的命名空间，我们可以把变量挂载在新命名空间上，从而避免父命名空间（也就是全局命名空间）冲突。

有很多种方式实现模块化开发，让我们一个一个分析。

### 2.1、使用匿名函数

<script src="https://gist.github.com/iam-peekay/088d6b37781c54a95b22.js"></script>

在这个代码片段中，我们定义了一个匿名函数并立即执行。

要记得的一点是一定要用圆括号把整个匿名函数包起来，因为如果语句直接以`function`关键词开始，那么这个语句会被认为是一个函数声明（FunctionDeclaration），而不是一个函数语句（FunctionExpression）。

函数声明必须是有名字的，函数语句才可以匿名，所以我们一定需要用括号来把整个函数体括起来。

### 2.2、把全局函数注入到匿名函数

刚才我们已经演示了使用一个匿名函数把变量和代码封装起来，接下来演示一种常用的方法，就是把全局变量“注入”到匿名函数中。jQuery就是这样用的。

<script src="https://gist.github.com/iam-peekay/d04164e52be05f8cb107.js"></script>

在这个例子中，`globalVarible` 是唯一一个全局的变量。这种做法比完全匿名的闭包的好处是，代码结构更清晰，而且性能更好。我们能够看到函数内部传递进来了全局变量，所以依赖关系非常清晰。其次在函数内部调用 `globalVarible` 的时候，能够直接找到局部的 `globalVarible`，就不用上溯到外部的 `globalVarible`。

### 2.3、提供一个对象接口

另一种创建模块的方法是使用一个自包含的对象接口，就像这样：

<script src="https://gist.github.com/iam-peekay/43b161aafe7df6218118.js"></script>

通过这种方式，我们可以定义哪些变量和方法是私有的，哪些是公开的。

### 2.4、Revealing module pattern

最后一种创建模块的方式跟上一个很类似：

<script src="https://gist.github.com/iam-peekay/3d29068bd0097c53af41.js"></script>

在这段代码中，默认所有的变量和方法都是私有的，只有在最后显示 `return` 一个对象的时候，才选择性暴露出对外接口，很清晰。

## 3、CommonJS 和 AMD

上面这些方法都有一个共同点：使用一个独有的全局变量来把一些私有变量和方法包起来，然后通过闭包来创建一个私有的命名空间。

参考资料：

[JavaScript Modules: A Beginner’s Guide](https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc)

[Explain JavaScript's encapsulated anonymous function syntax](http://stackoverflow.com/questions/1634268/explain-javascripts-encapsulated-anonymous-function-syntax)
