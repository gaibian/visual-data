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
    center:[121.55,29.87]
  },
  modules: {
    app,
    user
  },
  getters,
  actions: {
    setTime({ commit }, data) {
      commit('setTime',data)
    },
    setCenter({ commit }, data) {
      commit('setCenter',data)
    }
  },
  mutations: {
    setTime(state, data) {
      state.dateTime = data
    },
    setCenter(state, data) {
      console.log(data)
      state.center = data
    }
  }
})

export default store
