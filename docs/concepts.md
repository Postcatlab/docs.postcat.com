---
title: 概念
---
## API 是什么？
API 即"应用编程接口"，是世界上所有软件的基本组成部分，企业通过开发和组合不同的API接口来形成我们所用的各种软件，今天我们所使用的所有互联网服务，比如发送短信、查看天气、在线支付、语音识别等，背后都是大量的第三方 API 为我们提供服务。

因此 API 是目前互联网中最通用的通讯方式，来自全球的开发者和企业都通过 API 来为用户提供标准化的数据和服务、帮助软件完成系统的集成、帮助其他开发者快速构建新的产品等。
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