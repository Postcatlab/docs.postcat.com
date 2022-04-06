---
title: 概念
---
## API 是什么？
API 即"应用编程接口"，是世界上所有软件的基本组成部分，企业通过开发和组合不同的API接口来形成我们所用的各种软件，今天我们所使用的所有互联网服务，比如发送短信、查看天气、在线支付、语音识别等，背后都是大量的第三方 API 为我们提供服务。

因此 API 是目前互联网中最通用的通讯方式，来自全球的开发者和企业都通过 API 来为用户提供标准化的数据和服务、帮助软件完成系统的集成、帮助其他开发者快速构建新的产品等。
## API 有关的趋势
早期的电话网络是靠人工接线，拿起电话要对接线员说要接哪里的线，但是当电话的数量多了，接线员效率再高也忙不过来，最终演进成一套自动化的公共交换电话网。同样的，计算机设备和信息变多了之后，因此通信的需求也会增加。

在以前单体架构下，我们可以使用系统调用、事件、共享内存多种手段进行进程间的通信，但是当大家都开始将软件搬到云端，我们的业务系统开始在多个计算机之间运行后，我们几乎只能使用 API 来进行通信，毫无疑问 API 成了一个重要的组成部分。

甚至除了我们的业务系统本身，工具也需要使用API来进行通信，例如 k8s，它通过网络协议接口与各个子容器通信。站在技术的角度来看，API 甚至可以共享、可以抽象、可以分层，比如“中台”的诞生就是 API 演进的一个产物，各个子系统在内部实现上可能有自己的风格和规范，但在子系统互相通信的时候，必然是互相以 API 为通信标准。

事实上，经过我们的观察，在近些年的每一轮技术热潮中，API 的重要性都是越来越显著。包括区块链、物联网、还有当下最热门的元宇宙，其中一个明显的趋势是每一轮技术热潮，都是在试图将越来越多的终端连接在一起。不管最终的产品目的是为了计算、安全还是社交，在跨平台、跨终端、甚至跨网络的需求下，API 都是比较可靠甚至是唯一的选择。

我们国家的人口是海量的，我们的网络覆盖率也非常高，在这样的条件和趋势下，无论什么行业领域，只要是跟信息技术相关的软件产品，无论具体方向是什么，我们未来需要连接的人和设备只会越来越多，API 作为连接各个终端的纽带，说是中流砥柱也不过分。

在如今微服务、云服务的大趋势和大背景下，伴随着信息产业不断地优化和升级，API 在其中所扮演的角色越来越举足轻重，也就必然需要好的管理方案。
## 不同的请求体格式
### JSON
```json
{
  "string": "test",
  "array": [{ "dom1": {}, "dom2": false, "dom3": [] }],
  "object": { "dom1": "", "dom2": 0 },
  "null": null,
  "float": 11.11,
  "int": 1,
  "boolean": false
}
```
### Form-data
1. Form-data[content-type="multipart/form-data;"]

![](../assets/images/formdata.png) 

```Text
------WebKitFormBoundaryNWnXbkVpqUPjFVZq
Content-Disposition: form-data; name="multiple"

2
------WebKitFormBoundaryNWnXbkVpqUPjFVZq
Content-Disposition: form-data; name="formDataStructure"

formDataStructure
------WebKitFormBoundaryNWnXbkVpqUPjFVZq--
```

2. Form-data[content-type="application/x-www-form-urlencoded"]

![](../assets/images/form-data-x-www.png) 

```text
a=1&b=2
```
### XML
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<root>
  <type version="1.0">projectMember</type>
  <statusCode version="webGlobalVal">000000</statusCode>
  <memberList>
    <memberNickName/>
    <inviteCall>2177295417@qq.com</inviteCall>
    <userNickName>[\u968f\u673a]\u65e0\u5d16\u5b50</userNickName>
    <userImage/>
  </memberList>
</root>
```
### Raw
```text
random text string
```