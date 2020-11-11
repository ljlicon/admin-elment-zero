import axios from 'axios';
import Qs from 'qs';
import { Message } from 'element-ui';


axios.defaults.baseURL = "/api";
// 设置请求超时时间
axios.defaults.timeout = 30000;

// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 请求拦截
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么 验证token之类的

    return config;
}, error => {
    // 对请求错误做些什么

    Message.error({ message: '请求超时!' })
    return Promise.error(error);
})

// 响应拦截
axios.interceptors.response.use(response => {
    // 对响应数据做点什么

    return response;
}, error => {
    // 对响应错误做点什么

    return Promise.reject(error);
});


// 封装get方法和post方法

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
            //  Loading.service(true).close();
            //  Message({message: '请求成功', type: 'success'});
        }).catch(err => {
            reject(err.data)
            //  Loading.service(true).close();
            Message({ message: '加载失败', type: 'error' });
        })
    });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data);
                // Loading.service(true).close();
                //  Message({message: '请求成功', type: 'success'});
            })
            .catch(err => {
                reject(err.data)
                // Loading.service(true).close();
                Message({ message: '加载失败', type: 'error' });
            })
    });
}

/**
 * post方法，参数序列化
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function qspost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, Qs.stringify(params))
            .then(res => {
                resolve(res.data);
                //  Loading.service(true).close();
                //  Message({message: '请求成功', type: 'success'});
            })
            .catch(err => {
                reject(err.data)
                // Loading.service(true).close();
                Message({ message: '加载失败', type: 'error' });
            })
    });
}


/**
 * put方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function put(url, params) {
    return new Promise((resolve, reject) => {
        axios.put(url, params)
            .then(res => {
                resolve(res.data);
                // Loading.service(true).close();
                //  Message({message: '请求成功', type: 'success'});
            })
            .catch(err => {
                reject(err.data)
                // Loading.service(true).close();
                Message({ message: '加载失败', type: 'error' });
            })
    });
}


/**
 * delete
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function deletefn(url, params) {
    return new Promise((resolve, reject) => {
        axios.delete(url, params)
            .then(res => {
                resolve(res.data);
                // Loading.service(true).close();
                //  Message({message: '请求成功', type: 'success'});
            })
            .catch(err => {
                reject(err.data)
                // Loading.service(true).close();
                Message({ message: '加载失败', type: 'error' });
            })
    });
}