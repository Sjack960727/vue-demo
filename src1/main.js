import Vue from 'vue' // 引入vue, Vue是一个构造函数
import App from './App.vue' //

// 引入bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import registerPlugins from '@/plugins'
Vue.config.productionTip = false

// Vue.use(函数)
// - 给函数穿个参数, Vue
// - 函数叫: 插件
Vue.use(registerPlugins)


new Vue({
  // render: 渲染
  render: h => h(App)
}).$mount('#app') // document.querySelector('#app')
