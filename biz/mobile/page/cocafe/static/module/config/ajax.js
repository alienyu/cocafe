//ajax配置
var host = "http://memories.cocafe.co:61668";

module.exports = {
    ajax: {
        host,
        apiList: {
            auth: "/auth",
            story: "/upload/story"
        }
    }
}