<template>
  <div>
    <h2>首页</h2>
    <router-link to="/home/details">跳转到详情</router-link>
    <p>父组件</p>
    <slotshow>
      <p>{{msg}}</p>
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
