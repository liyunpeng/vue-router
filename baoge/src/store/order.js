const state = {
  name: 'cart',
  count: 0
}
const mutations = {
  setOrderName (state, name) {
    state.name = name
  },
  setOrderCount (state, count) {
    state.count = count
  }
}
const actions = {

}
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
