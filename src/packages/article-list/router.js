// 导入这个页面的根组件
import index from './index.vue';

// 导入不同的组件
import testA from './views/article-list/index.vue';

export default [
    {
        name: 'article-list',
        path: '/home/articleList',
        component: index,
        mata: {
            title: 'Example-out',
            content:{
                description:'文章列表'
            }
        },
        redirect: '/home/articleList/testA',
        children: [
            {
                name: 'Example-insert',
                path: '/home/articleList/testA',
                component: testA
            }
        ]
    }
];
