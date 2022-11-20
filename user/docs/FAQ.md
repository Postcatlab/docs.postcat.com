# 常见问题
## 我们为什么要做 Eoapi？
:::info
关于 Eoapi 起源访谈：[Eotalk Vol.01：Eoapi，我们希望以开源的方式构建 API 生态系统](https://community.eolink.com/d/34163-fang-tan-eotalk-vol01eoapiwo-men-xi-wang-yi-kai-yuan-de-fang-shi-gou-jian-api-sheng-tai-xi-tong)
:::
在社区中时常会出现“抱怨某商业产品越来越臃肿”的声音，API 工具也是如此。从最早期只做 API 调试的工具，到经过多年的演进后集成全面功能的“庞然大物”，它越来越成熟了，也越来越不适合最初的那批用户了。我们并不需要用到所有的功能，自然也会觉得自己用不上的功能是“多余”的。

我们希望个性和共性能够共存，因此，我们决定发布这款极其轻量的 API 工具，基础功能仅包括 API 文档和测试，满足开发者最核心的需求。同时：

**我们选择支持拓展**：让每个功能满足所有人的需求是不可能的，通过不断地加功能满足需求只会让产品越做越重。拓展系统则不一样，一个拓展一个功能，你可以像组装乐高一样组装你想要的功能。

**我们选择拥抱开源**：我们希望将自己的技术沉淀、解决方案做成开源项目回馈给开源社区，也希望通过开源吸收社区中最棒的想法和实践，联合开发者、企业积极地共创拓展生态。



## 我们和其他 API 工具的区别是什么？
> 更强的文档，可扩展的插件、更良好的体验

* 我们提供插件广场，让开发者可以在原有系统基础上拓展功能，打造和组装趁手的工具；
* 我们开源，代码完全公开；
* 我们提供更强的文档功能；
* 我们支持将服务部署到你的服务器。


### 可拓展

Eoapi 支持拓展系统，拓展系统有两点好处：

- 可以只选择自己需要的功能，随时插拔
- 在遇到不满足现有需求的场景下，可以选择自己动手开发拓展

在开源这款产品之前，我们在商业产品中沉淀了大量用户使用 API 管理工具的实践场景，所以官方也会在每年按照一定的频率发布官方拓展，将商业产品上的沉淀贡献到开源。

同时我们将会配套相应的文档、拓展示例以及提供一系列流畅的开发者体验脚手架，让大家可以快速的上手定制趁手的“兵器”。

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
