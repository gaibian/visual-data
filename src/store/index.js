import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)


//数据加载完成需要通过vuex来实现
const store = new Vuex.Store({
  state: {
    dateTime:'1月3号 - 5月4号',
  },
  modules: {
    app,
    user
  },
  getters,
  actions: {
    setTime({ commit }, data) {
      commit('setTime',data)
    }
  },
  mutations: {
    setTime(state, data) {
      state.dateTime = data
      
    }
  }
})

export default store
