/*
 * @Author: your name
 * @Date: 2020-02-22 16:58:04
 * @LastEditTime: 2020-02-22 19:16:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yjhlc:\Users\zhamgzifang\Desktop\wqd\app2\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from "vue-router";
import routes from "./router";
Vue.config.productionTip = false

let router = null;
let instance = null;
 
export async function bootstrap({ fns = [] } = {}) {
  Array.isArray(fns) && fns.map(i => {
    Vue.prototype[i.name] = i
  });
}

export async function mount({ data = {} } = {}) {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? "/api2" : "/",
    mode: "history",
    routes
  }); 
  instance = new Vue({
    router,
    store,
    render: h => h(App, { props: data })
  }).$mount("#app3");
}
window.__POWERED_BY_QIANKUN__ || mount();
export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}
