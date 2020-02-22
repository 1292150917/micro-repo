<!--
 * @Author: your name
 * @Date: 2020-02-22 16:56:44
 * @LastEditTime: 2020-02-22 19:10:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yjhlc:\Users\zhamgzifang\Desktop\wqd\app1\src\App.vue
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/api2">8082端口</router-link> |
      <router-link to="/api2/about">8082端口</router-link> |
      <router-link to="/api1/">8081Home</router-link> |
      <router-link to="/api1/about">8081About</router-link>
    </div>
    <!-- <router-view/> -->
    <div v-html="content"></div>
  </div>
</template>
  
<script>
export default {
  name: '',
  props:['content'],
  created(){
  },
  components: {
    // HelloWorld
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
