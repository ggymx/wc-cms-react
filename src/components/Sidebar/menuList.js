export default [
    {
        icon: 'anticon-lx-home',
        index: '/main/dashboard',
        title: 'Dashboard'
    },
    {
        icon: 'anticon-lx-cascades',
        index: '/main/tables',
        title: '基础表格'
    },
    {
        icon: 'anticon-lx-emoji',
        index: '/main/icons',
        title: '自定义图标'
    },
    {
        icon: 'anticon-lx-copy',
        index: '/main/tabs',
        title: 'tab选项卡'
    },
    {
        icon: 'anticon-lx-calendar',
        index: '5',
        title: '三级菜单示例',
        subs: [
            {
                index: '/main/forms',
                title: '基础表单'
            },
            {
                index: '/main/upload',
                title: '上传组件'
            }
        ]
    },
    {
        icon: 'anticon-lx-rank',
        index: '/main/charts',
        title: 'schart图表'
    },
    {
        icon: 'anticon-lx-global',
        index: '/main/i18n',
        title: '国际化'
    },
    {
        icon: 'anticon-lx-warn',
        index: '7',
        title: '错误处理',
        subs: [
            {
                index: '/main/permission',
                title: '权限测试'
            },
            {
                index: '/error/404',
                title: '404页面'
            }
        ]
    },
    {
        icon: 'anticon-lx-global',
        index: '/main/mzManage',
        title: '媒资管理'
    },
    {
        icon: 'anticon-lx-rank',
        index: '/main/inject',
        title: '注入记录'
    },
    {
        icon: 'anticon-lx-warn',
        index: '888',
        title: '综合管理',
        subs: [
            {
                index: '/main/account',
                title: '账号管理'
            },
            {
                index: '/main/cp',
                title: 'CP管理'
            },
            {
                index: '/main/service',
                title: '业务元数据管理'
            }
        ]
    },
]