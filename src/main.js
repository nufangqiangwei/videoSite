import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Vuex);

Vue.use(Element)
// 创建一个新的 store 实例
const store = new Vuex.Store({
    state :{
            timeFilter: {min:30,max:60}
    },
    mutations: {
        changeTimeFilter (state, value) {
            state.timeFilter.min = value.min
            state.timeFilter.max = value.max
        },
        getTimeFilter (state) {
            return state.timeFilter
        }
    }
})



new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
