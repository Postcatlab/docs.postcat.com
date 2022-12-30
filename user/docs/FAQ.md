# 常见问题

## 我们和其他 API 工具的区别是什么？

> 更强的文档，可扩展的插件、更良好的体验

- 我们提供插件广场，让开发者可以在原有系统基础上拓展功能，打造和组装趁手的工具；
- 我们开源，代码完全公开；
- 我们提供更强的文档功能；

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
