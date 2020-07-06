import React, { Component } from 'react';

import './login.less'
import { Input, Button, Form, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';

import { reqLogin } from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'

class Login extends Component {
    render() { 
        // 如果已经登陆跳转到管理界面
        const user = memoryUtils.user
        if (user && user._id) {
            return <Redirect to='/' />
        }
        return ( 
            <div className='login'>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <Form name='normal-login' className='login-form' onFinish={this.handleFinish} onFinishFailed={this.handleFinishFailed}>
                        <Form.Item name="username" rules={[
                            { required: true, message: 'Please input your Username!' }
                        ]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item name="password" rules={[
                            { required: true, message: 'Please input your Username!' }
                        ]}>
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">Log In</Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
         );
    }

    handleFinish = (values) => {
        reqLogin(values).then(response => {
            const result = response.data
            if (result.status === 0) {
                memoryUtils.user = result.data
                storageUtils.saveUser(result.data)
                this.props.history.replace('/admin')
            } else {
                message.error(result.msg)
            }
        }).catch(error => {
            alert(error)
        })
    }

    handleFinishFailed = (errors) => {
        console.log('failed', errors)
    }
}
 
export default Login;