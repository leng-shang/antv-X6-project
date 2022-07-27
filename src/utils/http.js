import axios from 'axios';
import { message } from "antd";

const wrapInterceptors = (http) => {
    // 请求拦截
    http.interceptors.request.use((req) => {
        // post QueryStringParameters   Content-Type: application/json;charset=UTF-8
        if ((!(req.formData || req.isFormData)) && req.method === "post" && (!req.url.includes("queryport"))) {
            req.url = jsonToUrlparams(req.url, req.data)
            req.data = ""
            req.headers["Content-Type"] = "application/json;charset=UTF-8"
        }

        // 文件上传
        if (req.isfile && req.method === "post") {
            req.headers = { "Content-Type": "multipart/form-data" }
            let formData = new FormData()
            for (let props in req.data) {
                formData.append(props, req.data[props])
            }
            req.data = formData
        }
        return req
    })

    // 响应拦截
    http.interceptors.response.use(res => {
        // 正常响应 200
        const { config, data } = res
        if (data.code === 200 || data.status) {
            return Promise.resolve(data)
        } else {
            message.error(data.message)
            return Promise.reject(data)
        }
    }, (error) => {

        // 请求超时处理
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
            error.message = '请求超时，请稍后再试'
            message.error(error.message)
            return Promise.reject(error)
        }
        //?error.response.data.message:
        return Promise.resolve({ status: false, message: "系统错误，请稍后再试(" + error.response || '' + ")" })
    })

    return http
}

export default wrapInterceptors(axios.create({
    timeout: 30000,
    withCredentials: true,
}))



const jsonToUrlparams = (url, json) => {
    if (!json) {
        return url
    }
    let result = ''
    if (/\?/.test(url)) {
        result = '&'
    } else {
        result = '?'
    }

    for (let attr in json) {
        result += `${attr}=${json[attr] || json[attr] === false || json[attr] === 0 ? encodeURIComponent(json[attr]) : ''
            }&`
    }
    return url + result.substring(0, result.length - 1)
}
