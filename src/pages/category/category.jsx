import React, { Component } from 'react';
import {Card, Table, Button} from 'antd';

class Category extends Component {
    render() { 
        const title = '一级分类列表'
        const extra = (
            <Button>
                Add
            </Button>
        )
        return ( 
            <div style={{backgroundColor:"white", height:'100%'}}>
                <Card title={title} extra={extra} style={{width:"100%", height:"100%"}}>
                    <Table></Table>
                </Card>
            </div>
         );
    }
}
 
export default Category;