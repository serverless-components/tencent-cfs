## 部署 output 参数介绍

| 名称        | 类型          | 描述             |
| ----------- | ------------- | ---------------- |
| name        | string        | 文件系统名称     |
| cfsId       | string        | 文件系统 ID      |
| region      | string        | 所属地域         |
| storageType | string        | 存储类型         |
| pGroupId    | string        | 权限组 ID        |
| protocol    | string        | 文件服务协议     |
| vpc         | [Vpc](#Vpc)   | 私有网络相关配置 |
| tags        | [Tag](#Tag)[] | 标签配置         |

### Vpc

| 名称     |  类型  | 描述                  |
| -------- | :----: | :-------------------- |
| vpcId    | string | 私有网络 ID           |
| subnetId | string | 私有网络子网 ID       |
| mountIp  | string | 指定配置的私有网络 IP |

### Tag

| 名称  |  类型  | 描述   |
| ----- | :----: | :----- |
| key   | string | 标签键 |
| value | string | 标签值 |
