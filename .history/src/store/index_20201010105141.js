import Vue from 'vue';
import Vuex from 'vuex';
import state from './modules/state'



Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        count: [
            { key: 1, name: 'a' },
            { key: 2, name: 'b' },
        ],
        menus: [
            {
                menuTitle: "计划表",
                index: 1,
            },
            {
                menuTitle: "日记",
                index: 2,
            },
            {
                menuTitle: "游戏",
                index: 3,
            },
        ]
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
});

export default store;
