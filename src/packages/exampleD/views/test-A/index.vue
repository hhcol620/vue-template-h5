<template>
    <div>
        这是ED的ta
        针对1px边框问题的处理
        <div class="test"></div>
    </div>
</template>


<script>
</script>

<style lang="less" scoped>
@import "@/styles/borderPX.less";
// .borderPX;    (@position: border-bottom, @width: 1px, @color: #eaeaec)
.test {
    width: 200px;
    height: 100px;
    background-color: #fff;
    .borderPX(border-top,1px,red);
}
</style>