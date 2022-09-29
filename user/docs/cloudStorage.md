# 云端服务

我们可以通过配置云端服务将数据储存在云端，实现协作和共享数据。

## 部署服务

服务依赖 Node.js，为了避免乱七八糟的环境问题，我们通过 Docker 安装部署应用。

### 环境

在开始部署前，请准备好以下环境：

- Docker: 版本需高于 v20.10，可以参考[安装指南](https://www.runoob.com/docker/macos-docker-install.html)安装；
- Git：[安装指南](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)。

<!-- - 调试可以使用[桌面端下载](https://www.docker.com/products/docker-desktop/) -->

### 克隆仓库

命令行运行以下命令拉取仓库代码

```
git clone https://github.com/eolinker/eoapi-remote-server
cd eoapi-remote-server
```

### 配置环境变量

:::warning
如果你不需要使用原有 MySQL 数据库，**可以[跳过此步骤](#使用-docker-一键启动)**，服务会将数据储存到容器内 MySQL。
:::

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

### 使用 Docker 一键启动

在项目代码根目录下，运行下面命令。

```bash
docker-compose up -d --build
```

如图代表启动成功，可通过 `http://<server_url>:3000` 访问服务。
![](../assets/images/2022-09-28-17-43-50.png)

## 服务升级

:::warning
升级前建议做好数据库备份
:::

关闭正在运行的 Docker 服务，拉取最新的代码，再重新创建镜像即可升级成功～

```
docker stop eoapi-remote-server
git pull
docker-compose up -d --build
```

## 服务监控

### 查看实时日志输出

如果需要查看运行日志，可以运行下面命令

```bash
docker-compose logs -f
```

## 客户端配置

点击设置，填入服务器地址、Token 后即可远程协作即可使用远程数据源。
![](../assets/images/2022-09-14-16-48-50.png)

## 常见问题

### Docker TLS handshake timeout

```shell
ERROR: Head "https://registry-1.docker.io/v2/library/mysql/manifests/latest": net/http: TLS handshake timeout
```

国外镜像的原因，可以打开代理或者国内镜像安装

### MacOS 系统 Docker is not shared from the host and is not known to Docker

![](../assets/images/2022-09-28-17-36-05.png)
配置 Docker 文件分享路径后，重启命令行再次执行命令即可解决
![](../assets/images/2022-09-28-17-37-57.png)
