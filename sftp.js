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
    return sftp.uploadDir('dist', '/developmemt/xxx.xx.xx'); // 上传整个目录
    // return sftp.put('dist/index.html', '/developmemt/xxx.treedom.cn/index.html'); // 只上传单文件
}).then(data => {
    console.log('sftp 上传成功：', data);
}).catch(err => {
    console.log(err, 'catch error');
}).finally(() => {
    sftp.end();
});
