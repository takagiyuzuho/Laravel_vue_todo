<template>
  <div id="app">
      <!-- 追加 -->
      <navbar></navbar>

      <div class="container">
        <router-view></router-view>
      </div>
      <hr>
      <div class="container-fluid">
          <a href="https://github.com/acro5piano/laravel-vue-jwtauth-spa-todo-app" target="_blank">
              <img src="https://image.flaticon.com/icons/svg/25/25231.svg" width="30" height="20">
          </a>
      </div>
  </div>
</template>

<script>
  // この部分全部追加
  export default {
    components: {
      navbar: require('./components/Navbar.vue'),
    },
  }
</script>
