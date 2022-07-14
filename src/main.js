import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index'
import bootstrapcss from './bootstrap/css/bootstrap.min.css'
import jqueryjs from './bootstrap/js/jquery-3.5.1.min.js'

Vue.config.productionTip = false
Vue.use(bootstrapcss,jqueryjs)
Vue.use(ElementUI)

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
