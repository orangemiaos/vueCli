import Vue from 'vue'
import App from './App'
import {router} from './router/index' //挂载路由
import store from './store/index';    //挂在vux

/*  引入iView */
import iView from 'iview'
import 'iview/dist/styles/iview.css'

/*  引入element-ui */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

/*  引入element-ui */
import Vuex from 'vuex'


Vue.use(iView);
Vue.use(ElementUI);
Vue.use(Vuex);


Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
