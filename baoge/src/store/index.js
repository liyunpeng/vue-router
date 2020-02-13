import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  actions: {
    actionNumAdd () {
      console.log('map action ')
    }
  }
})

export default store
