import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/',      component: require('./components/Task.vue') },  // 追加
    { path: '/about', component: require('./components/About.vue') },
    { path: '/login', component: require('./components/Login.vue') },  // 追加
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})
/**
 * Created by takagi-yuzuho on 2017/05/26.
 */
