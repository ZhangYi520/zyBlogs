// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// // 引入axios
// import axios from 'axios';
// // 挂载到vue原型链上
// Vue.prototype.axios = axios;
// axios.defaults.timeout = 5000;// 在超时前，所有请求都会等待 5 秒
// // 配置请求头
// axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://localhost:9003';// 配置接口地址
// axios.defaults.withCredentials = false;

import axios from 'axios';
Vue.prototype.$axios = axios;

/**moment.js*/
import moment from 'moment'//导入文件
Vue.prototype.$moment = moment;//赋值使用
moment.locale('zh-cn');//需要汉化

Vue.use(ElementUI);
Vue.config.productionTip = false

/**全局过滤器*/
Vue.filter('momentFilters', function (value, formatString) {
  return moment(value).format("YYYY-MM-DD HH:mm:ss");
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
