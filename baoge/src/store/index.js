import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import order from './order'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    order
  },
  state: {
    count: 1,
    hasLogin: false,
    token: 'token string'
  },
  mutations: {
    changeIsHome (state) {
      state.isHome = false
      console.log('mutations ')
    }
  },
  actions: {
    actionNumAdd () {
      console.log('map action ')
    }
  }
})

export default store
