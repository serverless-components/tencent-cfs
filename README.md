## 组件概述

**腾讯云 cfs 云函数组件**通过使用 [Tencent Serverless Framework](https://github.com/serverless/components/tree/cloud)，便捷极速管理您的 [文件系统服务](https://console.cloud.tencent.com/cfs)。

## 快速入门

### 前提条件

- 已安装 Serverless Framework（参考 [安装 Serverless Framework](https://cloud.tencent.com/document/product/1154/42990)）
- 账号开通 Serverless 相关权限（参考 [账号和权限配置](https://cloud.tencent.com/document/product/1154/43006)）

### 操作步骤

#### 创建

```bash
$ mkdir cfs-example && cd cfs-example
```

#### 配置 serverless.yml

CFS 相关参数需要通过项目目录下的 serverless.yml 文件指定：

> **说明**：配置详情请参考 [全量配置文档](https://github.com/serverless-components/tencent-cfs/blob/master/docs/configure.md)。

```
# cls组件配置样例
# 全量配置参考 https://github.com/serverless-components/tencent-cfs/blob/master/docs/configure.md

# 组件信息
component: cfs
name: cfsdemo

# 组件参数
inputs:
  name: cfs-test
  region: ap-guangzhou
  zone: ap-guangzhou-3
  vpc:
    vpcId: vpc-xxx
    subnetId: subnet-xxx
```

#### 部署

在 `serverless.yml` 文件所在的项目根目录，运行以下指令，将会弹出二维码，直接扫码授权进行部署:

```
$ serverless deploy
```

> **说明**：如果鉴权失败，请参考 [权限配置](https://cloud.tencent.com/document/product/1154/43006) 进行授权。

部署成功后控制台输出参数介绍请参考 [output 文档](https://github.com/serverless-components/tencent-cfs/blob/master/docs/output.md)

#### 查看

执行以下命令，查看您部署的项目信息：

```
$ serverless info
```

#### 移除

执行以下命令，移除您已经部署的项目：

```
$ serverless remove
```

### 账号权限

部署实例时需要账号授权去操作具体的云资源，目前可以通过两种方式进行授权：**扫码授权**和**密钥授权**。

- **扫码授权**：能快速进行授权部署，但生成的凭证是临时凭证，过期后需要重新扫码。
- **密钥授权**：能够获得永久授权，需要预先配置账号的 SecretId 和 SecretKey 。

配置详情可参考 [权限配置](https://cloud.tencent.com/document/product/1154/43006)。

### 应用管理

Serverless 部署一个组件实例实质是部署了一个单组件实例的应用。

在应用项目开发过程中，一个应用下可能会存在多个组件实例，如何管理组件实例进行应用项目开发，请参考 [应用管理](https://cloud.tencent.com/document/product/1154/48261)。

## License

MIT License

Copyright (c) 2020 Tencent Cloud, Inc.
