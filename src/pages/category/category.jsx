import React, { Component } from 'react';
import {Card, Table, Button} from 'antd';
import { reqBondFundamentals } from '../../api/index'
import { elements } from '..'

class Category extends Component {
    state = {
        bond_fundamentals: [], // 可转债基本信息
    }

    /**
     * 获取可转债基本信息
     */
    getBondFundamentals = () => {
        reqBondFundamentals().then(response =>{
            const result = response.data
            if (result.status === 0) {
                const bond_fundamentals = JSON.parse(result.data)
                console.log(typeof(bond_fundamentals))
                this.setState({
                    bond_fundamentals
                })
            }
        }).catch(error => {
            alert(error)
        })
    }

    // 为第一次渲染准备数据
    UNSAFE_componentWillMount() {
    }

    // 发异步ajax请求
    componentDidMount() {
        this.getBondFundamentals()
    }

    render() { 
        const tableColumn = [
            {
                title: '转债代码',
                dataIndex: 'bond_id',
            },
            {
                title: '转债名称',
                dataIndex: 'bond_name',
            },
            {
                title: '股票代码',
                dataIndex: 'stock_id',
            },
            {
                title: '股票名称',
                dataIndex: 'stock_name',
            },
            {
                title: '转股价',
                dataIndex: 'convert_price',
            },
            {
                title: '回售价',
                dataIndex: 'put_convert_price',
            },
            {
                title: '强制转股价',
                dataIndex: 'force_redeem_price',
            },
            {
                title: '开始转股日期',
                dataIndex: 'convert_date',
            },
            {
                title: '转债到期日期',
                dataIndex: 'maturity_date',
            },
            {
                title: '可转债现价',
                dataIndex: '',
                render: function (column) {
                    <script type="text/javascript" src='http://hq.sinajs.cn/list=sh601006' charSet='gbk2312'></script>
                    <script>
                            var elements=hq_str_sh601006.split(",");
                            return elements
                    </script>
                    return (
                        <span>
                            { elements[3] }
                        </span>
                    )
                }
            },
            {
                title: '股票现价',
                dataIndex: '',
            }
        ]
        const title = '一级分类列表'
        const extra = (
            <Button>
                Add
            </Button>
        )
        const {bond_fundamentals} = this.state

        return ( 
            <div style={{backgroundColor:"white", height:'100%'}}>
                <Card title={title} extra={extra} style={{width:"100%", height:"100%"}}>
                    <Table dataSource={bond_fundamentals} columns={tableColumn} bordered rowKey='_id'></Table>
                </Card>
            </div>
         );
    }
}
 
export default Category;