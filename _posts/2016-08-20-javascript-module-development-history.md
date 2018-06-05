---
layout: post
title: JavaScript模块化编程简史（2009-2016）
date: 2016-08-24 19:00
comments: true
categories: [前端]
keywords: JavaScript, 模块化, CommonJS, AMD, module, ES6, babel, webpack
---

对于任何一个 Web 站点开发者，JavaScript 模块化编程正在变得越来越重要。

我们可能已经在开发中使用模块化的开发，但是自己却没有意识到，比如在浏览器中使用 require.js 来异步加载需要的模块，比如在 Node 中使用 require 来引入模块等。

模块化开发的方式一直在改变，从 2009 年就诞生了 CommonJS 规范，在 2015 年的最新的 ES6 中，官方终于引入了对于模块的原生支持。在这段期间发生了哪些变化？在生产环境中究竟使用哪一种最好，我们是否需要刷新一下自己的知识库？

所以我花了一个周末的时间重新仔细回顾 JavaScript 模块化编程的历史，并且记录下我的学习笔记。

## 1、解释一下什么是模块（modules）？

好的作者把他们的书分为一些章和节，好的程序员把代码分为一些模块。

章节是一些句子聚合在一起，组成一个“主题”。模块就是把一些代码聚合在一起，组成一个“功能”。

**好的模块，是高度独立的，它可以被随时加入或者移除，而不会损害系统。**

使用模块有这样几个好处：

1）**可维护性。** 因为模块是独立的，一个设计良好的模块会让外面的代码对自己的依赖越少越好，这样自己就可以独立去更新和改进。

2）**命名空间。** 在 JavaScript 里面，如果一个变量在最顶级的函数之外声明，它就直接变成全局可用。因此，常常不小心出现命名冲突的情况。使用模块化开发来封装变量，可以避免污染全局环境。

3）**重用代码。** 我们有时候会喜欢从之前写过的项目中拷贝代码到新的项目，这没有问题，但是更好的方法是，通过模块引用的方式，来避免重复的代码库。我们可以在更新了模块之后，让引用了该模块的所有项目都同步更新，还能指定版本号，避免 API 变更带来的麻烦。

## 2、如何实现模块化？

“模块”这种模式有点类似类（classes）。在其他语言中（比如 Java 和 Python），我们可以把相关的属性和函数都放在一个类中。与此同时，我们决定哪些属性和方法对外暴露，作为类的公共 API。不需要公开的属性和方法，隐藏在类内部。

而在 JavaScript 中（在 ES6 之前）不支持类。

因为正好在创建函数的时候，解释器会针对函数产生一个新的运行环境，在函数中声明的对象都只存在于这个运行环境中。由于有这个新运行环境，我们可以随意创建对象，反正函数运行完了之后就会销毁一切。**这样就达到了类似私有变量的效果，从而避免父命名空间（也就是全局命名空间）冲突。**

所以在 ES6 之前我们都从函数来入手，通过多种方式实现模块化开发，让我们一个一个分析。

### 2.1、使用匿名函数

<script src="https://gist.github.com/iam-peekay/088d6b37781c54a95b22.js"></script>

在这个代码片段中，我们定义了一个匿名函数并立即执行。在这个匿名函数内定义的变量`myGrades` 等都成为这个运行环境内的私有属性。

要记得的一点是一定要用圆括号把整个匿名函数包起来，因为如果语句直接以`function`关键词开始，那么这个语句会被认为是一个函数声明（FunctionDeclaration），而不是一个函数语句（FunctionExpression）。

函数声明必须是有名字的，函数语句才可以匿名，所以我们一定需要用括号来把整个函数体括起来。

### 2.2、把全局函数注入到匿名函数

刚才我们使用一个匿名函数把变量和代码封装起来，接下来演示一种常用的做法，就是把全局变量“注入”到匿名函数中。jQuery就是这样用的。

<script src="https://gist.github.com/iam-peekay/d04164e52be05f8cb107.js"></script>

在这个例子中，`globalVarible` 是唯一一个全局的变量。这种做法比完全匿名的闭包的好处是，代码结构更清晰，而且性能更好。我们能够看到函数内部传递进来了全局变量，所以依赖关系非常清晰。其次在函数内部调用 `globalVarible` 的时候，解释器能够直接找到局部的 `globalVarible`，就不用上溯到外部的 `globalVarible`。

因为是 JavaScript 是引用传值，我们也可以在函数内，对这个全局的 `globalVarible` 进行修改。

> 准确说，如果我们直接修改 globalVarible 所指向的“对象指针”，就不会有问题。
> 比如 globalVarible = "foo"; 不会改变全局的 globalVarible 对象，
> 但 globalVarible.name = "foo"; 会改变全局的 globalVariable 对象的 name 属性。

### 2.3、提供一个对象作为接口

**你可能注意到上面的方式没有区分“私有属性”和“公开属性”。** 下面介绍一种创建模块的方法，它使用一个返回的函数，来指定对象接口，就像这样：

<script src="https://gist.github.com/iam-peekay/43b161aafe7df6218118.js"></script>

立即执行的匿名函数返回了一个对象。通过这种方式，我们可以定义 `failing()` 和 `average()` 是公开的接口，而 `myGrades` 是私有属性。

### 2.4、把要公开的属性专门放在一个对象声明中返回

上一段代码不是很清晰，因为声明跟实现放在一起了，所以改良成更加清晰的代码：

<script src="https://gist.github.com/iam-peekay/3d29068bd0097c53af41.js"></script>

在这段代码中，默认所有的变量和方法都是私有的，只有在最后显示 `return` 一个对象的时候，**才选择性暴露出对外接口，接口很清晰**。

## 3、CommonJS 和 AMD

上面这些方法都有一个共同点：**使用一个特定的全局模块名来把一些私有变量和方法包起来，然后通过闭包来创建一个私有的命名空间。**

这样也就有一个共同的缺点，就是无法管理不同模块之间的依赖关系。比如说，如果我们的项目用到了 Backbone.js 库，所以我们会把 Backbone.js 的代码引入到项目中。

不过，由于 Backbone 依赖 Underscore.js，所以 Backbone.js 的代码需要放在 Underscore.js 之后。

**当依赖的库多起来了，记住这些库应该以什么样的顺序去加载就是一件很头疼的事情了。**

另一个明显的缺点是，依次引入这些模块仍然没有解决命名空间冲突的问题。比如 jQuery 和其他库可能都使用了 `$` 来作为暴露的名字，或者我们引用了同一个模块的两个不同版本怎么办？

幸运的是，我们有两个已经得到广泛支持的解决方案：CommonJS 和 AMD。

### 3.1、CommonJS

CommonJS 最开始是 Mozilla 的工程师于 2009 年开始的一个项目，它的目的是让浏览器之外的 JavaScript （比如服务器端或者桌面端）能够通过模块化的方式来开发和协作。

在 CommonJS 的规范中，每个 JavaScript 文件就是一个独立的模块上下文（module context），在这个上下文中默认创建的属性都是私有的。也就是说，在一个文件定义的变量（还包括函数和类），都是私有的，对其他文件是不可见的。

如果想在多个文件分享变量，第一种方法是声明为 `global` 对象的属性。但是这样做是不推荐的，因为大家都给 global 加属性，还是可能冲突。

**推荐的做法是，通过 `module.exports` 对象来暴露对外的接口。**

Node 就采用了 CommonJS 规范来实现模块依赖。

我们可以这样创建一个最简单的模块：

<script src="https://gist.github.com/iam-peekay/733a701afb55a2c083fe.js"></script>

我们可以注意到，在定义了自己的 `function` 之后，通过 `module.exports` 来暴露了出去。为什么我们可以在没有定义 `module` 的情况下就使用它？因为 `module` 是 CommonJS 规范中预先已经定义好的对象，就像 `global` 一样。

如果其他代码想使用我们的 myModule 模块，只需要 `require` 它就可以了。

<script src="https://gist.github.com/iam-peekay/454feafd7f735581dbf8.js"></script>

这种做法有两个明显的优势：

1. 避免全局命名空间污染，require 进来的模块可以被赋值到自己随意定义的局部变量中，所以即使是同一个模块的不同版本也可以完美兼容
2. 让各个模块的依赖关系变得很清晰

语法也非常紧凑，我个人很喜欢。

有的时候我们实现一个模块需要的代码量比较大，会再次分解成若干文件，然后放在一个目录中。这时，我们需要在该目录中放置一个 `package.json` 文件，在 `main` 字段中指定一个入口文件（比如index.js）。

这样，其他人就能够使用 `require` 方法，加载整个目录。

需要注意的是，CommonJS 规范的主要适用场景是服务器端编程，所以采用同步加载模块的策略。**如果我们依赖3个模块，代码会一个一个依次加载它们**。

因为服务器端的模块加载主要来源硬盘、或者内存，所以加载速度比较快，同步加载并不是很大问题。但是如果是在浏览器场景中，同步加载就有很大问题，因为从网络中加载一个模块比从硬盘加载慢得多。在等待加载的过程中，浏览器会挂起当前的进程，直到模块下载完成。

阮一峰老师实现了一个[在浏览器中加载 CommonJS 规范的模块的 JavaScript 库](http://www.ruanyifeng.com/blog/2015/05/commonjs-in-browser.html)，可以作为学习或者测试模型来使用，但是在生产环境中使用，就有很大的性能问题了。

Node 开发社区的 SubStack 大神开发了一个 [browserify](https://github.com/substack/node-browserify) 工具。browserify 是一个开发侧解决方案，它可以把需要 `require` 进来的 a/b/c 等模块文件全部打包合并到一个单独的 JavaScript 文件中（这个过程称为 bundle）。

<script src="https://gist.github.com/yuguo/3a9c5268251f6855aae6005893372a24.js"></script>

第一步通过 `browserify` 命令来合并输出 bundle.js。

第二步，页面中只需要引入一次 `bundle.js`，就可以得到一个暴露出了对应的 a/b/c 模块的 `require` 函数，避免了一个一个请求，性能非常好。

### 3.2、AMD

介绍了同步方案，我们当然也有异步方案。在浏览器端，我们更常用 AMD 来实现模块化开发。AMD 是 Asynchronous Module Definition 的简称，即“异步模块定义”。

我们看一下 AMD 模块的使用方式：

<script src="https://gist.github.com/iam-peekay/fb7125ab71ff83f75f3b.js"></script>

在这里，我们使用了 `define` 函数，并且传入了两个参数。

第一个参数是一个数组，数组中有两个字符串也就是需要依赖的模块名称。**AMD 会以一种非阻塞的方式，通过 appendChild 将这两个模块插入到 DOM 中。在两个模块都加载成功之后，`define` 会调用第二个参数中的回调函数，一般是函数主体。**

第二个参数也就是回调函数，函数接受了两个参数，正好跟前一个数组里面的两个模块名一一对应。因为这里只是一种参数注入，所以我们使用自己喜欢的名称也是完全没问题的。

同时，`define` 既是一种引用模块的方式，也是定义模块的方式。

例如，myModule 的代码可能看上去是这样：

<script src="https://gist.github.com/iam-peekay/9fc70bb2629bca39df7b.js"></script>

所以我们可以看到，AMD 优先照顾浏览器的模块加载场景，使用了异步加载和回调的方式，这跟 CommonJS 是截然不同的。

### 3.3、UMD

对于需要同时支持 AMD 和 CommonJS 的模块而言，可以使用 UMD（Universal Module Definition）。

<script src="https://gist.github.com/iam-peekay/12a2d7c172d98daee641.js"></script>

在执行UMD规范时，会优先判断是当前环境是否支持AMD环境，然后再检验是否支持CommonJS环境，否则认为当前环境为浏览器环境（window）。

如果你写了一个小工具库，你想让它及支持AMD规范，又想让他支持CommonJS规范，那么采用UMD规范对你的代码进行包装吧。

## 4、ES6 模块

可能你已经注意到了，上面所有这些模型定义，没有一种是 JavaScript 语言原生支持的。无论是 AMD 还是 CommonJS，这些都是 JavaScript 函数来模拟的。

幸运的是，ES6 开始引入了原生的模块功能。

ES6 的原生模块功能非常棒，它兼顾了规范、语法简约性和异步加载功能。它还支持循环依赖。

最棒的是，import 进来的模块对于调用它的模块来是说是一个活的只读视图，而不是像 CommonJS 一样是一个内存的拷贝。

下面是一个 ES6 模块的示例：

<script src="https://gist.github.com/iam-peekay/b9ba699744052196c254.js"></script>

如果只希望导出某个模块的部分属性，或者希望处理命名冲突的问题，可以有这样一些导入方式：

<script src="https://gist.github.com/yuguo/80ca33a180752714e40aa801c9413771.js"></script>

### 我什么时候可以使用ES6模块？

现在就可以用！如果你现在就想在项目中加入新的模块语法，你需要使用 [Babel](http://babeljs.io/) 或 Traceur 这样的转译器。

## 总结

JavaScript 的模块模式是很有意思的话题，期望过几年之后所有的主流浏览器都可以原生支持 ES6 的模块系统，加上 HTTP2 的普及能够让同源请求有更好的性能，那时候我们也许会看到类似 `<script type=module>` 这样的代码。

不过在那之前，我们可以先用 CommonJS（Node是这样做的），或者 AMD（jQuery是这样做的），或者 [webpack](https://webpack.github.io/) 这样的“模块打包机”，或者 Babel 来学习和使用模块化的编程方式。

## 参考资料：

[JavaScript Modules: A Beginner’s Guide](https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc)

[Explain JavaScript's encapsulated anonymous function syntax](http://stackoverflow.com/questions/1634268/explain-javascripts-encapsulated-anonymous-function-syntax)

[CommonJS规范](http://javascript.ruanyifeng.com/nodejs/module.html)

[WHY AMD?](http://requirejs.org/docs/whyamd.html)

[深入浅出ES6（十六）：模块 Modules](http://www.infoq.com/cn/articles/es6-in-depth-modules)
