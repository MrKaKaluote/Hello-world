# ngnix相关（仅了解就好）ngnix5

### 特点

1. 多进程单线程（多个进程里只有一个线程）
2. 多进程提高并发率，进程相互独立 ，互不影响
3. 异步阻塞IO（IO多路复用，多IO复用单线程）

<img src="/Users/gaosong/Library/Application Support/typora-user-images/image-20201020201633992.png" alt="image-20201020201633992" style="zoom:50%;" />

 ### 常用命令

1. ngnix -s reload 重启ngnix



### 常见配置文件及语法

1. /etc/ngnix/ngnix.conf  主配置文件

   <img src="/Users/gaosong/Library/Application Support/typora-user-images/image-20201020210741941.png" alt="image-20201020210741941" style="zoom:50%;" />

2. server：每个server对应一个网站



### 参考资料

https://mp.weixin.qq.com/s/ASSXNzmYJYbxNIhvSZ27Hg