import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd'

import './left-nav.less'

import menuList from '../../config/menuConfig'

const { SubMenu } = Menu


class LeftNav extends Component {
    // 生成左侧菜单
    getMenuNodes = (menuList) => {
        return menuList.map(item => {
            if (!item.children) {
                return (
                    <Menu.Item key={ item.key }>
                        <Link to={ item.key }>{ item.title }</Link>
                    </Menu.Item>
                )
            } else {
                const cItem = item.children.find(cItem => cItem.key === this.props.location.pathname)
                if (cItem !== undefined) {
                    this.openKey = item.key
                }
                return (
                    <SubMenu key={ item.key } title={ item.title }>
                        {
                            this.getMenuNodes(item.children)
                        }
                    </SubMenu>
                )
            }
        })
    }

    UNSAFE_componentWillMount () {
        this.menuNodes = this.getMenuNodes(menuList)
    }

    render() { 
        return ( 
            <div className='left-nav'>
                <Link className='left-nav-header' to='/home'>
                    <h1>CASENC</h1>
                </Link>
                <Menu mode="inline" theme="dark" defaultSelectedKeys={[ this.props.location.pathname ]} defaultOpenKeys={[ this.openKey ]}>
                    {
                        this.menuNodes
                    }
                </Menu>
            </div>
         );
    }
}
 
export default withRouter(LeftNav);