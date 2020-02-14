<template>
  <div>
    <h2>首页</h2>
    <router-link to="/home/details">跳转到详情</router-link>
    <p>父组件</p>
    <slotshow>
      <template v-slot:my-header>
        v-slot:写法
      </template>
      <p slot="my-header">被前面的v-slot:my-header覆盖</p>
      <p slot="my-body">my-body:{{msg}}</p>
      <p slot="my-footer">我是尾部</p>

      <template scope="props">
        <p>hello from parent123</p>
        <p>{{ props.chinldToParent }}</p>
      </template>

    </slotshow>
  </div>
</template>

<script>
import slotshow from '../components/slotshow'
export default{
  data () {
    return {
      msg: '来自slot父组件的字符串',
      user: [
        {lastName: 'abc'}
      ]
    }
  },
  components: {
    slotshow
  }
}
</script>
