//复制tradingView
var path = require("path");
var cmd = require("child_process");

const copyTradingView = () => {
    var deployConf = require("../config/releaseConfig.json");
    var { projectName } = deployConf;
    try {
        cmd.execSync(`cp -r ${path.resolve(__dirname, process.cwd() + '/common/assets/js/vendor/charting_library')} ${path.resolve(__dirname, process.cwd() + '/' + projectName + '-output/common')}`)
        console.log("复制tradingView成功");
    } catch (e) {
        console.log("复制tradingView失败");
    }
}

module.exports = { copyTradingView }
