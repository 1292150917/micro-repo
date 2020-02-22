<!--
 * @Author: your name
 * @Date: 2020-02-22 16:56:44
 * @LastEditTime: 2020-02-22 17:31:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yjhlc:\Users\zhamgzifang\Desktop\wqd\app1\src\views\Home.vue
 -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <div v-html="content"></div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  props:['content'],
  created(){
    
  },
  components: {
    // HelloWorld
  }
}
</script>
