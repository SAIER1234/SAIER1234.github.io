---
title: 1.shell初认识
date: 2026-01-20T12:52:27+08:00
tags: [CS学习]
categories: [shell,MIT-Missing-Semester]
excerpt: 
---

# 1.shell是什么？
如今的计算机有着多种多样的交互接口让我们可以进行指令的输入，从炫酷的图像用户界面（GUI），语音输入甚至是 AR/VR 都已经无处不在。 这些交互接口可以覆盖 80% 的使用场景，但是它们也从根本上限制了您的操作方式——你不能点击一个不存在的按钮或者是用语音输入一个还没有被录入的指令。 为了充分利用计算机的能力，我们不得不回到最根本的方式，使用文字接口：Shell

# 2.使用shell

![20260120111614](https://cdn.jsdelivr.net/gh/SAIER1234/blog-images/img/20260120111614.png)

- 25435@saier MINGW64是主机名字
- ~是位置home
- $ 表非root

## 2.1简单命令
- date :输出日期
- echo xxx : 打印
注意shell的空格，参数要有空格可单引号或\转移符号

## 2.1 shell寻路原理
1.执行echo,先去$PATH找，找到就执行。
2.也可以用which,找到路径，然后直接用路径执行。
![20260120112606](https://cdn.jsdelivr.net/gh/SAIER1234/blog-images/img/20260120112606.png)

## 2.2 导航
1. 用/分割，windows则是\ .
2. 若某路径以/开头：绝对路径，否则相对路径
3. `pwd`: 获取当前工作目录。
4. `cd` : . :当前目录  ..:上级目录
5. `ls`: 查看目录底下的文件
6. 介绍标记和选项： 他们以 `-`开头 ，执行程序可用`-h` or`--help` 打印帮助信息。
7. ![alt text](image.png) d表示这是Users的一个目录。接下来9字符3个一组，分布代表文件所有者(Users),用户组，其他所有人，只有文件所有者可以改（有`w`）,其他只能读`r`  与`x`执行。
8. `mv`: 重命名或移动文件
9. `cp`: 拷贝文件
10. `mkdir` : 新建文件夹
11. 使用`man` + 程序名，会展现用户手册，按q可退出

## 2.3 程序间创建链接
正常来说键盘为输入，显示器为输出，但可重定向输入输出流。

- 使用`<和>`
![20260120114653](https://cdn.jsdelivr.net/gh/SAIER1234/blog-images/img/20260120114653.png)

- 使用管道（pipes） 与`|`:将前一个程序输出和后一个程序输入连接

## 2.4 强大工具
`sudo`

我们一般不以根用户登录，root users权限最强，怕搞破坏，所以需要时可以使用`sudo`命令。（super user do）
 `tee` : 规范标准输入输出流
 `echo 3 | sudo tee brightness` :正确。
 `sudo echo 3 | brightness`:错误，每个符号都是通过shell执行而不是程序单独执行，brightness打不开，无权限,而且brightness是文件而不是程序，前面要加上tee 

