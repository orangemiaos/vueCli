import Vue from 'vue';
import Vuex from 'vuex';
import state from './modules/state'

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
});

export default store;
