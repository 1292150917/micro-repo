/*
 * @Author: your name
 * @Date: 2020-02-22 16:56:44
 * @LastEditTime: 2020-02-22 19:11:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yjhlc:\Users\zhamgzifang\Desktop\wqd\app1\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 导入乾坤函数
import {
  registerMicroApps,
  setDefaultMountApp,
  start
} from "qiankun";
let app = null;
function render({ appContent, loading } = {}) {
  if (!app) {
    app = new Vue({
      router,
      store,
      data() {
        return {
          content: appContent
        }
      },
      render(h) {
        return h(App, {
          props: {
            content: this.content
          }
        })
      }
    }).$mount('#container')
  } else {
    app.content = appContent;
    app.loading = loading;
  }
};

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}
render()
//注册子应用
registerMicroApps(
  [
    {
      name: "module-app1",
      entry: "//localhost:8081",
      render,
      activeRule: genActiveRule("/api1"),
    },
    {
      name: "module-app2",
      entry: "//localhost:8082",
      render,
      activeRule: genActiveRule("/api2"),
    },
  ],
);
// 设置默认子应用 
setDefaultMountApp("/api1");
start({ prefetch: true });