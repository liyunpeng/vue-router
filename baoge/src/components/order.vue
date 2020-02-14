<template>
  <div>

      <button class="primary" @click="setUserName('big_cat')">setUserName</button>
      <button class="primary" @click="setUserAge(27)">setUserAge</button>
      <button class="primary" @click="setOrderName('yes')">setOrderName</button>
      <button class="primary" @click="setHasLogin(true)">setHasLogin</button>
      <button class="primary" @click="setToken('tokentokentokentoken')">setToken</button>
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
    // 原生
    hasLogin () {
      return this.$store.state.hasLogin
    },
    token () {
      return this.$store.state.token
    },
    // 仓库root属性 可以直接 magic 赋值
    // ...mapState(["hasLogin", "token"]),
    // 因为 modules 下的属性使用了命名空间 所以不能使用数组方式的 magic
    ...mapState({
      userName: state => state.user.name,
      userAge: state => state.user.age,
      orderName: state => state.order.name
    })
    // ...mapState({
    //   hasLogin (state) {
    //     return state.hasLogin
    //   },
    //   token (state) {
    //     return state.token
    //   }
    // })
  },
  methods: {
    // vuex 在使用了 modules 模式时
    // mutation依然没有命名空间的概念 所以在定义 mutations 时要注意全局的唯一性
    // 否则后者会覆盖前者
    // ...mapMutations(['setHasLogin', 'setToken']),
    // template click引用的名字和store mutations里的定义的名字，如果完全相等，可以不用谢commit函数调用
    ...mapMutations(['setUserName', 'setUserAge', 'setOrderName']),
    // magic style2
    // ...mapMutations({
    //   setUserName (commit, userName) {
    //     commit('storesetUserName', userName)
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
