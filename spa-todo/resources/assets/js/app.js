

import Vue from 'vue'
import router from './router'
import http from './services/http.js' // 追加

require('bootstrap-sass')

window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

const app = new Vue({
  router,
  el: '#app',

  // 追加
  created () {
    http.init()
  },
  render: h => h(require('./app.vue')),
}).$mount('#app')
