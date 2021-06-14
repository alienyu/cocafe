//生成exchange项目的路由跳转规则
var fs = require("fs");

const genNginxProxy = () => {
    //生成配置
    var { routesConf } = require("../../biz/web/page/exchange/static/module/config/routes.js");
    var subRoutesList = []; 
    var singleRoutesList = [];
    routesConf.map(route => {
        var { path, routes } = route;
        if(routes) {
            subRoutesList.push(path);
        } else {
            singleRoutesList.push(path);
        }
    });
    var subRoutes = subRoutesList.join("|");
    var singleRoutes = singleRoutesList.join("|");

    //写入配置
    var nginxTmp = fs.readFileSync(`${process.cwd()}/build/deploy/tmp/proxy`).toString();
    var nginxProxy = nginxTmp.replace(/subRoutes/, subRoutes).replace(/singleRoutes/, singleRoutes);
    fs.writeFileSync(`${process.cwd()}/release/qa.hashkey3.com.conf`, nginxProxy)
}

module.exports = { genNginxProxy };
