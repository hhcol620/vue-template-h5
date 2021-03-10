<template>
    <div class="index-container animate__animated animate__bounceInUp">
        <header class="header">
            <div class="plate-title">社区</div>
            <div>今天是你在IRH社区的第&nbsp;99&nbsp;<span>DAYS</span></div>
        </header>
        <nav class="nav">
            <div class="nav-item"
                 v-for="(item,index) in navList"
                 :key="item.label+index">
                <svg class="svg-icon"
                     aria-hidden="true">
                    <use :xlink:href="item.icon"></use>
                </svg>
                <div class="icon-text">{{item.label}}</div>
            </div>
        </nav>
        <div class="plate-title">热门话题</div>
        <section class="topics-content">
            <v-baberrage></v-baberrage>
        </section>
        <div class="plate-title">最新文章</div>
        <section class="article-list-content">

        </section>
    </div>
</template>

<script>
import { _exampleAPI } from '../../server/api.js';

import baberrage from '../../components/baberrageQueue.vue';
export default {
    data() {
        return {
            // 导航入口
            navList: [
                {
                    label: '聊一聊',
                    icon: '#iconliaotian'
                },
                {
                    label: '每日话题',
                    icon: '#iconshuqian'
                },
                {
                    label: '推荐',
                    icon: '#iconzixun'
                },
                {
                    label: '热榜',
                    icon: '#iconquanxuan'
                },
                {
                    label: '沸点',
                    icon: '#icondingwei'
                }
            ]
        };
    },
    components: {
        'v-baberrage': baberrage
    }
};
</script>
<style lang="less" scoped>
.index-container {
    padding: 0 0.2rem;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.16rem;
        font-weight: 500;
        font-style: normal;
        line-height: 0.24rem;
        color: #4d4d4d;
    }
    .plate-title {
        color: #4d4d4d;
        font-size: 0.36rem;
        font-weight: 600;
        line-height: 1.5;
        padding-top: 0.2rem;
    }
    .nav {
        display: flex;
        flex-wrap: wrap;
        .nav-item {
            width: 20%;
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .icon-text {
                color: #4d4d4d;
                font-size: 0.16rem;
                font-weight: 500;
                line-height: 1.5;
            }
        }
    }
    .topics-content {
        height: 3.4rem;
        background-color: #ffab73;
        border-radius: 0.1rem;
        margin-top: 0.1rem;
    }
    .article-list-content {
        height: 6rem;
        border-radius: 0.1rem;
        margin-top: 0.1rem;
        padding: 0.2rem;
    }
}
</style>
