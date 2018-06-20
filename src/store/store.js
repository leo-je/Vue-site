/* jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        collapsed:false,
        options: [{name:"首页",path:"/index"}],
        activeIndex: '/index',
        user: {name:"游客"},
        cachedViews:["首页"]
    },
    mutations: {
        add_tabs(state, view) {
            let flag = false;
            for(let option of this.state.options){
                if(option.name == view.name){
                    flag = true;
                    this.state.activeIndex = view.path;
                    break;
                }
            }
            if (!flag) {
                this.state.options.push(view);
                this.state.cachedViews.push(view.name);
                this.state.activeIndex = view.path;
            }
            // this.state.options.push(view);
            // this.state.cachedViews.push(view.name);
        },
        del_tabs(state, data) {
            let index = 0;
            for (let option of state.options) {
                if (option.path === data) {
                    break;
                }
                index++;
            }
            this.state.options.splice(index, 1);
            this.state.cachedViews.splice(index,1);
        },
        set_act_tab(state, data) {
            this.state.activeIndex = data;
        }
    }
});

export default store;