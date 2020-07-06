import React from 'react';


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
            var elements=hq_str_sh601006.split(",")
            return (
                <span>
                    <script type="text/javascript" src='http://192.168.1.1:8081/advert/getAdvert?flowerId=1987&advertType=2'></script>
                </span>
            )
        }
    },
    {
        title: '股票现价',
        dataIndex: '',
    }
]

export default tableColumn