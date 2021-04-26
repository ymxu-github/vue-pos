import Vue from 'vue';
import Vuex from 'vuex';
import { Message } from 'element-ui';

Vue.use(Vuex);

const state = {
    tableData: [],
    totalMoney: 0,
    totalCount: 0
}

const actions = {
    addOrderList(context, item) {
        context.commit('addOrder', item);
        context.commit('orderComputed');
    },
    delsingle(context, item) {
        context.commit('delOrder', item);
        context.commit('orderComputed');
    },
    clearOrderList({commit}) {
        commit('clearOrder');
    },
    checkout({commit}) {
        if (state.totalCount != 0) {
            commit('clearOrder');
            Message({
                message: '结账成功',
                type: 'success'
            });
        } else {
            Message({
                message: '不能空结',
                type: 'error'
            });
        }
    }
}

const mutations = {
    clearOrder(state) {
        state.tableData = [];
        state.totalCount = 0;
        state.totalMoney = 0;
    },
    delOrder(state, item) {
        state.tableData = state.tableData.filter(goods=>goods.goodsId != item.goodsId);
    },
    addOrder(state, item) {
        // 判断是否已经存在
        var isHave = false;
        for (var i in state.tableData) {
            if (item.goodsId == state.tableData[i].goodsId) {
                isHave = true;
            }
        }

        if (isHave) {
            var arr = state.tableData.filter(goods=>goods.goodsId == item.goodsId);
            arr[0].count ++;
        } else {
            state.tableData.push({
                goodsId: item.goodsId,
                goodsName: item.goodsName,
                price: item.price,
                count: 1
            });
        }
    },
    orderComputed(state) { 
        state.totalMoney = 0;
        state.totalCount = 0;

        if (state.tableData.length > 0) {
            for (let index = 0; index < state.tableData.length; index++) {
                state.totalCount += state.tableData[index].count;
                state.totalMoney += (state.tableData[index].count * state.tableData[index].price)
            }
        }
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})