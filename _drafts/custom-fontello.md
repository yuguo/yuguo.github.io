自定义Fontello

[fontello](http://fontello.com/)是一个开源的字体仓库，访客可以在几种开源字体中选择组合自己想要的字体之后下载。下载得到的是4份字体文件，一份CSS和一份HTML，可以直接在自己的项目中使用，非常方便。

项目本身是开源的，而且Qzone正好有需求做一份公共图标库，供内部使用，顺便也可以提供给外部使用。所以我们就考虑用Fontell来实现。

开搞之前需要有一个VPS服务器，要能安装nodejs和npm，因为Fontello下载来了之后还有很多依赖库需要自动下载。

本文不讨论如何安装，请参考[官方文档](https://github.com/fontello/fontello/blob/master/INSTALL.md)。

安装好之后在根目录：

	make dev-server

来运行服务器，这个自带forever，不要自己使用`forever start fontello`来运行，因为`dev-server`这个会侦测文件变化而自动重启服务器。