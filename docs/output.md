## 部署 output 参数介绍

| 名称        | 类型        | 描述             |
| ----------- | ----------- | ---------------- |
| name        | string      | 文件系统名称     |
| cfsId       | string      | 文件系统 ID      |
| region      | string      | 所属地域         |
| storageType | string      | 存储类型         |
| pGroupId    | string      | 权限组 ID        |
| protocol    | string      | 文件服务协议     |
| vpc         | [Vpc](#Vpc) | 私有网络相关配置 |

### Vpc

| 名称     | 必选 |  类型  | 默认值 | 描述                  |
| -------- | :--: | :----: | :----: | :-------------------- |
| vpcId    |  是  | string |        | 私有网络 ID           |
| subnetId |  是  | string |        | 私有网络子网 ID       |
| mountIp  |  否  | string |        | 指定配置的私有网络 IP |
