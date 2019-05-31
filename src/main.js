// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './index'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import myCharts from './comm/js/myCharts.js'
import store from './store'
import {post,fetch} from './axios'
				
Vue.config.productionTip = false
Vue.prototype.$store = store;
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
		
Vue.use(ElementUI);
Vue.use(myCharts);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,								
  components: { Index },
  template: '<Index/>'
})
