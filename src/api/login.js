import { createAPI } from '../utils/request'
//获取token
export const getToken = data => createAPI('/api/getToken', 'get', data).then(res => res.data)
//获取用户信息,必须要传token
export const getUserInfo = data => createAPI('/api/getUserInfo', 'post', data).then(res=>res.data)
