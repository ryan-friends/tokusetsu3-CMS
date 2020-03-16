# tokusetsu3-ejs
Originated form tokusetsu3 ：
The fastest way to make doujin landing page

由sanographix老师的同人着陆页tumblr模板 tokusetsu3 制作的EJS模板。

原模板按照tumblr的范式编写，只能于tumblr上使用。**即使作者开发了gh-dev**这一专用于独立静态页面的项目分支，稍大的代码量使得制作、发布到自己的服务器上仍非常不便。我便进行了彻底的ejs重新编写。

原模板使用gulp进行打包，只使用ejs合并页面的三个部分header、index、footer，本项目利用EJS的强大网页渲染功能，大家只用在site.json中填写自己网站的信息，就可编译生成自己需要的页面。

原tumblr项目官方介绍 / Original Project：
- <https://sanographix.github.io/tokusetsu3/>

我修改的EJS模板实例网页 / EJS modified page (demo):
- <http://www.lyyousa.cn/2ndalbum>

## Feature / 特性

- 原模板需要利用tumblr的后台模板渲染机制，填写数据需要在tumblr上操作。本项目只用将自己网站的信息填入根目录的`site.json`，便可以通过gulp生成`index.ejs`到`build`目录下。将`index.ejs`修改为`index.html`即可使用。

![site.json](https://i.loli.net/2019/04/19/5cb995463af93.png)

- 自适应列表。对应的内容如果没有，也不会影响页面生成（不过你肯定看不到对应内容啦），如果STAFF表、TRACKLIST数目过多，也会自动生成更长的列表。（虽然会影响观感）

- 为中国大陆用于提供方便。增加了网易云音乐播放器、Bilibili播放器。分享到社交媒体图标增加新浪微博。


## Set Up / 安装

    $ npm install

> 注意：由于这个作品写于好几年前，目前node已经到10的版本，gulp的语法也不太一样。请按照package.json的版本要求安装。gulp版本不要超过3.9.1
> gulp-sass请使用4.0.2版本

> 请将图片文件按照原作者的要求修改为规定尺寸。可以先放在根目录的`images`目录里，gulp会自动进行压缩工作。
> 请参阅文档：<https://sanographix.github.io/tokusetsu3/docs/customize.html>

## Use / 使用

    $ gulp default
    
如果报错，可以只执行`gulp-ejs`，如果你修改了sass文件，那么请多执行一次`gulp-sass`

`/build` 以下に出力される / `/build` 得到的内容就是最终内容

## Develop / 开发工作 / 開発 

- gh-pages 開発時、 `gh-pages` ブランチでは作業せず `gh-pages-dev` を使うこと

# License

- MIT

# Author

## Original Author
- [@sanographix](https://twitter.com/sanographix)
- <http://www.sanographix.net/>

## Ejs Modified
- [@RyanPenber](http://ryanz.cn)
- <ryanz.cn>


