// 导入这个页面的根组件
import index from './index.vue';

// 导入不同的组件
import testA from './views/topic-list/index.vue';

export default [
    {
        name: 'topic-list',
        path: '/home/topicList',
        component: index,
        mata: {
            title: 'Example-out',
            content: {
                description: '话题列表'
            }
        },
        redirect: '/home/topicList/testA',
        children: [
            {
                name: 'Example-insert',
                path: '/home/topicList/testA',
                component: testA
            }
        ]
    }
];
