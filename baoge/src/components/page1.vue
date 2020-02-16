<template>
  <div>page1的值是::{{number}}</div>
</template>

<script>
import {mixin} from '../mixin/mixin'
export default {
  // 这里注意：属性名为mixins，值为数组类型
  mixins: [ mixin ],
  data () {
    return {
      number: 10
    }
  },
  mounted () {
    this.demo1()
  },
  methods: {
    demo1 () {
      console.log('这里是page1')
    }
  }
}
</script>

<style scoped>

</style>
