/**
 * 包含应用中所有接口请求函数的模块
 */

 import ajax from './ajax'

 //登录
export function reqLogin(values) { // values = {username, password}
    return ajax('/login', values, 'POST')
}