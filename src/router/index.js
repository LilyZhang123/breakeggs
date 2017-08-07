import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = r => require.ensure([], () => r(require('../components/index.vue')), 'index');
const game = r => require.ensure([], () => r(require('../components/game.vue')), 'game');
// const index = r => require.ensure([], () => r(require('@/components/index')), 'index');

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
    },
  ]
})
