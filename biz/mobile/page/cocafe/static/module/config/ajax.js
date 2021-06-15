//ajax配置
var host = "https://memories.cocafe.co/api";

module.exports = {
    ajax: {
        host,
        apiList: {
            auth: "/auth",
            story: "/upload/story"
        }
    }
}