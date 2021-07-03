import Vue from 'vue'
import './mock'
import App from './App.vue'
import './styles/global.less'
import router from './router'
import store from './store';
import showMessage from './utils/showMessage';
Vue.prototype.$showMessage = showMessage;
import './eventBus';
store.dispatch('setting/fetchSetting')


//全局注册指令
import loadingOpts from './directives/loading';
import lazyOpts from './directives/lazy';
Vue.directive('loading',loadingOpts);
Vue.directive('lazy',lazyOpts)


Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
