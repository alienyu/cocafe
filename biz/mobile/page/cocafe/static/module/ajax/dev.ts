import axios from 'axios';

const { host, apiList } = mobileCocafeConstants.ajax;
class Ajax {
    ajax(ops: any): any {
        let config = Object.assign({
            url: "",
            data: "",
            params: "",
            urlName: '',
            method: "get",
            handlerErr: false,
            needToken: true,
            callback: function () { }
        }, ops);
        if (config.url.match(/^\//)) { config.url = config.url.substr(1, config.url.length) };
        let apiUrl = apiList;
        config.url.split(".").map(key => apiUrl = apiUrl[key]);
        let method = apiUrl.match(/\s/) ? apiUrl.split(" ")[0] : config.method;
        let url = apiUrl.match(/\s/) ? apiUrl.split(" ")[1] : apiUrl;
        var instance = axios.create({
            baseURL: host,
            timeout: 50000
        })
        let requestObj: any = {};
        if (method.toUpperCase() == 'GET') {
            requestObj = {
                method,
                url: url || config.url,
                params: config.params
            }
        } else {
            requestObj = {
                method,
                url: url,
                data: config.data || {}         
            }
        }
        if (config.urlName) requestObj.url = `${requestObj.url}${config.urlName}`;
        instance.request(requestObj).then((data: any) => {
            config.callback.call(data.data);
        }).catch((error: any) => {
            console.log("error")
        })
    }
}

var ajaxObj = new Ajax();
export default ajaxObj.ajax;