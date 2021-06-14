var fs = require("fs");

const genReleasePlan = () => {
    var releaseConf = require("../../build/config/releaseConfig.json");
    var releaseTag = releaseConf.ver;
    var releaseContent = releaseConf.deployContent.web;
    var tmp = fs.readFileSync(`${process.cwd()}/build/deploy/tmp/releasePlan`).toString();
    var releasePlan = tmp.replace(/releaseTag/g, releaseTag).replace(/releaseContent/g, releaseContent);
    fs.writeFileSync(`${process.cwd()}/release/frontend.yaml`, releasePlan);
}

module.exports = { genReleasePlan };