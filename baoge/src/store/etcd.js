const state = {
  key: '192.168.0.1'
}
const mutations = {
  setEtcdKey (state, name) {
    state.key = name
  }
}
const getters = {}
export default {state, mutations, getters}
