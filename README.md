<!--
 * @Author: your name
 * @Date: 2020-02-22 19:17:31
 * @LastEditTime: 2020-02-22 19:33:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yjhlc:\Users\zhamgzifang\Desktop\wqd\README.md
 -->
本项目采用 vue + qiankun 实践微前端   暂未接入react文档  有需要可以给个star 会及时更新

文档采用最原生的vue，并未做任何改动，仅仅新增了几个路由，为了不误导新手，基本0css,很少多余js

同时qiankun是一个开放式微前端架构，支持当前三大前端框架甚至jq等其他项目无缝接入。

### 微前端 qiankun

微前端是什么、为什么要做微前端、qiankun是什么这些笔者将不再叙述。   
传送门：[可能是你见过最完善的微前端解决方案](https://yq.aliyun.com/articles/715922)  &  [qiankun](https://github.com/umijs/qiankun)     
下面直接进入实战教程。

## 实战教程

鉴于qiankun文档只有少少的十几行，而且不完整，所以我自己动手搭建一给 仅供小白参考~
另本项目作为长期构建项目，并不限于本文所讲基础应用，但与微前端构建太大相关的不再一一说明，有兴趣clone一一探查。

> 工程结构
```
    micro-repo
    |-----------app1
    |           
    |-----------app2
    |    
    |-----------app3
    |
    |-----------public-lib（只是作为中继站的类型同步三个app内的public-lib）       
```


## 实战教程

> 使用说明
app1到app3都需要
npm install 
```

然后全部
npm serve
```
跑起来  顺序无所谓

打开http://localhost:8080/ 就可以看到效果了

未开发完成~同步更新，带你领略不一样的微前端~

下次新增

>react环境
>传参
>页面跳转
>有具体的实现页面~

![Image text](https://github.com/1292150917/micro-repo/blob/master/img.png?raw=true)


有感想兴趣，可以加前端Q群：981047698 互相学习