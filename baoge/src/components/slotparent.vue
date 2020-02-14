<template>
  <div>
    <h2>首页</h2>
    <router-link to="/home/details">跳转到详情</router-link>
    <p>父组件</p>
    <slotshow>
      <p slot="my-header">我是头部</p>
      <p slot="my-body">{{msg}}</p>
      <p slot="my-footer">我是尾部</p>

      <template scope="props">
        <p>hello from parent</p>
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
      msg: '来自父组件的字符串'
    }
  },
  components: {
    slotshow
  }
}
</script>
