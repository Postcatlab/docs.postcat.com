# 导入

可以使用导入类插件将其他平台的数据导入到 Postcat 。

## 示例代码

[postcat to openapi](https://github.com/eolinker/postcat-extensions/tree/main/packages/postcat-export-openapi)

## 配置

```javascript
// index.js

// * 导出方式必须是命名导出，方法名需要与配置中的 action 字段一致
export const importFunc = (data = {}) => {
  // * 传入参数是其他平台（如openapi）的API数据结构
  return {
    name: "postcat",
  };
};
```

```json
// package.json
{
  "name": "postcat-foo", // npm包名称
  "version": "1.0.0",
  "description": "The import extension of postcat",
  "main": "dist/index.js",
  "logo": "https://s3.bmp.ovh/imgs/2022/05/18/d8d200e3dc050831.png",
  "scripts": {
    "build": "rollup -c rollup.config.js",
    "build:watch": "rollup -w -c rollup.config.js"
  },
  "devDependencies": {
    "rollup": "^2.70.2"
  },
  "features": {
    "importAPI": {
      "action": "importFunc", // 需要与 index.js 中的主函数名保持一致
      "label": "Data(.json)", // 显示在 UI 上导入区域的名称
      "description": "", // 插件的简要描述
      "icon": ""
    }
  }
}
```

当用户触发导入行为后，主系统会调用相应的导入函数（在本例中是`importFunc`）, 并将导入后的数据即时显示在 API 列表中。

## 导入格式 JSON-Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "ApiBodyType": {
      "nullable": true,
      "enum": ["binary", "formData", "json", "raw", "xml"],
      "type": "string"
    },
    "ApiEditBody": {
      "properties": {
        "attribute": {
          "description": "XML attribute",
          "type": "string"
        },
        "children": {
          "description": "子参数",
          "items": {
            "$ref": "#/definitions/ApiEditBody"
          },
          "type": "array"
        },
        "description": {
          "description": "说明",
          "type": "string"
        },
        "enum": {
          "description": "值可能性",
          "items": {
            "$ref": "#/definitions/ParamsEnum"
          },
          "type": "array"
        },
        "example": {
          "description": "param example",
          "type": "string"
        },
        "maxLength": {
          "description": "最大长度",
          "type": "number"
        },
        "maximum": {
          "description": "最大值",
          "type": "number"
        },
        "minLength": {
          "description": "最小长度",
          "type": "number"
        },
        "minimum": {
          "description": "最小值",
          "type": "number"
        },
        "name": {
          "description": "参数名",
          "type": "string"
        },
        "required": {
          "description": "is response/request must contain param",
          "type": "boolean"
        },
        "type": {
          "description": "参数类型",
          "type": "string"
        }
      },
      "type": "object"
    },
    "BasiApiEditParams": {
      "properties": {
        "description": {
          "description": "说明",
          "type": "string"
        },
        "enum": {
          "description": "值可能性",
          "items": {
            "$ref": "#/definitions/ParamsEnum"
          },
          "type": "array"
        },
        "example": {
          "description": "param example",
          "type": "string"
        },
        "name": {
          "description": "参数名",
          "type": "string"
        },
        "required": {
          "description": "is response/request must contain param",
          "type": "boolean"
        }
      },
      "type": "object"
    },
    "JsonRootType": {
      "description": "body type is json,set root type of object/array",
      "enum": ["array", "object"],
      "nullable": true,
      "type": "string"
    },
    "ParamsEnum": {
      "properties": {
        "default": {
          "description": "is default param value",
          "type": "boolean"
        },
        "description": {
          "description": "param value description",
          "type": "string"
        },
        "value": {
          "description": "param value",
          "type": "string"
        }
      },
      "description": "ParamsEnum",
      "type": "object"
    },
    "RequestMethod": {
      "enum": ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"],
      "type": "string"
    },
    "RequestProtocol": {
      "enum": ["http", "https"],
      "type": "string"
    }
  },
  "properties": {
    "createdAt": {
      "description": "创建时间，可为空",
      "type": "string"
    },
    "groupID": {
      "type": "number",
      "default": 0
    },
    "method": {
      "$ref": "#/definitions/RequestMethod",
      "default": "POST",
      "description": "Request method [POST, GET, PUT, ...]"
    },
    "name": {
      "description": "name",
      "type": "string"
    },
    "projectID": {
      "description": "Belongs to which project",
      "type": "number"
    },
    "protocol": {
      "$ref": "#/definitions/RequestProtocol",
      "description": "API protocol [http, https, ...]"
    },
    "queryParams": {
      "description": "get请求参数，数据用json存储",
      "type": "array",
      "items": {
        "$ref": "#/definitions/BasiApiEditParams"
      },
      "default": []
    },
    "requestBody": {
      "anyOf": [
        {
          "items": {
            "$ref": "#/definitions/ApiEditBody"
          },
          "type": "array",
          "default": []
        },
        {
          "type": "string",
          "default": ""
        }
      ],
      "default": "",
      "description": "请求参数(多层结构)，数据用json存储"
    },
    "requestBodyJsonType": {
      "$ref": "#/definitions/JsonRootType",
      "description": "请求的json参数根类型",
      "default": "object"
    },
    "requestBodyType": {
      "$ref": "#/definitions/ApiBodyType",
      "description": "请求的参数类型",
      "default": "raw"
    },
    "requestHeaders": {
      "description": "请求头数据，数据用json存储",
      "items": {
        "$ref": "#/definitions/BasiApiEditParams"
      },
      "type": "array",
      "default": []
    },
    "responseBody": {
      "anyOf": [
        {
          "items": {
            "$ref": "#/definitions/ApiEditBody"
          },
          "type": "array"
        },
        {
          "type": "string"
        }
      ],
      "description": "Response(多层结构)，数据用json存储",
      "default": ""
    },
    "responseBodyJsonType": {
      "$ref": "#/definitions/JsonRootType",
      "description": "Responsejson根类型",
      "default": "object"
    },
    "responseBodyType": {
      "$ref": "#/definitions/ApiBodyType",
      "description": "返回的参数类型",
      "default": "raw"
    },
    "responseHeaders": {
      "description": "返回头数据，数据用json存储",
      "type": "array",
      "items": {
        "$ref": "#/definitions/BasiApiEditParams"
      },
      "default": []
    },
    "restParams": {
      "description": "rest请求参数，数据用json存储",
      "items": {
        "$ref": "#/definitions/BasiApiEditParams"
      },
      "type": "array",
      "default": []
    },
    "updatedAt": {
      "description": "更新时间，可为空",
      "type": "string"
    },
    "uri": {
      "description": "Request url,Usually value is path",
      "type": "string"
    },
    "uuid": {
      "description": "主键UUID，字符串UUID或数值型",
      "type": "number"
    },
    "weight": {
      "description": "api show order",
      "type": "number",
      "default": 0
    }
  },
  "required": ["method", "name", "uri", "protocol"],
  "additionalProperties": false,
  "type": "object"
}
```
