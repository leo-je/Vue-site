/* jshint esversion: 6 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import ElementUI from 'element-ui';
import App from './App';
import Mock from './mock/mock';
import router from './routes';
import store from './store/store';
import homePage from './views/home';
import aboutPage from './views/about';
import './icons';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';
import i18n from './lang';

Mock.mockData();
Vue.use(VueRouter);
Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
});

Vue.prototype.$http = axios;

let app = new Vue({
  router,
  store,
  i18n,
  el: "#appIndex"
});
export default app;