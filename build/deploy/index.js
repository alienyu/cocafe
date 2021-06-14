var { dealFavicon } = require("./dealFavicon.js")
var { copyTradingView } = require("./copyTradingView.js")
var { genNginxProxy } = require("./genNginxProxy.js");
var { genReleasePlan } = require("./genReleasePlan.js");
var { copyNginxConf } = require("./copyNginxConf.js")
let env = process.argv.splice(2)[0];

dealFavicon();
// copyTradingView();
// copyNginxConf();

// if(env == "local") {
//     genNginxProxy();
// } else if(env == "test" || env == "production") {
//     genNginxProxy();
//     genReleasePlan();
// } 