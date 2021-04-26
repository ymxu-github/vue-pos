<template>
    <div class="left-nav">
        <ul>
            <li>
                <router-link to="/">
                    <i class="icon iconfont icon-goumai"></i>
                    <div>收银</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'Test', params: {name: 'dianpu'}}">
                    <i class="icon iconfont icon-dianpu"></i>
                    <div>店铺</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'Test', params: {name: 'hanbao'}}">
                    <i class="icon iconfont icon-hanbao"></i>
                    <div>商品</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'Test', params: {name: 'huiyuanqia'}}">
                    <i class="icon iconfont icon-huiyuanqia"></i>
                    <div>会员</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'Test', params: {name: 'zuanshi'}}">
                    <i class="icon iconfont icon-zuanshi"></i>
                    <div>统计</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'Test', params: {name: 'gongnengjianyi'}}">
                    <i class="icon iconfont icon-gongnengjianyi"></i>
                    <div>设置</div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {}
</script>
<style>
.left-nav {
    height: 100%;
    width: 5%;
    color: #fff;
    background: #1D8ce0;
    font-size: 10px;
    float: left;
}

.left-nav ul {
    padding: 0px;
    margin: 0px;
}

.left-nav ul li {
    list-style: none;
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #20a0ff;
}

.left-nav ul li a {
    color: #fff;
    text-decoration: none;
}

.iconfont {
    font-size: 24px;
}
</style>