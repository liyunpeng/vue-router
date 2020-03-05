<template>
  <div>
    <p>{{ total }}</p>
    <p>{{ tip }}</p>
    <my-button-4 @increment1="incrementTotal1"></my-button-4>     <!--自定义方法increment1监听子组件触发情况-->
    <my-button-4 @increment2="incrementTotal2"></my-button-4>     <!--自定义方法increment2监听子组件触发情况-->
  </div>
</template>

<script>
import myButton4 from '@/components/myButton5.vue'
import axios from 'axios'
export default {
  data () {
    return {
      total: 0,
      tip: ''
    }
  },
  methods: {
    incrementTotal1: function () {
      axios.post(`http://localhost:8082/api/database/create`).then(res => {
        this.total += 1
        this.tip = '初始化数据库建表完成'
      })
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
