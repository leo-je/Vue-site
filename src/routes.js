// 引用模板
/* jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';
import indexPage from './components/header';
import homePage from './views/home';
import aboutPage from './views/about';
import tablePage from "./views/table";
import tabs from "./views/tabs";
import App from './App.vue';
import chart from './views/chart';
import login from './views/login/login';
import page404 from './views/404.vue';

let components = {
    App: App,
    homePage: homePage
};

let routes = [{
    path: '/main',
    component: components['App'],
    children: [{
            path: '/main/index',
            component: components['homePage'],
            name: '首页',
            class: 'fa fa-ravelry'
        },
        {
            path: '/main/chart',
            component: chart,
            name: 'chart',
            meta: {
                title: '混合图表'
            },
            class: 'fa fa-ravelry'
        },
        {
            path: '/main/table',
            component: tablePage,
            name: 'tablepage',
            class: 'fa fa-ravelry'
        },
        {
            path: '/main/edit',
            component: homePage,
            name: 'edit',
            class: 'fa fa-ravelry',
            children: [{
                path: '/main/edit/editorSon11',
                component: homePage,
                name: 'editor2',
                class: 'fa fa-ravelry',
                children: [{
                    path: '/main/edit/editorSon111',
                    component: homePage,
                    name: 'editor3',
                    class: 'fa fa-ravelry'
                }]
            }]
        },
        {
            path: '/main/form',
            component: aboutPage,
            name: 'form',
            class: 'fa fa-ravelry'
        },
        {
            path: '/main/tabs',
            component: tabs,
            name: 'tabs',
            class: 'fa fa-ravelry',
            children: [{
                path: '/main/tabs/aboutPage',
                component: aboutPage,
                name: 'tabs',
                hidden: true
            }]
        }
    ]
}, {
    path: "/login",
    name: 'login',
    component: login
}, {
    path: "/404",
    name: '404',
    component: page404
}, {
    path: '*',
    redirect: '/main'
}];

let router = new Router({
    // 'mode': 'history',
    'linkActiveClass': 'active',
    routes
});
export default router;