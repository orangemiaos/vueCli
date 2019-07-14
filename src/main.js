import Vue from 'vue'
import App from './App'
import {router} from './router/index'

/*  引入iView */
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView);

Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
