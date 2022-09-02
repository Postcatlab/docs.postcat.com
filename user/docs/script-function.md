# 前后置脚本

脚本分为 前置脚本 和 后置脚本 两种，分别对应 API 请求前 和 返回数据后 的两个阶段。
您可以通过编写 Javascript 代码，在 API 前置脚本中改变请求参数，或者是在 API 后置脚本中改变返回结果。

> 脚本常用于以下几种情况：

- API 请求前对请求参数进行复制、加解密等操作，比如进行 Body 进行整体签名
- API 返回结果后对结果进行解密、断言等

发起的 API 请求会依次经过以下流程。其中如果您没有编写相应的 API 脚本，则会略过 API 脚本处理阶段。
![](../assets/images/2022-07-16-00-22-54.png)

# 内置函数
## HTTP 请求相关
```
//输出信息
eo.info(data);

//中止测试并输出信息
eo.stop(data);

//断言失败并输出信息
eo.error(data);

//使用JsonPath语句提取内容
eo.jsonpath("jsonpath语句",data);

//使用XPath语句提取内容
eo.xpath("xpath语句",data);

//插入一个内置的文件
eo.file(file Type);

//插入一个内置的图片文件
eo.img(file Type);

//获取原始的http协议url，不包含环境的base url，比如/user/login/{user_type}?user_name={{name}}
eo.http.url.get();

//获取经过解析处理后的http协议url，包含环境的base url，比如www.eolinker.com/user/login/admin?user_name=jackliu
eo.http.url.parse();

//设置http协议url，比如/user/login/admin?user_name={{name}}
eo.http.url.set("new_url");

//获取http协议请求头部参数值
eo.http.header.get("param_key");

//设置http协议请求头部参数值
eo.http.header.set("param_key","param_value");

//删除http协议header参数
eo.http.header.unset("param_key");

//清空http协议header参数
eo.http.header.clear;

//获取http协议query参数
eo.http.query.get("param_key");

//设置http协议query参数
eo.http.query.set("param_key","param_value");

//删除http协议query参数（删除后不会出现在地址栏中）
eo.http.query.unset("param_key");

//清空http协议query参数
eo.http.query.clear;

//获取http协议rest参数
eo.http.rest.get("param_key");

//设置http协议rest参数
eo.http.rest.set("param_key","param_value");

//删除http协议rest参数
eo.http.rest.unset("param_key");

//清空http协议rest参数
eo.http.rest.clear;

//获取http协议返回结果
eo.http.response.get();

//设置http协议返回结果
eo.http.response.set("response_value");

//获取返回头部内容
responseHeaders;

//获取返回头部中的某个参数
responseHeaders["param_key"];
```

# 示例
## eo.info(data);
**函数说明**
输出信息

**示例**
![](http://data.eolinker.com/shGk72Z173deb3709d204de49667490c97778e098d581f9)

## eo.stop(data);
**函数说明**
中止测试并输出信息

**示例**
![](http://data.eolinker.com/ZKUANVW8b37a719b1e33b8ceccea2d938456fbe948872b5)

## eo.error(data);
**函数说明**
断言失败并输出信息

**示例**
![](http://data.eolinker.com/YTEjVr1784eab0ecd960af8e5d224971d4f44d1be8a498d)

![](http://data.eolinker.com/rPfXZ8Z618ea3648a81966c131aff362637a17713a9f90b)

## eo.jsonpath("jsonpath语句",data);
**函数说明**
使用JsonPath语句提取内容

**示例**
![](http://data.eolinker.com/wgB6YWB84bb8167392082ae0269b95caf6ac9d589f37583)

## eo.xpath("xpath语句",data);
**函数说明**
使用XPath语句提取内容

**示例**
![](http://data.eolinker.com/InA3AhX7737fa963edccd5fe80bd9e44adaf0a77127bb83)


**示例**
![](http://data.eolinker.com/JeUMG2e824c25c6a10f4470016512ed9d77063d60b5964f)

## eo.http.url.get();
**函数说明**
获取原始的http协议url，不包含环境的base url，比如/user/login/{user_type}?user_name={{name}}

**示例**
![](http://data.eolinker.com/lVcB1hlc24354705712c1a35e227d60a1cc951553728005)

## eo.http.url.parse();
**函数说明**
获取经过解析处理后的http协议url，包含环境的base url，比如www.eolinker.com/user/login/admin?user_name=jackliu

**示例**
![](http://data.eolinker.com/nFAruW2bbd9022517fe570e49e6a68a75548cb6c537550d)

## eo.http.url.set("new_url");
**函数说明**
设置http协议url，比如/user/login/admin?user_name={{name}}

**示例**
![](http://data.eolinker.com/zL5ymRWfe4b69eba99801f838d8cd7126465c341e5829a5)

## eo.http.header.get("param_key");
**函数说明**
获取http协议请求头部参数值

**示例**
![](http://data.eolinker.com/Ge1F5WR2facc43c50a943f4030f667569616ddce661c129)

![](http://data.eolinker.com/68H7fPv6cbaa15a08faba658583dac12638e2ebccfcca2a)

## eo.http.header.set("param_key","param_value");
**函数说明**
设置http协议请求头部参数值

**示例**
![](http://data.eolinker.com/YR6WUmwe9037580ab87ec235ffecfb8094a345da481dc3e)

## eo.http.header.unset("param_key");
**函数说明**
删除http协议header参数

**示例**
![](http://data.eolinker.com/uhEM3pJa4438fc0e1a01f82dfc4111ce8c74249fd587d5b)

![](http://data.eolinker.com/5KTlWYl9c0cc832744deb4d9e4b4271a89601a9b5e0b554)

## eo.http.header.clear();
**函数说明**
清空http协议header参数

**示例**
![](http://data.eolinker.com/1XSDALDef6585efd3eb0837373091c1f926fa6315de9e20)

![](http://data.eolinker.com/CRvdElme816b6bbca5b7332d920a3b842d74eb32fb82112)

## eo.http.query.get("param_key");
**函数说明**
获取http协议query参数

**示例**
![](http://data.eolinker.com/URk2UpMcecde7c13031d78dc037fbe77576b838083544f8)

## eo.http.query.set("param_key","param_value");
**函数说明**
设置http协议query参数

**示例**
![](http://data.eolinker.com/cPr4mr102f50f3ed6ddeb16c6eef8ad02cff7deb898fa4e)

## eo.http.query.unset("param_key");
**函数说明**
删除http协议query参数（删除后不会出现在地址栏中）

**示例**
![](http://data.eolinker.com/qJAgRyx365718e64c8b5d38e350e6318f152ed7a257127a)

## eo.http.query.clear();
**函数说明**
清空http协议query参数

**示例**
![](http://data.eolinker.com/YZ2RNmsd73ca1782ba245c0e54f1f660105a04a70510918)

## eo.http.rest.get("param_key");
**函数说明**
获取http协议rest参数

## eo.http.rest.set("param_key","param_value");
**函数说明**
设置http协议rest参数

## eo.http.rest.unset("param_key");
**函数说明**
删除http协议rest参数

## eo.http.rest.clear();
**函数说明**
清空http协议rest参数

## eo.http.response.get();
**函数说明**
获取http协议返回结果

**示例**
![](http://data.eolinker.com/Yeml3bx9aaba24e6849c49f927d18eef9f6cfd128475f52)

## eo.http.response.set("response_value");
**函数说明**
设置http协议返回结果

**示例**
![](http://data.eolinker.com/AESvHBC862bc0f18c80ef9c54f5267b340a58e24964fd6a)