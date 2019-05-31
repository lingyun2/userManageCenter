import Vue from 'vue'
import Vuex from 'vuex'

//使用vuex
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 1
	},
	getters: {
		getStateCount: (state) => {
			return state.count+3;
		}
	},
	mutations: {
		add:　(state) => {
			return state.count = state.count+1;
		}
	},			
	actions: {	
		addCount: (context) => {
			context.commit('add');
		}			
	}			
})

export default store   //导出store