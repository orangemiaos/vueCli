import Router from 'vue-router';
import Vue from "vue";
import routes from './router.js';
Vue.use(Router);

let routerConfig = {
  mode: 'history',
  routes:routes
};
export const router = new Router(routerConfig);
