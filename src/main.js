import Vue from 'vue'
import App from './App'
import {router} from './router/index' //挂载路由
import store from './store/index';    //挂在vux

/*  引入iView */
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView);

import drag from '@/directive/drag';

import {ContainerMixin, ElementMixin} from 'vue-slicksort';


Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
