//main.js这是项目的核心文件。全局的配置都在这个文件里面配置
/* jshint esversion: 6 */
import Vue from 'vue';
import App from './App.vue';
import router from './routes.js';
import Router from 'vue-router';
import Mock from './mock/mock';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//import './asset/sass/element-variables.scss'

import './assets/styles/base.css';
import './assets/sass/reset.sass'; //报错暂时不用sass

Mock.mockData();
Vue.use(Router);
Vue.prototype.$http = axios;
Vue.config.debug = true; //开启错误提示
Vue.use(ElementUI);

var vm = new Vue({
        router,
        el: '#appIndex',
        render: h => h(App)
});

export default vm;