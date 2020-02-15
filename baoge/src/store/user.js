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
  },
  promiseFunc () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log('执行完成')
        resolve('随便什么数据')
      }, 500)
    })
  }
}
const actions = {}
const getters = {}
export default {state, mutations, actions, getters}
