import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd'

import './left-nav.less'

const { SubMenu } = Menu


class LeftNav extends Component {
    render() { 
        return ( 
            <div to='/home' className='left-nav'>
                <Link className='left-nav-header'>
                    <h1>CASENC</h1>
                </Link>
                <Menu>
                    <SubMenu key="sub1" title="600585">
                        <Menu.Item key="2">Option 1</Menu.Item>
                        <Menu.Item key="3">Option 2</Menu.Item>
                        <Menu.Item key="4">Option 3</Menu.Item>
                        <Menu.Item key="5">Option 4</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
         );
    }
}
 
export default LeftNav;