# 云端服务

我们可以通过配置云端服务将数据储存在云端，实现协作和共享数据。

## 环境

服务依赖 Node.js，为了避免乱七八糟的环境问题，我们通过 Docker 安装部署应用。
所以在开始部署前，请准备好以下环境：

- Docker: 版本需高于 v20.10，可以参考[安装指南](https://www.runoob.com/docker/macos-docker-install.html)安装；
- Git：[安装指南](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)。

<!-- - 调试可以使用[桌面端下载](https://www.docker.com/products/docker-desktop/) -->

## 克隆仓库

在命令行运行以下命令拉取仓库代码

```
git clone https://github.com/eolinker/eoapi-remote-server
cd eoapi-remote-server
```

## 配置环境变量

:::warning
如果你不需要使用原有 MySQL 数据库，**可以[跳过此步骤](#使用-docker-一键启动)**，服务会将数据储存到容器内 MySQL。
:::

在 `.env` 文件中统一配置 TOKEN 以及 MySQL 连接、端口等配置信息。

```bash
# auth token
API_KEY=1ab2c3d4e5f61ab2c3d4e5f6

# secret
JWT_SECRET=123456

# eoapi-server coinfigure
EOAPI_SERVER_PORT=3008
EOAPI_SERVER_PATH=/api

# mysql configure
TZ=Asia/Shanghai
# mysql的主机地址，如果连接的是docker容器内部的mysql，需要改为：host.docker.internal
MYSQL_HOST=localhost
# 映射到宿主机端口号
MYSQL_PORT=33066
MYSQL_USERNAME=root
MYSQL_DATABASE=eoapi
MYSQL_PASSWORD=123456a.
MYSQL_ROOT_PASSWORD=123456a.

# swagger
SWAGGER_PATH=swagger-docs
SWAGGER_ENABLE=true
SWAGGER_VERSION=1.0
SWAGGER_TITLE=Eoapi-remote-server API文档
SWAGGER_DESC=Eoapi remote server API document。
```

默认情况下，在 `src/config/ormconfig.ts` 和 `docker-compose.yaml` 文件中统一使用了 `.env` 配置里的环境变量，比如：服务端口号、MySQL 连接等信息。

## 启动服务

如果你的服务器可以联网，可以通过在线部署一键启动。
如果无法联网，请在联网环境打包离线的镜像包后到离线环境下运行。

### 在线部署

在项目代码根目录下，运行下面命令。

```bash
docker-compose up -d --build
```

如图代表启动成功，可通过 `http://<server_url>:3000` 访问服务。
![](../assets/images/2022-09-28-17-43-50.png)

### 离线部署

> 需要先在有网的环境生成镜像，并导入内网`Docker`环境。

在项目根目录下执行以下步骤：

#### 构建镜像

```bash
docker compose build
```

执行查看镜像是否打包成功。

```bash
docker images
```

如图所示，镜像打包成功。
![](../assets/images/2022-09-29-10-14-49.png)

#### 导出镜像

导出制作号的镜像为本地文件。

```bash
# 语法格式： docker save {目标镜像} -o /{导出位置}/{导出镜像的名称}.tar
docker save eoapi-remote-server -o ./eoapi-remote-server.tar
```

#### 导入镜像

在离线环境中加载上面我们制作好的本地镜像

```bash
 docker load < ./eoapi-remote-server.tar
```

#### 运行镜像

```bash
 docker run --name eoapi-remote-server -d -p 3000:3000 eoapi-remote-server
```

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
