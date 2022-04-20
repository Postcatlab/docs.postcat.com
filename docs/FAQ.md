---
title: 常见问题
---
## 我们为什么要做 Eoapi？

在社区中时常会出现“抱怨某商业产品越来越臃肿”的声音，API 工具也是如此。从最早期只做 API 调试的工具，到经过多年的演进后集成全面功能的“庞然大物”，它越来越成熟了，也越来越不适合最初的那批用户了。我们并不需要用到所有的功能，自然也会觉得自己用不上的功能是“多余”的。

我们希望个性和共性能够共存，因此，我们决定发布这款极其轻量的 API 工具，基础功能仅包括 API 文档和测试，满足开发者最核心的需求。同时：

**我们选择支持插件**：让每个功能满足所有人的需求是不可能的，通过不断地加功能满足需求只会让产品越做越重。插件系统则不一样，一个插件一个功能，你可以像组装乐高一样组装你想要的功能。

**我们选择拥抱开源**：我们希望将自己的技术沉淀、解决方案做成开源项目回馈给开源社区，也希望通过开源吸收社区中最棒的想法和实践，联合开发者、企业积极地共创插件生态。

## Eoapi 的核心价值是什么？

<!-- ### 文档驱动开发的理念 -->

### 可拓展

Eoapi 支持插件系统，插件系统有两点好处：

- 可以只选择自己需要的功能，随时插拔
- 在遇到不满足现有需求的场景下，可以选择自己动手开发插件

在开源这款产品之前，我们在商业产品中沉淀了大量用户使用 API 管理工具的实践场景，所以官方也会在每年按照一定的频率发布官方插件，将商业产品上的沉淀贡献到开源。

同时我们将会配套相应的文档、插件示例以及提供一系列流畅的开发者体验脚手架，让大家可以快速的上手定制趁手的“兵器”。

## 请求体格式有哪些？
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
有两种格式的 Form-data（表单） 数据，`multipart/form-data` 和 `application/x-www-form-urlencoded`;

现代浏览器中，使用表单提交请求的情况已经比较少了，所以用得比较多的是 `application/x-www-form-urlencoded`，但是有一个特例，如果你的请求需要上传文件，那请求体格式无疑是 `multipart/form-data` 了。

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

# API 是什么？
API 即"应用编程接口"，是世界上所有软件的基本组成部分，企业通过开发和组合不同的API接口来形成我们所用的各种软件，今天我们所使用的所有互联网服务，比如发送短信、查看天气、在线支付、语音识别等，背后都是大量的第三方 API 为我们提供服务。

因此 API 是目前互联网中最通用的通讯方式，来自全球的开发者和企业都通过 API 来为用户提供标准化的数据和服务、帮助软件完成系统的集成、帮助其他开发者快速构建新的产品等。
## API 有关的趋势
早期的电话网络是靠人工接线，拿起电话要对接线员说要接哪里的线，但是当电话的数量多了，接线员效率再高也忙不过来，最终演进成一套自动化的公共交换电话网。同样的，计算机设备和信息变多了之后，因此通信的需求也会增加。

在以前单体架构下，我们可以使用系统调用、事件、共享内存多种手段进行进程间的通信，但是当大家都开始将软件搬到云端，我们的业务系统开始在多个计算机之间运行后，我们几乎只能使用 API 来进行通信，毫无疑问 API 成了一个重要的组成部分。

甚至除了我们的业务系统本身，工具也需要使用API来进行通信，例如 k8s，它通过网络协议接口与各个子容器通信。站在技术的角度来看，API 甚至可以共享、可以抽象、可以分层，比如“中台”的诞生就是 API 演进的一个产物，各个子系统在内部实现上可能有自己的风格和规范，但在子系统互相通信的时候，必然是互相以 API 为通信标准。

事实上，经过我们的观察，在近些年的每一轮技术热潮中，API 的重要性都是越来越显著。包括区块链、物联网、还有当下最热门的元宇宙，其中一个明显的趋势是每一轮技术热潮，都是在试图将越来越多的终端连接在一起。不管最终的产品目的是为了计算、安全还是社交，在跨平台、跨终端、甚至跨网络的需求下，API 都是比较可靠甚至是唯一的选择。

我们国家的人口是海量的，我们的网络覆盖率也非常高，在这样的条件和趋势下，无论什么行业领域，只要是跟信息技术相关的软件产品，无论具体方向是什么，我们未来需要连接的人和设备只会越来越多，API 作为连接各个终端的纽带，说是中流砥柱也不过分。

在如今微服务、云服务的大趋势和大背景下，伴随着信息产业不断地优化和升级，API 在其中所扮演的角色越来越举足轻重，也就必然需要好的管理方案。