import axios from 'axios'

const defaultHeaders = {
    Accept: 'application/json, text/plain, */*; charset=utf-8',
    'Content-Type': 'application/json; charset=utf-8'
}
const instance = axios.create({
    // baseURL: 'http://192.168.8.120:8080',
    timeout: 5000,
    headers: defaultHeaders,
})
//http拦截器 拦截每次http请求
instance.interceptors.request.use(
    config => {
        //去cookie里面拿或者去store里面拿
        let token = 'admin-token'
        if (token) {
            config.headers['token'] = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
//封装一下get和post请求
//axios get请求
//axios.get('/user?ID=12345') ?传参
//axios.get('/user', {params: { ID: 12345}})
//axios post请求
// axios.post('/user', {firstName: 'Fred',lastName: 'Flintstone'})
// axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//         firstName: 'Fred',
//         lastName: 'Flintstone'
//     }
// });
export const createAPI = (url, method, data) => {
    //配置的参数
    let config = {

    }
    if (method.toUpperCase === "GET") {
        config.params = data
    } else {
        config.data = data
    }
    return instance({
        url,
        method,
        ...config
    })
}