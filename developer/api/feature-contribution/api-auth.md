# 鉴权

我们可以通过配置鉴权信息生成测试代码，在测试前对 API 请求数据进行处理后再添加到头部、Query 等请求信息中。

![](/assets/images/2023-04-04-15-16-23.png)
![](/assets/images/2023-04-04-15-17-20.png)

## 示例代码

[Basic Auth](https://github.com/Postcatlab/postcat-extensions/tree/main/packages/postcat-basic-auth)

## 配置

```json
{
  "name": "postcat-basic-auth",
  "title": "Basic Authorization",
  "description": "Basic Auth is an HTTP-based security authentication mechanism that adds the Authorization field to the request header.",
  "categories": ["API Testing"],
  "features": {
    "authAPI": {
      "action": "authAPI",
      "label": "Basic Auth",
      "configuration": {
        "type": "object",
        "properties": {
          "username": {
            "type": "string",
            "placeholder": "username",
            "label": "Username",
            "required": true
          },
          "password": {
            "type": "string",
            "placeholder": "password",
            "format": "password",
            "label": "Password"
          }
        }
      }
    }
  }
}
```

## 代码

生成前置脚本可以运行的代码字符串，在执行完前置脚本后，会执行鉴权脚本操作请求数据。

```javascript
module.exports = {
  authAPI: (config) => {
    const headerValue = `Basic ${Buffer.from(`${config.username || ""}:${config.password}`).toString("base64")}`;
    return `pc.request.headers.add({
      key:'Authorization', value:'${headerValue}'
    })`;
  },
};
```
