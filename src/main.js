import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入全局样式
import './assets/style/index.less'
//引入elmentui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)


//导入mock
import './mock/index.js'
// 导入axios
import axios from 'axios'
// axios.defaults.baseURL = "http://localhost:8080/"
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
