## 内网部署

Eoapi 提供两套数据源：

- 本地数据源：可单机/离线使用，IndexedDB 数据库
- 远程数据源：可远程协作，Node.js+MySQL

## 服务器部署

1. 在服务器 Clone 仓库

```
git clone https://github.com/eolinker/eoapi-remote-server
```

2. 环境变量配置

>*如果你没有配置需求，可以跳过此步骤，系统会使用默认配置启动*

在 `.env` 文件中统一配置 TOKEN 以及 MySQL 连接、端口等配置信息。

```bash
# auth token
API_KEY=1ab2c3d4e5f61ab2c3d4e5f6

# eoapi-server coinfigure
EOAPI_SERVER_PORT=3000

# mysql configure
TZ=Asia/Shanghai
# 映射到宿主机端口号
MYSQL_PORT=33066
MYSQL_USERNAME=root
MYSQL_DATABASE=eoapi
MYSQL_PASSWORD=123456a.
MYSQL_ROOT_PASSWORD=123456a.
```

默认情况下，在 `src/config/ormconfig.ts` 和 `docker-compose.yaml` 文件中统一使用了 `.env` 配置里的环境变量，比如：服务端口号、MySQL 连接等信息。

3. 使用 Docker 一键部署

启动成功后，通过 <http://localhost:3000> 访问。

```bash
docker-compose up -d --build
```

查看实时日志输出

```bash
docker-compose logs -f
```


如图，项目启动成功
![](../assets/images/2022-06-15-19-00-12.png)

## 服务升级

关闭服务后，运行迁移脚本，再重启服务即可。

```
npm run migration:run
```

## 客户端配置

点击配置，填入服务器地址、Token 后即可远程协作即可使用远程数据源。
![](../assets/images/2022-06-16-12-22-11.png)
