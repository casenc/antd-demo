import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Modal } from 'antd'

import './header.less'

import { formateDate } from '../../utils/dateUtils'
import { reqWeather } from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import menuList from '../../config/menuConfig'


class Header extends Component {
    state = {
        currentTime: formateDate(Date.now()),
        dayPictureUrl: '',
        weather: 'none'
    }
    // 第一次render之后执行，一般在此执行异步操作，ajax请求和定时器
    componentDidMount () {
        // 获取当前的时间
        this.getTime()
        // 获取当前天气显示
        this.getWeather()
    }

    getTime = () => {
        setInterval(() => {
            const currentTime = formateDate(Date.now())
            this.setState({currentTime})
        }, 1000)
    }

    getWeather = async () => {
        const {dayPictureUrl, weather} = await reqWeather('广州')
        // 更新状态
        this.setState({dayPictureUrl, weather})
    }

    getTitle = () => {
        const path = this.props.location.pathname
        let title
        menuList.forEach(item => {
            if (item.key === path) {
                title = item.key
            } else if (item.children) {
                const cItem = item.children.find(cItem => cItem.key===path)
                if(cItem) {
                    title = cItem.title
                }
            }
        })
        return title
    }

    // 退出登录
    logoutHandle = () => {
        Modal.confirm({
            title: 'Are you sure to logout?',
            onOk() {
                console.log('ok')
            },
            onCancel() {
                console.log('cancel')
            }
        })
    }

    render() { 
        const title = this.getTitle()
        return ( 
            <div className='header'>
                <div className="header-top">
                    <span>欢迎，{ memoryUtils.user.username }</span>
                    <a href="jacascript:" onClick={this.logoutHandle}>退出</a>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">
                        { title }
                    </div>
                    <div className="header-bottom-right">
                        <span>{ this.state.currentTime }</span>
                        <img src={ this.state.dayPictureUrl } alt="weather"/>
                        <span>{ this.state.weather }</span>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default withRouter(Header);