//复制tradingView
var path = require("path");
var cmd = require("child_process");

const copyNginxConf = () => {
    var deployConf = require("../config/releaseConfig.json");
    var { projectName } = deployConf;
    try {
        cmd.execSync(`cp -r ${path.resolve(__dirname, process.cwd() + '/release/qa.hashkey3.com.conf')} ${path.resolve(__dirname, process.cwd() + '/' + projectName + '-output/qa.hashkey3.com.conf')}`)
        console.log("复制Nginx配置文件成功");
    } catch (e) {
        console.log("复制Nginx配置文件失败");
    }
}

module.exports = { copyNginxConf }
