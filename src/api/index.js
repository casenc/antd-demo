/**
 * 包含应用中所有接口请求函数的模块
 */

 import ajax from './ajax'
import jsonp from 'jsonp'
import { message } from 'antd'

 //登录
export function reqLogin(values) { // values = {username, password}
    return ajax('/login', values, 'POST')
}

// jsonp请求的接口请求函数

export function reqWeather(city) {
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    jsonp(url, {}, (err, data) => {
        console.log('jsonp()', err, data);
        if (!err && data.status === 'success') {
            const {dayPictureUrl, weather} = data.results[0].weather_data[0]
        } else {
            message.error("获取数据失败")
        }
    })
}

reqWeather('北京')
