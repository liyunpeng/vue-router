<template>
    <div>
        <MyChild :parentMessage="parentMessage"></MyChild>
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
      parentMessage: '我是来自父组件的消息'
    }
  }
}
</script>
