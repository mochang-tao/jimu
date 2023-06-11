import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import axios from 'axios'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})

// 解决uniapp 适配axios请求，避免报adapter is not a function错误
// 结束
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif