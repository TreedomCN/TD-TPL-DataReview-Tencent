# 腾讯数据回顾类交互模板

### 一、依赖安装

```javascript
pnpm i
```

### 二、体验链接自动化部署

一行命令自动资源到七牛，部署html到FTP

#### 1、安装七牛Qshell、并设置密钥

​	详见文档： [命令行工具 Qshell_实用工具_对象存储 - 七牛开发者中心 (qiniu.com)](https://developer.qiniu.com/kodo/1302/qshell) 

#### 2、配置七牛本地文件 `.qshell.json`

**注意：**key_prefix需要自定义，以保证不同项目的路径唯一；

```javascript
{
    "src_dir":'dist/ossweb-img' // 本地需要部署的静态资源目录，一般不需要改动
    "bucket": "td-res", // 七牛云空间名称，一般不要改动
    "key_prefix": "a202xxxxact/", // 自定义资源目录前缀，
}
```

#### 3、配置FTP本地文件 `sftp.js`

