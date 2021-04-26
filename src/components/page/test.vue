<template>
    <div>
        <h2>{{stopName[$route.params.name]}}</h2>
        <p>开发中，敬请期待</p>
    </div>
</template>
<script>
    export default {
        name: 'test',
        data() {
            return {
                stopName: {
                    dianpu: '店铺',
                    hanbao: '商品',
                    huiyuanqia: '会员',
                    zuanshi: '统计',
                    gongnengjianyi: '设置'
                }
            }
        }
    }
</script>