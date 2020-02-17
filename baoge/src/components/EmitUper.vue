<template>
  <div>
    <p>{{ total }}</p>
    <my-button4 @increment1="incrementTotal1"></my-button4>     <!--自定义方法increment1监听子组件触发情况-->
    <my-button4 @increment2="incrementTotal2"></my-button4>     <!--自定义方法increment2监听子组件触发情况-->
  </div>
</template>

<script>
import myButton4 from '@/components/myButton4.vue'

export default {
  data () {
    return {
      total: 0
    }
  },
  methods: {
    incrementTotal1: function () {
      this.total += 1
    },
    incrementTotal2: function () {
      this.total += 2
    }
  },
  components: {
    myButton4
  }
}
</script>
