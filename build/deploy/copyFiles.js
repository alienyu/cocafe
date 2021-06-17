//复制tradingView
var path = require("path");
var cmd = require("child_process");

const copyFiles = () => {
    var deployConf = require("../config/releaseConfig.json");
    var { projectName } = deployConf;
    try {
        cmd.execSync(`cp -r ${path.resolve(__dirname, process.cwd() + '/biz/mobile/page/cocafe/static/files/policy.html')} ${path.resolve(__dirname, process.cwd() + '/' + projectName + '-output/mobile/cocafe/policy.html')}`)
        console.log("复制Nginx配置文件成功");
    } catch (e) {
        console.log(e);
    }
}
copyFiles();

module.exports = { copyFiles }
