<template>
  <div>

      <button class="primary" @click="setUserName('template set user name')">setUserName</button>
      <button class="primary" @click="setUserAge(27)">setUserAge</button>
      <button class="primary" @click="setOrderName('template set order name')">setOrderName</button>
      <button class="primary" @click="setHasLogin(true)">setHasLogin</button>
      <button class="primary" @click="setToken('tokentokentokentoken')">setToken</button>
      <button class="primary" @click="promiseFunc('123')">promiseFunc</button>
      <button class="primary" @click="promiseFunc1('123')">promiseFunc1</button>
      <p>{{userName}}</p>
      <p>{{userAge}}</p>
      <p>{{orderName}}</p>
      <p>haslogin: {{hasLogin}}</p>
      <p>token: {{token}}</p>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState({
      userName: state => state.user.name,
      userAge: state => state.user.age,
      orderName: state => state.order.name
    }),
    ...mapState({
      hasLogin (state) {
        return state.hasLogin
      },
      token (state) {
        return state.token
      }
    })
    // hasLogin 和token的原生写法：
    // hasLogin () {
    //   return this.$store.state.hasLogin
    // },
    // token () {
    //   return this.$store.state.token
    // },
  },
  methods: {
    // ...mapMutations 有两种写法
    // 1. 简洁写法： template click引用的名字和store mutations里的定义的名字，如果完全相等，可以不用谢commit函数调用
    ...mapMutations(['setUserName', 'setUserAge', 'setOrderName', 'promiseFunc', 'promiseFunc1'])
    // 2. 函数式写法：
    // ...mapMutations({
    //   setUserName (commit, userName) {
    //     commit('setUserName', userName)
    //   },
    //   setUserAge (commit, userAge) {
    //     commit('setUserAge', userAge)
    //   },
    //   setOrderName (commit, orderName) {
    //     commit('setOrderName', orderName)
    //   }
    // })
    // // 原生写法
    // setUserName (userName) {
    //   this.$store.commit('setUserName', userName)
    // },
    // setUserAge (userAge) {
    //   this.$store.commit('setUserAge', userAge)
    // },
    // setOrderName (orderName) {
    //   this.$store.commit('setOrderName', orderName)
    // }
  }
}
</script>
