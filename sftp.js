let fs = require('fs');
let Client = require('ssh2-sftp-client');
let sftp = new Client();

sftp.connect({
    host: '', // 填写ftp服务器的ip地址
    port: '22',
    username: '', // 用户名
    privateKey: fs.readFileSync('../id_rsa')
}).then(() => {
    // 需配置正确的项目路径
    return sftp.uploadDir('dist', '-xxx', { // /developmemt/xxx.treedom.cn
        filter: (path) => {
            // 排除dist/ossweb-img/下的所有文件
            return !path.startsWith('dist/ossweb-img/');
        }
    });
}).then(data => {
    console.log('sftp 上传成功：', data);
}).catch(err => {
    console.log(err, 'catch error');
}).finally(() => {
    sftp.end();
});
