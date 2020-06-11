import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Layout } from 'antd'

import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/left-nav/left-nav'
import Header from '../../components/header/header'

const { Footer, Sider, Content } = Layout

class Admin extends Component {
    render() { 
        const user = memoryUtils.user
        // 如果内存没有存储user ==> 当前没有登陆
        if (!user || !user._id) {
            return <Redirect to='/login/'/>
        }
        return ( 
            <Layout style={{height:'100%'}}>
                <Sider>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header />
                    <Content style={{backgroundColor:'green'}}>Content</Content>
                    <Footer style={{textAlign:'center', color:'red'}}>数据不准确，请勿参考，谢谢</Footer>
                </Layout>
            </Layout>
         );
    }
}
 
export default Admin;