const state = {
  name: 'sqrtcat',
  age: 25
}
const mutations = {
  setUserName (state, name) {
    state.name = name
  },
  setUserAge (state, age) {
    state.age = age
  }
}
const actions = {}
const getters = {}
export default {state, mutations, actions, getters}
