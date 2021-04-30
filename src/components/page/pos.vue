<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="$store.state.tableData" border style="width: 100%;">
              <el-table-column prop="goodsName" label="商品"></el-table-column>
              <el-table-column prop="count" label="量" width="50" align="center"></el-table-column>
              <el-table-column prop="price" label="金额" width="70" align="center"></el-table-column>
              <el-table-column label="操作" fixed="right" width="100" align="center">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="$store.dispatch('delsingle', scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="$store.dispatch('addOrderList',scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>

            <div class="total">
              <small>数量: </small>{{$store.state.totalCount}}
              <small>金额: </small>{{$store.state.totalMoney}}元
            </div>

            <div class="btn-list">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="$store.dispatch('clearOrderList')">删除</el-button>
              <el-button type="success" @click="checkout">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <ul>
            <li v-for="item in oftenGoods" @click="$store.dispatch('addOrderList', item)">
              <span>{{item.goodsName}}</span>
              <span class="o-price">￥{{item.price}}元</span>
            </li>
          </ul>
        </div>

        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <ul class="food-list">
                <li v-for="item in type0Goods" @click="$store.dispatch('addOrderList', item)">
                  <span class="food-img"><img :src="item.goodsImg" width="100%"></span>
                  <span class="food-name">{{item.goodsName}}</span>
                  <span class="food-price">￥{{item.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class="food-list">
                <li v-for="item in type1Goods" @click="$store.dispatch('addOrderList', item)">
                  <span class="food-img"><img :src="item.goodsImg" width="100%"></span>
                  <span class="food-name">{{item.goodsName}}</span>
                  <span class="food-price">￥{{item.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <ul class="food-list">
                <li v-for="item in type2Goods" @click="$store.dispatch('addOrderList', item)">
                  <span class="food-img"><img :src="item.goodsImg" width="100%"></span>
                  <span class="food-name">{{item.goodsName}}</span>
                  <span class="food-price">￥{{item.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class="food-list">
                <li v-for="item in type3Goods" @click="$store.dispatch('addOrderList', item)">
                  <span class="food-img"><img :src="item.goodsImg" width="100%"></span>
                  <span class="food-name">{{item.goodsName}}</span>
                  <span class="food-price">￥{{item.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import hanbao from '../../assets/img/hanbao.jpg';
import quanjiatong from '../../assets/img/quanjiatong.jpg';
import axios from 'axios';
import store from '@/vuex/store.js';
import {getOftenGoods, getTypeGoods} from '@/service/cgiService';
import { Loading } from 'element-ui';

var oftenGoods = [{
  goodsId:1,
  goodsName:'香辣鸡腿堡',
  price:18
}, {
  goodsId:2,
  goodsName:'田园鸡腿堡',
  price:15
}, {
  goodsId:3,
  goodsName:'和风汉堡',
  price:15
}, {
  goodsId:4,
  goodsName:'快乐全家桶',
  price:80
}, {
  goodsId:5,
  goodsName:'脆皮炸鸡腿',
  price:10
}, {
  goodsId:6,
  goodsName:'魔法鸡块',
  price:20
}, {
  goodsId:7,
  goodsName:'可乐大杯',
  price:10
}, {
  goodsId:8,
  goodsName:'雪顶咖啡',
  price:18
}, {
  goodsId:9,
  goodsName:'大块鸡米花',
  price:15
}, {
  goodsId:20,
  goodsName:'香脆鸡柳',
  price:17
}];

var type0Goods = [{
  goodsId:1,
  goodsImg: hanbao,
  goodsName:'香辣鸡腿堡',
  price:18
}, {
  goodsId:2,
  goodsImg: hanbao,
  goodsName:'田园鸡腿堡',
  price:15
}, {
  goodsId:3,
  goodsImg:hanbao,
  goodsName:'和风汉堡',
  price:15
}];

var type1Goods = [{
  goodsId:4,
  goodsImg:quanjiatong,
  goodsName:'快乐全家桶',
  price:80
}, {
  goodsId:5,
  goodsImg:quanjiatong,
  goodsName:'脆皮炸鸡腿',
  price:10
}, {
  goodsId:6,
  goodsImg:quanjiatong,
  goodsName:'魔法鸡块',
  price:20
}];

var type2Goods = [{
  goodsId:7,
  goodsImg:quanjiatong,
  goodsName:'可乐大杯',
  price:10
}, {
  goodsId:8,
  goodsImg:quanjiatong,
  goodsName:'雪顶咖啡',
  price:18
}];

var type3Goods = [{
  goodsId:9,
  goodsImg:quanjiatong,
  goodsName:'大块鸡米花',
  price:15
}, {
  goodsId:20,
  goodsImg:quanjiatong,
  goodsName:'香脆鸡柳',
  price:17
}];

export default {
  name: 'pos',
  store,
  data(){
    return {
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: []
    }
  },
  created: function() {
    const loading = Loading.service({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });

    getOftenGoods({}).then((response)=>{
      this.oftenGoods = oftenGoods;

      loading.close();
    })

    getTypeGoods({}).then(response=>{
      this.type0Goods = type0Goods;
      this.type1Goods = type1Goods;
      this.type2Goods = type2Goods;
      this.type3Goods = type3Goods;
      
      loading.close();
    })
  },
  mounted: function() {
    // 网页可见区域高
    var orderHeight = document.body.clientHeight;
    document.getElementById('order-list').style.height = orderHeight + 'px';
  },
  methods: {
    checkout() {
      store.dispatch('checkout')
    }
  }
}
</script>

<style scoped>
.pos-order {
  background: #F9FAFC;
  border-right: 1px solid #C0CCDA;
}

.btn-list {
  margin-top: 10px;
}

.title {
  height: 20px;
  border-bottom: 1px solid #D3DCE6;
  background: #F9FAFC;
  padding: 10px;
  text-align: left;
}

.often-goods ul li {
  list-style: none;
  float: left;
  padding: 10px;
  margin: 5px;
  background: #fff;
  border: 1px solid #E5E9F2;
  cursor: pointer;
}

.o-price {
  color: #58B7FF;
  font-size: 14px;
}

.goods-type {
  clear: both;
  padding-top: 10px;
}

.food-list {
  padding: 0px;
  margin: 0px;
  cursor: pointer;
}

.food-list li {
  list-style: none;
  float: left;
  width: 23%;
  border: 1px solid #E5E9F2;
  height: auto;
  overflow: hidden;
  background: #fff;
  padding: 2px;
  margin: 2px;
}

.food-list li span {
  display: block;
  float: left;
}

.food-img {
  width: 40%;
  height: 60px;
}

.food-name {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}

.food-price {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}

.total {
  background: #fff;
  border-bottom: 1px solid #D3DCE6;
  height: 20px;
  padding: 10px;
}

.total small:nth-child(2) {
  padding-left: 15px;
}

/**
 * @desc 修改ui默认样式 要使用穿透符>>>
 */
.pos >>> .el-tabs__header {
  background: #fff;
}

.pos >>> .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  padding-left: 10px !important;
}
</style>