import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd'

import memoryUtils from '../../utils/memoryUtils'

import LeftNav from '../../components/left-nav/left-nav'
import Header from '../../components/header/header'
import Category from '../../pages/category/category'
import Bar from '../../pages/charts/bar'
import Line from '../../pages/charts/line'
import Pie from '../../pages/charts/pie'
import Home from '../../pages/home/home'
import Product from '../../pages/product/product'
import Role from '../../pages/role/role'
import User from '../../pages/user/user'

import './admin.less'

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
                    <LeftNav location={ this.props.location }/>
                </Sider>
                <Layout>
                    <Header />
                    <Content style={{backgroundColor:'green', padding:'10px'}}>
                        <Switch>
                            <Route path='/home' component={Home}></Route>
                            <Route path='/category' component={Category}></Route>
                            <Route path='/bar' component={Bar}></Route>
                            <Route path='/line' component={Line}></Route>
                            <Route path='/pie' component={Pie}></Route>
                            <Route path='/product' component={Product}></Route>
                            <Route path='/user' component={User}></Route>
                            <Route path='/role' component={Role}></Route>
                            <Redirect to='/home' />
                        </Switch>
                    </Content>
                    <Footer className="admin-footer">数据不准确，请勿参考，谢谢</Footer>
                </Layout>
            </Layout>
         );
    }
}
 
export default Admin;