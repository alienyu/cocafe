const fs = require("fs");

let envConf, devConf;
let env = process.env.NODE_ENV;
if(env) {
    envConf = require(`${process.cwd()}/build/env/webpack.release.js`);
    devConf = require(`${process.cwd()}/build/config/releaseConfig.json`);
} else {
    envConf = require(`${process.cwd()}/build/env/webpack.dev.js`);
    devConf = require(`${process.cwd()}/build/config/devConfig.json`);
}

genTSConf = (alias) => {
    let tsPaths = getTSPaths(alias);
    let tsInclude = genTSInclude(devConf.deployContent);
    let tsBaseConf = require(`${process.cwd()}/tsconfig.base.json`);
    tsBaseConf.compilerOptions.paths = tsPaths;
    tsBaseConf.include = tsInclude;
    rewriteTSConfig(tsBaseConf);
}

getTSPaths = (alias) => {
    let tsPaths = {};
    Object.keys(alias).map(pathKey => {
        let tsPathKey, tsPathContent;
        tsPathKey = !!pathKey.match(/@/) ? `${pathKey}/*` : pathKey;
        tsPathContent = !!pathKey.match(/@/) ? `${alias[pathKey]}/*` : alias[pathKey];
        tsPaths[tsPathKey] = [tsPathContent];
    })
    return tsPaths;
}

genTSInclude = (deployContent) => {
    var includeArr = [];
    Object.keys(deployContent).map(platform => {
        let pageList = deployContent[platform].length > 0 ? deployContent[platform] : require(`${process.cwd()}/biz/${platform}/platformConf.json`)["pageList"];
        pageList.map(page => {
            filePath = `biz/${platform}/page/${page}`;
            includeArr.push(filePath);
        })
    });
    return includeArr;
}

rewriteTSConfig = (config) => {
    fs.writeFileSync(`${process.cwd()}/tsconfig.json`, JSON.stringify(config));
}

genTSConf(envConf.resolve.alias);

module.exports = envConf;