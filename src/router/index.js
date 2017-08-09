import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = r => require.ensure([], () => r(require('../components/index.vue')), 'index');
const game = r => require.ensure([], () => r(require('../components/game.vue')), 'game');
const gift = r => require.ensure([], () => r(require('../components/gift.vue')), 'gift');
const circle = r => require.ensure([], () => r(require('../components/circle.vue')), 'circle');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/game',
      name: 'game',
      component: game
    },{
      path: '/gift',
      name: 'gift',
      component: gift
    },{
      path: '/circle',
      name: 'circle',
      component: circle
    },
  ]
})
