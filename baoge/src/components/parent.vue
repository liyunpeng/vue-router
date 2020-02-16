<template>
    <div>
        <MyChild :parentMessage="var1"></MyChild>
      <el-input v-model="inputData" placeholder="Please input" style="width:400px;max-width:100%;" />
    </div>
</template>

<script>
import MyChild from '@/components/MyChild'

export default {
  components: {
    MyChild
  },
  data () {
    return {
      var1: '我是来自父组件的消息'
    }
  }
}
</script>
