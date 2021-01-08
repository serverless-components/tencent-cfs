# 配置文档

## 全部配置

```yml
# serverless.yml

org: orgDemo # (可选) 用于记录组织信息，默认值为您的腾讯云账户 appid，必须为字符串
app: appDemo # (可选) 用于记录组织信息. 默认与name相同，必须为字符串
stage: dev # (可选) 用于区分环境信息，默认值是 dev

component: cfs # (必选) 组件名称，在该实例中为 cfs
name: clsDemo # 必选) 组件实例名称.

inputs:
  region: ap-guangzhou
  zone: ap-guangzhou-3
  name: cfs-demo
  vpc:
    vpcId: vpc-xxx
    subnetId: subnet-xxx
    # mountIp: 127.0.0.1
  storageType: SD
  pGroupId: pgroupbasic
  protocol: NFS
  tags:
    - key: slstest
      value: slstest
```

## 配置描述

主要的参数

| 名称        | 必选 |     类型      |    默认值     | 描述                           |
| ----------- | :--: | :-----------: | :-----------: | :----------------------------- |
| name        |  是  |    string     |               | 日志集名称，不能和历史名称重复 |
| region      |  是  |    string     |               | CFS 所在地域                   |
| zone        |  是  |    string     |               | CFS 所在可用区                 |
| vpc         |  是  |  [Vpc](#Vpc)  |               | VPC 配置                       |
| storageType |  否  |    string     |     `SD`      | 存储类型，目前只支持 SD        |
| pGroupId    |  否  |    string     | `pgroupbasic` | 权限组                         |
| protocol    |  否  |    string     |     `NFS`     | 文件服务协议                   |
| tag         |  否  | [Tag](#Tag)[] |               | 标签配置                       |

> 注意：对于 `protocol` 配置，如果要关联云函数，只能配置为 `NFS`。如果要挂在到客户端， Linux 推荐使用 `NFS` 协议, Windows 推荐使用 `SMB` 协议

### Vpc

| 名称     | 必选 |  类型  | 默认值 | 描述                  |
| -------- | :--: | :----: | :----: | :-------------------- |
| vpcId    |  是  | string |        | 私有网络 ID           |
| subnetId |  是  | string |        | 私有网络子网 ID       |
| mountIp  |  否  | string |        | 指定配置的私有网络 IP |

### Tag

| 名称  | 必选 |  类型  | 默认值 | 描述   |
| ----- | :--: | :----: | :----: | :----- |
| key   |  是  | string |        | 标签键 |
| value |  是  | string |        | 标签值 |
