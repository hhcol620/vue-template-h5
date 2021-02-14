// 导入这个页面的根组件
import index from './index.vue';

// 导入不同的组件
import testA from './views/index/index.vue';

export default [
    {
        name: 'index',
        path: '/home/index',
        component: index,
        mata: {
            title: 'Example-out',
            content:{
                description:'论坛主页'
            }
        },
        redirect: '/home/index/testA',
        children: [
            {
                name: 'Example-insert',
                path: '/home/index/testA',
                component: testA
            }
        ]
    }
];
