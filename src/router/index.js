import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/pos'
import Test from '@/components/page/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    }, {
      path: '/test/:name',
      name: 'Test',
      component: Test
    }
  ]
})
