const menuList = [
    {
        title: '首页',
        key: '/home',
    },
    {
        title: '管理',
        key: '/manage',
        children: [
            {
                title: '分类',
                key: '/category',
            },
            {
                title: '商品',
                key: '/product',
            }
        ],
    },
    {
        title: '图表',
        key: '/charts',
        children: [
            {
                title: '柱状图',
                key: '/bar',
            },
            {
                title: '折线图',
                key: '/line',
            },
            {
                title: '饼状图',
                key: '/pie',
            },
        ]
    },
    {
        title: '角色',
        key: '/role',
    },
    {
        title: '用户',
        key: '/user',
    },
]


export default menuList