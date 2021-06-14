const combineProxy = ({proxy, platform, page}) => {
    let mockConf;
    try {
        mockConf = require(`${process.cwd()}/biz/${platform}/page/${page}/mock/index.js`);
    } catch(e) {mockConf ={};console.log('mockErrr', e)}
    return Object.assign(proxy, mockConf);
}

const devConf = require(`${process.cwd()}/build/config/devConfig.json`);
let deployContent = devConf.deployContent;
let platformList = Object.keys(deployContent);

var proxy = {};
platformList.map(platform => {
    let pageList = deployContent[platform].length > 0 ? deployContent[platform] : require(`${process.cwd()}/biz/${platform}/platformConf.json`)["pageList"];
    pageList.map(page => {
        combineProxy({proxy, platform, page})
    })
})

module.exports = proxy;